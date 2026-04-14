import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useCallback } from "react";

export interface ServiceCardData {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

interface ServiceCardProps {
  svc: ServiceCardData;
  i: number;
}

const ServiceCard = ({ svc, i }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.background = "#0d0d0d";
    el.classList.remove("scanning");
    void el.offsetWidth;
    el.classList.add("scanning");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      el.classList.remove("scanning");
      el.classList.add("scan-done");
    }, 700);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.background = "#080808";
    el.classList.remove("scanning", "scan-done");
    clearTimeout(timerRef.current);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="service-card group relative overflow-hidden"
      style={{
        background: "#080808",
        padding: "36px 32px",
        transition: "background 0.3s, border-color 0.3s",
        backgroundImage: "radial-gradient(circle, rgba(68,76,231,0.03) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="scan-line" />

      {/* Bottom accent border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{
          background: "#444CE7", transform: "scaleX(0)", transformOrigin: "left",
          transition: "transform 0.35s ease",
        }}
        ref={(el) => {
          if (!el) return;
          const parent = el.parentElement!;
          parent.addEventListener("mouseenter", () => (el.style.transform = "scaleX(1)"));
          parent.addEventListener("mouseleave", () => (el.style.transform = "scaleX(0)"));
        }}
      />

      <div className="flex items-center justify-between relative z-10">
        <span style={{ fontSize: 11, fontWeight: 500, color: "#444CE7", letterSpacing: "0.1em" }}>
          {svc.num}
        </span>
        <ArrowRight
          size={18}
          style={{ color: "#9A9590", transition: "transform 0.3s, color 0.3s" }}
          className="group-hover:rotate-[-45deg] group-hover:text-foreground"
        />
      </div>

      <h3 className="relative z-10" style={{ fontSize: 17, fontWeight: 600, color: "#F0EBE0", marginTop: 24, marginBottom: 12 }}>
        {svc.title}
      </h3>
      <p className="relative z-10" style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.7, marginBottom: 20 }}>
        {svc.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 relative z-10">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11, color: "#5A5550", padding: "3px 8px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
