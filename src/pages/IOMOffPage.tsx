import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

const FAQS = [
  { q: 'How much does it cost to register a company in the Isle of Man?', a: 'The final cost of company registration in the Isle of Man depends on the type of activity, the number of participants, and other factors. You can find out the exact cost of registering a company in the Isle of Man by consulting our specialists.' },
  { q: 'Can an offshore in the Isle of Man be registered online?', a: 'An offshore in the Isle of Man can be registered remotely through local representatives.' },
  { q: 'What documents are required to register a company in the Isle of Man?', a: "To register a company in the Isle of Man, you need to provide copies of the participants' passports, proof of address, and letters of recommendation." },
  { q: 'Where to open an offshore account in the Isle of Man?', a: "We select banks based on the country of company registration, the residency of beneficiaries and directors, expected turnover, required currencies, and payment regions. The bank's reputation and fees are also considered. To find the most suitable option for your company, please contact our specialists." },
];

const IOMOffPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', company: '', activity: '', shareholders: '', details: '' });

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
    document.title = 'Offshore in the Isle of Man — Company Registration | Incluence';
    setMeta('description', 'Register an offshore company in the Isle of Man. 0% corporate tax for non-residents, no capital gains tax, no stamp duty. Annual fee ~£380. Remote registration. Incluence.');
    setMeta('keywords', 'Isle of Man offshore, Isle of Man company registration, IOM offshore, Isle of Man LLC, offshore IOM');
    setProp('og:title', 'Offshore in the Isle of Man — Company Registration | Incluence');
    setProp('og:description', 'Register an offshore company in the Isle of Man. 0% corporate tax for non-residents, no capital gains tax, no stamp duty.');
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = 'https://incluence.com/offshore-in-the-isle-of-man';
    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'iom-schema';
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Offshore Company Isle of Man', provider: { '@type': 'Organization', name: 'Incluence' } });
    document.head.appendChild(schema);
    return () => { const s = document.getElementById('iom-schema'); if (s) s.remove(); };
  }, []);

  const FACTS = [
    { val: '0%', label: 'Corp. Tax (Non-Residents)', color: 'text-[#22c55e]' },
    { val: 'No CGT', label: 'Capital Gains Tax', color: 'text-[#22c55e]' },
    { val: '~£380', label: 'Annual Gov. Fee', color: '' },
    { val: '17.5%', label: 'VAT (on EU imports)', color: '' },
    { val: 'Remote', label: 'Registration', color: '' },
  ];

  const TAX_DETAILS = [
    { title: '0% Corporate Tax (Non-Residents)', body: 'All companies registered here must pay corporate income tax. The maximum rate is 18%, but this applies only to trusts. In other cases, the corporate tax rate for non-resident legal entities is 0%.' },
    { title: 'VAT at 17.5%', body: 'VAT is charged only on the import and export of goods, and services provided by a local company in EU countries. Standard rate 17.5%.' },
    { title: 'No Capital Gains Tax', body: 'There is no capital gains or transfer tax — no additional cost on the sale of assets, shares, or other capital instruments.' },
    { title: 'No Stamp Duty', body: 'No stamp duty on company documents, share transfers, or property instruments. Reduces transactional costs significantly.' },
    { title: 'No Property/Inheritance/Gift Tax', body: 'No property tax, inheritance tax, or gift tax applicable to offshore company structures in the Isle of Man.' },
    { title: 'Annual Government Fee', body: 'All local companies are required to pay an annual government fee of approximately GBP 380 regardless of activity level.' },
  ];

  const KEY_FACTS = [
    { label: 'Corp. tax', value: '0% for non-residents', color: 'text-[#22c55e]' },
    { label: 'Trusts', value: '18% (max)', color: '' },
    { label: 'CGT', value: 'None', color: 'text-[#22c55e]' },
    { label: 'Stamp duty', value: 'None', color: 'text-[#22c55e]' },
    { label: 'Annual fee', value: '~GBP 380', color: '' },
    { label: 'Directors', value: 'Min. 2 (natural persons only)', color: 'text-[#f59e0b]' },
    { label: 'Shareholders', value: 'Min. 1', color: '' },
    { label: 'Register', value: 'Directors/shareholders public', color: 'text-[#f59e0b]' },
  ];

  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Breadcrumb */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-12">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link><span>/</span>
          <span className="text-[#9A9590]">Isle of Man</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#080808] py-[88px] px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-dots opacity-60" />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="section-tag mb-4 block">Offshore Registration</span>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {['0% Corp. Tax', 'No Capital Gains', 'Transparent'].map(t => (
              <span key={t} className="text-[11px] text-[#9A9590] border border-white/[0.06] px-3 py-1 uppercase tracking-[0.08em]">{t}</span>
            ))}
          </div>
          <h1 className="text-[clamp(38px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.1] mb-6 max-w-[640px]">
            Offshore in the<br /><span className="bg-gradient-to-r from-[#444CE7] to-[#818CF8] bg-clip-text text-transparent">Isle of Man</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Exceptional political stability, business-friendly taxation, and extensive opportunities for profitable business — all this makes the Isle of Man an attractive choice for entrepreneurs and investors. In essence, the Isle of Man is not part of the United Kingdom or the European Union, yet it provides business owners with numerous benefits. This is also due to the fact that the Isle of Man conducts its own tax policy, which is independent of the one currently in force in the UK.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Register IOM Company →</Link>
            <button className="btn-secondary" onClick={() => document.getElementById('structure')?.scrollIntoView({ behavior: 'smooth' })}>View Tax Details</button>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
          {FACTS.map((f, i) => (
            <div key={i} className="bg-[#080808] p-6 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className={`text-[22px] font-light mb-1 ${f.color || 'text-[#F0EBE0]'}`}>{f.val}</div>
              <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — Tax Details */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Taxation</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Isle of Man: Offshore Zone and Corporate Taxation</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">All companies registered in this jurisdiction are subject to certain taxation, depending on the legal form of the enterprise and several other factors. The most popular option among foreign entrepreneurs is a Limited Liability Company (LLC).</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {TAX_DETAILS.map((a, i) => (
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

      {/* Section 3 — Structure Requirements */}
      <section id="structure" className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-4 block">Company Structure</span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-6">What You Need to Know Before Registering</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">If you are interested in the Isle of Man, you can open an offshore company here only by complying with certain requirements regarding local company structures. For example, under the latest legislative changes, a company must have at least one shareholder. The management must include at least two directors, who may only be natural persons. The company structure must also include a secretary, although this position may be held by a legal entity.</p>
            <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">Please note that information about directors and shareholders is publicly available. This means third parties have free access to this data.</p>
            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Key Points</h3>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {['Company names may be in any language, provided they use Latin characters and include a translation into English', 'The founder can be either a natural or a legal person', 'There are no requirements regarding paid-up share capital', 'The company must have a registered office in the Isle of Man', 'The secretary does not need to be a resident', 'There are no requirements for preparing financial statements', 'Joint-stock companies, however, must undergo a mandatory audit and submit financial statements to the regulatory authorities'].map((d, i) => (
                <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{d}</span></div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className="absolute top-3 right-3 w-2 h-2"><div className="w-full h-full bg-[#444CE7] opacity-80" /><div className="absolute inset-0 border border-[#444CE7]/30 jurisdiction-pulse-ring" /></div>
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
                <Link to="/contact" className="btn-primary w-full text-center block">Register IOM Company →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
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
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Register Your Isle of Man Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Fill in the form and our specialists will contact you to discuss your offshore structure and registration timeline.</p>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Business Activity" value={form.activity} onChange={e => setForm({ ...form, activity: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Number of Shareholders" value={form.shareholders} onChange={e => setForm({ ...form, shareholders: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <textarea placeholder="Describe your goals — trading, holding, asset protection..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} className="w-full bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors resize-none mb-5" />
            <button className="btn-primary">Register IOM Company →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IOMOffPage;
