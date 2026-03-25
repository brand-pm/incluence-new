import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import { TerritoryMap } from "@/components/map/TerritoryMap";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import RelatedJurisdictions from "@/components/RelatedJurisdictions";
import { MaltaCryptoHeroVisual } from "@/components/templates/heroVisuals";

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

const CLASSES = [
  { cls: "Class 1", desc: "Receiving and transmitting orders, providing investment advice regarding Virtual Financial Assets (VFAs)" },
  { cls: "Class 2", desc: "Operations with funds, excluding exchange trading or proprietary trading" },
  { cls: "Class 3", desc: "Any operations except exchange and proprietary trading. Holding and controlling client funds is permitted" },
  { cls: "Class 4", desc: "All cryptocurrency operations, including those involving client funds" },
];

const STEPS = [
  { num: "01", title: "License Class Selection", body: "Choose the appropriate VFA license class based on your planned services — from investment advice (Class 1) to full proprietary trading with client funds (Class 4)." },
  { num: "02", title: "Company Formation", body: "Register a Malta Private Limited Company. Minimum share capital €1,165 (20% paid immediately). Registered office in Malta mandatory." },
  { num: "03", title: "Key Personnel", body: "Appoint minimum two directors, AML officer, risk manager, and auditor. All must meet MFSA's Fit & Proper requirements with documented financial sector experience." },
  { num: "04", title: "Documentation Package", body: "Business plan, AML/KYC policies, organizational structure, IT infrastructure documentation, and full personnel qualification packages prepared for MFSA submission." },
  { num: "05", title: "MFSA Application", body: "Submit complete VFA license application to the MFSA. Review period typically 6–9 months. We manage all correspondence and respond to regulator queries." },
  { num: "06", title: "License Issued", body: "MFSA grants the VFA license with indefinite validity. Operations must commence within 6 months of license issuance. Ongoing annual fee and reporting obligations." },
];

const REQS = [
  "Register a legal entity in the form of a Private Limited Liability Company",
  "Minimum share capital of €1,165, of which 20% must be paid immediately",
  "A rented office in Malta is mandatory",
  "The company must employ at least two directors, an AML officer, a risk manager, and an auditor",
  "Prepare the documentation required for submission to the MFSA",
  "The exact list of documents may vary — contact our specialists for a detailed consultation",
];

const FACTS = [
  ["Regulator", "Malta Financial Services Authority (MFSA)", ""],
  ["Framework", "Virtual Financial Assets Act (VFA)", ""],
  ["License classes", "4 (Class 1 to Class 4)", ""],
  ["Min. capital", "€1,165 (20% paid up)", ""],
  ["One-time fee", "€3,000 – €12,000 by class", ""],
  ["Annual fee", "€2,750 – €25,000 by class", ""],
  ["Timeline", "6–9 months", ""],
  ["Starting from", "€25,000", "text-[#444CE7]"],
  ["Validity", "Indefinite", "text-[#22c55e]"],
];

const PROS = [
  "Four license classes — precise fit for any crypto business model",
  "One of the world's first comprehensive VFA regulatory frameworks",
  "Indefinite license validity — no expiry date",
  "MFSA brand recognized globally by crypto institutional clients",
  "Strong crypto and blockchain legal ecosystem in Malta",
  "EU market access with established crypto-friendly banking",
];
const CONS = [
  "Timeline 6–9 months — not for fast launches",
  "Local directors and office in Malta required",
  "Operations must start within 6 months of license issuance",
  "Annual fees up to €25,000 for Class 4",
  "MiCA transition may require additional MFSA authorization",
  "Strict MFSA requirements for key personnel qualifications",
];

const FAQS = [
  { q: "How much does it cost to obtain a cryptocurrency exchange license in Malta?", a: "The final cost of obtaining a cryptocurrency exchange license in Malta depends on various factors (the exact list of future services, the region of operation of the exchange, etc.). You can find out the exact cost by consulting our specialists." },
  { q: "Is a bank account required to obtain a cryptocurrency license in Malta?", a: "A bank account is required to deposit the share capital." },
  { q: "How long does it take to obtain a cryptocurrency license in Malta?", a: "The timeframe for obtaining a cryptocurrency license depends on how quickly all the necessary steps are completed, how fast a bank account is opened by payment institutions, and how quickly the regulator reviews the application. The review period can take 6–9 months." },
  { q: "What is the validity period of a cryptocurrency license in Malta?", a: "A cryptocurrency exchange license in Malta is indefinite. However, periodic reports must be submitted, and the company must adapt to regulatory changes. The company must commence operations within six months of receiving the license." },
];

const RELATED = [
  { href: "/lithuania-crypto-license", flag: "🇱🇹", reg: "FCIS", name: "Lithuania", desc: "Fastest EU VASP. MiCA-aligned. 1–3 months, from €10,000." },
  { href: "/cryptocurrency-exchange-license-in-estonia", flag: "🇪🇪", reg: "FIU", name: "Estonia", desc: "0% tax retained earnings. Indefinite license. 3–6 months." },
  { href: "/poland-crypto-license", flag: "🇵🇱", reg: "PFSA", name: "Poland", desc: "Fast EU VASP registration. 2–3 months, from €8,000." },
];

const MaltaCryptoPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null), s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null), s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);
  const stepRefs = [s1, s2, s3, s4, s5, s6];
  const c1 = useCounter(25000);

  useEffect(() => {
    document.title = "Malta Cryptocurrency License VFA — 4-Class Crypto License | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a Malta VFA (Virtual Financial Assets) crypto license. 4 license classes from investment advice to full trading. From €25,000, 6–9 months. Incluence.");
    setMeta("keywords", "Malta crypto license, VFA license Malta, MFSA crypto license, Malta cryptocurrency license, Malta blockchain license");
    setProp("og:title", "Malta VFA Crypto License | Incluence");
    setProp("og:url", "https://incluence.com/cryptocurrency-license-in-malta");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/cryptocurrency-license-in-malta";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "Malta VFA Cryptocurrency License", description: "Legal assistance in obtaining a Malta VFA crypto license — 4 classes covering investment advice to proprietary trading.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "Worldwide", url: "https://incluence.com/cryptocurrency-license-in-malta", offers: { "@type": "Offer", priceCurrency: "EUR", price: "25000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "malta-crypto-schema"; s.text = JSON.stringify(schema); document.head.appendChild(s);
    return () => { document.querySelector("#malta-crypto-schema")?.remove(); can?.remove(); };
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
          <span className="text-[#9A9590]">Malta Crypto License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-[1]"><MicroParticles /></div>
        <TerritoryMap iso="MT" />

        <div className="relative z-10 max-w-screen-xl mx-auto max-w-[600px]">
          <div className="flex gap-3 mb-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Crypto License</span>
            <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">EU · MFSA · VFA</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.08] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cryptocurrency License</span> in Malta
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.85] mb-10">If you are interested in licensing a Maltese company, you should first determine the class of license. Each class authorizes specific services, and the complexity of obtaining the required permit depends on it. There are four classes of cryptocurrency licenses in Malta.</p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
            <a href="#requirements" className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all inline-block">View Requirements</a>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [`€${c1.toLocaleString()}+`, "Starting from", ""],
              ["6–9 months", "Timeline", ""],
              ["MFSA", "Regulator", "text-[#444CE7] font-semibold"],
              ["4 classes", "License types", "text-[#444CE7]"],
              ["Indefinite", "License validity", "text-[#22c55e]"],
              ["EU", "Market access", ""],
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About Malta VFA License</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">Types of Cryptocurrency Licenses in Malta</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>If you are interested in licensing a Maltese company, you should first determine the class of license. Each class authorizes specific services, and the complexity of obtaining the required permit depends on it. There are four classes of cryptocurrency licenses in Malta.</p>
              <p>Class 1: Receiving and transmitting orders, providing investment advice regarding Virtual Financial Assets (VFAs). Class 2: Operations with funds, excluding exchange trading or proprietary trading. Class 3: Any operations except exchange and proprietary trading, holding and controlling client funds is permitted. Class 4: All cryptocurrency operations, including those involving client funds.</p>
              <p>The licensing cost directly depends on the class. Payment is made in two parts — a one-time fee and an annual fee required to renew the license. One-time fees range from €3,000 to €12,000, while annual fees range from €2,750 to €25,000.</p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-2">
            {CLASSES.map((c) => (
              <div key={c.cls} className="bg-[#080808] border border-white/[0.06] p-4 relative group overflow-hidden">
                <CornerAccent /><ScanSweep />
                <span className="text-[10px] text-[#444CE7] border border-[#444CE7]/30 px-2 py-0.5 uppercase tracking-[0.08em] inline-block mb-1">{c.cls}</span>
                <p className="text-[12px] text-[#9A9590] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Obtain a Malta VFA License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A 6-step process managed end-to-end. MFSA review is the longest phase — we prepare documentation to minimize delays.</p>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">MFSA requires comprehensive documentation for all VFA license classes. Higher classes carry stricter personnel and capital requirements.</p>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Advantages & Limitations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-7">
              <h3 className="text-[13px] text-[#22c55e] uppercase tracking-[0.08em] mb-5">Advantages</h3>
              <div className="space-y-3">{PROS.map((p, i) => (<div key={i} className="flex items-start gap-3"><Check className="w-3.5 h-3.5 text-[#22c55e] mt-0.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{p}</span></div>))}</div>
            </div>
            <div className="bg-[#111111] p-7">
              <h3 className="text-[13px] text-[#f59e0b] uppercase tracking-[0.08em] mb-5">Limitations</h3>
              <div className="space-y-3">{CONS.map((c, i) => (<div key={i} className="flex items-start gap-3"><X className="w-3.5 h-3.5 text-[#f59e0b] mt-0.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{c}</span></div>))}</div>
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

      <RelatedJurisdictions title="Other Crypto Jurisdictions" items={RELATED} />

      {/* CTA */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a Malta VFA License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your crypto business. We'll recommend the right VFA class and manage the full MFSA licensing process.</p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              {[["Full Name", "text"], ["Company Name", "text"], ["VFA Class (1/2/3/4)", "text"], ["Target Markets", "text"]].map(([label, type]) => (
                <div key={label}>
                  <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">{label}</label>
                  <input type={type} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors" />
                </div>
              ))}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mb-2">Additional Details</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/[0.08] hover:border-white/20 focus:border-[#444CE7]/50 px-4 py-3 text-[14px] text-[#F0EBE0] outline-none transition-colors resize-none" placeholder="Additional details — crypto services, trading instruments, institutional vs retail..." />
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

export default MaltaCryptoPage;
