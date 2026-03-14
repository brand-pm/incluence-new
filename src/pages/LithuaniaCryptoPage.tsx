import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import { TerritoryMap } from "@/components/map/TerritoryMap";
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
  { num: "01", title: "UAB Incorporation", body: "Register a Lithuanian Private Limited Company (UAB). Minimum share capital €2,500 for incorporation — separate from the €125,000 regulatory capital under MiCA." },
  { num: "02", title: "AML Officer Appointment", body: "Appoint a qualified local MLRO (AML Officer) — this is the most critical step. FCIS checks experience, certifications (ACAMS), and genuine employment. Nominal appointments are rejected." },
  { num: "03", title: "AML/KYC Framework", body: "Develop AML/CFT procedures aligned with EU 5th/6th AML Directives. Implement transaction monitoring software and sanctions screening — FCIS expects technical proof, not just written policies." },
  { num: "04", title: "Capital & Banking", body: "Open corporate account at a Lithuanian bank or EU EMI. Deposit regulatory capital. Banking is challenging — we facilitate onboarding through our fintech banking network." },
  { num: "05", title: "Business Plan & Documentation", body: "Professional, data-driven business plan covering services, target markets, financial projections, IT systems, and risk management. Generic plans risk rejection or delay." },
  { num: "06", title: "FCIS Application", body: "Submit complete application to the Financial Crime Investigation Service. Regulators frequently request clarifications — professional, prompt responses are critical to approval speed." },
  { num: "07", title: "License Issued", body: "FCIS approves and issues the VASP license. Company registered in the Lithuanian VASP register. MiCA transition roadmap and ongoing compliance support included." },
];

const REQS = [
  "Lithuanian UAB company with registered office address",
  "Minimum regulatory capital €125,000 (MiCA standard for exchange operators)",
  "Local MLRO (AML Officer) with documented FCIS-facing experience — mandatory",
  "AML/KYC policy including Customer Due Diligence, EDD, and sanctions screening",
  "Transaction monitoring system — technical implementation required (not just policy)",
  "Bank or EMI account at Lithuania-approved financial institution",
  "Passport copies, CVs, apostilled criminal record certificates for all principals",
  "Fit & Proper documentation — no criminal record, no regulatory sanctions",
  "Professional, detailed business plan with 3–5 year financial projections",
  "IT infrastructure documentation including cybersecurity measures",
  "Source of funds and wealth documentation for all shareholders",
];

const FACTS = [
  ["Regulator", "Financial Crime Investigation Service (FCIS)", ""],
  ["Company type", "UAB (Private Limited)", ""],
  ["License types", "Exchange + Wallet (both recommended)", ""],
  ["Min. capital", "€125,000 (MiCA)", "text-[#444CE7]"],
  ["MLRO", "Local, experienced", "text-[#f59e0b]"],
  ["Timeline", "1–3 months", "text-[#22c55e]"],
  ["Starting from", "€10,000", "text-[#444CE7]"],
  ["MiCA status", "Fully aligned", "text-[#22c55e]"],
];

const PROS = [
  "Fastest EU VASP license — 1–3 months total",
  "MiCA-aligned framework — best EU passporting position",
  "Top EU fintech hub with experienced legal/compliance ecosystem",
  "Two license types cover full crypto service spectrum",
  "Non-residents can fully own and operate a Lithuanian UAB",
  "Strong fintech banking infrastructure (EMIs + local banks)",
];
const CONS = [
  "MLRO requirement is strict — nominal officers are rejected by FCIS",
  "FCIS increasingly scrutinizes AML quality and technical implementation",
  "Banking can be challenging — Lithuanian banks are selective",
  "Capital requirement increasing to €125,000 under MiCA",
  "Ongoing compliance obligations are significant post-licensing",
];

const FAQS = [
  { q: "What is the minimum share capital for a Lithuanian VASP?", a: "UAB formation requires €2,500 minimum share capital. However, under MiCA (effective 2025), exchange operators need €125,000 and custodial wallet operators need €150,000 in regulatory capital deposited separately." },
  { q: "How long does it take to get a Lithuania crypto license?", a: "Total timeline is 1–3 months from company formation to license issuance. FCIS review after submission is typically 4–6 weeks. Speed depends heavily on document quality and MLRO appointment." },
  { q: "Can a non-resident obtain a Lithuanian VASP license?", a: "Yes — non-residents can fully own and operate a Lithuanian UAB. However, a local MLRO (AML Officer) with genuine FCIS-facing experience and a registered office in Lithuania are mandatory requirements." },
  { q: "What are the main license types in Lithuania?", a: "Two types: Virtual Currency Exchange Operator License (for fiat-crypto, crypto-crypto, OTC, payment gateways) and Depository Wallet Operator License (for custodial services). Most companies obtain both simultaneously." },
  { q: "Is a physical office in Lithuania required?", a: "A registered legal address is required but a physical office with staff is not mandatory. However, the MLRO must be genuinely employed (not nominal) and available for FCIS communication." },
  { q: "What is the role of the AML Officer (MLRO)?", a: "The MLRO is responsible for AML/CFT compliance, suspicious transaction reporting, staff training, and direct communication with FCIS. Must have documented experience, ideally ACAMS certification. FCIS rejects nominal or unqualified appointments." },
  { q: "How does MiCA affect Lithuanian VASP licenses?", a: "Lithuanian VASPs will transition to CASP (Crypto Asset Service Provider) authorization under MiCA. The Lithuanian framework already maps closely to MiCA categories. Capital requirements increase to €125K for exchanges, €150K for custody." },
  { q: "What are the ongoing compliance requirements?", a: "Transaction monitoring, suspicious activity reports to FCIS, annual AML policy reviews, staff training, record-keeping for 8 years, regulatory reporting, and adaptation to MiCA updates as they are implemented." },
  { q: "Can a Lithuanian license be used across the EU?", a: "Currently, Lithuanian VASP licenses are recognized nationally. Under MiCA (once passporting activates), a Lithuanian CASP license will cover all 27 EU member states — making early licensing strategically valuable." },
  { q: "What services does the license cover?", a: "Exchange license: fiat-to-crypto, crypto-to-crypto, OTC trading, payment gateway services. Wallet license: custodial storage, key management, institutional custody. Both together cover the full spectrum of crypto services." },
];

const RELATED = [
  { href: "/cryptocurrency-exchange-license-in-estonia", flag: "🇪🇪", reg: "FIU", name: "Estonia", desc: "0% tax retained earnings. Indefinite license. 3–6 months, from €8,000." },
  { href: "/cryptocurrency-license-in-malta", flag: "🇲🇹", reg: "MFSA", name: "Malta VFA", desc: "4 license classes. Full crypto coverage. 6–9 months, from €25,000." },
  { href: "/poland-crypto-license", flag: "🇵🇱", reg: "PFSA", name: "Poland", desc: "Fast EU VASP registration. 2–3 months, from €8,000." },
];

const LithuaniaCryptoPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null), s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null), s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null), s7 = useRef<HTMLDivElement>(null);
  const stepRefs = [s1, s2, s3, s4, s5, s6, s7];
  const c1 = useCounter(10000);
  const c2 = useCounter(125);

  useEffect(() => {
    document.title = "Lithuania Crypto License VASP — MiCA-Ready EU License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Lithuania crypto exchange license (VASP). Fastest EU VASP — 1–3 months. MiCA-aligned. Exchange + custody licenses. From €10,000. Incluence legal support.");
    setMeta("keywords", "Lithuania crypto license, VASP Lithuania, MiCA license Lithuania, FCIS license, crypto exchange Lithuania");
    setProp("og:title", "Lithuania Crypto License VASP — MiCA-Ready | Incluence");
    setProp("og:url", "https://incluence.com/lithuania-crypto-license");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/lithuania-crypto-license";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Lithuania VASP Crypto License", description: "Legal assistance in obtaining a Lithuanian VASP license for crypto exchange and custodial wallet services. MiCA-aligned.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/lithuania-crypto-license", offers: { "@type": "Offer", priceCurrency: "EUR", price: "10000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "lithuania-crypto-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#lithuania-crypto-schema")?.remove(); can?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px]">
          <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">Incluence</Link>
          <ChevronRight className="w-3 h-3 text-[#5A5550]" />
          <Link to="/cryptocurrency-exchange-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">Crypto License</Link>
          <ChevronRight className="w-3 h-3 text-[#5A5550]" />
          <span className="text-[#9A9590]">Lithuania Crypto License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        <svg className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[380px] pointer-events-none z-[2] opacity-[0.08]" viewBox="0 0 320 380" fill="none">
          <path d="M80 80 L180 70 L240 90 L260 130 L250 200 L220 260 L160 280 L100 270 L70 220 L60 150 Z" fill="#444CE7" fillOpacity="0.15" stroke="#444CE7" strokeOpacity="0.3" strokeWidth="0.5" />
          <path d="M60 120 L40 140 L50 170 L70 160 Z" fill="#444CE7" fillOpacity="0.1" stroke="#444CE7" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d="M120 120 L200 140 M100 180 L220 200" stroke="#444CE7" strokeOpacity="0.1" strokeWidth="0.3" />
          <circle cx="170" cy="170" r="4" fill="#444CE7" fillOpacity="0.6" />
          <circle cx="170" cy="170" r="8" fill="none" stroke="#444CE7" strokeOpacity="0.3" strokeWidth="0.5" />
          <text x="170" y="155" textAnchor="middle" fill="#444CE7" fillOpacity="0.5" fontSize="8" fontFamily="Manrope">Vilnius</text>
          <text x="170" y="190" textAnchor="middle" fill="#444CE7" fillOpacity="0.3" fontSize="6" fontFamily="Manrope">FCIS HQ</text>
          <text x="160" y="320" textAnchor="middle" fill="#F0EBE0" fillOpacity="0.06" fontSize="28" fontFamily="Manrope" fontWeight="300">LT</text>
          <text x="160" y="340" textAnchor="middle" fill="#444CE7" fillOpacity="0.15" fontSize="8" fontFamily="Manrope">EU · MiCA</text>
        </svg>

        <div className="relative z-10 max-w-screen-xl mx-auto max-w-[600px]">
          <div className="flex gap-3 mb-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Crypto License</span>
            <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">EU · FCIS · MiCA Ready</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Lithuania</span> VASP License
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] mb-10">The fastest EU VASP jurisdiction — 1–3 months from company formation to licensed crypto exchange. Two license types: Exchange Operator and Depository Wallet. MiCA-aligned framework with full EU passporting rights under the new regulation.</p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
            <a href="#requirements" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Requirements</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [`€${c1.toLocaleString()}+`, "Starting from", ""],
              ["1–3 months", "Timeline", "text-[#22c55e]"],
              ["FCIS", "Regulator", "text-[#444CE7] font-semibold"],
              ["2 licenses", "Available types", ""],
              [`€${c2}K`, "Min. capital (MiCA)", ""],
              ["MiCA ready", "Framework", "text-[#444CE7]"],
            ].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <span className={`text-[24px] font-light text-[#F0EBE0] leading-none block ${cls}`}>{v}</span>
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About Lithuania VASP</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">The Fastest MiCA-Ready EU VASP Jurisdiction</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Lithuania has become the most popular EU jurisdiction for cryptocurrency service providers — ranking among Europe's top fintech hubs. The Financial Crime Investigation Service (FCIS) oversees VASP licensing, and Lithuania's framework already closely aligns with the EU's MiCA regulation that took full effect in 2025.</p>
              <p>Two license types are available: the Virtual Currency Exchange Operator License for fiat-crypto exchange, crypto-to-crypto trading, OTC desks and payment gateways; and the Depository Wallet Operator License for custodial wallet services and institutional custody. Most companies obtain both simultaneously for full operational coverage.</p>
              <p>Under MiCA, Lithuanian VASPs will transition to CASP (Crypto Asset Service Provider) authorization — with EU passporting rights across all 27 member states. Companies licensed in Lithuania today are the best positioned for this transition.</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              ["1–3 Month Process", "The fastest major EU VASP license. With proper document preparation, FCIS can issue the license within 4–6 weeks of application submission."],
              ["Two License Types", "Exchange Operator + Depository Wallet — obtain both simultaneously for complete crypto service coverage including trading, OTC, and custody."],
              ["MiCA Transition Ready", "Lithuanian VASP framework directly maps to MiCA's CASP categories. Early licensees gain EU passporting advantage when MiCA passporting activates."],
            ].map(([t, b]) => (
              <div key={t} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden">
                <CornerAccent /><ScanSweep />
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{t}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 7 steps */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Obtain a Lithuania VASP License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A 7-step process managed by our team. The MLRO appointment is the most critical factor in approval speed.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {STEPS.slice(0, 6).map((step, i) => (
                  <div key={i} ref={stepRefs[i]} data-step className="bg-[#111111] p-7 relative overflow-hidden group">
                    <ScanSweep />
                    <span className="text-[11px] text-[#444CE7] font-mono tracking-[0.1em] block mb-3">{step.num}</span>
                    <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{step.title}</h3>
                    <p className="text-[13px] text-[#9A9590] leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-px mt-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div ref={s7} data-step className="bg-[#111111] p-7 relative overflow-hidden group">
                  <ScanSweep />
                  <span className="text-[11px] text-[#444CE7] font-mono tracking-[0.1em] block mb-3">{STEPS[6].num}</span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{STEPS[6].title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">{STEPS[6].body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">FCIS has strict requirements — particularly around MLRO qualifications and AML implementation. We prepare the full package to meet FCIS standards.</p>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Advantages & Limitations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-7">
              <h3 className="text-[13px] text-[#22c55e] uppercase tracking-[0.08em] mb-5">Advantages</h3>
              <div className="space-y-3">{PROS.map((p, i) => (<div key={i} className="flex items-start gap-3"><Check className="w-3.5 h-3.5 text-[#22c55e] mt-0.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{p}</span></div>))}</div>
            </div>
            <div className="bg-[#111111] p-7">
              <h3 className="text-[13px] text-[#f59e0b] uppercase tracking-[0.08em] mb-5">Limitations</h3>
              <div className="space-y-3">{CONS.map((c, i) => (<div key={i} className="flex items-start gap-3"><X className="w-3.5 h-3.5 text-[#f59e0b] mt-0.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{c}</span></div>))}</div>
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

      <RelatedJurisdictions title="Other Crypto Jurisdictions" items={RELATED} />

      {/* CTA */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a Lithuania VASP License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your crypto business. We'll handle UAB formation, MLRO appointment, FCIS licensing, and MiCA transition planning.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              {[["Full Name", "text"], ["Company Name", "text"], ["License Type (Exchange/Wallet/Both)", "text"], ["Target EU Markets", "text"]].map(([label, type]) => (
                <div key={label}>
                  <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">{label}</label>
                  <input type={type} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors" />
                </div>
              ))}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">Additional Details</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors resize-none" placeholder="Additional details — existing AML infrastructure, banking needs, MiCA timeline..." />
              </div>
              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0">Send Request →</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LithuaniaCryptoPage;
