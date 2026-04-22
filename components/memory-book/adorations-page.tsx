"use client";

import { AssetImage } from "./asset-image";
import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";

import { AnimatedText } from "./animated-text";
import { ScrollReveal } from "./scroll-reveal";
import type { BookPage } from "./types";

/* ─── per-card accent palette ────────────────────────────────── */
const ACCENTS = [
  // 0 Beauty
  {
    card:  "from-rose-50/95 via-pink-50/85 to-rose-50/70",
    icon:  "from-rose-700 to-rose-950",
    num:   "text-rose-200/60",
    chip:  "bg-rose-100/80 text-rose-700",
  },
  // 1 Intelligence
  {
    card:  "from-fuchsia-50/90 via-purple-50/80 to-rose-50/70",
    icon:  "from-fuchsia-700 to-fuchsia-950",
    num:   "text-fuchsia-200/55",
    chip:  "bg-fuchsia-100/80 text-fuchsia-700",
  },
  // 2 Hardworking
  {
    card:  "from-amber-50/80 via-rose-50/85 to-pink-50/70",
    icon:  "from-amber-600 to-rose-800",
    num:   "text-amber-200/55",
    chip:  "bg-amber-100/80 text-amber-700",
  },
  // 3 Maturity
  {
    card:  "from-rose-100/90 via-pink-50/85 to-rose-50/75",
    icon:  "from-rose-800 to-rose-950",
    num:   "text-rose-300/50",
    chip:  "bg-rose-100/80 text-rose-800",
  },
  // 4 Mindset
  {
    card:  "from-violet-50/85 via-purple-50/75 to-rose-50/70",
    icon:  "from-violet-700 to-violet-950",
    num:   "text-violet-200/55",
    chip:  "bg-violet-100/80 text-violet-700",
  },
  // 5 Honesty
  {
    card:  "from-pink-50/90 via-fuchsia-50/80 to-rose-50/70",
    icon:  "from-pink-700 to-rose-900",
    num:   "text-pink-200/55",
    chip:  "bg-pink-100/80 text-pink-700",
  },
  // 6 Loyalty
  {
    card:  "from-rose-50/90 via-fuchsia-50/80 to-pink-50/70",
    icon:  "from-rose-700 to-fuchsia-900",
    num:   "text-rose-200/55",
    chip:  "bg-rose-100/80 text-rose-700",
  },
  // 7 Respect
  {
    card:  "from-violet-50/80 via-pink-50/80 to-rose-50/75",
    icon:  "from-violet-700 to-rose-900",
    num:   "text-violet-200/55",
    chip:  "bg-violet-100/80 text-violet-700",
  },
];

// Grid column spans: [2,1,1,2,1,1,2,2] in a 2-col grid
const SPANS = [2, 1, 1, 2, 1, 1, 2, 2];

/* ─── featured (wide) card ───────────────────────────────────── */
function FeaturedCard({
  card,
  index,
  accent,
}: {
  card: BookPage["cards"][number];
  index: number;
  accent: (typeof ACCENTS)[number];
}) {
  return (
    <div
      className={cn(
        "group relative flex min-h-[8rem] flex-col justify-between overflow-hidden",
        "rounded-[1.8rem] border border-white/70 bg-gradient-to-br p-5 shadow-[0_18px_48px_rgba(190,24,93,0.1)]",
        "sm:flex-row sm:items-stretch sm:gap-6 sm:p-6",
        accent.card,
      )}
    >
      {/* Decorative large number */}
      <span
        className={cn(
          "pointer-events-none absolute right-4 top-2 select-none font-heading text-[5.5rem] font-bold leading-none sm:text-[7rem]",
          accent.num,
        )}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon + chip */}
      <div className="flex shrink-0 flex-col gap-3 sm:items-start sm:justify-center">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_10px_28px_rgba(136,19,55,0.28)] sm:size-14",
            accent.icon,
          )}
        >
          <card.icon className="size-5 sm:size-6" />
        </div>

        <span
          className={cn(
            "w-fit rounded-full border border-white/60 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em]",
            accent.chip,
          )}
        >
          {index + 1} of {8}
        </span>
      </div>

      {/* Text */}
      <div className="relative z-10 mt-3 flex flex-col justify-center gap-2 sm:mt-0">
        <h3 className="font-heading text-xl leading-tight text-rose-950 sm:text-2xl lg:text-3xl">
          {card.title}
        </h3>
        <p className="max-w-prose text-[0.82rem] leading-7 text-rose-950/72 sm:text-[0.95rem]">
          {card.body}
        </p>
      </div>
    </div>
  );
}

/* ─── regular (narrow) card ─────────────────────────────────── */
function RegularCard({
  card,
  index,
  accent,
}: {
  card: BookPage["cards"][number];
  index: number;
  accent: (typeof ACCENTS)[number];
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden",
        "rounded-[1.8rem] border border-white/70 bg-gradient-to-br p-4 shadow-[0_18px_48px_rgba(190,24,93,0.1)] sm:p-5",
        accent.card,
      )}
    >
      {/* Decorative number */}
      <span
        className={cn(
          "pointer-events-none absolute right-2.5 top-1 select-none font-heading text-[4rem] font-bold leading-none sm:text-[5rem]",
          accent.num,
        )}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className={cn(
          "relative z-10 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_8px_20px_rgba(136,19,55,0.28)] sm:size-12",
          accent.icon,
        )}
      >
        <card.icon className="size-4 sm:size-5" />
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-1.5">
        <h3 className="font-heading text-base leading-tight text-rose-950 sm:text-lg lg:text-xl">
          {card.title}
        </h3>
        <p className="text-[0.75rem] leading-6 text-rose-950/70 sm:text-[0.82rem] sm:leading-6.5">
          {card.body}
        </p>
      </div>

      {/* Chip */}
      <span
        className={cn(
          "mt-auto w-fit rounded-full border border-white/50 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.18em]",
          accent.chip,
        )}
      >
        {index + 1} / 8
      </span>
    </div>
  );
}

/* ─── main page ──────────────────────────────────────────────── */
export function AdorationsPage({ page }: { page: BookPage }) {
  return (
    <div className="flex flex-col gap-5 py-1 sm:gap-6">

      {/* ── Hero header ── */}
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <div className="flex items-center gap-3">
          <span className="w-fit rounded-full bg-gradient-to-r from-rose-900 to-rose-950 px-3.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-rose-50 shadow-[0_6px_20px_rgba(136,19,55,0.28)]">
            {page.eyebrow}
          </span>
          <Heart className="size-4 fill-rose-300 text-rose-300 animate-heart-pulse" />
        </div>

        <AnimatedText
          as="h2"
          text={page.title}
          className="max-w-lg font-heading text-3xl italic leading-[1.08] text-rose-950 sm:text-4xl lg:text-[2.7rem]"
          delay={0.06}
          stagger={0.04}
        />

        <p className="max-w-xl text-sm leading-7 text-rose-900/65 sm:text-[0.95rem]">
          {page.subtitle}
        </p>
      </div>

      {/* ── Photos strip ── */}
      {page.photos.length > 0 && (
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          {page.photos.map((photo) => (
            <figure
              key={photo.src}
              className={cn(
                "group overflow-hidden rounded-[1.4rem] border border-white/70 bg-white/60 p-1.5 shadow-[0_14px_36px_rgba(190,24,93,0.09)] sm:rounded-[1.6rem] sm:p-2",
                photo.cardClassName,
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-[1rem] bg-rose-50 sm:rounded-[1.2rem]",
                  photo.frameClassName ?? "aspect-[16/10]",
                )}
              >
                <AssetImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 via-transparent to-white/10" />
              </div>
              {photo.caption && (
                <figcaption className="mt-1.5 px-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-rose-500 sm:mt-2 sm:text-[0.65rem]">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* ── Section intro + quote ── */}
      <div className="relative overflow-hidden rounded-[1.6rem] border border-rose-100/60 bg-gradient-to-br from-white/80 to-rose-50/70 p-4 shadow-[0_16px_40px_rgba(190,24,93,0.09)] sm:rounded-[1.8rem] sm:p-6">
        <span className="pointer-events-none absolute left-3 top-0 select-none font-heading text-[4.5rem] leading-none text-rose-200/60 sm:text-[6rem]">
          &ldquo;
        </span>
        <p className="pl-7 font-heading text-lg italic leading-8 text-rose-900 sm:pl-10 sm:text-2xl sm:leading-9">
          {page.quote}&rdquo;
        </p>

        <div className="mt-3.5 flex items-center gap-2 sm:mt-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/60 to-transparent" />
          <Heart className="size-2.5 fill-rose-200 text-rose-200" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/60 to-transparent" />
        </div>

        <p className="mt-3.5 text-[0.82rem] leading-7 text-rose-950/72 sm:mt-4 sm:text-[0.88rem]">
          {page.intro}
        </p>
      </div>

      {/* ── Adoration cards section label ── */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-rose-300/60 to-transparent" />
        <p className="shrink-0 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-rose-400 sm:text-[0.62rem] sm:tracking-[0.3em]">
          8 things I adore about you
        </p>
        <div className="h-px flex-1 bg-gradient-to-l from-rose-300/60 to-transparent" />
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
        {page.cards.map((card, i) => {
          const accent = ACCENTS[i] ?? ACCENTS[0];
          const span   = SPANS[i] ?? 1;
          const isFeatured = span === 2;

          return (
            <ScrollReveal
              key={card.title}
              delay={i * 60}
              className={cn(
                span === 2 ? "col-span-2" : "col-span-1",
              )}
            >
              {isFeatured ? (
                <FeaturedCard card={card} index={i} accent={accent} />
              ) : (
                <RegularCard card={card} index={i} accent={accent} />
              )}
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── Closing love note ── */}
      <ScrollReveal delay={page.cards.length * 60}>
        <div className="relative overflow-hidden rounded-[1.6rem] border border-rose-200/70 bg-gradient-to-br from-rose-900 via-rose-950 to-pink-950 p-4 shadow-[0_20px_50px_rgba(136,19,55,0.3)] sm:rounded-[1.8rem] sm:p-6">
          {/* Decorative hearts */}
          <Heart className="absolute right-5 top-4 size-16 fill-rose-800/20 text-rose-800/20 sm:size-20" aria-hidden="true" />
          <Heart className="absolute bottom-3 left-4 size-10 fill-rose-800/15 text-rose-800/15 sm:size-12" aria-hidden="true" />

          <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-rose-700/60" />
              <Heart className="size-3 fill-rose-400 text-rose-400" />
              <div className="h-px flex-1 bg-rose-700/60" />
            </div>

            <p className="font-heading text-lg italic leading-8 text-rose-100 sm:text-xl lg:text-2xl sm:leading-9">
              &ldquo;{page.note}&rdquo;
            </p>

            <div className="flex items-end justify-between gap-4">
              <p className="text-[0.7rem] leading-6 text-rose-300/80 sm:text-xs">
                Written with love, always.
              </p>
              <p className="font-heading text-2xl italic text-rose-200 sm:text-3xl lg:text-4xl">
                Bondeth
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
