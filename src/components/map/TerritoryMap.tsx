import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO numeric codes for our jurisdictions
const ISO_CODES: Record<string, number> = {
  MT: 470,
  CW: 531,
  IM: 833,
  CR: 188,
  GI: 292,
  CY: 196,
  SE: 752,
  PH: 608,
  BZ: 84,
  NG: 566,
  MU: 480,
  ME: 499,
  SC: 690,
  VU: 548,
  EE: 233,
  LT: 440,
  CH: 756,
  US: 840,
  PL: 616,
  GB: 826,
  DK: 208,
  CZ: 203,
  HK: 344,
  KY: 136,
  AE: 784,
  SG: 702,
  PA: 591,
  PT: 620,
  DE: 276,
  HU: 348,
  LU: 442,
  TR: 792,
  IE: 372,
  CA: 124,
  BG: 100,
};

// Capital/marker coordinates [lng, lat]
const MARKERS: Record<string, [number, number]> = {
  MT: [14.5, 35.9],
  CW: [-69.0, 12.1],
  IM: [-4.5, 54.2],
  CR: [-83.8, 9.7],
  GI: [-5.4, 36.1],
  CY: [33.4, 35.1],
  SE: [18.1, 59.3],
  ME: [19.3, 42.8],
  EE: [25.0, 58.6],
  LT: [23.9, 55.2],
  CH: [8.2, 46.8],
  GB: [-0.1, 51.5],
  PT: [-9.1, 38.7],
  DE: [13.4, 52.5],
  HU: [19.0, 47.5],
  LU: [6.1, 49.6],
  TR: [32.9, 39.9],
  IE: [-6.3, 53.3],
  AE: [55.3, 25.2],
  SG: [103.8, 1.3],
  MU: [57.5, -20.3],
  VU: [168.3, -17.7],
  CR2: [-84.0, 9.9],
  PL: [21.0, 52.2],
  US: [-77.0, 38.9],
};

interface TerritoryMapProps {
  iso: string;
  markerLabel?: string;
  subLabel?: string;
  className?: string;
}

export const TerritoryMap = ({
  iso,
  markerLabel,
  subLabel,
  className = "",
}: TerritoryMapProps) => {
  const targetCode = ISO_CODES[iso];
  const markerCoords = MARKERS[iso];

  const projConfig: { scale: number; center: [number, number] } = {
    scale:
      iso === "MT"
        ? 15000
        : iso === "GI"
          ? 80000
          : iso === "IM"
            ? 8000
            : iso === "CW"
              ? 12000
              : iso === "LU"
                ? 8000
                : iso === "SC"
                  ? 12000
                  : ["EE", "LT", "CH", "PT", "HU"].includes(iso)
                    ? 2000
                    : ["GB", "DE", "TR", "IE", "SE"].includes(iso)
                      ? 800
                      : ["US", "CA"].includes(iso)
                        ? 300
                        : 3000,
    center: markerCoords ?? [0, 30],
  };

  return (
    <div
      className={`absolute right-[8%] top-1/2 -translate-y-1/2 w-[340px] h-[380px] pointer-events-none z-[2] opacity-40 ${className}`}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={projConfig}
        width={340}
        height={380}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isTarget = String(geo.id) === String(targetCode);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isTarget ? "#141822" : "transparent"}
                  stroke={
                    isTarget
                      ? "rgba(240,235,224,0.12)"
                      : "rgba(240,235,224,0.03)"
                  }
                  strokeWidth={isTarget ? 1.2 : 0.3}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {markerCoords && (
          <Marker coordinates={markerCoords}>
            <circle r={5} fill="#444CE7" opacity={0.9} />
            <circle r={12} stroke="#444CE7" strokeWidth={1} fill="none" opacity={0.4}>
              <animate attributeName="r" values="12;22;12" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.05;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r={18} stroke="#444CE7" strokeWidth={0.5} fill="none" opacity={0.15}>
              <animate attributeName="r" values="18;30;18" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
            </circle>
            {markerLabel && (
              <>
                <text
                  textAnchor="start"
                  x={14}
                  y={-4}
                  fill="#444CE7"
                  fontSize={9}
                  fontFamily="Manrope"
                  fontWeight={600}
                >
                  {markerLabel}
                </text>
                {subLabel && (
                  <text
                    textAnchor="start"
                    x={14}
                    y={8}
                    fill="#444CE7"
                    fontSize={7}
                    fontFamily="Manrope"
                    fontWeight={500}
                    opacity={0.6}
                  >
                    {subLabel}
                  </text>
                )}
              </>
            )}
          </Marker>
        )}
      </ComposableMap>
    </div>
  );
};

export default TerritoryMap;
