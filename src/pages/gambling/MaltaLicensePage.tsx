import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import NodePulse from "@/components/NodePulse";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";

const steps = [
  { num: "01", title: "Company registration in Malta", body: "It is necessary to register a local company, for which a license will subsequently be issued. You should select the name of the company, indicate the participants and provide their documents." },
  { num: "02", title: "Account opening", body: "The company needs to open a bank account in order to deposit the share capital. Opening an account is a complex process that should be entrusted to professionals. A package of documents is collected and negotiations are conducted." },
  { num: "03", title: "Contribution of authorized capital", body: "The exact amount of authorized capital depends on the type of the license. The beneficiary must provide documents on the source of origin of funds contributed as authorized capital upon bank's request." },
  { num: "04", title: "Hiring required employees", body: "The company must have key positions employees, some of them must be local. We will help with the search and selection of employees." },
  { num: "05", title: "Office rent", body: "Office rent is not mandatory, but having one will significantly increase your chances of obtaining a license. We will select a budget option that meets the requirements." },
  { num: "06", title: "Preparation of documents for applying for a license", body: "It is necessary to prepare a business plan, and policies. In addition, application forms must be filled out. The client will only need to provide basic information, on the basis of which we will prepare documents, taking into account local legislation." },
];

const faqs = [
  { q: "How to open an online casino in Malta?", a: "In order to open an online casino in Malta, you need to prepare a business plan, register a company, obtain a license, set up a technical base and open a bank account. You should carefully prepare all the documentation and correctly apply for a license for the online casino creation. These processes should be entrusted to professionals." },
  { q: "What are the terms of registration of a gaming license in Malta?", a: "The company registration and the gambling license obtaining in Malta takes about 6 months." },
  { q: "What documents are required to obtain a gaming license in Malta?", a: "In order to obtain a gambling license in Malta, you must submit: copies of passports and confirmation of the address of directors and shareholders of the company; documents confirming the experience and well-being of the company's participants; statutory documents of the company; technical documentation; company policies." },
  { q: "What is the cost of obtaining a gambling license in Malta?", a: "Various factors (the list of services offered, the number of domains, etc.) affect the final cost of obtaining a license for a gambling business in Malta. You can find out the exact cost of obtaining a license for a gambling business in Malta by contacting our specialists." },
];

const checklistDocs = [
  "Passport copies — directors & shareholders",
  "Address confirmation — directors & shareholders",
  "Experience & background documentation",
  "Company statutory documents",
  "Technical platform documentation",
  "Company policies (AML, responsible gambling)",
];

const reqDocs = [
  "Copies of passports and confirmation of the address of directors and shareholders",
  "Documents confirming the experience and well-being of the company's participants",
  "Statutory documents of the company",
  "Technical documentation",
  "Company policies",
  "Business plan",
];

const related = [
  { href: "/licenses/gambling/costa-rica", flag: "🇨🇷", reg: "Municipality", name: "Gambling License in Costa Rica", desc: "A Data Processing license allowing operators to legally organize online gambling. Fast and cost-effective entry." },
  { href: "/licenses/gambling/isle-of-man", flag: "🇮🇲", reg: "GSC", name: "Gambling License of the Isle of Man", desc: "One of the most advanced telecommunications infrastructures. GSC licenses all gambling types under one permit." },
  { href: "/licenses/gambling/curacao", flag: "🇨🇼", reg: "CGA", name: "Curacao Gaming License", desc: "Simple and business-friendly legislation. Low taxation, accessibility, and one of the shortest licensing timelines." },
];

const factsRows = [
  { label: "JURISDICTION", value: "Malta", cls: "text-[13px] font-medium text-[#F0EBE0]" },
  { label: "REGULATOR", value: "MGA", cls: "text-[13px] font-semibold text-[#444CE7]" },
  { label: "LICENSE VALID", value: "5 years", cls: "text-[13px] font-medium text-[#F0EBE0]" },
  { label: "TIMELINE", value: "~6 months", cls: "text-[13px] font-medium text-[#F0EBE0]" },
  { label: "COST", value: "On request", cls: "text-[13px] font-medium text-[#9A9590] italic" },
  { label: "RENEWAL", value: "Extendable", cls: "text-[13px] font-medium text-[#F0EBE0]" },
];

const MaltaLicensePage = () => {
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

  const inputClass = "w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none transition-colors";
  const labelClass = "block text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2";

  return (
    <div className="bg-[#080808] text-[#F0EBE0]" style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* ── SECTION 1 — BREADCRUMB ── */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3.5 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 text-[12px] text-[#5A5550]">
            <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/licenses/gambling" className="hover:text-[#9A9590] transition-colors">Gamble license</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#9A9590]">Malta Gaming license</span>
          </div>
        </div>
      </div>

      {/* ── SECTION 2 — HERO ── */}
      <section className="bg-[#080808] py-[80px] px-12 relative overflow-hidden min-h-[520px]">
        {/* Layer A — MicroParticles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <MicroParticles />
        </div>
        {/* Layer B — dot grid */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #F0EBE0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Layer C — Malta island SVG */}
        <svg className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none z-0 opacity-[0.04]" viewBox="0 0 400 400" fill="none">
          <path d="M220 120 C240 110, 280 130, 290 160 C300 190, 310 240, 280 280 C260 310, 220 320, 200 310 C180 300, 160 270, 170 240 C175 220, 200 200, 210 180 C215 165, 205 135, 220 120Z" fill="#F0EBE0" />
          <ellipse cx="180" cy="100" rx="30" ry="20" fill="#F0EBE0" />
          <circle cx="200" cy="130" r="4" fill="#F0EBE0" />
          <line x1="170" y1="150" x2="310" y2="150" stroke="#F0EBE0" strokeWidth="0.5" opacity="0.5" />
          <line x1="170" y1="200" x2="310" y2="200" stroke="#F0EBE0" strokeWidth="0.5" opacity="0.5" />
          <line x1="170" y1="250" x2="310" y2="250" stroke="#F0EBE0" strokeWidth="0.5" opacity="0.5" />
          <line x1="200" y1="100" x2="200" y2="320" stroke="#F0EBE0" strokeWidth="0.5" opacity="0.5" />
          <line x1="250" y1="100" x2="250" y2="320" stroke="#F0EBE0" strokeWidth="0.5" opacity="0.5" />
          <line x1="300" y1="100" x2="300" y2="320" stroke="#F0EBE0" strokeWidth="0.5" opacity="0.5" />
          <circle cx="240" cy="200" r="3" fill="#444CE7" />
          <circle cx="240" cy="200" r="7" stroke="#444CE7" strokeWidth="0.5" fill="none" opacity="0.5" />
          <text x="250" y="204" fill="#444CE7" fontSize="8" fontFamily="Manrope">Valletta</text>
          <circle cx="260" cy="240" r="2.5" fill="#444CE7" opacity="0.7" />
          <text x="268" y="244" fill="#444CE7" fontSize="7" fontFamily="Manrope" opacity="0.7">MGA</text>
        </svg>
        {/* Layer D — right edge fade */}
        <div className="absolute right-0 top-0 bottom-0 w-[120px] pointer-events-none z-0 bg-gradient-to-l from-[#080808] to-transparent" />

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-12">
            {/* Left */}
            <div className="col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Gambling License</span>
                <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">EU · MGA</span>
              </div>

              <h1 className="text-[clamp(32px,4vw,52px)] font-light text-[#F0EBE0] leading-tight mb-5">
                Malta Gaming<br />License
              </h1>

              <p className="text-[15px] text-[#9A9590] leading-relaxed mb-10 max-w-[520px]">
                Malta is a state with one of the most well-regulated systems of gambling activities. The MGA — Malta Gaming Authority — not only regulates gambling activities but also directly licenses gambling entities. The license is issued for five years and is renewable.
              </p>

              <div className="flex gap-3 flex-wrap">
                <button className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 border-0 cursor-pointer">
                  Get a Free Quote →
                </button>
                <button className="px-7 py-3 bg-transparent text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] border border-white/15 hover:border-white/35 transition-all duration-200 cursor-pointer">
                  View Requirements
                </button>
              </div>
            </div>

            {/* Right — Sticky Facts Card */}
            <div className="col-span-5">
              <div className="sticky top-24 bg-[#0d0d0d] border border-white/[0.06] p-8 relative">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-[#444CE7]" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-[#444CE7]" />
                </div>

                <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-white/[0.06]">
                  <NodePulse />
                  <span className="text-[13px] text-[#9A9590]">License data</span>
                </div>

                <div className="flex flex-col divide-y divide-white/[0.04]">
                  {factsRows.map((r) => (
                    <div key={r.label} className="flex justify-between items-center py-3">
                      <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{r.label}</span>
                      <span className={r.cls}>{r.value}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-7 w-full py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors border-0 cursor-pointer">
                  Get a Free Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — PROCESS ── */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-2">How to obtain a Malta gaming license</h2>
          <p className="text-[15px] text-[#9A9590] mb-14 max-w-[480px]">A structured 8-step process. We handle every stage — you only provide basic information.</p>

          <div ref={containerRef} className="relative bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            <ProcessFlowCanvas />

            {steps.map((s, i) => (
              <div key={s.num} ref={stepRefs[i]} data-step className="bg-[#111111] p-7">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">{s.num}</span>
                <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</p>
              </div>
            ))}

            {/* Steps 7 & 8 — full width row */}
            <div className="col-span-3 bg-[rgba(255,255,255,0.06)]">
              <div className="grid grid-cols-2 gap-px">
                <div ref={s7} data-step className="bg-[#111111] p-7">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">07</span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">Filing an application</h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">It is necessary to submit an application to the regulator after preparing the company and documents. After submitting an application, you must be ready to answer additional questions from the regulator. We will take care of timely and competent answers.</p>
                </div>
                <div ref={s8} data-step className="bg-[#111111] p-7">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-3">08</span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">Obtaining a license</h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed mb-3">The company receives a license after successfully passing the previous stages. At the same time, it must begin work within six months from the date of receipt of the license. Otherwise, the license may be cancelled.</p>
                  <span className="inline-block text-[11px] text-[#444CE7] border border-[#444CE7]/30 px-3 py-1 uppercase tracking-[0.08em]">~6 months total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — REQUIREMENTS ── */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 gap-12">
            {/* Left */}
            <div className="col-span-7">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Requirements</span>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mb-6">What you need to qualify</h2>

              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-8">
                Malta's MGA is one of the most rigorous gaming regulators in the world. Operators must demonstrate genuine substance — a registered company, physical office presence, local employees, and sufficient capitalization. The authority reviews every detail of your business model, ownership structure, and technical platform.
              </p>

              <h3 className="text-[14px] font-semibold text-[#F0EBE0] mb-4 flex items-center gap-2">
                <NodePulse />
                Documents required
              </h3>

              <ul className="space-y-3 border-l border-[#444CE7]/20 pl-5">
                {reqDocs.map((d) => (
                  <li key={d} className="text-[13px] text-[#9A9590] leading-relaxed">{d}</li>
                ))}
              </ul>
            </div>

            {/* Right — Sticky checklist */}
            <div className="col-span-5">
              <div className="sticky top-24 bg-[#111111] border border-white/[0.06] p-8">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-5">— Document Checklist</span>
                <div className="space-y-4">
                  {checklistDocs.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <div className="w-4 h-4 border border-[#444CE7]/40 bg-[#444CE7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#444CE7]" />
                      </div>
                      <span className="text-[13px] text-[#9A9590]">{d}</span>
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

      {/* ── SECTION 5 — FAQ ── */}
      <section className="bg-[#080808] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">Frequently asked questions</h2>

          <div className="max-w-[720px]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left bg-transparent border-0 cursor-pointer group"
                >
                  <span className="text-[14px] font-medium text-[#F0EBE0]">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#444CE7] transition-transform duration-200 flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — RELATED ── */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Related</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">Other gambling jurisdictions</h2>

          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {related.map((c) => (
              <div
                key={c.name}
                onClick={() => navigate(c.href)}
                className="bg-[#111111] p-7 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                <span className="text-[24px] block mb-4">{c.flag}</span>
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] block mb-1">{c.reg}</span>
                <h3 className="text-[16px] font-semibold text-[#F0EBE0] mb-2">{c.name}</h3>
                <p className="text-[13px] text-[#9A9590]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — CONTACT CTA ── */}
      <section className="bg-[#080808] py-24 px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 gap-12">
            {/* Left */}
            <div className="col-span-7">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-4">— Get in Touch</span>
              <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">Start your Malta MGA application</h2>
              <p className="text-[15px] text-[#9A9590] mb-10">
                Tell us about your business model and target markets. We will assess your application and provide a detailed cost breakdown based on your specific requirements.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <NodePulse />
                  <span className="text-[13px] text-[#9A9590]">Fixed fee pricing — no hourly surprises</span>
                </div>
                <div className="flex items-center gap-3">
                  <NodePulse />
                  <span className="text-[13px] text-[#9A9590]">Senior attorneys on every case, no juniors</span>
                </div>
                <div className="flex items-center gap-3">
                  <NodePulse />
                  <span className="text-[13px] text-[#9A9590]">Response within 2 business hours, Mon–Fri</span>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="col-span-5">
              <div className="bg-[#0d0d0d] border border-white/[0.06] p-8">
                <div className="mb-4">
                  <label className={labelClass}>Name</label>
                  <input type="text" placeholder="Your name" className={inputClass} />
                </div>
                <div className="mb-4">
                  <label className={labelClass}>Email</label>
                  <input type="email" placeholder="your@email.com" className={inputClass} />
                </div>
                <div className="mb-4">
                  <label className={labelClass}>License type</label>
                  <select className={`${inputClass} appearance-none`} defaultValue="Malta / MGA License">
                    <option>Malta / MGA License</option>
                    <option>Gambling License in Costa Rica</option>
                    <option>Isle of Man / GSC</option>
                    <option>Curacao Gaming License</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className={labelClass}>Message</label>
                  <textarea rows={3} placeholder="Tell us about your business briefly" className={inputClass} />
                </div>
                <button className="w-full py-3.5 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors border-0 cursor-pointer mt-2">
                  Send Message →
                </button>
                <p className="text-[11px] text-[#5A5550] text-center mt-3">Typically respond within 2 business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaltaLicensePage;


