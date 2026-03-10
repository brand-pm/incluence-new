import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const jurisdictions = [
  { flag: "🇲🇹", country: "Malta", reg: "MGA", license: "Online Gambling License", badge: "EU Regulated", badgeColor: "#12B76A", price: "€25,000", timeline: "6–9 months" },
  { flag: "🇬🇮", country: "Gibraltar", reg: "GBGA", license: "Sports Betting & Casino", badge: "Tier 1", badgeColor: "#444CE7", price: "£25,000", timeline: "4–6 months" },
  { flag: "🇨🇾", country: "Cyprus", reg: "CySEC", license: "Investment Firm (CIF)", badge: "EU Regulated", badgeColor: "#12B76A", price: "€35,000", timeline: "6–12 months" },
  { flag: "🇸🇬", country: "Singapore", reg: "MAS", license: "Payment Service License", badge: "Asia Hub", badgeColor: "#F79009", price: "$30,000", timeline: "6–12 months" },
  { flag: "🇰🇾", country: "Cayman Is.", reg: "CIMA", license: "Investment Fund", badge: "Tax Neutral", badgeColor: "#444CE7", price: "$15,000", timeline: "3–4 months" },
  { flag: "🇦🇪", country: "UAE (DIFC)", reg: "DFSA", license: "Financial Services", badge: "Zero Tax", badgeColor: "#444CE7", price: "$20,000", timeline: "4–8 months" },
];

const JurisdictionCard = ({ j, i }: { j: typeof jurisdictions[0]; i: number }) => (
  <motion.div
    className="group relative overflow-hidden cursor-pointer"
    style={{ background: "#0d0d0d", padding: "28px 24px", transition: "background 0.3s" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.08 }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "#111111")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0d0d")}
  >
    {/* Bottom accent */}
    <div
      className="absolute bottom-0 left-0 w-full h-[2px]"
      style={{ background: "#444CE7", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s ease" }}
      ref={(el) => {
        if (!el) return;
        const p = el.parentElement!;
        p.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
        p.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
      }}
    />

    {/* Top row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="transition-transform duration-300 group-hover:scale-110" style={{ fontSize: 20 }}>{j.flag}</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0" }}>{j.country}</span>
      </div>
      <span style={{
        fontSize: 11, padding: "3px 8px",
        border: `1px solid ${j.badgeColor}40`, color: j.badgeColor,
      }}>
        {j.badge}
      </span>
    </div>

    <div style={{ fontSize: 11, fontWeight: 500, color: "#444CE7", letterSpacing: "0.08em", marginTop: 4, marginBottom: 16 }}>
      {j.reg}
    </div>

    <p style={{ fontSize: 13, color: "#9A9590", marginBottom: 16 }}>{j.license}</p>

    <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

    <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
      <div>
        <span style={{ fontSize: 12, color: "#5A5550" }}>From </span>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0" }}>{j.price}</span>
      </div>
      <span style={{ fontSize: 11, color: "#5A5550" }}>{j.timeline}</span>
    </div>
  </motion.div>
);

const JurisdictionsSection = () => (
  <section style={{ background: "#0d0d0d", padding: "72px 48px" }}>
    <div className="mx-auto max-w-[1280px]">
      <motion.div
        style={{ marginBottom: 56 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag" style={{ marginBottom: 12 }}>Top Jurisdictions</div>
        <h2 style={{
          fontFamily: "Manrope, sans-serif", fontSize: 44, fontWeight: 300,
          color: "#F0EBE0", maxWidth: 600, lineHeight: 1.15, letterSpacing: "-0.02em",
          marginBottom: 20,
        }}>
          The world's most effective licensing locations
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p style={{ fontSize: 16, color: "#9A9590", margin: 0 }}>
            Handpicked for regulatory credibility, cost-efficiency, and banking access.
          </p>
          <Link
            to="/marketplace"
            className="shrink-0 hover:underline"
            style={{ fontSize: 13, color: "#444CE7", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            View all 40+ jurisdictions →
          </Link>
        </div>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
      >
        {jurisdictions.map((j, i) => (
          <JurisdictionCard key={j.country} j={j} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default JurisdictionsSection;
