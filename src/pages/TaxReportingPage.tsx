import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MicroParticles from "@/components/MicroParticles";

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const SCAN_SWEEP = (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(68,76,231,0.04) 50%, transparent 100%)", backgroundSize: "100% 200%", animation: "scanSweep 2s ease-in-out infinite" }} />
);

const TaxReportingPage = () => {
  const [form, setForm] = useState({ name: "", company: "", country: "", type: "", details: "" });

  useEffect(() => {
    document.title = "Taxation and Financial Reporting — International Tax Planning | Incluence";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Setting up accounting procedures, preparing financial statements, tax returns, VAT. Strategic tax planning and representation before tax authorities. Incluence.");
    setMeta("keywords", "taxation, financial reporting, tax planning, VAT, tax returns, international tax");
    setProp("og:title", "Taxation and Financial Reporting | Incluence");
    setProp("og:description", "Setting up accounting procedures, preparing financial statements, tax returns, VAT.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/finance-reporting";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "tax-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Taxation and Financial Reporting", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/finance-reporting" });
    document.head.appendChild(schema);
    return () => { document.getElementById("tax-schema")?.remove(); };
  }, []);

  const SERVICES = [
    { num: "/01", title: "Separate and Consolidated Financial Statements", body: "Preparing quality financial statements in accordance with local and international accounting standards." },
    { num: "/02", title: "Tax Returns", body: "Preparation and timely filing of tax returns across all operating jurisdictions." },
    { num: "/03", title: "VAT", body: "VAT registration, preparation and filing of VAT declarations." },
    { num: "/04", title: "Strategic Tax Planning", body: "Developing tax-efficient corporate structures for your business. Planning for your specific business model and target markets." },
    { num: "/05", title: "Tax Authority Representation", body: "Representing your business before tax authorities. Resolving disputes and responding to regulatory inquiries on your behalf." },
    { num: "/06", title: "Daily Tax Consulting", body: "Ongoing tax consulting to support daily business decisions and ensure compliance with evolving tax legislation." },
  ];

  const STEPS = [
    { num: "01", title: "Discussing Your Inquiry", body: "Contacting you at your convenience, and discussing the task at hand." },
    { num: "02", title: "Determining the Current State of Affairs", body: "Analyzing your company's financial and accounting documents for the reporting period." },
    { num: "03", title: "Considering the Jurisdiction", body: "Preparing a roadmap stating requirements, deadlines and financial statement types according to laws of the particular jurisdiction." },
    { num: "04", title: "Preparing and Filing Financial Statements with Public Authorities", body: "Preparing and submitting documents to public authorities of the country of operation." },
  ];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Taxation & Financial Reporting</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1] opacity-[0.12]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— International Taxation</span>
          <h1 className="font-light max-w-[640px] mb-6" style={{ fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.1 }}>
            Taxation &<br /><span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Financial Reporting</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Setting up correct accounting procedures, helping prepare quality financial statements, controlling timely filing of tax returns and tax payments. Strategic tax planning for your business across multiple jurisdictions.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>

          {/* Stats */}
          <div className="mt-12 bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {[
              { val: "3 types", label: "Financial Statements" },
              { val: "Timely", label: "Filing Control" },
              { val: "Global", label: "Jurisdiction Coverage" },
            ].map((s, i) => (
              <div key={i} className="bg-[#080808] p-7 group relative overflow-hidden">
                {SCAN_SWEEP}
                <span className="block text-[22px] font-light text-[#F0EBE0]">{s.val}</span>
                <span className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICES */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Our Services</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">What We Do</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                {SCAN_SWEEP}
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3">{s.num}</span>
                <h3 className="text-[16px] font-semibold text-[#F0EBE0] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WORKFLOW */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Workflow</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">How We Work</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-relaxed">Controlling meeting of the deadlines at every stage. A four-step process ensuring accurate and timely financial reporting.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-4 gap-px">
            {STEPS.map((s, i) => (
              <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                {SCAN_SWEEP}
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3">{s.num}</span>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Set Up Your Tax & Reporting</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Tell us about your current situation — jurisdictions, reporting needs, and challenges. We'll handle the rest.</p>
          </div>
          <div className="md:col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} placeholder="Country of Operation" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} placeholder="Reporting Type" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Describe your current situation — jurisdictions, last filing, main challenges..." className="col-span-2 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" />
              <button type="submit" className="col-span-2 md:col-span-1 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxReportingPage;
