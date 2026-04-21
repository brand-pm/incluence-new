import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FormBlock from "@/components/FormBlock";
import { ChevronDown, Menu, X, MessageCircle, Send, Phone, Mail, ChevronRight, Scale, Landmark, TrendingUp, FileText, Building2, Globe2, MapPin, ShoppingBag, Anchor, ArrowUpRight } from "lucide-react";
import NodePulse from "./NodePulse";

/* ── MENU DATA ── */

interface MenuHub {
  name: string;
  href: string;
  jurisdictions: { label: string; href: string }[];
}

interface MenuColumn {
  title: string;
  hubs: MenuHub[];
}

const MENU_COLUMNS: MenuColumn[] = [
  {
    title: "LICENSING",
    hubs: [
      {
        name: "Gambling",
        href: "/gamble-license",
        jurisdictions: [
          { label: "Malta", href: "/malta-gaming-license" },
          { label: "Curaçao", href: "/curacao-gaming-license" },
          { label: "Isle of Man", href: "/gambling-license-of-the-isle-of-man" },
          { label: "Costa Rica", href: "/gambling-license-in-costa-rica" },
        ],
      },
      {
        name: "Forex",
        href: "/forex-license",
        jurisdictions: [
          { label: "Cyprus", href: "/cyprus-forex-license" },
          { label: "Malta", href: "/forex-broker-licence-in-malta" },
          { label: "Vanuatu", href: "/forex-broker-licence-in-vanuatu" },
          { label: "Mauritius", href: "/forex-broker-licence-in-mauritius" },
        ],
      },
      {
        name: "Crypto / VASP",
        href: "/cryptocurrency-exchange-license",
        jurisdictions: [
          { label: "Estonia", href: "/cryptocurrency-exchange-license-in-estonia" },
          { label: "Lithuania", href: "/lithuania-crypto-license" },
          { label: "Switzerland", href: "/cryptocurrency-exchange-license-in-switzerland" },
          { label: "Malta", href: "/cryptocurrency-license-in-malta" },
        ],
      },
      {
        name: "EMI License",
        href: "/emi-license",
        jurisdictions: [
          { label: "UK", href: "/e-money-license-uk" },
          { label: "Lithuania", href: "/e-money-license-lithuania" },
          { label: "Malta", href: "/e-money-license-malta" },
          { label: "Estonia", href: "/emi-license-in-estonia" },
        ],
      },
    ],
  },
  {
    title: "BANKING & PAYMENTS",
    hubs: [
      {
        name: "Bank Accounts",
        href: "/accounts-bank",
        jurisdictions: [
          { label: "Cyprus", href: "/open-a-bank-account-in-cyprus" },
          { label: "Germany", href: "/open-a-bank-account-in-germany" },
          { label: "Switzerland", href: "/open-bank-account-as-foreigner-in-switzerland" },
          { label: "UK", href: "/opening-a-bank-account-in-the-united-kingdom" },
        ],
      },
      {
        name: "Merchant Account",
        href: "/opening-a-merchant-account",
        jurisdictions: [],
      },
      {
        name: "Payment Systems",
        href: "/open-an-account-in-a-payment-system",
        jurisdictions: [
          { label: "Wise", href: "/opening-an-account-in-the-wise-payment-system" },
          { label: "PayPal", href: "/opening-an-account-in-the-pay-pal-payment-system" },
          { label: "Revolut", href: "/opening-an-account-in-revolut" },
        ],
      },
      {
        name: "PSP License",
        href: "/provider-payment-systems",
        jurisdictions: [
          { label: "Cyprus", href: "/payment-system-license-in-cyprus" },
          { label: "Lithuania", href: "/payment-system-license-in-lithuania" },
          { label: "UK", href: "/psp-system-uk" },
          { label: "Czech", href: "/czech-payment-system-license" },
        ],
      },
    ],
  },
  {
    title: "INVESTMENT & RESIDENCY",
    hubs: [
      {
        name: "Investment Funds",
        href: "/offshore-investment-funds",
        jurisdictions: [
          { label: "Luxembourg", href: "/open-an-investment-fund-in-luxembourg" },
          { label: "Malta", href: "/registration-of-investment-funds-in-malta" },
          { label: "Estonia", href: "/open-an-investment-fund-in-estonia" },
          { label: "Czech", href: "/registration-of-investment-funds-in-czech" },
        ],
      },
      {
        name: "Hedge Fund",
        href: "/open-a-hedge-fund",
        jurisdictions: [],
      },
      {
        name: "Residence Permit",
        href: "/residence-permit-abroad",
        jurisdictions: [
          { label: "Portugal", href: "/residence-permit-in-portugal" },
          { label: "Dubai", href: "/residence-permit-in-dubai" },
          { label: "Cyprus", href: "/residence-permit-in-cyprus" },
          { label: "Lithuania", href: "/residence-permit-in-lithuania" },
        ],
      },
    ],
  },
  {
    title: "LEGAL SERVICES",
    hubs: [
      {
        name: "Legitimization",
        href: "/legal-business",
        jurisdictions: [],
      },
      {
        name: "Tax & Reporting",
        href: "/finance-reporting",
        jurisdictions: [],
      },
      {
        name: "Legal Support",
        href: "/support-legal",
        jurisdictions: [],
      },
      {
        name: "Contracts",
        href: "/drafting-international-contracts",
        jurisdictions: [],
      },
    ],
  },
];

const COMPANY_COLUMNS: MenuColumn[] = [
  {
    title: "REGISTRATION",
    hubs: [
      {
        name: "Companies Abroad",
        href: "/registration-of-companies-abroad",
        jurisdictions: [
          { label: "Estonia", href: "/open-a-company-in-estonia" },
          { label: "UK", href: "/register-company-in-uk" },
          { label: "UAE", href: "/register-company-in-uae" },
          { label: "Singapore", href: "/register-company-in-singapore" },
          { label: "Hong Kong", href: "/register-company-in-hong-kong" },
          { label: "Switzerland", href: "/register-company-in-switzerland" },
          { label: "Lithuania", href: "/register-company-in-lithuania" },
          { label: "Bulgaria", href: "/register-company-in-bulgaria" },
        ],
      },
    ],
  },
  {
    title: "EUROPE",
    hubs: [
      {
        name: "EU Jurisdictions",
        href: "/company-registration-in-europe",
        jurisdictions: [
          { label: "Cyprus", href: "/company-registration-in-cyprus" },
          { label: "Germany", href: "/company-registration-in-germany" },
          { label: "Netherlands", href: "/company-registration-in-the-netherlands" },
          { label: "Poland", href: "/company-registration-in-poland" },
          { label: "Czechia", href: "/company-registration-in-czechia" },
          { label: "Ireland", href: "/company-registration-in-ireland" },
          { label: "Luxembourg", href: "/company-registration-in-luxembourg" },
          { label: "Malta", href: "/company-registration-in-malta" },
          { label: "Portugal", href: "/company-registration-portugal" },
          { label: "Croatia", href: "/company-registration-in-croatia" },
          { label: "Hungary", href: "/starting-a-business-in-hungary" },
          { label: "Gibraltar", href: "/company-registration-in-gibraltar" },
        ],
      },
    ],
  },
  {
    title: "ASIA & AMERICAS",
    hubs: [
      {
        name: "Worldwide",
        href: "/registration-of-companies-abroad",
        jurisdictions: [
          { label: "USA", href: "/open-company-in-usa" },
          { label: "Canada", href: "/company-registration-in-canada" },
          { label: "China", href: "/company-registration-in-china" },
          { label: "Malaysia", href: "/company-registration-in-malaysia" },
          { label: "Thailand", href: "/open-a-company-in-thailand" },
          { label: "Montenegro", href: "/starting-a-business-in-montenegro" },
        ],
      },
    ],
  },
  {
    title: "READY-MADE",
    hubs: [
      {
        name: "Buy a Business",
        href: "/buy-a-business-abroad",
        jurisdictions: [
          { label: "Estonia", href: "/buy-company-in-estonia" },
          { label: "Malta", href: "/buying-a-company-in-malta" },
          { label: "Cyprus", href: "/purchase-of-a-company-in-cyprus" },
          { label: "England", href: "/purchase-a-company-in-england" },
          { label: "Germany", href: "/buying-a-company-in-germany" },
          { label: "Switzerland", href: "/buying-a-company-in-switzerland" },
          { label: "Poland", href: "/buying-a-company-in-poland" },
          { label: "Bulgaria", href: "/buying-a-company-in-bulgaria" },
          { label: "Canada", href: "/buying-a-company-in-canada" },
          { label: "Netherlands", href: "/company-purchase-in-the-netherlands" },
          { label: "Luxembourg", href: "/purchase-of-a-company-in-luxembourg" },
          { label: "UAE", href: "/purchase-of-a-company-in-the-uae" },
          { label: "USA", href: "/purchase-of-a-company-in-the-usa" },
          { label: "Hong Kong", href: "/buy-a-ready-made-company-in-hong-kong" },
          { label: "Lithuania", href: "/buy-a-ready-made-company-in-lithuania" },
          { label: "Hungary", href: "/ready-made-companies-in-hungary" },
        ],
      },
    ],
  },
  {
    title: "OFFSHORE",
    hubs: [
      {
        name: "Offshore Formation",
        href: "/offshore-company-formation",
        jurisdictions: [
          { label: "BVI", href: "/offshore-in-the-british-virgin-islands" },
          { label: "Cayman Islands", href: "/offshore-in-the-cayman-islands" },
          { label: "Seychelles", href: "/offshore-company-formation-in-seychelles" },
          { label: "Panama", href: "/panama-company-formation" },
          { label: "Costa Rica", href: "/offshore-company-formation-in-costa-rica" },
          { label: "Curaçao", href: "/offshore-company-formation-in-curacao" },
          { label: "St. Vincent", href: "/offshore-in-st-vincent" },
          { label: "Isle of Man", href: "/offshore-company-formation-in-the-isle-of-man" },
        ],
      },
      {
        name: "Ready-Made Offshore",
        href: "/ready-made-offshore-companies",
        jurisdictions: [],
      },
    ],
  },
];

const PILLS = [
  { label: "Gambling · MGA", href: "/malta-gaming-license" },
  { label: "Estonia · VASP", href: "/cryptocurrency-exchange-license-in-estonia" },
  { label: "UK · EMI", href: "/e-money-license-uk" },
  { label: "BVI · Offshore", href: "/offshore-in-the-british-virgin-islands" },
];

/* ── COMPACT HUB CARDS — only top-level hub pages, with icons + descriptions ── */

interface HubCard {
  title: string;
  description: string;
  href: string;
  Icon: React.ElementType;
  count?: string;
}

const SERVICES_HUBS: HubCard[] = [
  {
    title: "Licensing",
    description: "Gambling, Forex, Crypto/VASP and EMI licences across 25+ jurisdictions.",
    href: "/licenses",
    Icon: Scale,
    count: "4 verticals",
  },
  {
    title: "Banking & Payments",
    description: "Corporate accounts, merchant accounts, payment systems and PSP licences.",
    href: "/accounts-bank",
    Icon: Landmark,
    count: "Bank · PSP · EMI",
  },
  {
    title: "Investment & Residency",
    description: "Investment funds, hedge funds and residence-permit programmes.",
    href: "/offshore-investment-funds",
    Icon: TrendingUp,
    count: "Funds · RP",
  },
  {
    title: "Legal Services",
    description: "Legitimization, tax & reporting, legal support and international contracts.",
    href: "/legal-business",
    Icon: FileText,
    count: "Full-stack legal",
  },
];

const COMPANY_HUBS: HubCard[] = [
  {
    title: "Companies Abroad",
    description: "Incorporation in 30+ jurisdictions worldwide — from Estonia to Singapore.",
    href: "/registration-of-companies-abroad",
    Icon: Building2,
    count: "30+ countries",
  },
  {
    title: "Europe",
    description: "EU incorporation: Cyprus, Germany, Netherlands, Poland, Malta and more.",
    href: "/company-registration-in-europe",
    Icon: Globe2,
    count: "12 EU states",
  },
  {
    title: "Asia & Americas",
    description: "USA, Canada, China, Malaysia, Thailand and other global jurisdictions.",
    href: "/registration-of-companies-abroad",
    Icon: MapPin,
    count: "Worldwide",
  },
  {
    title: "Ready-Made",
    description: "Buy a turnkey business in Europe, UAE, USA, Hong Kong and more.",
    href: "/buy-a-business-abroad",
    Icon: ShoppingBag,
    count: "16 markets",
  },
  {
    title: "Offshore",
    description: "BVI, Cayman, Seychelles, Panama and other classic offshore centres.",
    href: "/offshore-company-formation",
    Icon: Anchor,
    count: "8 jurisdictions",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<null | "services" | "company">(null);
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMenu = useCallback((which: "services" | "company") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(which);
    setHoveredHub(null);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 280);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const handleLinkClick = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const go = (href: string) => {
    handleLinkClick();
    window.location.href = href;
  };

  const isPathActive = (path: string) => location.pathname === path;

  // Determine if Services / Company dropdowns should appear active based on current route
  const servicesPaths = MENU_COLUMNS.flatMap((c) =>
    c.hubs.flatMap((h) => [h.href, ...h.jurisdictions.map((j) => j.href)])
  );
  const companyPaths = COMPANY_COLUMNS.flatMap((c) =>
    c.hubs.flatMap((h) => [h.href, ...h.jurisdictions.map((j) => j.href)])
  );
  const isServicesActive = servicesPaths.includes(location.pathname);
  const isCompanyActive = companyPaths.includes(location.pathname);

  // Reusable styles for nav links — compact + active background pill
  const NAV_LINK_FS = 13;
  const activeBg = "rgba(68,76,231,0.14)";
  const activeBorder = "1px solid rgba(68,76,231,0.45)";
  const inactiveBorder = "1px solid transparent";

  return (
    <>
      {/* ── BASE NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-12"
        style={{
          height: 60,
          background: "rgba(8,8,8,0.88)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <Link to="/" className="no-underline" style={{ fontSize: 18, fontWeight: 600 }}>
          <span style={{ color: "#F0EBE0" }}>Inclu</span>
          <span style={{ color: "#444CE7" }}>ence</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 lg:gap-1.5" style={{ fontSize: NAV_LINK_FS, fontWeight: 400 }}>
          {([
            { key: "services", label: "Services", active: isServicesActive || activeMenu === "services" },
            { key: "company", label: "Company", active: isCompanyActive || activeMenu === "company" },
          ] as const).map((item) => (
            <button
              key={item.key}
              onMouseEnter={() => openMenu(item.key)}
              onMouseLeave={closeMenu}
              className="flex items-center gap-1 bg-transparent cursor-pointer transition-all duration-200"
              style={{
                color: item.active ? "#F0EBE0" : "#9A9590",
                fontSize: NAV_LINK_FS,
                fontWeight: item.active ? 500 : 400,
                fontFamily: "inherit",
                padding: "7px 12px",
                lineHeight: 1,
                background: item.active ? activeBg : "transparent",
                border: item.active ? activeBorder : inactiveBorder,
              }}
              onMouseOver={(e) => {
                if (!item.active) {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#F0EBE0";
                }
              }}
              onMouseOut={(e) => {
                if (!item.active) {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#9A9590";
                }
              }}
            >
              {item.label}
              <ChevronDown size={11} />
            </button>
          ))}
          {[
            { to: "/marketplace", label: "Ready Made Company" },
            { to: "/affiliate-program", label: "Affiliate Program" },
            { to: "/about", label: "About" },
            { to: "/blog", label: "Blog" },
          ].map((l) => {
            const active = isPathActive(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="no-underline transition-all duration-200"
                style={{
                  fontSize: NAV_LINK_FS,
                  color: active ? "#F0EBE0" : "#9A9590",
                  fontWeight: active ? 500 : 400,
                  padding: "7px 12px",
                  lineHeight: 1,
                  background: active ? activeBg : "transparent",
                  border: active ? activeBorder : inactiveBorder,
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F0EBE0";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#9A9590";
                  }
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Contact dropdown + CTA — desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Telegram & WhatsApp direct icons */}
          <a
            href="https://t.me/incluence"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center transition-all duration-200"
            style={{
              width: 34,
              height: 34,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(68,76,231,0.5)";
              e.currentTarget.style.background = "rgba(68,76,231,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "transparent";
            }}
            title="Telegram"
          >
            <Send size={14} className="text-[#9A9590] group-hover:text-[#444CE7] transition-colors duration-200" />
          </a>
          <a
            href="https://wa.me/37281703037"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center transition-all duration-200"
            style={{
              width: 34,
              height: 34,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(68,76,231,0.5)";
              e.currentTarget.style.background = "rgba(68,76,231,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "transparent";
            }}
            title="WhatsApp"
          >
            <Phone size={14} className="text-[#9A9590] group-hover:text-[#444CE7] transition-colors duration-200" />
          </a>

          <button
            onClick={() => setProjectDialogOpen(true)}
            className="no-underline transition-colors duration-200 border-0 cursor-pointer"
            style={{
              background: "#444CE7",
              color: "#fff",
              padding: "8px 20px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              borderRadius: 0,
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#3538CD")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#444CE7")}
          >
            Start a Project
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden bg-transparent border-none cursor-pointer" style={{ color: "#F0EBE0" }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 z-[99] overflow-y-auto"
          style={{ background: "#0a0a0a", fontFamily: "Manrope, sans-serif", padding: "16px 20px 120px" }}
        >
          {[...MENU_COLUMNS, ...COMPANY_COLUMNS.map(c => ({ ...c, title: c.title === "REGISTRATION" ? "COMPANY · REGISTRATION" : `COMPANY · ${c.title}` }))].map((col) => (
            <div key={col.title} style={{ marginBottom: 4 }}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === col.title ? null : col.title)}
                className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer"
                style={{
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "inherit",
                }}
              >
                <span style={{ fontSize: 11, color: "#444CE7", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                  — {col.title}
                </span>
                <ChevronDown
                  size={14}
                  style={{
                    color: "#5A5550",
                    transition: "transform 0.2s",
                    transform: mobileExpanded === col.title ? "rotate(180deg)" : "rotate(0)",
                  }}
                />
              </button>

              {mobileExpanded === col.title && (
                <div style={{ padding: "8px 0 12px" }}>
                  {col.hubs.map((hub) => (
                    <div key={hub.href} style={{ marginBottom: 12 }}>
                      <Link
                        to={hub.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-1.5 no-underline group"
                        style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0", padding: "6px 0" }}
                      >
                        {hub.name}
                        <ChevronRight size={12} className="text-[#444CE7] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      {hub.jurisdictions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5" style={{ paddingLeft: 0, marginTop: 4 }}>
                          {hub.jurisdictions.map((j) => (
                            <Link
                              key={j.href}
                              to={j.href}
                              onClick={handleLinkClick}
                              className="no-underline hover:text-[#F0EBE0] hover:border-[#444CE7]/40 transition-all"
                              style={{
                                fontSize: 12,
                                color: "#9A9590",
                                padding: "4px 10px",
                                border: "1px solid rgba(255,255,255,0.08)",
                              }}
                            >
                              {j.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, marginTop: 8 }}>
            <Link to="/marketplace" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "10px 0" }}>Ready Made Company</Link>
            <Link to="/affiliate-program" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "10px 0" }}>Affiliate Program</Link>
            <Link to="/about" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "10px 0" }}>About</Link>
            <Link to="/blog" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "10px 0" }}>Blog</Link>
          </div>

          {/* Mobile social + CTA */}
          <div className="flex items-center gap-3" style={{ marginTop: 20 }}>
            <a href="https://t.me/incluence" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, border: "1px solid rgba(255,255,255,0.08)" }}>
              <Send size={16} style={{ color: "#9A9590" }} />
            </a>
            <a href="https://wa.me/37281703037" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, border: "1px solid rgba(255,255,255,0.08)" }}>
              <Phone size={16} style={{ color: "#9A9590" }} />
            </a>
          </div>
          <button
            onClick={() => { setMobileOpen(false); setProjectDialogOpen(true); }}
            className="block w-full text-center border-0 cursor-pointer"
            style={{ marginTop: 16, background: "#444CE7", color: "#fff", padding: "14px 24px", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, fontFamily: "inherit" }}
          >
            Start a Project
          </button>
        </div>
      )}

      {/* ── MEGA-MENU PANEL ── */}
      {activeMenu && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          onClick={(e) => e.stopPropagation()}
          className="hidden md:block fixed left-0 right-0 z-[99]"
          style={{
            top: 60,
            background: "#0a0a0a",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
            fontFamily: "Manrope, sans-serif",
            animation: "megaMenuIn 0.18s ease-out both",
          }}
        >
          <style>{`
            @keyframes megaMenuIn {
              from { opacity: 0; transform: translateY(-6px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}
            @keyframes fadeInRight { from { opacity: 0; transform: translateX(4px); } to { opacity: 1; transform: translateX(0); } }
          `}</style>

          <div className="max-w-screen-xl mx-auto" style={{ padding: "20px 24px 0" }}>
            {(() => {
              const isCompany = activeMenu === "company";
              const hubs: HubCard[] = isCompany ? COMPANY_HUBS : SERVICES_HUBS;
              const columns: MenuColumn[] = isCompany ? COMPANY_COLUMNS : MENU_COLUMNS;
              const sectionLabel = isCompany ? "COMPANY FORMATION" : "SERVICES";
              const allHref = isCompany ? "/registration-of-companies-abroad" : "/licenses";
              const allLabel = isCompany ? "View all jurisdictions" : "View all services";

              // Active hub = hovered, fallback to first
              const activeHubIndex = Math.max(
                0,
                hubs.findIndex((h) => h.href === hoveredHub),
              );
              const activeHub = hubs[activeHubIndex];
              // Map hub by index to corresponding column (same order in data definitions)
              const activeColumn = columns[activeHubIndex];

              return (
                <>
                  {/* Top bar: section label + view all */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#444CE7",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                      }}
                    >
                      — {sectionLabel}
                    </span>
                    <button
                      onClick={() => go(allHref)}
                      className="bg-transparent border-0 cursor-pointer flex items-center gap-1.5 transition-colors duration-150"
                      style={{
                        fontFamily: "inherit",
                        fontSize: 11,
                        color: "#9A9590",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        padding: "4px 0",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#444CE7")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#9A9590")}
                    >
                      {allLabel} <ArrowUpRight size={12} />
                    </button>
                  </div>

                  {/* Two-column layout */}
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: "300px 1fr",
                      gap: 0,
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "#0a0a0a",
                      minHeight: 340,
                    }}
                  >
                    {/* LEFT: hub list */}
                    <div
                      style={{
                        background: "#0d0d0d",
                        borderRight: "1px solid rgba(255,255,255,0.06)",
                        padding: "12px 0",
                      }}
                    >
                      {hubs.map((hub) => {
                        const Icon = hub.Icon;
                        const isActive = hub.href === activeHub.href;
                        return (
                          <button
                            key={`${activeMenu}-${hub.href}`}
                            onMouseEnter={() => setHoveredHub(hub.href)}
                            onClick={() => go(hub.href)}
                            className="w-full text-left bg-transparent cursor-pointer transition-all duration-150"
                            style={{
                              fontFamily: "inherit",
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "12px 20px",
                              borderLeft: isActive ? "2px solid #444CE7" : "2px solid transparent",
                              background: isActive ? "rgba(68,76,231,0.08)" : "transparent",
                              border: "0",
                              borderLeftWidth: 2,
                              borderLeftStyle: "solid",
                              borderLeftColor: isActive ? "#444CE7" : "transparent",
                            }}
                          >
                            <div
                              className="flex items-center justify-center shrink-0"
                              style={{
                                width: 30,
                                height: 30,
                                background: isActive ? "rgba(68,76,231,0.18)" : "rgba(68,76,231,0.08)",
                                border: "1px solid rgba(68,76,231,0.25)",
                                color: isActive ? "#A5B4FC" : "#818CF8",
                              }}
                            >
                              <Icon size={14} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div
                                style={{
                                  fontSize: 13,
                                  fontWeight: isActive ? 500 : 400,
                                  color: isActive ? "#F0EBE0" : "#9A9590",
                                  letterSpacing: "-0.005em",
                                  lineHeight: 1.2,
                                }}
                              >
                                {hub.title}
                              </div>
                              {hub.count && (
                                <div
                                  style={{
                                    fontSize: 10,
                                    color: "#5A5550",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    marginTop: 3,
                                  }}
                                >
                                  {hub.count}
                                </div>
                              )}
                            </div>
                            <ChevronRight
                              size={12}
                              style={{
                                color: isActive ? "#818CF8" : "#5A5550",
                                transition: "color 0.15s",
                              }}
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* RIGHT: details for active hub */}
                    <div
                      key={`${activeMenu}-${activeHub.href}-detail`}
                      style={{ padding: "24px 28px", display: "flex", flexDirection: "column", animation: "fadeInRight 0.18s ease-out both" }}
                    >
                      <div className="mb-5">
                        <h3
                          style={{
                            fontSize: 20,
                            fontWeight: 300,
                            color: "#F0EBE0",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.2,
                            marginBottom: 6,
                          }}
                        >
                          {activeHub.title}
                        </h3>
                        <p
                          style={{
                            fontSize: 12,
                            color: "#9A9590",
                            lineHeight: 1.55,
                            maxWidth: 520,
                          }}
                        >
                          {activeHub.description}
                        </p>
                      </div>

                      {/* Sub-items grid (from MENU_COLUMNS) */}
                      {activeColumn && activeColumn.hubs.length > 0 && (
                        <div
                          className="grid"
                          style={{
                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            gap: 1,
                            background: "rgba(255,255,255,0.06)",
                            marginBottom: 16,
                          }}
                        >
                          {activeColumn.hubs.map((sub) => (
                            <button
                              key={sub.href}
                              onClick={() => go(sub.href)}
                              className="group text-left bg-[#0a0a0a] hover:bg-[#111111] cursor-pointer transition-colors duration-150"
                              style={{
                                fontFamily: "inherit",
                                border: 0,
                                padding: "12px 14px",
                              }}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span
                                  className="group-hover:text-white transition-colors"
                                  style={{ fontSize: 13, fontWeight: 500, color: "#F0EBE0" }}
                                >
                                  {sub.name}
                                </span>
                                <ArrowUpRight
                                  size={12}
                                  className="text-[#5A5550] group-hover:text-[#818CF8] transition-colors"
                                />
                              </div>
                              {sub.jurisdictions.length > 0 && (
                                <div
                                  style={{
                                    fontSize: 11,
                                    color: "#9A9590",
                                    lineHeight: 1.4,
                                  }}
                                >
                                  {sub.jurisdictions.slice(0, 4).map((j) => j.label).join(" · ")}
                                  {sub.jurisdictions.length > 4 ? ` +${sub.jurisdictions.length - 4}` : ""}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Hub CTA + Project CTA */}
                      <div className="flex items-center gap-2 mt-auto pt-2">
                        <button
                          onClick={() => go(activeHub.href)}
                          className="flex-1 text-left cursor-pointer transition-all duration-150"
                          style={{
                            fontFamily: "inherit",
                            border: "1px solid rgba(68,76,231,0.25)",
                            background: "rgba(68,76,231,0.06)",
                            padding: "10px 14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "rgba(68,76,231,0.12)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(68,76,231,0.45)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "rgba(68,76,231,0.06)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(68,76,231,0.25)";
                          }}
                        >
                          <span style={{ fontSize: 12, color: "#F0EBE0", fontWeight: 500 }}>
                            Open {activeHub.title} hub
                          </span>
                          <ArrowUpRight size={13} style={{ color: "#818CF8" }} />
                        </button>
                        <button
                          onClick={() => { setActiveMenu(null); setProjectDialogOpen(true); }}
                          className="cursor-pointer border-0 transition-colors duration-150"
                          style={{
                            fontFamily: "inherit",
                            background: "#444CE7",
                            color: "#fff",
                            padding: "11px 16px",
                            fontSize: 11,
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#3538CD")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#444CE7")}
                        >
                          Start a project →
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>


            <div
              className="flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "#080808", padding: "14px 24px" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#5A5550] uppercase tracking-[0.12em]" style={{ marginRight: 16 }}>
                  Quick Access:
                </span>
                <div className="flex items-center gap-1.5">
                  {PILLS.map((p) => (
                    <button
                      key={p.href}
                      onClick={() => go(p.href)}
                      className="text-[11px] text-[#9A9590] border border-white/[0.06] px-3 py-1 bg-transparent hover:border-[#444CE7]/40 hover:text-[#F0EBE0] hover:bg-[#444CE7]/5 transition-all duration-150 cursor-pointer"
                      style={{ fontFamily: "inherit" }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative" style={{ width: 6, height: 6 }}>
                    <div className="absolute inset-0 bg-[#22c55e]" />
                    <div className="absolute inset-0 bg-[#22c55e] animate-ping" style={{ opacity: 0.4 }} />
                  </div>
                  <span className="text-[10px] text-[#5A5550]">181 pages live</span>
                </div>

                <button
                  onClick={() => go("/licenses")}
                  className="text-[11px] text-[#5A5550] hover:text-[#444CE7] transition-colors cursor-pointer bg-transparent border-0"
                  style={{ fontFamily: "inherit" }}
                >
                  View all services →
                </button>
              </div>
            </div>
        </div>

      )}

      {/* ── START A PROJECT DIALOG ── */}
      <Dialog open={projectDialogOpen} onOpenChange={setProjectDialogOpen}>
        <DialogContent
          className="border-white/[0.08] p-5 sm:p-8 max-w-lg w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto"
          style={{ background: "#080808", fontFamily: "Manrope, sans-serif" }}
        >
          <DialogHeader>
            <DialogTitle className="text-[#F0EBE0] text-[18px] sm:text-[20px] font-light tracking-tight">
              Start a Project
            </DialogTitle>
            <p className="text-[#9A9590] text-[13px] mt-1">
              Fill in the details and we'll get back to you within 24 hours.
            </p>
          </DialogHeader>
          <div className="mt-4">
            <FormBlock
              bgColor="#080808"
              fields={["Full Name", "Email", "Company Name", "Service Interest"]}
              buttonText="SEND REQUEST →"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
