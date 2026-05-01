import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { serviceFromPath, useConsultation, ServiceInterest } from "@/hooks/useConsultation";
import { useLeadForm } from "@/hooks/useLeadForm";
import { ArrowRight, Send, Phone, Mail, Check } from "lucide-react";

const SERVICE_OPTIONS: ServiceInterest[] = [
  "Crypto / MiCA",
  "Forex",
  "EMI / PSP",
  "Gambling",
  "Company Formation",
  "Banking & Merchant",
  "Buy Ready-Made Company",
  "Other",
];

const TG_URL = "https://t.me/incluence";
const WA_URL = "https://wa.me/37281703037";
const EMAIL = "info@incluence.net";
const PHONE_DISPLAY = "+852 8192 6676";
const PHONE_HREF = "tel:+85281926676";

const FONT = "Manrope, sans-serif";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "#080808",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#F0EBE0",
  padding: "11px 14px",
  fontSize: 14,
  borderRadius: 0,
  outline: "none",
  fontFamily: FONT,
  transition: "border-color 0.2s",
};
const labelStyle: React.CSSProperties = {
  fontSize: 10, color: "#5A5550", textTransform: "uppercase",
  letterSpacing: "0.1em", marginBottom: 6, display: "block",
};

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

const ConsultationDialog = () => {
  const { isOpen, defaultService, close } = useConsultation();
  const location = useLocation();
  const { submitLead, submitting } = useLeadForm();
  const formRef = useRef<HTMLFormElement>(null);
  const [service, setService] = useState<ServiceInterest>(defaultService);
  const [done, setDone] = useState(false);
  const selectedService = service || (isOpen ? defaultService || serviceFromPath(location.pathname) : "");

  useEffect(() => {
    if (isOpen) {
      setService(defaultService || serviceFromPath(location.pathname));
      setDone(false);
    }
  }, [isOpen, defaultService, location.pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const d = new FormData(form);
    const ok = await submitLead({
      name: (d.get("name") as string) || "",
      email: (d.get("email") as string) || "",
      phone: (d.get("phone") as string) || "",
      service: selectedService || (d.get("service") as string) || "",
      message: (d.get("message") as string) || "",
    });
    if (ok) {
      try { window.gtag?.("event", "lead_submit", { service: selectedService || "unspecified" }); } catch { /* noop */ }
      setDone(true);
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => { if (!o) close(); }}>
      <DialogContent
        className="border-white/[0.08] p-5 sm:p-7 max-w-[480px] w-[calc(100%-2rem)] max-h-[92vh] overflow-y-auto"
        style={{ background: "#0a0a0a", fontFamily: FONT }}
      >
        <DialogHeader>
          <DialogTitle className="text-[#F0EBE0] text-[18px] sm:text-[20px] font-light tracking-tight">
            {done ? "Request received" : "Get Free Consultation"}
          </DialogTitle>
          <p className="text-[#9A9590] text-[12px] mt-1">
            {done
              ? "Thanks! Our consultant will reply within 24h."
              : "Tell us about your project — we'll reply within 24h."}
          </p>
        </DialogHeader>

        {done ? (
          <div className="mt-4 flex flex-col" style={{ gap: 16 }}>
            <div className="flex items-center gap-2 text-[#12B76A] text-[13px]">
              <Check size={16} /> Message delivered
            </div>
            <p className="text-[#9A9590] text-[12px] leading-relaxed">
              Want a faster response? Reach us directly:
            </p>
            <DirectContacts />
            <button
              onClick={close}
              className="w-full cursor-pointer border-0 mt-2"
              style={{
                background: "transparent", color: "#9A9590",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "12px", fontSize: 11, letterSpacing: "0.1em",
                textTransform: "uppercase", fontFamily: FONT,
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-4 flex flex-col" style={{ gap: 12 }}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input name="name" required maxLength={100} placeholder="Your name" style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" name="email" required maxLength={255} placeholder="you@company.com" style={fieldStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  maxLength={32}
                  placeholder="+44 20 ..."
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Service of interest *</label>
                <select
                  name="service"
                  value={selectedService}
                  onChange={(e) => setService(e.target.value as ServiceInterest)}
                  required
                  style={{ ...fieldStyle, appearance: "none" }}
                >
                  <option value="" disabled>Select a service…</option>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={1000}
                  placeholder="Target markets, timeline, requirements…"
                  style={{ ...fieldStyle, resize: "none" }}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full cursor-pointer border-0 flex items-center justify-center gap-2"
                style={{
                  background: "#444CE7", color: "#fff",
                  padding: "13px", fontSize: 12, fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: FONT, opacity: submitting ? 0.5 : 1,
                  marginTop: 4,
                }}
              >
                {submitting ? "Sending…" : "Send Request"} <ArrowRight size={13} />
              </button>
            </form>

            <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ ...labelStyle, marginBottom: 10 }}>Or reach us directly</div>
              <DirectContacts />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const DirectContacts = () => (
  <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
    <a href={TG_URL} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 no-underline"
      style={{ background: "#0a0a0a", padding: "12px 14px", color: "#F0EBE0", fontSize: 12 }}>
      <Send size={14} className="text-[#444CE7]" /> Telegram
    </a>
    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 no-underline"
      style={{ background: "#0a0a0a", padding: "12px 14px", color: "#F0EBE0", fontSize: 12 }}>
      <Phone size={14} className="text-[#12B76A]" /> WhatsApp
    </a>
    <a href={`mailto:${EMAIL}`}
      className="flex items-center gap-2 no-underline"
      style={{ background: "#0a0a0a", padding: "12px 14px", color: "#F0EBE0", fontSize: 12 }}>
      <Mail size={14} className="text-[#9A9590]" /> {EMAIL}
    </a>
    <a href={PHONE_HREF}
      className="flex items-center gap-2 no-underline"
      style={{ background: "#0a0a0a", padding: "12px 14px", color: "#F0EBE0", fontSize: 12 }}>
      <Phone size={14} className="text-[#9A9590]" /> {PHONE_DISPLAY}
    </a>
  </div>
);

export default ConsultationDialog;
