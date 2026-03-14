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

const FAQS = [
  { q: "How much does it cost to buy a ready-made company?", a: "The final cost depends on the country of incorporation, the period of existence, the presence of previous activities and accounts, and other factors. Contact our specialists for an exact quote." },
  { q: "Is it possible to buy a ready-made business online?", a: "Detailed conditions for re-registration depend on the legislation of the country of registration. Typically, companies are re-registered by local representatives on the basis of a power of attorney. In some countries, the company can be transferred through a local representative based on scanned documents." },
  { q: "In which countries do you help with the purchase of a ready-made company?", a: "We assist with the purchase of ready-made companies around the world, including EU countries, European non-EU countries, Asian countries, USA, Australia and Oceania, offshore." },
  { q: "How long does it take to buy a ready-made company?", a: "The duration depends on the state of the company, the country of registration, and the characteristics of new and old participants. Usually, re-registration takes up to 1 month." },
];

const STEPS = [
  { num: "01", title: "Define Requirements", body: "Determine the form of ownership, country and region of incorporation, presence or absence of turnover, licenses held, and other specific requirements for the target company." },
  { num: "02", title: "We Find Options", body: "Our specialists find a suitable company matching your requirements. We have clients and partners who are looking for buyers for their companies across all major jurisdictions." },
  { num: "03", title: "Due Diligence", body: "The company is checked for debts to government agencies including tax, as well as the presence of receivables and payables. Full compliance report provided before purchase." },
  { num: "04", title: "Re-registration", body: "Re-registration is typically handled by local representatives on the basis of a power of attorney. In some countries the transfer can be done using scanned documents. Duration: up to 1 month." },
];

const BuyBusinessAbroadPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", country: "", type: "", budget: "", details: "" });

  useEffect(() => {
    document.title = "Buy a Ready-Made Company Abroad | Incluence";
    const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); } el.setAttribute("content", c); };
    const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`); if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Buy a ready-made company abroad — EU, Asia, USA, offshore. Skip registration, start operating immediately. Re-registration via power of attorney. Incluence.");
    setMeta("keywords", "buy company abroad, ready-made company, buy business abroad, shelf company, purchase company overseas");
    setProp("og:title", "Buy a Ready-Made Company Abroad | Incluence");
    setProp("og:description", "Buy a ready-made company abroad — EU, Asia, USA, offshore. Skip registration, start operating immediately.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/buy-a-business-abroad";
    const schema = document.createElement("script"); schema.type = "application/ld+json"; schema.id = "buy-biz-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Buy a Ready-Made Company Abroad", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/buy-a-business-abroad" });
    document.head.appendChild(schema);
    return () => { document.getElementById("buy-biz-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Buy a Business Abroad</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1] opacity-[0.12]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Ready-Made Companies</span>
          <h1 className="font-light max-w-[640px] mb-6" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            Buy a <span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Ready-Made</span><br />Company Abroad
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            It is not always possible to quickly register a company from scratch — the difficulties that arise can greatly delay the procedure. By deciding to buy a business abroad, the entrepreneur avoids many of the problems common to creating a new legal entity. A ready-made company has already gone through all registration stages and received the necessary licenses.
          </p>
          <div className="flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
            <Link to="/marketplace" className="text-[13px] text-[#9A9590] border border-white/[0.08] px-6 py-3 hover:border-white/[0.16] transition-colors inline-flex items-center">Browse Marketplace</Link>
          </div>

          {/* Stats */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-2 md:grid-cols-4 gap-px">
            {[
              { val: "Up to 1 month", label: "Re-registration Time" },
              { val: "40+", label: "Available Jurisdictions" },
              { val: "Remote", label: "Transfer Available" },
              { val: "Global", label: "Coverage" },
            ].map((s, i) => (
              <div key={i} className="bg-[#080808] p-7 group relative overflow-hidden">
                <ScanSweep />
                <span className="block text-[22px] font-light text-[#F0EBE0]">{s.val}</span>
                <span className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY BUY */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Why Buy Ready-Made</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">When It May Be Necessary to Buy a Business Abroad</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">The process of entering the international market is always accompanied by dealing with legal issues. A popular one is opening a new company in the chosen country — it is not always possible to quickly register a company from scratch, and difficulties can greatly delay the procedure. It is also worth mentioning opening a bank account, which sometimes takes many months.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">By buying a business abroad, you save time that you can profitably spend on implementing various business processes. A ready-made company with history is often preferred by banks and opens doors that fresh registrations cannot.</p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 group relative overflow-hidden">
                <ScanSweep />
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Key Advantage</span>
                <p className="text-[14px] text-[#F0EBE0] font-medium mb-3">Start Operating Immediately</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">If you decide to buy a business abroad with no liabilities and some reputation in the market, contact us for the purchase and sale transaction and subsequent re-registration. We will do everything necessary so you can start your business quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Benefits by Jurisdiction</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">What Benefits Can You Get</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">Depending on the chosen jurisdiction, an entrepreneur can expect specific advantages. In particular, various countries can offer:</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="bg-[#111111] p-8 group relative overflow-hidden">
              <CornerAccent /><ScanSweep />
              <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Offshore / Non-EU Jurisdictions</h3>
              <div className="space-y-3">
                {[
                  "Loyal taxation and tax benefits if certain legal requirements are met",
                  "Confidentiality of business ownership — closed registries, non-disclosure",
                  "Remote management tools with minimum accounting and audit requirements",
                  "Non-resident benefits — tax exemption if business is not conducted locally",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                    <span className="text-[13px] text-[#9A9590]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-8 group relative overflow-hidden">
              <CornerAccent /><ScanSweep />
              <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">European Union (EU) Jurisdictions</h3>
              <div className="space-y-3">
                {[
                  "Reliability, protection of private property",
                  "Stability in political and economic spheres",
                  "Relatively low level of corruption",
                  "Absence of government pressure on business",
                  "Access to a single currency — easier EU market entry",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                    <span className="text-[13px] text-[#9A9590]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">How to Buy a Company Abroad</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-4 gap-px">
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
      </section>

      {/* SECTION 5 — REQUIREMENTS */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Important</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Requirements After Re-registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">Please note that after re-registering ownership, the company can begin conducting business only under certain conditions and legal requirements. This primarily concerns the minimum number of directors and shareholders, the presence of an accountant, the lease of an office in the territory of the chosen country, and more.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">In case of non-compliance, regulatory authorities may suspend the company's activities and, in some cases, deprive it of its license or start a liquidation process. We advise on all ongoing compliance requirements as part of our service.</p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 group relative overflow-hidden">
                <ScanSweep />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#444CE7]" />
                  <div className="w-1.5 h-1.5 bg-[#444CE7] animate-ping absolute right-0" style={{ animationDuration: "2s" }} />
                </div>
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Browse Available Companies</span>
                <p className="text-[14px] text-[#F0EBE0] font-medium mb-3">47 Companies Available Now</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed mb-6">Browse our marketplace of pre-verified ready-made companies in 12+ jurisdictions. Filter by region, type, price, and transfer timeline.</p>
                <Link to="/marketplace" className="block w-full text-center bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Browse Marketplace →</Link>
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Find Your Company</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Buy a Ready-Made Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Tell us your requirements — activities, banking needs, existing licenses. We'll find the right match.</p>
          </div>
          <div className="md:col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} placeholder="Target Country" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} placeholder="Company Type" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} placeholder="Budget Range" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Describe requirements — activities, banking needs, existing licenses..." className="col-span-2 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" />
              <button type="submit" className="col-span-2 md:col-span-1 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyBusinessAbroadPage;
