import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTag from "@/components/SectionTag";
import NodePulse from "@/components/NodePulse";
import { FlagEmojiGroup } from "@/components/FlagEmoji";
import ProcessFlowCanvas from "@/components/ProcessFlowCanvas";
import RelatedJurisdictions from "@/components/RelatedJurisdictions";
import { TerritoryMap } from "@/components/map/TerritoryMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ─── DATA ────────────────────────────────────────── */

const FACTS = [
  { label: "JURISDICTION", value: "Costa Rica" },
  { label: "REGULATOR", value: "Local Municipality" },
  { label: "LICENSE TYPE", value: "Data Processing License" },
  { label: "COST FROM", value: "$15,000", accent: true },
  { label: "TIMELINE", value: "2–5 weeks" },
  { label: "RENEWAL", value: "$1,500 / quarter" },
];

const STEPS = [
  { n: "01", t: "Company Registration in Costa Rica", d: "You must register a local company to which the license will later be issued. This requires choosing a company name, specifying the participants, and providing their documents." },
  { n: "02", t: "Opening a Bank Account", d: "The company must open a bank account to deposit share capital. Opening an account is a complex process that should be entrusted to professionals." },
  { n: "03", t: "Contribution of Share Capital", d: "The exact amount of share capital depends on the license type. The beneficiary must provide documents confirming the source of funds contributed as share capital." },
  { n: "04", t: "Hiring Mandatory Staff", d: "The company must employ staff in key positions, some of whom must be local residents. We assist with recruitment and staffing." },
  { n: "05", t: "Renting an Office", d: "One of the mandatory requirements is renting an office. We will help select a cost-effective option that meets all requirements." },
  { n: "06", t: "Preparing Documents", d: "A business plan, policies, and technical documentation must be prepared. The client only provides basic information, and we prepare all documents." },
  { n: "07", t: "Submitting the Application", d: "After preparing the company and documents, the application must be submitted to the regulator. We ensure timely and professional responses." },
  { n: "08", t: "Obtaining the License", d: "After successfully completing the previous steps, the company receives the license. Operations must begin within six months." },
];

const ADVANTAGES = [
  "No business plan or financial reporting required",
  "Fastest licensing in the market — 2 to 5 weeks",
  "Income tax exemption for international operations",
  "Low entry cost — $15,000 one-time fee",
  "No minimum capital requirements beyond 25% of issued capital",
  "Flexible regulatory environment",
];

const RESTRICTIONS = [
  "Cannot accept bets from Costa Rican residents",
  "Equipment must be physically located outside Costa Rica",
  "Must hire a local legal representative (Costa Rican resident)",
  "Not a traditional gambling license — limited recognition in some markets",
  "Quarterly renewal fee of $1,500",
];

const DOCS = [
  "Company registration documents",
  "Participants' identity documents",
  "Proof of registered office in Costa Rica",
  "Local legal representative appointment",
  "Bank account confirmation",
  "Share capital contribution proof (25% minimum)",
  "Technical infrastructure documentation",
  "Application forms (we prepare)",
];

const FAQS = [
  { q: "Is a gambling license in Costa Rica legally recognized worldwide?", a: "Costa Rica issues a Data Processing license rather than a traditional gambling license. It allows operators to legally organize online gambling and process bets internationally. However, recognition varies by market — it's widely used for offshore operations but may not satisfy requirements in regulated EU or UK markets." },
  { q: "Can I accept players from any country?", a: "Yes, with one exception: Costa Rican residents are prohibited from using the services of operators licensed under this scheme. Your equipment must also be physically located outside of Costa Rica. All other international markets are accessible." },
  { q: "How long does the licensing process take?", a: "Costa Rica is one of the fastest jurisdictions — the Data Processing license is typically issued within 2 to 5 weeks. Our team handles all local requirements including company registration, office rental, and document preparation." },
  { q: "What is the total cost of obtaining a Costa Rica gambling license?", a: "The one-time application fee is $15,000, with a quarterly renewal fee of $1,500. There are no large capital requirements — only 25% of issued share capital must be paid during registration. Total setup costs including company formation typically range from $20,000 to $30,000." },
  { q: "Do I need a physical office in Costa Rica?", a: "Yes, a registered office address in Costa Rica is mandatory. You also need to appoint a legal representative who is a Costa Rican resident if your company is foreign-owned. We handle both requirements as part of our full-service package." },
];

const RELATED = [
  { href: "/malta-gaming-license", reg: "MGA", name: "Malta", desc: "EU gold standard. Full European market access. 6–9 months, from €25,000." },
  { href: "/curacao-gaming-license", reg: "CGA", name: "Curaçao", desc: "Fast and affordable offshore license. Widely accepted by payment providers globally. 4–8 weeks, from €15,000." },
  { href: "/gambling-license-gibraltar", reg: "GBGA", name: "Gibraltar", desc: "High prestige license for serious operators. Strong banking and payments access. 4–6 months, from £25,000." },
];

/* ─── COMPONENT ───────────────────────────────────── */

const CostaRicaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="font-['Manrope']">
      {/* ── 1. BREADCRUMB ──────────────────────────── */}
      <section className="bg-[hsl(var(--bg-1))] pt-6 pb-0 px-12">
        <div className="max-w-[1280px] mx-auto text-[11px] text-[hsl(var(--text-muted))]">
          <Link to="/" className="hover:text-[hsl(var(--text-secondary))] transition-colors">Incluence</Link>
          <span className="mx-1.5">/</span>
          <Link to="/gamble-license" className="hover:text-[hsl(var(--text-secondary))] transition-colors">Gambling Licenses</Link>
          <span className="mx-1.5">/</span>
          <span className="text-[hsl(var(--text-primary))]">Costa Rica</span>
        </div>
      </section>

      {/* ── 2. HERO 2-COL ─────────────────────────── */}
      <section className="bg-[hsl(var(--bg-1))] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto flex gap-12 items-start">
          <div className="flex-1">
            <SectionTag>GAMBLING LICENSE</SectionTag>
            <h1 className="font-light text-[clamp(32px,4vw,52px)] text-[hsl(var(--text-primary))] mb-6 leading-tight">
              Gambling License in Costa Rica
            </h1>
            <p className="text-[15px] text-[hsl(var(--text-secondary))] leading-relaxed max-w-[480px] mb-8">
              The Republic of Costa Rica is a relatively small country whose economy is based on tourism, agriculture, and the production and export of electronics. Foreign investors are attracted by the country's political stability, skilled workforce, and tax benefits.
            </p>
            <ul className="space-y-3 mb-10">
              {["No business plan, no financial reporting required", "License issued in 2–5 weeks — fastest in the market", "Income tax exemption for international operators"].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[13px] text-[hsl(var(--text-secondary))]">
                  <span className="text-[hsl(var(--accent))] mt-0.5">—</span>{b}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Button asChild className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-hover))] text-white px-6 py-2.5 text-xs font-medium uppercase tracking-wider rounded-none">
                <Link to="/contact">Get a Free Quote →</Link>
              </Button>
              <Button asChild variant="outline" className="border-[hsl(var(--border-default))] text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:border-[hsl(var(--border-hover))] px-6 py-2.5 text-xs font-medium uppercase tracking-wider rounded-none">
                <Link to="/gamble-license">View All Gambling Licenses</Link>
              </Button>
            </div>
          </div>

          {/* Facts Card */}
          <div className="w-[360px] flex-shrink-0 sticky top-[80px] bg-[hsl(var(--bg-2))] border border-[hsl(var(--border-default))] p-7">
            <div className="flex items-center gap-2 mb-6">
              <NodePulse />
              <span className="text-[11px] text-[hsl(var(--text-muted))]">Live license data</span>
            </div>
            {FACTS.map((f, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-[hsl(0_0%_100%/0.04)]">
                <span className="text-[11px] text-[hsl(var(--text-muted))] uppercase tracking-wider">{f.label}</span>
                <span className={`text-[13px] font-medium ${f.accent ? "text-[hsl(var(--accent))]" : "text-[hsl(var(--text-primary))]"}`}>{f.value}</span>
              </div>
            ))}
            <Button asChild className="w-full mt-6 bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-hover))] text-white text-xs font-medium uppercase tracking-wider rounded-none">
              <Link to="/contact">Get a Free Quote →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 3. STEPS ──────────────────────────────── */}
      <section className="bg-[hsl(var(--bg-3))] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionTag>HOW IT WORKS</SectionTag>
          <h2 className="text-[clamp(28px,3vw,40px)] font-light text-[hsl(var(--text-primary))] mb-12">
            From application to licensed operation
          </h2>
          <div className="relative">
            <ProcessFlowCanvas />
            <div className="bg-[hsl(0_0%_100%/0.06)] grid grid-cols-3 gap-px relative z-10">
              {STEPS.map((s, i) => (
                <div key={i} className="bg-[hsl(var(--bg-3))] p-7" data-step={s.n}>
                  <span className="text-[11px] text-[hsl(var(--accent))] uppercase tracking-widest block mb-3">{s.n}</span>
                  <h3 className="text-[14px] font-semibold text-[hsl(var(--text-primary))] mb-2">{s.t}</h3>
                  <p className="text-[12px] text-[hsl(var(--text-secondary))] leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. REQUIREMENTS ───────────────────────── */}
      <section className="bg-[hsl(var(--bg-2))] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto flex gap-12 items-start">
          <div className="flex-1 max-w-[580px]">
            <h3 className="text-[16px] font-semibold text-[hsl(var(--text-primary))] mb-3">
              Gambling License in Costa Rica: What is required for licensing
            </h3>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
              The Data Processing license is issued by the local municipality, and to apply, you only need to have an office in the country and hire a legal representative. If the enterprise is foreign-owned, this position must be filled by a Costa Rican resident.
            </p>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
              The state does not require what is usually requested in other jurisdictions for licensing:
            </p>
            <ul className="border-l-2 border-[hsl(var(--accent))] pl-4 space-y-2 mb-6">
              {["No business plan is needed", "No profit plan requirements", "No measures required regarding gambling addiction prevention", "No requirements related to software", "No financial reporting or mandatory bank accounts"].map((item, i) => (
                <li key={i} className="text-[13px] text-[hsl(var(--text-secondary))]">{item}</li>
              ))}
            </ul>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
              There are also no requirements for a large initial capital. However, to obtain a gambling license in Costa Rica, at least 25% of the issued share capital must be paid during company registration.
            </p>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed mb-8">
              If you want to operate in the gambling sector, Costa Rica imposes only one condition: the company's activities must not target the country or its residents. The restriction also applies to the equipment needed for online operations — it must be physically located outside of Costa Rica.
            </p>
            <h3 className="text-[16px] font-semibold text-[hsl(var(--text-primary))] mb-3">
              Online Casino License: Costa Rica and its licensing specifics
            </h3>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
              When applying for a license, business owners must pay a one-time fee of $15,000 and then pay $1,500 quarterly for renewal. An additional advantage is that if the operator offers services in any country in the world except Costa Rica, from the government's perspective such a company is considered self-regulated and therefore exempt from income tax.
            </p>
            <p className="text-[14px] text-[hsl(var(--text-secondary))] leading-relaxed">
              If you are interested in a gambling license, Costa Rica issues this permit within 2–5 weeks.
            </p>
          </div>

          {/* Checklist */}
          <div className="w-[300px] sticky top-[80px] bg-[hsl(var(--bg-1))] border border-[hsl(var(--border-default))] p-6">
            <span className="text-[11px] text-[hsl(var(--accent))] uppercase tracking-[0.1em] block mb-4">— REQUIRED DOCUMENTS</span>
            <div className="space-y-3">
              {DOCS.map((doc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-[hsl(var(--accent)/0.4)] bg-[hsl(var(--accent)/0.08)] flex-shrink-0 mt-0.5" />
                  <span className="text-[12px] text-[hsl(var(--text-secondary))]">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PROS / CONS ────────────────────────── */}
      <section className="bg-[hsl(var(--bg-1))] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionTag>ADVANTAGES & RESTRICTIONS</SectionTag>
          <h2 className="text-[clamp(28px,3vw,40px)] font-light text-[hsl(var(--text-primary))] mb-12">
            What you need to know before applying
          </h2>
          <div className="bg-[hsl(0_0%_100%/0.06)] grid grid-cols-2 gap-px">
            {/* Advantages */}
            <div className="bg-[hsl(var(--bg-1))] p-7">
              <span className="text-[11px] text-[hsl(142_71%_45%)] uppercase tracking-widest block mb-5">— ADVANTAGES</span>
              <div className="space-y-4">
                {ADVANTAGES.map((a, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-[hsl(142_71%_45%/0.2)] border border-[hsl(142_71%_45%/0.3)] flex-shrink-0 flex items-center justify-center text-[hsl(142_71%_45%)] text-[10px]">✓</div>
                    <span className="text-[13px] text-[hsl(var(--text-secondary))]">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Restrictions */}
            <div className="bg-[hsl(var(--bg-1))] p-7">
              <span className="text-[11px] text-[hsl(38_92%_50%)] uppercase tracking-widest block mb-5">— RESTRICTIONS</span>
              <div className="space-y-4">
                {RESTRICTIONS.map((r, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-[hsl(38_92%_50%/0.2)] border border-[hsl(38_92%_50%/0.3)] flex-shrink-0 flex items-center justify-center text-[hsl(38_92%_50%)] text-[10px]">✗</div>
                    <span className="text-[13px] text-[hsl(var(--text-secondary))]">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ────────────────────────────────── */}
      <section className="bg-[hsl(var(--bg-2))] py-[72px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionTag>FAQ</SectionTag>
          <h2 className="text-[clamp(28px,3vw,40px)] font-light text-[hsl(var(--text-primary))] mb-12">
            Common questions about Costa Rica licensing
          </h2>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-[hsl(var(--border-default))] py-5">
                <button
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[14px] font-medium text-[hsl(var(--text-primary))]">{faq.q}</span>
                  <ChevronRight
                    size={16}
                    className={`text-[hsl(var(--accent))] transition-transform duration-200 flex-shrink-0 ml-4 ${openFaq === i ? "rotate-90" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[13px] text-[hsl(var(--text-secondary))] leading-relaxed pt-3">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedJurisdictions title="Other popular gambling jurisdictions" items={RELATED} />

      {/* ── 8. CONTACT CTA ────────────────────────── */}
      <section className="bg-[hsl(var(--bg-1))] py-24 px-12">
        <div className="max-w-[1280px] mx-auto flex gap-16 items-start">
          <div className="flex-1">
            <SectionTag>GET IN TOUCH</SectionTag>
            <h2 className="text-[clamp(28px,3vw,40px)] font-light text-[hsl(var(--text-primary))] mb-4">
              Start your Costa Rica license application
            </h2>
            <p className="text-[15px] text-[hsl(var(--text-secondary))] leading-relaxed max-w-[440px] mb-8">
              Tell us about your business and we'll handle the entire process — company formation, office, documentation, and filing.
            </p>
            <div className="flex items-center gap-3">
              <NodePulse />
              <span className="text-[12px] text-[hsl(var(--text-muted))]">Average response time: 2 hours</span>
            </div>
          </div>
          <div className="w-[400px] flex-shrink-0 space-y-4">
            <Input placeholder="Name" className="bg-[hsl(var(--bg-2))] border-[hsl(var(--border-default))] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] rounded-none h-11 text-sm" />
            <Input placeholder="Email" type="email" className="bg-[hsl(var(--bg-2))] border-[hsl(var(--border-default))] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] rounded-none h-11 text-sm" />
            <Input placeholder="Phone" type="tel" className="bg-[hsl(var(--bg-2))] border-[hsl(var(--border-default))] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] rounded-none h-11 text-sm" />
            <Textarea placeholder="Message" className="bg-[hsl(var(--bg-2))] border-[hsl(var(--border-default))] text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] rounded-none min-h-[120px] text-sm" />
            <Button className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent-hover))] text-white text-xs font-medium uppercase tracking-wider rounded-none h-11">
              Send Message →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostaRicaPage;
