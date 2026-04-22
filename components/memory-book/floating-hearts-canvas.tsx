"use client";

import { useEffect, useRef } from "react";

/* ─── heart path helper ──────────────────────────────────────── */
function drawHeart(ctx: CanvasRenderingContext2D, size: number) {
  const s = size;
  ctx.beginPath();
  ctx.moveTo(0, s * 0.36);
  ctx.bezierCurveTo(-s * 0.08, s * 0.1, -s * 0.5, s * 0.04, -s * 0.5, -s * 0.18);
  ctx.bezierCurveTo(-s * 0.5, -s * 0.52, 0, -s * 0.62, 0, -s * 0.28);
  ctx.bezierCurveTo(0, -s * 0.62, s * 0.5, -s * 0.52, s * 0.5, -s * 0.18);
  ctx.bezierCurveTo(s * 0.5, s * 0.04, s * 0.08, s * 0.1, 0, s * 0.36);
  ctx.closePath();
}

/* ─── particle type ──────────────────────────────────────────── */
type HeartParticle = {
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
  speedY: number;
  swayAmp: number;
  swayFreq: number;
  rotBase: number;
  rotSpeed: number;
  maxAlpha: number;
  alpha: number;
  age: number;
  lifespan: number;
  filled: boolean;
};

const COLORS = [
  { fill: "rgba(251,113,133,A)", glow: "rgba(244,63,94,0.45)" },   // rose-400
  { fill: "rgba(244,63,94,A)", glow: "rgba(190,24,93,0.45)" },      // rose-500
  { fill: "rgba(236,72,153,A)", glow: "rgba(219,39,119,0.4)" },     // pink-500
  { fill: "rgba(249,168,212,A)", glow: "rgba(236,72,153,0.38)" },   // pink-300
  { fill: "rgba(232,121,249,A)", glow: "rgba(192,38,211,0.35)" },   // fuchsia-400
  { fill: "rgba(253,164,175,A)", glow: "rgba(244,63,94,0.3)" },     // rose-300
  { fill: "rgba(255,205,228,A)", glow: "rgba(236,72,153,0.28)" },   // soft pink
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function makeParticle(w: number, h: number, prepopulate = false): HeartParticle {
  const size = 7 + Math.random() * 26;
  const lifespan = 180 + Math.random() * 220;
  const col = randomColor();
  const maxAlpha = 0.22 + Math.random() * 0.38;

  const p: HeartParticle = {
    x: Math.random() * w,
    y: prepopulate ? Math.random() * h : h + size + Math.random() * 80,
    size,
    color: col.fill.replace("A", String(maxAlpha)),
    glowColor: col.glow,
    speedY: 0.38 + Math.random() * 0.82,
    swayAmp: 18 + Math.random() * 34,
    swayFreq: 0.012 + Math.random() * 0.018,
    rotBase: (Math.random() - 0.5) * 0.55,
    rotSpeed: (Math.random() - 0.5) * 0.008,
    maxAlpha,
    alpha: prepopulate ? maxAlpha * Math.random() : 0,
    age: prepopulate ? Math.random() * lifespan * 0.7 : 0,
    lifespan,
    filled: Math.random() > 0.28,
  };
  return p;
}

/* ─── component ─────────────────────────────────────────────── */
export function FloatingHeartsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    /* seed with existing hearts so the page doesn't start empty */
    const particles: HeartParticle[] = Array.from({ length: 24 }, () =>
      makeParticle(w, h, true),
    );

    let frameId = 0;
    let tick = 0;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      tick++;

      /* spawn: roughly every 7 frames, cap at 42 */
      if (tick % 7 === 0 && particles.length < 42) {
        particles.push(makeParticle(w, h, false));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.age++;

        /* position */
        p.y -= p.speedY;
        p.x += Math.sin(p.age * p.swayFreq) * p.swayAmp * 0.04;

        /* alpha fade-in / hold / fade-out */
        const fadeFrames = 35;
        if (p.age < fadeFrames) {
          p.alpha = (p.age / fadeFrames) * p.maxAlpha;
        } else if (p.age > p.lifespan - fadeFrames) {
          p.alpha = Math.max(0, ((p.lifespan - p.age) / fadeFrames) * p.maxAlpha);
        } else {
          p.alpha = p.maxAlpha;
        }

        /* remove when off-screen or dead */
        if (p.age >= p.lifespan || p.y < -p.size * 2) {
          particles.splice(i, 1);
          continue;
        }

        /* draw */
        const rotation = p.rotBase + p.rotSpeed * p.age;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(rotation);
        ctx.globalAlpha = p.alpha;

        /* glow */
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = 14 + p.size * 0.4;

        drawHeart(ctx, p.size);

        if (p.filled) {
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }

        /* inner highlight shimmer */
        if (p.filled && p.size > 14) {
          ctx.shadowBlur = 0;
          const grad = ctx.createRadialGradient(
            -p.size * 0.18, -p.size * 0.2, 0,
            -p.size * 0.18, -p.size * 0.2, p.size * 0.55,
          );
          grad.addColorStop(0, "rgba(255,255,255,0.22)");
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = grad;
          drawHeart(ctx, p.size);
          ctx.fill();
        }

        ctx.restore();
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
