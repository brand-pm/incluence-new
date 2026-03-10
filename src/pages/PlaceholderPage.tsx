import { Link } from "react-router-dom";

const PlaceholderPage = ({ title }: { title: string }) => (
  <section style={{ background: "#080808", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "96px 48px" }}>
    <div style={{ textAlign: "center" }}>
      <div className="section-tag" style={{ marginBottom: 16, display: "inline-block" }}>— COMING SOON</div>
      <h1 style={{ fontSize: 40, fontWeight: 300, color: "hsl(var(--foreground))", marginBottom: 16, fontFamily: "Manrope, sans-serif" }}>{title}</h1>
      <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", marginBottom: 32 }}>This page is being built.</p>
      <Link
        to="/"
        style={{ padding: "10px 24px", fontSize: 13, border: "1px solid rgba(255,255,255,0.08)", color: "hsl(var(--muted-foreground))", textDecoration: "none", display: "inline-block", transition: "border-color 0.2s, color 0.2s" }}
        className="hover:!text-foreground hover:!border-primary"
      >
        ← Back to Home
      </Link>
    </div>
  </section>
);

export default PlaceholderPage;
