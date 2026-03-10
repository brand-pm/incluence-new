import { useRef, useEffect, useState } from "react";

// ── SVG VIEWBOX (from world-map.svg) ─────────────────────────────────
const VB = { x: 30.767, y: 241.591, w: 784.077, h: 458.627 };

// ── NODE DATA (positions in SVG coordinate space) ────────────────────
interface JNode {
  id: string;
  name: string;
  sx: number;
  sy: number;
  tier: 1 | 2;
  reg: string;
  desc: string;
}

const NODES: JNode[] = [
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
  { id: "luxembourg", name: "Luxembourg",     sx: 417,   sy: 393,   tier: 1, reg: "CSSF",  desc: "Investment Funds & Banking" },
  { id: "liechten",   name: "Liechtenstein",  sx: 425,   sy: 401,   tier: 2, reg: "FMA",   desc: "Private Banking & Trusts" },
  { id: "dublin",     name: "Dublin",         sx: 387,   sy: 382,   tier: 1, reg: "CBI",   desc: "Funds & Insurance" },
  { id: "jersey",     name: "Jersey",         sx: 397,   sy: 394,   tier: 2, reg: "JFSC",  desc: "Trusts & Private Wealth" },
  { id: "panama",     name: "Panama",         sx: 213,   sy: 515,   tier: 2, reg: "SBP",   desc: "Offshore Banking & Corps" },
  { id: "bahamas",    name: "Bahamas",        sx: 219,   sy: 467,   tier: 2, reg: "SCB",   desc: "Investment Funds" },
  { id: "bermuda",    name: "Bermuda",        sx: 248,   sy: 445,   tier: 1, reg: "BMA",   desc: "Insurance & Reinsurance" },
  { id: "tokyo",      name: "Tokyo",          sx: 735,   sy: 435,   tier: 1, reg: "FSA-JP", desc: "Capital Markets" },
  { id: "shanghai",   name: "Shanghai",       sx: 691,   sy: 448,   tier: 1, reg: "CSRC",  desc: "Securities & Banking" },
  { id: "labuan",     name: "Labuan",         sx: 676,   sy: 526,   tier: 2, reg: "LFSA",  desc: "Islamic Finance & Offshore" },
  { id: "mauritius",  name: "Mauritius",      sx: 539,   sy: 603,   tier: 2, reg: "FSC-MU", desc: "GBC & Fund Structures" },
];

const ROUTES: [string, string][] = [
  ["uk","malta"],["uk","hk"],["uk","cayman"],["uk","swiss"],["uk","cyprus"],
  ["hk","singapore"],["hk","seychelles"],["hk","uae"],
  ["malta","cyprus"],["malta","estonia"],["malta","gibraltar"],
  ["singapore","uae"],["uae","swiss"],["uae","seychelles"],
  ["cayman","bvi"],["cayman","delaware"],
  ["belize","curacao"],["curacao","cayman"],["swiss","cyprus"],["estonia","uk"],
  ["uk","dublin"],["uk","jersey"],["uk","luxembourg"],
  ["luxembourg","swiss"],["luxembourg","liechten"],
  ["dublin","bermuda"],["bermuda","bahamas"],["bahamas","cayman"],
  ["panama","belize"],["panama","cayman"],
  ["hk","tokyo"],["hk","shanghai"],["shanghai","tokyo"],
  ["singapore","labuan"],["labuan","hk"],
  ["uae","mauritius"],["mauritius","seychelles"],
  ["jersey","gibraltar"],
  ["tokyo","delaware"],["singapore","cayman"],["dublin","hk"],
  ["swiss","singapore"],["cyprus","shanghai"],["bermuda","uk"],
  ["mauritius","labuan"],["malta","uae"],
];

const nodeIdx = (id: string) => NODES.findIndex(n => n.id === id);

interface Packet {
  routeIdx: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
  type: "A" | "B";
  trail: { x: number; y: number }[];
}

interface Ripple {
  x: number; y: number; age: number; color: string;
}

interface Shockwave {
  x: number; y: number; age: number; // 0→1 over ~400ms
}

interface NodeFlash {
  nodeIdx: number; age: number; // 0→1
}

function spawnPacket(progress = 0): Packet {
  const isB = Math.random() < 0.3;
  return {
    routeIdx: Math.floor(Math.random() * ROUTES.length),
    progress,
    speed: isB ? (0.002 + Math.random() * 0.003) * 1.4 : 0.002 + Math.random() * 0.003,
    color: isB ? "#818CF8" : "#444CE7",
    size: isB ? 1.8 : 2.5,
    type: isB ? "B" : "A",
    trail: [],
  };
}

// ── COMPONENT ────────────────────────────────────────────────────────
const WorldMapCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const frameRef = useRef(0);
  const packetsRef = useRef<Packet[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const shockwavesRef = useRef<Shockwave[]>([]);
  const nodeFlashesRef = useRef<NodeFlash[]>([]);
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
      mapScale = Math.max(W / VB.w, H / VB.h);
      mapTx = (W - VB.w * mapScale) / 2;
      mapTy = (H - VB.h * mapScale) / 2;
    };
    resize();
    window.addEventListener("resize", resize);

    function toScreen(sx: number, sy: number) {
      return {
        x: (sx - VB.x) * mapScale + mapTx,
        y: (sy - VB.y) * mapScale + mapTy,
      };
    }

    // Spawn initial packets
    for (let i = 0; i < 10; i++) {
      const pkt = spawnPacket(Math.random() * 0.8);
      packetsRef.current.push(pkt);
      // Spawn shockwave at origin
      const [aId] = ROUTES[pkt.routeIdx];
      const ai = nodeIdx(aId);
      if (ai >= 0) {
        const p = toScreen(NODES[ai].sx, NODES[ai].sy);
        shockwavesRef.current.push({ x: p.x, y: p.y, age: Math.random() });
      }
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

    const TRAIL_LEN = 18;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frameRef.current++;
      const frame = frameRef.current;
      const t = frame * 0.016;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

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

      // ── Route arcs (ghost lines) ──────────────────────────
      ROUTES.forEach(([aId, bId]) => {
        const ai = nodeIdx(aId), bi = nodeIdx(bId);
        if (ai < 0 || bi < 0) return;
        const p1 = positions[ai], p2 = positions[bi];
        const cp = arcCP(p1.x, p1.y, p2.x, p2.y);
        const isHL = hovered === ai || hovered === bi;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y);
        ctx.strokeStyle = isHL ? "rgba(68,76,231,0.35)" : "rgba(68,76,231,0.04)";
        ctx.lineWidth = isHL ? 1.1 : 0.6;
        ctx.stroke();
      });

      // ── Spawn new packets ─────────────────────────────
      if (Math.random() < 0.03) {
        const pkt = spawnPacket();
        packetsRef.current.push(pkt);
        // Shockwave at spawn node
        const [aId] = ROUTES[pkt.routeIdx];
        const ai = nodeIdx(aId);
        if (ai >= 0) {
          const p = positions[ai];
          shockwavesRef.current.push({ x: p.x, y: p.y, age: 0 });
        }
      }

      // ── Handle arriving packets ─────────────────────────
      packetsRef.current.forEach(pkt => {
        if (pkt.progress > 1) {
          const [, bId] = ROUTES[pkt.routeIdx];
          const bi = nodeIdx(bId);
          if (bi >= 0) {
            const dest = positions[bi];
            ripplesRef.current.push({ x: dest.x, y: dest.y, age: 0, color: pkt.color });
            nodeFlashesRef.current.push({ nodeIdx: bi, age: 0 });
          }
        }
      });
      packetsRef.current = packetsRef.current.filter(p => p.progress <= 1);

      // ── Shockwaves (spawn effect) ────────────
      shockwavesRef.current.forEach(s => { s.age += 0.04; }); // ~400ms lifecycle at 60fps
      shockwavesRef.current = shockwavesRef.current.filter(s => s.age < 1);
      shockwavesRef.current.forEach(s => {
        const radius = 6 + s.age * 14; // 6→20
        const alpha = (1 - s.age) * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(68,76,231,${alpha})`;
        ctx.lineWidth = 1.5 * (1 - s.age);
        ctx.stroke();
      });

      // ── Ripples (arrival effect) ────────────
      ripplesRef.current.forEach(r => { r.age += 0.025; });
      ripplesRef.current = ripplesRef.current.filter(r => r.age < 1);
      ripplesRef.current.forEach(r => {
        const radius = 6 + r.age * 22;
        const alpha = (1 - r.age) * 0.4;
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.lineWidth = 1.2 * (1 - r.age);
        ctx.stroke();
      });

      // ── Node flashes ────────────
      nodeFlashesRef.current.forEach(f => { f.age += 0.2; }); // ~80ms at 60fps
      nodeFlashesRef.current = nodeFlashesRef.current.filter(f => f.age < 1);

      // ── Packets ─────────────────────────────
      packetsRef.current.forEach(pkt => {
        pkt.progress += pkt.speed;
        const [aId, bId] = ROUTES[pkt.routeIdx];
        const ai = nodeIdx(aId), bi = nodeIdx(bId);
        if (ai < 0 || bi < 0) return;
        const p1 = positions[ai], p2 = positions[bi];
        const cp = arcCP(p1.x, p1.y, p2.x, p2.y);

        const pos = quadBez(p1.x, p1.y, cp.x, cp.y, p2.x, p2.y, pkt.progress);

        // Record trail
        pkt.trail.push({ x: pos.x, y: pos.y });
        if (pkt.trail.length > TRAIL_LEN) pkt.trail.shift();

        // Outer glow
        const glowR = pkt.size * 10;
        const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, glowR);
        const baseColor = pkt.type === "B" ? "129,140,248" : "68,76,231";
        glow.addColorStop(0, `rgba(${baseColor},1)`);
        glow.addColorStop(1, `rgba(${baseColor},0)`);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, glowR, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Tail (gradient through trail points)
        if (pkt.trail.length > 1) {
          for (let i = 1; i < pkt.trail.length; i++) {
            const alpha = (i / pkt.trail.length);
            const tailColor = pkt.type === "B" ? "129,140,248" : "68,76,231";
            const fadeColor = pkt.type === "B" ? "129,140,248" : "99,114,255";
            ctx.beginPath();
            ctx.moveTo(pkt.trail[i - 1].x, pkt.trail[i - 1].y);
            ctx.lineTo(pkt.trail[i].x, pkt.trail[i].y);
            ctx.strokeStyle = i === pkt.trail.length - 1
              ? `rgba(${tailColor},0.9)`
              : `rgba(${fadeColor},${alpha * 0.9})`;
            ctx.lineWidth = pkt.size * (0.5 + alpha * 0.8);
            ctx.stroke();
          }
        }

        // Core dot
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pkt.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Nodes ───────────────────────────────
      let tooltipData: { x: number; y: number; node: JNode } | null = null;
      const isMobile = W < 768;

      // Build set of flashed nodes
      const flashedNodes = new Map<number, number>();
      nodeFlashesRef.current.forEach(f => {
        flashedNodes.set(f.nodeIdx, 1 - f.age);
      });

      positions.forEach((pos, i) => {
        const node = NODES[i];
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

        // 1b. Tier-1: second asymmetric pulse ring
        if (node.tier === 1) {
          const pulse2 = (Math.sin(t * 1.8 * 2.2 + node.sx * 0.01 + 1.5) + 1) / 2;
          const pulse2R = r + pulse2 * (isMobile ? 18 : 26);
          const pulse2Alpha = (1 - pulse2) * 0.15;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, pulse2R, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(68,76,231,${pulse2Alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }

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

        // 4. Core dot (with flash on packet arrival)
        const flashIntensity = flashedNodes.get(i) ?? 0;
        const coreInner = flashIntensity > 0
          ? `rgba(255,255,255,${0.9 * flashIntensity})`
          : (isHov ? "#ffffff" : "#8898ff");
        const coreOuter = flashIntensity > 0
          ? `rgba(200,210,255,${0.7 * flashIntensity})`
          : (isHov ? "#6172F3" : "#3538CD");
        const core = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r);
        core.addColorStop(0, coreInner);
        core.addColorStop(1, coreOuter);
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fill();

        // 5. Label
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

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "radial-gradient(ellipse 60% 50% at 55% 45%, rgba(26,32,104,0.2) 0%, transparent 70%)",
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 2 }}
      />

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
