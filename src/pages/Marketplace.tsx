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
  HOT: "bg-red-500/90",
  PREMIUM: "bg-gold",
  "BEST PRICE": "bg-emerald-600/90",
};

const Marketplace = () => {
  return (
    <div>
      <section className="relative flex min-h-[50vh] flex-col justify-end overflow-hidden px-6 lg:px-12 pb-16 pt-28">
        <div className="absolute inset-0 grid-dots opacity-50" />
        <div className="absolute inset-0 gold-glow opacity-60" />
        <div className="relative mx-auto w-full max-w-[1400px]">
          <h1 className="text-display-xl mb-6">Ready-Made Companies</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-8">
            Purchase pre-registered companies with established bank accounts, clean histories, and ready-to-operate infrastructure.
          </p>
          <div className="flex flex-wrap gap-8">
            {[
              { v: "6", l: "Companies" },
              { v: "From $6.5k", l: "Starting Price" },
              { v: "5 of 6", l: "Available Now" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-display-xs text-gold">{s.v}</div>
                <div className="text-label text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-[1400px] flex flex-wrap gap-4 py-5 px-6 lg:px-12">
          {["Jurisdiction", "Type", "Price", "Bank Account"].map((label) => (
            <button key={label} className="flex items-center gap-2 border border-border px-5 py-2 text-body-sm text-muted-foreground hover:border-gold-border hover:text-gold transition-colors">
              {label} <ChevronDown size={14} />
            </button>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {companies.map((c) => (
              <div key={c.name} className="card-hover bg-card p-8 relative">
                {c.badge && (
                  <div className={`absolute top-0 right-0 ${badgeColors[c.badge]} px-3 py-1 text-label text-primary-foreground`}>
                    {c.badge}
                  </div>
                )}

                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${c.status === "Available" ? "bg-emerald-500" : "bg-orange-500"}`} />
                  <span className={`text-body-xs ${c.status === "Available" ? "text-emerald-500" : "text-orange-500"}`}>{c.status}</span>
                </div>

                <span className="text-display-md block mb-4">{c.flag}</span>
                <h3 className="text-display-xs mb-1">{c.name}</h3>
                <p className="text-body-xs text-muted-foreground mb-1">{c.type}</p>
                <p className="text-body-xs text-muted-foreground mb-5">{c.jurisdiction}</p>

                <ul className="space-y-2 mb-6">
                  {c.features.map((f) => (
                    <li key={f} className="text-body-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between">
                  <div className="text-display-xs text-gold">{c.price}</div>
                  <button
                    className={`px-5 py-2 text-body-xs font-medium transition-colors ${
                      c.status === "Available"
                        ? "border border-gold-border text-gold hover:bg-gold hover:text-primary-foreground"
                        : "border border-border text-muted-foreground cursor-not-allowed"
                    }`}
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
