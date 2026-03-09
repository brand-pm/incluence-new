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

const Index = () => (
  <div>
    {/* HERO */}
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 lg:px-12">
      <div className="absolute inset-0 grid-dots" />
      <div className="absolute inset-0 gold-glow" />
      <div className="relative mx-auto w-full max-w-[1400px] pt-16">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
          <h1 className="max-w-4xl text-5xl font-light leading-[1.1] md:text-7xl">
            Legal clarity for businesses that{" "}
            <em className="text-gold not-italic font-light">operate</em> beyond borders
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Assistance in obtaining licenses for crypto, banking, gambling, Forex, investment, and financial services across 40+ jurisdictions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/licenses/gambling"
              className="inline-flex items-center gap-2 bg-gold px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Licenses <ArrowRight size={16} />
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 border border-gold-border px-7 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Marketplace
            </Link>
          </div>
        </motion.div>

        {/* Stat cluster */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-12 right-0 hidden lg:flex items-end gap-10"
        >
          {[
            { v: "500+", l: "Companies" },
            { v: "40+", l: "Jurisdictions" },
            { v: "12", l: "Years" },
          ].map((s) => (
            <div key={s.l} className="text-right">
              <div className="text-3xl font-light text-gold">{s.v}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
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
            className="flex-shrink-0 border-r border-border px-8 py-5 text-sm text-muted-foreground hover:text-gold hover:bg-gold-dim transition-colors cursor-pointer"
          >
            {ind}
          </div>
        ))}
      </div>
    </section>

    {/* SERVICES */}
    <section className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">What We Do</p>
          <h2 className="text-3xl font-light md:text-5xl">Comprehensive Legal Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="card-hover bg-card p-10">
              <svc.icon className="text-gold mb-5" size={28} strokeWidth={1.5} />
              <h3 className="text-lg font-medium mb-3">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-24 px-6 lg:px-12 bg-surface">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">How It Works</p>
          <h2 className="text-3xl font-light md:text-5xl">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {process.map((p) => (
            <div key={p.step} className="card-hover bg-card p-10">
              <span className="text-4xl font-light text-gold/30">{p.step}</span>
              <h3 className="text-lg font-medium mt-4 mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="border-y border-border">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-border last:border-r-0 py-16 px-8 text-center">
            <div className="text-4xl font-light text-gold mb-2">{s.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* PARTNERS */}
    <section className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-10 text-center">Trusted Partners</p>
        <div className="flex flex-wrap justify-center gap-16">
          {partners.map((p) => (
            <div key={p} className="text-2xl font-light text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CONTACT */}
    <section className="py-24 px-6 lg:px-12 bg-surface">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Get In Touch</p>
            <h2 className="text-3xl font-light md:text-5xl mb-6">Let's discuss your project</h2>
            <p className="text-muted-foreground leading-relaxed">
              Schedule a free consultation with our experts. We'll analyze your business needs and recommend the optimal licensing strategy.
            </p>
          </div>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Full Name" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" />
              <input placeholder="Email" type="email" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" />
            </div>
            <input placeholder="Company Name" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" />
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none resize-none" />
            <button type="submit" className="bg-gold px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
