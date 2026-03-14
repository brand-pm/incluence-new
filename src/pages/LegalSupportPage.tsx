import { useEffect } from "react";
import { Link } from "react-router-dom";

const DOT_GRID = {
  backgroundImage: "radial-gradient(rgba(68,76,231,0.045) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const SCAN_SWEEP = (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(68,76,231,0.04) 50%, transparent 100%)", backgroundSize: "100% 200%", animation: "scanSweep 2s ease-in-out infinite" }} />
);

const CORNER_ACCENT = (
  <>
    <div className="absolute top-0 left-0 w-5 h-px bg-[#444CE7]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute top-0 left-0 h-5 w-px bg-[#444CE7]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </>
);

const LegalSupportPage = () => {
  useEffect(() => {
    document.title = "Legal Support for Business — Incluence";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Legal support in establishing and developing a business. Free initial consultation, merchant account assistance, 12+ years experience in finance and banking.");
    setMeta("keywords", "legal support, business legal services, merchant account, banking law, corporate law");
    setProp("og:title", "Legal Support for Business — Incluence");
    setProp("og:description", "Legal support in establishing and developing a business.");
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = "https://incluence.com/support-legal";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "legal-support-schema";
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Legal Support for Business", provider: { "@type": "Organization", name: "Incluence" }, url: "https://incluence.com/support-legal" });
    document.head.appendChild(schema);
    return () => { document.getElementById("legal-support-schema")?.remove(); };
  }, []);

  const SERVICES = [
    { title: "Free Initial Consultation", body: "Free initial consultation on legal aspects of daily business activity. We analyze your situation and provide clear, actionable recommendations without any obligation." },
    { title: "Merchant Account Assistance", body: "Opening and providing legal assistance with maintaining a merchant account. Full support from payment system selection to successful account activation." },
    { title: "Business Establishment", body: "Legal support in establishing a business — company incorporation, structure setup, regulatory compliance, and all initial legal formalities." },
    { title: "Daily Legal Operations", body: "Ongoing legal support for daily business activity — contract review, regulatory correspondence, compliance monitoring, and legal advisory." },
    { title: "Banking & Finance Issues", body: "Resolving problems with banks, exchanges, and tax authorities. Over 50 successful resolved cases with more than €10M returned or saved for clients." },
    { title: "Business Development", body: "Legal support as your business grows — entering new markets, restructuring, mergers, acquisitions, and scaling operations." },
  ];

  const STATS_ROW1 = [
    { val: "12 yrs", label: "Finance & Banking" },
    { val: "5 yrs", label: "Corporate & International Law" },
    { val: "5 yrs", label: "Payment Systems & Transactions" },
    { val: "100+", label: "Companies Registered" },
  ];
  const STATS_ROW2 = [
    { val: "200+", label: "Bank Accounts Opened" },
    { val: "50+", label: "Resolved Banking Cases" },
    { val: ">€10M", label: "Returned or Saved" },
    { val: "5 yrs", label: "Insurance Law" },
  ];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* BREADCRUMB */}
      <section className="bg-[#080808] border-b border-white/[0.06]" style={{ padding: "14px 48px" }}>
        <div className="max-w-screen-xl mx-auto flex items-center gap-2 text-[12px] text-[#5A5550]">
          <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
          <span>/</span>
          <span className="text-[#9A9590]">Legal Support</span>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#080808] relative overflow-hidden" style={{ padding: "80px 48px" }}>
        <div className="absolute inset-0 z-0" style={DOT_GRID} />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Legal Services</span>
          <h1 className="font-light mb-6" style={{ fontSize: "clamp(36px,5vw,58px)", lineHeight: 1.1 }}>
            Legal Support in Establishing<br />and <span className="bg-gradient-to-r from-[#444CE7] to-[#6366F1] bg-clip-text text-transparent">Developing</span> a Business
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[500px] mb-10 leading-[1.8]">
            Comprehensive legal support at every stage of business development — from initial consultation to ongoing daily advisory. Free initial consultation on legal aspects of daily business activity.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
        </div>
      </section>

      {/* SECTION 2 — SERVICES */}
      <section className="bg-[#0d0d0d]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Services</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">What Legal Support We Provide</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                {CORNER_ACCENT}
                {SCAN_SWEEP}
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — EXPERIENCE */}
      <section className="bg-[#111111]" style={{ padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Qualification & Experience</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-12">Our Track Record</h2>
          <div className="bg-[rgba(255,255,255,0.06)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
              {STATS_ROW1.map((s, i) => (
                <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                  {SCAN_SWEEP}
                  <span className="block text-[28px] font-light text-[#F0EBE0]">{s.val}</span>
                  <span className="block text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-1">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-px">
              {STATS_ROW2.map((s, i) => (
                <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
                  {SCAN_SWEEP}
                  <span className="block text-[28px] font-light text-[#F0EBE0]">{s.val}</span>
                  <span className="block text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808]" style={{ padding: "80px 48px" }}>
        <div className="max-w-screen-xl mx-auto max-w-[600px] mx-auto">
          <span className="block text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-4">— Get Started</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Discuss Your Legal Matter</h2>
          <p className="text-[14px] text-[#9A9590] leading-relaxed mb-8">Contact us for a free initial consultation. We will review your situation and provide clear recommendations.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#444CE7] text-white text-[13px] font-medium px-6 py-3 hover:bg-[#3538CD] transition-colors">Discuss the Project →</Link>
        </div>
      </section>
    </div>
  );
};

export default LegalSupportPage;
