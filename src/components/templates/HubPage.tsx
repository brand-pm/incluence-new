import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useHubPage } from "@/hooks/useSanityPage";

interface JurisdictionCard {
  regulator: string;
  name: string;
  description: string;
  timeline?: string;
  href: string;
  badge?: string;
}
interface HubStat { value: string; label: string }
interface HubStep { number: string; title: string; description: string }
interface HubFAQItem { question: string; answer: string }

interface HubPageProps {
  categoryTag: string;
  titleAccent: string;
  titleRest: string;
  description: string;
  stats: HubStat[];
  jurisdictionsTitle: string;
  jurisdictionsSubtitle: string;
  jurisdictions: JurisdictionCard[];
  processTitle: string;
  processSubtitle: string;
  steps: HubStep[];
  requirementsTitle: string;
  requirementsIntro: string;
  requirements: string[];
  faq: HubFAQItem[];
  formTitle: string;
  formSubtitle: string;
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

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— {children}</span>
);

const NoiseOverlay = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-[2]">
    <filter id="hub-noise"><feTurbulence baseFrequency="0.85" numOctaves="4" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#hub-noise)" />
  </svg>
);

const Skeleton = () => (
  <div className="min-h-screen" style={{ background: "#080808", fontFamily: "Manrope, sans-serif" }}>
    <div className="max-w-screen-xl mx-auto py-[140px] px-12 space-y-6">
      {[400, 560, 280].map((w, i) => (
        <div key={i} className="h-5 bg-[#111111] animate-pulse" style={{ maxWidth: w }} />
      ))}
    </div>
  </div>
);

const badgeClass = (badge?: string) => {
  if (!badge) return "";
  const b = badge.toLowerCase();
  if (b.includes("popular") || b.includes("fast")) return "border-[#22c55e]/30 text-[#22c55e] bg-[#22c55e]/5";
  if (b.includes("offshore") || b.includes("fintech")) return "border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/5";
  return "border-[#444CE7]/30 text-[#6172F3] bg-[#444CE7]/10";
};

export const HubPage: React.FC<HubPageProps> = (props) => {
  const { data, isLoading, isError } = useHubPage(props.slug || "", props);
  const raw = (data || {}) as Partial<HubPageProps>;
  const p = {
    ...props,
    ...raw,
    description: pickText(raw.description, props.description),
    stats: pick(raw.stats, props.stats),
    jurisdictions: pick(raw.jurisdictions, props.jurisdictions),
    steps: pick(raw.steps, props.steps),
    requirements: pick(raw.requirements, props.requirements),
    faq: pick(raw.faq, props.faq),
  };

  const [openFaq, setOpenFaq] = useState<number[]>([]);
  const toggleFaq = (i: number) => setOpenFaq((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  useEffect(() => {
    document.title = `${p.titleAccent} ${p.titleRest} — Incluence`;
  }, [p.titleAccent, p.titleRest]);

  if (isLoading) return <Skeleton />;
  if (isError) return <div className="min-h-screen bg-[#080808] flex items-center justify-center text-[#9A9590]" style={{ fontFamily: "Manrope, sans-serif" }}>Failed to load page data.</div>;

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#080808" }}>
        <NoiseOverlay />
        <div className="relative z-10 max-w-screen-xl mx-auto pt-[140px] pb-[80px] px-12">
          <Tag>{p.categoryTag}</Tag>
          <h1 className="text-[clamp(36px,5vw,64px)] font-light text-[#F0EBE0] leading-tight mt-3 mb-5 max-w-[700px]">
            <span className="text-[#444CE7]">{p.titleAccent}</span>{" "}{p.titleRest}
          </h1>
          <p className="text-[15px] text-[#9A9590] leading-relaxed mb-10 max-w-[560px]">{p.description}</p>
          <div className="flex gap-3">
            <Link to="/contact" className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors">
              Get a Free Consultation →
            </Link>
            <button onClick={() => document.getElementById("jurisdictions")?.scrollIntoView({ behavior: "smooth" })} className="px-7 py-3 text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] border border-white/15 hover:border-white/35 transition-all bg-transparent cursor-pointer" style={{ fontFamily: "inherit" }}>
              View Jurisdictions
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP — only if stats exist ── */}
      {p.stats.length > 0 && (
        <div className="bg-[rgba(255,255,255,0.06)] grid gap-px" style={{ gridTemplateColumns: `repeat(${p.stats.length}, 1fr)` }}>
          {p.stats.map((s, i) => (
            <div key={i} className="bg-[#080808] p-7 group relative overflow-hidden cursor-default">
              <span className="text-[32px] font-light text-[#444CE7] leading-none block mb-2">{s.value}</span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.1em]">{s.label}</span>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      )}

      {/* ── JURISDICTION CARDS — only if data exists ── */}
      {p.jurisdictions.length > 0 && (
        <section id="jurisdictions" style={{ background: "#0d0d0d" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Jurisdictions</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-3">{p.jurisdictionsTitle || "Choose Your Jurisdiction"}</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed max-w-[520px] mb-14">{p.jurisdictionsSubtitle}</p>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
              {p.jurisdictions.map((j) => (
                <Link key={j.href} to={j.href} className="bg-[#0d0d0d] p-7 group relative overflow-hidden block no-underline">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[16px] font-semibold text-[#F0EBE0]">{j.name}</h3>
                    {j.badge && (
                      <span className={`inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider border ${badgeClass(j.badge)}`}>
                        {j.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.06em] block mb-5">{j.regulator}</span>
                  <div className="space-y-2 mb-5">
                    {j.description.split(/\.\s+/).filter(Boolean).slice(0, 3).map((sentence, si) => (
                      <div key={si} className="flex gap-2">
                        <div className="w-1 h-1 bg-[#444CE7] mt-2 flex-shrink-0" />
                        <span className="text-[13px] text-[#9A9590]">{sentence.replace(/\.$/, "")}</span>
                      </div>
                    ))}
                  </div>
                  {j.timeline && (
                    <div className="flex items-center justify-between mt-auto">
                      <span className="border border-[#444CE7]/30 text-[#444CE7] text-[11px] px-3 py-1">{j.timeline}</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS — only if steps exist ── */}
      {p.steps.length > 0 && (
        <section style={{ background: "#111111" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Process</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-3">{p.processTitle}</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed max-w-[520px] mb-14">{p.processSubtitle}</p>
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
              {p.steps.map((step, i) => (
                <div key={i} className="bg-[#111111] p-7 group relative overflow-hidden">
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
        <section style={{ background: "#111111" }} className="py-[72px] px-12">
          <div className="max-w-screen-xl mx-auto">
            <Tag>Requirements</Tag>
            <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-3">{p.requirementsTitle || "General Requirements"}</h2>
            <p className="text-[14px] text-[#9A9590] leading-relaxed max-w-[520px] mb-10">{p.requirementsIntro ? "" : ""}</p>
            <div className="max-w-[800px] space-y-6">
              {p.requirements.map((para, i) => (
                <p key={i} className="text-[14px] text-[#9A9590] leading-[1.85] whitespace-pre-line">{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY US ── */}
      <section style={{ background: "#0d0d0d" }} className="py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <Tag>Why Incluence</Tag>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-14">Why Work With Us</h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {[
              { metric: "500+", title: "Licenses Obtained", body: "Across 50+ jurisdictions worldwide with full compliance and legal support." },
              { metric: "12+", title: "Years of Experience", body: "Trusted by entrepreneurs and corporations globally since 2012." },
              { metric: "24h", title: "Response Time", body: "Every inquiry gets a senior consultant response within one business day." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0d0d0d] p-7">
                <span className="text-[40px] font-light text-[#444CE7] leading-none mb-3 block">{item.metric}</span>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — only if data exists ── */}
      {p.faq.length > 0 && (
        <section style={{ background: "#111111" }} className="py-[72px] px-12">
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

      {/* ── CTA FORM ── */}
      <section style={{ background: "#080808" }} className="py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <Tag>Get Started</Tag>
            <h2 className="text-[clamp(22px,2.5vw,30px)] font-light text-[#F0EBE0] leading-[1.2] mt-2 mb-6">{p.formTitle || "Ready to Get Started?"}</h2>
            <p className="text-[14px] text-[#9A9590] leading-[1.8]">{p.formSubtitle || "Fill out the form and our team will contact you within 24 hours."}</p>
          </div>
          <div className="col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5 mb-5">
                {["Full Name", "Company Name", "Target Market", "Budget Range"].map((label) => (
                  <div key={label}>
                    <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">{label}</label>
                    <input type="text" className="w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none" style={{ fontFamily: "inherit" }} />
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">Additional details — target markets, existing structure, timeline</label>
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

export default HubPage;
