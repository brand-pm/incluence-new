import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { num: "500", suffix: "+", label: "Companies" },
  { num: "40", suffix: "+", label: "Jurisdictions" },
  { num: "12", suffix: " yrs", label: "Experience" },
];

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

const HeroContent = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap');
      @keyframes ping {
        0%   { transform: scale(1); opacity: 0.4; }
        75%, 100% { transform: scale(2.4); opacity: 0; }
      }
    `}</style>

    {/* Live badge — top right (desktop only) */}
    <motion.div
      className="absolute hidden md:flex items-center"
      style={{
        zIndex: 10, top: 88, right: 48,
        background: "rgba(8,8,8,0.72)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(68,76,231,0.22)",
        padding: "11px 18px", gap: 10,
        fontFamily: "Manrope, sans-serif",
      }}
      {...fade(1.2)}
    >
      <div style={{ position: "relative", width: 8, height: 8 }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#12B76A", opacity: 0.4, animation: "ping 1.8s infinite" }} />
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#12B76A" }} />
      </div>
      <span style={{ fontSize: 12 }}>
        <span style={{ color: "#F0EBE0", fontWeight: 500 }}>26 jurisdictions</span>
        <span style={{ color: "#9A9590" }}> · live</span>
      </span>
    </motion.div>

    {/* Hero text */}
    <div
      className="absolute z-10 left-5 right-5 bottom-20 md:left-12 md:right-auto md:bottom-auto md:top-1/2"
      style={{ fontFamily: "Manrope, sans-serif", maxWidth: 560 }}
    >
      <style>{`.hero-text-wrap { transform: none; } @media(min-width:768px) { .hero-text-wrap { transform: translateY(-52%); } }`}</style>
      <div className="hero-text-wrap">
        {/* Tag */}
        <motion.div className="flex items-center" style={{ gap: 10, marginBottom: 16 }} {...fade(0.2)}>
          <span className="hidden sm:inline-block" style={{ width: 28, height: 1, background: "#444CE7" }} />
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#444CE7" }}>
            International Legal Services
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="text-[28px] sm:text-[36px] md:text-[clamp(36px,4.5vw,64px)]"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.025em",
            color: "#F0EBE0", margin: 0, marginBottom: 16,
          }}
          {...fade(0.4)}
        >
          Legal clarity for businesses that{" "}
          <em style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 400 }}>operate</em>
          {" "}beyond borders
        </motion.h1>

        {/* Subline */}
        <motion.p className="hidden sm:block" style={{
          fontSize: 14, color: "#9A9590", lineHeight: 1.7,
          maxWidth: 440, fontWeight: 300, margin: 0, marginBottom: 28,
        }} {...fade(0.6)}>
          From company formation and licensing — VASP, EMI, PSP, Gambling —
          to tax structuring and compliance across 15+ jurisdictions worldwide.
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex flex-wrap gap-2.5 md:gap-3.5" {...fade(0.8)}>
          <Link
            to="/licenses/gambling"
            className="inline-flex items-center gap-2"
            style={{
              background: "#444CE7", color: "#fff",
              padding: "12px 24px", borderRadius: 0,
              fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
              textTransform: "uppercase" as const, textDecoration: "none",
            }}
          >
            Start your project <ArrowRight size={13} />
          </Link>
          <Link
            to="/marketplace"
            className="inline-flex items-center"
            style={{
              background: "transparent", color: "#9A9590",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "12px 20px", borderRadius: 0,
              fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
              textTransform: "uppercase" as const, textDecoration: "none",
            }}
          >
            View Marketplace
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Stats — desktop */}
    <motion.div
      className="absolute hidden lg:flex items-end"
      style={{ zIndex: 10, right: 48, bottom: 72, fontFamily: "Manrope, sans-serif" }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 1.0 }}
    >
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="text-right">
            <div style={{ fontSize: 28, fontWeight: 300, color: "#F0EBE0" }}>
              {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: 11, color: "#5A5550", marginTop: 6, textTransform: "uppercase" as const, letterSpacing: "0.07em" }}>
              {s.label}
            </div>
          </div>
          {i < stats.length - 1 && (
            <div style={{ width: 1, height: 42, background: "rgba(255,255,255,0.08)", margin: "0 28px" }} />
          )}
        </div>
      ))}
    </motion.div>

    {/* Stats — mobile */}
    <motion.div
      className="absolute flex lg:hidden justify-center w-full"
      style={{ zIndex: 10, bottom: 12, fontFamily: "Manrope, sans-serif" }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.9 }}
    >
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="text-center px-3">
            <div style={{ fontSize: 18, fontWeight: 300, color: "#F0EBE0" }}>
              {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: 9, color: "#5A5550", marginTop: 2, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
              {s.label}
            </div>
          </div>
          {i < stats.length - 1 && (
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.08)" }} />
          )}
        </div>
      ))}
    </motion.div>
  </>
);

export default HeroContent;
