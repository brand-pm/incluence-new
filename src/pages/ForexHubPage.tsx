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

const JURISDICTIONS = [
  { reg: "CySEC", name: "Cyprus", badge: "EU Regulated", desc: "If a Forex broker is planning to expand activities in the European Union, Cyprus is usually chosen for this purpose. It is one of the most suitable jurisdictions because it is possible to obtain the Cyprus Securities and Exchange Commission (CySEC) license there. It allows brokers to legally operate, take customer deposits, and perform other legal actions in the territory of any EU member state.", timeline: "6–9 months", href: "/cyprus-forex-license" },
  { reg: "MFSA", name: "Malta", badge: "EU Regulated", desc: "In order to obtain a forex license in Malta, it is necessary to register a company, prepare policies, technical documentation and other documents. After opening an account and depositing the authorized capital, submit an application to the regulator. Obtaining a forex license in Malta can take 5-7 months.", timeline: "5–7 months", href: "/forex-broker-licence-in-malta" },
  { reg: "VFSC", name: "Vanuatu", badge: "Offshore", desc: "Forex licensing requires the applicant to comply with certain requirements and conditions and submit a set of documents. Business owners choose Vanuatu for obtaining such a license as the Financial Services Commission (VFSC) has established the most favorable conditions for licensing companies in this jurisdiction. The regulatory authority may grant a license of one of three classes, each of which provides business owners with certain privileges and advantages.", timeline: "2–3 months", href: "/forex-broker-licence-in-vanuatu" },
  { reg: "SEC", name: "Montenegro", badge: "Emerging", desc: "One of the important factors for clients who choose a Forex broker is the availability of an appropriate license — official permission from the financial regulator (or a special financial commission). A license provides a Forex broker with access to professional stock markets and gives the legal right to conduct trading operations. For traders and investors, a license is a guarantee of reliability and a good reputation of a broker.", timeline: "4–7 months", href: "/forex-broker-licence-in-montenegro" },
  { reg: "FSC", name: "Mauritius", badge: "Offshore", desc: "If you decide to do business in the financial or capital markets, you must have a license to operate even in offshore jurisdictions. Companies registered in Mauritius can apply for a license that allows them to operate legally with options, securities, and futures. It is also the document that authorizes companies to trade in foreign exchange markets.", timeline: "3–6 months", href: "/forex-broker-licence-in-mauritius" },
  { reg: "FSAS", name: "Seychelles", badge: "Offshore", desc: "Relatively low financial costs for registration. Quick processing of license applications — around 3 months. Required share capital 50,000 USD. Corporate tax rate only 1.5%.", timeline: "2–3 months", href: "/forex-license-seychelles" },
];

const STEPS = [
  { num: "01", title: "Document Preparation", body: "Preparation of a package of documents for the registration of a legal entity." },
  { num: "02", title: "Company Establishment", body: "Establishment of a Forex company to provide brokerage services." },
  { num: "03", title: "Bank Accounts & Capital", body: "Opening bank accounts to pay the authorized capital and carry out financial transfers." },
  { num: "04", title: "Licensing Application", body: "Applying for Forex licensing and support of this process." },
  { num: "05", title: "Regulator Review", body: "As a rule, it takes 3-4 months to get a Forex broker license, but in some cases, the procedure may last up to 9 months or even longer." },
  { num: "06", title: "License Issued", body: "Regulator approves the license. Just submit an application, and we will take care of the licensing process, reducing your involvement in the procedure to a minimum." },
];

const REQS = [
  "The size of the authorized capital of the company that receives a license must be no less than 100 thousand USD",
  "Registration of a Forex company must imply the presence of certain employees (directors, accountants, AML officers) in the number required in accordance with the legislative acts of the specific country",
  "The license for investment activity implies payment of all state fees. This must be done before applying for licensing",
  "A Memorandum of Association or a resolution",
  "Articles of Association of the company",
  "Business plan",
  "A description of the organizational structure",
  "Proof of paid-up authorized capital",
  "A list of shareholders and their shares in the company",
];

const FAQS = [
  { q: "What are the requirements for obtaining a Forex license?", a: "In order to obtain a forex license, it is necessary to register a company, prepare policies, technical documentation and other documents. After opening an account and depositing the authorized capital it is necessary to submit an application to the regulator. After obtaining a license, it is necessary to demonstrate the activity of the company in order to avoid its cancellation." },
  { q: "In which countries do we help with obtaining an investment license?", a: "Our lawyers have many years' experience in obtaining investment licenses. Among the most popular countries for obtaining an investment license are Cyprus, Lithuania, Malta, Montenegro, Vanuatu, Mauritius, Labuan, Seychelles." },
  { q: "What is the cost of an investment license?", a: "The final cost of obtaining an investment license is influenced by various factors (the country of registration of the company, the exact list of future services, the region of operation, etc.). You can find out the exact cost of obtaining an investment license by contacting our specialists." },
  { q: "What documents are required to obtain an investment license?", a: "In order to obtain an investment license, the following documents are required: statutory documents of the company, business plan, AML policy, rules for using the resource, confirmation of the identity and experience of company members, technical documentation." },
];

const ForexHubPage = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null), s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null), s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null), s6 = useRef<HTMLDivElement>(null);

  const c1 = useCounter(8);
  const c2 = useCounter(500);
  const c3 = useCounter(12);

  useEffect(() => {
    document.title = "Forex Broker License — Obtain Investment License | Incluence";
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
    setMeta("description", "Get a Forex broker license in Cyprus CySEC, Malta MFSA, Vanuatu VFSC, Montenegro and more. Full legal support from Incluence — international law firm.");
    setMeta("keywords", "forex broker license, forex license, CySEC license, investment company license, forex broker registration");
    setProp("og:title", "Forex Broker License | Incluence");
    setProp("og:url", "https://incluence.com/forex-license");
    setProp("og:type", "website");

    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = "https://incluence.com/forex-license";

    const schema = {
      "@context": "https://schema.org", "@type": "Service",
      name: "Forex Broker License",
      description: "Legal assistance in obtaining forex broker and investment company licenses in Cyprus, Malta, Vanuatu, Montenegro and other jurisdictions.",
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      areaServed: "Worldwide", url: "https://incluence.com/forex-license",
      offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "15000" },
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.id = "forex-hub-schema"; s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.querySelector("#forex-hub-schema")?.remove(); can?.remove(); };
  }, []);

  const stepRefs = [s1, s2, s3, s4, s5, s6];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Licensing</span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
            <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Forex</span>
            {" "}Broker License
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[520px] mb-8">
            The incluence company provides the following types of services in such areas as international tax planning, asset protection, registration of foreign companies and their maintenance, etc.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">Get a Free Consultation →</Link>
            <button className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer">View Jurisdictions</button>
          </div>

          <div className="mt-14 grid grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              [`${c1}+`, "Jurisdictions"],
              ["3 months", "Fastest License"],
              [`${c2}+`, "Licenses Obtained"],
              [`${c3} yrs`, "Industry Experience"],
            ].map(([value, label], i) => (
              <div key={i} className="bg-[#080808] p-7 relative overflow-hidden group">
                <ScanSweep />
                <span className="text-[30px] font-light text-[#F0EBE0] leading-none block">{value}</span>
                <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2 block">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JURISDICTIONS ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Available Licenses</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Choose Your Jurisdiction</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">Each jurisdiction offers different levels of credibility, market access, and regulatory requirements. We match your business model to the right license.</p>

          <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {JURISDICTIONS.map((j, i) => (
              <Link key={i} to={j.href} className="bg-[#0d0d0d] p-7 group relative overflow-hidden flex flex-col block">
                <CornerAccent />
                <ScanSweep />
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-500" />
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em] block mb-1">{j.reg}</span>
                    <span className="text-[20px] font-semibold text-[#F0EBE0]">{j.name}</span>
                  </div>
                  <span className="text-[9px] text-[#5A5550] uppercase tracking-[0.08em] border border-white/10 px-2 py-1">{j.badge}</span>
                </div>
                <p className="text-[13px] text-[#9A9590] leading-relaxed flex-1 mb-6">{j.desc}</p>
                <div className="border-t border-white/[0.06] pt-4 flex justify-between items-end">
                  <div className="text-right ml-auto">
                    <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em] block mb-1">Timeline</span>
                    <span className="text-[13px] text-[#9A9590]">{j.timeline}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— About Forex Licensing</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">What a Forex License Enables</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[600px] mb-12">In many countries worldwide, the activities of Forex brokers are qualified as "investment services." In this regard, Forex companies must obtain a special license, which is issued by relevant regulatory authorities. In the EU, licenses are issued by different authorities in strict compliance with the MIFID (The Markets in Financial Instruments Directive).</p>

          <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, title: "Securities & Currency Trading", body: "Legally trade forex, futures, options, securities and other financial instruments with full regulatory protection." },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, title: "Client Deposit Acceptance", body: "Accept client funds, manage portfolios, and provide investment recommendations — all under a licensed and regulated structure." },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, title: "EU Market Access (MiFID II)", body: "EU licenses (CySEC, MFSA) grant MiFID II passporting rights — one license covers all 27 EU member states with no additional local registration required." },
            ].map((c, i) => (
              <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                <ScanSweep />
                <div className="mb-4">{c.icon}</div>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{c.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">From Application to License</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">We manage every step. You focus on building your brokerage while we navigate the regulatory process.</p>

          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {STEPS.map((step, i) => (
                <div key={i} ref={stepRefs[i]} data-step className="bg-[#0d0d0d] p-7 relative overflow-hidden group">
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
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Minimum Requirements</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">An investment company whose activities are related to the Forex market must comply with certain requirements. They vary depending on the country where you wish to obtain the Forex license.</p>
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
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Free Consultation</span>
              <p className="text-[18px] font-light text-[#F0EBE0] mb-3">Not sure which forex license fits your broker model?</p>
              <p className="text-[13px] text-[#9A9590] leading-[1.8] mb-8">Book a 30-minute call with a senior licensing consultant. We'll assess your target markets, trading instruments and capital structure — then recommend the optimal jurisdiction and license type.</p>
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block w-full text-center">Book a Free Call →</Link>
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                {[["Response time", "Within 24 hours"], ["Consultation", "Free, no obligation"], ["Languages", "EN, RU, DE"]].map(([l, v], i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-[11px] text-[#5A5550]">{l}</span>
                    <span className="text-[11px] text-[#9A9590]">{v}</span>
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
                {faqOpen === i && <p className="text-[13px] text-[#9A9590] leading-[1.8] pb-5">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">Ready to License Your Forex Brokerage?</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Tell us about your business and we'll identify the right jurisdiction, structure and timeline. Response within 24 hours.</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[["Full Name", "text"], ["Company Name", "text"], ["Target Client Markets", "text"], ["Trading Instruments (forex/stocks/crypto)", "text"]].map(([label, type]) => (
                  <div key={label}>
                    <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label>
                    <input type={type} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">Additional details — existing structure, budget, timeline...</label>
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

export default ForexHubPage;
