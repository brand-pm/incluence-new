import { useState, useEffect, useRef } from "react";
import alexAvatar from "@/assets/alex-avatar.jpg";

const INITIAL_MESSAGE = "Hi. I'm Alex, senior consultant at Incluence. What are you looking to set up — a license, offshore structure, or ready-made company?";
const QUICK_REPLIES = ["Gambling License", "Crypto/VASP", "Offshore Company", "Ready-Made"];

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok || !resp.body) throw new Error("Failed to start stream");

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;

  while (!done) {
    const { done: rDone, value } = await reader.read();
    if (rDone) break;
    buf += decoder.decode(value, { stream: true });

    let nl: number;
    while ((nl = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, nl);
      buf = buf.slice(nl + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { done = true; break; }
      try {
        const parsed = JSON.parse(json);
        const c = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (c) onDelta(c);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }

  // flush remainder
  if (buf.trim()) {
    for (let raw of buf.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (!raw.startsWith("data: ")) continue;
      const json = raw.slice(6).trim();
      if (json === "[DONE]") continue;
      try {
        const p = JSON.parse(json);
        const c = p.choices?.[0]?.delta?.content as string | undefined;
        if (c) onDelta(c);
      } catch { /* skip */ }
    }
  }

  onDone();
}

const AIConsultant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const userCount = messages.filter((m) => m.role === "user").length;
    if (userCount >= 4 && !leadCaptured) {
      setLeadCaptured(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "To prepare specific options for your case — can I get your email? I'll send a detailed breakdown within a few hours.",
        },
      ]);
    }
  }, [messages, leadCaptured]);

  const sendMessage = async (overrideInput?: string) => {
    const text = (overrideInput ?? input).trim();
    if (!text || loading) return;

    const userMsg: Msg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && assistantSoFar.startsWith(last.content.slice(0, 10))) {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: newMessages,
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => setLoading(false),
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection issue. Please try again or email us at info@incluence.net" },
      ]);
      setLoading(false);
    }
  };

  const handleQuickReply = (q: string) => {
    setInput(q);
    sendMessage(q);
  };

  /* ─── CLOSED: Vertical tab on right edge, vertically centered ─── */
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[200] flex items-center gap-2.5 cursor-pointer group"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          padding: "14px 8px 14px 8px",
          background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
          border: "1px solid rgba(68,76,231,0.25)",
          borderRight: "none",
          borderRadius: 0,
          boxShadow: "none",
          fontFamily: "Manrope, sans-serif",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(68,76,231,0.6)";
          e.currentTarget.style.background = "linear-gradient(180deg, #161616 0%, #0d0d0d 100%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(68,76,231,0.25)";
          e.currentTarget.style.background = "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)";
        }}
      >
        {/* Avatar photo */}
        <img
          src={alexAvatar}
          alt="Alex"
          className="relative z-10 w-7 h-7 object-cover flex-shrink-0"
          style={{
            borderRadius: 0,
            border: "1px solid rgba(68,76,231,0.3)",
          }}
        />
        {/* Online dot */}
        <span
          className="relative z-10 w-1.5 h-1.5 flex-shrink-0"
          style={{
            background: "#34D399",
            boxShadow: "0 0 6px rgba(52,211,153,0.6)",
            borderRadius: "50%",
          }}
        />
        <span className="relative z-10 text-[#F0EBE0] text-[10px] font-medium tracking-[0.08em] uppercase">
          Ask Alex
        </span>
        {/* Subtle accent line */}
        <span
          className="absolute left-0 top-[20%] bottom-[20%] w-[2px]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #444CE7 50%, transparent 100%)",
          }}
        />
      </button>
    );
  }

  /* ─── OPEN: Chat panel ─── */
  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[200] flex flex-col"
      style={{
        width: 400,
        height: 560,
        fontFamily: "Manrope, sans-serif",
        borderRadius: 0,
        animation: "chat-slide-in 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
      }}
    >
      <style>{`
        @keyframes chat-slide-in {
          from { opacity: 0; transform: translate(20px, -50%); }
          to { opacity: 1; transform: translate(0, -50%); }
        }
        @keyframes typing-dot {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
      `}</style>

      {/* Outer shell with gradient border effect */}
      <div
        className="flex flex-col h-full overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
          border: "1px solid rgba(68, 76, 231, 0.2)",
          borderRight: "none",
          borderRadius: 0,
        }}
      >
        {/* ── HEADER ── */}
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{
            background: "linear-gradient(90deg, rgba(68,76,231,0.08) 0%, transparent 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 flex items-center justify-center text-white text-[13px] font-semibold"
              style={{
                background: "linear-gradient(135deg, #444CE7 0%, #6366F1 100%)",
                borderRadius: 0,
              }}
            >
              A
            </div>
            <div>
              <div className="text-[13px] text-[#F0EBE0] font-medium leading-tight">
                Alex · Incluence
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#34D399",
                    boxShadow: "0 0 6px rgba(52,211,153,0.5)",
                  }}
                />
                <span className="text-[10px] text-[#706B66]">Online now</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 flex items-center justify-center text-[#5A5550] hover:text-[#F0EBE0] hover:bg-white/[0.05] transition-all cursor-pointer bg-transparent border-0 text-[16px] leading-none"
            style={{ borderRadius: 0 }}
          >
            ✕
          </button>
        </div>

        {/* ── MESSAGES ── */}
        <div
          className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}
        >
          {/* Initial message */}
          <AssistantBubble text={INITIAL_MESSAGE} />

          {messages.map((m, i) =>
            m.role === "assistant" ? (
              <AssistantBubble key={i} text={m.content} />
            ) : (
              <div key={i} className="flex justify-end">
                <div
                  className="px-4 py-2.5 max-w-[82%]"
                  style={{
                    background: "rgba(68,76,231,0.12)",
                    border: "1px solid rgba(68,76,231,0.2)",
                    borderRadius: 0,
                  }}
                >
                  <p className="text-[13px] text-[#F0EBE0] leading-relaxed m-0">{m.content}</p>
                </div>
              </div>
            )
          )}

          {loading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex gap-2.5 items-start">
              <AvatarSmall />
              <div className="flex gap-1.5 items-center px-3 py-3">
                {[0, 1, 2].map((j) => (
                  <span
                    key={j}
                    className="w-1.5 h-1.5 bg-[#444CE7]"
                    style={{
                      borderRadius: 0,
                      animation: `typing-dot 1.2s ease infinite ${j * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ── QUICK REPLIES ── */}
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-1.5 px-5 pb-3">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => handleQuickReply(q)}
                className="text-[11px] text-[#9A9590] hover:text-[#F0EBE0] px-3 py-1.5 transition-all duration-150 cursor-pointer bg-transparent"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(68,76,231,0.4)";
                  e.currentTarget.style.background = "rgba(68,76,231,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* ── INPUT ── */}
        <div
          className="px-5 py-3.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask about licenses, pricing, timelines..."
              className="flex-1 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-3.5 py-2.5 outline-none transition-colors"
              style={{
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 0,
                fontFamily: "Manrope, sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(68,76,231,0.4)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            />
            <button
              onClick={() => sendMessage()}
              className="w-10 h-10 flex items-center justify-center transition-all cursor-pointer border-0"
              style={{
                background: loading || !input.trim() ? "#2a2a2a" : "#444CE7",
                borderRadius: 0,
              }}
              disabled={loading || !input.trim()}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <div className="text-[9px] text-[#5A5550]/50 mt-2 text-center tracking-wide">
            INCLUENCE · LEGAL CONSULTANT
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Sub-components ── */

const AvatarSmall = () => (
  <div
    className="w-6 h-6 flex items-center justify-center text-white text-[10px] font-semibold flex-shrink-0 mt-0.5"
    style={{
      background: "linear-gradient(135deg, #444CE7 0%, #6366F1 100%)",
      borderRadius: 0,
    }}
  >
    A
  </div>
);

const AssistantBubble = ({ text }: { text: string }) => (
  <div className="flex gap-2.5 items-start">
    <AvatarSmall />
    <div
      className="px-4 py-2.5 max-w-[85%]"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 0,
      }}
    >
      <p className="text-[13px] text-[#F0EBE0]/90 leading-relaxed m-0">{text}</p>
    </div>
  </div>
);

export default AIConsultant;
