import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import NodePulse from "@/components/NodePulse";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import SectionTag from "@/components/SectionTag";

/* ── SECTION 1 — BREADCRUMB ── */
const Breadcrumb = () => (
  <nav className="bg-[#080808] border-b border-white/[0.06] px-12 py-3">
    <div className="flex items-center gap-2 text-[12px]">
      <Link to="/" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">Incluence</Link>
      <ChevronRight size={12} className="text-[#5A5550]" />
      <Link to="/licenses" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">Licenses</Link>
      <ChevronRight size={12} className="text-[#5A5550]" />
      <Link to="/licenses/gambling" className="text-[#5A5550] hover:text-[#9A9590] transition-colors no-underline">Gambling</Link>
      <ChevronRight size={12} className="text-[#5A5550]" />
      <span className="text-[#F0EBE0]">Malta / MGA</span>
    </div>
  </nav>
);

/* ── SECTION 2 — HERO ── */
const FACTS = [
  { label: "JURISDICTION", value: "Malta", color: "text-[#F0EBE0]" },
  { label: "REGULATOR", value: "MGA", color: "text-[#444CE7]" },
  { label: "LICENSE TYPE", value: "B2C / B2B Gaming", color: "text-[#F0EBE0]" },
  { label: "COST FROM", value: "€25,000", color: "text-[#444CE7]" },
  { label: "TIMELINE", value: "6–9 months", color: "text-[#F0EBE0]" },
  { label: "RENEWAL", value: "Every 5 years", color: "text-[#F0EBE0]" },
];

const ADVANTAGES = [
  "EU gold standard — accepted by all European payment processors and banks",
  "Full legal coverage for online casino, sports betting, poker and B2B platforms",
  "5-year license with clear renewal path and regulatory support throughout",
];

const HeroSection = () => (
  <section className="bg-[#080808] py-[72px] px-12">
    <div className="grid grid-cols-[1fr_380px] gap-16 max-w-[1200px] mx-auto items-start">
      {/* LEFT */}
      <div>
        <span className="text-[11px] text-[#444CE7] uppercase tracking-[0.12em]">— GAMBLING LICENSE</span>
        <h1 className="text-[clamp(32px,4vw,52px)] font-light text-[#F0EBE0] mt-3 mb-5 leading-tight">
          Malta Gaming License
        </h1>
        <p className="text-[15px] text-[#9A9590] leading-relaxed mb-8 max-w-[520px]">
          Malta is a state with one of the most well-regulated systems of gambling activities.
          The MGA — Malta Gaming Authority — not only regulates gambling activities but directly
          licenses gambling entities. The license is issued for five years and is renewable.
        </p>

        <div className="flex flex-col gap-3 mb-10">
          {ADVANTAGES.map((text) => (
            <div key={text} className="flex items-start gap-3">
              <div className="w-5 h-5 border border-[#444CE7]/40 bg-[#444CE7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-[#444CE7]" />
              </div>
              <span className="text-[14px] text-[#9A9590]">{text}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-2">
          <button className="px-7 py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 border-0 cursor-pointer">
            Get a Free Quote →
          </button>
          <button className="px-7 py-3 bg-transparent text-[#F0EBE0] text-[13px] font-medium uppercase tracking-[0.08em] border border-white/15 hover:border-white/35 transition-all duration-200 cursor-pointer">
            View Requirements
          </button>
        </div>
      </div>

      {/* RIGHT — Facts Card */}
      <div className="sticky top-24 bg-[#0d0d0d] border border-white/[0.06] p-7">
        <div className="flex items-center gap-2 mb-6 pb-5 border-b border-white/[0.06]">
          <NodePulse />
          <span className="text-[13px] font-medium text-[#F0EBE0]">License data</span>
        </div>
        {FACTS.map((f) => (
          <div key={f.label} className="flex justify-between items-center py-3 border-b border-white/[0.04]">
            <span className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">{f.label}</span>
            <span className={`text-[13px] font-medium ${f.color}`}>{f.value}</span>
          </div>
        ))}
        <button className="w-full py-3 bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] transition-colors border-0 cursor-pointer mt-6">
          Get a Free Quote →
        </button>
      </div>
    </div>
  </section>
);

/* ── SECTION 3 — STEPS ── */
const STEPS = [
  { num: "01", title: "Company Registration in Malta", body: "Register a local company that will receive the license. We handle company name selection, participant documentation, and all registration filings." },
  { num: "02", title: "Opening a Bank Account", body: "Open a corporate bank account for share capital deposit. A complex process requiring expert document preparation and skilled negotiation with banking institutions." },
  { num: "03", title: "Contribution of Authorized Capital", body: "Deposit the required authorized capital. The exact amount depends on the license type. Beneficiary must document the source of funds upon the bank's request." },
  { num: "04", title: "Hiring Required Employees", body: "The company must fill key positions, some of which must be held by local staff. We assist with finding and vetting qualified compliance and management personnel." },
  { num: "05", title: "Office Rent", body: "Office rent is not mandatory, but having a physical presence significantly increases approval chances. We identify budget-friendly options that satisfy MGA requirements." },
  { num: "06", title: "Preparation of Documents", body: "We prepare the full business plan, policies, and application forms. You provide basic company information — we handle everything in compliance with Maltese legislation." },
];

const StepsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);
  const s6 = useRef<HTMLDivElement>(null);
  const s7 = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#111111] py-[72px] px-12">
      <SectionTag>PROCESS</SectionTag>
      <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-2">
        How to obtain a Malta gaming license
      </h2>
      <p className="text-[15px] text-[#9A9590] mb-14 max-w-[480px]">
        A structured 7-step process. We handle every stage — you only provide basic information.
      </p>

      <div ref={containerRef} className="relative bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
        <ProcessFlowCanvas />
        {STEPS.map((s, i) => {
          const refs = [s1, s2, s3, s4, s5, s6];
          return (
            <div key={s.num} ref={refs[i]} className="bg-[#111111] p-7">
              <div className="text-[11px] text-[#444CE7] uppercase tracking-widest mb-4">{s.num}</div>
              <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">{s.title}</div>
              <p className="text-[13px] text-[#9A9590] leading-relaxed">{s.body}</p>
            </div>
          );
        })}
        {/* Step 7 — full row */}
        <div ref={s7} className="bg-[#111111] p-7 col-span-3 border-t border-white/[0.04]">
          <div className="text-[11px] text-[#444CE7] uppercase tracking-widest mb-4">07</div>
          <div className="text-[15px] font-semibold text-[#F0EBE0] mb-2">Filing & Obtaining the License</div>
          <p className="text-[13px] text-[#9A9590] leading-relaxed">
            Submit the application to the MGA and manage all regulatory correspondence. Once approved, the company must begin operations within six months — or the license may be revoked. We track every deadline.
          </p>
          <span className="inline-block border border-white/[0.08] text-[10px] text-[#5A5550] px-2 py-0.5 mt-4">
            6–9 months average
          </span>
        </div>
      </div>
    </section>
  );
};

/* ── SECTION 4 — REQUIREMENTS ── */
const CORPORATE_REQS = [
  "Local company registered in Malta (Ltd or PLC)",
  "Minimum authorized capital depending on license type (B2C from €100,000)",
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

const DOCUMENTS = [
  "Certificate of Incorporation (Malta)",
  "Proof of authorized capital contribution",
  "Business plan and financial projections (3 years)",
  "AML/KYC policy documentation",
  "Technical audit certificate (RNG, platform)",
  "CVs and background checks for all key persons",
  "Responsible gambling policy",
  "Source of funds declaration (all beneficial owners)",
];

const RequirementsSection = () => (
  <section className="bg-[#0d0d0d] py-[72px] px-12">
    <div className="grid grid-cols-[1fr_360px] gap-16 max-w-[1200px] mx-auto items-start">
      {/* LEFT */}
      <div>
        <SectionTag>REQUIREMENTS</SectionTag>
        <h2 className="text-[clamp(24px,3vw,36px)] font-light text-[#F0EBE0] mb-6">
          What you need to qualify
        </h2>
        <div className="text-[14px] text-[#9A9590] leading-[1.85] space-y-5">
          <p>
            Malta's MGA is one of the most rigorous gaming regulators in the world. Operators must
            demonstrate genuine substance in Malta — a registered company, physical office, local
            employees, and sufficient capitalization. The authority scrutinizes every detail of your
            business model, ownership structure, and technical platform.
          </p>

          <h3 className="text-[15px] font-semibold text-[#F0EBE0] mt-8 mb-3">Corporate requirements</h3>
          <div className="border-l-2 border-[#444CE7]/30 pl-5 space-y-2">
            {CORPORATE_REQS.map((r) => (
              <p key={r} className="text-[13px] text-[#9A9590]">{r}</p>
            ))}
          </div>

          <h3 className="text-[15px] font-semibold text-[#F0EBE0] mt-8 mb-3">Technical requirements</h3>
          <div className="border-l-2 border-[#444CE7]/30 pl-5 space-y-2">
            {TECH_REQS.map((r) => (
              <p key={r} className="text-[13px] text-[#9A9590]">{r}</p>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — Document Checklist */}
      <div className="sticky top-24 bg-[#111111] border border-white/[0.06] p-7">
        <div className="text-[12px] text-[#444CE7] uppercase tracking-[0.1em] mb-5">— Document Checklist</div>
        <div className="space-y-3">
          {DOCUMENTS.map((doc) => (
            <div key={doc} className="flex items-start gap-3">
              <div className="w-4 h-4 border border-white/[0.08] bg-white/[0.03] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={10} className="text-[#444CE7]" />
              </div>
              <span className="text-[13px] text-[#9A9590]">{doc}</span>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-[#5A5550] mt-6 leading-relaxed">
          We prepare and verify all documents. You provide source materials — we handle the rest.
        </p>
      </div>
    </div>
  </section>
);

/* ── SECTION 5 — PROS / CONS ── */
const PROS = [
  "EU gold standard — full access to European payment processors and banking",
  "MGA license opens player markets across all EU member states",
  "Strong brand trust — players worldwide recognize and respect MGA regulation",
  "5-year license validity with straightforward renewal process",
  "B2B license option — license your platform to other operators",
  "Comprehensive legal framework — clear rules reduce compliance uncertainty",
];

const CONS = [
  "High capital requirement — minimum €100,000 authorized capital for B2C",
  "Genuine substance required — real office and local employees mandatory",
  "6–9 month timeline — not suitable for operators needing immediate launch",
  "Rigorous compliance obligations — ongoing AML reporting, audits, renewals",
  "Annual license fee applies in addition to initial application cost",
];

const ProsConsSection = () => (
  <section className="bg-[#080808] py-[72px] px-12">
    <SectionTag>PROS & CONS</SectionTag>
    <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">
      Advantages and limitations
    </h2>
    <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
      {/* Advantages */}
      <div className="bg-[#080808] p-8">
        <div className="flex items-center gap-2 mb-6">
          <NodePulse />
          <span className="text-[13px] font-medium text-[#F0EBE0]">Advantages</span>
        </div>
        {PROS.map((text) => (
          <div key={text} className="flex items-start gap-3 mb-4">
            <div className="w-4 h-4 border border-[#22c55e]/30 bg-[#22c55e]/[0.08] flex-shrink-0 mt-0.5 flex items-center justify-center">
              <Check size={10} className="text-[#22c55e]" />
            </div>
            <span className="text-[13px] text-[#9A9590]">{text}</span>
          </div>
        ))}
      </div>
      {/* Considerations */}
      <div className="bg-[#080808] p-8">
        <div className="flex items-center gap-2 mb-6">
          <NodePulse />
          <span className="text-[13px] font-medium text-[#F0EBE0]">Considerations</span>
        </div>
        {CONS.map((text) => (
          <div key={text} className="flex items-start gap-3 mb-4">
            <div className="w-4 h-4 border border-[#f59e0b]/30 bg-[#f59e0b]/[0.08] flex-shrink-0 mt-0.5 flex items-center justify-center">
              <Check size={10} className="text-[#f59e0b]" />
            </div>
            <span className="text-[13px] text-[#9A9590]">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── SECTION 6 — FAQ ── */
const FAQS = [
  { q: "How to open an online casino in Malta?", a: "You must register a local Maltese company, contribute the required authorized capital, hire local staff including a compliance officer, and submit a full license application to the MGA. The process takes 6–9 months. We manage the entire process from company formation to license receipt." },
  { q: "What are the timelines for a Malta gaming license?", a: "From initial consultation to license in hand: 6–9 months for a standard B2C license. Company registration takes 2–3 weeks. Document preparation 3–4 weeks. MGA review itself takes 4–6 months. We often advise clients to obtain a faster offshore license (Curaçao, 4–8 weeks) to begin operations while the MGA application is in progress." },
  { q: "What documents are required for a Malta gaming license?", a: "Core documents include: certificate of incorporation, proof of authorized capital, a detailed 3-year business plan, AML/KYC policy, technical audit certificate for your platform and RNG, CVs and background checks for all key persons, responsible gambling policy, and source of funds declarations for all beneficial owners." },
  { q: "What is the cost of a Malta gaming license?", a: "Initial application and setup costs start from €25,000 including company formation, professional fees, and the MGA application fee. Authorized capital of minimum €100,000 must be contributed separately. Annual license fees and compliance costs apply thereafter. We provide a precise fixed-fee quote at the assessment stage." },
  { q: "Do I need a physical office in Malta?", a: "A physical office is not strictly mandatory under MGA rules, but having one significantly improves your application's success rate. The MGA expects genuine substance — a real operational presence, not just a registered address. We source compliant office solutions at budget-friendly rates." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#0d0d0d] py-[72px] px-12">
      <SectionTag>FAQ</SectionTag>
      <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">
        Frequently asked questions
      </h2>
      <div className="max-w-[720px]">
        {FAQS.map((f, i) => (
          <div key={i} className="border-b border-white/[0.06]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center py-5 text-left bg-transparent border-0 cursor-pointer"
            >
              <span className="text-[14px] font-medium text-[#F0EBE0]">{f.q}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-[#444CE7] shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === i && (
              <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── SECTION 7 — RELATED LICENSES ── */
const RELATED = [
  { flag: "🇨🇼", reg: "CGA", title: "Curaçao", desc: "Fastest and most affordable entry. 4–8 weeks.", cost: "From €15,000", timeline: "4–8 weeks", route: "/licenses/gambling/curacao" },
  { flag: "🇮🇲", reg: "GSC", title: "Isle of Man", desc: "Tier 1 prestige jurisdiction. GSC covers all gambling types.", cost: "From £25,000", timeline: "6–12 months", route: "/licenses/gambling/isle-of-man" },
  { flag: "🇨🇷", reg: "Municipality", title: "Costa Rica", desc: "Fast offshore permit. No business plan required. 2–5 weeks.", cost: "From $15,000", timeline: "2–5 weeks", route: "/licenses/gambling/costa-rica" },
];

const RelatedSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#111111] py-[72px] px-12">
      <SectionTag>RELATED</SectionTag>
      <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-14">
        Other gambling jurisdictions
      </h2>
      <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
        {RELATED.map((r) => (
          <div
            key={r.title}
            onClick={() => navigate(r.route)}
            className="bg-[#111111] p-7 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
            <span className="text-[24px] block mb-4">{r.flag}</span>
            <div className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-1">{r.reg}</div>
            <div className="text-[16px] font-semibold text-[#F0EBE0] mb-2">{r.title}</div>
            <p className="text-[13px] text-[#9A9590]">{r.desc}</p>
            <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/[0.06]">
              <span className="text-[13px] font-medium text-[#F0EBE0]">{r.cost}</span>
              <span className="text-[12px] text-[#9A9590]">{r.timeline}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── SECTION 8 — CONTACT CTA ── */
const ContactCTA = () => {
  const [form, setForm] = useState({ name: "", email: "", jurisdiction: "Malta / MGA License", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const inputCls = "w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-sm placeholder:text-[#5A5550] px-4 py-3 outline-none transition-colors font-[Manrope]";

  return (
    <section className="bg-[#080808] py-24 px-12">
      <div className="grid grid-cols-2 gap-16 max-w-[1200px] mx-auto">
        {/* LEFT */}
        <div>
          <SectionTag>GET IN TOUCH</SectionTag>
          <h2 className="text-[clamp(24px,3vw,40px)] font-light text-[#F0EBE0] mb-4">
            Start your Malta MGA application
          </h2>
          <p className="text-[15px] text-[#9A9590] mb-10">
            Tell us about your business model and target markets. We'll assess your application
            readiness and send a fixed-fee proposal within 2 business hours.
          </p>
          <div className="flex flex-col gap-4">
            {[
              "Fixed fee pricing — no hourly surprises",
              "Senior attorneys on every case, no juniors",
              "Response within 2 business hours, Mon–Fri",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <NodePulse />
                <span className="text-[13px] text-[#9A9590]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="bg-[#0d0d0d] border border-white/[0.06] p-8">
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">Email</label>
            <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">Jurisdiction interest</label>
            <select name="jurisdiction" value={form.jurisdiction} onChange={handleChange} className={`${inputCls} appearance-none`}>
              <option>Malta / MGA License</option>
              <option>Curaçao / CGA</option>
              <option>Isle of Man / GSC</option>
              <option>Costa Rica</option>
              <option>Multiple jurisdictions</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your business briefly" className={inputCls} />
          </div>
          <button className="w-full bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] py-3.5 border-0 cursor-pointer mt-2 transition-colors duration-200">
            Send Message →
          </button>
          <p className="text-[11px] text-[#5A5550] text-center mt-3">Typically respond within 2 business hours</p>
        </div>
      </div>
    </section>
  );
};

/* ── PAGE ── */
const MaltaLicensePage = () => (
  <>
    <Breadcrumb />
    <HeroSection />
    <StepsSection />
    <RequirementsSection />
    <ProsConsSection />
    <FaqSection />
    <RelatedSection />
    <ContactCTA />
  </>
);

export default MaltaLicensePage;
