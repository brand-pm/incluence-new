import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, TrendingUp, ShieldCheck, Clock } from "lucide-react";
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
  { num: "01", title: "Company Incorporation", body: "Register a Mauritius company in the appropriate legal form for investment services. Local registered office and qualified local director required." },
  { num: "02", title: "Personnel Qualification", body: "Appoint directors and key staff with documented financial qualifications and experience. FSC conducts aptitude testing to verify skills match job requirements." },
  { num: "03", title: "Documentation Preparation", body: "Memorandum and articles of association, detailed business plan, internal control system description, personnel qualifications, AML policy, and marketing strategy." },
  { num: "04", title: "FSC Application Submission", body: "Submit complete application to the Financial Services Commission. Regulator review typically 3–5 months. We manage all clarification requests and follow-up queries." },
  { num: "05", title: "License Issued", body: "FSC grants the investment license. Company can commence operations in forex, options, futures and securities markets. Ongoing compliance and activity demonstration required." },
];
const REQS = [
  "Company incorporated in Mauritius with registered office",
  "Qualified local director with financial sector experience",
  "Memorandum and articles of association",
  "Detailed business plan including target clients, marketing, and recruitment plan",
  "Description of internal control system for risk management",
  "Personnel aptitude testing results — FSC verifies qualifications",
  "AML/KYC policy compliant with Mauritius financial regulations",
  "Passport copies and CVs for all directors and key personnel",
  "Source of funds documentation for shareholders",
  "Agreements with technology and liquidity providers",
  "Company must demonstrate ongoing activity after license issuance",
];
const PROS = [
  "Covers forex, options, futures, securities and commodities — broad scope",
  "Reputable FSC regulator — recognized by international banking partners",
  "3–6 month timeline — faster than EU alternatives",
  "Foreign-sourced income largely exempt from Mauritius tax",
  "Structured regulatory framework adds credibility vs pure offshore",
  "Cost-effective compared to EU-regulated alternatives",
];
const CONS = [
  "Personnel aptitude testing required — nominally qualified staff are rejected",
  "License must be actively maintained — dormant licenses revoked",
  "Less recognized than EU-regulated licenses by some EU-based payment processors",
  "Local director with relevant financial experience required",
  "Not suitable for exclusively EU retail client targeting",
];
const FAQS = [
  { q: "What does a Mauritius forex license authorize?", a: "A Mauritius FSC investment license authorizes the holder to operate legally in forex markets, as well as trade options, futures, securities and commodities. It covers currency trading operations and related investment services." },
  { q: "What are the requirements for a Mauritius forex license?", a: "You need to register a Mauritius company, appoint qualified directors with financial sector experience, pass FSC personnel aptitude testing, prepare an AML policy and business plan, open a bank account, and submit a complete application to the FSC." },
  { q: "What documents are required for an FSC forex license?", a: "Memorandum and articles of association, detailed business plan covering clients, marketing and recruitment, internal control system description, AML/KYC policy, personnel qualification evidence including aptitude test results, and CVs and passport copies for all principals." },
  { q: "How long does it take to obtain a Mauritius forex license?", a: "Approximately 3–6 months from application submission. Timeline is affected by document preparation speed and FSC workload. Including company formation, total timeline is typically 4–7 months." },
  { q: "Can a licensed Mauritius company operate globally?", a: "Yes. A Mauritius FSC license permits global operation. For clients in specific jurisdictions (particularly EU), additional local licensing may be required for retail services. We advise on a jurisdiction-by-jurisdiction basis." },
  { q: "Is a Mauritius forex license suitable for an EU-facing broker?", a: "It depends on your target client base. For institutional clients and non-EU retail clients, a Mauritius license is often sufficient. For EU retail clients, we recommend pairing with an EU-regulated entity (Cyprus CySEC or Malta MFSA). We can design the optimal multi-entity structure." },
];
const RELATED = [
  { href: "/cyprus-forex-license", reg: "CySEC", name: "Cyprus", desc: "EU gold standard. Full MiFID II passporting. 6–9 months, from €35,000." },
  { href: "/forex-broker-licence-in-malta", reg: "MFSA", name: "Malta", desc: "EU MiFID II license. ~5% effective tax. 5–7 months, from €30,000." },
  { href: "/forex-broker-licence-in-vanuatu", reg: "VFSC", name: "Vanuatu", desc: "Fast offshore license. 3 classes, 2–3 months, from $15,000." },
];
const ADVANTAGES = [
  { Icon: TrendingUp, title: "Full FX Market Coverage", body: "Authorized to trade forex, options, futures, securities and commodities — all under one FSC investment license." },
  { Icon: ShieldCheck, title: "Reputable Offshore Regulator", body: "FSC is recognized by major banks and liquidity providers. A Mauritius license commands significantly more credibility than pure offshore alternatives." },
  { Icon: Clock, title: "3–6 Month Process", body: "Faster than EU alternatives while maintaining regulatory substance. Personnel qualification requirements add credibility without excessive bureaucracy." },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "Financial Services Commission (FSC)", ""],
  ["Jurisdiction", "Republic of Mauritius", ""],
  ["Instruments", "Forex, options, futures, securities", ""],
  ["Personnel test", "Required by FSC", "text-[#f59e0b]"],
  ["Timeline", "3–6 months", ""],
  ["Starting from", "$20,000 USD", "text-[#444CE7]"],
  ["Activity req.", "Must stay active post-license", "text-[#f59e0b]"],
  ["Tax", "15% flat (foreign income exempt)", "text-[#22c55e]"],
];

const MauritiusForexPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(20000);

  useEffect(() => {
    document.title = "Mauritius Forex License FSC — Offshore Broker License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Mauritius FSC forex license — legal forex, options, futures and securities trading. From $20,000, 3–6 months. Full legal support by Incluence.");
    setMeta("keywords", "Mauritius forex license, FSC Mauritius, Mauritius investment license, offshore forex license Mauritius");
    setProp("og:title", "Mauritius Forex License FSC | Incluence");
    setProp("og:url", "https://incluence.com/forex-broker-licence-in-mauritius");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/forex-broker-licence-in-mauritius";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Mauritius FSC Forex Broker License", description: "Legal assistance in obtaining a Mauritius FSC license for forex, options, futures and securities trading.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/forex-broker-licence-in-mauritius", offers: { "@type": "Offer", priceCurrency: "USD", price: "20000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "mauritius-forex-schema"; s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#mauritius-forex-schema")?.remove(); can?.remove(); };
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
            <Link to="/forex-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Forex License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">Mauritius Forex License</span>
          </div>
        </nav>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <TerritoryMap iso="MU" markerLabel="Port Louis" subLabel="FSC HQ" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Forex License</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Offshore · FSC</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
              <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mauritius</span>{" "}Forex License
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">The Mauritius Financial Services Commission (FSC) grants investment licenses authorizing legal operation in forex, options, futures, securities and capital markets. A reputable offshore jurisdiction with a structured regulatory framework — and a 3–6 month process that is faster than most EU alternatives.</p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
              <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`$${c1.toLocaleString()}+`, "Starting from (USD)", ""], ["3–6 months", "Timeline", ""], ["FSC", "Regulator", "text-[#444CE7] font-semibold"], ["Forex + Futures", "Instruments covered", ""], ["Offshore", "Jurisdiction type", ""], ["Structured", "FSC Framework", ""]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About FSC License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Mauritius — A Reputable Offshore FX Jurisdiction</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The Mauritius Financial Services Commission (FSC) regulates the non-banking financial services sector, including investment companies, insurance, pension funds, and capital market operators. The FSC is recognized internationally as a well-structured and reputable offshore regulator.</p>
              <p>Companies registered in Mauritius and licensed by the FSC can legally operate in forex markets, as well as trade options, futures, securities, and commodities. The license is required for any company conducting foreign exchange transactions or providing financial market services — even in offshore jurisdictions.</p>
              <p>The FSC evaluates not only the company's documents but also the professional aptitude of its personnel — directors and key staff must demonstrate relevant financial qualifications and experience. This makes Mauritius a jurisdiction of substance, not just a paper license, which increases trust with banking partners and liquidity providers.</p>
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
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Mauritius Forex License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A structured 5-step process. FSC requires genuine substance — qualified personnel and a credible business plan.</p>
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
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">FSC Documentation Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">The FSC has clear documentation requirements focused on substance — qualified people and credible business plans. We prepare the full package tailored to FSC standards.</p>
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

      {/* RELATED */}
      <RelatedJurisdictions title="Other Forex Jurisdictions" items={RELATED} />

      {/* CTA FORM */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Mauritius Forex License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your brokerage model — target markets, instruments, and client base. Response within 24 hours.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Target Markets" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Trading Instruments" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
              </div>
              <textarea placeholder="Additional details — client geography, existing licenses, banking needs..." className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors min-h-[120px] resize-none" />
              <button type="submit" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MauritiusForexPage;
