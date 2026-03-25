import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { Shield, CreditCard, Globe, Building2, ChevronDown, Menu, X, MessageCircle, Send, Phone, Mail } from "lucide-react";
import NodePulse from "./NodePulse";

type Category = "license" | "payment" | "intl" | "offshore";

interface NavTag { label: string; href?: string }

const CATS: { id: Category; label: string; Icon: typeof Shield }[] = [
  { id: "license", Icon: Shield, label: "License" },
  { id: "payment", Icon: CreditCard, label: "Provider payment systems" },
  { id: "intl", Icon: Globe, label: "International operation" },
  { id: "offshore", Icon: Building2, label: "Offshore" },
];

const NAV_DATA: Record<Category, { sublabel: string; items: { href: string; label: string; desc: string; icon: JSX.Element; tags: NavTag[] }[] }> = {
  license: {
    sublabel: "— LICENSING",
    items: [
      { href: "/gamble-license", label: "Gambling License", desc: "Casino, sports betting & poker", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="0"/><circle cx="12" cy="12" r="3"/></svg>, tags: [
        { label: "Malta", href: "/malta-gaming-license" },
        { label: "Curaçao", href: "/curacao-gaming-license" },
        { label: "Isle of Man", href: "/gambling-license-of-the-isle-of-man" },
        { label: "Costa Rica", href: "/gambling-license-in-costa-rica" },
      ]},
      { href: "/forex-license", label: "Forex License", desc: "EU & offshore brokerage", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, tags: [
        { label: "Cyprus", href: "/cyprus-forex-license" },
        { label: "Malta", href: "/forex-broker-licence-in-malta" },
        { label: "Vanuatu", href: "/forex-broker-licence-in-vanuatu" },
        { label: "Mauritius", href: "/forex-broker-licence-in-mauritius" },
        { label: "Montenegro", href: "/forex-broker-licence-in-montenegro" },
        { label: "Seychelles", href: "/forex-license-seychelles" },
      ]},
      { href: "/cryptocurrency-exchange-license", label: "Crypto / VASP", desc: "Exchange, custody & DeFi", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 16.793l-1.86-11.04"/></svg>, tags: [
        { label: "Estonia", href: "/cryptocurrency-exchange-license-in-estonia" },
        { label: "Lithuania", href: "/lithuania-crypto-license" },
        { label: "Switzerland", href: "/cryptocurrency-exchange-license-in-switzerland" },
        { label: "Malta", href: "/cryptocurrency-license-in-malta" },
        { label: "Poland", href: "/poland-crypto-license" },
        { label: "USA", href: "/cryptocurrency-exchange-license-in-the-usa" },
      ]},
      { href: "/emi-license", label: "EMI License", desc: "E-money & SEPA access", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="0"/><line x1="2" y1="10" x2="22" y2="10"/></svg>, tags: [
        { label: "Estonia", href: "/emi-license-in-estonia" },
        { label: "Malta", href: "/e-money-license-malta" },
        { label: "UK", href: "/e-money-license-uk" },
        { label: "Lithuania", href: "/e-money-license-lithuania" },
      ]},
    ],
  },
  payment: {
    sublabel: "— PROVIDER PAYMENT SYSTEMS",
    items: [
      { href: "/provider-payment-systems", label: "Payment Systems", desc: "Full PSP registration & licensing", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="0"/><line x1="2" y1="10" x2="22" y2="10"/></svg>, tags: [
        { label: "Cyprus", href: "/payment-system-license-in-cyprus" },
        { label: "Lithuania", href: "/payment-system-license-in-lithuania" },
        { label: "UK PSP", href: "/psp-system-uk" },
        { label: "Denmark", href: "/payment-system-license-in-denmark" },
        { label: "Czech", href: "/czech-payment-system-license" },
        { label: "Hong Kong", href: "/hong-kong-payment-system-license" },
      ]},
      { href: "/accounts-bank", label: "Bank Accounts", desc: "Corporate accounts in 20+ countries", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>, tags: [
        { label: "Cyprus", href: "/open-a-bank-account-in-cyprus" },
        { label: "Germany", href: "/open-a-bank-account-in-germany" },
        { label: "UK", href: "/opening-a-bank-account-in-the-united-kingdom" },
        { label: "Switzerland", href: "/open-bank-account-as-foreigner-in-switzerland" },
        { label: "USA", href: "/open-bank-account-as-foreigner-in-usa" },
        { label: "+15", href: "/accounts-bank" },
      ]},
      { href: "/opening-a-merchant-account", label: "Merchant Account", desc: "PSP connections & card processing", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>, tags: [
        { label: "Visa" },
        { label: "MC" },
        { label: "Crypto" },
      ]},
      { href: "/open-an-account-in-a-payment-system", label: "Payment System Account", desc: "Wise, PayPal, Payoneer & more", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, tags: [
        { label: "Wise", href: "/opening-an-account-in-the-wise-payment-system" },
        { label: "PayPal", href: "/opening-an-account-in-the-pay-pal-payment-system" },
        { label: "Payoneer", href: "/opening-an-account-in-the-payoneer-payment-system" },
        { label: "Revolut", href: "/opening-an-account-in-revolut" },
      ]},
    ],
  },
  intl: {
    sublabel: "— INTERNATIONAL OPERATION",
    items: [
      { href: "/registration-of-companies-abroad", label: "Company Registration", desc: "28+ jurisdictions worldwide", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, tags: [
        { label: "Estonia", href: "/open-a-company-in-estonia" },
        { label: "UK", href: "/register-company-in-uk" },
        { label: "UAE", href: "/register-company-in-uae" },
        { label: "Singapore", href: "/register-company-in-singapore" },
        { label: "Hong Kong", href: "/register-company-in-hong-kong" },
        { label: "+23", href: "/registration-of-companies-abroad" },
      ]},
      { href: "/buy-a-business-abroad", label: "Ready-Made Companies", desc: "Buy & start immediately", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>, tags: [
        { label: "Estonia", href: "/buy-company-in-estonia" },
        { label: "Malta", href: "/buying-a-company-in-malta" },
        { label: "Cyprus", href: "/purchase-of-a-company-in-cyprus" },
        { label: "England", href: "/purchase-a-company-in-england" },
        { label: "+15", href: "/buy-a-business-abroad" },
      ]},
      { href: "/offshore-investment-funds", label: "Investment Funds", desc: "Fund registration & management", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, tags: [
        { label: "Luxembourg", href: "/open-an-investment-fund-in-luxembourg" },
        { label: "Estonia", href: "/open-an-investment-fund-in-estonia" },
        { label: "Malta", href: "/registration-of-investment-funds-in-malta" },
        { label: "Czech", href: "/registration-of-investment-funds-in-czech" },
        { label: "Switzerland", href: "/registration-of-investment-funds-in-switzerland" },
      ]},
      { href: "/residence-permit-abroad", label: "Residence Permit", desc: "Residency by investment", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, tags: [
        { label: "Portugal", href: "/residence-permit-in-portugal" },
        { label: "Dubai", href: "/residence-permit-in-dubai" },
        { label: "Cyprus", href: "/residence-permit-in-cyprus" },
        { label: "Lithuania", href: "/residence-permit-in-lithuania" },
        { label: "Hungary", href: "/residence-permit-in-hungary" },
        { label: "Slovakia", href: "/residence-permit-in-slovakia" },
      ]},
      { href: "/legal-business", label: "Legal & Compliance", desc: "Business legitimization & AML", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, tags: [
        { label: "Tax", href: "/finance-reporting" },
        { label: "Legal Support", href: "/support-legal" },
        { label: "Contracts", href: "/drafting-international-contracts" },
      ]},
      { href: "/finance-reporting", label: "Tax & Reporting", desc: "Tax planning & transfer pricing", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, tags: [
        { label: "Transfer pricing" },
        { label: "CFC" },
      ]},
    ],
  },
  offshore: {
    sublabel: "— OFFSHORE",
    items: [
      { href: "/offshore-company-formation", label: "Offshore Company", desc: "Tax-efficient structures worldwide", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg>, tags: [
        { label: "BVI", href: "/offshore-in-the-british-virgin-islands" },
        { label: "Cayman", href: "/offshore-in-the-cayman-islands" },
        { label: "Seychelles", href: "/offshore-company-formation-in-seychelles" },
        { label: "Curaçao", href: "/offshore-company-formation-in-curacao" },
        { label: "Panama", href: "/panama-company-formation" },
        { label: "+4", href: "/offshore-company-formation" },
      ]},
      { href: "/ready-made-offshore-companies", label: "Ready-Made Offshore", desc: "Pre-registered offshore entities", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>, tags: [
        { label: "Costa Rica", href: "/offshore-costa-rica" },
        { label: "Isle of Man", href: "/offshore-in-the-isle-of-man" },
        { label: "St Vincent", href: "/offshore-company-formation-in-st-vincent-and-the-grenadines" },
        { label: "Cyprus", href: "/cyprus-offshore-company-formation" },
      ]},
      { href: "/opening-a-foreign-bank-account", label: "Offshore Banking", desc: "Foreign & offshore accounts", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>, tags: [
        { label: "Foreign", href: "/opening-a-foreign-bank-account" },
        { label: "Offshore", href: "/opening-an-offshore-bank-account" },
        { label: "Luxembourg", href: "/open-a-bank-account-in-luxembourg" },
        { label: "Andorra", href: "/open-a-bank-account-in-andorra" },
      ]},
      { href: "/open-a-hedge-fund", label: "Hedge Funds", desc: "Fund setup & administration", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, tags: [
        { label: "Hedge Fund", href: "/open-a-hedge-fund" },
        { label: "Luxembourg", href: "/open-an-investment-fund-in-luxembourg" },
      ]},
    ],
  },
};

const PILLS = [
  { label: "Gambling · MGA", href: "/malta-gaming-license" },
  { label: "Estonia · VASP", href: "/cryptocurrency-exchange-license-in-estonia" },
  { label: "UK · EMI", href: "/e-money-license-uk" },
  { label: "BVI · Offshore", href: "/offshore-in-the-british-virgin-islands" },
];

interface JurisdictionPreview {
  reg: string; name: string; badge: string; price: string; timeline: string; href: string;
}

const LICENSE_PREVIEWS: Record<string, { jurisdictions: JurisdictionPreview[] }> = {
  '/gamble-license': { jurisdictions: [
    { reg: 'MGA', name: 'Malta', badge: 'EU Regulated', price: 'From €25,000', timeline: '6–9 months', href: '/malta-gaming-license' },
    { reg: 'CGA', name: 'Curaçao', badge: 'Popular', price: 'From €15,000', timeline: '3–4 months', href: '/curacao-gaming-license' },
    { reg: 'GSC', name: 'Isle of Man', badge: 'Tier 1', price: 'From £25,000', timeline: '6–12 months', href: '/gambling-license-of-the-isle-of-man' },
    { reg: 'Municipality', name: 'Costa Rica', badge: 'Offshore', price: 'From $15,000', timeline: '2–5 weeks', href: '/gambling-license-in-costa-rica' },
  ]},
  '/forex-license': { jurisdictions: [
    { reg: 'CySEC', name: 'Cyprus', badge: 'EU Regulated', price: 'From €30,000', timeline: '6–12 months', href: '/cyprus-forex-license' },
    { reg: 'MFSA', name: 'Malta', badge: 'EU MiFID', price: 'From €25,000', timeline: '6–9 months', href: '/forex-broker-licence-in-malta' },
    { reg: 'VFSC', name: 'Vanuatu', badge: 'Offshore', price: 'From $20,000', timeline: '3–4 months', href: '/forex-broker-licence-in-vanuatu' },
    { reg: 'FSC', name: 'Mauritius', badge: 'Offshore', price: 'From $15,000', timeline: '3–6 months', href: '/forex-broker-licence-in-mauritius' },
  ]},
  '/cryptocurrency-exchange-license': { jurisdictions: [
    { reg: 'FIU', name: 'Estonia', badge: 'EU VASP', price: 'From €15,000', timeline: '2–4 months', href: '/cryptocurrency-exchange-license-in-estonia' },
    { reg: 'FNTT', name: 'Lithuania', badge: 'EU VASP', price: 'From €10,000', timeline: '1–3 months', href: '/lithuania-crypto-license' },
    { reg: 'FINMA', name: 'Switzerland', badge: 'Premium', price: 'From CHF 50,000', timeline: '4–8 months', href: '/cryptocurrency-exchange-license-in-switzerland' },
    { reg: 'MFSA', name: 'Malta', badge: 'EU MiCA', price: 'From €25,000', timeline: '6–9 months', href: '/cryptocurrency-license-in-malta' },
  ]},
  '/emi-license': { jurisdictions: [
    { reg: 'FCA', name: 'UK', badge: 'Tier 1', price: 'From £30,000', timeline: '6–12 months', href: '/e-money-license-uk' },
    { reg: 'Bank of Lithuania', name: 'Lithuania', badge: 'EU Passporting', price: 'From €15,000', timeline: '3–6 months', href: '/e-money-license-lithuania' },
    { reg: 'MFSA', name: 'Malta', badge: 'EU Passporting', price: 'From €20,000', timeline: '4–8 months', href: '/e-money-license-malta' },
    { reg: 'FIU', name: 'Estonia', badge: 'EU Digital', price: 'From €15,000', timeline: '3–6 months', href: '/emi-license-in-estonia' },
  ]},
};

const LicensePreviewPanel = ({ jurisdictions, hubHref, go }: { jurisdictions: JurisdictionPreview[]; hubHref: string; go: (href: string) => void }) => (
  <div style={{ animation: "tabFade 0.2s ease-out" }}>
    <span className="block text-[10px] text-[#5A5550] uppercase tracking-[0.1em] mb-4">— Jurisdictions</span>
    {jurisdictions.map((j) => (
      <button
        key={j.href}
        onClick={() => go(j.href)}
        className="group flex items-center justify-between px-3 py-2.5 border-l-2 border-transparent hover:border-[#444CE7] hover:bg-white/[0.03] transition-all duration-150 cursor-pointer w-full text-left bg-transparent"
        style={{ fontFamily: "inherit" }}
      >
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[13px] font-medium text-[#F0EBE0]">{j.name}</span>
            <span className="text-[10px] text-[#444CE7] uppercase tracking-[0.06em]">{j.reg}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#5A5550]">{j.price}</span>
            <span className="text-[11px] text-[#5A5550]">·</span>
            <span className="text-[11px] text-[#5A5550]">{j.timeline}</span>
          </div>
        </div>
        <span className="text-[11px] text-[#444CE7] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </button>
    ))}
    <div className="mt-4 pt-3 border-t border-white/[0.06]">
      <button
        onClick={() => go(hubHref)}
        className="text-[11px] text-[#444CE7] hover:underline cursor-pointer bg-transparent border-0"
        style={{ fontFamily: "inherit" }}
      >
        View all jurisdictions →
      </button>
    </div>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cat, setCat] = useState<Category>("license");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
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

  useEffect(() => {
    const activeIndex = CATS.findIndex(c => c.id === cat);
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      setIndicatorStyle({ left: activeTab.offsetLeft, width: activeTab.offsetWidth });
    }
  }, [cat]);

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

  const currentItems = NAV_DATA[cat].items;

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
        {/* Logo */}
        <Link to="/" className="no-underline" style={{ fontSize: 18, fontWeight: 600 }}>
          <span style={{ color: "#F0EBE0" }}>Inclu</span>
          <span style={{ color: "#444CE7" }}>ence</span>
        </Link>

        {/* Center links — desktop */}
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
          <Link to="/licenses" className={navLinkClass("/licenses")} style={{ fontSize: 14 }}>
            Licenses
          </Link>
          <Link to="/marketplace" className={navLinkClass("/marketplace")} style={{ fontSize: 14 }}>
            Marketplace
          </Link>
          <Link to="/about" className={navLinkClass("/about")} style={{ fontSize: 14 }}>
            About
          </Link>
        </div>

        {/* Contact dropdown + CTA — desktop */}
        <div className="hidden md:flex items-center gap-5">
          {/* Contact dropdown */}
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
                  <a
                    href="https://t.me/incluence"
                    target="_blank"
                    rel="noopener noreferrer"
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

                  <a
                    href="https://wa.me/37281703037"
                    target="_blank"
                    rel="noopener noreferrer"
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

                  <a
                    href="mailto:info@incluence.net"
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
                  <Link
                    to="/contact"
                    onClick={() => setContactOpen(false)}
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

          {/* CTA */}
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
          style={{ background: "#0a0a0a", fontFamily: "Manrope, sans-serif", padding: "24px 24px 48px" }}
        >
          {CATS.map((c) => (
            <div key={c.id} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                {NAV_DATA[c.id].sublabel}
              </div>
              {NAV_DATA[c.id].items.map((item) => (
                <Link key={item.href} to={item.href} onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#F0EBE0", padding: "8px 0" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, marginTop: 8 }}>
            <Link to="/licenses" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "8px 0" }}>Licenses</Link>
            <Link to="/marketplace" onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#9A9590", padding: "8px 0" }}>Marketplace</Link>
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
            @keyframes tabFade {
              from { opacity: 0; transform: translateY(4px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes scanline {
              from { transform: translateX(-100%); }
              to { transform: translateX(400%); }
            }
            @keyframes pd{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.5);opacity:0}}
          `}</style>

          <div className="max-w-screen-xl mx-auto">

            {/* ── TAB BAR ── */}
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0a0a0a" }}>
              <div className="relative flex items-center w-full">
                {CATS.map(({ id, label, Icon }, index) => (
                  <button
                    key={id}
                    ref={(el) => { tabRefs.current[index] = el; }}
                    onMouseEnter={() => setCat(id)}
                    className={`relative flex-1 flex items-center justify-center gap-1.5 py-5 text-[15px] transition-colors duration-200 cursor-pointer bg-transparent border-0 whitespace-nowrap ${
                      cat === id ? "text-[#F0EBE0] font-medium" : "text-[#9A9590] hover:text-[#F0EBE0]"
                    }`}
                    style={{ fontFamily: "inherit" }}
                  >
                    <Icon size={14} />
                    {label}
                  </button>
                ))}

                {/* Animated sliding underline */}
                <div
                  className="absolute bottom-0 h-[2px] bg-[#444CE7] transition-all duration-300 ease-out"
                  style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                  }}
                />
              </div>
            </div>

            {/* ── CONTENT AREA ── */}
            <div className="flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>

              {/* LEFT — Service cards */}
              <div className="flex-1" style={{ background: "#080808", padding: "0" }}>
                <div
                  key={cat}
                  className="grid grid-cols-2"
                  style={{ gap: 1, background: "rgba(255,255,255,0.06)", animation: "tabFade 0.2s ease-out" }}
                >
                  {currentItems.map((item, i) => {
                    const cardRef = (el: HTMLDivElement | null) => {
                      if (!el) return;
                      let timer: ReturnType<typeof setTimeout>;
                      el.onmouseenter = () => {
                        el.style.background = "#0d0d0d";
                        el.classList.remove("scanning");
                        void el.offsetWidth;
                        el.classList.add("scanning");
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                          el.classList.remove("scanning");
                          el.classList.add("scan-done");
                        }, 700);
                      };
                      el.onmouseleave = () => {
                        el.style.background = "#080808";
                        el.classList.remove("scanning", "scan-done");
                        clearTimeout(timer);
                      };
                    };
                    return (
                      <div
                        key={item.href}
                        ref={cardRef}
                        onClick={() => go(item.href)}
                        onMouseEnter={() => setHoveredItem(item.href)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="service-card group relative overflow-hidden cursor-pointer"
                        style={{
                          background: "#080808",
                          padding: "32px 28px",
                          transition: "background 0.3s, border-color 0.3s",
                          backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.03) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      >
                        <div className="scan-line" />

                        {/* Bottom accent border */}
                        <div
                          className="absolute bottom-0 left-0 w-full h-[2px]"
                          style={{
                            background: "#444CE7", transform: "scaleX(0)", transformOrigin: "left",
                            transition: "transform 0.35s ease",
                          }}
                          ref={(el) => {
                            if (!el) return;
                            const parent = el.parentElement!;
                            parent.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
                            parent.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
                          }}
                        />

                        <div className="flex items-center justify-between relative z-10">
                          <span style={{ fontSize: 11, fontWeight: 500, color: "#444CE7", letterSpacing: "0.1em" }}>
                            /{String(i + 1).padStart(2, "0")}
                          </span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A9590" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            className="group-hover:rotate-[-45deg] transition-transform duration-300"
                            style={{ transition: "transform 0.3s, stroke 0.3s" }}
                          >
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </div>

                        <h3 className="relative z-10" style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0", marginTop: 28, marginBottom: 10, lineHeight: 1.3 }}>
                          {item.label}
                        </h3>
                        <p className="relative z-10" style={{ fontSize: 12, color: "#9A9590", lineHeight: 1.7, marginBottom: 16 }}>
                          {item.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10 mt-2">
                          {item.tags.map((tag) => {
                            return tag.href ? (
                              <button
                                key={tag.label}
                                onClick={(e) => { e.stopPropagation(); go(tag.href!); }}
                                className="bg-transparent cursor-pointer hover:border-[#444CE7]/60 hover:text-[#F0EBE0] hover:bg-[#444CE7]/10 transition-all duration-150"
                                style={{
                                  fontSize: 12, color: "#9A9590", padding: "5px 12px",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  fontFamily: "inherit",
                                }}
                              >
                                {tag.label}
                              </button>
                            ) : (
                              <span
                                key={tag.label}
                                style={{
                                  fontSize: 12, color: "#5A5550", padding: "5px 12px",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                }}
                              >
                                {tag.label}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT — Featured sidebar */}
              <div className="flex flex-col gap-3 flex-shrink-0" style={{ width: 280, background: "#0d0d0d", padding: "24px 20px" }}>
                {cat === 'license' && hoveredItem && LICENSE_PREVIEWS[hoveredItem]?.jurisdictions?.length > 0 ? (
                  <LicensePreviewPanel jurisdictions={LICENSE_PREVIEWS[hoveredItem].jurisdictions} hubHref={hoveredItem} go={go} />
                ) : (
                  <>
                    {/* Ready Made Companies */}
                    <button
                      onClick={() => go("/marketplace")}
                      className="relative flex-1 bg-[#0a0a0a] border border-white/[0.06] p-5 text-left cursor-pointer group hover:border-[#444CE7]/25 transition-all duration-200 overflow-hidden"
                      style={{ fontFamily: "inherit" }}
                    >
                      <div className="absolute bottom-0 left-0 h-[1px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute top-0 right-0 w-full h-[1px] bg-[#444CE7]/40" />
                        <div className="absolute top-0 right-0 w-[1px] h-full bg-[#444CE7]/40" />
                      </div>
                      <div className="absolute" style={{ top: 16, right: 16 }}>
                        <NodePulse />
                      </div>
                      <span
                        className="inline-block text-[9px] text-[#444CE7] uppercase tracking-[0.1em] border border-[#444CE7]/30 px-2 py-0.5 mb-3"
                        style={{ background: "rgba(68,76,231,0.08)" }}
                      >
                        Popular
                      </span>
                      <p className="text-[13px] font-semibold text-[#F0EBE0] mb-1.5 pr-6" style={{ margin: 0, marginBottom: 6 }}>Ready Made Companies</p>
                      <p className="text-[11px] text-[#9A9590] leading-relaxed mb-3" style={{ margin: 0, marginBottom: 12 }}>47 companies in 12 jurisdictions. Transfer in 3 days.</p>
                      <span className="text-[11px] text-[#444CE7]">Browse listings →</span>
                    </button>

                    {/* Free Consultation */}
                    <button
                      onClick={() => go("/contact")}
                      className="relative flex-1 bg-[#0a0a0a] border border-white/[0.06] p-5 text-left cursor-pointer group hover:border-[#444CE7]/25 transition-all duration-200 overflow-hidden"
                      style={{ fontFamily: "inherit" }}
                    >
                      <div className="absolute bottom-0 left-0 h-[1px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                      <div className="flex items-center gap-2 mb-3">
                        <div className="relative" style={{ width: 6, height: 6 }}>
                          <div className="absolute inset-0 bg-[#22c55e]" />
                          <div className="absolute inset-0 bg-[#22c55e]" style={{ animation: "pd 2s ease-out infinite" }} />
                        </div>
                        <span className="text-[9px] text-[#22c55e] uppercase tracking-[0.1em]">Available now</span>
                      </div>
                      <p className="text-[13px] font-semibold text-[#F0EBE0] mb-1.5" style={{ margin: 0, marginBottom: 6 }}>Free Consultation</p>
                      <p className="text-[11px] text-[#9A9590] leading-relaxed mb-3" style={{ margin: 0, marginBottom: 12 }}>30-min call with a senior attorney. No obligation.</p>
                      <span className="text-[11px] text-[#444CE7]">Book a slot →</span>
                    </button>
                  </>
                )}
              </div>
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
                {/* Live counter */}
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
