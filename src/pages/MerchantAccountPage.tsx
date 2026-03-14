import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

/* ── Scan Sweep ──────────────────────────────────────────────────────────── */
const ScanSweep = () => (
  <span className="pointer-events-none absolute inset-0 z-[5]">
    <span className="scan-line" />
  </span>
);

/* ── Corner Accent ───────────────────────────────────────────────────────── */
const CornerAccent = () => (
  <span className="pointer-events-none absolute top-0 right-0 w-8 h-8 z-[3]">
    <span className="absolute top-0 right-0 w-full h-px bg-[hsl(var(--accent))] opacity-40 group-hover:opacity-80 transition-opacity" />
    <span className="absolute top-0 right-0 h-full w-px bg-[hsl(var(--accent))] opacity-40 group-hover:opacity-80 transition-opacity" />
  </span>
);

/* ── FAQ ──────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is a merchant account?",
    a: "A merchant account is an account opened in a payment system or bank to accept online payments. Unlike a traditional bank account, it allows receiving numerous small payments via the website at lower commission rates. The main payment method is credit/debit card payments — used for mobile services, airline tickets, online store products, and more.",
  },
  {
    q: "What is required to open a merchant account?",
    a: "Select a payment system based on required currencies, payment methods, and covered regions. Required documents include company incorporation documents, processing history (if available), and completed application forms. After submission, promptly respond to compliance inquiries from the payment system.",
  },
  {
    q: "How much does it cost to open a merchant account?",
    a: "The final cost depends on company residency, shareholders' residency, business activities, processing history, and other factors. Contact our specialists for an exact cost estimate for your specific company.",
  },
  {
    q: "How long does it take to open a merchant account?",
    a: "The timeframe depends on document submission speed, desired currencies, regions, payment methods, card types, and payment system rules. Typically, the review takes 1–4 weeks.",
  },
];

/* ── SEO ──────────────────────────────────────────────────────────────────── */
const useSEO = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Merchant Account — Open Merchant Account with Incluence";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Open a merchant account to accept online payments via credit and debit cards. Offshore and onshore companies. Full support from Incluence.");
    setMeta("keywords", "merchant account, open merchant account, merchant account registration, card payment processing, PSP merchant");
    setProp("og:title", "Merchant Account — Open Merchant Account with Incluence");
    setProp("og:description", "Open a merchant account to accept online payments via credit and debit cards.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/opening-a-merchant-account");

    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/opening-a-merchant-account";

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "merchant-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Merchant Account Opening",
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      url: "https://incluence.com/opening-a-merchant-account",
      description: "Open a merchant account to accept online payments via credit and debit cards.",
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prev;
      document.getElementById("merchant-schema")?.remove();
    };
  }, []);
};

/* ── Main Component ──────────────────────────────────────────────────────── */
const MerchantAccountPage = () => {
  useSEO();
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", country: "", type: "", details: "" });

  return (
    <div className="min-h-screen font-manrope" style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ── BREADCRUMB ── */}
      <div className="bg-[hsl(var(--bg-1))] border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[12px]">
            <Link to="/" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors">Incluence</Link>
            <span className="text-[hsl(var(--text-muted))]">/</span>
            <span className="text-[hsl(var(--text-primary))]">Merchant Account</span>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[hsl(var(--bg-1))] py-[80px] px-12">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle, hsl(0 0% 100% / 0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0 z-[1] opacity-[0.12]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="section-tag mb-6 block">Payment Services</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-light text-[hsl(var(--text-primary))] leading-[1.1] mb-6" style={{ letterSpacing: "-0.02em" }}>
            Open a <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-light))] bg-clip-text text-transparent">Merchant</span>
            <br />Account
          </h1>
          <p className="text-[15px] text-[hsl(var(--text-secondary))] max-w-[500px] mb-8 leading-[1.8]">
            Merchant Account registration is a popular service among entrepreneurs, especially in the context of online business. With a merchant account, you can accept online payments from clients and efficiently process online transactions. Our experts will answer all questions and handle the full registration procedure.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Discuss the Project →</Link>
            <button className="btn-secondary" onClick={() => document.getElementById("requirements")?.scrollIntoView({ behavior: "smooth" })}>View Requirements</button>
          </div>

          {/* Stats strip */}
          <div className="mt-12 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {[
              { val: "1–4 weeks", sub: "Processing Time" },
              { val: "24/7", sub: "Payment Acceptance" },
              { val: "10%", sub: "Rolling Reserve (standard)" },
              { val: "180 days", sub: "Reserve Return Period" },
            ].map((s, i) => (
              <div key={i} className="service-card bg-[hsl(var(--bg-1))] p-7 group relative overflow-hidden">
                <ScanSweep />
                <p className="text-[20px] font-semibold text-[hsl(var(--text-primary))] mb-1">{s.val}</p>
                <p className="text-[12px] text-[hsl(var(--text-secondary))] uppercase tracking-wider">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — WHAT IT PROVIDES ── */}
      <section className="bg-[hsl(var(--bg-2))] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Advantages</span>
          <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-4">What a Merchant Account Provides</h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] max-w-[500px] mb-12 leading-relaxed">
            A properly registered merchant account gives your company access to the global consumer market. Key benefits:
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.2" className="mb-4">
                    <circle cx="7" cy="7" r="6" /><polyline points="7,3 7,7 10,7" />
                  </svg>
                ),
                title: "24/7 Worldwide Payments",
                body: "Clients can make purchases at any time worldwide. Payments are processed quickly and without delays, even on holidays.",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.2" className="mb-4">
                    <polyline points="1,10 5,4 9,8 13,2" /><polyline points="10,2 13,2 13,5" />
                  </svg>
                ),
                title: "Increased Conversion",
                body: "Consumers pay online and receive goods by mail. Minimal effort to complete transactions directly increases sales and conversion.",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.2" className="mb-4">
                    <path d="M7 1L1 5v4l6 4 6-4V5L7 1z" /><path d="M7 5v4" /><circle cx="7" cy="11" r="0.5" fill="hsl(var(--accent))" />
                  </svg>
                ),
                title: "Security Standards",
                body: "Modern security technologies comply with international standards, making your company more attractive to clients.",
              },
            ].map((c, i) => (
              <div key={i} className="service-card bg-[hsl(var(--bg-2))] p-7 group relative overflow-hidden">
                <ScanSweep />
                {c.icon}
                <p className="text-[15px] font-semibold text-[hsl(var(--text-primary))] mb-2">{c.title}</p>
                <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — HOW IT WORKS ── */}
      <section className="bg-[hsl(var(--bg-3))] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Process</span>
          <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-10">How a Merchant Account Works</h2>
          <div className="grid grid-cols-12 gap-12">
            {/* Left */}
            <div className="col-span-7">
              <p className="mb-6 text-[14px] text-[hsl(var(--text-secondary))] leading-[1.85]">
                A merchant account is an account to which funds are credited once a client pays for goods or services and their data is processed by the payment system. It allows accumulating numerous small payments, speeding up transactions and making them more cost-effective compared to transferring directly to a corporate bank account.
              </p>
              <p className="mb-6 text-[14px] text-[hsl(var(--text-secondary))] leading-[1.85]">
                To work with cards, you must register a merchant account with a payment system or an acquiring bank. The acquiring bank uses a processing center for technical payment handling — its role is to process financial transactions made by customers using bank cards.
              </p>
              <div className="bg-[hsl(var(--bg-1))] border border-white/[0.06] p-6 mt-6">
                <p className="text-[13px] font-semibold text-[hsl(var(--text-primary))] mb-3">Rolling Reserve</p>
                <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">
                  When using a merchant account, a Rolling Reserve is formed. A portion of funds is temporarily frozen to cover potential chargebacks, refunds, or fraud-related disputes. Standard Rolling Reserve is 10% of incoming payments and is returned to the merchant after 180 days.
                </p>
              </div>
            </div>
            {/* Right */}
            <div className="col-span-5">
              <div className="service-card bg-[hsl(var(--bg-1))] border border-white/[0.06] p-8 group relative overflow-hidden">
                <ScanSweep />
                <span className="section-tag mb-4 block">Offshore Companies</span>
                <p className="text-[14px] font-semibold text-[hsl(var(--text-primary))] mb-3">Merchant Account for Offshore Companies</p>
                <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed mb-6">
                  If you own an offshore company, you can open a merchant account, but payment systems and acquiring banks are likely to impose stricter requirements. Thorough preparation significantly increases the chances of successful onboarding.
                </p>
                <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">
                  Our specialists will select the most business-friendly conditions and help your offshore company open a merchant account with minimal risk of rejection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — REQUIREMENTS ── */}
      <section id="requirements" className="bg-[hsl(var(--bg-2))] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Requirements</span>
          <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-4">What Is Required to Open a Merchant Account</h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] max-w-[540px] mb-10 leading-relaxed">
            Payment providers avoid regulatory risks, so minimum requirements must be met. Conditions vary by payment system or bank.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {/* Company Reqs */}
            <div>
              <p className="text-[14px] font-semibold text-[hsl(var(--text-primary))] mb-4">Company Requirements</p>
              <div className="border-l-2 border-[hsl(var(--accent))]/20 pl-6 space-y-3">
                {[
                  "The company must have a registered settlement account",
                  "Corporate documents — charter, licenses, etc.",
                  "For non-residents: documents translated into English with apostille",
                  "Confidential information about beneficiaries (mandatory)",
                  "Detailed refund policy for customers",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] mt-1.5 flex-shrink-0" />
                    <span className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Website Reqs */}
            <div>
              <p className="text-[14px] font-semibold text-[hsl(var(--text-primary))] mb-4">Website Requirements</p>
              <div className="border-l-2 border-[hsl(var(--accent))]/20 pl-6 space-y-3">
                {[
                  "Website URL provided — customers interact through it",
                  "Detailed description of goods and services on the website",
                  "Hosted on paid hosting (not free hosting services)",
                  "All website pages under one domain",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] mt-1.5 flex-shrink-0" />
                    <span className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — FAQ ── */}
      <section className="bg-[hsl(var(--bg-3))] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">FAQ</span>
          <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] space-y-px bg-[rgba(255,255,255,0.06)]">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-[hsl(var(--bg-3))]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="text-[15px] text-[hsl(var(--text-primary))] font-medium pr-4">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[hsl(var(--text-muted))] flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[400px] pb-6 px-6" : "max-h-0"}`}>
                  <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — CTA ── */}
      <section className="bg-[hsl(var(--bg-1))] py-[80px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="section-tag mb-4 block">Get Started</span>
            <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-4">Open Your Merchant Account</h2>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed">
              Tell us about your business — we'll select the right payment system and prepare all required documents.
            </p>
          </div>
          <div className="col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <input type="text" placeholder="Country of Registration" value={form.country} onChange={e => setForm({...form, country: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <input type="text" placeholder="Business Type" value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <textarea placeholder="Describe your business activity, required currencies, monthly volumes..." value={form.details} onChange={e => setForm({...form, details: e.target.value})} rows={4} className="col-span-2 bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors resize-none" />
              <button type="submit" className="btn-primary col-span-2">Discuss the Project →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerchantAccountPage;
