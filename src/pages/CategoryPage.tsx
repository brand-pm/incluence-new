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

const CategoryPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? jurisdictions : jurisdictions.filter((j) => j.tags.includes(active));

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] flex-col justify-end overflow-hidden px-6 lg:px-12 pb-16 pt-28">
        <div className="absolute inset-0 grid-dots opacity-50" />
        <div className="absolute inset-0 gold-glow opacity-60" />
        <div className="relative mx-auto w-full max-w-[1400px]">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/licenses/gambling" className="hover:text-gold transition-colors">Licenses</Link>
            <ChevronRight size={12} />
            <span className="text-foreground">Gambling & Gaming</span>
          </div>
          <h1 className="text-4xl font-light md:text-6xl mb-8">Gambling & Gaming Licenses</h1>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-2xl font-light text-gold">6</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Jurisdictions</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gold">From $12k</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gold">1-14 mo</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS + CARDS */}
      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "bg-gold text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-gold-border hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {filtered.map((j) => (
              <Link
                key={j.country}
                to="/licenses/gambling/malta"
                className="card-hover bg-card p-8 block"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{j.flag}</span>
                  <div className="flex gap-1.5">
                    {j.tags.map((t) => (
                      <span key={t} className="bg-gold-dim text-gold text-[10px] px-2 py-0.5 font-medium uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-1">{j.country}</h3>
                <p className="text-sm text-muted-foreground mb-4">{j.license}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <div className="text-xl font-light text-gold">{j.price}</div>
                  </div>
                  <span className="text-xs text-muted-foreground">{j.timeline}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="border-r border-border last:border-r-0 py-10 px-8 flex items-start gap-4">
              <span className="text-2xl font-light text-gold/30">{s.n}</span>
              <div>
                <p className="text-sm font-medium">{s.title}</p>
              </div>
              {i < 3 && <ArrowRight size={14} className="text-gold/30 ml-auto mt-1 hidden md:block" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
