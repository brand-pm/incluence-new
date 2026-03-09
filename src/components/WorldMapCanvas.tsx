import { useRef, useEffect, useState } from "react";

// ── SVG VIEWBOX (from world-map.svg) ─────────────────────────────────
const VB = { x: 30.767, y: 241.591, w: 784.077, h: 458.627 };

// ── NODE DATA (positions in SVG coordinate space) ────────────────────
interface JNode {
  id: string;
  name: string;
  sx: number; // SVG x
  sy: number; // SVG y
  tier: 1 | 2;
  reg: string;
  desc: string;
}

// Coordinates derived from lat/lon → SVG Robinson projection mapping
// calibrated against known country positions in the SVG
const NODES: JNode[] = [
  // ── Original 15 ──
  { id: "uk",         name: "United Kingdom", sx: 402,   sy: 383,   tier: 1, reg: "FCA",   desc: "Financial Services" },
  { id: "malta",      name: "Malta",          sx: 439,   sy: 432,   tier: 1, reg: "MGA",   desc: "Gambling & Gaming" },
  { id: "gibraltar",  name: "Gibraltar",      sx: 392,   sy: 432,   tier: 1, reg: "GBGA",  desc: "Sports Betting" },
  { id: "cyprus",     name: "Cyprus",         sx: 484,   sy: 438,   tier: 1, reg: "CySEC", desc: "Investment Firms & FX" },
  { id: "estonia",    name: "Estonia",        sx: 462,   sy: 365,   tier: 2, reg: "FIU",   desc: "Crypto & VASP" },
  { id: "swiss",      name: "Switzerland",    sx: 424,   sy: 403,   tier: 1, reg: "FINMA", desc: "Banking & Fintech" },
  { id: "uae",        name: "Dubai (DIFC)",   sx: 534,   sy: 467,   tier: 1, reg: "DFSA",  desc: "Capital Markets & DIFC" },
  { id: "hk",         name: "Hong Kong",      sx: 674,   sy: 475,   tier: 1, reg: "SFC",   desc: "Securities & Asset Mgmt" },
  { id: "singapore",  name: "Singapore",      sx: 649,   sy: 510,   tier: 1, reg: "MAS",   desc: "Payments & Fintech" },
  { id: "cayman",     name: "Cayman Is.",     sx: 209,   sy: 484,   tier: 1, reg: "CIMA",  desc: "Investment Funds & PE" },
  { id: "bvi",        name: "BVI",            sx: 249,   sy: 483,   tier: 2, reg: "FSC",   desc: "Offshore Structures" },
  { id: "seychelles", name: "Seychelles",     sx: 534,   sy: 529,   tier: 2, reg: "FSA",   desc: "Offshore Companies" },
  { id: "delaware",   name: "Delaware",       sx: 223,   sy: 425,   tier: 2, reg: "SEC",   desc: "US Holdings" },
  { id: "belize",     name: "Belize",         sx: 192,   sy: 485,   tier: 2, reg: "IFSC",  desc: "Forex Brokers" },
  { id: "curacao",    name: "Curaçao",        sx: 238,   sy: 495,   tier: 2, reg: "CGA",   desc: "Online Gaming" },
  // ── European hubs ──
  { id: "luxembourg", name: "Luxembourg",     sx: 417,   sy: 393,   tier: 1, reg: "CSSF",  desc: "Investment Funds & Banking" },
  { id: "liechten",   name: "Liechtenstein",  sx: 425,   sy: 401,   tier: 2, reg: "FMA",   desc: "Private Banking & Trusts" },
  { id: "dublin",     name: "Dublin",         sx: 387,   sy: 382,   tier: 1, reg: "CBI",   desc: "Funds & Insurance" },
  { id: "jersey",     name: "Jersey",         sx: 397,   sy: 394,   tier: 2, reg: "JFSC",  desc: "Trusts & Private Wealth" },
  // ── Caribbean / LatAm ──
  { id: "panama",     name: "Panama",         sx: 213,   sy: 515,   tier: 2, reg: "SBP",   desc: "Offshore Banking & Corps" },
  { id: "bahamas",    name: "Bahamas",        sx: 219,   sy: 467,   tier: 2, reg: "SCB",   desc: "Investment Funds" },
  { id: "bermuda",    name: "Bermuda",        sx: 248,   sy: 445,   tier: 1, reg: "BMA",   desc: "Insurance & Reinsurance" },
  // ── Asia-Pacific ──
  { id: "tokyo",      name: "Tokyo",          sx: 735,   sy: 435,   tier: 1, reg: "FSA-JP", desc: "Capital Markets" },
  { id: "shanghai",   name: "Shanghai",       sx: 691,   sy: 448,   tier: 1, reg: "CSRC",  desc: "Securities & Banking" },
  { id: "labuan",     name: "Labuan",         sx: 676,   sy: 526,   tier: 2, reg: "LFSA",  desc: "Islamic Finance & Offshore" },
  // ── Indian Ocean ──
  { id: "mauritius",  name: "Mauritius",      sx: 539,   sy: 603,   tier: 2, reg: "FSC-MU", desc: "GBC & Fund Structures" },
];

const ROUTES: [string, string][] = [
  // Original routes
  ["uk","malta"],["uk","hk"],["uk","cayman"],["uk","swiss"],["uk","cyprus"],
  ["hk","singapore"],["hk","seychelles"],["hk","uae"],
  ["malta","cyprus"],["malta","estonia"],["malta","gibraltar"],
  ["singapore","uae"],["uae","swiss"],["uae","seychelles"],
  ["cayman","bvi"],["cayman","delaware"],
  ["belize","curacao"],["curacao","cayman"],["swiss","cyprus"],["estonia","uk"],
  // New routes
  ["uk","dublin"],["uk","jersey"],["uk","luxembourg"],
  ["luxembourg","swiss"],["luxembourg","liechten"],
  ["dublin","bermuda"],["bermuda","bahamas"],["bahamas","cayman"],
  ["panama","belize"],["panama","cayman"],
  ["hk","tokyo"],["hk","shanghai"],["shanghai","tokyo"],
  ["singapore","labuan"],["labuan","hk"],
  ["uae","mauritius"],["mauritius","seychelles"],
  ["jersey","gibraltar"],
];

const nodeIdx = (id: string) => NODES.findIndex(n => n.id === id);

interface Packet {
  routeIdx: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

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
    let mapScale = 1, mapTx = 0, mapTy = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Compute "cover" transform matching the SVG background
      // Same as preserveAspectRatio="xMidYMid slice"
      mapScale = Math.max(W / VB.w, H / VB.h);
      mapTx = (W - VB.w * mapScale) / 2;
      mapTy = (H - VB.h * mapScale) / 2;
    };
    resize();
    window.addEventListener("resize", resize);

    // Convert SVG coords to screen coords
    function toScreen(sx: number, sy: number) {
      return {
        x: (sx - VB.x) * mapScale + mapTx,
        y: (sy - VB.y) * mapScale + mapTy,
      };
    }

    // Spawn initial packets
    for (let i = 0; i < 10; i++) {
      packetsRef.current.push({
        routeIdx: Math.floor(Math.random() * ROUTES.length),
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
      return { x: u*u*ax + 2*u*t*cpx + t*t*bx, y: u*u*ay + 2*u*t*cpy + t*t*by };
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frameRef.current++;
      const frame = frameRef.current;
      const t = frame * 0.016;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ── Node screen positions ────────────────
      const positions = NODES.map(n => toScreen(n.sx, n.sy));

      // ── Detect hovered ───────────────────────
      let hovered = -1;
      if (mx >= 0 && my >= 0) {
        for (let i = 0; i < positions.length; i++) {
          if (Math.hypot(positions[i].x - mx, positions[i].y - my) < 22) {
            hovered = i;
            break;
          }
        }
      }

      // ── Route arcs ──────────────────────────
      ROUTES.forEach(([aId, bId]) => {
        const ai = nodeIdx(aId), bi = nodeIdx(bId);
        if (ai < 0 || bi < 0) return;
        const p1 = positions[ai], p2 = positions[bi];
        const cp = arcCP(p1.x, p1.y, p2.x, p2.y);
        const isHL = hovered === ai || hovered === bi;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y);
        ctx.strokeStyle = isHL ? "rgba(68,76,231,0.35)" : "rgba(68,76,231,0.09)";
        ctx.lineWidth = isHL ? 1.1 : 0.6;
        ctx.stroke();
      });

      // ── Packets ─────────────────────────────
      if (Math.random() < 0.03) {
        packetsRef.current.push({
          routeIdx: Math.floor(Math.random() * ROUTES.length),
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
        const ai = nodeIdx(aId), bi = nodeIdx(bId);
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
      const isMobile = W < 768;

      positions.forEach((pos, i) => {
        const node = NODES[i];
        // Hide tier-2 on mobile
        if (isMobile && node.tier === 2) return;

        const isHov = hovered === i;
        const baseR = node.tier === 1 ? (isMobile ? 4 : 5.5) : 3.5;
        const r = isHov ? baseR * 1.8 : baseR;
        const pulse = (Math.sin(t * 1.8 + node.sx * 0.01) + 1) / 2;

        // 1. Pulse ring
        const pulseR = r + pulse * (node.tier === 1 ? (isMobile ? 14 : 20) : 12);
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

        // 5. Label — hide all labels on mobile, show tier-1 on desktop
        if (!isMobile) {
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
        }
      });

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
      {/* Layer 1: Real SVG world map with CSS filter to match theme */}
      <img
        src="/world-map.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{
          zIndex: 1,
          objectFit: "cover",
          objectPosition: "center center",
          filter: "brightness(0) saturate(100%) invert(18%) sepia(80%) saturate(4000%) hue-rotate(230deg) brightness(70%)",
          opacity: 0.15,
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "radial-gradient(ellipse 60% 50% at 55% 45%, rgba(26,32,104,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Layer 2: Canvas animations (nodes, arcs, packets) */}
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
            left: Math.min(hoveredNode.x + 18, (typeof window !== "undefined" ? window.innerWidth - 220 : 800)),
            top: Math.max(hoveredNode.y - 96, 10),
            fontFamily: "Manrope, sans-serif",
          }}
        >
          <div
            style={{
              background: "rgba(10,10,20,0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(68,76,231,0.35)",
              padding: "14px 18px",
              minWidth: 180,
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
