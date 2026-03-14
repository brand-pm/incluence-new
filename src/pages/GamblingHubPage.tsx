import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import SectionTag from "@/components/SectionTag";

const useCounter = (target: number, duration = 1200) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= target) {
        setVal(target);
        clearInterval(t);
      } else {
        setVal(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(t);
  }, [target, duration]);
  return val;
};

const JURISDICTIONS = [
  { reg: "MGA", name: "Malta", badge: "EU Regulated", desc: "Gold standard for EU operators. Full access to European payment systems and banking. Valid 5 years, renewable.", price: "From €25,000", timeline: "6–9 months", href: "/malta-gaming-license" },
  { reg: "CGA", name: "Curaçao", badge: "Most Popular", desc: "Fastest and most cost-effective entry point. One sub-license covers all gambling types. Remote application possible.", price: "From €15,000", timeline: "3–4 months", href: "/curacao-gaming-license" },
  { reg: "GSC", name: "Isle of Man", badge: "Tier 1", desc: "Tier-1 prestige license from the Gambling Supervision Commission. Covers all verticals under one permit.", price: "From £25,000", timeline: "6–12 months", href: "/gambling-license-of-the-isle-of-man" },
  { reg: "Municipality", name: "Costa Rica", badge: "Offshore", desc: "Data Processing license — fastest path to operation. No business plan required. Income tax exempt for international operators.", price: "From $15,000", timeline: "2–5 weeks", href: "/gambling-license-in-costa-rica" },
  { reg: "GBGA", name: "Gibraltar", badge: "Prestige", desc: "Highly respected EU-adjacent jurisdiction. Full B2C and B2B coverage. Recognized by major payment processors globally.", price: "From £35,000", timeline: "6–12 months", href: "/gambling-license-gibraltar" },
  { reg: "CySEC", name: "Cyprus", badge: "EU Member", desc: "National Gaming Authority license. Full EU market access. Favorable tax regime for licensed gaming companies.", price: "From €30,000", timeline: "6–9 months", href: "/gambling-license-cyprus" },
];

const STEPS = [
  { num: "01", title: "Jurisdiction Selection", body: "We analyze your target markets, player geography, payment needs and budget to recommend the optimal jurisdiction." },
  { num: "02", title: "Company Formation", body: "Local entity incorporated with proper structure. Directors, shareholders, registered office — all requirements met." },
  { num: "03", title: "Bank Account Opening", body: "Corporate account opened in jurisdiction-approved bank. Authorized capital deposited as required by regulator." },
  { num: "04", title: "Documentation Package", body: "Business plan, AML policy, technical documentation, RNG certificates — full package prepared by our team." },
  { num: "05", title: "Regulator Submission", body: "Application submitted to licensing authority. We manage all follow-up questions and compliance requests." },
  { num: "06", title: "License Issued", body: "License granted. Full corporate package handed over with post-licensing compliance support included." },
];

const REQS = [
  "Passport copies and proof of address — all directors and shareholders",
  "Documents confirming financial standing and source of funds",
  "Company statutory documents",
  "Detailed business plan and description of gaming activities",
  "AML/KYC policy compliant with local and international legislation",
  "Technical documentation and RNG certificates",
  "Responsible Gaming policy published on the platform",
  "Registered office in jurisdiction (we assist with setup)",
  "Proof of authorized capital deposit",
];

const FAQS = [
  { q: "What conditions are required to obtain a gaming license?", a: "You need a registered company, a business plan, AML policy, technical infrastructure, a bank account with authorized capital, and RNG certification. Requirements vary by jurisdiction — our team guides you through each step." },
  { q: "Which jurisdictions do you work with for gambling licenses?", a: "Malta (MGA), Curaçao (CGA), Isle of Man (GSC), Costa Rica, Gibraltar (GBGA), Cyprus (CySEC), Seychelles, Belize, Panama and others. We select the best fit based on your target markets and budget." },
  { q: "How long does it take to obtain a gambling license?", a: "Timeline depends on jurisdiction: Costa Rica 2–5 weeks, Curaçao 3–4 months, Malta and Gibraltar 6–9 months. We provide realistic timelines upfront so you can plan accordingly." },
  { q: "What documents are required for a gambling license application?", a: "Passport copies and address confirmation for all directors and shareholders, source of funds documentation, statutory documents, business plan, AML policy, and technical documentation." },
  { q: "Can a foreign company apply for a gambling license?", a: "Yes. Most jurisdictions allow non-resident applicants. In some cases a local director or registered office is required — we arrange both as part of our service." },
  { q: "How much does a gambling license cost?", a: "Cost depends on jurisdiction and business structure. Curaçao starts from €15,000, Malta from €25,000. Contact us for a detailed cost breakdown tailored to your specific case." },
];

const GamblingHubPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);
  const s6 = useRef<HTMLDivElement>(null);

  const c1 = useCounter(6);
  const c3 = useCounter(500);
  const c4 = useCounter(12);

  useEffect(() => {
    document.title = "Gambling License — Obtain an Online Gambling License | Incluence";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = content;
    };

    setMeta("description", "Get a gambling license in Malta, Curaçao, Isle of Man, Costa Rica and more. Full legal support from application to approval. Incluence — international law firm.");
    setMeta("keywords", "gambling license, online casino license, MGA Malta, Curaçao gaming license, Isle of Man GSC, Costa Rica gambling");
    setProp("og:title", "Gambling License — Incluence");
    setProp("og:description", "Obtain a gambling license in the right jurisdiction. Full legal support from Incluence.");
    setProp("og:url", "https://incluence.com/gamble-license");
    setProp("og:type", "website");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://incluence.com/gamble-license";

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Gambling License",
      description: "Legal assistance in obtaining gambling licenses in Malta, Curaçao, Isle of Man, Costa Rica and other jurisdictions.",
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      areaServed: "Worldwide",
      url: "https://incluence.com/gamble-license",
      offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "15000" },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "page-schema";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);

    return () => {
      document.querySelector("#page-schema")?.remove();
      canonical?.remove();
    };
  }, []);

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="relative overflow-hidden" style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.045) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}><MicroParticles /></div>
        <div className="relative max-w-screen-xl mx-auto" style={{ zIndex: 10 }}>
          <SectionTag>— Licensing</SectionTag>
          <h1 className="mt-5" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#F0EBE0", lineHeight: 1.1 }}>
            <span style={{ background: "linear-gradient(135deg, #444CE7, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Gambling</span> License
          </h1>
          <p className="mt-5 max-w-[560px]" style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.7 }}>
            Obtain an online gambling license in the right jurisdiction for your business. We handle the full process — from jurisdiction selection to license issuance.
          </p>
          <div className="flex gap-4 mt-8">
            <Link to="/contact" className="inline-block" style={{ padding: "12px 28px", background: "#444CE7", color: "#fff", fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", transition: "background 0.2s" }} onMouseEnter={e => (e.currentTarget.style.background = "#3538CD")} onMouseLeave={e => (e.currentTarget.style.background = "#444CE7")}>Get a Free Consultation →</Link>
            <a href="#jurisdictions" className="inline-block" style={{ padding: "12px 28px", border: "1px solid rgba(255,255,255,0.15)", color: "#F0EBE0", fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", transition: "border-color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")} onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}>View Jurisdictions</a>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              { value: `${c1}+`, label: "Jurisdictions Available" },
              { value: "2 wk", label: "Fastest License" },
              { value: `${c3}+`, label: "Licenses Obtained" },
              { value: `${c4} yrs`, label: "Industry Experience" },
            ].map((stat) => (
              <div key={stat.label} className="relative overflow-hidden group" style={{ background: "#080808", padding: 28 }}>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: "linear-gradient(90deg, transparent, rgba(68,76,231,0.04), transparent)" }} />
                </div>
                <span className="block relative" style={{ fontSize: 30, fontWeight: 300, color: "#F0EBE0", lineHeight: 1 }}>{stat.value}</span>
                <span className="block relative" style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 8 }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — JURISDICTIONS ═══ */}
      <section id="jurisdictions" style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionTag>— Available Licenses</SectionTag>
          <h2 className="mt-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#F0EBE0", lineHeight: 1.15 }}>Choose Your Jurisdiction</h2>
          <p className="mt-4 max-w-[520px]" style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7 }}>
            Each license serves different markets, budgets and timelines. We help you select and obtain the right one.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {JURISDICTIONS.map((j) => (
              <Link key={j.name} to={j.href} className="relative group flex flex-col" style={{ background: "#0d0d0d", padding: "28px 24px", textDecoration: "none", transition: "background 0.2s" }} onMouseEnter={e => (e.currentTarget.style.background = "#111111")} onMouseLeave={e => (e.currentTarget.style.background = "#0d0d0d")}>
                {/* Corner accent */}
                <div className="absolute top-0 right-0" style={{ width: 24, height: 24 }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: 24, height: 1, background: "#444CE7", opacity: 0.4 }} />
                  <div style={{ position: "absolute", top: 0, right: 0, width: 1, height: 24, background: "#444CE7", opacity: 0.4 }} />
                </div>
                {/* Scan sweep */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: "linear-gradient(90deg, transparent, rgba(68,76,231,0.04), transparent)" }} />
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: "#444CE7" }} />

                <div className="flex justify-between items-start mb-5 relative">
                  <div>
                    <span style={{ fontSize: 10, color: "#444CE7", textTransform: "uppercase", letterSpacing: "0.12em" }}>{j.reg}</span>
                    <div style={{ fontSize: 22, fontWeight: 300, color: "#F0EBE0", marginTop: 2 }}>{j.name}</div>
                  </div>
                  <span style={{ fontSize: 9, color: "#9A9590", textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(255,255,255,0.1)", padding: "3px 8px" }}>{j.badge}</span>
                </div>

                <p className="flex-1 mb-6 relative" style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.65 }}>{j.desc}</p>

                <div className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <span style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em" }}>Starting from</span>
                    <div style={{ fontSize: 15, fontWeight: 500, color: "#F0EBE0", marginTop: 2 }}>{j.price}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em" }}>Timeline</span>
                    <div style={{ fontSize: 13, color: "#F0EBE0", marginTop: 2 }}>{j.timeline}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — PROCESS ═══ */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionTag>— Process</SectionTag>
          <h2 className="mt-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#F0EBE0", lineHeight: 1.15 }}>From Selection to License</h2>
          <p className="mt-4 max-w-[520px]" style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7 }}>
            Fully managed. You focus on your business while we navigate the regulatory process end-to-end.
          </p>
          <div ref={containerRef} className="relative mt-10">
            <ProcessFlowCanvas />
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)", zIndex: 1 }}>
              {STEPS.map((step, i) => (
                <div key={step.num} ref={[s1, s2, s3, s4, s5, s6][i]} data-step={step.num} className="relative group overflow-hidden" style={{ background: "#111111", padding: "28px 24px", transition: "background 0.2s" }} onMouseEnter={e => (e.currentTarget.style.background = "#151515")} onMouseLeave={e => (e.currentTarget.style.background = "#111111")}>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0" style={{ width: 24, height: 24 }}>
                    <div style={{ position: "absolute", top: 0, right: 0, width: 24, height: 1, background: "#444CE7", opacity: 0.4 }} />
                    <div style={{ position: "absolute", top: 0, right: 0, width: 1, height: 24, background: "#444CE7", opacity: 0.4 }} />
                  </div>
                  {/* Scan sweep */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: "linear-gradient(90deg, transparent, rgba(68,76,231,0.04), transparent)" }} />
                  </div>
                  <span style={{ fontSize: 11, color: "#444CE7", letterSpacing: "0.1em" }}>{step.num}</span>
                  <div className="mt-2" style={{ fontSize: 17, fontWeight: 500, color: "#F0EBE0" }}>{step.title}</div>
                  <p className="mt-3" style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.65 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — REQUIREMENTS ═══ */}
      <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionTag>— Requirements</SectionTag>
            <h2 className="mt-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#F0EBE0", lineHeight: 1.15 }}>What You'll Need</h2>
            <p className="mt-4 max-w-[480px]" style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7 }}>
              Requirements vary by jurisdiction but share a common core. We prepare the full documentation package on your behalf — you only provide personal documents.
            </p>
            <div className="mt-8 flex flex-col gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
              {REQS.map((req, i) => (
                <div key={i} className="flex items-start gap-4" style={{ background: "#0d0d0d", padding: "14px 16px" }}>
                  <div style={{ width: 6, height: 6, background: "#444CE7", marginTop: 6, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "#F0EBE0", lineHeight: 1.6 }}>{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.06)", padding: "32px 28px" }}>
              {/* Scan sweep */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{ background: "linear-gradient(90deg, transparent, rgba(68,76,231,0.04), transparent)" }} />
              </div>
              {/* Pulse dot */}
              <div className="absolute" style={{ top: 24, right: 24 }}>
                <div style={{ width: 8, height: 8, background: "#22c55e", position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, background: "#22c55e", animation: "pd 2s ease-out infinite" }} />
                </div>
              </div>
              <style>{`@keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}`}</style>

              <SectionTag>— Free Consultation</SectionTag>
              <h3 className="mt-4 relative" style={{ fontSize: 20, fontWeight: 400, color: "#F0EBE0", lineHeight: 1.3 }}>
                Not sure which license fits your business?
              </h3>
              <p className="mt-3 relative" style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.65 }}>
                Book a 30-minute call with a senior licensing consultant. We'll assess your situation and recommend the right jurisdiction, structure and timeline — at no cost.
              </p>
              <Link to="/contact" className="inline-block mt-6 relative" style={{ padding: "12px 28px", background: "#444CE7", color: "#fff", fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", transition: "background 0.2s" }} onMouseEnter={e => (e.currentTarget.style.background = "#3538CD")} onMouseLeave={e => (e.currentTarget.style.background = "#444CE7")}>Book a Free Call →</Link>

              <div className="mt-8 pt-6 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[["Response time", "Within 24 hours"], ["Consultation", "Free, no obligation"], ["Languages", "EN, RU, DE"]].map(([l, v]) => (
                  <div key={l} className="flex justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: 11, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</span>
                    <span style={{ fontSize: 12, color: "#F0EBE0" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — FAQ ═══ */}
      <section style={{ background: "#111111", padding: "72px 48px" }}>
        <div className="max-w-screen-xl mx-auto">
          <SectionTag>— FAQ</SectionTag>
          <h2 className="mt-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#F0EBE0", lineHeight: 1.15 }}>Common Questions</h2>
          <div className="mt-10 flex flex-col gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ background: "#111111" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex justify-between items-center w-full cursor-pointer text-left bg-transparent border-0" style={{ padding: "20px 24px", fontFamily: "Manrope, sans-serif" }}>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "#F0EBE0", paddingRight: 24 }}>{f.q}</span>
                  <ChevronDown size={16} style={{ color: "#5A5550", flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
                {openFaq === i && (
                  <p style={{ padding: "0 24px 20px", fontSize: 13, color: "#9A9590", lineHeight: 1.7 }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — CTA ═══ */}
      <section style={{ background: "#080808", padding: "88px 48px" }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionTag>— Get Started</SectionTag>
            <h2 className="mt-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#F0EBE0", lineHeight: 1.15 }}>Ready to Apply for a Gambling License?</h2>
            <p className="mt-4" style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7 }}>
              Tell us about your project and we'll identify the best jurisdiction, timeline and cost structure for your business. Response within 24 hours.
            </p>
          </div>
          <div className="lg:col-span-7">
            <form className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }} onSubmit={e => e.preventDefault()}>
              {[["Full Name", "text"], ["Company Name", "text"], ["Target Market (country/region)", "text"], ["Budget Range", "text"]].map(([label, type]) => (
                <div key={label} style={{ background: "#080808", padding: 20 }}>
                  <div style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{label}</div>
                  <input type={type} style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#F0EBE0", padding: "10px 12px", fontSize: 13, outline: "none", fontFamily: "Manrope, sans-serif" }} />
                </div>
              ))}
              <div className="col-span-2" style={{ background: "#080808", padding: 20 }}>
                <div style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Project Details</div>
                <textarea rows={4} style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#F0EBE0", padding: "10px 12px", fontSize: 13, outline: "none", resize: "vertical", fontFamily: "Manrope, sans-serif" }} />
              </div>
              <div className="col-span-2" style={{ background: "#080808", padding: 20 }}>
                <button type="submit" style={{ padding: "12px 32px", background: "#444CE7", color: "#fff", fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", border: "none", cursor: "pointer", transition: "background 0.2s", fontFamily: "Manrope, sans-serif" }} onMouseEnter={e => (e.currentTarget.style.background = "#3538CD")} onMouseLeave={e => (e.currentTarget.style.background = "#444CE7")}>Send Request →</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamblingHubPage;
