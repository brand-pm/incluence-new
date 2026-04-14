import { motion } from "framer-motion";
import MicroParticles from "./MicroParticles";

const stats = [
  { num: "500", suffix: "+", label: "Licensed Companies" },
  { num: "40", suffix: "+", label: "Jurisdictions Covered" },
  { num: "€2", suffix: "M", label: "Saved for Clients" },
  { num: "9", suffix: " yrs", label: "Legal Experience" },
  { num: "39", suffix: "+", label: "Bank Accounts Opened" },
  { num: "98", suffix: "%", label: "Client Satisfaction" },
];

const StatsBar = () => (
  <section className="relative px-5 py-10 md:p-12" style={{
    background: "linear-gradient(135deg, #1a1d4d 0%, #141638 50%, #1a1d4d 100%)",
    borderTop: "1px solid hsl(233 84% 60% / 0.25)",
    borderBottom: "1px solid hsl(233 84% 60% / 0.25)",
  }}>
    <MicroParticles />
    <div className="mx-auto max-w-[1280px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-0 relative" style={{ zIndex: 1 }}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="text-center"
          style={{
            padding: "0 12px",
            borderRight: "none",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <div style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300, color: "#F0EBE0", fontFamily: "Manrope, sans-serif", lineHeight: 1 }}>
            {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
          </div>
          <div style={{ fontSize: 11, color: "#5A5550", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8 }}>
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsBar;
