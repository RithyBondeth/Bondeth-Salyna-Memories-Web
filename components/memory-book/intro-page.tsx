"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";

/* ─── background floating hearts ─────────────────────────────────── */
const BG_HEARTS = [
  { size: 10, left: "8%",  delay: "0s",    dur: "7s",   opacity: 0.18 },
  { size: 7,  left: "18%", delay: "2.1s",  dur: "6s",   opacity: 0.14 },
  { size: 14, left: "28%", delay: "0.8s",  dur: "8.5s", opacity: 0.16 },
  { size: 9,  left: "42%", delay: "3.2s",  dur: "6.5s", opacity: 0.20 },
  { size: 12, left: "55%", delay: "1.4s",  dur: "7.5s", opacity: 0.15 },
  { size: 8,  left: "65%", delay: "0.4s",  dur: "6s",   opacity: 0.18 },
  { size: 16, left: "75%", delay: "2.6s",  dur: "9s",   opacity: 0.12 },
  { size: 10, left: "85%", delay: "1s",    dur: "7s",   opacity: 0.16 },
  { size: 7,  left: "92%", delay: "3.8s",  dur: "6.5s", opacity: 0.20 },
  { size: 13, left: "35%", delay: "4.5s",  dur: "8s",   opacity: 0.13 },
  { size: 6,  left: "50%", delay: "2s",    dur: "5.5s", opacity: 0.22 },
  { size: 11, left: "72%", delay: "5s",    dur: "7s",   opacity: 0.15 },
];

type Phase = "entering" | "ready" | "exiting";

export function IntroPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("entering");

  // Show the enter button after all entrance animations settle
  useEffect(() => {
    const t = setTimeout(() => setPhase("ready"), 2800);
    return () => clearTimeout(t);
  }, []);

  function handleEnter() {
    setPhase("exiting");
    setTimeout(() => router.push("/cover"), 750);
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
        "animate-intro-bg-reveal",
        phase === "exiting" && "animate-intro-exit",
      )}
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, #5c0a20 0%, #3b0612 40%, #1a0209 100%)",
      }}
    >

      {/* ── Ambient glow orb ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="animate-intro-glow size-[480px] rounded-full sm:size-[640px]"
          style={{
            background:
              "radial-gradient(circle, rgba(225,29,72,0.28) 0%, rgba(190,18,60,0.10) 55%, transparent 80%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Floating background hearts ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {BG_HEARTS.map((h, i) => (
          <Heart
            key={i}
            className="absolute bottom-[-10px] fill-rose-300 text-rose-300"
            style={{
              width:  h.size,
              height: h.size,
              left:   h.left,
              opacity: 0,
              animationName:            "intro-heart-rise",
              animationDuration:        h.dur,
              animationDelay:           h.delay,
              animationIterationCount:  "infinite",
              animationTimingFunction:  "ease-in-out",
              animationFillMode:        "both",
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-10 text-center sm:gap-5">

        {/* Top decorative line */}
        <div
          className="h-px origin-center bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"
          style={{
            width: "180px",
            animation: "intro-line-expand 1s cubic-bezier(0.22,1,0.36,1) 0.3s both",
          }}
        />

        {/* ── Bondeth ── */}
        <h1
          className="font-heading text-5xl italic leading-none text-rose-100 drop-shadow-[0_0_28px_rgba(251,113,133,0.5)] sm:text-6xl lg:text-7xl"
          style={{
            animation: "intro-slide-up 1s cubic-bezier(0.22,1,0.36,1) 0.5s both",
          }}
        >
          Bondeth
        </h1>

        {/* ── Heart ── */}
        <Heart
          className="size-7 fill-rose-400 text-rose-400 drop-shadow-[0_0_12px_rgba(251,113,133,0.7)] sm:size-9"
          style={{
            animation:
              "intro-fade-in 0.8s ease 1s both, heart-pulse 2.8s ease-in-out 1.3s infinite",
          }}
        />

        {/* ── Salyna ── */}
        <h1
          className="font-heading text-5xl italic leading-none text-rose-100 drop-shadow-[0_0_28px_rgba(251,113,133,0.5)] sm:text-6xl lg:text-7xl"
          style={{
            animation: "intro-slide-up 1s cubic-bezier(0.22,1,0.36,1) 0.8s both",
          }}
        >
          Salyna
        </h1>

        {/* Bottom decorative line */}
        <div
          className="h-px origin-center bg-gradient-to-r from-transparent via-rose-400/50 to-transparent"
          style={{
            width: "180px",
            animation: "intro-line-expand 1s cubic-bezier(0.22,1,0.36,1) 1s both",
          }}
        />

        {/* ── Date ── */}
        <p
          className="text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-rose-300/55 sm:text-[0.65rem]"
          style={{ animation: "intro-fade-in 1.2s ease 1.4s both" }}
        >
          01 · 09 · 2025
        </p>

        {/* ── Enter button ── */}
        <div
          className="mt-4 sm:mt-6"
          style={{
            animation:
              phase === "ready" || phase === "exiting"
                ? "intro-btn-appear 0.8s cubic-bezier(0.22,1,0.36,1) both"
                : "none",
            opacity: phase === "entering" ? 0 : 1,
          }}
        >
          <button
            onClick={handleEnter}
            className={cn(
              "group relative overflow-hidden rounded-full px-8 py-3.5 sm:px-10 sm:py-4",
              "border border-rose-400/30 bg-rose-900/40 backdrop-blur-md",
              "transition-all duration-300 hover:border-rose-300/50 hover:bg-rose-800/50",
              "shadow-[0_0_32px_rgba(225,29,72,0.18)] hover:shadow-[0_0_44px_rgba(225,29,72,0.30)]",
            )}
          >
            {/* Button glow sweep */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-rose-300/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden="true"
            />

            <span className="relative flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-rose-200 sm:text-[0.75rem]">
              Open our story
              <Heart className="size-3 fill-rose-300 text-rose-300 transition-transform duration-300 group-hover:scale-125 sm:size-3.5" />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
