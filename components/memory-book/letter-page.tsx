import { Heart } from "lucide-react";

import { AnimatedText } from "./animated-text";
import type { BookPage } from "./types";

export function LetterPage({ page }: { page: BookPage }) {
  const letter = page.letter;

  if (!letter) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-7 py-3 sm:py-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-gradient-to-r from-rose-900 to-rose-950 px-3.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-rose-50 shadow-[0_6px_20px_rgba(136,19,55,0.28)]">
          {page.eyebrow}
        </span>
        <span className="font-heading text-sm italic text-rose-400">
          {letter.dateLine}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/70 to-rose-200/70" />
        <Heart className="size-3.5 fill-rose-200 text-rose-200" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-rose-200/70 to-rose-200/70" />
      </div>

      <AnimatedText
        as="p"
        text={letter.opener}
        className="font-heading text-4xl italic leading-[1.1] text-rose-950 sm:text-5xl lg:text-6xl"
        delay={0.1}
        stagger={0.05}
      />

      <div className="flex flex-col gap-5 text-[0.97rem] leading-9 text-rose-950/80 sm:text-base sm:leading-10">
        {letter.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/70 to-rose-200/70" />
        <Heart className="size-3 fill-rose-200 text-rose-200" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-rose-200/70 to-rose-200/70" />
      </div>

      <div className="flex flex-col items-end gap-1.5 text-right">
        <p className="text-base italic leading-8 text-rose-900/72">
          {letter.signOff}
        </p>
        <p className="font-heading text-4xl italic leading-none text-rose-950">
          {letter.signature}
        </p>
      </div>
    </div>
  );
}
