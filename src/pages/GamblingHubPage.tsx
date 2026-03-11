import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SectionTag from "@/components/SectionTag";
import NodePulse from "@/components/NodePulse";
import MicroParticles from "@/components/MicroParticles";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import { Badge } from "@/components/ui/badge";

/* ── SECTION 1 — HERO ── */
const HeroSection = () => (
  <section className="bg-[#080808] py-[72px] px-12 relative overflow-hidden">
    <MicroParticles />
    <div className="relative z-10 max-w-[560px]">
      <SectionTag>GAMBLING LICENSES</SectionTag>
      <h1
        className="text-[clamp(32px,4vw,56px)] font-light text-[#F0EBE0] leading-tight mt-6 mb-4"
      >
        Gambling licenses for operators that play long-term
      </h1>
      <p className="text-[15px] text-[#9A9590] leading-relaxed mt-4 mb-10 max-w-[480px]">
        From fast offshore permits to gold-standard EU licenses — we match your
        business model, target markets, and risk profile to the right
        jurisdiction. Full cycle: company, license, bank accounts.
      </p>
      <div className="bg-[rgba(255,255,255,0.04)] grid grid-cols-3 gap-px mt-10">
        {[
          { num: "12+", label: "JURISDICTIONS COVERED" },
          { num: "4 wks", label: "FASTEST TURNAROUND" },
          { num: "500+", label: "LICENSES ISSUED" },
        ].map((s) => (
          <div key={s.label} className="bg-[#080808] p-5">
            <div className="text-[28px] font-light text-[#F0EBE0]">{s.num}</div>
            <div className="text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── SECTION 2 — JURISDICTIONS GRID ── */
interface JCard {
  flag: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  regulator: string;
  title: string;
  desc: string;
  cost: string;
  timeline: string;
  route: string;
}

const JURISDICTIONS: JCard[] = [
  {
    flag: "🇲🇹",
    badge: "EU Regulated",
    badgeVariant: "outline",
    regulator: "MGA",
    title: "Malta",
    desc: "Gold standard for EU operators. MGA license opens access to European payment systems, banking, and player markets. Valid 5 years, renewable.",
    cost: "From €25,000",
    timeline: "6–9 months",
    route: "/licenses/gambling/malta",
  },
  {
    flag: "🇨🇼",
    badge: "Popular",
    badgeVariant: "secondary",
    regulator: "CGA",
    title: "Curaçao",
    desc: "The fastest and most cost-effective entry point. One sub-license covers all gambling types. No paid-up capital requirement. Remote application possible.",
    cost: "From €15,000",
    timeline: "4–8 weeks",
    route: "/licenses/gambling/curacao",
  },
  {
    flag: "🇮🇲",
    badge: "Tier 1",
    badgeVariant: "secondary",
    regulator: "GSC",
    title: "Isle of Man",
    desc: "High-prestige jurisdiction with advanced telecom infrastructure and strong international recognition. GSC licenses all gambling types under one permit.",
    cost: "From £25,000",
    timeline: "6–12 months",
    route: "/licenses/gambling/isle-of-man",
  },
  {
    flag: "🇨🇷",
    badge: "Offshore",
    badgeVariant: "default",
    regulator: "Municipality",
    title: "Costa Rica",
    desc: "Data Processing license — fastest path to operation. No business plan, no financial reporting, income tax exempt for international operators. Ideal as interim solution.",
    cost: "From $15,000",
    timeline: "2–5 weeks",
    route: "/licenses/gambling/costa-rica",
  },
];

const JurisdictionGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#0d0d0d] py-[72px] px-12">
      <SectionTag>JURISDICTIONS</SectionTag>
      <h2
        className="font-light text-[#F0EBE0] mb-4"
        style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
      >
        Choose your licensing jurisdiction
      </h2>
      <p className="text-[15px] text-[#9A9590] mb-14 max-w-[500px]">
        Each jurisdiction has a unique risk/cost/reputation profile. We assess
        your business and recommend the optimal path.
      </p>
      <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-px">
        {JURISDICTIONS.map((j) => (
          <div
            key={j.title}
            onClick={() => navigate(j.route)}
            className="bg-[#0d0d0d] p-7 relative overflow-hidden group cursor-pointer transition-all duration-300"
          >
            {/* bottom accent */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
            {/* NodePulse */}
            <div className="absolute top-5 right-5">
              <NodePulse />
            </div>
            {/* top row */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-[28px]">{j.flag}</span>
              <Badge variant={j.badgeVariant}>{j.badge}</Badge>
            </div>
            <div className="text-[11px] text-[#444CE7] uppercase tracking-[0.1em] mb-1">
              {j.regulator}
            </div>
            <div className="text-[18px] font-semibold text-[#F0EBE0] mb-3">
              {j.title}
            </div>
            <p className="text-[13px] text-[#9A9590] leading-relaxed mb-6">
              {j.desc}
            </p>
            <div className="border-t border-white/[0.06] pt-5 mt-2">
              <div className="flex justify-between">
                <span className="text-[13px] font-medium text-[#F0EBE0]">
                  {j.cost}
                </span>
                <span className="text-[12px] text-[#9A9590]">
                  {j.timeline}
                </span>
              </div>
            </div>
            <span className="text-[12px] text-[#444CE7] mt-4 block">
              Learn more →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── SECTION 3 — HOW IT WORKS ── */
const STEPS = [
  {
    num: "01",
    title: "Assessment & Strategy",
    body: "We assess your business model, target markets, and risk profile. You receive a jurisdiction comparison with cost/timeline/risk matrix and our recommendation.",
    tag: "1–2 weeks",
  },
  {
    num: "02",
    title: "Company & Structure Setup",
    body: "We register the legal entity, prepare articles, appoint directors, shareholders, and secure a registered address. Full package — you only sign.",
    tag: "2–3 weeks",
  },
  {
    num: "03",
    title: "Filing & Authority Communication",
    body: "We prepare and submit the full license application. All correspondence with the regulator is handled by us. You stay informed at every checkpoint.",
    tag: "4–24 weeks",
  },
  {
    num: "04",
    title: "Launch & Compliance",
    body: "Once licensed, we open bank and merchant accounts, set up AML/KYC procedures, and provide an ongoing compliance retainer so you stay clean.",
    tag: "Ongoing",
  },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <section className="bg-[#111111] py-[72px] px-12">
      <SectionTag>PROCESS</SectionTag>
      <h2
        className="font-light text-[#F0EBE0] mb-4"
        style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
      >
        From first call to licensed operation
      </h2>
      <p className="text-[15px] text-[#9A9590] mb-14 max-w-[500px]">
        A structured process refined across 500+ client projects
      </p>

      <div ref={containerRef} className="relative grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
        <ProcessFlowCanvas />
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            data-step={s.num}
            ref={stepRefs[i]}
            className="bg-[#111111] p-7"
          >
            <div className="text-[11px] text-[#444CE7] uppercase tracking-widest mb-4">
              {s.num}
            </div>
            <div className="text-[16px] font-semibold text-[#F0EBE0] mb-2">
              {s.title}
            </div>
            <p className="text-[13px] text-[#9A9590] leading-relaxed">
              {s.body}
            </p>
            <span className="inline-block border border-white/[0.08] text-[10px] text-[#5A5550] px-2 py-0.5 mt-4">
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── SECTION 4 — WHY US ── */
const WhyUsSection = () => (
  <section className="bg-[#080808] py-[72px] px-12">
    <SectionTag>WHY INCLUENCE</SectionTag>
    <h2
      className="font-light text-[#F0EBE0] mb-14"
      style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
    >
      We do the work. You get the license.
    </h2>
    <div className="bg-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-px">
      {[
        {
          num: "500+",
          title: "Licenses issued",
          body: "Across 12 gambling jurisdictions in 12 years of practice.",
        },
        {
          num: "12 yrs",
          title: "Senior attorneys only",
          body: "No juniors on your file. Every case is handled by a licensed attorney with gambling regulatory experience.",
        },
        {
          num: "2 hrs",
          title: "Response time",
          body: "We respond to every inquiry within 2 business hours, Monday to Friday. Fixed-fee pricing — no hourly surprises.",
        },
      ].map((c) => (
        <div key={c.title} className="bg-[#080808] p-7">
          <div className="text-[36px] font-light text-[#F0EBE0] mb-2">
            {c.num}
          </div>
          <div className="text-[14px] font-semibold text-[#F0EBE0] mb-2">
            {c.title}
          </div>
          <p className="text-[13px] text-[#9A9590]">{c.body}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ── SECTION 5 — FAQ ── */
const FAQS = [
  {
    q: "Which gambling license is best for an online casino?",
    a: "It depends on your target markets and budget. Malta MGA is the gold standard for EU player acquisition. Curaçao offers the fastest and cheapest entry. Isle of Man carries top-tier reputation. We define the optimal option on a free initial call.",
  },
  {
    q: "How long does it take to get a gambling license?",
    a: "Offshore jurisdictions like Curaçao and Costa Rica take 4–8 weeks. EU jurisdictions like Malta and Isle of Man take 6–12 months. We often structure a fast offshore license in parallel with a longer EU application.",
  },
  {
    q: "Can I operate while the application is being reviewed?",
    a: "In most jurisdictions, no. Curaçao allows a temporary operational period. Costa Rica is immediate post-registration. We structure the optimal interim solution for your launch timeline.",
  },
  {
    q: "What minimum capital is required?",
    a: "Malta requires €100,000 authorized capital. Curaçao has no capital requirement. Isle of Man varies by license type. Costa Rica requires only 25% of issued share capital paid at registration. We provide a full cost breakdown in the assessment phase.",
  },
  {
    q: "Do I need a local office and employees?",
    a: "EU licenses (MGA, GSC) require genuine substance — physical office and a compliance officer on the ground. Offshore jurisdictions are more flexible. We handle all local presence requirements as part of our service.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="bg-[#0d0d0d] py-[72px] px-12">
      <SectionTag>FAQ</SectionTag>
      <h2
        className="font-light text-[#F0EBE0] mb-14"
        style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
      >
        Common questions about gambling licenses
      </h2>
      <div className="max-w-[720px]">
        {FAQS.map((f, i) => (
          <div key={i} className="border-b border-white/[0.06]">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center py-5 text-left bg-transparent border-0 cursor-pointer"
            >
              <span className="text-[14px] font-medium text-[#F0EBE0]">
                {f.q}
              </span>
              <ChevronDown
                size={16}
                className={`text-[#5A5550] shrink-0 ml-4 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <p className="text-[13px] text-[#9A9590] leading-relaxed pb-5">
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── SECTION 6 — CONTACT CTA ── */
const ContactCTA = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    jurisdiction: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const inputCls =
    "w-full bg-[#080808] border border-white/[0.08] focus:border-[#444CE7]/50 text-[#F0EBE0] text-sm placeholder:text-[#5A5550] px-4 py-3 outline-none transition-colors font-[Manrope]";

  return (
    <section className="bg-[#111111] py-24 px-12">
      <div className="grid grid-cols-2 gap-16 max-w-[1200px] mx-auto">
        {/* LEFT */}
        <div>
          <SectionTag>GET IN TOUCH</SectionTag>
          <h2
            className="font-light text-[#F0EBE0] mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            Start your gambling license application
          </h2>
          <p className="text-[15px] text-[#9A9590] mb-10">
            Tell us your business model and target markets. We'll identify the
            optimal jurisdiction and send you a cost/timeline breakdown within 2
            business hours.
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

        {/* RIGHT */}
        <div className="bg-[#0d0d0d] border border-white/[0.06] p-8">
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputCls}
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputCls}
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">
              Jurisdiction interest
            </label>
            <select
              name="jurisdiction"
              value={form.jurisdiction}
              onChange={handleChange}
              className={inputCls}
            >
              <option value="">Select jurisdiction interest...</option>
              <option>Malta / MGA</option>
              <option>Curaçao / CGA</option>
              <option>Isle of Man / GSC</option>
              <option>Costa Rica</option>
              <option>Multiple jurisdictions</option>
              <option>Not sure — need advice</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-[11px] text-[#5A5550] uppercase tracking-[0.08em]">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your business briefly"
              className={inputCls}
            />
          </div>
          <button className="w-full bg-[#444CE7] hover:bg-[#3538CD] text-white text-[13px] font-medium uppercase tracking-[0.08em] py-3.5 transition-colors duration-200 border-0 cursor-pointer">
            Send Message →
          </button>
          <p className="text-[11px] text-[#5A5550] text-center mt-3">
            Typically respond within 2 business hours
          </p>
        </div>
      </div>
    </section>
  );
};

/* ── PAGE ── */
const GamblingHubPage = () => (
  <>
    <HeroSection />
    <JurisdictionGrid />
    <ProcessSection />
    <WhyUsSection />
    <FaqSection />
    <ContactCTA />
  </>
);

export default GamblingHubPage;
