import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Building, Scale, Shield, Users, Globe } from "lucide-react";

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

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const sectionPad = { padding: "var(--space-24) var(--space-12)" };
const cardPad = { padding: "var(--space-10) var(--space-10)" };

const Index = () => (
  <div>
    {/* HERO */}
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden" style={{ padding: "0 var(--space-12)" }}>
      <div className="absolute inset-0 grid-dots" />
      <div className="absolute inset-0 gold-glow" />
      <div className="relative mx-auto w-full max-w-[1280px]" style={{ paddingTop: "var(--nav-height)" }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
          <h1 className="text-display-2xl max-w-4xl">
            Legal clarity for businesses that{" "}
            <span className="text-gold font-normal">operate</span> beyond borders
          </h1>
          <p className="max-w-xl text-body-lg text-muted-foreground" style={{ marginTop: "var(--space-6)" }}>
            Assistance in obtaining licenses for crypto, banking, gambling, Forex, investment, and financial services across 40+ jurisdictions.
          </p>
          <div className="flex flex-wrap" style={{ marginTop: "var(--space-10)", gap: "var(--space-4)" }}>
            <Link
              to="/licenses/gambling"
              className="inline-flex items-center bg-gold text-body-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              style={{ padding: "var(--space-3) var(--space-8)", gap: "var(--space-2)" }}
            >
              Explore Licenses <ArrowRight size={16} />
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center border border-gold-border text-body-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              style={{ padding: "var(--space-3) var(--space-8)", gap: "var(--space-2)" }}
            >
              Marketplace
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-12 right-0 hidden lg:flex items-end"
          style={{ gap: "var(--space-10)" }}
        >
          {[
            { v: "500+", l: "Companies" },
            { v: "40+", l: "Jurisdictions" },
            { v: "12", l: "Years" },
          ].map((s) => (
            <div key={s.l} className="text-right">
              <div className="text-display-sm text-gold">{s.v}</div>
              <div className="text-label text-muted-foreground" style={{ marginTop: "var(--space-1)" }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="border-y border-border bg-surface">
      <div className="flex overflow-x-auto scrollbar-none">
        {industries.map((ind) => (
          <div
            key={ind}
            className="flex-shrink-0 border-r border-border text-body-sm text-muted-foreground hover:text-gold hover:bg-gold-dim transition-colors cursor-pointer"
            style={{ padding: "var(--space-5) var(--space-8)" }}
          >
            {ind}
          </div>
        ))}
      </div>
    </section>

    {/* SERVICES */}
    <section style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <div style={{ marginBottom: "var(--space-16)" }}>
          <p className="text-label text-gold" style={{ marginBottom: "var(--space-3)" }}>What We Do</p>
          <h2 className="text-display-lg">Comprehensive Legal Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="card-hover bg-card" style={cardPad}>
              <svc.icon className="text-gold" size={28} strokeWidth={1.5} style={{ marginBottom: "var(--space-5)" }} />
              <h3 className="text-display-xs" style={{ marginBottom: "var(--space-3)" }}>{svc.title}</h3>
              <p className="text-body-sm text-muted-foreground">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="bg-surface" style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <div style={{ marginBottom: "var(--space-16)" }}>
          <p className="text-label text-gold" style={{ marginBottom: "var(--space-3)" }}>How It Works</p>
          <h2 className="text-display-lg">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {process.map((p) => (
            <div key={p.step} className="card-hover bg-card" style={cardPad}>
              <span className="text-display-lg text-gold/30">{p.step}</span>
              <h3 className="text-display-xs" style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-3)" }}>{p.title}</h3>
              <p className="text-body-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="border-y border-border">
      <div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-border last:border-r-0 text-center" style={{ padding: "var(--space-16) var(--space-8)" }}>
            <div className="text-display-md text-gold" style={{ marginBottom: "var(--space-2)" }}>{s.value}</div>
            <div className="text-label text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* PARTNERS */}
    <section style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <p className="text-label text-gold text-center" style={{ marginBottom: "var(--space-10)" }}>Trusted Partners</p>
        <div className="flex flex-wrap justify-center" style={{ gap: "var(--space-16)" }}>
          {partners.map((p) => (
            <div key={p} className="text-display-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CONTACT */}
    <section className="bg-surface" style={sectionPad}>
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--space-16)" }}>
          <div>
            <p className="text-label text-gold" style={{ marginBottom: "var(--space-3)" }}>Get In Touch</p>
            <h2 className="text-display-lg" style={{ marginBottom: "var(--space-6)" }}>Let's discuss your project</h2>
            <p className="text-body-lg text-muted-foreground">
              Schedule a free consultation with our experts. We'll analyze your business needs and recommend the optimal licensing strategy.
            </p>
          </div>
          <form className="flex flex-col" style={{ gap: "var(--space-5)" }} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2" style={{ gap: "var(--space-4)" }}>
              <input placeholder="Full Name" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
              <input placeholder="Email" type="email" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
            </div>
            <input placeholder="Company Name" className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-card border border-border text-body-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none resize-none" style={{ padding: "var(--space-3) var(--space-4)" }} />
            <button type="submit" className="bg-gold text-body-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 self-start" style={{ padding: "var(--space-3) var(--space-8)" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
