import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Check } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return val;
}

const FAQS = [
  { q: 'Can a foreigner own 100% of a company in Panama?', a: 'Yes, Panama allows 100% foreign ownership in most business sectors.' },
  { q: 'How long does it take to register a company in Panama?', a: 'Typically, 3 to 5 business days, assuming all documents are in order.' },
  { q: 'Do I need to be in Panama to register a company?', a: 'No, the process can be completed remotely via a registered agent.' },
  { q: 'What is the minimum capital requirement to start a company in Panama?', a: 'There is no legal minimum; USD 1 paid-up capital is sufficient.' },
  { q: 'What is a Company Secretary and why do I need one?', a: "Panama doesn't mandate it, but having a local representative ensures proper legal compliance." },
  { q: 'How much does it cost to register a company in Panama?', a: 'Government and professional fees typically start from 1500 euro.' },
  { q: 'What documents are required for a foreigner to register a company?', a: 'Passport copy, proof of address, Articles of Incorporation, and director/shareholder details.' },
  { q: 'Can I open a corporate bank account in Panama as a non-resident?', a: 'Yes, but it may require in-person visits and strict due diligence. We can assist.' },
];

const STEPS = [
  { num: '01', title: 'Name Application & Reservation', body: 'We assist in selecting a unique company name, ensure it ends with "S.A." or "Inc.", submit the name reservation to the Public Registry of Panama, and confirm availability.' },
  { num: '02', title: 'Document Preparation', body: 'Our legal specialists prepare the company registration form, Articles of Incorporation, director and shareholder details, company bylaws, registered office address, and nominee services if required.' },
  { num: '03', title: 'Submission to Public Registry', body: 'We file all documentation with the Panama Public Registry, coordinate through local attorneys, and ensure accuracy through our dedicated Company Secretary.' },
  { num: '04', title: 'Certificate of Incorporation', body: 'Once approved, we obtain the official Certificate of Incorporation on your behalf. We then assist with business license and corporate bank account opening.' },
];

const PanamaOffPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', type: '', activity: '', bank: '', details: '' });
  const c1 = useCounter(1500);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);

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
    document.title = 'Panama Company Formation — Offshore Registration | Incluence';
    setMeta('description', 'Register a company in Panama. Territorial taxation, 100% foreign ownership, S.A. or Foundation, no min. capital. 3–5 business days. From €1,500. Incluence.');
    setMeta('keywords', 'Panama company formation, Panama offshore, Sociedad Anonima Panama, register company Panama, Panama SA');
    setProp('og:title', 'Panama Company Formation — Offshore Registration | Incluence');
    setProp('og:description', 'Register a company in Panama. Territorial taxation, 100% foreign ownership, S.A. or Foundation, no min. capital.');
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = 'https://incluence.com/panama-company-formation';
    const schema = document.createElement('script');
    schema.type = 'application/ld+json'; schema.id = 'panama-schema';
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: 'Panama Company Formation', provider: { '@type': 'Organization', name: 'Incluence' }, offers: { '@type': 'Offer', price: '1500', priceCurrency: 'EUR' } });
    document.head.appendChild(schema);
    return () => { const s = document.getElementById('panama-schema'); if (s) s.remove(); };
  }, []);

  const FACTS = [
    { val: '3–5 days', label: 'Registration Time', color: 'text-[#22c55e]' },
    { val: `From €${c1.toLocaleString()}`, label: 'Starting Price', color: '' },
    { val: '0%', label: 'Foreign-Source Tax', color: 'text-[#22c55e]' },
    { val: '100%', label: 'Foreign Ownership', color: 'text-[#22c55e]' },
    { val: 'Remote', label: 'Fully Remote Process', color: 'text-[#22c55e]' },
  ];

  const REQUIREMENTS = [
    { title: 'Shareholders', body: 'Your company needs just one shareholder, who can be an individual or a corporate entity—no local shareholder required. Want to protect your privacy? We provide nominee director services to keep your name out of the public registry while you retain full control.' },
    { title: 'Directors', body: "You'll need at least three directors, but there's no residency requirement. With our network of trusted professionals, you never need to worry about meeting these formalities—we supply everything you need." },
    { title: 'Registered Office Address', body: "A registered address in Panama is mandatory for incorporation. But don't stress about securing office space—we offer prestigious Panama City business addresses as part of our service packages." },
    { title: 'Minimum Share Capital', body: 'There is no legal minimum capital requirement. Most companies opt for an authorized capital of USD 10,000, with only USD 1 paid-up at formation. This structure provides you with flexibility and credibility without tying up your funds.' },
    { title: 'Company Secretary', body: 'While Panama does not legally require a Company Secretary, having one is a best practice—and we highly recommend it. Our local representatives ensure your company stays fully compliant year-round, handle filings, minutes, and regulatory notices.' },
    { title: 'Remote Process', body: 'Fully remote process—from incorporation to banking. Over 10 years of experience in international company formations. Multilingual support (English, Russian, Ukrainian).' },
  ];

  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Breadcrumb */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-12">
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link><span>/</span>
          <span className="text-[#9A9590]">Panama</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#080808] py-[88px] px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 grid-dots opacity-60" />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="section-tag mb-4 block">Offshore Formation</span>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {['Territorial Tax', '100% Foreign Ownership', 'From €1,500'].map(t => (
              <span key={t} className="text-[11px] text-[#9A9590] border border-white/[0.06] px-3 py-1 uppercase tracking-[0.08em]">{t}</span>
            ))}
          </div>
          <h1 className="text-[clamp(38px,5vw,64px)] font-light text-[#F0EBE0] leading-[1.1] mb-6 max-w-[640px]">
            <span className="bg-gradient-to-r from-[#444CE7] to-[#818CF8] bg-clip-text text-transparent">Panama</span> Company<br />Formation
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            Panama uses a territorial taxation system—one of the key advantages for international entrepreneurs. Only income earned within Panama is subject to local taxes. Foreign-sourced income is fully tax-exempt, even if received into a Panamanian bank account. This makes Panama a prime jurisdiction for international trading companies, holding structures, and location-independent businesses.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Start Registration →</Link>
            <button className="btn-secondary" onClick={() => document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' })}>View Packages</button>
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

      {/* Section 2 — Company Types */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Legal Structures</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Types of Companies in Panama</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">Foreign investors in Panama have several entity options to choose from, each with its unique benefits and requirements. Selecting the appropriate structure is a critical first step in ensuring your business complies with local laws while maximizing efficiency and profitability.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {/* S.A. */}
            <div className="bg-[#0d0d0d] p-8 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#444CE7]/30" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#444CE7]/0 group-hover:bg-[#444CE7]/40 transition-colors" />
              <span className="text-[10px] text-[#444CE7] border border-[#444CE7]/30 px-2 py-0.5 mb-3 inline-block uppercase tracking-[0.08em]">Most Popular</span>
              <h3 className="text-[18px] font-semibold text-[#F0EBE0] mb-3">Private Limited Company (Sociedad Anónima)</h3>
              <p className="text-[13px] text-[#9A9590] leading-[1.85]">The most common structure in Panama for both local and foreign investors. This entity offers limited liability for shareholders, a separate legal personality, no restrictions on foreign ownership, minimum of three directors (can be foreigners), minimum of one shareholder, and flexibility in business activities. It is the preferred choice for startups, SMEs, and international entrepreneurs.</p>
            </div>
            {/* Foundation */}
            <div className="bg-[#0d0d0d] p-8 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#444CE7]/30" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#444CE7]/0 group-hover:bg-[#444CE7]/40 transition-colors" />
              <h3 className="text-[18px] font-semibold text-[#F0EBE0] mb-3">Panama Foundation</h3>
              <p className="text-[13px] text-[#9A9590] leading-[1.85]">A popular offshore structure for asset protection, estate planning, and wealth management. While not a trading company, a Panama Foundation can own shares, real estate, and intellectual property. Benefits include no shareholders required, high level of confidentiality, no local taxation on foreign-sourced income, flexible structure managed by a Council. Ideal for holding and family office structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Tax */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-4 block">Taxation</span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-6">Panama's Territorial Tax System</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">Panama uses a territorial taxation system—one of the key advantages for international entrepreneurs. What does this mean for your business? Only income earned within Panama is subject to local taxes. Foreign-sourced income is fully tax-exempt, even if received into a Panamanian bank account.</p>
            <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">This makes Panama a prime jurisdiction for international trading companies, holding structures, and location-independent businesses. However, if your company conducts business within Panama, you will be required to file annual corporate tax returns, pay corporate tax on local income (currently 25%), and maintain proper accounting records. We provide full tax advisory and annual compliance services to keep your company fully compliant.</p>
            <div className="bg-[#080808] border border-white/[0.06] p-6 mt-2">
              <p className="text-[13px] font-semibold text-[#F0EBE0] mb-3">Our Additional Offerings</p>
              <div className="space-y-2">
                {['Virtual Office Services — Panama City address with mail forwarding', 'Accounting and Tax Filing — monthly bookkeeping, payroll, annual reports', 'Immigration Support — business visas, work permits, permanent residency', 'Legal Advisory — contracts, compliance reviews, restructuring strategies'].map((s, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[12px] text-[#9A9590]">{s}</span></div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden service-card">
              <div className="scan-line" />
              <div className="absolute top-3 right-3 w-2 h-2"><div className="w-full h-full bg-[#444CE7] opacity-80" /><div className="absolute inset-0 border border-[#444CE7]/30 jurisdiction-pulse-ring" /></div>
              <span className="section-tag mb-4 block">Pricing Overview</span>
              <p className="text-[13px] font-semibold text-[#F0EBE0] mb-4">Incorporation from €1,500 includes:</p>
              <div className="space-y-2">
                {['Official Panama Government Registration Fees', 'Registered Office Address — 1 year', 'Registered Agent services — 1 year', 'Articles of Incorporation', 'First Board Resolution (First Minutes)', 'Share Register Form', 'Official Share Certificates'].map((s, i) => (
                  <div key={i} className="flex items-start gap-3"><Check className="w-3.5 h-3.5 text-[#22c55e] mt-0.5 flex-shrink-0" /><span className="text-[12px] text-[#9A9590]">{s}</span></div>
                ))}
              </div>
              <p className="text-[11px] text-[#5A5550] mt-4 italic">Final pricing based on your structure, required services, and any add-ons.</p>
              <Link to="/contact" className="btn-primary w-full text-center block mt-6">Get a Personalized Quote →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Requirements */}
      <section id="requirements" className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Requirements</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Requirements for Panama Company Formation</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">Setting up your company in Panama is more than just ticking boxes—it's about establishing a strong and fully compliant foundation for your future success. We handle every aspect of the process, ensuring that all legal and regulatory requirements are seamlessly met on your behalf.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {REQUIREMENTS.map((r, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden service-card">
                <div className="scan-line" />
                <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-2">{r.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Process */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Process</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Step-by-Step Panama Company Formation</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-relaxed">Our team handles every aspect professionally. 3–5 business days when all documents are in order.</p>
          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)] relative z-10">
              {STEPS.map((st, i) => (
                <div key={i} ref={[s1, s2, s3, s4][i]} data-step={st.num} className="bg-[#111111] p-6 group relative overflow-hidden service-card">
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

      {/* Section 6 — Bank Account */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-4 block">Banking</span>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Opening a Corporate Bank Account in Panama</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">Opening a corporate bank account in Panama can be a highly strategic move—but it requires careful navigation of compliance requirements. We simplify the process for you, working directly with trusted banking institutions and guiding you from start to finish.</p>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-5">Please note: Many banks in Panama still require a personal visit from at least one director or shareholder. We will advise on the best options based on your location and structure. With our local experience and strong relationships with financial institutions, your account opening process becomes smooth, fast, and predictable.</p>
              <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Documents Required</h3>
              <div className="space-y-2">
                {['Passport copies and proof of address for directors and shareholders, UBO', 'Certificate of Incorporation and company documents', 'Business plan or a description of activities', 'Source of funds'].map((d, i) => (
                  <div key={i} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[13px] text-[#9A9590]">{d}</span></div>
                ))}
              </div>
            </div>
            <div className="col-span-5">
              <div className="bg-[#080808] border border-white/[0.06] p-7 group relative overflow-hidden service-card">
                <div className="scan-line" />
                <span className="section-tag mb-2 block">Bank Account Service</span>
                <p className="text-[18px] font-light text-[#F0EBE0] mb-2">From €3,000</p>
                <p className="text-[13px] text-[#9A9590] leading-relaxed mb-4">Our bank account assistance service starts from €3,000 and includes end-to-end coordination with the selected Panamanian bank, preparation and pre-approval of all required documents, KYC support and compliance guidance, scheduling of bank meetings or remote onboarding (where available).</p>
                <Link to="/contact" className="btn-primary w-full text-center block mt-4">Get Bank Account Support →</Link>
              </div>
            </div>
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
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-light text-[#F0EBE0] mb-4">Register Your Panama Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Fill in the form and our specialists will contact you to discuss your company structure, legal form, and registration timeline.</p>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Company Type (S.A./Foundation)" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Business Activity" value={form.activity} onChange={e => setForm({ ...form, activity: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
              <input type="text" placeholder="Bank Account Needed?" value={form.bank} onChange={e => setForm({ ...form, bank: e.target.value })} className="bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors" />
            </div>
            <textarea placeholder="Describe your goals — trading, holding, asset protection..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} rows={4} className="w-full bg-[rgba(255,255,255,0.04)] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] outline-none focus:border-[#444CE7]/40 transition-colors resize-none mb-5" />
            <button className="btn-primary">Start Registration →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PanamaOffPage;
