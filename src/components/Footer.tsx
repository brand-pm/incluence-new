import { Link } from "react-router-dom";

const sectionPad = { padding: "var(--space-24) var(--space-12)" };

const Footer = () => (
  <footer className="border-t border-border bg-surface" style={sectionPad}>
    <div className="mx-auto grid max-w-[1280px] grid-cols-1 md:grid-cols-4" style={{ gap: "var(--space-12)" }}>
      <div>
        <div className="text-xl font-semibold" style={{ marginBottom: "var(--space-4)" }}>
          <span className="text-foreground">Inclu</span>
          <span className="text-gold">ence</span>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Legal clarity for businesses that operate beyond borders. Licensing, incorporation, and banking solutions worldwide.
        </p>
      </div>

      <div>
        <h4 className="text-label text-muted-foreground" style={{ marginBottom: "var(--space-5)" }}>Services</h4>
        <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {["Company Incorporation", "Licensing", "Bank Account Opening", "Offshore Solutions", "Compliance & AML", "Legal Advisory"].map((s) => (
            <li key={s}><Link to="/" className="text-body-sm text-foreground/70 hover:text-gold transition-colors">{s}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-label text-muted-foreground" style={{ marginBottom: "var(--space-5)" }}>Jurisdictions</h4>
        <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {["Malta", "Cyprus", "Estonia", "Gibraltar", "Belize", "Curaçao", "UK", "Hong Kong"].map((s) => (
            <li key={s}><Link to="/licenses/gambling" className="text-body-sm text-foreground/70 hover:text-gold transition-colors">{s}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-label text-muted-foreground" style={{ marginBottom: "var(--space-5)" }}>Company</h4>
        <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {["About Us", "Contact", "Blog", "Careers", "Privacy Policy", "Terms of Service"].map((s) => (
            <li key={s}><Link to="/" className="text-body-sm text-foreground/70 hover:text-gold transition-colors">{s}</Link></li>
          ))}
        </ul>
        <div className="text-body-xs text-muted-foreground" style={{ marginTop: "var(--space-8)" }}>
          <p>Registered in Hong Kong</p>
          <p>& United Kingdom</p>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-[1280px] border-t border-border text-body-xs text-muted-foreground flex flex-col md:flex-row justify-between" style={{ marginTop: "var(--space-16)", paddingTop: "var(--space-8)", gap: "var(--space-4)" }}>
      <p>© 2026 Incluence. All rights reserved.</p>
      <p>Legal consulting services. Not a law firm.</p>
    </div>
  </footer>
);

export default Footer;
