import { useEffect, useRef, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

// Natural Earth dataset — includes more territories than world-atlas
const GEO_URL = 'https://cdn.jsdelivr.net/npm/visionscarto-world-atlas@0.1.0/world/110m.json'

// ─── ISO NUMERIC CODES (UN M.49) ────────────────────────────────────────────
const NO_GEO = new Set(['IM', 'GI', 'CW', 'KY', 'VG', 'AD', 'LI', 'LC'])

const ISO: Record<string, number> = {
  MT: 470, CY: 196, CR: 188, SE: 752, PH: 608, BZ: 84,
  NG: 566, BB: 52,  KH: 116, PA: 591, MU: 480, ME: 499,
  SC: 690, VU: 548, EE: 233, LT: 440, CH: 756, US: 840,
  PL: 616, HK: 344, GB: 826, DK: 208, CZ: 203, AE: 784,
  SG: 702, VC: 670, IE: 372, DE: 276, HU: 348, LU: 442,
  NL: 528, HR: 191, MY: 458, TH: 764, CA: 124, CN: 156,
  BG: 100, SK: 703, PT: 620, TR: 792,
}

// ─── PROJECTION CONFIG per ISO-alpha2 ───────────────────────────────────────
type Proj = { scale: number; center: [number, number] }
const PROJ: Record<string, Proj> = {
  MT:  { scale: 28000,  center: [14.44,  35.90] },
  GI:  { scale: 100000, center: [-5.35,  36.14] },
  IM:  { scale: 9000,   center: [-4.48,  54.15] },
  CW:  { scale: 16000,  center: [-68.93, 12.10] },
  AD:  { scale: 40000,  center: [1.52,   42.51] },
  LI:  { scale: 40000,  center: [9.55,   47.17] },
  SG:  { scale: 45000,  center: [103.82,  1.35] },
  HK:  { scale: 20000,  center: [114.18, 22.32] },
  BB:  { scale: 40000,  center: [-59.57, 13.10] },
  SC:  { scale: 16000,  center: [55.45,  -4.68] },
  MU:  { scale: 14000,  center: [57.55, -20.24] },
  LC:  { scale: 40000,  center: [-60.98, 13.90] },
  VU:  { scale: 6000,   center: [166.96,-15.38] },
  KY:  { scale: 18000,  center: [-81.40, 19.30] },
  VG:  { scale: 30000,  center: [-64.63, 18.43] },
  VC:  { scale: 18000,  center: [-61.20, 13.25] },
  ME:  { scale: 5500,   center: [19.30,  42.78] },
  LU:  { scale: 12000,  center: [6.13,   49.82] },
  CY:  { scale: 5500,   center: [33.20,  35.00] },
  CR:  { scale: 4000,   center: [-83.75,  9.75] },
  BZ:  { scale: 6000,   center: [-88.50, 17.20] },
  EE:  { scale: 2200,   center: [25.00,  58.70] },
  LT:  { scale: 2000,   center: [23.90,  55.30] },
  SK:  { scale: 2800,   center: [19.70,  48.70] },
  HR:  { scale: 2200,   center: [16.50,  45.20] },
  IE:  { scale: 1800,   center: [-8.00,  53.40] },
  NL:  { scale: 2000,   center: [5.30,   52.30] },
  CH:  { scale: 2800,   center: [8.20,   46.85] },
  PT:  { scale: 1800,   center: [-8.00,  39.50] },
  HU:  { scale: 2200,   center: [19.04,  47.50] },
  DK:  { scale: 1400,   center: [10.00,  56.00] },
  CZ:  { scale: 2000,   center: [15.50,  49.80] },
  BG:  { scale: 2200,   center: [25.50,  42.70] },
  PL:  { scale: 1200,   center: [19.10,  51.90] },
  AE:  { scale: 2800,   center: [54.50,  24.00] },
  PA:  { scale: 3000,   center: [-80.00,  8.90] },
  MY:  { scale: 1200,   center: [109.70,  3.10] },
  SE:  { scale: 700,    center: [18.10,  62.00] },
  DE:  { scale: 900,    center: [10.50,  51.20] },
  GB:  { scale: 900,    center: [-2.00,  54.00] },
  TR:  { scale: 700,    center: [35.00,  39.00] },
  TH:  { scale: 1000,   center: [101.00, 15.00] },
  PH:  { scale: 1000,   center: [122.00, 12.50] },
  NG:  { scale: 700,    center: [8.70,    9.10] },
  KH:  { scale: 2000,   center: [104.90, 12.60] },
  CA:  { scale: 280,    center: [-96.00, 56.00] },
  US:  { scale: 320,    center: [-98.00, 39.00] },
  CN:  { scale: 380,    center: [105.00, 35.00] },
}

// ─── MARKER COORDINATES [lng, lat] + labels ─────────────────────────────────
interface MarkerDef { coords: [number, number]; label: string; sub: string }
const MARKERS: Record<string, MarkerDef> = {
  MT:  { coords: [14.51,  35.90],  label: 'Valletta',      sub: 'MGA HQ'          },
  CY:  { coords: [33.36,  35.17],  label: 'Nicosia',       sub: 'CySEC HQ'        },
  GI:  { coords: [-5.35,  36.14],  label: 'Gibraltar',     sub: 'GBGA HQ'         },
  IM:  { coords: [-4.48,  54.15],  label: 'Douglas',       sub: 'GSC HQ'          },
  CR:  { coords: [-84.09,  9.93],  label: 'San José',      sub: 'Municipality'    },
  CW:  { coords: [-68.93, 12.10],  label: 'Willemstad',    sub: 'CGA HQ'          },
  SE:  { coords: [18.07,  59.33],  label: 'Stockholm',     sub: 'Spelinspektionen'},
  PH:  { coords: [121.00, 14.60],  label: 'Manila',        sub: 'PAGCOR HQ'       },
  BZ:  { coords: [-88.77, 17.25],  label: 'Belmopan',      sub: 'GSB HQ'          },
  NG:  { coords: [7.49,    9.06],  label: 'Abuja',         sub: 'NLRC HQ'         },
  BB:  { coords: [-59.62, 13.10],  label: 'Bridgetown',    sub: 'GCB HQ'          },
  KH:  { coords: [104.92, 11.56],  label: 'Phnom Penh',    sub: 'GCB KH'          },
  MU:  { coords: [57.55, -20.16],  label: 'Port Louis',    sub: 'FSC HQ'          },
  ME:  { coords: [19.26,  42.44],  label: 'Podgorica',     sub: 'SEC HQ'          },
  SC:  { coords: [55.45,  -4.62],  label: 'Victoria',      sub: 'FSA HQ'          },
  VU:  { coords: [168.32,-17.73],  label: 'Port Vila',     sub: 'VFSC HQ'         },
  EE:  { coords: [24.75,  59.44],  label: 'Tallinn',       sub: 'FIU HQ'          },
  LT:  { coords: [25.28,  54.69],  label: 'Vilnius',       sub: 'Bank of Lithuania'},
  CH:  { coords: [7.44,   46.95],  label: 'Bern',          sub: 'FINMA HQ'        },
  US:  { coords: [-77.03, 38.90],  label: 'Washington DC', sub: 'FinCEN'          },
  PL:  { coords: [21.01,  52.23],  label: 'Warsaw',        sub: 'KNF HQ'          },
  HK:  { coords: [114.17, 22.28],  label: 'Hong Kong',     sub: 'HKMA HQ'         },
  GB:  { coords: [-0.12,  51.51],  label: 'London',        sub: 'FCA HQ'          },
  DK:  { coords: [12.57,  55.68],  label: 'Copenhagen',    sub: 'Finanstilsynet'  },
  CZ:  { coords: [14.42,  50.08],  label: 'Prague',        sub: 'CNB HQ'          },
  KY:  { coords: [-81.40, 19.30],  label: 'George Town',   sub: 'CIMA HQ'         },
  VG:  { coords: [-64.63, 18.43],  label: 'Road Town',     sub: 'FSC BVI'         },
  AE:  { coords: [54.37,  24.45],  label: 'Abu Dhabi',     sub: 'DIFC / ADGM'     },
  SG:  { coords: [103.82,  1.35],  label: 'Singapore',     sub: 'ACRA HQ'         },
  PA:  { coords: [-79.53,  8.99],  label: 'Panama City',   sub: 'Corp Registry'   },
  VC:  { coords: [-61.20, 13.16],  label: 'Kingstown',     sub: 'FSA SVG'         },
  AD:  { coords: [1.52,   42.51],  label: 'Andorra la V.', sub: 'AFA HQ'          },
  BG:  { coords: [23.32,  42.70],  label: 'Sofia',         sub: 'BNB HQ'          },
  DE:  { coords: [13.40,  52.52],  label: 'Berlin',        sub: 'BaFin HQ'        },
  HU:  { coords: [19.04,  47.50],  label: 'Budapest',      sub: 'MNB HQ'          },
  LU:  { coords: [6.13,   49.61],  label: 'Luxembourg',    sub: 'CSSF HQ'         },
  TR:  { coords: [32.86,  39.93],  label: 'Ankara',        sub: 'BDDK HQ'         },
  PT:  { coords: [-9.14,  38.72],  label: 'Lisbon',        sub: 'SEF HQ'          },
  SK:  { coords: [17.11,  48.15],  label: 'Bratislava',    sub: 'MV SR HQ'        },
  IE:  { coords: [-6.27,  53.33],  label: 'Dublin',        sub: 'CBI HQ'          },
  MY:  { coords: [101.70,  3.14],  label: 'Kuala Lumpur',  sub: 'SSM HQ'          },
  CA:  { coords: [-75.70, 45.42],  label: 'Ottawa',        sub: 'Corp Registry'   },
  LI:  { coords: [9.52,   47.14],  label: 'Vaduz',         sub: 'FMA HQ'          },
  LC:  { coords: [-60.98, 13.90],  label: 'Castries',      sub: 'ECFH HQ'         },
  NL:  { coords: [4.90,   52.37],  label: 'Amsterdam',     sub: 'AFM HQ'          },
  HR:  { coords: [15.97,  45.81],  label: 'Zagreb',        sub: 'HANFA HQ'        },
  TH:  { coords: [100.52, 13.75],  label: 'Bangkok',       sub: 'DBD HQ'          },
  CN:  { coords: [116.40, 39.90],  label: 'Beijing',       sub: 'SAMR HQ'         },
}

// ─── NEIGHBOR CONTEXT ───────────────────────────────────────────────────────
const NEIGHBORS: Record<string, number[]> = {
  MT:  [380, 788, 434],
  CY:  [792, 422, 376, 818],
  GI:  [724, 504],
  IM:  [826, 372],
  CR:  [591, 332, 320, 484],
  CW:  [862, 630, 532],
  ME:  [191, 688, 705, 8, 807, 300],
  EE:  [440, 246, 643, 616],
  LT:  [440, 616, 112, 643],
  CH:  [380, 276, 40, 250, 442],
  PT:  [724],
  HU:  [40, 703, 191, 642, 807, 688, 300, 804],
  DE:  [528, 442, 250, 756, 40, 203, 616, 208],
  CZ:  [276, 40, 703, 616],
  PL:  [276, 203, 703, 804, 112, 643, 440],
  BG:  [792, 300, 642, 688, 807],
  SK:  [203, 276, 40, 616, 804, 348],
  LU:  [276, 250, 528],
  DK:  [276, 752],
  IE:  [826],
  GB:  [372, 250],
  NL:  [276, 250, 442],
  HR:  [499, 688, 705, 40, 70, 348],
  TR:  [300, 100, 642, 268, 422, 368, 760, 364],
  SE:  [578, 246, 208],
  MY:  [764, 360, 96],
  TH:  [104, 418, 116, 458],
  PH:  [156, 360],
  NG:  [204, 120, 562, 140],
  KH:  [418, 764, 704],
  PA:  [188, 170],
  SG:  [458, 360],
  AE:  [512, 634, 682],
  MU:  [450],
  SC:  [450],
  VU:  [],
  HK:  [156],
  CA:  [840],
  US:  [124, 484],
  CN:  [643, 496, 398, 356, 50, 104, 418, 704, 408, 410],
}

// ─── FIREFLIES CANVAS ───────────────────────────────────────────────────────
interface FirefliesProps { originX: number; originY: number; count?: number }

const Fireflies = ({ originX, originY, count = 16 }: FirefliesProps) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    let raf: number, W = 0, H = 0

    type FF = {
      x: number; y: number
      vx: number; vy: number
      spd: number; maxD: number
      returning: boolean
      trail: { x: number; y: number }[]
      alpha: number; size: number
    }
    const flies: FF[] = []

    const spawn = (scatter = false): FF => {
      const angle = Math.random() * Math.PI * 2
      const spd = 0.25 + Math.random() * 1.4
      const maxD = 55 + Math.random() * 190
      return {
        x: scatter ? originX + (Math.random() - 0.5) * 50 : originX,
        y: scatter ? originY + (Math.random() - 0.5) * 50 : originY,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        spd, maxD, returning: false,
        trail: [],
        alpha: 0.45 + Math.random() * 0.55,
        size: 1 + Math.random() * 1.2,
      }
    }

    const resize = () => {
      W = c.offsetWidth; H = c.offsetHeight
      c.width = W * dpr; c.height = H * dpr
      ctx.scale(dpr, dpr)
    }

    for (let i = 0; i < count; i++) flies.push(spawn(true))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (const f of flies) {
        f.trail.unshift({ x: f.x, y: f.y })
        if (f.trail.length > 12) f.trail.pop()

        const dist = Math.hypot(f.x - originX, f.y - originY)

        if (!f.returning) {
          f.x += f.vx; f.y += f.vy
          if (dist >= f.maxD) {
            f.returning = true
            const back = Math.atan2(originY - f.y, originX - f.x)
            f.vx = Math.cos(back) * f.spd * 0.85
            f.vy = Math.sin(back) * f.spd * 0.85
          }
        } else {
          f.x += f.vx; f.y += f.vy
          if (dist < 5) Object.assign(f, spawn(false))
        }

        // trail
        for (let i = 1; i < f.trail.length; i++) {
          const al = (1 - i / f.trail.length) * f.alpha * 0.55
          ctx.beginPath()
          ctx.moveTo(f.trail[i - 1].x, f.trail[i - 1].y)
          ctx.lineTo(f.trail[i].x, f.trail[i].y)
          ctx.strokeStyle = `rgba(68,76,231,${al})`
          ctx.lineWidth = f.size * 0.7
          ctx.stroke()
        }

        // glow
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 4)
        g.addColorStop(0, `rgba(68,76,231,${f.alpha * 0.8})`)
        g.addColorStop(1, 'rgba(68,76,231,0)')
        ctx.beginPath(); ctx.arc(f.x, f.y, f.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()

        // core dot
        ctx.beginPath(); ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,190,255,${f.alpha})`; ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize(); draw()
    const ro = new ResizeObserver(resize); ro.observe(c)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [originX, originY, count])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 4 }}
    />
  )
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
interface TerritoryMapProps {
  iso: string
  className?: string
}

export const TerritoryMap = ({ iso, className = '' }: TerritoryMapProps) => {
  const proj      = PROJ[iso]    ?? { scale: 2000, center: [0, 30] as [number, number] }
  const marker    = MARKERS[iso]
  const targetId  = ISO[iso]
  const neighbors = NEIGHBORS[iso] ?? []
  const noGeo     = NO_GEO.has(iso)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const [origin, setOrigin] = useState({ x: 220, y: 200 })

  useEffect(() => {
    const calc = () => {
      const el = wrapRef.current; if (!el || !marker) return
      const W = el.offsetWidth, H = el.offsetHeight
      const [cLng, cLat] = proj.center
      const sc = proj.scale
      const toMY = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
      const dx = (marker.coords[0] - cLng) * sc * (Math.PI / 180)
      const dy = -(toMY(marker.coords[1]) - toMY(cLat)) * sc
      setOrigin({ x: W / 2 + dx, y: H / 2 + dy })
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [iso, proj, marker])

  // ── FALLBACK: territory not in GeoJSON ────────────────────────────────────
  if (noGeo) return (
    <div
      ref={wrapRef}
      className={`absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none ${className}`}
      style={{ width: '460px', height: '520px', zIndex: 2 }}
    >
      {marker && <Fireflies originX={origin.x} originY={origin.y} count={16} />}

      {/* Show neighbor countries as geographic context */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={proj}
        width={460}
        height={520}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const isNeighbor = neighbors.includes(Number(geo.id))
              if (!isNeighbor) return null
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#0a0f1a"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth={0.8}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>

        {marker && (
          <Marker coordinates={marker.coords}>
            {/* Pulsing rings */}
            {[90, 60, 35].map((r, i) => (
              <circle key={i} r={r} stroke="#444CE7" strokeWidth={0.5} fill="none" opacity={0.08 + i * 0.04}>
                <animate attributeName="r" values={`${r};${r + 15};${r}`} dur={`${4 - i}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values={`${0.08 + i * 0.04};0;${0.08 + i * 0.04}`} dur={`${4 - i}s`} repeatCount="indefinite" />
              </circle>
            ))}
            <circle r={5} fill="#444CE7" opacity={0.9} />
            <circle r={2} fill="#B4BEFF" opacity={0.9} />
            <text textAnchor="start" x={14} y={-4} fill="#444CE7" fontSize={9} fontFamily="Manrope" fontWeight={600}>
              {marker.label}
            </text>
            <text textAnchor="start" x={14} y={8} fill="#444CE7" fontSize={7} fontFamily="Manrope" fontWeight={500} opacity={0.6}>
              {marker.sub}
            </text>
          </Marker>
        )}
      </ComposableMap>
    </div>
  )

  // ── NORMAL: render Geography ───────────────────────────────────────────────
  return (
    <div
      ref={wrapRef}
      className={`absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none ${className}`}
      style={{ width: '460px', height: '520px', zIndex: 2 }}
    >
      {/* Fireflies above map, below marker text */}
      {marker && (
        <Fireflies originX={origin.x} originY={origin.y} count={16} />
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={proj}
        width={460}
        height={520}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const id = Number(geo.id)
              const isTarget   = id === targetId
              const isNeighbor = neighbors.includes(id)

              if (!isTarget && !isNeighbor) return null

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isTarget ? '#141822' : '#0a0f1a'}
                  stroke={isTarget ? 'rgba(240,235,224,0.15)' : 'rgba(255,255,255,0.05)'}
                  strokeWidth={isTarget ? 1.2 : 0.6}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>

        {/* City marker */}
        {marker && (
          <Marker coordinates={marker.coords}>
            <circle r={18} stroke="#444CE7" strokeWidth={0.5} fill="none" opacity={0.15}>
              <animate attributeName="r" values="18;30;18" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle r={12} stroke="#444CE7" strokeWidth={1} fill="none" opacity={0.4}>
              <animate attributeName="r" values="12;22;12" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.05;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r={5} fill="#444CE7" opacity={0.9} />
            <circle r={2} fill="#B4BEFF" opacity={0.9} />
            <text textAnchor="start" x={14} y={-4} fill="#444CE7" fontSize={9} fontFamily="Manrope" fontWeight={600}>
              {marker.label}
            </text>
            <text textAnchor="start" x={14} y={8} fill="#444CE7" fontSize={7} fontFamily="Manrope" fontWeight={500} opacity={0.6}>
              {marker.sub}
            </text>
          </Marker>
        )}
      </ComposableMap>
    </div>
  )
}

export default TerritoryMap
