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
  { num: "01", title: "OÜ Company Formation", body: "Incorporate an Estonian OÜ (private limited company). Minimum share capital €2,500. Can be done via e-Residency card or power of attorney — no travel required." },
  { num: "02", title: "Bank / EMI Account", body: "Open corporate account at an FIU-approved Estonian bank or EU-based EMI. Deposit authorized capital. Banking is often the most time-intensive step." },
  { num: "03", title: "AML/KYC Framework", body: "Develop comprehensive AML policy compliant with EU 5th/6th AML Directives. Appoint a qualified local AML Officer with documented FIU-facing experience." },
  { num: "04", title: "Documentation Package", body: "Business plan, organizational structure, IT infrastructure description, KYC procedure documentation, personnel CVs, and source of funds evidence." },
  { num: "05", title: "FIU Application", body: "Submit complete application to the Financial Intelligence Unit. FIU review period 3–6 months. We manage all follow-up queries and clarification requests." },
  { num: "06", title: "License Issued", body: "FIU grants the crypto exchange license with indefinite validity. Company entered into the Estonian VASP register. Ongoing compliance support included." },
];

const REQS = [
  "Estonian OÜ company incorporated with registered office in Estonia",
  "Bank or EMI account at FIU-approved institution — authorized capital deposited",
  "Qualified local AML Officer (MLRO) appointed with documented experience",
  "AML/KYC policy compliant with EU 5th/6th AML Directives and FATF",
  "Transaction monitoring system integrated and operational",
  "Passport copies and CVs for all directors and shareholders",
  "Source of funds documentation for all company principals",
  "Certificate of no criminal record for all principals (apostilled)",
  "Detailed business plan covering all crypto services and target markets",
  "IT and cybersecurity infrastructure documentation",
  "Description of technical platform architecture",
];

const FACTS = [
  ["Regulator", "Financial Intelligence Unit (FIU)", ""],
  ["Company type", "OÜ (Private Limited Company)", ""],
  ["Corp. tax", "0% on retained earnings", "text-[#22c55e]"],
  ["Min. capital", "€2,500 (OÜ formation)", ""],
  ["License", "Indefinite validity", "text-[#22c55e]"],
  ["Timeline", "3–6 months", ""],
  ["Starting from", "€8,000", "text-[#444CE7]"],
  ["E-Residency", "Supported", "text-[#22c55e]"],
];

const PROS = [
  "0% corporate income tax on retained earnings",
  "Indefinite license validity — no annual renewal required",
  "E-Residency: manage company fully remote from anywhere",
  "EU jurisdiction — credibility with banks and payment partners",
  "Pioneer crypto framework — experienced FIU regulator",
  "Low company formation cost (€2,500 minimum capital)",
];
const CONS = [
  "FIU review takes 3–6 months — not the fastest EU option",
  "Banking can be challenging — Estonian banks are selective",
  "Local AML Officer with proven FIU experience required",
  "MiCA transition will require capital increase to €125,000",
  "FIU increasingly scrutinizes substance and AML quality",
];

const FAQS = [
  { q: "Why do I need a license to exchange cryptocurrencies in Estonia?", a: "In order to carry out crypto-currency services (exchange fiat-to-cryptocurrency, crypto-to-fiat, crypto-to-crypto, opening crypto-wallets), Estonian companies must obtain an appropriate license." },
  { q: "Is a bank account necessary to obtain a cryptocurrency license in Estonia?", a: "In order to obtain a cryptocurrency license, opening an account in a payment system or bank authorized in Estonia is mandatory. The company must deposit the authorized capital into this account. Also, an account will be required for further commercial activities." },
  { q: "How long will it take to get a cryptocurrency license in Estonia?", a: "The terms for obtaining a cryptocurrency license depend on the promptness of all necessary actions, the speed of opening an account by payment institutions, the speed of consideration of the company's application by the regulator. The review period may take six months." },
  { q: "What is the validity period of a cryptocurrency license in Estonia?", a: "The license for the exchange of cryptocurrencies is termless. But periodically you need to submit reports and adapt the company under new changes." },
];

const RELATED = [
  { href: "/lithuania-crypto-license", flag: "🇱🇹", reg: "FCIS", name: "Lithuania", desc: "Fastest EU VASP. MiCA-aligned. 1–3 months, from €10,000." },
  { href: "/cryptocurrency-license-in-malta", flag: "🇲🇹", reg: "MFSA", name: "Malta VFA", desc: "4 license classes. Full crypto coverage. 6–9 months." },
  { href: "/poland-crypto-license", flag: "🇵🇱", reg: "PFSA", name: "Poland", desc: "Fast EU VASP registration. 2–3 months, from €8,000." },
];

const EstoniaCryptoPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null), s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null), s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const stepRefs = [s1, s2, s3, s4, s5, s6];
  const c1 = useCounter(8000);

  useEffect(() => {
    document.title = "Estonia Cryptocurrency License — VASP License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get an Estonia crypto exchange license. 0% corporate tax, e-residency compatible, indefinite license. From €8,000, 3–6 months. Incluence legal support.");
    setMeta("keywords", "Estonia crypto license, Estonia VASP, cryptocurrency license Estonia, FIU Estonia crypto, e-residency crypto");
    setProp("og:title", "Estonia Cryptocurrency License — VASP | Incluence");
    setProp("og:url", "https://incluence.com/cryptocurrency-exchange-license-in-estonia");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/cryptocurrency-exchange-license-in-estonia";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Estonia Cryptocurrency Exchange License", description: "Legal assistance in obtaining an Estonian VASP license for crypto exchange and custodial wallet services.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/cryptocurrency-exchange-license-in-estonia", offers: { "@type": "Offer", priceCurrency: "EUR", price: "8000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "estonia-crypto-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#estonia-crypto-schema")?.remove(); can?.remove(); };
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
          <span className="text-[#9A9590]">Estonia Crypto License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        <TerritoryMap iso="EE" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7">
              <div className="flex gap-3 mb-5">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Crypto License</span>
                <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">EU · FIU · E-Residency</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
                <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cryptocurrency exchange license</span> in Estonia
              </h1>
              <p className="text-[15px] text-[#9A9590] leading-[1.85] mb-10">Many companies whose activities imply working with crypto wallets and cryptocurrency exchanges give preference to Estonia for licensing. In this small country, you can profitably launch a cryptocurrency exchange, in particular, due to the minimum rate of corporate income tax — 0%.</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
                <a href="#requirements" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Requirements</a>
              </div>
            </div>
            <div className="col-span-5 flex justify-center">
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [`€${c1.toLocaleString()}+`, "Starting from", ""],
              ["3–6 months", "Timeline", ""],
              ["FIU", "Regulator", "text-[#444CE7] font-semibold"],
              ["0%", "Corp. tax (retained)", "text-[#22c55e]"],
              ["Indefinite", "License validity", "text-[#22c55e]"],
              ["E-Residency", "Compatible", "text-[#444CE7]"],
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About Estonia VASP</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-6">Estonia Crypto Exchange License</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Many companies whose activities imply working with crypto wallets and cryptocurrency exchanges give preference to Estonia for licensing. In this small country, you can profitably launch a cryptocurrency exchange, in particular, due to the minimum rate of corporate income tax — 0%.</p>
              <p>Estonia crypto exchange license is a mandatory permission document. All business owners working in this field must obtain it to legally provide their services.</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              ["0% Tax on Retained Earnings", "Estonia taxes profits only when distributed. Reinvest all earnings tax-free — ideal for growing crypto businesses."],
              ["E-Residency Compatible", "Manage your Estonian OÜ entirely online from anywhere in the world using the e-Residency digital identity card."],
              ["Indefinite License", "No annual renewal fees. Once issued by the FIU, the license remains valid as long as compliance obligations are met."],
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

      {/* PROCESS */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">How to Obtain an Estonia VASP License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A 6-step process manageable entirely via e-Residency. No travel to Estonia required at any stage.</p>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Estonia's FIU requires comprehensive AML documentation and genuine business substance. E-Residency simplifies administration but does not reduce compliance requirements.</p>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">Advantages & Limitations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-7">
              <h3 className="text-[13px] text-[#22c55e] uppercase tracking-[0.08em] mb-5">Advantages</h3>
              <div className="space-y-3">
                {PROS.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-3.5 h-3.5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-7">
              <h3 className="text-[13px] text-[#f59e0b] uppercase tracking-[0.08em] mb-5">Limitations</h3>
              <div className="space-y-3">
                {CONS.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-3.5 h-3.5 text-[#f59e0b] mt-0.5 flex-shrink-0" />
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">Common Questions</h2>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Apply for an Estonia Crypto License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your crypto project. We'll handle company formation, FIU licensing, and ongoing compliance — fully remote via e-Residency.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              {[["Full Name", "text"], ["Company Name", "text"], ["Crypto Services", "text"], ["Launch Timeline", "text"]].map(([label, type]) => (
                <div key={label}>
                  <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">{label}</label>
                  <input type={type} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors" />
                </div>
              ))}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">Additional Details</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors resize-none" placeholder="Additional details — e-residency plans, banking needs, MiCA timeline..." />
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

export default EstoniaCryptoPage;
