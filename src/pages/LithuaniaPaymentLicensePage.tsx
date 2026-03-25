import { useState, useEffect, useRef } from "react";
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

function useCounter(target: number, ms = 1600) {
  const [v, setV] = useState(0);
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return; ref.current = true;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / ms, 1);
      setV(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, ms]);
  return v;
}

const BENEFITS = [
  { title: "SEPA Access", body: "A payment system license in Lithuania allows participation in SEPA (Single Euro Payments Area). In this zone, the distinction between domestic and international EUR payments is eliminated, improving the efficiency of cross-border transactions." },
  { title: "Apply Before Company", body: "Another notable advantage is the ability to apply for a license without initially creating a company. If the license is granted, the applicant must register the appropriate legal entity within 6 months." },
  { title: "Lowest EU Fees", body: "Corporate tax, state duties, and mandatory annual fees are among the lowest in the EU. There are no municipal charges." },
  { title: "Payment Instruments", body: "A licensed PS gains the right to issue various payment instruments, process money transfers, carry out different types of payment operations, and provide clients with IBAN accounts." },
  { title: "SWIFT Integration", body: "Accept payments from international accounts within the SWIFT system, and much more." },
  { title: "Straightforward Procedure", body: "A relatively straightforward licensing procedure. Usually, obtaining a license takes about 3 months; if extended, up to 6 months." },
];

const REQS = [
  "Minimum share capital — from EUR 350,000",
  "Availability of documents confirming the source of funds",
  "No restrictions imposed by Lithuanian or EU regulators",
  "A physical office located in Lithuania",
  "Business plan and company structure description",
  "AML/CFT policy and internal control procedures",
  "IT infrastructure and security measures documentation",
  "Professional qualifications of directors and key personnel",
  "Shareholders and UBO (Ultimate Beneficial Owner) disclosure",
  "Compliance officer and money laundering reporting officer appointment",
];

const KEY_FACTS = [
  { label: "Regulator", value: "Bank of Lithuania", cls: "" },
  { label: "Min. capital", value: "€350,000 (full PI)", cls: "text-[#444CE7]" },
  { label: "Small PI capital", value: "€20,000–€125,000", cls: "" },
  { label: "Timeline", value: "3–6 months", cls: "" },
  { label: "Personal visit", value: "Not always required", cls: "text-[#22c55e]" },
  { label: "Corp. tax", value: "15%", cls: "" },
  { label: "Validity", value: "Indefinite", cls: "text-[#22c55e]" },
  { label: "EU passport", value: "Yes — full EU coverage", cls: "text-[#444CE7]" },
];

const PROCESS = [
  { num: "01", title: "Pre-Application", body: "Consultation with the Bank of Lithuania's fintech team. Determine license type (full PI or small PI) based on planned turnover and services." },
  { num: "02", title: "Company Formation", body: "Register a company in Lithuania or apply for the license before company formation — Lithuania uniquely allows this approach." },
  { num: "03", title: "Document Preparation", body: "Prepare the full application package: business plan, AML policy, IT security documentation, capital confirmation, and personnel qualifications." },
  { num: "04", title: "Application Submission", body: "Submit the application to the Bank of Lithuania. The regulator reviews within 3–6 months and may request additional information." },
  { num: "05", title: "License Granted", body: "Upon approval, the license is issued indefinitely. Begin operations with SEPA access and EU passporting rights." },
];

const FAQS = [
  { q: "What are the requirements for obtaining a payment system license in Lithuania?", a: "To obtain a payment system license in Lithuania, you must prepare a business plan, AML policy, and other documents, register a company, and hire specialists for mandatory positions (director, AML officer, etc.). A bank account and paid-up share capital are also essential elements for obtaining the license." },
  { q: "Which payment system in Lithuania is best to choose?", a: "When choosing a payment system, it is necessary to consider its license, service coverage regions, and available payment methods. The system must also match the company's characteristics (country of registration, residency of participants, etc.). The tariffs offered by the payment system are also an important factor." },
  { q: "How long is a payment system license valid in Lithuania?", a: "If all requirements for maintaining the company are met, the license is indefinite. However, it may be revoked in case of prolonged inactivity and/or violations of operational rules." },
  { q: "What is the cost of obtaining a payment system license in Lithuania?", a: "The final cost of obtaining a payment system license in Lithuania depends on various factors (the target region of the payment system, projected turnover, etc.). You can find out the exact cost by consulting our specialists." },
];

const FACTS_STRIP = [
  { value: "", counter: 350, suffix: "K+", prefix: "€", label: "Min. Capital (Full PI)" },
  { value: "3–6 mo", label: "Timeline" },
  { value: "Bank of Lit.", label: "Regulator" },
  { value: "Indefinite", label: "License Validity", valCls: "text-[#22c55e]" },
  { value: "15%", label: "Corporate Tax" },
  { value: "EU Passport", label: "Full Market", valCls: "text-[#444CE7]" },
];

const LithuaniaPaymentLicensePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", services: "", markets: "", details: "" });
  const c1 = useCounter(350);

  useEffect(() => {
    document.title = "Payment System License in Lithuania — PSP License EU | Incluence";
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
    setMeta("description", "Get a payment system license in Lithuania. SEPA access, lowest EU fees, apply without forming a company first. €350,000 capital. 3–6 months. Incluence.");
    setMeta("keywords", "payment system license Lithuania, PSP license Lithuania, payment institution Lithuania, SEPA Lithuania, PI license Lithuania");
    setProp("og:title", "Payment System License in Lithuania — PSP License EU | Incluence");
    setProp("og:description", "Get a payment system license in Lithuania. SEPA access, lowest EU fees, apply without forming a company first.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/payment-system-license-in-lithuania");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/payment-system-license-in-lithuania";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "lithuania-psp-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Payment System License Lithuania",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/payment-system-license-in-lithuania",
      offers: { "@type": "Offer", price: "350000", priceCurrency: "EUR" },
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("lithuania-psp-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-12 py-3.5 flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <Link to="/provider-payment-systems" className="hover:text-[#9A9590] transition-colors">Payment Systems</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Lithuania Payment License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Payment System License</span>
            <span className="text-[10px] text-[#5A5550]">·</span>
            <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em]">EU · Bank of Lithuania · SEPA</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Lithuania</span> Payment<br />System License
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            Obtaining a PS license in Lithuania offers advantages for business owners: a relatively straightforward licensing procedure, corporate tax and state duties among the lowest in the EU, no municipal charges, and a payment system license that allows participation in SEPA (Single Euro Payments Area). Full EU passporting rights under a single authorization.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</Link>
            <button onClick={() => document.getElementById("lt-reqs")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-white/[0.12] text-[#9A9590] text-[13px] font-medium px-6 py-3 hover:border-white/[0.25] hover:text-[#F0EBE0] transition-colors">View Requirements</button>
          </div>

          {/* FACTS STRIP */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-6 gap-px">
            {FACTS_STRIP.map((f, i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className={`text-[22px] font-light mb-1 relative z-10 ${f.valCls || "text-[#F0EBE0]"}`}>
                  {f.counter ? `${f.prefix || ""}${c1}${f.suffix || ""}` : f.value}
                </div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] relative z-10">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — BENEFITS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Advantages</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Benefits of a Lithuania Payment License</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-[1.8]">
            Lithuania offers a unique combination of regulatory support, low costs, and full EU market access for payment institutions.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {BENEFITS.map(b => (
              <div key={b.title} className="bg-[#0d0d0d] p-7 relative overflow-hidden group">
                <CornerAccent />
                <ScanSweep />
                <div className="relative z-10">
                  <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{b.title}</div>
                  <div className="text-[13px] text-[#9A9590] leading-relaxed">{b.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — REQUIREMENTS */}
      <section id="lt-reqs" className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">What Is Required for a Lithuania PI License</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-[1.8]">
              The Bank of Lithuania supervises all payment institutions and provides clear guidance on requirements. The process is well-structured with dedicated fintech support.
            </p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {REQS.map(r => (
                <div key={r} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-relaxed">{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 relative overflow-hidden group">
              <ScanSweep />
              <span className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#22c55e]" />
                <span className="absolute w-3 h-3 bg-[#22c55e]/30 animate-ping" style={{ left: -3, top: -3 }} />
              </span>
              <div className="relative z-10">
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Key Facts</span>
                <div className="divide-y divide-white/[0.05] mt-4">
                  {KEY_FACTS.map(k => (
                    <div key={k.label} className="flex justify-between py-3">
                      <span className="text-[12px] text-[#5A5550]">{k.label}</span>
                      <span className={`text-[12px] ${k.cls || "text-[#9A9590]"}`}>{k.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How to Get a Payment License in Lithuania</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-[1.8]">
            The licensing process is well-structured with dedicated support from the Bank of Lithuania's fintech team.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
            {PROCESS.map(s => (
              <div key={s.num} className="bg-[#0d0d0d] p-6 relative overflow-hidden group">
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

      {/* SECTION 5 — LICENSE TYPES */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— License Types</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-10">Full PI vs Small PI License</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            <div className="bg-[#111111] p-8 relative overflow-hidden group">
              <CornerAccent />
              <ScanSweep />
              <div className="relative z-10">
                <div className="text-[16px] font-semibold text-[#F0EBE0] mb-3">Full Payment Institution</div>
                <div className="space-y-3">
                  {["€350,000 minimum authorized capital", "No turnover restrictions", "Full EU passporting rights", "3–6 months processing time", "Suitable for large-scale payment operations"].map(t => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                      <span className="text-[13px] text-[#9A9590]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#111111] p-8 relative overflow-hidden group">
              <CornerAccent />
              <ScanSweep />
              <div className="relative z-10">
                <div className="text-[16px] font-semibold text-[#F0EBE0] mb-3">Small Payment Institution</div>
                <div className="space-y-3">
                  {["€20,000–€125,000 capital (depends on services)", "Monthly turnover limit applies", "Operations limited to Lithuania initially", "Faster approval timeline", "Ideal for startups and smaller fintech companies"].map(t => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                      <span className="text-[13px] text-[#9A9590]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a Lithuania PI License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss your fintech business model and licensing options.
            </p>
          </div>
          <div className="col-span-7">
            <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
                <input placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input placeholder="Payment Services Type" value={form.services} onChange={e => setForm({ ...form, services: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
                <input placeholder="License Type (Full/Small PI)" value={form.markets} onChange={e => setForm({ ...form, markets: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <textarea rows={4} placeholder="Describe your fintech business model and expected transaction volumes..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3 resize-none" />
              <button type="submit" className="self-start bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LithuaniaPaymentLicensePage;
