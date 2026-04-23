import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FormBlock from "@/components/FormBlock";
import MiCAEuMap from "@/components/MiCAEuMap";
import { ArrowUpRight, Clock, Download, Send, ChevronRight } from "lucide-react";

/* ─── DESIGN TOKENS (mapped to project system) ─── */
const C_BG = "#0a0a0a";
const C_BG2 = "#0d0d0d";
const C_TEXT = "#F0EBE0";
const C_MUTED = "#9A9590";
const C_DIM = "#5A5550";
const C_ACCENT = "#444CE7";
const BORDER = "rgba(255,255,255,0.06)";

/* ─── GA4 ─── */
declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}
const trackEvent = (name: string, params?: Record<string, unknown>) => {
  try { window.gtag?.("event", name, params || {}); } catch { /* noop */ }
};

/* ─── DATA ─── */
interface Jurisdiction {
  flag: string;
  country: string;
  regulator: string;
  timeline: string;
  language: string;
  bestFor: string;
  /** rough x/y on 800×500 simplified EU map (percentages of viewBox) */
  cx: number;
  cy: number;
}

const JURISDICTIONS: Jurisdiction[] = [
  { flag: "🇩🇪", country: "Germany",     regulator: "BaFin",      timeline: "9–12 months", language: "DE / EN", bestFor: "Institutional credibility · BaFin pedigree", cx: 470, cy: 195 },
  { flag: "🇫🇷", country: "France",      regulator: "AMF / ACPR", timeline: "8–12 months", language: "FR / EN", bestFor: "PSAN transition · large EU consumer market",  cx: 405, cy: 270 },
  { flag: "🇳🇱", country: "Netherlands", regulator: "AFM / DNB",  timeline: "9–12 months", language: "NL / EN", bestFor: "EN-friendly process · strong fintech ecosystem", cx: 440, cy: 200 },
  { flag: "🇮🇪", country: "Ireland",     regulator: "CBI",        timeline: "10–14 months", language: "EN",      bestFor: "English-language regime · IRL hub for fintech",  cx: 320, cy: 200 },
  { flag: "🇲🇹", country: "Malta",       regulator: "MFSA",       timeline: "6–10 months", language: "EN / MT", bestFor: "Crypto-native regulator · prior MFSA VFA history", cx: 510, cy: 380 },
  { flag: "🇱🇹", country: "Lithuania",   regulator: "Lietuvos bankas", timeline: "6–9 months", language: "LT / EN", bestFor: "Fastest path · existing VASP transition",          cx: 580, cy: 175 },
  { flag: "🇵🇱", country: "Poland",      regulator: "KNF",        timeline: "9–12 months", language: "PL / EN", bestFor: "Large local market · cost-effective substance",   cx: 540, cy: 220 },
  { flag: "🇱🇺", country: "Luxembourg",  regulator: "CSSF",       timeline: "10–14 months", language: "FR / EN / DE", bestFor: "Funds & institutional clients · CSSF prestige", cx: 445, cy: 235 },
];

const CAPITAL_CLASSES = [
  {
    amount: "€50,000",
    classLabel: "Class 1 — Initial capital",
    services: ["Reception / transmission of orders", "Investment advice", "Portfolio management"],
  },
  {
    amount: "€125,000",
    classLabel: "Class 2 — Initial capital",
    services: [
      "Custody & administration",
      "Exchange of crypto for funds or other crypto",
      "Execution of orders",
      "Placing of crypto-assets",
    ],
  },
  {
    amount: "€150,000",
    classLabel: "Class 3 — Initial capital",
    services: ["Operation of a trading platform"],
  },
];

const PROCESS_STEPS = [
  { n: "01", title: "Scoping",                  desc: "15-min call. We map your business model, target markets and timeline." },
  { n: "02", title: "Jurisdiction selection",    desc: "Compare 8 EU options on cost, timeline, substance, tax and regulator culture." },
  { n: "03", title: "Substance & docs prep",     desc: "Local directors, office, AML/KYC framework, governance and capital evidence." },
  { n: "04", title: "Filing & regulator dialogue", desc: "Application, clock-stop responses, technical clarifications, on-site readiness." },
  { n: "05", title: "Authorization & post-launch", desc: "License grant, passport notifications, ongoing reporting, prudential monitoring." },
];

const FAQS = [
  {
    q: "When does MiCA fully apply?",
    a: "MiCA's CASP provisions apply from 30 December 2024. A national transition period of up to 18 months lets existing VASP registrants continue operating while their CASP application is in process, but only if filed within the national cut-off.",
  },
  {
    q: "Can I passport my MiCA license across the EU?",
    a: "Yes. A CASP authorization granted by any EU competent authority grants the right to provide the listed services in all 27 member states on a freedom-of-services or branch basis, subject to notification.",
  },
  {
    q: "How long does CASP authorization take?",
    a: "The statutory review clock is 40 working days for completeness plus up to 5 months substantive review. In practice, first-time CASP applications run 6–12 months end-to-end depending on member state and application quality.",
  },
  {
    q: "Do I need a local director?",
    a: "Yes. MiCA requires effective direction from within the Union — at least two management body members must actually run the business from the home member state. Mailbox setups are rejected.",
  },
  {
    q: "What happens to my existing VASP or crypto license?",
    a: "National regimes are being repealed. Your existing registration is valid only during the transitional period. After that, only CASP authorization allows you to serve EU clients legally.",
  },
];

/* ─── HEAD INJECTION ─── */
function useDocumentHead() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "MiCA CASP License — EU Crypto-Asset Authorization | Incluence";

    const ensureMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };
    const desc = "MiCA CASP licensing across 8 EU jurisdictions. Full-cycle authorization: jurisdiction selection, filing, regulator dialogue, post-license compliance.";
    const m1 = ensureMeta("description", desc);
    const m2 = ensureMeta("og:title", "MiCA CASP License — Incluence", "property");
    const m3 = ensureMeta("og:description", desc, "property");
    const m4 = ensureMeta("og:type", "website", "property");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const created = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://incluence.net/mica-license");

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "MiCA CASP License",
          serviceType: "Crypto-Asset Service Provider Authorization under MiCA Regulation (EU) 2023/1114",
          provider: { "@type": "LegalService", name: "Incluence", url: "https://incluence.net", email: "sp@incluence.net" },
          areaServed: JURISDICTIONS.map((j) => ({ "@type": "Country", name: j.country })),
        },
        {
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    });
    ld.dataset.mica = "1";
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      ld.remove();
      if (created) canonical?.remove();
    };
  }, []);
}

/* ─── EU MAP (simplified outline + 8 dots) ─── */
const EuMap = ({ onDotClick }: { onDotClick: (j: Jurisdiction) => void }) => {
  return (
    <div className="relative w-full" style={{ aspectRatio: "8/5" }}>
      <svg viewBox="0 0 800 500" className="w-full h-full" role="img" aria-label="EU jurisdictions covered">
        {/* dot grid background */}
        <defs>
          <pattern id="mica-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(240,235,224,0.04)" />
          </pattern>
          <radialGradient id="mica-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C_ACCENT} stopOpacity="0.18" />
            <stop offset="100%" stopColor={C_ACCENT} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="500" fill="url(#mica-dots)" />
        <ellipse cx="450" cy="260" rx="280" ry="180" fill="url(#mica-glow)" />

        {/* simplified EU silhouette — soft outlined blob for visual context */}
        <path
          d="M250,180 Q280,120 360,110 Q440,95 510,120 Q590,100 640,150 Q680,200 660,260 Q650,330 580,380 Q500,420 430,400 Q350,420 290,380 Q230,340 240,270 Q235,220 250,180 Z"
          fill="none"
          stroke={BORDER}
          strokeWidth="1"
          strokeDasharray="3 4"
        />

        {/* dots */}
        {JURISDICTIONS.map((j) => (
          <g
            key={j.country}
            style={{ cursor: "pointer" }}
            onClick={() => onDotClick(j)}
          >
            {/* pulsing ring */}
            <circle cx={j.cx} cy={j.cy} r="6" fill="none" stroke={C_ACCENT} strokeWidth="1">
              <animate attributeName="r" from="6" to="22" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.7" to="0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx={j.cx} cy={j.cy} r="5" fill={C_ACCENT} />
            <circle cx={j.cx} cy={j.cy} r="2" fill={C_TEXT} />
            <title>{`${j.country} · ${j.regulator} · ${j.timeline}`}</title>
          </g>
        ))}
      </svg>
    </div>
  );
};

/* ─── PAGE ─── */
const MiCALicensePage = () => {
  useDocumentHead();
  const [consultOpen, setConsultOpen] = useState(false);

  const openConsult = (source: string) => {
    trackEvent(source);
    setConsultOpen(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: C_BG, color: C_TEXT, fontFamily: "Manrope, sans-serif" }} className="min-h-screen">
      {/* ─── BLOCK 1: HERO (black with subtle accent glow) ─── */}
      <section
        className="pt-[120px] md:pt-[140px] px-5 md:px-12 pb-12 md:pb-20 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 70% 20%, rgba(68,76,231,0.10), transparent 60%), ${C_BG}`,
        }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">
          {/* LEFT — text */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] mb-6"
              style={{ color: C_ACCENT, fontWeight: 500 }}
            >
              <span
                className="inline-block w-1.5 h-1.5"
                style={{ background: C_ACCENT, animation: "mica-pulse 1.6s ease-in-out infinite" }}
              />
              EU MiCA REGULATION · LIVE SINCE 30 DEC 2024
            </div>
            <h1
              className="text-[34px] md:text-[48px] leading-[1.05] mb-5"
              style={{ color: C_TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              MiCA CASP License
            </h1>
            <p className="text-[20px] md:text-[26px] leading-[1.3] mb-7" style={{ color: C_MUTED, fontWeight: 300 }}>
              EU authorization for crypto-asset service providers — 8 jurisdictions, one team.
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.7] max-w-[600px] mb-8" style={{ color: C_TEXT }}>
              MiCA applies across all 27 EU member states. Existing national VASP registrations (Estonia FIU,
              Lithuania FNTT, French PSAN, BaFin crypto custody) transition to CASP authorization within 12–18 months.
              We handle the full application — jurisdiction selection, filing, regulator dialogue, and post-authorization compliance.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => openConsult("mica_hero_cta_click")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[13px] uppercase tracking-[0.12em] transition-all hover:translate-y-[-1px]"
                style={{
                  background: C_ACCENT,
                  color: "#FFFFFF",
                  fontWeight: 500,
                  boxShadow: "0 0 0 1px rgba(68,76,231,0.4), 0 8px 24px rgba(68,76,231,0.25)",
                }}
              >
                Get Free Consultation <ArrowUpRight size={16} />
              </button>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); trackEvent("mica_pdf_download", { source: "hero" }); }}
                className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] border-b border-dashed pb-1 transition-colors hover:text-white"
                style={{ color: C_MUTED, borderColor: BORDER }}
              >
                <Download size={14} /> Download MiCA Checklist PDF
              </a>
            </div>
          </div>

          {/* RIGHT — EU map (ambient, borderless, integrated) */}
          <div className="relative">
            <MiCAEuMap
              onCountryClick={(c) => {
                trackEvent("mica_jurisdiction_click", { country: c.country });
                scrollTo("jurisdictions");
              }}
            />
          </div>
        </div>

        {/* URGENCY STRIP */}
        <div className="max-w-[1280px] mx-auto mt-12 md:mt-16">
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-5 md:px-7 py-5"
            style={{ background: C_BG2, border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-start md:items-center gap-3">
              <Clock size={18} style={{ color: C_ACCENT, flexShrink: 0, marginTop: 2 }} />
              <p className="text-[13px] md:text-[14px]" style={{ color: C_TEXT, lineHeight: 1.5 }}>
                <span style={{ color: C_MUTED }}>Transition deadline:</span> national cut-offs run through Q3–Q4 2026
                <span style={{ color: C_DIM }}>  ·  </span>Lithuania · Estonia · France · Germany — specific dates vary
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollTo("jurisdictions")}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] whitespace-nowrap transition-colors hover:text-white"
              style={{ color: C_ACCENT, fontWeight: 500 }}
            >
              Check your deadline <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 2: JURISDICTIONS + CAPITAL (deep-blue gradient) ─── */}
      <section
        id="jurisdictions"
        className="px-5 md:px-12 py-16 md:py-[100px] relative"
        style={{
          background: `linear-gradient(180deg, #0a0a0a 0%, #0d1230 50%, #0a0a18 100%)`,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          {/* Heading */}
          <div className="mb-10 md:mb-14">
            <div className="text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: C_ACCENT }}>
              ● Jurisdictions
            </div>
            <h2 className="text-[28px] md:text-[36px] leading-[1.1] mb-4" style={{ color: C_TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}>
              8 EU jurisdictions we cover
            </h2>
            <p className="text-[16px] md:text-[18px] max-w-[640px]" style={{ color: C_MUTED, lineHeight: 1.5 }}>
              Home member state determines regulator, timeline, substance and tax treatment — even though the MiCA rulebook is the same.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block" style={{ border: `1px solid ${BORDER}` }}>
            {/* header row */}
            <div
              className="grid items-center px-6 py-3 text-[10px] uppercase tracking-[0.12em]"
              style={{ gridTemplateColumns: "1.4fr 1.2fr 1fr 1fr 2fr 40px", color: C_DIM, borderBottom: `1px solid ${BORDER}` }}
            >
              <div>Country</div>
              <div>Regulator</div>
              <div>Timeline</div>
              <div>Language</div>
              <div>Best for</div>
              <div />
            </div>
            {JURISDICTIONS.map((j) => (
              <button
                key={j.country}
                type="button"
                onClick={() => { trackEvent("mica_jurisdiction_click", { country: j.country }); }}
                className="w-full grid items-center px-6 py-5 text-left transition-colors group"
                style={{
                  gridTemplateColumns: "1.4fr 1.2fr 1fr 1fr 2fr 40px",
                  borderBottom: `1px solid ${BORDER}`,
                  background: "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C_BG2)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-[18px] inline-block transition-all duration-300 ease-out grayscale brightness-[1.8] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                  >
                    {j.flag}
                  </span>
                  <span className="text-[15px]" style={{ color: C_TEXT, fontWeight: 500 }}>{j.country}</span>
                </div>
                <div className="text-[14px]" style={{ color: C_TEXT }}>{j.regulator}</div>
                <div className="text-[14px]" style={{ color: C_MUTED }}>{j.timeline}</div>
                <div className="text-[14px]" style={{ color: C_MUTED }}>{j.language}</div>
                <div className="text-[13px]" style={{ color: C_MUTED, lineHeight: 1.5 }}>{j.bestFor}</div>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: C_ACCENT }}>
                  <ChevronRight size={18} />
                </div>
              </button>
            ))}
          </div>

          {/* Mobile horizontal swiper */}
          <div className="md:hidden -mx-5 px-5 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none" }}>
            {JURISDICTIONS.map((j) => (
              <button
                key={j.country}
                type="button"
                onClick={() => trackEvent("mica_jurisdiction_click", { country: j.country })}
                className="flex-shrink-0 snap-start text-left p-5"
                style={{ width: "85vw", maxWidth: 320, background: C_BG2, border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[22px]" style={{ filter: "grayscale(100%) brightness(1.8)" }}>{j.flag}</span>
                  <span className="text-[16px]" style={{ color: C_TEXT, fontWeight: 500 }}>{j.country}</span>
                </div>
                <div className="space-y-3 text-[13px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: C_DIM }}>Regulator</div>
                    <div style={{ color: C_TEXT }}>{j.regulator}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: C_DIM }}>Timeline</div>
                    <div style={{ color: C_MUTED }}>{j.timeline}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: C_DIM }}>Best for</div>
                    <div style={{ color: C_MUTED, lineHeight: 1.5 }}>{j.bestFor}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center md:text-left">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); trackEvent("mica_pdf_download", { source: "compare" }); }}
              className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] transition-colors hover:text-white"
              style={{ color: C_ACCENT, fontWeight: 500 }}
            >
              Compare all 8 jurisdictions side-by-side <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Capital cards */}
          <div className="mt-16 md:mt-20">
            <div className="mb-10 md:mb-12">
              <h3 className="text-[24px] md:text-[28px] leading-[1.15] mb-3" style={{ color: C_TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}>
                CASP capital by service class
              </h3>
              <p className="text-[15px] md:text-[16px] max-w-[640px]" style={{ color: C_MUTED, lineHeight: 1.5 }}>
                MiCA Article 67 — initial capital by authorized services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: BORDER }}>
              {CAPITAL_CLASSES.map((c) => (
                <div key={c.classLabel} className="p-7 md:p-8" style={{ background: C_BG2 }}>
                  <div className="text-[44px] md:text-[56px] leading-none mb-5" style={{ color: C_ACCENT, fontWeight: 600, letterSpacing: "-0.03em" }}>
                    {c.amount}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.14em] mb-5" style={{ color: C_DIM }}>
                    {c.classLabel}
                  </div>
                  <ul className="space-y-2.5 text-[14px]" style={{ color: C_TEXT, lineHeight: 1.45 }}>
                    {c.services.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span style={{ color: C_ACCENT }}>—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[12px] italic max-w-[860px]" style={{ color: C_DIM, lineHeight: 1.55 }}>
              Own funds must be maintained at the higher of: initial capital, one-quarter of preceding year's fixed overheads,
              or a percentage of assets under custody. Capital must be paid and evidenced at filing.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 3: PROCESS + FAQ + CTA (back to black with bottom accent) ─── */}
      <section
        className="px-5 md:px-12 py-16 md:py-[100px]"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 100%, rgba(68,76,231,0.12), transparent 70%), ${C_BG}`,
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          {/* Process */}
          <div className="mb-16 md:mb-24">
            <div className="text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: C_ACCENT }}>● Process</div>
            <h2 className="text-[28px] md:text-[36px] leading-[1.1] mb-12 md:mb-16" style={{ color: C_TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}>
              How we deliver your CASP authorization
            </h2>

            {/* Desktop horizontal */}
            <div className="hidden md:grid relative" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              <div className="absolute left-[10%] right-[10%] top-[18px] border-t border-dashed" style={{ borderColor: BORDER }} />
              {PROCESS_STEPS.map((s) => (
                <div key={s.n} className="relative flex flex-col items-start text-left px-3" style={{ maxWidth: 220 }}>
                  <div
                    className="w-9 h-9 flex items-center justify-center mb-5 text-[12px]"
                    style={{ background: C_BG, border: `1px solid ${C_ACCENT}`, color: C_ACCENT, fontWeight: 500 }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[15px] mb-2" style={{ color: C_TEXT, fontWeight: 500 }}>{s.title}</div>
                  <div className="text-[13px]" style={{ color: C_MUTED, lineHeight: 1.55 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            {/* Mobile vertical */}
            <div className="md:hidden space-y-6">
              {PROCESS_STEPS.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-[12px]"
                    style={{ background: C_BG, border: `1px solid ${C_ACCENT}`, color: C_ACCENT, fontWeight: 500 }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <div className="text-[15px] mb-1.5" style={{ color: C_TEXT, fontWeight: 500 }}>{s.title}</div>
                    <div className="text-[13px]" style={{ color: C_MUTED, lineHeight: 1.55 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16 md:mb-24 max-w-[800px] mx-auto">
            <div className="text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: C_ACCENT }}>● FAQ</div>
            <h2 className="text-[28px] md:text-[36px] leading-[1.1] mb-10 md:mb-12" style={{ color: C_TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}>
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`q-${i}`} className="border-b-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <AccordionTrigger
                    className="text-left text-[15px] md:text-[16px] py-5 hover:no-underline"
                    style={{ color: C_TEXT, fontWeight: 500 }}
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] md:text-[15px] pb-5 pr-4" style={{ color: C_MUTED, lineHeight: 1.65 }}>
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Final CTA card */}
          <div
            className="max-w-[720px] mx-auto p-8 md:p-14 text-center"
            style={{ background: C_BG2, border: `1px solid ${BORDER}` }}
          >
            <h2 className="text-[26px] md:text-[34px] leading-[1.15] mb-4" style={{ color: C_TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}>
              Ready to choose your jurisdiction?
            </h2>
            <p className="text-[15px] md:text-[17px] mb-8 max-w-[520px] mx-auto" style={{ color: C_MUTED, lineHeight: 1.55 }}>
              15-minute scoping call. We review your situation, map CASP options across 8 jurisdictions, and tell you honestly if and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <button
                type="button"
                onClick={() => openConsult("mica_consultation_click")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] uppercase tracking-[0.12em] transition-all hover:translate-y-[-1px]"
                style={{
                  background: C_ACCENT,
                  color: "#FFFFFF",
                  fontWeight: 500,
                  boxShadow: "0 0 0 1px rgba(68,76,231,0.4), 0 8px 24px rgba(68,76,231,0.25)",
                }}
              >
                Book a Free Consultation <ArrowUpRight size={16} />
              </button>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); trackEvent("mica_pdf_download", { source: "final_cta" }); }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] uppercase tracking-[0.12em] transition-colors hover:text-white"
                style={{ color: C_TEXT, border: `1px solid ${BORDER}` }}
              >
                <Download size={14} /> Jurisdiction Comparison PDF
              </a>
            </div>
            <div className="pt-6" style={{ borderTop: `1px solid ${BORDER}` }}>
              <p className="text-[13px]" style={{ color: C_MUTED }}>
                Prefer Telegram? Message{" "}
                <a
                  href="https://t.me/incluence_manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("mica_telegram_click")}
                  className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                  style={{ color: C_ACCENT, fontWeight: 500 }}
                >
                  <Send size={12} /> @incluence_manager
                </a>
                {" "}— typical reply under 1 hour on business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation dialog */}
      <Dialog open={consultOpen} onOpenChange={setConsultOpen}>
        <DialogContent
          className="max-w-[640px] border-0 p-0"
          style={{ background: C_BG, color: C_TEXT, fontFamily: "Manrope, sans-serif", borderRadius: 0 }}
        >
          <div className="p-7 md:p-10">
            <DialogHeader>
              <DialogTitle className="text-[22px] md:text-[26px] mb-2" style={{ color: C_TEXT, fontWeight: 600, letterSpacing: "-0.02em" }}>
                Get Free Consultation
              </DialogTitle>
              <p className="text-[13px] mb-6" style={{ color: C_MUTED }}>
                15-minute scoping call on your MiCA CASP options.
              </p>
            </DialogHeader>
            <FormBlock
              bgColor={C_BG}
              fields={["Full Name", "Email", "Company Name", "Service Interest"]}
              textareaLabel="Tell us about your project — current setup, target markets, timeline..."
              buttonText="REQUEST CONSULTATION →"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Inline keyframes */}
      <style>{`
        @keyframes mica-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
};

export default MiCALicensePage;
