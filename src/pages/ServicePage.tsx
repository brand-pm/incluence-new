import { Link } from "react-router-dom";
import { ChevronRight, Clock, DollarSign, FileCheck, Shield, Users, Building, ArrowRight } from "lucide-react";

const requirements = [
  { icon: DollarSign, title: "Capital Requirements", desc: "Minimum share capital of €240,000 for B2C operators." },
  { icon: Shield, title: "AML Compliance", desc: "Full Anti-Money Laundering framework and compliance officer." },
  { icon: Users, title: "Key Personnel", desc: "Fit and proper directors, compliance officer, and MLRO." },
  { icon: Building, title: "Local Presence", desc: "Registered office and operational base in Malta." },
  { icon: FileCheck, title: "Technical Standards", desc: "Gaming systems certification and RNG testing." },
  { icon: Clock, title: "Reporting", desc: "Quarterly financial reporting and player protection audits." },
];

const relatedServices = ["Company Incorporation in Malta", "Malta Bank Account Opening", "AML Compliance Setup", "Technical Certification"];
const otherJurisdictions = [
  { country: "Gibraltar", price: "£25,000" },
  { country: "Cyprus", price: "€35,000" },
  { country: "Estonia", price: "€10,000" },
  { country: "Curaçao", price: "$12,000" },
];

const sectionPad = { padding: "var(--space-24) var(--space-12)" };
const cardPad = { padding: "var(--space-10)" };
const sidebarPad = { padding: "var(--space-8)" };

const ServicePage = () => (
  <div>
    <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden" style={{ padding: "var(--nav-height) var(--space-12) var(--space-16)" }}>
      <div className="absolute inset-0 grid-dots opacity-50" />
      <div className="absolute inset-0 gold-glow opacity-60" />
      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="flex items-center text-body-xs text-muted-foreground" style={{ gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/gamble-license" className="hover:text-gold transition-colors">Gambling Licenses</Link>
          <ChevronRight size={12} />
          <span className="text-foreground">Malta MGA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "var(--space-12)" }}>
          <div className="lg:col-span-2">
            <h1 className="text-display-xl" style={{ marginBottom: "var(--space-6)" }}>Malta Gaming Authority License</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl" style={{ marginBottom: "var(--space-8)" }}>
              The Malta Gaming Authority (MGA) license is one of the most reputable iGaming licenses in the world, providing access to EU markets and global credibility.
            </p>
            <div className="flex flex-wrap" style={{ gap: "var(--space-4)" }}>
              <button className="inline-flex items-center bg-gold text-body-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity" style={{ padding: "var(--space-3) var(--space-8)", gap: "var(--space-2)" }}>
                Apply Now <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center border border-gold-border text-body-sm font-medium text-gold hover:bg-gold hover:text-primary-foreground transition-colors" style={{ padding: "var(--space-3) var(--space-8)", gap: "var(--space-2)" }}>
                Book Consultation
              </button>
            </div>
          </div>

          <div className="bg-card border border-border" style={sidebarPad}>
            <div className="text-label text-muted-foreground" style={{ marginBottom: "var(--space-2)" }}>Starting from</div>
            <div className="text-display-md text-gold" style={{ marginBottom: "var(--space-8)" }}>€25,000</div>
            <div className="flex flex-col" style={{ gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
              {[
                { label: "Timeline", value: "6-12 months" },
                { label: "Application Fee", value: "€5,000" },
                { label: "Annual Fee", value: "€25,000" },
                { label: "Capital Required", value: "€240,000" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-body-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-foreground font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-gold text-body-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity" style={{ padding: "var(--space-3) 0" }}>
              Apply for MGA License
            </button>
          </div>
        </div>
      </div>
    </section>

    <section style={sectionPad}>
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-3" style={{ gap: "var(--space-16)" }}>
        <div className="lg:col-span-2">
          <div style={{ marginBottom: "var(--space-16)" }}>
            <p className="text-label text-gold" style={{ marginBottom: "var(--space-3)" }}>Overview</p>
            <h2 className="text-display-lg" style={{ marginBottom: "var(--space-6)" }}>About the MGA License</h2>
            <div className="text-body-md text-muted-foreground" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <p>The Malta Gaming Authority (MGA) is the single regulatory body responsible for the governance of all gaming activities in Malta. Established in 2001, the MGA has become one of the most respected gaming regulators in the world.</p>
              <p>An MGA license allows operators to offer gaming services to players across the European Union and many other jurisdictions that recognize the Malta license.</p>
              <p>Malta offers a corporate tax rate of 35% with an effective rate of 5% after refunds, making it one of the most tax-efficient jurisdictions for gaming operators in the EU.</p>
            </div>
          </div>

          <div>
            <p className="text-label text-gold" style={{ marginBottom: "var(--space-3)" }}>Requirements</p>
            <h2 className="text-display-lg" style={{ marginBottom: "var(--space-8)" }}>Key Requirements</h2>
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
              {requirements.map((req) => (
                <div key={req.title} className="card-hover bg-card" style={sidebarPad}>
                  <req.icon className="text-gold" size={24} strokeWidth={1.5} style={{ marginBottom: "var(--space-4)" }} />
                  <h3 className="text-body-sm font-medium" style={{ marginBottom: "var(--space-2)" }}>{req.title}</h3>
                  <p className="text-body-xs text-muted-foreground">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start" style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <div className="bg-card border border-border" style={sidebarPad}>
            <h3 className="text-label text-muted-foreground" style={{ marginBottom: "var(--space-5)" }}>Related Services</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {relatedServices.map((s) => (
                <li key={s}>
                  <Link to="/" className="flex items-center text-body-sm text-foreground/70 hover:text-gold transition-colors" style={{ gap: "var(--space-2)" }}>
                    <ArrowRight size={12} className="text-gold" /> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border" style={sidebarPad}>
            <h3 className="text-label text-muted-foreground" style={{ marginBottom: "var(--space-5)" }}>Other Jurisdictions</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {otherJurisdictions.map((j) => (
                <li key={j.country}>
                  <Link to="/gamble-license" className="flex justify-between text-body-sm hover:text-gold transition-colors">
                    <span>{j.country}</span>
                    <span className="text-gold">{j.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gold-dim border border-gold-border" style={sidebarPad}>
            <h3 className="text-body-sm font-medium text-gold" style={{ marginBottom: "var(--space-3)" }}>Free Consultation</h3>
            <p className="text-body-xs text-muted-foreground" style={{ marginBottom: "var(--space-5)" }}>
              Get expert advice on whether the MGA license is right for your business model.
            </p>
            <button className="w-full bg-gold text-body-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity" style={{ padding: "var(--space-3) 0" }}>
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicePage;
