import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";

const ScanSweep = () => (
  <span className="pointer-events-none absolute inset-0 z-[5]">
    <span className="scan-line" />
  </span>
);

const CornerAccent = () => (
  <span className="pointer-events-none absolute top-0 right-0 w-8 h-8 z-[3]">
    <span className="absolute top-0 right-0 w-full h-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" />
    <span className="absolute top-0 right-0 h-full w-px bg-[#444CE7] opacity-40 group-hover:opacity-80 transition-opacity" />
  </span>
);

const BottomAccent = () => (
  <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#444CE7]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-[3]" />
);

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const JURISDICTIONS = [
  "Luxembourg", "Liechtenstein", "Estonia", "Czech Republic",
  "Switzerland", "Malta", "Seychelles", "Bahamas",
];

const REQUIREMENTS = [
  { title: "Business Plan & Policies", body: "Prepare business plan and policies." },
  { title: "Legal Entity Registration", body: "Register a legal entity, if necessary." },
  { title: "Bank Account & Capital", body: "Open an account and deposit authorized capital, confirm that the fund manager has sufficient experience." },
  { title: "Fund Manager & Participants", body: "The Fund must approve the conditions for attracting participants. All new participants must be registered in accordance with the rules of the fund and under the legislation of the country of registration." },
];

const FAQS = [
  { q: "In which countries we help to open an investment fund?", a: "Our specialists help with the opening of investment funds around the world, including Luxembourg, Liechtenstein, Estonia, Czech Republic, Switzerland, Malta, Seychelles, Bahamas." },
  { q: "Why do I need an investment fund?", a: "Investment funds are created to accumulate assets of individuals and legal entities for subsequent joint investment in order to make a profit." },
  { q: "What are the requirements for opening an investment fund?", a: "In order to create an investment fund, it is necessary to prepare business plan and policies, register a legal entity, if necessary, open an account and deposit authorized capital, confirm that the fund manager has sufficient experience. The Fund must approve the conditions for attracting participants. All new participants must be registered in accordance with the rules of the fund and under the legislation of the country of registration." },
];

const STATS = [
  { value: "8+", label: "Jurisdictions" },
  { value: "1.5–2 mo", label: "Registration Timeline" },
  { value: "EU + Offshore", label: "Coverage" },
  { value: "Full support", label: "End-to-End Service" },
];

const InvestmentFundsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", jurisdiction: "", fundType: "", investors: "", details: "" });

  useEffect(() => {
    document.title = "Offshore Investment Funds — Register Fund Offshore | Incluence";
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    const setProp = (p: string, c: string) => {
      let el = document.querySelector(`meta[property="${p}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", p); document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", "Open an offshore investment fund in Luxembourg, Estonia, Malta, Seychelles, Bahamas and more. Fund registration, management company, compliance. Incluence.");
    setMeta("keywords", "offshore investment fund, register investment fund, fund registration, offshore fund, investment fund abroad");
    setProp("og:title", "Offshore Investment Funds — Register Fund Offshore | Incluence");
    setProp("og:description", "Open an offshore investment fund in Luxembourg, Estonia, Malta, Seychelles, Bahamas and more.");
    setProp("og:type", "website");
    setProp("og:url", "https://incluence.com/offshore-investment-funds");
    let canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = "https://incluence.com/offshore-investment-funds";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "inv-fund-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Service",
      name: "Offshore Investment Fund Registration",
      provider: { "@type": "Organization", name: "Incluence" },
      url: "https://incluence.com/offshore-investment-funds",
    });
    document.head.appendChild(schema);
    return () => { document.getElementById("inv-fund-schema")?.remove(); };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto px-12 py-3 flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Investment Funds</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080808] py-[88px] px-12">
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="absolute inset-0 z-[1]"><MicroParticles /></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-6">— Investment Funds</span>
          <h1 className="font-light text-[#F0EBE0] mb-6 max-w-[660px]" style={{ fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.1 }}>
            <span className="bg-gradient-to-r from-[#444CE7] to-[#6E7BF7] bg-clip-text text-transparent">Offshore</span> Investment<br />Fund Registration
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            The incluence company provides the following types of services in such areas as international tax planning, asset protection, registration of foreign companies and their maintenance, etc.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3B41C9] transition-colors">
            Get Free Consultation →
          </Link>

          {/* STATS */}
          <div className="mt-12 bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {STATS.map(s => (
              <div key={s.label} className="bg-[#080808] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="text-[22px] font-light text-[#F0EBE0] mb-1">{s.value}</div>
                <div className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — JURISDICTIONS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Available Jurisdictions</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Where We Register Investment Funds</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[500px] leading-[1.8]">
            Our specialists help with the opening of investment funds around the world, including Luxembourg, Liechtenstein, Estonia, Czech Republic, Switzerland, Malta, Seychelles, Bahamas.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-4 gap-px">
            {JURISDICTIONS.map(j => (
              <div key={j} className="bg-[#0d0d0d] p-6 flex items-center justify-center relative overflow-hidden group">
                <ScanSweep />
                <span className="text-[14px] font-medium text-[#9A9590] group-hover:text-[#F0EBE0] transition-colors text-center relative z-10">{j}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — REQUIREMENTS */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Requirements</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">What Is Required to Open an Investment Fund</h2>
          <p className="text-[14px] text-[#9A9590] mb-10 max-w-[500px] leading-[1.8]">
            In order to create an investment fund, it is necessary to prepare business plan and policies, register a legal entity, if necessary, open an account and deposit authorized capital, confirm that the fund manager has sufficient experience. The Fund must approve the conditions for attracting participants. All new participants must be registered in accordance with the rules of the fund and under the legislation of the country of registration.
          </p>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            {REQUIREMENTS.map(r => (
              <div key={r.title} className="bg-[#111111] p-7 relative overflow-hidden group">
                <ScanSweep />
                <div className="flex items-start gap-3 relative z-10">
                  <span className="mt-2 w-1.5 h-1.5 bg-[#444CE7] shrink-0" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#F0EBE0] mb-2">{r.title}</div>
                    <div className="text-[13px] text-[#9A9590] leading-relaxed">{r.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FAQ */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-10">Frequently Asked Questions</h2>
          <div className="max-w-[720px] space-y-px bg-[rgba(255,255,255,0.06)]">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-[#0d0d0d]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-[14px] font-medium text-[#F0EBE0] pr-4">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#444CE7] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[13px] text-[#9A9590] leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] py-[80px] px-12">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light leading-[1.2] text-[#F0EBE0] mb-4">Register Your Investment Fund</h2>
          <p className="text-[14px] text-[#9A9590] mb-8 leading-[1.8]">
            Contact our specialists to discuss your fund structure, jurisdiction, and timeline.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-8 py-3 hover:bg-[#3B41C9] transition-colors">
            Get Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InvestmentFundsPage;
