import { Heart } from "lucide-react";

import { AnimatedText } from "./animated-text";
import { ScrollReveal } from "./scroll-reveal";
import type { BookPage } from "./types";

export function LetterPage({ page }: { page: BookPage }) {
  const letter = page.letter;

  if (!letter) {
    return null;
  }

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

      {/* ── Dateline + divider ── */}
      <ScrollReveal delay={60}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/70 to-rose-200/70" />
            <Heart className="size-3 fill-rose-200 text-rose-200 shrink-0" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-rose-200/70 to-rose-200/70" />
          </div>
          <span className="shrink-0 font-heading text-sm italic text-rose-400">
            {letter.dateLine}
          </span>
        </div>
      </ScrollReveal>

      {/* ── Opener card ── */}
      <ScrollReveal delay={120}>
        <div className="relative overflow-hidden rounded-[1.6rem] border border-rose-200/70 bg-gradient-to-br from-rose-900 via-rose-950 to-pink-950 p-5 shadow-[0_20px_50px_rgba(136,19,55,0.3)] sm:rounded-[1.8rem] sm:p-6">
          <Heart className="absolute right-5 top-4 size-16 fill-rose-800/20 text-rose-800/20 sm:size-20" aria-hidden="true" />
          <Heart className="absolute bottom-3 left-4 size-10 fill-rose-800/15 text-rose-800/15 sm:size-12" aria-hidden="true" />

          <div className="relative z-10 flex flex-col gap-3">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-rose-400 sm:text-[0.64rem]">
              a letter for you
            </p>
            <AnimatedText
              as="p"
              text={letter.opener}
              className="font-heading text-2xl italic leading-[1.2] text-rose-100 sm:text-3xl lg:text-4xl"
              delay={0.18}
              stagger={0.04}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* ── Letter body card ── */}
      <ScrollReveal delay={180}>
        <div className="relative overflow-hidden rounded-[1.6rem] border border-rose-100/60 bg-gradient-to-br from-white/90 to-rose-50/75 p-5 shadow-[0_16px_40px_rgba(190,24,93,0.09)] sm:rounded-[1.8rem] sm:p-7">
          {/* Subtle decorative quote mark */}
          <span className="pointer-events-none absolute right-4 top-0 select-none font-heading text-[5rem] leading-none text-rose-100/70 sm:text-[7rem]">
            &rdquo;
          </span>

          <div className="relative z-10 flex flex-col gap-4 text-[0.88rem] leading-8 text-rose-950/80 sm:gap-5 sm:text-[0.95rem] sm:leading-9">
            {letter.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ── Closing divider ── */}
      <ScrollReveal delay={220}>
        <div className="flex items-center gap-3 pt-1">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/70 to-rose-200/70" />
          <Heart className="size-3 fill-rose-200 text-rose-200" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-rose-200/70 to-rose-200/70" />
        </div>
      </ScrollReveal>

      {/* ── Signature card ── */}
      <ScrollReveal delay={260}>
        <div className="overflow-hidden rounded-[1.6rem] border border-rose-100/60 bg-gradient-to-br from-rose-50/90 to-pink-50/75 p-5 shadow-[0_14px_36px_rgba(190,24,93,0.08)] sm:rounded-[1.8rem] sm:p-6">
          <div className="flex flex-col items-end gap-2 text-right">
            <p className="text-sm italic leading-8 text-rose-900/70 sm:text-base">
              {letter.signOff}
            </p>
            <p className="font-heading text-4xl italic leading-none text-rose-950 sm:text-5xl">
              {letter.signature}
            </p>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
