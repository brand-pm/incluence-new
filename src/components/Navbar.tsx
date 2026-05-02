import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronDown, Menu, X, Send, Phone, ArrowUpRight, Check } from "lucide-react";
import { serviceFromPath, useConsultation } from "@/hooks/useConsultation";

/* ─────────── DATA ─────────── */

interface FlatItem {
  label: string;
  href: string;
  hint?: string;
  hot?: boolean;
}

const LICENSES_FLAT: FlatItem[] = [
  { label: "Crypto / VASP", href: "/cryptocurrency-exchange-license", hint: "Exchange & custody" },
  { label: "CASP (MiCA)", href: "/mica-license", hint: "EU-wide passport", hot: true },
  { label: "EMI", href: "/emi-license", hint: "E-money issuance" },
  { label: "PSP", href: "/provider-payment-systems", hint: "Payment services" },
  { label: "Gambling / iGaming", href: "/gamble-license", hint: "MGA · CGA · GSC · CR" },
  { label: "Forex", href: "/forex-license", hint: "Brokerage licensing" },
];

interface ServiceGroup {
  title: string;
  items: FlatItem[];
}

const COMPANY_GROUPED: ServiceGroup[] = [
  {
    title: "EU Jurisdictions",
    items: [
      { label: "Estonia", href: "/open-a-company-in-estonia", hint: "OÜ · e-Residency" },
      { label: "Lithuania", href: "/register-company-in-lithuania", hint: "UAB · Fintech-friendly" },
      { label: "Cyprus", href: "/company-registration-in-cyprus", hint: "12.5% corporate tax" },
      { label: "Malta", href: "/company-registration-in-malta", hint: "EU passport" },
      { label: "Czechia", href: "/company-registration-in-czechia", hint: "s.r.o." },
      { label: "Poland", href: "/company-registration-in-poland", hint: "Sp. z o.o." },
      { label: "Ireland", href: "/company-registration-in-ireland", hint: "Tech & holding" },
      { label: "Germany", href: "/company-registration-in-germany", hint: "GmbH · UG" },
      { label: "Netherlands", href: "/company-registration-netherlands", hint: "BV" },
      { label: "Luxembourg", href: "/company-registration-in-luxembourg", hint: "Holdings & funds" },
      { label: "Portugal", href: "/company-registration-portugal", hint: "Lda" },
      { label: "Bulgaria", href: "/register-company-in-bulgaria", hint: "10% flat tax" },
      { label: "Hungary", href: "/starting-a-business-in-hungary", hint: "9% corporate tax" },
      { label: "All EU →", href: "/company-registration-in-europe", hint: "Compare jurisdictions" },
    ],
  },
  {
    title: "Non-EU Europe",
    items: [
      { label: "UK", href: "/register-company-in-uk", hint: "LTD · LLP" },
      { label: "Switzerland", href: "/register-company-in-switzerland", hint: "AG · GmbH" },
      { label: "Gibraltar", href: "/company-registration-in-gibraltar", hint: "Crypto-friendly" },
      { label: "Croatia", href: "/company-registration-in-croatia", hint: "d.o.o." },
      { label: "Montenegro", href: "/starting-a-business-in-montenegro", hint: "9% flat tax" },
      { label: "All Non-EU →", href: "/company-registration-non-eu-europe", hint: "Compare jurisdictions" },
    ],
  },
  {
    title: "Americas & Asia",
    items: [
      { label: "USA", href: "/open-company-in-usa", hint: "LLC · C-Corp" },
      { label: "Canada", href: "/company-registration-in-canada", hint: "Federal · BC · Ontario" },
      { label: "UAE", href: "/register-company-in-uae", hint: "Mainland · Free Zone" },
      { label: "Hong Kong", href: "/register-company-in-hong-kong", hint: "Trading hub" },
      { label: "Singapore", href: "/register-company-in-singapore", hint: "Pte Ltd" },
      { label: "Malaysia", href: "/malaysia-company-registration", hint: "Sdn Bhd · Labuan" },
      { label: "Thailand", href: "/open-a-company-in-thailand", hint: "Co., Ltd." },
      { label: "China", href: "/company-registration-in-china", hint: "WFOE" },
      { label: "All Americas & Asia →", href: "/company-registration-americas-asia", hint: "Compare jurisdictions" },
    ],
  },
  {
    title: "Offshore Jurisdictions",
    items: [
      { label: "BVI", href: "/offshore-in-the-british-virgin-islands", hint: "BC · Zero tax" },
      { label: "Cayman Islands", href: "/offshore-in-the-cayman-islands", hint: "Funds & holdings" },
      { label: "Seychelles", href: "/offshore-company-formation-in-seychelles", hint: "IBC" },
      { label: "Panama", href: "/panama-company-formation", hint: "Territorial tax" },
      { label: "Curaçao", href: "/offshore-company-formation-in-curacao", hint: "iGaming-friendly" },
      { label: "Costa Rica", href: "/offshore-costa-rica", hint: "SRL" },
      { label: "Isle of Man", href: "/offshore-in-the-isle-of-man", hint: "Crown Dependency" },
      { label: "St Vincent", href: "/offshore-company-formation-in-st-vincent-and-the-grenadines", hint: "BC" },
      { label: "Cyprus Offshore", href: "/cyprus-offshore-company-formation", hint: "Non-dom" },
      { label: "All Offshore →", href: "/offshore-company-formation", hint: "Compare offshore" },
    ],
  },
  {
    title: "Buy / Sell Ready-Made",
    items: [
      { label: "Ready-Made Offshore", href: "/ready-made-offshore-companies", hint: "Aged BC entities", hot: true },
      { label: "Marketplace", href: "/marketplace", hint: "Browse all listings" },
      { label: "Buy a Business Abroad", href: "/buy-a-business-abroad", hint: "M&A advisory" },
      { label: "Estonia (Ready-Made)", href: "/buy-company-in-estonia", hint: "Aged OÜ" },
      { label: "Hong Kong (Ready-Made)", href: "/buy-ready-made-company-in-hong-kong", hint: "Aged Ltd" },
      { label: "UK (Ready-Made)", href: "/purchase-a-company-in-england", hint: "Aged LTD" },
      { label: "UAE (Ready-Made)", href: "/purchase-of-a-company-in-the-uae", hint: "Free Zone" },
      { label: "USA (Ready-Made)", href: "/purchase-of-a-company-in-the-usa", hint: "Aged LLC" },
    ],
  },
];

// Flat list kept for active-state detection across all Company links
const COMPANY_FLAT: FlatItem[] = [
  { label: "Hub", href: "/registration-of-companies-abroad" },
  { label: "EU Hub", href: "/company-registration-in-europe" },
  { label: "Non-EU Hub", href: "/company-registration-non-eu-europe" },
  { label: "Americas & Asia Hub", href: "/company-registration-americas-asia" },
  { label: "Offshore Hub", href: "/offshore-company-formation" },
  { label: "Ready-Made Offshore", href: "/ready-made-offshore-companies" },
  { label: "Marketplace", href: "/marketplace" },
];

const RESOURCES_FLAT: FlatItem[] = [
  { label: "About", href: "/about-us", hint: "Team & approach" },
  { label: "Blog", href: "/blog", hint: "Insights & analysis" },
  { label: "Affiliate Program", href: "/affiliate-program", hint: "Partner with us" },
  { label: "Contacts", href: "/contact", hint: "Get in touch" },
];

const SERVICES_GROUPED: ServiceGroup[] = [
  {
    title: "Banking & Payments",
    items: [
      { label: "Corporate Bank Accounts", href: "/accounts-bank", hint: "EU · Asia · USA · Offshore" },
      { label: "Merchant Account", href: "/opening-a-merchant-account", hint: "High-risk & e-commerce" },
      { label: "PSP & Payment Infrastructure", href: "/provider-payment-systems", hint: "Cyprus · Lithuania · UK · Czech" },
      { label: "Payment Systems", href: "/open-an-account-in-a-payment-system", hint: "Wise · PayPal · Revolut · Payoneer" },
      { label: "Crypto-Friendly Banks", href: "/accounts-bank", hint: "Banking for VASP & exchanges" },
    ],
  },
  {
    title: "Investment & Residency",
    items: [
      { label: "Investment Funds", href: "/offshore-investment-funds", hint: "Luxembourg · Malta · Estonia · Czech" },
      { label: "Hedge Fund", href: "/open-a-hedge-fund", hint: "Setup & structuring" },
      { label: "Residence Permit", href: "/residence-permit-abroad", hint: "Portugal · Dubai · Cyprus · Lithuania" },
    ],
  },
  {
    title: "Legal Services",
    items: [
      { label: "Legitimization", href: "/legal-business", hint: "Source-of-funds & compliance" },
      { label: "Tax & Reporting", href: "/finance-reporting", hint: "Cross-border tax structuring" },
      { label: "Legal Support", href: "/support-legal", hint: "Ongoing corporate counsel" },
      { label: "Contracts", href: "/drafting-international-contracts", hint: "Drafting & review" },
    ],
  },
];

interface Lang {
  code: "EN" | "RU";
  label: string;
  href: string;
}
const LANGUAGES: Lang[] = [
  { code: "EN", label: "English", href: "/" },
  { code: "RU", label: "Русский", href: "/ru/" },
];

/* ─────────── GA4 ─────────── */
declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}
const trackNav = (label: string) => {
  try { window.gtag?.("event", "nav_click", { item: label }); } catch { /* noop */ }
};

/* ─────────── STYLE TOKENS ─────────── */
const NAV_FS = 13;
const C_TEXT = "#F0EBE0";
const C_MUTED = "#9A9590";
const C_DIM = "#5A5550";
const C_ACCENT = "#444CE7";
const C_BG = "#0a0a0a";
const C_BG2 = "#0d0d0d";
const BORDER = "rgba(255,255,255,0.06)";
const ACTIVE_BG = "rgba(68,76,231,0.14)";

const CTA_LABEL = "Get Free Consultation";
const CTA_SHADOW = "0 0 0 1px rgba(68,76,231,0.4), 0 8px 24px rgba(68,76,231,0.25)";

/* ─────────── COMPONENT ─────────── */

type MenuKey = "licenses" | "company" | "services" | "resources" | "lang";

const Navbar = () => {
  const location = useLocation();
  const { open: openConsult } = useConsultation();
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<"EN" | "RU">("EN");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile + lock scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMenu = useCallback((k: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(k);
  }, []);
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 500);
  }, []);
  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeAll = () => { setActiveMenu(null); setMobileOpen(false); };
  const isActive = (path: string) => location.pathname === path;

  // Determine active states for top buttons
  const flatPaths = (arr: FlatItem[]) => arr.map(i => i.href);
  const groupedPaths = SERVICES_GROUPED.flatMap(g => g.items.map(i => i.href));
  const isLicensesActive = flatPaths(LICENSES_FLAT).includes(location.pathname) || activeMenu === "licenses";
  const companyGroupedPaths = COMPANY_GROUPED.flatMap(g => g.items.map(i => i.href));
  const isCompanyActive = flatPaths(COMPANY_FLAT).includes(location.pathname) || companyGroupedPaths.includes(location.pathname) || activeMenu === "company";
  const isServicesActive = groupedPaths.includes(location.pathname) || activeMenu === "services";
  const isResourcesActive = flatPaths(RESOURCES_FLAT).includes(location.pathname) || activeMenu === "resources";
  const isMicaActive = location.pathname === "/mica-license";
  const isReadyMadeActive = location.pathname === "/marketplace";

  /* helpers */

  const NavButton = ({ k, label, active, hot }: { k: MenuKey; label: string; active: boolean; hot?: boolean }) => (
    <button
      onMouseEnter={() => openMenu(k)}
      onMouseLeave={scheduleClose}
      onClick={() => { trackNav(label); openMenu(k); }}
      className="flex items-center gap-1 bg-transparent cursor-pointer"
      style={{
        fontFamily: "inherit",
        fontSize: NAV_FS,
        fontWeight: active ? 500 : 400,
        color: active ? C_TEXT : C_MUTED,
        padding: "7px 12px",
        lineHeight: 1,
        background: active ? ACTIVE_BG : "transparent",
        border: active ? "1px solid rgba(68,76,231,0.45)" : "1px solid transparent",
        transition: "all .18s ease",
        position: "relative",
      }}
    >
      {label}
      <ChevronDown size={11} />
      {hot && (
        <span
          className="absolute"
          style={{ top: 4, right: 4, width: 5, height: 5, background: C_ACCENT, borderRadius: 999 }}
        />
      )}
    </button>
  );

  const NavDirectLink = ({ to, label, active, hot, title }: { to: string; label: string; active: boolean; hot?: boolean; title?: string }) => (
    <Link
      to={to}
      onClick={() => trackNav(label)}
      title={title}
      className="no-underline relative"
      style={{
        fontFamily: "inherit",
        fontSize: NAV_FS,
        fontWeight: active ? 500 : 400,
        color: active ? C_TEXT : C_MUTED,
        padding: "7px 12px",
        lineHeight: 1,
        background: active ? ACTIVE_BG : "transparent",
        border: active ? "1px solid rgba(68,76,231,0.45)" : "1px solid transparent",
        transition: "all .18s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
      onMouseEnter={(e) => { if (!active) { (e.currentTarget as HTMLAnchorElement).style.color = C_TEXT; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)"; } }}
      onMouseLeave={(e) => { if (!active) { (e.currentTarget as HTMLAnchorElement).style.color = C_MUTED; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; } }}
    >
      {label}
      {hot && (
        <span
          aria-hidden
          style={{ width: 6, height: 6, background: C_ACCENT, borderRadius: 999, boxShadow: "0 0 8px rgba(68,76,231,0.7)" }}
        />
      )}
    </Link>
  );

  /* ─────────── FLAT DROPDOWN ─────────── */
  const FlatDropdown = ({
    title,
    items,
    width = 280,
    align = "left",
  }: {
    title: string;
    items: FlatItem[];
    width?: number;
    align?: "left" | "right";
  }) => (
    <div
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
      className="absolute"
      style={{
        top: "100%",
        [align]: 0,
        width,
        paddingTop: 8,
        fontFamily: "Manrope, sans-serif",
        zIndex: 110,
      } as React.CSSProperties}
    >
      <div
        style={{
          background: C_BG,
          border: `1px solid ${BORDER}`,
          boxShadow: "0 24px 48px rgba(0,0,0,0.7)",
          animation: "dropIn .16s ease-out both",
        }}
      >
        <div style={{ padding: "10px 14px 8px", borderBottom: `1px solid ${BORDER}` }}>
          <span style={{ fontSize: 10, color: C_ACCENT, letterSpacing: "0.14em", fontWeight: 600, textTransform: "uppercase" }}>
            — {title}
          </span>
        </div>
      <div>
        {items.map((it) => (
          <Link
            key={it.label}
            to={it.href}
            onClick={() => { trackNav(`${title}: ${it.label}`); closeAll(); }}
            className="no-underline block group"
            style={{
              padding: "10px 14px",
              borderBottom: `1px solid ${BORDER}`,
              transition: "background .14s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(68,76,231,0.06)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
          >
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 13, color: C_TEXT, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
                {it.label}
                {it.hot && (
                  <span style={{ width: 5, height: 5, background: C_ACCENT, borderRadius: 999 }} />
                )}
              </span>
              <ArrowUpRight size={12} style={{ color: C_DIM }} className="group-hover:text-[#818CF8] transition-colors" />
            </div>
            {it.hint && (
              <div style={{ fontSize: 11, color: C_MUTED, marginTop: 2, lineHeight: 1.3 }}>{it.hint}</div>
            )}
          </Link>
        ))}
        </div>
      </div>
    </div>
  );

  /* ─────────── SERVICES MEGA (3 columns) ─────────── */
  const ServicesMega = () => (
    <div
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
      className="hidden md:block fixed left-0 right-0"
      style={{
        top: 60,
        background: C_BG,
        borderBottom: `1px solid ${BORDER}`,
        boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
        zIndex: 99,
        animation: "dropIn .18s ease-out both",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div className="max-w-screen-xl mx-auto" style={{ padding: "20px 24px 24px" }}>
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontSize: 10, color: C_ACCENT, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            — Services
          </span>
          <Link
            to="/contact"
            onClick={() => { trackNav("Services: contact"); closeAll(); }}
            className="no-underline flex items-center gap-1.5"
            style={{ fontSize: 11, color: C_MUTED, textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            Discuss your case <ArrowUpRight size={12} />
          </Link>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 1,
            background: BORDER,
            border: `1px solid ${BORDER}`,
          }}
        >
          {SERVICES_GROUPED.map((group) => (
            <div key={group.title} style={{ background: C_BG2, padding: "16px 18px" }}>
              <div
                style={{
                  fontSize: 11,
                  color: C_ACCENT,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  paddingBottom: 8,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                {group.title}
              </div>
              <div className="flex flex-col">
                {group.items.map((it) => (
                  <Link
                    key={it.href}
                    to={it.href}
                    onClick={() => { trackNav(`Services › ${group.title}: ${it.label}`); closeAll(); }}
                    className="no-underline block group"
                    style={{
                      padding: "8px 0",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: 13, color: C_TEXT, fontWeight: 500 }}>{it.label}</span>
                      <ArrowUpRight size={12} style={{ color: C_DIM }} className="group-hover:text-[#818CF8] transition-colors" />
                    </div>
                    {it.hint && <div style={{ fontSize: 11, color: C_MUTED, marginTop: 2, lineHeight: 1.3 }}>{it.hint}</div>}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ─────────── COMPANY MEGA (5 columns by region) ─────────── */
  const CompanyMega = () => (
    <div
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
      className="hidden md:block fixed left-0 right-0"
      style={{
        top: 60,
        background: C_BG,
        borderBottom: `1px solid ${BORDER}`,
        boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
        zIndex: 99,
        animation: "dropIn .18s ease-out both",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div className="max-w-screen-xl mx-auto" style={{ padding: "20px 24px 24px" }}>
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontSize: 10, color: C_ACCENT, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            — Company Formation · by region
          </span>
          <Link
            to="/registration-of-companies-abroad"
            onClick={() => { trackNav("Company: hub"); closeAll(); }}
            className="no-underline flex items-center gap-1.5"
            style={{ fontSize: 11, color: C_MUTED, textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            View all jurisdictions <ArrowUpRight size={12} />
          </Link>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 1,
            background: BORDER,
            border: `1px solid ${BORDER}`,
          }}
        >
          {COMPANY_GROUPED.map((group) => {
            const hubHref =
              group.title === "EU Jurisdictions" ? "/company-registration-in-europe" :
              group.title === "Non-EU Europe" ? "/company-registration-non-eu-europe" :
              group.title === "Americas & Asia" ? "/company-registration-americas-asia" :
              group.title === "Offshore Jurisdictions" ? "/offshore-company-formation" :
              group.title === "Buy / Sell Ready-Made" ? "/ready-made-offshore-companies" :
              null;
            return (
            <div key={group.title} style={{ background: C_BG2, padding: "16px 18px" }}>
              {hubHref ? (
                <Link
                  to={hubHref}
                  onClick={() => { trackNav(`Company › ${group.title} (hub)`); closeAll(); }}
                  className="no-underline block group"
                  style={{
                    fontSize: 11,
                    color: C_ACCENT,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                    paddingBottom: 8,
                    borderBottom: `1px solid ${BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="group-hover:text-white transition-colors">{group.title}</span>
                  <ArrowUpRight size={12} className="group-hover:text-white transition-colors" />
                </Link>
              ) : (
                <div
                  style={{
                    fontSize: 11,
                    color: C_ACCENT,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                    paddingBottom: 8,
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  {group.title}
                </div>
              )}
              <div className="flex flex-col">
                {group.items.map((it) => (
                  <Link
                    key={it.href + it.label}
                    to={it.href}
                    onClick={() => { trackNav(`Company › ${group.title}: ${it.label}`); closeAll(); }}
                    className="no-underline block group"
                    style={{
                      padding: "8px 0",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: 13, color: C_TEXT, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
                        {it.label}
                        {it.hot && <span style={{ width: 5, height: 5, background: C_ACCENT, borderRadius: 999 }} />}
                      </span>
                      <ArrowUpRight size={12} style={{ color: C_DIM }} className="group-hover:text-[#818CF8] transition-colors" />
                    </div>
                    {it.hint && <div style={{ fontSize: 11, color: C_MUTED, marginTop: 2, lineHeight: 1.3 }}>{it.hint}</div>}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ─────────── RENDER ─────────── */
  return (
    <>
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-8 lg:px-12"
        style={{
          height: 60,
          background: "rgba(8,8,8,0.88)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderBottom: `1px solid ${BORDER}`,
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {/* Logo */}
        <Link to="/" onClick={() => trackNav("Logo")} className="no-underline" style={{ fontSize: 18, fontWeight: 600 }}>
          <span style={{ color: C_TEXT }}>Inclu</span>
          <span style={{ color: C_ACCENT }}>ence</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1" style={{ fontSize: NAV_FS }}>
          <div className="relative" onMouseEnter={() => openMenu("licenses")} onMouseLeave={scheduleClose}>
            <NavButton k="licenses" label="Licenses" active={isLicensesActive} />
            {activeMenu === "licenses" && (
              <FlatDropdown title="Licenses" items={LICENSES_FLAT} width={300} />
            )}
          </div>

          <div className="relative" onMouseEnter={() => openMenu("company")} onMouseLeave={scheduleClose}>
            <NavButton k="company" label="Company Formation" active={isCompanyActive} />
            {/* Company mega is full-width — rendered outside this relative wrapper */}
          </div>

          <NavDirectLink to="/mica-license" label="MiCA" active={isMicaActive} hot title="July 2026 deadline" />
          <NavDirectLink to="/marketplace" label="Ready-Made Company" active={isReadyMadeActive} />

          <div className="relative" onMouseEnter={() => openMenu("services")} onMouseLeave={scheduleClose}>
            <NavButton k="services" label="Services" active={isServicesActive} />
            {/* Services mega is full-width — rendered outside this relative wrapper */}
          </div>

          <div className="relative" onMouseEnter={() => openMenu("resources")} onMouseLeave={scheduleClose}>
            <NavButton k="resources" label="Resources" active={isResourcesActive} />
            {activeMenu === "resources" && (
              <FlatDropdown title="Resources" items={RESOURCES_FLAT} width={260} />
            )}
          </div>
        </div>

        {/* CTA + lang + socials */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language switcher */}
          <div className="relative" onMouseEnter={() => openMenu("lang")} onMouseLeave={scheduleClose}>
            <button
              className="flex items-center gap-1 bg-transparent cursor-pointer"
              style={{
                fontFamily: "inherit",
                fontSize: 12,
                color: C_MUTED,
                padding: "7px 10px",
                lineHeight: 1,
                border: `1px solid ${BORDER}`,
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              {currentLang}
              <ChevronDown size={11} />
            </button>
            {activeMenu === "lang" && (
              <div
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className="absolute"
                style={{
                  top: "100%",
                  right: 0,
                  width: 160,
                  paddingTop: 8,
                  zIndex: 110,
                }}
              >
                <div
                  style={{
                    background: C_BG,
                    border: `1px solid ${BORDER}`,
                    boxShadow: "0 24px 48px rgba(0,0,0,0.7)",
                    animation: "dropIn .16s ease-out both",
                  }}
                >
                  {LANGUAGES.map((l) => {
                    const selected = l.code === currentLang;
                    const sharedStyle: React.CSSProperties = {
                      padding: "10px 14px",
                      borderBottom: `1px solid ${BORDER}`,
                      fontSize: 13,
                      color: selected ? C_TEXT : C_MUTED,
                      fontWeight: selected ? 500 : 400,
                    };
                    const inner = (
                      <>
                        <span>{l.code} · {l.label}</span>
                        {selected && <Check size={12} style={{ color: C_ACCENT }} />}
                      </>
                    );
                    if (l.code === "RU") {
                      return (
                        <a key={l.code} href={l.href} className="no-underline flex items-center justify-between" style={sharedStyle}>
                          {inner}
                        </a>
                      );
                    }
                    return (
                      <Link
                        key={l.code}
                        to={l.href}
                        onClick={() => { setCurrentLang("EN"); setActiveMenu(null); trackNav("Lang: EN"); }}
                        className="no-underline flex items-center justify-between"
                        style={sharedStyle}
                      >
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="https://t.me/incluence"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
            style={{ width: 34, height: 34, border: `1px solid ${BORDER}` }}
            title="Telegram"
          >
            <Send size={14} className="text-[#9A9590] group-hover:text-[#444CE7] transition-colors" />
          </a>
          <a
            href="https://wa.me/37281703037"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
            style={{ width: 34, height: 34, border: `1px solid ${BORDER}` }}
            title="WhatsApp"
          >
            <Phone size={14} className="text-[#9A9590] group-hover:text-[#444CE7] transition-colors" />
          </a>

          <button
            onClick={() => { trackNav("CTA: Get Free Consultation"); openConsult({ service: serviceFromPath(location.pathname) }); }}
            className="cursor-pointer border-0"
            style={{
              background: C_ACCENT,
              color: "#fff",
              padding: "9px 18px",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "inherit",
              boxShadow: CTA_SHADOW,
              transition: "background .15s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#3538CD")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = C_ACCENT)}
          >
            {CTA_LABEL}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer"
          style={{ color: C_TEXT }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Services full-width mega-menu (rendered separately so it spans 100%) */}
      {activeMenu === "services" && <ServicesMega />}

      {/* Company Formation full-width mega-menu (by region) */}
      {activeMenu === "company" && <CompanyMega />}

      {/* ─────────── MOBILE MENU ─────────── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 z-[99] overflow-y-auto"
          style={{ background: "#0a0a0a", padding: "12px 20px 120px", fontFamily: "Manrope, sans-serif" }}
        >
          {([
            { key: "licenses", title: "Licenses", items: LICENSES_FLAT },
          ] as { key: string; title: string; items: FlatItem[] }[]).map((sec) => (
            <div key={sec.key}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === sec.key ? null : sec.key)}
                className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer"
                style={{ padding: "14px 0", borderBottom: `1px solid ${BORDER}`, fontFamily: "inherit" }}
              >
                <span style={{ fontSize: 11, color: C_ACCENT, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                  — {sec.title}
                </span>
                <ChevronDown
                  size={14}
                  style={{ color: C_DIM, transition: "transform .2s", transform: mobileExpanded === sec.key ? "rotate(180deg)" : "rotate(0)" }}
                />
              </button>
              {mobileExpanded === sec.key && (
                <div style={{ padding: "8px 0 12px" }}>
                  {sec.items.map((it) => (
                    <Link
                      key={it.href}
                      to={it.href}
                      onClick={() => { trackNav(`mobile: ${sec.title}: ${it.label}`); closeAll(); }}
                      className="no-underline block"
                      style={{ padding: "10px 0", fontSize: 14, color: C_TEXT }}
                    >
                      {it.label}
                      {it.hint && <div style={{ fontSize: 11, color: C_MUTED, marginTop: 2 }}>{it.hint}</div>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Company Formation accordion (grouped by region) */}
          <button
            onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
            className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer"
            style={{ padding: "14px 0", borderBottom: `1px solid ${BORDER}`, fontFamily: "inherit" }}
          >
            <span style={{ fontSize: 11, color: C_ACCENT, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
              — Company Formation
            </span>
            <ChevronDown
              size={14}
              style={{ color: C_DIM, transition: "transform .2s", transform: mobileExpanded === "company" ? "rotate(180deg)" : "rotate(0)" }}
            />
          </button>
          {mobileExpanded === "company" && (
            <div style={{ padding: "8px 0 12px" }}>
              {COMPANY_GROUPED.map((g) => (
                <div key={g.title} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 10, color: C_MUTED, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>
                    {g.title}
                  </div>
                  {g.items.map((it) => (
                    <Link
                      key={it.href + it.label}
                      to={it.href}
                      onClick={() => { trackNav(`mobile: Company › ${g.title}: ${it.label}`); closeAll(); }}
                      className="no-underline block"
                      style={{ padding: "8px 0", fontSize: 13, color: C_TEXT }}
                    >
                      {it.label}
                      {it.hint && <div style={{ fontSize: 11, color: C_MUTED, marginTop: 2 }}>{it.hint}</div>}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* MiCA + Ready-Made direct */}
          <Link
            to="/mica-license"
            onClick={() => { trackNav("mobile: MiCA"); closeAll(); }}
            className="no-underline flex items-center justify-between"
            style={{ padding: "14px 0", borderBottom: `1px solid ${BORDER}`, fontSize: 13, color: C_TEXT, fontWeight: 500 }}
          >
            <span className="flex items-center gap-2">
              MiCA
              <span style={{ width: 6, height: 6, background: C_ACCENT, borderRadius: 999 }} />
            </span>
            <span style={{ fontSize: 10, color: C_DIM, letterSpacing: "0.1em", textTransform: "uppercase" }}>July 2026</span>
          </Link>
          <Link
            to="/marketplace"
            onClick={() => { trackNav("mobile: Ready-Made"); closeAll(); }}
            className="no-underline block"
            style={{ padding: "14px 0", borderBottom: `1px solid ${BORDER}`, fontSize: 13, color: C_TEXT, fontWeight: 500 }}
          >
            Ready-Made Company
          </Link>

          {/* Services accordion */}
          <button
            onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
            className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer"
            style={{ padding: "14px 0", borderBottom: `1px solid ${BORDER}`, fontFamily: "inherit" }}
          >
            <span style={{ fontSize: 11, color: C_ACCENT, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
              — Services
            </span>
            <ChevronDown
              size={14}
              style={{ color: C_DIM, transition: "transform .2s", transform: mobileExpanded === "services" ? "rotate(180deg)" : "rotate(0)" }}
            />
          </button>
          {mobileExpanded === "services" && (
            <div style={{ padding: "8px 0 12px" }}>
              {SERVICES_GROUPED.map((g) => (
                <div key={g.title} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 10, color: C_MUTED, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>
                    {g.title}
                  </div>
                  {g.items.map((it) => (
                    <Link
                      key={it.href}
                      to={it.href}
                      onClick={() => { trackNav(`mobile: Services › ${g.title}: ${it.label}`); closeAll(); }}
                      className="no-underline block"
                      style={{ padding: "8px 0", fontSize: 14, color: C_TEXT }}
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Resources */}
          <button
            onClick={() => setMobileExpanded(mobileExpanded === "resources" ? null : "resources")}
            className="flex items-center justify-between w-full bg-transparent border-0 cursor-pointer"
            style={{ padding: "14px 0", borderBottom: `1px solid ${BORDER}`, fontFamily: "inherit" }}
          >
            <span style={{ fontSize: 11, color: C_ACCENT, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
              — Resources
            </span>
            <ChevronDown
              size={14}
              style={{ color: C_DIM, transition: "transform .2s", transform: mobileExpanded === "resources" ? "rotate(180deg)" : "rotate(0)" }}
            />
          </button>
          {mobileExpanded === "resources" && (
            <div style={{ padding: "8px 0 12px" }}>
              {RESOURCES_FLAT.map((it) => (
                <Link
                  key={it.href}
                  to={it.href}
                  onClick={() => { trackNav(`mobile: Resources: ${it.label}`); closeAll(); }}
                  className="no-underline block"
                  style={{ padding: "8px 0", fontSize: 14, color: C_TEXT }}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          )}

          {/* Lang */}
          <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: 12, paddingTop: 12, display: "flex", gap: 8 }}>
            {LANGUAGES.map((l) => {
              const selected = l.code === currentLang;
              if (l.code === "RU") {
                return (
                  <a
                    key={l.code}
                    href={l.href}
                    className="no-underline"
                    style={{
                      padding: "8px 14px",
                      fontSize: 12,
                      color: selected ? C_TEXT : C_MUTED,
                      border: `1px solid ${selected ? "rgba(68,76,231,0.45)" : BORDER}`,
                      background: selected ? ACTIVE_BG : "transparent",
                    }}
                  >
                    {l.code}
                  </a>
                );
              }
              return (
                <button
                  key={l.code}
                  onClick={() => setCurrentLang("EN")}
                  className="cursor-pointer"
                  style={{
                    padding: "8px 14px",
                    fontSize: 12,
                    color: selected ? C_TEXT : C_MUTED,
                    border: `1px solid ${selected ? "rgba(68,76,231,0.45)" : BORDER}`,
                    background: selected ? ACTIVE_BG : "transparent",
                    fontFamily: "inherit",
                  }}
                >
                  {l.code}
                </button>
              );
            })}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3" style={{ marginTop: 20 }}>
            <a href="https://t.me/incluence" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, border: `1px solid ${BORDER}` }}>
              <Send size={16} style={{ color: C_MUTED }} />
            </a>
            <a href="https://wa.me/37281703037" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center"
              style={{ width: 40, height: 40, border: `1px solid ${BORDER}` }}>
              <Phone size={16} style={{ color: C_MUTED }} />
            </a>
          </div>
        </div>
      )}

      {/* Mobile sticky CTA — always visible */}
      {mobileOpen && (
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 z-[101]"
          style={{
            padding: "12px 16px",
            background: "rgba(8,8,8,0.95)",
            backdropFilter: "blur(20px)",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <button
            onClick={() => { setMobileOpen(false); trackNav("CTA: Get Free Consultation (mobile)"); openConsult({ service: serviceFromPath(location.pathname) }); }}
            className="w-full cursor-pointer border-0"
            style={{
              background: C_ACCENT,
              color: "#fff",
              padding: "14px 24px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "inherit",
              boxShadow: CTA_SHADOW,
            }}
          >
            {CTA_LABEL}
          </button>
        </div>
      )}

      {/* Consultation popup is rendered globally in App.tsx */}
    </>
  );
};

export default Navbar;
