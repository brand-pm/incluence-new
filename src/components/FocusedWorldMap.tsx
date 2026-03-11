import WorldMapCanvas from "@/components/WorldMapCanvas";

/**
 * Wraps the existing WorldMapCanvas and uses CSS transform + mask
 * to zoom into a specific country. Zero changes to WorldMapCanvas itself.
 *
 * Coordinates use the SVG viewBox space:
 *   VB: x=30.767, y=241.591, w=784.077, h=458.627
 */

interface FocusedWorldMapProps {
  /** X center of the country in SVG viewBox coords */
  focusX: number;
  /** Y center of the country in SVG viewBox coords */
  focusY: number;
  /** Zoom level — 2 = 2× zoom, 4 = 4× etc. */
  zoom?: number;
  /** RGB string for the flag/country glow, e.g. "68,76,231" */
  flagColor?: string;
  className?: string;
}

const VB = { x: 30.767, y: 241.591, w: 784.077, h: 458.627 };

const FocusedWorldMap = ({
  focusX,
  focusY,
  zoom = 3,
  flagColor = "68,76,231",
  className = "",
}: FocusedWorldMapProps) => {
  // Convert SVG-space coords → percentage origin for CSS transformOrigin
  const originX = ((focusX - VB.x) / VB.w) * 100;
  const originY = ((focusY - VB.y) / VB.h) * 100;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* WorldMapCanvas — country centered via transformOrigin + scale */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: `${originX}% ${originY}%`,
          transform: `scale(${zoom})`,
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, black 35%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, black 35%, transparent 100%)",
        }}
      >
        <WorldMapCanvas />
      </div>

      {/* Breathing glow — outer ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 55% 55% at 50% 50%, rgba(${flagColor}, 0.08) 0%, rgba(${flagColor}, 0.03) 45%, transparent 70%)`,
          animation: "flag-breathe 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Breathing glow — inner ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 22% 22% at 50% 50%, rgba(${flagColor}, 0.11) 0%, rgba(${flagColor}, 0.04) 55%, transparent 100%)`,
          animation: "flag-breathe 4s ease-in-out infinite 1s",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes flag-breathe {
          0%   { opacity: 1; }
          50%  { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FocusedWorldMap;
