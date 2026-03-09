import { useRef, useEffect, useState, useCallback } from "react";

// ── DATA ─────────────────────────────────────────────────────────────
interface JNode {
  name: string;
  lat: number;
  lon: number;
  regulator: string;
  tier: 1 | 2;
}

const NODES: JNode[] = [
  { name: "Malta", lat: 35.9, lon: 14.5, regulator: "MGA", tier: 1 },
  { name: "Gibraltar", lat: 36.1, lon: -5.3, regulator: "GFSC", tier: 2 },
  { name: "Cyprus", lat: 35.1, lon: 33.4, regulator: "CySEC", tier: 1 },
  { name: "Estonia", lat: 58.6, lon: 25.0, regulator: "EFSA", tier: 2 },
  { name: "UK", lat: 51.5, lon: -0.1, regulator: "FCA", tier: 1 },
  { name: "Switzerland", lat: 46.8, lon: 8.2, regulator: "FINMA", tier: 1 },
  { name: "Cayman", lat: 19.3, lon: -81.4, regulator: "CIMA", tier: 1 },
  { name: "BVI", lat: 18.4, lon: -64.6, regulator: "FSC", tier: 2 },
  { name: "Seychelles", lat: -4.7, lon: 55.5, regulator: "FSA", tier: 2 },
  { name: "Hong Kong", lat: 22.3, lon: 114.2, regulator: "SFC", tier: 1 },
  { name: "Singapore", lat: 1.3, lon: 103.8, regulator: "MAS", tier: 1 },
  { name: "UAE", lat: 25.2, lon: 55.3, regulator: "DFSA", tier: 1 },
  { name: "Delaware", lat: 39.0, lon: -75.5, regulator: "DPOS", tier: 2 },
  { name: "Belize", lat: 17.2, lon: -88.5, regulator: "IFSC", tier: 2 },
  { name: "Curacao", lat: 12.1, lon: -68.9, regulator: "GCB", tier: 2 },
];

const ROUTES: [number, number][] = [
  [4, 0],  // UK↔Malta
  [4, 9],  // UK↔HK
  [4, 6],  // UK↔Cayman
  [9, 10], // HK↔Singapore
  [9, 8],  // HK↔Seychelles
  [0, 2],  // Malta↔Cyprus
  [0, 3],  // Malta↔Estonia
  [10, 11],// Singapore↔UAE
  [11, 5], // UAE↔Switzerland
  [6, 7],  // Cayman↔BVI
  [6, 12], // Cayman↔Delaware
  [1, 4],  // Gibraltar↔UK
  [13, 14],// Belize↔Curacao
];

// ── Simplified continent outlines (lon, lat pairs) ───────────────────
// Very simplified for Canvas rendering
const CONTINENTS: [number, number][][] = [
  // Europe
  [[-10,35],[-5,36],[0,38],[3,43],[5,44],[10,44],[12,46],[13,45],[16,46],[20,40],[25,35],[30,37],[28,41],[30,42],[28,44],[32,46],[34,47],[30,48],[20,48],[15,48],[10,48],[5,49],[2,51],[-5,50],[-8,44],[-10,38],[-10,35]],
  // Africa
  [[-17,15],[-15,11],[-8,5],[5,5],[10,2],[10,0],[12,-5],[15,-5],[20,-15],[25,-15],[30,-25],[32,-28],[35,-34],[30,-30],[33,-25],[35,-20],[40,-15],[42,-12],[50,-10],[51,-1],[45,12],[40,14],[35,12],[33,10],[30,15],[25,20],[20,25],[15,30],[10,32],[10,37],[5,36],[0,35],[-5,36],[-10,35],[-15,28],[-17,21],[-17,15]],
  // Asia
  [[30,42],[35,42],[40,40],[45,38],[50,37],[55,25],[60,25],[65,25],[70,20],[75,15],[80,10],[82,8],[85,22],[88,22],[90,20],[95,16],[100,14],[100,2],[104,1],[110,2],[115,5],[120,15],[120,22],[115,23],[118,25],[122,30],[125,35],[128,36],[130,35],[132,33],[135,35],[140,36],[140,40],[142,43],[145,45],[140,50],[135,55],[130,60],[135,65],[140,70],[150,65],[160,60],[170,65],[180,65]],
  // North America
  [[-170,65],[-165,62],[-155,60],[-150,60],[-140,60],[-138,57],[-136,58],[-130,55],[-125,50],[-124,46],[-118,34],[-115,32],[-110,30],[-105,25],[-100,20],[-95,18],[-90,16],[-87,15],[-84,16],[-82,10],[-80,8],[-80,10],[-82,15],[-85,22],[-80,25],[-82,30],[-76,35],[-72,40],[-70,42],[-65,44],[-62,47],[-60,47],[-65,50],[-55,52],[-55,50],[-60,48],[-55,47],[-53,47],[-57,52],[-62,55],[-68,58],[-73,58],[-80,60],[-85,65],[-90,65],[-95,70],[-100,70],[-110,70],[-120,70],[-130,70],[-140,70],[-150,70],[-160,70],[-170,65]],
  // South America
  [[-82,10],[-80,8],[-77,4],[-75,0],[-75,-5],[-70,-15],[-65,-20],[-60,-25],[-55,-30],[-50,-28],[-48,-25],[-45,-23],[-43,-22],[-40,-20],[-38,-15],[-35,-10],[-35,-5],[-50,0],[-52,3],[-55,5],[-60,8],[-65,10],[-70,12],[-73,10],[-77,8],[-82,10]],
  // Australia
  [[115,-35],[120,-35],[130,-32],[135,-35],[138,-35],[140,-38],[145,-39],[150,-37],[153,-27],[148,-20],[145,-15],[142,-11],[136,-12],[130,-12],[125,-15],[115,-22],[114,-25],[114,-30],[115,-35]],
];

// ── Packet ─────────────────────────────────────────────────────────
interface Packet {
  routeIdx: number;
  progress: number;
  speed: number;
  color: string;
}

// ── Component ──────────────────────────────────────────────────────
const WorldMapCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const frameRef = useRef(0);
  const packetsRef = useRef<Packet[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1, y: -1 });
  const hoveredRef = useRef<number>(-1);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; node: JNode } | null>(null);

  const latLonToXY = useCallback((lat: number, lon: number, w: number, h: number) => {
    return {
      x: ((lon + 180) / 360) * w,
      y: ((90 - lat) / 180) * h,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      const W = canvas.getBoundingClientRect().width;
      const H = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, W, H);
      frameRef.current++;
      const frame = frameRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ── Grid lines ──────────────────────────────
      ctx.strokeStyle = "rgba(68,76,231,0.03)";
      ctx.lineWidth = 0.5;
      for (let lat = -60; lat <= 90; lat += 30) {
        const y = ((90 - lat) / 180) * H;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      for (let lon = -180; lon <= 180; lon += 30) {
        const x = ((lon + 180) / 360) * W;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      // ── Continents ──────────────────────────────
      CONTINENTS.forEach((continent) => {
        ctx.beginPath();
        continent.forEach(([lon, lat], i) => {
          const { x, y } = latLonToXY(lat, lon, W, H);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = "rgba(68,76,231,0.02)";
        ctx.fill();
        ctx.strokeStyle = "rgba(68,76,231,0.08)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      });

      // ── Compute node screen positions ───────────
      const nodePositions = NODES.map((n) => latLonToXY(n.lat, n.lon, W, H));

      // ── Detect hovered node ─────────────────────
      let hovered = -1;
      if (mx >= 0 && my >= 0) {
        nodePositions.forEach((pos, i) => {
          const dist = Math.hypot(pos.x - mx, pos.y - my);
          if (dist < 20) hovered = i;
        });
      }
      hoveredRef.current = hovered;

      // ── Route arcs ──────────────────────────────
      ROUTES.forEach(([a, b]) => {
        const p1 = nodePositions[a];
        const p2 = nodePositions[b];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        const cpY = midY - dist * 0.3;

        const isHighlighted = hovered === a || hovered === b;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(midX, cpY, p2.x, p2.y);
        ctx.strokeStyle = isHighlighted ? "rgba(68,76,231,0.22)" : "rgba(68,76,231,0.07)";
        ctx.lineWidth = isHighlighted ? 0.9 : 0.5;
        ctx.stroke();
      });

      // ── Packets ─────────────────────────────────
      if (frame % 40 === 0) {
        const ri = Math.floor(Math.random() * ROUTES.length);
        packetsRef.current.push({
          routeIdx: ri,
          progress: 0,
          speed: 0.003 + Math.random() * 0.004,
          color: Math.random() > 0.5 ? "#444CE7" : "#6172F3",
        });
      }

      packetsRef.current = packetsRef.current.filter((p) => p.progress <= 1);
      packetsRef.current.forEach((pkt) => {
        pkt.progress += pkt.speed;
        const [a, b] = ROUTES[pkt.routeIdx];
        const p1 = nodePositions[a];
        const p2 = nodePositions[b];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        const cpY = midY - dist * 0.3;
        const t = pkt.progress;

        // Quadratic bezier point
        const x = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * midX + t * t * p2.x;
        const y = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * cpY + t * t * p2.y;

        // Tail (previous position)
        const tPrev = Math.max(0, t - 0.06);
        const xPrev = (1 - tPrev) * (1 - tPrev) * p1.x + 2 * (1 - tPrev) * tPrev * midX + tPrev * tPrev * p2.x;
        const yPrev = (1 - tPrev) * (1 - tPrev) * p1.y + 2 * (1 - tPrev) * tPrev * cpY + tPrev * tPrev * p2.y;

        // Tail gradient
        const tailGrad = ctx.createLinearGradient(xPrev, yPrev, x, y);
        tailGrad.addColorStop(0, "rgba(68,76,231,0)");
        tailGrad.addColorStop(1, pkt.color);
        ctx.beginPath();
        ctx.moveTo(xPrev, yPrev);
        ctx.lineTo(x, y);
        ctx.strokeStyle = tailGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
        glow.addColorStop(0, pkt.color + "66");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Nodes ───────────────────────────────────
      let tooltipData: { x: number; y: number; node: JNode } | null = null;

      nodePositions.forEach((pos, i) => {
        const node = NODES[i];
        const r = node.tier === 1 ? 5 : 3.5;
        const isHovered = hovered === i;
        const pulse = Math.sin(frame * 0.04 + i * 0.7) * 0.5 + 0.5;

        // Pulsing outer ring
        const pulseR = r + 8 + pulse * 6;
        const pulseAlpha = (1 - pulse) * 0.15;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(68,76,231,${pulseAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Outer ring
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r + 3, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(68,76,231,0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Radial glow
        const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, isHovered ? 20 : 12);
        glow.addColorStop(0, isHovered ? "rgba(68,76,231,0.25)" : "rgba(68,76,231,0.12)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, isHovered ? 20 : 12, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        const dotR = isHovered ? r * 1.4 : r;
        ctx.fillStyle = isHovered ? "#444CE7" : "#6172F3";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, dotR, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.font = "10px Manrope, sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = isHovered ? "rgba(240,235,224,0.85)" : "rgba(240,235,224,0.55)";
        ctx.fillText(node.name, pos.x, pos.y - r - 10);

        // Regulator on hover
        if (isHovered) {
          ctx.font = "bold 9px Manrope, sans-serif";
          ctx.fillStyle = "#444CE7";
          ctx.fillText(node.regulator, pos.x, pos.y - r - 22);
          tooltipData = { x: pos.x, y: pos.y, node };
        }
      });

      // Update tooltip state (throttled to avoid excessive renders)
      if (frame % 3 === 0) {
        setTooltip(tooltipData);
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
  }, [latLonToXY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ cursor: hoveredRef.current >= 0 ? "pointer" : "default" }}
      />
      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute pointer-events-none z-20"
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 20,
            transform: "translateY(-100%)",
          }}
        >
          <div
            style={{
              background: "rgba(13,13,13,0.95)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(68,76,231,0.3)",
              padding: "10px 14px",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 500, color: "#F0EBE0" }}>{tooltip.node.name}</div>
            <div style={{ fontSize: 11, color: "#444CE7", marginTop: 2, fontWeight: 600 }}>{tooltip.node.regulator}</div>
            <div
              style={{
                fontSize: 10,
                color: "#5A5550",
                marginTop: 4,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {tooltip.node.tier === 1 ? "Tier 1" : "Tier 2"} Jurisdiction
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorldMapCanvas;
