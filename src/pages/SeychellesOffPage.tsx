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
  { q: "How do I check the company registration in Seychelles?", a: "Statutory documents with a register mark serve as confirmation of registration. With registry access, the registration can be verified. However, the Seychelles registry is not available for viewing by ordinary visitors." },
  { q: "Is it possible to register an offshore in Seychelles online?", a: "Offshore in the Seychelles can be registered remotely with the assistance of a local representative." },
  { q: "What documents are required to register a company in the Seychelles?", a: "Copies of passports and confirmation of the address of company participants, as well as reference letters for beneficiaries." },
  { q: "Where to open an offshore bank account in the Seychelles?", a: "It is possible to open a local bank account for a Seychelles company under certain conditions. Some offshore banks also open accounts for such companies. Contact our specialists to select the most suitable bank for your company." },
];

const SeychellesOffPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Offshore Company Formation in Seychelles | Incluence";
    setMeta("description", "Register an offshore company in Seychelles. Minimal costs, political stability, multiple legal forms, buy ready-made. Remote registration. Incluence.");
    setMeta("keywords", "Seychelles offshore, Seychelles company formation, offshore Seychelles, IBC Seychelles, Seychelles company registration");
    setProp("og:title", document.title);
    setProp("og:description", "Register an offshore company in Seychelles. Minimal costs, political stability, multiple legal forms, buy ready-made. Remote registration. Incluence.");
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/offshore-company-formation-in-seychelles";
    const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.id = "seychelles-off-schema";
    sc.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Offshore Company Formation Seychelles", provider: { "@type": "Organization", name: "Incluence" } });
    document.head.appendChild(sc);
    return () => { document.getElementById("seychelles-off-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link><span>/</span>
          <span className="text-[#9A9590]">Seychelles</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[280px] h-[340px] pointer-events-none z-[2]">
          <svg viewBox="0 0 180 220" fill="none" className="w-full h-full">
            <path d="M72 58 L98 48 L118 62 L122 88 L112 112 L92 122 L72 115 L60 95 L58 72 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1"/>
            <path d="M128 42 L155 38 L162 50 L150 60 L128 55 Z" fill="#141822" stroke="rgba(240,235,224,0.10)" strokeWidth="0.8"/>
            <path d="M152 62 L165 60 L167 70 L155 72 Z" fill="#141822" stroke="rgba(240,235,224,0.09)" strokeWidth="0.7"/>
            <circle cx="88" cy="78" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="88" cy="78" r="3" fill="#444CE7"/>
            <text x="92" y="90" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">Victoria</text>
            <text x="93" y="98" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">Capital</text>
            <text x="90" y="150" fontSize="24" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">SC</text>
            <line x1="88" y1="73" x2="88" y2="22" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5"/>
            <text x="92" y="18" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">Stable · Low Cost</text>
          </svg>
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-tag">— Offshore Formation</span>
            <span className="text-[11px] text-[#5A5550] tracking-[0.08em] uppercase">Low Cost · Political Stability · Remote</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6 max-w-[640px]" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            Offshore Company<br />Formation in <span className="bg-gradient-to-r from-[#444CE7] to-[#6366f1] bg-clip-text text-transparent">Seychelles</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            Seychelles is a favorable jurisdiction with minimal company maintenance costs. Entrepreneurs can set up an efficient business structure with reliable asset protection — this offshore zone is characterized by stability in political and administrative spheres. The government retains the policy of supporting offshore businesses.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary">Register Seychelles Company →</Link>
            <a href="#requirements" className="border border-white/[0.08] text-[#9A9590] text-[13px] px-6 py-3 hover:border-white/[0.15] transition-colors">View Requirements</a>
          </div>
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {[["Low Cost","Minimal Maintenance","text-[#22c55e]"],["Remote","Registration","text-[#22c55e]"],["Political Stability","Government Support",""],["Multiple Forms","Legal Structures",""]].map(([v,l,c],i)=>(
              <div key={i} className={`bg-[#080808] p-7 group relative overflow-hidden ${SCAN}`}><p className={`text-[22px] font-semibold mb-1 ${c||"text-[#F0EBE0]"}`}>{v}</p><p className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — ADVANTAGES */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— Why Seychelles</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Seychelles: A Favorable Offshore Zone</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">Seychelles offshore companies are available in several organizational and legal forms. You can both register a new company and buy a ready-made business to start operating in the shortest possible time.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {[
              ["Minimal Maintenance Costs","Seychelles is characterized by minimal company maintenance costs — one of the most cost-efficient offshore jurisdictions globally."],
              ["Political & Administrative Stability","The government retains a consistent policy of supporting offshore businesses. Stable political and administrative environment for long-term structures."],
              ["Asset Protection","Entrepreneurs can set up an efficient business structure with reliable asset protection. Seychelles law provides strong privacy and ownership confidentiality."],
              ["Multiple Legal Forms","Offshore companies are available in several organizational and legal forms — allowing entrepreneurs to choose the structure that best fits their business model."],
              ["Ready-Made Available","One can both register a new company in Seychelles and buy a ready-made business to start operating in the shortest possible time."],
              ["Remote Registration","Offshore in the Seychelles can be registered remotely with the assistance of a local representative — no personal visit required."],
            ].map(([t,b],i)=>(
              <div key={i} className={`bg-[#0d0d0d] p-7 group relative overflow-hidden ${CORNER} ${SCAN}`}><h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{t}</h3><p className="text-[13px] text-[#9A9590] leading-relaxed">{b}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — REQUIREMENTS */}
      <section id="requirements" className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-3 block">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Documents Required for Seychelles Registration</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-relaxed">To register a company in the Seychelles, the following documents are required at minimum. Contact our specialists for the complete list specific to your structure.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {["Copies of passports of all company participants","Confirmation of address of all company participants","Reference letters for beneficiaries","Completed registration forms","Information on source of funds for company creation"].map((t,i)=>(
                <div key={i} className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0"/><span className="text-[13px] text-[#9A9590]">{t}</span></div>
              ))}
            </div>
            <p className="text-[13px] text-[#9A9590] leading-relaxed mt-6">
              Note: The Seychelles registry is not available for viewing by ordinary visitors. Statutory documents with a register mark serve as confirmation of registration. Registry access is required to verify registration status.
            </p>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <div className={SCAN}/>
              <div className="absolute top-3 right-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22c55e]"/><span className="w-1.5 h-1.5 bg-[#22c55e] animate-ping absolute right-0"/></div>
              <span className="section-tag mb-4 block">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {[["Jurisdiction","Seychelles",""],["Costs","Among lowest globally","text-[#22c55e]"],["Registration","Remote via local rep","text-[#22c55e]"],["Bank account","Local or offshore banks",""],["Stability","Political & admin stable","text-[#22c55e]"],["Registry","Not public","text-[#22c55e]"],["Ready-made","Available","text-[#444CE7]"]].map(([l,v,c],i)=>(
                  <div key={i} className="flex justify-between py-3"><span className="text-[12px] text-[#5A5550]">{l}</span><span className={`text-[12px] ${c||"text-[#9A9590]"}`}>{v}</span></div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]"><Link to="/contact" className="btn-primary w-full text-center block">Register Seychelles Company →</Link></div>
            </div>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Register Your Seychelles Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Contact our specialists to begin the registration process.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={e=>e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                {["Full Name","Preferred Company Name","Business Activity","Ready-Made or New?"].map((ph,i)=>(
                  <input key={i} placeholder={ph} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors"/>
                ))}
              </div>
              <textarea rows={4} placeholder="Describe your goals — trading, holding, asset protection..." className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 resize-none focus:border-[#444CE7]/40 focus:outline-none transition-colors"/>
              <button type="submit" className="btn-primary">Register Seychelles Company →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeychellesOffPage;
