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
  { reg: "FIU", name: "Estonia", badge: "EU · E-Residency", desc: "Estonia offers relatively simple and quick company registration, favorable taxation, and enjoys investor and partner trust. One of the first EU countries to regulate crypto.", timeline: "3–6 months", href: "/cryptocurrency-exchange-license-in-estonia" },
  { reg: "FCIS", name: "Lithuania", badge: "EU · MiCA Ready", desc: "Fast-track crypto licensing in Lithuania. One of the most progressive FinTech jurisdictions in the EU with a streamlined registration process.", timeline: "1–3 months", href: "/lithuania-crypto-license" },
  { reg: "FINMA", name: "Switzerland", badge: "Tier 1", desc: "Reliable banking system, stable currency, multiple double taxation treaties. Swiss crypto companies enjoy high reputation among investors and partners.", timeline: "6–12 months", href: "/cryptocurrency-exchange-license-in-switzerland" },
  { reg: "MFSA", name: "Malta", badge: "EU · 4 Classes", desc: "Malta is one of the first countries in the world to provide a regulatory framework for blockchain and cryptocurrency companies — the 'Blockchain Island'.", timeline: "6–9 months", href: "/cryptocurrency-license-in-malta" },
  { reg: "PFSA", name: "Poland", badge: "EU · VASP", desc: "Poland offers a regulated environment for cryptocurrency exchange companies. Registration in the Polish Virtual Asset Register required.", timeline: "2–3 months", href: "/poland-crypto-license" },
  { reg: "FinCEN", name: "USA", badge: "Federal · MSB", desc: "Cryptocurrency exchange licensing in the USA requires compliance with state-level Money Transmitter Licenses and federal FinCEN registration.", timeline: "4–8 months", href: "/cryptocurrency-exchange-license-in-the-usa" },
];

const ACTIVITIES = [
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>, title: "Fiat ↔ Crypto Exchange", body: "Accept EUR, USD and other fiat currencies in exchange for Bitcoin, Ethereum, stablecoins and other digital assets." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6M3 12a9 9 0 0115.36-6.36L21 8M3 22v-6h6M21 12a9 9 0 01-15.36 6.36L3 16"/></svg>, title: "Crypto ↔ Crypto Trading", body: "Facilitate trades between cryptocurrencies and stablecoins — BTC↔ETH, USDT↔BNB and other pairs on your platform." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="0"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>, title: "Custodial Wallet Services", body: "Hold and manage clients' cryptographic keys. Securely store digital assets on behalf of users with full audit trails." },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg>, title: "Transaction Mediation", body: "Act as an intermediary for crypto trades, provide liquidity solutions, and operate OTC desks and exchange platforms." },
];

const MICA_FACTS = [
  ["Effective", "December 2024", "text-[#f59e0b]"],
  ["Scope", "All EU member states", ""],
  ["License type", "CASP authorization", ""],
  ["Fastest path", "Lithuania (1–3 months)", "text-[#22c55e]"],
  ["Capital (exchange)", "€125,000 min.", "text-[#444CE7]"],
  ["Passporting", "Full EU + EEA", "text-[#22c55e]"],
  ["Transition", "Existing licenses → CASP", ""],
];

const STEPS = [
  { num: "01", title: "Jurisdiction Selection", body: "We assess your crypto business model, target EU markets, capital available, and MiCA timeline to recommend Estonia, Lithuania, Malta or another jurisdiction." },
  { num: "02", title: "Company Formation", body: "Incorporate the legal entity — UAB in Lithuania, OÜ in Estonia, or Ltd in Malta. Registered office, directors, shareholders all set up correctly." },
  { num: "03", title: "AML/KYC Framework", body: "Develop comprehensive AML/KYC policies, appoint a qualified local AML Officer (MLRO), and implement transaction monitoring technology." },
  { num: "04", title: "Capital & Banking", body: "Open corporate account at a regulator-approved bank or EMI. Deposit required share capital (€125,000 for exchange operators under MiCA)." },
  { num: "05", title: "Regulator Submission", body: "Submit full application to FCIS (Lithuania), FIU (Estonia), or MFSA (Malta). We manage all follow-up queries and compliance correspondence." },
  { num: "06", title: "License Issued", body: "VASP license granted. Company entered into the official VASP register. Post-licensing compliance support and MiCA transition planning included." },
];

const REQS = [
  "Company incorporated in the licensing jurisdiction with registered office",
  "Minimum share capital — €125,000 for exchange operators (MiCA standard)",
  "Qualified local AML Officer (MLRO) appointed — mandatory in all EU jurisdictions",
  "Comprehensive AML/KYC policy including Customer Due Diligence procedures",
  "Transaction monitoring system integrated into platform operations",
  "Sanctions screening against EU, UN and OFAC lists",
  "Passport copies, CVs and source of funds for all directors and shareholders",
  "Detailed business plan covering all crypto services and target markets",
  "IT infrastructure and cybersecurity framework documentation",
  "Proof of no criminal record for all company principals",
  "Bank or EMI account for authorized capital deposit",
];

const FAQS = [
  { q: "What is a VASP license and who needs it?", a: "A VASP (Virtual Asset Service Provider) license is official authorization to offer cryptocurrency services — exchange, custody, wallet management, and transaction mediation. Any company offering these services to EU clients must be licensed under MiCA or national VASP frameworks." },
  { q: "Which EU jurisdiction is best for a crypto license?", a: "Lithuania is the fastest (1–3 months) and most MiCA-aligned. Estonia offers 0% corporate tax on retained earnings and e-residency compatibility. Malta has four license classes for full VFA service coverage. We recommend based on your specific business model." },
  { q: "What does MiCA mean for my crypto business?", a: "The EU's Markets in Crypto-Assets Regulation (MiCA) requires all companies offering crypto services to EU clients to hold a CASP (Crypto Asset Service Provider) authorization. Obtaining a Lithuanian or Estonian VASP license now positions you for smooth MiCA transition and EU-wide passporting." },
  { q: "How long does it take to get a crypto license in the EU?", a: "Lithuania: 1–3 months. Poland: 2–3 months. Estonia: 3–6 months. Malta: 6–9 months. Switzerland: 6–12 months. We provide realistic timelines upfront based on your documentation readiness." },
  { q: "What is the minimum capital for an EU crypto license?", a: "Under MiCA, exchange operators require €125,000 minimum capital. Custodial wallet operators require €150,000. Some jurisdictions (Lithuania UAB incorporation) require only €2,500 for company formation, but the regulatory capital must be deposited separately." },
  { q: "Can a non-EU resident obtain a crypto license in Lithuania or Estonia?", a: "Yes — non-residents can fully own and operate a Lithuanian UAB or Estonian OÜ. A local AML Officer and registered address are required. Estonia additionally offers e-Residency for remote company management." },
  { q: "What ongoing obligations come with a VASP license?", a: "Regular AML/CTF reporting to the financial regulator, transaction monitoring, suspicious activity reports (SARs), annual compliance audits, record keeping for 8 years, and adaptation to MiCA updates." },
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

const CryptoHubPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);

  const c1 = useCounter(10);
  const c2 = useCounter(400);
  const c3 = useCounter(12);

  useEffect(() => {
    document.title = "Cryptocurrency Exchange License — VASP License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a crypto exchange license (VASP) in Lithuania, Estonia, Malta, Poland, Switzerland. MiCA-ready EU licenses. Full legal support from Incluence.");
    setMeta("keywords", "cryptocurrency exchange license, VASP license, crypto license EU, MiCA license, Lithuania crypto license, Estonia crypto license");
    setProp("og:title", "Cryptocurrency Exchange License — VASP | Incluence");
    setProp("og:url", "https://incluence.com/cryptocurrency-exchange-license");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/cryptocurrency-exchange-license";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Cryptocurrency Exchange License (VASP)", description: "Legal assistance in obtaining cryptocurrency exchange and VASP licenses in Lithuania, Estonia, Malta, Poland, Switzerland and other jurisdictions.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/cryptocurrency-exchange-license", offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "10000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "crypto-hub-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#crypto-hub-schema")?.remove(); can?.remove(); };
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
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Crypto</span> & VASP{"\n"}License
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] max-w-[540px] mb-10">
            A crypto exchange license (VASP — Virtual Asset Service Provider) authorizes your company to offer fiat-to-crypto exchange, crypto-to-crypto trading, custodial wallets, and transaction mediation. We help you obtain MiCA-ready EU licenses and offshore VASP registrations across 10+ jurisdictions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Consultation →</Link>
            <a href="#jurisdictions" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Jurisdictions</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [c1 + "+", "Jurisdictions"],
              ["4–6 weeks", "Fastest (Lithuania)"],
              [c2 + "+", "Licenses Obtained"],
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
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Available Licenses</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Choose Your VASP Jurisdiction</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">Each jurisdiction offers a different balance of speed, cost, EU market access and MiCA readiness. We select the right one for your crypto business model.</p>
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
                  <div>
                    <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em] block">Starting from</span>
                    <span className="text-[16px] font-semibold text-[#F0EBE0]">{j.price}</span>
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

      {/* WHAT VASP COVERS */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Licensed Activities</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">What a Crypto License Authorizes</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[600px] mb-12">A VASP license grants your company the legal right to offer digital asset services to clients — either as a standalone crypto business or integrated into a broader fintech product.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {ACTIVITIES.map((a, i) => (
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

      {/* MiCA SPOTLIGHT */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— EU Regulation</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">MiCA: The New EU Standard for Crypto</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The EU's Markets in Crypto-Assets Regulation (MiCA) is the most comprehensive crypto regulatory framework in the world — and it took full effect in 2025. Any company offering crypto services to EU clients must now be MiCA-compliant.</p>
              <p>Lithuania and Estonia are the two fastest EU jurisdictions for VASP licensing — and both already align closely with MiCA's CASP (Crypto Asset Service Provider) framework. Companies licensed in these jurisdictions today are positioned for smooth MiCA transition and EU-wide passporting.</p>
              <p>We help you choose the right jurisdiction based on your MiCA timeline, capital readiness, and target EU markets — then manage the full licensing process from company formation to regulator approval.</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#080808] border border-[#444CE7]/20 p-8 relative overflow-hidden group">
              <ScanSweep />
              <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— MiCA Key Facts</span>
              <div className="divide-y divide-white/[0.05]">
                {MICA_FACTS.map(([l, v, cls]) => (
                  <div key={l} className="flex justify-between py-3">
                    <span className="text-[13px] text-[#5A5550]">{l}</span>
                    <span className={`text-[13px] text-[#F0EBE0] font-medium ${cls}`}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="block w-full text-center px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">Get MiCA Guidance →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">From Registration to Licensed VASP</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">We manage every step of the VASP licensing process. Timeline depends on jurisdiction — fastest with Lithuania at 1–3 months.</p>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Common VASP Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Requirements vary by jurisdiction. EU licenses (MiCA-aligned) require stricter compliance frameworks. We prepare the full documentation package — you provide personal documents only.</p>
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
              <p className="text-[18px] font-light text-[#F0EBE0] mb-3">Which crypto license fits your business model?</p>
              <p className="text-[13px] text-[#9A9590] leading-relaxed mb-8">Exchange, custody, wallet, OTC desk — each requires a different license class. Book a 30-minute call and we'll map your service offering to the right jurisdiction and MiCA-compliant structure.</p>
              <Link to="/contact" className="block w-full text-center px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">Book a Free Call →</Link>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a Crypto / VASP License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your crypto services — exchange, custody, OTC, wallet — and we'll design the right licensing structure with a full MiCA transition roadmap.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              {[["Full Name", "text"], ["Company Name", "text"], ["Crypto Services (exchange / custody / OTC)", "text"], ["Target Markets", "text"]].map(([label, type]) => (
                <div key={label}>
                  <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">{label}</label>
                  <input type={type} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors" />
                </div>
              ))}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">Additional Details</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors resize-none" placeholder="Additional details — existing structure, capital available, MiCA timeline requirements..." />
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

export default CryptoHubPage;
