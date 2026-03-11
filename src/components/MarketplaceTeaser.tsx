import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FlagEmoji from "@/components/FlagEmoji";

const listings = [
  {
    flag: "🇬🇧", country: "United Kingdom", type: "LTD Company · Banking included",
    price: "£8,500", badge: "HOT", badgeBg: "rgba(217,32,32,0.15)", badgeBorder: "rgba(217,32,32,0.3)", badgeColor: "#D92020",
  },
  {
    flag: "🇭🇰", country: "Hong Kong", type: "Limited Company",
    price: "$12,000", badge: "PREMIUM", badgeBg: "rgba(68,76,231,0.12)", badgeBorder: "rgba(68,76,231,0.25)", badgeColor: "#444CE7",
  },
  {
    flag: "🇪🇪", country: "Estonia", type: "OÜ (E-Residency)",
    price: "€9,500", badge: "AVAILABLE", badgeBg: "rgba(18,183,106,0.12)", badgeBorder: "rgba(18,183,106,0.3)", badgeColor: "#12B76A",
  },
];

const MarketplaceTeaser = () => (
  <section style={{ background: "#111111", padding: "72px 48px" }}>
    <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
      {/* Left 60% */}
      <motion.div
        className="lg:col-span-3 flex flex-col justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag" style={{ marginBottom: 12 }}>Marketplace</div>
        <h2 style={{
          fontFamily: "Manrope, sans-serif", fontSize: 48, fontWeight: 300,
          color: "#F0EBE0", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20,
        }}>
          Need a company <em style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 300 }}>today</em>?
        </h2>
        <p style={{ fontSize: 15, color: "#9A9590", lineHeight: 1.8, maxWidth: 480, marginBottom: 32 }}>
          Browse our Ready Made Companies — pre-registered legal entities in 12+ jurisdictions,
          ready for immediate transfer. Bank accounts included on select listings.
        </p>

        <div className="flex items-center gap-1.5" style={{ fontSize: 14, marginBottom: 28 }}>
          <span style={{ color: "#444CE7", fontWeight: 500 }}>47 companies</span>
          <span style={{ color: "#5A5550" }}>available now</span>
          <span style={{ color: "#5A5550", margin: "0 6px" }}>·</span>
          <span style={{ color: "#444CE7", fontWeight: 500 }}>12</span>
          <span style={{ color: "#5A5550" }}>jurisdictions</span>
        </div>

        <div>
          <Link
            to="/marketplace"
            className="btn-primary inline-flex items-center gap-2"
            style={{ padding: "14px 28px", fontSize: 12, textDecoration: "none" }}
          >
            Browse Marketplace <ArrowRight size={14} />
          </Link>
          <p style={{ fontSize: 11, color: "#5A5550", marginTop: 12 }}>
            Last updated: March 2026 · New listings weekly
          </p>
        </div>
      </motion.div>

      {/* Right 40% */}
      <motion.div
        className="lg:col-span-2"
        style={{
          background: "#131313",
          border: "1px solid rgba(255,255,255,0.06)",
          padding: 24,
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.04)" }}>
          {listings.map((l) => (
            <div
              key={l.country}
              className="flex items-center justify-between"
              style={{ padding: "16px 20px", background: "#131313" }}
            >
              <div>
                <div className="flex items-center gap-2">
                  <FlagEmoji flag={l.flag} size={16} />
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#F0EBE0" }}>{l.country}</span>
                </div>
                <div style={{ fontSize: 11, color: "#9A9590", marginTop: 2 }}>{l.type}</div>
              </div>
              <div className="flex items-center gap-3">
                <span style={{ fontSize: 15, fontWeight: 600, color: "#F0EBE0" }}>{l.price}</span>
                <span style={{
                  fontSize: 10, fontWeight: 600, padding: "3px 8px", letterSpacing: "0.06em",
                  background: l.badgeBg, border: `1px solid ${l.badgeBorder}`, color: l.badgeColor,
                }}>
                  {l.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/marketplace"
          className="inline-flex items-center gap-1 hover:underline"
          style={{ fontSize: 11, color: "#444CE7", textDecoration: "none", marginTop: 16, fontWeight: 500 }}
        >
          <ArrowRight size={11} /> 44 more listings
        </Link>
      </motion.div>
    </div>
  </section>
);

export default MarketplaceTeaser;
