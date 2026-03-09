import { Link } from "react-router-dom";
import { ArrowRight, FileText, Building, Scale, Shield, Users, Globe } from "lucide-react";
import WorldMapCanvas from "@/components/WorldMapCanvas";

const industries = ["Blockchain", "FinTech", "E-Commerce", "Gambling & Gaming", "Forex", "Dating", "IT", "Investments"];

const services = [
  { icon: FileText, title: "Licensing", desc: "Obtain regulatory licenses for crypto, gambling, Forex, and financial services across 40+ jurisdictions." },
  { icon: Building, title: "Company Incorporation", desc: "Register companies in any jurisdiction with full legal support and nominee services." },
  { icon: Scale, title: "Bank Account Opening", desc: "Secure corporate bank accounts and payment solutions for high-risk industries." },
  { icon: Shield, title: "Compliance & AML", desc: "Build robust compliance frameworks, AML policies, and KYC procedures." },
  { icon: Users, title: "Offshore Solutions", desc: "Establish offshore entities with optimized tax structures and asset protection." },
  { icon: Globe, title: "Legal Advisory", desc: "Expert legal counsel on international business law, contracts, and regulatory matters." },
];

const process = [
  { step: "01", title: "Consultation", desc: "We analyze your business model and identify the optimal jurisdiction and license type." },
  { step: "02", title: "Assessment", desc: "Detailed regulatory assessment, cost estimation, and timeline planning." },
  { step: "03", title: "Execution", desc: "Document preparation, application filing, and communication with regulators." },
  { step: "04", title: "Ongoing Support", desc: "Post-licensing compliance, renewals, and regulatory reporting assistance." },
];

const stats = [
  { value: "500+", label: "Companies Licensed" },
  { value: "€200M+", label: "Client Revenue Protected" },
  { value: "1,200+", label: "Projects Completed" },
  { value: "12 yrs", label: "Industry Experience" },
];

const partners = ["Nebeus", "Bankstore", "N5Bank", "Avitar Legal"];

const sectionPad = { padding: "var(--space-24) var(--space-12)" };
const cardPad = { padding: "var(--space-10) var(--space-10)" };

const Index = () => (
  <div>
    {/* ══════════ HERO ══════════ */}
    <section className="relative h-screen overflow-hidden" style={{ background: "#080808" }}>
      {/* Canvas map */}
      <WorldMapCanvas />

      {/* Vignette overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 0% 50%, rgba(8,8,8,0.85), transparent)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0) 40%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, transparent 30%)",
        }}
      />

      {/* Top-right badge */}
      <div
        className="absolute z-10 hidden md:flex items-center"
        style={{
          top: 96,
          right: 48,
          background: "rgba(8,8,8,0.7)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(68,76,231,0.2)",
          padding: "12px 20px",
          gap: 10,
        }}
      >
        <span
          className="inline-block rounded-full animate-pulse"
          style={{ width: 6, height: 6, background: "#12B76A" }}
        />
        <span style={{ fontSize: 12, color: "#9A9590", letterSpacing: "0.06em" }}>
          15 jurisdictions active
        </span>
      </div>

      {/* Hero content — left bottom */}
      <div
        className="absolute z-10"
        style={{ left: 48, bottom: 96, maxWidth: 620 }}
      >
        {/* Tag */}
        <div
          className="flex items-center"
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: "#444CE7",
            gap: 8,
            marginBottom: 24,
          }}
        >
          <span style={{ width: 16, height: 1, background: "#444CE7", display: "inline-block" }} />
          International Legal Services
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 68,
            fontWeight: 300,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            color: "#F0EBE0",
            margin: 0,
          }}
        >
          Legal clarity for businesses that{" "}
          <em style={{ color: "#444CE7", fontStyle: "italic" }}>operate</em> beyond borders
        </h1>

        {/* Subline */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "#9A9590",
            marginTop: 24,
            maxWidth: 500,
          }}
        >
          From company formation and licensing — VASP, EMI, PSP, Gambling — to tax structuring
          and compliance across 15+ jurisdictions worldwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap" style={{ marginTop: 36, gap: 14 }}>
          <Link to="/licenses/gambling" className="btn-primary inline-flex items-center" style={{ gap: 8 }}>
            Start your project <ArrowRight size={14} />
          </Link>
          <Link to="/marketplace" className="btn-secondary inline-flex items-center">
            View Marketplace
          </Link>
        </div>
      </div>

      {/* Stats — right bottom */}
      <div
        className="absolute z-10 hidden lg:flex items-end"
        style={{ right: 48, bottom: 96, gap: 28 }}
      >
        {[
          { v: "500+", l: "Companies registered" },
          { v: "40+", l: "Jurisdictions" },
          { v: "12 yrs", l: "Experience" },
        ].map((s, i, arr) => (
          <div key={s.l} className="flex items-center" style={{ gap: 28 }}>
            <div className="text-right">
              <div style={{ fontSize: 26, fontWeight: 300, color: "#F0EBE0" }}>
                {s.v.replace(/[+]/, "")}<span style={{ color: "#444CE7" }}>{s.v.includes("+") ? "+" : ""}{s.v.includes("yrs") ? "" : ""}</span>
              </div>
              <div style={{ fontSize: 11, color: "#5A5550", marginTop: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                {s.l}
              </div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ width: 1, height: 44, background: "rgba(255,255,255,0.08)" }} />
            )}
          </div>
        ))}
      </div>
    </section>

    {/* ══════════ INDUSTRIES ══════════ */}
    <section className="border-y border-border bg-surface">
      <div className="flex overflow-x-auto scrollbar-none">
        {industries.map((ind) => (
          <div
            key={ind}
            className="flex-shrink-0 border-r border-border text-body-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            style={{ padding: "var(--space-5) var(--space-8)" }}
          >
            {ind}
          </div>
        ))}
      </div>
    </section>

    {/* ══════════ SERVICES ══════════ */}
    <section style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="section-tag" style={{ marginBottom: "var(--space-3)" }}>What We Do</div>
          <h2 className="text-display-lg">Comprehensive Legal Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="card-hover bg-card" style={cardPad}>
              <svc.icon className="text-primary" size={28} strokeWidth={1.5} style={{ marginBottom: "var(--space-5)" }} />
              <h3 className="text-display-xs" style={{ marginBottom: "var(--space-3)" }}>{svc.title}</h3>
              <p className="text-body-sm text-muted-foreground">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════ PROCESS ══════════ */}
    <section className="bg-surface" style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <div style={{ marginBottom: "var(--space-16)" }}>
          <div className="section-tag" style={{ marginBottom: "var(--space-3)" }}>How It Works</div>
          <h2 className="text-display-lg">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {process.map((p) => (
            <div key={p.step} className="card-hover bg-card" style={cardPad}>
              <span className="text-display-lg text-primary/30">{p.step}</span>
              <h3 className="text-display-xs" style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-3)" }}>{p.title}</h3>
              <p className="text-body-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════ STATS ══════════ */}
    <section className="border-y border-border">
      <div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-border last:border-r-0 text-center" style={{ padding: "var(--space-16) var(--space-8)" }}>
            <div className="text-display-md text-primary" style={{ marginBottom: "var(--space-2)" }}>{s.value}</div>
            <div className="text-label text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* ══════════ PARTNERS ══════════ */}
    <section style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <div className="section-tag justify-center" style={{ marginBottom: "var(--space-10)" }}>Trusted Partners</div>
        <div className="flex flex-wrap justify-center" style={{ gap: "var(--space-16)" }}>
          {partners.map((p) => (
            <div key={p} className="text-display-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════ CONTACT ══════════ */}
    <section className="bg-surface" style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--space-16)" }}>
          <div>
            <div className="section-tag" style={{ marginBottom: "var(--space-3)" }}>Get In Touch</div>
            <h2 className="text-display-lg" style={{ marginBottom: "var(--space-6)" }}>Let's discuss your project</h2>
            <p className="text-body-lg text-muted-foreground">
              Schedule a free consultation with our experts. We'll analyze your business needs and recommend the optimal licensing strategy.
            </p>
          </div>
          <form className="flex flex-col" style={{ gap: "var(--space-5)" }} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2" style={{ gap: "var(--space-4)" }}>
              <input placeholder="Full Name" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
              <input placeholder="Email" type="email" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
            </div>
            <input placeholder="Company Name" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
            <button type="submit" className="btn-primary self-start">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
