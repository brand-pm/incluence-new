import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

const FAQS = [
  { q: 'How much does it cost to register a company in Costa Rica?', a: "The final cost depends on the type of activity, the number of participants, and other factors. Contact our specialists to find out the exact cost." },
  { q: 'Can I register an offshore company in Costa Rica online?', a: 'An offshore company in Costa Rica can be registered remotely with the help of local representatives.' },
  { q: 'What documents are required to register a company in Costa Rica?', a: "Copies of participants' passports, proof of address, and letters of recommendation." },
  { q: 'Where can I open an offshore account in Costa Rica?', a: "We select banks based on the company's country of registration, residency of beneficiaries and directors, expected turnover, required currencies, and payment regions. We also take into account the bank's reputation and fees. Contact our specialists to select the best option for your company." },
];

const CostaRicaOffPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', company: '', activity: '', type: '', details: '' });

  useEffect(() => {
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); (el as HTMLMetaElement).name = name; document.head.appendChild(el); }
      (el as HTMLMetaElement).content = content;
    };
    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement('meta'); (el as HTMLMetaElement).setAttribute('property', prop); document.head.appendChild(el); }
      (el as HTMLMetaElement).content = content;
    };
    document.title = 'Offshore Costa Rica — Register Company in Costa Rica | Incluence';
    setMeta('description', 'Register an offshore company in Costa Rica. Territorial taxation — no tax on foreign income, LLC structure, ready-made available. Remote registration. Incluence.');
    setMeta('keywords', 'Costa Rica offshore, Costa Rica company formation, offshore Costa Rica, territorial tax Costa Rica, LLC Costa Rica');
    setProp('og:title', 'Offshore Costa Rica — Register Company in Costa Rica | Incluence');
    setProp('og:description', 'Register an offshore company in Costa Rica. Territorial taxation — no tax on foreign income, LLC structure, ready-made available.');
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = 'https://incluence.com/offshore-costa-rica';
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'cr-off-schema';
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Offshore Company Formation Costa Rica', provider: { '@type': 'Organization', name: 'Incluence' } });
    document.head.appendChild(schema);
    return () => { const s = document.getElementById('cr-off-schema'); if (s) s.remove(); };
  }, []);

  const FACTS = [
    { val: '0%', label: 'Tax on Foreign Income', color: 'text-[#22c55e]' },
    { val: 'Remote', label: 'Registration', color: 'text-[#22c55e]' },
    { val: 'LLC / SAA', label: 'Legal Forms', color: '' },
    { val: 'Ready-Made', label: 'Available', color: 'text-[#444CE7]' },
  ];

  const ADVANTAGES = [
    { title: 'Territorial Taxation', body: 'Taxes are paid only on income earned within Costa Rica. Non-resident entrepreneurs can register a company, conduct trade outside the jurisdiction, and significantly reduce the tax burden on their business.' },
    { title: 'No Residents Required', body: 'A company may have no residents at all — there are no legislative restrictions for such firms. Completely flexible ownership structure.' },
    { title: 'Highest FDI in Latin America', body: 'The level of foreign investment attraction is the highest in Latin America. The country quickly stabilized its economy after the global crisis and ensured consistent growth.' },
    { title: 'Ready-Made Available', body: 'Entrepreneurs can purchase an already established business that has gone through all bureaucratic procedures, registration, and has no liabilities to third parties.' },
    { title: 'Favorable Business Climate', body: 'Costa Rica is characterized by stability in economic, political, and social areas — making it one of the most reliable Central American jurisdictions for business.' },
    { title: 'Multiple Legal Forms', body: 'Choose from LLC (Sociedad Limitada), SAA (public joint-stock company), and other legal forms when setting up an offshore structure.' },
  ];

  const LLC_FEATURES = [
    { title: 'Limited Liability', body: "Shareholders' liability is limited to their contributions to share capital." },
    { title: 'Min. 1 Director', body: 'At least one director and at least two shareholders required.' },
    { title: 'Quotas Not Shares', body: 'Shares are not used in LLC structures — instead, quotas are applied.' },
    { title: 'No Residents Required', body: 'The company may have no resident participants at all.' },
    { title: 'Bank Account Note', body: 'To open a bank account in Costa Rica, there must be a resident in the company structure.' },
    { title: 'Public Register', body: 'Costa Rica now has a public register of beneficial owners — shareholders cannot rely on full confidentiality.' },
  ];

  const KEY_FACTS = [
    { label: 'Tax system', value: 'Territorial', color: 'text-[#22c55e]' },
    { label: 'Foreign income', value: 'Zero tax', color: 'text-[#22c55e]' },
    { label: 'Residents', value: 'Not required', color: 'text-[#22c55e]' },
    { label: 'Bank account', value: 'Resident required in structure', color: 'text-[#f59e0b]' },
    { label: 'Register', value: 'Public (beneficial owners)', color: 'text-[#f59e0b]' },
    { label: 'Ready-made', value: 'Available', color: 'text-[#444CE7]' },
    { label: 'Registration', value: 'Remote', color: 'text-[#22c55e]' },
  ];

  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Breadcrumb */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-12">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Costa Rica</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#080808] py-[88px] px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-dots opacity-60" />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="section-tag mb-4 block">Payment Services</span>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {['Territorial Tax', 'Latin America', 'Remote'].map(t => (
              <span key={t} className="text-[11px] text-[#9A9590] border border-white/[0.06] px-3 py-1 uppercase tracking-[0.08em]">{t}</span>
            ))}
          </div>
          <h1 className="text-[clamp(38px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.1] mb-6 max-w-[640px]">
            Offshore{' '}<span className="bg-gradient-to-r from-[#444CE7] to-[#818CF8] bg-clip-text text-transparent">Costa Rica</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Costa Rica has a favorable business climate with stability in economic, political, and social areas. Offshore companies here are called that for a reason: they do not pay taxes while operating outside the country. This is due to the territorial taxation system — taxes are paid only on income earned within Costa Rica.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Register Costa Rica Company →</Link>
            <button className="btn-secondary" onClick={() => document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' })}>View Requirements</button>
          </div>
        </div>
        {/* Facts strip */}
        <div className="max-w-screen-xl mx-auto mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
          {FACTS.map((f, i) => (
            <div key={i} className="bg-[#080808] p-7 group relative overflow-hidden">
              <div className="scan-line" /><div className="service-card group-hover:scanning">
                <div className={`text-[22px] font-light mb-1 ${f.color || 'text-[#F0EBE0]'}`}>{f.val}</div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{f.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — Advantages */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Why Costa Rica</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Advantages of an Offshore Company in Costa Rica</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">If you decide to open an offshore company, Costa Rica is a good option for several reasons.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden service-card">
                <div className="scan-line" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#444CE7]/30" />
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — LLC Details */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Main Legal Form</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Sociedad Limitada (LLC) — Most Popular Structure</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">When setting up a company, entrepreneurs often choose Sociedad Limitada — a Limited Liability Company. Key features:</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {LLC_FEATURES.map((f, i) => (
              <div key={i} className="bg-[#111111] p-6 group relative overflow-hidden service-card">
                <div className="scan-line" />
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-[13px] font-semibold text-[#F0EBE0] mb-1">{f.title}</h3>
                    <p className="text-[12px] text-[#9A9590] leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Requirements */}
      <section id="requirements" className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-4 block">Requirements</span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Documents Required for Costa Rica Registration</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-relaxed">We provide full support at every stage. For a new company we handle all accompanying procedures, prepare documents, and submit them to regulatory authorities.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {["Copies of participants' passports", 'Proof of address for all participants', 'Letters of recommendation', 'Completed registration forms', 'For bank account: at least one resident in company structure required'].map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#9A9590] leading-relaxed mt-6">Important: Costa Rica has a public register of beneficial owners. Because of this, shareholders cannot rely on confidentiality, even if the company is offshore and conducts business outside the country.</p>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className="absolute top-3 right-3 w-2 h-2">
                <div className="w-full h-full bg-[#444CE7] opacity-80" />
                <div className="absolute inset-0 border border-[#444CE7]/30 jurisdiction-pulse-ring" />
              </div>
              <span className="section-tag mb-4 block">Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {KEY_FACTS.map((f, i) => (
                  <div key={i} className="py-3 flex justify-between items-center">
                    <span className="text-[12px] text-[#5A5550]">{f.label}</span>
                    <span className={`text-[12px] ${f.color || 'text-[#9A9590]'}`}>{f.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="btn-primary w-full text-center block">Register Costa Rica Company →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — FAQ */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">FAQ</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] space-y-px">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-[14px] text-[#F0EBE0] font-medium pr-4">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#444CE7] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5"><p className="text-[13px] text-[#9A9590] leading-relaxed">{f.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] py-[80px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="section-tag mb-4 block">Get Started</span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Register Your Costa Rica Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Fill in the form and our specialists will contact you to discuss your offshore structure, legal form, and registration timeline.</p>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Business Activity" value={form.activity} onChange={e => setForm({ ...form, activity: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="New or Ready-Made?" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <textarea placeholder="Describe your goals — trading, holding, tax optimization..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} className="w-full bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors resize-none mb-5" />
            <button className="btn-primary">Register Costa Rica Company →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostaRicaOffPage;
