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
      <div style={{ marginBottom: "var(--space-16)" }}>
        <div className="section-tag" style={{ marginBottom: "var(--space-3)" }}>How It Works</div>
        <h2 className="text-display-lg">Our Process</h2>
      </div>
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
        {steps.map(p => (
          <div key={p.step} className="card-hover bg-card" style={cardPad}>
            <span className="text-display-lg text-primary/30">{p.step}</span>
            <h3 className="text-display-xs" style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-3)" }}>{p.title}</h3>
            <p className="text-body-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
