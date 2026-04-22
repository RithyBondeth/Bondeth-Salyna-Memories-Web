"use client";

import { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   3-D Globe  —  orthographic projection
   Canvas: 500 × 480   Globe radius: 185 px
═══════════════════════════════════════════════════════════════ */

const W = 500;
const H = 480;
const CX = 250;   // canvas centre x
const CY = 240;   // canvas centre y
const R  = 185;   // globe radius px

// Fixed tilt so both cities appear vertically centred
const VIEW_LAT = -10 * Math.PI / 180;

// Base longitude of the view (midpoint between cities)
const BASE_LON = 110.36 * Math.PI / 180;

/* ── cities ─────────────────────────────────────────────────── */
const PP    = { lon: 104.93, lat:  11.56, name: "Phnom Penh",  country: "Cambodia",  flag: "🇰🇭" };
const PERTH = { lon: 115.79, lat: -31.75, name: "Perth",       country: "Australia", flag: "🇦🇺" };

/* ── simplified land polygons  [lon°, lat°][] ───────────────── */
const INDOCHINA: [number,number][] = [
  [97,22],[102,22],[108,22],[110,20],[110,18],
  [109,14],[108,10],[106,8],[105,5],
  [104,2],[101,3],[100,5],[98,8],[97,14],[97,22],
];
const MALAY_PENINSULA: [number,number][] = [
  [100,5],[104,2],[104,0],[103,-1],[101,2],[99,4],[100,5],
];
const SUMATRA: [number,number][] = [
  [95,5],[98,5.5],[104,2.5],[106,-1],[106,-5.5],
  [103,-5.5],[100,-3],[96,0],[95,3],[95,5],
];
const JAVA: [number,number][] = [
  [106,-7],[111,-7.5],[114,-8],[115,-9],
  [111,-9],[106,-8],[106,-7],
];
const BORNEO: [number,number][] = [
  [108,7],[115,7],[119,4],[119,-1],
  [115,-4],[110,-4],[109,0],[108,2],[108,7],
];
const SULAWESI: [number,number][] = [
  [120,2],[122,2],[125,0],[124,-4],[121,-4],[120,-1],[120,2],
];
const NEW_GUINEA: [number,number][] = [
  [131,-1],[135,0],[141,-9],[148,-7],[148,-8],
  [141,-10],[135,-2],[131,-2],[131,-1],
];
const AUSTRALIA: [number,number][] = [
  [114,-14],[122,-17],[128,-15],[130,-14],
  [136,-12],[139,-12],[143,-11],[146,-18],
  [150,-23],[152,-32],[150,-37],[147,-39],
  [141,-38],[138,-36],[132,-34],
  [120,-35],[116,-33],[116,-31],
  [113,-22],[114,-14],
];
// India (rough)
const INDIA: [number,number][] = [
  [68,24],[72,22],[76,8],[80,8],[80,11],
  [77,8],[80,14],[87,22],[91,26],[88,27],
  [79,33],[73,34],[68,24],
];
// Sri Lanka
const SRI_LANKA: [number,number][] = [
  [80,10],[81,8],[81,6],[79,6],[79,8],[80,10],
];
// Philippines (very rough blob)
const PHILIPPINES: [number,number][] = [
  [118,18],[122,20],[126,18],[126,10],[124,8],
  [120,8],[118,10],[118,18],
];

const LAND_MASSES = [
  INDOCHINA, MALAY_PENINSULA,
  SUMATRA, JAVA, BORNEO, SULAWESI,
  NEW_GUINEA, AUSTRALIA,
  INDIA, SRI_LANKA, PHILIPPINES,
];

/* ── orthographic projection ────────────────────────────────── */
function project(
  lon: number,
  lat: number,
  rotLon: number,
): [number, number] | null {
  const λ = (lon * Math.PI / 180) - rotLon;
  const φ = lat * Math.PI / 180;

  const cosC =
    Math.sin(VIEW_LAT) * Math.sin(φ) +
    Math.cos(VIEW_LAT) * Math.cos(φ) * Math.cos(λ);

  if (cosC < 0) return null; // behind globe

  const x = R * Math.cos(φ) * Math.sin(λ);
  const y = R * (
    Math.cos(VIEW_LAT) * Math.sin(φ) -
    Math.sin(VIEW_LAT) * Math.cos(φ) * Math.cos(λ)
  );
  return [CX + x, CY - y];
}

/* ── spherical linear interpolation (great-circle waypoints) ── */
function gcPoint(
  t: number,
  p1: { lat: number; lon: number },
  p2: { lat: number; lon: number },
): { lat: number; lon: number } {
  const φ1 = p1.lat * Math.PI / 180, λ1 = p1.lon * Math.PI / 180;
  const φ2 = p2.lat * Math.PI / 180, λ2 = p2.lon * Math.PI / 180;

  const x1 = Math.cos(φ1)*Math.cos(λ1), y1 = Math.cos(φ1)*Math.sin(λ1), z1 = Math.sin(φ1);
  const x2 = Math.cos(φ2)*Math.cos(λ2), y2 = Math.cos(φ2)*Math.sin(λ2), z2 = Math.sin(φ2);

  const dot = Math.min(1, Math.max(-1, x1*x2 + y1*y2 + z1*z2));
  const d   = Math.acos(dot);
  if (d < 1e-6) return p1;

  const sinD = Math.sin(d);
  const a = Math.sin((1 - t) * d) / sinD;
  const b = Math.sin(t * d) / sinD;

  const x = a*x1 + b*x2, y = a*y1 + b*y2, z = a*z1 + b*z2;
  return {
    lat: Math.atan2(z, Math.sqrt(x*x + y*y)) * 180 / Math.PI,
    lon: Math.atan2(y, x) * 180 / Math.PI,
  };
}

/* ── draw land polygon ──────────────────────────────────────── */
function drawPoly(
  ctx: CanvasRenderingContext2D,
  pts: [number,number][],
  rotLon: number,
  fill: string,
  stroke: string,
) {
  ctx.beginPath();
  let pen = false;
  for (const [lon, lat] of pts) {
    const p = project(lon, lat, rotLon);
    if (!p) { pen = false; continue; }
    pen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
    pen = true;
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 0.7;
  ctx.stroke();
}

/* ── draw lat / lon grid lines ──────────────────────────────── */
function drawGrid(ctx: CanvasRenderingContext2D, rotLon: number) {
  ctx.save();
  ctx.strokeStyle = "rgba(148,163,184,0.10)";
  ctx.lineWidth = 0.5;

  // meridians
  for (let lon = 0; lon < 360; lon += 15) {
    ctx.beginPath();
    let pen = false;
    for (let lat = -90; lat <= 90; lat += 2) {
      const p = project(lon, lat, rotLon);
      if (!p) { pen = false; continue; }
      pen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
      pen = true;
    }
    ctx.stroke();
  }
  // parallels
  for (let lat = -75; lat <= 75; lat += 15) {
    ctx.beginPath();
    let pen = false;
    for (let lon = 0; lon <= 360; lon += 2) {
      const p = project(lon, lat, rotLon);
      if (!p) { pen = false; continue; }
      pen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
      pen = true;
    }
    ctx.stroke();
  }
  ctx.restore();
}

/* ═══════════════════════════════════════════════════════════════
   React component
═══════════════════════════════════════════════════════════════ */
export function DistanceMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef  = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;
    const ctx: CanvasRenderingContext2D = maybeCtx;

    canvas.width  = W;
    canvas.height = H;

    /* pre-generate star field */
    const STARS = Array.from({ length: 180 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.4 + Math.random() * 1.4,
      a: 0.3 + Math.random() * 0.7,
    }));

    let tick = 0;

    function draw() {
      tick++;

      /* oscillate rotation ±8° around the midpoint between cities */
      const rotLon = BASE_LON + (8 * Math.PI / 180) * Math.sin(tick * 0.0028);

      ctx.clearRect(0, 0, W, H);

      /* ── 1. space background ── */
      const space = ctx.createRadialGradient(CX, CY, R * 0.8, CX, CY, Math.max(W, H));
      space.addColorStop(0, "#0d0220");
      space.addColorStop(0.5, "#08011a");
      space.addColorStop(1, "#050010");
      ctx.fillStyle = space;
      ctx.fillRect(0, 0, W, H);

      /* ── 2. stars ── */
      for (const s of STARS) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
      }

      /* ── 3. atmosphere glow (outside the globe) ── */
      const atmo = ctx.createRadialGradient(CX, CY, R * 0.88, CX, CY, R * 1.22);
      atmo.addColorStop(0,   "rgba(244,63,94,0.38)");
      atmo.addColorStop(0.4, "rgba(219,39,119,0.18)");
      atmo.addColorStop(0.7, "rgba(192,38,211,0.08)");
      atmo.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = atmo;
      ctx.beginPath();
      ctx.arc(CX, CY, R * 1.22, 0, Math.PI * 2);
      ctx.fill();

      /* ── 4. ocean sphere ── */
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();

      const ocean = ctx.createRadialGradient(
        CX - R * 0.28, CY - R * 0.28, R * 0.05,
        CX, CY, R,
      );
      ocean.addColorStop(0,   "#2a1654");
      ocean.addColorStop(0.45, "#1a0d40");
      ocean.addColorStop(1,   "#0d0625");
      ctx.fillStyle = ocean;
      ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
      ctx.restore();

      /* ── 5. lat / lon grid ── */
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();
      drawGrid(ctx, rotLon);
      ctx.restore();

      /* ── 6. land masses ── */
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();

      const landFill   = "rgba(253,164,175,0.90)";  // rose-300
      const landStroke = "rgba(251,113,133,0.75)";  // rose-400
      const ozFill     = "rgba(252,205,220,0.88)";
      const ozStroke   = "rgba(249,168,212,0.80)";

      for (const poly of LAND_MASSES) {
        const fill   = poly === AUSTRALIA ? ozFill   : landFill;
        const stroke = poly === AUSTRALIA ? ozStroke : landStroke;
        drawPoly(ctx, poly, rotLon, fill, stroke);
      }
      ctx.restore();

      /* ── 7. great-circle arc ── */
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();

      // Full arc (faint guide)
      ctx.beginPath();
      let arcPen = false;
      for (let i = 0; i <= 120; i++) {
        const pt = gcPoint(i / 120, PP, PERTH);
        const p  = project(pt.lon, pt.lat, rotLon);
        if (!p) { arcPen = false; continue; }
        arcPen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
        arcPen = true;
      }
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth   = 1.5;
      ctx.setLineDash([]);
      ctx.stroke();

      // Animated dashed arc (bright)
      ctx.setLineDash([8, 5]);
      ctx.lineDashOffset = -(tick * 1.2);
      ctx.beginPath();
      arcPen = false;
      for (let i = 0; i <= 120; i++) {
        const pt = gcPoint(i / 120, PP, PERTH);
        const p  = project(pt.lon, pt.lat, rotLon);
        if (!p) { arcPen = false; continue; }
        arcPen ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
        arcPen = true;
      }
      ctx.save();
      ctx.shadowColor = "rgba(251,191,36,0.7)";
      ctx.shadowBlur  = 10;
      ctx.strokeStyle = "rgba(253,224,71,0.92)";
      ctx.lineWidth   = 2.4;
      ctx.stroke();
      ctx.restore();
      ctx.setLineDash([]);

      ctx.restore();

      /* ── 8. specular highlight (sphere sheen) ── */
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();
      const shine = ctx.createRadialGradient(
        CX - R * 0.38, CY - R * 0.38, 0,
        CX - R * 0.18, CY - R * 0.18, R * 0.72,
      );
      shine.addColorStop(0,   "rgba(255,255,255,0.28)");
      shine.addColorStop(0.4, "rgba(255,255,255,0.07)");
      shine.addColorStop(1,   "rgba(255,255,255,0)");
      ctx.fillStyle = shine;
      ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
      ctx.restore();

      /* ── 9. limb darkening ── */
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.clip();
      const limb = ctx.createRadialGradient(CX, CY, R * 0.55, CX, CY, R);
      limb.addColorStop(0, "rgba(0,0,0,0)");
      limb.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = limb;
      ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
      ctx.restore();

      /* ── 10. globe rim ── */
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(244,63,94,0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* ── 11. moving dot along arc ── */
      const dotT = ((tick % 280) / 280);
      const dotPt = gcPoint(dotT, PP, PERTH);
      const dotP  = project(dotPt.lon, dotPt.lat, rotLon);
      if (dotP) {
        ctx.save();
        ctx.shadowColor = "rgba(251,191,36,0.9)";
        ctx.shadowBlur  = 14;
        ctx.beginPath();
        ctx.arc(dotP[0], dotP[1], 5, 0, Math.PI * 2);
        ctx.fillStyle = "#fbbf24";
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(dotP[0], dotP[1], 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();
      }

      /* ── 12. pulsing city dots ── */
      function drawCity(city: { lon: number; lat: number; name: string; country: string; flag: string }) {
        const p = project(city.lon, city.lat, rotLon);
        if (!p) return;
        const [px, py] = p;
        const pulse = 0.6 + 0.4 * Math.sin(tick * 0.08);

        // halo ring
        ctx.beginPath();
        ctx.arc(px, py, 14 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(244,63,94,0.12)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(244,63,94,0.28)";
        ctx.fill();

        // core
        ctx.save();
        ctx.shadowColor = "rgba(244,63,94,0.85)";
        ctx.shadowBlur  = 12;
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "#f43f5e";
        ctx.fill();
        ctx.restore();

        // white centre
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fill();

        /* label */
        const above = city.lat < 0; // Perth is south → label above
        const sign  = above ? -1 : 1;
        ctx.save();
        ctx.textAlign  = "center";
        ctx.shadowColor = "rgba(0,0,0,0.8)";
        ctx.shadowBlur  = 4;

        // flag emoji — closest to the dot
        ctx.font = "15px system-ui,sans-serif";
        ctx.fillText(city.flag, px, py + sign * 18);

        // city name
        ctx.font      = "bold 10px system-ui,sans-serif";
        ctx.fillStyle = "#ffe4e6";
        ctx.fillText(city.name,    px, py + sign * 31);

        // country
        ctx.font      = "9px system-ui,sans-serif";
        ctx.fillStyle = "#fecdd3";
        ctx.fillText(city.country, px, py + sign * 42);

        ctx.restore();
      }

      drawCity(PP);
      drawCity(PERTH);

      /* ── 13. distance badge ── */
      const badgePt = gcPoint(0.5, PP, PERTH);
      const badgeP  = project(badgePt.lon, badgePt.lat, rotLon);
      if (badgeP) {
        const [bx, by] = badgeP;
        const bw = 72, bh = 18, br = 8;
        const bLeft = bx - bw / 2, bTop = by - bh - 8;

        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur  = 8;
        ctx.fillStyle   = "rgba(15,2,32,0.82)";
        ctx.beginPath();
        ctx.moveTo(bLeft + br, bTop);
        ctx.lineTo(bLeft + bw - br, bTop);
        ctx.quadraticCurveTo(bLeft + bw, bTop, bLeft + bw, bTop + br);
        ctx.lineTo(bLeft + bw, bTop + bh - br);
        ctx.quadraticCurveTo(bLeft + bw, bTop + bh, bLeft + bw - br, bTop + bh);
        ctx.lineTo(bLeft + br, bTop + bh);
        ctx.quadraticCurveTo(bLeft, bTop + bh, bLeft, bTop + bh - br);
        ctx.lineTo(bLeft, bTop + br);
        ctx.quadraticCurveTo(bLeft, bTop, bLeft + br, bTop);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.font       = "bold 9px system-ui,sans-serif";
        ctx.textAlign  = "center";
        ctx.fillStyle  = "#fbbf24";
        ctx.fillText("≈ 5,100 km", bx, bTop + 12.5);
        ctx.restore();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-label="3D globe showing Phnom Penh, Cambodia and Perth, Australia"
    />
  );
}
