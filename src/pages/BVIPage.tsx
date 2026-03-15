import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── visual micro-classes (inlined, zero rounded / zero shadow) ── */
const DOT_GRID: React.CSSProperties = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};
const SCAN = "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[rgba(68,76,231,0.04)] before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700";
const CORNER = "after:absolute after:top-0 after:left-0 after:w-4 after:h-4 after:border-t after:border-l after:border-[#444CE7]/30 after:pointer-events-none";

const useCounter = (end: number, dur = 1800) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    let start = 0; const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setV(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, dur]);
  return v;
};

/* ── SEO ── */
const setMeta = (n: string, c: string) => { let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); } el.content = c; };
const setProp = (p: string, c: string) => { let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement; if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); } el.content = c; };

const FAQS = [
  { q: "How much does it cost to register a company in the British Virgin Islands?", a: "The final cost depends on various factors. Contact our specialists to find out the exact cost of company registration in the BVI." },
  { q: "Can an offshore in the British Virgin Islands be registered online?", a: "An offshore company in the British Virgin Islands can be registered remotely through a local representative." },
  { q: "What documents are required to register a company in the British Virgin Islands?", a: "You must submit copies of passports and proof of address of the company participants, as well as letters of recommendation." },
  { q: "How long does it take to open an offshore in the British Virgin Islands?", a: "An offshore company in the British Virgin Islands can be opened within 2 weeks after providing all documents and making the payment." },
];

const BVIPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Offshore in the British Virgin Islands — BVI Company | Incluence";
    setMeta("description", "Register a BVI offshore company. Zero taxation, full confidentiality, IBC structure, no minimum capital. Remote registration in 2 weeks. Incluence.");
    setMeta("keywords", "BVI offshore, British Virgin Islands offshore, IBC BVI, BVI company registration, offshore BVI");
    setProp("og:title", "Offshore in the British Virgin Islands — BVI Company | Incluence");
    setProp("og:description", "Register a BVI offshore company. Zero taxation, full confidentiality, IBC structure, no minimum capital. Remote registration in 2 weeks. Incluence.");
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/offshore-in-the-british-virgin-islands";
    const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.id = "bvi-schema";
    sc.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Offshore Company BVI", provider: { "@type": "Organization", name: "Incluence" }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } });
    document.head.appendChild(sc);
    return () => { const s = document.getElementById("bvi-schema"); s?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <Link to="/offshore-company-formation" className="hover:text-[#9A9590] transition-colors">Offshore</Link>
          <span>/</span>
          <span className="text-[#9A9590]">British Virgin Islands</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "88px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>

        {/* SVG Map */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[300px] h-[340px] pointer-events-none z-[2]">
          <svg viewBox="0 0 200 220" fill="none" className="w-full h-full">
            <path d="M42 88 L85 72 L128 78 L142 92 L135 108 L108 118 L72 115 L48 105 Z" fill="#141822" stroke="rgba(240,235,224,0.12)" strokeWidth="1"/>
            <path d="M152 60 L172 55 L178 68 L168 78 L152 75 Z" fill="#141822" stroke="rgba(240,235,224,0.10)" strokeWidth="0.8"/>
            <path d="M55 42 L105 38 L108 48 L58 52 Z" fill="#141822" stroke="rgba(240,235,224,0.09)" strokeWidth="0.7"/>
            <path d="M28 72 L52 68 L55 78 L30 80 Z" fill="#141822" stroke="rgba(240,235,224,0.09)" strokeWidth="0.6"/>
            <circle cx="88" cy="92" r="5" fill="#444CE7"><animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="88" cy="92" r="3" fill="#444CE7"/>
            <text x="92" y="104" fontSize="6" fill="rgba(240,235,224,0.25)" fontFamily="Manrope,sans-serif">Road Town</text>
            <text x="93" y="112" fontSize="5" fill="rgba(240,235,224,0.15)" fontFamily="Manrope,sans-serif">BVI Capital</text>
            <text x="100" y="148" fontSize="26" fill="rgba(240,235,224,0.04)" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="300">BVI</text>
            <line x1="88" y1="87" x2="88" y2="28" stroke="rgba(68,76,231,0.08)" strokeWidth="0.5" strokeDasharray="3,5"/>
            <text x="92" y="24" fontSize="5" fill="rgba(68,76,231,0.3)" fontFamily="Manrope,sans-serif">Zero Tax</text>
          </svg>
        </div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-tag">— Offshore Registration</span>
            <span className="text-[11px] text-[#5A5550] tracking-[0.08em] uppercase">Zero Tax · Confidential · IBC</span>
          </div>
          <h1 className="font-light text-[#F0EBE0] mb-6 max-w-[640px]" style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.1 }}>
            Offshore in the<br />
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6366f1] bg-clip-text text-transparent">British Virgin Islands</span>
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            One of the reasons why entrepreneurs choose the British Virgin Islands is
            offshore and the benefits it provides: financial stability and complete absence
            of taxation. BVI offshores are an optimal option for asset storage, accumulation,
            investments, exports, and other business activities.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary">Register BVI Company →</Link>
            <a href="#requirements" className="border border-white/[0.08] text-[#9A9590] text-[13px] px-6 py-3 hover:border-white/[0.15] transition-colors">View Requirements</a>
          </div>

          {/* Stats strip */}
          <div className="mt-14 bg-[rgba(255,255,255,0.06)] grid grid-cols-5 gap-px">
            {[
              ["0%", "Tax Rate", "text-[#22c55e]"],
              ["2 weeks", "Registration Time", "text-[#22c55e]"],
              ["$350", "Annual Gov. Fee", ""],
              ["IBC", "Preferred Form", "text-[#444CE7]"],
              ["Remote", "Process", "text-[#22c55e]"],
            ].map(([val, label, clr], i) => (
              <div key={i} className={`bg-[#080808] p-6 group relative overflow-hidden ${SCAN}`}>
                <p className={`text-[22px] font-semibold mb-1 ${clr || "text-[#F0EBE0]"}`}>{val}</p>
                <p className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — ADVANTAGES */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— Why BVI</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Why Buy an Offshore Company in the British Virgin Islands</h2>
          <p className="text-[14px] text-[#9A9590] mb-12 max-w-[540px] leading-relaxed">
            BVI attracts entrepreneurs from around the world. Opening an offshore company here has many advantages that are hard to match in any other jurisdiction.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {[
              ["Zero Tax Rate", "Business owners retain all profits and can reinvest them into company development. All companies in BVI are exempt from taxation — no income tax, no capital gains tax, no withholding tax."],
              ["Full Confidentiality", "All information is hidden and stored securely encrypted. Information about directors, beneficiaries, and shareholders is not publicly available — except when a government request is received from specific authorities."],
              ["No Minimum Capital", "There are no requirements for minimum paid-up share capital. Typically, it is only declared at an amount of USD 50,000. No capital freeze required for registration."],
              ["Available to Non-Residents", "Non-residents can register a BVI company in any field of activity unless prohibited by law. BVI company registration is available both to residents and foreigners."],
              ["No Reporting Required", "Business owners do not need to conduct audits or file financial statements, prepare or submit annual non-financial reports, or pay fees for their filing. Internal records must still be maintained."],
              ["Redomiciliation", "It is permitted to redomicile a company from BVI to another jurisdiction. Flexibility to restructure as business needs change."],
            ].map(([t, b], i) => (
              <div key={i} className={`bg-[#0d0d0d] p-7 group relative overflow-hidden ${CORNER} ${SCAN}`}>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{t}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — LEGAL FORMS */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— Available Forms</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Legal Forms Available in BVI</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[500px] leading-relaxed">
            BVI provides broad opportunities for company registration. The International Business Company (IBC) is the most preferred option for the majority of entrepreneurs.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {[
              ["IBC (International Business Company)", "Most popular. No tax, high confidentiality, no minimum capital, flexible structure."],
              ["Company Limited by Shares", "Limited by the value of shares owned by participants."],
              ["Company Limited by Guarantee", "Limited by guarantees of members, including the right to issue shares."],
              ["Company with Restricted Activities (SPV)", "Special purpose vehicle for specific transactions or asset holding."],
            ].map(([t, b], i) => (
              <div key={i} className={`bg-[#111111] p-6 group relative overflow-hidden ${SCAN}`}>
                <h3 className="text-[13px] font-semibold text-[#F0EBE0] mb-2">{t}</h3>
                <p className="text-[12px] text-[#9A9590] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — REQUIREMENTS */}
      <section id="requirements" className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="section-tag mb-3 block">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">What Is Required for BVI Registration</h2>
            <p className="text-[14px] text-[#9A9590] mb-8 leading-relaxed">
              The registration procedure is relatively simple. However, legislative changes — particularly stricter investor identification rules — must be monitored.
            </p>
            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Documents Required</h3>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3 mb-8">
              {[
                "Director consent and resolution of appointment with apostille",
                "Certificate of incorporation",
                "Full set of corporate documents with apostille",
                "Passport copies and proof of address for all participants",
                "Bank statements from banks where beneficiaries have been clients for at least 6 months",
                "Letters of recommendation for beneficiaries",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                  <span className="text-[13px] text-[#9A9590]">{t}</span>
                </div>
              ))}
            </div>
            <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Company Requirements</h3>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {[
                "Registered local office address required",
                "At least one director (any nationality, any residency)",
                "Company cannot own BVI real estate (leasing permitted)",
                "Company name must not mislead or resemble existing companies",
                "Name implying Royal Family or BVI government patronage will be denied",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#444CE7] mt-1.5 flex-shrink-0" />
                  <span className="text-[13px] text-[#9A9590]">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <div className={SCAN} />
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#22c55e]" />
                <span className="w-1.5 h-1.5 bg-[#22c55e] animate-ping absolute right-0" />
              </div>
              <span className="section-tag mb-4 block">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {[
                  ["Tax", "Zero — complete exemption", "text-[#22c55e]"],
                  ["Annual fee", "$350 (up to 50,000 shares)", "text-[#444CE7]"],
                  ["Min. capital", "No minimum required", "text-[#22c55e]"],
                  ["Directors", "Min. 1, any nationality", "text-[#22c55e]"],
                  ["Reporting", "Not required", "text-[#22c55e]"],
                  ["Timeline", "2 weeks", "text-[#22c55e]"],
                  ["Apostille", "+3 business days", ""],
                  ["Courier", "+3–5 business days", ""],
                ].map(([l, v, clr], i) => (
                  <div key={i} className="flex justify-between py-3">
                    <span className="text-[12px] text-[#5A5550]">{l}</span>
                    <span className={`text-[12px] ${clr || "text-[#9A9590]"}`}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="btn-primary w-full text-center block">Register BVI Company →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="section-tag mb-3 block">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] divide-y divide-white/[0.06]">
            {FAQS.map((f, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#5A5550] transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="section-tag mb-3 block">— Get Started</span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Register Your BVI Company</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed">
              Contact our specialists to begin the registration process. We handle everything from document preparation to final submission.
            </p>
          </div>
          <div className="col-span-7">
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                {["Full Name", "Company Name (options)", "Business Activity", "Number of Directors"].map((ph, i) => (
                  <input key={i} placeholder={ph} className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
                ))}
              </div>
              <textarea rows={4} placeholder="Describe your goals — asset protection, trading, investment holding..." className="w-full bg-[#111111] border border-white/[0.06] text-[13px] text-[#F0EBE0] placeholder:text-[#5A5550] px-4 py-3 resize-none focus:border-[#444CE7]/40 focus:outline-none transition-colors" />
              <button type="submit" className="btn-primary">Register BVI Company →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BVIPage;
