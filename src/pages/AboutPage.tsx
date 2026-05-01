import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import NodePulse from "@/components/NodePulse";

/* ── DATA ── */

const stats = [
  { value: "500+", label: "Projects completed" },
  { value: "40+", label: "Jurisdictions covered" },
  { value: "12 yrs", label: "Industry experience" },
  { value: "20+", label: "Countries with partners" },
];

const principles = [
  { num: "01", title: "Honesty", body: "We do not hide risks, do not impose unnecessary things, and do not violate the law." },
  { num: "02", title: "Professionalism", body: "Our employees have many years of experience in international law and regularly enhance their expertise." },
  { num: "03", title: "Reliability", body: "We thoroughly work on assigned tasks, ensuring their logical and positive completion. With us, you can be confident in success." },
  { num: "04", title: "Versatility", body: "We provide a wide range of comprehensive services, collaborating with permanent partners — banks, payment systems, accountants, auditors — from all over the world." },
  { num: "05", title: "Mobility", body: "We always keep track of legislative changes and the socio-economic situation in target regions." },
  { num: "06", title: "Punctuality", body: "Fulfilling assigned tasks within the agreed timeframe is our main objective. We rely on both client preferences and legislative requirements regarding deadlines." },
  { num: "07", title: "Openness", body: "We communicate with clients in their language and regularly provide reports on completed stages of work. We are always available." },
  { num: "08", title: "Confidentiality", body: "Protecting clients' confidential data is an integral part of our services, ensured through high staff professionalism and reliable systems." },
  { num: "09", title: "Professional standards", body: "Our services are provided at a professional level. We do not impose unnecessary things — clients order only what they truly need. Payment terms are individually negotiated." },
];

const trustItems = [
  "Response within 24 hours",
  "Free initial consultation",
  "Confidential — NDA available on request",
];

const qualityItems = [
  "Dozens of banking partners across 20+ countries",
  "Certified auditors and accountants on every project",
  "Recruitment agencies for local staff requirements",
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

const AboutPage = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const focusBorder = (name: string): React.CSSProperties =>
    focused === name ? { borderColor: "rgba(68,76,231,0.5)" } : {};

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <nav
        className="flex items-center"
        style={{
          background: "#080808",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "14px 48px",
          gap: 8,
          fontFamily: "Manrope, sans-serif",
          fontSize: 12,
        }}
      >
        <Link to="/" style={{ color: "#5A5550", textDecoration: "none" }} className="hover:!text-[#9A9590] transition-colors">
          Incluence
        </Link>
        <ChevronRight size={12} style={{ color: "#333" }} />
        <span style={{ color: "#9A9590" }}>About</span>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "#080808", padding: "80px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 16 }}>About Incluence</div>
            <h1
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 300,
                color: "#F0EBE0",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 24,
                maxWidth: 720,
              }}
            >
              International legal firm.
              <br />
              Built for global business.
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "#9A9590",
                lineHeight: 1.8,
                maxWidth: 680,
              }}
            >
              Incluence is an international full-service legal company providing highly professional
              services in the field of company registration worldwide, business structuring, obtaining
              citizenship and residency permits, opening accounts in reliable and reputable banks and
              payment systems, obtaining various licenses, accounting services, and other areas related
              to the creation and development of international businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div style={{ background: "rgba(255,255,255,0.06)" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 1 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden"
              style={{ background: "#080808", padding: 28 }}
            >
              <span
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 300,
                  color: "#F0EBE0",
                  fontFamily: "Manrope, sans-serif",
                  display: "block",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "#5A5550",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: 8,
                  display: "block",
                }}
              >
                {s.label}
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#444CE7] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION & GOAL ── */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>Our purpose</div>
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
              What drives everything we do
            </h2>
          </motion.div>

          <div style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 1 }}>
              {[
                {
                  tag: "Our mission",
                  text: "To satisfy all the legitimate business needs of our clients.",
                },
                {
                  tag: "Our goal",
                  text: "A successful and protected client.",
                },
              ].map((item) => (
                <div key={item.tag} style={{ background: "#111111", padding: 40 }}>
                  <div
                    style={{
                      width: 40,
                      height: 2,
                      background: "#444CE7",
                      marginBottom: 20,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 18,
                      fontWeight: 500,
                      color: "#F0EBE0",
                      marginBottom: 12,
                    }}
                  >
                    {item.tag}
                  </h3>
                  <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.7, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>Our principles</div>
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
              How we work with every client
            </h2>
          </motion.div>

          <div style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 1 }}>
              {principles.map((p) => (
                <div
                  key={p.num}
                  className="group relative overflow-hidden"
                  style={{ background: "#0d0d0d", padding: 28 }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "#444CE7",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#F0EBE0",
                      marginBottom: 10,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.7, margin: 0 }}>
                    {p.body}
                  </p>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#444CE7] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY & TEAM ── */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 64 }}>
            {/* Left — Quality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-tag" style={{ marginBottom: 12 }}>Quality guarantee</div>
              <h2
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 300,
                  color: "#F0EBE0",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: 16,
                }}
              >
                We guarantee the quality of our work
              </h2>
              <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, marginBottom: 32 }}>
                We have a wide network of partners, including dozens of banks and payment systems,
                auditors, accountants, and recruitment agencies worldwide.
              </p>

              <div className="flex flex-col" style={{ gap: 16 }}>
                {qualityItems.map((item) => (
                  <div key={item} className="flex items-start" style={{ gap: 12 }}>
                    <div style={{ marginTop: 2 }}>
                      <NodePulse />
                    </div>
                    <span style={{ fontSize: 14, color: "#F0EBE0", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="section-tag" style={{ marginBottom: 12 }}>Our team</div>
              <h2
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 300,
                  color: "#F0EBE0",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: 16,
                }}
              >
                A cohesive team of specialists
              </h2>
              <div className="flex flex-col" style={{ gap: 16 }}>
                <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, margin: 0 }}>
                  A cohesive team of professionals with at least 5 years of experience in the field
                  of international law, participants in various international specialized conferences
                  and forums.
                </p>
                <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, margin: 0 }}>
                  Our specialists regularly monitor the legislation of the serviced jurisdictions,
                  timely inform clients about upcoming changes, and assist with adapting businesses to
                  new rules.
                </p>
                <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, margin: 0 }}>
                  Incluence employees are knowledgeable not only about past or announced changes but
                  can also forecast important events.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section style={{ background: "#080808", padding: "96px 48px" }}>
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12" style={{ gap: 64 }}>
          {/* Left col */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>Let's work together</div>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 300,
                color: "#F0EBE0",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              Ready to structure your business globally?
            </h2>
            <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, marginBottom: 40 }}>
              Book a free 30-minute consultation with a senior attorney. No obligation, no pressure
              — just clarity on your options.
            </p>

            <div className="flex flex-col" style={{ gap: 16 }}>
              {trustItems.map((item) => (
                <div key={item} className="flex items-start" style={{ gap: 12 }}>
                  <div style={{ marginTop: 2 }}>
                    <NodePulse />
                  </div>
                  <span style={{ fontSize: 14, color: "#F0EBE0", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right col — Form */}
          <motion.div
            className="lg:col-span-7"
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
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  rows={4}
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
                Get Free Consultation <ArrowRight size={14} />
              </button>
              <p style={{ fontSize: 11, color: "#5A5550", textAlign: "center", margin: 0 }}>
                Typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
