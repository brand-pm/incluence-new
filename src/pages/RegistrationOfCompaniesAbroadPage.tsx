import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import { useConsultation } from "@/hooks/useConsultation";

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

const JURISDICTIONS = [
  { reg: "ACRA", name: "Singapore", badge: "Asia · Tier 1", desc: "Pte Ltd company in one of Asia's most respected financial hubs. Strong banking, double-tax treaties, low corporate tax, and a streamlined incorporation process.", timeline: "1–2 weeks", href: "/register-company-in-singapore" },
  { reg: "DED / Free Zones", name: "UAE", badge: "Mainland · FZ", desc: "Mainland LLC or Free Zone company in Dubai, RAK, IFZA. 0% corporate tax thresholds, no currency controls, residence visa for shareholders.", timeline: "2–4 weeks", href: "/register-company-in-uae" },
  { reg: "Companies Registry", name: "Hong Kong", badge: "Asia · Gateway to China", desc: "Limited company formed under Hong Kong's common-law system. Territorial tax regime, world-class banking, ideal for trading and holding structures.", timeline: "1–3 weeks", href: "/register-company-in-hong-kong" },
  { reg: "Corporations Canada", name: "Canada", badge: "Federal · Provincial", desc: "Federal or provincial incorporation in Ontario, BC and other provinces. Strong reputation for cross-border trade with the US and global markets.", timeline: "2–4 weeks", href: "/company-registration-in-canada" },
  { reg: "SSM", name: "Malaysia", badge: "Asia · Sdn Bhd", desc: "Sdn Bhd (private limited) in Kuala Lumpur or Labuan. Cost-efficient Asian base with double-tax treaties and modern banking infrastructure.", timeline: "2–4 weeks", href: "/malaysia-company-registration" },
  { reg: "DBD", name: "Thailand", badge: "Asia · SE", desc: "Thai Limited Company or BOI-promoted entity. Strategic location for Southeast Asian operations, manufacturing, e-commerce and regional trade.", timeline: "3–5 weeks", href: "/open-a-company-in-thailand" },
  { reg: "SAMR", name: "China", badge: "WFOE · JV", desc: "Wholly Foreign-Owned Enterprise or Joint Venture. Direct access to the world's second-largest consumer market with full operational control.", timeline: "2–3 months", href: "/company-registration-in-china" },
  { reg: "State / IRS", name: "USA", badge: "LLC · C-Corp", desc: "Delaware, Wyoming, Florida or other states. LLC or C-Corp structures suitable for SaaS, e-commerce, fundraising and global expansion.", timeline: "1–2 weeks", href: "/open-company-in-usa" },
];

const ENTITY_TYPES = [
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/><path d="M9 9h.01M9 12h.01M9 15h.01M9 18h.01"/></svg>, title: "Holding Companies", body: "Asset-protection and tax-efficient holding structures in Singapore, Hong Kong, UAE — for IP, shares, real estate and group consolidation." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9l10-7 10 7v11a2 2 0 01-2 2H4a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/></svg>, title: "Trading & E-commerce", body: "Operating entities for international trade, marketplaces and DTC brands. Strong banking, payment processing and tax treaty access." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="0"/><path d="M3 9h18M9 21V9"/></svg>, title: "Tech & SaaS Companies", body: "US C-Corp (Delaware), Singapore Pte Ltd or UAE Free Zone setups optimised for SaaS revenue, US-fundraising and global product distribution." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>, title: "International Headquarters", body: "Regional HQ vehicles for Asian, Middle-Eastern or American expansion — with full corporate governance and substance support." },
];

const REGION_FACTS = [
  ["Asia leaders", "Singapore · HK · UAE", ""],
  ["Americas", "USA · Canada", ""],
  ["Fastest path", "Singapore (1–2 weeks)", "text-[#22c55e]"],
  ["Lowest tax (mainland)", "UAE Free Zones — 0%", "text-[#22c55e]"],
  ["Best for fundraising", "Delaware C-Corp", "text-[#444CE7]"],
  ["Best for Asia ops", "Hong Kong / Singapore", ""],
  ["Bank account support", "Included in all packages", ""],
];

const STEPS = [
  { num: "01", title: "Jurisdiction Selection", body: "We assess your business model, target markets, tax position and substance requirements to recommend the optimal Asian, Middle-Eastern or American jurisdiction." },
  { num: "02", title: "Structure & Documents", body: "Prepare incorporation documents, articles, shareholder and director details. Power of attorney for remote registration where supported." },
  { num: "03", title: "Name Reservation", body: "Reserve company name with the local registrar. Verify availability and compliance with naming rules of the jurisdiction." },
  { num: "04", title: "Registration Filing", body: "Submit incorporation package to the local registrar (ACRA, Companies Registry, SSM, DED, etc.). Local agent or POA-based filing." },
  { num: "05", title: "Bank Account Opening", body: "Open corporate account with a local or international bank, EMI or PSP that fits the business profile and target jurisdictions." },
  { num: "06", title: "Compliance Setup", body: "Register for tax, VAT/GST, set up accounting, appoint a company secretary where required. Ongoing administration support included." },
];

const REQS = [
  "At least one director (residency requirements vary by jurisdiction)",
  "At least one shareholder — individual or corporate, any nationality",
  "Registered office address in the jurisdiction of incorporation",
  "Company secretary (mandatory in Singapore, Hong Kong, UK)",
  "Passport copies, proof of address and CV for all UBOs and directors",
  "Source of funds documentation for KYC and bank onboarding",
  "Business plan and description of intended activities",
  "Local agent / nominee where required (Free Zones, certain offshore)",
  "Minimum share capital — varies (often nominal: 1 SGD, 1 HKD, 1 AED)",
  "Tax registration — corporate income tax, VAT/GST as applicable",
  "Annual filings — financial statements, annual return, tax returns",
];

const FAQS = [
  { question: `In which countries do we help to register a company?`, answer: `We help with the registration of companies around the world, including EU countries, European non-EU countries, Asian countries, USA, Australia and Oceania, offshore.` },
  { question: `Is it possible to register a company abroad online?`, answer: `Detailed conditions for registering a company depend on the legislation of the country of registration. Typically, companies are registered by local representatives on the basis of a power of attorney. Also, a company can be registered during a personal visit of the registrar in the selected country. The company can be registered through a local representative based on scanned documents in some countries.` },
  { question: `How long does it take to register a company abroad?`, answer: `The process of registering a company depends on the legislation of the country of incorporation. It usually takes 2-3 weeks to set up a company.` },
];

const ScanSweep = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: "linear-gradient(90deg, transparent, rgba(68,76,231,0.04), transparent)" }} />
  </div>
);

const CornerAccent = () => (
  <div className="absolute top-0 right-0 pointer-events-none">
    <div className="w-[1px] h-4 bg-[#444CE7]/30 absolute top-0 right-0" />
    <div className="h-[1px] w-4 bg-[#444CE7]/30 absolute top-0 right-0" />
  </div>
);

const RegistrationOfCompaniesAbroadPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const { open: openConsult } = useConsultation();

  const c1 = useCounter(40);
  const c2 = useCounter(2500);
  const c3 = useCounter(12);

  useEffect(() => {
    document.title = "Company Registration Abroad — Asia, Middle East & Americas | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Register a company in Singapore, UAE, Hong Kong, USA, Canada, Malaysia, Thailand or China. Full incorporation, banking and compliance support from Incluence.");
    setMeta("keywords", "register company abroad, company formation Singapore, UAE company registration, Hong Kong company, USA LLC, Delaware C-Corp, Canada incorporation");
    setProp("og:title", "Company Registration Abroad — Asia & Americas | Incluence");
    setProp("og:url", "https://incluence.com/registration-of-companies-abroad");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/registration-of-companies-abroad";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Company Registration Abroad", description: "Registration of companies in Asia, the Middle East and the Americas — Singapore, UAE, Hong Kong, USA, Canada, Malaysia, Thailand and more.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/registration-of-companies-abroad" };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "worldwide-hub-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#worldwide-hub-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5, s6];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-5">— Company Formation</span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Worldwide</span> company{"\n"}registration
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] max-w-[540px] mb-10">
            We help with the registration of companies around the world — Asian financial hubs, Middle-Eastern free zones, North America and beyond. Full incorporation, banking and ongoing compliance under one roof.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get Free Consultation →</Link>
            <a href="#jurisdictions" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Jurisdictions</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [c1 + "+", "Jurisdictions Covered"],
              ["1–2 weeks", "Fastest (Singapore)"],
              [c2 + "+", "Companies Registered"],
              [c3 + " yrs", "Industry Experience"],
            ].map(([v, l], i) => (
              <div key={i} className="bg-[#080808] p-7 relative overflow-hidden group">
                <ScanSweep />
                <span className="text-[30px] font-light text-[#F0EBE0] leading-none block">{v}</span>
                <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JURISDICTIONS */}
      <section id="jurisdictions" style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Available Jurisdictions</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Choose Your Jurisdiction</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[520px] mb-12">Each jurisdiction offers a different mix of tax efficiency, banking access, reputation and substance requirements. We match the right one to your business model.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {JURISDICTIONS.map((j) => (
              <Link to={j.href} key={j.name} className="bg-[#0d0d0d] p-7 relative overflow-hidden group block no-underline">
                <CornerAccent />
                <ScanSweep />
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-500" />
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <span className="text-[11px] text-[#444CE7] font-semibold tracking-[0.08em] block mb-1">{j.reg}</span>
                    <span className="text-[20px] font-semibold text-[#F0EBE0]">{j.name}</span>
                  </div>
                  <span className="text-[9px] text-[#5A5550] border border-white/10 px-2 py-1 uppercase tracking-[0.08em] flex-shrink-0 ml-3">{j.badge}</span>
                </div>
                <p className="text-[13px] text-[#9A9590] leading-relaxed flex-1 mb-6">{j.desc}</p>
                <div className="border-t border-white/[0.06] pt-4 flex justify-between items-end">
                  <div className="text-right ml-auto">
                    <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em] block">Timeline</span>
                    <span className="text-[13px] text-[#9A9590]">{j.timeline}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENTITY TYPES */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Use Cases</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">What Companies We Help Set Up</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[600px] mb-12">From holding vehicles to operating companies — we structure entities that match your tax position, banking needs and operational footprint across multiple regions.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {ENTITY_TYPES.map((a, i) => (
              <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                <ScanSweep />
                <div className="mb-4">{a.icon}</div>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGION SPOTLIGHT */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Regional Overview</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-6">Asia, Middle East & the Americas</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>Asian financial hubs — Singapore, Hong Kong, UAE — combine reputable regulators, world-class banking, and tax-efficient structures. Singapore Pte Ltd remains the default choice for serious Asian operations; UAE Free Zones unlock 0% corporate tax thresholds with a residence visa.</p>
              <p>The Americas are dominated by US incorporation: Delaware C-Corp for fundraising and SaaS, Wyoming and Florida LLCs for asset protection, and Canadian federal/provincial entities for cross-border trade. Each comes with specific banking and tax-treaty considerations.</p>
              <p>We help you compare jurisdictions side-by-side based on substance requirements, banking compatibility, and your real operational needs — then handle incorporation end-to-end.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#080808] border border-[#444CE7]/20 p-8 relative overflow-hidden group">
              <ScanSweep />
              <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Region Key Facts</span>
              <div className="divide-y divide-white/[0.05]">
                {REGION_FACTS.map(([l, v, cls]) => (
                  <div key={l} className="flex justify-between py-3">
                    <span className="text-[13px] text-[#5A5550]">{l}</span>
                    <span className={`text-[13px] text-[#F0EBE0] font-medium ${cls}`}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="block w-full text-center px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">Get Jurisdiction Guidance →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">From Decision to Incorporated Company</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">We handle every step of company formation — from jurisdiction selection through bank account opening and ongoing compliance.</p>
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
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Common Incorporation Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Requirements vary by jurisdiction. We prepare the full corporate documentation package — you provide personal documents only. Most companies are incorporated remotely via power of attorney.</p>
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
              <div className="absolute top-6 right-6">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 bg-[#22c55e]" />
                  <div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }} />
                </div>
              </div>
              <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Free Consultation</span>
              <p className="text-[18px] font-light text-[#F0EBE0] mb-3">Which jurisdiction fits your business?</p>
              <p className="text-[13px] text-[#9A9590] leading-relaxed mb-8">Trading, holding, SaaS, e-commerce — each has an optimal jurisdiction. Book a 30-minute call and we'll map your business to the right structure, bank and tax setup.</p>
              <Link to="/contact" className="block w-full text-center px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">Get Free Consultation →</Link>
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                {[["Response time", "Within 24 hours"], ["Consultation", "Free, no obligation"], ["Languages", "EN, RU, DE"]].map(([l, v]) => (
                  <div key={l} className="flex justify-between">
                    <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{l}</span>
                    <span className="text-[12px] text-[#9A9590]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">Common Questions</h2>
          <div className="max-w-[720px]">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex justify-between items-center w-full py-5 cursor-pointer text-left bg-transparent border-0">
                  <span className="text-[15px] text-[#F0EBE0] font-medium pr-6">{f.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#5A5550] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">{f.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Register Your Company Abroad</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[560px]">Tell us about your business — sector, target markets, banking needs — and we'll recommend the optimal jurisdiction and handle incorporation end-to-end.</p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <button
              onClick={() => openConsult({ service: "Company Formation" })}
              className="px-8 py-4 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0"
            >
              Get Free Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationOfCompaniesAbroadPage;
export { RegistrationOfCompaniesAbroadPage };
