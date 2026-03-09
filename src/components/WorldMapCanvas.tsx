import { useRef, useEffect, useState, useCallback } from "react";

// ── NODE DATA ────────────────────────────────────────────────────────
interface JNode {
  id: string;
  name: string;
  svgX: number;
  svgY: number;
  tier: 1 | 2;
  reg: string;
  desc: string;
}

const NODES: JNode[] = [
  { id: "uk",        name: "United Kingdom", svgX: 999,  svgY: 214, tier: 1, reg: "FCA",   desc: "Financial Services" },
  { id: "malta",     name: "Malta",          svgX: 1081, svgY: 301, tier: 1, reg: "MGA",   desc: "Gambling & Gaming" },
  { id: "gibraltar", name: "Gibraltar",      svgX: 971,  svgY: 299, tier: 1, reg: "GBGA",  desc: "Sports Betting" },
  { id: "cyprus",    name: "Cyprus",         svgX: 1186, svgY: 305, tier: 1, reg: "CySEC", desc: "Investment Firms & FX" },
  { id: "estonia",   name: "Estonia",        svgX: 1139, svgY: 174, tier: 2, reg: "FIU",   desc: "Crypto & VASP" },
  { id: "swiss",     name: "Switzerland",    svgX: 1046, svgY: 240, tier: 1, reg: "FINMA", desc: "Banking & Fintech" },
  { id: "uae",       name: "UAE",            svgX: 1307, svgY: 360, tier: 1, reg: "DFSA",  desc: "Capital Markets" },
  { id: "hk",        name: "Hong Kong",      svgX: 1634, svgY: 376, tier: 1, reg: "SFC",   desc: "Securities & Asset Mgmt" },
  { id: "singapore", name: "Singapore",      svgX: 1577, svgY: 493, tier: 1, reg: "MAS",   desc: "Payments & Fintech" },
  { id: "cayman",    name: "Cayman Is.",     svgX: 548,  svgY: 393, tier: 1, reg: "CIMA",  desc: "Investment Funds & PE" },
  { id: "bvi",       name: "BVI",            svgX: 641,  svgY: 398, tier: 2, reg: "FSC",   desc: "Offshore Structures" },
  { id: "seychelles",name: "Seychelles",     svgX: 1308, svgY: 526, tier: 2, reg: "FSA",   desc: "Offshore Companies" },
  { id: "delaware",  name: "Delaware",       svgX: 581,  svgY: 283, tier: 2, reg: "SEC",   desc: "US Holdings" },
  { id: "belize",    name: "Belize",         svgX: 508,  svgY: 404, tier: 2, reg: "IFSC",  desc: "Forex Brokers" },
  { id: "curacao",   name: "Curaçao",        svgX: 617,  svgY: 433, tier: 2, reg: "CGA",   desc: "Online Gaming" },
];

const ROUTES: [string, string][] = [
  ["uk","malta"],["uk","hk"],["uk","cayman"],["uk","swiss"],["uk","cyprus"],
  ["hk","singapore"],["hk","seychelles"],["hk","uae"],
  ["malta","cyprus"],["malta","estonia"],["malta","gibraltar"],
  ["singapore","uae"],["uae","swiss"],["uae","seychelles"],
  ["cayman","bvi"],["cayman","delaware"],
  ["belize","curacao"],["curacao","cayman"],["swiss","cyprus"],["estonia","uk"],
];

const nodeIndex = (id: string) => NODES.findIndex(n => n.id === id);

// ── PACKET ───────────────────────────────────────────────────────────
interface Packet {
  routeIdx: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

// ── SVG PATHS ────────────────────────────────────────────────────────
const SVG_PATHS = [
  // North America
  "M128,106 L94,194 L311,233 L322,294 L350,328 L389,372 L500,411 L572,456 L517,383 L556,361 L550,333 L583,306 L589,272 L628,250 L706,239 L689,211 L644,167 L667,139 L633,122 L556,111 L556,100 L472,94 L361,94 L250,111 L128,106 Z",
  // Greenland
  "M889,72 L811,39 L644,56 L600,78 L700,122 L756,167 L722,156 L711,133 L694,100 L778,67 L889,72 Z",
  // South America
  "M600,433 L656,444 L711,472 L722,500 L806,528 L794,567 L761,628 L683,694 L617,789 L628,806 L600,800 L589,722 L600,667 L606,600 L550,511 L572,456 L600,433 Z",
  // Iceland
  "M867,150 L867,133 L928,139 L922,150 L867,150 Z",
  // Great Britain
  "M972,222 L978,217 L978,211 L983,206 L983,200 L989,194 L989,189 L983,183 L983,178 L972,178 L967,183 L972,189 L972,194 L978,200 L978,211 L983,217 L972,222 Z",
  // Ireland
  "M944,211 L944,200 L961,194 L967,200 L961,211 L944,217 L944,211 Z",
  // Europe + Russia
  "M950,294 L950,256 L972,233 L1011,217 L1044,200 L1078,194 L1100,189 L1122,183 L1156,172 L1122,150 L1167,111 L1233,100 L1333,111 L1356,128 L1400,139 L1411,150 L1344,167 L1311,167 L1278,178 L1222,222 L1289,239 L1244,267 L1228,272 L1206,294 L1200,300 L1133,306 L1089,300 L1072,289 L1028,300 L1000,300 L950,294 Z",
  // Africa
  "M972,294 L1000,306 L1056,317 L1078,322 L1139,328 L1178,328 L1206,378 L1233,417 L1244,439 L1200,483 L1233,500 L1222,528 L1222,556 L1200,600 L1183,644 L1111,694 L1100,689 L1094,656 L1078,628 L1067,583 L1083,556 L1039,517 L1033,500 L1044,483 L1011,472 L972,467 L933,467 L922,456 L911,444 L906,433 L906,417 L906,389 L917,372 L933,344 L944,322 L961,311 L972,300 L972,294 Z",
  // Madagascar
  "M1278,572 L1278,589 L1244,611 L1261,639 L1278,572 Z",
  // Arabia
  "M1206,294 L1244,322 L1267,339 L1311,378 L1233,417 L1206,378 L1194,328 L1211,306 L1206,294 Z",
  // India
  "M1344,361 L1378,378 L1378,456 L1428,456 L1444,456 L1444,422 L1489,378 L1511,378 L1456,411 L1411,433 L1378,456 L1344,361 Z",
  // Asia main
  "M1144,289 L1206,294 L1194,328 L1206,378 L1233,417 L1344,361 L1378,378 L1378,456 L1428,456 L1489,378 L1539,378 L1556,411 L1556,472 L1578,494 L1611,511 L1578,500 L1572,472 L1556,444 L1556,411 L1539,378 L1489,378 L1456,411 L1411,433 L1378,378 L1344,361 L1206,378 L1194,328 L1211,306 L1206,294 L1144,289 Z",
  // Asia east coast
  "M1633,378 L1667,311 L1678,289 L1722,267 L1750,222 L1783,167 L1989,128 L1778,94 L1589,94 L1400,139 L1311,167 L1278,178 L1222,222 L1289,239 L1244,267 L1222,267 L1200,278 L1178,272 L1161,272 L1144,289 L1156,267 L1211,244 L1222,222 L1400,139 L1589,94 L1778,94 L1989,128 L1783,167 L1750,222 L1722,267 L1678,289 L1667,311 L1667,361 L1633,378 Z",
  // Australia
  "M1722,583 L1756,567 L1767,578 L1778,611 L1806,622 L1844,639 L1850,667 L1844,683 L1817,711 L1806,711 L1778,706 L1767,694 L1744,683 L1639,667 L1633,622 L1650,611 L1678,594 L1722,583 Z",
  // Japan
  "M1722,328 L1728,317 L1756,300 L1783,289 L1789,278 L1783,272 L1778,278 L1783,289 L1756,300 L1733,311 L1728,317 L1722,328 Z",
  // SE Asia
  "M1539,378 L1556,411 L1556,472 L1578,494 L1578,500 L1611,506 L1644,517 L1589,528 L1572,500 L1556,472 L1550,444 L1556,411 L1539,378 Z",
  // Borneo
  "M1650,461 L1639,478 L1606,494 L1644,522 L1656,522 L1661,500 L1656,478 L1650,461 Z",
  // Sumatra
  "M1528,472 L1556,483 L1583,500 L1583,528 L1572,528 L1561,517 L1550,506 L1550,489 L1528,472 Z",
];

// Grid latitude lines
const LAT_LINES = [-60, -30, 0, 30, 60];
const LON_LINES = [-150,-120,-90,-60,-30,0,30,60,90,120,150];

function latToSvgY(lat: number) { return ((90 - lat) / 180) * 1000; }
function lonToSvgX(lon: number) { return ((lon + 180) / 360) * 2000; }

// ── COMPONENT ────────────────────────────────────────────────────────
const WorldMapCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const frameRef = useRef(0);
  const packetsRef = useRef<Packet[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1, y: -1 });
  const [hoveredNode, setHoveredNode] = useState<{ x: number; y: number; node: JNode } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn initial packets staggered
    for (let i = 0; i < 10; i++) {
      const ri = Math.floor(Math.random() * ROUTES.length);
      packetsRef.current.push({
        routeIdx: ri,
        progress: Math.random() * 0.8,
        speed: 0.002 + Math.random() * 0.003,
        color: Math.random() > 0.5 ? "#444CE7" : "#6172F3",
        size: 1.5 + Math.random() * 1.5,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    function arcCP(ax: number, ay: number, bx: number, by: number) {
      const dist = Math.hypot(bx - ax, by - ay);
      const mx = (ax + bx) / 2, my = (ay + by) / 2;
      const nx = -(by - ay) / dist, ny = (bx - ax) / dist;
      return { x: mx + nx * dist * 0.28, y: my + ny * dist * 0.28 };
    }

    function quadBez(ax: number, ay: number, cpx: number, cpy: number, bx: number, by: number, t: number) {
      const u = 1 - t;
      return {
        x: u * u * ax + 2 * u * t * cpx + t * t * bx,
        y: u * u * ay + 2 * u * t * cpy + t * t * by,
      };
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frameRef.current++;
      const frame = frameRef.current;
      const t = frame * 0.016; // ~time in seconds
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ── Node positions ───────────────────────
      const positions = NODES.map(n => ({
        x: (n.svgX / 2000) * W,
        y: (n.svgY / 1000) * H,
      }));

      // ── Detect hovered ───────────────────────
      let hovered = -1;
      if (mx >= 0 && my >= 0) {
        for (let i = 0; i < positions.length; i++) {
          if (Math.hypot(positions[i].x - mx, positions[i].y - my) < 20) {
            hovered = i;
            break;
          }
        }
      }

      // ── Route arcs ──────────────────────────
      ROUTES.forEach(([aId, bId], ri) => {
        const ai = nodeIndex(aId), bi = nodeIndex(bId);
        if (ai < 0 || bi < 0) return;
        const p1 = positions[ai], p2 = positions[bi];
        const cp = arcCP(p1.x, p1.y, p2.x, p2.y);
        const isHighlighted = hovered === ai || hovered === bi;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y);
        ctx.strokeStyle = isHighlighted ? "rgba(68,76,231,0.35)" : "rgba(68,76,231,0.09)";
        ctx.lineWidth = isHighlighted ? 1.1 : 0.6;
        ctx.stroke();
      });

      // ── Packets ─────────────────────────────
      if (Math.random() < 0.03) {
        const ri = Math.floor(Math.random() * ROUTES.length);
        packetsRef.current.push({
          routeIdx: ri,
          progress: 0,
          speed: 0.002 + Math.random() * 0.003,
          color: Math.random() > 0.5 ? "#444CE7" : "#6172F3",
          size: 1.5 + Math.random() * 1.5,
        });
      }

      packetsRef.current = packetsRef.current.filter(p => p.progress <= 1);
      packetsRef.current.forEach(pkt => {
        pkt.progress += pkt.speed;
        const [aId, bId] = ROUTES[pkt.routeIdx];
        const ai = nodeIndex(aId), bi = nodeIndex(bId);
        if (ai < 0 || bi < 0) return;
        const p1 = positions[ai], p2 = positions[bi];
        const cp = arcCP(p1.x, p1.y, p2.x, p2.y);

        const pos = quadBez(p1.x, p1.y, cp.x, cp.y, p2.x, p2.y, pkt.progress);
        const tPrev = Math.max(0, pkt.progress - 0.05);
        const prev = quadBez(p1.x, p1.y, cp.x, cp.y, p2.x, p2.y, tPrev);

        // Glow
        const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, pkt.size * 7);
        glow.addColorStop(0, pkt.color + "55");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pkt.size * 7, 0, Math.PI * 2);
        ctx.fill();

        // Tail
        const tailGrad = ctx.createLinearGradient(prev.x, prev.y, pos.x, pos.y);
        tailGrad.addColorStop(0, pkt.color + "00");
        tailGrad.addColorStop(1, pkt.color + "cc");
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = tailGrad;
        ctx.lineWidth = pkt.size * 1.3;
        ctx.stroke();

        // Core
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pkt.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Nodes ───────────────────────────────
      let tooltipData: { x: number; y: number; node: JNode } | null = null;

      positions.forEach((pos, i) => {
        const node = NODES[i];
        const isHov = hovered === i;
        const baseR = node.tier === 1 ? 5.5 : 3.5;
        const r = isHov ? baseR * 1.8 : baseR;
        const pulse = (Math.sin(t * 1.8 + node.svgX * 0.002) + 1) / 2;

        // 1. Pulse ring
        const pulseR = r + pulse * (node.tier === 1 ? 20 : 12);
        const pulseAlpha = (1 - pulse) * (node.tier === 1 ? 0.3 : 0.15);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(68,76,231,${pulseAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // 2. Outer ring
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r + 4, 0, Math.PI * 2);
        ctx.strokeStyle = isHov ? "rgba(97,114,243,0.75)" : "rgba(68,76,231,0.28)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // 3. Halo
        const haloR = r * (isHov ? 7 : 4);
        const halo = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, haloR);
        halo.addColorStop(0, isHov ? "rgba(97,114,243,0.55)" : "rgba(68,76,231,0.38)");
        halo.addColorStop(1, "transparent");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, haloR, 0, Math.PI * 2);
        ctx.fill();

        // 4. Core dot
        const core = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r);
        core.addColorStop(0, isHov ? "#ffffff" : "#8898ff");
        core.addColorStop(1, isHov ? "#6172F3" : "#3538CD");
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fill();

        // 5. Label
        const showLabel = node.tier === 1 || isHov;
        if (showLabel) {
          ctx.font = "500 10px Manrope, sans-serif";
          ctx.textAlign = "center";
          ctx.fillStyle = isHov ? "#F0EBE0" : "rgba(240,235,224,0.55)";
          ctx.fillText(node.name, pos.x, pos.y - r - 9);
        }
        if (isHov) {
          ctx.font = "500 9px Manrope, sans-serif";
          ctx.fillStyle = "#6172F3";
          ctx.fillText(node.reg, pos.x, pos.y + r + 16);
          tooltipData = { x: pos.x, y: pos.y, node };
        }
      });

      // Update tooltip
      if (frame % 3 === 0) {
        setHoveredNode(tooltipData);
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Layer 1: SVG static map */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
        viewBox="0 0 2000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mapglow" cx="62%" cy="38%" r="52%">
            <stop offset="0%" stopColor="#1a2068" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#080808" stopOpacity="0" />
          </radialGradient>
          <filter id="landfx" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
        </defs>
        <rect width="2000" height="1000" fill="url(#mapglow)" />

        {/* Grid — latitude */}
        {LAT_LINES.map(lat => {
          const y = latToSvgY(lat);
          const isEquator = lat === 0;
          return (
            <line
              key={`lat-${lat}`}
              x1="0" y1={y} x2="2000" y2={y}
              stroke={isEquator ? "rgba(68,76,231,0.14)" : "rgba(68,76,231,0.05)"}
              strokeWidth={isEquator ? "0.9" : "0.7"}
              strokeDasharray={isEquator ? "8 5" : undefined}
            />
          );
        })}
        {/* Grid — longitude */}
        {LON_LINES.map(lon => {
          const x = lonToSvgX(lon);
          return (
            <line
              key={`lon-${lon}`}
              x1={x} y1="0" x2={x} y2="1000"
              stroke="rgba(68,76,231,0.04)"
              strokeWidth="0.7"
            />
          );
        })}

        {/* Land — fill pass */}
        {SVG_PATHS.map((d, i) => (
          <path key={`fill-${i}`} d={d} fill="rgba(44,54,140,0.07)" stroke="none" />
        ))}
        {/* Land — outline pass */}
        {SVG_PATHS.map((d, i) => (
          <path
            key={`stroke-${i}`}
            d={d}
            fill="none"
            stroke="rgba(68,76,231,0.28)"
            strokeWidth="1.3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Layer 2: Canvas animations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 2 }}
      />

      {/* Tooltip */}
      {hoveredNode && (
        <div
          className="absolute pointer-events-none"
          style={{
            zIndex: 20,
            left: Math.min(hoveredNode.x + 18, (typeof window !== 'undefined' ? window.innerWidth - 220 : 800)),
            top: Math.max(hoveredNode.y - 96, 10),
          }}
        >
          <div
            style={{
              background: "rgba(10,10,20,0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(68,76,231,0.35)",
              padding: "14px 18px",
              minWidth: 180,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, color: "#F0EBE0", marginBottom: 4 }}>
              {hoveredNode.node.name}
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: "#6172F3", letterSpacing: "0.07em", marginBottom: 8 }}>
              {hoveredNode.node.reg}
            </div>
            <div style={{ fontSize: 12, color: "#9A9590", lineHeight: 1.55 }}>
              {hoveredNode.node.desc}
            </div>
            <div style={{
              fontSize: 10,
              letterSpacing: "0.06em",
              marginTop: 8,
              color: hoveredNode.node.tier === 1 ? "#12B76A" : "#6172F3",
            }}>
              ● {hoveredNode.node.tier === 1 ? "Tier 1 Regulated" : "Offshore / Low-tax"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorldMapCanvas;
