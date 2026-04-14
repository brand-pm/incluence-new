import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import NodePulse from "@/components/NodePulse";
import { useLeadForm } from "@/hooks/useLeadForm";

/* ── DATA ── */

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: "+852 8192 6676",
    sub: "Mon–Fri, 9:00–18:00 HKT",
    href: "tel:+85281926676",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@incluence.net",
    sub: "name@ensul.com",
    href: "mailto:info@incluence.net",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@incluence",
    sub: "Fastest response",
    href: "https://t.me/incluence",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Write on WhatsApp",
    sub: "Available 24/7",
    href: "https://wa.me/85281926676",
  },
];

const offices = [
  {
    country: "United Kingdom",
    city: "London",
    address: "2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE",
    reg: "15743262",
  },
  {
    country: "Hong Kong",
    city: "Hong Kong",
    address: "Rm 7B, One Capital Place, 18 Luard Road, Wan Chai, Hong Kong",
    reg: "2940977",
  },
  {
    country: "United Arab Emirates",
    city: "RAK, UAE",
    address: "SICS Consultancy FZ-LLC, Ras Al Khaimah Free Zone, United Arab Emirates",
    reg: null,
  },
];

const serviceOptions = [
  "Gambling License",
  "Forex License",
  "Crypto / VASP License",
  "EMI License",
  "Payment Systems",
  "Bank Account Opening",
  "Offshore Company Formation",
  "Company Registration Abroad",
  "Investment Funds",
  "Residence Permit",
  "Buy a Business",
  "Tax & Reporting",
  "Legal Support",
  "Other",
];

const trustItems = [
  { title: "Free initial consultation", sub: "30 minutes with a senior attorney" },
  { title: "Response within 24 hours", sub: "On all business days" },
  { title: "NDA available on request", sub: "Full confidentiality guaranteed" },
];

/* ── STYLES ── */

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
  const formRef = useRef<HTMLFormElement>(null);
  const { submitLead, submitting } = useLeadForm();

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
        <div className="mx-auto max-w-screen-xl flex items-center" style={{ gap: 8 }}>
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
      <section style={{ background: "#080808", padding: "56px 48px" }}>
        <div className="mx-auto max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>Get in touch</div>
            <h1
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 300,
                color: "#F0EBE0",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                maxWidth: 500,
              }}
            >
              Let's discuss your project
            </h1>
            <p style={{ fontSize: 16, color: "#9A9590", lineHeight: 1.8, maxWidth: 500 }}>
              Reach us through any channel below. We respond within 24 hours on business days.
              For urgent matters — Telegram or WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CHANNELS STRIP ── */}
      <section style={{ background: "rgba(255,255,255,0.06)" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden block"
              style={{
                background: "#080808",
                padding: 28,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              {/* Bottom accent line on hover */}
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "#444CE7" }}
              />
              <ch.icon size={16} style={{ color: "#444CE7", marginBottom: 16 }} />
              <div
                style={{
                  fontSize: 10,
                  color: "#5A5550",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                }}
              >
                {ch.label}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#F0EBE0",
                  fontFamily: "Manrope, sans-serif",
                  marginBottom: 4,
                }}
              >
                {ch.value}
              </div>
              <div style={{ fontSize: 12, color: "#5A5550" }}>{ch.sub}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="section-tag" style={{ marginBottom: 12 }}>Our offices</div>
          <h2
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 300,
              color: "#F0EBE0",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 36,
            }}
          >
            Three jurisdictions, one team
          </h2>

          <div
            style={{ background: "rgba(255,255,255,0.06)" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
          >
            {offices.map((o) => (
              <div
                key={o.city}
                className="group relative overflow-hidden"
                style={{ background: "#111111", padding: 28 }}
              >
                {/* Bottom accent line on hover */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "#444CE7" }}
                />
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#F0EBE0",
                    fontFamily: "Manrope, sans-serif",
                    marginBottom: 4,
                  }}
                >
                  {o.city}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#9A9590",
                    lineHeight: 1.6,
                    margin: 0,
                    marginBottom: 16,
                  }}
                >
                  {o.address}
                </p>
                {o.reg && (
                  <span style={{ fontSize: 11, color: "#5A5550" }}>
                    Reg. {o.reg}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12" style={{ gap: 48 }}>
          {/* Left — Info */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>Write to us</div>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 300,
                color: "#F0EBE0",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              Tell us about your project
            </h2>
            <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, marginBottom: 40 }}>
              A senior attorney will contact you within 24 hours. Initial consultation is free
              and without obligation.
            </p>

            <div className="flex flex-col" style={{ gap: 20 }}>
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-start" style={{ gap: 12 }}>
                  <div style={{ marginTop: 3 }}>
                    <NodePulse />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#F0EBE0",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: 12, color: "#5A5550", marginTop: 2 }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: 11,
                color: "#5A5550",
                marginTop: 32,
                lineHeight: 1.6,
              }}
            >
              By submitting you agree to our{" "}
              <Link to="/privacy" style={{ color: "#444CE7", textDecoration: "none" }} className="hover:underline">
                Privacy Policy
              </Link>
              . We never share your data.
            </p>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="lg:col-span-7"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: 32,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              ref={formRef}
              className="flex flex-col"
              style={{ gap: 20 }}
              onSubmit={async (e) => {
                e.preventDefault();
                const form = formRef.current;
                if (!form) return;
                const d = new FormData(form);
                const ok = await submitLead({
                  name: d.get("name") as string,
                  email: d.get("email") as string,
                  phone: d.get("phone") as string,
                  company: d.get("company") as string,
                  service: d.get("service") as string,
                  message: d.get("message") as string,
                  source_page: "/contact",
                });
                if (ok) form.reset();
              }}
            >
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20 }}>
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
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    style={{ ...fieldStyle, ...focusBorder("email") }}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              {/* Row 2: Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20 }}>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    style={{ ...fieldStyle, ...focusBorder("phone") }}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    placeholder="Company name"
                    style={{ ...fieldStyle, ...focusBorder("company") }}
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              {/* Service select */}
              <div>
                <label style={labelStyle}>Service Interest</label>
                <select
                  style={{ ...fieldStyle, ...focusBorder("service"), appearance: "none", color: "#9A9590" }}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                  defaultValue=""
                  onChange={(e) => {
                    e.target.style.color = e.target.value ? "#F0EBE0" : "#9A9590";
                  }}
                >
                  <option value="" disabled>Select a service...</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Briefly describe your project or question..."
                  style={{ ...fieldStyle, ...focusBorder("message"), resize: "none" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="hover:!bg-[#3538CD]"
                style={{
                  width: "100%",
                  background: "#444CE7",
                  color: "#fff",
                  padding: "12px 32px",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "background 0.2s",
                }}
              >
                Send Message <ArrowRight size={14} />
              </button>

              <p style={{ fontSize: 11, color: "#5A5550", textAlign: "center", margin: 0, marginTop: 4 }}>
                By submitting you agree to our Privacy Policy. We never share your data.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
