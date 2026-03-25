import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface JurisdictionCard {
  regulator: string
  name: string
  description: string
  timeline?: string
  href: string
  badge?: string
}

interface HubStat {
  value: string
  label: string
}

interface HubStep {
  number: string
  title: string
  description: string
}

interface HubFAQItem {
  question: string
  answer: string
}

interface HubPageProps {
  categoryTag: string
  titleAccent: string
  titleRest: string
  description: string
  stats: HubStat[]
  jurisdictionsTitle: string
  jurisdictionsSubtitle: string
  jurisdictions: JurisdictionCard[]
  processTitle: string
  processSubtitle: string
  steps: HubStep[]
  requirementsTitle: string
  requirementsIntro: string
  requirements: string[]
  faq: HubFAQItem[]
  formTitle: string
  formSubtitle: string
}

export const HubPage: React.FC<HubPageProps> = (p) => {
  useEffect(() => {
    document.title = `${p.titleAccent} ${p.titleRest} — Incluence`
  }, [p.titleAccent, p.titleRest])

  return (
    <div className="min-h-screen font-manrope" style={{ background: '#080808' }}>

      {/* HERO */}
      <section style={{ background: '#080808' }} className="py-[88px] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em] mb-6 block">
            — {p.categoryTag}
          </span>
          <h1 className="text-[clamp(38px,5vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-[#F0EBE0] mb-6 max-w-[640px]">
            <span className="bg-gradient-to-r from-[#444CE7] to-[#818CF8] bg-clip-text text-transparent">{p.titleAccent}</span>{' '}{p.titleRest}
          </h1>
          <p className="text-[15px] text-[#9A9590] max-w-[520px] mb-10 leading-[1.8]">
            {p.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[12px] uppercase tracking-[0.08em] font-medium transition-colors">
              GET A FREE CONSULTATION →
            </Link>
            <button onClick={() => document.getElementById('jurisdictions')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-white/30 text-[#F0EBE0] text-[12px] uppercase tracking-[0.08em] transition-colors">
              VIEW JURISDICTIONS
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="border-t border-b border-white/[0.06]">
        <div className="max-w-screen-xl mx-auto grid" style={{ gridTemplateColumns: `repeat(${p.stats.length}, 1fr)` }}>
          {p.stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 border-r border-white/[0.06] last:border-r-0">
              <span className="text-[22px] font-light text-[#F0EBE0] whitespace-nowrap">{s.value}</span>
              <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* JURISDICTIONS GRID */}
      <section id="jurisdictions" style={{ background: '#0d0d0d' }} className="py-[80px] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em] mb-4 block">
            — AVAILABLE LICENSES
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-light text-[#F0EBE0] tracking-[-0.02em] mb-3">{p.jurisdictionsTitle}</h2>
          <p className="text-[14px] text-[#9A9590] max-w-[560px] mb-12 leading-relaxed">{p.jurisdictionsSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
            {p.jurisdictions.map((j) => (
              <Link key={j.href} to={j.href} className="bg-[#0d0d0d] hover:bg-[#111111] p-6 relative group transition-colors block">
                {/* Regulator + optional badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.1em] font-medium">
                    {j.regulator}
                  </span>
                  {j.badge && (
                    <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.08em] border border-white/[0.08] px-2 py-0.5">
                      {j.badge}
                    </span>
                  )}
                </div>
                {/* Name */}
                <h3 className="text-[20px] font-light text-[#F0EBE0] mb-3">
                  {j.name}
                </h3>
                {/* Description */}
                <p className="text-[13px] text-[#9A9590] leading-relaxed mb-4">
                  {j.description}
                </p>
                {/* Timeline */}
                {j.timeline && (
                  <div className="flex items-center justify-between text-[11px] border-t border-white/[0.06] pt-3 mt-auto">
                    <span className="text-[#5A5550]">Timeline</span>
                    <span className="text-[#F0EBE0]">{j.timeline}</span>
                  </div>
                )}
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#444CE7] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section style={{ background: '#111111' }} className="py-[80px] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em] mb-4 block">
            — PROCESS
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-light text-[#F0EBE0] tracking-[-0.02em] mb-3">{p.processTitle}</h2>
          <p className="text-[14px] text-[#9A9590] max-w-[560px] mb-12 leading-relaxed">{p.processSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
            {p.steps.map((step) => (
              <div key={step.number} className="bg-[#111111] p-6 relative group">
                <span className="text-[28px] font-light text-[#444CE7]/20 mb-3 block">
                  {step.number}
                </span>
                <h3 className="text-[14px] font-medium text-[#F0EBE0] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">
                  {step.description}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#444CE7] group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS + CONSULTATION CTA */}
      <section style={{ background: '#0d0d0d' }} className="py-[80px] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left — requirements list */}
            <div className="lg:col-span-7">
              <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em] mb-4 block">
                — REQUIREMENTS
              </span>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] tracking-[-0.02em] mb-3">{p.requirementsTitle}</h2>
              <p className="text-[14px] text-[#9A9590] leading-relaxed mb-8 max-w-[520px]">{p.requirementsIntro}</p>
              <div className="flex flex-col gap-px bg-[rgba(255,255,255,0.06)]">
                {p.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#0d0d0d] px-5 py-3.5">
                    <span className="text-[#444CE7] text-[10px] mt-1 shrink-0">▸</span>
                    <span className="text-[13px] text-[#9A9590] leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — consultation CTA card */}
            <div className="lg:col-span-5">
              <div className="border border-white/[0.08] bg-[#111111] sticky top-24">
                <div className="border-b border-white/[0.06] px-5 py-3">
                  <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em]">
                    — FREE CONSULTATION
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[16px] font-medium text-[#F0EBE0] mb-3">
                    Not sure which license fits your business?
                  </h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed mb-6">
                    Book a 30-minute call with a senior licensing consultant. We'll assess your situation and recommend the right jurisdiction, structure and timeline — at no cost.
                  </p>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[12px] uppercase tracking-[0.08em] font-medium transition-colors w-full justify-center">
                    BOOK A FREE CALL →
                  </Link>
                </div>
                {[
                  ['RESPONSE TIME', 'Within 24 hours'],
                  ['CONSULTATION', 'Free, no obligation'],
                  ['LANGUAGES', 'EN, RU, DE'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between px-5 py-3 border-t border-white/[0.06]">
                    <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em]">{label}</span>
                    <span className="text-[13px] text-[#F0EBE0]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#111111' }} className="py-[80px] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em] mb-4 block">
            — FAQ
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-light text-[#F0EBE0] tracking-[-0.02em] mb-10">Common Questions</h2>
          <HubFAQ items={p.faq} />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ background: '#080808' }} className="py-[80px] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.12em] mb-4 block">
                — GET STARTED
              </span>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] tracking-[-0.02em] mb-4">{p.formTitle}</h2>
              <p className="text-[14px] text-[#9A9590] leading-relaxed">{p.formSubtitle}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {['FULL NAME', 'COMPANY NAME', 'TARGET MARKET (COUNTRY/REGION)', 'BUDGET RANGE'].map((field) => (
                  <div key={field}>
                    <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">
                      {field}
                    </label>
                    <input className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7] focus:outline-none transition-colors" />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2 block">
                  ADDITIONAL DETAILS — TARGET MARKETS, EXISTING STRUCTURE, TIMELINE
                </label>
                <textarea rows={4} className="w-full bg-transparent border border-white/[0.08] px-4 py-3 text-[13px] text-[#F0EBE0] focus:border-[#444CE7] focus:outline-none transition-colors resize-none" />
              </div>
              <button className="w-full py-4 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[12px] uppercase tracking-[0.08em] font-medium transition-colors">
                SEND REQUEST →
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

// Sub-component: FAQ
const HubFAQ = ({ items }: { items: HubFAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="flex flex-col gap-px bg-[rgba(255,255,255,0.06)]">
      {items.map((item, i) => (
        <div key={i} className="bg-[#111111]">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left">
            <span className="text-[13px] text-[#F0EBE0] font-medium pr-8">{item.question}</span>
            <span className="text-[#444CE7] shrink-0 text-[20px] font-light leading-none">
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 border-t border-white/[0.04] pt-4 text-[13px] text-[#9A9590] leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
