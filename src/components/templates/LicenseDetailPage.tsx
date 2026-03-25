import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, Check, X } from "lucide-react";
import { useLicensePage } from "@/hooks/useSanityPage";

interface StatItem { value: string; label: string }
interface BenefitCard { icon: React.ReactNode; title: string; description: string }
interface ProcessStep { number: string; title: string; description: string }
interface KeyFactItem { label: string; value: string }
interface FAQItem { question: string; answer: string }
interface RelatedLicense { regulator: string; name: string; description: string; href: string }

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
    title: string; description: string; keywords: string; canonical: string;
    schemaId: string; schemaName: string; schemaPrice?: string; schemaCurrency?: string;
  };
  slug?: string;
}

const pick = <T,>(...sources: (T[] | null | undefined)[]): T[] => {
  for (const s of sources) { if (s && s.length > 0) return s; }
  return [];
};

/** Pick the best description text. If the first source looks truncated (doesn't
 *  end with sentence-ending punctuation), prefer a longer alternative. */
const pickText = (...sources: (string | null | undefined)[]): string => {
  const valid = sources.filter((s): s is string => Boolean(s && s.length > 0));
  if (valid.length === 0) return "";
  const complete = valid.find((s) => /[.!?)"»]$/.test(s.trim()));
  if (complete) return complete;
  return valid.sort((a, b) => b.length - a.length)[0];
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— {children}</span>
);

const NoiseOverlay = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-[2]">
    <filter id="noise"><feTurbulence baseFrequency="0.85" numOctaves="4" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

const Skeleton = () => (
  <div className="min-h-screen" style={{ background: "#080808", fontFamily: "Manrope, sans-serif" }}>
    <div className="max-w-screen-xl mx-auto py-[120px] px-12 space-y-6">
      {[320, 480, 240].map((w, i) => (
        <div key={i} className="h-4 bg-[#111111] animate-pulse" style={{ maxWidth: w }} />
      ))}
    </div>
  </div>
);

export const LicenseDetailPage: React.FC<LicenseDetailPageProps> = (props) => {
  const { data, isLoading, isError } = useLicensePage(props.slug || "", props);
  const raw = (data || {}) as Partial<LicenseDetailPageProps>;

  // Merge Sanity data with hardcoded props, preferring Sanity when non-empty
  const p = {
    ...props,
    ...raw,
    stats: pick(raw.stats, props.stats),
    aboutParagraphs: pick(raw.aboutParagraphs, props.aboutParagraphs),
    benefits: pick(raw.benefits, props.benefits),
    steps: pick(raw.steps, props.steps),
    requirements: pick(raw.requirements, props.requirements),
    keyFacts: pick(raw.keyFacts, props.keyFacts),
    advantages: pick(raw.advantages, props.advantages),
    limitations: pick(raw.limitations, props.limitations),
    faq: pick(raw.faq, props.faq),
    related: pick(raw.related, props.related),
    heroVisual: props.heroVisual,
  };

  // Description: if Sanity description is truncated, use aboutParagraphs[0] instead
  const sanityDesc = raw.description || "";
  const propsDesc = props.description || "";
  const aboutFirst = p.aboutParagraphs?.[0] || "";
  const heroDescription = pickText(sanityDesc, aboutFirst, propsDesc);

  const [openFaq, setOpenFaq] = useState<number[]>([]);
  const toggleFaq = (i: number) => setOpenFaq((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  useEffect(() => {
    if (!p.seo) return;
    document.title = p.seo.title;
    const setMeta = (n: string, c: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = n; document.head.appendChild(el); }
      el.content = c;
    };
    setMeta("description", p.seo.description);
    setMeta("keywords", p.seo.keywords);
  }, [p.seo]);

  if (isLoading) return <Skeleton />;
  if (isError) return <div className="min-h-screen bg-[#080808] flex items-center justify-center text-[#9A9590]" style={{ fontFamily: "Manrope, sans-serif" }}>Failed to load page data.</div>;

  const formFields = p.formFields || ["Full Name", "Company Name", "Service Interest", "Launch Timeline"];
  const formTextareaLabel = p.formTextareaLabel || "Additional details — target markets, existing structure, requirements...";
  const formButtonText = p.formButtonText || "SEND REQUEST →";

  // Facts: prefer keyFacts, then stats mapped to same shape
  const facts = p.keyFacts.length > 0
    ? p.keyFacts
    : p.stats.length > 0
      ? p.stats.map((s) => ({ label: s.label, value: s.value }))
      : [];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* ── BREADCRUMB ── */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-12">
          <div className="flex items-center gap-2 text-[12px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to={p.categoryHref} className="text-[#5A5550] hover:text-[#9A9590] transition-colors">{p.categoryLabel}</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590]">{p.titleAccent} {p.titleRest}</span>
          </div>
        </nav>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 560 }}>
        <NoiseOverlay />
        <div className="relative z-10 max-w-screen-xl mx-auto py-[80px] px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— {p.categoryLabel}</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{p.aboutTag}</span>
            </div>
            <h1 className="text-[clamp(32px,4vw,52px)] font-light text-[#F0EBE0] leading-tight mb-5">
              <span className="text-[#444CE7]">{p.titleAccent}</span>{" "}{p.titleRest}
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-relaxed mb-10 max-w-[520px]">{heroDescription}</p>
            <div className="flex gap-3">
              <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">
                Get a Free Quote →
              </Link>
              <button onClick={() => document.getElementById("requirements")?.scrollIntoView({ behavior: "smooth" })} className="px-7 py-3 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] border border-white/15 hover:border-white/35 transition-all bg-transparent cursor-pointer" style={{ fontFamily: "inherit" }}>
                View Requirements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTS STRIP — only render if we have data ── */}
      {facts.length > 0 && (
        <div className="bg-[rgba(255,255,255,0.06)] grid gap-px" style={{ gridTemplateColumns: `repeat(${Math.min(facts.length, 6)}, 1fr)` }}>
          {facts.slice(0, 6).map((f, i) => (
            <div key={i} className="bg-[#080808] p-7 group relative overflow-hidden cursor-default" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
              <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-3 block">{f.label}</span>
              <span className={`text-[15px] font-medium ${i === 0 ? "text-[#444CE7] font-semibold" : "text-[#F0EBE0]"}`}>{f.value}</span>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      )}

      {/* ── ABOUT (aboutParagraphs) ── */}
      {p.aboutParagraphs.length > 0 && (
        <section style={{ background: "#111111" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>{p.aboutTag || "About"}</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-8">{p.aboutTitle || `About ${p.titleAccent} ${p.titleRest}`}</h2>
            <div className="max-w-[720px] space-y-6">
              {p.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-[14px] text-[#9A9590] leading-[1.85] whitespace-pre-line">{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS — only if steps exist ── */}
      {p.steps.length > 0 && (
        <section style={{ background: "#0d0d0d" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Process</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-3">{p.processTitle}</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed max-w-[520px] mb-14">{p.processSubtitle}</p>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
              {p.steps.map((step, i) => (
                <div key={i} className="bg-[#0d0d0d] p-7 group relative overflow-hidden">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">{step.number}</span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">{step.description}</p>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── REQUIREMENTS — only if data exists ── */}
      {p.requirements.length > 0 && (
        <section id="requirements" style={{ background: "#111111" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <Tag>Requirements</Tag>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-4">Documents & Eligibility</h2>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-8">{p.requirementsIntro}</p>
              <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4">Required Documents</h3>
              <div className="border-l border-[#444CE7]/20 pl-5 space-y-3">
                {p.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5">
              <div className="sticky top-[100px] bg-[#080808] border border-white/[0.06] p-8">
                <h4 className="text-[13px] font-semibold text-[#F0EBE0] uppercase tracking-[0.08em] mb-6">Key Facts</h4>
                <div className="space-y-4">
                  {facts.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#444CE7] mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#9A9590]">{f.label}: {f.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <Link to="/contact" className="block px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors text-center">
                    Get a Free Quote →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PROS & CONS — only if data exists ── */}
      {(p.advantages.length > 0 || p.limitations.length > 0) && (
        <section style={{ background: "#0d0d0d" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Advantages & Limitations</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-12">Pros & Cons</h2>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
              <div className="bg-[#0d0d0d] p-8">
                <span className="text-[11px] text-[#22c55e]/70 uppercase tracking-[0.1em] block mb-6">Advantages</span>
                <div className="space-y-4">
                  {p.advantages.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                      <span className="text-[13px] text-[#9A9590] leading-[1.7]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#111111] p-8">
                <span className="text-[11px] text-[#f59e0b]/70 uppercase tracking-[0.1em] block mb-6">Limitations</span>
                <div className="space-y-4">
                  {p.limitations.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                      <span className="text-[13px] text-[#9A9590] leading-[1.7]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ — only if data exists ── */}
      {p.faq.length > 0 && (
        <section style={{ background: "#0d0d0d" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>FAQ</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-12">Common Questions</h2>
            <div className="max-w-[720px] divide-y divide-white/[0.06]">
              {p.faq.map((item, i) => (
                <div key={i}>
                  <button onClick={() => toggleFaq(i)} className="flex justify-between items-center w-full py-5 cursor-pointer text-left bg-transparent border-0" style={{ fontFamily: "inherit" }}>
                    <span className="text-[15px] font-medium text-[#F0EBE0] pr-8">{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#5A5550] shrink-0 transition-transform duration-300 ${openFaq.includes(i) ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq.includes(i) && (
                    <p className="text-[13px] text-[#9A9590] leading-[1.85] pb-5 whitespace-pre-line">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED — only if data exists ── */}
      {p.related.length > 0 && (
        <section style={{ background: "#111111" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Related Licenses</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-12">Explore Other Jurisdictions</h2>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
              {p.related.map((r, i) => (
                <Link key={i} to={r.href} className="bg-[#111111] p-7 group relative overflow-hidden block no-underline">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-2">{r.regulator}</span>
                  <h3 className="text-[16px] font-semibold text-[#F0EBE0] mb-2">{r.name}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">{r.description}</p>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FORM ── */}
      <section style={{ background: "#080808" }} className="py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <Tag>Get Started</Tag>
            <h2 className="text-[clamp(22px,2.5vw,30px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-6">{p.formTitle}</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">{p.formSubtitle}</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5 mb-5">
                {formFields.map((label) => (
                  <div key={label}>
                    <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{label}</label>
                    <input type="text" className="w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{formTextareaLabel}</label>
                <textarea className="w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none min-h-[100px] resize-none" style={{ fontFamily: "inherit" }} />
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0" style={{ fontFamily: "inherit" }}>
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
