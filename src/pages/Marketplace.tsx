import { useState } from "react";
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
  badge: "HOT" | "AVAILABLE";
  price: string;
  established: string;
  activity: string;
  hasBank: boolean;
  description: string;
}

const COMPANIES: Company[] = [
  { flag: "🇧🇬", country: "Bulgaria", type: "Ready-made", badge: "HOT", price: "Contact us", established: "February 2021", activity: "Digital Marketing and IT", hasBank: true, description: "Digital Marketing and IT company established in Bulgaria. Has a bank account. Hot offer." },
  { flag: "🇬🇧", country: "United Kingdom", type: "Ready-made", badge: "HOT", price: "Contact us", established: "June 2022", activity: "Electrical services, onsite electrical work", hasBank: true, description: "Ready-made business in the UK specializing in electrical services. Has a bank account. Hot offer." },
  { flag: "🇵🇱", country: "Poland", type: "Ready-made", badge: "HOT", price: "EUR 3,995", established: "April 2018", activity: "Marketing and IT company", hasBank: false, description: "Marketing and IT company established in Poland. Hot offer." },
  { flag: "🇱🇹", country: "Lithuania", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "October 2022", activity: "Holding companies", hasBank: false, description: "L*** set up in October 2022 with registered activity like holding company activities. No bank account. No debts. Available for reservation." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "April 2019", activity: "Computer programming activities", hasBank: false, description: "Dec** established in April 2019, specializes in computer programming activities. Director and shareholder both from Estonia. No debts, reports filled on time." },
  { flag: "🇬🇧", country: "United Kingdom", type: "Ready-made", badge: "AVAILABLE", price: "GBP 4,500", established: "January 2020", activity: "Combined office administrative service activities", hasBank: false, description: "En*** established in January 2020. Director and shareholder both from Spain. No bank account. No debts, reports filled on time." },
  { flag: "🇬🇧", country: "United Kingdom", type: "Ready-made", badge: "AVAILABLE", price: "EUR 3,000", established: "September 2023", activity: "IT and Wholesale of computers, peripheral equipment and software", hasBank: false, description: "Tec*** established in September 2023. Director and shareholder from Lithuania. Nominee director service available." },
  { flag: "🇷🇸", country: "Serbia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "March 2021", activity: "Wholesale trade of various goods", hasBank: false, description: "Sol*** established in March 2021 in Belgrade. Wholesale trade of various goods. Employs one person. No reported debts. Active." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "September 2021", activity: "Arts, entertainment and recreation", hasBank: false, description: "Di*** established in September 2021. Director and shareholder both from Estonia. No debts, reports filled on time." },
  { flag: "🇱🇹", country: "Lithuania", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "June 2022", activity: "Consulting services", hasBank: false, description: "La*** set up in June 2022. Formed for crypto-related use but share capital was not raised. No debts." },
  { flag: "🇬🇧", country: "United Kingdom", type: "Ready-made", badge: "AVAILABLE", price: "GBP 10,000", established: "October 2012", activity: "Video production activities", hasBank: false, description: "Ar*** established in October 2012. Director and shareholder both from Mexico. No debts, reports filled on time." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "EUR 4,950", established: "April 2018", activity: "Computer programming activities", hasBank: false, description: "Computer programming activities company established in Estonia in April 2018." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "May 2017", activity: "Freight transport by road", hasBank: true, description: "TS*** established in May 2017. Has transport license (3.5t). Director and shareholder from Latvia. Share capital paid — €9,508. VAT number since March 2022." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "October 2017", activity: "Other personal service activities n.e.c.", hasBank: false, description: "Pu*** established in October 2017. Broad category suitable for various personal and lifestyle services." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "April 2009", activity: "Wholesale and retail trade; repair of motor vehicles", hasBank: true, description: "St*** established in April 2009. Director from Estonia, shareholders from Norway and Estonia. Share capital paid — €10,050. VAT number since February 2011." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "February 2016", activity: "IT and computer service activities", hasBank: false, description: "Te*** established in February 2016 for IT and software development. Director and shareholder both from Estonia." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "EUR 3,600", established: "December 2017", activity: "Administrative and support service activities", hasBank: false, description: "Wi*** established in December 2017. Director and shareholder both from Estonia. Share capital paid — €2,508." },
  { flag: "🇪🇪", country: "Estonia", type: "Ready-made", badge: "AVAILABLE", price: "Contact us", established: "July 2025", activity: "Other business support service activities n.e.c.", hasBank: false, description: "E*** established in July 2025. Corporate and operational support services. Debt-free, fully compliant." },
];

const BADGE_STYLES: Record<string, { bg: string; border: string; color: string }> = {
  HOT: { bg: "rgba(217,32,32,0.15)", border: "rgba(217,32,32,0.3)", color: "#D92020" },
  AVAILABLE: { bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)", color: "#22c55e" },
};

const JURISDICTIONS = ["All", "Estonia", "United Kingdom", "Lithuania", "Bulgaria", "Poland", "Serbia"];

/* ── COMPANY CARD ─────────────────────────────────────────────────── */
const CompanyCard = ({ c, i }: { c: Company; i: number }) => {
  const bs = BADGE_STYLES[c.badge];

  return (
    <motion.div
      className="service-card group relative overflow-hidden"
      style={{ background: "#0d0d0d", padding: "28px 24px", display: "flex", flexDirection: "column" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
    >
      {/* Badge */}
      <span
        className="absolute"
        style={{
          top: 16, right: 16,
          fontSize: 10, fontWeight: 600, padding: "3px 8px", letterSpacing: "0.06em",
          background: bs.bg, border: `1px solid ${bs.border}`, color: bs.color,
        }}
      >
        {c.badge === "HOT" ? "🔥 HOT" : c.badge}
      </span>

      {/* Country + type */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <FlagEmojiGroup flag={c.flag} size={18} />
          <span style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0" }}>{c.country}</span>
        </div>
        <span style={{ fontSize: 11, color: "#9A9590", marginTop: 2 }}>{c.type} · {c.established}</span>
      </div>

      {/* Separator */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.04)", margin: "16px 0" }} />

      {/* Activity */}
      <div style={{ fontSize: 14, fontWeight: 500, color: "#F0EBE0", marginBottom: 8 }}>
        {c.activity}
      </div>

      {/* Description */}
      <p style={{ fontSize: 12, color: "#9A9590", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
        {c.description}
      </p>

      {/* Details table */}
      <div style={{ marginBottom: 16 }}>
        {[
          { label: "Business activity", value: c.activity },
          { label: "Country", value: c.country },
          { label: "Established", value: c.established },
          { label: "Bank account", value: c.hasBank ? "Yes" : "No bank account" },
          { label: "Price", value: c.price },
        ].map(row => (
          <div key={row.label} className="flex justify-between" style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 11, color: "#5A5550" }}>{row.label}</span>
            <span style={{ fontSize: 11, color: "#9A9590", fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Enquire link */}
      <div>
        <Link
          to="/contact"
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
    if (jurisdiction !== "All" && c.country !== jurisdiction) return false;
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
                <span key={j.name} className="flex items-center gap-1.5" style={{ fontSize: 13, color: "#9A9590" }}>
                  <FlagEmojiGroup flag={j.flag} size={14} /> {j.name}
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
