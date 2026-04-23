import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export interface MiCACountry {
  iso: number;
  code: string;
  country: string;
  short: string;
  regulator: string;
  timeline: string;
  coords: [number, number]; // [lng, lat]
  /** Where to place the floating label relative to marker (in projection px) */
  labelOffset?: [number, number];
  /** Side of the label relative to marker: 'r' draws the connector to the right */
  side?: "l" | "r";
}

export const MICA_COUNTRIES: MiCACountry[] = [
  { iso: 276, code: "DE", country: "Germany",     short: "Germany",     regulator: "BaFin",            timeline: "9–12 mo",  coords: [13.40, 52.52], labelOffset: [ 60,  -30], side: "r" },
  { iso: 250, code: "FR", country: "France",      short: "France",      regulator: "AMF / ACPR",       timeline: "8–12 mo",  coords: [2.35, 48.86],  labelOffset: [-90,   20], side: "l" },
  { iso: 528, code: "NL", country: "Netherlands", short: "Netherlands", regulator: "AFM / DNB",        timeline: "9–12 mo",  coords: [4.90, 52.37],  labelOffset: [-95,  -32], side: "l" },
  { iso: 372, code: "IE", country: "Ireland",     short: "Ireland",     regulator: "CBI",              timeline: "10–14 mo", coords: [-6.27, 53.33], labelOffset: [-85,    0], side: "l" },
  { iso: 470, code: "MT", country: "Malta",       short: "Malta",       regulator: "MFSA",             timeline: "6–10 mo",  coords: [14.51, 35.90], labelOffset: [ 55,   30], side: "r" },
  { iso: 440, code: "LT", country: "Lithuania",   short: "Lithuania",   regulator: "Lietuvos bankas",  timeline: "6–9 mo",   coords: [25.28, 54.69], labelOffset: [ 70,  -20], side: "r" },
  { iso: 616, code: "PL", country: "Poland",      short: "Poland",      regulator: "KNF",              timeline: "9–12 mo",  coords: [21.01, 52.23], labelOffset: [ 75,   25], side: "r" },
  { iso: 442, code: "LU", country: "Luxembourg",  short: "Luxembourg",  regulator: "CSSF",             timeline: "10–14 mo", coords: [6.13, 49.61],  labelOffset: [-110,  35], side: "l" },
];

const HIGHLIGHT_ISOS = new Set(MICA_COUNTRIES.map((c) => c.iso));

interface Props {
  onCountryClick?: (c: MiCACountry) => void;
}

const MiCAEuMap = ({ onCountryClick }: Props) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full" style={{ aspectRatio: "5/4" }}>
      {/* Ambient glow orb behind the map */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-10%",
          background:
            "radial-gradient(ellipse 55% 45% at 50% 45%, rgba(68,76,231,0.22) 0%, rgba(68,76,231,0.08) 35%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Faint dot-grid */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      >
        <defs>
          <pattern id="mica-grid-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="rgba(240,235,224,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mica-grid-dots)" />
      </svg>

      {/* The actual map */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 640, center: [11, 53] }}
        width={500}
        height={400}
        style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
      >
        {/* Drop-shadow filter for highlighted countries */}
        <defs>
          <filter id="mica-country-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = Number(geo.id);
              const isMica = HIGHLIGHT_ISOS.has(id);
              const isHovered = isMica && hovered === MICA_COUNTRIES.find((c) => c.iso === id)?.code;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    isMica
                      ? isHovered
                        ? "#444CE7"
                        : "rgba(68,76,231,0.55)"
                      : "rgba(240,235,224,0.04)"
                  }
                  stroke={
                    isMica
                      ? "rgba(180,190,255,0.7)"
                      : "rgba(240,235,224,0.10)"
                  }
                  strokeWidth={isMica ? 0.6 : 0.35}
                  filter={isMica ? "url(#mica-country-glow)" : undefined}
                  style={{
                    default: { outline: "none", transition: "fill 200ms ease" },
                    hover:   { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Floating labels with connector lines */}
        {MICA_COUNTRIES.map((c) => {
          const [dx, dy] = c.labelOffset ?? [50, -20];
          const isHovered = hovered === c.code;
          return (
            <Marker
              key={c.code}
              coordinates={c.coords}
              onMouseEnter={() => setHovered(c.code)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onCountryClick?.(c)}
              style={{
                default: { cursor: "pointer" },
                hover:   { cursor: "pointer" },
                pressed: { cursor: "pointer" },
              }}
            >
              {/* connector line from marker to label */}
              <line
                x1={0}
                y1={0}
                x2={dx}
                y2={dy}
                stroke={isHovered ? "#444CE7" : "rgba(180,190,255,0.35)"}
                strokeWidth={0.6}
                strokeDasharray="2 2"
              />

              {/* outer pulse ring */}
              <circle r={2.5} fill="none" stroke="#444CE7" strokeWidth={0.7} opacity={0.7}>
                <animate attributeName="r" from="2.5" to="12" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.8" to="0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle r={2.5} fill="none" stroke="#444CE7" strokeWidth={0.5} opacity={0.5}>
                <animate attributeName="r" from="2.5" to="18" dur="3.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="3.4s" repeatCount="indefinite" />
              </circle>

              {/* core dot */}
              <circle r={2.6} fill="#F0EBE0" stroke="#444CE7" strokeWidth={1} />

              {/* floating label */}
              <g transform={`translate(${dx}, ${dy})`}>
                {/* label backdrop */}
                <rect
                  x={c.side === "l" ? -c.short.length * 4.2 - 8 : -2}
                  y={-7}
                  width={c.short.length * 4.2 + 10}
                  height={14}
                  fill="rgba(8,8,12,0.85)"
                  stroke={isHovered ? "#444CE7" : "rgba(68,76,231,0.35)"}
                  strokeWidth={0.5}
                />
                <text
                  x={c.side === "l" ? -4 : 3}
                  y={2.5}
                  fontSize={6}
                  fontFamily="Manrope, sans-serif"
                  fontWeight={500}
                  textAnchor={c.side === "l" ? "end" : "start"}
                  fill="#F0EBE0"
                  style={{ letterSpacing: "0.04em" }}
                >
                  {c.short.toUpperCase()}
                </text>
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Hover detail card (overlay, top-right) */}
      {hovered && (() => {
        const c = MICA_COUNTRIES.find((x) => x.code === hovered);
        if (!c) return null;
        return (
          <div
            className="absolute top-4 right-4 px-3.5 py-2.5 pointer-events-none z-10"
            style={{
              background: "rgba(8,8,12,0.92)",
              border: "1px solid rgba(68,76,231,0.5)",
              backdropFilter: "blur(8px)",
              minWidth: 180,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: "#F0EBE0", marginBottom: 2 }}>
              {c.country}
            </div>
            <div style={{ fontSize: 11, color: "#9A9590", lineHeight: 1.5 }}>
              {c.regulator}
              <br />
              <span style={{ color: "#444CE7" }}>{c.timeline}</span>
            </div>
          </div>
        );
      })()}

      {/* Bottom-left subtle counter */}
      <div
        className="absolute bottom-2 left-2 flex items-center gap-2 pointer-events-none"
        style={{ zIndex: 3 }}
      >
        <span
          className="inline-block w-1.5 h-1.5"
          style={{
            background: "#444CE7",
            animation: "mica-pulse 1.6s ease-in-out infinite",
          }}
        />
        <span
          style={{
            color: "#9A9590",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          8 MiCA jurisdictions · live
        </span>
      </div>
    </div>
  );
};

export default MiCAEuMap;
