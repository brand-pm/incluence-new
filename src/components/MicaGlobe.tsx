import { useEffect, useRef, useState } from "react";
import { ComposableMap, Geographies, Geography, Graticule, Marker, Sphere } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const C_ACCENT = "#444CE7";
const C_TEXT = "#F0EBE0";
const C_BG = "#0a0a0a";
const STROKE = "rgba(240,235,224,0.18)";
const LAND = "rgba(240,235,224,0.06)";
const LAND_HI = "rgba(68,76,231,0.22)";

interface Point {
  country: string;
  regulator: string;
  timeline: string;
  /** [longitude, latitude] */
  coords: [number, number];
}

interface MicaGlobeProps {
  points: Point[];
  /** ISO numeric codes that should be highlighted on the land mass */
  highlightIso?: number[];
  onPointClick?: (p: Point) => void;
  /** Initial center longitude. Defaults to 12 (centered on Central Europe). */
  initialLon?: number;
  /** Latitude tilt. Defaults to -48 (slight northern tilt for EU framing). */
  lat?: number;
  /** Auto-rotate speed in degrees per second. 0 = static. */
  rotateSpeed?: number;
}

const MicaGlobe = ({
  points,
  highlightIso = [],
  onPointClick,
  initialLon = 12,
  lat = -48,
  rotateSpeed = 1.6,
}: MicaGlobeProps) => {
  const [lon, setLon] = useState(initialLon);
  const [hovered, setHovered] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  useEffect(() => {
    if (rotateSpeed === 0) return;
    const tick = (t: number) => {
      if (lastRef.current == null) lastRef.current = t;
      const dt = (t - lastRef.current) / 1000;
      lastRef.current = t;
      if (!paused) {
        setLon((prev) => {
          let next = prev + rotateSpeed * dt;
          if (next > 180) next -= 360;
          return next;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
    };
  }, [rotateSpeed, paused]);

  // Determine if a lon/lat point is on the visible hemisphere given current rotation.
  // For orthographic projection centered at (cLon, cLat), point is visible when
  // cos(lat)·cos(lat_c)·cos(lon - lon_c) + sin(lat)·sin(lat_c) >= 0
  const cLon = lon;
  const cLat = -lat; // projection rotate is [lon, lat, gamma] where lat sign is inverted relative to view
  const isVisible = (pLon: number, pLat: number) => {
    const toRad = (d: number) => (d * Math.PI) / 180;
    const a = toRad(pLat);
    const b = toRad(cLat);
    const dl = toRad(pLon - cLon);
    return Math.cos(a) * Math.cos(b) * Math.cos(dl) + Math.sin(a) * Math.sin(b) >= -0.05;
  };

  return (
    <div
      className="relative w-full select-none"
      style={{ aspectRatio: "1/1", maxWidth: 560, margin: "0 auto" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Soft outer glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(68,76,231,0.18), rgba(68,76,231,0.06) 45%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{ rotate: [-cLon, lat, 0], scale: 260 }}
        width={600}
        height={600}
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <defs>
          <radialGradient id="globe-fill" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#16192a" />
            <stop offset="60%" stopColor="#0c0d18" />
            <stop offset="100%" stopColor="#06060c" />
          </radialGradient>
          <radialGradient id="globe-rim" cx="50%" cy="50%" r="50%">
            <stop offset="92%" stopColor="rgba(68,76,231,0)" />
            <stop offset="98%" stopColor="rgba(68,76,231,0.45)" />
            <stop offset="100%" stopColor="rgba(68,76,231,0)" />
          </radialGradient>
        </defs>

        {/* Sphere fill */}
        <Sphere
          id="globe-sphere"
          fill="url(#globe-fill)"
          stroke="rgba(68,76,231,0.35)"
          strokeWidth={0.6}
        />
        {/* Rim glow overlay */}
        <Sphere id="globe-rim" fill="url(#globe-rim)" stroke="none" strokeWidth={0} />

        {/* Graticule */}
        <Graticule stroke={STROKE} strokeWidth={0.35} step={[15, 15]} />

        {/* Countries */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const iso = Number(geo.id);
              const hi = highlightIso.includes(iso);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={hi ? LAND_HI : LAND}
                  stroke="rgba(240,235,224,0.22)"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: hi ? "rgba(68,76,231,0.4)" : "rgba(240,235,224,0.12)" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Pulsing markers — only render when on visible hemisphere */}
        {points.map((p, idx) => {
          if (!isVisible(p.coords[0], p.coords[1])) return null;
          const isHover = hovered === p.country;
          return (
            <Marker
              key={p.country}
              coordinates={p.coords}
              onMouseEnter={() => setHovered(p.country)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onPointClick?.(p)}
              style={{
                default: { cursor: "pointer", outline: "none" },
                hover: { cursor: "pointer", outline: "none" },
                pressed: { outline: "none" },
              }}
            >
              {/* outer pulse */}
              <circle r={4} fill="none" stroke={C_ACCENT} strokeWidth={0.8} opacity={0.6}>
                <animate
                  attributeName="r"
                  values="3;14;3"
                  dur="2.4s"
                  begin={`${idx * 0.25}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.7;0;0.7"
                  dur="2.4s"
                  begin={`${idx * 0.25}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* core dot */}
              <circle r={3.2} fill={C_ACCENT} stroke={C_BG} strokeWidth={0.8} />
              <circle r={1.4} fill={C_TEXT} />
              {/* label on hover */}
              {isHover && (
                <g transform="translate(8, -6)">
                  <rect
                    x={0}
                    y={-10}
                    width={Math.max(p.country.length, p.regulator.length) * 4.2 + 10}
                    height={26}
                    fill="#0a0a0a"
                    stroke={C_ACCENT}
                    strokeWidth={0.5}
                  />
                  <text x={5} y={0} fontSize={6} fill={C_TEXT} fontFamily="Manrope, sans-serif" fontWeight={600}>
                    {p.country}
                  </text>
                  <text x={5} y={9} fontSize={5} fill="rgba(240,235,224,0.6)" fontFamily="Manrope, sans-serif">
                    {p.regulator} · {p.timeline}
                  </text>
                </g>
              )}
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Caption */}
      <div
        aria-hidden
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] pointer-events-none"
        style={{ color: "rgba(240,235,224,0.35)" }}
      >
        EU · 8 jurisdictions · live coverage
      </div>
    </div>
  );
};

export default MicaGlobe;
