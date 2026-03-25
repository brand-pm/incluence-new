import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

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
  { reg: "Finantsinspektsioon", name: "Estonia", badge: "EU · 0% Tax", desc: "By obtaining an EMI permit in Estonia, you are legally entitled to issue electronic currency, provide payment services to clients, create and maintain payment systems.", timeline: "6–12 months", href: "/emi-license-in-estonia" },
  { reg: "MFSA", name: "Malta", badge: "EU · Top 3", desc: "Malta is one of the top three countries by number of issued EMI licenses. Single European passport, tax preferences, and loyal attitude to foreign investors.", timeline: "6–12 months", href: "/e-money-license-malta" },
  { reg: "FCA", name: "United Kingdom", badge: "Tier 1", desc: "The United Kingdom continues to be one of the top jurisdictions for obtaining an EMI license — a prerequisite for legal activities related to electronic payments.", timeline: "12–18 months", href: "/e-money-license-uk" },
  { reg: "Bank of Lithuania", name: "Lithuania", badge: "EU · Top 5", desc: "Lithuania has been among the top five countries by number of issued EMI permits for several years. The Bank of Lithuania regulates e-money licensing. One of the most attractive countries for FinTech.", timeline: "6–12 months", href: "/e-money-license-lithuania" },
];

const ACTIVITIES = [
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="0"/><path d="M2 10h20"/><path d="M6 16h4"/></svg>, title: "Issue E-Money", body: "Issue your own electronic currency. Clients store funds in e-wallets and use them for purchases, transfers, and multicurrency operations." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="0"/><line x1="1" y1="10" x2="23" y2="10"/></svg>, title: "Payment Services", body: "Provide payment initiation, account information, card issuing, and money transfer services via your own payment infrastructure." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="0"/><rect x="2" y="14" width="20" height="8" rx="0"/><line x1="6" y1="6" x2="6" y2="6.01"/><line x1="6" y1="18" x2="6" y2="18.01"/></svg>, title: "Payment Systems", body: "Create and maintain full payment systems. Operate e-wallet platforms with sub-accounts for clients, subject to KYC verification." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, title: "SEPA & Cross-Border", body: "EU EMI licenses grant SEPA access — euro transfers across 36 countries — plus SWIFT connectivity for international transactions." },
];

const STEPS = [
  { num: "01", title: "Jurisdiction Selection", body: "We assess your payment model, target markets, capital available, and EU vs. global access to recommend Lithuania, UK, Malta or Estonia." },
  { num: "02", title: "Company Formation", body: "Incorporate with qualified directors holding payment sector experience, compliance officer, AML officer, and registered office in jurisdiction." },
  { num: "03", title: "Capital Deposit", body: "Open corporate account at approved bank. Deposit minimum €350,000 (EU) or £350,000 (UK FCA). Source of funds documentation required." },
  { num: "04", title: "AML/KYC Framework", body: "Develop comprehensive AML policy, KYC procedures, transaction monitoring systems, and risk management framework compliant with EU AMLD." },
  { num: "05", title: "Full Documentation", body: "Business plan, technical security measures, organizational structure, HR policy, personnel qualifications, IT infrastructure — full package." },
  { num: "06", title: "License Issued", body: "Regulator grants the EMI license. E-money issuance and payment services can commence. Ongoing annual reporting and fee obligations." },
];

const REQS = [
  "Company incorporated in licensing jurisdiction with registered office",
  "Minimum authorized capital €350,000 (EU) / £350,000 (UK) deposited",
  "Minimum three directors with documented financial sector experience",
  "AML/Compliance Officer (MLRO) appointed — local, qualified",
  "Comprehensive AML/KYC policy aligned with EU AMLD and FATF",
  "HR policy and procedures ensuring business model sustainability",
  "Technical security measures for funds protection documented",
  "Passport copies and CVs for all directors and shareholders",
  "Source of funds and wealth documentation for all principals",
  "Certificate of no criminal record for all principals",
  "All shareholders must be over 18 years of age",
  "Annual renewal fee — amount varies by jurisdiction",
];

const FAQS = [
  { q: "What is an EMI license and who needs it?", a: "An EMI license is required for any company issuing electronic money, operating e-wallets, or providing payment services under EU Directive 2015/2366 (PSD2). Essential for neobanks, payment gateways, e-wallet providers, and remittance services." },
  { q: "Which countries offer EMI licenses?", a: "Most popular: Lithuania (top-5 globally), United Kingdom (FCA — most recognized), Malta (top-3 globally), Estonia (0% tax on retained earnings). We also assist with Czech Republic, Cyprus, Netherlands, Singapore and others." },
  { q: "What is the minimum capital for an EMI license?", a: "For EU EMI licenses, minimum authorized capital is €350,000. For UK FCA EMI, £350,000 is required. Capital must be deposited at a regulator-approved bank before application submission." },
  { q: "How long does it take to obtain an EMI license?", a: "6–12 months for EU jurisdictions (Lithuania, Malta, Estonia) and 12–18 months for UK FCA. Depends on documentation readiness, staff hiring speed, bank account opening, and regulator workload." },
  { q: "What does an EMI license allow?", a: "Issue electronic money, open and manage client e-wallets, provide payment services (transfers, card issuing, payment initiation), create payment systems, and carry out related financial operations." },
  { q: "What documents are required for an EMI license?", a: "Company statutory documents, passport copies and CVs, business plan, AML/KYC policy, technical security description, HR policy, proof of capital deposit. Exact list varies by jurisdiction." },
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

const EmiHubPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);

  const c1 = useCounter(10);
  const c2 = useCounter(350);
  const c3 = useCounter(12);

  useEffect(() => {
    document.title = "EMI License — Electronic Money Institution License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get an EMI license in Lithuania, UK, Malta or Estonia. Issue e-money, open e-wallets, provide payment services. Full legal support from Incluence.");
    setMeta("keywords", "EMI license, electronic money institution, e-money license, EMI Lithuania, EMI UK, EMI Malta");
    setProp("og:title", "EMI License — Electronic Money Institution | Incluence");
    setProp("og:url", "https://incluence.com/emi-license");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/emi-license";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Electronic Money Institution (EMI) License", description: "Legal assistance in obtaining EMI licenses in Lithuania, UK, Malta, Estonia and other jurisdictions for e-money issuance and payment services.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/emi-license", offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "350000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "emi-hub-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#emi-hub-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5, s6];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-5">— Licensing</span>
          <h1 className="text-[clamp(40px,5.5vw,72px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>EMI</span> License
            <br /><span className="text-[#F0EBE0]">Electronic Money Institution</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[520px] mb-10">
            An EMI license authorizes your company to issue electronic money, open and manage e-wallets for clients, provide payment services, and create payment systems. Required under EU Directive 2015/2366 for any fintech operating in the electronic payments space. We obtain licenses in Lithuania, UK, Malta, Estonia and 10+ jurisdictions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Consultation →</Link>
            <a href="#jurisdictions" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Jurisdictions</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [c1 + "+", "Jurisdictions"],
              ["6 months", "Typical Timeline"],
              ["€" + c2 + "K+", "Min. Capital EU"],
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

      {/* WHAT EMI ENABLES */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Licensed Activities</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">What an EMI License Authorizes</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[600px] mb-14">Electronic money is an alternative to cash — assets stored electronically used for trade, exchange, and payments. An EMI license grants the legal right to operate in this space.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {ACTIVITIES.map((a, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                <ScanSweep />
                <div className="mb-4">{a.icon}</div>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JURISDICTIONS */}
      <section id="jurisdictions" style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Available Licenses</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Choose Your EMI Jurisdiction</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">Each jurisdiction offers different capital requirements, timelines, and market access. Lithuania and the UK are the most popular globally — for different reasons.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {JURISDICTIONS.map((j) => (
              <Link to={j.href} key={j.name} className="bg-[#111111] p-8 relative overflow-hidden group block no-underline flex flex-col hover:bg-[#0f0f0f] transition-colors">
                <CornerAccent />
                <ScanSweep />
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-500" />
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <span className="text-[11px] text-[#444CE7] font-semibold tracking-[0.08em] block mb-1">{j.reg}</span>
                    <span className="text-[22px] font-semibold text-[#F0EBE0]">{j.name}</span>
                  </div>
                  <span className="text-[9px] text-[#5A5550] border border-white/10 px-2 py-1 uppercase tracking-[0.08em] flex-shrink-0 ml-3">{j.badge}</span>
                </div>
                <p className="text-[13px] text-[#9A9590] leading-relaxed flex-1 mb-6">{j.desc}</p>
                <div className="border-t border-white/[0.06] pt-4 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em] block">Starting from</span>
                    <span className="text-[17px] font-semibold text-[#F0EBE0]">{j.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em] block">Timeline</span>
                    <span className="text-[13px] text-[#9A9590]">{j.timeline}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">From Application to Licensed EMI</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A thorough 6-step process. EMI licensing requires genuine substance — qualified people, real capital, and functional compliance infrastructure.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (
                <div key={i} ref={stepRefs[i]} data-step className="bg-[#0d0d0d] p-7 relative overflow-hidden group">
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
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Core EMI Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">EMI licensing requires thorough due diligence — 3–6 months average review. Requirements are strict but transparent.</p>
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
              <p className="text-[18px] font-light text-[#F0EBE0] mb-3">Which EMI jurisdiction fits your payment business?</p>
              <p className="text-[13px] text-[#9A9590] leading-relaxed mb-8">E-wallet platform, payment gateway, remittance service, neobank — each has a different optimal structure. Book a 30-minute call and we'll design the right EMI licensing roadmap.</p>
              <Link to="/contact" className="block w-full text-center px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">Book a Free Call →</Link>
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                {[["Response time", "Within 24 hours"], ["Consultation", "Free, no obligation"]].map(([l, v]) => (
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

      {/* CTA */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for an EMI License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your payment business — e-wallet, neobank, remittance, card issuing — and we'll design the optimal EMI licensing structure for your market.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Payment Services Type" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Target Markets" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <textarea placeholder="Business model, existing infrastructure, capital, launch timeline..." rows={4} className="md:col-span-2 bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors resize-none" />
              <button type="submit" className="md:col-span-2 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] py-3.5 transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmiHubPage;
