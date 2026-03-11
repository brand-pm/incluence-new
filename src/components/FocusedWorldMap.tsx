import { useRef, useEffect } from "react";

/**
 * FocusedWorldMap — Renders the world-map.svg cropped to a specific region,
 * with Canvas-based firefly animations emanating from a capital marker.
 *
 * Designed to replace inline SVG maps + VallettaFireflies on license pages.
 * All coordinates are in SVG viewBox space (30.767, 241.591, 784.077, 458.627).
 */

// ── SVG VIEWBOX (matches world-map.svg) ──────────────────────────────
const VB = { x: 30.767, y: 241.591, w: 784.077, h: 458.627 };

/* ── Types ─────────────────────────────────────────────────────────── */

export interface FocusRegion {
  /** Center X in SVG coordinate space */
  cx: number;
  /** Center Y in SVG coordinate space */
  cy: number;
  /** Visible width in SVG coordinate space (smaller = more zoomed) */
  span: number;
}

export interface MarkerPoint {
  /** X in SVG coordinate space */
  sx: number;
  /** Y in SVG coordinate space */
  sy: number;
  label: string;
  /** If true, shows pulse rings (capital) */
  isCapital?: boolean;
}

interface Firefly {
  x: number;
  y: number;
  angle: number;
  dist: number;
  maxDist: number;
  speed: number;
  size: number;
  opacity: number;
  outbound: boolean;
  trail: { x: number; y: number }[];
}

export interface FocusedWorldMapProps {
  /** Which region of the world map to show */
  focus: FocusRegion;
  /** City markers to render on the map */
  markers?: MarkerPoint[];
  /** Number of firefly particles (default 10) */
  particleCount?: number;
  /** Overall opacity of the SVG base map (default 0.15) */
  mapOpacity?: number;
  /** Additional className on the root container */
  className?: string;
}

/* ── Helpers ───────────────────────────────────────────────────────── */

const TRAIL_LEN = 12;

function spawnFly(ox: number, oy: number): Firefly {
  const outbound = Math.random() < 0.6;
  const angle = Math.random() * Math.PI * 2;
  const maxDist = 80 + Math.random() * 220;
  return {
    x: ox,
    y: oy,
    angle,
    dist: outbound ? 0 : maxDist,
    maxDist,
    speed: 0.4 + Math.random() * 0.6,
    size: 1.5 + Math.random() * 1.2,
    opacity: 0,
    outbound,
    trail: [],
  };
}

/* ── Component ─────────────────────────────────────────────────────── */

const FocusedWorldMap = ({
  focus,
  markers = [],
  particleCount = 10,
  mapOpacity = 0.15,
  className = "",
}: FocusedWorldMapProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Compute object-position to crop the SVG to the focus region
  // The SVG is rendered with object-fit: cover, so we map the focus center
  // to a percentage offset within the full viewBox.
  const pctX = ((focus.cx - VB.x) / VB.w) * 100;
  const pctY = ((focus.cy - VB.y) / VB.h) * 100;

  // Scale: how much to zoom. A span of VB.w = 1x, smaller = more zoom.
  const zoomScale = VB.w / focus.span;
  const scalePercent = zoomScale * 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    const flies: Firefly[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    /**
     * Convert SVG-space coords → screen pixel coords on the canvas.
     * Must match the CSS transform applied to the <img>.
     */
    function toScreen(sx: number, sy: number): { x: number; y: number } {
      // The img is scaled by zoomScale and positioned so focus.cx/cy is at center.
      // Effective img dimensions (before clipping):
      const imgAspect = VB.w / VB.h;
      const containerAspect = W / H;

      let baseW: number, baseH: number;
      if (containerAspect > imgAspect) {
        // container is wider → img width = W, height = W / imgAspect
        baseW = W;
        baseH = W / imgAspect;
      } else {
        baseH = H;
        baseW = H * imgAspect;
      }

      // After zoom
      const scaledW = baseW * zoomScale;
      const scaledH = baseH * zoomScale;

      // Position: the focus center should map to container center
      // focusFrac = fractional position of focus.cx within VB
      const fracX = (focus.cx - VB.x) / VB.w;
      const fracY = (focus.cy - VB.y) / VB.h;

      // Where focus.cx ends up in scaled image
      const focusScreenX = fracX * scaledW;
      const focusScreenY = fracY * scaledH;

      // Offset to put that at container center
      const offsetX = W / 2 - focusScreenX;
      const offsetY = H / 2 - focusScreenY;

      // Now map sx, sy
      const fx = (sx - VB.x) / VB.w;
      const fy = (sy - VB.y) / VB.h;

      return {
        x: fx * scaledW + offsetX,
        y: fy * scaledH + offsetY,
      };
    }

    // Find capital marker for firefly origin
    const capital = markers.find((m) => m.isCapital);
    const getOrigin = () => {
      if (!capital) return { x: W / 2, y: H / 2 };
      return toScreen(capital.sx, capital.sy);
    };

    // Spawn initial flies
    const origin = getOrigin();
    for (let i = 0; i < particleCount; i++) {
      const f = spawnFly(origin.x, origin.y);
      f.dist = f.outbound
        ? Math.random() * f.maxDist * 0.7
        : f.maxDist * (0.3 + Math.random() * 0.7);
      flies.push(f);
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    let raf: number;
    let frame = 0;

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      frame++;
      const t = frame * 0.016;
      const orig = getOrigin();

      // ── Draw markers ────────────────────────────────────────
      for (const m of markers) {
        const pos = toScreen(m.sx, m.sy);

        if (m.isCapital) {
          // Pulse rings
          const pulse = (Math.sin(t * 1.8) + 1) / 2;
          const r1 = 5 + pulse * 20;
          const a1 = (1 - pulse) * 0.3;
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, r1, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(68,76,231,${a1})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();

          const pulse2 = (Math.sin(t * 1.8 * 2.2 + 1.5) + 1) / 2;
          const r2 = 5 + pulse2 * 26;
          const a2 = (1 - pulse2) * 0.15;
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, r2, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(68,76,231,${a2})`;
          ctx!.lineWidth = 0.7;
          ctx!.stroke();

          // Outer ring
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, 9.5, 0, Math.PI * 2);
          ctx!.strokeStyle = "rgba(68,76,231,0.28)";
          ctx!.lineWidth = 1;
          ctx!.stroke();

          // Halo
          const haloR = 22;
          const halo = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, haloR);
          halo.addColorStop(0, "rgba(68,76,231,0.38)");
          halo.addColorStop(1, "transparent");
          ctx!.fillStyle = halo;
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, haloR, 0, Math.PI * 2);
          ctx!.fill();

          // Core
          const core = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 5.5);
          core.addColorStop(0, "#8898ff");
          core.addColorStop(1, "#3538CD");
          ctx!.fillStyle = core;
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, 5.5, 0, Math.PI * 2);
          ctx!.fill();
        } else {
          // Secondary marker
          const r = 3;
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, r + 3, 0, Math.PI * 2);
          ctx!.strokeStyle = "rgba(68,76,231,0.18)";
          ctx!.lineWidth = 0.7;
          ctx!.stroke();

          const core = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r);
          core.addColorStop(0, "rgba(97,114,243,0.6)");
          core.addColorStop(1, "rgba(53,56,205,0.3)");
          ctx!.fillStyle = core;
          ctx!.beginPath();
          ctx!.arc(pos.x, pos.y, r, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Label
        ctx!.font = m.isCapital
          ? "500 10px Manrope, sans-serif"
          : "500 8px Manrope, sans-serif";
        ctx!.textAlign = "center";
        ctx!.fillStyle = m.isCapital
          ? "rgba(240,235,224,0.45)"
          : "rgba(240,235,224,0.25)";
        const labelOffset = m.isCapital ? -14 : -10;
        ctx!.fillText(m.label, pos.x, pos.y + labelOffset);
      }

      // ── Fireflies ───────────────────────────────────────────
      for (let i = flies.length - 1; i >= 0; i--) {
        const f = flies[i];

        // Move
        if (f.outbound) {
          f.dist += f.speed;
          if (f.dist < 30) f.opacity = Math.min(1, f.opacity + 0.04);
          else if (f.dist > f.maxDist * 0.7) f.opacity = Math.max(0, f.opacity - 0.02);
          else f.opacity = Math.min(0.9, f.opacity + 0.01);
        } else {
          f.dist -= f.speed;
          if (f.dist > f.maxDist * 0.7) f.opacity = Math.min(1, f.opacity + 0.04);
          else if (f.dist < 30) f.opacity = Math.max(0, f.opacity - 0.03);
          else f.opacity = Math.min(0.9, f.opacity + 0.01);
        }

        f.x = orig.x + Math.cos(f.angle) * f.dist;
        f.y = orig.y + Math.sin(f.angle) * f.dist;

        // Trail
        f.trail.push({ x: f.x, y: f.y });
        if (f.trail.length > TRAIL_LEN) f.trail.shift();

        if (f.trail.length > 1) {
          for (let ti = 1; ti < f.trail.length; ti++) {
            const a = (ti / f.trail.length) * f.opacity * 0.6;
            ctx!.beginPath();
            ctx!.moveTo(f.trail[ti - 1].x, f.trail[ti - 1].y);
            ctx!.lineTo(f.trail[ti].x, f.trail[ti].y);
            ctx!.strokeStyle = `rgba(68,76,231,${a})`;
            ctx!.lineWidth = f.size * (0.3 + (ti / f.trail.length) * 0.7);
            ctx!.stroke();
          }
        }

        // Glow
        const glowR = f.size * 8;
        const glow = ctx!.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowR);
        glow.addColorStop(0, `rgba(68,76,231,${f.opacity * 0.5})`);
        glow.addColorStop(1, "rgba(68,76,231,0)");
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(f.x, f.y, glowR, 0, Math.PI * 2);
        ctx!.fill();

        // Core
        ctx!.fillStyle = `rgba(255,255,255,${f.opacity * 0.9})`;
        ctx!.beginPath();
        ctx!.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx!.fill();

        // Respawn
        const done = f.outbound ? f.dist > f.maxDist : f.dist < 0;
        if (done) {
          flies[i] = spawnFly(orig.x, orig.y);
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [focus, markers, particleCount, zoomScale]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Base SVG map — cropped & zoomed via CSS transform */}
      <img
        src="/world-map.svg"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          zIndex: 1,
          filter:
            "brightness(0) saturate(100%) invert(18%) sepia(80%) saturate(4000%) hue-rotate(230deg) brightness(70%)",
          opacity: mapOpacity,
          // Position: scale up and translate so focus region is centered
          width: `${scalePercent}%`,
          height: `${scalePercent}%`,
          left: "50%",
          top: "50%",
          transformOrigin: "0 0",
          transform: `translate(-${pctX}%, -${pctY}%)`,
        }}
      />

      {/* Subtle radial glow behind the focus area */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse 60% 50% at 55% 45%, rgba(26,32,104,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Canvas for markers + fireflies */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ zIndex: 2, width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default FocusedWorldMap;
