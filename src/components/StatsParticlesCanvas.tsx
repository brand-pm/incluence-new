import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 25;

interface Particle {
  x: number;
  y: number;
  vy: number;
  vx: number;
}

const StatsParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const particles: Particle[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = canvas!.offsetWidth;
      h = canvas!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vy: -(0.15 + Math.random() * 0.25),
          vx: (Math.random() - 0.5) * 0.1,
        });
      }
    }

    resize();
    initParticles();

    const ro = new ResizeObserver(() => { resize(); initParticles(); });
    ro.observe(canvas);

    let raf: number;
    function animate() {
      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = "rgba(68,76,231,0.3)";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -2) { p.y = h + 2; p.x = Math.random() * w; }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0, width: "100%", height: "100%" }}
    />
  );
};

export default StatsParticlesCanvas;
