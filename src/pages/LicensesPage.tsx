import { useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MicroParticles from "@/components/MicroParticles";
import NodePulse from "@/components/NodePulse";
import { FlagEmojiGroup } from "@/components/FlagEmoji";

/* ── DATA ──────────────────────────────────────────────────────────── */
interface License {
  flag: string;
  country: string;
  reg: string;
  type: string;
  badge: string;
  badgeColor: string;
  price: string;
  timeline: string;
  desc: string;
  category: string[];
}

const LICENSES: License[] = [
  { flag: "🇲🇹", country: "Malta", reg: "MGA", type: "Online Gambling License", badge: "EU Regulated", badgeColor: "#12B76A", price: "€25,000", timeline: "6–9 months", desc: "Full online casino, sports betting, and poker operator license. EU jurisdiction with white-label options.", category: ["Gambling"] },
  { flag: "🇬🇮", country: "Gibraltar", reg: "GBGA", type: "Sports Betting & Casino License", badge: "Tier 1", badgeColor: "#444CE7", price: "£25,000", timeline: "4–6 months", desc: "One of the most prestigious gambling licenses. Low tax, strong reputation, accepted by major payment providers.", category: ["Gambling"] },
  { flag: "🇨🇾", country: "Cyprus", reg: "CySEC", type: "Investment Firm (CIF)", badge: "EU Regulated", badgeColor: "#12B76A", price: "€35,000", timeline: "6–12 months", desc: "MiFID II compliant investment firm license. Access to all EU markets via passporting.", category: ["Investment"] },
  { flag: "🇪🇪", country: "Estonia", reg: "FIU", type: "Crypto VASP License", badge: "EU", badgeColor: "#6172F3", price: "€10,000", timeline: "3–5 months", desc: "Virtual Asset Service Provider license. Fast to obtain, full AML/KYC framework required.", category: ["Crypto / VASP"] },
  { flag: "🇱🇹", country: "Lithuania", reg: "FNTT", type: "EMI License", badge: "EU", badgeColor: "#6172F3", price: "€40,000", timeline: "9–18 months", desc: "Electronic Money Institution license. Access to SEPA, ability to issue IBANs, full EU passporting.", category: ["EMI & PSP"] },
  { flag: "🇲🇹", country: "Malta", reg: "MFSA", type: "VFA License (VASP)", badge: "EU Regulated", badgeColor: "#12B76A", price: "€30,000", timeline: "6–12 months", desc: "Virtual Financial Assets license under Malta's comprehensive crypto framework.", category: ["Crypto / VASP"] },
  { flag: "🇸🇬", country: "Singapore", reg: "MAS", type: "Payment Service License", badge: "Asia Hub", badgeColor: "#F79009", price: "$30,000", timeline: "6–12 months", desc: "PSL under Payment Services Act. Covers digital payment tokens, e-money, and account issuance.", category: ["EMI & PSP", "Crypto / VASP"] },
  { flag: "🇭🇰", country: "Hong Kong", reg: "HKMA", type: "SVF License (e-Money)", badge: "Asia Hub", badgeColor: "#F79009", price: "$50,000", timeline: "9–15 months", desc: "Stored Value Facility license. Required for any e-wallet or prepaid card service in HK.", category: ["EMI & PSP"] },
  { flag: "🇰🇾", country: "Cayman Islands", reg: "CIMA", type: "Investment Fund License", badge: "Tax Neutral", badgeColor: "#444CE7", price: "$15,000", timeline: "3–4 months", desc: "Regulated or exempted fund structure. Preferred jurisdiction for crypto funds and hedge funds.", category: ["Investment", "Offshore"] },
  { flag: "🇻🇬", country: "BVI", reg: "FSC", type: "Investment Business License", badge: "Offshore", badgeColor: "#9A9590", price: "$8,000", timeline: "2–4 months", desc: "Flexible investment firm license with low reporting requirements. Popular for fund managers.", category: ["Investment", "Offshore"] },
  { flag: "🇸🇨", country: "Seychelles", reg: "FSA", type: "Securities Dealer License", badge: "Offshore", badgeColor: "#9A9590", price: "$7,500", timeline: "2–3 months", desc: "Broker-dealer license with minimal capital requirements. Fast issuance.", category: ["Offshore"] },
  { flag: "🇦🇪", country: "UAE (DIFC)", reg: "DFSA", type: "Authorized Firm License", badge: "Zero Tax", badgeColor: "#444CE7", price: "$20,000", timeline: "4–8 months", desc: "Regulated financial services in DIFC free zone. Access to MENA markets with 0% tax.", category: ["Investment", "Company"] },
  { flag: "🇨🇼", country: "Curaçao", reg: "CGA", type: "Master Gaming License", badge: "Offshore", badgeColor: "#9A9590", price: "€15,000", timeline: "2–3 months", desc: "Single license covers casino, sports betting, poker. Fast issuance, global player base.", category: ["Gambling", "Offshore"] },
  { flag: "🇧🇿", country: "Belize", reg: "IFSC", type: "Online Gaming License", badge: "Offshore", badgeColor: "#9A9590", price: "$8,000", timeline: "1–2 months", desc: "Low-cost entry point for iGaming. Less restricted than EU but accepted by many payment processors.", category: ["Gambling", "Offshore"] },
  { flag: "🇨🇭", country: "Switzerland", reg: "FINMA", type: "Fintech License", badge: "Tier 1", badgeColor: "#444CE7", price: "$50,000", timeline: "9–18 months", desc: "Switzerland's banking-lite license for fintech companies handling client deposits up to CHF 100M.", category: ["EMI & PSP", "Investment"] },
  { flag: "🇬🇧", country: "United Kingdom", reg: "FCA", type: "EMI / PSP License", badge: "Tier 1", badgeColor: "#444CE7", price: "£50,000", timeline: "12–18 months", desc: "Full FCA authorization. Required for any financial services in the UK post-Brexit.", category: ["EMI & PSP"] },
  { flag: "🇵🇱", country: "Poland", reg: "KNF", type: "Crypto Exchange License", badge: "EU", badgeColor: "#6172F3", price: "€15,000", timeline: "3–6 months", desc: "Crypto exchange and custody registration. One of the faster EU VASP pathways.", category: ["Crypto / VASP"] },
  { flag: "🇲🇺", country: "Mauritius", reg: "FSC", type: "Investment Dealer License", badge: "Offshore", badgeColor: "#9A9590", price: "$10,000", timeline: "3–6 months", desc: "Global Business License + financial services. Access to African markets with double tax treaties.", category: ["Investment", "Offshore"] },
  { flag: "🇧🇸", country: "Bahamas", reg: "SCB", type: "Digital Asset Business License", badge: "Offshore", badgeColor: "#9A9590", price: "$25,000", timeline: "4–8 months", desc: "Comprehensive crypto regulation under DARE Act. Preferred by institutional crypto firms.", category: ["Crypto / VASP", "Offshore"] },
  { flag: "🇵🇦", country: "Panama", reg: "SMV", type: "Broker License", badge: "Offshore", badgeColor: "#9A9590", price: "$12,000", timeline: "3–6 months", desc: "Securities and investment broker license. No capital gains tax, territorial taxation.", category: ["Investment", "Offshore"] },
];

const FILTERS = ["All", "Gambling", "Crypto / VASP", "EMI & PSP", "Investment", "Company", "Offshore"];
const PULSE_DELAYS = [0, 0.4, 0.8, 1.2, 1.6, 2.0];

/* ── LICENSE CARD ──────────────────────────────────────────────────── */
const LicenseCard = ({ l, i }: { l: License; i: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.background = "#111111";
    el.classList.remove("scanning");
    void el.offsetWidth;
    el.classList.add("scanning");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      el.classList.remove("scanning");
      el.classList.add("scan-done");
    }, 700);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.background = "#0d0d0d";
    el.classList.remove("scanning", "scan-done");
    clearTimeout(timerRef.current);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="service-card group relative overflow-hidden cursor-pointer"
      style={{
        background: "#0d0d0d",
        padding: "28px 24px",
        transition: "background 0.3s, border-color 0.3s",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Scan sweep line */}
      <div className="scan-line" />

      {/* Bottom accent border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{
          background: "#444CE7",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.35s ease",
        }}
        ref={(el) => {
          if (!el) return;
          const parent = el.parentElement!;
          parent.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
          parent.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
        }}
      />

      {/* NodePulse */}
      <div className="absolute" style={{ top: 16, right: 16 }}>
        <NodePulse delay={PULSE_DELAYS[i % PULSE_DELAYS.length]} />
      </div>

      {/* Top row: flag + country */}
      <div className="flex items-center gap-2">
        <FlagEmojiGroup flag={l.flag} size={18} />
        <span style={{ fontSize: 13, fontWeight: 600, color: "#F0EBE0" }}>{l.country}</span>
      </div>

      {/* Regulator */}
      <div style={{ fontSize: 11, fontWeight: 500, color: "#444CE7", letterSpacing: "0.08em", marginTop: 4, marginBottom: 4 }}>
        {l.reg}
      </div>

      {/* Badge */}
      <span style={{
        display: "inline-block",
        fontSize: 10, fontWeight: 500, padding: "2px 7px",
        border: `1px solid ${l.badgeColor}40`, color: l.badgeColor,
        marginBottom: 8,
      }}>
        {l.badge}
      </span>

      {/* License type */}
      <h3 style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0", marginBottom: 8 }}>
        {l.type}
      </h3>

      {/* Description */}
      <p style={{ fontSize: 12, color: "#9A9590", lineHeight: 1.6, marginBottom: 16 }}>
        {l.desc}
      </p>

      {/* Separator */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.04)" }} />

      {/* Bottom row */}
      <div className="flex items-end justify-between" style={{ marginTop: 16 }}>
        <div className="flex flex-col" style={{ gap: 2 }}>
          <span style={{ fontSize: 10, color: "#5A5550" }}>From</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#F0EBE0" }}>{l.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 11, color: "#5A5550" }}>{l.timeline}</span>
          <ArrowRight size={14} style={{ color: "#444CE7" }} />
        </div>
      </div>
    </motion.div>
  );
};

const SERVICE_OPTIONS = [
  "Gambling License", "Crypto / VASP License", "EMI or PSP License",
  "Company Formation", "Investment License", "Ready Made Company", "Other",
];

const fieldStyle: React.CSSProperties = {
  width: "100%", background: "#080808", border: "1px solid rgba(255,255,255,0.08)",
  color: "#F0EBE0", padding: "12px 16px", fontSize: 14, borderRadius: 0,
  outline: "none", fontFamily: "Manrope, sans-serif", transition: "border-color 0.2s",
};
const labelStyle: React.CSSProperties = {
  fontSize: 11, color: "#5A5550", textTransform: "uppercase",
  letterSpacing: "0.08em", marginBottom: 6, display: "block",
};

const AdvisoryForm = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const fb = (name: string): React.CSSProperties =>
    focused === name ? { borderColor: "rgba(68,76,231,0.5)" } : {};

  return (
    <form className="flex flex-col" style={{ gap: 16 }} onSubmit={e => e.preventDefault()}>
      <div>
        <label style={labelStyle}>Name</label>
        <input placeholder="Your name" style={{ ...fieldStyle, ...fb("name") }}
          onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input type="email" required placeholder="Email address" style={{ ...fieldStyle, ...fb("email") }}
          onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
      </div>
      <div>
        <label style={labelStyle}>Service Interest</label>
        <select style={{ ...fieldStyle, ...fb("service"), appearance: "none" as const }}
          onFocus={() => setFocused("service")} onBlur={() => setFocused(null)} defaultValue="">
          <option value="" disabled>Select a service...</option>
          {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea rows={4} placeholder="Describe your project briefly"
          style={{ ...fieldStyle, ...fb("message"), resize: "none" as const }}
          onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
      </div>
      <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
        Send Message <ArrowRight size={14} />
      </button>
      <p style={{ fontSize: 11, color: "#5A5550", textAlign: "center", margin: 0 }}>
        Typically respond within 4 business hours
      </p>
    </form>
  );
};

/* ── PAGE ──────────────────────────────────────────────────────────── */
const LicensesPage = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? LICENSES
    : LICENSES.filter(l => l.category.includes(active));

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#080808", padding: "72px 48px", minHeight: 420, paddingTop: "calc(var(--nav-height) + 72px)" }}
      >
        <MicroParticles />

        <div className="mx-auto max-w-[1280px] relative" style={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>License Catalog</div>
            <h1 style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 300,
              color: "#F0EBE0",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              maxWidth: 600,
              marginBottom: 16,
            }}>
              Every license. Every jurisdiction.
            </h1>
            <p style={{ fontSize: 16, color: "#9A9590", lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}>
              From EU-regulated gambling to offshore crypto — we cover 40+ license types across 15+ jurisdictions.
            </p>
          </motion.div>

          {/* Filter bar */}
          <motion.div
            className="flex flex-wrap items-center"
            style={{ gap: 8 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span style={{ fontSize: 11, color: "#5A5550", marginRight: 16, alignSelf: "center" }}>
              Filter by:
            </span>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: "8px 16px",
                  fontSize: 12,
                  fontFamily: "Manrope, sans-serif",
                  border: `1px solid ${active === f ? "#444CE7" : "rgba(255,255,255,0.08)"}`,
                  color: active === f ? "#F0EBE0" : "#9A9590",
                  background: active === f ? "rgba(68,76,231,0.08)" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LICENSE GRID ──────────────────────────────── */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          {/* Stat row */}
          <div
            className="flex flex-wrap"
            style={{ gap: 48, marginBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 32 }}
          >
            {[
              { num: "40+", label: "License types covered" },
              { num: "15+", label: "Jurisdictions" },
              { num: "100%", label: "In-house legal team" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 300, color: "#F0EBE0", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
          >
            {filtered.map((l, i) => (
              <LicenseCard key={`${l.country}-${l.reg}-${l.type}`} l={l} i={i} />
            ))}
          </div>

          {/* Results count */}
          <div style={{ marginTop: 32, fontSize: 13, color: "#5A5550" }}>
            Showing {filtered.length} of {LICENSES.length} licenses
            {active !== "All" && (
              <button
                onClick={() => setActive("All")}
                style={{
                  marginLeft: 16,
                  fontSize: 12,
                  color: "#444CE7",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Clear filter →
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── LICENSE ADVISORY ─────────────────────────── */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-[55%_45%]" style={{ gap: 48 }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>License Advisory</div>
            <h2 style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 40, fontWeight: 300, color: "#F0EBE0",
              lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
            }}>
              Not sure which license fits your business?
            </h2>
            <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.75, marginBottom: 32 }}>
              Our legal team analyzes your business model, target markets, and risk profile — then recommends
              the optimal licensing structure. Free initial consultation.
            </p>

            {/* Indicators */}
            <div className="flex flex-col" style={{ gap: 16, marginBottom: 32 }}>
              {[
                "We assess regulatory risk before recommending any jurisdiction",
                "Full cost/timeline/compliance comparison for top 3 options",
                "Implementation roadmap included at no extra charge",
              ].map((point, i) => (
                <div key={i} className="flex items-start" style={{ gap: 12 }}>
                  <div style={{ marginTop: 4, flexShrink: 0 }}>
                    <NodePulse delay={i * 0.5} />
                  </div>
                  <span style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>

            <a
              href="/"
              className="btn-primary inline-flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              Get Free Consultation <ArrowRight size={14} />
            </a>
            <p style={{ fontSize: 11, color: "#5A5550", marginTop: 12 }}>
              Available Mon–Fri · Response within 4 hours
            </p>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: 36,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 500, color: "#F0EBE0", marginBottom: 24 }}>
              Send us your project details
            </h3>
            <AdvisoryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LicensesPage;
