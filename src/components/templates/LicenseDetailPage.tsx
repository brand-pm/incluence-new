import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, Check, X } from "lucide-react";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import RelatedJurisdictions from "@/components/RelatedJurisdictions";

interface StatItem {
  value: string;
  label: string;
}

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface KeyFactItem {
  label: string;
  value: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedLicense {
  regulator: string;
  name: string;
  description: string;
  href: string;
}

interface LicenseDetailPageProps {
  categoryLabel: string;
  categoryHref: string;
  titleAccent: string;
  titleRest: string;
  description: string;
  heroVisual: React.ReactNode;
  stats: StatItem[];
  aboutTag: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  benefits: BenefitCard[];
  processTitle: string;
  processSubtitle: string;
  steps: ProcessStep[];
  requirementsIntro: string;
  requirements: string[];
  keyFacts: KeyFactItem[];
  advantages?: string[];
  limitations?: string[];
  faq: FAQItem[];
  related: RelatedLicense[];
  formTitle: string;
  formSubtitle: string;
  formFields?: string[];
  formTextareaLabel?: string;
  formButtonText?: string;
  seo?: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    schemaId: string;
    schemaName: string;
    schemaPrice?: string;
    schemaCurrency?: string;
  };
}

const CornerAccent = () => (
  <div className="absolute top-0 right-0 pointer-events-none">
    <div className="w-[24px] h-[1px] bg-[#444CE7]/40" />
    <div className="w-[1px] h-[24px] bg-[#444CE7]/40 ml-auto" />
  </div>
);

const ScanSweep = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#444CE7]/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  </div>
);

const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-[720px]">
      <div className="flex flex-col gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
        {items.map((item, i) => (
          <div key={i} className="bg-[#0d0d0d]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex justify-between items-center w-full py-5 px-5 cursor-pointer text-left bg-transparent border-0"
              style={{ fontFamily: "inherit" }}
            >
              <span className="text-[14px] text-[#F0EBE0] font-medium pr-8">{item.question}</span>
              <ChevronDown className={`w-4 h-4 text-[#5A5550] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <p className="text-[13px] text-[#9A9590] leading-[1.8] pb-5 px-5">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const LicenseDetailPage: React.FC<LicenseDetailPageProps> = (p) => {
  useEffect(() => {
    if (!p.seo) return;
    document.title = p.seo.title;

    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    const setProp = (prop: string, c: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = c;
    };

    setMeta("description", p.seo.description);
    setMeta("keywords", p.seo.keywords);
    setProp("og:title", p.seo.title);
    setProp("og:url", p.seo.canonical);
    setProp("og:type", "website");

    let can = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!can) { can = document.createElement("link"); can.rel = "canonical"; document.head.appendChild(can); }
    can.href = p.seo.canonical;

    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.seo.schemaName,
      description: p.seo.description,
      provider: { "@type": "Organization", name: "Incluence", url: "https://incluence.com" },
      areaServed: "Worldwide",
      url: p.seo.canonical,
    };
    if (p.seo.schemaPrice) {
      schema.offers = { "@type": "Offer", priceCurrency: p.seo.schemaCurrency || "EUR", price: p.seo.schemaPrice };
    }
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = p.seo.schemaId;
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);

    return () => {
      document.querySelector(`#${p.seo!.schemaId}`)?.remove();
      can?.remove();
    };
  }, [p.seo]);

  const formFields = p.formFields || ["Full Name", "Company Name", "Service Interest", "Launch Timeline"];
  const formTextareaLabel = p.formTextareaLabel || "Additional details — target markets, existing structure, requirements...";
  const formButtonText = p.formButtonText || "Send Request →";

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>
      {/* ── BREADCRUMB ── */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[11px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to={p.categoryHref} className="text-[#5A5550] hover:text-[#9A9590] transition-colors">{p.categoryLabel}</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">{p.titleAccent} {p.titleRest}</span>
          </div>
        </nav>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 520 }}>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle,rgba(68,76,231,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="z-[1] relative"><MicroParticles /></div>

        <div className="relative z-10 max-w-screen-xl mx-auto py-[88px] px-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            <div className="max-w-[580px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— {p.categoryLabel}</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,56px)] font-light text-[#F0EBE0] leading-[1.1] mb-6">
                <span style={{ background: "linear-gradient(135deg,#444CE7 0%,#6172F3 50%,#818CF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {p.titleAccent}
                </span>{" "}
                {p.titleRest}
              </h1>
              <p className="text-[15px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-8">
                {p.description}
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block">
                  Get a Free Quote →
                </Link>
                <button
                  onClick={() => document.getElementById("requirements")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-7 py-3 border border-white/15 hover:border-white/35 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] transition-all bg-transparent cursor-pointer"
                >
                  View Requirements
                </button>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:flex items-center justify-center w-full lg:w-[480px] shrink-0">
              {p.heroVisual}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="border-t border-b border-white/[0.06]">
            <div className="max-w-[1200px] mx-auto grid" style={{ gridTemplateColumns: `repeat(${p.stats.length}, 1fr)` }}>
              {p.stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-8 border-r border-white/[0.06] last:border-r-0">
                  <span className="text-[22px] font-light text-[#F0EBE0] whitespace-nowrap">{s.value}</span>
                  <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT + BENEFITS ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— {p.aboutTag}</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">{p.aboutTitle}</h2>
            <div className="space-y-4 text-[14px] text-[#9A9590] leading-[1.85]">
              {p.aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className="col-span-5 space-y-3">
            {p.benefits.map((b, i) => (
              <div key={i} className="bg-[#080808] border border-white/[0.06] p-5 group relative overflow-hidden">
                <CornerAccent />
                <ScanSweep />
                <div className="w-5 h-5 text-[#444CE7] mb-3">{b.icon}</div>
                <h3 className="text-[15px] font-medium text-[#F0EBE0] mb-2">{b.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-[1.7]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">{p.processTitle}</h2>
          <p className="text-[14px] text-[#9A9590] leading-[1.8] max-w-[480px] mb-12">{p.processSubtitle}</p>

          <div className="relative">
            <ProcessFlowCanvas />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px relative z-10" style={{ background: "rgba(255,255,255,0.06)" }}>
              {p.steps.map((step, i) => (
                <div key={i} className="bg-[#080808] p-6 relative group">
                  <span className="text-[11px] text-[#444CE7]/60 uppercase tracking-[0.12em] block mb-3">{step.number}</span>
                  <h3 className="text-[16px] font-medium text-[#F0EBE0] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-[1.7]">{step.description}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#444CE7] group-hover:w-full transition-all duration-300" />
                </div>
              ))}
              {/* Fill empty grid cell if steps not divisible by 3 */}
              {p.steps.length % 3 !== 0 && <div className="bg-[#080808]" />}
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS + KEY FACTS ── */}
      <section id="requirements" style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-4">Documents & Eligibility</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8] mb-8">{p.requirementsIntro}</p>
            <div className="border-l-2 border-[#444CE7]/20 pl-6 space-y-3">
              {p.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-[1.7]">{req}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-5">
            <div className="sticky top-[80px] bg-[#080808] border border-white/[0.06] p-8 group relative overflow-hidden">
              <ScanSweep />
              <div className="absolute top-6 right-6">
                <div className="relative" style={{ width: 8, height: 8 }}>
                  <div className="absolute inset-0 bg-[#22c55e]" />
                  <div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "pd 2s ease-out infinite" }} />
                </div>
              </div>
              <style>{`@keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}`}</style>
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Key Facts</span>
              <div className="divide-y divide-white/[0.05] mt-4">
                {p.keyFacts.map((fact, i) => (
                  <div key={i} className="flex justify-between py-3">
                    <span className="text-[12px] text-[#5A5550]">{fact.label}</span>
                    <span className="text-[12px] font-medium text-[#F0EBE0]">{fact.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors inline-block w-full text-center">
                  Get a Free Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROS & CONS ── */}
      {(p.advantages?.length || p.limitations?.length) && (
      <section style={{ background: "#111111" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Advantages & Limitations</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Pros & Cons</h2>
          <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[14px] font-medium text-[#22c55e] uppercase tracking-[0.08em] mb-6">Advantages</h3>
              <div className="space-y-3">
                {(p.advantages ?? []).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] p-8">
              <h3 className="text-[14px] font-medium text-[#ef4444] uppercase tracking-[0.08em] mb-6">Limitations</h3>
              <div className="space-y-3">
                {(p.limitations ?? []).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-[#ef4444] mt-0.5 shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ── FAQ ── */}
      <section style={{ background: "#0d0d0d" }}>
        <div className="max-w-screen-xl mx-auto py-[72px] px-12">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mb-12">Common Questions</h2>
          <FAQAccordion items={p.faq} />
        </div>
      </section>

      {/* ── RELATED ── */}
      <RelatedJurisdictions items={p.related.map(r => ({ href: r.href, reg: r.regulator, name: r.name, desc: r.description }))} />

      {/* ── CONTACT FORM ── */}
      <section style={{ background: "#080808" }}>
        <div className="max-w-screen-xl mx-auto py-[88px] px-12 grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get Started</span>
            <h2 className="text-[clamp(22px,2.5vw,30px)] font-light text-[#F0EBE0] leading-[1.2] mb-6">{p.formTitle}</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">{p.formSubtitle}</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {formFields.map((label) => (
                  <div key={label}>
                    <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{label}</label>
                    <input type="text" className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em] block mb-2">{formTextareaLabel}</label>
                <textarea rows={4} className="w-full bg-[#0d0d0d] border border-white/[0.06] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7]/40 focus:outline-none transition-colors resize-none" style={{ fontFamily: "inherit" }} />
              </div>
              <button type="submit" className="px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer border-0">
                {formButtonText}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicenseDetailPage;
