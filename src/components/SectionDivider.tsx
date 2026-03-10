const SectionDivider = () => (
  <div
    className="flex items-center w-full"
    style={{ padding: "0 48px" }}
  >
    <div className="flex-1" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
    <div style={{ width: 4, height: 4, background: "#444CE7", margin: "0 16px", flexShrink: 0 }} />
    <div className="flex-1" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
  </div>
);

export default SectionDivider;
