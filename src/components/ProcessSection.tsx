import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Consultation", desc: "We analyze your business model and identify the optimal jurisdiction and license type." },
  { step: "02", title: "Assessment", desc: "Detailed regulatory assessment, cost estimation, and timeline planning." },
  { step: "03", title: "Execution", desc: "Document preparation, application filing, and communication with regulators." },
  { step: "04", title: "Ongoing Support", desc: "Post-licensing compliance, renewals, and regulatory reporting assistance." },
];

const sectionPad = { padding: "var(--space-24) var(--space-12)" };
const cardPad = { padding: "var(--space-10) var(--space-10)" };

const ProcessSection = () => (
  <section className="bg-surface" style={sectionPad}>
    <div className="mx-auto max-w-[1280px]">
      <motion.div
        style={{ marginBottom: "var(--space-16)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag" style={{ marginBottom: "var(--space-3)" }}>How It Works</div>
        <h2 className="text-display-lg">Our Process</h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
        {steps.map((p, i) => (
          <motion.div
            key={p.step}
            className="card-hover bg-card"
            style={cardPad}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-display-lg text-primary/30">{p.step}</span>
            <h3 className="text-display-xs" style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-3)" }}>{p.title}</h3>
            <p className="text-body-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
