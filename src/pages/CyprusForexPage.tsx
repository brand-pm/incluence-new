import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, Globe, Landmark, Users } from "lucide-react";
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
  { num: "01", title: "Company Formation", body: "Incorporate a Cyprus Investment Firm (CIF) — a private limited company. Minimum share capital of €125,000. Local registered office required." },
  { num: "02", title: "Key Personnel Appointment", body: "Appoint qualified directors, compliance officer, and AML officer. CySEC requires documented financial sector experience for all key positions." },
  { num: "03", title: "Capital & Banking", body: "Open corporate account at a Cyprus bank. Deposit minimum €125,000 authorized capital. Provide source of funds documentation." },
  { num: "04", title: "Documentation Package", body: "Prepare business plan, AML/KYC policy, internal procedures, organizational structure, personnel qualification documents, and technical infrastructure description." },
  { num: "05", title: "CySEC Application", body: "Submit complete application to CySEC. Regulator review typically takes 3–6 months. We handle all follow-up queries and compliance requests." },
  { num: "06", title: "License Issued", body: "CySEC grants the investment firm license. Your CIF can immediately passport services across the EU and begin accepting client funds." },
];
const REQS = [
  "Cyprus Investment Firm (CIF) incorporation — local registered office",
  "Minimum authorized capital of €125,000 deposited at a Cyprus bank",
  "Board of directors with majority Cyprus/EU residents",
  "Qualified CEO, compliance officer, and AML officer with financial experience",
  "Passport copies and CVs for all directors and shareholders",
  "Source of funds and wealth documentation for all principals",
  "Detailed business plan covering all investment services and target markets",
  "AML/KYC policy compliant with FATF, EU AMLD, and CySEC circulars",
  "Risk management and internal control procedures",
  "IT infrastructure and cybersecurity framework description",
  "Professional indemnity insurance (may be required)",
];
const PROS = [
  "Full EU MiFID II passporting across 27 countries",
  "12.5% corporate tax — one of lowest in EU",
  "Most widely recognized EU forex broker license globally",
  "Strong credibility with tier-1 banks and payment processors",
  "Mature compliance ecosystem with experienced local professionals",
  "Access to European banking relationships",
  "60+ double taxation treaties",
];
const CONS = [
  "Timeline 6–9 months — not for fast launches",
  "Strict ongoing compliance requirements and periodic CySEC reporting",
  "Local office and key personnel in Cyprus required",
  "Minimum capital €125,000",
  "Higher operational cost vs offshore alternatives",
  "Annual CySEC fees and audited financial statements required",
];
const FAQS = [
  { q: "What are the requirements for obtaining a Forex license in Cyprus?", a: "In order to obtain a forex license in Cyprus, it is necessary to register a company, prepare policies, technical documentation and other documents. After opening an account and depositing the authorized capital, submit an application to the regulator. After obtaining a license, it is necessary to show the activity of the company in order to avoid its cancellation." },
  { q: "What documents are required to obtain a Forex license in Cyprus?", a: "In order to obtain a forex license in Cyprus, the following documents are required: the company's statutory documents, business plan, AML policy, rules for using the resource, confirmation of the identity and experience of the company's participants, technical documentation." },
  { q: "How long will it take to get a Forex license in Cyprus?", a: "Obtaining a forex license in Cyprus can take up to half a year. The term of obtaining is affected by the speed of preparation of documents and consideration of the application by the regulator." },
  { q: "How much does an investment license in Cyprus cost?", a: "The final cost of obtaining an investment license in Cyprus is influenced by various factors (the exact list of future services, the region of work, etc.). You can find out the exact cost of obtaining an investment license in Cyprus by contacting our specialists." },
];
const RELATED = [
  { href: "/forex-broker-licence-in-malta", reg: "MFSA", name: "Malta", desc: "EU MiFID II license. 5–7 months, favorable tax structure." },
  { href: "/forex-broker-licence-in-vanuatu", reg: "VFSC", name: "Vanuatu", desc: "Fast offshore license. 2–3 months, from $15,000." },
  { href: "/forex-broker-licence-in-montenegro", reg: "SEC", name: "Montenegro", desc: "Emerging market license. 4–7 months, EU candidate country." },
];
const ADVANTAGES = [
  { Icon: Globe, title: "EU Passporting Rights", body: "One CySEC license authorizes full operation across all 27 EU member states under MiFID II — no per-country registration needed." },
  { Icon: Landmark, title: "12.5% Corporate Tax", body: "One of Europe's lowest corporate tax rates combined with an extensive double taxation treaty network of 60+ countries." },
  { Icon: Users, title: "Mature FX Ecosystem", body: "Cyprus has the highest concentration of licensed forex brokers in the EU. Deep local talent pool of compliance and legal specialists." },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Regulator", "Cyprus Securities and Exchange Commission", ""],
  ["Framework", "MiFID II", ""],
  ["License type", "Cyprus Investment Firm (CIF)", ""],
  ["Min. capital", "€125,000", "text-[#444CE7]"],
  ["Corp. tax", "12.5%", "text-[#22c55e]"],
  ["EU passporting", "27 member states", "text-[#22c55e]"],
  ["Timeline", "6–9 months", ""],
  ["Starting from", "€35,000", "text-[#444CE7]"],
];

const CyprusForexPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(35000);
  const c2 = useCounter(125);

  useEffect(() => {
    document.title = "Cyprus Forex License CySEC — EU Investment License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Cyprus CySEC forex license — full EU MiFID II passporting rights. From €35,000, 6–9 months. Legal support by Incluence.");
    setMeta("keywords", "Cyprus forex license, CySEC license, Cyprus investment license, MiFID II license, EU forex broker license");
    setProp("og:title", "Cyprus Forex License CySEC | Incluence");
    setProp("og:url", "https://incluence.com/cyprus-forex-license");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/cyprus-forex-license";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Cyprus CySEC Forex License", description: "Legal assistance in obtaining a Cyprus CySEC forex license under MiFID II.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/cyprus-forex-license", offers: { "@type": "Offer", priceCurrency: "EUR", price: "35000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "cyprus-forex-schema"; s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#cyprus-forex-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5, s6];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[11px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to="/forex-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Forex License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">Cyprus Forex License</span>
          </div>
        </nav>
      </section>

      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <TerritoryMap iso="CY" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Forex License</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">EU · CySEC · MiFID II</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
              <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cyprus</span>{" "}Forex License
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">Forex license Cyprus: Advantages, conditions, and registration requirements. If a Forex broker is planning to expand activities in the European Union, Cyprus is usually chosen for this purpose. It is one of the most suitable jurisdictions because it is possible to obtain the Cyprus Securities and Exchange Commission (CySEC) license there.</p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
              <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`€${c1.toLocaleString()}+`, "Starting from", ""], ["6–9 months", "Timeline", ""], ["CySEC", "Regulator", "text-[#444CE7] font-semibold"], ["27 EU", "Market access", "text-[#444CE7]"], [`€${c2}K`, "Min. capital", ""], ["MiFID II", "Framework", ""]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About CySEC License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Why Cyprus is the Top Choice for EU Forex Brokers</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>If a Forex broker is planning to expand activities in the European Union, Cyprus is usually chosen for this purpose. It is one of the most suitable jurisdictions because it is possible to obtain the Cyprus Securities and Exchange Commission (CySEC) license there. It allows brokers to legally operate, take customer deposits, and perform other legal actions in the territory of any EU member state.</p>
              <p>If you are interested in such a financial license, Cyprus is a rational choice, but the process requires careful preparation. Submitting an application is a matter that should be approached with certain knowledge as well as meeting a number of strict requirements and conditions. Otherwise, there is a risk of being rejected for licensing.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden"><CornerAccent /><ScanSweep /><a.Icon className="w-5 h-5 text-[#444CE7] mb-3" /><h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{a.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{a.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Cyprus Forex License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A 6-step process managed by our team. We handle company formation, personnel arrangements, and all CySEC correspondence.</p>
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

      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Comprehensive CySEC requirements reflecting the license's EU MiFID II status. We prepare the full documentation package on your behalf.</p>
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

      <RelatedJurisdictions items={RELATED} />

      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Cyprus Forex License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your project. We'll handle everything — from CIF incorporation to CySEC license issuance.</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[["Full Name", "text"], ["Company Name", "text"], ["Target Client Markets", "text"], ["Investment Services", "text"]].map(([label, type]) => (
                  <div key={label}><label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label><input type={type} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} /></div>
                ))}
              </div>
              <div className="mb-4"><label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">Additional details — existing structure, trading instruments, budget...</label><textarea rows={4} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" style={{ fontFamily: "inherit" }} /></div>
              <button type="submit" className="px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyprusForexPage;
