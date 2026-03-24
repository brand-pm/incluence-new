import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, Zap, Globe, Layers } from "lucide-react";
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
  { num: "01", title: "Company Registration", body: "Register a private limited liability company (NV or BV) in Curaçao. This is the required legal form for obtaining a gaming license." },
  { num: "02", title: "Local Representative", body: "Appoint a resident of the Netherlands Antilles as local representative — required by the CGA. We arrange this through our network." },
  { num: "03", title: "Document Collection", body: "Passport copy, proof of residential address, bank reference letter, certificate of no criminal record — all documents max 3 months old." },
  { num: "04", title: "License Application", body: "Submit the complete application to the relevant Curaçao authority. Review typically takes 2 weeks. We manage all follow-up correspondence." },
  { num: "05", title: "License Issued", body: "Receive your Curaçao gaming sub-license, valid for 1 year with annual renewal. Your operation can launch immediately after issuance." },
];

const REQS = [
  "Passport copy (valid, full color scan)",
  "Proof of residential address (utility bill or bank statement, max 3 months old)",
  "Bank reference letter on official letterhead",
  "Certificate of no criminal record",
  "Company incorporation documents",
  "Proof of website ownership for the online casino domain",
  "Information about the gaming software to be used",
  "Agreements with software and hardware providers",
  "Physical server location diagram (server must be hosted in Curaçao)",
  "Description of planned business activities",
];

const PROS = [
  "Low corporate tax rates — 2% on gambling revenue",
  "Online casino operators can accept cryptocurrency payments",
  "One of the shortest timelines for obtaining a license",
  "One sub-license covers all gambling activity types",
  "Financial reporting at the discretion of the business owner",
  "The gambling license can be obtained fully remotely",
  "No paid-up capital requirement",
];

const CONS = [
  "License renewed annually (vs 5-year MGA license)",
  "Less prestigious than EU-regulated licenses",
  "Some payment processors prefer EU-regulated operators",
  "Local representative in Netherlands Antilles required",
  "At least one physical server must be hosted in Curaçao",
  "Restrictions on servicing Curaçao residents",
];

const FAQS = [
  { q: "How long does it take to obtain a Curaçao gambling license?", a: "Company registration and obtaining a gambling license in Curaçao typically takes 3–4 months." },
  { q: "Can I apply for a Curaçao license remotely?", a: "Yes. The gambling license can be obtained remotely — physical presence is not required at any stage." },
  { q: "Does a Curaçao license cover all gambling types?", a: "Yes. One sub-license in Curaçao is enough to conduct any type of gambling activity — casino, sports betting, poker, and lotteries." },
  { q: "Can licensed Curaçao operators accept crypto payments?", a: "Yes. Online casino operators licensed in Curaçao can accept cryptocurrency payments from players." },
  { q: "What documents are required for a Curaçao gambling license?", a: "You will need to provide: a copy of passport; proof of residential address; bank reference letter; certificate of no criminal record. Additionally: company incorporation documents, proof of website ownership, information about gaming software, agreements with software and hardware providers, server placement diagram, and description of planned business activities." },
  { q: "How much does a Curaçao gaming license cost?", a: "The cost of a Curaçao gambling license is determined individually after discussing your requirements. Contact our specialists for an exact quote." },
];

const RELATED = [
  { href: "/malta-gaming-license", reg: "MGA", name: "Malta", desc: "EU gold standard. Full European market access. 6–9 months." },
  { href: "/gambling-license-of-the-isle-of-man", reg: "GSC", name: "Isle of Man", desc: "Tier-1 prestige. All verticals, strong reputation. 6–12 months." },
  { href: "/gambling-license-in-costa-rica", reg: "Municipal", name: "Costa Rica", desc: "Fastest option. No business plan. 2–5 weeks." },
];

const ADVANTAGES = [
  { Icon: Zap, title: "Fastest Timeline", body: "3–4 months from start to license. One of the shortest procedures globally — no lengthy regulator review queues." },
  { Icon: Globe, title: "Crypto-Friendly", body: "Licensed operators can accept cryptocurrency payments from players worldwide. No restrictions on payment methods." },
  { Icon: Layers, title: "All Verticals — One License", body: "Casino, sports betting, poker, bingo — all covered under a single sub-license. No additional permits required." },
];

const FACTS_TABLE = [
  ["Regulator", "Curaçao Gaming Authority (CGA)", ""],
  ["License type", "Sub-license (master license)", ""],
  ["Validity", "1 year, renewable", ""],
  ["Min. capital", "None required", ""],
  ["Timeline", "3–4 months", ""],
  ["Starting from", "On request", ""],
  ["Coverage", "All gambling verticals", ""],
  ["Presence", "100% remote", ""],
  ["Crypto", "Accepted", ""],
];

/* ── Corner accent ── */
const CornerAccent = () => (
  <div className="absolute top-0 right-0 pointer-events-none">
    <div className="w-[24px] h-[1px] bg-[#444CE7]/40" />
    <div className="w-[1px] h-[24px] bg-[#444CE7]/40 ml-auto" />
  </div>
);

/* ── Scan sweep ── */
const ScanSweep = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#444CE7]/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  </div>
);

const CuracaoGamingPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);

  const c1 = useCounter(15000);

  useEffect(() => {
    document.title = "Curaçao Gaming License CGA — Online Gambling License | Incluence";
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
    setMeta("description", "Get a Curaçao CGA gambling license — fastest and most affordable entry point. From €15,000, 3–4 months. Full remote process. Incluence legal support.");
    setMeta("keywords", "Curacao gaming license, CGA license, Curacao gambling license, online casino Curacao, Curacao iGaming license");
    setProp("og:title", "Curaçao Gaming License CGA | Incluence");
    setProp("og:url", "https://incluence.com/curacao-gaming-license");
    setProp("og:type", "website");

    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/curacao-gaming-license";

    const schema = {
      "@context": "https://schema.org", "@type": "Service",
      name: "Curaçao Gaming License",
      description: "Legal assistance in obtaining a Curaçao CGA gambling license for online casino, sports betting and all gambling verticals.",
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      areaServed: "Worldwide",
      url: "https://incluence.com/curacao-gaming-license",
      offers: { "@type": "Offer", priceCurrency: "EUR", price: "15000" },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "curacao-schema";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#curacao-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5];

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
            <span className="text-[#9A9590]">Curaçao Gaming License</span>
          </div>
        </nav>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>

        <TerritoryMap iso="CW" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            <div className="max-w-[580px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Gambling License</span>
                <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Offshore · CGA</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
                <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Curaçao</span>
                {" "}Gaming{"\n"}License
              </h1>
              <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">
                Curacao hosts many companies operating in the gambling industry. This is explained by simple, business-friendly legislation regulating gaming activities. Additional factors include accessibility and low taxation — making the Curaçao gaming license highly attractive for online casino operators.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
                <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
              </div>
            </div>
            {/* HERO VISUAL — Curaçao */}
            <div className="hidden lg:flex items-center justify-center w-full lg:w-[480px] shrink-0">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px] opacity-100">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                <path d="M 60 160 C 80 140 120 130 160 135 C 200 140 240 128 280 132 C 310 135 330 145 340 155 C 350 165 345 178 330 182 C 310 187 280 180 250 178 C 220 176 190 182 160 180 C 130 178 100 175 80 172 C 65 170 55 168 60 160 Z" fill="rgba(68, 76, 231, 0.12)" stroke="rgba(68, 76, 231, 0.4)" strokeWidth="1.5" />
                <circle cx="198" cy="155" r="4" fill="#444CE7" />
                <circle cx="198" cy="155" r="8" fill="rgba(68, 76, 231, 0.2)" />
                <circle cx="198" cy="155" r="14" fill="rgba(68, 76, 231, 0.08)" />
                <text x="212" y="150" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="0.05em">WILLEMSTAD</text>
                <rect x="148" y="195" width="104" height="36" fill="rgba(68, 76, 231, 0.08)" stroke="rgba(68, 76, 231, 0.25)" strokeWidth="1" />
                <text x="200" y="210" fill="#444CE7" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">CGA</text>
                <text x="200" y="224" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.08em">CURAÇAO GAMING AUTHORITY</text>
                <line x1="40" y1="155" x2="148" y2="213" stroke="rgba(68, 76, 231, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="360" y1="155" x2="252" y2="213" stroke="rgba(68, 76, 231, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 20 20 L 20 35 M 20 20 L 35 20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M 380 20 L 380 35 M 380 20 L 365 20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M 20 280 L 20 265 M 20 280 L 35 280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M 380 280 L 380 265 M 380 280 L 365 280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x="200" y="275" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="Manrope, sans-serif" textAnchor="middle" letterSpacing="0.1em">12°N · 69°W · DUTCH CARIBBEAN</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Facts Strip */}
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="border-t border-b border-white/[0.06]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-4">
              {[
                ['3–4 months', 'TIMELINE'],
                ['1 year', 'LICENSE VALIDITY'],
                ['CGA', 'REGULATOR'],
                ['All verticals', 'ONE LICENSE'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-8 border-r border-white/[0.06] last:border-r-0"
                >
                  <span className="text-[22px] font-light text-[#F0EBE0] whitespace-nowrap">
                    {value}
                  </span>
                  <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About CGA License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Why Curaçao is the Most Popular Starting Point</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Curaçao hosts more online gambling companies than almost any other jurisdiction. This is driven by simple, business-friendly legislation and one of the most accessible licensing procedures in the world.</p>
              <p>The key advantage is that a single Curaçao sub-license covers all gambling verticals — casino, sports betting, poker, and lotteries. There is no need to apply for separate licenses per product category.</p>
              <p>Unlike most jurisdictions, Curaçao imposes no paid-up capital requirement, no mandatory business plan, and allows fully remote application. Online casino operators can also accept cryptocurrency payments, making this license particularly attractive for crypto-facing gambling businesses.</p>
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
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Curaçao License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A streamlined 5-step process managed entirely by our team. Physical presence not required at any stage.</p>

          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (
                <div key={i} ref={stepRefs[i]} data-step className="bg-[#080808] p-6 relative group">
                  <span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.num}</span>
                  <h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.body}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#444CE7] group-hover:w-full transition-all duration-300" />
                </div>
              ))}
              <div className="bg-[#080808]" />
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
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">One of the lightest document requirements of any gambling jurisdiction. No business plan, no profit forecast, no software requirements — just basic KYC documentation.</p>
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
              {/* Pulse dot */}
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
            <div className="flex flex-col gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {FAQS.map((f, i) => (
                <div key={i} className="bg-[#0d0d0d]">
                  <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex justify-between items-center w-full py-5 px-5 cursor-pointer text-left bg-transparent border-0" style={{ fontFamily: "inherit" }}>
                    <span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{f.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#5A5550] shrink-0 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`} />
                  </button>
                  {faqOpen === i && (
                    <p className="text-[13px] text-[#9A9590] leading-[1.8] pb-5 px-5">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedJurisdictions items={RELATED} />

      {/* ── CTA FORM ── */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Curaçao Gaming License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your project. We'll handle everything — from company formation to license issuance. Full remote service.</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[["Full Name", "text"], ["Company Name", "text"], ["Gaming Verticals", "text"], ["Launch Timeline", "text"]].map(([label, type]) => (
                  <div key={label}>
                    <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label>
                    <input type={type} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">Additional details — target markets, existing structure, crypto requirements...</label>
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

export default CuracaoGamingPage;
