import { motion } from "framer-motion";

const partners = [
  { name: "nebeus", domain: "nebeus.com" },
  { name: "B5", domain: "b5.com" },
  { name: "n5bank", domain: "n5bank.com" },
  { name: "Avitar", domain: "avitar.legal" },
];

const PartnersSection = () => (
  <section style={{ background: "#0d0d0d", padding: "64px 48px" }}>
    <div className="mx-auto max-w-[1280px]">
      <div className="section-tag" style={{ marginBottom: 12 }}>Trusted By</div>
      <p style={{ fontSize: 16, color: "#9A9590", marginBottom: 40 }}>
        Our partners and integrations
      </p>

      <div className="flex flex-wrap justify-around items-center" style={{ gap: 48 }}>
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            className="text-center"
            style={{
              background: "#131313",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "20px 32px",
              minWidth: 180,
              filter: "grayscale(100%) brightness(1.8) opacity(0.5)",
              transition: "filter 0.3s",
              cursor: "pointer",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%) brightness(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) brightness(0.7)")}
          >
            <div style={{ fontSize: 18, fontWeight: 600, color: "#F0EBE0" }}>{p.name}</div>
            <div style={{ fontSize: 11, color: "#5A5550", marginTop: 4 }}>{p.domain}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
