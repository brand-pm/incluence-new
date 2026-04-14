import { useState } from "react";
import { ArrowRight, ChevronRight, LayoutGrid, List, Building2, Globe, Clock, Banknote, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

/* ── COUNTRY CODE MAP ────────────────────────────────────────────── */
const COUNTRY_CODES: Record<string, string> = {
  "Bulgaria": "BG", "United Kingdom": "UK", "Poland": "PL",
  "Lithuania": "LT", "Estonia": "EE", "Serbia": "RS",
};

const CountryBadge = ({ country, size = 22 }: { country: string; size?: number }) => (
  <div
    className="flex items-center justify-center"
    style={{
      width: size + 10, height: size + 10,
      background: "hsl(var(--accent) / 0.08)",
      border: "1px solid hsl(var(--accent) / 0.15)",
      fontSize: size * 0.45, fontWeight: 600,
      color: "hsl(var(--accent-light))",
      letterSpacing: "0.05em",
    }}
  >
    {COUNTRY_CODES[country] || country.slice(0, 2).toUpperCase()}
  </div>
);

/* ── BADGE COMPONENT ─────────────────────────────────────────────── */
const StatusBadge = ({ badge }: { badge: string }) => {
  const isHot = badge === "HOT";
  return (
    <span
      className="flex items-center gap-1"
      style={{
        fontSize: 10, fontWeight: 600, padding: "4px 10px", letterSpacing: "0.08em",
        background: isHot ? "hsl(var(--accent) / 0.12)" : "rgba(34,197,94,0.08)",
        border: `1px solid ${isHot ? "hsl(var(--accent) / 0.3)" : "rgba(34,197,94,0.25)"}`,
        color: isHot ? "hsl(var(--accent-light))" : "#22c55e",
        textTransform: "uppercase",
      }}
    >
      {isHot && <Zap size={10} />}
      {isHot ? "HOT DEAL" : badge}
    </span>
  );
};

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


const JURISDICTIONS = ["All", "Estonia", "United Kingdom", "Lithuania", "Bulgaria", "Poland", "Serbia"];

/* ── CATALOG CARD (Variant 3 — Premium Catalog) ──────────────────── */
const CatalogCard = ({ c, i }: { c: Company; i: number }) => {
  return (
    <motion.div
      className="flex flex-col group relative"
      style={{
        background: "hsl(var(--bg-2))",
        border: "1px solid hsl(var(--border-default))",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[hsl(var(--accent))] w-0 group-hover:w-full transition-all duration-300" />

      {/* Header bar */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "16px 20px", borderBottom: "1px solid hsl(var(--border-default))" }}
      >
        <div className="flex items-center gap-3">
          <CountryBadge country={c.country} size={22} />
          <div>
            <span style={{ fontSize: 15, fontWeight: 600, color: "hsl(var(--text-primary))", display: "block" }}>{c.country}</span>
            <span style={{ fontSize: 11, color: "hsl(var(--text-muted))" }}>EST. {c.established}</span>
          </div>
        </div>
        <StatusBadge badge={c.badge} />
      </div>

      {/* Body */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Activity */}
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "hsl(var(--text-primary))", marginBottom: 8, lineHeight: 1.4 }}>
          {c.activity}
        </h3>

        {/* Description */}
        <p style={{ fontSize: 12, color: "hsl(var(--text-secondary))", lineHeight: 1.7, marginBottom: 16 }}>
          {c.description}
        </p>

        {/* Detail grid */}
        <div
          className="grid grid-cols-2"
          style={{ gap: 1, background: "hsl(var(--border-default))", marginBottom: 20 }}
        >
          {[
            { icon: <Building2 size={12} />, label: "Type", value: c.type },
            { icon: <Globe size={12} />, label: "Bank Account", value: c.hasBank ? "✓ Included" : "Not included" },
            { icon: <Clock size={12} />, label: "Transfer Time", value: "5–7 days" },
            { icon: <Banknote size={12} />, label: "Debts", value: "None" },
          ].map((d) => (
            <div key={d.label} style={{ background: "hsl(var(--bg-1))", padding: "12px 14px" }}>
              <div className="flex items-center gap-1.5" style={{ marginBottom: 4 }}>
                <span style={{ color: "hsl(var(--text-accent))" }}>{d.icon}</span>
                <span style={{ fontSize: 10, color: "hsl(var(--text-muted))", textTransform: "uppercase", letterSpacing: "0.06em" }}>{d.label}</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, color: d.value === "✓ Included" ? "#22c55e" : "hsl(var(--text-primary))" }}>
                {d.value}
              </span>
            </div>
          ))}
        </div>

        {/* Price + CTA row */}
        <div className="mt-auto flex items-center justify-between" style={{ gap: 12 }}>
          <div>
            <span style={{ fontSize: 10, color: "hsl(var(--text-muted))", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: 2 }}>Price</span>
            <span style={{ fontSize: 20, fontWeight: 600, color: "hsl(var(--text-primary))" }}>{c.price}</span>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2"
            style={{
              padding: "12px 20px",
              background: "hsl(var(--accent) / 0.12)",
              border: "1px solid hsl(var(--accent) / 0.25)",
              color: "hsl(var(--accent-light))",
              fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
              textDecoration: "none", textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Inquire <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

/* ── DATA BOARD ROW (Variant 2 — Data Board) ─────────────────────── */
const DataBoardRow = ({ c, i }: { c: Company; i: number }) => {
  return (
    <motion.div
      className="grid items-center group relative"
      style={{
        gridTemplateColumns: "2fr 2.5fr 1fr 1fr 1fr auto",
        background: "hsl(var(--bg-2))",
        padding: "16px 20px",
        borderBottom: "1px solid hsl(var(--border-default))",
        gap: 16,
      }}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
    >
      <div className="flex items-center gap-3">
        <CountryBadge country={c.country} size={18} />
        <div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "hsl(var(--text-primary))", display: "block" }}>{c.country}</span>
          <span style={{ fontSize: 11, color: "hsl(var(--text-muted))" }}>EST. {c.established}</span>
        </div>
      </div>
      <div><span style={{ fontSize: 13, color: "hsl(var(--text-secondary))", lineHeight: 1.4 }}>{c.activity}</span></div>
      <span style={{ fontSize: 12, color: c.hasBank ? "#22c55e" : "hsl(var(--text-muted))", fontWeight: 500 }}>{c.hasBank ? "✓ Yes" : "No"}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: "hsl(var(--text-primary))" }}>{c.price}</span>
      <StatusBadge badge={c.badge} />
      <Link to="/contact" style={{ padding: "8px 16px", background: "hsl(var(--accent) / 0.12)", border: "1px solid hsl(var(--accent) / 0.25)", color: "hsl(var(--accent-light))", fontSize: 11, fontWeight: 600, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
        Inquire →
      </Link>
    </motion.div>
  );
};

/* ── MOBILE DATA ROW ─────────────────────────────────────────────── */
const DataBoardRowMobile = ({ c, i }: { c: Company; i: number }) => {
  return (
    <motion.div
      style={{ background: "hsl(var(--bg-2))", padding: "16px 20px", borderBottom: "1px solid hsl(var(--border-default))" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
        <div className="flex items-center gap-2">
          <CountryBadge country={c.country} size={16} />
          <span style={{ fontSize: 14, fontWeight: 600, color: "hsl(var(--text-primary))" }}>{c.country}</span>
        </div>
        <StatusBadge badge={c.badge} />
      </div>
      <div style={{ fontSize: 12, color: "hsl(var(--text-secondary))", marginBottom: 6 }}>{c.activity}</div>
      <div className="flex items-center justify-between" style={{ marginTop: 8 }}>
        <div className="flex items-center gap-4">
          <span style={{ fontSize: 14, fontWeight: 600, color: "hsl(var(--text-primary))" }}>{c.price}</span>
          <span style={{ fontSize: 11, color: c.hasBank ? "#22c55e" : "hsl(var(--text-muted))" }}>{c.hasBank ? "✓ Bank" : "No bank"}</span>
        </div>
        <Link to="/contact" style={{ padding: "6px 14px", background: "hsl(var(--accent) / 0.12)", border: "1px solid hsl(var(--accent) / 0.25)", color: "hsl(var(--accent-light))", fontSize: 11, fontWeight: 600, textDecoration: "none" }}>
          Inquire →
        </Link>
      </div>
    </motion.div>
  );
};

/* ── FAQ ──────────────────────────────────────────────────────────── */
const faqs = [
  { q: "Can I get a company with a bank account already open?", a: "Yes — selected listings include active corporate accounts with NatWest, HSBC, LHV, or regional banks. Bank account transfer requires additional KYC and typically takes 3–7 additional days." },
  { q: "Is the company history clean?", a: "All our shelf companies are verified clean — no liabilities, no trading history, no outstanding filings. We provide a certificate of good standing with every transfer." },
  { q: "What documents do I need to provide?", a: "Standard KYC package: valid passport, proof of address, source of funds declaration, and a brief description of intended use. Depending on jurisdiction, additional AML documents may be required." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid hsl(var(--border-default))", padding: "20px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
        style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: "hsl(var(--text-primary))" }}>{q}</span>
        <ChevronRight
          size={16}
          style={{
            color: "hsl(var(--accent))", flexShrink: 0, marginLeft: 16,
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      {open && (
        <div style={{ marginTop: 12, borderTop: "1px solid hsl(var(--border-default))", paddingTop: 12 }}>
          <p style={{ fontSize: 13, color: "hsl(var(--text-secondary))", lineHeight: 1.75, margin: 0 }}>{a}</p>
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
  const [bankOnly, setBankOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"catalog" | "board">("catalog");

  const filtered = COMPANIES.filter(c => {
    if (jurisdiction !== "All" && c.country !== jurisdiction) return false;
    if (bankOnly && !c.hasBank) return false;
    return true;
  });

  const FilterBtn = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px", fontSize: 12,
        border: `1px solid ${active ? "hsl(var(--accent))" : "hsl(var(--border-default))"}`,
        color: active ? "hsl(var(--text-primary))" : "hsl(var(--text-secondary))",
        background: active ? "hsl(var(--accent) / 0.08)" : "transparent",
        cursor: "pointer", transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );

  return (
    <div>
      {/* ══ HERO ═════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "hsl(var(--bg-1))", padding: "96px 24px", paddingTop: "calc(var(--nav-height) + 96px)" }}>
        <MicroParticles />
        <div className="mx-auto max-w-[1280px] relative" style={{ zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 12 }}>Ready Made Companies</div>
            <h1 style={{
              fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300,
              color: "hsl(var(--text-primary))", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 640, marginBottom: 16,
            }}>
              Acquire a company. Launch tomorrow.
            </h1>
            <p style={{ fontSize: 16, color: "hsl(var(--text-secondary))", lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
              Pre-registered legal entities in 12+ jurisdictions. Bank accounts included on select listings. Immediate transfer.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex flex-wrap" style={{ gap: 48, marginBottom: 48 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            {[
              { num: "47", label: "companies available" },
              { num: "12", label: "jurisdictions" },
              { num: "3 days", label: "avg transfer time" },
            ].map(s => (
              <div key={s.label}>
                <span style={{ fontSize: 24, fontWeight: 300, color: "hsl(var(--text-primary))" }}>{s.num}</span>
                <span style={{ fontSize: 12, color: "hsl(var(--text-muted))", marginLeft: 8 }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Filters + View Toggle */}
          <motion.div className="flex flex-col" style={{ gap: 12 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
            <div className="flex flex-wrap items-center justify-between" style={{ gap: 12 }}>
              {/* Jurisdiction filters */}
              <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
                <span style={{ fontSize: 11, color: "hsl(var(--text-muted))", marginRight: 8 }}>Jurisdiction:</span>
                {JURISDICTIONS.map(j => (
                  <FilterBtn key={j} label={j} active={jurisdiction === j} onClick={() => setJurisdiction(j)} />
                ))}
              </div>

              {/* View toggle */}
              <div className="flex items-center" style={{ gap: 2, background: "hsl(var(--bg-2))", border: "1px solid hsl(var(--border-default))", padding: 2 }}>
                <button
                  onClick={() => setViewMode("catalog")}
                  title="Catalog View"
                  style={{
                    padding: "8px 12px", border: "none", cursor: "pointer",
                    background: viewMode === "catalog" ? "hsl(var(--accent) / 0.12)" : "transparent",
                    color: viewMode === "catalog" ? "hsl(var(--accent-light))" : "hsl(var(--text-muted))",
                    display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500,
                  }}
                >
                  <LayoutGrid size={14} /> Catalog
                </button>
                <button
                  onClick={() => setViewMode("board")}
                  title="Board View"
                  style={{
                    padding: "8px 12px", border: "none", cursor: "pointer",
                    background: viewMode === "board" ? "hsl(var(--accent) / 0.12)" : "transparent",
                    color: viewMode === "board" ? "hsl(var(--accent-light))" : "hsl(var(--text-muted))",
                    display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500,
                  }}
                >
                  <List size={14} /> Board
                </button>
              </div>
            </div>

            {/* Bank toggle */}
            <div className="flex items-center" style={{ gap: 10 }}>
              <span style={{ fontSize: 11, color: "hsl(var(--text-muted))" }}>Bank:</span>
              <button
                onClick={() => setBankOnly(!bankOnly)}
                className="flex items-center"
                style={{
                  gap: 8, padding: "8px 16px", fontSize: 12,
                  border: `1px solid ${bankOnly ? "hsl(var(--accent))" : "hsl(var(--border-default))"}`,
                  color: bankOnly ? "hsl(var(--text-primary))" : "hsl(var(--text-secondary))",
                  background: bankOnly ? "hsl(var(--accent) / 0.08)" : "transparent",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                <div style={{
                  width: 14, height: 14,
                  border: `1px solid ${bankOnly ? "hsl(var(--accent))" : "hsl(var(--border-default))"}`,
                  background: bankOnly ? "hsl(var(--accent))" : "transparent",
                  transition: "all 0.2s",
                }} />
                With bank account
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ LISTINGS ═════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--bg-2))", padding: "72px 24px" }}>
        <div className="mx-auto max-w-[1280px]">
          {viewMode === "catalog" ? (
            /* CATALOG GRID */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ gap: 16 }}>
              {filtered.map((c, i) => (
                <CatalogCard key={`${c.country}-${c.established}-${i}`} c={c} i={i} />
              ))}
            </div>
          ) : (
            /* DATA BOARD */
            <div>
              {/* Desktop header */}
              <div
                className="hidden lg:grid items-center"
                style={{
                  gridTemplateColumns: "2fr 2.5fr 1fr 1fr 1fr auto",
                  padding: "12px 20px", gap: 16,
                  borderBottom: "2px solid hsl(var(--accent) / 0.2)",
                }}
              >
                {["Jurisdiction", "Activity", "Bank", "Price", "Status", ""].map(h => (
                  <span key={h} style={{ fontSize: 10, fontWeight: 600, color: "hsl(var(--text-muted))", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {h}
                  </span>
                ))}
              </div>
              {/* Desktop rows */}
              <div className="hidden lg:block">
                {filtered.map((c, i) => (
                  <DataBoardRow key={`${c.country}-${c.established}-${i}`} c={c} i={i} />
                ))}
              </div>
              {/* Mobile rows */}
              <div className="lg:hidden">
                {filtered.map((c, i) => (
                  <DataBoardRowMobile key={`${c.country}-${c.established}-${i}`} c={c} i={i} />
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <p style={{ fontSize: 15, color: "hsl(var(--text-secondary))", marginBottom: 16 }}>No companies match your filters.</p>
              <button
                onClick={() => { setJurisdiction("All"); setBankOnly(false); }}
                style={{ fontSize: 13, color: "hsl(var(--accent))", background: "none", border: "none", cursor: "pointer" }}
              >
                Clear all filters →
              </button>
            </div>
          )}
          <div style={{ marginTop: 32, fontSize: 13, color: "hsl(var(--text-muted))" }}>
            Showing {filtered.length} of {COMPANIES.length} listings
          </div>
        </div>
      </section>

      {/* ══ TRANSFER PROCESS ═════════════════════════════════════════════ */}
      <section className="relative" style={{ background: "hsl(var(--bg-3))", padding: "72px 24px" }}>
        <div className="mx-auto max-w-[1280px] relative">
          <ProcessFlowCanvas />
          <motion.div style={{ marginBottom: 56 }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 12 }}>Transfer Process</div>
            <h2 style={{
              fontSize: 40, fontWeight: 300,
              color: "hsl(var(--text-primary))", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
            }}>
              From selection to ownership in days
            </h2>
            <p style={{ fontSize: 15, color: "hsl(var(--text-secondary))", lineHeight: 1.7 }}>
              A fully managed process — we handle all documentation, notarization, and bank introductions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 1, background: "hsl(var(--border-default))" }}>
            {transferSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative overflow-hidden"
                style={{ background: "hsl(var(--bg-3))", padding: "28px 24px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span style={{
                  position: "absolute", top: 12, right: 20,
                  fontSize: 64, fontWeight: 300, color: "hsl(var(--accent) / 0.12)",
                  lineHeight: 1, pointerEvents: "none",
                }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "hsl(var(--text-primary))", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: "hsl(var(--text-secondary))", lineHeight: 1.65, marginBottom: 16 }}>{step.desc}</p>
                <span style={{
                  display: "inline-block",
                  border: "1px solid hsl(var(--accent) / 0.2)", color: "hsl(var(--accent-light))",
                  fontSize: 11, padding: "4px 10px", fontWeight: 500,
                }}>
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CUSTOM FORMATION ═════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--bg-1))", padding: "72px 24px" }}>
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-[60%_40%]" style={{ gap: 48 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 12 }}>Don't See What You Need?</div>
            <h2 style={{
              fontSize: 36, fontWeight: 300,
              color: "hsl(var(--text-primary))", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
            }}>
              We form new companies in 48 hours
            </h2>
            <p style={{ fontSize: 15, color: "hsl(var(--text-secondary))", lineHeight: 1.75, marginBottom: 32 }}>
              Can't find your jurisdiction or structure in the marketplace? Our team can incorporate
              fresh in most jurisdictions within 24–72 hours.
            </p>
            <div className="flex flex-wrap" style={{ gap: 16, marginBottom: 32 }}>
              {[
                { code: "UK", name: "UK" }, { code: "HK", name: "HK" }, { code: "EE", name: "Estonia" },
                { code: "BVI", name: "BVI" }, { code: "SC", name: "Seychelles" }, { code: "SG", name: "Singapore" },
              ].map(j => (
                <span key={j.name} className="flex items-center gap-2" style={{ fontSize: 13, color: "hsl(var(--text-secondary))" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 24, height: 24, fontSize: 9, fontWeight: 600,
                    background: "hsl(var(--accent) / 0.08)", border: "1px solid hsl(var(--accent) / 0.15)",
                    color: "hsl(var(--accent-light))", letterSpacing: "0.05em",
                  }}>{j.code}</span>
                  {j.name}
                </span>
              ))}
            </div>
            <Link to="/" className="btn-primary inline-flex items-center gap-2" style={{ textDecoration: "none" }}>
              Request Custom Formation <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="grid grid-cols-2" style={{ gap: 1, background: "hsl(var(--border-default))" }}>
              {[
                { num: "48h", label: "Formation in UK & Seychelles" },
                { num: "15+", label: "Jurisdictions available" },
                { num: "€3,500", label: "Starting price" },
                { num: "Clean", label: "100% new registrations" },
              ].map(s => (
                <div key={s.label} className="text-center" style={{ background: "hsl(var(--bg-2))", padding: 24 }}>
                  <div style={{ fontSize: 24, fontWeight: 300, color: "hsl(var(--text-primary))", marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: "hsl(var(--text-muted))", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--bg-2))", padding: "72px 24px" }}>
        <div className="mx-auto max-w-[800px]">
          <motion.div style={{ marginBottom: 48 }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <div className="section-tag" style={{ marginBottom: 12 }}>FAQ</div>
            <h2 style={{
              fontSize: 36, fontWeight: 300,
              color: "hsl(var(--text-primary))", lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Frequently asked questions
            </h2>
          </motion.div>
          {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          <div style={{ marginTop: 32 }}>
            <Link to="/" className="inline-flex items-center gap-1 hover:underline" style={{ fontSize: 13, color: "hsl(var(--accent))", textDecoration: "none", fontWeight: 500 }}>
              Have more questions? <ArrowRight size={12} /> Talk to a specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
