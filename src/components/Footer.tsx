import { Link } from "react-router-dom";

interface Group { title: string; items: { label: string; href: string }[]; }

const serviceGroups: Group[] = [
  {
    title: "Company Formation",
    items: [
      { label: "All Jurisdictions", href: "/registration-of-companies-abroad" },
      { label: "EU Jurisdictions", href: "/company-registration-in-europe" },
      { label: "Non-EU Europe", href: "/company-registration-non-eu-europe" },
      { label: "Americas & Asia", href: "/company-registration-americas-asia" },
      { label: "Offshore", href: "/offshore-company-formation" },
      { label: "Ready-Made Companies", href: "/ready-made-offshore-companies" },
    ],
  },
  {
    title: "Licensing",
    items: [
      { label: "All Licenses", href: "/licenses" },
      { label: "Crypto / VASP License", href: "/cryptocurrency-exchange-license" },
      { label: "MiCA License", href: "/mica-license" },
      { label: "EMI License", href: "/emi-license" },
      { label: "Forex Broker License", href: "/forex-license" },
      { label: "Gambling License", href: "/gamble-license" },
      { label: "Investment Funds", href: "/offshore-investment-funds" },
    ],
  },
  {
    title: "Banking & Payments",
    items: [
      { label: "Bank Accounts", href: "/accounts-bank" },
      { label: "Merchant Accounts", href: "/opening-a-merchant-account" },
      { label: "PSP & Payment Systems", href: "/provider-payment-systems" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Legal Support", href: "/legal-support" },
      { label: "AML / Compliance", href: "/legal-business" },
      { label: "Tax & Reporting", href: "/finance-reporting" },
    ],
  },
];

const jurisdictionLinks = [
  { label: "EU Jurisdictions", href: "/company-registration-in-europe" },
  { label: "Non-EU Europe", href: "/company-registration-non-eu-europe" },
  { label: "Americas & Asia", href: "/company-registration-americas-asia" },
  { label: "Offshore", href: "/offshore-company-formation" },
  { label: "Ready-Made", href: "/ready-made-offshore-companies" },
  { label: "Worldwide Hub", href: "/registration-of-companies-abroad" },
];

const colHeading: React.CSSProperties = {
  fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em",
  color: "#9A9590", marginBottom: 16, fontWeight: 500,
};
const groupHeading: React.CSSProperties = {
  fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
  color: "#444CE7", marginBottom: 10, fontWeight: 600,
};
const linkStyle: React.CSSProperties = {
  fontSize: 13, color: "#5A5550", textDecoration: "none",
  transition: "color 0.2s",
};
const officeLabel: React.CSSProperties = {
  fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
  color: "#444CE7", fontWeight: 600, marginBottom: 4,
};
const officeText: React.CSSProperties = {
  fontSize: 11, color: "#5A5550", lineHeight: 1.7,
};

const Footer = () => (
  <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="mx-auto max-w-[1280px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 px-5 py-10 md:px-12 md:py-16 gap-8 md:gap-12">
      {/* Col 1 — Brand + offices */}
      <div className="col-span-2 sm:col-span-1">
        <div style={{ fontSize: 20, fontWeight: 600, fontFamily: "Manrope, sans-serif" }}>
          <span style={{ color: "#F0EBE0" }}>Inclu</span>
          <span style={{ color: "#444CE7" }}>ence</span>
        </div>
        <p style={{ fontSize: 13, color: "#5A5550", marginTop: 12, marginBottom: 24, maxWidth: 220, lineHeight: 1.6 }}>
          International legal services for FinTech, Crypto and High-Risk businesses
        </p>

        <div style={{ marginBottom: 18 }}>
          <div style={officeLabel}>United Kingdom</div>
          <div style={officeText}>
            Incluence Ltd<br />
            2nd Floor, College House,<br />
            17 King Edwards Road, Ruislip,<br />
            London, HA4 7AE<br />
            <span style={{ color: "#444CE7" }}>Reg. 15743262</span>
          </div>
        </div>

        <div>
          <div style={officeLabel}>Hong Kong</div>
          <div style={officeText}>
            Incluence Ltd<br />
            Rm 7B, One Capital Place,<br />
            18 Luard Rd, Wan Chai
          </div>
        </div>
      </div>

      {/* Col 2 — Services (grouped) */}
      <div className="col-span-2 sm:col-span-1">
        <div style={colHeading}>Services</div>
        <div className="flex flex-col" style={{ gap: 18 }}>
          {serviceGroups.map((g) => (
            <div key={g.title}>
              <div style={groupHeading}>{g.title}</div>
              <div className="flex flex-col" style={{ gap: 9 }}>
                {g.items.map((s) => (
                  <Link key={s.label} to={s.href} style={linkStyle} className="hover:!text-foreground">{s.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Col 3 — Jurisdictions */}
      <div className="hidden sm:block">
        <div style={colHeading}>Jurisdictions</div>
        <div className="flex flex-col" style={{ gap: 12 }}>
          {jurisdictionLinks.map((s) => (
            <Link key={s.label} to={s.href} style={linkStyle} className="hover:!text-foreground">{s.label}</Link>
          ))}
        </div>
      </div>

      {/* Col 4 — Company */}
      <div>
        <div style={colHeading}>Company</div>
        <div className="flex flex-col" style={{ gap: 12 }}>
          {companyLinks.map((s) => (
            <Link key={s.label} to={s.href} style={linkStyle} className="hover:!text-foreground">{s.label}</Link>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-2 px-5 md:px-12 py-5"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <span style={{ fontSize: 12, color: "#5A5550" }}>© {new Date().getFullYear()} Incluence Ltd. All rights reserved.</span>
      <div className="flex gap-4" style={{ fontSize: 12 }}>
        <Link to="/privacy-policy" style={{ color: "#5A5550", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-muted-foreground">Privacy Policy</Link>
        <span style={{ color: "#5A5550" }}>·</span>
        <Link to="/cookie-policy" style={{ color: "#5A5550", textDecoration: "none", transition: "color 0.2s" }} className="hover:!text-muted-foreground">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
