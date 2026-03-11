import { useState, useRef, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import NodePulse from "@/components/NodePulse";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import VallettaFireflies from "@/components/VallettaFireflies";

/* ── Type definitions ─────────────────────────────────── */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroData {
  tag: string;
  subTag: string;
  titleAccent: string;
  titleRest: string;
  accentPosition?: 'start' | 'end'; // default 'start'
  description: string;
  cta1: string;
  cta2: string;
  heroOverlay?: string; // optional CSS gradient overlay
}

export interface FactItem {
  label: string;
  value: string;
  cls: string; // tailwind classes for value color/weight
}

export interface StepItem {
  num: string;
  title: string;
  body: string;
}

export interface FinalSteps {
  step7: StepItem;
  step8: StepItem & { badge?: string };
}

export interface RequirementsData {
  title?: string; // default "What you need to qualify"
  intro: string;
  notRequiredTitle?: string;
  notRequired?: string[];
  additionalText?: string;
  docsTitle: string;
  docs: string[];
  checklistDocs: string[];
  checklistNote: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedItem {
  href: string;
  flag: string;
  reg: string;
  name: string;
  desc: string;
}

export interface ContactData {
  tag: string;
  title: string;
  description: string;
  benefits: string[];
  licenseOptions: string[];
  defaultLicense: string;
}

export interface ProcessData {
  tag: string;
  title: string;
  subtitle: string;
}

export interface FireflyConfig {
  originX: number;
  originY: number;
  count: number;
}

export interface LicensePageProps {
  breadcrumbs: BreadcrumbItem[];
  hero: HeroData;
  mapSvg: ReactNode;
  fireflies: FireflyConfig;
  facts: FactItem[];
  process: ProcessData;
  steps: StepItem[];       // first 6 in grid-cols-3
  finalSteps: FinalSteps;  // steps 7 & 8
  requirements: RequirementsData;
  faqs: FaqItem[];
  relatedTag?: string;
  relatedTitle?: string;
  related: RelatedItem[];
  contact: ContactData;
}

/* ── Noise overlay (shared) ───────────────────────────── */

const NoiseOverlay = () => (
  <div
    className="absolute inset-0 pointer-events-none z-[2] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "128px 128px",
    }}
  />
);

/* ── Main Template ────────────────────────────────────── */

const LicensePageTemplate = ({
  breadcrumbs,
  hero,
  mapSvg,
  fireflies,
  facts,
  process,
  steps,
  finalSteps,
  requirements,
  faqs,
  relatedTag = "— Related",
  relatedTitle = "Other jurisdictions",
  related,
  contact,
}: LicensePageProps) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);
  const s6 = useRef<HTMLDivElement>(null);
  const s7 = useRef<HTMLDivElement>(null);
  const s8 = useRef<HTMLDivElement>(null);
  const stepRefs = [s1, s2, s3, s4, s5, s6, s7, s8];

  const inputClass =
    "w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none transition-colors";
  const labelClass =
    "block text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2";

  /* Split title on \n for <br/> */
  const titleParts = hero.titleRest.split("\n");

  return (
    <div
      className="bg-[#080808] text-[#F0EBE0]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* ── BREADCRUMB ── */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 text-[12px] text-[#5A5550]">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-3 h-3" />}
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-[#9A9590] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#9A9590]">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-[#080808] py-[80px] px-12 relative overflow-hidden min-h-[560px]">
        <VallettaFireflies
          originX={fireflies.originX}
          originY={fireflies.originY}
          count={fireflies.count}
        />
        {mapSvg}
        <NoiseOverlay />

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">
                — {hero.tag}
              </span>
              <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">
                {hero.subTag}
              </span>
            </div>

            <h1 className="text-[clamp(32px,4vw,52px)] font-light text-[#F0EBE0] leading-tight mb-5">
              <span className="text-[#444CE7]">{hero.titleAccent}</span>{" "}
              {titleParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < titleParts.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="text-[15px] text-[#9A9590] leading-relaxed mb-10 max-w-[520px]">
              {hero.description}
            </p>

            <div className="flex gap-3 flex-wrap">
              <button className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 border-0 cursor-pointer">
                {hero.cta1}
              </button>
              <button className="px-7 py-3 bg-transparent text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] border border-white/15 hover:border-white/35 transition-all duration-200 cursor-pointer">
                {hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTS STRIP ── */}
      <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-6 gap-px">
        {facts.map(({ label, value, cls }, i) => (
          <motion.div
            key={label}
            className="bg-[#080808] p-7 group relative overflow-hidden cursor-default"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(68,76,231,0.03) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.4,
              delay: i * 0.07,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ backgroundColor: "#0d0d0d" }}
          >
            <div className="scan-line" />
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
            <span className="block text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-3">
              {label}
            </span>
            <span className={`text-[15px] font-medium ${cls}`}>{value}</span>
          </motion.div>
        ))}
      </div>

      {/* ── PROCESS ── */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
            {process.tag}
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-2">
            {process.title}
          </h2>
          <p className="text-[15px] text-[#9A9590] mb-14 max-w-[480px]">
            {process.subtitle}
          </p>

          <div
            ref={containerRef}
            className="relative bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px"
          >
            <ProcessFlowCanvas />

            {steps.map((s, i) => (
              <div
                key={s.num}
                ref={stepRefs[i]}
                data-step
                className="bg-[#111111] p-7"
              >
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">
                  {s.num}
                </span>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}

            {/* Final row — steps 7 & 8 */}
            <div className="col-span-3 bg-[rgba(255,255,255,0.06)]">
              <div className="grid grid-cols-2 gap-px">
                <div ref={s7} data-step className="bg-[#111111] p-7">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">
                    {finalSteps.step7.num}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">
                    {finalSteps.step7.title}
                  </h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">
                    {finalSteps.step7.body}
                  </p>
                </div>
                <div ref={s8} data-step className="bg-[#111111] p-7">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">
                    {finalSteps.step8.num}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">
                    {finalSteps.step8.title}
                  </h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed mb-3">
                    {finalSteps.step8.body}
                  </p>
                  {finalSteps.step8.badge && (
                    <span className="inline-block text-[11px] text-[#444CE7] border border-[#444CE7]/30 px-3 py-1 uppercase tracking-[0.08em]">
                      {finalSteps.step8.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
                — Requirements
              </span>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mb-6">
                What you need to qualify
              </h2>
              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-8">
                {requirements.intro}
              </p>
              <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4 flex items-center gap-2">
                <NodePulse />
                {requirements.docsTitle}
              </h3>
              <ul className="space-y-3 border-l border-[#444CE7]/20 pl-5">
                {requirements.docs.map((d) => (
                  <li
                    key={d}
                    className="text-[13px] text-[#9A9590] leading-relaxed"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-5">
              <div className="sticky top-24 bg-[#111111] border border-white/[0.06] p-8">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-5">
                  — Document Checklist
                </span>
                <div className="space-y-4">
                  {requirements.checklistDocs.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <div className="w-4 h-4 border border-[#444CE7]/40 bg-[#444CE7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#444CE7]" />
                      </div>
                      <span className="text-[13px] text-[#9A9590]">{d}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#5A5550] mt-6 leading-relaxed">
                  {requirements.checklistNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#080808] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
            — FAQ
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">
            Frequently asked questions
          </h2>
          <div className="max-w-[720px]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left bg-transparent border-0 cursor-pointer group"
                >
                  <span className="text-[14px] font-medium text-[#F0EBE0]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#444CE7] transition-transform duration-200 flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
            {relatedTag}
          </span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">
            {relatedTitle}
          </h2>
          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {related.map((c) => (
              <div
                key={c.name}
                onClick={() => navigate(c.href)}
                className="bg-[#111111] p-7 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                <span className="text-[24px] block mb-4">{c.flag}</span>
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-1">
                  {c.reg}
                </span>
                <h3 className="text-[16px] font-semibold text-[#F0EBE0] mb-2">
                  {c.name}
                </h3>
                <p className="text-[13px] text-[#9A9590]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-[#080808] py-24 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
                {contact.tag}
              </span>
              <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">
                {contact.title}
              </h2>
              <p className="text-[15px] text-[#9A9590] mb-10">
                {contact.description}
              </p>
              <div className="flex flex-col gap-4">
                {contact.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <NodePulse />
                    <span className="text-[13px] text-[#9A9590]">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-5">
              <div className="bg-[#0d0d0d] border border-white/[0.06] p-8">
                <div className="mb-4">
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div className="mb-4">
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
                <div className="mb-4">
                  <label className={labelClass}>License type</label>
                  <select
                    className={`${inputClass} appearance-none`}
                    defaultValue={contact.defaultLicense}
                  >
                    {contact.licenseOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className={labelClass}>Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business briefly"
                    className={inputClass}
                  />
                </div>
                <button className="w-full py-3.5 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors border-0 cursor-pointer mt-2">
                  Send Message →
                </button>
                <p className="text-[11px] text-[#5A5550] text-center mt-3">
                  Typically respond within 2 business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicensePageTemplate;
