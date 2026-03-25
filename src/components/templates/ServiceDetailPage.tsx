import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import NodePulse from '@/components/NodePulse';
import ContactCTA from '@/components/ContactCTA';

/* ── Types ─────────────────────────────────────────────── */

interface FAQItem {
  question: string;
  answer: string;
}

interface ContentSection {
  heading: string;
  body: string;
}

interface ServiceDetailPageProps {
  title: string;
  description: string;
  sections?: ContentSection[];
  requirements?: string[];
  faq?: FAQItem[];
}

/* ── Noise overlay (matches LicensePageTemplate) ──────── */

const NoiseOverlay = () => (
  <div
    className="absolute inset-0 pointer-events-none z-[2] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px',
    }}
  />
);

/* ── Main Component ───────────────────────────────────── */

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  title,
  description,
  sections = [],
  requirements = [],
  faq = [],
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const location = useLocation();

  /* Auto breadcrumb from URL */
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbLabel =
    pathSegments[pathSegments.length - 1]
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()) || title;

  return (
    <div
      className="bg-[#080808] text-[#F0EBE0]"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      {/* ── BREADCRUMB ── */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 text-[12px] text-[#5A5550]">
            <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#9A9590]">{breadcrumbLabel}</span>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-[#080808] py-[80px] px-6 md:px-12 relative overflow-hidden min-h-[420px]">
        <NoiseOverlay />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">
                — Service
              </span>
            </div>

            <h1 className="text-[clamp(32px,4vw,52px)] font-light text-[#F0EBE0] leading-tight mb-5">
              {title}
            </h1>

            <p className="text-[15px] text-[#9A9590] leading-relaxed mb-10 max-w-[560px]">
              {description}
            </p>

            <div className="flex gap-3 flex-wrap">
              <Link
                to="/contact"
                className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors border-0 cursor-pointer inline-flex items-center gap-2"
              >
                Get a Free Quote →
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3 bg-transparent text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] border border-white/15 hover:border-white/35 transition-all cursor-pointer inline-flex items-center"
              >
                Discuss the Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTIONS (gap-px grid) ── */}
      {sections.length > 0 && (
        <section className="bg-[#111111] py-[72px] px-6 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
              — Overview
            </span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-2">
              Details & Process
            </h2>
            <p className="text-[15px] text-[#9A9590] mb-14 max-w-[480px]">
              Everything you need to know about this service.
            </p>

            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-2 gap-px">
              {sections.map((sec, i) => (
                <motion.div
                  key={i}
                  className="bg-[#111111] p-7"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(68,76,231,0.03) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">
                    {sec.heading}
                  </h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed whitespace-pre-line">
                    {sec.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── REQUIREMENTS ── */}
      {requirements.length > 0 && (
        <section className="bg-[#0d0d0d] py-[72px] px-6 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-7">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
                  — Requirements
                </span>
                <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mb-6">
                  What you need to qualify
                </h2>

                <ul className="space-y-3 border-l border-[#444CE7]/20 pl-5">
                  {requirements.map((req) => (
                    <li
                      key={req}
                      className="text-[13px] text-[#9A9590] leading-relaxed flex items-start gap-3"
                    >
                      <NodePulse />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5">
                <div className="sticky top-24 bg-[#111111] border border-white/[0.06] p-8">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-5">
                    — Document Checklist
                  </span>
                  <div className="space-y-4">
                    {requirements.map((req) => (
                      <div key={req} className="flex items-start gap-3">
                        <div className="w-4 h-4 border border-[#444CE7]/40 bg-[#444CE7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#444CE7]" />
                        </div>
                        <span className="text-[13px] text-[#9A9590]">{req}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[12px] text-[#5A5550] mt-6 leading-relaxed">
                    We prepare and verify all documents. You provide basic information — we handle the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faq.length > 0 && (
        <section className="bg-[#080808] py-[72px] px-6 md:px-12">
          <div className="max-w-screen-xl mx-auto">
            <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">
              — FAQ
            </span>
            <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">
              Frequently asked questions
            </h2>
            <div className="max-w-[720px]">
              {faq.map((item, i) => (
                <div key={i} className="border-b border-white/[0.06]">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center py-5 text-left bg-transparent border-0 cursor-pointer group"
                  >
                    <span className="text-[14px] font-medium text-[#F0EBE0]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#444CE7] transition-transform duration-200 flex-shrink-0 ml-4 ${openIndex === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIndex === i && (
                    <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT CTA ── */}
      <ContactCTA />
    </div>
  );
};

export default ServiceDetailPage;
export { ServiceDetailPage };
