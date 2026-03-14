import { useEffect, useRef, useState } from 'react'
import {
  ComposableMap, Geographies, Geography, Marker
} from 'react-simple-maps'

const GEO_URL =
  'https://cdn.jsdelivr.net/npm/visionscarto-world-atlas@0.1.0/world/110m.json'

const ISO_CODES: Record<string, number> = {
  MT: 470, CW: 531, IM: 833, CR: 188, GI: 292, CY: 196,
  SE: 752, PH: 608, BZ: 84,  NG: 566, MU: 480, ME: 499,
  SC: 690, VU: 548, EE: 233, LT: 440, CH: 756, US: 840,
  PL: 616, GB: 826, DK: 208, CZ: 203, HK: 344, AE: 784,
  SG: 702, PA: 591, PT: 620, DE: 276, HU: 348, LU: 442,
  TR: 792, IE: 372, CA: 124, BG: 100,
}

/* Territories with no geometry in the TopoJSON source */
const NO_SHAPE = new Set(['IM', 'GI', 'KY', 'BVI', 'VC'])

/* Neighbor country codes to show as faint context */
const NEIGHBORS: Record<string, number[]> = {
  CY: [792, 422, 376],              // Turkey, Lebanon, Israel
  MT: [380, 788, 434],              // Italy, Tunisia, Libya
  ME: [191, 688, 705, 8, 807],      // Croatia, Serbia, Slovenia, Albania, N.Macedonia
  EE: [440, 246, 616],              // Latvia, Finland, Poland
  LT: [440, 616, 112, 643],         // Latvia, Poland, Belarus, Russia
  GI: [724, 504],                   // Spain, Morocco
  IM: [826, 372],                   // UK, Ireland
  CW: [862, 630, 332],              // Venezuela, Puerto Rico, Haiti
  CH: [276, 380, 40, 250],          // Germany, Italy, Austria, France
  PT: [724],                        // Spain
  HU: [40, 703, 804, 642, 191, 688, 705], // Austria, Slovakia, Ukraine, Romania, Croatia, Serbia, Slovenia
  DE: [616, 203, 40, 756, 250, 442, 56, 528, 208], // Poland, Czech, Austria, Switzerland, France, Luxembourg, Belgium, Netherlands, Denmark
  TR: [268, 51, 364, 368, 760, 196], // Georgia, Armenia, Iran, Iraq, Syria, Cyprus
  GB: [372],                        // Ireland
  IE: [826],                        // UK
  SE: [578, 246, 208],              // Norway, Finland, Denmark
  PL: [276, 203, 703, 804, 112, 440, 643], // Germany, Czech, Slovakia, Ukraine, Belarus, Latvia, Russia
  AE: [512, 682],                   // Oman, Saudi Arabia
  CR: [591, 558],                   // Panama, Nicaragua
  PA: [170, 188],                   // Colombia, Costa Rica
  US: [124, 484],                   // Canada, Mexico
  CA: [840],                        // USA
  NG: [562, 148, 120, 204],         // Niger, Chad, Cameroon, Benin
  BG: [642, 792, 300, 688, 807],    // Romania, Turkey, Greece, Serbia, N.Macedonia
  VU: [540],                        // New Caledonia
  MU: [],
  SC: [],
  BZ: [320, 484],                   // Guatemala, Mexico
  PH: [],
  HK: [156],                        // China
  SG: [458],                        // Malaysia
  LU: [276, 250, 56],               // Germany, France, Belgium
}

const PROJ: Record<string, { scale: number; center: [number, number] }> = {
  MT: { scale: 22000, center: [14.5,  35.9]  },
  CY: { scale: 5500,  center: [33.2,  35.0]  },
  GI: { scale: 90000, center: [-5.4,  36.1]  },
  IM: { scale: 6000,  center: [-4.5,  54.2]  },
  CW: { scale: 14000, center: [-69.0, 12.1]  },
  ME: { scale: 5000,  center: [19.3,  42.8]  },
  LU: { scale: 10000, center: [6.1,   49.6]  },
  EE: { scale: 2200,  center: [25.0,  58.6]  },
  LT: { scale: 2200,  center: [23.9,  55.2]  },
  CH: { scale: 2800,  center: [8.2,   46.8]  },
  PT: { scale: 1800,  center: [-8.0,  39.5]  },
  HU: { scale: 2200,  center: [19.0,  47.5]  },
  DE: { scale: 1000,  center: [10.5,  51.2]  },
  TR: { scale: 700,   center: [35.0,  39.0]  },
  GB: { scale: 900,   center: [-2.0,  54.0]  },
  IE: { scale: 2000,  center: [-8.0,  53.3]  },
  SE: { scale: 700,   center: [18.1,  62.0]  },
  PL: { scale: 1400,  center: [19.1,  51.9]  },
  AE: { scale: 2500,  center: [54.5,  24.0]  },
  SG: { scale: 40000, center: [103.8, 1.3]   },
  HK: { scale: 18000, center: [114.2, 22.3]  },
  CA: { scale: 280,   center: [-96.0, 56.0]  },
  US: { scale: 320,   center: [-98.0, 39.0]  },
  PA: { scale: 3000,  center: [-80.0, 9.0]   },
  CR: { scale: 4000,  center: [-83.8, 9.7]   },
  MU: { scale: 12000, center: [57.6, -20.3]  },
  SC: { scale: 14000, center: [55.5, -4.7]   },
  VU: { scale: 5000,  center: [167.0,-15.4]  },
  NG: { scale: 700,   center: [8.7,   9.1]   },
  PH: { scale: 1400,  center: [121.8, 12.9]  },
  BZ: { scale: 6000,  center: [-88.5, 17.2]  },
  BG: { scale: 2200,  center: [25.5,  42.7]  },
}

const MARKERS: Record<string, { coords: [number, number]; label: string }> = {
  MT: { coords: [14.51,  35.90], label: 'Valletta'    },
  CY: { coords: [33.36,  35.17], label: 'Nicosia'     },
  GI: { coords: [-5.35,  36.14], label: 'Gibraltar'   },
  IM: { coords: [-4.48,  54.15], label: 'Douglas'     },
  CW: { coords: [-68.93, 12.10], label: 'Willemstad'  },
  ME: { coords: [19.26,  42.44], label: 'Podgorica'   },
  EE: { coords: [24.75,  59.44], label: 'Tallinn'     },
  LT: { coords: [25.28,  54.69], label: 'Vilnius'     },
  CH: { coords: [7.44,   46.95], label: 'Bern'        },
  GB: { coords: [-0.12,  51.51], label: 'London'      },
  PT: { coords: [-9.14,  38.72], label: 'Lisbon'      },
  DE: { coords: [13.40,  52.52], label: 'Berlin'      },
  HU: { coords: [19.04,  47.50], label: 'Budapest'    },
  LU: { coords: [6.13,   49.61], label: 'Luxembourg'  },
  TR: { coords: [32.86,  39.93], label: 'Ankara'      },
  IE: { coords: [-6.27,  53.33], label: 'Dublin'      },
  SE: { coords: [18.07,  59.33], label: 'Stockholm'   },
  PL: { coords: [21.01,  52.23], label: 'Warsaw'      },
  AE: { coords: [54.37,  24.45], label: 'Abu Dhabi'   },
  SG: { coords: [103.82,  1.35], label: 'Singapore'   },
  HK: { coords: [114.16, 22.28], label: 'Hong Kong'   },
  PA: { coords: [-79.53,  8.99], label: 'Panama City' },
  CR: { coords: [-84.09,  9.93], label: 'San José'    },
  MU: { coords: [57.55, -20.16], label: 'Port Louis'  },
  CA: { coords: [-75.70, 45.42], label: 'Ottawa'      },
  US: { coords: [-77.03, 38.90], label: 'Washington'  },
  NG: { coords: [7.49,    9.06], label: 'Abuja'       },
  BG: { coords: [23.32,  42.70], label: 'Sofia'       },
}

/* ── Fireflies canvas — full-screen, flies outward ────── */

const Fireflies = ({
  originX, originY, count = 14
}: { originX: number; originY: number; count?: number }) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    let raf: number, W = 0, H = 0

    type FF = {
      x: number; y: number
      vx: number; vy: number
      trail: { x: number; y: number }[]
      alpha: number
      spd: number
    }
    const flies: FF[] = []

    const spawn = (): FF => {
      const angle = Math.random() * Math.PI * 2
      const spd = 0.4 + Math.random() * 0.8
      return {
        x: originX + (Math.random() - 0.5) * 20,
        y: originY + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        spd,
        trail: [],
        alpha: 0.4 + Math.random() * 0.5,
      }
    }

    const resize = () => {
      W = c.offsetWidth; H = c.offsetHeight
      c.width = W * dpr; c.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    for (let i = 0; i < count; i++) {
      const f = spawn()
      const progress = Math.random() * 0.7
      f.x = originX + f.vx * progress * 300
      f.y = originY + f.vy * progress * 300
      flies.push(f)
    }

    const isOutOfBounds = (f: FF) =>
      f.x < -30 || f.x > W + 30 || f.y < -30 || f.y > H + 30

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (let fi = 0; fi < flies.length; fi++) {
        const f = flies[fi]
        f.vx += (Math.random() - 0.5) * 0.01
        f.vy += (Math.random() - 0.5) * 0.01
        f.x += f.vx
        f.y += f.vy
        f.trail.unshift({ x: f.x, y: f.y })
        if (f.trail.length > 14) f.trail.pop()

        if (isOutOfBounds(f)) {
          flies[fi] = spawn()
          continue
        }

        const dist = Math.hypot(f.x - originX, f.y - originY)
        const maxDist = Math.max(W, H) * 0.7
        const fadedAlpha = f.alpha * Math.max(0, 1 - dist / maxDist)

        for (let i = 1; i < f.trail.length; i++) {
          const a = (1 - i / f.trail.length) * fadedAlpha * 0.5
          ctx.beginPath()
          ctx.moveTo(f.trail[i - 1].x, f.trail[i - 1].y)
          ctx.lineTo(f.trail[i].x, f.trail[i].y)
          ctx.strokeStyle = `rgba(68,76,231,${a})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 6)
        g.addColorStop(0, `rgba(68,76,231,${fadedAlpha})`)
        g.addColorStop(1, 'rgba(68,76,231,0)')
        ctx.beginPath(); ctx.arc(f.x, f.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()

        ctx.beginPath(); ctx.arc(f.x, f.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,190,255,${fadedAlpha})`; ctx.fill()
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
      style={{ zIndex: 5 }}
    />
  )
}

/* ── Marker SVG (shared between map and fallback) ─────── */

const MarkerSVG = ({ markerLabel, subLabel }: { markerLabel?: string; subLabel?: string }) => (
  <>
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
    {markerLabel && (
      <text
        textAnchor="start" x={14} y={-4}
        fill="#444CE7" fontSize={9} fontFamily="Manrope" fontWeight={600}
      >
        {markerLabel}
      </text>
    )}
    {subLabel && (
      <text
        textAnchor="start" x={14} y={8}
        fill="#444CE7" fontSize={7} fontFamily="Manrope" fontWeight={500} opacity={0.6}
      >
        {subLabel}
      </text>
    )}
  </>
)

/* ── Main component ───────────────────────────────────── */

interface TerritoryMapProps {
  iso: string
  markerLabel?: string
  subLabel?: string
  className?: string
}

export const TerritoryMap = ({
  iso, markerLabel, subLabel, className = ''
}: TerritoryMapProps) => {
  const proj = PROJ[iso] ?? { scale: 2000, center: [0, 30] as [number, number] }
  const marker = MARKERS[iso]
  const targetCode = ISO_CODES[iso]
  const neighborCodes = NEIGHBORS[iso] ?? []
  const neighborSet = new Set(neighborCodes.map(String))
  const wrapRef = useRef<HTMLDivElement>(null)

  const getPixelOrigin = () => {
    const el = wrapRef.current
    if (!el || !marker) return { x: (el?.offsetWidth ?? 200) / 2, y: (el?.offsetHeight ?? 200) / 2 }
    const W = el.offsetWidth, H = el.offsetHeight
    const [cLng, cLat] = proj.center
    const scale = proj.scale
    const toMercY = (lat: number) => Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    const dx = (marker.coords[0] - cLng) * scale * (Math.PI / 180)
    const dy = -(toMercY(marker.coords[1]) - toMercY(cLat)) * scale
    return { x: W / 2 + dx, y: H / 2 + dy }
  }

  const [origin, setOrigin] = useState({ x: 200, y: 150 })

  useEffect(() => {
    const update = () => setOrigin(getPixelOrigin())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [iso])

  /* ── NO_SHAPE fallback: pulsing rings + marker, no geography ── */
  if (NO_SHAPE.has(iso)) {
    return (
      <div
        ref={wrapRef}
        className={`absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none ${className}`}
        style={{ width: '460px', height: '520px', zIndex: 2 }}
      >
        {/* Show neighbor countries as context */}
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
                const isNeighbor = neighborSet.has(String(geo.id))
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isNeighbor ? '#0a0f1a' : 'transparent'}
                    stroke={isNeighbor ? 'rgba(255,255,255,0.06)' : 'rgba(240,235,224,0.02)'}
                    strokeWidth={isNeighbor ? 0.8 : 0.2}
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
              <MarkerSVG markerLabel={markerLabel} subLabel={subLabel} />
            </Marker>
          )}
        </ComposableMap>

        {marker && (
          <Fireflies originX={origin.x} originY={origin.y} count={14} />
        )}
      </div>
    )
  }

  /* ── Standard render with geography ── */
  return (
    <div
      ref={wrapRef}
      className={`absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none ${className}`}
      style={{ width: '460px', height: '520px', zIndex: 2 }}
    >
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
              const geoId = String(geo.id)
              const isTarget = geoId === String(targetCode)
              const isNeighbor = neighborSet.has(geoId)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    isTarget ? '#141822' :
                    isNeighbor ? '#0a0f1a' :
                    'transparent'
                  }
                  stroke={
                    isTarget ? 'rgba(240,235,224,0.15)' :
                    isNeighbor ? 'rgba(255,255,255,0.05)' :
                    'rgba(240,235,224,0.02)'
                  }
                  strokeWidth={
                    isTarget ? 1.2 :
                    isNeighbor ? 0.6 :
                    0.2
                  }
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
            <MarkerSVG markerLabel={markerLabel} subLabel={subLabel} />
          </Marker>
        )}
      </ComposableMap>

      {marker && (
        <Fireflies originX={origin.x} originY={origin.y} count={14} />
      )}
    </div>
  )
}

export default TerritoryMap
