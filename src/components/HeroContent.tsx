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

    {/* Live badge — top right */}
    <div
      className="absolute hidden md:flex items-center"
      style={{
        zIndex: 10,
        top: 88,
        right: 48,
        background: "rgba(8,8,8,0.72)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(68,76,231,0.22)",
        padding: "11px 18px",
        gap: 10,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <div style={{ position: "relative", width: 8, height: 8 }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "#12B76A", opacity: 0.4,
          animation: "ping 1.8s infinite",
        }} />
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "#12B76A",
        }} />
      </div>
      <span style={{ fontSize: 12 }}>
        <span style={{ color: "#F0EBE0", fontWeight: 500 }}>26 jurisdictions</span>
        <span style={{ color: "#9A9590" }}> · live</span>
      </span>
    </div>

    {/* Hero text — left center */}
    <div
      className="absolute"
      style={{
        zIndex: 10,
        left: 48,
        top: "50%",
        transform: "translateY(-52%)",
        maxWidth: 560,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Tag */}
      <div
        className="flex items-center"
        style={{ gap: 10, marginBottom: 22 }}
      >
        <span style={{ width: 28, height: 1, background: "#444CE7", display: "inline-block" }} />
        <span style={{
          fontSize: 11, fontWeight: 500, letterSpacing: "0.16em",
          textTransform: "uppercase" as const, color: "#444CE7",
        }}>
          International Legal Services
        </span>
      </div>

      {/* H1 */}
      <h1 style={{
        fontFamily: "Manrope, sans-serif",
        fontSize: "clamp(36px, 4.5vw, 64px)",
        fontWeight: 300,
        lineHeight: 1.07,
        letterSpacing: "-0.025em",
        color: "#F0EBE0",
        margin: 0,
        marginBottom: 22,
      }}>
        Legal clarity for{"\n"}businesses that{" "}
        <em style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 400 }}>operate</em>
        {"\n"}beyond borders
      </h1>

      {/* Subline */}
      <p style={{
        fontSize: 15, color: "#9A9590", lineHeight: 1.8,
        maxWidth: 440, fontWeight: 300, margin: 0, marginBottom: 36,
      }}>
        From company formation and licensing — VASP, EMI, PSP, Gambling —
        to tax structuring and compliance across 15+ jurisdictions worldwide.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap" style={{ gap: 14 }}>
        <Link
          to="/licenses/gambling"
          className="inline-flex items-center"
          style={{
            background: "#444CE7", color: "#ffffff",
            padding: "14px 32px", border: "none", borderRadius: 0,
            fontSize: 12, fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase" as const, textDecoration: "none",
            gap: 8, transition: "background 0.25s",
          }}
        >
          Start your project <ArrowRight size={14} />
        </Link>
        <Link
          to="/marketplace"
          className="inline-flex items-center"
          style={{
            background: "transparent", color: "#9A9590",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "14px 28px", borderRadius: 0,
            fontSize: 12, fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase" as const, textDecoration: "none",
            transition: "color 0.25s, border-color 0.25s",
          }}
        >
          View Marketplace
        </Link>
      </div>
    </div>

    {/* Stats — right bottom */}
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
            <div style={{
              fontSize: 11, color: "#5A5550", marginTop: 6,
              textTransform: "uppercase" as const, letterSpacing: "0.07em",
            }}>
              {s.label}
            </div>
          </div>
          {i < stats.length - 1 && (
            <div style={{
              width: 1, height: 42,
              background: "rgba(255,255,255,0.08)",
              margin: "0 28px",
            }} />
          )}
        </div>
      ))}
    </div>
  </>
);

export default HeroContent;
