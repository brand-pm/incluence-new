import { useEffect, useRef, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// ── Territories missing from world-atlas 110m ─────────────────────────────
// Hand-drawn SVG paths in a 400×400 viewBox
interface HandDrawnDef {
  path: string
  viewBox?: string
  markerXY: [number, number]
  label: string
  sub: string
}

const HAND_DRAWN: Record<string, HandDrawnDef> = {
  IM: {
    path: 'M200,90 L260,140 L280,200 L270,260 L230,310 L190,320 L150,290 L130,230 L135,165 L165,115 Z',
    markerXY: [205, 210],
    label: 'Douglas',
    sub: 'GSC HQ',
  },
  GI: {
    path: 'M195,80 L210,82 L218,100 L222,160 L220,240 L215,310 L208,340 L200,342 L193,340 L187,310 L182,240 L180,160 L184,100 L192,82 Z',
    markerXY: [200, 210],
    label: 'Gibraltar',
    sub: 'GBGA HQ',
  },
  CW: {
    path: 'M80,180 L110,160 L150,152 L200,148 L255,150 L300,156 L330,168 L340,185 L330,205 L300,218 L255,225 L200,228 L150,225 L110,215 L80,200 Z',
    markerXY: [200, 188],
    label: 'Willemstad',
    sub: 'CGA HQ',
  },
  KY: {
    path: 'M60,200 L120,180 L200,175 L260,180 L290,195 L280,218 L220,228 L150,230 L90,222 L60,210 Z M300,168 L340,160 L365,163 L368,175 L355,182 L315,180 Z M310,190 L355,182 L378,185 L380,198 L365,207 L318,205 Z',
    markerXY: [175, 202],
    label: 'George Town',
    sub: 'CIMA HQ',
  },
  VG: {
    path: 'M130,195 L175,178 L230,172 L275,175 L295,188 L285,208 L245,220 L195,225 L148,218 L128,205 Z M300,175 L330,168 L348,172 L345,185 L318,188 Z M105,210 L125,205 L130,215 L120,222 L105,220 Z',
    markerXY: [210, 198],
    label: 'Road Town',
    sub: 'FSC BVI',
  },
  AD: {
    path: 'M150,140 L200,118 L255,122 L285,148 L290,185 L275,220 L240,248 L195,255 L158,240 L138,210 L135,175 Z',
    markerXY: [210, 188],
    label: 'Andorra la Vella',
    sub: 'AFA HQ',
  },
  LI: {
    path: 'M185,80 L215,82 L230,110 L235,160 L232,220 L225,275 L210,310 L195,315 L178,308 L168,270 L165,215 L163,160 L168,110 Z',
    markerXY: [200, 210],
    label: 'Vaduz',
    sub: 'FMA HQ',
  },
  LC: {
    path: 'M200,90 L235,120 L255,165 L258,215 L245,268 L220,305 L200,318 L178,305 L155,265 L145,215 L148,165 L168,120 Z',
    markerXY: [200, 200],
    label: 'Castries',
    sub: 'ECFH HQ',
  },
  BB: {
    path: 'M200,95 L230,125 L248,170 L250,220 L240,268 L218,300 L200,310 L182,300 L162,268 L152,218 L155,170 L172,125 Z',
    markerXY: [200, 200],
    label: 'Bridgetown',
    sub: 'GCB HQ',
  },
  VC: {
    path: 'M200,85 L232,115 L248,165 L250,225 L238,278 L215,308 L200,315 L184,308 L162,278 L151,225 L153,165 L170,115 Z',
    markerXY: [200, 200],
    label: 'Kingstown',
    sub: 'FSA SVG',
  },
  SC: {
    path: 'M195,88 L225,115 L240,158 L242,205 L235,255 L218,295 L200,308 L182,295 L165,255 L158,205 L160,158 L175,115 Z',
    markerXY: [200, 200],
    label: 'Victoria',
    sub: 'FSA HQ',
  },
  MU: {
    path: 'M150,145 L210,120 L268,138 L295,185 L290,240 L260,285 L215,300 L168,288 L135,250 L125,198 Z',
    markerXY: [210, 210],
    label: 'Port Louis',
    sub: 'FSC HQ',
  },
}

// ── ISO numeric codes for world-atlas topojson ────────────────────────────
const ISO: Record<string, number> = {
  MT:470, CY:196, CR:188, SE:752, PH:608, BZ:84, NG:566, KH:116, PA:591,
  ME:499, VU:548, EE:233, LT:440, CH:756, US:840, PL:616, HK:344,
  GB:826, DK:208, CZ:203, AE:784, SG:702, IE:372, DE:276, HU:348, LU:442,
  NL:528, HR:191, MY:458, TH:764, CA:124, CN:156, BG:100, SK:703, PT:620,
  TR:792,
}

// ── Projection config ─────────────────────────────────────────────────────
type Proj = { scale: number; center: [number, number] }
const PROJ: Record<string, Proj> = {
  MT: { scale:28000,  center:[14.44, 35.90]  },
  CY: { scale:5500,   center:[33.20, 35.00]  },
  CR: { scale:4000,   center:[-83.75, 9.75]  },
  SE: { scale:700,    center:[18.10, 62.00]  },
  PH: { scale:1000,   center:[122.00, 12.50] },
  BZ: { scale:6000,   center:[-88.50, 17.20] },
  NG: { scale:700,    center:[8.70, 9.10]    },
  KH: { scale:2000,   center:[104.90, 12.60] },
  PA: { scale:3000,   center:[-80.00, 8.90]  },
  ME: { scale:5500,   center:[19.30, 42.78]  },
  VU: { scale:6000,   center:[166.96,-15.38] },
  EE: { scale:2200,   center:[25.00, 58.70]  },
  LT: { scale:2000,   center:[23.90, 55.30]  },
  CH: { scale:2800,   center:[8.20, 46.85]   },
  US: { scale:320,    center:[-98.00, 39.00] },
  PL: { scale:1200,   center:[19.10, 51.90]  },
  HK: { scale:20000,  center:[114.18, 22.32] },
  GB: { scale:900,    center:[-2.00, 54.00]  },
  DK: { scale:1400,   center:[10.00, 56.00]  },
  CZ: { scale:2000,   center:[15.50, 49.80]  },
  AE: { scale:2800,   center:[54.50, 24.00]  },
  SG: { scale:45000,  center:[103.82, 1.35]  },
  IE: { scale:1800,   center:[-8.00, 53.40]  },
  DE: { scale:900,    center:[10.50, 51.20]  },
  HU: { scale:2200,   center:[19.04, 47.50]  },
  LU: { scale:12000,  center:[6.13, 49.82]   },
  NL: { scale:2000,   center:[5.30, 52.30]   },
  HR: { scale:2200,   center:[16.50, 45.20]  },
  MY: { scale:1200,   center:[109.70, 3.10]  },
  TH: { scale:1000,   center:[101.00, 15.00] },
  CA: { scale:280,    center:[-96.00, 56.00] },
  CN: { scale:380,    center:[105.00, 35.00] },
  BG: { scale:2200,   center:[25.50, 42.70]  },
  SK: { scale:2800,   center:[19.70, 48.70]  },
  PT: { scale:1800,   center:[-8.00, 39.50]  },
  TR: { scale:700,    center:[35.00, 39.00]  },
}

// ── Marker coords for topojson countries ─────────────────────────────────
type MarkerDef = { coords: [number, number]; label: string; sub: string }
const MARKERS: Record<string, MarkerDef> = {
  MT: { coords:[14.51, 35.90],  label:'Valletta',       sub:'MGA HQ'           },
  CY: { coords:[33.36, 35.17],  label:'Nicosia',        sub:'CySEC HQ'         },
  CR: { coords:[-84.09, 9.93],  label:'San José',       sub:'Municipality'     },
  SE: { coords:[18.07, 59.33],  label:'Stockholm',      sub:'Spelinspektionen' },
  PH: { coords:[121.00, 14.60], label:'Manila',         sub:'PAGCOR HQ'        },
  BZ: { coords:[-88.77, 17.25], label:'Belmopan',       sub:'GSB HQ'           },
  NG: { coords:[7.49, 9.06],    label:'Abuja',          sub:'NLRC HQ'          },
  KH: { coords:[104.92, 11.56], label:'Phnom Penh',     sub:'GCB KH'           },
  PA: { coords:[-79.53, 8.99],  label:'Panama City',    sub:'Corp Registry'    },
  ME: { coords:[19.26, 42.44],  label:'Podgorica',      sub:'SEC HQ'           },
  VU: { coords:[168.32,-17.73], label:'Port Vila',      sub:'VFSC HQ'          },
  EE: { coords:[24.75, 59.44],  label:'Tallinn',        sub:'FIU HQ'           },
  LT: { coords:[25.28, 54.69],  label:'Vilnius',        sub:'Bank of Lithuania'},
  CH: { coords:[7.44, 46.95],   label:'Bern',           sub:'FINMA HQ'         },
  US: { coords:[-77.03, 38.90], label:'Washington DC',  sub:'FinCEN'           },
  PL: { coords:[21.01, 52.23],  label:'Warsaw',         sub:'KNF HQ'           },
  HK: { coords:[114.17, 22.28], label:'Hong Kong',      sub:'HKMA HQ'          },
  GB: { coords:[-0.12, 51.51],  label:'London',         sub:'FCA HQ'           },
  DK: { coords:[12.57, 55.68],  label:'Copenhagen',     sub:'Finanstilsynet'   },
  CZ: { coords:[14.42, 50.08],  label:'Prague',         sub:'CNB HQ'           },
  AE: { coords:[54.37, 24.45],  label:'Abu Dhabi',      sub:'DIFC / ADGM'      },
  SG: { coords:[103.82, 1.35],  label:'Singapore',      sub:'ACRA HQ'          },
  IE: { coords:[-6.27, 53.33],  label:'Dublin',         sub:'CBI HQ'           },
  DE: { coords:[13.40, 52.52],  label:'Berlin',         sub:'BaFin HQ'         },
  HU: { coords:[19.04, 47.50],  label:'Budapest',       sub:'MNB HQ'           },
  LU: { coords:[6.13, 49.61],   label:'Luxembourg',     sub:'CSSF HQ'          },
  NL: { coords:[4.90, 52.37],   label:'Amsterdam',      sub:'AFM HQ'           },
  HR: { coords:[15.97, 45.81],  label:'Zagreb',         sub:'HANFA HQ'         },
  MY: { coords:[101.70, 3.14],  label:'Kuala Lumpur',   sub:'SSM HQ'           },
  TH: { coords:[100.52, 13.75], label:'Bangkok',        sub:'DBD HQ'           },
  CA: { coords:[-75.70, 45.42], label:'Ottawa',         sub:'Corp Registry'    },
  CN: { coords:[116.40, 39.90], label:'Beijing',        sub:'SAMR HQ'          },
  BG: { coords:[23.32, 42.70],  label:'Sofia',          sub:'BNB HQ'           },
  SK: { coords:[17.11, 48.15],  label:'Bratislava',     sub:'MV SR HQ'         },
  PT: { coords:[-9.14, 38.72],  label:'Lisbon',         sub:'SEF HQ'           },
  TR: { coords:[32.86, 39.93],  label:'Ankara',         sub:'BDDK HQ'          },
}

// ── Neighbor ISO numeric codes shown as faint context ────────────────────
const NEIGHBORS: Record<string, number[]> = {
  MT: [380,788,434],
  CY: [792,422,376,818],
  CR: [591,332,320],
  ME: [191,688,705,8,807,300],
  EE: [440,246,643],
  LT: [440,616,112,643],
  CH: [380,276,40,250,442],
  PT: [724],
  HU: [40,703,191,642,807,688],
  DE: [528,442,250,756,40,203,616,208],
  CZ: [276,40,703,616],
  PL: [276,203,703,804,112,643,440],
  BG: [792,300,642,688,807],
  SK: [203,276,40,616,804,348],
  LU: [276,250,528],
  DK: [276,752],
  IE: [826],
  GB: [372,250],
  NL: [276,250,442],
  HR: [499,688,705,40,70,348],
  TR: [300,100,642,268,422,368,760],
  SE: [578,246,208],
  MY: [764,360],
  TH: [104,418,116,764,458],
  AE: [512,634,682],
  SG: [458,360],
  HK: [156],
  CA: [840],
  US: [124,484],
  CN: [643,496,398,356,104,418,704],
  NG: [204,120,562,140],
  KH: [418,764,704],
  PA: [188,170],
  // Hand-drawn territories — neighbor context via ComposableMap behind the SVG
  IM: [826,372],
  GI: [724,504],
  CW: [862,630],
  VU: [],
  BB: [],
  VC: [],
  SC: [450],
  MU: [450],
}

// Projection overrides for hand-drawn territories (used to render neighbor context)
const HAND_DRAWN_PROJ: Record<string, Proj> = {
  IM: { scale:2200,  center:[-4.48, 54.15]  },
  GI: { scale:3000,  center:[-5.35, 36.14]  },
  CW: { scale:4000,  center:[-68.93, 12.10] },
  BB: { scale:8000,  center:[-59.57, 13.10] },
  SC: { scale:3000,  center:[55.45, -4.68]  },
  MU: { scale:3000,  center:[57.55, -20.24] },
  VC: { scale:8000,  center:[-61.20, 13.25] },
  AD: { scale:8000,  center:[1.52, 42.51]   },
  LI: { scale:8000,  center:[9.55, 47.17]   },
  LC: { scale:8000,  center:[-60.98, 13.90] },
  KY: { scale:6000,  center:[-81.40, 19.30] },
  VG: { scale:6000,  center:[-64.63, 18.43] },
}

// ── Fireflies canvas ──────────────────────────────────────────────────────
const Fireflies = ({ ox, oy, count = 16 }: { ox: number; oy: number; count?: number }) => {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    let raf: number, W = 0, H = 0
    type FF = { x: number; y: number; vx: number; vy: number; spd: number; maxD: number; returning: boolean; trail: { x: number; y: number }[]; alpha: number; sz: number }
    const flies: FF[] = []
    const spawn = (scatter = false): FF => {
      const a = Math.random() * Math.PI * 2
      const spd = 0.22 + Math.random() * 1.5
      return {
        x: scatter ? ox + (Math.random() - .5) * 60 : ox,
        y: scatter ? oy + (Math.random() - .5) * 60 : oy,
        vx: Math.cos(a) * spd, vy: Math.sin(a) * spd,
        spd, maxD: 50 + Math.random() * 200,
        returning: false, trail: [],
        alpha: 0.4 + Math.random() * 0.6,
        sz: 0.9 + Math.random() * 1.3,
      }
    }
    const resize = () => {
      W = c.offsetWidth; H = c.offsetHeight
      c.width = W * dpr; c.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    for (let i = 0; i < count; i++) flies.push(spawn(true))
    resize()
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const f of flies) {
        f.trail.unshift({ x: f.x, y: f.y })
        if (f.trail.length > 12) f.trail.pop()
        const dist = Math.hypot(f.x - ox, f.y - oy)
        if (!f.returning) {
          f.x += f.vx; f.y += f.vy
          if (dist >= f.maxD) {
            f.returning = true
            const back = Math.atan2(oy - f.y, ox - f.x)
            f.vx = Math.cos(back) * f.spd * .85
            f.vy = Math.sin(back) * f.spd * .85
          }
        } else {
          f.x += f.vx; f.y += f.vy
          if (dist < 5) Object.assign(f, spawn(false))
        }
        for (let i = 1; i < f.trail.length; i++) {
          const al = (1 - i / f.trail.length) * f.alpha * 0.55
          ctx.beginPath()
          ctx.moveTo(f.trail[i - 1].x, f.trail[i - 1].y)
          ctx.lineTo(f.trail[i].x, f.trail[i].y)
          ctx.strokeStyle = `rgba(68,76,231,${al})`
          ctx.lineWidth = f.sz * 0.7
          ctx.stroke()
        }
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.sz * 4)
        g.addColorStop(0, `rgba(68,76,231,${f.alpha * 0.8})`)
        g.addColorStop(1, 'rgba(68,76,231,0)')
        ctx.beginPath(); ctx.arc(f.x, f.y, f.sz * 4, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(f.x, f.y, f.sz, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,190,255,${f.alpha})`; ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    const ro = new ResizeObserver(resize); ro.observe(c)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [ox, oy, count])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%', zIndex: 2 }}
    />
  )
}

// ── Hand-drawn territory render ───────────────────────────────────────────
const HandDrawnMap = ({ iso, W, H }: { iso: string; W: number; H: number }) => {
  const hd = HAND_DRAWN[iso]
  if (!hd) return null
  const vb = hd.viewBox ?? '0 0 400 400'
  const [mx, my] = hd.markerXY

  return (
    <svg
      viewBox={vb}
      width={W}
      height={H}
      className="absolute inset-0"
      style={{ zIndex: 1 }}
    >
      {/* Country fill */}
      <path
        d={hd.path}
        fill="#141822"
        stroke="rgba(240,235,224,0.15)"
        strokeWidth={1.5}
      />
      {/* Pulse rings at capital */}
      <circle cx={mx} cy={my} r={18} fill="none" stroke="rgba(68,76,231,0.3)" strokeWidth={1}>
        <animate attributeName="r" from="6" to="30" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.7" to="0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx={mx} cy={my} r={18} fill="none" stroke="rgba(68,76,231,0.2)" strokeWidth={0.8}>
        <animate attributeName="r" from="6" to="45" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx={mx} cy={my} r={18} fill="none" stroke="rgba(68,76,231,0.15)" strokeWidth={0.6}>
        <animate attributeName="r" from="6" to="60" dur="4.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="4.5s" repeatCount="indefinite" />
      </circle>
      {/* Core dot */}
      <circle cx={mx} cy={my} r={4} fill="#444CE7" />
      <circle cx={mx} cy={my} r={2} fill="white" />
      {/* Labels */}
      <text
        x={mx + 14}
        y={my - 6}
        fill="#F0EBE0"
        fontSize="14"
        fontWeight="600"
        fontFamily="inherit"
      >
        {hd.label}
      </text>
      <text
        x={mx + 14}
        y={my + 10}
        fill="#444CE7"
        fontSize="10"
        fontFamily="inherit"
        letterSpacing="0.08em"
      >
        {hd.sub}
      </text>
    </svg>
  )
}

// ── Neighbor context map for hand-drawn territories ───────────────────────
const NeighborContext = ({ iso }: { iso: string }) => {
  const neighbors = NEIGHBORS[iso] ?? []
  const hdProj = HAND_DRAWN_PROJ[iso]
  if (!hdProj || neighbors.length === 0) return null

  return (
    <div className="absolute inset-0" style={{ zIndex: 0, opacity: 0.5 }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: hdProj.scale, center: hdProj.center }}
        width={580}
        height={620}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const id = Number(geo.id)
              if (!neighbors.includes(id)) return null
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#0a0f1a"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth={0.6}
                  style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────
interface TerritoryMapProps {
  iso: string
  className?: string
}

export const TerritoryMap = ({ iso, className = '' }: TerritoryMapProps) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 580, h: 620 })
  const [ffOrigin, setFfOrigin] = useState({ x: 290, y: 310 })

  const isHandDrawn = iso in HAND_DRAWN
  const proj = PROJ[iso] ?? { scale: 2000, center: [0, 30] as [number, number] }
  const marker = MARKERS[iso]
  const targetId = ISO[iso]
  const neighbors = NEIGHBORS[iso] ?? []

  useEffect(() => {
    const update = () => {
      const el = wrapRef.current; if (!el) return
      const W = el.offsetWidth, H = el.offsetHeight
      setSize({ w: W, h: H })

      if (isHandDrawn) {
        const hd = HAND_DRAWN[iso]
        setFfOrigin({
          x: (hd.markerXY[0] / 400) * W,
          y: (hd.markerXY[1] / 400) * H,
        })
      } else if (marker) {
        const [cLng, cLat] = proj.center
        const sc = proj.scale
        const mY = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
        const dx = (marker.coords[0] - cLng) * sc * (Math.PI / 180)
        const dy = -(mY(marker.coords[1]) - mY(cLat)) * sc
        setFfOrigin({ x: W / 2 + dx, y: H / 2 + dy })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [iso])

  return (
    <div ref={wrapRef} className={`relative w-full h-full ${className}`}>
      {/* Fireflies — always rendered */}
      <Fireflies ox={ffOrigin.x} oy={ffOrigin.y} />

      {/* Hand-drawn SVG for micro-territories */}
      {isHandDrawn && (
        <>
          <NeighborContext iso={iso} />
          <HandDrawnMap iso={iso} W={size.w} H={size.h} />
        </>
      )}

      {/* Topojson map for normal countries */}
      {!isHandDrawn && (
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: proj.scale, center: proj.center }}
          width={580}
          height={620}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 1 }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map(geo => {
                const id = Number(geo.id)
                const isTarget = id === targetId
                const isNeighbor = neighbors.includes(id)
                if (!isTarget && !isNeighbor) return null
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isTarget ? '#141822' : '#0a0f1a'}
                    stroke={isTarget ? 'rgba(240,235,224,0.15)' : 'rgba(255,255,255,0.05)'}
                    strokeWidth={isTarget ? 1 : 0.6}
                    style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                  />
                )
              })
            }
          </Geographies>
          {marker && (
            <Marker coordinates={marker.coords}>
              <circle r={12} fill="none" stroke="rgba(68,76,231,0.3)" strokeWidth={1}>
                <animate attributeName="r" from="4" to="18" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle r={12} fill="none" stroke="rgba(68,76,231,0.2)" strokeWidth={0.8}>
                <animate attributeName="r" from="4" to="28" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle r={12} fill="none" stroke="rgba(68,76,231,0.15)" strokeWidth={0.6}>
                <animate attributeName="r" from="4" to="40" dur="4.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="4.5s" repeatCount="indefinite" />
              </circle>
              <circle r={4} fill="#444CE7" />
              <circle r={1.8} fill="white" />
              <text
                textAnchor="start"
                x={10}
                y={-5}
                fill="#F0EBE0"
                fontSize={13}
                fontWeight={600}
                style={{ fontFamily: 'inherit' }}
              >
                {marker.label}
              </text>
              <text
                textAnchor="start"
                x={10}
                y={9}
                fill="#444CE7"
                fontSize={9}
                style={{ fontFamily: 'inherit', letterSpacing: '0.08em' }}
              >
                {marker.sub}
              </text>
            </Marker>
          )}
        </ComposableMap>
      )}
    </div>
  )
}

export default TerritoryMap
