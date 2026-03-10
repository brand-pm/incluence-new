interface NodePulseProps {
  delay?: number;
  className?: string;
}

const NodePulse = ({ delay = 0, className = "" }: NodePulseProps) => (
  <div className={className} style={{ width: 16, height: 16, position: "relative" }}>
    {/* Outer pulse ring */}
    <span
      className="jurisdiction-pulse-ring"
      style={{ animationDelay: `${delay}s` }}
    />
    {/* Inner solid dot */}
    <span className="jurisdiction-node-dot" />
  </div>
);

export default NodePulse;
