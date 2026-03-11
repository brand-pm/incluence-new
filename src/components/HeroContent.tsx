import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { num: "500", suffix: "+", label: "Companies" },
  { num: "40", suffix: "+", label: "Jurisdictions" },
  { num: "12", suffix: " yrs", label: "Experience" },
];

const serviceTags = [
  "VASP License",
  "EMI / PSP",
  "Gambling License",
  "Offshore Company",
  "Fund Registration",
  "Crypto Regulation",
];

const jurisdictions = [
  { flag: "🇬🇧", name: "UK", reg: "FCA" },
  { flag: "🇲🇹", name: "Malta", reg: "MGA" },
  { flag: "🇨🇾", name: "Cyprus", reg: "CySEC" },
  { flag: "🇸🇬", name: "Singapore", reg: "MAS" },
  { flag: "🇭🇰", name: "Hong Kong", reg: "SFC" },
  { flag: "🇦🇪", name: "UAE", reg: "DFSA" },
];

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

const FONT = "Manrope, sans-serif";

const HeroContent = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap');
      @keyframes ping {
        0%   { transform: scale(1); opacity: 0.4; }
        75%, 100% { transform: scale(2.4); opacity: 0; }
      }
      .service-tag { border: 1px solid rgba(68,76,231,0.3); color: #9A9590; transition: all 0.2s; }
      .service-tag:hover { border-color: #444CE7; color: #F0EBE0; }
    `}</style>

    {/* ─── Live badge — desktop only ─── */}
    <motion.div
      className="absolute hidden md:flex items-center"
      style={{
        zIndex: 10, top: 88, right: 48,
        background: "rgba(8,8,8,0.72)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(68,76,231,0.22)",
        padding: "11px 18px", gap: 10, fontFamily: FONT,
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
      style={{ fontFamily: FONT, padding: "0 20px 24px" }}
    >
      <motion.div className="flex items-center" style={{ gap: 8, marginBottom: 12 }}
        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
      >
        <motion.span style={{ height: 1, background: "#444CE7" }}
          initial={{ width: 0 }} animate={{ width: 20 }}
          transition={{ duration: 0.5, ease, delay: 0.5 }}
        />
        <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444CE7" }}>
          International Legal Services
        </span>
      </motion.div>

      <motion.h1 style={{
        fontFamily: FONT, fontSize: "clamp(22px, 6.5vw, 30px)",
        fontWeight: 300, lineHeight: 1.12, letterSpacing: "-0.02em",
        color: "#F0EBE0", margin: 0, marginBottom: 12,
      }}
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease, delay: 0.45 }}
      >
        Legal structure, licensing & compliance for businesses{" "}
        <motion.em style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 400, display: "inline-block" }}
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.9 }}
        >operating</motion.em>{" "}beyond borders
      </motion.h1>

      {/* Service tags — mobile */}
      <motion.div className="flex flex-wrap gap-1.5" style={{ marginBottom: 14 }} {...fade(0.65)}>
        {serviceTags.slice(0, 4).map(t => (
          <span key={t} className="service-tag" style={{ fontSize: 9, padding: "4px 10px", fontFamily: FONT }}>{t}</span>
        ))}
      </motion.div>

      <div className="flex gap-2.5">
        <motion.div {...fade(0.7)}>
          <Link to="/licenses/gambling" className="inline-flex items-center gap-1.5"
            style={{ background: "#444CE7", color: "#fff", padding: "10px 18px", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
            Start project <ArrowRight size={11} />
          </Link>
        </motion.div>
        <motion.div {...fade(0.85)}>
          <Link to="/marketplace" className="inline-flex items-center"
            style={{ background: "transparent", color: "#9A9590", border: "1px solid rgba(255,255,255,0.1)", padding: "10px 14px", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
            Marketplace
          </Link>
        </motion.div>
      </div>

      {/* Stats — mobile */}
      <div className="mt-5">
        <motion.div style={{ height: 1, background: "rgba(255,255,255,0.06)" }}
          initial={{ scaleX: 0, transformOrigin: "left" }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 1.0 }}
        />
        <div className="flex justify-between pt-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="flex-1 text-center"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 1.1 + i * 0.12 }}
            >
              <div style={{ fontSize: 18, fontWeight: 300, color: "#F0EBE0", lineHeight: 1 }}>
                {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
              </div>
              <div style={{ fontSize: 8, color: "#5A5550", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* ═══════ DESKTOP layout (≥ md) ═══════ */}
    {/* Left-edge dark gradient backdrop for text readability */}
    <div className="absolute inset-0 z-[5] hidden md:block pointer-events-none" style={{
      background: "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.7) 38%, transparent 62%)",
    }} />

    <div
      className="absolute z-10 hidden md:flex flex-col"
      style={{
        fontFamily: FONT,
        left: 48, top: "50%", transform: "translateY(-50%)",
        maxWidth: 520,
      }}
    >
      <motion.div className="flex items-center" style={{ gap: 10, marginBottom: 16 }} {...fade(0.2)}>
        <span style={{ width: 28, height: 1, background: "#444CE7" }} />
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#444CE7" }}>
          International Legal Services
        </span>
      </motion.div>

      <motion.h1 style={{
        fontFamily: FONT,
        fontSize: "clamp(30px, 3.5vw, 52px)",
        fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.03em",
        color: "#F0EBE0", margin: 0, marginBottom: 14,
      }} {...fade(0.4)}>
        Legal clarity for{" "}
        <br className="hidden xl:inline" />
        businesses that{" "}
        <em style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 400 }}>operate</em>
        {" "}beyond borders
      </motion.h1>

      <motion.p style={{
        fontSize: 14, color: "#9A9590", lineHeight: 1.7,
        maxWidth: 440, fontWeight: 300, margin: 0, marginBottom: 20,
      }} {...fade(0.6)}>
        From company formation and licensing — VASP, EMI, PSP, Gambling —
        to tax structuring and compliance across 15+ jurisdictions worldwide.
      </motion.p>

      {/* Service tags */}
      <motion.div className="flex flex-wrap" style={{ gap: 8, marginBottom: 28 }} {...fade(0.7)}>
        {serviceTags.map(t => (
          <span key={t} className="service-tag" style={{ fontSize: 11, padding: "5px 12px", fontFamily: FONT, cursor: "default" }}>{t}</span>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex gap-3.5" style={{ marginBottom: 32 }} {...fade(0.8)}>
        <Link to="/licenses/gambling" className="inline-flex items-center gap-2"
          style={{ background: "#444CE7", color: "#fff", padding: "12px 24px", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
          Start your project <ArrowRight size={13} />
        </Link>
        <Link to="/marketplace" className="inline-flex items-center"
          style={{ background: "transparent", color: "#9A9590", border: "1px solid rgba(255,255,255,0.1)", padding: "12px 20px", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
          View Marketplace
        </Link>
      </motion.div>

      {/* Jurisdiction quick-list */}
      <motion.div {...fade(1.0)}>
        <div className="flex flex-wrap" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
          {jurisdictions.map(j => (
            <div key={j.name} style={{
              padding: "10px 16px",
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ fontSize: 11, color: "#9A9590", fontFamily: FONT }}>
                {j.flag} {j.name}
              </div>
              <div style={{ fontSize: 10, color: "#444CE7", fontFamily: FONT, marginTop: 2 }}>
                {j.reg}
              </div>
            </div>
          ))}
        </div>
        <Link to="/marketplace" className="inline-flex items-center gap-1" style={{
          fontSize: 11, color: "#444CE7", textDecoration: "none", marginTop: 10, fontFamily: FONT, fontWeight: 500,
        }}>
          <ArrowRight size={11} /> View all 15 jurisdictions
        </Link>
      </motion.div>
    </div>

    {/* ─── Stats — desktop only (smaller) ─── */}
    <motion.div
      className="absolute hidden lg:flex items-end"
      style={{ zIndex: 10, right: 48, bottom: 48, fontFamily: FONT }}
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 1.0 }}
    >
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="text-right">
            <div style={{ fontSize: 22, fontWeight: 300, color: "#F0EBE0" }}>
              {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
            </div>
            <div style={{ fontSize: 10, color: "#5A5550", marginTop: 5, textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.label}</div>
          </div>
          {i < stats.length - 1 && (
            <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)", margin: "0 22px" }} />
          )}
        </div>
      ))}
    </motion.div>
  </>
);

export default HeroContent;
