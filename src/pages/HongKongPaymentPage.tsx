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

const BottomAccent = () => (
  <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#444CE7]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-[3]" />
);

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const HKMap = () => (
  <svg viewBox="0 0 200 220" fill="none" className="w-full h-full">
    <path d="M40 80 L75 60 L120 55 L160 65 L180 90 L175 120 L155 145 L120 155 L80 150 L50 130 L35 105 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
    <path d="M90 95 L105 88 L115 95 L110 108 L95 108 Z" fill="#141822" stroke="rgba(240,235,224,0.08)" strokeWidth="0.6" />
    <circle cx="120" cy="100" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" /></circle>
    <circle cx="120" cy="100" r="3" fill="#444CE7" />
    <text x="128" y="98" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">Hong Kong</text>
    <text x="129" y="106" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">Dept. Customs & Excise</text>
    <text x="110" y="120" fontSize="22" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">HK</text>
    <line x1="120" y1="95" x2="120" y2="30" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5" />
    <text x="124" y="26" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">Asia · C&E</text>
  </svg>
);

const LICENSE_TYPES = [
  {
    badge: "SVF — Stored Value Facility",
    title: "5 to 10 Years",
    body: "The SVF license is not an EMI but a specific Hong Kong authorization document. It implies a relatively high initial fee. The period of validity varies from 5 to 10 years, after which the company must go through the simplified licensing procedure again.",
    note: "Best for: larger operators, long-term payment infrastructure",
  },
  {
    badge: "MSO — Money Service Operator",
    title: "2 Years (Renewable)",
    body: "The MSO license is granted for 2 years, after which the applicant must apply for renewal — but not later than the expiration date of the current document. Business owners often apply for the MSO as it is more accessible than the SVF license and covers core money service operations.",
    note: "Best for: money changers, remittance services, smaller operators",
  },
];

const SERVICES = [
  { title: "Currency Exchange", body: "Currency exchange and conversion services as a licensed money service operator." },
  { title: "Money Transfers", body: "Various types of money transfers — domestic and cross-border." },
  { title: "Other Financial Operations", body: "Other operations as permitted under the specific license type (SVF or MSO)." },
  { title: "LTD Structure", body: "A payment system is often registered as a company with the LTD legal form — similar to a Limited Liability Company." },
  { title: "Asia-Pacific Coverage", body: "Operating from Hong Kong provides direct access to mainland China and the broader Asia-Pacific market." },
  { title: "International Credibility", body: "Hong Kong's Customs & Excise regulated license is recognized across Asia and beyond." },
];

const REQS = [
  "Prepare a comprehensive business plan",
  "AML policy compliant with Hong Kong AMLO requirements",
  "Register a company in Hong Kong (typically LTD form)",
  "Hire specialists for mandatory positions: director, AML officer (MLRO)",
  "Open a local bank account in Hong Kong",
  "Deposit authorized capital",
  "Passport copies and CVs for all directors and significant shareholders",
  "Source of funds documentation",
  "Choose between SVF (5–10 yr) and MSO (2-yr renewable) license type",
];

const KEY_FACTS = [
  { label: "Regulator", value: "Dept. of Customs & Excise", cls: "" },
  { label: "SVF validity", value: "5–10 years", cls: "text-[#22c55e]" },
  { label: "MSO validity", value: "2 years (renewable)", cls: "text-[#22c55e]" },
  { label: "Bank account", value: "Local HK bank required", cls: "text-[#f59e0b]" },
  { label: "Legal form", value: "LTD (most common)", cls: "" },
  { label: "Location", value: "Asia-Pacific gateway", cls: "text-[#444CE7]" },
];

const FACTS_STRIP = [
  { value: "SVF", label: "5–10 yr License", valCls: "text-[#444CE7]" },
  { value: "MSO", label: "2-yr Renewable", valCls: "text-[#444CE7]" },
  { value: "Customs & Excise", label: "Regulator", cls: "text-[10px]" },
  { value: "LTD", label: "Common Structure" },
  { value: "Asia Hub", label: "Strategic Location" },
];

const FAQS = [
  { q: "What are the requirements for obtaining a payment system license in Hong Kong?", a: "In order to obtain a payment system license in Hong Kong, it is necessary to prepare a business plan, AML policy and other documents, register a company, hire specialists for mandatory positions (director, AML officer, etc.). Integral elements for obtaining a license are an account in the local bank and contributed authorized capital." },
  { q: "What is the best payment system in Hong Kong?", a: "When choosing a payment system, it is necessary to take into account its license, service coverage regions, and acceptable payment methods. Also, it is necessary to take into account the compliance of the requirements of the payment system with the characteristics of the company (country of registration, residence of its participants, etc.). The tariffs offered by the payment system also play an important role." },
  { q: "How long is a payment system license valid in Hong Kong?", a: "Money Service Operators (MSO) license is valid for two years. Stored Value Facilities (SVF) license is a termless lisence with timely renewal." },
  { q: "What is the cost of processing a payment system license in Hong Kong?", a: "The final cost of obtaining a payment system license in Hong Kong is influenced by various factors (the exact list of future services, the region of work, etc.). You can find out the exact cost of obtaining a payment system license in Hong Kong by contacting our specialists." },
];

const HongKongPaymentPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", license: "", services: "", details: "" });

  useEffect(() => {
    document.title = "Hong Kong Payment System License — MSO / SVF License | Incluence";
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
    setMeta("description", "Get a payment system license in Hong Kong. SVF (5–10 years) or MSO (2-year renewable). Customs & Excise regulated. Currency exchange, money transfers. Incluence.");
    setMeta("keywords", "Hong Kong payment system license, MSO license Hong Kong, SVF license Hong Kong, money service operator Hong Kong");
    setProp("og:title", "Hong Kong Payment System License — MSO / SVF License | Incluence");
    setProp("og:description", "Get a payment system license in Hong Kong. SVF or MSO. Customs & Excise regulated.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/hong-kong-payment-system-license");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/hong-kong-payment-system-license";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "hk-psp-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Hong Kong Payment System License",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/hong-kong-payment-system-license",
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("hk-psp-schema")?.remove(); };
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
          <span className="text-[#9A9590]">Hong Kong Payment License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[320px] pointer-events-none z-[2] opacity-60">
          <HKMap />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Payment System License</span>
            <span className="text-[10px] text-[#5A5550]">·</span>
            <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em]">Asia · Customs & Excise · SVF / MSO</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Hong Kong</span> Payment<br />System License
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            If you are interested in setting up a currency and money transfer business in Hong Kong, you must first obtain a license to operate in the financial sector. Such permits are issued by the Department of Customs and Excise. The list of services provided by any operator in Hong Kong includes a wide range of operations, including currency exchange, various money transfers, and many others. Often, a payment system (PS) is registered in the form of a company with the legal form LTD.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</Link>
            <button onClick={() => document.getElementById("hk-types")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-white/[0.12] text-[#9A9590] text-[13px] font-medium px-6 py-3 hover:border-white/[0.25] hover:text-[#F0EBE0] transition-colors">View License Types</button>
          </div>

          {/* FACTS STRIP */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
            {FACTS_STRIP.map((f, i) => (
              <div key={i} className="bg-[#080808] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className={`text-[22px] font-light mb-1 relative z-10 ${f.valCls || "text-[#F0EBE0]"} ${f.cls || ""}`}>{f.value}</div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] relative z-10">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — LICENSE TYPES */}
      <section id="hk-types" className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— License Types</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">SVF vs MSO: Two License Options</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-[1.8]">
            Hong Kong offers two distinct license types for payment system operators. Unlike EU EMI licenses, both are specific to Hong Kong's regulatory framework and serve different business models.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {LICENSE_TYPES.map(lt => (
              <div key={lt.badge} className="bg-[#0d0d0d] p-10 relative overflow-hidden group flex flex-col">
                <CornerAccent />
                <ScanSweep />
                <BottomAccent />
                <div className="relative z-10 flex flex-col flex-1">
                  <span className="text-[11px] text-[#444CE7] border border-[#444CE7]/30 px-3 py-1 uppercase mb-4 inline-block self-start">{lt.badge}</span>
                  <div className="text-[20px] font-semibold text-[#F0EBE0] mb-4">{lt.title}</div>
                  <div className="text-[14px] text-[#9A9590] leading-[1.85] flex-1">{lt.body}</div>
                  <div className="mt-6 pt-6 border-t border-white/[0.06] text-[12px] text-[#5A5550]">{lt.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Licensed Services</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">What a Hong Kong Payment License Covers</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[500px] leading-[1.8]">
            Any operator in Hong Kong can provide a wide range of services under a licensed payment system structure.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-[#111111] p-6 relative overflow-hidden group">
                <ScanSweep />
                <div className="relative z-10">
                  <span className="block w-1.5 h-1.5 bg-[#444CE7] mb-3" />
                  <div className="text-[14px] font-semibold text-[#F0EBE0] mb-1">{s.title}</div>
                  <div className="text-[12px] text-[#9A9590]">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — REQUIREMENTS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Requirements for a Hong Kong PS License</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-[1.8]">
              To obtain a payment system license in Hong Kong, all core requirements must be met. The Department of Customs and Excise issues and supervises all payment service licenses.
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

      {/* SECTION 5 — FAQ */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] space-y-px bg-[rgba(255,255,255,0.06)]">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-[#111111]">
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Apply for a HK Payment License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss your payment business model and Hong Kong licensing options.
            </p>
          </div>
          <div className="col-span-7">
            <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <input placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
                <input placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <input placeholder="License Type (SVF/MSO)" value={form.license} onChange={e => setForm({ ...form, license: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
                <input placeholder="Services Planned" value={form.services} onChange={e => setForm({ ...form, services: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3" />
              </div>
              <textarea rows={4} placeholder="Describe your payment business — currencies, target markets, transaction volumes..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] focus:border-[#444CE7] focus:outline-none px-4 py-3 resize-none" />
              <button type="submit" className="self-start bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HongKongPaymentPage;
