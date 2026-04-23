import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

/* ── useCounter hook ─────────────────────────────────────────────────────── */
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

/* ── FAQ data ────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is a payment system?",
    a: "The payment system is a licensed company providing financial services - money transfer services. In order to be able to provide payment system services, a company must obtain an appropriate license in the country of registration and if necessary in the regions in which it is planned to provide services.",
  },
  {
    q: "In which payment systems do we open an account?",
    a: "We select payment systems taking into account the country of registration of the company, residence of beneficiaries and directors, planned turnover, required currencies and payment regions. When choosing a payment system, its reputation and rates are also taken into account. We open accounts in various secure payment systems around the world (EU countries, Asia, USA, etc.). In order to select the most optimal option for your company, please contact our specialists.",
  },
  {
    q: "Why are payment systems needed?",
    a: "Payment systems are needed to transfer funds as part of mutual settlements between individuals and legal entities, top up phones, pay utility bills, pay for goods on the Internet and offline stores, etc. In this case, both classical monetary units (dollar, euro, pound sterling) and electronic money issued by the payment system itself (quasi-currency) can be used.",
  },
  {
    q: "What are the conditions for opening an account in payment systems?",
    a: "In order to open an account in payment systems, it is necessary to fill out and submit KYC and AML forms, the company's statutory documents and personal documents of directors and beneficiaries. The payment system may additionally request agreements with partners and other information. The company's key persons may need to pass verification for successful account opening.",
  },
];

/* ── SEO injection ───────────────────────────────────────────────────────── */
const useSEO = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Provider Payment Systems — Register Payment System | Incluence";
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
    setMeta("description", "Register a provider payment system (PSP/EMI) with Incluence. Domestic and international payment organizations. PSP and EMI licensing in EU and worldwide.");
    setMeta("keywords", "provider payment system, payment system registration, PSP license, EMI license, payment system license EU");
    setProp("og:title", "Provider Payment Systems — Register Payment System | Incluence");
    setProp("og:description", "Register a provider payment system (PSP/EMI) with Incluence. Domestic and international payment organizations.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/provider-payment-systems");

    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/provider-payment-systems";

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "psp-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Provider Payment System Registration",
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      url: "https://incluence.com/provider-payment-systems",
      description: "Register a provider payment system (PSP/EMI) with Incluence.",
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prev;
      document.getElementById("psp-schema")?.remove();
    };
  }, []);
};

/* ── Main Component ──────────────────────────────────────────────────────── */
const PaymentSystemsPage = () => {
  useSEO();
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", type: "", regions: "", details: "" });

  return (
    <div className="min-h-screen font-manrope" style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ── BREADCRUMB ── */}
      <div className="bg-[hsl(var(--bg-1))] border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[12px]">
            <Link to="/" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] transition-colors">Incluence</Link>
            <span className="text-[hsl(var(--text-muted))]">/</span>
            <span className="text-[hsl(var(--text-primary))]">Provider Payment Systems</span>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[hsl(var(--bg-1))] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "radial-gradient(circle, hsl(0 0% 100% / 0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0 z-[1] opacity-15"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="section-tag mb-6 block">Payment Systems</span>
          <h1 className="text-[clamp(38px,5vw,64px)] font-light text-[hsl(var(--text-primary))] leading-[1.1] mb-6" style={{ letterSpacing: "-0.02em" }}>
            <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-light))] bg-clip-text text-transparent">Provider</span> Payment
            <br />Systems
          </h1>
          <p className="text-[15px] text-[hsl(var(--text-secondary))] max-w-[520px] mb-10 leading-[1.8]">
            Properly created and licensed payment systems allow companies to carry out financial transactions via the Internet and using plastic cards. This is one of the most widespread and profitable types of business in the financial market. We handle registration, licensing and full setup of both domestic and international payment organizations.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Get Free Consultation →</Link>
            <button className="btn-secondary" onClick={() => document.getElementById("requirements")?.scrollIntoView({ behavior: "smooth" })}>View Requirements</button>
          </div>

          {/* Stats strip */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {[
              { val: "2 types", sub: "Domestic & International" },
              { val: "6 months", sub: "Average Timeline" },
              { val: "EMI / PSP", sub: "License Types" },
              { val: "EU + Global", sub: "Coverage" },
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

      {/* ── SECTION 2 — TYPES ── */}
      <section className="bg-[hsl(var(--bg-2))] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Classification</span>
          <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-4">Types of Provider Payment Systems</h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] max-w-[500px] mb-12 leading-relaxed">
            All provider payment systems are classified into two main categories. The choice determines jurisdiction, regulatory requirements, and licensing approach.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {/* Domestic */}
            <div className="service-card bg-[hsl(var(--bg-2))] p-8 group relative overflow-hidden">
              <CornerAccent /><ScanSweep />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mb-4" stroke="hsl(var(--accent))" strokeWidth="1.2">
                <rect x="1" y="3" width="12" height="10" rx="0" /><path d="M4 3V1h6v2" /><line x1="1" y1="7" x2="13" y2="7" />
              </svg>
              <p className="text-[17px] font-semibold text-[hsl(var(--text-primary))] mb-3">Domestic Payment System</p>
              <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.85]">
                A domestic payment organization is a resident of a specific country and carries out its activities and fund transfers exclusively within the limits of that one state. Preferred for companies focused on a single national market with well-defined local regulatory requirements.
              </p>
            </div>
            {/* International */}
            <div className="service-card bg-[hsl(var(--bg-2))] p-8 group relative overflow-hidden">
              <CornerAccent /><ScanSweep />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mb-4" stroke="hsl(var(--accent))" strokeWidth="1.2">
                <circle cx="7" cy="7" r="6" /><ellipse cx="7" cy="7" rx="3" ry="6" /><line x1="1" y1="7" x2="13" y2="7" />
              </svg>
              <p className="text-[17px] font-semibold text-[hsl(var(--text-primary))] mb-3">International Payment System</p>
              <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.85]">
                An international organization may or may not be a resident, and its activities cover two or more countries. Financial transactions and transfers are made across borders — including payments from one country to another. In many cases, a payment system is registered in the region where it plans to operate. For EU operations, a European jurisdiction is typically selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — LICENSES ── */}
      <section className="bg-[hsl(var(--bg-3))] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">License Types</span>
          <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-4">What Payment System License Is Necessary?</h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] max-w-[540px] mb-12 leading-relaxed">
            To operate a payment system in Europe, two main license types exist. The choice depends on whether your business model requires electronic money issuance.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {/* EMI */}
            <div className="service-card bg-[hsl(var(--bg-3))] p-8 group relative overflow-hidden">
              <CornerAccent /><ScanSweep />
              <span className="text-[10px] text-[hsl(var(--accent))] border border-[hsl(var(--accent))]/30 px-2 py-0.5 uppercase mb-3 inline-block tracking-wider">EMI</span>
              <p className="text-[17px] font-semibold text-[hsl(var(--text-primary))] mb-3">Electronic Money Institution</p>
              <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.85]">
                EMI is a type of company financial licensing required for registering payment systems that can open e-wallets for clients. EMI companies do not become banks, but they can provide various banking and financial services. EMI includes all PSP features plus the right to issue electronic money.
              </p>
              <div className="border-t border-white/[0.06] mt-4 pt-4">
                <span className="text-[12px] text-[hsl(var(--text-secondary))]">Best for: e-wallet platforms, neobanks, full-service payment providers</span>
              </div>
            </div>
            {/* PSP */}
            <div className="service-card bg-[hsl(var(--bg-3))] p-8 group relative overflow-hidden">
              <CornerAccent /><ScanSweep />
              <span className="text-[10px] text-[hsl(var(--accent))] border border-[hsl(var(--accent))]/30 px-2 py-0.5 uppercase mb-3 inline-block tracking-wider">PSP</span>
              <p className="text-[17px] font-semibold text-[hsl(var(--text-primary))] mb-3">Payment Service Provider</p>
              <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-[1.85]">
                PSP is a license providing a range of payment services, including payment transactions, money transfers, and issuing or acquiring payment instruments. Required for any company providing payment processing services without issuing its own electronic money.
              </p>
              <div className="border-t border-white/[0.06] mt-4 pt-4">
                <span className="text-[12px] text-[hsl(var(--text-secondary))]">Best for: payment gateways, acquiring services, money transfer operators</span>
              </div>
            </div>
          </div>
          <p className="text-[13px] text-[hsl(var(--text-muted))] mt-4 italic">
            Small EMI/PSP licenses also exist — identical functionality but limited to the country of registration with turnover restrictions.
          </p>
        </div>
      </section>

      {/* ── SECTION 4 — REQUIREMENTS ── */}
      <section id="requirements" className="bg-[hsl(var(--bg-2))] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Requirements</span>
          <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-4">What Is Required for Registration</h2>
          <p className="text-[14px] text-[hsl(var(--text-secondary))] max-w-[540px] mb-10 leading-relaxed">
            Payment system registration requires serious preparation. The list below covers the core requirements — additional documents may be requested depending on the jurisdiction.
          </p>
          <div className="grid grid-cols-12 gap-12">
            {/* Left */}
            <div className="col-span-7">
              <p className="text-[14px] font-semibold text-[hsl(var(--text-primary))] mb-4">Documentation Package</p>
              <div className="border-l-2 border-[hsl(var(--accent))]/20 pl-6 space-y-3">
                {[
                  "Statements from company registers and organizational structure of the PS",
                  "Bank accounts, settlement banks, and processing centers information",
                  "System for managing liquidity, credit, legal, and operational risks",
                  "Procedure for rendering services to payment system clients",
                  "Payment instruments used to initiate and pay out money transfers",
                  "Technology for ensuring money transfer and information protection",
                  "AML/ATF policy compliant with FATF recommendations",
                  "Procedures for ensuring compliance with FATF anti-money laundering measures",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] mt-1.5 flex-shrink-0" />
                    <span className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>

              <p className="text-[14px] font-semibold text-[hsl(var(--text-primary))] mt-8 mb-4">Licensee Requirements</p>
              <div className="border-l-2 border-[hsl(var(--accent))]/20 pl-6 space-y-3">
                {[
                  "Crystal clear financial reputation of management, founders, and staff",
                  "Monthly turnover limitations if required by regulatory authorities",
                  "Registered office in the territory of the licensing country",
                  "PS activities must not violate local legislation",
                  "At least one director must be a resident of the registration country",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-[hsl(var(--accent))] mt-1.5 flex-shrink-0" />
                    <span className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — sticky */}
            <div className="col-span-5">
              <div className="sticky top-[80px] service-card bg-[hsl(var(--bg-1))] border border-white/[0.06] p-8 group relative overflow-hidden">
                <ScanSweep />
                <div className="absolute top-4 right-4 w-2 h-2 bg-[hsl(var(--accent))] animate-pulse" />
                <span className="section-tag mb-4 block">Processing Center</span>
                <p className="text-[14px] text-[hsl(var(--text-primary))] font-medium mb-3">Why a Processing Center is Required</p>
                <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed mb-6">
                  To process payments via bank cards in e-commerce, an automated processing center is required. It allows online businesses to accept credit and debit card payments, and coordinates transactions between the card-issuing bank and the acquiring bank.
                </p>
                <div className="border-t border-white/[0.06] pt-6">
                  <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed">
                    You can also buy an already established and licensed payment system. Contact our managers for additional consultations.
                  </p>
                </div>
                <Link to="/contact" className="btn-primary w-full text-center mt-6 block">Get Free Consultation →</Link>
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
      <section className="bg-[hsl(var(--bg-1))] py-[88px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="section-tag mb-4 block">Get Started</span>
            <h2 className="text-display-md text-[hsl(var(--text-primary))] mb-4">Register Your Payment System</h2>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed">
              Tell us about your payment business model and target regions. We'll select the right license type and jurisdiction for your case.
            </p>
          </div>
          <div className="col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <input type="text" placeholder="Payment System Type (domestic/international)" value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <input type="text" placeholder="Target Regions" value={form.regions} onChange={e => setForm({...form, regions: e.target.value})} className="bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors" />
              <textarea placeholder="Describe your payment services — transaction types, volumes, currencies..." value={form.details} onChange={e => setForm({...form, details: e.target.value})} rows={4} className="col-span-2 bg-[hsl(var(--bg-2))] border border-white/[0.06] px-4 py-3 text-[13px] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--accent))]/40 outline-none transition-colors resize-none" />
              <button type="submit" className="btn-primary col-span-2">Get Free Consultation →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSystemsPage;
