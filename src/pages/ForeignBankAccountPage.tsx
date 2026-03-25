import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const ScanSweep = () => (<span className="pointer-events-none absolute inset-0 z-[5]"><span className="scan-line" /></span>);

const DOT_GRID = { backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" };

const CONDITIONS = [
  "Provide company details, information about its participants, and future business activities",
  "Upload personal documents of participants and the company's corporate documents",
  "Pass verification",
  "In some systems, a bank account is required at the time of review, but this condition is rare",
];

const FAQS = [
  { q: "What are the conditions for opening an account in payment systems?", a: "The exact conditions for opening an account depend on the rules of the chosen payment system. Typically, you need to provide company details, information about its participants, and future business activities, upload personal documents of participants and the company's corporate documents, and pass verification." },
  { q: "Which payment systems do we work with?", a: "We work with various payment systems registered in the EU, USA, UK, Hong Kong, Singapore, and other countries. We can easily select a payment system that matches the specifics of your company, available currencies, regions of payment availability, and other factors." },
  { q: "Is it necessary to open a bank account to open an account in a payment system?", a: "Usually, accounts in payment systems are opened independently of having a bank account. However, having a bank account and a company's business history can speed up and simplify the subsequent account opening process in a payment system. In some systems, a bank account is required at the time of review, but this condition is rare." },
  { q: "Can an account in a payment system be opened online?", a: "Yes. Payment systems usually open accounts online." },
];

const ForeignBankAccountPage = () => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Opening a Foreign Bank Account Online | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); } el.setAttribute("content", c); };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Open a foreign bank account for your business. EU, USA, Asia and offshore. Due Diligence support, document preparation. Incluence helps minimize denial risk.");
    setMeta("keywords", "foreign bank account, open bank account abroad, international banking, Due Diligence, payment system account");
    setProp("og:title", "Opening a Foreign Bank Account Online | Incluence");
    setProp("og:description", "Open a foreign bank account for your business. EU, USA, Asia and offshore.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/opening-a-foreign-bank-account";
    const schema = document.createElement("script"); schema.type = "application/ld+json"; schema.id = "foreign-bank-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Foreign Bank Account Opening", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/opening-a-foreign-bank-account" });
    document.head.appendChild(schema);
    return () => { document.getElementById("foreign-bank-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/accounts-bank" className="hover:text-[#9A9590] transition-colors">Bank Accounts</Link><span>/</span>
          <span className="text-[#9A9590]">Foreign Bank Account</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "80px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Banking Services</span>
          <h1 className="font-light mb-6" style={{ fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.1 }}>
            Opening a <span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Foreign</span><br />Bank Account
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            Incluence provides services in areas such as international tax planning, asset protection, registration and maintenance of foreign companies, and more.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
        </div>
      </section>

      {/* SECTION 2 — CONDITIONS */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Account Conditions</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">What Conditions for Opening an Account in Payment Systems</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">The exact conditions for opening an account depend on the rules of the chosen payment system. Typically, you need to:</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-2 gap-px">
            {CONDITIONS.map((c, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                <ScanSweep />
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                  <p className="text-[14px] text-[#9A9590] leading-[1.85]">{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ONLINE OPENING */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Remote Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Is It Possible to Open a Foreign Bank Account Online?</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Today, entrepreneurs can open a foreign bank account online, but not all banks provide such an option. This is largely due to the fact that if the bank values its reputation, it is obliged to conduct preliminary customer verification.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">So, if you want to open a foreign bank account, you will need to go through a procedure called Due Diligence. In some cases, banks can do it remotely, but in most cases, the customer must be present in person. You won't be able to open a foreign bank account if the bank assesses financial, legal, and other risks as high.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">If you have decided to open a foreign bank account, please contact our specialists because the above list includes only basic requirements. In most situations, opening foreign bank accounts requires many other documents, so this procedure should be entrusted to professionals. Otherwise, you risk facing denial, and foreign bank account opening will be impossible.</p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 group relative overflow-hidden">
                <ScanSweep />
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Payment Systems Alternative</span>
                <p className="text-[14px] font-semibold text-[#F0EBE0] mb-3">Easier Online Option</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed mb-4">Yes. Payment systems usually open accounts online.</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">We work with various payment systems registered in the EU, USA, UK, Hong Kong, Singapore, and other countries. We can easily select a payment system that matches the specifics of your company, available currencies, regions of payment availability, and other factors.</p>
                <Link to="/contact" className="block w-full text-center bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors mt-6">Discuss the Project →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FAQ */}
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
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-[600px] mx-auto">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Open Your Foreign Bank Account</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed mb-8">Contact us to discuss your banking needs. We'll handle document preparation and bank selection.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForeignBankAccountPage;
