import { Link } from "react-router-dom";

interface Group { title: string; items: { label: string; href: string }[]; }

const columns: Group[] = [
  {
    title: "Company Formation",
    items: [
      { label: "All Jurisdictions", href: "/registration-of-companies-abroad" },
      { label: "EU", href: "/company-registration-in-europe" },
      { label: "Non-EU Europe", href: "/company-registration-non-eu-europe" },
      { label: "Americas & Asia", href: "/company-registration-americas-asia" },
      { label: "Offshore", href: "/offshore-company-formation" },
      { label: "Ready-Made", href: "/ready-made-offshore-companies" },
    ],
  },
  {
    title: "Licensing",
    items: [
      { label: "All Licenses", href: "/licenses" },
      { label: "Crypto / VASP", href: "/cryptocurrency-exchange-license" },
      { label: "MiCA", href: "/mica-license" },
      { label: "EMI", href: "/emi-license" },
      { label: "Forex", href: "/forex-license" },
      { label: "Gambling", href: "/gamble-license" },
      { label: "Investment Funds", href: "/offshore-investment-funds" },
    ],
  },
  {
    title: "Banking & Legal",
    items: [
      { label: "Bank Accounts", href: "/accounts-bank" },
      { label: "Merchant Accounts", href: "/opening-a-merchant-account" },
      { label: "PSP & Payments", href: "/provider-payment-systems" },
      { label: "Legal Support", href: "/legal-support" },
      { label: "AML / Compliance", href: "/legal-business" },
      { label: "Tax & Reporting", href: "/finance-reporting" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Affiliate Program", href: "/affiliate-program" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Site Map", href: "/sitemap" },
    ],
  },
];

const colHeading: React.CSSProperties = {
  fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em",
  color: "#9A9590", marginBottom: 12, fontWeight: 600,
};
const linkStyle: React.CSSProperties = {
  fontSize: 12.5, color: "#5A5550", textDecoration: "none",
  transition: "color 0.2s",
};

const Footer = () => (
  <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-12 md:py-12">
      {/* Top row — brand + nav columns */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10">
        {/* Brand */}
        <div className="col-span-2">
          <div style={{ fontSize: 20, fontWeight: 600, fontFamily: "Manrope, sans-serif" }}>
            <span style={{ color: "#F0EBE0" }}>Inclu</span>
            <span style={{ color: "#444CE7" }}>ence</span>
          </div>
          <p style={{ fontSize: 12.5, color: "#5A5550", marginTop: 10, maxWidth: 260, lineHeight: 1.6 }}>
            International legal services for FinTech, Crypto and High-Risk businesses.
          </p>
        </div>

        {/* Nav columns */}
        {columns.map((g) => (
          <div key={g.title}>
            <div style={colHeading}>{g.title}</div>
            <div className="flex flex-col" style={{ gap: 7 }}>
              {g.items.map((s) => (
                <Link key={s.label} to={s.href} style={linkStyle} className="hover:!text-foreground">{s.label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Offices — inline compact row */}
      <div
        className="mt-10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div style={{ fontSize: 11.5, color: "#5A5550", lineHeight: 1.7 }}>
          <span style={{ color: "#444CE7", fontWeight: 600, letterSpacing: "0.08em" }}>UK · </span>
          Incluence Ltd, 2nd Floor, College House, 17 King Edwards Road, Ruislip, London, HA4 7AE
          <span style={{ color: "#444CE7" }}> · Reg. 15743262</span>
        </div>
        <div style={{ fontSize: 11.5, color: "#5A5550", lineHeight: 1.7 }}>
          <span style={{ color: "#444CE7", fontWeight: 600, letterSpacing: "0.08em" }}>HK · </span>
          Incluence Ltd, Rm 7B, One Capital Place, 18 Luard Rd, Wan Chai
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-2 px-5 md:px-12 py-4"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <span style={{ fontSize: 11.5, color: "#5A5550" }}>© {new Date().getFullYear()} Incluence Ltd. All rights reserved.</span>
      <div className="flex gap-4" style={{ fontSize: 11.5 }}>
        <Link to="/privacy-policy" style={{ color: "#5A5550", textDecoration: "none" }} className="hover:!text-muted-foreground">Privacy Policy</Link>
        <span style={{ color: "#5A5550" }}>·</span>
        <Link to="/cookie-policy" style={{ color: "#5A5550", textDecoration: "none" }} className="hover:!text-muted-foreground">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
