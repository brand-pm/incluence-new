const partners = ["Nebeus", "Bankstore", "N5Bank", "Avitar Legal"];
const sectionPad = { padding: "var(--space-24) var(--space-12)" };

const PartnersSection = () => (
  <section style={sectionPad}>
    <div className="mx-auto max-w-[1280px]">
      <div className="section-tag justify-center" style={{ marginBottom: "var(--space-10)" }}>Trusted Partners</div>
      <div className="flex flex-wrap justify-center" style={{ gap: "var(--space-16)" }}>
        {partners.map(p => (
          <div key={p} className="text-display-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
