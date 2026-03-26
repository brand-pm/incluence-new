import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, Layers, Clock, DollarSign } from "lucide-react";
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

const CornerAccent = () => (<div className="absolute top-0 right-0 pointer-events-none"><div className="w-[24px] h-[1px] bg-[#444CE7]/40" /><div className="w-[1px] h-[24px] bg-[#444CE7]/40 ml-auto" /></div>);
const ScanSweep = () => (<div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#444CE7]/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" /></div>);

const STEPS = [
  { num: "01", title: "Choose License Class", body: "Select Class A (bonds/debt), Class B (options/futures), or Class C (metals/commodities/equities) based on your trading instruments and client offering." },
  { num: "02", title: "Company Registration", body: "Incorporate a Vanuatu company with required structure. Rent a local office — physical presence in Vanuatu is required for the license application." },
  { num: "03", title: "Capital & Banking", body: "Open a corporate bank account and deposit minimum $50,000 authorized capital. Source of funds documentation required." },
  { num: "04", title: "Documentation Package", body: "Business plan, AML/KYC policy, organizational structure, personnel qualifications, IT infrastructure description, and provider agreements." },
  { num: "05", title: "VFSC Application & Approval", body: "Submit application to the VFSC. Review and approval typically completed within 4–8 weeks. License issued upon payment of all state fees." },
];
const REQS = [
  "Company incorporated in Vanuatu",
  "Physical office in Vanuatu (mandatory for license application)",
  "Minimum authorized capital of $50,000 deposited",
  "Passport copies and proof of address for all directors and shareholders",
  "CVs and professional background of key personnel",
  "Source of funds documentation",
  "Business plan specifying license class and trading instruments",
  "AML/KYC policy and compliance procedures",
  "IT infrastructure and trading platform documentation",
  "Agreements with liquidity providers and technology vendors",
];
const PROS = ["One of the fastest offshore forex licenses — 2–3 months", "Low minimum capital — $50,000 vs €125K+ for EU licenses", "0% tax on foreign-sourced income", "Three license classes — choose instruments precisely", "Lower operational costs vs EU-regulated jurisdictions", "No ongoing revenue-based taxes"];
const CONS = ["Physical office in Vanuatu required", "Less prestigious than EU-regulated alternatives", "Some EU/US payment processors may decline Vanuatu-licensed brokers", "Not suitable for brokers targeting exclusively EU retail clients", "License must be actively maintained — dormant licenses revoked"];
const FAQS = [
  { q: "What are the requirements for obtaining a Forex license in Vanuatu?", a: "In order to obtain a forex license in Vanuatu, you need to register a company, rent an office, prepare policies, technical documentation and other documents. After opening an account and depositing the authorized capital it is necessary to submit an application to the regulator. After obtaining a license it is necessary to show the activity of the company in order to avoid its cancellation." },
  { q: "What documents are required to obtain a Forex license in Vanuatu?", a: "In order to obtain Vanuatu Forex license, the following documents are required: statutory documents of the company, business plan, AML policy, rules for using the resource, confirmation of the identity and experience of company members, technical documentation." },
  { q: "How long will it take to get a Forex license in Vanuatu?", a: "Obtaining a forex license in Vanuatu may take about six months. The time of obtaining is affected by the speed of preparation of documents and consideration of the application by the regulator." },
  { q: "How much is an investment license in Vanuatu cost?", a: "The final cost of obtaining an investment license in Vanuatu is influenced by various factors (the exact list of future services, the region of work, etc.). You can find out the exact cost of obtaining an investment license in Vanuatu by contacting our specialists." },
];
const RELATED = [
  { href: "/cyprus-forex-license", reg: "CySEC", name: "Cyprus", desc: "EU MiFID II passporting. 6–9 months, from €35,000." },
  { href: "/forex-broker-licence-in-malta", reg: "MFSA", name: "Malta", desc: "EU MiFID II license. 5–7 months, favorable tax." },
  { href: "/forex-broker-licence-in-montenegro", reg: "SEC", name: "Montenegro", desc: "EU candidate. 4–7 months, from €20,000." },
];
const ADVANTAGES = [
  { Icon: Layers, title: "Class A / B / C Licenses", body: "Choose the license class that matches your instruments — from bonds and futures to precious metals and equities." },
  { Icon: Clock, title: "2–3 Month Process", body: "One of the fastest offshore forex licenses. VFSC has streamlined its process to attract international brokers." },
  { Icon: DollarSign, title: "$50K Minimum Capital", body: "Significantly lower than EU alternatives. Accessible for early-stage brokers building their track record." },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "Vanuatu Financial Services Commission", ""],
  ["License class", "A / B / C (choose one or more)", ""],
  ["Min. capital", "$50,000 USD", "text-[#444CE7]"],
  ["Office", "Physical presence required", "text-[#f59e0b]"],
  ["Timeline", "2–3 months", "text-[#22c55e]"],
  ["Starting from", "$15,000", "text-[#444CE7]"],
  ["Tax", "0% on foreign income", "text-[#22c55e]"],
  ["Market access", "Global", ""],
];

const VanuatuForexPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null), s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null), s5 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(15000);
  const c2 = useCounter(50);

  useEffect(() => {
    document.title = "Vanuatu Forex License VFSC — Fast Offshore Broker License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Vanuatu VFSC forex license — 3 license classes, fast process, low capital. From $15,000, 2–3 months. Full legal support by Incluence.");
    setMeta("keywords", "Vanuatu forex license, VFSC license, Vanuatu broker license, offshore forex license");
    setProp("og:title", "Vanuatu Forex License VFSC | Incluence"); setProp("og:url", "https://incluence.com/forex-broker-licence-in-vanuatu"); setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/forex-broker-licence-in-vanuatu";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Vanuatu VFSC Forex License", description: "Legal assistance in obtaining a Vanuatu VFSC forex license.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/forex-broker-licence-in-vanuatu", offers: { "@type": "Offer", priceCurrency: "USD", price: "15000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "vanuatu-forex-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#vanuatu-forex-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12"><div className="flex items-center gap-2 text-[11px]"><Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link><ChevronRight className="w-3 h-3 text-[#5A5550]" /><Link to="/forex-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Forex License</Link><ChevronRight className="w-3 h-3 text-[#5A5550]" /><span className="text-[#9A9590]">Vanuatu Forex License</span></div></nav>
      </section>

      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <TerritoryMap iso="VU" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7">
              <div className="flex items-center gap-3 mb-6"><span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Forex License</span><span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Offshore · VFSC</span></div>
              <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6"><span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Vanuatu</span>{" "}Forex License</h1>
              <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">Forex licensing requires the applicant to comply with certain requirements and conditions and submit a set of documents. Business owners choose Vanuatu for obtaining such a license as the Financial Services Commission (VFSC) has established the most favorable conditions for licensing companies in this jurisdiction.</p>
              <div className="flex gap-4"><Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link><button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button></div>
            </div>
            <div className="col-span-5 flex justify-center">
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`$${c1.toLocaleString()}+`, "Starting from (USD)", ""], ["2–3 months", "Timeline", "text-[#22c55e]"], ["VFSC", "Regulator", "text-[#444CE7] font-semibold"], ["3 classes", "License types", ""], [`$${c2}K`, "Min. capital (USD)", ""], ["Global", "Market access", ""]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About VFSC License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Three License Classes for Every Broker Type</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The regulatory authority may grant a license of one of three classes, each of which provides business owners with certain privileges and advantages. A Vanuatu Forex license can fall into one of the following categories:</p>
              <p>A — access to certificates of deposit, bonds, loans, and debt stocks. B — authorization to deal with options and futures, including futures contracts. C — opportunity to work with precious metals, commodities, shares, as well as contracts providing the possibility to purchase securities.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {ADVANTAGES.map((a, i) => (<div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden"><CornerAccent /><ScanSweep /><a.Icon className="w-5 h-5 text-[#444CE7] mb-3" /><h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{a.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{a.body}</p></div>))}
          </div>
        </div>
      </section>

      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Vanuatu Forex License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A streamlined 5-step process. Fast VFSC review and approval within 4–8 weeks of submission.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (<div key={i} ref={stepRefs[i]} data-step className="bg-[#111111] p-7 relative overflow-hidden group"><ScanSweep /><span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.num}</span><h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.body}</p></div>))}
              <div className="bg-[#111111]" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Straightforward requirements with lower barriers than EU alternatives. We prepare the complete package.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">{REQS.map((r, i) => (<div key={i} className="flex items-start gap-3"><div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" /><span className="text-[13px] text-[#9A9590] leading-[1.7]">{r}</span></div>))}</div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <ScanSweep /><div className="absolute top-6 right-6"><div className="relative" style={{ width: 8, height: 8 }}><div className="absolute inset-0 bg-[#22c55e]" /><div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "pd 2s ease-out infinite" }} /></div></div>
              <style>{`@keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}`}</style>
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">{FACTS_TABLE.map(([l, v, cls], i) => (<div key={i} className="flex justify-between py-3"><span className="text-[12px] text-[#5A5550]">{l}</span><span className={`text-[12px] font-medium ${cls || "text-[#F0EBE0]"}`}>{v}</span></div>))}</div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]"><Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block w-full text-center">Get a Free Quote →</Link></div>
            </div>
          </div>
        </div>
      </section>

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

      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Common Questions</h2>
          <div className="max-w-[720px]">{FAQS.map((f, i) => (<div key={i} className="border-b border-white/[0.06]"><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex justify-between items-center w-full py-5 cursor-pointer text-left bg-transparent border-0" style={{ fontFamily: "inherit" }}><span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{f.q}</span><ChevronDown className={`w-4 h-4 text-[#5A5550] shrink-0 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`} /></button>{faqOpen === i && <p className="text-[13px] text-[#9A9590] leading-[1.8] pb-5">{f.a}</p>}</div>))}</div>
        </div>
      </section>

      <RelatedJurisdictions items={RELATED} />

      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5"><span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span><h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Vanuatu Forex License</h2><p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your project. We'll handle everything — from company registration to VFSC license issuance.</p></div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">{[["Full Name", "text"], ["Company Name", "text"], ["License Class (A/B/C)", "text"], ["Target Markets", "text"]].map(([label, type]) => (<div key={label}><label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label><input type={type} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} /></div>))}</div>
              <div className="mb-4"><label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">Additional details — trading instruments, budget, timeline...</label><textarea rows={4} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" style={{ fontFamily: "inherit" }} /></div>
              <button type="submit" className="px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VanuatuForexPage;
