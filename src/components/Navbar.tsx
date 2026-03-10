import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { Shield, CreditCard, Globe, Building2, ChevronRight, ChevronDown, Menu, X, MessageCircle, Send, Phone, Mail } from "lucide-react";

type Category = "license" | "payment" | "intl" | "offshore";

const categories: { value: Category; icon: typeof Shield; label: string }[] = [
  { value: "license", icon: Shield, label: "License" },
  { value: "payment", icon: CreditCard, label: "Payment Systems" },
  { value: "intl", icon: Globe, label: "International Operation" },
  { value: "offshore", icon: Building2, label: "Offshore & Corporate" },
];

const linkData: Record<Category, { sublabel: string; items: { to: string; name: string; desc: string }[] }> = {
  license: {
    sublabel: "— LICENSING",
    items: [
      { to: "/services/gambling", name: "Gambling License", desc: "Casino, sports betting & poker" },
      { to: "/services/forex", name: "Forex License", desc: "EU & offshore brokerage" },
      { to: "/services/crypto", name: "Crypto / VASP", desc: "Exchange, custody & DeFi" },
      { to: "/services/emi", name: "EMI License", desc: "E-money & SEPA access" },
    ],
  },
  payment: {
    sublabel: "— PAYMENT SYSTEMS",
    items: [
      { to: "/services/payment", name: "Payment Systems", desc: "Full PSP registration" },
      { to: "/services/bank-accounts", name: "Bank Accounts", desc: "Corporate accounts in 20+ countries" },
      { to: "/services/merchant", name: "Merchant Account", desc: "PSP connections & processing" },
    ],
  },
  intl: {
    sublabel: "— INTERNATIONAL OPERATION",
    items: [
      { to: "/services/legal", name: "Business Legitimization", desc: "Legal structures & compliance" },
      { to: "/services/tax", name: "Tax & Reporting", desc: "Tax planning & transfer pricing" },
      { to: "/services/legal-support", name: "Legal Support", desc: "Ongoing counsel & contracts" },
    ],
  },
  offshore: {
    sublabel: "— OFFSHORE & CORPORATE",
    items: [
      { to: "/services/offshore", name: "Offshore Company", desc: "BVI, Cayman, Seychelles, UAE" },
      { to: "/services/company-abroad", name: "Company Registration", desc: "40+ jurisdictions" },
      { to: "/services/funds", name: "Investment Funds", desc: "Fund registration & management" },
      { to: "/services/residence", name: "Residence Permit", desc: "Residency by investment" },
      { to: "/services/buy-business", name: "Buy a Business", desc: "International acquisitions" },
      { to: "/services/contracts", name: "Int'l Contracts", desc: "Cross-border drafting & review" },
    ],
  },
};

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
