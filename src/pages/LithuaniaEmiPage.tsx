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
  { num: "01", title: "UAB Incorporation", body: "Register Lithuanian UAB. Min 3 directors with payment experience. Registered office in Lithuania mandatory." },
  { num: "02", title: "Capital & Banking", body: "€350,000 at approved bank. Source of funds documentation required for all shareholders. Banking facilitated through our network." },
  { num: "03", title: "AML/KYC Framework", body: "AML policy, MLRO appointment, transaction monitoring technology. EU AMLD compliant procedures and sanctions screening." },
  { num: "04", title: "Technical Infrastructure", body: "IT security, cybersecurity framework, business continuity documentation. Bank of Lithuania reviews technical readiness." },
  { num: "05", title: "Bank of Lithuania Application", body: "Full submission to the Bank of Lithuania. 6–9 month review period. We manage all queries and compliance correspondence." },
  { num: "06", title: "License Issued", body: "SEPA activated. EU passport granted across all member states. Annual reporting obligations and ongoing compliance support included." },
];

const REQS = [
  "Lithuanian UAB with registered office",
  "Minimum three directors with payment sector experience",
  "€350,000 authorized capital at approved bank",
  "Qualified MLRO appointed with payment credentials",
  "AML/KYC policy — EU AMLD compliant",
  "Transaction monitoring system operational",
  "HR policy and staffing procedures",
  "Technical security measures for client funds",
  "Business plan covering all payment services",
  "Passport copies, CVs, apostilled criminal records for all principals",
  "Source of funds for all shareholders",
  "All shareholders over 18 years of age",
];

const FACTS = [
  ["Regulator", "Bank of Lithuania", ""],
  ["License types", "EMI / Small EMI (SEMI)", ""],
  ["Min. capital", "€350,000", "text-[#444CE7]"],
  ["SEPA", "36 countries", "text-[#22c55e]"],
  ["EU passport", "All member states", "text-[#22c55e]"],
  ["Timeline", "6–12 months", ""],
  ["Validity", "Indefinite", "text-[#22c55e]"],
];

const PROS = [
  "Top-5 globally by EMI licenses issued",
  "SEPA access across 36 countries",
  "Full EU passporting — all 27 member states",
  "English-language regulatory communication",
  "Strong fintech ecosystem with experienced professionals",
  "Both full EMI and SEMI available",
];

const CONS = [
  "€350,000 minimum authorized capital",
  "6–12 months review period",
  "3 qualified directors with payment experience required",
  "Annual compliance and reporting obligations",
  "Banking can be selective for new applicants",
];

const FAQS = [
  { q: "What are the conditions for a Lithuania EMI license?", a: "You need a Lithuanian UAB with minimum 3 directors holding payment sector experience, €350,000 authorized capital deposited at an approved bank, a qualified MLRO, comprehensive AML/KYC policy, and a full application submitted to the Bank of Lithuania." },
  { q: "What documents are required?", a: "Company statutory documents, passport copies and CVs for all principals, detailed business plan, AML/KYC policy, technical security measures documentation, HR policy, proof of capital deposit, and source of funds evidence." },
  { q: "How long does it take to get a Lithuania EMI license?", a: "The Bank of Lithuania review period is typically 6–9 months after submission. Including company formation and document preparation, total timeline is 6–12 months from project start." },
  { q: "What is the difference between EMI and Small EMI (SEMI)?", a: "A full EMI license has no volume restrictions and requires €350,000 minimum capital. A Small EMI (SEMI) requires lower capital but limits outstanding e-money to €5 million. SEMI is suitable for startups and lower-volume operators." },
  { q: "Does a Lithuania EMI license give EU passporting?", a: "Yes. Under EU Directive 2015/2366, a Lithuania EMI license grants passporting rights across all 27 EU member states plus SEPA access covering 36 countries for euro transfers." },
];

const RELATED = [
  { href: "/e-money-license-uk", flag: "🇬🇧", reg: "FCA", name: "United Kingdom", desc: "Tier-1 globally recognized FCA EMI. Faster Payments, BACS, CHAPS, SWIFT. 12–18 months." },
  { href: "/e-money-license-malta", flag: "🇲🇹", reg: "MFSA", name: "Malta", desc: "Top-3 globally. Full EU passport. MFSA fintech-friendly framework. 6–12 months." },
  { href: "/emi-license-in-estonia", flag: "🇪🇪", reg: "Finantsinspektsioon", name: "Estonia", desc: "0% tax on retained earnings. E-Residency compatible. 6–12 months." },
];

const LithuaniaEmiPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(350);
  const stepRefs = [s1, s2, s3, s4, s5, s6];

  useEffect(() => {
    document.title = "Lithuania EMI License — Bank of Lithuania E-Money | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get an EMI license in Lithuania — top-5 globally. Bank of Lithuania, SEPA access, €350,000 min. 6–12 months. Incluence legal support.");
    setMeta("keywords", "Lithuania EMI license, Bank of Lithuania EMI, e-money license Lithuania, SEPA Lithuania, EMI Lithuania");
    setProp("og:title", "Lithuania EMI License — Bank of Lithuania | Incluence");
    setProp("og:url", "https://incluence.com/e-money-license-lithuania");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/e-money-license-lithuania";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Lithuania EMI License", description: "Legal assistance obtaining an EMI license in Lithuania from the Bank of Lithuania. SEPA access, EU passporting.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "European Union", url: "https://incluence.com/e-money-license-lithuania", offers: { "@type": "Offer", priceCurrency: "EUR", price: "350000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "lithuania-emi-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#lithuania-emi-schema")?.remove(); can?.remove(); };
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
          <span className="text-[#9A9590]">Lithuania EMI License</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        {/* Lithuania SVG map */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[380px] pointer-events-none z-[2] hidden lg:block">
          <svg viewBox="0 0 200 240" fill="none" className="w-full h-full">
            <path d="M40 60 L85 45 L140 48 L165 65 L170 100 L160 140 L130 155 L90 158 L55 145 L35 115 L30 85 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
            <path d="M30 175 L55 165 L65 175 L50 185 Z" fill="#141822" stroke="rgba(240,235,224,0.10)" strokeWidth="0.8" />
            <path d="M60 80 L150 95 M100 50 L95 155" stroke="rgba(240,235,224,0.03)" strokeWidth="0.5" />
            <circle cx="108" cy="98" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" /></circle>
            <circle cx="108" cy="98" r="3" fill="#444CE7" />
            <text x="112" y="110" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">Vilnius</text>
            <text x="113" y="118" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">Bank of Lithuania</text>
            <text x="100" y="55" fontSize="28" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">LT</text>
            <text x="155" y="78" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">EU · Top 5</text>
          </svg>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex gap-3 mb-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— EMI License</span>
            <span className="text-[9px] text-[#5A5550] border border-white/10 px-2 py-0.5 uppercase tracking-[0.08em]">EU · Bank of Lithuania · SEPA</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Lithuania</span> EMI License
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] max-w-[500px] mb-10">
            Lithuania ranks among the top five countries globally by number of EMI licenses issued. Regulated by the Bank of Lithuania, an EMI license here grants SEPA access across 36 countries, full EU passporting rights, and positions your company in Europe's fastest-growing fintech hub.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
            <a href="#requirements" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Requirements</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              ["€" + c1 + "K+", "Min. Capital"],
              ["6–12 months", "Timeline"],
              ["Bank of Lithuania", "Regulator"],
              ["Top 5", "Globally by EMI"],
              ["SEPA", "36 countries"],
              ["EU Passport", "All member states"],
            ].map(([v, l], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <span className={`text-[22px] font-light leading-none block ${i === 2 || i === 3 ? "text-[#444CE7] text-[11px] font-semibold" : i >= 4 ? "text-[#22c55e]" : "text-[#F0EBE0]"}`}>{v}</span>
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About Lithuania EMI</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">Top-5 Global EMI Hub</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Financial institutions planning to provide electronic money services in the EU must hold an EMI license under EU Directive 2015/2366. Lithuania is among the top five countries globally by number of EMI licenses issued — a testament to its business-friendly regulatory environment and the Bank of Lithuania's transparent approach.</p>
              <p>A Lithuania EMI license grants full EU passporting rights — your company can provide payment services across all EU member states under a single authorization. SEPA membership covers 36 countries for cost-effective euro payment transfers. Lithuania also offers two license types: full EMI and Small EMI (SEMI) for lower-volume operators.</p>
              <p>Lithuania's fintech ecosystem is among Europe's strongest — with a deep pool of compliance professionals, experienced AML officers, and fintech-friendly banking partners. English-language communication with the Bank of Lithuania makes the process accessible for international applicants.</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              ["Top-5 Global EMI Jurisdiction", "Lithuania's transparent framework and strong fintech ecosystem make it the preferred EU choice for payment institutions."],
              ["SEPA Access — 36 Countries", "Cost-effective euro transfers across all SEPA member countries — essential for EU-facing payment businesses."],
              ["Full EU Passport", "One license covers all 27 EU member states. No additional local registrations required to serve EU clients."],
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Obtain a Lithuania EMI License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">6-step fully managed process. Bank of Lithuania review is thorough — quality documentation and genuine substance are key.</p>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Lithuania EMI Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">The Bank of Lithuania applies thorough due diligence. We prepare the full package tailored to their standards.</p>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a Lithuania EMI License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your payment business model and target markets. We'll provide a detailed cost and timeline breakdown within 24 hours.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Payment Services" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Target EU Markets" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <textarea placeholder="E-wallet model, transaction volumes, existing infrastructure..." rows={4} className="md:col-span-2 bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors resize-none" />
              <button type="submit" className="md:col-span-2 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] py-3.5 transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LithuaniaEmiPage;
