"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { AssetImage } from "./asset-image";

import { AnimatedText } from "./animated-text";
import { ScrollReveal } from "./scroll-reveal";
import { DistanceMap } from "./distance-map";

/* ─── live timer ─────────────────────────────────────────────── */
const START = new Date(2025, 8, 1, 0, 0, 0); // September 1, 2025

type TimeUnit = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeTogether(): TimeUnit {
  const now = new Date();
  const totalMs = now.getTime() - START.getTime();
  if (totalMs < 0)
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  // Full completed months
  let months =
    (now.getFullYear() - START.getFullYear()) * 12 +
    (now.getMonth() - START.getMonth());
  if (now.getDate() < START.getDate()) months--;
  months = Math.max(0, months);

  // The date of the last "month anniversary"
  const lastAnniv = new Date(
    START.getFullYear(),
    START.getMonth() + months,
    START.getDate(),
    0,
    0,
    0,
  );
  const elapsed = now.getTime() - lastAnniv.getTime();

  const days = Math.floor(elapsed / 86_400_000);
  const hours = Math.floor(elapsed / 3_600_000) % 24;
  const minutes = Math.floor(elapsed / 60_000) % 60;
  const seconds = Math.floor(elapsed / 1_000) % 60;

  return { months, days, hours, minutes, seconds };
}

/* ─── profile card ───────────────────────────────────────────── */
function ProfileCard({
  name,
  flag,
  photoSrc,
  gradient,
}: {
  name: string;
  flag: string;
  photoSrc: string;
  gradient: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[1.6rem] border border-rose-100/60 bg-gradient-to-br from-white/84 to-rose-50/70 p-4 shadow-[0_16px_40px_rgba(190,24,93,0.09)] sm:gap-3.5 sm:p-5">
      {/* Avatar */}
      <div
        className={`relative size-24 overflow-hidden rounded-full border-2 border-white shadow-[0_8px_24px_rgba(244,63,94,0.25)] sm:size-28 ${gradient}`}
      >
        <AssetImage
          src={photoSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>

      {/* Name */}
      <p className="font-heading text-xl text-rose-950 sm:text-2xl">{name}</p>

      {/* Flag chip */}
      <span className="rounded-full border border-rose-100/80 bg-rose-50/80 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-rose-600 sm:px-3 sm:py-1 sm:text-[0.65rem]">
        {flag}
      </span>
    </div>
  );
}

/* ─── counter cell ───────────────────────────────────────────── */
function CounterCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-[1.2rem] border border-rose-100/55 bg-gradient-to-br from-white/90 to-rose-50/80 px-1 py-3 shadow-[0_8px_24px_rgba(190,24,93,0.08)] sm:rounded-[1.3rem] sm:px-2 sm:py-4">
      <span className="font-heading text-2xl tabular-nums leading-none text-rose-950 sm:text-3xl lg:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-rose-400 sm:text-[0.58rem] sm:tracking-[0.22em]">
        {label}
      </span>
    </div>
  );
}

/* ─── main page ──────────────────────────────────────────────── */
export function TogetherPage() {
  const [time, setTime] = useState<TimeUnit>(() => getTimeTogether());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeTogether()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-5 py-1 sm:gap-6">
      {/* ── Hero header ── */}
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <div className="flex items-center gap-3">
          <span className="w-fit rounded-full bg-gradient-to-r from-rose-900 to-rose-950 px-3.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-rose-50 shadow-[0_6px_20px_rgba(136,19,55,0.28)]">
            Our Love Story
          </span>
          <Heart className="size-4 fill-rose-300 text-rose-300 animate-heart-pulse" />
        </div>

        <AnimatedText
          as="h2"
          text="Every second counts, my love."
          className="max-w-lg font-heading text-3xl italic leading-[1.08] text-rose-950 sm:text-4xl lg:text-[2.7rem]"
          delay={0.06}
          stagger={0.04}
        />

        <p className="max-w-xl text-sm leading-7 text-rose-900/65 sm:text-[0.95rem]">
          Across two countries and thousands of kilometres, every moment
          together is treasured.
        </p>
      </div>

      {/* ── Profile cards ── */}
      <ScrollReveal delay={60}>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          <ProfileCard
            name="Bondeth"
            flag="🇰🇭 Cambodia"
            photoSrc="/assets/together/bondeth.HEIC"
            gradient="bg-gradient-to-br from-rose-300 to-rose-600"
          />
          <ProfileCard
            name="Salyna"
            flag="🇦🇺 Australia"
            photoSrc="/assets/together/salyna.HEIC"
            gradient="bg-gradient-to-br from-pink-300 to-pink-600"
          />
        </div>
      </ScrollReveal>

      {/* ── Live counter ── */}
      <ScrollReveal delay={120}>
        <div className="rounded-[1.6rem] border border-rose-200/65 bg-gradient-to-br from-white/82 to-rose-50/70 p-4 shadow-[0_20px_50px_rgba(190,24,93,0.1)] sm:rounded-[1.8rem] sm:p-5">
          <p className="mb-3 text-center text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-rose-400 sm:mb-3.5 sm:text-[0.64rem] sm:tracking-[0.3em]">
            We&apos;ve been together for
          </p>

          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            <CounterCell value={time.months} label="Months" />
            <CounterCell value={time.days} label="Days" />
            <CounterCell value={time.hours} label="Hours" />
            <CounterCell value={time.minutes} label="Min" />
            <CounterCell value={time.seconds} label="Sec" />
          </div>

          <div className="mt-3 flex flex-col items-center gap-1 sm:mt-3.5">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-200/70 sm:w-10" />
              <Heart className="size-2.5 fill-rose-200 text-rose-200" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-200/70 sm:w-10" />
            </div>
            <p className="text-[0.62rem] italic text-rose-400 sm:text-[0.66rem]">
              Since September 1, 2025 &mdash; and counting ♡
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Distance map ── */}
      <ScrollReveal delay={180}>
        <div className="rounded-[1.6rem] border border-rose-100/55 bg-gradient-to-br from-white/72 to-rose-50/58 p-3 shadow-[0_20px_50px_rgba(190,24,93,0.09)] sm:rounded-[1.8rem] sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-2 px-1">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-rose-400 sm:text-[0.64rem] sm:tracking-[0.26em]">
                Distance Between Us
              </p>
              <p className="mt-0.5 font-heading text-xl italic text-rose-950 sm:text-2xl">
                5,540 km apart
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-rose-100/80 bg-rose-50/80 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-rose-500 sm:px-3 sm:py-1.5 sm:text-[0.62rem] sm:tracking-[0.18em]">
              but close at heart ♡
            </span>
          </div>

          <div
            className="overflow-hidden rounded-[1.3rem] border border-white/8 sm:rounded-[1.6rem]"
            style={{ aspectRatio: "500/480", background: "#08011a" }}
          >
            <DistanceMap />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
