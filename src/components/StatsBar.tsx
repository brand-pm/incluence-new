import { motion } from "framer-motion";

const stats = [
  { num: "500", suffix: "+", label: "Companies Registered" },
  { num: "40", suffix: "+", label: "Jurisdictions Covered" },
  { num: "€2", suffix: "M", label: "Saved for Clients" },
  { num: "12", suffix: " yrs", label: "Legal Experience" },
  { num: "39", suffix: "+", label: "Bank Accounts Opened" },
  { num: "98", suffix: "%", label: "Client Satisfaction" },
];

const StatsBar = () => (
  <section style={{
    background: "#080808",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "48px",
  }}>
    <div className="mx-auto max-w-[1280px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="text-center"
          style={{
            padding: "0 24px",
            borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <div style={{ fontSize: 36, fontWeight: 300, color: "#F0EBE0", fontFamily: "Manrope, sans-serif", lineHeight: 1 }}>
            {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
          </div>
          <div style={{ fontSize: 11, color: "#5A5550", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsBar;
