"use client";

import { Heart, Images } from "lucide-react";

import { AnimatedText } from "./animated-text";
import { CategorizedGallery } from "./categorized-gallery";
import { ScrollReveal } from "./scroll-reveal";
import type { BookPage } from "./types";

export function GalleryArchivePage({ page }: { page: BookPage }) {
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

      {/* ── Quote + intro + note card ── */}
      <ScrollReveal delay={80}>
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
      </ScrollReveal>

      {/* ── Archive info card ── */}
      <ScrollReveal delay={140}>
        <div className="relative overflow-hidden rounded-[1.6rem] border border-rose-200/70 bg-gradient-to-br from-rose-900 via-rose-950 to-pink-950 p-4 shadow-[0_20px_50px_rgba(136,19,55,0.3)] sm:rounded-[1.8rem] sm:p-6">
          <Heart className="absolute right-5 top-4 size-16 fill-rose-800/20 text-rose-800/20 sm:size-20" aria-hidden="true" />
          <Heart className="absolute bottom-3 left-4 size-10 fill-rose-800/15 text-rose-800/15 sm:size-12" aria-hidden="true" />

          <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 to-rose-800 text-white shadow-[0_8px_20px_rgba(136,19,55,0.35)] sm:size-12 sm:rounded-2xl"
              >
                <Images className="size-4 sm:size-5" />
              </div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-rose-300 sm:text-[0.68rem]">
                Why This Archive Matters
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-rose-700/60" />
              <Heart className="size-3 fill-rose-400 text-rose-400" />
              <div className="h-px flex-1 bg-rose-700/60" />
            </div>

            <p className="font-heading text-lg italic leading-8 text-rose-100 sm:text-xl sm:leading-9">
              &ldquo;{page.note}&rdquo;
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Section divider ── */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-rose-300/60 to-transparent" />
        <p className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-rose-400 sm:text-[0.62rem]">
          our photo memories
        </p>
        <div className="h-px flex-1 bg-gradient-to-l from-rose-300/60 to-transparent" />
      </div>

      {/* ── Gallery ── */}
      {page.galleryCategories ? (
        <CategorizedGallery categories={page.galleryCategories} />
      ) : null}

    </div>
  );
}
