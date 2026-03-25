import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

const DOT_GRID: React.CSSProperties = { backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" };
const SCAN = "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[rgba(68,76,231,0.04)] before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700";
const CORNER = "after:absolute after:top-0 after:left-0 after:w-4 after:h-4 after:border-t after:border-l after:border-[#444CE7]/30 after:pointer-events-none";

const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };

const FAQS = [
  { q: "How much does company registration in the Cayman Islands cost?", a: "The final cost of company registration in the Cayman Islands depends on various factors. To get the exact cost, please contact our specialists." },
  { q: "Can an offshore company in the Cayman Islands be registered online?", a: "An offshore company in the Cayman Islands can be registered remotely through a local representative." },
  { q: "What documents are required to register a company in the Cayman Islands?", a: "To register a company in the Cayman Islands, you need to provide copies of passports and proof of address of the company participants, as well as recommendation letters." },
  { q: "Where to open an offshore account in the Cayman Islands?", a: "We select banks based on the company's country of registration, residency of beneficiaries and directors, planned turnover, required currencies, and payment regions. Bank reputation and tariffs are also taken into account. For the most suitable option for your company, please contact our specialists." },
];

const CaymanPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Offshore in the Cayman Islands — Company Registration | Incluence";
    setMeta("description", "Register an offshore company in the Cayman Islands. Zero tax, 20-year tax exemption certificate, bearer shares, no reporting. 2–3 weeks. Incluence.");
    setMeta("keywords", "Cayman Islands offshore, Cayman company registration, offshore Cayman, Cayman Islands company, Exempt Company Cayman");
    setProp("og:title", document.title);
    setProp("og:description", "Register an offshore company in the Cayman Islands. Zero tax, 20-year tax exemption certificate, bearer shares, no reporting. 2–3 weeks. Incluence.");
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/offshore-in-the-cayman-islands";
    const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.id = "cayman-schema";
    sc.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Offshore Company Cayman Islands", provider: { "@type": "Organization", name: "Incluence" } });
    document.head.appendChild(sc);
    return () => { document.getElementById("cayman-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link><span>/</span>
          <span className="text-[#9A9590]">Cayman Islands</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[300px] h-[340px] pointer-events-none z-[2]">
          <svg viewBox="0 0 200 220" fill="none" className="w-full h-full">
            <path d="M28 105 L72 88 L125 85 L158 95 L162 112 L148 128 L105 135 L65 132 L32 120 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1"/>
            <path d="M145 62 L175 58 L180 70 L168 76 L142 72 Z" fill="#141822" stroke="rgba(240,235,224,0.10)" strokeWidth="0.8"/>
            <path d="M108 52 L138 48 L140 58 L110 62 Z" fill="#141822" stroke="rgba(240,235,224,0.09)" strokeWidth="0.7"/>
            <circle cx="68" cy="110" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="68" cy="110" r="3" fill="#444CE7"/>
            <text x="72" y="122" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">George Town</text>
            <text x="73" y="130" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">Capital</text>
            <text x="100" y="162" fontSize="26" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">KY</text>
            <line x1="68" y1="105" x2="68" y2="28" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5"/>
            <text x="72" y="24" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">20yr Tax Exemption</text>
          </svg>
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-tag">— Offshore Registration</span>
            <span className="text-[11px] text-[#5A5550] tracking-[0.08em] uppercase">Zero Tax · 20yr Exemption · Funds Hub</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6 max-w-[640px]" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            Offshore in the<br /><span className="bg-gradient-to-r from-[#444CE7] to-[#6366f1] bg-clip-text text-transparent">Cayman Islands</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            The Cayman Islands are an offshore jurisdiction where tens of thousands of companies are registered. Companies are exempt from corporate income and capital gains taxes — and can obtain a tax exemption certificate valid for up to 20 years. A well-developed banking sector and unique investment fund opportunities.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary">Register Cayman Company →</Link>
            <a href="#requirements" className="border border-white/[0.08] text-[#9A9590] text-[13px] px-6 py-3 hover:border-white/[0.15] transition-colors">View Requirements</a>
          </div>
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
            {[["0%","Corporate Tax","text-[#22c55e]"],["20 years","Tax Exemption Certificate","text-[#444CE7]"],["2–3 weeks","Registration",""],["$1 USD","Min. Share Capital","text-[#22c55e]"],["Remote","Process","text-[#22c55e]"]].map(([v,l,c],i)=>(
              <div key={i} className={`bg-[#080808] p-6 group relative overflow-hidden ${SCAN}`}><p className={`text-[22px] font-semibold mb-1 ${c||"text-[#F0EBE0]"}`}>{v}</p><p className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — ADVANTAGES */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— Advantages</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Cayman Islands: Why Entrepreneurs Choose This Jurisdiction</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">The Cayman Islands are popular among entrepreneurs for several reasons.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {[
              ["Zero Tax","Companies are exempt from corporate income and capital gains taxes. Legal entities can obtain a tax exemption certificate valid for up to 20 years. This benefit is available to firms registered as an Exempt Company."],
              ["Bearer Shares Allowed","Bearer shares are allowed in the Cayman Islands — providing an additional layer of confidentiality for company ownership structures."],
              ["No Currency Control","No currency control. Complete freedom to manage funds in any currency without restrictions or reporting requirements."],
              ["High Confidentiality","Closed register of directors and shareholders. High confidentiality — company ownership information is not publicly accessible."],
              ["Investment Funds","Possibility to register investment companies and funds — one of the world's most popular jurisdictions for hedge funds and private equity structures."],
              ["No Financial Reporting","No financial reporting requirements for Exempt Companies. Minimal administrative burden for registered offshore entities."],
            ].map(([t,b],i)=>(
              <div key={i} className={`bg-[#0d0d0d] p-7 group relative overflow-hidden ${CORNER} ${SCAN}`}><h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{t}</h3><p className="text-[13px] text-[#9A9590] leading-relaxed">{b}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TAX EXEMPTION */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-3 block">— Tax Exemption</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-6">20-Year Tax Exemption Certificate</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">
              One of the main advantages of offshore registration in the Cayman Islands is the complete absence of taxation. Moreover, legal entities can obtain a tax exemption certificate valid for up to 20 years. This benefit is available to firms registered as an Exempt Company.
            </p>
            <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-6">
              To qualify for tax exemption, companies must meet two conditions: they must not generate income from sources within the Cayman Islands, and they must not be owned by Cayman Islands residents.
            </p>
            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Annual Government Fee</h3>
            <div className="bg-[#080808] border border-white/[0.06] p-6">
              <table className="w-full text-[13px]">
                <thead><tr className="bg-[#111111] text-[#5A5550] uppercase text-[10px] tracking-[0.08em]"><th className="text-left p-3">Share Capital</th><th className="text-left p-3">Annual Fee</th></tr></thead>
                <tbody className="text-[#9A9590]">
                  <tr className="border-t border-white/[0.04]"><td className="p-3">Up to CI$ 50,000</td><td className="p-3">CI$ 510</td></tr>
                  <tr className="border-t border-white/[0.04]"><td className="p-3">CI$ 40,000 – CI$ 1,700,000</td><td className="p-3">CI$ 574</td></tr>
                  <tr className="border-t border-white/[0.04]"><td className="p-3">Over CI$ 1,700,000</td><td className="p-3">CI$ 1,435</td></tr>
                </tbody>
              </table>
              <p className="text-[11px] text-[#5A5550] mt-3">All amounts in Cayman Islands dollars (KYD / CI$)</p>
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <div className={SCAN} />
              <div className="absolute top-3 right-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22c55e]" /><span className="w-1.5 h-1.5 bg-[#22c55e] animate-ping absolute right-0" /></div>
              <span className="section-tag mb-4 block">— Restrictions</span>
              <p className="text-[13px] font-semibold text-[#f59e0b] mb-4">Offshore Restrictions to Note</p>
              <div className="space-y-3">
                {["Cannot borrow from Cayman residents","Cannot trade within the Cayman Islands","Cannot purchase real estate (leasing is permitted)","Banking, finance, and insurance require special licenses"].map((t,i)=>(
                  <div key={i} className="flex items-start gap-3"><span className="text-[#ef4444] text-[12px] mt-0.5">✕</span><span className="text-[13px] text-[#9A9590]">{t}</span></div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="btn-primary w-full text-center block">Register Cayman Company →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — REQUIREMENTS */}
      <section id="requirements" className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— Requirements</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">What Is Required for Cayman Registration</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[540px] leading-relaxed">Remote registration is available through a local representative. Documents required at minimum:</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {[
              "Company registration application — specify desired name and type of business. Information about directors and shareholders: country and address of residence, citizenship required.",
              "Notarized copy of international passport — the page with photo and signature. Proof of residential address (utility bill not older than 3 months).",
              "At least one director and one shareholder. Both individuals and legal entities can serve as directors. Minimum share capital USD 1; standard is USD 50,000.",
              "Letters of recommendation for principals. This is a basic list — additional documents may be required depending on your specific situation.",
            ].map((t,i)=>(
              <div key={i} className={`bg-[#0d0d0d] p-7 group relative overflow-hidden ${SCAN}`}>
                <div className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" /><span className="text-[14px] text-[#9A9590] leading-[1.85]">{t}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Steps to Register a Cayman Offshore</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[480px] leading-relaxed">2–3 weeks average. All steps handled by our specialists — including name availability checks, document preparation, and Registry submission.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {[
              ["01","Choose Company Name","Prepare several options. Our specialists check availability promptly. Having three names speeds up the process."],
              ["02","Document Preparation","Personal documents, proof of address, recommendation letters. Exact list provided by our experts."],
              ["03","Submit to Registry","Registration forms must be accurate — inconsistencies lead to rejection. Our specialists handle submission."],
              ["04","Receive Confirmation","Registration confirmation issued. Seals and certified copies can be ordered if needed."],
            ].map(([n,t,b],i)=>(
              <div key={i} className={`bg-[#111111] p-6 group relative overflow-hidden ${SCAN}`}>
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-3 block">{n}</span>
                <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-2">{t}</h3>
                <p className="text-[12px] text-[#9A9590] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] divide-y divide-white/[0.06]">
            {FAQS.map((f,i)=>(
              <div key={i}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full flex items-center justify-between py-5 text-left group"><span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{f.q}</span><ChevronDown className={`w-4 h-4 text-[#5A5550] transition-transform flex-shrink-0 ${openFaq===i?"rotate-180":""}`}/></button>{openFaq===i&&<p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">{f.a}</p>}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="section-tag mb-3 block">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Register Your Cayman Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Contact our specialists to begin the registration process. We handle everything from document preparation to final submission.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={e=>e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                {["Full Name","Company Name (options)","Business Activity","Shareholders Count"].map((ph,i)=>(
                  <input key={i} placeholder={ph} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors"/>
                ))}
              </div>
              <textarea rows={4} placeholder="Describe your goals — hedge fund, trading, asset holding, investment..." className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 resize-none focus:border-[#444CE7]/40 focus:outline-none transition-colors"/>
              <button type="submit" className="btn-primary">Register Cayman Company →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaymanPage;
