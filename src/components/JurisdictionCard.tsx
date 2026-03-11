import { motion } from "framer-motion";
import NodePulse from "./NodePulse";
import { FlagEmojiGroup } from "./FlagEmoji";

export interface JurisdictionCardData {
  flag: string;
  country: string;
  reg: string;
  license: string;
  subtitle?: string;
  badge: string;
  badgeColor: string;
  price: string;
  timeline: string;
}

interface JurisdictionCardProps {
  j: JurisdictionCardData;
  i: number;
  pulseDelay?: number;
}

const DELAYS = [0, 0.4, 0.8, 1.2, 1.6, 2.0];

const JurisdictionCard = ({ j, i, pulseDelay }: JurisdictionCardProps) => (
  <motion.div
    className="group relative overflow-hidden cursor-pointer"
    style={{ background: "#0d0d0d", padding: "28px 24px", transition: "background 0.3s" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.08 }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "#111111")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0d0d")}
  >
    {/* Node pulse indicator */}
    <div className="absolute" style={{ top: 16, right: 16 }}>
      <NodePulse delay={pulseDelay ?? DELAYS[i % DELAYS.length]} />
    </div>

    {/* Bottom accent */}
    <div
      className="absolute bottom-0 left-0 w-full h-[2px]"
      style={{ background: "#444CE7", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s ease" }}
      ref={(el) => {
        if (!el) return;
        const p = el.parentElement!;
        p.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
        p.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
      }}
    />

    {/* Top row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FlagEmojiGroup flag={j.flag} size={20} />
        <span style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0" }}>{j.country}</span>
      </div>
      <span style={{
        fontSize: 11, padding: "3px 8px",
        border: `1px solid ${j.badgeColor}40`, color: j.badgeColor,
        marginRight: 24,
      }}>
        {j.badge}
      </span>
    </div>

    <div style={{ fontSize: 11, fontWeight: 500, color: "#444CE7", letterSpacing: "0.08em", marginTop: 4, marginBottom: 16 }}>
      {j.reg}
    </div>

    <p style={{ fontSize: 13, color: "#9A9590", marginBottom: 16 }}>{j.license}</p>

    <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

    <div className="flex items-center justify-between" style={{ marginTop: 16 }}>
      <div>
        <span style={{ fontSize: 12, color: "#5A5550" }}>From </span>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#F0EBE0" }}>{j.price}</span>
      </div>
      <span style={{ fontSize: 11, color: "#5A5550" }}>{j.timeline}</span>
    </div>
  </motion.div>
);

export default JurisdictionCard;
