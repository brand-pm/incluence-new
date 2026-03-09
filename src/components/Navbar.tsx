import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", path: "/" },
  { label: "Licenses", path: "/licenses/gambling" },
  { label: "Marketplace", path: "/marketplace" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl" style={{ height: "var(--nav-height)" }}>
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between" style={{ padding: "0 var(--space-12)" }}>
        <Link to="/" className="text-xl font-semibold tracking-tight">
          <span className="text-foreground">Inclu</span>
          <span className="text-gold">ence</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-nav transition-colors hover:text-gold ${
                location.pathname === link.path ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/"
            className="border border-gold-border text-body-sm font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground"
            style={{ padding: "var(--space-2) var(--space-5)" }}
          >
            Start a Project
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden" style={{ padding: "var(--space-4) var(--space-6)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block text-nav text-muted-foreground hover:text-gold"
              style={{ padding: "var(--space-3) 0" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="inline-block border border-gold-border text-body-sm font-medium text-gold"
            style={{ marginTop: "var(--space-3)", padding: "var(--space-2) var(--space-5)" }}
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
