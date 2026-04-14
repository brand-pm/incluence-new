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

const DenmarkMap = () => (
  <svg viewBox="0 0 180 240" fill="none" className="w-full h-full">
    <path d="M55 45 L88 35 L105 48 L108 90 L100 130 L88 148 L72 152 L58 142 L48 110 L45 72 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
    <path d="M118 75 L148 68 L162 85 L158 108 L142 118 L122 112 L112 95 Z" fill="#141822" stroke="rgba(240,235,224,0.10)" strokeWidth="0.8" />
    <path d="M108 95 L120 90 L125 100 L118 110 L106 108 Z" fill="#141822" stroke="rgba(240,235,224,0.09)" strokeWidth="0.7" />
    <circle cx="148" cy="90" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" /></circle>
    <circle cx="148" cy="90" r="3" fill="#444CE7" />
    <text x="152" y="102" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">Copenhagen</text>
    <text x="153" y="110" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">FSA HQ</text>
    <text x="78" y="100" fontSize="22" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">DK</text>
    <line x1="148" y1="85" x2="148" y2="25" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5" />
    <text x="152" y="21" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">EU · FSA</text>
  </svg>
);

const REQUIREMENTS_CARDS = [
  { title: "Physical Office in Denmark", body: "Any company applying for licensing must have a physical office registered in Denmark. This is a hard requirement — not a virtual office. Genuine local presence is required." },
  { title: "€350,000 Share Capital", body: "Before submitting the license application, the full amount of share capital must be deposited. It amounts to approximately EUR 350,000." },
  { title: "Joint-Stock Company Only", body: "A payment system in Denmark can only be registered in one legal form — a joint-stock company, either public or private. No other legal forms are accepted for PS licensing." },
  { title: "Three Qualified Directors", body: "Directors must be natural persons, at least three in number. They must have relevant work experience and knowledge in finance and electronic payments. Non-resident shareholders are allowed but must meet the same professional requirements as mandated by Danish law." },
];

const DOCS = [
  "Detailed description of the business model and commercial plan",
  "Evidence that mechanisms ensuring client security are in place and functioning",
  "AML/CTF system created and operational — preventing money laundering and terrorist financing",
  "Proof of payment of the state fee for license issuance",
  "Business plan, AML policy, and all supporting compliance documentation",
  "Company registered in Denmark with physical office address",
  "Director qualifications and professional experience documentation",
  "Share capital deposited and confirmed — full €350,000 required before application",
];

const KEY_FACTS = [
  { label: "Regulator", value: "Danish FSA", cls: "" },
  { label: "Legal form", value: "Joint-stock company only", cls: "text-[#f59e0b]" },
  { label: "Min. capital", value: "€350,000 (pre-application)", cls: "text-[#444CE7]" },
  { label: "Directors", value: "Min. 3, qualified", cls: "text-[#f59e0b]" },
  { label: "Office", value: "Physical required", cls: "text-[#f59e0b]" },
  { label: "EU passport", value: "Yes", cls: "text-[#22c55e]" },
  { label: "Validity", value: "Indefinite", cls: "text-[#22c55e]" },
];

const FACTS_STRIP = [
  { value: "", counter: true, label: "Min. Capital" },
  { value: "Danish FSA", label: "Regulator", valCls: "text-[#444CE7]" },
  { value: "EU Passport", label: "Full Market", valCls: "text-[#444CE7]" },
  { value: "Joint-Stock", label: "Required Form", valCls: "text-[#f59e0b]" },
  { value: "Indefinite", label: "License Validity", valCls: "text-[#22c55e]" },
];

const FAQS = [
  { q: "What are the requirements for obtaining a payment system license in Denmark?", a: "To obtain a payment system license in Denmark, you must prepare a business plan, AML policy, and other documents, register a company, and hire specialists for mandatory positions (director, AML officer, etc.). A bank account and paid-in share capital are essential elements for obtaining the license." },
  { q: "Which payment system in Denmark is best to choose?", a: "When choosing a payment system, it is necessary to consider its license, service coverage regions, and permissible payment methods. It is also important to ensure that the system's requirements match the company's characteristics (country of incorporation, residency of participants, etc.). The tariffs offered by the payment system also play a significant role." },
  { q: "How long is a payment system license valid in Denmark?", a: "If all company maintenance requirements are met, the license is indefinite. However, it may be revoked in cases of prolonged inactivity and/or violations of operational rules." },
  { q: "What is the cost of obtaining a payment system license in Denmark?", a: "The final cost of obtaining a payment system license in Denmark depends on various factors (region of operation of the future payment system, projected turnover, etc.). You can find out the exact cost by consulting our specialists." },
];

const DenmarkPaymentPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", services: "", markets: "", details: "" });
  const c1 = useCounter(350);

  useEffect(() => {
    document.title = "Payment System License in Denmark — PSP License | Incluence";
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
    setMeta("description", "Get a payment system license in Denmark. EU market access, €350,000 capital, joint-stock company required. Danish FSA regulated. Incluence full support.");
    setMeta("keywords", "payment system license Denmark, PSP license Denmark, payment institution Denmark, Danish payment license, PI license Denmark");
    setProp("og:title", "Payment System License in Denmark — PSP License | Incluence");
    setProp("og:description", "Get a payment system license in Denmark. EU market access, €350,000 capital, joint-stock company required.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/payment-system-license-in-denmark");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/payment-system-license-in-denmark";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "denmark-psp-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Payment System License Denmark",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/payment-system-license-in-denmark",
      offers: { "@type": "Offer", price: "350000", priceCurrency: "EUR" },
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("denmark-psp-schema")?.remove(); };
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
          <span className="text-[#9A9590]">Denmark Payment License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[280px] h-[360px] pointer-events-none z-[2] opacity-60">
          <DenmarkMap />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Payment System License</span>
            <span className="text-[10px] text-[#5A5550]">·</span>
            <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em]">EU · Danish FSA · Joint-Stock Required</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Denmark</span> Payment<br />System License
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            Denmark is a strictly regulated EU jurisdiction for payment system licensing. Applicant companies must comply with a number of strict legal requirements — including mandatory physical presence, a joint-stock company structure, and minimum three professionally qualified directors. An EU-passported license.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</Link>
            <button onClick={() => document.getElementById("dk-docs")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-white/[0.12] text-[#9A9590] text-[13px] font-medium px-6 py-3 hover:border-white/[0.25] hover:text-[#F0EBE0] transition-colors">View Requirements</button>
          </div>

          {/* FACTS STRIP */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
            {FACTS_STRIP.map((f, i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className={`text-[22px] font-light mb-1 relative z-10 ${f.valCls || "text-[#F0EBE0]"}`}>
                  {f.counter ? `€${c1}K+` : f.value}
                </div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] relative z-10">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT TO KNOW */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Key Requirements</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">What Business Owners Must Know</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-[1.8]">
            A payment system license in Denmark is only possible by following several strict rules. These are non-negotiable requirements set by Danish law.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {REQUIREMENTS_CARDS.map(r => (
              <div key={r.title} className="bg-[#0d0d0d] p-8 relative overflow-hidden group">
                <CornerAccent />
                <ScanSweep />
                <div className="relative z-10">
                  <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{r.title}</div>
                  <div className="text-[13px] text-[#9A9590] leading-relaxed">{r.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — DOCUMENTS */}
      <section id="dk-docs" className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Required Documents</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Documents for the Danish FSA</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-[1.8]">
              Before a licensed payment system can fully operate, the following must be provided to the regulator.
            </p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {DOCS.map(d => (
                <div key={d} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-relaxed">{d}</span>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Apply for a Denmark PS License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss your payment business model and Danish FSA requirements.
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
                <input placeholder="Target EU Markets" value={form.markets} onChange={e => setForm({ ...form, markets: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <textarea rows={4} placeholder="Additional details about your payment business..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3 resize-none" />
              <button type="submit" className="self-start bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DenmarkPaymentPage;
