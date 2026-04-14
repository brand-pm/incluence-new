import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

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

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const SERVICES = [
  { title: "Business Accounts & IBAN", body: "Get an international bank account number (IBAN) for your company. Conduct payments, send and receive transfers with minimal fees." },
  { title: "e-Commerce & Integration", body: "Integration with PayPal, e-commerce tools, card issuing (Mastercard), and currency conversion at favorable rates." },
  { title: "High-Risk & Offshore Clients", body: "Services for high-risk clients and exotic jurisdictions — where traditional banks often decline. Offshore companies use offshore payment systems." },
  { title: "Virtual Currency Issuance", body: "Some payment systems offer the right to issue virtual currency as part of their licensed services." },
  { title: "Personal Account Manager", body: "Fast support and a dedicated personal account manager — unlike traditional banking where support can be slow and impersonal." },
  { title: "Fully Remote Opening", body: "Account opening usually done remotely via video call without personal presence in any specific country." },
];

const PROVIDES = [
  { title: "IBAN Number", body: "International bank account number for your company — receive and send EUR transfers." },
  { title: "Online Management", body: "Manage your account online efficiently from any device." },
  { title: "Card Access", body: "Access cash via a card (e.g., Mastercard) linked to the account." },
  { title: "Currency Conversion", body: "Convert currencies at favorable exchange rates within the system." },
  { title: "Salary Payments", body: "Pay salaries and receive expense reports through the account." },
  { title: "Business Insurance", body: "Some systems offer access to business insurance products." },
  { title: "Transfers & Payments", body: "Send/receive transfers, pay for goods and services with minimal fees." },
  { title: "Privacy", body: "Account holder data is not disclosed to third parties." },
  { title: "Investment", body: "Some systems allow investing funds for profit within the platform." },
];

const STEPS = [
  { num: "01", title: "Choose a System", body: "Select a reliable system with suitable fees and experience in your business segment. Apply to multiple systems to increase chances." },
  { num: "02", title: "Prepare Documents", body: "Prepare corporate and personal documents. Complete application forms accurately — errors can lead to rejection." },
  { num: "03", title: "Submit Application", body: "Send forms and documents as required. Be ready to provide additional documents if requested. Some systems charge an application review fee." },
  { num: "04", title: "Verification", body: "Usually online — requires selfie and passport photo. Our specialists prepare everything for successful KYC verification." },
  { num: "05", title: "Account Activated", body: "Access credentials and account details are provided. Activation may require a minimal deposit, which can include the account opening fee." },
];

const KEY_POINTS = [
  { label: "Account opening fee", value: "Varies by system" },
  { label: "Minimum deposit", value: "Usually not required" },
  { label: "Opening method", value: "Online / video call" },
  { label: "Additional docs", value: "May be requested" },
  { label: "Our fee", value: "Separate from system fees" },
];

const FAQS = [
  { q: "What are the requirements for opening a payment system account?", a: "The exact conditions depend on the chosen payment system. Typically, company and participant details, activity information, personal documents, corporate documents, and verification are required." },
  { q: "Can a payment system account be opened online?", a: "Yes, most payment systems allow online account opening." },
  { q: "Which payment systems do we work with?", a: "We work with payment systems registered in the EU, USA, UK, Hong Kong, Singapore, and other countries. We can select the best system for your company, currencies, and payment regions." },
  { q: "Is a bank account required to open a payment system account?", a: "Usually, no. Payment system accounts can be opened independently of a bank account, though having one may simplify and speed up the process. Some systems rarely require a bank account at the time of application." },
];

const STATS = [
  { value: "Online", label: "Account Opening" },
  { value: "IBAN", label: "Account Number Provided" },
  { value: "No Min.", label: "Deposit (usually)" },
  { value: "Global", label: "System Coverage" },
];

const PaymentSystemAccountPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", country: "", activity: "", details: "" });

  useEffect(() => {
    document.title = "Open an Account in a Payment System | Incluence";
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
    setMeta("description", "Open a payment system account online. IBAN, Mastercard, e-commerce tools, high-risk clients. Easier than a bank account. EU, USA, UK, Asia. Incluence support.");
    setMeta("keywords", "open payment system account, payment system account, IBAN account, EMI account, payment account online");
    setProp("og:title", "Open an Account in a Payment System | Incluence");
    setProp("og:description", "Open a payment system account online. IBAN, Mastercard, e-commerce tools, high-risk clients.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/open-an-account-in-a-payment-system");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/open-an-account-in-a-payment-system";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "psa-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Payment System Account Opening",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/open-an-account-in-a-payment-system",
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("psa-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-12 py-3.5 flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Payment System Account</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-6">— Payment Services</span>
          <h1 className="font-light text-[#F0EBE0] mb-6 max-w-[640px]" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            Open an Account in a<br /><span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Payment System</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Entrepreneurs operating abroad often face bank refusals for non-resident companies. Opening a payment system account is usually easier than opening a bank account and can often be done remotely via video call — without personal presence in any country.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Open an Account →</Link>
            <button onClick={() => document.getElementById("psa-docs")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-white/[0.12] text-[#9A9590] text-[13px] font-medium px-6 py-3 hover:border-white/[0.25] hover:text-[#F0EBE0] transition-colors">View Requirements</button>
          </div>

          {/* STATS */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {STATS.map(s => (
              <div key={s.label} className="bg-[#080808] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="text-[22px] font-light text-[#F0EBE0] mb-1 relative z-10">{s.value}</div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] relative z-10">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS A PAYMENT SYSTEM */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About Payment Systems</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Payment System as a Banking Alternative</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-[1.8]">
            A payment system is a company that facilitates the exchange of funds between participants — both individuals and legal entities. It provides financial services under a specific license (EMI or similar), allowing money transfers for third parties.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-[#0d0d0d] p-7 relative overflow-hidden group">
                <CornerAccent />
                <ScanSweep />
                <div className="relative z-10">
                  <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{s.title}</div>
                  <div className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOU GET */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— After Opening</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">What a Payment System Account Provides</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[500px] leading-[1.8]">
            Once your account is opened, you get access to a full range of financial tools for international business operations.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {PROVIDES.map(p => (
              <div key={p.title} className="bg-[#111111] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <span className="block w-1.5 h-1.5 bg-[#444CE7] mb-3" />
                  <div className="text-[14px] font-semibold text-[#F0EBE0] mb-1">{p.title}</div>
                  <div className="text-[12px] text-[#9A9590]">{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DOCUMENTS */}
      <section id="psa-docs" className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Required Documents</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Documents Required to Open a Payment System Account</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-[1.8]">
            These are not exhaustive — the payment system may request additional documents at any stage. Failure to provide them will result in account denial.
          </p>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <div className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Corporate Clients</div>
              <div className="space-y-3">
                {["Completed application forms", "Color scan or photo of passport or ID, proof of address, brief biography", "Corporate documents: company registration certificate, charter", "List of directors and shareholders", "Additional documents may be requested at any stage"].map(d => (
                  <div key={d} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                    <span className="text-[13px] text-[#9A9590]">{d}</span>
                  </div>
                ))}
              </div>
              <div className="text-[14px] font-semibold text-[#F0EBE0] mt-8 mb-4">Before Applying — Define Your Business Profile</div>
              <p className="text-[13px] text-[#9A9590] leading-relaxed">
                Entrepreneurs should define the business specifics: main transaction currency, client and partner markets, risks, and so on. This information helps select the payment system that best suits your needs.
              </p>
            </div>
            <div className="col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Key Points</span>
                  <div className="space-y-4 divide-y divide-white/[0.05]">
                    {KEY_POINTS.map(k => (
                      <div key={k.label} className="flex justify-between py-3 first:pt-0">
                        <span className="text-[12px] text-[#5A5550]">{k.label}</span>
                        <span className="text-[12px] text-[#9A9590]">{k.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Open an Account →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — STEPS */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Steps to Open a Payment System Account</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
            {STEPS.map(s => (
              <div key={s.num} className="bg-[#111111] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3">{s.num}</span>
                  <div className="text-[14px] font-semibold text-[#F0EBE0] mb-2">{s.title}</div>
                  <div className="text-[12px] text-[#9A9590] leading-relaxed">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] space-y-px bg-[rgba(255,255,255,0.06)]">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-[#0d0d0d]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-[14px] font-medium text-[#F0EBE0] pr-4">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#444CE7] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[13px] text-[#9A9590] leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] py-[80px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5 flex flex-col justify-center">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Open Your Payment System Account</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss your business needs and select the best payment system.
            </p>
          </div>
          <div className="col-span-7">
            <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
                <input placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input placeholder="Country of Registration" value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
                <input placeholder="Main Business Activity" value={form.activity} onChange={e => setForm({ ...form, activity: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <textarea rows={4} placeholder="Describe your business — required currencies, transaction volumes, client markets..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3 resize-none" />
              <button type="submit" className="self-start bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">Open an Account →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSystemAccountPage;
