import { useState } from "react";
import SectionTag from "@/components/SectionTag";
import MicroParticles from "@/components/MicroParticles";
import NodePulse from "@/components/NodePulse";

const getFlagEmoji = (code: string) =>
  code.split("").map((c) => String.fromCodePoint(c.charCodeAt(0) + 127397)).join("");

interface Company {
  id: number;
  country: string;
  flag: string;
  type: string;
  reg: string;
  activity: string;
  status: string;
  badge: string;
  region: string;
  price: string;
  transfer: string;
  features: string[];
}

const COMPANIES: Company[] = [
  { id: 1, country: "Malta", flag: "MT", type: "Ltd", reg: "2019", activity: "Payment Services", status: "active", badge: "EU Regulated", region: "eu", price: "€18,500", transfer: "5–7 days", features: ["VAT registered", "Bank account included", "MGA eligible"] },
  { id: 2, country: "Estonia", flag: "EE", type: "OÜ", reg: "2020", activity: "Crypto Exchange", status: "active", badge: "VASP Ready", region: "eu", price: "€22,000", transfer: "3–5 days", features: ["E-Residency compatible", "VASP license eligible", "EU passporting"] },
  { id: 3, country: "United Kingdom", flag: "GB", type: "Ltd", reg: "2018", activity: "Financial Services", status: "active", badge: "FCA Eligible", region: "eu", price: "£14,500", transfer: "3–5 days", features: ["Companies House registered", "Clean credit history", "FCA sandbox eligible"] },
  { id: 4, country: "Hong Kong", flag: "HK", type: "Ltd", reg: "2021", activity: "Trading Company", status: "active", badge: "Common Law", region: "asia", price: "HK$95,000", transfer: "5–7 days", features: ["English documentation", "0% offshore income tax", "Bank account eligible"] },
  { id: 5, country: "UAE (RAKICC)", flag: "AE", type: "IBC", reg: "2022", activity: "Holding Structure", status: "active", badge: "0% Tax", region: "offshore", price: "$12,500", transfer: "3–5 days", features: ["No annual reporting", "100% foreign ownership", "Bank account available"] },
  { id: 6, country: "Cayman Islands", flag: "KY", type: "LLC", reg: "2020", activity: "Investment Fund", status: "active", badge: "No Tax", region: "offshore", price: "$28,000", transfer: "5–10 days", features: ["Regulated fund eligible", "No capital gains tax", "English common law"] },
  { id: 7, country: "Lithuania", flag: "LT", type: "UAB", reg: "2019", activity: "EMI Services", status: "active", badge: "EU Banking", region: "eu", price: "€16,000", transfer: "5–7 days", features: ["EMI license eligible", "SEPA access", "Baltic hub"] },
  { id: 8, country: "Bulgaria", flag: "BG", type: "OOD", reg: "2021", activity: "E-Commerce", status: "active", badge: "Low Tax 10%", region: "eu", price: "€8,500", transfer: "3–5 days", features: ["10% flat corporate tax", "EU VAT registered", "Lowest cost EU entry"] },
  { id: 9, country: "Seychelles", flag: "SC", type: "IBC", reg: "2020", activity: "Offshore Holding", status: "active", badge: "Asset Protection", region: "offshore", price: "$6,500", transfer: "3–5 days", features: ["Full privacy", "No public register", "Bearer shares allowed"] },
  { id: 10, country: "Singapore", flag: "SG", type: "Pte Ltd", reg: "2021", activity: "Tech Services", status: "active", badge: "AAA Jurisdiction", region: "asia", price: "SGD 28,000", transfer: "5–7 days", features: ["Recognized globally", "17% corporate tax", "Asia gateway"] },
  { id: 11, country: "Hungary", flag: "HU", type: "Kft", reg: "2020", activity: "Manufacturing", status: "active", badge: "9% Corp Tax", region: "eu", price: "€11,000", transfer: "5–7 days", features: ["Lowest EU corporate tax", "EU single market", "Strong legal system"] },
  { id: 12, country: "BVI", flag: "VG", type: "IBC", reg: "2019", activity: "Holding Company", status: "active", badge: "No Tax", region: "offshore", price: "$9,500", transfer: "3–5 days", features: ["Zero tax on profits", "No annual accounts", "Excellent privacy"] },
];

const REGION_FILTERS = [
  { key: "all", label: "All Regions" },
  { key: "eu", label: "European Union" },
  { key: "offshore", label: "Offshore" },
  { key: "asia", label: "Asia & Pacific" },
  { key: "americas", label: "Americas" },
];

const TYPE_FILTERS = [
  { key: "all", label: "All Types" },
  { key: "ltd", label: "Ltd / LLC" },
  { key: "holding", label: "Holding" },
  { key: "financial", label: "Financial" },
  { key: "trading", label: "Trading" },
];

const STEPS = [
  { num: "01", title: "Select a Company", body: "Browse available companies by jurisdiction, type, and activity. Filter by region or budget. Each listing is pre-verified." },
  { num: "02", title: "Due Diligence", body: "We check the company for tax debts, liabilities, receivables, and legal encumbrances. Full compliance report provided." },
  { num: "03", title: "Document Preparation", body: "Passport copies, power of attorney, re-registration forms — we prepare everything. Remote transfer available in most jurisdictions." },
  { num: "04", title: "Transfer Complete", body: "Local representative handles re-registration. In 3–7 days you receive a fully transferred company with updated ownership documents." },
];

const ADVANTAGES = [
  { title: "Immediate Start", body: "Begin banking, contracts, and operations within days. No waiting for registration approval or incorporation certificates." },
  { title: "Established History", body: "Companies registered 2–4 years ago are preferred by banks. Longer track record accelerates account opening." },
  { title: "No Bureaucracy", body: "Skip notarizations, apostilles, and regulatory submissions. We handle re-registration via local power of attorney." },
  { title: "Cost Predictable", body: "Fixed all-inclusive price covers transfer, legal support, document notarization, and post-transfer compliance check." },
];

const MarketplacePage = () => {
  const [activeRegion, setActiveRegion] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = COMPANIES.filter(
    (c) => (activeRegion === "all" || c.region === activeRegion) && (activeType === "all" || true)
  );
  const visible = filtered.slice(0, visibleCount);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* === HERO === */}
      <section style={{ background: "#080808", padding: "80px 48px" }} className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-12 gap-12 items-center" style={{ minHeight: 360 }}>
            <div className="col-span-6" style={{ maxWidth: 560 }}>
              <SectionTag>Marketplace</SectionTag>
              <h1
                className="mt-5 mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#F0EBE0", lineHeight: 1.15 }}
              >
                Ready-Made Companies.{"\n"}Transfer in <span style={{ color: "#444CE7" }}>Days</span>.
              </h1>
              <p style={{ fontSize: 15, color: "#9A9590", maxWidth: 460, lineHeight: 1.7, marginBottom: 40 }}>
                Skip the bureaucracy. Acquire a pre-registered company with clean history, active status, and full documentation — ready for immediate business operations in your target jurisdiction.
              </p>
              <div className="flex items-center" style={{ gap: 32 }}>
                {[
                  { val: "47+", label: "Available Now" },
                  { val: "12", label: "Jurisdictions" },
                  { val: "3–7 days", label: "Transfer" },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center" style={{ gap: 32 }}>
                    {i > 0 && <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.1)" }} />}
                    <div>
                      <div style={{ fontSize: 28, fontWeight: 300, color: "#F0EBE0", lineHeight: 1 }}>{s.val}</div>
                      <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-6 relative" style={{ height: "100%", minHeight: 320 }}>
              <div className="absolute inset-0" style={{ opacity: 0.25 }}>
                <MicroParticles />
              </div>
              <img src="/world-map.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 1, opacity: 0.04 }} />
            </div>
          </div>
        </div>
      </section>

      {/* === FILTERS + GRID === */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Region filters */}
          <div className="flex gap-3 mb-4">
            {REGION_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => { setActiveRegion(f.key); setVisibleCount(12); }}
                className="transition-all duration-200"
                style={{
                  background: activeRegion === f.key ? "#444CE7" : "transparent",
                  color: activeRegion === f.key ? "#fff" : "#9A9590",
                  border: activeRegion === f.key ? "1px solid #444CE7" : "1px solid rgba(255,255,255,0.1)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  padding: "8px 20px",
                  cursor: "pointer",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          {/* Type filters */}
          <div className="flex gap-3 mb-12">
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => { setActiveType(f.key); setVisibleCount(12); }}
                className="transition-all duration-200"
                style={{
                  background: activeType === f.key ? "#444CE7" : "transparent",
                  color: activeType === f.key ? "#fff" : "#9A9590",
                  border: activeType === f.key ? "1px solid #444CE7" : "1px solid rgba(255,255,255,0.1)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  padding: "6px 16px",
                  cursor: "pointer",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {visible.map((c) => (
              <div
                key={c.id}
                className="relative overflow-hidden group cursor-pointer transition-colors duration-200"
                style={{ background: "#0d0d0d", padding: 28 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#111111")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0d0d")}
              >
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-500" />

                {/* Top row */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <span style={{ fontSize: 22 }}>{getFlagEmoji(c.flag)}</span>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0", marginTop: 4 }}>{c.country}</div>
                    <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>
                      {c.type} · Est. {c.reg}
                    </div>
                  </div>
                  <span
                    className="inline-block"
                    style={{
                      fontSize: 10,
                      color: "#444CE7",
                      border: "1px solid rgba(68,76,231,0.3)",
                      padding: "2px 8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      background: "rgba(68,76,231,0.05)",
                    }}
                  >
                    {c.badge}
                  </span>
                </div>

                {/* Middle */}
                <div className="mb-5">
                  <div style={{ fontSize: 12, color: "#9A9590", marginBottom: 12 }}>{c.activity}</div>
                  <div className="space-y-1.5">
                    {c.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="flex-shrink-0" style={{ width: 4, height: 4, background: "#444CE7" }} />
                        <span style={{ fontSize: 12, color: "#9A9590" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-end pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <span className="block" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Price</span>
                    <span style={{ fontSize: 17, fontWeight: 500, color: "#F0EBE0" }}>{c.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="block" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Transfer</span>
                    <span style={{ fontSize: 13, color: "#9A9590" }}>{c.transfer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((v) => v + 6)}
                className="transition-all duration-200"
                style={{
                  padding: "12px 32px",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#9A9590",
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                }}
              >
                Load More Companies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionTag>Process</SectionTag>
          <h2 className="mt-5 mb-4" style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 300, color: "#F0EBE0" }}>
            From Selection to Transfer — Fully Managed
          </h2>
          <p style={{ fontSize: 14, color: "#9A9590", maxWidth: 560, lineHeight: 1.7, marginBottom: 56 }}>
            Our team handles every step of due diligence, document preparation, and re-registration. You receive a clean company ready for banking and operations.
          </p>
          <div className="grid grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {STEPS.map((s) => (
              <div key={s.num} style={{ background: "#111111", padding: 28 }}>
                <div style={{ fontSize: 11, color: "#444CE7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#F0EBE0", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY READY-MADE === */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-5">
              <SectionTag>Advantages</SectionTag>
              <h2 className="mt-5 mb-4" style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 300, color: "#F0EBE0" }}>
                Why Buy Ready-Made Instead of Registering
              </h2>
              <p style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7 }}>
                A shelf company with history opens doors that fresh registrations cannot. Banks, partners, and regulators prefer entities with operating track records.
              </p>
            </div>
            <div className="col-span-7">
              <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {ADVANTAGES.map((a) => (
                  <div key={a.title} style={{ background: "#0d0d0d", padding: 28 }}>
                    <div className="mb-4">
                      <NodePulse />
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#F0EBE0", marginBottom: 8 }}>{a.title}</div>
                    <p style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.65 }}>{a.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section style={{ background: "#080808", padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <div style={{ maxWidth: 600 }}>
            <SectionTag>Get Started</SectionTag>
            <h2 className="mt-5 mb-4" style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 300, color: "#F0EBE0" }}>
              Can't Find What You're Looking For?
            </h2>
            <p style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7, marginBottom: 40 }}>
              We source companies on request. Tell us your target jurisdiction, company type, and budget — we'll find matching options within 48 hours.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Jurisdiction", placeholder: "e.g. Malta, BVI, Singapore" },
                { label: "Company Type", placeholder: "e.g. Ltd, LLC, IBC" },
                { label: "Budget Range", placeholder: "e.g. €10,000 – €25,000" },
                { label: "Timeline", placeholder: "e.g. Within 2 weeks" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full outline-none transition-colors duration-200"
                    style={{
                      background: "#080808",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#F0EBE0",
                      fontSize: 14,
                      padding: "12px 16px",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(68,76,231,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                  Additional Requirements
                </label>
                <textarea
                  placeholder="Additional requirements — activity, banking needs, existing licenses..."
                  className="w-full outline-none resize-none transition-colors duration-200"
                  style={{
                    background: "#080808",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#F0EBE0",
                    fontSize: 14,
                    padding: "12px 16px",
                    minHeight: 90,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(68,76,231,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
            </div>

            <button
              className="mt-6 transition-colors duration-200"
              style={{
                padding: "12px 32px",
                background: "#444CE7",
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#3538CD")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#444CE7")}
            >
              Submit Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
