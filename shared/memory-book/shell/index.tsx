"use client";

import { startTransition, useEffect, useEffectEvent } from "react";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  FIRST_ANNIVERSARY,
  formatDate,
  getRelationshipMetrics,
  RELATIONSHIP_START,
} from "@/components/memory-book/dates";
import { FloatingHearts } from "@/components/memory-book/floating-hearts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { BOOK_ROUTES, TOTAL_PHOTO_SLOTS } from "../constants";
import type { BookRouteState } from "../utils";

const relationshipMetrics = getRelationshipMetrics();
type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export function MemoryBookShell({
  children,
  currentPageState,
}: Readonly<{
  children: React.ReactNode;
  currentPageState: BookRouteState;
}>) {
  const router = useRouter();
  const { daysTogether } = relationshipMetrics;

  const goToHref = (href: string) => {
    const navigate = () => {
      startTransition(() => {
        router.push(href, { scroll: false });
      });
    };

    const documentWithTransition = document as ViewTransitionDocument;

    if (documentWithTransition.startViewTransition) {
      documentWithTransition.startViewTransition(navigate);
      return;
    }

    navigate();
  };

  const handleKeyboardNavigation = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && currentPageState.nextRoute) {
      goToHref(currentPageState.nextRoute.href);
    }

    if (event.key === "ArrowLeft" && currentPageState.previousRoute) {
      goToHref(currentPageState.previousRoute.href);
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardNavigation);

    return () => {
      window.removeEventListener("keydown", handleKeyboardNavigation);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#fff1f6_0%,#ffd7e5_45%,#ffc3db_100%)] px-4 py-6 text-zinc-900 sm:px-6 lg:px-10 lg:py-8">
      <div className="romance-grid pointer-events-none absolute inset-0 opacity-35" />
      <FloatingHearts />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl flex-col gap-8">
        <section className="flex flex-col gap-4 pt-4 text-balance lg:max-w-3xl lg:pt-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/65 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-rose-700 shadow-[0_10px_30px_rgba(190,24,93,0.08)] backdrop-blur-md">
            <Heart className="size-3.5 fill-current" />
            Bondeth & Salyna
          </div>

          <h1 className="max-w-4xl font-heading text-5xl leading-none tracking-tight text-rose-950 sm:text-6xl lg:text-7xl">
            A modern love book for your long-distance story.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-rose-950/75 sm:text-lg">
            This keepsake is designed like a digital scrapbook in motion: soft pink
            light, floating hearts, and pages you can flip through whenever you miss
            each other.
          </p>
        </section>

        <section className="grid flex-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-4 rounded-[2rem] border border-white/55 bg-white/45 p-4 shadow-[0_24px_80px_rgba(190,24,93,0.1)] backdrop-blur-xl lg:p-5">
            <div className="rounded-[1.5rem] bg-white/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-rose-500">
                Page Index
              </p>
              <p className="mt-2 text-sm leading-6 text-rose-950/70">
                Tap a chapter or use the left and right arrow keys to turn the pages.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {BOOK_ROUTES.map((entry, index) => {
                const isActive = entry.id === currentPageState.route.id;

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => goToHref(entry.href)}
                    className={cn(
                      "rounded-[1.4rem] border px-4 py-3 text-left transition-all",
                      isActive
                        ? "border-rose-300 bg-rose-100/90 shadow-[0_18px_40px_rgba(225,29,72,0.14)]"
                        : "border-white/60 bg-white/60 hover:-translate-y-0.5 hover:bg-white/80"
                    )}
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-rose-500">
                      Page {index + 1}
                    </p>
                    <p className="mt-1 font-heading text-2xl text-rose-950">
                      {entry.page.label}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-rose-950/68">
                      {entry.page.title}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-3 rounded-[1.5rem] bg-rose-950 p-4 text-rose-50 shadow-[0_18px_48px_rgba(76,5,25,0.25)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200">
                Love Notes
              </p>
              <div className="grid gap-3 text-sm leading-6 text-rose-100/88">
                <p>{daysTogether} days of choosing each other.</p>
                <p>
                  Your story started on {formatDate(RELATIONSHIP_START)}, and your first
                  anniversary will arrive on {formatDate(FIRST_ANNIVERSARY)}.
                </p>
                <p>{TOTAL_PHOTO_SLOTS} placeholder photo slots are ready for you in the album.</p>
              </div>
            </div>
          </aside>

          <div className="relative flex min-h-[620px] items-center justify-center">
            <div className="absolute inset-x-6 top-8 h-[88%] rounded-[2.2rem] bg-white/25 shadow-[0_32px_120px_rgba(190,24,93,0.12)] backdrop-blur-md" />
            <div className="absolute inset-x-3 top-4 h-[92%] rounded-[2.4rem] bg-white/35 shadow-[0_32px_120px_rgba(190,24,93,0.16)] backdrop-blur-md" />

            <article
              className={cn(
                "page-card relative w-full overflow-hidden rounded-[2.6rem] border bg-gradient-to-br p-1 shadow-[0_36px_120px_rgba(136,19,55,0.18)]",
                currentPageState.theme.edge,
                currentPageState.theme.frame
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-90",
                  currentPageState.theme.halo
                )}
              />
              <div className="paper-sheen absolute inset-0" />

              <div className="relative rounded-[2.25rem] border border-white/65 bg-white/38 p-5 backdrop-blur-md sm:p-6 lg:p-8">
                <div
                  key={currentPageState.route.id}
                  className="animate-page-enter memory-book-content"
                >
                  {children}
                </div>
              </div>
            </article>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-white/55 bg-white/48 px-5 py-4 shadow-[0_24px_80px_rgba(190,24,93,0.1)] backdrop-blur-xl sm:flex-row sm:items-center">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
              Chapter Progress
            </p>
            <div className="flex flex-wrap gap-2">
              {BOOK_ROUTES.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  aria-label={`Go to ${entry.page.label}`}
                  onClick={() => goToHref(entry.href)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    entry.id === currentPageState.route.id
                      ? "w-14 bg-rose-500"
                      : "w-7 bg-rose-200 hover:bg-rose-300"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-full border-rose-300/75 bg-white/75 px-6 text-rose-700 hover:bg-rose-50"
              onClick={() =>
                currentPageState.previousRoute
                  ? goToHref(currentPageState.previousRoute.href)
                  : undefined
              }
              disabled={!currentPageState.previousRoute}
            >
              <ArrowLeft className="size-4" />
              Previous Page
            </Button>

            <Button
              type="button"
              className="h-12 rounded-full bg-rose-950 px-6 text-rose-50 hover:bg-rose-900"
              onClick={() =>
                currentPageState.nextRoute
                  ? goToHref(currentPageState.nextRoute.href)
                  : undefined
              }
              disabled={!currentPageState.nextRoute}
            >
              Next Page
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </footer>
      </div>
    </main>
  );
}
