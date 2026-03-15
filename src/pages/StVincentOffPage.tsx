import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

const FAQS = [
  { q: 'How much does it cost to register an offshore company in St. Vincent and the Grenadines?', a: 'Various factors affect the final cost. Contact our specialists to find out the exact cost of registering a company in St. Vincent and the Grenadines.' },
  { q: 'Is it possible to register an offshore in St. Vincent and the Grenadines online?', a: 'Offshore in Saint Vincent and the Grenadines can be registered remotely through a local representative.' },
  { q: 'What documents are required to register an offshore company in St. Vincent and the Grenadines?', a: 'Copies of passports and confirmation of the address of company participants, as well as two letters of recommendation. Additionally, completed registration forms including information on the source of funds for the creation of the company.' },
  { q: 'What is the timeline for opening an offshore in St. Vincent and the Grenadines?', a: 'Registration of a company in Saint Vincent and the Grenadines can be completed in 2 weeks if all documents are prepared and payment is made in advance.' },
];

const StVincentOffPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    document.title = 'Offshore Company Formation in St Vincent & Grenadines | Incluence';
    setMeta('description', 'Register an offshore company in Saint Vincent and the Grenadines. Favorable taxation for non-residents, loyal legislation. 2 weeks. Remote registration. Incluence.');
    setMeta('keywords', 'St Vincent offshore, Saint Vincent Grenadines company, offshore SVG, SVG company formation');
    setProp('og:title', 'Offshore Company Formation in St Vincent & Grenadines | Incluence');
    setProp('og:description', 'Register an offshore company in Saint Vincent and the Grenadines. Favorable taxation for non-residents, loyal legislation.');
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = 'https://incluence.com/offshore-company-formation-in-st-vincent-and-the-grenadines';
    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'svg-off-schema';
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Offshore Company St Vincent and Grenadines', provider: { '@type': 'Organization', name: 'Incluence' } });
    document.head.appendChild(schema);
    return () => { const s = document.getElementById('svg-off-schema'); if (s) s.remove(); };
  }, []);

  const FACTS = [
    { val: '2 weeks', label: 'Registration Time', color: 'text-[#22c55e]' },
    { val: 'Favorable Tax', label: 'For Non-Residents', color: 'text-[#444CE7]' },
    { val: 'Caribbean', label: 'Jurisdiction', color: '' },
    { val: 'Remote', label: 'Process', color: 'text-[#22c55e]' },
  ];

  const ADVANTAGES = [
    { title: 'Favorable Taxation for Non-Residents', body: 'Attractive tax conditions specifically designed for non-resident entrepreneurs — one of the key reasons why international business owners choose this Caribbean jurisdiction.' },
    { title: 'Loyal Legislation', body: 'The legislation of St Vincent and the Grenadines is designed with a loyal attitude toward international businesses and foreign investors.' },
    { title: 'Additional International Business Features', body: 'Special features related to international business activities that make the jurisdiction attractive for trading, holding, and offshore operations.' },
    { title: '2-Week Registration', body: 'Company registration can be completed in 2 weeks when all documents are prepared and payment is made in advance.' },
    { title: 'Remote Registration', body: 'The offshore company can be registered remotely through a local representative. No personal visit to the islands required.' },
    { title: 'Caribbean Stability', body: 'Saint Vincent and the Grenadines is an independent, stable Caribbean state — providing a reliable legal framework for offshore business structures.' },
  ];

  const KEY_FACTS = [
    { label: 'Jurisdiction', value: 'St Vincent & Grenadines', color: '' },
    { label: 'Location', value: 'Caribbean Islands', color: '' },
    { label: 'Taxation', value: 'Favorable for non-residents', color: 'text-[#22c55e]' },
    { label: 'Legislation', value: 'Loyal to foreign businesses', color: 'text-[#22c55e]' },
    { label: 'Timeline', value: '2 weeks', color: 'text-[#22c55e]' },
    { label: 'Registration', value: 'Remote via local rep', color: 'text-[#22c55e]' },
    { label: 'Rec. letters', value: '2 required', color: '' },
  ];

  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Breadcrumb */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-12">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link><span>/</span>
          <span className="text-[#9A9590]">St Vincent & Grenadines</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#080808] py-[88px] px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-dots opacity-60" />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="section-tag mb-4 block">Offshore Registration</span>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {['Caribbean', 'Favorable Tax', '2 Weeks'].map(t => (
              <span key={t} className="text-[11px] text-[#9A9590] border border-white/[0.06] px-3 py-1 uppercase tracking-[0.08em]">{t}</span>
            ))}
          </div>
          <h1 className="text-[clamp(38px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.1] mb-6 max-w-[640px]">
            Offshore Company<br /><span className="bg-gradient-to-r from-[#444CE7] to-[#818CF8] bg-clip-text text-transparent">St Vincent & Grenadines</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Saint Vincent and the Grenadines is an independent state in the Caribbean islands. It attracts business people with favorable taxation for non-residents, loyal legislation, and additional features related to international business activities. Company registration can be completed in 2 weeks.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Register Company →</Link>
            <button className="btn-secondary" onClick={() => document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' })}>View Requirements</button>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
          {FACTS.map((f, i) => (
            <div key={i} className="bg-[#080808] p-7 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className={`text-[22px] font-light mb-1 ${f.color || 'text-[#F0EBE0]'}`}>{f.val}</div>
              <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — Advantages */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Why St Vincent</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-10">St Vincent & Grenadines: Key Advantages</h2>
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

      {/* Section 3 — Requirements */}
      <section id="requirements" className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-4 block">Requirements</span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Documents Required for Registration</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-relaxed">The following documents are required to register an offshore company in Saint Vincent and the Grenadines.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {['Copies of passports of all company participants', 'Confirmation of address of all company participants', 'Two letters of recommendation', 'Completed registration forms', 'Information on the source of funds for company creation'].map((d, i) => (
                <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590] leading-relaxed">{d}</span></div>
              ))}
            </div>
            <p className="text-[13px] text-[#9A9590] leading-relaxed mt-6">This is the basic list. Additional documents may be requested depending on the company type and planned activities. Our specialists will provide the full list specific to your structure.</p>
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
                <Link to="/contact" className="btn-primary w-full text-center block">Register Your Company →</Link>
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
        <div className="max-w-screen-xl mx-auto max-w-[640px] text-center">
          <span className="section-tag mb-4 block">Get Started</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Register Your St Vincent Company</h2>
          <p className="text-[14px] text-[#9A9590] leading-relaxed mb-8">Contact our specialists to discuss your offshore structure and registration timeline.</p>
          <Link to="/contact" className="btn-primary">Register Your Company →</Link>
        </div>
      </section>
    </div>
  );
};

export default StVincentOffPage;
