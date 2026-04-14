const SectionDivider = () => (
  <div
    className="relative w-full"
    style={{ background: "#0a0a0a", height: 1 }}
  >
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(90deg, transparent 0%, hsl(233 84% 60% / 0.4) 50%, transparent 100%)",
      }}
    />
  </div>
);

export default SectionDivider;
