import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import { TerritoryMap } from "@/components/map/TerritoryMap";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import RelatedJurisdictions from "@/components/RelatedJurisdictions";
import { USACryptoHeroVisual } from "@/components/templates/heroVisuals";

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
  { num: "01", title: "State & License Strategy", body: "Identify the optimal state(s) for Money Transmitter License based on your client geography, capital available, and service model. Some states have no crypto license requirement — strategic planning is critical." },
  { num: "02", title: "US Entity Formation", body: "Incorporate a US legal entity (LLC or Corp) in the chosen state. Registered agent and business address required. Delaware or Wyoming are popular for holding structures." },
  { num: "03", title: "FinCEN MSB Registration", body: "Register as a Money Services Business with FinCEN. Establish AML/CTF compliance program, appoint a compliance officer, and implement suspicious activity reporting (SAR) procedures." },
  { num: "04", title: "State MTL Applications", body: "Submit Money Transmitter License applications in target states. Each state has its own requirements — capital surety bonds, background checks, financial statements, and AML policies." },
  { num: "05", title: "License Issued", body: "Licenses granted on federal and state level. Company can operate as a licensed US crypto exchange. Annual renewal and ongoing reporting obligations to FinCEN and state regulators." },
];
const REQS = [
  "US company incorporated (LLC or Corp) with registered agent",
  "FinCEN MSB registration — mandatory federal requirement for all crypto businesses",
  "AML/CTF compliance program compliant with Bank Secrecy Act (BSA)",
  "AML Compliance Officer appointed with documented BSA/AML experience",
  "Suspicious Activity Report (SAR) filing system implemented",
  "State Money Transmitter License — required for fiat-to-crypto in most states",
  "Surety bond — amount varies by state ($50K–$1M+ typical range)",
  "Minimum balance requirements by state (from $1,000 to $1 million)",
  "Passport/ID and background checks for all principals",
  "Audited financial statements (required by most states)",
  "BitLicense (if operating in New York) — most comprehensive state license",
  "Annual renewal and FinCEN/state reporting obligations",
];
const PROS = [
  "World's largest financial market — access to US clients and capital",
  "FinCEN-licensed entities gain global banking credibility",
  "Easier international banking relationships post-licensing",
  "Perpetual license validity at federal level",
  "Some states have minimal or no crypto license requirements",
  "US entity enables international operations recognition",
];
const CONS = [
  "Multi-layer complexity — federal + 50 state requirements",
  "New York BitLicense — annual renewal up to $300,000",
  "State surety bonds required — $50K to $1M+ depending on state",
  "Capital gains tax up to 20% on crypto transactions",
  "Strict BSA/AML compliance — ongoing SAR filing obligations",
  "Not suitable for EU-only operators — EU clients require EU licenses",
];
const FAQS = [
  { q: "How much does it cost to obtain a cryptocurrency exchange license in the USA?", a: "The final cost of obtaining a cryptocurrency exchange license in the USA depends on several factors (state of registration, list of services, operating region, etc.). To find out the exact cost, please consult our specialists." },
  { q: "Is a bank account required to obtain a cryptocurrency license in the USA?", a: "Yes, to obtain a cryptocurrency license in the USA, you must open a bank account to deposit the share capital. This account will also be necessary for further business operations." },
  { q: "How long does it take to obtain a cryptocurrency license in the USA?", a: "The process of obtaining a cryptocurrency license in the USA can take about six months." },
  { q: "What is the validity period of a cryptocurrency license in the USA?", a: "A cryptocurrency exchange license in the USA is perpetual. However, companies must periodically file reports and adapt to new regulations." },
];
const RELATED = [
  { href: "/lithuania-crypto-license", reg: "FCIS", name: "Lithuania", desc: "Fastest EU VASP. MiCA-ready. 1–3 months, from €10,000." },
  { href: "/cryptocurrency-exchange-license-in-switzerland", reg: "FINMA", name: "Switzerland", desc: "Tier-1 FINMA. Crypto Valley. 5–7 months, from €50,000." },
  { href: "/poland-crypto-license", reg: "Min. of Finance", name: "Poland", desc: "Affordable EU VASP. MiCA-aligned. 2–5 months, from €4,000." },
];
const LICENSE_TYPES = [
  { title: "FinCEN MSB Registration", body: "Federal registration required for all US crypto businesses. Covers crypto-to-crypto transactions and general money services. Mandatory AML program and suspicious activity reporting." },
  { title: "Money Transmitter License", body: "State-level license required for fiat-to-crypto exchange. Requirements vary by state — some require no license at all. We identify the optimal state for your operations." },
  { title: "BitLicense (New York)", body: "The most rigorous US crypto license — required to serve New York residents. Covers all virtual currency business activity. Annual renewal fee up to $300,000." },
];
const FACTS_TABLE: [string, string, string][] = [
  ["Federal reg.", "FinCEN (Money Services Business)", ""],
  ["State license", "Money Transmitter License (MTL)", ""],
  ["NY specific", "BitLicense required", ""],
  ["Surety bond", "Varies: $50K – $1M+ by state", "text-[#f59e0b]"],
  ["Capital gains", "Up to 20%", ""],
  ["Annual renewal", "Required (up to $300K for NY)", "text-[#f59e0b]"],
  ["Timeline", "4–8 months", ""],
  ["Starting from", "$30,000 USD", "text-[#444CE7]"],
  ["Validity", "Perpetual", "text-[#22c55e]"],
];

const USACryptoPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);
  const c1 = useCounter(30000);

  useEffect(() => {
    document.title = "USA Cryptocurrency License — BitLicense & MSB Registration | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };
    setMeta("description", "Get a US cryptocurrency exchange license — FinCEN MSB registration, BitLicense, Money Transmitter License. Federal and state-level. From $30,000. Incluence legal support.");
    setMeta("keywords", "USA crypto license, BitLicense, FinCEN MSB, Money Transmitter License, cryptocurrency license USA, US crypto exchange");
    setProp("og:title", "USA Cryptocurrency License | Incluence");
    setProp("og:url", "https://incluence.com/cryptocurrency-exchange-license-in-the-usa");
    setProp("og:type", "website");
    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/cryptocurrency-exchange-license-in-the-usa";
    const schema = { "@context": "https://schema.org", "@type": "Service", name: "USA Cryptocurrency Exchange License", description: "Federal and state-level cryptocurrency licensing in the USA — FinCEN MSB, BitLicense, and Money Transmitter License.", provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" }, areaServed: "United States", url: "https://incluence.com/cryptocurrency-exchange-license-in-the-usa", offers: { "@type": "Offer", priceCurrency: "USD", price: "30000" } };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "usa-crypto-schema"; s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#usa-crypto-schema")?.remove(); can?.remove(); };
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
            <Link to="/cryptocurrency-exchange-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Crypto License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">USA Crypto License</span>
          </div>
        </nav>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <TerritoryMap iso="US" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Crypto License</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Federal · FinCEN · State Licenses</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
              <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cryptocurrency Exchange License</span>{" "}in the USA
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">The existence of a legal framework imposes certain requirements on crypto exchanges and other companies conducting digital currency transactions. Such organizations must register as financial service providers, obtain the relevant license — a BitLicense, and report certain transactions to U.S. regulators.</p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
              <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[[`$${c1.toLocaleString()}+`, "Starting from (USD)", ""], ["4–8 months", "Timeline", ""], ["FinCEN", "Federal regulator", "text-[#444CE7] font-semibold"], ["50 states", "Jurisdiction scope", ""], ["Perpetual", "License validity", "text-[#22c55e]"], ["Up to 20%", "Capital gains tax", ""]].map(([v, l, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group"><ScanSweep /><span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{v}</span><span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About USA Crypto Licensing</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Main Information about Cryptocurrency Exchange Licensing in the USA</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The existence of a legal framework imposes certain requirements on crypto exchanges and other companies conducting digital currency transactions. In particular, such organizations must: register as financial service providers; obtain the relevant license — a BitLicense; report certain transactions to U.S. regulators — as part of anti-money laundering, counter-terrorism financing, and tax compliance measures. Income from cryptocurrency transactions is taxed as capital gains — up to 20%.</p>
              <p>The U.S. financial regulator — FinCEN — oversees the licensing of companies engaged in cryptocurrency transactions. Licenses may be federal or local (within individual states). To operate on a nationwide level, the license must be renewed annually, with renewal fees reaching $300,000 or more. One advantage entrepreneurs gain after licensing is the ability to legalize operations in other countries.</p>
              <p>When considering licensing, note that in addition to federal requirements, each state has its own stance on digital currencies. The same applies to minimum share capital, taxation specifics, and other factors. In most states, beneficiaries are required to maintain a certain minimum balance — from $1,000 up to $1 million USD. However, in Georgia, this requirement is not legislated at all. To navigate these nuances and quickly obtain a crypto exchange license in the U.S., contact our firm.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {LICENSE_TYPES.map((lt, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden"><CornerAccent /><ScanSweep /><h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{lt.title}</h3><p className="text-[13px] text-[#9A9590] leading-[1.7]">{lt.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">US Crypto Licensing: Federal + State</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">We identify the optimal state for your operations, handle FinCEN registration, and manage state-level MTL applications. 4–8 months total depending on states selected.</p>
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
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Federal & State Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">Requirements vary by state. Federal FinCEN registration is mandatory for all. We navigate the multi-state complexity and prepare all filings.</p>
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

      <RelatedJurisdictions title="Other Crypto Jurisdictions" items={RELATED} />

      {/* CTA FORM */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a USA Crypto License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your crypto business — target states, services, and client geography. We'll design the optimal federal + state licensing strategy.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Target States" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
                <input type="text" placeholder="Crypto Services" className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors" />
              </div>
              <textarea placeholder="Additional details — client geography, fiat/crypto operations, New York presence planned..." className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7]/50 focus:outline-none transition-colors min-h-[120px] resize-none" />
              <button type="submit" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USACryptoPage;
