import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Check, X } from "lucide-react";
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
  { num: "01", title: "UK Company Formation", body: "Register a UK Limited company. Local registered office. All directors undergo FCA Fit & Proper checks — financial sector experience required." },
  { num: "02", title: "Capital & Banking", body: "£350,000 deposited at an FCA-approved UK bank. Source of funds documentation reviewed by FCA as part of application." },
  { num: "03", title: "AML/KYC Framework", body: "AML policy compliant with UK Money Laundering Regulations 2017. Qualified MLRO with UK credentials appointed." },
  { num: "04", title: "IT & Safeguarding", body: "FCA assesses IT infrastructure, cybersecurity measures, client fund safeguarding arrangements, and business continuity planning." },
  { num: "05", title: "FCA Application", body: "Complete application to the Financial Conduct Authority. 9–12 months review period. We manage all RFI responses and compliance queries." },
  { num: "06", title: "Authorization Granted", body: "FCA grants EMI authorization. UK payment rails activated — Faster Payments, BACS, CHAPS, SWIFT. Annual FCA fee and reporting obligations." },
];

const REQS = [
  "UK Limited company with registered office",
  "£350,000 at FCA-approved bank",
  "Directors pass FCA Fit & Proper assessment",
  "MLRO with UK credentials appointed",
  "AML policy — UK Money Laundering Regulations 2017",
  "Client fund safeguarding arrangements",
  "IT systems and cybersecurity reviewed by FCA",
  "Business continuity and disaster recovery plan",
  "Passport copies and CVs for all key personnel",
  "Source of funds documentation",
  "Certificate of no criminal record",
  "Annual FCA fee and conduct of business reporting",
];

const FACTS = [
  ["Regulator", "Financial Conduct Authority (FCA)", ""],
  ["Payment rails", "Faster Payments, BACS, CHAPS", "text-[#22c55e]"],
  ["International", "SWIFT access", "text-[#22c55e]"],
  ["Min. capital", "£350,000", "text-[#444CE7]"],
  ["Timeline", "12–18 months", ""],
  ["Global status", "Tier 1 — most recognized", "text-[#444CE7]"],
  ["Validity", "Indefinite", "text-[#22c55e]"],
];

const PROS = [
  "Most recognized EMI license globally",
  "Faster Payments, BACS, CHAPS and SWIFT access",
  "Institutional partner and correspondent bank preferred",
  "Post-Brexit regulatory flexibility",
  "London's deep fintech and compliance ecosystem",
];

const CONS = [
  "12–18 months — longest EMI timeline globally",
  "No EU passporting post-Brexit",
  "£350,000 + significant operational costs",
  "FCA IT and safeguarding review is stringent",
  "Annual FCA fees and ongoing reporting",
];

const FAQS = [
  { q: "What are the conditions for a UK FCA EMI license?", a: "You need a UK Limited company, directors who pass FCA Fit & Proper checks, £350,000 minimum capital at an FCA-approved bank, a qualified MLRO, AML policy compliant with UK Money Laundering Regulations, client fund safeguarding arrangements, and a comprehensive FCA application." },
  { q: "What documents are required?", a: "Company statutory documents, detailed business plan, AML/KYC policy, IT infrastructure and cybersecurity documentation, CVs and passport copies for all key personnel, source of funds evidence, and business continuity plan." },
  { q: "How long does it take to get a UK EMI license?", a: "12–18 months total. The FCA review period is typically 9–12 months after application submission. Including company formation and document preparation, expect 12–18 months from project start." },
  { q: "Does a UK EMI have EU passporting after Brexit?", a: "No. Post-Brexit, UK FCA EMI licenses are not passported into the EU. To serve EU clients, you need a separate EU-licensed entity — typically in Lithuania, Malta, or Estonia. We can structure a dual-entity setup." },
  { q: "What payment rails does a UK EMI access?", a: "Faster Payments (instant UK transfers), BACS (batch processing for salaries and direct debits), CHAPS (same-day high-value transfers), and SWIFT for international transactions. This is the most complete payment rail access available under any single EMI license." },
];

const RELATED = [
  { href: "/e-money-license-lithuania", flag: "🇱🇹", reg: "Bank of Lithuania", name: "Lithuania", desc: "Top-5 globally. SEPA 36 countries. Full EU passport. 6–12 months." },
  { href: "/e-money-license-malta", flag: "🇲🇹", reg: "MFSA", name: "Malta", desc: "Top-3 globally. Full EU passport. MFSA fintech-friendly. 6–12 months." },
  { href: "/emi-license-in-estonia", flag: "🇪🇪", reg: "Finantsinspektsioon", name: "Estonia", desc: "0% tax on retained earnings. E-Residency compatible. 6–12 months." },
];

const UKEmiPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(350);
  const stepRefs = [s1, s2, s3, s4, s5, s6];

  useEffect(() => {
    document.title = "UK EMI License FCA — Electronic Money Institution | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a UK FCA EMI license — world's most recognized. Faster Payments, BACS, CHAPS, SWIFT. From £350,000. 12–18 months. Incluence legal support.");
    setMeta("keywords", "UK EMI license, FCA EMI, electronic money institution UK, FCA e-money license, UK payment license");
    setProp("og:title", "UK EMI License FCA | Incluence");
    setProp("og:url", "https://incluence.com/e-money-license-uk");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/e-money-license-uk";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "UK FCA EMI License", description: "Legal assistance obtaining a UK FCA Electronic Money Institution license. Access to Faster Payments, BACS, CHAPS and SWIFT.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/e-money-license-uk", offers: { "@type": "Offer", priceCurrency: "GBP", price: "350000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "uk-emi-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#uk-emi-schema")?.remove(); can?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 48px" }}>
        <nav className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px]">
          <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">Incluence</Link>
          <span className="text-[#5A5550]">→</span>
          <Link to="/emi-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">EMI License</Link>
          <span className="text-[#5A5550]">→</span>
          <span className="text-[#9A9590]">UK EMI License</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        <TerritoryMap iso="GB" markerLabel="London" subLabel="FCA HQ" />
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex gap-3 mb-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— EMI License</span>
            <span className="text-[9px] text-[#5A5550] border border-white/10 px-2 py-0.5 uppercase tracking-[0.08em]">Tier 1 · FCA · Faster Payments</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>UK</span> EMI License
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] max-w-[500px] mb-10">
            The United Kingdom continues to be one of the top jurisdictions globally for EMI licensing. An FCA-authorized EMI is the most internationally recognized e-money license — preferred by institutional partners, correspondent banks, and enterprise clients worldwide. Access to Faster Payments, BACS, CHAPS and SWIFT.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
            <a href="#requirements" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Requirements</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              ["£" + c1 + "K+", "Min. Capital"],
              ["12–18 months", "Timeline"],
              ["FCA", "Regulator"],
              ["Tier 1", "Global status"],
              ["Faster Payments", "UK rails"],
              ["SWIFT", "International"],
            ].map(([v, l], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <span className={`text-[22px] font-light leading-none block ${i === 2 || i === 3 ? "text-[#444CE7]" : i >= 4 ? "text-[#22c55e]" : "text-[#F0EBE0]"}`}>{v}</span>
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About UK FCA EMI</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">The World's Most Recognized E-Money License</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The UK's Financial Conduct Authority (FCA) is one of the world's most respected financial regulators. An FCA EMI authorization is the most globally recognized e-money license — opening doors with institutional banking partners, prime brokers, and enterprise clients who require Tier-1 regulatory credentials.</p>
              <p>A UK EMI license grants access to the UK's core payment infrastructure: Faster Payments (instant transfers), BACS (batch processing), CHAPS (same-day high-value transfers), and SWIFT for international transactions. This payment rail access is unmatched by any other jurisdiction.</p>
              <p>The FCA application process is the most thorough of any EMI jurisdiction — 12–18 months, with stringent fit-and-proper checks, capital adequacy assessment, and IT systems review. This rigor is precisely why an FCA EMI carries such global weight with banking and payment partners.</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              ["UK Payment Rails", "Faster Payments, BACS, CHAPS and SWIFT — the most complete payment infrastructure under a single EMI license."],
              ["Global Institutional Recognition", "FCA authorization is the benchmark accepted by top-tier correspondent banks, prime brokers, and institutional clients in every major market."],
              ["Post-Brexit Flexibility", "The UK operates independently of EU regulations, giving FCA-licensed EMIs flexibility to serve clients globally without EU restriction constraints."],
            ].map(([t, b], i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden">
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Obtain a UK FCA EMI License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">6-step process fully managed by our team. FCA review is the most thorough — 12–18 months total timeline.</p>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">FCA EMI Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">The FCA applies the most rigorous due diligence of any EMI regulator. We prepare the complete package and manage all correspondence.</p>
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
              <div className="absolute top-6 right-6"><div className="relative w-2 h-2"><div className="absolute inset-0 bg-[#22c55e]" /><div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite" }} /></div></div>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Pros & Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[13px] text-[#22c55e] uppercase tracking-[0.1em] mb-6">Advantages</h3>
              <div className="space-y-4">
                {PROS.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#9A9590] leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[13px] text-[#ef4444] uppercase tracking-[0.1em] mb-6">Considerations</h3>
              <div className="space-y-4">
                {CONS.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-0.5" />
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

      <RelatedJurisdictions tag="— Related" title="Other EMI Jurisdictions" items={RELATED} />

      {/* CTA FORM */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a UK EMI License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your payment business — institutional vs retail focus, EU expansion plans, and target client markets. Response within 24 hours.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Payment Services" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Target Client Markets" className="bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors" />
              <textarea placeholder="Institutional vs retail focus, EU expansion plans..." rows={4} className="md:col-span-2 bg-[#0d0d0d] border border-white/[0.06] px-5 py-3.5 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:outline-none focus:border-[#444CE7]/40 transition-colors resize-none" />
              <button type="submit" className="md:col-span-2 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] py-3.5 transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKEmiPage;
