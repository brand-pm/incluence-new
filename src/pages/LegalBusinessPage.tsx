import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MicroParticles from "@/components/MicroParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const SCAN_SWEEP = (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(68,76,231,0.04) 50%, transparent 100%)", backgroundSize: "100% 200%", animation: "scanSweep 2s ease-in-out infinite" }} />
);

const CORNER_ACCENT = (
  <>
    <div className="absolute top-0 left-0 w-5 h-px bg-[#444CE7]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute top-0 left-0 h-5 w-px bg-[#444CE7]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </>
);

const BOTTOM_ACCENT = (
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#444CE7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
);

const LegalBusinessPage = () => {
  const [form, setForm] = useState({ name: "", company: "", country: "", type: "", details: "" });

  useEffect(() => {
    document.title = "Legitimizing Business for International Operation | Incluence";
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
    setMeta("description", "Ensuring your business operates legitimately according to international law. Legal structures, licensing, corporate law, EU/US/Asia market entry. Incluence.");
    setMeta("keywords", "business legitimization, legal structure, international law, corporate law, EU market entry");
    setProp("og:title", "Legitimizing Business for International Operation | Incluence");
    setProp("og:description", "Ensuring your business operates legitimately according to international law.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/legal-business";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "legal-biz-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Business Legitimization", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/legal-business" });
    document.head.appendChild(schema);
    return () => { document.getElementById("legal-biz-schema")?.remove(); };
  }, []);

  const CONSTRAINTS = [
    { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20"/></svg>, title: "Cannot Make Contracts", body: "A company without a legal entity cannot enter into legally binding contracts or conduct business transactions with partners." },
    { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16"/><path d="M1 10h22"/></svg>, title: "No Payment Access", body: "Without a legal structure, your business cannot access modern payment instruments or work with international payment systems." },
    { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></svg>, title: "Blocked from International Markets", body: "A legal entity is the prerequisite for entering the international market and obtaining the regulatory approvals required in target countries." },
    { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#444CE7" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "No Legal Protection", body: "Without proper legal structure, you cannot legally protect your business interests, intellectual property, or commercial relationships." },
  ];

  const SERVICES = [
    { title: "Building Legal Structures", body: "Selecting the right legal form, jurisdiction, and corporate structure for your business model — considering taxation, liability, and operational requirements." },
    { title: "Licensing Your Businesses", body: "Obtaining all necessary licenses for your business activities — gambling, fintech, crypto, forex, payment systems, and more." },
    { title: "Corporate Law Consultations", body: "Expert advice on corporate governance, shareholder agreements, director liability, and organizational structure." },
    { title: "Market Entry — EU, USA, Asia", body: "Consultations on entering markets in the European Union, the United States, and Asia — regulatory requirements, legal forms, and market-specific structuring." },
    { title: "Business Legitimization", body: "Full assessment and restructuring of existing businesses to ensure compliance with international law in operating jurisdictions." },
    { title: "Ongoing Legal Advisory", body: "Continuous legal support as your business grows and enters new markets or regulatory environments." },
  ];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Business Legitimization</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1] opacity-[0.12]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— International Operation</span>
          <h1 className="font-light max-w-[640px] mb-6" style={{ fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Legitimizing</span>{" "}Your Business<br />for International Operation
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Ensuring that your business operates legitimately according to international law. A correctly designed legal structure helps develop trust in your business in the country it operates and internationally — and allows you to attract more customers.
          </p>
          <div className="flex gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
            <button className="text-[13px] text-[#9A9590] border border-white/[0.08] px-6 py-3 hover:border-white/[0.16] transition-colors bg-transparent">Learn More</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY IT MATTERS */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Why It Matters</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">A Business Without a Legal Structure Is Constrained on Four Sides</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[560px] leading-relaxed">Without a proper legal structure, your business cannot make contracts, conduct transactions, protect its interests, or enter international markets.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-4 gap-px">
            {CONSTRAINTS.map((c, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                {SCAN_SWEEP}
                <div className="mb-4">{c.icon}</div>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{c.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Our Services</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">What We Do for Your Business</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                {CORNER_ACCENT}
                {SCAN_SWEEP}
                {BOTTOM_ACCENT}
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Our Approach</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-12">After Selecting the Place, We Lay the Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">On one hand, a legal structure is only a set of business documents. On the other hand, this set of documents gives your company a solid foundation you cannot build a legitimate and lasting business without.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">A correctly designed business structure helps organize the company's operating procedures and simplify all vital business processes.</p>
              <div className="bg-[#080808] border border-white/[0.06] p-6 mt-2">
                <p className="text-[13px] font-semibold text-[#F0EBE0] mb-3">We will contact you again</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">We will contact you to discuss your goals and objectives in greater detail, and after that we'll get to work. We will explain, citing concrete examples, why you should look elsewhere if needed — and provide our recommendations.</p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
                {SCAN_SWEEP}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#444CE7]" />
                  <div className="w-1.5 h-1.5 bg-[#444CE7] animate-ping absolute right-0" style={{ animationDuration: "2s" }} />
                </div>
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Free Consultation</span>
                <p className="text-[18px] font-light text-[#F0EBE0] mb-3">Ready to Legitimize Your Business?</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed mb-6">Submit an application and we will take care of the rest. Initial consultation is free and without obligation.</p>
                <Link to="/contact" className="block w-full text-center bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
                <div className="mt-6 pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-4">
                  <div><span className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">Response time</span><span className="text-[14px] text-[#F0EBE0]">Within 24 hours</span></div>
                  <div><span className="block text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">Consultation</span><span className="text-[14px] text-[#F0EBE0]">Free</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Start Legitimizing Your Business</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Tell us about your business — current structure, target markets, and main challenges. We'll provide a clear roadmap.</p>
          </div>
          <div className="md:col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} placeholder="Country of Operation" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} placeholder="Business Type" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Describe your business — current structure, target markets, main issues..." className="col-span-2 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" />
              <button type="submit" className="col-span-2 md:col-span-1 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalBusinessPage;
