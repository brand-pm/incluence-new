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

    {/* Live badge — top right (hidden on mobile) */}
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

    {/* Hero text — responsive positioning */}
    <div
      className="absolute inset-x-0 md:inset-x-auto"
      style={{
        zIndex: 10,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Mobile: bottom-aligned with padding. Desktop: left-center */}
      <div
        className="px-5 pb-8 md:px-0 md:pb-0"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          maxWidth: 560,
        }}
      >
        {/* Override positioning per breakpoint via CSS */}
        <style>{`
          @media (min-width: 768px) {
            .hero-text-inner {
              position: fixed !important;
              left: 48px !important;
              top: 50% !important;
              bottom: auto !important;
              right: auto !important;
              transform: translateY(-52%) !important;
            }
          }
        `}</style>
        <div className="hero-text-inner">
          {/* Tag */}
          <div
            className="flex items-center"
            style={{ gap: 10, marginBottom: 16 }}
          >
            <span className="hidden sm:inline-block" style={{ width: 28, height: 1, background: "#444CE7" }} />
            <span style={{
              fontSize: 10, fontWeight: 500, letterSpacing: "0.16em",
              textTransform: "uppercase" as const, color: "#444CE7",
            }}>
              International Legal Services
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "clamp(28px, 6vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#F0EBE0",
            margin: 0,
            marginBottom: 16,
          }}>
            Legal clarity for{" "}businesses that{" "}
            <em style={{ fontStyle: "italic", color: "#444CE7", fontWeight: 400 }}>operate</em>
            {" "}beyond borders
          </h1>

          {/* Subline — hidden on very small screens */}
          <p className="hidden sm:block" style={{
            fontSize: 14, color: "#9A9590", lineHeight: 1.7,
            maxWidth: 440, fontWeight: 300, margin: 0, marginBottom: 28,
          }}>
            From company formation and licensing — VASP, EMI, PSP, Gambling —
            to tax structuring and compliance across 15+ jurisdictions worldwide.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap" style={{ gap: 10 }}>
            <Link
              to="/licenses/gambling"
              className="inline-flex items-center"
              style={{
                background: "#444CE7", color: "#ffffff",
                padding: "12px 24px", border: "none", borderRadius: 0,
                fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase" as const, textDecoration: "none",
                gap: 8, transition: "background 0.25s",
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
                transition: "color 0.25s, border-color 0.25s",
              }}
            >
              View Marketplace
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Stats — bottom right, desktop only */}
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

    {/* Mobile stats — horizontal row at bottom */}
    <div
      className="absolute flex lg:hidden justify-center w-full"
      style={{ zIndex: 10, bottom: 16, fontFamily: "Manrope, sans-serif" }}
    >
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <div className="text-center" style={{ padding: "0 12px" }}>
            <div style={{ fontSize: 18, fontWeight: 300, color: "#F0EBE0" }}>
              {s.num}<span style={{ color: "#444CE7" }}>{s.suffix}</span>
            </div>
            <div style={{
              fontSize: 9, color: "#5A5550", marginTop: 3,
              textTransform: "uppercase" as const, letterSpacing: "0.06em",
            }}>
              {s.label}
            </div>
          </div>
          {i < stats.length - 1 && (
            <div style={{
              width: 1, height: 28,
              background: "rgba(255,255,255,0.08)",
            }} />
          )}
        </div>
      ))}
    </div>
  </>
);

export default HeroContent;
