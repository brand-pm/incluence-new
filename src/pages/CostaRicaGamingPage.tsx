import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Check, X, Clock, DollarSign, FileX } from "lucide-react";
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

const STEPS = [
  { num: "01", title: "Company Incorporation", body: "Register a Costa Rican Sociedad Anónima (SA) or LLC. Minimum two shareholders. At least 25% of issued share capital must be paid on registration." },
  { num: "02", title: "Local Office & Representative", body: "Establish a physical office address in Costa Rica. Appoint a Costa Rican resident as legal representative — mandatory for foreign-owned companies." },
  { num: "03", title: "License Application", body: "Submit the Data Processing license application to the local municipality. One-time fee of $15,000 payable at submission." },
  { num: "04", title: "License Issued", body: "Municipality issues the license. Process typically 2–5 weeks. Quarterly renewal fee of $1,500 applies. Full operations can commence immediately." },
];

const REQS = [
  "Company incorporation in Costa Rica (SA or LLC)",
  "Physical office address in Costa Rica",
  "Costa Rican resident as legal representative (for foreign-owned companies)",
  "Minimum 25% of issued share capital paid at registration",
  "Passport copies and proof of address for all directors and shareholders",
  "Company statutory documents",
  "One-time license fee of $15,000",
  "Quarterly renewal fee of $1,500",
  "Equipment for online operations must be located outside Costa Rica",
  "Services must not target Costa Rican residents",
];

const PROS = [
  "Fastest gambling license — 2–5 weeks from start to finish",
  "Income tax exempt for international operators",
  "No business plan or profit forecast required",
  "No paid-up capital requirement beyond 25% of share capital",
  "No financial reporting obligations",
  "No requirements related to software or RNG certification",
  "Simple renewal process — quarterly $1,500 fee",
];

const CONS = [
  "Less prestigious than regulated licenses (MGA, GSC, UKGC)",
  "Major payment processors may require a regulated EU license",
  "Equipment must be physically located outside Costa Rica",
  "Cannot service Costa Rican residents",
  "Not suitable as a long-term EU market strategy",
  "Annual validity requires consistent renewal management",
];

const FAQS = [
  { q: "How fast can I get a Costa Rica gambling license?", a: "The municipal license is typically issued within 2–5 weeks of application submission. This makes it the fastest major gambling license available globally." },
  { q: "Is income tax payable on a Costa Rica gambling license?", a: "No. If your operation serves players outside Costa Rica, the government classifies the company as self-regulated and fully exempt from income tax on international revenue." },
  { q: "Do I need a business plan for a Costa Rica license?", a: "No. Unlike Malta, Curaçao or Isle of Man licenses, Costa Rica requires no business plan, no profit forecast, no responsible gaming measures, and no software documentation." },
  { q: "Can I accept players from any country?", a: "Yes, from any country except Costa Rica. Serving Costa Rican residents is prohibited. All other markets are unrestricted." },
  { q: "What are the ongoing costs after license issuance?", a: "A quarterly renewal fee of $1,500 is the main ongoing cost. Annual total renewal: $6,000. There are no revenue-based taxes for international operators." },
  { q: "Is a Costa Rica license accepted by payment processors?", a: "Some payment processors accept it, others require EU-regulated licenses. For tier-1 PSPs and banks, we recommend pairing a Costa Rica license with an EU entity structure." },
];

const RELATED = [
  { href: "/malta-gaming-license", reg: "MGA", name: "Malta", desc: "EU gold standard. Full European market access. 6–9 months, from €25,000." },
  { href: "/curacao-gaming-license", reg: "CGA", name: "Curaçao", desc: "Most affordable. All verticals, crypto-friendly. 3–4 months, from €15,000." },
  { href: "/gambling-license-of-the-isle-of-man", reg: "GSC", name: "Isle of Man", desc: "Tier-1 prestige. All verticals, strong reputation. 6–12 months." },
];

const ADVANTAGES = [
  { Icon: Clock, title: "2–5 Week Timeline", body: "The fastest major gambling license available. Municipal issuance bypasses lengthy national regulator review processes." },
  { Icon: DollarSign, title: "Income Tax Exempt", body: "International operators are fully exempt from Costa Rican income tax. No reporting obligation on foreign-sourced revenue." },
  { Icon: FileX, title: "Minimal Requirements", body: "No business plan, no paid-up capital, no financial reporting, no software restrictions. The lowest barrier of any jurisdiction." },
];

const FACTS_TABLE: [string, string, string][] = [
  ["Issued by", "Local Municipality", ""],
  ["License type", "Data Processing License", ""],
  ["Validity", "Annual (quarterly renewal)", ""],
  ["Min. capital", "25% of share capital", "text-[#f59e0b]"],
  ["One-time fee", "$15,000", "text-[#444CE7]"],
  ["Renewal", "$1,500 per quarter", ""],
  ["Income tax", "Exempt (international)", "text-[#22c55e]"],
  ["Timeline", "2–5 weeks", "text-[#22c55e]"],
];

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

const CostaRicaGamingPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);

  const c1 = useCounter(15000);

  useEffect(() => {
    document.title = "Costa Rica Gambling License — Fastest Online Casino License | Incluence";
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    const setProp = (p: string, c: string) => {
      let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", "Get a Costa Rica gambling license in 2–5 weeks. No business plan, no capital requirement, income tax exempt. From $15,000. Incluence legal support.");
    setMeta("keywords", "Costa Rica gambling license, Costa Rica casino license, online gambling Costa Rica, fastest gambling license");
    setProp("og:title", "Costa Rica Gambling License | Incluence");
    setProp("og:url", "https://incluence.com/gambling-license-in-costa-rica");
    setProp("og:type", "website");

    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/gambling-license-in-costa-rica";

    const schema = {
      "@context": "https://schema.org", "@type": "Service",
      name: "Costa Rica Gambling License",
      description: "Legal assistance in obtaining a Costa Rica Data Processing gambling license — fastest path to online gambling operations.",
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      areaServed: "Worldwide",
      url: "https://incluence.com/gambling-license-in-costa-rica",
      offers: { "@type": "Offer", priceCurrency: "USD", price: "15000" },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "costarica-schema";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#costarica-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ── BREADCRUMB ── */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[11px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to="/gamble-license" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Gambling License</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">Costa Rica Gambling License</span>
          </div>
        </nav>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>

        <TerritoryMap iso="CR" markerLabel="San José" subLabel="Municipality" />

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Gambling License</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.12em]">Offshore · Municipality</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
              <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Costa Rica</span>
              {" "}Gambling License
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">
              The fastest path to legal gambling operations. A Data Processing license issued by the local municipality — no business plan, no capital requirements, no financial reporting. Operational in 2–5 weeks. Income tax exempt for international operators.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Quote →</Link>
              <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Requirements</button>
            </div>
          </div>
        </div>

        {/* Facts Strip */}
        <div className="max-w-screen-xl mx-auto px-12 pb-[88px]">
          <div className="mt-14 grid grid-cols-6 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [`$${c1.toLocaleString()}+`, "Starting from (USD)", ""],
              ["2–5 weeks", "Timeline", "text-[#22c55e]"],
              ["1 year", "License validity", ""],
              ["Municipal", "Issued by", ""],
              ["Tax exempt", "International income", "text-[#22c55e]"],
              ["No capital", "Required", "text-[#22c55e]"],
            ].map(([value, label, cls], i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <span className={`text-[30px] font-light leading-none block ${cls || "text-[#F0EBE0]"}`}>{value}</span>
                <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About Costa Rica License</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">The Fastest Offshore Gambling License</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              <p>The Costa Rica Data Processing license is issued by the local municipality rather than a national regulator. This means significantly fewer requirements compared to other jurisdictions and a process that can be completed in as little as 2–5 weeks.</p>
              <p>The state imposes only one condition: the company's activities must not target Costa Rican residents. For international operators this is a non-issue — you simply operate elsewhere. No business plan, no profit forecast, no anti-gambling addiction measures, no software requirements.</p>
              <p>A major financial advantage: if the operator serves any country except Costa Rica, the government treats the company as self-regulated and therefore exempt from income tax. This makes Costa Rica one of the most tax-efficient gambling jurisdictions available.</p>
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden">
                <CornerAccent />
                <ScanSweep />
                <a.Icon className="w-5 h-5 text-[#444CE7] mb-3" />
                <h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-[1.7]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">How to Obtain a Costa Rica License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">A streamlined 4-step process. The simplest licensing procedure of any gambling jurisdiction.</p>

          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-2 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (
                <div key={i} ref={stepRefs[i]} data-step className="bg-[#111111] p-7 relative overflow-hidden group">
                  <ScanSweep />
                  <span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.num}</span>
                  <h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">The lightest requirements of any gambling jurisdiction. No business plan, no software certification — just basic company and KYC documentation.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {REQS.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-[1.7]">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <ScanSweep />
              <div className="absolute top-6 right-6">
                <div className="relative" style={{ width: 8, height: 8 }}>
                  <div className="absolute inset-0 bg-[#22c55e]" />
                  <div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "pd 2s ease-out infinite" }} />
                </div>
              </div>
              <style>{`@keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}`}</style>
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {FACTS_TABLE.map(([label, value, cls], i) => (
                  <div key={i} className="flex justify-between py-3">
                    <span className="text-[12px] text-[#5A5550]">{label}</span>
                    <span className={`text-[12px] font-medium ${cls || "text-[#F0EBE0]"}`}>{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block w-full text-center">Get a Free Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROS & CONS ── */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Advantages & Limitations</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Pros & Cons</h2>
          <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[14px] font-medium text-[#22c55e] uppercase tracking-[0.08em] mb-6">Advantages</h3>
              <div className="space-y-3">
                {PROS.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[14px] font-medium text-[#ef4444] uppercase tracking-[0.08em] mb-6">Limitations</h3>
              <div className="space-y-3">
                {CONS.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-[#ef4444] mt-0.5 shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Common Questions</h2>
          <div className="max-w-[720px]">
            {FAQS.map((f, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex justify-between items-center w-full py-5 cursor-pointer text-left bg-transparent border-0" style={{ fontFamily: "inherit" }}>
                  <span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#5A5550] shrink-0 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`} />
                </button>
                {faqOpen === i && (
                  <p className="text-[13px] text-[#9A9590] leading-[1.8] pb-5">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedJurisdictions items={RELATED} />

      {/* ── CTA FORM ── */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Apply for a Costa Rica Gambling License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your project. We'll handle everything — from company incorporation to license issuance. Fastest turnaround available.</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[["Full Name", "text"], ["Company Name", "text"], ["Target Markets", "text"], ["Launch Timeline", "text"]].map(([label, type]) => (
                  <div key={label}>
                    <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label>
                    <input type={type} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">Additional details — existing structure, payment processor requirements...</label>
                <textarea rows={4} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" style={{ fontFamily: "inherit" }} />
              </div>
              <button type="submit" className="px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0">Send Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostaRicaGamingPage;
