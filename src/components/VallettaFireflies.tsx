import { useRef, useEffect } from "react";

/**
 * Firefly particles that fly outward from (and return to) a fixed origin point.
 * Designed to overlay the Malta SVG map, anchored to Valletta marker.
 *
 * Props:
 *  - originX/Y: % position of origin within the container (maps to Valletta on SVG)
 */

interface Firefly {
  x: number;
  y: number;
  angle: number;     // radial direction
  dist: number;      // current distance from origin
  maxDist: number;   // how far it travels
  speed: number;
  size: number;
  opacity: number;
  outbound: boolean; // flying away or returning
  trail: { x: number; y: number }[];
}

function spawn(ox: number, oy: number, W: number, H: number): Firefly {
  const outbound = Math.random() < 0.6;
  const angle = Math.random() * Math.PI * 2;
  const maxDist = 80 + Math.random() * 220;
  return {
    x: ox, y: oy,
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

interface Props {
  /** X origin as % of container width */
  originX?: number;
  /** Y origin as % of container height */
  originY?: number;
  count?: number;
}

const TRAIL_LEN = 12;

const VallettaFireflies = ({ originX = 50, originY = 50, count = 8 }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const ox = () => (originX / 100) * W;
    const oy = () => (originY / 100) * H;

    // Initial spawn with staggered progress
    for (let i = 0; i < count; i++) {
      const f = spawn(ox(), oy(), W, H);
      f.dist = f.outbound
        ? Math.random() * f.maxDist * 0.7
        : f.maxDist * (0.3 + Math.random() * 0.7);
      flies.push(f);
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    let raf: number;

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const cx = ox();
      const cy = oy();

      for (let i = flies.length - 1; i >= 0; i--) {
        const f = flies[i];

        // Move
        if (f.outbound) {
          f.dist += f.speed;
          // Fade in then out
          if (f.dist < 30) f.opacity = Math.min(1, f.opacity + 0.04);
          else if (f.dist > f.maxDist * 0.7) f.opacity = Math.max(0, f.opacity - 0.02);
          else f.opacity = Math.min(0.9, f.opacity + 0.01);
        } else {
          f.dist -= f.speed;
          if (f.dist > f.maxDist * 0.7) f.opacity = Math.min(1, f.opacity + 0.04);
          else if (f.dist < 30) f.opacity = Math.max(0, f.opacity - 0.03);
          else f.opacity = Math.min(0.9, f.opacity + 0.01);
        }

        // Position
        f.x = cx + Math.cos(f.angle) * f.dist;
        f.y = cy + Math.sin(f.angle) * f.dist;

        // Trail
        f.trail.push({ x: f.x, y: f.y });
        if (f.trail.length > TRAIL_LEN) f.trail.shift();

        // Draw trail
        if (f.trail.length > 1) {
          for (let t = 1; t < f.trail.length; t++) {
            const a = (t / f.trail.length) * f.opacity * 0.6;
            ctx!.beginPath();
            ctx!.moveTo(f.trail[t - 1].x, f.trail[t - 1].y);
            ctx!.lineTo(f.trail[t].x, f.trail[t].y);
            ctx!.strokeStyle = `rgba(68,76,231,${a})`;
            ctx!.lineWidth = f.size * (0.3 + (t / f.trail.length) * 0.7);
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

        // Core dot
        ctx!.fillStyle = `rgba(255,255,255,${f.opacity * 0.9})`;
        ctx!.beginPath();
        ctx!.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx!.fill();

        // Respawn
        const done = f.outbound ? f.dist > f.maxDist : f.dist < 0;
        if (done) {
          flies[i] = spawn(cx, cy, W, H);
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [originX, originY, count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2, width: "100%", height: "100%" }}
    />
  );
};

export default VallettaFireflies;
