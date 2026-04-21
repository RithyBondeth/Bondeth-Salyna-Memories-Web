import { AnimatedText } from "./animated-text";
import { cn } from "@/lib/utils";

import { MemoryGallery } from "./memory-gallery";
import type { BookPage, PageTheme } from "./types";

type StoryPageProps = {
  page: BookPage;
  theme: PageTheme;
};

export function StoryPage({ page, theme }: StoryPageProps) {
  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
      <div className="flex flex-col gap-5 sm:gap-6">
        <span className="w-fit rounded-full bg-gradient-to-r from-rose-900 to-rose-950 px-3.5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-rose-50 shadow-[0_6px_20px_rgba(136,19,55,0.28)]">
          {page.eyebrow}
        </span>

        <div className="space-y-3">
          <AnimatedText
            as="h2"
            text={page.title}
            className="max-w-2xl font-heading text-3xl leading-[1.08] tracking-tight text-rose-950 sm:text-4xl lg:text-[3.6rem]"
            delay={0.08}
            stagger={0.045}
          />
          <AnimatedText
            as="p"
            text={page.subtitle}
            className="max-w-2xl text-base leading-8 text-rose-900/68 sm:text-lg"
            delay={0.2}
            duration={0.72}
            stagger={0.018}
          />
        </div>

        <p className="max-w-2xl text-[0.95rem] leading-8 text-rose-950/76 sm:text-base">
          {page.intro}
        </p>

        <blockquote className="relative rounded-[1.6rem] border border-rose-100/60 bg-gradient-to-br from-white/80 to-rose-50/70 p-5 shadow-[0_16px_40px_rgba(190,24,93,0.09)] sm:rounded-[1.8rem]">
          <span className="pointer-events-none absolute left-4 top-1 font-heading text-5xl leading-none text-rose-200 sm:top-2 sm:text-6xl">
            &ldquo;
          </span>
          <p className="pl-7 font-heading text-xl italic leading-8 text-rose-900 sm:text-2xl sm:leading-9">
            {page.quote}&rdquo;
          </p>
        </blockquote>
      </div>

      <div className="flex flex-col gap-4">
        <MemoryGallery photos={page.photos} />

        {page.cards.map((card) => (
          <div
            key={card.title}
            className={cn(
              "rounded-[1.6rem] border border-rose-100/55 p-4 shadow-[0_16px_40px_rgba(190,24,93,0.08)] backdrop-blur-md sm:rounded-[1.8rem] sm:p-5",
              theme.card,
            )}
          >
            <div className="mb-3.5 flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-rose-800 to-rose-950 p-3 text-rose-50 shadow-[0_8px_20px_rgba(136,19,55,0.28)]">
                <card.icon className="size-5" />
              </div>
              <h3 className="font-heading text-xl text-rose-950 sm:text-2xl">
                {card.title}
              </h3>
            </div>
            <p className="text-sm leading-7 text-rose-950/72 sm:text-[0.95rem]">
              {card.body}
            </p>
          </div>
        ))}

        <div className="rounded-[1.6rem] border border-rose-200/70 bg-gradient-to-br from-rose-50/85 to-pink-50/70 p-4 shadow-[0_14px_36px_rgba(190,24,93,0.07)] sm:rounded-[1.8rem] sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/60 to-transparent" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-rose-400">
              A Note From Bondeth
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-200/60 to-transparent" />
          </div>
          <p className="text-[0.9rem] leading-7 text-rose-950/74 sm:text-sm">
            {page.note}
          </p>
        </div>
      </div>
    </div>
  );
}
