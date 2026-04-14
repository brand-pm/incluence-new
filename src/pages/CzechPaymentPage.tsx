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

const CzechMap = () => (
  <svg viewBox="0 0 200 180" fill="none" className="w-full h-full">
    <path d="M22 55 L65 38 L110 35 L155 42 L178 58 L178 88 L165 108 L135 122 L98 125 L62 120 L35 108 L18 88 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1" />
    <path d="M110 38 L108 122" stroke="rgba(240,235,224,0.04)" strokeWidth="0.5" />
    <circle cx="82" cy="72" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" /></circle>
    <circle cx="82" cy="72" r="3" fill="#444CE7" />
    <text x="86" y="84" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">Prague</text>
    <text x="87" y="92" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">CNB HQ</text>
    <text x="100" y="86" fontSize="22" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">CZ</text>
    <line x1="82" y1="67" x2="82" y2="18" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5" />
    <text x="86" y="14" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">EU · CNB</text>
  </svg>
);

const ADVANTAGES = [
  { title: "European Trust", body: "A Czech PS license is perceived as European — users trust such payment systems more and consider them more reliable and prestigious. This directly translates to higher client conversion and retention." },
  { title: "EU-Wide Business", body: "A Czech payment system license allows doing business in any part of the EU, including the possibility of attracting potential customers from all over the world under a single EU authorization." },
  { title: "International Business", body: "Opens wide opportunities for company owners to conduct international business across borders. The Czech Republic is not on any blacklist and is a full EU member in good standing." },
];

const REQS = [
  "Prepare a comprehensive business plan",
  "AML policy compliant with Czech and EU AMLD requirements",
  "Register a company in the Czech Republic",
  "Hire specialists for mandatory positions: director, AML officer (MLRO)",
  "Open a bank account and deposit authorized capital",
  "Internal compliance procedures documented",
  "Passport copies and CVs for all directors and significant shareholders",
  "Source of funds documentation for all principals",
];

const KEY_FACTS = [
  { label: "Regulator", value: "Czech National Bank (CNB)", cls: "" },
  { label: "EU passport", value: "Full EU market", cls: "text-[#22c55e]" },
  { label: "Perception", value: "European / trusted", cls: "text-[#444CE7]" },
  { label: "Global reach", value: "Attract clients worldwide", cls: "text-[#22c55e]" },
  { label: "Validity", value: "Indefinite", cls: "text-[#22c55e]" },
  { label: "Revocation", value: "Inactivity / violations", cls: "" },
];

const FACTS_STRIP = [
  { value: "Czech Republic", label: "Jurisdiction" },
  { value: "EU Passport", label: "Full Market", valCls: "text-[#444CE7]" },
  { value: "CNB", label: "Regulator", valCls: "text-[#444CE7]" },
  { value: "Indefinite", label: "License Validity", valCls: "text-[#22c55e]" },
];

const FAQS = [
  { q: "What are the requirements for obtaining a payment system license in the Czech Republic?", a: "In order to obtain a payment system license in the Czech Republic, it is necessary to prepare a business plan, AML policy and other documents, register a company, hire specialists for mandatory positions (director, AML officer, etc.). Integral elements for obtaining a license are a bank account and contributed authorized capital." },
  { q: "What is the best payment system in the Czech Republic?", a: "When choosing a payment system, it is necessary to take into account its license, service coverage regions, and acceptable payment methods. Also, it is necessary to take into account the compliance of the requirements of the payment system with the characteristics of the company (country of registration, residence of its participants, etc.). The tariffs offered by the payment system also play an important role." },
  { q: "How long is a payment system license valid in the Czech Republic?", a: "The license is termless in case of compliance with all the conditions of the company's maintenance. But the license can be canceled in case of a long absence of activity and / or violation of the rules of functioning." },
  { q: "What is the cost of a payment system license in the Czech Republic?", a: "The final cost of obtaining a license for a payment system in the Czech Republic is depends on the various factors (region of operation of the future payment system, planned turnover, etc.). You can find out the exact cost of obtaining a payment system license in the Czech Republic by contacting our specialists." },
];

const CzechPaymentPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", services: "", markets: "", details: "" });

  useEffect(() => {
    document.title = "Czech Payment System License — PSP License Czech Republic | Incluence";
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
    setMeta("description", "Get a Czech payment system license. EU-perceived, trusted by users, operates across the entire EU. Attract clients worldwide. Incluence full support.");
    setMeta("keywords", "Czech payment system license, PSP license Czech Republic, Czech Republic payment license, CNB payment license");
    setProp("og:title", "Czech Payment System License — PSP License Czech Republic | Incluence");
    setProp("og:description", "Get a Czech payment system license. EU-perceived, trusted by users, operates across the entire EU.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/czech-payment-system-license");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/czech-payment-system-license";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "czech-psp-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Czech Payment System License",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/czech-payment-system-license",
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("czech-psp-schema")?.remove(); };
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
          <span className="text-[#9A9590]">Czech Payment License</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[280px] h-[300px] pointer-events-none z-[2] opacity-60">
          <CzechMap />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Payment System License</span>
            <span className="text-[10px] text-[#5A5550]">·</span>
            <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em]">EU · CNB · Full EU Market</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Czech</span> Payment<br />System License
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            Choosing a favorable jurisdiction for licensing is a serious issue that businessmen often face. A Chech payment system license is popular because, first of all, it is perceived as European. In other words, users trust such payment systems more and consider them more reliable and prestigious. All this opens wide opportunities for company owners to conduct international business. Moreover, a Chech payment system license allows for doing business in any part of the EU, including the possibility of attracting potential customers from all over the world.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">Get a Free Quote →</Link>
            <button onClick={() => document.getElementById("cz-reqs")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 border border-white/[0.12] text-[#9A9590] text-[13px] font-medium px-6 py-3 hover:border-white/[0.25] hover:text-[#F0EBE0] transition-colors">View Requirements</button>
          </div>

          {/* FACTS STRIP */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
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

      {/* SECTION 2 — WHY CZECH */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Why Czech Republic</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Advantages of a Czech Payment System License</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {ADVANTAGES.map(a => (
              <div key={a.title} className="bg-[#0d0d0d] p-7 relative overflow-hidden group">
                <CornerAccent />
                <ScanSweep />
                <div className="relative z-10">
                  <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{a.title}</div>
                  <div className="text-[13px] text-[#9A9590] leading-relaxed">{a.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — REQUIREMENTS */}
      <section id="cz-reqs" className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Requirements for a Czech PS License</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-[1.8]">
              To obtain a payment system license in the Czech Republic, all core requirements must be met. The CNB (Czech National Bank) supervises all licensed payment institutions.
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Apply for a Czech PS License</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">
              Contact our specialists to discuss your payment business model and CNB requirements.
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

export default CzechPaymentPage;
