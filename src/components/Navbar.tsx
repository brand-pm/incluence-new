import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronDown, Menu, X, MessageCircle, Send, Phone, Mail, ChevronRight } from "lucide-react";
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
    title: "COMPANY FORMATION",
    hubs: [
      {
        name: "Registration",
        href: "/registration-of-companies-abroad",
        jurisdictions: [
          { label: "Estonia", href: "/open-a-company-in-estonia" },
          { label: "UK", href: "/register-company-in-uk" },
          { label: "UAE", href: "/register-company-in-uae" },
          { label: "Singapore", href: "/register-company-in-singapore" },
        ],
      },
      {
        name: "Ready-Made",
        href: "/buy-a-business-abroad",
        jurisdictions: [
          { label: "Estonia", href: "/buy-company-in-estonia" },
          { label: "Malta", href: "/buying-a-company-in-malta" },
          { label: "Cyprus", href: "/purchase-of-a-company-in-cyprus" },
          { label: "England", href: "/purchase-a-company-in-england" },
        ],
      },
      {
        name: "Offshore",
        href: "/offshore-company-formation",
        jurisdictions: [
          { label: "BVI", href: "/offshore-in-the-british-virgin-islands" },
          { label: "Cayman", href: "/offshore-in-the-cayman-islands" },
          { label: "Seychelles", href: "/offshore-company-formation-in-seychelles" },
          { label: "Panama", href: "/panama-company-formation" },
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

const PILLS = [
  { label: "Gambling · MGA", href: "/malta-gaming-license" },
  { label: "Estonia · VASP", href: "/cryptocurrency-exchange-license-in-estonia" },
  { label: "UK · EMI", href: "/e-money-license-uk" },
  { label: "BVI · Offshore", href: "/offshore-in-the-british-virgin-islands" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 280);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMobileOpen(false);
  };

  const go = (href: string) => {
    handleLinkClick();
    window.location.href = href;
  };

  const navLinkClass = (path: string) =>
    `transition-colors duration-200 no-underline ${location.pathname === path ? "text-[#F0EBE0]" : "text-[#9A9590] hover:text-[#F0EBE0]"}`;

  return (
    <>
      {/* ── BASE NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
        style={{
          height: 60,
          background: "rgba(8,8,8,0.88)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          fontFamily: "Manrope, sans-serif",
          padding: "0 48px",
        }}
      >
        <Link to="/" className="no-underline" style={{ fontSize: 18, fontWeight: 600 }}>
          <span style={{ color: "#F0EBE0" }}>Inclu</span>
          <span style={{ color: "#444CE7" }}>ence</span>
        </Link>

        <div className="hidden md:flex items-center gap-8" style={{ fontSize: 14, fontWeight: 400 }}>
          <button
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            className="flex items-center gap-1 bg-transparent border-none cursor-pointer transition-colors duration-200"
            style={{
              color: menuOpen ? "#F0EBE0" : "#9A9590",
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "inherit",
              padding: 0,
            }}
          >
            Services
            <ChevronDown size={12} />
          </button>
          <Link to="/marketplace" className={navLinkClass("/marketplace")} style={{ fontSize: 14 }}>
            Ready Made Company
          </Link>
          <Link to="/affiliate-program" className={navLinkClass("/affiliate-program")} style={{ fontSize: 14 }}>
            Affiliate Program
          </Link>
          <Link to="/about" className={navLinkClass("/about")} style={{ fontSize: 14 }}>
            About
          </Link>
        </div>

        {/* Contact dropdown + CTA — desktop */}
        <div className="hidden md:flex items-center gap-5">
          <div ref={contactRef} className="relative">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className={`flex items-center gap-1.5 bg-transparent border-0 p-0 cursor-pointer transition-colors duration-200 ${contactOpen ? "text-[#F0EBE0]" : "text-[#9A9590] hover:text-[#F0EBE0]"}`}
              style={{ fontSize: 14, fontFamily: "inherit" }}
            >
              <MessageCircle size={14} />
              Contact
              <ChevronDown size={12} className={`transition-transform duration-200 ${contactOpen ? "rotate-180" : ""}`} />
            </button>

            {contactOpen && (
              <div
                className="absolute z-[101] animate-in fade-in slide-in-from-top-2 duration-150"
                style={{
                  top: "calc(100% + 12px)",
                  right: 0,
                  width: 280,
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              >
                <div style={{ padding: "12px 16px 8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em" }}>— Quick Contact</span>
                </div>
                <div style={{ padding: "4px 0" }}>
                  <a href="https://t.me/incluence" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 no-underline group transition-colors"
                    style={{ padding: "10px 16px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    onClick={() => setContactOpen(false)}
                  >
                    <div style={{ width: 32, height: 32, background: "rgba(68,76,231,0.08)", border: "1px solid rgba(68,76,231,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Send size={14} color="#444CE7" />
                    </div>
                    <div className="flex-1">
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#F0EBE0" }}>Telegram</div>
                      <div style={{ fontSize: 11, color: "#5A5550" }}>@incluence</div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#444CE7", fontSize: 12 }}>→</span>
                  </a>
                  <a href="https://wa.me/37281703037" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 no-underline group transition-colors"
                    style={{ padding: "10px 16px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    onClick={() => setContactOpen(false)}
                  >
                    <div style={{ width: 32, height: 32, background: "rgba(68,76,231,0.08)", border: "1px solid rgba(68,76,231,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Phone size={14} color="#444CE7" />
                    </div>
                    <div className="flex-1">
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#F0EBE0" }}>WhatsApp</div>
                      <div style={{ fontSize: 11, color: "#5A5550" }}>+372 8170 3037</div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#444CE7", fontSize: 12 }}>→</span>
                  </a>
                  <a href="mailto:info@incluence.net"
                    className="flex items-center gap-3 no-underline group transition-colors"
                    style={{ padding: "10px 16px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    onClick={() => setContactOpen(false)}
                  >
                    <div style={{ width: 32, height: 32, background: "rgba(68,76,231,0.08)", border: "1px solid rgba(68,76,231,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Mail size={14} color="#444CE7" />
                    </div>
                    <div className="flex-1">
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#F0EBE0" }}>Email</div>
                      <div style={{ fontSize: 11, color: "#5A5550" }}>info@incluence.net</div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#444CE7", fontSize: 12 }}>→</span>
                  </a>
                </div>
                <div style={{ padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <Link to="/contact" onClick={() => setContactOpen(false)}
                    className="flex items-center justify-between w-full no-underline hover:underline"
                    style={{ fontSize: 12, color: "#444CE7" }}
                  >
                    Schedule a free consultation
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="no-underline transition-colors duration-200"
            style={{
              background: "#444CE7",
              color: "#fff",
              padding: "8px 20px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#3538CD")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#444CE7")}
          >
            Start a Project
          </Link>
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
          style={{ background: "#0a0a0a", fontFamily: "Manrope, sans-serif", padding: "16px 24px 48px" }}
        >
          {MENU_COLUMNS.map((col) => (
            <div key={col.title} style={{ marginBottom: 8 }}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === col.title ? null : col.title)}
                className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer"
                style={{
                  padding: "12px 0",
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
            <Link to="/marketplace" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "8px 0" }}>Ready Made Company</Link>
            <Link to="/affiliate-program" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "8px 0" }}>Affiliate Program</Link>
            <Link to="/about" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "8px 0" }}>About</Link>
          </div>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="inline-block no-underline"
            style={{ marginTop: 16, background: "#444CE7", color: "#fff", padding: "10px 24px", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Start a Project
          </Link>
        </div>
      )}

      {/* ── MEGA-MENU PANEL ── */}
      {menuOpen && (
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
          `}</style>

          <div className="max-w-screen-xl mx-auto">
            {/* ── 5-COLUMN GRID ── */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1.2fr 1fr 1fr 1fr 0.8fr",
                gap: 0,
              }}
            >
              {MENU_COLUMNS.map((col, colIdx) => (
                <div
                  key={col.title}
                  style={{
                    padding: "28px 24px 24px",
                    borderRight: colIdx < MENU_COLUMNS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  {/* Column header */}
                  <span
                    style={{
                      display: "block",
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#444CE7",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: 20,
                    }}
                  >
                    — {col.title}
                  </span>

                  {/* Hubs */}
                  {col.hubs.map((hub, hubIdx) => (
                    <div key={hub.href} style={{ marginBottom: hubIdx < col.hubs.length - 1 ? 20 : 0 }}>
                      {/* Hub link */}
                      <button
                        onClick={() => go(hub.href)}
                        className="flex items-center gap-1.5 bg-transparent border-0 cursor-pointer group w-full text-left"
                        style={{
                          fontFamily: "inherit",
                          padding: "2px 0",
                          marginBottom: hub.jurisdictions.length > 0 ? 8 : 0,
                        }}
                      >
                        <span
                          className="group-hover:text-[#444CE7] transition-colors duration-150"
                          style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0" }}
                        >
                          {hub.name}
                        </span>
                        <ChevronRight
                          size={12}
                          className="text-[#444CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        />
                      </button>

                      {/* Jurisdiction links */}
                      {hub.jurisdictions.length > 0 && (
                        <div className="flex flex-col gap-0.5" style={{ paddingLeft: 0 }}>
                          {hub.jurisdictions.map((j) => (
                            <button
                              key={j.href}
                              onClick={() => go(j.href)}
                              className="bg-transparent border-0 cursor-pointer text-left group/j flex items-center"
                              style={{
                                fontFamily: "inherit",
                                padding: "3px 0 3px 10px",
                                borderLeft: "2px solid transparent",
                                transition: "border-color 0.15s, color 0.15s",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderLeftColor = "#444CE7";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderLeftColor = "transparent";
                              }}
                            >
                              <span
                                className="group-hover/j:text-[#F0EBE0] transition-colors duration-150"
                                style={{ fontSize: 12, color: "#9A9590" }}
                              >
                                {j.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* ── BOTTOM BAR ── */}
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
        </div>
      )}
    </>
  );
};

export default Navbar;
