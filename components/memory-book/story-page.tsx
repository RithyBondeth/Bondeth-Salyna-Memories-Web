import { cn } from "@/lib/utils";

import { MemoryGallery } from "./memory-gallery";
import type { BookPage, PageTheme } from "./types";

type StoryPageProps = {
  page: BookPage;
  currentPage: number;
  pagesLength: number;
  theme: PageTheme;
};

export function StoryPage({
  page,
  currentPage,
  pagesLength,
  theme,
}: StoryPageProps) {
  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-rose-950 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-rose-50">
            {page.eyebrow}
          </span>
          <span className="rounded-full border border-white/70 bg-white/66 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-rose-600">
            Page {currentPage + 1} of {pagesLength}
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="max-w-2xl font-heading text-4xl leading-none tracking-tight text-rose-950 sm:text-5xl lg:text-[3.75rem]">
            {page.title}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-rose-950/72">
            {page.subtitle}
          </p>
        </div>

        <p className="max-w-2xl text-base leading-8 text-rose-950/78 sm:text-lg">
          {page.intro}
        </p>

        <blockquote className="rounded-[1.8rem] border border-white/70 bg-white/62 p-5 font-heading text-2xl leading-9 text-rose-900 shadow-[0_18px_40px_rgba(190,24,93,0.08)]">
          “{page.quote}”
        </blockquote>

        <div className="flex flex-wrap gap-3">
          {page.chips.map((chip) => (
            <span
              key={chip}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]",
                theme.chip
              )}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="rounded-[1.6rem] border border-dashed border-rose-300/75 bg-white/52 px-5 py-4 text-sm leading-6 text-rose-950/70">
          This chapter includes local placeholder artwork so you can replace it later with
          real photos without touching the layout.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <MemoryGallery photos={page.photos} />

        {page.cards.map((card) => (
          <div
            key={card.title}
            className={cn(
              "rounded-[1.8rem] border border-white/68 p-5 shadow-[0_20px_45px_rgba(190,24,93,0.08)] backdrop-blur-md",
              theme.card
            )}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-rose-950 p-3 text-rose-50 shadow-[0_10px_24px_rgba(136,19,55,0.22)]">
                <card.icon className="size-5" />
              </div>
              <h3 className="font-heading text-2xl text-rose-950">{card.title}</h3>
            </div>
            <p className="text-sm leading-7 text-rose-950/74 sm:text-[0.98rem]">
              {card.body}
            </p>
          </div>
        ))}

        <div className="rounded-[1.8rem] border border-dashed border-rose-300/80 bg-white/54 p-5 text-sm leading-7 text-rose-950/72">
          {page.note}
        </div>
      </div>
    </div>
  );
}
