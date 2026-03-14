import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, Globe, Clock, TrendingUp } from "lucide-react";
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
  { num: "01", title: "Company Formation", body: "Incorporate a company in Montenegro with the required structure. Registered office and local address mandatory. We handle all incorporation filings." },
  { num: "02", title: "Capital & Banking", body: "Open a corporate bank account in Montenegro. Deposit the required authorized capital. Source of funds documentation provided to the SEC." },
  { num: "03", title: "Documentation Package", body: "Business plan, AML/KYC policy, internal procedures, organizational structure, personnel CVs and qualifications, IT infrastructure description." },
  { num: "04", title: "SEC Application", body: "Submit complete application to the Securities Exchange Commission. Review period typically 3–5 months. We manage all regulatory correspondence." },
  { num: "05", title: "License Issued", body: "SEC grants the investment firm license. Operations can commence immediately. Ongoing compliance support and reporting assistance included." },
];
const REQS = [
  "Company incorporated in Montenegro with registered office",
  "Qualified directors and compliance officers with financial sector experience",
  "Minimum authorized capital (amount per license type — contact us for details)",
  "Passport copies, CVs and source of funds for all principals",
  "Business plan covering all planned investment services",
  "AML/KYC policy compliant with Montenegro financial regulations",
  "Internal control and risk management procedures",
  "Trading platform and IT infrastructure documentation",
  "Payment of state licensing fees prior to submission",
];
const PROS = ["EU candidate country — growing credibility with financial partners", "Straightforward regulatory process — predictable timeline", "Lower cost vs full EU licensing", "Recognized by growing number of payment processors", "Good stepping stone toward CySEC or MFSA license"];
const CONS = ["Not yet an EU member — limited passporting rights", "Less recognized than CySEC or MFSA globally", "Some institutional partners require EU-regulated counterparty", "Developing regulatory framework — ongoing changes"];
const FAQS = [
  { q: "Is Montenegro an EU member state?", a: "Montenegro is an EU candidate country — actively negotiating accession. Its regulatory framework is increasingly aligned with EU standards, giving its licenses growing credibility among international financial partners." },
  { q: "How long does a Montenegro forex license take?", a: "Application preparation takes 1–2 months and SEC review typically 3–5 months, making the total timeline 4–7 months — one of the most predictable in the region." },
  { q: "Can I use a Montenegro license as a stepping stone to EU licensing?", a: "Yes. Many brokers start with Montenegro to establish operations and build a track record, then upgrade to a full CySEC or MFSA license for EU MiFID II passporting." },
  { q: "What is the minimum capital for a Montenegro forex license?", a: "Capital requirements depend on the specific license type and investment services offered. Contact us for a detailed breakdown tailored to your business model." },
];
const RELATED = [
  { href: "/cyprus-forex-license", reg: "CySEC", name: "Cyprus", desc: "EU MiFID II passporting. 6–9 months, from €35,000." },
  { href: "/forex-broker-licence-in-malta", reg: "MFSA", name: "Malta", desc: "EU MiFID II license. 5–7 months, favorable tax." },
  { href: "/forex-broker-licence-in-vanuatu", reg: "VFSC", name: "Vanuatu", desc: "Fast offshore. 2–3 months, from $15,000." },
];
const ADVANTAGES = [
  { Icon: Globe, title: "EU Candidate Country", body: "Montenegro's EU accession trajectory gives its regulatory framework growing credibility among international financial partners." },
  { Icon: Clock, title: "Predictable Process", body: "1–2 month application preparation + 3–5 month SEC review. One of the most transparent regulatory timelines available." },
  { Icon: TrendingUp, title: "Lower Entry Barrier", body: "More accessible than full EU licensing while providing legitimate regulated status for broker operations." },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "Securities Exchange Commission (SEC)", ""],
  ["Country status", "EU candidate", "text-[#22c55e]"],
  ["App. prep", "1–2 months", ""],
  ["Review period", "3–5 months", ""],
  ["Total timeline", "4–7 months", ""],
  ["Starting from", "€20,000", "text-[#444CE7]"],
];

const MontenegroForexPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null), s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null), s5 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(20000);

  useEffect(() => {
    document.title = "Montenegro Forex License — Investment Broker License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Obtain a Montenegro forex broker license. EU candidate country, 4–7 months, from €20,000. Competitive conditions for investment firms. Incluence legal support.");
    setMeta("keywords", "Montenegro forex license, Montenegro investment license, forex broker Montenegro");
    setProp("og:title", "Montenegro Forex License | Incluence"); setProp("og:url", "https://incluence.com/forex-broker-licence-in-montenegro"); setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/forex-broker-licence-in-montenegro";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Montenegro Forex License", description: "Legal assistance in obtaining a Montenegro SEC forex broker license.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/forex-broker-licence-in-montenegro", offers: { "@type": "Offer", priceCurrency: "EUR", price: "20000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "montenegro-forex-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#montenegro-forex-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12"><div className="flex items-center gap-2 text-[11px]"><Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link><ChevronRight className="w-3 h-3 text-[#5A5550]" /><Link to="/forex-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Forex License</Link><ChevronRight className="w-3 h-3 text-[#5A5550]" /><span className="text-[#9A9590]">Montenegro Forex License</span></div></nav>
      </section>

      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <TerritoryMap iso="ME" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6"><span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Forex License</span><span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Emerging · SEC Montenegro</span></div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6"><span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Montenegro</span>{" "}Forex License</h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">An investment broker license from Montenegro's Securities Exchange Commission. A competitive EU candidate country with a straightforward regulatory process, favorable conditions, and growing acceptance among international broker networks.</p>
            <div className="flex gap-4"><Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link><button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button></div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`€${c1.toLocaleString()}+`, "Starting from", ""], ["4–7 months", "Timeline", ""], ["SEC", "Regulator", "text-[#444CE7] font-semibold"], ["EU candidate", "Status", ""], ["1–2 months", "Application prep", ""], ["3–5 months", "Review period", ""]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About Montenegro License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">An Emerging Jurisdiction for Forex Brokers</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Montenegro is an EU candidate country with a securities regulatory framework overseen by the Securities Exchange Commission (SEC). A forex broker license here provides a legitimate operational base with lower barriers than full EU licensing.</p>
              <p>One of the key advantages of Montenegro licensing is the straightforward regulatory process compared to EU jurisdictions like Cyprus or Malta. Application preparation takes 1–2 months and SEC review 3–5 months, making the total timeline one of the most predictable in the region.</p>
              <p>A Montenegro forex license is recognized by a growing number of payment providers and liquidity partners, making it a practical stepping stone for brokers planning to eventually upgrade to a full CySEC or MFSA license.</p>
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
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Montenegro Forex License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A 5-step process with predictable timelines. We manage the full SEC application on your behalf.</p>
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
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Accessible requirements for an emerging EU-aligned jurisdiction. We prepare the complete documentation package.</p>
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
          <div className="col-span-5"><span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span><h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Montenegro Forex License</h2><p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your project. We'll handle everything — from company formation to SEC license issuance.</p></div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">{[["Full Name", "text"], ["Company Name", "text"], ["Investment Services", "text"], ["Target Markets", "text"]].map(([label, type]) => (<div key={label}><label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label><input type={type} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} /></div>))}</div>
              <div className="mb-4"><label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">Additional details — existing structure, budget, timeline...</label><textarea rows={4} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" style={{ fontFamily: "inherit" }} /></div>
              <button type="submit" className="px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MontenegroForexPage;
