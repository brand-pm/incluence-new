import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-surface py-24 px-6 lg:px-12">
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-4">
      <div>
        <div className="text-xl font-semibold mb-4">
          <span className="text-foreground">Inclu</span>
          <span className="text-gold">ence</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Legal clarity for businesses that operate beyond borders. Licensing, incorporation, and banking solutions worldwide.
        </p>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Services</h4>
        <ul className="space-y-3 text-sm">
          {["Company Incorporation", "Licensing", "Bank Account Opening", "Offshore Solutions", "Compliance & AML", "Legal Advisory"].map((s) => (
            <li key={s}><Link to="/" className="text-foreground/70 hover:text-gold transition-colors">{s}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Jurisdictions</h4>
        <ul className="space-y-3 text-sm">
          {["Malta", "Cyprus", "Estonia", "Gibraltar", "Belize", "Curaçao", "UK", "Hong Kong"].map((s) => (
            <li key={s}><Link to="/licenses/gambling" className="text-foreground/70 hover:text-gold transition-colors">{s}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Company</h4>
        <ul className="space-y-3 text-sm">
          {["About Us", "Contact", "Blog", "Careers", "Privacy Policy", "Terms of Service"].map((s) => (
            <li key={s}><Link to="/" className="text-foreground/70 hover:text-gold transition-colors">{s}</Link></li>
          ))}
        </ul>
        <div className="mt-8 text-xs text-muted-foreground">
          <p>Registered in Hong Kong</p>
          <p>& United Kingdom</p>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-[1400px] mt-16 pt-8 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
      <p>© 2026 Incluence. All rights reserved.</p>
      <p>Legal consulting services. Not a law firm.</p>
    </div>
  </footer>
);

export default Footer;
