import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "Offshore Company Formation", href: "/offshore-company-formation" },
  { label: "Gambling License", href: "/gamble-license" },
  { label: "Crypto Exchange License", href: "/cryptocurrency-exchange-license" },
  { label: "Forex Broker License", href: "/forex-license" },
  { label: "EMI License", href: "/emi-license" },
  { label: "Investment Licenses", href: "/offshore-investment-funds" },
  { label: "Tax Structuring", href: "/finance-reporting" },
  { label: "Opening a Foreign Bank Account", href: "/accounts-bank" },
  { label: "AML / Compliance", href: "/legal-business" },
];
const jurisdictionLinks = [
  "Malta", "Gibraltar", "Cyprus", "Estonia", "United Kingdom", "Switzerland",
  "Hong Kong", "Singapore", "UAE", "Cayman Islands", "BVI", "Seychelles",
];
const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "How We Work", href: "/about-us" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Affiliate Program", href: "/affiliate-program" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Site Map", href: "/sitemap" },
];

const colHeading: React.CSSProperties = {
  fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em",
  color: "#9A9590", marginBottom: 16, fontWeight: 500,
};

const linkStyle: React.CSSProperties = {
  fontSize: 13, color: "#5A5550", textDecoration: "none",
  transition: "color 0.2s",
};

const Footer = () => (
  <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="mx-auto max-w-[1280px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 px-5 py-10 md:px-12 md:py-16 gap-8 md:gap-12">
      {/* Col 1 — Brand */}
      <div className="col-span-2 sm:col-span-1">
        <div style={{ fontSize: 20, fontWeight: 600, fontFamily: "Manrope, sans-serif" }}>
          <span style={{ color: "#F0EBE0" }}>Inclu</span>
          <span style={{ color: "#444CE7" }}>ence</span>
        </div>
        <p style={{ fontSize: 13, color: "#5A5550", marginTop: 12, marginBottom: 24, maxWidth: 200, lineHeight: 1.6 }}>
          International legal services for FinTech, Crypto and High-Risk businesses
        </p>
        <div style={{ fontSize: 11, color: "#5A5550", lineHeight: 1.8 }}>
          Incluence Ltd · Registered in Hong Kong<br />
          Rm 7B, One Capital Place, 18 Luard Rd, Wan Chai, HK
        </div>
      </div>

      {/* Col 2 — Services */}
      <div>
        <div style={colHeading}>Services</div>
        <div className="flex flex-col" style={{ gap: 10 }}>
          {serviceLinks.map((s) => (
            <Link key={s.label} to={s.href} style={linkStyle} className="hover:!text-foreground">{s.label}</Link>
          ))}
        </div>
      </div>

      {/* Col 3 — Jurisdictions */}
      <div className="hidden sm:block">
        <div style={colHeading}>Jurisdictions</div>
        <div className="flex flex-col" style={{ gap: 10 }}>
          {jurisdictionLinks.map((s) => (
            <Link key={s} to="/" style={linkStyle} className="hover:!text-foreground">{s}</Link>
          ))}
        </div>
      </div>

      {/* Col 4 — Company */}
      <div>
        <div style={colHeading}>Company</div>
        <div className="flex flex-col" style={{ gap: 10 }}>
          {companyLinks.map((s) => (
            <Link key={s.label} to={s.href} style={linkStyle} className="hover:!text-foreground">{s.label}</Link>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-2 px-5 md:px-12 py-5"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <span style={{ fontSize: 12, color: "#5A5550" }}>© 2024 Incluence Ltd. All rights reserved.</span>
      <div className="flex gap-4" style={{ fontSize: 12 }}>
        <Link to="/privacy-policy" style={{ color: "#5A5550", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-muted-foreground">Privacy Policy</Link>
        <span style={{ color: "#5A5550" }}>·</span>
        <Link to="/cookie-policy" style={{ color: "#5A5550", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-muted-foreground">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
