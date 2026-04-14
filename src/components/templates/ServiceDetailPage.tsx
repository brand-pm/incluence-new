import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useServicePage } from "@/hooks/useSanityPage";

interface FAQItem { question: string; answer: string }
interface ContentSection { heading: string; body: string }

interface ServiceDetailPageProps {
  title: string;
  description: string;
  sections?: ContentSection[];
  requirements?: string[];
  faq?: FAQItem[];
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

const firstSentence = (text: string): string => {
  if (!text) return "";
  const match = text.match(/^(.+?[.!?])\s/);
  if (match && match[1].length > 30) return match[1];
  if (text.length <= 160) return text;
  return text.slice(0, 160).replace(/\s+\S*$/, "") + "…";
};

const highlightText = (text: string): React.ReactNode => {
  if (!text) return null;
  const parts = text.split(/((?:\$|€|£)?\d[\d.,]*\s*(?:%|percent|years?|months?|weeks?|days?|hours?)|\d[\d.,]*\s*(?:EUR|USD|GBP)|\b\d{1,2}\s*(?:–|-)\s*\d{1,2}\s*(?:months?|weeks?))/gi);
  if (parts.length <= 1) return text;
  return parts.map((part, i) => {
    if (i % 2 === 1) return <span key={i} className="text-[#F0EBE0] font-semibold">{part}</span>;
    return part;
  });
};

const startsLike = (a: string, b: string, minLen = 50): boolean => {
  if (!a || !b) return false;
  return a.slice(0, minLen).trim() === b.slice(0, minLen).trim();
};

const isListContent = (text: string): boolean => {
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

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— {children}</span>
);

const NoiseOverlay = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-[2]">
    <filter id="svc-noise"><feTurbulence baseFrequency="0.85" numOctaves="4" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#svc-noise)" />
  </svg>
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

const SectionBody: React.FC<{ body: string }> = ({ body }) => {
  if (isListContent(body)) {
    const items = splitListItems(body);
    const firstIsIntro = items[0] && items[0].length > 80 && !items[0].includes(":");
    return (
      <div>
        {firstIsIntro && (
          <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-4">{highlightText(items[0])}</p>
        )}
        <div className="space-y-2.5 pl-1">
          {(firstIsIntro ? items.slice(1) : items).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
              <span className="text-[13px] text-[#9A9590] leading-[1.7]">{highlightText(item)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const paragraphs = body.split(/\n\n+/).filter(Boolean);
  return (
    <div className="space-y-4">
      {paragraphs.map((para, i) => (
        <p key={i} className="text-[14px] text-[#9A9590] leading-[1.85]">{highlightText(para)}</p>
      ))}
    </div>
  );
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = (props) => {
  const fallback = {
    title: props.title,
    description: props.description,
    sections: props.sections || [],
    requirements: props.requirements || [],
    faq: props.faq || [],
  };
  const { data, isLoading, isError } = useServicePage(props.slug || "", fallback);
  const d = (data || fallback) as typeof fallback;
  const title = d.title || fallback.title;

  const sanityDesc = d.description || "";
  const fallbackDesc = fallback.description || "";
  const sectionBody = d.sections?.[0]?.body || "";
  const fullDescription = pickText(sanityDesc, sectionBody, fallbackDesc);
  const heroDesc = firstSentence(fullDescription);

  const sections = pick(d.sections, fallback.sections);
  const requirements = pick(d.requirements, fallback.requirements);
  const faq = pick(d.faq, fallback.faq);

  const dedupedSections = sections.map((sec, i) => {
    if (i === 0 && startsLike(sec.body, fullDescription)) {
      return { ...sec, body: "" };
    }
    return sec;
  }).filter(sec => sec.body.trim().length > 0 || sec.heading.trim().length > 0);

  const [openFaq, setOpenFaq] = useState<number[]>([]);
  const toggleFaq = (i: number) => setOpenFaq((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbLabel = pathSegments[pathSegments.length - 1]?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || title;

  if (isLoading) return <Skeleton />;
  if (isError) return <div className="min-h-screen bg-[#080808] flex items-center justify-center text-[#9A9590]" style={{ fontFamily: "Manrope, sans-serif" }}>Failed to load page data.</div>;

  const sectionBgs = ["#111111", "#0d0d0d"];

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* ── BREADCRUMB ── */}
      <section style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-screen-xl mx-auto py-3.5 px-5 md:px-12">
          <div className="flex items-center gap-2 text-[12px]">
            <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3 text-[#5A5550]" />
            <span className="text-[#9A9590] line-clamp-1">{breadcrumbLabel}</span>
          </div>
        </nav>
      </section>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808", minHeight: 420 }}>
        <NoiseOverlay />
        <div className="relative z-10 max-w-screen-xl mx-auto py-16 md:py-[80px] px-5 md:px-12">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-5">
              <Tag>Services</Tag>
            </div>
            <h1 className="text-[clamp(28px,4vw,52px)] font-light text-[#F0EBE0] leading-tight mb-5">
              {title}
            </h1>
            <p className="text-[15px] text-[#9A9590] leading-relaxed mb-10 max-w-[520px]">{heroDesc}</p>
            <Link to="/contact" className="inline-block px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">
              Discuss the Project →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      {fullDescription && fullDescription.length > 0 && (
        <section style={{ background: "#111111" }} className="py-12 md:py-[72px] px-5 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Overview</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-6">About This Service</h2>
            <div className="max-w-[800px]">
              <p className="text-[14px] text-[#9A9590] leading-[1.85]">{highlightText(fullDescription)}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── CONTENT SECTIONS ── */}
      {dedupedSections.filter(s => s.body).map((sec, i) => (
        <section key={i} style={{ background: sectionBgs[(i + 1) % 2] }} className="py-12 md:py-[72px] px-5 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="text-[18px] font-semibold text-[#F0EBE0] mb-6">
              <span className="text-[#444CE7] mr-2">▸</span>{sec.heading}
            </h3>
            <div className="max-w-[800px]">
              <SectionBody body={sec.body} />
            </div>
          </div>
        </section>
      ))}

      {/* ── REQUIREMENTS ── */}
      {requirements.length > 0 && (
        <section style={{ background: "#0d0d0d" }} className="py-12 md:py-[72px] px-5 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Requirements</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-14">What You'll Need</h2>
            <div className="max-w-[800px] space-y-3">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[5px] h-[5px] bg-[#444CE7]/40 mt-[7px] shrink-0" />
                  <span className="text-[13px] text-[#9A9590] leading-[1.7]">{highlightText(req)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY US ── */}
      <section style={{ background: "#111111" }} className="py-12 md:py-[72px] px-5 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <Tag>Why Incluence</Tag>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-14">Why Work With Us</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-px">
            {[
              { metric: "500+", title: "Companies Registered", body: "Across 50+ jurisdictions worldwide with full compliance support." },
              { metric: "12+", title: "Years of Experience", body: "Trusted by entrepreneurs and corporations globally since 2012." },
              { metric: "24h", title: "Response Time", body: "Every inquiry gets a senior consultant response within one business day." },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] p-7">
                <span className="text-[40px] font-light text-[#444CE7] leading-none mb-3 block">{item.metric}</span>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {faq.length > 0 && (
        <section style={{ background: "#0d0d0d" }} className="py-12 md:py-[72px] px-5 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>FAQ</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-12">Common Questions</h2>
            <div className="max-w-[720px] divide-y divide-white/[0.06]">
              {faq.map((item, i) => (
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

      {/* ── CTA FORM ── */}
      <section style={{ background: "#080808" }} className="py-12 md:py-[72px] px-5 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 md:pr-8" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
            <Tag>Get Started</Tag>
            <h2 className="text-[clamp(20px,2vw,28px)] font-light text-[#F0EBE0] leading-[1.4] mt-2 mb-6 max-w-[400px]">Ready to Discuss Your Project?</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">Fill out the form and our team will contact you within 24 hours with a detailed consultation plan.</p>
          </div>
          <div className="md:col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {["Full Name", "Company Name", "Service Interest", "Budget Range"].map((label) => (
                  <div key={label}>
                    <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{label}</label>
                    <input type="text" className="w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">Additional details — target markets, timeline, requirements...</label>
                <textarea className="w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none min-h-[100px] resize-none" style={{ fontFamily: "inherit" }} />
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors cursor-pointer border-0" style={{ fontFamily: "inherit" }}>
                SEND REQUEST →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
export { ServiceDetailPage };
