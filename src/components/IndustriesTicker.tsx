const row1 = [
  "Blockchain", "FinTech", "E-Commerce", "Gambling & Gaming", "Forex Brokerage",
  "Crypto Exchange", "Digital Assets", "Online Payments", "Dating Platforms", "iGaming",
  "VASP License", "EMI License", "PSP License", "Company Formation", "Tax Structuring",
  "Bank Account Opening", "Merchant Account", "Fund Registration", "Compliance AML", "Legal Support",
];
const row2 = [
  "VASP License", "EMI License", "PSP License", "Company Formation", "Tax Structuring",
  "Bank Account Opening", "Merchant Account", "Fund Registration", "Compliance AML", "Legal Support",
];

const TickerRow = ({ items, duration, reverse }: { items: string[]; duration: number; reverse?: boolean }) => {
  const doubled = [...items, ...items, ...items, ...items];
  const dir = reverse ? "reverse" : "normal";
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0"
        style={{
          animation: `tickerScroll ${duration}s linear infinite`,
          animationDirection: dir,
        }}
      >
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center shrink-0" style={{ padding: "0 32px", gap: 8 }}>
            <div
              style={{
                width: 4, height: 4, background: "#444CE7", opacity: 0.7,
                transform: "rotate(45deg)", flexShrink: 0,
              }}
            />
            <span style={{
              fontSize: 13, fontWeight: 500, color: "#9A9590",
              letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap",
            }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustriesTicker = () => (
  <>
    <style>{`
      @keyframes tickerScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
    <section
      style={{
        background: "#080808",
        padding: "24px 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <TickerRow items={row1} duration={35} />
        <TickerRow items={row2} duration={45} reverse />
      </div>
    </section>
  </>
);

export default IndustriesTicker;
