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

    {/* ─── Live badge — desktop only ─── */}
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

    {/* ═══════ MOBILE layout (< md) ═══════ */}
    <div
      className="absolute inset-0 z-10 flex flex-col justify-end md:hidden"
      style={{ fontFamily: "Manrope, sans-serif", padding: "0 20px 24px" }}
    >
      {/* Tag — line draws in, text slides from left */}
      <motion.div
        className="flex items-center"
        style={{ gap: 8, marginBottom: 12 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
      >
        <motion.span
          style={{ height: 1, background: "#444CE7" }}
          initial={{ width: 0 }}
          animate={{ width: 20 }}
          transition={{ duration: 0.5, ease, delay: 0.5 }}
        />
        <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#444CE7" }}>
          International Legal Services
        </span>
      </motion.div>

      {/* H1 — blur-in + slide up */}
      <motion.h1
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: "clamp(24px, 7vw, 34px)",
          fontWeight: 300, lineHeight: 1.12, letterSpacing: "-0.02em",
          color: "#F0EBE0", margin: 0, marginBottom: 14,
        }}
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease, delay: 0.45 }}
      >
        Legal clarity for businesses that{" "}
        <motion.em
          style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 400, display: "inline-block" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.9 }}
        >
          operate
        </motion.em>
        {" "}beyond borders
      </motion.h1>

      {/* Buttons — staggered entrance */}
      <div className="flex gap-2.5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.7 }}
        >
          <Link
            to="/licenses/gambling"
            className="inline-flex items-center gap-1.5"
            style={{
              background: "#444CE7", color: "#fff",
              padding: "10px 18px", borderRadius: 0,
              fontSize: 10, fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase" as const, textDecoration: "none",
            }}
          >
            Start project <ArrowRight size={11} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.85 }}
        >
          <Link
            to="/marketplace"
            className="inline-flex items-center"
            style={{
              background: "transparent", color: "#9A9590",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "10px 14px", borderRadius: 0,
              fontSize: 10, fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase" as const, textDecoration: "none",
            }}
          >
            Marketplace
          </Link>
        </motion.div>
      </div>

      {/* Stats — line draws in, numbers stagger up */}
      <div className="mt-6">
        <motion.div
          style={{ height: 1, background: "rgba(255,255,255,0.06)" }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 1.0 }}
        />
        <div className="flex justify-between pt-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex-1 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 1.1 + i * 0.12 }}
            >
              <div style={{ fontSize: 20, fontWeight: 300, color: "#F0EBE0", lineHeight: 1 }}>
                {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
              </div>
              <div style={{ fontSize: 8, color: "#5A5550", marginTop: 4, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* ═══════ DESKTOP layout (≥ md) ═══════ */}
    <div
      className="absolute z-10 hidden md:block left-12 bottom-[140px] lg:bottom-[160px]"
      style={{ fontFamily: "Manrope, sans-serif", maxWidth: 520 }}
    >
      <motion.div className="flex items-center" style={{ gap: 10, marginBottom: 16 }} {...fade(0.2)}>
        <span style={{ width: 28, height: 1, background: "#444CE7" }} />
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#444CE7" }}>
          International Legal Services
        </span>
      </motion.div>

      <motion.h1
        className="text-[clamp(36px,4.5vw,64px)]"
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

      <motion.p style={{
        fontSize: 14, color: "#9A9590", lineHeight: 1.7,
        maxWidth: 440, fontWeight: 300, margin: 0, marginBottom: 28,
      }} {...fade(0.6)}>
        From company formation and licensing — VASP, EMI, PSP, Gambling —
        to tax structuring and compliance across 15+ jurisdictions worldwide.
      </motion.p>

      <motion.div className="flex gap-3.5" {...fade(0.8)}>
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

    {/* ─── Stats — desktop only ─── */}
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
  </>
);

export default HeroContent;
