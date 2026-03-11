import { useState, useEffect } from "react";
import SectionTag from "@/components/SectionTag";
import MicroParticles from "@/components/MicroParticles";
import NodePulse from "@/components/NodePulse";
import { FlagEmojiGroup } from "@/components/FlagEmoji";

const getFlagEmoji = (code: string) =>
  code.split("").map((c) => String.fromCodePoint(c.charCodeAt(0) + 127397)).join("");

interface Company {
  id: number;
  country: string;
  flag: string;
  type: string;
  reg: string;
  activity: string;
  status: 'available' | 'reserved' | 'sold';
  badge: string;
  region: string;
  price: string;
  transfer: string;
  features: string[];
  viewers: number;
  reservedAgo: string | null;
  addedDays: number;
}

const COMPANIES: Company[] = [
  { id: 1, country: "Malta", flag: "MT", type: "Ltd", reg: "2019", activity: "Payment Services", status: "available", badge: "EU Regulated", region: "eu", price: "€18,500", transfer: "5–7 days", features: ["VAT registered", "Bank account included", "MGA eligible"], viewers: 3, reservedAgo: null, addedDays: 2 },
  { id: 2, country: "Estonia", flag: "EE", type: "OÜ", reg: "2020", activity: "Crypto Exchange", status: "reserved", badge: "VASP Ready", region: "eu", price: "€22,000", transfer: "3–5 days", features: ["E-Residency compatible", "VASP license eligible", "EU passporting"], viewers: 1, reservedAgo: "3h ago", addedDays: 8 },
  { id: 3, country: "United Kingdom", flag: "GB", type: "Ltd", reg: "2018", activity: "Financial Services", status: "available", badge: "FCA Eligible", region: "eu", price: "£14,500", transfer: "3–5 days", features: ["Companies House registered", "Clean credit history", "FCA sandbox eligible"], viewers: 5, reservedAgo: null, addedDays: 1 },
  { id: 4, country: "Hong Kong", flag: "HK", type: "Ltd", reg: "2021", activity: "Trading Company", status: "available", badge: "Common Law", region: "asia", price: "HK$95,000", transfer: "5–7 days", features: ["English documentation", "0% offshore income tax", "Bank account eligible"], viewers: 2, reservedAgo: null, addedDays: 14 },
  { id: 5, country: "UAE (RAKICC)", flag: "AE", type: "IBC", reg: "2022", activity: "Holding Structure", status: "sold", badge: "0% Tax", region: "offshore", price: "$12,500", transfer: "3–5 days", features: ["No annual reporting", "100% foreign ownership", "Bank account available"], viewers: 0, reservedAgo: null, addedDays: 21 },
  { id: 6, country: "Cayman Islands", flag: "KY", type: "LLC", reg: "2020", activity: "Investment Fund", status: "available", badge: "No Tax", region: "offshore", price: "$28,000", transfer: "5–10 days", features: ["Regulated fund eligible", "No capital gains tax", "English common law"], viewers: 4, reservedAgo: null, addedDays: 3 },
  { id: 7, country: "Lithuania", flag: "LT", type: "UAB", reg: "2019", activity: "EMI Services", status: "reserved", badge: "EU Banking", region: "eu", price: "€16,000", transfer: "5–7 days", features: ["EMI license eligible", "SEPA access", "Baltic hub"], viewers: 2, reservedAgo: "6h ago", addedDays: 5 },
  { id: 8, country: "Bulgaria", flag: "BG", type: "OOD", reg: "2021", activity: "E-Commerce", status: "available", badge: "Low Tax 10%", region: "eu", price: "€8,500", transfer: "3–5 days", features: ["10% flat corporate tax", "EU VAT registered", "Lowest cost EU entry"], viewers: 1, reservedAgo: null, addedDays: 9 },
  { id: 9, country: "Seychelles", flag: "SC", type: "IBC", reg: "2020", activity: "Offshore Holding", status: "available", badge: "Asset Protection", region: "offshore", price: "$6,500", transfer: "3–5 days", features: ["Full privacy", "No public register", "Bearer shares allowed"], viewers: 6, reservedAgo: null, addedDays: 1 },
  { id: 10, country: "Singapore", flag: "SG", type: "Pte Ltd", reg: "2021", activity: "Tech Services", status: "sold", badge: "AAA Jurisdiction", region: "asia", price: "SGD 28,000", transfer: "5–7 days", features: ["Recognized globally", "17% corporate tax", "Asia gateway"], viewers: 0, reservedAgo: null, addedDays: 30 },
  { id: 11, country: "Hungary", flag: "HU", type: "Kft", reg: "2020", activity: "Manufacturing", status: "available", badge: "9% Corp Tax", region: "eu", price: "€11,000", transfer: "5–7 days", features: ["Lowest EU corporate tax", "EU single market", "Strong legal system"], viewers: 2, reservedAgo: null, addedDays: 4 },
  { id: 12, country: "BVI", flag: "VG", type: "IBC", reg: "2019", activity: "Holding Company", status: "available", badge: "No Tax", region: "offshore", price: "$9,500", transfer: "3–5 days", features: ["Zero tax on profits", "No annual accounts", "Excellent privacy"], viewers: 3, reservedAgo: null, addedDays: 7 },
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

const ACTIVITY = [
  '3 companies reserved in the last 24 hours',
  'Estonia OÜ · Crypto — just viewed by someone in Singapore',
  '2 new listings added this week',
  'Malta Ltd · Payment Services — inquiry received 1h ago',
  'Seychelles IBC — available again after reservation expired',
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

const StatusBadge = ({ status }: { status: string }) => {
  if (status === 'available') return (
    <span style={{ fontSize: 10, color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)", padding: "2px 8px", textTransform: "uppercase" as const, letterSpacing: "0.08em", background: "rgba(34,197,94,0.05)" }}>
      Available
    </span>
  );
  if (status === 'reserved') return (
    <span style={{ fontSize: 10, color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)", padding: "2px 8px", textTransform: "uppercase" as const, letterSpacing: "0.08em", background: "rgba(245,158,11,0.05)" }}>
      Reserved
    </span>
  );
  return (
    <span style={{ fontSize: 10, color: "#5A5550", border: "1px solid rgba(255,255,255,0.08)", padding: "2px 8px", textTransform: "uppercase" as const, letterSpacing: "0.08em", background: "rgba(255,255,255,0.02)" }}>
      Sold
    </span>
  );
};

const scrollToCta = (company: Company) => {
  const el = document.getElementById('marketplace-cta');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const jurInput = document.getElementById('cta-jurisdiction') as HTMLInputElement | null;
    const typeInput = document.getElementById('cta-type') as HTMLInputElement | null;
    const reqInput = document.getElementById('cta-requirements') as HTMLTextAreaElement | null;
    if (jurInput) jurInput.value = company.country;
    if (typeInput) typeInput.value = company.type;
    if (reqInput) reqInput.value = `Interested in: ${company.country} ${company.type} (Est. ${company.reg}) — ${company.activity}. Listed at ${company.price}.`;
  }, 600);
};

const MarketplacePage = () => {
  const [activeRegion, setActiveRegion] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);
  const [activityMsg, setActivityMsg] = useState(0);
  const [showSold, setShowSold] = useState(false);

  const availableCount = COMPANIES.filter(c => c.status === 'available').length;

  useEffect(() => {
    const t = setInterval(() => {
      setActivityMsg(p => (p + 1) % ACTIVITY.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const filtered = COMPANIES.filter((c) => {
    const regionMatch = activeRegion === "all" || c.region === activeRegion;
    const soldMatch = showSold || c.status !== 'sold';
    return regionMatch && soldMatch;
  });

  const statusOrder: Record<string, number> = { available: 0, reserved: 1, sold: 2 };
  const sorted = [...filtered].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  const visible = sorted.slice(0, visibleCount);

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
                  { val: `${availableCount}`, label: "Available Now" },
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
          {/* Activity banner */}
          <div className="mb-8 flex items-center gap-3" style={{ padding: "10px 16px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ width: 6, height: 6, background: "#22c55e", flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 }}>Live</span>
            <span style={{ fontSize: 12, color: "#9A9590" }}>— {ACTIVITY[activityMsg]}</span>
            <style>{`@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
          </div>

          {/* Region filters */}
          <div className="flex gap-3 mb-4 flex-wrap">
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
          {/* Type filters + show sold */}
          <div className="flex gap-3 mb-12 flex-wrap items-center">
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
            <button
              onClick={() => setShowSold(p => !p)}
              className="flex items-center gap-2 transition-all duration-150"
              style={{
                padding: "6px 16px",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                border: showSold ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.06)",
                color: showSold ? "#9A9590" : "#5A5550",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <div style={{ width: 12, height: 12, border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {showSold && <div style={{ width: 6, height: 6, background: "#444CE7" }} />}
              </div>
              Include sold
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {visible.map((c) => (
              <div
                key={c.id}
                className={`relative overflow-hidden group transition-all duration-300 ${c.status === 'sold' ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
                style={{ background: "#0d0d0d", padding: 28 }}
                onMouseEnter={(e) => { if (c.status !== 'sold') e.currentTarget.style.background = "#111111"; }}
                onMouseLeave={(e) => { if (c.status !== 'sold') e.currentTarget.style.background = "#0d0d0d"; }}
              >
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-500" />

                {/* Sold overlay */}
                {c.status === 'sold' && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                    <div style={{ transform: "rotate(-35deg)", fontSize: 14, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, opacity: 0.6 }}>
                      Transferred
                    </div>
                  </div>
                )}

                {/* Top row — flag + name left, badges right */}
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center gap-3">
                    <FlagEmojiGroup flag={getFlagEmoji(c.flag)} size={22} />
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0" }}>{c.country}</div>
                      <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>
                        {c.type} · Est. {c.reg}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <StatusBadge status={c.status} />
                    {c.addedDays <= 3 && c.status === 'available' && (
                      <span style={{ fontSize: 9, color: "#080808", background: "#22c55e", padding: "2px 6px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Activity label */}
                <div style={{ fontSize: 12, color: "#9A9590", marginBottom: 4 }}>{c.activity}</div>

                {/* Features + Order — reveal on hover */}
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{ maxHeight: 0, opacity: 0 }}
                  ref={(el) => {
                    if (!el) return;
                    const card = el.closest('.group');
                    if (!card) return;
                    const show = () => { el.style.maxHeight = '250px'; el.style.opacity = '1'; };
                    const hide = () => { el.style.maxHeight = '0'; el.style.opacity = '0'; };
                    card.addEventListener('mouseenter', show);
                    card.addEventListener('mouseleave', hide);
                  }}
                >
                  <div className="space-y-1.5 pt-2 mb-4">
                    {c.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="flex-shrink-0" style={{ width: 4, height: 4, background: "#444CE7" }} />
                        <span style={{ fontSize: 12, color: "#9A9590" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  {c.status === 'available' && (
                    <button
                      onClick={(e) => { e.stopPropagation(); scrollToCta(c); }}
                      className="w-full transition-colors duration-200 mb-3"
                      style={{
                        padding: "8px 16px",
                        background: "#444CE7",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#3538CD")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#444CE7")}
                    >
                      Inquire About This Company →
                    </button>
                  )}
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-end pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <span className="block" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Price</span>
                    <span style={{ fontSize: 17, fontWeight: 500, color: "#F0EBE0" }}>{c.price}</span>
                  </div>
                  {c.status === 'available' && c.viewers > 1 && (
                    <div className="flex items-center gap-2">
                      <div className="flex" style={{ gap: 2 }}>
                        {Array.from({ length: Math.min(c.viewers, 5) }).map((_, i) => (
                          <div key={i} style={{ width: 6, height: 6, background: "#444CE7", opacity: 1 - i * 0.15 }} />
                        ))}
                      </div>
                      <span style={{ fontSize: 11, color: "#5A5550" }}>{c.viewers} viewing</span>
                    </div>
                  )}
                  <div className="text-right">
                    {c.status === 'reserved' && c.reservedAgo ? (
                      <>
                        <span className="block" style={{ fontSize: 10, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Reserved</span>
                        <span style={{ fontSize: 13, color: "#f59e0b" }}>{c.reservedAgo}</span>
                      </>
                    ) : (
                      <>
                        <span className="block" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Transfer</span>
                        <span style={{ fontSize: 13, color: "#9A9590" }}>{c.transfer}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

                {/* Sold overlay */}
                {c.status === 'sold' && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                    <div style={{ transform: "rotate(-35deg)", fontSize: 14, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, opacity: 0.6 }}>
                      Transferred
                    </div>
                  </div>
                )}

                {/* New badge */}
                {c.addedDays <= 3 && c.status === 'available' && (
                  <div className="absolute" style={{ top: 12, left: 12, zIndex: 5 }}>
                    <span style={{ fontSize: 9, color: "#080808", background: "#22c55e", padding: "2px 6px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                      New
                    </span>
                  </div>
                )}

                {/* Top row */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <FlagEmojiGroup flag={getFlagEmoji(c.flag)} size={22} />
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0", marginTop: 4 }}>{c.country}</div>
                    <div style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>
                      {c.type} · Est. {c.reg}
                    </div>
                  </div>
                  <StatusBadge status={c.status} />
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

                  {/* Viewers indicator */}
                  {c.status === 'available' && c.viewers > 1 && (
                    <div className="flex items-center gap-2">
                      <div className="flex" style={{ gap: 2 }}>
                        {Array.from({ length: Math.min(c.viewers, 5) }).map((_, i) => (
                          <div key={i} style={{ width: 6, height: 6, background: "#444CE7", opacity: 1 - i * 0.15 }} />
                        ))}
                      </div>
                      <span style={{ fontSize: 11, color: "#5A5550" }}>{c.viewers} viewing</span>
                    </div>
                  )}

                  <div className="text-right">
                    {c.status === 'reserved' && c.reservedAgo ? (
                      <>
                        <span className="block" style={{ fontSize: 10, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Reserved</span>
                        <span style={{ fontSize: 13, color: "#f59e0b" }}>{c.reservedAgo}</span>
                      </>
                    ) : (
                      <>
                        <span className="block" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Transfer</span>
                        <span style={{ fontSize: 13, color: "#9A9590" }}>{c.transfer}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < sorted.length && (
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
