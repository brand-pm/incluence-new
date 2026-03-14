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
  { title: "High Interest Rates", body: "Deposit accounts at foreign banks often offer higher interest rates than domestic institutions." },
  { title: "Secure Asset Storage", body: "Foreign banks provide secure storage of assets with strong legal protection and regulatory oversight." },
  { title: "Confidentiality", body: "Confidentiality of personal data — many jurisdictions provide strong banking secrecy protections." },
  { title: "Investment Access", body: "Broad investment opportunities in securities, real estate, and other high-return assets via private investment accounts." },
  { title: "International Transactions", body: "Conduct international financial transactions and trade with clients in different countries efficiently." },
  { title: "Payment System Access", body: "We also open accounts in various payment systems registered in the EU, USA, UK, Hong Kong, Singapore and other countries." },
];

const ACCOUNT_TYPES = [
  { title: "Current Account", body: "Required for commercial activities, personal expenses and income. The main account for day-to-day business operations." },
  { title: "Card Account", body: "Required for credit card holders — records all card transactions. Needed before a bank card can be issued." },
  { title: "Deposit Account", body: "Designed for long-term storage of funds to obtain tangible income through interest payments." },
  { title: "Private Investment Account", body: "Used for long-term investments in securities, bonds, and other financial instruments." },
  { title: "Brokerage Account", body: "Required for companies providing brokerage services in the securities market." },
  { title: "Payment System Account", body: "Accounts in EU, US, UK and Asian payment systems — often easier to open than traditional bank accounts." },
];

const STEPS = [
  { num: "01", title: "First Contact", body: "Contacting you at your convenience and discussing the task at hand — target jurisdiction, account type, currencies, and business specifics." },
  { num: "02", title: "Determining Your Needs", body: "Selecting a bank considering the jurisdiction, quality of banking services, the bank's requirements, and the specifics of your company's activities." },
  { num: "03", title: "Handling the Paperwork", body: "Preparing all documents necessary to open a bank account — corporate documents, personal documents, source of funds confirmation, and more." },
  { num: "04", title: "Submitting and Following Through", body: "Submitting the account opening application and following it through to completion. Responding promptly to bank queries." },
];

const DOCS = [
  "Corporate documents package",
  "Information about business, beneficiaries, account manager",
  "Identity confirmation — beneficiary and account manager",
  "Company activities description — products, partners, expected turnover",
  "Proof of residential address — beneficiary and account manager",
];

const FAQS = [
  { q: "In which countries do you help to open a bank account?", a: "We assist with accounts opening all over the world: in EU countries, European non-EU countries, Asia, USA, Canada, offshore jurisdictions." },
  { q: "Can I open a bank account abroad online?", a: "Due to the gradual tightening of legislation, banks usually open accounts only after a personal visit by the beneficiary and/or director. Online opening is allowed in rare cases. At the same time, payment system accounts can often be opened online." },
  { q: "Which payment systems do you work with?", a: "We work with various payment systems registered in the EU, USA, UK, Hong Kong, Singapore and other countries. We select the payment system based on your company's specifics, available currencies, payment regions, and other factors." },
  { q: "Is it necessary to have a bank account to open a payment system account?", a: "Usually, payment system accounts are opened independently of having a bank account. However, having a bank account and business history can speed up and simplify the process. Some payment systems require a bank account at the time of review, but this is rare." },
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
            Opening bank and payment system accounts abroad, providing assistance in account maintenance. If you plan to use banking services in foreign jurisdictions, you should carefully choose a bank to ensure comfortable financial and tax conditions. We handle selection, documents, and submission on your behalf.
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Why Open a Foreign Bank Account</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">Foreign bank accounts provide their owners with many advantages, which may vary depending on the selected jurisdiction. A foreign bank account is required for businessmen who plan to do business with foreign partners.</p>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Types of Foreign Bank Accounts</h2>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How We Open a Foreign Bank Account</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-relaxed">Controlling meeting of the deadlines at every stage. Four steps from first contact to activated account.</p>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">What You Need to Know About Due Diligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">If the bank values its reputation, it is obliged to conduct preliminary customer verification. This procedure is called Due Diligence — collecting information and analyzing it to make a final decision on cooperation with a particular client.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">In some cases, banks can conduct Due Diligence remotely, but in most cases, the customer must be present in person. You will not be able to open a foreign bank account if the bank assesses financial, legal, or other risks as high.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">Keep in mind that foreign bank accounts cannot be opened with 100% probability — the bank makes the final decision. Cooperating with our qualified specialists, you can be sure that the risk of denial will be minimized. We take care of most procedures, document preparation, and all legal formalities.</p>
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
                <p className="text-[12px] text-[#5A5550] mt-4 italic">This is the minimum list. Most situations require additional documents.</p>
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
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Frequently Asked Questions</h2>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Open Your Foreign Bank Account</h2>
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
