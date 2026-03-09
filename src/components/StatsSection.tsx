const stats = [
  { value: "500+", label: "Companies Licensed" },
  { value: "€200M+", label: "Client Revenue Protected" },
  { value: "1,200+", label: "Projects Completed" },
  { value: "12 yrs", label: "Industry Experience" },
];

const StatsSection = () => (
  <section className="border-y border-border">
    <div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4">
      {stats.map(s => (
        <div key={s.label} className="border-r border-border last:border-r-0 text-center" style={{ padding: "var(--space-16) var(--space-8)" }}>
          <div className="text-display-md text-primary" style={{ marginBottom: "var(--space-2)" }}>{s.value}</div>
          <div className="text-label text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
