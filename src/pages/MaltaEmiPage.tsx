import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Check, X } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import RelatedJurisdictions from "@/components/RelatedJurisdictions";

const useCounter = (target: number, duration = 1200) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0; const step = target / (duration / 16);
    const t = setInterval(() => { start += step; if (start >= target) { setVal(target); clearInterval(t); } else setVal(Math.floor(start)); }, 16);
    return () => clearInterval(t);
  }, [target]);
  return val;
};

const ScanSweep = () => (<div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: "linear-gradient(90deg, transparent, rgba(68,76,231,0.04), transparent)" }} /></div>);
const CornerAccent = () => (<div className="absolute top-0 right-0 pointer-events-none"><div className="w-[1px] h-4 bg-[#444CE7]/30 absolute top-0 right-0" /><div className="h-[1px] w-4 bg-[#444CE7]/30 absolute top-0 right-0" /></div>);

const STEPS = [
  { num: "01", title: "Malta Company Formation", body: "Incorporate a Malta Limited company. Registered office in Malta. Qualified directors must pass MFSA Fit & Proper assessment." },
  { num: "02", title: "Capital & Banking", body: "€350,000 deposited at an MFSA-approved Maltese bank. Full source of funds documentation required for all shareholders." },
  { num: "03", title: "AML/KYC Framework", body: "FIAU-compliant AML policy. Qualified MLRO appointed. Transaction monitoring systems and sanctions screening operational." },
  { num: "04", title: "Technical & Organizational", body: "IT systems, client fund safeguarding, cybersecurity framework, HR policy, business continuity plan — all reviewed by MFSA." },
  { num: "05", title: "MFSA Application", body: "Full submission to MFSA. 6–9 month review period. We manage all correspondence, RFIs, and compliance queries." },
  { num: "06", title: "License Issued", body: "EU passport activated across all member states. Annual MFSA fee and PSD2 conduct of business obligations commence." },
];

const REQS = [
  "Malta Limited company with registered office",
  "€350,000 at MFSA-approved bank",
  "Qualified directors with payment experience",
  "MLRO with FIAU-compliant credentials",
  "AML/KYC policy — FIAU and EU AMLD compliant",
  "Client fund safeguarding arrangements",
  "IT systems and cybersecurity — MFSA reviewed",
  "HR policy and organizational structure",
  "Business plan covering all payment services and EU markets",
  "Passport copies, CVs, criminal records for all principals",
  "Source of funds documentation",
  "Annual MFSA fee and conduct of business reporting",
];

const FACTS: [string, string, string][] = [
  ["Regulator", "Malta Financial Services Authority", ""],
  ["Global rank", "Top 3 by EMI licenses", "text-[#444CE7]"],
  ["Min. capital", "€350,000", "text-[#444CE7]"],
  ["Corp. tax", "~5% effective", "text-[#22c55e]"],
  ["EU passport", "27 member states", "text-[#22c55e]"],
  ["Timeline", "6–12 months", ""],
  ["Validity", "Indefinite", "text-[#22c55e]"],
];

const PROS = [
  "Top-3 globally by EMI licenses issued",
  "EU single passport — all 27 member states",
  "~5% effective corporate tax — lowest EU EMI option",
  "MFSA actively supports FinTech sector",
  "Foreign investor friendly regulatory environment",
  "Strong EMI banking ecosystem",
];

const CONS = [
  "€350,000 minimum authorized capital",
  "6–12 months review period",
  "Local office and qualified directors required",
  "Annual MFSA fees and compliance obligations",
  "No UK payment rails post-Brexit",
];

const FAQS = [
  { q: "What are the conditions for a Malta EMI license?", a: "You need a Malta Limited company, €350,000 authorized capital at an MFSA-approved bank, qualified directors passing Fit & Proper assessment, a qualified MLRO, comprehensive AML/KYC policy compliant with FIAU standards, and a full application submitted to the MFSA." },
  { q: "What documents are required?", a: "Company statutory documents, passport copies and CVs for all principals, detailed business plan covering all payment services, AML/KYC policy, IT systems description, client fund safeguarding arrangements, source of funds evidence, and criminal record certificates." },
  { q: "How long does a Malta EMI license take?", a: "MFSA review is typically 6–9 months after submission. Including company formation and documentation preparation, total timeline is 6–12 months from project start." },
  { q: "What is the effective tax rate for Malta EMI companies?", a: "Malta's tax refund system reduces the effective corporate tax rate to approximately 5% for qualifying companies with non-resident shareholders — the lowest effective rate in the EU for EMI operations." },
  { q: "Does a Malta EMI license cover all EU countries?", a: "Yes. Under EU Directive 2015/2366, a Malta EMI license grants full passporting rights across all 27 EU member states under a single MFSA authorization." },
];

const RELATED = [
  { href: "/e-money-license-lithuania", flag: "🇱🇹", reg: "Bank of Lithuania", name: "Lithuania", desc: "Top-5 globally. SEPA 36 countries. Full EU passport. 6–12 months." },
  { href: "/e-money-license-uk", flag: "🇬🇧", reg: "FCA", name: "United Kingdom", desc: "Tier-1 globally recognized. Faster Payments, BACS, CHAPS, SWIFT. 12–18 months." },
  { href: "/emi-license-in-estonia", flag: "🇪🇪", reg: "Finantsinspektsioon", name: "Estonia", desc: "0% tax on retained earnings. E-Residency compatible. 6–12 months." },
];

const MaltaEmiPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(350);
  const stepRefs = [s1, s2, s3, s4, s5, s6];

  useEffect(() => {
    document.title = "Malta EMI License MFSA — E-Money Institution EU | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Malta EMI license — top-3 globally. MFSA, EU passport, ~5% tax. From €350,000. 6–12 months. Incluence legal support.");
    setMeta("keywords", "Malta EMI license, MFSA EMI, e-money license Malta, EU passport Malta, EMI Malta");
    setProp("og:title", "Malta EMI License MFSA | Incluence");
    setProp("og:url", "https://incluence.com/e-money-license-malta");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/e-money-license-malta";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Malta EMI License", description: "Legal assistance obtaining an MFSA EMI license in Malta. EU passporting, ~5% effective tax rate.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "European Union", url: "https://incluence.com/e-money-license-malta", offers: { "@type": "Offer", priceCurrency: "EUR", price: "350000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "malta-emi-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#malta-emi-schema")?.remove(); can?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 48px" }}>
        <nav className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px]">
          <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">Incluence</Link>
          <span className="text-[#5A5550]">→</span>
          <Link to="/emi-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">EMI License</Link>
          <span className="text-[#5A5550]">→</span>
          <span className="text-[#9A9590]">Malta EMI License</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        {/* Malta SVG map */}
        <svg className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[380px] pointer-events-none z-[2] opacity-[0.08] hidden lg:block" viewBox="0 0 320 380" fill="none">
          <path d="M60 160 L120 140 L200 135 L260 150 L270 170 L250 195 L180 210 L100 205 L55 185 Z" fill="#444CE7" fillOpacity="0.15" stroke="#444CE7" strokeOpacity="0.3" strokeWidth="0.5" />
          <path d="M105 200 L90 220 L110 230 L125 215 Z" fill="#444CE7" fillOpacity="0.1" stroke="#444CE7" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d="M120 160 L220 165 M140 180 L240 175" stroke="#444CE7" strokeOpacity="0.1" strokeWidth="0.3" />
          <circle cx="180" cy="170" r="4" fill="#444CE7" fillOpacity="0.6" />
          <circle cx="180" cy="170" r="8" fill="none" stroke="#444CE7" strokeOpacity="0.3" strokeWidth="0.5" />
          <text x="180" y="155" textAnchor="middle" fill="#444CE7" fillOpacity="0.5" fontSize="8" fontFamily="Manrope">Valletta</text>
          <text x="180" y="190" textAnchor="middle" fill="#444CE7" fillOpacity="0.3" fontSize="6" fontFamily="Manrope">MFSA HQ</text>
          <text x="160" y="270" textAnchor="middle" fill="#F0EBE0" fillOpacity="0.06" fontSize="28" fontFamily="Manrope" fontWeight="300">MT</text>
          <text x="160" y="290" textAnchor="middle" fill="#444CE7" fillOpacity="0.15" fontSize="8" fontFamily="Manrope">EU · Top 3</text>
        </svg>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex gap-3 mb-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— EMI License</span>
            <span className="text-[9px] text-[#5A5550] border border-white/10 px-2 py-0.5 uppercase tracking-[0.08em]">EU · MFSA · Top 3 Globally</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Malta</span> EMI License
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] max-w-[500px] mb-10">
            The Republic of Malta ranks in the top three countries globally by number of EMI licenses issued. MFSA actively promotes the FinTech sector and offers a single European passport — one license covers all EU member states. Combined with Malta's favorable ~5% effective corporate tax rate, this makes it the most tax-efficient EU option for licensed payment institutions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
            <a href="#requirements" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Requirements</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              ["€" + c1 + "K+", "Min. Capital", ""],
              ["6–12 months", "Timeline", ""],
              ["MFSA", "Regulator", "accent"],
              ["Top 3", "Globally issued", "accent"],
              ["~5%", "Effective corp. tax", "green"],
              ["EU Passport", "All member states", "green"],
            ].map(([v, l, t], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <span className={`text-[22px] font-light leading-none block ${t === "accent" ? "text-[#444CE7] text-[11px] font-semibold" : t === "green" ? "text-[#22c55e]" : "text-[#F0EBE0]"}`}>{v}</span>
                <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About Malta EMI</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">Top-3 Global EMI Hub with EU Passport</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Malta is one of the top three countries worldwide by number of EMI licenses issued. The government's loyal attitude toward foreign investors, single European passport, favorable tax preferences, and the MFSA's all-round active support for FinTech suppliers and users have made Malta a leading destination for payment institutions.</p>
              <p>The Malta Financial Services Authority governs EMI licensing under EU Directive 2015/2366. An MFSA EMI license grants access to the single European payment area — your company can issue e-money and provide payment services across all EU member states under one authorization.</p>
              <p>Malta's unique tax refund system results in an effective corporate tax rate of approximately 5% for qualifying companies — the lowest in the EU. Combined with the EU single passport, Malta is the most tax-efficient EU option for EMI companies targeting European markets.</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              ["Top-3 Global EMI Jurisdiction", "More EMI licenses issued than almost anywhere else. MFSA's pro-FinTech stance attracts payment institutions from around the world."],
              ["~5% Effective Tax Rate", "Malta's tax refund system reduces effective corporate tax to ~5% for qualifying EMIs — lowest in the EU."],
              ["EU Single Passport", "One Malta EMI license covers all 27 EU member states. No additional local registrations required to serve EU clients."],
            ].map(([t, b], i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden">
                <CornerAccent /><ScanSweep />
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{t}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Obtain a Malta EMI License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">6-step fully managed process. MFSA review is thorough — quality documentation and genuine substance are key.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (
                <div key={i} ref={stepRefs[i]} data-step className="bg-[#111111] p-7 relative overflow-hidden group">
                  <ScanSweep />
                  <span className="text-[11px] text-[#444CE7] font-mono tracking-[0.1em] block mb-3">{step.num}</span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Malta EMI Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">MFSA applies thorough due diligence. We prepare the full package tailored to their standards.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {REQS.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#444CE7]/40 mt-2 flex-shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-relaxed">{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <ScanSweep />
              <div className="absolute top-6 right-6"><div className="relative w-2 h-2"><div className="absolute inset-0 bg-[#22c55e]" /><div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }} /></div></div>
              <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {FACTS.map(([l, v, cls]) => (
                  <div key={l} className="flex justify-between py-3">
                    <span className="text-[13px] text-[#5A5550]">{l}</span>
                    <span className={`text-[13px] text-[#F0EBE0] font-medium ${cls}`}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="block w-full text-center px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">Get a Free Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Assessment</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Pros & Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[13px] text-[#22c55e] uppercase tracking-[0.1em] mb-6">Advantages</h3>
              <div className="space-y-4">
                {PROS.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#9A9590] leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[13px] text-[#ef4444] uppercase tracking-[0.1em] mb-6">Considerations</h3>
              <div className="space-y-4">
                {CONS.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#9A9590] leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Common Questions</h2>
          <div className="max-w-[720px]">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex justify-between items-center w-full py-5 cursor-pointer text-left bg-transparent border-0">
                  <span className="text-[15px] text-[#F0EBE0] font-medium pr-6">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#5A5550] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedJurisdictions tag="— Related" title="Other EMI Jurisdictions" items={RELATED} />

      {/* CTA FORM */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a Malta EMI License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your payment business model and target EU markets. We'll provide a detailed cost and timeline breakdown within 24 hours.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Payment Services Type" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Target EU Markets" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <textarea placeholder="Business model, existing infrastructure, capital available, launch timeline..." rows={4} className="md:col-span-2 bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors resize-none" />
              <div className="md:col-span-2">
                <button type="submit" className="px-8 py-3.5 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0">Send Request →</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaltaEmiPage;
