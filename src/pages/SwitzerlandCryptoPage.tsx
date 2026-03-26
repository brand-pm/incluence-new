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
  { num: "01", title: "License Type Selection", body: "Assess your business model and select the appropriate FINMA license: Banking, Investment Fund, FinTech, or DLT Trading System. Each has different requirements and capital thresholds." },
  { num: "02", title: "Swiss Company Formation", body: "Incorporate a Swiss AG or GmbH in the chosen canton. Registered office in Switzerland mandatory. Zug is most popular for crypto companies due to the Crypto Valley ecosystem." },
  { num: "03", title: "Capital & Banking", body: "Open corporate account at a Swiss bank. Deposit required authorized capital according to license type. Switzerland has strict banking standards — we facilitate the process through our network." },
  { num: "04", title: "Documentation Package", body: "Business plan, AML/KYC policy, organizational structure, IT systems description, personnel qualification documents, and source of funds evidence — all prepared for FINMA submission." },
  { num: "05", title: "FINMA Application", body: "Submit complete application to the Swiss Financial Market Supervisory Authority. FINMA review is thorough — typically 3–5 months. We manage all queries and compliance correspondence." },
  { num: "06", title: "License Issued", body: "FINMA grants the license with indefinite validity. Periodic reporting and regulatory adaptations required. Ongoing compliance support and FINMA relationship management included." },
];
const REQS = [
  "Swiss company incorporated (AG or GmbH) with registered office in Switzerland",
  "Authorized capital deposited — amount varies by license type",
  "Qualified management with documented financial sector experience",
  "AML/KYC officer appointed — Swiss AMLA compliance required",
  "AML/KYC policy compliant with Swiss Anti-Money Laundering Act (AMLA)",
  "Passport copies and CVs for all directors and shareholders",
  "Source of funds and wealth documentation for all principals",
  "Certificate of no criminal record for all principals",
  "Detailed business plan covering all crypto services and markets",
  "IT infrastructure and cybersecurity documentation",
  "Bank account for authorized capital deposit",
  "Ongoing periodic reporting to FINMA post-licensing",
];
const PROS = [
  "Tier-1 global credibility — FINMA is world's most respected crypto regulator",
  "Legal crypto asset status since 2014 — mature, stable framework",
  "Crypto Valley in Zug — world's most developed blockchain ecosystem",
  "Four license types — precise fit for any crypto business model",
  "Indefinite license validity once issued",
  "Favorable for ICOs, DeFi platforms and institutional crypto operations",
  "Strong banking relationships for licensed entities",
];
const CONS = [
  "Highest cost entry point — from €50,000+",
  "FINMA is thorough — timeline 5–7 months with strict review",
  "Swiss company and registered office required",
  "Banking capital requirements can be significant by license type",
  "Not part of EU — no MiFID II passporting for EU retail clients",
  "Ongoing FINMA reporting and compliance obligations",
];
const FAQS = [
  { q: "How much will it cost to obtain a license to exchange cryptocurrencies in Switzerland?", a: "The final cost of obtaining a license for the exchange of cryptocurrencies in Switzerland is depends on the various factors (the exact list of future services, the region where the future exchanger will operate, etc.). You can find out the exact cost of obtaining a license for the exchange of cryptocurrencies in Switzerland by contacting our specialists." },
  { q: "Is a bank account necessary to obtain a cryptocurrency license in Switzerland?", a: "In order to obtain a cryptocurrency license in Switzerland, opening an account for initial capital contribution is mandatory. Also, an account will be required for further commercial activities." },
  { q: "How long will it take to get a cryptocurrency license in Switzerland?", a: "The company registration and the crypto license obtaining in Switzerland takes about 5-7 months." },
  { q: "How long is the cryptocurrency license valid in Switzerland?", a: "The license for the exchange of cryptocurrencies in Switzerland is termless. But periodically you need to submit reports and adapt the company under new changes." },
];
const RELATED = [
  { href: "/lithuania-crypto-license", reg: "FCIS", name: "Lithuania", desc: "Fastest EU VASP. MiCA-ready. 1–3 months, from €10,000." },
  { href: "/cryptocurrency-exchange-license-in-estonia", reg: "FIU", name: "Estonia", desc: "0% tax on retained earnings. E-Residency. 3–6 months." },
  { href: "/cryptocurrency-license-in-malta", reg: "MFSA", name: "Malta", desc: "4-class VFA license. Full EU market. 6–9 months." },
];
const LICENSE_TYPES = [
  { badge: "Banking License", desc: "Deposit-taking, payments and crypto custody with full banking authorization" },
  { badge: "Investment Fund", desc: "Asset management and collective investment schemes involving digital assets" },
  { badge: "FinTech License", desc: "Lighter-touch authorization for payment processing and crypto transactions" },
  { badge: "DLT Trading System", desc: "Blockchain-based trading platforms — Switzerland's unique DLT framework" },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "FINMA", ""],
  ["Location", "Switzerland (Crypto Valley, Zug)", ""],
  ["License types", "Banking / Fund / FinTech / DLT", ""],
  ["Asset status", "Legal since 2014", "text-[#22c55e]"],
  ["Timeline", "5–7 months", ""],
  ["Validity", "Indefinite", "text-[#22c55e]"],
  ["Starting from", "€50,000", "text-[#444CE7]"],
  ["Global rank", "Tier 1 jurisdiction", "text-[#444CE7]"],
];

const SwitzerlandCryptoPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(50000);

  useEffect(() => {
    document.title = "Switzerland Crypto License FINMA — Crypto Valley | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Switzerland crypto license — Banking, FinTech, Investment Fund or DLT trading system. FINMA-supervised, Crypto Valley, from €50,000. Incluence legal support.");
    setMeta("keywords", "Switzerland crypto license, FINMA crypto license, Crypto Valley license, DLT license Switzerland, Swiss crypto exchange license");
    setProp("og:title", "Switzerland Crypto License FINMA | Incluence");
    setProp("og:url", "https://incluence.com/cryptocurrency-exchange-license-in-switzerland");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/cryptocurrency-exchange-license-in-switzerland";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Switzerland Cryptocurrency Exchange License", description: "Legal assistance obtaining a FINMA-supervised crypto license in Switzerland — Banking, FinTech, DLT or Investment Fund license for crypto exchange and custody.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Switzerland, Worldwide", url: "https://incluence.com/cryptocurrency-exchange-license-in-switzerland", offers: { "@type": "Offer", priceCurrency: "EUR", price: "50000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "swiss-crypto-schema"; s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#swiss-crypto-schema")?.remove(); can?.remove(); };
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
            <Link to="/cryptocurrency-exchange-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Crypto License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">Switzerland Crypto License</span>
          </div>
        </nav>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <TerritoryMap iso="CH" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Crypto License</span>
                <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Tier 1 · FINMA · Crypto Valley</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
                <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cryptocurrency exchange license</span>{" "}in Switzerland
              </h1>
              <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">Switzerland is not only one of the world's financial centers but also a pioneer in the development of the crypto business. Back in 2014, the Confederation fixed the legal status of non-fiat currencies. Cryptocurrency in Switzerland is considered an asset that can be exchanged and used for various commercial activities.</p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
                <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View License Types</button>
              </div>
            </div>
            <div className="col-span-5 flex justify-center">
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`€${c1.toLocaleString()}+`, "Starting from", ""], ["5–7 months", "Timeline", ""], ["FINMA", "Regulator", "text-[#444CE7] font-semibold"], ["4 types", "License classes", "text-[#444CE7]"], ["Indefinite", "License validity", "text-[#22c55e]"], ["Crypto Valley", "Zug, Switzerland", ""]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About Switzerland Crypto</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Crypto Exchange License Switzerland</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Switzerland is not only one of the world's financial centers but also a pioneer in the development of the crypto business. Back in 2014, the Confederation fixed the legal status of non-fiat currencies. The legal recognition of crypto assets launched the active development of the financial market trading in digital currencies.</p>
              <p>Cryptocurrency in Switzerland is considered an asset that can be exchanged and used for various commercial activities. To work with cryptocurrency, including as ICOs or crypto-exchangers, you must obtain a Swiss Crypto license. There are several types of licenses depending on the chosen field of activity: Banking license, Investment fund license, FinTech license, and DLT trading system license.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-2">
            {LICENSE_TYPES.map((lt, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-4 group relative overflow-hidden"><CornerAccent /><ScanSweep /><span className="text-[10px] text-[#444CE7] border border-[#444CE7]/30 px-2 py-0.5 uppercase tracking-[0.08em] inline-block mb-1">{lt.badge}</span><p className="text-[12px] text-[#9A9590] leading-relaxed">{lt.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Swiss Crypto License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A structured process supervised by FINMA. We manage every stage from license type selection to final approval. Total timeline 5–7 months.</p>
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
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">FINMA Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">FINMA is one of the world's most rigorous regulators. Requirements are strict but transparent. We prepare the full package adapted to your chosen license type.</p>
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
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Switzerland Crypto License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your crypto business model — exchange, custody, DLT platform, or fund management. We'll recommend the right license type and prepare a detailed cost breakdown.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="License Type (Banking/FinTech/DLT/Fund)" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Target Markets" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
              </div>
              <textarea placeholder="Additional details — business model, existing structure, capital available, Crypto Valley relocation plans..." className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors min-h-[120px] resize-none" />
              <button type="submit" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwitzerlandCryptoPage;
