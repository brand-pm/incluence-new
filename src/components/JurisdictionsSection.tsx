import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JurisdictionCard from "./JurisdictionCard";
import type { JurisdictionCardData } from "./JurisdictionCard";

const jurisdictions: JurisdictionCardData[] = [
  { flag: "🇲🇹", country: "Malta", reg: "MGA", license: "Online Gambling License", subtitle: "EU Online Gambling License (MGA)", badge: "EU Regulated", badgeColor: "#12B76A", price: "€25,000", timeline: "6–9 months" },
  { flag: "🇬🇮", country: "Gibraltar", reg: "GBGA", license: "Sports Betting & Casino", subtitle: "Tier 1 Gambling License", badge: "Tier 1", badgeColor: "#444CE7", price: "£25,000", timeline: "4–6 months" },
  { flag: "🇨🇾", country: "Cyprus", reg: "CySEC", license: "Investment Firm (CIF)", subtitle: "CySEC Investment Firm License", badge: "EU Regulated", badgeColor: "#12B76A", price: "€35,000", timeline: "6–12 months" },
  { flag: "🇸🇬", country: "Singapore", reg: "MAS", license: "Payment Service License", subtitle: "Payment Services License (MAS)", badge: "Asia Hub", badgeColor: "#F79009", price: "$30,000", timeline: "6–12 months" },
  { flag: "🇰🇾", country: "Cayman Is.", reg: "CIMA", license: "Investment Fund", subtitle: "Investment Fund Registration", badge: "Tax Neutral", badgeColor: "#444CE7", price: "$15,000", timeline: "3–4 months" },
  { flag: "🇦🇪", country: "UAE (DIFC)", reg: "DFSA", license: "Financial Services", subtitle: "Financial Services License", badge: "Zero Tax", badgeColor: "#444CE7", price: "$20,000", timeline: "4–8 months" },
];

const JurisdictionsSection = () => (
  <section style={{ background: "#0d0e18", padding: "72px 48px" }}>
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
          marginBottom: 8,
        }}>
          The world's most effective licensing locations
        </h2>
        {/* Accent underline */}
        <div style={{
          width: 80,
          height: 2,
          background: "linear-gradient(90deg, #444CE7, transparent)",
          marginBottom: 20,
        }} />
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
