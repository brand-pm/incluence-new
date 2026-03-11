import { useState, useRef, useCallback } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import { FlagEmojiGroup } from "@/components/FlagEmoji";

/* ── DATA ──────────────────────────────────────────────────────────── */
interface Company {
  flag: string;
  country: string;
  type: string;
  badge: "HOT" | "PREMIUM" | "AVAILABLE";
  price: string;
  transfer: string;
  features: string[];
  jurisdiction: string;
  hasBank: boolean;
}

const COMPANIES: Company[] = [
  { flag: "🇬🇧", country: "United Kingdom", type: "LTD Company", badge: "HOT", price: "£8,500", transfer: "3 days", features: ["Registered at Companies House", "NatWest business account included", "VAT registered", "2023 shelf company"], jurisdiction: "UK", hasBank: true },
  { flag: "🇭🇰", country: "Hong Kong", type: "Limited Company", badge: "PREMIUM", price: "$12,000", transfer: "5 days", features: ["HSBC corporate account", "Registered in Wanchai", "Clean history 2022", "E-residency compatible"], jurisdiction: "Hong Kong", hasBank: true },
  { flag: "🇪🇪", country: "Estonia", type: "OÜ (E-Residency)", badge: "AVAILABLE", price: "€9,500", transfer: "2 days", features: ["LHV bank account", "E-Residency company", "VAT EU registered", "Ideal for digital services"], jurisdiction: "Estonia", hasBank: true },
  { flag: "🇻🇬", country: "BVI", type: "Business Company", badge: "AVAILABLE", price: "$7,500", transfer: "3 days", features: ["Nominee director available", "Clean 2023 registration", "No audit requirement", "Bearer shares"], jurisdiction: "BVI", hasBank: false },
  { flag: "🇸🇨", country: "Seychelles", type: "IBC", badge: "AVAILABLE", price: "$6,000", transfer: "3 days", features: ["Clean 2023", "Nominee available", "Ideal for trading and investments", "Bank intro available"], jurisdiction: "Seychelles", hasBank: false },
  { flag: "🇦🇪", country: "UAE (RAK)", type: "Free Zone LLC", badge: "PREMIUM", price: "$18,000", transfer: "7 days", features: ["RAK ICC registration", "0% corporate tax", "Emirates NBD intro", "Trade license included"], jurisdiction: "UAE", hasBank: false },
  { flag: "🇰🇾", country: "Cayman Islands", type: "Exempted Company", badge: "PREMIUM", price: "$22,000", transfer: "10 days", features: ["Butterfield bank account", "Clean 2022 shelf", "Ideal for fund structures", "No local tax"], jurisdiction: "Cayman", hasBank: true },
  { flag: "🇵🇦", country: "Panama", type: "SA (Sociedad Anónima)", badge: "AVAILABLE", price: "$5,500", transfer: "5 days", features: ["Bearer shares possible", "No reporting requirement", "Territorial tax", "Bank intro available"], jurisdiction: "Other", hasBank: false },
  { flag: "🇨🇾", country: "Cyprus", type: "Limited Company", badge: "AVAILABLE", price: "$11,000", transfer: "7 days", features: ["Hellenic bank account", "VAT EU registered", "12.5% corporate tax", "2022 shelf"], jurisdiction: "Other", hasBank: true },
  { flag: "🇲🇺", country: "Mauritius", type: "GBL Company", badge: "AVAILABLE", price: "$8,000", transfer: "7 days", features: ["Standard Chartered account", "15% corp tax + treaty network", "Clean 2023", "DTA with 43 countries"], jurisdiction: "Other", hasBank: true },
  { flag: "🇧🇿", country: "Belize", type: "IBC", badge: "AVAILABLE", price: "$4,500", transfer: "2 days", features: ["Quick transfer", "No public records", "Nominee available", "Tax exempt offshore"], jurisdiction: "Other", hasBank: false },
  { flag: "🇨🇭", country: "Switzerland", type: "GmbH", badge: "PREMIUM", price: "$35,000", transfer: "14 days", features: ["PostFinance account", "Canton Zug registered", "Clean 2022", "Ideal for fintech/crypto"], jurisdiction: "Other", hasBank: true },
];

const BADGE_STYLES: Record<string, { bg: string; border: string; color: string }> = {
  HOT: { bg: "rgba(217,32,32,0.15)", border: "rgba(217,32,32,0.3)", color: "#D92020" },
  PREMIUM: { bg: "rgba(68,76,231,0.12)", border: "rgba(68,76,231,0.3)", color: "#6172F3" },
  AVAILABLE: { bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)", color: "#22c55e" },
};

const JURISDICTIONS = ["All", "UK", "Hong Kong", "Estonia", "BVI", "Seychelles", "UAE", "Cayman"];
const TYPES = ["All", "LTD", "LLC", "Inc", "Foundation"];

/* ── COMPANY CARD ─────────────────────────────────────────────────── */
const CompanyCard = ({ c, i }: { c: Company; i: number }) => {
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

  const bs = BADGE_STYLES[c.badge];

  return (
    <motion.div
      ref={cardRef}
      className="service-card group relative overflow-hidden cursor-pointer"
      style={{ background: "#0d0d0d", padding: "28px 24px", transition: "background 0.3s, border-color 0.3s" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="scan-line" />

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{ background: "#444CE7", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s ease" }}
        ref={(el) => {
          if (!el) return;
          const p = el.parentElement!;
          p.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
          p.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
        }}
      />

      {/* Badge */}
      <span
        className="absolute"
        style={{
          top: 16, right: 16,
          fontSize: 10, fontWeight: 600, padding: "3px 8px", letterSpacing: "0.06em",
          background: bs.bg, border: `1px solid ${bs.border}`, color: bs.color,
        }}
      >
        {c.badge}
      </span>

      {/* Country + type */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <FlagEmojiGroup flag={c.flag} size={18} />
          <span style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0" }}>{c.country}</span>
        </div>
        <span style={{ fontSize: 11, color: "#9A9590", marginTop: 2 }}>{c.type}</span>
      </div>

      {/* Separator */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.04)", margin: "16px 0" }} />

      {/* Features */}
      <div className="flex flex-col" style={{ gap: 8, marginBottom: 16 }}>
        {c.features.map(f => (
          <div key={f} className="flex items-start" style={{ gap: 8 }}>
            <div style={{ width: 3, height: 3, background: "#444CE7", marginTop: 6, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "#9A9590", lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between" style={{ marginTop: "auto" }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: "#F0EBE0" }}>{c.price}</span>
        <span style={{ fontSize: 11, color: "#5A5550" }}>Transfer in {c.transfer}</span>
      </div>

      {/* Enquire link */}
      <div style={{ marginTop: 12 }}>
        <Link
          to="/"
          className="inline-flex items-center gap-1 hover:underline"
          style={{ fontSize: 13, color: "#444CE7", textDecoration: "none", fontWeight: 500 }}
        >
          Enquire <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
};

/* ── FAQ ACCORDION ────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Can I get a company with a bank account already open?",
    a: "Yes — selected listings include active corporate accounts with NatWest, HSBC, LHV, or regional banks. Bank account transfer requires additional KYC and typically takes 3–7 additional days.",
  },
  {
    q: "Is the company history clean?",
    a: "All our shelf companies are verified clean — no liabilities, no trading history, no outstanding filings. We provide a certificate of good standing with every transfer.",
  },
  {
    q: "What documents do I need to provide?",
    a: "Standard KYC package: valid passport, proof of address, source of funds declaration, and a brief description of intended use. Depending on jurisdiction, additional AML documents may be required.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
        style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Manrope, sans-serif", textAlign: "left" }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: "#F0EBE0" }}>{q}</span>
        <ChevronRight
          size={16}
          style={{
            color: "#444CE7", flexShrink: 0, marginLeft: 16,
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      {open && (
        <div style={{ marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
          <p style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.75, margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
};

/* ── TRANSFER STEPS ───────────────────────────────────────────────── */
const transferSteps = [
  { num: "01", title: "Select & Reserve", desc: "Choose your company. We place a 48-hour hold while you review documentation.", duration: "1 day" },
  { num: "02", title: "Due Diligence", desc: "We verify your KYC documents and confirm eligibility. Standard AML check.", duration: "1–2 days" },
  { num: "03", title: "Transfer Docs", desc: "Notarized transfer agreement, updated registers, new director/shareholder appointment.", duration: "2–5 days" },
  { num: "04", title: "Bank Introduction", desc: "Where bank account is included: we introduce you to the bank for signatory change.", duration: "3–7 days" },
];

/* ── PAGE ──────────────────────────────────────────────────────────── */
const Marketplace = () => {
  const [jurisdiction, setJurisdiction] = useState("All");
  const [type, setType] = useState("All");
  const [bankOnly, setBankOnly] = useState(false);

  const filtered = COMPANIES.filter(c => {
    if (jurisdiction !== "All" && c.jurisdiction !== jurisdiction) return false;
    if (type !== "All" && !c.type.toLowerCase().includes(type.toLowerCase())) return false;
    if (bankOnly && !c.hasBank) return false;
    return true;
  });

  const FilterBtn = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px", fontSize: 12, fontFamily: "Manrope, sans-serif",
        border: `1px solid ${active ? "#444CE7" : "rgba(255,255,255,0.08)"}`,
        color: active ? "#F0EBE0" : "#9A9590",
        background: active ? "rgba(68,76,231,0.08)" : "transparent",
        cursor: "pointer", transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );

  return (
    <div>
      {/* ══ SECTION 1: HERO ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "96px 48px", paddingTop: "calc(var(--nav-height) + 96px)" }}>
        <MicroParticles />
        <div className="mx-auto max-w-[1280px] relative" style={{ zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 12 }}>Ready Made Companies</div>
            <h1 style={{
              fontFamily: "Manrope, sans-serif", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300,
              color: "#F0EBE0", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 640, marginBottom: 16,
            }}>
              Acquire a company. Launch tomorrow.
            </h1>
            <p style={{ fontSize: 16, color: "#9A9590", lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
              Pre-registered legal entities in 12+ jurisdictions. Bank accounts included on select listings. Immediate transfer.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div className="flex flex-wrap" style={{ gap: 48, marginBottom: 48 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            {[
              { num: "47", label: "companies available" },
              { num: "12", label: "jurisdictions" },
              { num: "3 days", label: "avg transfer time" },
            ].map(s => (
              <div key={s.label}>
                <span style={{ fontSize: 24, fontWeight: 300, color: "#F0EBE0" }}>{s.num}</span>
                <span style={{ fontSize: 12, color: "#5A5550", marginLeft: 8 }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div className="flex flex-col" style={{ gap: 12 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
            {/* Jurisdiction */}
            <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
              <span style={{ fontSize: 11, color: "#5A5550", marginRight: 8 }}>Jurisdiction:</span>
              {JURISDICTIONS.map(j => (
                <FilterBtn key={j} label={j} active={jurisdiction === j} onClick={() => setJurisdiction(j)} />
              ))}
            </div>
            {/* Type */}
            <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
              <span style={{ fontSize: 11, color: "#5A5550", marginRight: 8 }}>Type:</span>
              {TYPES.map(t => (
                <FilterBtn key={t} label={t} active={type === t} onClick={() => setType(t)} />
              ))}
            </div>
            {/* Bank toggle */}
            <div className="flex items-center" style={{ gap: 10 }}>
              <span style={{ fontSize: 11, color: "#5A5550" }}>Bank:</span>
              <button
                onClick={() => setBankOnly(!bankOnly)}
                className="flex items-center"
                style={{
                  gap: 8, padding: "8px 16px", fontSize: 12, fontFamily: "Manrope, sans-serif",
                  border: `1px solid ${bankOnly ? "#444CE7" : "rgba(255,255,255,0.08)"}`,
                  color: bankOnly ? "#F0EBE0" : "#9A9590",
                  background: bankOnly ? "rgba(68,76,231,0.08)" : "transparent",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                <div style={{
                  width: 14, height: 14,
                  border: `1px solid ${bankOnly ? "#444CE7" : "rgba(255,255,255,0.15)"}`,
                  background: bankOnly ? "#444CE7" : "transparent",
                  transition: "all 0.2s",
                }} />
                With bank account
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 2: COMPANY GRID ═══════════════════════════════════ */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px]">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
          >
            {filtered.map((c, i) => (
              <CompanyCard key={`${c.country}-${c.type}`} c={c} i={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <p style={{ fontSize: 15, color: "#9A9590", marginBottom: 16 }}>No companies match your filters.</p>
              <button
                onClick={() => { setJurisdiction("All"); setType("All"); setBankOnly(false); }}
                style={{ fontSize: 13, color: "#444CE7", background: "none", border: "none", cursor: "pointer", fontFamily: "Manrope, sans-serif" }}
              >
                Clear all filters →
              </button>
            </div>
          )}
          <div style={{ marginTop: 32, fontSize: 13, color: "#5A5550" }}>
            Showing {filtered.length} of {COMPANIES.length} listings
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: HOW TRANSFER WORKS ═════════════════════════════ */}
      <section className="relative" style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px] relative">
          <ProcessFlowCanvas />

          <motion.div style={{ marginBottom: 56 }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 12 }}>Transfer Process</div>
            <h2 style={{
              fontFamily: "Manrope, sans-serif", fontSize: 40, fontWeight: 300,
              color: "#F0EBE0", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
            }}>
              From selection to ownership in days
            </h2>
            <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.7 }}>
              A fully managed process — we handle all documentation, notarization, and bank introductions.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
          >
            {transferSteps.map((step, i) => (
              <motion.div
                key={step.num}
                data-step={String(i + 1)}
                className="relative overflow-hidden"
                style={{ background: "#111111", padding: "28px 24px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="step-ghost-num" style={{
                  position: "absolute", top: 12, right: 20,
                  fontSize: 64, fontWeight: 300, color: "rgba(68,76,231,0.12)",
                  lineHeight: 1, pointerEvents: "none", transition: "color 0.3s ease",
                }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0", marginBottom: 10 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.65, marginBottom: 16 }}>
                  {step.desc}
                </p>
                <span style={{
                  display: "inline-block",
                  border: "1px solid rgba(68,76,231,0.2)", color: "#6172F3",
                  fontSize: 11, padding: "4px 10px", fontWeight: 500,
                }}>
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: CUSTOM COMPANY FORMATION ═══════════════════════ */}
      <section style={{ background: "#080808", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-[60%_40%]" style={{ gap: 48 }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          >
            <div className="section-tag" style={{ marginBottom: 12 }}>Don't See What You Need?</div>
            <h2 style={{
              fontFamily: "Manrope, sans-serif", fontSize: 36, fontWeight: 300,
              color: "#F0EBE0", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
            }}>
              We form new companies in 48 hours
            </h2>
            <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.75, marginBottom: 32 }}>
              Can't find your jurisdiction or structure in the marketplace? Our team can incorporate
              fresh in most jurisdictions within 24–72 hours.
            </p>

            <div className="flex flex-wrap" style={{ gap: 16, marginBottom: 32 }}>
              {[
                { flag: "🇬🇧", name: "UK" },
                { flag: "🇭🇰", name: "HK" },
                { flag: "🇪🇪", name: "Estonia" },
                { flag: "🇻🇬", name: "BVI" },
                { flag: "🇸🇨", name: "Seychelles" },
                { flag: "🇸🇬", name: "Singapore" },
              ].map(j => (
                <span key={j.name} style={{ fontSize: 13, color: "#9A9590" }}>
                  {j.flag} {j.name}
                </span>
              ))}
            </div>

            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              Request Custom Formation <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="grid grid-cols-2"
              style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
            >
              {[
                { num: "48h", label: "Formation in UK & Seychelles" },
                { num: "15+", label: "Jurisdictions available" },
                { num: "€3,500", label: "Starting price" },
                { num: "Clean", label: "100% new registrations" },
              ].map(s => (
                <div key={s.label} className="text-center" style={{ background: "#0d0d0d", padding: 24 }}>
                  <div style={{ fontSize: 24, fontWeight: 300, color: "#F0EBE0", marginBottom: 4 }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SECTION 5: FAQ ════════════════════════════════════════════ */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="mx-auto max-w-[800px]">
          <motion.div style={{ marginBottom: 48 }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 12 }}>FAQ</div>
            <h2 style={{
              fontFamily: "Manrope, sans-serif", fontSize: 36, fontWeight: 300,
              color: "#F0EBE0", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Frequently asked questions
            </h2>
          </motion.div>

          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}

          <div style={{ marginTop: 32 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-1 hover:underline"
              style={{ fontSize: 13, color: "#444CE7", textDecoration: "none", fontWeight: 500 }}
            >
              Have more questions? <ArrowRight size={12} /> Talk to a specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
