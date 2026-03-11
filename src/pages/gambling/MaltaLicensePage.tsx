import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import NodePulse from "@/components/NodePulse";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FACTS = [
  { label: "JURISDICTION", value: "Malta", style: "text-[13px] font-medium text-[#F0EBE0]" },
  { label: "REGULATOR", value: "MGA", style: "text-[13px] font-semibold text-[#444CE7]" },
  { label: "LICENSE TYPE", value: "B2C / B2B Gaming", style: "text-[13px] font-medium text-[#F0EBE0]" },
  { label: "COST FROM", value: "€25,000", style: "text-[14px] font-semibold text-[#444CE7]" },
  { label: "TIMELINE", value: "6–9 months", style: "text-[13px] font-medium text-[#F0EBE0]" },
  { label: "RENEWAL", value: "Every 5 years", style: "text-[13px] font-medium text-[#F0EBE0]" },
];

const STEPS = [
  { num: "01", title: "Company Registration in Malta", body: "Register a local company that will receive the license. We handle company name selection, participant documentation, and all registration filings." },
  { num: "02", title: "Opening a Bank Account", body: "Open a corporate bank account for share capital deposit. A complex process requiring expert document preparation and skilled bank negotiation." },
  { num: "03", title: "Contribution of Authorized Capital", body: "Deposit the required authorized capital. The exact amount depends on license type. Beneficiary must document the source of funds." },
  { num: "04", title: "Hiring Required Employees", body: "The company must fill key positions, some held by local staff. We assist with finding and vetting qualified compliance and management personnel." },
  { num: "05", title: "Office Rent", body: "A physical presence significantly increases approval chances. We identify budget-friendly options compliant with MGA substance requirements." },
  { num: "06", title: "Preparation of Documents", body: "We prepare the full business plan, policies, and application forms. You provide basic information — we handle everything under Maltese law." },
];

const ADVANTAGES = [
  "EU gold standard — full access to European payment processors and banking",
  "MGA license opens player markets across all EU member states",
  "Strong brand trust — players worldwide recognize and respect MGA regulation",
  "5-year license validity with straightforward renewal process",
  "B2B license option — license your platform to other operators",
  "Clear legal framework reduces compliance uncertainty",
];

const CONSIDERATIONS = [
  "High capital requirement — minimum €100,000 authorized capital for B2C",
  "Genuine substance required — real office and local employees mandatory",
  "6–9 month timeline — not suitable for operators needing immediate launch",
  "Rigorous compliance obligations — AML reporting, audits, annual renewals",
  "Annual license fee in addition to initial application costs",
];

const CORP_REQS = [
  "Local company registered in Malta (Ltd or PLC)",
  "Minimum authorized capital depending on license type — B2C from €100,000",
  "At least one locally-based director",
  "Certified compliance officer on staff",
  "Physical office address in Malta",
];

const TECH_REQS = [
  "Certified RNG (Random Number Generator) for casino products",
  "Responsible gambling tools: deposit limits, self-exclusion, session limits",
  "AML/KYC policy compliant with EU directives",
  "Business continuity and disaster recovery plan",
];

const DOCS = [
  "Certificate of Incorporation (Malta)",
  "Proof of authorized capital contribution",
  "Business plan and financial projections (3 years)",
  "AML/KYC policy documentation",
  "Technical audit certificate (RNG, platform)",
  "CVs and background checks — all key persons",
  "Responsible gambling policy",
  "Source of funds declaration — all beneficial owners",
];

const FAQS = [
  { q: "How to open an online casino in Malta?", a: "Register a local Maltese company, contribute required authorized capital, hire local staff including a compliance officer, and submit a full application to the MGA. The entire process takes 6–9 months. We manage everything from company formation to license receipt." },
  { q: "What are the timelines for a Malta gaming license?", a: "From initial consultation to license: 6–9 months for a standard B2C license. Company registration takes 2–3 weeks. Document preparation 3–4 weeks. MGA review itself 4–6 months. We often advise obtaining a faster Curaçao license (4–8 weeks) to operate while the MGA application is in progress." },
  { q: "What documents are required?", a: "Core documents: certificate of incorporation, proof of authorized capital, 3-year business plan, AML/KYC policy, technical audit certificate for platform and RNG, CVs and background checks for all key persons, responsible gambling policy, and source of funds declarations for all beneficial owners." },
  { q: "What is the cost of a Malta gaming license?", a: "Setup costs from €25,000 including company formation, professional fees, and MGA application fee. Authorized capital of minimum €100,000 must be contributed separately. Annual license fees and compliance costs apply thereafter. We provide a precise fixed-fee quote at assessment stage." },
  { q: "Do I need a physical office in Malta?", a: "Not strictly mandatory, but strongly recommended. The MGA expects genuine substance — a real operational presence. Having an office significantly improves application success rate. We source compliant, budget-friendly office solutions." },
];

const RELATED = [
  { route: "/licenses/gambling/curacao", flag: "🇨🇼", reg: "CGA", name: "Curaçao", desc: "Fastest and most affordable entry. One sub-license covers all gambling types. No capital requirement.", cost: "From €15,000", time: "4–8 weeks" },
  { route: "/licenses/gambling/isle-of-man", flag: "🇮🇲", reg: "GSC", name: "Isle of Man", desc: "Tier 1 prestige jurisdiction. Advanced telecom infrastructure, strong international recognition.", cost: "From £25,000", time: "6–12 months" },
  { route: "/licenses/gambling/costa-rica", flag: "🇨🇷", reg: "Municipality", name: "Costa Rica", desc: "Fast offshore permit. No business plan required. Income tax exempt for international operators.", cost: "From $15,000", time: "2–5 weeks" },
];

const HERO_ADVANTAGES = [
  "EU gold standard — accepted by all European payment processors and banks",
  "Full legal coverage for online casino, sports betting, poker and B2B platforms",
  "5-year license with clear renewal path and regulatory support throughout",
];

const TRUST = [
  "Fixed fee pricing — no hourly surprises",
  "Senior attorneys on every case, no juniors",
  "Response within 2 business hours, Mon–Fri",
];

const inputClass = "w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-[14px] placeholder:text-[#5A5550] px-4 py-3 outline-none transition-colors";
const labelClass = "block text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-2";

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

  return (
    <div className="min-h-screen bg-[#080808] font-['Manrope',sans-serif] text-[#F0EBE0]">
      <Navbar />

      {/* BREADCRUMB */}
      <div className="bg-[#080808] border-b border-white/[0.06] py-3 px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 text-[12px] text-[#5A5550]">
            <Link to="/" className="hover:text-[#9A9590] transition-colors">Incluence</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/licenses" className="hover:text-[#9A9590] transition-colors">Licenses</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/licenses/gambling" className="hover:text-[#9A9590] transition-colors">Gambling</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#F0EBE0]">Malta / MGA</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#080808] py-[72px] px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <MicroParticles />
        </div>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0" width="500" height="600" viewBox="0 0 500 600" fill="none">
          <path d="M250 100 C300 120, 380 150, 400 220 C420 290, 390 380, 350 420 C310 460, 240 480, 200 460 C160 440, 120 390, 110 340 C100 290, 130 200, 170 160 C210 120, 230 100, 250 100Z" fill="white" />
          <path d="M180 200 C200 190, 230 195, 240 210 C250 225, 245 250, 230 260 C215 270, 195 265, 185 250 C175 235, 170 210, 180 200Z" fill="white" />
        </svg>
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Gambling License</span>
                <span className="text-[10px] text-[#444CE7]/60 border border-[#444CE7]/20 px-2 py-0.5 uppercase tracking-[0.08em]">EU Regulated</span>
              </div>

              <h1 className="text-[clamp(32px,4vw,52px)] font-light text-[#F0EBE0] leading-tight mb-5">
                Malta Gaming<br />License
              </h1>

              <p className="text-[15px] text-[#9A9590] leading-relaxed mb-8 max-w-[520px]">
                Malta is one of the most well-regulated gambling jurisdictions in the world. The MGA — Malta Gaming Authority — directly licenses and regulates gambling entities. License valid 5 years, renewable. EU gold standard.
              </p>

              <div className="flex flex-col gap-3 mb-12">
                {HERO_ADVANTAGES.map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 border border-[#444CE7]/40 bg-[#444CE7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#444CE7]" />
                    </div>
                    <span className="text-[14px] text-[#9A9590]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 border-0 cursor-pointer">
                  Get a Free Quote →
                </button>
                <button className="px-7 py-3 bg-transparent text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] border border-white/15 hover:border-white/35 transition-all duration-200 cursor-pointer">
                  View Requirements
                </button>
              </div>
            </div>

            <div className="col-span-5">
              <div className="sticky top-24 bg-[#0d0d0d] border border-white/[0.06] p-8 relative">
                <div className="absolute top-0 right-0">
                  <div className="w-8 h-[1px] bg-[#444CE7]" />
                  <div className="w-[1px] h-8 bg-[#444CE7] absolute top-0 right-0" />
                </div>

                <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-white/[0.06]">
                  <NodePulse />
                  <span className="text-[13px] font-medium text-[#F0EBE0]">Live license data</span>
                </div>

                <div className="flex flex-col">
                  {FACTS.map((f, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{f.label}</span>
                      <span className={f.style}>{f.value}</span>
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

      {/* PROCESS STEPS */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Process</span>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mt-3 mb-2">How to obtain a Malta gaming license</h2>
          <p className="text-[15px] text-[#9A9590] mb-14 max-w-[480px]">A structured 7-step process. We handle every stage — you only provide basic information.</p>

          <div ref={containerRef} className="relative">
            <ProcessFlowCanvas />
            <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
              {STEPS.map((step, i) => (
                <div key={step.num} ref={[s1, s2, s3, s4, s5, s6][i]} data-step className="bg-[#111111] p-7">
                  <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-3 block">{step.num}</span>
                  <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#9A9590] leading-relaxed">{step.body}</p>
                </div>
              ))}
              <div ref={s7} data-step className="bg-[#111111] p-7 col-span-3 border-t border-white/[0.04]">
                <div className="flex items-start justify-between">
                  <div className="max-w-[680px]">
                    <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] mb-3 block">07</span>
                    <h3 className="text-[15px] font-semibold text-[#F0EBE0] mb-2">Filing & Obtaining the License</h3>
                    <p className="text-[13px] text-[#9A9590] leading-relaxed">Submit the application to the MGA and manage all regulatory correspondence. Once approved, the company must begin operations within six months — or the license may be revoked. We track every deadline.</p>
                  </div>
                  <div className="flex-shrink-0 ml-8">
                    <span className="text-[12px] text-[#444CE7] border border-[#444CE7]/20 bg-[#444CE7]/5 px-3 py-1.5 uppercase tracking-[0.08em]">6–9 months average</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Requirements</span>
              <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mt-3 mb-6">What you need to qualify</h2>

              <p className="text-[14px] text-[#9A9590] leading-[1.85] mb-8">
                Malta's MGA is one of the most rigorous gaming regulators in the world. Operators must demonstrate genuine substance in Malta — a registered company, physical office, local employees, and sufficient capitalization.
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <NodePulse />
                  <span className="text-[14px] font-medium text-[#F0EBE0]">Corporate requirements</span>
                </div>
                <ul className="space-y-3 border-l border-[#444CE7]/20 pl-5">
                  {CORP_REQS.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-3 h-3 text-[#444CE7] flex-shrink-0 mt-1" />
                      <span className="text-[14px] text-[#9A9590] leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <NodePulse />
                  <span className="text-[14px] font-medium text-[#F0EBE0]">Technical requirements</span>
                </div>
                <ul className="space-y-3 border-l border-[#444CE7]/20 pl-5">
                  {TECH_REQS.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-3 h-3 text-[#444CE7] flex-shrink-0 mt-1" />
                      <span className="text-[14px] text-[#9A9590] leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-span-5">
              <div className="sticky top-24 bg-[#111111] border border-white/[0.06] p-8">
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em] block mb-5">— Document Checklist</span>
                <div className="space-y-4">
                  {DOCS.map((doc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 border border-[#444CE7]/30 bg-[#444CE7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#444CE7]" />
                      </div>
                      <span className="text-[13px] text-[#9A9590]">{doc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#5A5550] mt-6 leading-relaxed">We prepare and verify all documents. You provide source materials — we handle the rest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="bg-[#080808] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Pros & Cons</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mt-3 mb-14">Advantages and limitations</h2>

          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
            <div className="bg-[#080808] p-8">
              <div className="flex items-center gap-2 mb-6">
                <NodePulse />
                <span className="text-[14px] font-medium text-[#F0EBE0]">Advantages</span>
              </div>
              {ADVANTAGES.map((t, i) => (
                <div key={i} className="flex items-start gap-3 mb-4">
                  <div className="w-4 h-4 border border-[#22c55e]/30 bg-[#22c55e]/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#22c55e]" />
                  </div>
                  <span className="text-[13px] text-[#9A9590]">{t}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#080808] p-8">
              <div className="flex items-center gap-2 mb-6">
                <NodePulse />
                <span className="text-[14px] font-medium text-[#F0EBE0]">Considerations</span>
              </div>
              {CONSIDERATIONS.map((t, i) => (
                <div key={i} className="flex items-start gap-3 mb-4">
                  <div className="w-4 h-4 border border-[#f59e0b]/30 bg-[#f59e0b]/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[9px] text-[#f59e0b]">!</span>
                  </div>
                  <span className="text-[13px] text-[#9A9590]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0d0d0d] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— FAQ</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mt-3 mb-14">Frequently asked questions</h2>

          <div className="max-w-[720px]">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left bg-transparent border-0 cursor-pointer"
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

      {/* RELATED LICENSES */}
      <section className="bg-[#111111] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Related</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mt-3 mb-14">Other gambling jurisdictions</h2>

          <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
            {RELATED.map((c) => (
              <div
                key={c.name}
                onClick={() => navigate(c.route)}
                className="bg-[#111111] p-7 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                <span className="text-[24px] mb-4 block">{c.flag}</span>
                <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-1 block">{c.reg}</span>
                <h3 className="text-[16px] font-semibold text-[#F0EBE0] mb-2">{c.name}</h3>
                <p className="text-[13px] text-[#9A9590] leading-relaxed">{c.desc}</p>
                <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/[0.06]">
                  <span className="text-[13px] font-medium text-[#F0EBE0]">{c.cost}</span>
                  <span className="text-[12px] text-[#9A9590]">{c.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#080808] py-24 px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-5">
              <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— Get in Touch</span>
              <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mt-3 mb-4">Start your Malta MGA application</h2>
              <p className="text-[15px] text-[#9A9590] mb-10 leading-relaxed">Tell us about your business model and target markets. We assess your readiness and send a fixed-fee proposal within 2 business hours.</p>

              <div className="flex flex-col gap-4 mt-2">
                {TRUST.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <NodePulse />
                    <span className="text-[13px] text-[#9A9590]">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-7">
              <div className="bg-[#0d0d0d] border border-white/[0.06] p-8">
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" className={inputClass} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className={labelClass}>License type</label>
                    <select className={`${inputClass} appearance-none`} defaultValue="Malta / MGA License">
                      <option>Malta / MGA License</option>
                      <option>Curaçao / CGA</option>
                      <option>Isle of Man / GSC</option>
                      <option>Costa Rica</option>
                      <option>Multiple jurisdictions</option>
                      <option>Not sure — need advice</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea rows={3} className={`${inputClass} resize-none`} placeholder="Tell us about your business briefly" />
                  </div>
                  <button className="w-full bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] py-3.5 border-0 cursor-pointer mt-2 transition-colors">
                    Send Message →
                  </button>
                  <p className="text-[11px] text-[#5A5550] text-center mt-3">Typically respond within 2 business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MaltaLicensePage;
