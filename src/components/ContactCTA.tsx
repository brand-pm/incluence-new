import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Gambling License",
  "Crypto / VASP License",
  "EMI or PSP License",
  "Company Formation",
  "Investment License",
  "Ready Made Company",
  "Other",
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "#080808",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#F0EBE0",
  padding: "12px 16px",
  fontSize: 14,
  borderRadius: 0,
  outline: "none",
  fontFamily: "Manrope, sans-serif",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontSize: 11, color: "#5A5550", textTransform: "uppercase",
  letterSpacing: "0.08em", marginBottom: 6, display: "block",
};

const ContactCTA = () => {
  const [focused, setFocused] = useState<string | null>(null);

  const focusBorder = (name: string): React.CSSProperties =>
    focused === name ? { borderColor: "rgba(68,76,231,0.5)" } : {};

  return (
    <section className="relative" style={{ background: "linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)", padding: "96px 48px" }}>
      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(233 84% 60% / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 relative" style={{ gap: 96, zIndex: 1 }}>
        {/* LEFT — Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag" style={{ marginBottom: 12 }}>Get In Touch</div>
          <h2 style={{
            fontFamily: "Manrope, sans-serif", fontSize: 40, fontWeight: 300,
            color: "#F0EBE0", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
          }}>
            Start your project with a free consultation
          </h2>
          <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, marginBottom: 40 }}>
            Tell us about your business and we'll identify the optimal jurisdiction, structure,
            and licensing path — at no cost.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Phone</div>
              <a href="tel:+85281926676" style={{ fontSize: 15, color: "#F0EBE0", textDecoration: "none" }}>+852 8192 6676</a>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Email</div>
              <a href="mailto:info@incluence.net" className="hover:underline" style={{ fontSize: 15, color: "#444CE7", textDecoration: "none" }}>info@incluence.net</a>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Office</div>
              <p style={{ fontSize: 14, color: "#9A9590", margin: 0, lineHeight: 1.6 }}>
                Rm 7B, One Capital Place, 18 Luard Road,<br />Wan Chai, Hong Kong
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center" style={{ gap: 20 }}>
            {[
              { label: "Instagram", href: "#", icon: "M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-2.5a1 1 0 100 2 1 1 0 000-2z" },
              { label: "Telegram", href: "#", icon: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" },
              { label: "WhatsApp", href: "#", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{ color: "#5A5550", transition: "color 0.2s" }}
                className="hover:!text-foreground"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          style={{
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: 40,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form
            className="flex flex-col"
            style={{ gap: 16 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label style={labelStyle}>Name</label>
              <input
                placeholder="Your name"
                style={{ ...fieldStyle, ...focusBorder("name") }}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div>
              <label style={labelStyle}>Company</label>
              <input
                placeholder="Company name (optional)"
                style={{ ...fieldStyle, ...focusBorder("company") }}
                onFocus={() => setFocused("company")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                required
                placeholder="Email address"
                style={{ ...fieldStyle, ...focusBorder("email") }}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div>
              <label style={labelStyle}>Service Interest</label>
              <select
                style={{ ...fieldStyle, ...focusBorder("service"), appearance: "none" }}
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused(null)}
                defaultValue=""
              >
                <option value="" disabled>Select a service...</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                rows={4}
                placeholder="Describe your project briefly"
                style={{ ...fieldStyle, ...focusBorder("message"), resize: "none" }}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%", background: "#444CE7", color: "#fff",
                padding: 15, fontSize: 13, fontWeight: 500,
                letterSpacing: "0.1em", textTransform: "uppercase",
                border: "none", cursor: "pointer", fontFamily: "Manrope, sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              Send Message <ArrowRight size={14} />
            </button>
            <p style={{ fontSize: 11, color: "#5A5550", textAlign: "center", margin: 0 }}>
              Typically respond within 2 business hours
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
