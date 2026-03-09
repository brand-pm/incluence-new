import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { num: "500", suffix: "+", label: "Companies" },
  { num: "40", suffix: "+", label: "Jurisdictions" },
  { num: "12", suffix: " yrs", label: "Experience" },
];

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
    <div
      className="absolute hidden md:flex items-center"
      style={{
        zIndex: 10, top: 88, right: 48,
        background: "rgba(8,8,8,0.72)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(68,76,231,0.22)",
        padding: "11px 18px", gap: 10,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div style={{ position: "relative", width: 8, height: 8 }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#12B76A", opacity: 0.4, animation: "ping 1.8s infinite" }} />
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#12B76A" }} />
      </div>
      <span style={{ fontSize: 12 }}>
        <span style={{ color: "#F0EBE0", fontWeight: 500 }}>26 jurisdictions</span>
        <span style={{ color: "#9A9590" }}> · live</span>
      </span>
    </div>

    {/* Hero text — mobile: bottom-left with padding, desktop: left-center */}
    <div
      className="absolute z-10 left-5 right-5 bottom-20 md:left-12 md:right-auto md:bottom-auto md:top-1/2"
      style={{
        fontFamily: "Manrope, sans-serif",
        maxWidth: 560,
        transform: undefined,
      }}
    >
      {/* Use a wrapper with md:transform */}
      <style>{`.hero-text-wrap { transform: none; } @media(min-width:768px) { .hero-text-wrap { transform: translateY(-52%); } }`}</style>
      <div className="hero-text-wrap">
        {/* Tag */}
        <div className="flex items-center" style={{ gap: 10, marginBottom: 16 }}>
          <span className="hidden sm:inline-block" style={{ width: 28, height: 1, background: "#444CE7" }} />
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#444CE7" }}>
            International Legal Services
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[clamp(36px,4.5vw,64px)]" style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.025em",
          color: "#F0EBE0", margin: 0, marginBottom: 16,
        }}>
          Legal clarity for businesses that{" "}
          <em style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 400 }}>operate</em>
          {" "}beyond borders
        </h1>

        {/* Subline — hidden on xs */}
        <p className="hidden sm:block" style={{
          fontSize: 14, color: "#9A9590", lineHeight: 1.7,
          maxWidth: 440, fontWeight: 300, margin: 0, marginBottom: 28,
        }}>
          From company formation and licensing — VASP, EMI, PSP, Gambling —
          to tax structuring and compliance across 15+ jurisdictions worldwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2.5 md:gap-3.5">
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
        </div>
      </div>
    </div>

    {/* Stats — desktop: bottom-right */}
    <div
      className="absolute hidden lg:flex items-end"
      style={{ zIndex: 10, right: 48, bottom: 72, fontFamily: "Manrope, sans-serif" }}
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
    </div>

    {/* Stats — mobile: compact bottom row */}
    <div
      className="absolute flex lg:hidden justify-center w-full"
      style={{ zIndex: 10, bottom: 12, fontFamily: "Manrope, sans-serif" }}
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
    </div>
  </>
);

export default HeroContent;
