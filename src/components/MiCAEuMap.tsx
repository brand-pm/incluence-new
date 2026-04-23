import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export interface MiCACountry {
  iso: number;          // ISO numeric code (matches world-atlas topojson .id)
  code: string;         // 2-letter code for keying
  country: string;
  regulator: string;
  timeline: string;
  coords: [number, number]; // [lng, lat]
}

export const MICA_COUNTRIES: MiCACountry[] = [
  { iso: 276, code: "DE", country: "Germany",     regulator: "BaFin",            timeline: "9–12 months",  coords: [13.40, 52.52] },
  { iso: 250, code: "FR", country: "France",      regulator: "AMF / ACPR",       timeline: "8–12 months",  coords: [2.35, 48.86]  },
  { iso: 528, code: "NL", country: "Netherlands", regulator: "AFM / DNB",        timeline: "9–12 months",  coords: [4.90, 52.37]  },
  { iso: 372, code: "IE", country: "Ireland",     regulator: "CBI",              timeline: "10–14 months", coords: [-6.27, 53.33] },
  { iso: 470, code: "MT", country: "Malta",       regulator: "MFSA",             timeline: "6–10 months",  coords: [14.51, 35.90] },
  { iso: 440, code: "LT", country: "Lithuania",   regulator: "Lietuvos bankas",  timeline: "6–9 months",   coords: [25.28, 54.69] },
  { iso: 616, code: "PL", country: "Poland",      regulator: "KNF",              timeline: "9–12 months",  coords: [21.01, 52.23] },
  { iso: 442, code: "LU", country: "Luxembourg",  regulator: "CSSF",             timeline: "10–14 months", coords: [6.13, 49.61]  },
];

const HIGHLIGHT_ISOS = new Set(MICA_COUNTRIES.map((c) => c.iso));

interface Props {
  onCountryClick?: (c: MiCACountry) => void;
}

const MiCAEuMap = ({ onCountryClick }: Props) => {
  const [hovered, setHovered] = useState<MiCACountry | null>(null);

  return (
    <div className="relative w-full" style={{ aspectRatio: "5/4" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 620, center: [12, 53] }}
        width={500}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = Number(geo.id);
              const isMica = HIGHLIGHT_ISOS.has(id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isMica ? "#1a1f3a" : "#0e0e14"}
                  stroke={isMica ? "rgba(68,76,231,0.55)" : "rgba(240,235,224,0.08)"}
                  strokeWidth={isMica ? 0.8 : 0.4}
                  style={{
                    default: { outline: "none" },
                    hover:   { outline: "none", fill: isMica ? "#252b4d" : "#0e0e14" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {MICA_COUNTRIES.map((c) => (
          <Marker
            key={c.code}
            coordinates={c.coords}
            onMouseEnter={() => setHovered(c)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onCountryClick?.(c)}
            style={{
              default: { cursor: "pointer" },
              hover:   { cursor: "pointer" },
              pressed: { cursor: "pointer" },
            }}
          >
            {/* outer pulse ring */}
            <circle r={3} fill="none" stroke="#444CE7" strokeWidth={0.8} opacity={0.7}>
              <animate attributeName="r" from="3" to="14" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.8" to="0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            {/* second ring offset */}
            <circle r={3} fill="none" stroke="#444CE7" strokeWidth={0.6} opacity={0.5}>
              <animate attributeName="r" from="3" to="20" dur="3.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="3.2s" repeatCount="indefinite" />
            </circle>
            {/* core dot */}
            <circle r={3} fill="#444CE7" stroke="#F0EBE0" strokeWidth={0.6} />
          </Marker>
        ))}
      </ComposableMap>

      {/* hover tooltip */}
      {hovered && (
        <div
          className="absolute top-3 left-3 px-3 py-2 pointer-events-none"
          style={{
            background: "#0d0d0d",
            border: "1px solid rgba(68,76,231,0.4)",
            color: "#F0EBE0",
            fontSize: 12,
            lineHeight: 1.4,
            maxWidth: 220,
          }}
        >
          <div style={{ fontWeight: 600 }}>{hovered.country}</div>
          <div style={{ color: "#9A9590", fontSize: 11 }}>
            {hovered.regulator} · {hovered.timeline}
          </div>
        </div>
      )}

      {/* legend */}
      <div
        className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1.5"
        style={{ background: "rgba(10,10,10,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="inline-block w-2 h-2" style={{ background: "#444CE7" }} />
        <span style={{ color: "#9A9590", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          MiCA jurisdictions · 8
        </span>
      </div>
    </div>
  );
};

export default MiCAEuMap;
