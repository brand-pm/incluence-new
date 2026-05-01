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
      if (!e.isIntersecting) return; obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => { const p = Math.min((now - start) / duration, 1); setVal(Math.round(p * target)); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
};

const ScanSweep = () => (<span className="pointer-events-none absolute inset-0 z-[5]"><span className="scan-line" /></span>);
const CornerAccent = () => (<span className="pointer-events-none absolute top-0 right-0 w-8 h-8 z-[3]"><span className="absolute top-0 right-0 w-full h-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" /><span className="absolute top-0 right-0 h-full w-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" /></span>);

const DOT_GRID = { backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const ADVANTAGES = [
  { title: "High Interest Rates", body: "High interest rates on deposits." },
  { title: "Secure Asset Storage", body: "Secure storage of assets." },
  { title: "Confidentiality", body: "Confidentiality of personal data." },
  { title: "Investment Access", body: "Broad investment opportunities in securities, real estate, and other high-return assets." },
  { title: "International Transactions", body: "Foreign bank accounts allow business people to conduct international financial transactions and trade transactions with clients." },
  { title: "Jurisdiction Selection", body: "To open a foreign bank account, you should select the jurisdiction responsibly." },
];

const ACCOUNT_TYPES = [
  { title: "Current Account", body: "Opening a current account abroad is necessary for commercial activities, as well as personal expenses and income of the account holder." },
  { title: "Card Account", body: "Future credit card holders must open such bank accounts abroad because they will be used to record the corresponding transactions on such a card." },
  { title: "Deposit Account", body: "Designed for the long-term storage of funds for obtaining a tangible income." },
  { title: "Private Investment Account", body: "Private investment cards are used for long-term investments in securities." },
  { title: "Brokerage Account", body: "Required for companies providing brokerage services in the securities market." },
  { title: "Payment System Account", body: "Accounts in EU, US, UK and Asian payment systems — often easier to open than traditional bank accounts." },
];

const STEPS = [
  { num: "01", title: "First Contact", body: "Contacting you at your convenience, and discussing the task at hand." },
  { num: "02", title: "Determining Your Needs", body: "Selecting a bank considering the jurisdiction, quality of banking services and the bank's requirements." },
  { num: "03", title: "Handling the Paperwork", body: "Handling the paperwork necessary to open a bank account." },
  { num: "04", title: "Submitting and Following Through", body: "Submitting an account opening application and following it through." },
];

const DOCS = [
  "A package of corporate documents",
  "A certain amount of information about the business, beneficiaries, and account manager, who is determined by the bank on an individual basis",
  "Confirmation of the identity of the beneficiary and the account manager, if it is not the same person",
  "A concise description of the company's activities, including products, business partners, expected turnover on the account, etc.",
  "Proof of the residence address of the beneficiary and the account manager",
];

const FAQS = [
  { q: "In which countries do we help to open a bank account?", a: "We assist with accounts opening all over the world: in EU countries, European non-EU countries, Asia, USA, Canada, offshore." },
  { q: "Can I buy a bank account online?", a: "Due to the gradual tightening of legislation, banks usually open accounts only after a personal visit to the bank's representative office by the beneficiary and / or the director of the company. Online opening is allowed in rare cases. At the same time, an account can be opened online in payment systems." },
  { q: "How long does it take to open a bank account?", a: "The duration and features of opening a bank account depends on the characteristics of the company and the rules of a particular bank. Usually the opening process takes from 2 months." },
  { q: "How much does it cost to open a bank account in foreign banks?", a: "The exact cost depends on the country of registration of the company, the type of activity, the residency of its participants and the selected bank. You can find out the exact cost of opening an account for your company from our specialists." },
];

const BankAccountsHubPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", target: "", type: "", details: "" });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Opening a Foreign Bank Account — Banking Abroad | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); } el.setAttribute("content", c); };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Open a foreign bank account online or in person. EU, Asia, USA, offshore. Full document support, bank selection, Due Diligence preparation. Incluence.");
    setMeta("keywords", "open foreign bank account, bank account abroad, international bank account, offshore bank account, open bank account online");
    setProp("og:title", "Opening a Foreign Bank Account — Banking Abroad | Incluence");
    setProp("og:description", "Open a foreign bank account online or in person. EU, Asia, USA, offshore.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/accounts-bank";
    const schema = document.createElement("script"); schema.type = "application/ld+json"; schema.id = "bank-hub-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Foreign Bank Account Opening", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/accounts-bank" });
    document.head.appendChild(schema);
    return () => { document.getElementById("bank-hub-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <span className="text-[#9A9590]">Opening Bank Accounts</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1] opacity-[0.15]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Banking Services</span>
          <h1 className="font-light max-w-[660px] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            Opening Bank &<br /><span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Payment System</span> Accounts
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Opening bank and payment system accounts, providing assistance in account maintenance. If you plan to use banking services in foreign jurisdictions, you should carefully choose a bank to ensure comfortable financial and tax conditions. As a rule, a foreign bank account is required for businessmen who plan to do business with foreign partners.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>

          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-2 md:grid-cols-4 gap-px">
            {[{ val: "50+", label: "Jurisdictions" }, { val: "200+", label: "Accounts Opened" }, { val: "4 steps", label: "Our Process" }, { val: "Remote", label: "Available in many cases" }].map((s, i) => (
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Why Open a Foreign Bank Account</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">Foreign bank accounts provide their owners with many other advantages, which may vary depending on the selected jurisdiction.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                <ScanSweep />
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ACCOUNT TYPES */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Account Types</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Types of Foreign Bank Accounts</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-relaxed">Depending on your goals, banks can offer different account types. Choose the one that matches your purpose.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {ACCOUNT_TYPES.map((t, i) => (
              <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                <CornerAccent /><ScanSweep />
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{t.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Our Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">How We Open a Foreign Bank Account</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-relaxed">Controlling meeting the deadlines at every stage.</p>
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

      {/* SECTION 5 — DUE DILIGENCE */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Important</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">What You Need to Know About Due Diligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Today, entrepreneurs can open a foreign bank account online, but not all banks provide such an option. This is largely due to the fact that if the bank values its reputation, it is obliged to conduct preliminary customer verification. So, if you want to open a foreign bank account, you will need to go through a procedure called Due Diligence. In some cases, banks can do it remotely, but in most cases, the customer must be present in person.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">You won't be able to open a foreign bank account if the bank assesses financial, legal, and other risks as high. You will not be able to open a foreign bank account online if it requires your personal presence to conduct Due Diligence. In this case, a preliminary remote assessment may be possible, but you cannot directly open a bank account abroad online in such a situation.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">Keep in mind that foreign bank accounts cannot be opened with 100% probability as the bank makes the final decision based on its unspoken rules. So, opening a foreign bank account always implies a risk of rejection. Cooperating with the qualified specialists of our company, you can be sure that the risk of denial will be minimized. With us, you can easily open a foreign bank account as we will take care of most procedures, preparation and execution of documents, as well as all legal formalities.</p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 group relative overflow-hidden">
                <ScanSweep />
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Required Documents</span>
                <p className="text-[14px] font-semibold text-[#F0EBE0] mb-3">Minimum Document Set</p>
                <div className="space-y-2">
                  {DOCS.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#9A9590]">{d}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#5A5550] mt-4 italic">If you have decided to open a foreign bank account, please contact our specialists because the above list includes only basic requirements. In most situations, opening foreign bank accounts requires many other documents, so this procedure should be entrusted to professionals.</p>
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

      {/* Beyond Bank Accounts — Merchant & PSP cross-links */}
      <section className="bg-[#080808]" style={{ padding: "72px 48px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Beyond Bank Accounts</span>
          <h2 className="text-[clamp(22px,2.6vw,34px)] font-light leading-[1.2] text-[#F0EBE0] mb-3 max-w-[640px]">
            Full payment infrastructure, not just bank accounts
          </h2>
          <p className="text-[14px] text-[#9A9590] leading-relaxed max-w-[680px] mb-10">
            For high-risk merchants, e-commerce and crypto-friendly flows we set up dedicated merchant accounts and PSP integrations alongside the corporate banking layer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <Link to="/opening-a-merchant-account" className="block group" style={{ background: "#0d0d0d", padding: "28px 24px" }}>
              <div className="text-[10px] text-[#444CE7] uppercase tracking-[0.14em] mb-2">Merchant Accounts</div>
              <div className="text-[18px] text-[#F0EBE0] font-light mb-2 group-hover:text-white transition-colors">High-risk · crypto · gaming · forex</div>
              <p className="text-[12px] text-[#9A9590] leading-relaxed">Acquiring solutions for industries traditional banks decline. Card processing, alternative payment methods, settlement in EUR/USD/crypto.</p>
              <div className="text-[11px] text-[#444CE7] mt-4 uppercase tracking-[0.1em]">Explore merchant accounts →</div>
            </Link>
            <Link to="/provider-payment-systems" className="block group" style={{ background: "#0d0d0d", padding: "28px 24px" }}>
              <div className="text-[10px] text-[#444CE7] uppercase tracking-[0.14em] mb-2">PSP & Payment Solutions</div>
              <div className="text-[18px] text-[#F0EBE0] font-light mb-2 group-hover:text-white transition-colors">PSP licensing & integrations</div>
              <p className="text-[12px] text-[#9A9590] leading-relaxed">PSP / EMI license setup in Cyprus, Lithuania, UK and Czech Republic — plus integrations with Wise, Revolut, Payoneer, PayPal.</p>
              <div className="text-[11px] text-[#444CE7] mt-4 uppercase tracking-[0.1em]">Explore PSP solutions →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Open Your Foreign Bank Account</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Tell us about your company and banking needs. We'll select the right bank and handle the paperwork.</p>
          </div>
          <div className="md:col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.target} onChange={e => setForm({ ...form, target: e.target.value })} placeholder="Target Country/Bank" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} placeholder="Account Type" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Describe your company — business activity, jurisdictions, currencies needed..." className="col-span-2 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" />
              <button type="submit" className="col-span-2 md:col-span-1 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankAccountsHubPage;
