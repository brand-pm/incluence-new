import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { Shield, CreditCard, Globe, Building2, ChevronDown, Menu, X, MessageCircle, Send, Phone, Mail } from "lucide-react";
import NodePulse from "./NodePulse";

type Category = "license" | "payment" | "intl" | "offshore";

const CATS: { id: Category; label: string; Icon: typeof Shield }[] = [
  { id: "license", Icon: Shield, label: "License" },
  { id: "payment", Icon: CreditCard, label: "Payment Systems" },
  { id: "intl", Icon: Globe, label: "International" },
  { id: "offshore", Icon: Building2, label: "Offshore" },
];

const NAV_DATA: Record<Category, { sublabel: string; items: { href: string; label: string; desc: string; icon: JSX.Element; tags: string[] }[] }> = {
  license: {
    sublabel: "— LICENSING",
    items: [
      { href: "/services/gambling", label: "Gambling License", desc: "Casino, sports betting & poker", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="0"/><circle cx="12" cy="12" r="3"/></svg>, tags: ["Malta", "Curaçao", "Gibraltar", "+9"] },
      { href: "/services/forex", label: "Forex License", desc: "EU & offshore brokerage", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, tags: ["Cyprus", "BVI", "Estonia", "+6"] },
      { href: "/services/crypto", label: "Crypto / VASP", desc: "Exchange, custody & DeFi", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 16.793l-1.86-11.04"/></svg>, tags: ["Estonia", "Lithuania", "UAE", "+5"] },
      { href: "/services/emi", label: "EMI License", desc: "E-money & SEPA access", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="0"/><line x1="2" y1="10" x2="22" y2="10"/></svg>, tags: ["UK", "Lithuania", "Malta", "+3"] },
    ],
  },
  payment: {
    sublabel: "— PAYMENT SYSTEMS",
    items: [
      { href: "/services/payment", label: "Payment Systems", desc: "Full PSP registration", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="0"/><line x1="2" y1="10" x2="22" y2="10"/></svg>, tags: ["PSP", "SEPA", "SWIFT"] },
      { href: "/services/bank-accounts", label: "Bank Accounts", desc: "Corporate accounts in 20+ countries", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>, tags: ["EU", "Asia", "Offshore"] },
      { href: "/services/merchant", label: "Merchant Account", desc: "PSP connections & processing", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>, tags: ["Visa", "MC", "Crypto"] },
    ],
  },
  intl: {
    sublabel: "— INTERNATIONAL OPERATION",
    items: [
      { href: "/services/legal", label: "Business Legitimization", desc: "Legal structures & compliance", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, tags: ["Compliance", "AML", "KYC"] },
      { href: "/services/tax", label: "Tax & Reporting", desc: "Tax planning & transfer pricing", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, tags: ["Transfer pricing", "CFC"] },
      { href: "/services/legal-support", label: "Legal Support", desc: "Ongoing counsel & contracts", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>, tags: ["Contracts", "Disputes"] },
    ],
  },
  offshore: {
    sublabel: "— OFFSHORE & CORPORATE",
    items: [
      { href: "/services/offshore", label: "Offshore Company", desc: "BVI, Cayman, Seychelles, UAE", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg>, tags: ["BVI", "Cayman", "Seychelles"] },
      { href: "/services/company-abroad", label: "Company Registration", desc: "40+ jurisdictions", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, tags: ["UK", "UAE", "HK", "+37"] },
      { href: "/services/funds", label: "Investment Funds", desc: "Fund registration & management", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, tags: ["CySEC", "CIMA", "FSA"] },
      { href: "/services/residence", label: "Residence Permit", desc: "Residency by investment", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, tags: ["UAE", "Portugal", "Malta"] },
      { href: "/services/buy-business", label: "Buy a Business", desc: "International acquisitions", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>, tags: ["EU", "Asia", "Offshore"] },
      { href: "/services/contracts", label: "Int'l Contracts", desc: "Cross-border drafting & review", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, tags: ["Cross-border", "M&A"] },
    ],
  },
};

const PILLS = [
  { label: "Gambling · MGA", href: "/services/gambling" },
  { label: "Estonia · VASP", href: "/services/crypto" },
  { label: "UK · EMI", href: "/services/emi" },
  { label: "BVI · Offshore", href: "/services/offshore" },
];

const quickLinks = [
  { label: "Gambling · MGA", to: "/services/gambling" },
  { label: "Estonia · VASP", to: "/services/crypto" },
  { label: "UK · EMI", to: "/services/emi" },
  { label: "BVI · Offshore", to: "/services/offshore" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("license");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
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
    closeTimer.current = setTimeout(() => setMenuOpen(false), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMobileOpen(false);
  };

  const current = linkData[activeCategory];

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
          {categories.map((cat) => (
            <div key={cat.value} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                {linkData[cat.value].sublabel}
              </div>
              {linkData[cat.value].items.map((item) => (
                <Link key={item.to} to={item.to} onClick={handleLinkClick} className="block no-underline" style={{ fontSize: 14, color: "#F0EBE0", padding: "8px 0" }}>
                  {item.name}
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
          onClick={handleLinkClick}
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
          `}</style>

          <div className="max-w-screen-xl mx-auto">
            <div className="grid gap-px" style={{ gridTemplateColumns: "220px 1fr 300px", background: "rgba(255,255,255,0.05)" }}>

              {/* COL 1 — Categories */}
              <div style={{ background: "#0a0a0a", padding: "28px 0" }}>
                <span className="block" style={{ padding: "0 24px", fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 20 }}>
                  — SERVICES
                </span>
                <div className="flex flex-col">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeCategory === cat.value;
                    return (
                      <button
                        key={cat.value}
                        onMouseEnter={() => setActiveCategory(cat.value)}
                        className="relative flex items-center gap-3 w-full cursor-pointer bg-transparent border-0"
                        style={{
                          padding: "12px 24px",
                          background: isActive ? "rgba(68,76,231,0.07)" : "transparent",
                          fontFamily: "inherit",
                        }}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-0 bottom-0" style={{ width: 2, background: "#444CE7" }} />
                        )}
                        <div
                          className={`w-7 h-7 flex items-center justify-center flex-shrink-0 border ${
                            isActive
                              ? "border-[#444CE7]/40 bg-[#444CE7]/10"
                              : "border-white/[0.08] bg-white/[0.03]"
                          }`}
                        >
                          <Icon size={13} className={isActive ? "text-[#444CE7]" : "text-[#5A5550]"} />
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 500, color: isActive ? "#F0EBE0" : "#9A9590" }}>{cat.label}</span>
                        <ChevronRight
                          size={12}
                          className="ml-auto"
                          style={{ color: isActive ? "#444CE7" : "#5A5550", opacity: isActive ? 1 : 0 }}
                        />
                      </button>
                    );
                  })}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 16, paddingTop: 16, paddingLeft: 24, paddingRight: 24 }}>
                  <div className="flex items-baseline gap-2" style={{ marginBottom: 6 }}>
                    <span style={{ fontSize: 16, fontWeight: 300, color: "#F0EBE0" }}>500+</span>
                    <span style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.06em" }}>Projects</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span style={{ fontSize: 16, fontWeight: 300, color: "#F0EBE0" }}>12 yrs</span>
                    <span style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.06em" }}>Experience</span>
                  </div>
                </div>
              </div>

              {/* COL 2 — Service Links */}
              <div style={{ background: "#080808", padding: "28px 32px" }}>
                <span className="block" style={{ fontSize: 10, color: "#444CE7", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 20 }}>
                  {current.sublabel}
                </span>
                <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
                  {current.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="relative flex flex-col text-left cursor-pointer w-full no-underline group transition-colors duration-150"
                      style={{ background: "#080808", padding: "16px 20px" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(68,76,231,0.04)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "#080808"; }}
                    >
                      <div className="absolute bottom-0 left-0 h-[1px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                      <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#F0EBE0" }}>{item.name}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#444CE7", fontSize: 11, marginLeft: 8 }}>→</span>
                      </div>
                      <span style={{ fontSize: 11, color: "#5A5550", lineHeight: 1.4 }}>{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* COL 3 — Featured */}
              <div className="flex flex-col gap-3" style={{ background: "#0d0d0d", padding: "28px 24px" }}>
                <Link
                  to="/marketplace"
                  className="relative block no-underline text-left cursor-pointer w-full group transition-all duration-200"
                  style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.06)", padding: 20 }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(68,76,231,0.25)"; e.currentTarget.style.background = "#0a0a0a"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "#080808"; }}
                >
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                  <div className="absolute" style={{ top: 16, right: 16 }}>
                    <div className="relative" style={{ width: 12, height: 12 }}>
                      <div className="absolute inset-0" style={{ background: "#444CE7", opacity: 0.8 }} />
                      <div className="absolute inset-0 animate-ping" style={{ background: "#444CE7", opacity: 0.3 }} />
                    </div>
                  </div>
                  <span className="inline-block" style={{ fontSize: 9, color: "#444CE7", textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(68,76,231,0.3)", background: "rgba(68,76,231,0.08)", padding: "2px 8px", marginBottom: 12 }}>
                    Popular
                  </span>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#F0EBE0", margin: "0 0 6px 0", paddingRight: 24 }}>Ready Made Companies</p>
                  <p style={{ fontSize: 11, color: "#9A9590", lineHeight: 1.6, margin: "0 0 12px 0" }}>47 companies in 12 jurisdictions. Transfer in 3 days.</p>
                  <span style={{ fontSize: 11, color: "#444CE7" }}>Browse listings →</span>
                </Link>

                <Link
                  to="/contact"
                  className="relative block no-underline text-left cursor-pointer w-full group transition-all duration-200"
                  style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.06)", padding: 20 }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(68,76,231,0.25)"; e.currentTarget.style.background = "#0a0a0a"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "#080808"; }}
                >
                  <div className="absolute bottom-0 left-0 h-[1px] bg-[#444CE7] w-0 group-hover:w-full transition-all duration-300" />
                  <div className="flex items-center gap-2" style={{ marginBottom: 12 }}>
                    <div style={{ width: 6, height: 6, background: "#22c55e" }} />
                    <span style={{ fontSize: 9, color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.1em" }}>Available now</span>
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#F0EBE0", margin: "0 0 6px 0" }}>Free Consultation</p>
                  <p style={{ fontSize: 11, color: "#9A9590", lineHeight: 1.6, margin: "0 0 12px 0" }}>30-min call with a senior attorney. No obligation.</p>
                  <span style={{ fontSize: 11, color: "#444CE7" }}>Book a slot →</span>
                </Link>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "#080808", padding: "14px 24px" }}
            >
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 10, color: "#5A5550", textTransform: "uppercase", letterSpacing: "0.12em", marginRight: 16 }}>
                  QUICK ACCESS:
                </span>
                {quickLinks.map((q) => (
                  <Link
                    key={q.to}
                    to={q.to}
                    className="no-underline transition-all duration-150"
                    style={{ fontSize: 11, color: "#9A9590", border: "1px solid rgba(255,255,255,0.07)", padding: "4px 12px", background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(68,76,231,0.35)"; e.currentTarget.style.color = "#F0EBE0"; e.currentTarget.style.background = "rgba(68,76,231,0.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#9A9590"; e.currentTarget.style.background = "transparent"; }}
                  >
                    {q.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/licenses/gambling"
                className="no-underline transition-colors"
                style={{ fontSize: 11, color: "#5A5550" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#444CE7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#5A5550"; }}
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
