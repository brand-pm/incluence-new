import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, Check, X } from "lucide-react";
import { useLicensePage } from "@/hooks/useSanityPage";

const BLUE_BG = "linear-gradient(180deg, #0f1029 0%, #111133 50%, #0f1029 100%)";
const BLUE_CARD = "#0f1029";

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
  heroVisual?: React.ReactNode;
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

const pickText = (...sources: (string | null | undefined)[]): string => {
  const valid = sources.filter((s): s is string => Boolean(s && s.length > 0));
  if (valid.length === 0) return "";
  const complete = valid.find((s) => /[.!?)"»]$/.test(s.trim()));
  if (complete) return complete;
  return valid.sort((a, b) => b.length - a.length)[0];
};

const heroSubtitle = (text: string): string => {
  if (!text) return "";
  if (text.length <= 180) return text;
  const cut = text.slice(0, 180);
  const lastDot = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
  if (lastDot > 80) return text.slice(0, lastDot + 1);
  return cut.replace(/\s+\S*$/, "") + "…";
};

const highlightText = (text: string): React.ReactNode => {
  if (!text) return null;
  const parts = text.split(/((?:from\s+\d[\d.,]*\s+to\s+|up\s+to\s+|at\s+least\s+|starting\s+from\s+|no\s+more\s+than\s+|about\s+|approximately\s+)?(?:\$|€|£)?\d[\d.,]*(?:\s+to\s+\d[\d.,]*)?\s*(?:%|percent|years?|months?|weeks?|days?|hours?)|(?:from\s+\d[\d.,]*\s+to\s+|up\s+to\s+|at\s+least\s+|starting\s+from\s+|about\s+|approximately\s+)?(?:\$|€|£)\d[\d.,]*(?:\s+to\s+(?:\$|€|£)?\d[\d.,]*)?|\d[\d.,]*\s*(?:EUR|USD|GBP)|\b\d{1,2}\s*(?:–|-)\s*\d{1,2}\s*(?:months?|weeks?|days?))/gi);
  if (parts.length <= 1) return text;
  return parts.map((part, i) => {
    if (i % 2 === 1) return <span key={i} className="text-[#F0EBE0] font-semibold">{part}</span>;
    return part;
  });
};

type ParagraphType = "intro" | "requirements" | "costs" | "timeline" | "body";

const classifyParagraph = (text: string): ParagraphType => {
  const lower = text.toLowerCase();
  if (/\brequir|must\b|need to|obligat|shall\b|condition/i.test(lower)) return "requirements";
  if (/\$|€|£|fee|cost|tax|price|payment|capital/i.test(lower)) return "costs";
  if (/\bweek|\bmonth|\bday|\btimeline|duration|period|deadline/i.test(lower)) return "timeline";
  return "body";
};

const isListParagraph = (text: string): boolean => {
  const semicolons = (text.match(/;/g) || []).length;
  if (semicolons >= 2) return true;
  const dashLines = (text.match(/\n-\s/g) || []).length;
  if (dashLines >= 2) return true;
  return false;
};

const splitListItems = (text: string): string[] => {
  if (text.includes(";")) return text.split(/;\s*/).map(s => s.trim()).filter(Boolean);
  if (text.includes("\n-")) return text.split(/\n-\s*/).map(s => s.trim()).filter(Boolean);
  return [text];
};

const extractSubHeading = (text: string): { heading: string; body: string } | null => {
  const match = text.match(/^(?:\*\*(.+?)\*\*|([A-Z][^.]{3,50}):)\s*([\s\S]+)/);
  if (match) return { heading: match[1] || match[2], body: match[3] };
  return null;
};

const startsLike = (a: string, b: string, minLen = 50): boolean => {
  if (!a || !b) return false;
  return a.slice(0, minLen).trim() === b.slice(0, minLen).trim();
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

const AccentGlow = () => (
  <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "radial-gradient(ellipse 600px 400px at 50% 40%, rgba(68,76,231,0.06), transparent)" }} />
);

const GridDots = () => (
  <div className="absolute inset-0 pointer-events-none z-[1] opacity-60" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
);

const Skeleton = () => (
  <div className="min-h-screen" style={{ background: "#080808", fontFamily: "Manrope, sans-serif" }}>
    <div className="max-w-screen-xl mx-auto py-[120px] px-5 md:px-12 space-y-6">
      {[320, 480, 240].map((w, i) => (
        <div key={i} className="h-4 bg-[#111111] animate-pulse" style={{ maxWidth: w }} />
      ))}
    </div>
  </div>
);

const SmartParagraph: React.FC<{ text: string; type: ParagraphType }> = ({ text, type }) => {
  const subHeading = extractSubHeading(text);
  const isList = isListParagraph(subHeading ? subHeading.body : text);
  const bodyText = subHeading ? subHeading.body : text;

  const typeIndicator = type === "requirements"
    ? <span className="text-[10px] text-[#444CE7]/60 uppercase tracking-[0.1em] mb-2 block">Requirements</span>
    : type === "costs"
    ? <span className="text-[10px] text-[#f59e0b]/60 uppercase tracking-[0.1em] mb-2 block">Costs & Fees</span>
    : type === "timeline"
    ? <span className="text-[10px] text-[#22c55e]/60 uppercase tracking-[0.1em] mb-2 block">Timeline</span>
    : null;

  return (
    <div className="py-6 border-b border-white/[0.06] last:border-b-0">
      {typeIndicator}
      {subHeading && (
        <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-3">
          <span className="text-[#444CE7] mr-2">▸</span>{subHeading.heading}
        </h3>
      )}
      {isList ? (
        <div className="space-y-2.5 pl-1">
          {splitListItems(bodyText).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
              <span className="text-[13px] text-[#9A9590] leading-[1.7]">{highlightText(item)}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[14px] text-[#9A9590] leading-[1.85]">{highlightText(bodyText)}</p>
      )}
    </div>
  );
};

export const LicenseDetailPage: React.FC<LicenseDetailPageProps> = (props) => {
  const { data, isLoading, isError } = useLicensePage(props.slug || "", props);
  const raw = (data || {}) as Partial<LicenseDetailPageProps>;

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

  const sanityDesc = raw.description || "";
  const propsDesc = props.description || "";
  const aboutFirst = p.aboutParagraphs?.[0] || "";
  const fullDescription = pickText(sanityDesc, aboutFirst, propsDesc);
  const heroDesc = heroSubtitle(fullDescription);

  const dedupedParagraphs = p.aboutParagraphs.filter((para, i) => {
    if (i === 0 && startsLike(para, fullDescription)) return false;
    return true;
  });
  const bodyParagraphs = dedupedParagraphs.length > 0 ? dedupedParagraphs : (fullDescription ? [fullDescription] : []);

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

  const facts = p.keyFacts.length > 0
    ? p.keyFacts
    : p.stats.length > 0
      ? p.stats.map((s) => ({ label: s.label, value: s.value }))
      : [];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* ── BREADCRUMB — flat ── */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-5 md:px-12">
          <div className="flex items-center gap-2 text-[12px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <Link to={p.categoryHref} className="text-[#5A5550] hover:text-[#9A9590] transition-colors">{p.categoryLabel}</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590] line-clamp-1">{p.titleAccent} {p.titleRest}</span>
          </div>
        </nav>
      </section>

      {/* ── HERO — flat ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808" }}>
        <NoiseOverlay />
        <div className="relative z-10 max-w-screen-xl mx-auto py-12 md:py-[64px] px-5 md:px-12">
          <h1 className="text-[clamp(28px,4vw,52px)] font-light text-[#F0EBE0] leading-tight">
            <span className="text-[#444CE7]">{p.titleAccent}</span>{" "}{p.titleRest}
          </h1>
        </div>
      </section>

      {/* ── FACTS STRIP ── */}
      {facts.length > 0 && (
        <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px">
          {facts.slice(0, 6).map((f, i) => (
            <div key={i} className="bg-[#080808] p-5 md:p-7 group relative overflow-hidden cursor-default" style={{ backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
              <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-3 block">{f.label}</span>
              <span className={`text-[14px] md:text-[15px] font-medium ${i === 0 ? "text-[#444CE7] font-semibold" : "text-[#F0EBE0]"}`}>{f.value}</span>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      )}

      {/* ── ABOUT — BLUE GRADIENT + accent glow ── */}
      {bodyParagraphs.length > 0 && (
        <section id="about-section" className="relative overflow-hidden py-12 md:py-[72px] px-5 md:px-12" style={{ background: BLUE_BG }}>
          <AccentGlow />
          <NoiseOverlay />
          <div className="relative z-10 max-w-screen-xl mx-auto">
            <Tag>{p.aboutTag || "About"}</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-4">{p.aboutTitle || `About ${p.titleAccent} ${p.titleRest}`}</h2>

            <div className="max-w-[800px] mb-8">
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">{highlightText(bodyParagraphs[0])}</p>
            </div>

            {bodyParagraphs.length > 1 && (
              <div className="max-w-[800px]">
                {bodyParagraphs.slice(1).map((para, i) => (
                  <SmartParagraph key={i} text={para} type={classifyParagraph(para)} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── PROCESS — flat ── */}
      {p.steps.length > 0 && (
        <section style={{ background: "#0d0d0d" }} className="py-12 md:py-[72px] px-5 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Process</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-3">{p.processTitle}</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed max-w-[520px] mb-14">{p.processSubtitle}</p>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
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

      {/* ── REQUIREMENTS — BLUE GRADIENT + grid dots ── */}
      {p.requirements.length > 0 && (
        <section id="requirements" className="relative overflow-hidden py-12 md:py-[72px] px-5 md:px-12" style={{ background: BLUE_BG }}>
          <GridDots />
          <NoiseOverlay />
          <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-7">
              <Tag>Requirements</Tag>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-4">Documents & Eligibility</h2>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-8">{highlightText(p.requirementsIntro)}</p>
              <div className="border-l border-[#444CE7]/20 pl-5 space-y-3">
                {p.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
                    <span className="text-[13px] text-[#9A9590] leading-[1.7]">{highlightText(req)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="md:sticky md:top-[100px] border border-white/[0.06] p-6 md:p-8" style={{ background: BLUE_CARD }}>
                <h4 className="text-[13px] font-semibold text-[#F0EBE0] uppercase tracking-[0.08em] mb-6">Key Facts</h4>
                <div className="space-y-4">
                  {facts.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#444CE7] mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#9A9590]">{f.label}: <span className="text-[#F0EBE0] font-medium">{f.value}</span></span>
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

      {/* ── PROS & CONS — flat ── */}
      {(p.advantages.length > 0 || p.limitations.length > 0) && (
        <section style={{ background: "#0d0d0d" }} className="py-12 md:py-[72px] px-5 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Advantages & Limitations</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-12">Pros & Cons</h2>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-2 gap-px">
              <div className="bg-[#0d0d0d] p-6 md:p-8">
                <span className="text-[11px] text-[#22c55e]/70 uppercase tracking-[0.1em] block mb-6">Advantages</span>
                <div className="space-y-4">
                  {p.advantages.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                      <span className="text-[13px] text-[#9A9590] leading-[1.7]">{highlightText(item)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#111111] p-6 md:p-8">
                <span className="text-[11px] text-[#f59e0b]/70 uppercase tracking-[0.1em] block mb-6">Limitations</span>
                <div className="space-y-4">
                  {p.limitations.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                      <span className="text-[13px] text-[#9A9590] leading-[1.7]">{highlightText(item)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ — BLUE GRADIENT ── */}
      {p.faq.length > 0 && (
        <section className="relative overflow-hidden py-12 md:py-[72px] px-5 md:px-12" style={{ background: BLUE_BG }}>
          <AccentGlow />
          <NoiseOverlay />
          <div className="relative z-10 max-w-screen-xl mx-auto">
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
                    <p className="text-[13px] text-[#9A9590] leading-[1.85] pb-5">{highlightText(item.answer.replace(/\n+---\s*$/, ""))}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED — flat ── */}
      {p.related.length > 0 && (
        <section style={{ background: "#0d0d0d" }} className="py-12 md:py-[72px] px-5 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Related Licenses</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-12">Explore Other Jurisdictions</h2>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
              {p.related.map((r, i) => (
                <Link key={i} to={r.href} className="bg-[#0d0d0d] p-7 group relative overflow-hidden block no-underline">
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

      {/* ── CTA FORM — BLUE GRADIENT + accent glow ── */}
      <section className="relative overflow-hidden py-12 md:py-[72px] px-5 md:px-12" style={{ background: BLUE_BG }}>
        <AccentGlow />
        <NoiseOverlay />
        <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 md:pr-8" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            <Tag>Get Started</Tag>
            <h2 className="text-[clamp(20px,2vw,28px)] font-light text-[#F0EBE0] leading-[1.4] mt-2 mb-6 max-w-[400px]">{p.formTitle}</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">{p.formSubtitle}</p>
          </div>
          <div className="md:col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {formFields.map((label) => (
                  <div key={label}>
                    <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{label}</label>
                    <input type="text" className="w-full border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none" style={{ fontFamily: "inherit", background: BLUE_CARD }} />
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{formTextareaLabel}</label>
                <textarea className="w-full border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none min-h-[100px] resize-none" style={{ fontFamily: "inherit", background: BLUE_CARD }} />
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
