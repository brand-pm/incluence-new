import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

type Company = {
  flag: string;
  name: string;
  type: string;
  jurisdiction: string;
  price: string;
  features: string[];
  status: "Available" | "Reserved";
  badge?: "HOT" | "PREMIUM" | "BEST PRICE";
};

const companies: Company[] = [
  { flag: "🇬🇧", name: "UK Trading Ltd", type: "Limited Company", jurisdiction: "United Kingdom", price: "£8,500", features: ["Active bank account", "Clean history", "VAT registered", "Ready to trade"], status: "Available", badge: "HOT" },
  { flag: "🇭🇰", name: "HK Global Ltd", type: "Limited Company", jurisdiction: "Hong Kong", price: "$12,000", features: ["HSBC bank account", "2 years history", "Audited accounts", "Multi-currency"], status: "Available", badge: "PREMIUM" },
  { flag: "🇪🇪", name: "Estonia Digital OÜ", type: "Private Limited", jurisdiction: "Estonia", price: "€9,500", features: ["EU bank account", "E-residency ready", "Digital services", "Clean records"], status: "Available" },
  { flag: "🇸🇨", name: "Seychelles IBC", type: "International Business Company", jurisdiction: "Seychelles", price: "$6,500", features: ["Offshore banking", "Tax exempt", "Privacy protection", "Fast transfer"], status: "Available", badge: "BEST PRICE" },
  { flag: "🇰🇾", name: "Cayman Fund Ltd", type: "Exempted Company", jurisdiction: "Cayman Islands", price: "$18,000", features: ["Fund structure ready", "Prime banking", "Institutional grade", "CIMA registered"], status: "Reserved" },
  { flag: "🇸🇬", name: "Singapore Pte Ltd", type: "Private Limited", jurisdiction: "Singapore", price: "$22,000", features: ["DBS bank account", "MAS compliant", "3 years history", "Trade ready"], status: "Available", badge: "PREMIUM" },
];

const badgeColors: Record<string, string> = {
  HOT: "bg-error-500/90",
  PREMIUM: "bg-gold",
  "BEST PRICE": "bg-success-600/90",
};

const sectionPad = { padding: "var(--space-24) var(--space-12)" };
const cardPad = { padding: "var(--space-10)" };

const Marketplace = () => {
  return (
    <div>
      <section className="relative flex min-h-[50vh] flex-col justify-end overflow-hidden" style={{ padding: "var(--nav-height) var(--space-12) var(--space-16)" }}>
        <div className="absolute inset-0 grid-dots opacity-50" />
        <div className="absolute inset-0 gold-glow opacity-60" />
        <div className="relative mx-auto w-full max-w-[1280px]">
          <h1 className="text-display-xl" style={{ marginBottom: "var(--space-6)" }}>Ready-Made Companies</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl" style={{ marginBottom: "var(--space-8)" }}>
            Purchase pre-registered companies with established bank accounts, clean histories, and ready-to-operate infrastructure.
          </p>
          <div className="flex flex-wrap" style={{ gap: "var(--space-8)" }}>
            {[
              { v: "6", l: "Companies" },
              { v: "From $6.5k", l: "Starting Price" },
              { v: "5 of 6", l: "Available Now" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-display-xs text-gold">{s.v}</div>
                <div className="text-label text-muted-foreground" style={{ marginTop: "var(--space-1)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1280px] flex flex-wrap" style={{ gap: "var(--space-4)", padding: "var(--space-5) var(--space-12)" }}>
          {["Jurisdiction", "Type", "Price", "Bank Account"].map((label) => (
            <button key={label} className="flex items-center border border-border text-body-sm text-muted-foreground hover:border-gold-border hover:text-gold transition-colors" style={{ padding: "var(--space-2) var(--space-5)", gap: "var(--space-2)" }}>
              {label} <ChevronDown size={14} />
            </button>
          ))}
        </div>
      </section>

      <section style={sectionPad}>
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {companies.map((c) => (
              <div key={c.name} className="card-hover bg-card relative" style={cardPad}>
                {c.badge && (
                  <div className={`absolute top-0 right-0 ${badgeColors[c.badge]} text-label text-primary-foreground`} style={{ padding: "var(--space-1) var(--space-3)" }}>
                    {c.badge}
                  </div>
                )}

                <div className="flex items-center" style={{ gap: "var(--space-2)", marginBottom: "var(--space-5)" }}>
                  <span className={`w-2 h-2 rounded-full ${c.status === "Available" ? "bg-success-500" : "bg-warning-500"}`} />
                  <span className={`text-body-xs ${c.status === "Available" ? "text-success-500" : "text-warning-500"}`}>{c.status}</span>
                </div>

                <span className="text-display-md block" style={{ marginBottom: "var(--space-4)" }}>{c.flag}</span>
                <h3 className="text-display-xs" style={{ marginBottom: "var(--space-1)" }}>{c.name}</h3>
                <p className="text-body-xs text-muted-foreground" style={{ marginBottom: "var(--space-1)" }}>{c.type}</p>
                <p className="text-body-xs text-muted-foreground" style={{ marginBottom: "var(--space-5)" }}>{c.jurisdiction}</p>

                <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
                  {c.features.map((f) => (
                    <li key={f} className="text-body-xs text-muted-foreground flex items-center" style={{ gap: "var(--space-2)" }}>
                      <span className="w-1 h-1 bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between">
                  <div className="text-display-xs text-gold">{c.price}</div>
                  <button
                    className={`text-body-xs font-medium transition-colors ${
                      c.status === "Available"
                        ? "border border-gold-border text-gold hover:bg-gold hover:text-primary-foreground"
                        : "border border-border text-muted-foreground cursor-not-allowed"
                    }`}
                    style={{ padding: "var(--space-2) var(--space-5)" }}
                    disabled={c.status !== "Available"}
                  >
                    {c.status === "Available" ? "Inquire" : "Reserved"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
