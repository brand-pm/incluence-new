import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

const FAQS = [
  { q: 'What is the minimum share capital required for a Cyprus company?', a: 'The standard minimum is €1, but most choose €1,000 for flexibility.' },
  { q: 'How long does it take to register an offshore company in Cyprus?', a: 'Incorporation usually takes 7–10 business days, depending on name approval and documentation.' },
  { q: 'Is a local director required for a Cyprus offshore company?', a: 'Not mandatory, but strongly recommended to strengthen tax residency and access Cyprus tax benefits.' },
  { q: 'What are the corporate tax rates in Cyprus for offshore companies?', a: 'The standard corporate tax rate is 12.5%, one of the lowest in the EU.' },
  { q: 'Can I open a bank account in Cyprus remotely for my company?', a: 'Yes, many banks allow remote procedures, provided documents and KYC checks are properly prepared.' },
  { q: 'Is Cyprus considered an offshore jurisdiction by the OECD?', a: 'No, Cyprus is a fully compliant European Union member with a reputable jurisdiction.' },
  { q: 'Can a non-resident be a shareholder in a Cyprus company?', a: 'Absolutely — offshore registration in Cyprus allows 100% foreign ownership.' },
];

const STEPS = [
  { num: '01', title: 'Company Name Approval', body: 'Submit a unique company name for review by the Cyprus Registrar of Companies.' },
  { num: '02', title: 'Document Preparation', body: 'Drafting of the Memorandum and Articles of Association and all other required legal documents. Full responsibility for preparation and compliance with Cypriot law.' },
  { num: '03', title: 'Submission & Incorporation', body: 'Filing documents with the Registrar and paying relevant government fees.' },
  { num: '04', title: 'Appoint Directors & Secretary', body: 'At least one director and one secretary required. Nominee services available for directors, shareholders, and secretary.' },
  { num: '05', title: 'Registered Office', body: 'Every company must maintain a registered office address in Cyprus. We provide this as part of the service.' },
  { num: '06', title: 'Certificate of Incorporation', body: 'Official confirmation issued, usually within 7–10 business days. Company fully incorporated and operational.' },
];

const CyprusOffPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', company: '', activity: '', ipbox: '', details: '' });
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);
  const s6 = useRef<HTMLDivElement>(null);

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
    document.title = 'Cyprus Offshore Company Formation — EU Jurisdiction | Incluence';
    setMeta('description', 'Register an offshore company in Cyprus. 12.5% corp tax, 60+ double tax treaties, IP BOX 2.5%, EU member. 7–10 business days. Incluence full support.');
    setMeta('keywords', 'Cyprus offshore company, Cyprus company formation, Cyprus offshore, register company Cyprus, Cyprus 12.5 tax');
    setProp('og:title', 'Cyprus Offshore Company Formation — EU Jurisdiction | Incluence');
    setProp('og:description', 'Register an offshore company in Cyprus. 12.5% corp tax, 60+ double tax treaties, IP BOX 2.5%, EU member.');
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = 'https://incluence.com/cyprus-offshore-company-formation';
    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'cy-off-schema';
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Cyprus Offshore Company Formation', provider: { '@type': 'Organization', name: 'Incluence' } });
    document.head.appendChild(schema);
    return () => { const s = document.getElementById('cy-off-schema'); if (s) s.remove(); };
  }, []);

  const FACTS = [
    { val: '12.5%', label: 'Corporate Tax', color: 'text-[#22c55e]' },
    { val: '60+', label: 'DTT Countries', color: 'text-[#22c55e]' },
    { val: '2.5%', label: 'IP BOX Rate', color: 'text-[#444CE7]' },
    { val: '7–10 days', label: 'Incorporation', color: '' },
    { val: 'EU Member', label: 'Jurisdiction', color: 'text-[#444CE7]' },
  ];

  const BENEFITS = [
    { title: 'EU Membership', body: 'Cyprus is a fully compliant EU jurisdiction — ideal for international business setup and EU company registration. Not on any blacklist.' },
    { title: '12.5% Corporate Tax', body: 'One of the lowest corporate tax rates in the EU. Applies to worldwide income for tax-resident companies.' },
    { title: '60+ Double Taxation Treaties', body: 'Over 60 DTTs offer protection against dual taxation — including UK, Germany, India, and China. Optimize international structures and reduce tax leakage.' },
    { title: 'No Withholding Tax', body: 'No withholding tax on dividends, royalties, and interest paid to non-residents.' },
    { title: 'IP BOX Regime', body: 'Profits from qualifying intellectual property enjoy an effective tax rate of just 2.5% — one of the most competitive IP regimes in Europe.' },
    { title: 'Asset Protection', body: 'Offshore company formation in Cyprus ensures confidentiality and safeguards global assets. Beneficial owners disclosed to authorities, not public.' },
  ];

  const TAX_ITEMS = [
    { title: 'Corporate Tax', body: '12.5% on worldwide income for tax-resident companies.' },
    { title: 'VAT', body: '19% standard. Reduced rates: 9% and 5% on specific goods/services.' },
    { title: 'Withholding Tax', body: 'None on dividends, interest, or royalties paid to non-residents.' },
    { title: 'IP BOX', body: 'Qualifying IP profits at 2.5% effective rate.' },
    { title: 'Tax Residency', body: 'Company is a Cypriot tax resident if management and control are exercised in Cyprus.' },
    { title: 'DTTs', body: '60+ countries — UK, Germany, India, China and more.' },
  ];

  const BANK_ITEMS = [
    { title: 'Multi-Currency', body: 'Operate in EUR, USD, GBP, and other major currencies for international trade.' },
    { title: 'EU Banking', body: 'Benefit from the transparency and oversight of EU member banking system.' },
    { title: 'Digital Tools', body: 'Secure online banking, mobile access, instant SWIFT/SEPA transfers.' },
    { title: 'Remote Opening', body: 'Remote account opening is possible in many Cypriot banks — no physical presence required.' },
    { title: 'Enhanced Reputation', body: "A Cyprus bank account strengthens your company's international profile." },
    { title: 'Compliance Guidance', body: 'We guide you through due diligence, document preparation, and bank selection.' },
  ];

  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Breadcrumb */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-12">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link><span>/</span>
          <span className="text-[#9A9590]">Cyprus</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#080808] py-[88px] px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-dots opacity-60" />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="section-tag mb-4 block">Offshore Formation</span>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {['EU Member', '12.5% Tax', '60+ DTTs'].map(t => (
              <span key={t} className="text-[11px] text-[#9A9590] border border-white/[0.06] px-3 py-1 uppercase tracking-[0.08em]">{t}</span>
            ))}
          </div>
          <h1 className="text-[clamp(38px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.1] mb-6 max-w-[640px]">
            <span className="bg-gradient-to-r from-[#444CE7] to-[#818CF8] bg-clip-text text-transparent">Cyprus</span> Offshore<br />Company Formation
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Cyprus offshore company registration is popular among international investors due to its strategic location, solid legal foundation, and low taxation. As a fully compliant EU jurisdiction, Cyprus offers 12.5% corporate tax, over 60 double taxation treaties, no withholding tax on dividends to non-residents, and an IP BOX regime at 2.5% effective rate.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Register Cyprus Company →</Link>
            <button className="btn-secondary" onClick={() => document.getElementById('tax')?.scrollIntoView({ behavior: 'smooth' })}>View Tax Details</button>
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

      {/* Section 2 — Benefits */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Cyprus Offshore Benefits</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-10">Why Register an Offshore Company in Cyprus</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {BENEFITS.map((a, i) => (
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

      {/* Section 3 — Tax Regime */}
      <section id="tax" className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Tax System</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Cyprus Offshore Company Tax Regime</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">One of the primary drivers of offshore company formation in Cyprus is its efficient and transparent tax system.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {TAX_ITEMS.map((t, i) => (
              <div key={i} className="bg-[#111111] p-6 group relative overflow-hidden service-card">
                <div className="scan-line" />
                <h3 className="text-[13px] font-semibold text-[#F0EBE0] mb-2">{t.title}</h3>
                <p className="text-[12px] text-[#9A9590] leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Process */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Process</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Cyprus Offshore Company Formation Process</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-relaxed">Setting up your offshore company in Cyprus is straightforward with Incluence. Full compliance with Cypriot regulations, AML requirements, and EU standards. 7–10 business days.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] relative z-10">
              {STEPS.map((st, i) => (
                <div key={i} ref={[s1, s2, s3, s4, s5, s6][i]} data-step={st.num} className="bg-[#0d0d0d] p-6 group relative overflow-hidden service-card">
                  <div className="scan-line" />
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3 block">{st.num}</span>
                  <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-2">{st.title}</h3>
                  <p className="text-[12px] text-[#9A9590] leading-relaxed">{st.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Requirements */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-4 block">Required Documents</span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-6">Documents for Cyprus Offshore Formation</h2>
            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">For Individual Shareholders/Directors</h3>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3 mb-8">
              {['Passport copies of shareholders and directors', 'Proof of residential address (utility bill or recent bank statement)', 'Bank reference letter', 'CV outlining professional background', 'Proof of Source of Funds — bank statements, income declarations, or tax returns'].map((d, i) => (
                <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{d}</span></div>
              ))}
            </div>
            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">For Corporate Shareholders/Directors</h3>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {['Certificate of Incorporation', 'Memorandum & Articles of Association', 'Certificate of Shareholders, Directors, and Registered Office', 'Good Standing Certificate (if applicable)', 'Financial records showing source of company funds'].map((d, i) => (
                <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{d}</span></div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className="absolute top-3 right-3 w-2 h-2"><div className="w-full h-full bg-[#444CE7] opacity-80" /><div className="absolute inset-0 border border-[#444CE7]/30 jurisdiction-pulse-ring" /></div>
              <span className="section-tag mb-4 block">Annual Obligations</span>
              <p className="text-[13px] font-semibold text-[#F0EBE0] mb-4">Ongoing Compliance</p>
              <div className="space-y-3">
                {['Annual Returns — filed with Registrar of Companies', 'Audited Financial Statements — mandatory under Cypriot law', 'Tax Filings — corporate tax submissions, possible VAT registration', 'Substance & AML Obligations'].map((s, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[12px] text-[#9A9590]">{s}</span></div>
                ))}
              </div>
              <p className="text-[11px] text-[#5A5550] mt-4 italic">Resident director/secretary often recommended to strengthen tax residency and access Cyprus tax benefits.</p>
              <Link to="/contact" className="btn-primary w-full text-center block mt-6">Register Cyprus Company →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Bank Account */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Banking</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Opening a Cyprus Offshore Bank Account</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">A crucial element of Cyprus offshore company formation. Without it, your company will lack operational capacity and tax residency support.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {BANK_ITEMS.map((b, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden service-card">
                <div className="scan-line" />
                <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-2">{b.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ */}
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
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Register Your Cyprus Offshore Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Fill in the form and our specialists will contact you to discuss your company structure, tax optimization, and registration timeline.</p>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Business Activity" value={form.activity} onChange={e => setForm({ ...form, activity: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="IP BOX Regime Needed?" value={form.ipbox} onChange={e => setForm({ ...form, ipbox: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <textarea placeholder="Describe your goals — trading, holding, IP management, asset protection..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} className="w-full bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors resize-none mb-5" />
            <button className="btn-primary">Register Cyprus Company →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyprusOffPage;
