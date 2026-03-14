import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, Shield, Landmark, Crown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import { TerritoryMap } from "@/components/map/TerritoryMap";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import RelatedJurisdictions from "@/components/RelatedJurisdictions";

const useCounter = (target: number, duration = 1200) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [target]);
  return val;
};

const STEPS = [
  { num: "01", title: "Isle of Man Incorporation", body: "Register the company on the island — this is mandatory, as Isle of Man must serve as the company's place of incorporation. Minimum two directors required." },
  { num: "02", title: "Local Directors & Bank Account", body: "Appoint two Isle of Man resident directors. Open a bank account within the jurisdiction — banking outside the island is not permitted." },
  { num: "03", title: "Technical Certification", body: "All online slots, RNGs, and gaming tools must be certified by an independent laboratory. Player deposits must be protected at all times." },
  { num: "04", title: "Document Preparation", body: "Full document package prepared: business plan, AML policy, technical documentation, personnel CVs, and source of funds evidence." },
  { num: "05", title: "GSC Application", body: "Application submitted to the Gambling Supervision Commission. Review period typically 10–12 weeks. We manage all correspondence." },
  { num: "06", title: "License Issued", body: "GSC grants the license. Your operation may commence immediately. Ongoing compliance support and annual renewal included." },
];

const REQS = [
  "Company must be incorporated on the Isle of Man (mandatory)",
  "Minimum two directors — both must be Isle of Man residents",
  "Bank accounts must be opened within Isle of Man jurisdiction only",
  "Passport copies and proof of address for all principals",
  "CVs and professional backgrounds of all key personnel",
  "Source of funds and financial standing documentation",
  "Detailed business plan covering all proposed gambling activities",
  "AML/KYC policy compliant with GSC requirements",
  "Independent laboratory certification of all RNGs and gaming tools",
  "Player deposit protection mechanism in place",
  "Physical registered office on the island",
];

const PROS = [
  "Tier-1 global reputation — trusted by banks and processors worldwide",
  "Single license covers every gambling vertical",
  "UK government favorable stance toward gambling industry",
  "Pragmatic GSC regulator — clear and predictable rules",
  "No capital gains tax, inheritance tax or wealth tax",
  "Recognized by major international payment processors",
];

const CONS = [
  "Company must be physically incorporated on the island",
  "Two Isle of Man resident directors mandatory",
  "Banking restricted to Isle of Man jurisdiction only",
  "Higher operational costs vs offshore alternatives",
  "Timeline 6–12 months — not for fast launches",
  "Independent lab certification required for all RNGs",
];

const FAQS = [
  { q: "What is the timeframe for an Isle of Man gambling license?", a: "GSC application review is typically 10–12 weeks after submission. Including company formation and document preparation, total timeline is 6–12 months." },
  { q: "Why must directors be Isle of Man residents?", a: "The GSC requires genuine local governance. Both directors must be island residents to ensure regulatory accountability and company substance on the island." },
  { q: "Can I bank outside the Isle of Man with this license?", a: "No. Licensed companies are required to maintain bank accounts exclusively within the Isle of Man jurisdiction. We assist with local bank account opening." },
  { q: "Does one license cover all gambling types?", a: "Yes — one document package from the GSC covers online casinos, lotteries, sports betting, bookmaking, poker networks and betting exchanges. Subbrands only require a sublicense." },
  { q: "What documents are required for an Isle of Man gambling license?", a: "Company incorporation documents, passport copies and CVs for all directors and shareholders, source of funds documentation, business plan, AML policy, technical documentation, and independent RNG certification." },
  { q: "How much does an Isle of Man gambling license cost?", a: "Starting from £25,000 for our full service including company formation, director arrangements, document preparation, and GSC application. Contact us for an exact breakdown." },
];

const RELATED = [
  { href: "/malta-gaming-license", reg: "MGA", name: "Malta", desc: "EU gold standard. Full European market access. 6–9 months, from €25,000." },
  { href: "/curacao-gaming-license", reg: "CGA", name: "Curaçao", desc: "Most affordable. All verticals, crypto-friendly. 3–4 months, from €15,000." },
  { href: "/gambling-license-in-costa-rica", reg: "Municipal", name: "Costa Rica", desc: "Fastest option. No business plan. 2–5 weeks, from $15,000." },
];

const ADVANTAGES = [
  { Icon: Shield, title: "Single License — All Verticals", body: "One document package covers every gambling vertical. No additional applications per game type." },
  { Icon: Landmark, title: "Strong Banking Relationships", body: "GSC license is recognized by tier-1 international banks and major payment processors globally." },
  { Icon: Crown, title: "UK-Adjacent Prestige", body: "Favorable UK regulatory attitude without the complexity of a full UKGC license. Pragmatic and business-friendly." },
];

const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "Gambling Supervision Commission (GSC)", ""],
  ["Validity", "Annual, renewable", ""],
  ["Directors", "2 IOM residents required", "text-[#f59e0b]"],
  ["Banking", "IOM jurisdiction only", "text-[#f59e0b]"],
  ["Timeline", "6–12 months", ""],
  ["Starting from", "£25,000", "text-[#444CE7]"],
  ["Coverage", "All gambling verticals", ""],
  ["Status", "Tier 1", "text-[#22c55e]"],
];

const CornerAccent = () => (
  <div className="absolute top-0 right-0 pointer-events-none">
    <div className="w-[24px] h-[1px] bg-[#444CE7]/40" />
    <div className="w-[1px] h-[24px] bg-[#444CE7]/40 ml-auto" />
  </div>
);

const ScanSweep = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#444CE7]/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  </div>
);

const IsleOfManGamingPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);

  const c1 = useCounter(25000);

  useEffect(() => {
    document.title = "Isle of Man Gambling License GSC — iGaming License | Incluence";
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    const setProp = (p: string, c: string) => {
      let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", "Obtain an Isle of Man GSC gambling license — Tier-1 prestige for all gaming verticals. From £25,000, 6–12 months. Full legal support by Incluence.");
    setMeta("keywords", "Isle of Man gambling license, GSC license, Isle of Man iGaming, GSC gaming license");
    setProp("og:title", "Isle of Man Gambling License GSC | Incluence");
    setProp("og:url", "https://incluence.com/gambling-license-of-the-isle-of-man");
    setProp("og:type", "website");

    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/gambling-license-of-the-isle-of-man";

    const schema = {
      "@context": "https://schema.org", "@type": "Service",
      name: "Isle of Man GSC Gambling License",
      description: "Legal assistance in obtaining an Isle of Man GSC gambling license for all gaming verticals.",
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      areaServed: "Worldwide",
      url: "https://incluence.com/gambling-license-of-the-isle-of-man",
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "25000" },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "iom-schema";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#iom-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5, s6];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ── BREADCRUMB ── */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[11px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to="/gamble-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Gambling License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">Isle of Man Gambling License</span>
          </div>
        </nav>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>

        {/* Isle of Man SVG */}
        <svg className="absolute pointer-events-none z-[2]" style={{ right: "8%", top: "50%", transform: "translateY(-50%)", width: 300, height: 360 }} viewBox="0 0 180 260" fill="none">
          <path d="M60 40 C68 28, 82 22, 100 20 C118 18, 135 24, 145 35 C155 46, 158 62, 155 80 C152 98, 145 115, 138 130 C132 142, 128 155, 125 168 C122 180, 118 192, 110 200 C102 208, 90 212, 78 210 C66 208, 55 200, 48 188 C42 176, 40 162, 42 148 C44 132, 48 118, 50 105 C52 90, 54 76, 55 62 C56 50, 57 44, 60 40Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
          <path d="M70 60 L95 90 L85 130 L100 160" stroke="rgba(240,235,224,0.06)" strokeWidth="0.5" fill="none" />
          <path d="M110 40 L105 80 L120 120" stroke="rgba(240,235,224,0.06)" strokeWidth="0.5" fill="none" />
          <g>
            <circle cx="100" cy="105" r="3" fill="#444CE7" opacity="0.8" />
            <circle cx="100" cy="105" r="6" stroke="#444CE7" strokeWidth="0.5" fill="none" opacity="0.3" />
            <text x="108" y="108" fill="rgba(240,235,224,0.5)" fontSize="7" fontFamily="Manrope" fontWeight="400">Douglas</text>
            <text x="108" y="117" fill="rgba(68,76,231,0.5)" fontSize="5.5" fontFamily="Manrope" fontWeight="400">GSC HQ</text>
          </g>
          <text x="120" y="200" fill="rgba(240,235,224,0.08)" fontSize="20" fontFamily="Manrope" fontWeight="300">IOM</text>
        </svg>

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Gambling License</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Tier 1 · GSC</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
              <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Isle of Man</span>
              {" "}Gaming License
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">
              A Tier-1 prestige gambling license from the Gambling Supervision Commission. One document package covers all gambling verticals — casino, lottery, sports betting, poker networks. Trusted by top-tier operators worldwide.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
              <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
            </div>
          </div>
        </div>

        {/* Facts Strip */}
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [`£${c1.toLocaleString()}+`, "Starting from", ""],
              ["6–12 months", "Timeline", ""],
              ["GSC", "Regulator", "text-[#444CE7] font-semibold"],
              ["Tier 1", "Status", "text-[#444CE7]"],
              ["All verticals", "Coverage", ""],
              ["UK-adjacent", "Jurisdiction", ""],
            ].map(([value, label, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{value}</span>
                <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About GSC License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Why the Isle of Man Stands Out</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The Isle of Man is not part of the UK or the European Union, yet it benefits from the UK government's favorable attitude toward the gambling industry. The Gambling Supervision Commission (GSC) is the licensing authority — known for its pragmatic regulatory approach and business-friendly environment.</p>
              <p>The unique feature of Isle of Man licensing is that a single package of documents grants the right to operate all gambling services — online casinos, lotteries, sports betting, bookmaking, poker networks and betting exchanges. If another company operates under the same brand, only a sublicense is required.</p>
              <p>The Isle of Man license is recognized by tier-1 banks, major payment processors and software providers worldwide, making it one of the most operationally powerful licenses available outside the EU.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden">
                <CornerAccent />
                <ScanSweep />
                <a.Icon className="w-5 h-5 text-[#444CE7] mb-3" />
                <h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-[1.7]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain an Isle of Man License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A 6-step process managed by our team. Company must be incorporated on the island — we handle all local requirements.</p>

          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (
                <div key={i} ref={stepRefs[i]} data-step className="bg-[#111111] p-7 relative overflow-hidden group">
                  <ScanSweep />
                  <span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.num}</span>
                  <h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Comprehensive requirements reflecting the license's Tier-1 status. We prepare the full documentation package on your behalf.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {REQS.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-[1.7]">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <ScanSweep />
              <div className="absolute top-6 right-6">
                <div className="relative" style={{ width: 8, height: 8 }}>
                  <div className="absolute inset-0 bg-[#22c55e]" />
                  <div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "pd 2s ease-out infinite" }} />
                </div>
              </div>
              <style>{`@keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}`}</style>
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {FACTS_TABLE.map(([label, value, cls], i) => (
                  <div key={i} className="flex justify-between py-3">
                    <span className="text-[12px] text-[#5A5550]">{label}</span>
                    <span className={`text-[12px] font-medium ${cls || "text-[#F0EBE0]"}`}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block w-full text-center">Get a Free Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROS & CONS ── */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Advantages & Limitations</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Pros & Cons</h2>
          <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[14px] font-medium text-[#22c55e] uppercase tracking-[0.08em] mb-6">Advantages</h3>
              <div className="space-y-3">
                {PROS.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[14px] font-medium text-[#ef4444] uppercase tracking-[0.08em] mb-6">Limitations</h3>
              <div className="space-y-3">
                {CONS.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-[#ef4444] mt-0.5 shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Common Questions</h2>
          <div className="max-w-[720px]">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex justify-between items-center w-full py-5 cursor-pointer text-left bg-transparent border-0" style={{ fontFamily: "inherit" }}>
                  <span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#5A5550] shrink-0 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`} />
                </button>
                {faqOpen === i && (
                  <p className="text-[13px] text-[#9A9590] leading-[1.8] pb-5">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedJurisdictions items={RELATED} />

      {/* ── CTA FORM ── */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for an Isle of Man Gaming License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your project. We'll handle everything — from company incorporation to GSC application and license issuance.</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[["Full Name", "text"], ["Company Name", "text"], ["Gambling Verticals", "text"], ["Target Markets", "text"]].map(([label, type]) => (
                  <div key={label}>
                    <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label>
                    <input type={type} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">Additional details — existing structure, timeline, budget...</label>
                <textarea rows={4} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" style={{ fontFamily: "inherit" }} />
              </div>
              <button type="submit" className="px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IsleOfManGamingPage;
