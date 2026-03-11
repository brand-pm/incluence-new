import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import NodePulse from "@/components/NodePulse";

const serviceOptions = [
  "Gambling License",
  "Crypto / VASP License",
  "EMI or PSP License",
  "Forex License",
  "Company Formation",
  "Bank Account Opening",
  "Investment License",
  "Ready Made Company",
  "Other",
];

const contactChannels = [
  {
    icon: Phone,
    label: "Phone",
    value: "+852 8192 6676",
    href: "tel:+85281926676",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@incluence.net",
    href: "mailto:info@incluence.net",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Rm 7B, One Capital Place, 18 Luard Road, Wan Chai, Hong Kong",
    href: null,
  },
  {
    icon: Clock,
    label: "Working hours",
    value: "Mon – Fri, 09:00 – 18:00 HKT",
    href: null,
  },
];

const messengerChannels = [
  { label: "Telegram", handle: "@incluence", href: "https://t.me/incluence" },
  { label: "WhatsApp", handle: "+372 8170 3037", href: "https://wa.me/37281703037" },
];

const trustItems = [
  "Response within 2 business hours",
  "Free initial consultation",
  "Confidential — NDA available on request",
];

/* ── FORM STYLES ── */

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
  fontSize: 11,
  color: "#5A5550",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: 6,
  display: "block",
};

/* ── PAGE ── */

const ContactPage = () => {
  const [focused, setFocused] = useState<string | null>(null);

  const focusBorder = (name: string): React.CSSProperties =>
    focused === name ? { borderColor: "rgba(68,76,231,0.5)" } : {};

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <div
        style={{
          background: "#080808",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "14px 48px",
        }}
      >
        <div className="mx-auto max-w-[1280px] flex items-center" style={{ gap: 8 }}>
          <Link
            to="/"
            style={{ fontSize: 12, color: "#5A5550", textDecoration: "none", fontFamily: "Manrope, sans-serif" }}
            className="hover:!text-[#F0EBE0]"
          >
            Incluence
          </Link>
          <ChevronRight size={11} style={{ color: "#333" }} />
          <span style={{ fontSize: 12, color: "#9A9590", fontFamily: "Manrope, sans-serif" }}>
            Contact
          </span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{ background: "#080808", padding: "80px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>Contact Us</div>
            <h1
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 300,
                color: "#F0EBE0",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                maxWidth: 700,
              }}
            >
              Let's discuss your project
            </h1>
            <p style={{ fontSize: 16, color: "#9A9590", lineHeight: 1.8, maxWidth: 560 }}>
              Schedule a free consultation with our experts. We'll analyze your business needs
              and recommend the optimal licensing and structuring strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM + INFO ── */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12" style={{ gap: 64 }}>
          {/* Left — Form */}
          <motion.div
            className="lg:col-span-7"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: 40,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 22,
                fontWeight: 400,
                color: "#F0EBE0",
                marginBottom: 24,
              }}
            >
              Send us a message
            </h2>
            <form
              className="flex flex-col"
              style={{ gap: 16 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    required
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
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16 }}>
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
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    style={{ ...fieldStyle, ...focusBorder("phone") }}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
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
                <label style={labelStyle}>Message *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your project"
                  style={{ ...fieldStyle, ...focusBorder("message"), resize: "none" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#444CE7",
                  color: "#fff",
                  padding: 15,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Send Message <ArrowRight size={14} />
              </button>
              <p style={{ fontSize: 11, color: "#5A5550", textAlign: "center", margin: 0 }}>
                Typically respond within 2 business hours
              </p>
            </form>
          </motion.div>

          {/* Right — Contact info */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Contact channels */}
            <div className="flex flex-col" style={{ gap: 28, marginBottom: 40 }}>
              {contactChannels.map((ch) => (
                <div key={ch.label} className="flex items-start" style={{ gap: 14 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(68,76,231,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <ch.icon size={16} style={{ color: "#444CE7" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#5A5550",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 4,
                      }}
                    >
                      {ch.label}
                    </div>
                    {ch.href ? (
                      <a
                        href={ch.href}
                        style={{
                          fontSize: 15,
                          color: ch.label === "Email" ? "#444CE7" : "#F0EBE0",
                          textDecoration: "none",
                          fontFamily: "Manrope, sans-serif",
                        }}
                        className="hover:underline"
                      >
                        {ch.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: 14,
                          color: "#9A9590",
                          margin: 0,
                          lineHeight: 1.6,
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        {ch.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Messenger channels */}
            <div
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: 24,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#5A5550",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 16,
                }}
              >
                Instant messengers
              </div>
              <div className="flex flex-col" style={{ gap: 14 }}>
                {messengerChannels.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    style={{
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: 13, color: "#F0EBE0", fontFamily: "Manrope, sans-serif" }}>
                        {m.label}
                      </span>
                      <span style={{ fontSize: 12, color: "#5A5550", marginLeft: 8 }}>{m.handle}</span>
                    </div>
                    <ArrowRight size={13} style={{ color: "#444CE7" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col" style={{ gap: 14 }}>
              {trustItems.map((item) => (
                <div key={item} className="flex items-start" style={{ gap: 12 }}>
                  <div style={{ marginTop: 2 }}>
                    <NodePulse />
                  </div>
                  <span style={{ fontSize: 14, color: "#F0EBE0", lineHeight: 1.5, fontFamily: "Manrope, sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ / QUICK ANSWERS ── */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          <div className="section-tag" style={{ marginBottom: 12 }}>Common Questions</div>
          <h2
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 300,
              color: "#F0EBE0",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 40,
            }}
          >
            Before you reach out
          </h2>

          <div
            style={{ background: "rgba(255,255,255,0.06)" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
          >
            {[
              {
                q: "How quickly will I get a response?",
                a: "We respond to all inquiries within 2 business hours during working days (Mon–Fri, 09:00–18:00 HKT). For urgent matters, use Telegram or WhatsApp for instant contact.",
              },
              {
                q: "Is the initial consultation free?",
                a: "Yes. The first consultation is completely free and carries no obligation. We'll assess your situation and provide initial recommendations at no cost.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Absolutely. We provide NDA agreements upon request before any detailed discussion of your business. Client confidentiality is fundamental to our practice.",
              },
              {
                q: "What information should I prepare?",
                a: "A brief description of your business model, target markets, and the type of license or service you're interested in. We'll guide you through the rest during the consultation.",
              },
            ].map((faq) => (
              <div key={faq.q} style={{ background: "#111111", padding: 28 }}>
                <h3
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#F0EBE0",
                    marginBottom: 8,
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
