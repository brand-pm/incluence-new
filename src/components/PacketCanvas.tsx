import { useRef, useEffect } from "react";

export interface PacketNode {
  id: string;
  x: number; // % of container width
  y: number; // % of container height
  tier: 1 | 2;
}

export interface PacketCanvasProps {
  nodes: PacketNode[];
  routes: [string, string][];
  packetCount?: number;
  opacity?: number;
  /** When true, packets spawn in synchronized waves instead of randomly */
  synchronized?: boolean;
}

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
  x: number; y: number; age: number;
}

interface NodeFlash {
  nodeIdx: number; age: number;
}

function arcCP(ax: number, ay: number, bx: number, by: number) {
  const dist = Math.hypot(bx - ax, by - ay);
  const mx = (ax + bx) / 2, my = (ay + by) / 2;
  const nx = -(by - ay) / dist, ny = (bx - ax) / dist;
  return { x: mx + nx * dist * 0.28, y: my + ny * dist * 0.28 };
}

function quadBez(ax: number, ay: number, cpx: number, cpy: number, bx: number, by: number, t: number) {
  const u = 1 - t;
  return { x: u * u * ax + 2 * u * t * cpx + t * t * bx, y: u * u * ay + 2 * u * t * cpy + t * t * by };
}

const TRAIL_LEN = 18;

function spawnPacket(routeCount: number, progress = 0): Packet {
  const isB = Math.random() < 0.3;
  return {
    routeIdx: Math.floor(Math.random() * routeCount),
    progress,
    speed: isB ? (0.002 + Math.random() * 0.003) * 1.4 : 0.002 + Math.random() * 0.003,
    color: isB ? "#818CF8" : "#444CE7",
    size: isB ? 1.8 : 2.5,
    type: isB ? "B" : "A",
    trail: [],
  };
}

const PacketCanvas = ({ nodes, routes, packetCount = 8, opacity = 1, synchronized = false }: PacketCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    const nodeIdx = (id: string) => nodes.findIndex(n => n.id === id);

    const packets: Packet[] = [];
    const ripples: Ripple[] = [];
    const shockwaves: Shockwave[] = [];
    const nodeFlashes: NodeFlash[] = [];
    let frame = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function toScreen(n: PacketNode) {
      return { x: (n.x / 100) * W, y: (n.y / 100) * H };
    }

    resize();

    // Spawn initial packets
    for (let i = 0; i < packetCount; i++) {
      packets.push(spawnPacket(routes.length, Math.random() * 0.8));
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    let raf: number;

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      ctx!.globalAlpha = opacity;
      frame++;
      const t = frame * 0.016;

      const positions = nodes.map(n => toScreen(n));

      // Route ghost lines
      routes.forEach(([aId, bId]) => {
        const ai = nodeIdx(aId), bi = nodeIdx(bId);
        if (ai < 0 || bi < 0) return;
        const p1 = positions[ai], p2 = positions[bi];
        const cp = arcCP(p1.x, p1.y, p2.x, p2.y);
        ctx!.beginPath();
        ctx!.moveTo(p1.x, p1.y);
        ctx!.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y);
        ctx!.strokeStyle = "rgba(68,76,231,0.04)";
        ctx!.lineWidth = 0.6;
        ctx!.stroke();
      });

      // Spawn new packets
      if (Math.random() < 0.03 && packets.length < packetCount + 4) {
        const pkt = spawnPacket(routes.length);
        packets.push(pkt);
        const [aId] = routes[pkt.routeIdx];
        const ai = nodeIdx(aId);
        if (ai >= 0) {
          const p = positions[ai];
          shockwaves.push({ x: p.x, y: p.y, age: 0 });
        }
      }

      // Arriving packets
      for (let i = packets.length - 1; i >= 0; i--) {
        if (packets[i].progress > 1) {
          const [, bId] = routes[packets[i].routeIdx];
          const bi = nodeIdx(bId);
          if (bi >= 0) {
            const dest = positions[bi];
            ripples.push({ x: dest.x, y: dest.y, age: 0, color: packets[i].color });
            nodeFlashes.push({ nodeIdx: bi, age: 0 });
          }
          packets.splice(i, 1);
        }
      }

      // Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        shockwaves[i].age += 0.04;
        if (shockwaves[i].age >= 1) { shockwaves.splice(i, 1); continue; }
        const s = shockwaves[i];
        const radius = 6 + s.age * 14;
        const alpha = (1 - s.age) * 0.4;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(68,76,231,${alpha})`;
        ctx!.lineWidth = 1.5 * (1 - s.age);
        ctx!.stroke();
      }

      // Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].age += 0.025;
        if (ripples[i].age >= 1) { ripples.splice(i, 1); continue; }
        const r = ripples[i];
        const radius = 6 + r.age * 22;
        const alpha = (1 - r.age) * 0.4;
        ctx!.beginPath();
        ctx!.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(68,76,231,${alpha})`;
        ctx!.lineWidth = 1.2 * (1 - r.age);
        ctx!.stroke();
      }

      // Node flashes
      const flashedNodes = new Map<number, number>();
      for (let i = nodeFlashes.length - 1; i >= 0; i--) {
        nodeFlashes[i].age += 0.2;
        if (nodeFlashes[i].age >= 1) { nodeFlashes.splice(i, 1); continue; }
        flashedNodes.set(nodeFlashes[i].nodeIdx, 1 - nodeFlashes[i].age);
      }

      // Packets
      packets.forEach(pkt => {
        pkt.progress += pkt.speed;
        const [aId, bId] = routes[pkt.routeIdx];
        const ai = nodeIdx(aId), bi = nodeIdx(bId);
        if (ai < 0 || bi < 0) return;
        const p1 = positions[ai], p2 = positions[bi];
        const cp = arcCP(p1.x, p1.y, p2.x, p2.y);
        const pos = quadBez(p1.x, p1.y, cp.x, cp.y, p2.x, p2.y, pkt.progress);

        pkt.trail.push({ x: pos.x, y: pos.y });
        if (pkt.trail.length > TRAIL_LEN) pkt.trail.shift();

        // Glow
        const glowR = pkt.size * 10;
        const glow = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, glowR);
        const baseColor = pkt.type === "B" ? "129,140,248" : "68,76,231";
        glow.addColorStop(0, `rgba(${baseColor},1)`);
        glow.addColorStop(1, `rgba(${baseColor},0)`);
        ctx!.globalAlpha = 0.3 * opacity;
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, glowR, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.globalAlpha = opacity;

        // Tail
        if (pkt.trail.length > 1) {
          for (let i = 1; i < pkt.trail.length; i++) {
            const a = i / pkt.trail.length;
            const tailC = pkt.type === "B" ? "129,140,248" : "68,76,231";
            const fadeC = pkt.type === "B" ? "129,140,248" : "99,114,255";
            ctx!.beginPath();
            ctx!.moveTo(pkt.trail[i - 1].x, pkt.trail[i - 1].y);
            ctx!.lineTo(pkt.trail[i].x, pkt.trail[i].y);
            ctx!.strokeStyle = i === pkt.trail.length - 1
              ? `rgba(${tailC},0.9)` : `rgba(${fadeC},${a * 0.9})`;
            ctx!.lineWidth = pkt.size * (0.5 + a * 0.8);
            ctx!.stroke();
          }
        }

        // Core
        ctx!.fillStyle = "#ffffff";
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, pkt.size, 0, Math.PI * 2);
        ctx!.fill();
      });

      // Nodes
      positions.forEach((pos, i) => {
        const node = nodes[i];
        const baseR = node.tier === 1 ? 5.5 : 3.5;
        const pulse = (Math.sin(t * 1.8 + i * 0.7) + 1) / 2;

        // Pulse ring
        const pulseR = baseR + pulse * (node.tier === 1 ? 20 : 12);
        const pulseAlpha = (1 - pulse) * (node.tier === 1 ? 0.3 : 0.15);
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, pulseR, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(68,76,231,${pulseAlpha})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Tier-1 second pulse ring (asymmetric)
        if (node.tier === 1) {
          const p2 = (Math.sin(t * 1.8 * 2.2 + i * 0.7 + 1.5) + 1) / 2;
          const p2R = baseR + p2 * 26;
          const p2A = (1 - p2) * 0.15;
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, p2R, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(68,76,231,${p2A})`;
          ctx!.lineWidth = 0.7;
          ctx!.stroke();
        }

        // Halo
        const haloR = baseR * 5;
        const halo = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, haloR);
        halo.addColorStop(0, "rgba(68,76,231,0.15)");
        halo.addColorStop(1, "transparent");
        ctx!.fillStyle = halo;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, haloR, 0, Math.PI * 2);
        ctx!.fill();

        // Core (with flash)
        const flashI = flashedNodes.get(i) ?? 0;
        const coreInner = flashI > 0 ? `rgba(255,255,255,${0.9 * flashI})` : "rgba(68,76,231,1)";
        const coreOuter = flashI > 0 ? `rgba(200,210,255,${0.7 * flashI})` : "rgba(68,76,231,0.6)";
        const core = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, baseR);
        core.addColorStop(0, coreInner);
        core.addColorStop(1, coreOuter);
        ctx!.fillStyle = core;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, baseR, 0, Math.PI * 2);
        ctx!.fill();
      });

      ctx!.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [nodes, routes, packetCount, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0, width: "100%", height: "100%" }}
    />
  );
};

export default PacketCanvas;
