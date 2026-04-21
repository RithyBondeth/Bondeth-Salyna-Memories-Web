"use client";

import { AnimatedText } from "./animated-text";
import { cn } from "@/lib/utils";
import { GalleryManager } from "./gallery-manager";
import type { BookPage } from "./types";

export function GalleryArchivePage({ page }: { page: BookPage }) {
  return (
    <div className="grid gap-8">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-4">
          <AnimatedText
            as="h2"
            text={page.title}
            className="font-heading text-4xl leading-none tracking-tight text-rose-950 sm:text-5xl lg:text-[4.2rem]"
            delay={0.08}
            stagger={0.05}
          />

          <p className="max-w-3xl text-lg leading-8 text-rose-950/72">
            {page.subtitle}
          </p>

          <p className="max-w-3xl text-base leading-8 text-rose-950/78 sm:text-lg">
            {page.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            {page.chips.map((chip) => (
              <span
                key={chip}
                className={cn(
                  "rounded-full bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700 shadow-[0_10px_25px_rgba(190,24,93,0.06)]",
                )}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <aside className="rounded-[1.9rem] border border-white/72 bg-white/62 p-5 shadow-[0_20px_44px_rgba(190,24,93,0.08)]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
            Why This Archive Matters
          </p>
          <blockquote className="mt-4 font-heading text-2xl leading-9 text-rose-900">
            “{page.quote}”
          </blockquote>
          <p className="mt-4 text-sm leading-7 text-rose-950/72">{page.note}</p>
        </aside>
      </section>

      {page.galleryCategories ? <GalleryManager categories={page.galleryCategories} /> : null}
    </div>
  );
}
