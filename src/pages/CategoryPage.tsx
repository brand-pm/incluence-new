import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const filters = ["All", "EU", "Offshore", "Tier 1"];

const jurisdictions = [
  { country: "Malta", flag: "🇲🇹", license: "MGA License", price: "€25,000", tags: ["EU", "Tier 1"], timeline: "6-12 months" },
  { country: "Gibraltar", flag: "🇬🇮", license: "Remote Gambling License", price: "£25,000", tags: ["EU", "Tier 1"], timeline: "4-8 months" },
  { country: "Cyprus", flag: "🇨🇾", license: "CySEC License", price: "€35,000", tags: ["EU", "Tier 1"], timeline: "8-14 months" },
  { country: "Estonia", flag: "🇪🇪", license: "Activity License", price: "€10,000", tags: ["EU"], timeline: "3-6 months" },
  { country: "Belize", flag: "🇧🇿", license: "Online Gambling License", price: "$15,000", tags: ["Offshore"], timeline: "2-4 months" },
  { country: "Curaçao", flag: "🇨🇼", license: "Gaming License", price: "$12,000", tags: ["Offshore"], timeline: "1-3 months" },
];

const steps = [
  { n: "01", title: "Initial Consultation & Planning" },
  { n: "02", title: "Documents Preparation" },
  { n: "03", title: "Communication with Regulators" },
  { n: "04", title: "License Approval" },
];

const sectionPad = { padding: "var(--space-24) var(--space-12)" };
const cardPad = { padding: "var(--space-10)" };

const CategoryPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? jurisdictions : jurisdictions.filter((j) => j.tags.includes(active));

  return (
    <div>
      <section className="relative flex min-h-[55vh] flex-col justify-end overflow-hidden" style={{ padding: "var(--nav-height) var(--space-12) var(--space-16)" }}>
        <div className="absolute inset-0 grid-dots opacity-50" />
        <div className="absolute inset-0 gold-glow opacity-60" />
        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="flex items-center text-body-xs text-muted-foreground" style={{ gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/gamble-license" className="hover:text-gold transition-colors">Licenses</Link>
            <ChevronRight size={12} />
            <span className="text-foreground">Gambling & Gaming</span>
          </div>
          <h1 className="text-display-xl" style={{ marginBottom: "var(--space-8)" }}>Gambling & Gaming Licenses</h1>
          <div className="flex flex-wrap" style={{ gap: "var(--space-8)" }}>
            {[
              { v: "6", l: "Jurisdictions" },
              { v: "From $12k", l: "Starting Price" },
              { v: "1-14 mo", l: "Timeline" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-display-xs text-gold">{s.v}</div>
                <div className="text-label text-muted-foreground" style={{ marginTop: "var(--space-1)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionPad}>
        <div className="mx-auto max-w-[1280px]">
          <div className="flex" style={{ gap: "var(--space-2)", marginBottom: "var(--space-12)" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-body-sm font-medium transition-all ${
                  active === f
                    ? "bg-gold text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-gold-border hover:text-gold"
                }`}
                style={{ padding: "var(--space-2) var(--space-5)" }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {filtered.map((j) => (
              <Link key={j.country} to="/malta-gaming-license" className="card-hover bg-card block" style={cardPad}>
                <div className="flex items-start justify-between" style={{ marginBottom: "var(--space-5)" }}>
                  <span className="text-display-md">{j.flag}</span>
                  <div className="flex" style={{ gap: "var(--space-1)" }}>
                    {j.tags.map((t) => (
                      <span key={t} className="bg-gold-dim text-gold text-label" style={{ padding: "var(--space-1) var(--space-2)" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-display-xs" style={{ marginBottom: "var(--space-1)" }}>{j.country}</h3>
                <p className="text-body-sm text-muted-foreground" style={{ marginBottom: "var(--space-4)" }}>{j.license}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-body-xs text-muted-foreground">From</span>
                    <div className="text-display-xs text-gold">{j.price}</div>
                  </div>
                  <span className="text-body-xs text-muted-foreground">{j.timeline}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="border-r border-border last:border-r-0 flex items-start" style={{ padding: "var(--space-10) var(--space-8)", gap: "var(--space-4)" }}>
              <span className="text-display-xs text-gold/30">{s.n}</span>
              <p className="text-body-sm font-medium">{s.title}</p>
              {i < 3 && <ArrowRight size={14} className="text-gold/30 ml-auto mt-1 hidden md:block" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
