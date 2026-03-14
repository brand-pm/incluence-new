import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, Shield, Percent, Globe } from "lucide-react";
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

const STEPS = [
  { num: "01", title: "Investment Firm Incorporation", body: "Register a Malta Investment Services company. Correct legal structure with qualified directors, shareholders, and minimum authorized capital deposited." },
  { num: "02", title: "Key Personnel Appointment", body: "Appoint a qualified CEO, compliance officer, and AML officer. MFSA conducts Fit & Proper checks on all key function holders — financial sector experience required." },
  { num: "03", title: "Bank Account & Capital", body: "Open corporate account at an MFSA-approved bank. Deposit required authorized capital. Source of funds documentation reviewed by MFSA." },
  { num: "04", title: "Documentation Package", body: "Business plan, AML policy, internal procedures, organizational structure, IT infrastructure description, and personnel qualification packages." },
  { num: "05", title: "MFSA Application", body: "Submit complete ISL application to the MFSA. Regulator review 3–5 months. We handle all correspondence, follow-up queries, and compliance document requests." },
  { num: "06", title: "License Issued", body: "MFSA grants the Investment Services License. EU passporting notification sent to target member states. Ongoing compliance support included." },
];
const REQS = [
  "Malta Investment Services company incorporated with local registered office",
  "Minimum authorized capital — from €125,000 for Category 2 (dealing on own account)",
  "Qualified CEO, compliance officer, and AML officer with documented FX experience",
  "All key personnel pass MFSA Fit & Proper assessment",
  "Passport copies and CVs for all directors, shareholders, and key staff",
  "Source of funds and wealth documentation for all principals",
  "Detailed business plan covering all investment services and target EU markets",
  "AML/KYC policy compliant with FIAU requirements and EU AMLD",
  "Internal control and risk management framework",
  "Trading platform and IT infrastructure documentation",
  "Professional indemnity insurance (for certain service categories)",
  "Annual audited financial statements — ongoing requirement",
];
const PROS = [
  "Full EU MiFID II passporting across all 27 member states",
  "~5% effective corporate tax — lowest in the EU",
  "Mature financial services ecosystem with experienced local professionals",
  "MFSA recognized globally by institutional partners and prime brokers",
  "Slightly faster than CySEC — 5–7 months vs 6–9 months",
  "Strong crypto and fintech integration possibilities",
  "60+ double taxation treaties",
];
const CONS = [
  "Local office and qualified key personnel in Malta required",
  "Strict MFSA Fit & Proper requirements for all key function holders",
  "Minimum capital €125,000 plus ongoing operational costs",
  "Annual audited financial statements mandatory",
  "Annual MFSA fees and compliance obligations",
  "Not suitable for rapid launch timelines",
];
const FAQS = [
  { q: "What are the requirements for obtaining a Forex license in Malta?", a: "Register a Malta investment company, appoint qualified directors and compliance officers, deposit authorized capital, prepare AML policy and business plan, then submit an application to the MFSA. The license must be actively maintained after issuance." },
  { q: "What documents are required to obtain a Malta forex license?", a: "Company statutory documents, business plan, AML/KYC policy, internal procedures, organizational structure, CVs and passport copies of all directors and shareholders, source of funds documentation, IT infrastructure description, and personnel qualification evidence." },
  { q: "How long does it take to obtain a Malta forex license?", a: "MFSA application review typically takes 3–5 months after submission. Including company formation and document preparation, total timeline is 5–7 months from project start." },
  { q: "What is the effective corporate tax rate in Malta for forex brokers?", a: "Malta's standard corporate tax rate is 35%, but the tax refund system (available to non-resident shareholders) results in an effective rate of approximately 5% — the lowest in the EU for qualifying investment firms." },
  { q: "Does a Malta forex license cover all EU countries?", a: "Yes. Under MiFID II passporting rights, an MFSA-licensed investment firm can provide investment services across all 27 EU member states without additional local registration." },
  { q: "Can non-EU residents own a Malta investment firm?", a: "Yes. Non-EU residents can own and operate a Malta investment firm. Key management positions typically require persons with documented financial sector experience, but residency in Malta is not always required for shareholders." },
];
const RELATED = [
  { href: "/cyprus-forex-license", reg: "CySEC", name: "Cyprus", desc: "Most popular EU forex license. MiFID II passporting, 12.5% corp. tax. 6–9 months." },
  { href: "/forex-broker-licence-in-vanuatu", reg: "VFSC", name: "Vanuatu", desc: "Fast offshore license. 3 classes, 2–3 months, from $15,000." },
  { href: "/forex-broker-licence-in-mauritius", reg: "FSC", name: "Mauritius", desc: "Reputable offshore jurisdiction. Options, futures, forex. 3–6 months." },
];
const ADVANTAGES = [
  { Icon: Shield, title: "EU MiFID II Passporting", body: "Single MFSA license covers all 27 EU member states. No additional local registrations required for EU retail clients." },
  { Icon: Percent, title: "~5% Effective Tax Rate", body: "Malta's tax refund system reduces the effective corporate tax rate to approximately 5% for qualifying investment firms — lowest in the EU." },
  { Icon: Globe, title: "Mature Financial Ecosystem", body: "Deep pool of experienced compliance officers, auditors, and legal professionals specializing in investment firm licensing." },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "Malta Financial Services Authority", ""],
  ["License type", "Investment Services License (ISL)", ""],
  ["Framework", "MiFID II", ""],
  ["Min. capital", "€125,000 (Cat.2)", "text-[#444CE7]"],
  ["Corp. tax", "~5% effective", "text-[#22c55e]"],
  ["EU passporting", "27 member states", "text-[#22c55e]"],
  ["Timeline", "5–7 months", ""],
  ["Starting from", "€30,000", "text-[#444CE7]"],
];

const MaltaForexPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(30000);
  const c2 = useCounter(5);

  useEffect(() => {
    document.title = "Malta Forex License MFSA — EU Investment Broker License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Malta MFSA forex broker license — EU MiFID II compliant. From €30,000, 5–7 months. Favorable 5% corporate tax. Full legal support by Incluence.");
    setMeta("keywords", "Malta forex license, MFSA forex license, Malta investment license, MiFID II Malta, forex broker Malta");
    setProp("og:title", "Malta Forex License MFSA | Incluence");
    setProp("og:url", "https://incluence.com/forex-broker-licence-in-malta");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/forex-broker-licence-in-malta";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Malta MFSA Forex Broker License", description: "Legal assistance obtaining a Malta Investment Services License under MiFID II. Full EU market access with favorable 5% corporate tax.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "European Union", url: "https://incluence.com/forex-broker-licence-in-malta", offers: { "@type": "Offer", priceCurrency: "EUR", price: "30000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "malta-forex-schema"; s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#malta-forex-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5, s6];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[11px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to="/forex-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Forex License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">Malta Forex License</span>
          </div>
        </nav>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <svg className="absolute pointer-events-none z-[2]" style={{ right: "8%", top: "50%", transform: "translateY(-50%)", width: 340, height: 400 }} viewBox="0 0 220 260" fill="none">
          <path d="M60 110 C65 100, 80 92, 100 90 C120 88, 145 92, 160 100 C172 107, 178 118, 170 128 C162 138, 145 142, 128 140 C115 138, 105 142, 92 140 C78 138, 65 128, 60 118Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
          <path d="M155 105 C162 100, 172 98, 176 102 C180 106, 178 112, 172 116 C166 120, 158 118, 155 114" fill="#141822" stroke="rgba(240,235,224,0.1)" strokeWidth="0.8" />
          <ellipse cx="82" cy="128" rx="6" ry="4" fill="#141822" stroke="rgba(240,235,224,0.08)" strokeWidth="0.6" />
          <path d="M80 105 L110 112 L140 106" stroke="rgba(240,235,224,0.06)" strokeWidth="0.5" fill="none" />
          <g>
            <circle cx="118" cy="112" r="3" fill="#444CE7" opacity="0.8" />
            <circle cx="118" cy="112" r="6" stroke="#444CE7" strokeWidth="0.5" fill="none" opacity="0.3" />
            <text x="126" y="115" fill="rgba(240,235,224,0.5)" fontSize="7" fontFamily="Manrope" fontWeight="400">Valletta</text>
            <text x="126" y="124" fill="rgba(68,76,231,0.5)" fontSize="5.5" fontFamily="Manrope" fontWeight="400">MFSA HQ</text>
          </g>
          <text x="85" y="180" fill="rgba(240,235,224,0.08)" fontSize="20" fontFamily="Manrope" fontWeight="300">MT</text>
          <text x="155" y="170" fill="rgba(240,235,224,0.06)" fontSize="8" fontFamily="Manrope" fontWeight="300">EU</text>
        </svg>

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Forex License</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">EU · MFSA · MiFID II</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
              <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Malta</span>{" "}Forex License
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">A Malta Investment Services License (ISL) from the MFSA grants full EU MiFID II compliance — passporting rights across all 27 member states, access to European banking infrastructure, and the credibility of one of the EU's most established financial regulators. Enhanced by Malta's favorable 5% effective corporate tax rate.</p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
              <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`€${c1.toLocaleString()}+`, "Starting from", ""], ["5–7 months", "Timeline", ""], ["MFSA", "Regulator", "text-[#444CE7] font-semibold"], ["27 EU", "Market access", "text-[#444CE7]"], [`${c2}%`, "Effective corp. tax", "text-[#22c55e]"], ["MiFID II", "Framework", ""]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About MFSA License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Why Malta for Forex Broker Licensing</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The Malta Financial Services Authority (MFSA) is one of Europe's most respected financial regulators. An MFSA Investment Services License (ISL) provides full MiFID II compliance and EU passporting — the same rights as a CySEC license, but with distinct advantages in taxation and regulatory approach.</p>
              <p>Malta's unique tax refund system results in an effective corporate tax rate of approximately 5% for qualifying companies — the lowest in the EU. This makes Malta particularly attractive for forex brokers who need EU regulatory status combined with maximum tax efficiency.</p>
              <p>The MFSA has extensive experience licensing investment firms and has built one of the EU's most developed financial services ecosystems. Obtaining a forex license in Malta typically takes 5–7 months — slightly faster than Cyprus — with a well-defined regulatory process and experienced local compliance professionals available.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden"><CornerAccent /><ScanSweep /><a.Icon className="w-5 h-5 text-[#444CE7] mb-3" /><h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{a.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{a.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Malta Forex License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A 6-step process fully managed by our team. 5–7 months from project start to MFSA approval.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (
                <div key={i} ref={stepRefs[i]} data-step className="bg-[#111111] p-7 relative overflow-hidden group"><ScanSweep /><span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.num}</span><h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.body}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">What You'll Need</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">MFSA requirements are thorough but transparent. We prepare the complete documentation package and manage all regulator interactions on your behalf.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {REQS.map((req, i) => (<div key={i} className="flex items-start gap-3"><div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" /><span className="text-[13px] text-[#9A9590] leading-[1.7]">{req}</span></div>))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <ScanSweep />
              <div className="absolute top-6 right-6"><div className="relative" style={{ width: 8, height: 8 }}><div className="absolute inset-0 bg-[#22c55e]" /><div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "pd 2s ease-out infinite" }} /></div></div>
              <style>{`@keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}`}</style>
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {FACTS_TABLE.map(([l, v, cls], i) => (<div key={i} className="flex justify-between py-3"><span className="text-[12px] text-[#5A5550]">{l}</span><span className={`text-[12px] font-medium ${cls || "text-[#F0EBE0]"}`}>{v}</span></div>))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block w-full text-center">Get a Free Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Advantages & Limitations</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Pros & Cons</h2>
          <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-8"><h3 className="text-[14px] font-medium text-[#22c55e] uppercase tracking-[0.08em] mb-6">Advantages</h3><div className="space-y-3">{PROS.map((p, i) => (<div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" /><span className="text-[13px] text-[#9A9590] leading-[1.7]">{p}</span></div>))}</div></div>
            <div className="bg-[#111111] p-8"><h3 className="text-[14px] font-medium text-[#ef4444] uppercase tracking-[0.08em] mb-6">Limitations</h3><div className="space-y-3">{CONS.map((c, i) => (<div key={i} className="flex items-start gap-3"><X className="w-4 h-4 text-[#ef4444] mt-0.5 shrink-0" /><span className="text-[13px] text-[#9A9590] leading-[1.7]">{c}</span></div>))}</div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Common Questions</h2>
          <div className="max-w-[720px]">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex justify-between items-center w-full py-5 cursor-pointer text-left bg-transparent border-0" style={{ fontFamily: "inherit" }}><span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{f.q}</span><ChevronDown className={`w-4 h-4 text-[#5A5550] shrink-0 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`} /></button>
                {faqOpen === i && <p className="text-[13px] text-[#9A9590] leading-[1.8] pb-5">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedJurisdictions title="Other Forex Jurisdictions" items={RELATED} />

      {/* CTA FORM */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Malta Forex License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your brokerage — target markets, instruments, capital structure. We'll prepare a cost and timeline breakdown within 24 hours.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Target Markets" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Investment Services" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
              </div>
              <textarea placeholder="Additional details — existing structure, trading instruments, budget, EU passporting requirements..." className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors min-h-[120px] resize-none" />
              <button type="submit" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaltaForexPage;
