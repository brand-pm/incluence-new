import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

const useCounter = (target: number, duration = 1600) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setVal(Math.round(p * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
};

const ScanSweep = () => (
  <span className="pointer-events-none absolute inset-0 z-[5]">
    <span className="scan-line" />
  </span>
);

const CornerAccent = () => (
  <span className="pointer-events-none absolute top-0 right-0 w-8 h-8 z-[3]">
    <span className="absolute top-0 right-0 w-full h-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" />
    <span className="absolute top-0 right-0 h-full w-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" />
  </span>
);

const BottomAccent = () => (
  <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#444CE7]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-[3]" />
);

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const FAQS = [
  { q: "How much does it cost to open a company in an offshore zone?", a: "The final cost of opening a company in an offshore zone is influenced by various factors (country of registration, nature of activity, etc.). You can find out the exact cost of opening a company in an offshore zone by contacting our specialists." },
  { q: "What does it take to open an offshore?", a: "In order to register an offshore company, it is necessary to submit copies of passports and confirmation of the address of the company's participants, as well as letters of recommendation for the beneficiaries." },
  { q: "How does the registration of an offshore company work?", a: "In order to register an offshore company, you must submit copies of documents and registration forms. Indicate the contacts of the local representative and the registration address. The registrar will issue the statutory documents within a week after the end of registration of an offshore company." },
  { q: "How to choose the right foreign bank for offshore company?", a: "We select banks taking into account the country of registration of the company, residence of beneficiaries and directors, planned turnover, required currencies and regions of payments. When selecting a bank, its reputation and rates are also taken into account. In order to select the most optimal option for your company, please contact our specialists." },
];

const JURISDICTIONS = [
  { name: "British Virgin Islands", badge: "BVI", href: "/offshore-in-the-british-virgin-islands", desc: "Zero tax, full confidentiality, IBC structure. Most popular offshore globally." },
  { name: "Cayman Islands", badge: "Cayman", href: "/offshore-in-the-cayman-islands", desc: "Premier financial center. No income, capital gains or withholding tax." },
  { name: "Seychelles", badge: "Seychelles", href: "/offshore-company-formation-in-seychelles", desc: "Fast registration, minimal capital, strong privacy laws, political stability." },
  { name: "UAE (RAKICC)", badge: "UAE", href: "/register-company-in-uae", desc: "100% foreign ownership, 0% tax, full repatriation of profits." },
  { name: "Panama", badge: "Panama", href: "/panama-company-formation", desc: "Bearer shares allowed, strong privacy, territorial tax system." },
  { name: "Costa Rica", badge: "Costa Rica", href: "/offshore-costa-rica", desc: "Data Processing license, 2–5 weeks, income tax exempt for international operators." },
];

const ADVANTAGES = [
  { title: "Accessibility & Flexibility", body: "Customers can manage the account and make financial transactions regardless of location, for example, through online banking." },
  { title: "Confidentiality", body: "Confidentiality of personal data is one of the main reasons individuals and companies choose offshore: the bank account is as protected as possible from third parties. Banks do not disclose confidential information about their clients and ensure a high level of asset security." },
  { title: "Asset Security", body: "Banks ensure a high level of asset security. Offshore structures provide strong protection of client assets and financial information." },
  { title: "Tax Efficiency", body: "Most offshore jurisdictions offer zero or minimal corporate taxation. Business owners retain significantly more profits for reinvestment." },
  { title: "Simple Accounting", body: "Minimal requirements for accounting records, audits, and financial reporting compared to onshore jurisdictions. Less administrative burden." },
  { title: "Remote Management", body: "Various tools for remote management of business processes. Offshore companies can be fully managed from anywhere in the world." },
];

const STEPS = [
  { num: "01", title: "Prepare Documents", body: "Apostilled original corporate documents. Notarized copies of the passports of the beneficiary and the account manager. Confirmation of the sources of income of the participants and the company as a whole. Confirmation of the actual residence address of each shareholder and director." },
  { num: "02", title: "Submit to Registrar", body: "Submit copies of documents and registration forms. Indicate the contacts of the local representative and the registration address." },
  { num: "03", title: "Company Incorporated", body: "The registrar will issue the statutory documents within a week after the end of registration of an offshore company." },
  { num: "04", title: "Open Bank Account", body: "You can set up an offshore company account only after preparing and submitting the required documents. Additional requirements may apply depending on the bank." },
];

const DOCS = [
  "Apostilled original corporate documents",
  "Notarized passport copies of beneficiary and account manager",
  "Confirmation of income sources for all participants",
  "Proof of actual residential address for each shareholder and director",
];

const OffshoreFormationPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", jurisdiction: "", activity: "", shareholders: "", details: "" });
  const c1 = useCounter(15);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Offshore Company Formation — Register Offshore Company | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); } el.setAttribute("content", c); };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Register an offshore company in BVI, Cayman, Seychelles, UAE, Panama, Costa Rica and more. Privacy, zero tax, remote process. Full support from Incluence.");
    setMeta("keywords", "offshore company formation, register offshore company, BVI offshore, Cayman Islands offshore, Seychelles offshore, offshore registration");
    setProp("og:title", "Offshore Company Formation — Register Offshore Company | Incluence");
    setProp("og:description", "Register an offshore company in BVI, Cayman, Seychelles, UAE, Panama, Costa Rica and more.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/offshore-company-formation";
    const schema = document.createElement("script"); schema.type = "application/ld+json"; schema.id = "offshore-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Offshore Company Formation", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/offshore-company-formation" });
    document.head.appendChild(schema);
    return () => { document.getElementById("offshore-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Offshore Company Formation</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1] opacity-[0.15]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Offshore & Corporate</span>
          <h1 className="font-light max-w-[660px] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Offshore</span> Company<br />Formation
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Today, companies registered in offshore jurisdictions can open an account that enables firms to conduct payment transactions. Personal data of customers are not disclosed, and any person can open an offshore account. However, please note that the requirements of banks for corporate clients and individuals can vary greatly.
          </p>
          <div className="flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
            <button className="text-[13px] text-[#9A9590] border border-white/[0.08] px-6 py-3 hover:border-white/[0.16] transition-colors bg-transparent">View Jurisdictions</button>
          </div>

          {/* Stats */}
          <div ref={c1.ref} className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-2 md:grid-cols-4 gap-px">
            {[
              { val: `${c1.val}+`, label: "Offshore Jurisdictions" },
              { val: "1 week", label: "Registration Timeline" },
              { val: "0%", label: "Tax (most jurisdictions)" },
              { val: "Remote", label: "Process Available" },
            ].map((s, i) => (
              <div key={i} className="bg-[#080808] p-7 group relative overflow-hidden">
                <ScanSweep />
                <span className="block text-[22px] font-light text-[#F0EBE0]">{s.val}</span>
                <span className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — ADVANTAGES */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Advantages</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Benefits of Offshore Company Registration</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">Cooperation with an offshore bank provides the businessman with plenty of benefits. First and foremost, it is recommended to open an offshore bank account because of the accessibility and flexibility of products.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                <CornerAccent /><ScanSweep /><BottomAccent />
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — JURISDICTIONS */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Available Jurisdictions</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">Where We Register Offshore Companies</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {JURISDICTIONS.map((j, i) => (
              <Link key={i} to={j.href} className="bg-[#111111] p-7 group relative overflow-hidden no-underline flex flex-col">
                <CornerAccent /><ScanSweep /><BottomAccent />
                <span className="text-[11px] text-[#444CE7] border border-[#444CE7]/30 px-2 py-0.5 uppercase mb-2 inline-block self-start">{j.badge}</span>
                <span className="text-[17px] font-semibold text-[#F0EBE0] mb-3">{j.name}</span>
                <span className="text-[13px] text-[#9A9590] leading-relaxed flex-1">{j.desc}</span>
                <span className="text-[12px] text-[#444CE7] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">How Offshore Registration Works</h2>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)] relative z-[2]">
              {STEPS.map((step, i) => (
                <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                    <ScanSweep />
                    <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3">{step.num}</span>
                    <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{step.title}</h3>
                    <p className="text-[13px] text-[#9A9590] leading-relaxed">{step.body}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BANKING */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Offshore Banking</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">Choosing the Right Offshore Bank</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Once you have decided on the jurisdiction, you should be careful when choosing the right bank. We recommend opening an offshore company account in banks that offer convenient working methods, selection of a certain currency, and an easy opening procedure.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">Today, very few banks offer clients to register remotely. If you want account creation offshore online, the list of suitable offers will be significantly reduced. Please contact our managers for detailed consultations.</p>
              <div className="space-y-3">
                {[
                  { title: "Internet Banking", body: "Manage the account remotely at all times" },
                  { title: "Currency Selection", body: "Access to required currencies including non-standard ones" },
                  { title: "Opening Ease", body: "Clear requirements, minimal document burden" },
                ].map((c, i) => (
                  <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden">
                    <ScanSweep />
                    <span className="text-[13px] font-semibold text-[#F0EBE0]">{c.title}</span>
                    <span className="text-[12px] text-[#9A9590] ml-2">{c.body}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
                <ScanSweep />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#444CE7]" />
                  <div className="w-1.5 h-1.5 bg-[#444CE7] animate-ping absolute right-0" style={{ animationDuration: "2s" }} />
                </div>
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Note</span>
                <p className="text-[14px] text-[#F0EBE0] font-medium mb-3">Minimum Documents Required</p>
                <div className="space-y-2">
                  {DOCS.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#9A9590]">{d}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block w-full text-center bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors mt-6">Discuss the Project →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">Frequently Asked Questions</h2>
          <div className="max-w-[720px] space-y-px">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className="text-[14px] text-[#F0EBE0] group-hover:text-white transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#5A5550] transition-transform duration-300 flex-shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[200px] pb-5" : "max-h-0"}`}>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Register Your Offshore Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Tell us about your goals — asset protection, payment operations, confidentiality. We'll recommend the right jurisdiction and structure.</p>
          </div>
          <div className="md:col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.jurisdiction} onChange={e => setForm({ ...form, jurisdiction: e.target.value })} placeholder="Preferred Jurisdiction" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.activity} onChange={e => setForm({ ...form, activity: e.target.value })} placeholder="Business Activity" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.shareholders} onChange={e => setForm({ ...form, shareholders: e.target.value })} placeholder="Number of Shareholders" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Describe your goals — asset protection, payment operations, confidentiality..." className="col-span-2 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" />
              <button type="submit" className="col-span-2 md:col-span-1 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffshoreFormationPage;
