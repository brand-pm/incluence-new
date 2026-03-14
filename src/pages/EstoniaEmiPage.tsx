import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Check, X } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

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
  { num: "01", title: "OÜ Company Formation", body: "Register Estonian OÜ via e-Residency or power of attorney. Registered address in Estonia required. Directors with financial experience." },
  { num: "02", title: "Capital & Banking", body: "€350,000 deposited at a Finantsinspektsioon-approved bank or EU EMI. Full source of funds documentation required." },
  { num: "03", title: "AML/KYC Framework", body: "AML policy compliant with EU AMLD and Estonian AML Act. MLRO appointed. KYC systems and transaction monitoring operational." },
  { num: "04", title: "Technical Documentation", body: "IT security measures, payment architecture, cybersecurity framework, business continuity plan — all documented for regulatory review." },
  { num: "05", title: "Finantsinspektsioon Application", body: "Full submission to the Estonian Financial Supervision Authority. 6–9 month review. We manage all queries and correspondence." },
  { num: "06", title: "License Issued", body: "EU passport activated. SEPA access granted. Annual reporting and fee obligations commence. Ongoing compliance support included." },
];

const REQS = [
  "Estonian OÜ with registered office in Estonia",
  "€350,000 at Finantsinspektsioon-approved institution",
  "Qualified directors with financial/payment experience",
  "MLRO appointed with Estonian financial sector credentials",
  "AML/KYC policy — EU AMLD and Estonian AML Act compliant",
  "Technical security measures for client funds",
  "Company charter, business plan, organizational structure",
  "Passport copies and CVs for all directors and shareholders",
  "Source of funds documentation",
  "Certificate of no criminal record",
  "All shareholders over 18 years of age",
  "Annual Finantsinspektsioon fee and reporting",
];

const FACTS: [string, string, string][] = [
  ["Regulator", "Finantsinspektsioon", ""],
  ["Tax on retained", "0%", "text-[#22c55e]"],
  ["Min. capital", "€350,000", "text-[#444CE7]"],
  ["EU passport", "All member states", "text-[#22c55e]"],
  ["E-Residency", "Supported", "text-[#22c55e]"],
  ["Timeline", "6–12 months", ""],
  ["Validity", "Indefinite", "text-[#22c55e]"],
];

const PROS = [
  "0% corporate tax on retained earnings",
  "E-Residency — full remote management from anywhere",
  "Full EU passporting — all 27 member states",
  "Pioneer in digital governance and e-services",
  "Indefinite license validity",
  "SEPA access across 36 countries",
];

const CONS = [
  "€350,000 minimum authorized capital",
  "6–12 months review period",
  "Banking can be selective for new EMI applicants",
  "Qualified directors with financial experience required",
  "Annual reporting obligations to Finantsinspektsioon",
];

const FAQS = [
  { q: "What does an Estonia EMI license authorize?", a: "An Estonian EMI license authorizes your company to issue its own electronic currency, provide payment services to clients, create and maintain payment systems, open and manage e-wallets, and carry out related financial operations under EU Directive 2015/2366." },
  { q: "What are the requirements for an Estonia EMI license?", a: "You need an Estonian OÜ with registered office, €350,000 authorized capital at an approved institution, qualified directors, a qualified MLRO, comprehensive AML/KYC policy compliant with EU AMLD and Estonian AML Act, and a full application to Finantsinspektsioon." },
  { q: "What documents are required?", a: "Company statutory documents, detailed business plan, AML/KYC policy, technical security measures documentation, passport copies and CVs for all principals, source of funds evidence, and criminal record certificates." },
  { q: "How long does it take to get an Estonia EMI license?", a: "Finantsinspektsioon review is typically 6–9 months after submission. Including company formation and documentation preparation, total timeline is 6–12 months from project start." },
  { q: "Can I manage the company via e-Residency?", a: "Yes. Estonia's e-Residency program allows founders to manage the company fully remotely — sign documents digitally, file reports, and handle administrative tasks from anywhere in the world without traveling to Estonia." },
];

const RELATED = [
  { href: "/e-money-license-lithuania", flag: "🇱🇹", reg: "Bank of Lithuania", name: "Lithuania", desc: "Top-5 globally. SEPA 36 countries. Full EU passport. 6–12 months." },
  { href: "/e-money-license-malta", flag: "🇲🇹", reg: "MFSA", name: "Malta", desc: "Top-3 globally. ~5% effective tax. EU single passport. 6–12 months." },
  { href: "/e-money-license-uk", flag: "🇬🇧", reg: "FCA", name: "United Kingdom", desc: "Tier-1 globally recognized. Faster Payments, BACS, CHAPS, SWIFT. 12–18 months." },
];

const EstoniaEmiPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(350);
  const c2 = useCounter(0);
  const stepRefs = [s1, s2, s3, s4, s5, s6];

  useEffect(() => {
    document.title = "Estonia EMI License — E-Money Institution | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get an Estonia EMI license — issue electronic currency, payment services. 0% tax on retained earnings. €350,000 min. Incluence legal support.");
    setMeta("keywords", "Estonia EMI license, Finantsinspektsioon EMI, e-money license Estonia, 0% tax Estonia, EMI Estonia");
    setProp("og:title", "Estonia EMI License | Incluence");
    setProp("og:url", "https://incluence.com/emi-license-in-estonia");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/emi-license-in-estonia";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Estonia EMI License", description: "Legal assistance obtaining an EMI license in Estonia. 0% tax on retained earnings, e-Residency, EU passporting.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "European Union", url: "https://incluence.com/emi-license-in-estonia", offers: { "@type": "Offer", priceCurrency: "EUR", price: "350000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "estonia-emi-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#estonia-emi-schema")?.remove(); can?.remove(); };
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
          <span className="text-[#9A9590]">Estonia EMI License</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        {/* Estonia SVG map */}
        <svg className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[340px] h-[380px] pointer-events-none z-[2] opacity-[0.08] hidden lg:block" viewBox="0 0 340 380" fill="none">
          <path d="M60 160 L100 130 L160 120 L220 110 L280 120 L300 140 L290 170 L260 190 L200 200 L140 210 L80 200 L50 180 Z" fill="#444CE7" fillOpacity="0.15" stroke="#444CE7" strokeOpacity="0.3" strokeWidth="0.5" />
          <path d="M40 170 L30 200 L50 210 L70 195 L50 180 Z" fill="#444CE7" fillOpacity="0.1" stroke="#444CE7" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d="M60 140 L50 160 L80 165 L90 145 Z" fill="#444CE7" fillOpacity="0.1" stroke="#444CE7" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d="M100 140 L200 130 M150 160 L250 155" stroke="#444CE7" strokeOpacity="0.1" strokeWidth="0.3" />
          <circle cx="260" cy="140" r="4" fill="#444CE7" fillOpacity="0.6" />
          <circle cx="260" cy="140" r="8" fill="none" stroke="#444CE7" strokeOpacity="0.3" strokeWidth="0.5" />
          <text x="260" y="125" textAnchor="middle" fill="#444CE7" fillOpacity="0.5" fontSize="8" fontFamily="Manrope">Tallinn</text>
          <text x="260" y="158" textAnchor="middle" fill="#444CE7" fillOpacity="0.3" fontSize="6" fontFamily="Manrope">Finantsinspektsioon</text>
          <text x="170" y="240" textAnchor="middle" fill="#F0EBE0" fillOpacity="0.06" fontSize="28" fontFamily="Manrope" fontWeight="300">EE</text>
          <text x="170" y="260" textAnchor="middle" fill="#444CE7" fillOpacity="0.15" fontSize="8" fontFamily="Manrope">EU · 0% Tax</text>
        </svg>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex gap-3 mb-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— EMI License</span>
            <span className="text-[9px] text-[#5A5550] border border-white/10 px-2 py-0.5 uppercase tracking-[0.08em]">EU · Finantsinspektsioon · 0% Tax</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Estonia</span> EMI License
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] max-w-[500px] mb-10">
            An Estonian EMI license grants the legal right to issue your own electronic currency, provide payment services to clients, create and maintain payment systems — and carry out related financial operations under EU Directive 2015/2366. Combined with Estonia's 0% corporate tax on retained earnings and e-Residency, it is the most tax-efficient EU EMI option.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
            <a href="#requirements" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Requirements</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              ["€" + c1 + "K+", "Min. Capital", ""],
              ["6–12 months", "Timeline", ""],
              ["Finantsinspektsioon", "Regulator", "accent-sm"],
              [c2 + "%", "Tax on retained earnings", "green"],
              ["E-Residency", "Remote management", "accent"],
              ["EU Passport", "All member states", "green"],
            ].map(([v, l, t], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <span className={`font-light leading-none block ${t === "accent-sm" ? "text-[#444CE7] text-[10px] font-semibold" : t === "accent" ? "text-[#444CE7] text-[11px] font-semibold" : t === "green" ? "text-[#22c55e] text-[22px]" : "text-[#F0EBE0] text-[22px]"}`}>{v}</span>
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About Estonia EMI</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">Issue E-Money with 0% Tax on Retained Earnings</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>By obtaining an Estonian EMI license, your company is legally authorized to: issue its own electronic currency; provide various payment services to clients; create and maintain payment systems; and carry out other services related to the company's operations, including those not directly connected to electronic money.</p>
              <p>Estonia's Finantsinspektsioon supervises EMI licensing under EU PSD2 and the Electronic Money Directive. A licensed Estonian company gains full EU passporting rights and SEPA access — operating across all EU member states under a single authorization.</p>
              <p>The defining advantage is Estonia's 0% corporate income tax on retained earnings — tax is only triggered when profits are distributed as dividends. For a growing payment institution reinvesting revenue into operations, this is a significant structural advantage. The e-Residency program additionally allows founders to manage the company fully remotely from anywhere.</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              ["0% Tax on Retained Earnings", "Estonian EMI companies pay no corporate tax on profits reinvested in the business. Tax only triggers on dividends."],
              ["Issue Your Own E-Money", "Full right to issue electronic currency, open client e-wallets, and create payment systems under a single authorization."],
              ["E-Residency + Remote Management", "Manage your Estonian EMI company fully online from anywhere — sign documents digitally, file reports remotely."],
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Obtain an Estonia EMI License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">6-step process. E-Residency enables remote company management. Finantsinspektsioon review takes 6–9 months.</p>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Estonia EMI Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Finantsinspektsioon applies thorough due diligence. We prepare the full package tailored to Estonian standards.</p>
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

      {/* RELATED */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Related</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Other EMI Jurisdictions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {RELATED.map((r) => (
              <Link to={r.href} key={r.name} className="bg-[#111111] p-7 group relative overflow-hidden block no-underline hover:bg-[#0f0f0f] transition-colors">
                <CornerAccent /><ScanSweep />
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-500" />
                <span className="text-2xl mb-2 block">{r.flag}</span>
                <span className="text-[11px] text-[#444CE7] font-semibold tracking-[0.08em] block mb-1">{r.reg}</span>
                <span className="text-[18px] font-semibold text-[#F0EBE0] block mb-3">{r.name}</span>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for an Estonia EMI License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your payment business model. We'll recommend the optimal structure and provide a detailed timeline and cost breakdown.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Payment Services" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Target Markets" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <textarea placeholder="E-wallet model, e-residency plans, capital available, launch timeline..." rows={4} className="md:col-span-2 bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors resize-none" />
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

export default EstoniaEmiPage;
