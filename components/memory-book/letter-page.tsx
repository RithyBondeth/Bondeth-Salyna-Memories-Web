import { AnimatedText } from "./animated-text";
import type { BookPage } from "./types";

export function LetterPage({ page }: { page: BookPage }) {
  const letter = page.letter;

  if (!letter) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 py-4 sm:py-8">
      <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-rose-500">
        <span>{page.eyebrow}</span>
        <span className="text-rose-400">{letter.dateLine}</span>
      </div>

      <AnimatedText
        as="p"
        text={letter.opener}
        className="font-heading text-5xl leading-none text-rose-950 sm:text-6xl"
        delay={0.1}
        stagger={0.05}
      />

      <div className="flex flex-col gap-6 text-[1.02rem] leading-9 text-rose-950/82 sm:text-lg sm:leading-10">
        {letter.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-end gap-1 text-right">
        <p className="text-base italic leading-8 text-rose-950/76">{letter.signOff}</p>
        <p className="font-heading text-4xl leading-none text-rose-950">
          {letter.signature}
        </p>
      </div>
    </div>
  );
}
