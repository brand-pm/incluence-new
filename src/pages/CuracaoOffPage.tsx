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
  { q: "How much does it cost to register a company in Curacao?", a: "The final cost of registering a company in Curacao is influenced by the type of activity, the number of participants and other factors. You can find out the exact cost of registering a company in Curacao by contacting our specialists." },
  { q: "Is it possible to register offshore on Curacao online?", a: "A company in Curacao can be registered remotely with the assistance of local representatives." },
  { q: "What documents are required to register a company in Curacao?", a: "In order to register a company in Curacao, you should submit copies of passports and confirmation of the address of the company's participants. You should also submit completed registration forms." },
  { q: "How long is the registration period for opening an offshore in Curacao?", a: "A company in Curacao can be registered for up to 2 weeks." },
];

const CuracaoOffPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Offshore Company Formation in Curaçao | Incluence";
    setMeta("description", "Register an offshore company in Curaçao. No currency exchange control, gambling licenses, stable economy. Up to 2 weeks. Remote registration. Incluence.");
    setMeta("keywords", "Curacao offshore, Curaçao company formation, offshore Curacao, register company Curacao, Curacao jurisdiction");
    setProp("og:title", document.title);
    setProp("og:description", "Register an offshore company in Curaçao. No currency exchange control, gambling licenses, stable economy. Up to 2 weeks. Remote registration. Incluence.");
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/offshore-company-formation-in-curacao";
    const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.id = "curacao-off-schema";
    sc.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Offshore Company Formation Curaçao", provider: { "@type": "Organization", name: "Incluence" } });
    document.head.appendChild(sc);
    return () => { document.getElementById("curacao-off-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link><span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link><span>/</span>
          <span className="text-[#9A9590]">Curaçao</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[300px] h-[320px] pointer-events-none z-[2]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path d="M18 88 L52 68 L92 62 L135 68 L162 80 L168 98 L155 115 L118 125 L78 128 L42 120 L20 106 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1"/>
            <path d="M152 140 L168 136 L170 146 L155 148 Z" fill="#141822" stroke="rgba(240,235,224,0.08)" strokeWidth="0.5"/>
            <circle cx="95" cy="92" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="95" cy="92" r="3" fill="#444CE7"/>
            <text x="99" y="104" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">Willemstad</text>
            <text x="100" y="112" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">Capital</text>
            <text x="95" y="155" fontSize="22" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">CW</text>
            <line x1="95" y1="87" x2="95" y2="28" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5"/>
            <text x="99" y="24" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">Netherlands · Gambling</text>
          </svg>
        </div>
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-tag">— Offshore Formation</span>
            <span className="text-[11px] text-[#5A5550] tracking-[0.08em] uppercase">Netherlands · No FX Control · Gambling Hub</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6 max-w-[640px]" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            Offshore Company<br />Formation in <span className="bg-gradient-to-r from-[#444CE7] to-[#6366f1] bg-clip-text text-transparent">Curaçao</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            If you are looking for a jurisdiction notable for favorable conditions for registering a foreign company, pay attention to Curacao. It is an island in the Caribbean Sea, which belongs to the Netherlands. The key sectors of the economy are tourism, trade, and gambling. The easy procedure of obtaining gambling licenses, the absence of currency exchange control, and a stable and fast-growing economy are among the advantages that attract foreign businessmen and investors to start a business Curacao.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary">Register Curaçao Company →</Link>
            <a href="#requirements" className="border border-white/[0.08] text-[#9A9590] text-[13px] px-6 py-3 hover:border-white/[0.15] transition-colors">View Requirements</a>
          </div>
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {[["No FX Control","Currency Policy","text-[#22c55e]"],["Up to 2 weeks","Registration","text-[#22c55e]"],["Netherlands","Ownership","text-[#444CE7]"],["Remote","Process","text-[#22c55e]"]].map(([v,l,c],i)=>(
              <div key={i} className={`bg-[#080808] p-7 group relative overflow-hidden ${SCAN}`}><p className={`text-[22px] font-semibold mb-1 ${c||"text-[#F0EBE0]"}`}>{v}</p><p className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — ADVANTAGES */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— Why Curaçao</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Curaçao: Key Advantages for International Business</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">Curaçao attracts foreign businessmen and investors through several distinct advantages not available in other Caribbean jurisdictions.</p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {[
              ["No Currency Exchange Control","Complete absence of currency exchange control — freely manage funds in any currency without restrictions."],
              ["Easy Gambling Licenses","Curaçao is one of the world's most established gambling license jurisdictions. The easy procedure for obtaining gambling licenses is a key attraction for gaming operators globally."],
              ["Stable Growing Economy","A stable and fast-growing economy with tourism, trade, and gaming as main economic pillars. Netherlands connection provides additional legal stability."],
              ["Netherlands Connection","Curaçao belongs to the Netherlands — providing additional credibility and legal framework built on Dutch law traditions."],
              ["Favorable Foreign Company Conditions","Favorable conditions specifically designed for registering foreign companies. Non-residents are welcome and well-served by the local regulatory framework."],
              ["Remote Registration","A company in Curaçao can be registered remotely with the assistance of local representatives. No personal visit required."],
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">What Is Required for Curaçao Registration</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-relaxed">The registration procedure is straightforward. Below is the standard document list. Additional documents may be requested based on your specific company type and activities.</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {["Copies of passports of all company participants","Confirmation of address of all company participants","Completed registration forms","Information on source of funds for company creation","Additional documents may be requested based on activity type"].map((t,i)=>(
                <div key={i} className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0"/><span className="text-[13px] text-[#9A9590]">{t}</span></div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <div className={SCAN}/>
              <div className="absolute top-3 right-3 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22c55e]"/><span className="w-1.5 h-1.5 bg-[#22c55e] animate-ping absolute right-0"/></div>
              <span className="section-tag mb-4 block">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {[["Jurisdiction","Curaçao (Netherlands)",""],["FX control","None","text-[#22c55e]"],["Gambling","Easy license procedure","text-[#444CE7]"],["Timeline","Up to 2 weeks","text-[#22c55e]"],["Registration","Remote available","text-[#22c55e]"],["Economy","Stable, fast-growing","text-[#22c55e]"]].map(([l,v,c],i)=>(
                  <div key={i} className="flex justify-between py-3"><span className="text-[12px] text-[#5A5550]">{l}</span><span className={`text-[12px] ${c||"text-[#9A9590]"}`}>{v}</span></div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]"><Link to="/contact" className="btn-primary w-full text-center block">Register Curaçao Company →</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
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
            <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Register Your Curaçao Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">Contact our specialists to begin the registration process.</p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={e=>e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                {["Full Name","Company Name","Business Activity","Gambling License Needed?"].map((ph,i)=>(
                  <input key={i} placeholder={ph} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors"/>
                ))}
              </div>
              <textarea rows={4} placeholder="Describe your goals — gambling operations, trading, holding..." className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 resize-none focus:border-[#444CE7]/40 focus:outline-none transition-colors"/>
              <button type="submit" className="btn-primary">Register Curaçao Company →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuracaoOffPage;
