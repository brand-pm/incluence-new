import { useEffect, useRef, useCallback } from "react";

interface Point { x: number; y: number }

function getArcPoint(a: Point, b: Point, bulge: number, t: number): Point {
  const mx = a.x + (b.x - a.x) * t;
  const my = a.y + (b.y - a.y) * t;
  const nx = -(b.y - a.y);
  const ny = b.x - a.x;
  const len = Math.sqrt(nx * nx + ny * ny) || 1;
  const offset = bulge * Math.sin(Math.PI * t);
  return { x: mx + (nx / len) * offset, y: my + (ny / len) * offset };
}

function getArcPoints(a: Point, b: Point, bulge: number, count: number): Point[] {
  const pts: Point[] = [];
  for (let i = 0; i <= count; i++) pts.push(getArcPoint(a, b, bulge, i / count));
  return pts;
}

interface Route {
  from: Point;
  to: Point;
  bulge: number;
}

const TAIL_LEN = 14;
const SPEED = 0.004;
const PAUSE_SHORT = 600;
const PAUSE_LONG = 1200;

const ProcessFlowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stateRef = useRef({
    routeIndex: 0,
    progress: 0,
    paused: false,
    pauseStart: 0,
    pauseDuration: 0,
    tail: [] as Point[],
    cardCenters: [] as Point[],
    routes: [] as Route[],
    activeStep: -1,
    activeStepStart: 0,
  });

  const calcPositions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-step]");
    const rect = container.getBoundingClientRect();
    const centers: Point[] = [];

    cards.forEach((card) => {
      const cr = card.getBoundingClientRect();
      centers.push({
        x: cr.left - rect.left + cr.width / 2,
        y: cr.top - rect.top + cr.height / 2,
      });
    });

    if (centers.length < 4) return;

    const routes: Route[] = [
      { from: centers[0], to: centers[1], bulge: -30 },
      { from: centers[1], to: centers[2], bulge: 30 },
      { from: centers[2], to: centers[3], bulge: 30 },
    ];

    const s = stateRef.current;
    s.cardCenters = centers;
    s.routes = routes;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  useEffect(() => {
    calcPositions();
    const ro = new ResizeObserver(() => calcPositions());
    const canvas = canvasRef.current;
    if (canvas?.parentElement) ro.observe(canvas.parentElement);

    const animate = (time: number) => {
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas) { animRef.current = requestAnimationFrame(animate); return; }

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const s = stateRef.current;
      if (s.routes.length === 0) { animRef.current = requestAnimationFrame(animate); return; }

      // Draw ghost arc for route 4 (04→01)
      if (s.cardCenters.length >= 4) {
        const ghostPts = getArcPoints(s.cardCenters[3], s.cardCenters[0], -30, 60);
        ctx.beginPath();
        ctx.setLineDash([4, 8]);
        ctx.strokeStyle = "rgba(68,76,231,0.03)";
        ctx.lineWidth = 1;
        ghostPts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw route paths with arrowheads
      s.routes.forEach((route) => {
        const pts = getArcPoints(route.from, route.to, route.bulge, 60);
        ctx.beginPath();
        ctx.setLineDash([4, 8]);
        ctx.strokeStyle = "rgba(68,76,231,0.06)";
        ctx.lineWidth = 1;
        pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.stroke();
        ctx.setLineDash([]);

        // Arrowhead
        const last = pts[pts.length - 1];
        const prev = pts[pts.length - 3];
        const angle = Math.atan2(last.y - prev.y, last.x - prev.x);
        const aLen = 6;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(68,76,231,0.2)";
        ctx.lineWidth = 1;
        for (const off of [-0.4, 0, 0.4]) {
          ctx.moveTo(last.x, last.y);
          ctx.lineTo(
            last.x - aLen * Math.cos(angle + off),
            last.y - aLen * Math.sin(angle + off)
          );
        }
        ctx.stroke();
      });

      // Handle pause
      if (s.paused) {
        if (time - s.pauseStart >= s.pauseDuration) {
          s.paused = false;
          s.tail = [];
        } else {
          // Still draw node dots during pause
          drawNodes(ctx, s);
          animRef.current = requestAnimationFrame(animate);
          return;
        }
      }

      // Advance packet
      s.progress += SPEED;

      if (s.progress >= 1) {
        // Arrived
        s.progress = 1;
        const arrivalStep = s.routeIndex + 1; // arriving at step index
        s.activeStep = arrivalStep;
        s.activeStepStart = time;

        // Dispatch event for CSS highlight
        const container = canvas.parentElement;
        if (container) {
          const stepCards = container.querySelectorAll<HTMLElement>("[data-step]");
          stepCards.forEach((c) => c.classList.remove("step-active"));
          if (stepCards[arrivalStep]) stepCards[arrivalStep].classList.add("step-active");
          setTimeout(() => {
            if (stepCards[arrivalStep]) stepCards[arrivalStep].classList.remove("step-active");
          }, 600);
        }

        s.routeIndex++;
        s.progress = 0;
        s.paused = true;
        s.tail = [];

        if (s.routeIndex >= s.routes.length) {
          s.routeIndex = 0;
          s.pauseDuration = PAUSE_LONG;
          // Also flash step 0 on restart
          const container2 = canvas.parentElement;
          if (container2) {
            const stepCards = container2.querySelectorAll<HTMLElement>("[data-step]");
            setTimeout(() => {
              stepCards.forEach((c) => c.classList.remove("step-active"));
              if (stepCards[0]) stepCards[0].classList.add("step-active");
              setTimeout(() => {
                if (stepCards[0]) stepCards[0].classList.remove("step-active");
              }, 600);
            }, PAUSE_LONG - 300);
          }
        } else {
          s.pauseDuration = PAUSE_SHORT;
        }
        s.pauseStart = time;
      }

      // Draw packet
      if (!s.paused) {
        const route = s.routes[s.routeIndex];
        const pos = getArcPoint(route.from, route.to, route.bulge, s.progress);

        s.tail.push({ ...pos });
        if (s.tail.length > TAIL_LEN) s.tail.shift();

        // Draw tail
        for (let i = 0; i < s.tail.length - 1; i++) {
          const alpha = ((i + 1) / s.tail.length) * 0.8;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(68,76,231,${alpha})`;
          ctx.lineWidth = 1.5 * (i / s.tail.length);
          ctx.moveTo(s.tail[i].x, s.tail[i].y);
          ctx.lineTo(s.tail[i + 1].x, s.tail[i + 1].y);
          ctx.stroke();
        }

        // Draw glow
        const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 24);
        grd.addColorStop(0, "rgba(68,76,231,0.9)");
        grd.addColorStop(1, "rgba(68,76,231,0)");
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(pos.x, pos.y, 24, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.fillStyle = "#444CE7";
        ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      drawNodes(ctx, s);
      animRef.current = requestAnimationFrame(animate);
    };

    function drawNodes(ctx: CanvasRenderingContext2D, s: typeof stateRef.current) {
      s.cardCenters.forEach((c) => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(68,76,231,0.15)";
        ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [calcPositions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0, width: "100%", height: "100%" }}
    />
  );
};

export default ProcessFlowCanvas;
