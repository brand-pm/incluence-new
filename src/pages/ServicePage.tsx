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

const ServicePage = () => (
  <div>
    <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden px-6 lg:px-12 pb-16 pt-28">
      <div className="absolute inset-0 grid-dots opacity-50" />
      <div className="absolute inset-0 gold-glow opacity-60" />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="flex items-center gap-2 text-body-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/licenses/gambling" className="hover:text-gold transition-colors">Gambling Licenses</Link>
          <ChevronRight size={12} />
          <span className="text-foreground">Malta MGA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-display-xl mb-6">Malta Gaming Authority License</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
              The Malta Gaming Authority (MGA) license is one of the most reputable iGaming licenses in the world, providing access to EU markets and global credibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-gold px-7 py-3 text-body-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                Apply Now <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 border border-gold-border px-7 py-3 text-body-sm font-medium text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
                Book Consultation
              </button>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="text-label text-muted-foreground mb-2">Starting from</div>
            <div className="text-display-md text-gold mb-8">€25,000</div>
            <div className="space-y-4 mb-8">
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
            <button className="w-full bg-gold py-3 text-body-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              Apply for MGA License
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="mb-16">
            <p className="text-label text-gold mb-3">Overview</p>
            <h2 className="text-display-lg mb-6">About the MGA License</h2>
            <div className="space-y-4 text-body-md text-muted-foreground">
              <p>The Malta Gaming Authority (MGA) is the single regulatory body responsible for the governance of all gaming activities in Malta. Established in 2001, the MGA has become one of the most respected gaming regulators in the world.</p>
              <p>An MGA license allows operators to offer gaming services to players across the European Union and many other jurisdictions that recognize the Malta license.</p>
              <p>Malta offers a corporate tax rate of 35% with an effective rate of 5% after refunds, making it one of the most tax-efficient jurisdictions for gaming operators in the EU.</p>
            </div>
          </div>

          <div>
            <p className="text-label text-gold mb-3">Requirements</p>
            <h2 className="text-display-lg mb-8">Key Requirements</h2>
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
              {requirements.map((req) => (
                <div key={req.title} className="card-hover bg-card p-8">
                  <req.icon className="text-gold mb-4" size={24} strokeWidth={1.5} />
                  <h3 className="text-body-sm font-medium mb-2">{req.title}</h3>
                  <p className="text-body-xs text-muted-foreground">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-card border border-border p-8">
            <h3 className="text-label text-muted-foreground mb-5">Related Services</h3>
            <ul className="space-y-3">
              {relatedServices.map((s) => (
                <li key={s}>
                  <Link to="/" className="flex items-center gap-2 text-body-sm text-foreground/70 hover:text-gold transition-colors">
                    <ArrowRight size={12} className="text-gold" /> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border p-8">
            <h3 className="text-label text-muted-foreground mb-5">Other Jurisdictions</h3>
            <ul className="space-y-4">
              {otherJurisdictions.map((j) => (
                <li key={j.country}>
                  <Link to="/licenses/gambling" className="flex justify-between text-body-sm hover:text-gold transition-colors">
                    <span>{j.country}</span>
                    <span className="text-gold">{j.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gold-dim border border-gold-border p-8">
            <h3 className="text-body-sm font-medium text-gold mb-3">Free Consultation</h3>
            <p className="text-body-xs text-muted-foreground mb-5">
              Get expert advice on whether the MGA license is right for your business model.
            </p>
            <button className="w-full bg-gold py-3 text-body-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicePage;
