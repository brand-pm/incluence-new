import { Link } from "react-router-dom";

const serviceLinks = [
  "Company Formation", "Gambling Licenses", "Crypto / VASP", "EMI & PSP",
  "Investment Licenses", "Tax Structuring", "Banking Setup", "AML / Compliance",
];
const jurisdictionLinks = [
  "Malta", "Gibraltar", "Cyprus", "Estonia", "United Kingdom", "Switzerland",
  "Hong Kong", "Singapore", "UAE", "Cayman Islands", "BVI", "Seychelles",
];
const companyLinks = [
  "About Us", "How We Work", "Marketplace", "Affiliate Program", "Blog", "Contact",
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
    <div className="mx-auto max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ padding: "64px 48px", gap: 48 }}>
      {/* Col 1 — Brand */}
      <div>
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
            <Link key={s} to="/" style={linkStyle} className="hover:!text-foreground">{s}</Link>
          ))}
        </div>
      </div>

      {/* Col 3 — Jurisdictions */}
      <div>
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
            <Link key={s} to="/" style={linkStyle} className="hover:!text-foreground">{s}</Link>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div
      className="flex flex-col sm:flex-row items-center justify-between"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "20px 48px",
      }}
    >
      <span style={{ fontSize: 12, color: "#5A5550" }}>© 2024 Incluence Ltd. All rights reserved.</span>
      <div className="flex gap-4" style={{ fontSize: 12 }}>
        <Link to="/" style={{ color: "#5A5550", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-muted-foreground">Privacy Policy</Link>
        <span style={{ color: "#5A5550" }}>·</span>
        <Link to="/" style={{ color: "#5A5550", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-muted-foreground">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
