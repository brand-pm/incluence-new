import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const SCAN_SWEEP = (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(68,76,231,0.04) 50%, transparent 100%)", backgroundSize: "100% 200%", animation: "scanSweep 2s ease-in-out infinite" }} />
);

const ContractsPage = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", type: "", countries: "", details: "" });

  useEffect(() => {
    document.title = "Drafting International Contracts | Incluence";
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
    setMeta("description", "Professional drafting of international contracts — sale, supply, services, cross-border transactions. All required sections, legally sound structure. Incluence.");
    setMeta("keywords", "international contracts, contract drafting, cross-border agreements, international trade, legal contracts");
    setProp("og:title", "Drafting International Contracts | Incluence");
    setProp("og:description", "Professional drafting of international contracts — sale, supply, services, cross-border transactions.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/drafting-international-contracts";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "contracts-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "International Contract Drafting", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/drafting-international-contracts" });
    document.head.appendChild(schema);
    return () => { document.getElementById("contracts-schema")?.remove(); };
  }, []);

  const PRINCIPLES = [
    "The contract must respect the legal rights and interests of all parties",
    "Provisions must not violate applicable laws and regulations",
    "All parties' obligations must be enforceable",
    "The contract must be free of \"legal traps\" — ambiguous or vague wording, undefined terms, etc., which can jeopardize the deal and the planned economic project",
  ];

  const SECTIONS = [
    { title: "Contract Information", body: "Date and place of execution" },
    { title: "Preamble", body: "Full official details of all parties involved" },
    { title: "Subject of the Contract", body: "Actions defining the type of transaction (sale, purchase, services) and the object (goods, services, work)" },
    { title: "Goods/Services Details", body: "Name, category, grade, specifications, processing technology, quantities, and units of measurement, including packaging type" },
    { title: "Delivery Terms", body: "Transport type, location, deadlines, and other conditions" },
    { title: "Price", body: "Total cost of goods/services (unit price included), considering insurance, transportation, storage, delivery costs, etc. Parties can choose the currency" },
    { title: "Payment Terms", body: "Methods of payment and settlement procedures" },
    { title: "Guarantees", body: "Seller obligations during the warranty period, procedures for claims, warranty duration" },
    { title: "Acceptance Terms", body: "Procedures, conditions, deadlines, and required documentation for transferring goods/services" },
    { title: "Packaging and Labeling", body: "Details on packaging, labeling, and dimensions" },
    { title: "Force Majeure", body: "Description of unforeseen circumstances and the maximum period after which parties may terminate the contract due to impossibility of performance" },
    { title: "Penalties", body: "Terms for imposing sanctions to protect parties' interests in case of non-performance" },
    { title: "Dispute Resolution", body: "Procedures and conditions for settling pre-trial and judicial disputes" },
    { title: "Party Details", body: "Complete information of each party, including legal address, location, and payment details" },
  ];

  const FAQS = [
    { q: "What is the cost of drafting international contracts?", a: "The final cost depends on the complexity of the contract and the number of hours required to prepare it. You can get an exact quote by contacting our specialists." },
    { q: "How long does it take to draft an international contract?", a: "The preparation time depends on the type, scope, and number of clauses, among other factors. Usually, it takes several hours, but additional time may be needed to agree on terms between the parties." },
    { q: "How to conclude an international contract?", a: "Before concluding a contract, define its subject, terms, and parties' interests. After preparing the draft, it should be agreed upon. Once all parties agree on the content, the contract can be signed." },
    { q: "What experience do your lawyers have?", a: "Our lawyers have extensive practical experience in international law and contract work. We can prepare contracts of any type and complexity while covering all aspects of protected contractual relationships." },
  ];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">International Contracts</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "80px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Legal Services</span>
          <h1 className="font-light mb-6" style={{ fontSize: "clamp(36px,5vw,58px)", lineHeight: 1.1 }}>
            Drafting <span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">International</span><br />Contracts
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            An international contract is a fundamental document for any cross-border deal. Proper structure and correct formulation of each clause ensures smooth processing by banks and government authorities — and protects all parties' interests.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS IT */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— About International Contracts</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">What Is an International Contract</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">An international contract is an agreement concluded between two or more parties located in different countries. Such agreements typically concern the sale or supply of goods, performance of work, provision of services, and similar transactions. An international contract is a fundamental document for any cross-border deal.</p>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Drafting an international agreement requires a specific structure in the document and proper formulation of each clause. Failure to do so can lead to problems with goods delivery, fund transfers, customs clearance, and more.</p>
              <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Key Principles</h3>
              <div className="space-y-3">
                {PRINCIPLES.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                    <span className="text-[13px] text-[#9A9590]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 relative group overflow-hidden">
                {SCAN_SWEEP}
                <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Our Approach</span>
                <p className="text-[14px] text-[#F0EBE0] font-medium mb-3">Tailored to Your Transaction</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">You can order the drafting of international contracts from our specialists. We provide services tailored to the specifics of your transaction and legal requirements. For detailed consultation, contact our company managers.</p>
                <Link to="/contact" className="block w-full text-center bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors mt-6">Discuss the Project →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONTRACT STRUCTURE */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Required Sections</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Structure of an International Contract</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">Every international economic contract should include specific sections. Properly detailing them ensures smooth processing by banks and government authorities.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {SECTIONS.map((s, i) => (
              <div key={i} className="bg-[#111111] p-6 group relative overflow-hidden">
                {SCAN_SWEEP}
                <h3 className="text-[13px] font-semibold text-[#F0EBE0] mb-1">{s.title}</h3>
                <p className="text-[12px] text-[#9A9590] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FAQ */}
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
            <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Order a Contract</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Draft Your International Contract</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Tell us about your transaction — we'll prepare a legally sound contract covering all required sections.</p>
          </div>
          <div className="md:col-span-7">
            <form className="grid grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} placeholder="Contract Type" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <input value={form.countries} onChange={e => setForm({ ...form, countries: e.target.value })} placeholder="Parties' Countries" className="col-span-1 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Describe the transaction — goods/services, parties, key terms..." className="col-span-2 bg-[#0d0d0d] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" />
              <button type="submit" className="col-span-2 md:col-span-1 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractsPage;
