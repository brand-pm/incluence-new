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
  { title: "Global Operations", body: "With an AEMI license, the company can work in any country. No geographic restriction on where you can serve clients or conduct operations." },
  { title: "IBAN Accounts", body: "Open IBAN accounts for your clients — providing them with a full-featured international bank account number within your licensed payment system." },
  { title: "SWIFT Membership", body: "Obtain SWIFT membership — enabling international wire transfers in all major currencies to and from any SWIFT-connected institution worldwide." },
  { title: "SEPA Access", body: "Full participation in SEPA (Single Euro Payments Area) — covering 36 countries for cost-effective euro transfers." },
  { title: "FCA Brand", body: "The FCA brand is recognized globally. An FCA-regulated PSP opens banking relationships and institutional partnerships that other licenses cannot." },
  { title: "Faster Payments", body: "Access to UK-specific payment rails: Faster Payments (real-time), BACS (batch), and CHAPS (same-day high-value) for GBP transactions." },
];

const REQS = [
  "Prepare a comprehensive business plan",
  "AML policy compliant with UK Money Laundering Regulations",
  "Register a UK company with a local registered office",
  "Hire specialists for mandatory positions: director, AML officer (MLRO)",
  "Open a bank account at an FCA-approved institution",
  "Deposit authorized capital",
  "Compliance infrastructure: KYC procedures, transaction monitoring",
  "IT systems and client fund safeguarding documentation",
  "Passport copies and CVs for all directors and significant shareholders",
  "Source of funds documentation for all principals",
];

const KEY_FACTS = [
  { label: "Regulator", value: "FCA (Financial Conduct Authority)", cls: "" },
  { label: "License", value: "AEMI (Authorised EMI)", cls: "" },
  { label: "SWIFT", value: "Membership available", cls: "text-[#22c55e]" },
  { label: "SEPA", value: "Full access", cls: "text-[#22c55e]" },
  { label: "IBAN", value: "Client accounts", cls: "text-[#22c55e]" },
  { label: "Validity", value: "Indefinite", cls: "text-[#22c55e]" },
  { label: "Global ops", value: "Any country", cls: "text-[#22c55e]" },
];

const FACTS_STRIP = [
  { value: "FCA", label: "Regulator", valCls: "text-[#444CE7]" },
  { value: "AEMI", label: "License Type", valCls: "text-[#444CE7]" },
  { value: "SWIFT", label: "Network Access", valCls: "text-[#22c55e]" },
  { value: "SEPA", label: "Payments Access", valCls: "text-[#22c55e]" },
  { value: "Indefinite", label: "License Validity", valCls: "text-[#22c55e]" },
];

const FAQS = [
  { q: "What are the requirements for obtaining a payment system license in the UK?", a: "You must prepare a business plan, AML policy, and other documents, register a company, and hire specialists for mandatory positions (director, AML officer, etc.). A bank account and contributed authorized capital are integral elements for obtaining the license." },
  { q: "What is the best payment system in the UK?", a: "When choosing a payment system, consider its license, service coverage regions, and acceptable payment methods. Also ensure the payment system's requirements match your company's characteristics (country of registration, residency of participants, etc.). Tariffs offered by the payment system also play an important role." },
  { q: "How long is a payment system license valid in the UK?", a: "The license is indefinite in case of compliance with all company maintenance conditions. However, the license can be canceled in cases of prolonged inactivity and/or violations of operational rules." },
  { q: "What is the cost of obtaining a payment system license in the UK?", a: "The final cost depends on various factors (region of operation, planned turnover, etc.). Contact our specialists to find out the exact cost of obtaining a payment system license in the UK." },
];

const UKMap = () => (
  <svg viewBox="0 0 200 340" fill="none" className="w-full h-full">
    <path d="M95 30 L115 25 L125 35 L120 55 L130 70 L125 90 L135 105 L128 120 L118 115 L110 125 L100 118 L95 130 L85 125 L80 110 L75 95 L80 80 L70 65 L78 50 L85 40 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
    <path d="M70 150 L120 135 L140 155 L145 185 L155 200 L148 220 L155 245 L140 270 L125 280 L115 275 L105 285 L90 278 L80 260 L75 240 L82 225 L78 210 L85 195 L75 175 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
    <path d="M60 200 L72 195 L78 210 L72 225 L58 220 Z" fill="#141822" stroke="rgba(240,235,224,0.10)" strokeWidth="0.8" />
    <circle cx="132" cy="248" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" /></circle>
    <circle cx="132" cy="248" r="3" fill="#444CE7" />
    <text x="138" y="255" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">London</text>
    <text x="139" y="263" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">FCA HQ</text>
    <text x="110" y="210" fontSize="28" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">UK</text>
    <line x1="132" y1="243" x2="132" y2="180" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5" />
    <text x="136" y="176" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">FCA · Tier 1</text>
  </svg>
);

const UKPSPPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", services: "", markets: "", details: "" });

  useEffect(() => {
    document.title = "PSP System UK — Payment System License UK | Incluence";
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
    setMeta("description", "Get a PSP/AEMI license in the UK. FCA regulated, IBAN accounts, SWIFT and SEPA membership. Work in any country. Full support from Incluence.");
    setMeta("keywords", "PSP license UK, payment system license UK, AEMI license UK, FCA payment license, UK payment institution");
    setProp("og:title", "PSP System UK — Payment System License UK | Incluence");
    setProp("og:description", "Get a PSP/AEMI license in the UK. FCA regulated, IBAN accounts, SWIFT and SEPA membership.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/psp-system-uk");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/psp-system-uk";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "uk-psp-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "PSP System UK — Payment System License",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/psp-system-uk",
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("uk-psp-schema")?.remove(); };
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
          <span className="text-[#9A9590]">UK PSP License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        {/* UK Map */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[320px] h-[460px] pointer-events-none z-[2] opacity-60">
          <UKMap />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Payment System License</span>
            <span className="text-[10px] text-[#5A5550]">·</span>
            <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em]">Tier 1 · FCA · SWIFT · SEPA</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">UK</span> PSP License<br />AEMI Authorization
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            In the UK, the licensing of payment systems is carried out by the FCA. By obtaining an AEMI license, the company will be able to work in any country, open IBAN accounts, obtain the status of a member of SWIFT, SEPA, and so on. The FCA-regulated license is the most globally recognized payment institution authorization available.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</Link>
            <button onClick={() => document.getElementById("uk-reqs")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-white/[0.12] text-[#9A9590] text-[13px] font-medium px-6 py-3 hover:border-white/[0.25] hover:text-[#F0EBE0] transition-colors">View Requirements</button>
          </div>

          {/* FACTS STRIP */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
            {FACTS_STRIP.map((f, i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className={`text-[22px] font-light mb-1 relative z-10 ${f.valCls || "text-[#F0EBE0]"}`}>{f.value}</div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] relative z-10">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS AEMI */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About the License</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">UK AEMI — Authorised Electronic Money Institution</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-[1.8]">
            The AEMI (Authorised Electronic Money Institution) is the main payment system license issued by the UK Financial Conduct Authority. It combines the functions of both PSP and EMI — making it one of the most powerful financial licenses available globally.
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

      {/* SECTION 3 — REQUIREMENTS */}
      <section id="uk-reqs" className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Requirements for a UK PSP License</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-[1.8]">
              To obtain a payment system license in the UK, all core regulatory requirements must be met. The FCA applies stringent fit-and-proper assessments to all applicants.
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

      {/* SECTION 4 — FAQ */}
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Apply for a UK PSP License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss your payment business model and SWIFT/SEPA requirements.
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
                <input placeholder="Target Markets" value={form.markets} onChange={e => setForm({ ...form, markets: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <textarea rows={4} placeholder="Describe your payment business model, SWIFT/SEPA requirements, client geography..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3 resize-none" />
              <button type="submit" className="self-start bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKPSPPage;
