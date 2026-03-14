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
  { num: "01", title: "Company Incorporation (Sp. z o.o.)", body: "Register a Polish Spółka z ograniczoną odpowiedzialnością (Sp. z o.o.) — equivalent to an LLC. Draft articles of association, appoint directors, register with KRS and obtain REGON and NIP numbers." },
  { num: "02", title: "PESEL & ePUAP Registration", body: "Directors and UBOs must obtain a PESEL number (Polish personal ID) and register an ePUAP trusted profile for secure digital communication with government authorities. Required for application submission." },
  { num: "03", title: "AML/KYC Framework Development", body: "Prepare AML/CTF policies, internal compliance procedures, KYC documentation, and a three-year business plan. Appoint an AML Compliance Officer (MLRO). Regulators scrutinize both documentation quality and operational readiness." },
  { num: "04", title: "Ministry of Finance Application", body: "Submit formal VASP registration application to the Ministry of Finance. Application must be precise and complete — Polish authorities review both organizational structure and AML framework robustness." },
  { num: "05", title: "Registration Approved", body: "Ministry of Finance enters the company into the official VASP register. Indefinite registration enables lawful crypto services in Poland and, under MiCA, across the EU. Ongoing compliance support included." },
];
const REQS = [
  "Polish Sp. z o.o. company incorporated and registered with KRS",
  "Registered address in Poland (physical or virtual office)",
  "PESEL number and ePUAP profile for directors and UBOs",
  "Minimum share capital: PLN 5,000 (approx. €1,200) for basic VASP activities",
  "AML Compliance Officer (MLRO) appointed — mandatory",
  "Comprehensive AML/KYC policy and internal compliance procedures",
  "Transaction monitoring system — technical implementation required",
  "Three-year business plan with financial projections and risk strategy",
  "Passport copies and CVs for all directors and beneficial owners",
  "Clean criminal record for all directors and UBOs",
  "Proof of professional knowledge or experience in crypto/finance/IT",
  "All UBOs declared and identity-verified",
];
const PROS = [
  "One of the most affordable EU crypto licenses — from €4,000",
  "2–5 month timeline — fast for an EU jurisdiction",
  "Indefinite registration validity",
  "9% reduced CIT for small taxpayers (revenue < €2M)",
  "No VAT on cryptocurrency exchange transactions",
  "Growing Polish crypto market — one of largest in Central Europe",
  "MiCA-aligned — clear EU passporting pathway",
  "Full remote registration via power of attorney",
];
const CONS = [
  "Ministry of Finance scrutinizes AML quality — weak policies rejected",
  "PESEL and ePUAP registration required for directors — extra step",
  "Currently valid only in Poland — EU passporting pending MiCA",
  "MLRO appointment mandatory — qualified officers required",
  "Annual ongoing compliance obligations",
];
const FAQS = [
  { q: "Is a crypto license required in Poland for all crypto activities?", a: "Yes. Any company providing virtual asset services to Polish clients — including exchange, custody, brokerage, transfer, and advisory — must be registered in the VASP register maintained by the Ministry of Finance. Operating without registration is a regulatory offense subject to administrative penalties." },
  { q: "What is the minimum share capital for a Poland crypto license?", a: "The minimum share capital for a Sp. z o.o. is PLN 5,000 (approximately €1,200). This is one of the lowest capital requirements for any EU crypto jurisdiction, making Poland particularly accessible for startups." },
  { q: "How long does it take to obtain a crypto license in Poland?", a: "The full process — from company incorporation to VASP registration — typically takes 2–5 months. Timeline depends on document preparation speed and Ministry of Finance workload." },
  { q: "What are the key requirements for VASP registration in Poland?", a: "A Polish Sp. z o.o. company, PESEL and ePUAP registration for directors, comprehensive AML/KYC policy, appointed MLRO, three-year business plan, clean criminal records, and proof of professional crypto/finance experience." },
  { q: "Does a Polish crypto license allow operations across the EU?", a: "Currently, Polish VASP registration authorizes operations within Poland. Under MiCA, once fully implemented, Polish-registered CASPs will gain EU-wide passporting rights. Companies licensed now are positioned for this transition." },
  { q: "What is the role of MiCA in Poland's crypto licensing?", a: "MiCA (Markets in Crypto-Assets) is the EU-wide crypto regulation that took effect in December 2024. Poland's VASP framework is aligned with MiCA, meaning current registrations will transition to CASP authorization with EU passporting rights." },
  { q: "Can I apply for a Poland crypto license remotely?", a: "Yes. The entire process can be completed remotely using power of attorney. Company incorporation, KRS registration, PESEL application, and Ministry of Finance submission can all be handled without physical travel to Poland." },
  { q: "What types of crypto services are covered by the Polish license?", a: "Crypto-to-fiat exchange, fiat-to-crypto exchange, crypto-to-crypto exchange, custodial wallet services, brokerage and intermediary services, wallet-to-wallet transfer services, and crypto investment advisory." },
  { q: "What are the ongoing compliance obligations after getting the license?", a: "Regular AML/CTF reporting to the General Inspector of Financial Information (GIIF), transaction monitoring, suspicious activity reporting, annual compliance reviews, record keeping, and adaptation to MiCA regulatory updates." },
  { q: "What is the tax rate for crypto businesses in Poland?", a: "Standard CIT is 19%. Small taxpayers with annual revenue below EUR 2 million qualify for a reduced 9% CIT rate. VAT does not apply to cryptocurrency exchange transactions. Capital gains on crypto are taxed at a flat 19%." },
];
const RELATED = [
  { href: "/lithuania-crypto-license", reg: "FCIS", name: "Lithuania", desc: "Fastest EU VASP. MiCA-ready. 1–3 months, from €10,000." },
  { href: "/cryptocurrency-exchange-license-in-estonia", reg: "FIU", name: "Estonia", desc: "0% tax on retained earnings. E-Residency. 3–6 months." },
  { href: "/cryptocurrency-exchange-license-in-switzerland", reg: "FINMA", name: "Switzerland", desc: "Tier-1 FINMA. Crypto Valley. 5–7 months, from €50,000." },
];
const ADVANTAGES = [
  { title: "2–5 Month Process", body: "One of the fastest EU VASP registrations. Fewer bureaucratic hurdles than Western European alternatives. Full remote process with power of attorney." },
  { title: "9% Reduced Corp. Tax", body: "Small taxpayers with annual revenue below EUR 2 million qualify for a 9% CIT rate — significantly below the EU average. VAT does not apply to crypto exchange transactions." },
  { title: "MiCA Transition Ready", body: "Polish VASP registration aligns with MiCA's CASP framework. Licensed companies today are positioned for EU-wide passporting once MiCA passporting activates in 2025–2026." },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "Ministry of Finance (VASP Register)", ""],
  ["Supervision", "KNF (financial standards)", ""],
  ["Company type", "Sp. z o.o. (LLC equivalent)", ""],
  ["Min. capital", "PLN 5,000 (~€1,200)", "text-[#22c55e]"],
  ["Corp. tax", "9% (small) / 19% (standard)", "text-[#22c55e]"],
  ["VAT on crypto", "Not applicable", "text-[#22c55e]"],
  ["Timeline", "2–5 months", "text-[#22c55e]"],
  ["Starting from", "€4,000", "text-[#444CE7]"],
  ["Validity", "Indefinite", "text-[#22c55e]"],
];

const PolandCryptoPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(4000);

  useEffect(() => {
    document.title = "Poland Crypto License VASP — MiCA-Ready EU Registration | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Poland VASP crypto license — fastest EU crypto registration 2–5 months. MiCA-aligned, from €4,000. Exchange, custody, brokerage. Incluence legal support.");
    setMeta("keywords", "Poland crypto license, VASP Poland, Polish crypto license, MiCA Poland, KNF crypto, cryptocurrency license Poland");
    setProp("og:title", "Poland Crypto License VASP | Incluence");
    setProp("og:url", "https://incluence.com/poland-crypto-license");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/poland-crypto-license";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Poland VASP Crypto License", description: "VASP registration in Poland for crypto exchange, custody and brokerage services. MiCA-aligned EU framework.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/poland-crypto-license", offers: { "@type": "Offer", priceCurrency: "EUR", price: "4000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "poland-crypto-schema"; s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#poland-crypto-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[11px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to="/cryptocurrency-exchange-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Crypto License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">Poland Crypto License</span>
          </div>
        </nav>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <svg className="absolute pointer-events-none z-[2]" style={{ right: "8%", top: "50%", transform: "translateY(-50%)", width: 340, height: 380 }} viewBox="0 0 220 260" fill="none">
          <path d="M40 60 C45 55, 65 48, 90 45 C115 42, 145 45, 168 52 C180 56, 185 65, 182 80 C179 95, 170 110, 175 125 C180 140, 178 155, 165 165 C152 175, 130 180, 108 178 C86 176, 65 170, 52 158 C39 146, 35 130, 38 110 C41 90, 38 75, 40 60Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
          <path d="M60 80 L100 75 L140 80 L170 90" stroke="rgba(240,235,224,0.06)" strokeWidth="0.5" fill="none" />
          <g>
            <circle cx="120" cy="145" r="3" fill="#444CE7" opacity="0.8" />
            <circle cx="120" cy="145" r="6" stroke="#444CE7" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="120" cy="145" r="10" stroke="#444CE7" strokeWidth="0.3" fill="none" opacity="0.15" />
          </g>
          <g><circle cx="130" cy="85" r="2" fill="rgba(240,235,224,0.3)" /></g>
          <g><circle cx="100" cy="130" r="2" fill="rgba(240,235,224,0.2)" /></g>
          <text x="128" y="142" fill="rgba(240,235,224,0.5)" fontSize="6" fontFamily="Manrope" fontWeight="400">Katowice</text>
          <text x="128" y="150" fill="rgba(68,76,231,0.5)" fontSize="5" fontFamily="Manrope" fontWeight="400">Tax Authority</text>
          <text x="136" y="83" fill="rgba(240,235,224,0.25)" fontSize="5" fontFamily="Manrope" fontWeight="300">Warsaw·KNF</text>
          <text x="60" y="210" fill="rgba(240,235,224,0.08)" fontSize="20" fontFamily="Manrope" fontWeight="300">PL</text>
          <text x="150" y="200" fill="rgba(240,235,224,0.06)" fontSize="8" fontFamily="Manrope" fontWeight="300">EU · MiCA</text>
        </svg>

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Crypto License</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">EU · MiCA Ready · VASP</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
              <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Poland</span>{" "}VASP License
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">Poland's VASP registration is one of the most cost-efficient and accessible EU crypto licensing pathways. Governed by the Ministry of Finance and aligned with MiCA, it covers exchange, custody, brokerage, transfer, and advisory services. Typical timeline: 2–5 months. Indefinite registration. 9% reduced corporate tax for qualifying companies.</p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
              <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`€${c1.toLocaleString()}+`, "Starting from", ""], ["2–5 months", "Timeline", "text-[#22c55e]"], ["Min. of Finance", "Regulator", "text-[#444CE7] font-semibold"], ["MiCA aligned", "Framework", "text-[#444CE7]"], ["9%", "Reduced CIT rate", "text-[#22c55e]"], ["Indefinite", "Registration", "text-[#22c55e]"]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About Poland VASP</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Cost-Efficient MiCA-Ready EU Crypto Registration</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>A Poland crypto license — officially called VASP (Virtual Asset Service Provider) registration — is official authorization for businesses dealing in virtual assets. Poland is one of the fastest-growing crypto markets in Central Europe, and its regulatory framework is directly aligned with the EU's MiCA regulation that took full effect in December 2024.</p>
              <p>The following services require VASP registration in Poland: crypto-to-fiat and fiat-to-crypto exchange, crypto-to-crypto exchange, custodial wallet services, brokerage and intermediary services, transfer services between wallets, and crypto investment advisory. Operating without registration is a regulatory offense subject to administrative penalties.</p>
              <p>Poland offers a straightforward registration process with fewer bureaucratic hurdles than Germany, France, or Spain — combined with investor confidence from regulatory oversight, and a clear MiCA transition pathway for EU-wide passporting once fully implemented.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden"><CornerAccent /><ScanSweep /><h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{a.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{a.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Step-by-Step VASP Registration in Poland</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A clear 5-step process. Can be completed fully remotely with power of attorney. 2–5 months total.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="relative z-10">
              <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {STEPS.slice(0, 3).map((step, i) => (
                  <div key={i} ref={stepRefs[i]} data-step className="bg-[#111111] p-7 relative overflow-hidden group"><ScanSweep /><span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.num}</span><h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.body}</p></div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-px mt-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {STEPS.slice(3).map((step, i) => (
                  <div key={i} ref={stepRefs[i + 3]} data-step className="bg-[#111111] p-7 relative overflow-hidden group"><ScanSweep /><span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.num}</span><h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.body}</p></div>
                ))}
                <div className="bg-[#111111]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">VASP Registration Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Poland has clear, structured requirements. AML quality and operational readiness are the primary focus of the Ministry of Finance review.</p>
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

      <RelatedJurisdictions title="Other Crypto Jurisdictions" items={RELATED} />

      {/* CTA FORM */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Poland VASP License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your crypto services. We'll handle company formation, PESEL registration, AML documentation and Ministry of Finance submission.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Crypto Services" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Revenue Projection" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
              </div>
              <textarea placeholder="Additional details — existing AML infrastructure, MiCA timeline, target EU markets..." className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors min-h-[120px] resize-none" />
              <button type="submit" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolandCryptoPage;
