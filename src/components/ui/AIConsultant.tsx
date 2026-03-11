import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const INITIAL_MESSAGE = "Hi. I'm Alex, senior consultant at Incluence. What are you looking to set up — a license, offshore structure, or ready-made company?";

const QUICK_REPLIES = ["Gambling License", "Crypto/VASP", "Offshore Company", "Ready-Made"];

type Msg = { role: "user" | "assistant"; content: string };

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

  // Lead capture after 4 user messages
  useEffect(() => {
    const userCount = messages.filter((m) => m.role === "user").length;
    if (userCount >= 4 && !leadCaptured) {
      setLeadCaptured(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "To prepare specific options for your case — can I get your email? I'll send a detailed breakdown within a few hours.",
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

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { messages: newMessages },
      });

      if (error) throw error;

      const reply = data?.choices?.[0]?.message?.content ?? "Sorry, something went wrong.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection issue. Please try again or email us at info@incluence.net",
        },
      ]);
    }
    setLoading(false);
  };

  const handleQuickReply = (q: string) => {
    setInput(q);
    sendMessage(q);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[200] relative w-12 h-12 bg-[#444CE7] hover:bg-[#3538CD] flex items-center justify-center transition-colors duration-200 cursor-pointer"
        style={{ boxShadow: "none", borderRadius: 0 }}
      >
        <span
          className="absolute inset-0 bg-[#444CE7]"
          style={{
            animation: "chat-pulse 2s ease-out infinite",
            borderRadius: 0,
          }}
        />
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" className="relative z-10">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <style>{`
          @keyframes chat-pulse {
            0% { transform: scale(1); opacity: 0.5; }
            100% { transform: scale(1.6); opacity: 0; }
          }
        `}</style>
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-[200] flex flex-col bg-[#0d0d0d] border border-white/[0.08]"
      style={{
        width: 380,
        height: 520,
        fontFamily: "Manrope, sans-serif",
        borderRadius: 0,
        boxShadow: "none",
        animation: "chat-in 0.2s ease forwards",
      }}
    >
      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typing-dot {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
      `}</style>

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 bg-[#444CE7] flex items-center justify-center text-[#F0EBE0] text-[13px] font-medium"
            style={{ borderRadius: 0 }}
          >
            A
          </div>
          <div>
            <div className="text-[13px] text-[#F0EBE0] font-medium leading-tight">
              Alex · Incluence
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="text-[10px] text-[#5A5550]">Online</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="text-[#5A5550] hover:text-[#9A9590] transition-colors cursor-pointer bg-transparent border-0 text-[18px] leading-none"
        >
          ×
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: "thin" }}>
        {/* Initial hardcoded message */}
        <div className="flex gap-2.5 items-start">
          <div
            className="w-6 h-6 bg-[#444CE7] flex items-center justify-center text-[#F0EBE0] text-[10px] font-medium flex-shrink-0 mt-0.5"
            style={{ borderRadius: 0 }}
          >
            A
          </div>
          <div className="bg-[#111111] border border-white/[0.06] px-3 py-2 max-w-[85%]" style={{ borderRadius: 0 }}>
            <p className="text-[13px] text-[#F0EBE0] leading-relaxed m-0">{INITIAL_MESSAGE}</p>
          </div>
        </div>

        {/* Dynamic messages */}
        {messages.map((m, i) =>
          m.role === "assistant" ? (
            <div key={i} className="flex gap-2.5 items-start">
              <div
                className="w-6 h-6 bg-[#444CE7] flex items-center justify-center text-[#F0EBE0] text-[10px] font-medium flex-shrink-0 mt-0.5"
                style={{ borderRadius: 0 }}
              >
                A
              </div>
              <div className="bg-[#111111] border border-white/[0.06] px-3 py-2 max-w-[85%]" style={{ borderRadius: 0 }}>
                <p className="text-[13px] text-[#F0EBE0] leading-relaxed m-0">{m.content}</p>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="bg-[#444CE7]/10 border border-[#444CE7]/20 px-3 py-2 max-w-[85%]" style={{ borderRadius: 0 }}>
                <p className="text-[13px] text-[#F0EBE0] leading-relaxed m-0">{m.content}</p>
              </div>
            </div>
          )
        )}

        {/* Loading indicator */}
        {loading && (
          <div className="flex gap-2.5 items-start">
            <div
              className="w-6 h-6 bg-[#444CE7] flex items-center justify-center text-[#F0EBE0] text-[10px] font-medium flex-shrink-0 mt-0.5"
              style={{ borderRadius: 0 }}
            >
              A
            </div>
            <div className="flex gap-1 items-center px-3 py-2">
              {[0, 1, 2].map((j) => (
                <span
                  key={j}
                  className="w-1.5 h-1.5 bg-[#5A5550]"
                  style={{
                    borderRadius: 0,
                    animation: `typing-dot 1.2s ease infinite ${j * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* QUICK REPLIES */}
      {messages.length === 0 && (
        <div className="flex flex-wrap gap-1.5 px-4 pb-2">
          {QUICK_REPLIES.map((q) => (
            <button
              key={q}
              onClick={() => handleQuickReply(q)}
              className="text-[11px] text-[#9A9590] border border-white/[0.08] hover:border-[#444CE7]/40 hover:text-[#F0EBE0] px-3 py-1.5 transition-all duration-150 cursor-pointer bg-transparent"
              style={{ borderRadius: 0 }}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* INPUT */}
      <div className="px-4 py-3 border-t border-white/[0.08]">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask about licenses, pricing, timelines..."
            className="flex-1 bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[13px] placeholder:text-[#5A5550] px-3 py-2.5 outline-none transition-colors"
            style={{ borderRadius: 0, fontFamily: "Manrope, sans-serif" }}
          />
          <button
            onClick={() => sendMessage()}
            className="w-10 h-10 bg-[#444CE7] hover:bg-[#3538CD] flex items-center justify-center transition-colors cursor-pointer border-0"
            style={{ borderRadius: 0 }}
            disabled={loading || !input.trim()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <div className="text-[9px] text-[#5A5550]/60 mt-2 text-center">
          Incluence · Senior Legal Consultant
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
