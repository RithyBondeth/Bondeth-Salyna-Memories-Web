"use client";

import { startTransition, useEffect, useEffectEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { AnimatedText } from "@/components/memory-book/animated-text";
import { ClickHearts } from "@/components/memory-book/click-hearts";
import { FloatingHearts } from "@/components/memory-book/floating-hearts";
import { FloatingHeartsCanvas } from "@/components/memory-book/floating-hearts-canvas";
import { SparklesBackground } from "@/components/memory-book/sparkles";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { BOOK_ROUTES } from "../constants";
import type { BookRouteState } from "../utils";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToHref = (href: string) => {
    setIsMenuOpen(false);
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

  const currentIndex = BOOK_ROUTES.findIndex(
    (r) => r.id === currentPageState.route.id,
  );

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-[linear-gradient(160deg,#fef0f6_0%,#fde4f0_18%,#fccde5_45%,#f9bcd6_70%,#fde4f0_90%,#fef0f6_100%)] px-4 pb-[5.5rem] pt-5 text-zinc-900 sm:px-6 lg:px-10 lg:pb-8 lg:pt-8">
      {/* Atmospheric depth overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(253,207,232,0.65)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_85%,rgba(249,168,212,0.4)_0%,transparent_48%)]" />
      <div className="romance-grid pointer-events-none absolute inset-0 opacity-40" />
      <FloatingHeartsCanvas />
      <FloatingHearts />
      <SparklesBackground />
      <ClickHearts />

      <div className="relative mx-auto flex min-h-[calc(100dvh-5.5rem)] w-full max-w-7xl flex-col gap-5 lg:min-h-[calc(100dvh-4rem)] lg:gap-8">
        {/* Header */}
        <header className="flex items-center justify-between pt-2 lg:pt-6">
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-rose-200/60 bg-gradient-to-r from-white/88 via-rose-50/80 to-white/88 px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-rose-600 shadow-[0_8px_28px_rgba(244,63,94,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md">
            <Heart className="size-3 fill-rose-400 text-rose-400 animate-heart-pulse" />
            <AnimatedText
              as="span"
              text="Bondeth & Salyna"
              split="char"
              delay={0.1}
              stagger={0.02}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex size-11 items-center justify-center rounded-full border border-rose-200/60 bg-gradient-to-br from-white/88 to-rose-50/80 text-rose-600 shadow-[0_8px_24px_rgba(244,63,94,0.14)] backdrop-blur-md transition-all active:scale-95 hover:from-white hover:to-rose-50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </header>

        {/* Mobile current page indicator */}
        <div className="flex items-center gap-2 lg:hidden">
          <span className="rounded-full bg-rose-100/80 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
            {currentIndex + 1} / {BOOK_ROUTES.length}
          </span>
          <Heart className="size-2.5 fill-rose-300 text-rose-300" />
          <span className="font-heading text-lg leading-none italic text-rose-900">
            {currentPageState.route.page.label}
          </span>
        </div>

        {/* Desktop tagline */}
        <section className="hidden text-balance lg:block">
          <AnimatedText
            as="h1"
            text="For Salyna, with all my love."
            className="max-w-4xl font-heading text-5xl italic leading-[1.12] tracking-tight text-rose-950 sm:text-6xl lg:text-[4.5rem]"
            delay={0.16}
            stagger={0.05}
          />
        </section>

        {/* Content grid */}
        <section className="grid flex-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:flex lg:flex-col lg:gap-4 lg:rounded-[2rem] lg:border lg:border-rose-100/50 lg:bg-gradient-to-br lg:from-white/52 lg:via-rose-50/38 lg:to-pink-50/28 lg:p-5 lg:shadow-[0_24px_80px_rgba(190,24,93,0.1)] lg:backdrop-blur-xl">
            <div className="grid gap-2 lg:grid-cols-1">
              {BOOK_ROUTES.map((entry, index) => {
                const isActive = entry.id === currentPageState.route.id;

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => goToHref(entry.href)}
                    className={cn(
                      "rounded-[1.4rem] border px-4 py-3 text-left transition-all active:scale-[0.98]",
                      isActive
                        ? "border-rose-200/65 bg-gradient-to-br from-rose-100/92 to-pink-50/82 shadow-[0_12px_36px_rgba(244,63,94,0.18)]"
                        : "border-white/50 bg-gradient-to-br from-white/72 to-rose-50/55 hover:border-rose-100/60 hover:from-white/90 hover:to-rose-50/72",
                    )}
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-rose-400">
                      Page {index + 1}
                    </p>
                    <p className="mt-1 font-heading text-[1.4rem] leading-tight text-rose-950">
                      {entry.page.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-rose-900/58">
                      {entry.page.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Book card */}
          <div className="relative flex min-h-[520px] items-start lg:items-center lg:justify-center">
            {/* Stacked depth layers — desktop only */}
            <div className="absolute inset-x-6 top-8 hidden h-[88%] rounded-[2.2rem] bg-gradient-to-br from-white/30 to-rose-50/20 shadow-[0_32px_120px_rgba(190,24,93,0.12)] backdrop-blur-sm lg:block" />
            <div className="absolute inset-x-3 top-4 hidden h-[92%] rounded-[2.4rem] bg-gradient-to-br from-white/38 to-rose-50/28 shadow-[0_32px_120px_rgba(190,24,93,0.15)] backdrop-blur-md lg:block" />

            <article
              className={cn(
                "page-card relative w-full overflow-hidden rounded-[2rem] border bg-gradient-to-br p-[2px] shadow-[0_24px_80px_rgba(136,19,55,0.18),0_8px_24px_rgba(244,63,94,0.1)] lg:rounded-[2.6rem] lg:shadow-[0_40px_120px_rgba(136,19,55,0.22),0_12px_40px_rgba(244,63,94,0.12)]",
                currentPageState.theme.edge,
                currentPageState.theme.frame,
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-85",
                  currentPageState.theme.halo,
                )}
              />
              <div className="paper-sheen absolute inset-0" />

              <div className="relative rounded-[1.75rem] border border-rose-100/48 bg-[rgba(255,247,250,0.78)] p-4 backdrop-blur-md sm:p-5 lg:rounded-[2.35rem] lg:p-8">
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

        {/* Desktop footer */}
        <footer className="hidden items-center justify-between gap-4 rounded-[2rem] border border-rose-100/55 bg-gradient-to-r from-white/58 via-rose-50/48 to-white/58 px-5 py-4 shadow-[0_20px_60px_rgba(190,24,93,0.1)] backdrop-blur-xl lg:flex">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-rose-400">
              Chapter Progress
            </p>
            <div className="flex flex-wrap gap-1.5">
              {BOOK_ROUTES.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  aria-label={`Go to ${entry.page.label}`}
                  onClick={() => goToHref(entry.href)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    entry.id === currentPageState.route.id
                      ? "w-12 bg-gradient-to-r from-rose-400 to-rose-600 shadow-[0_2px_8px_rgba(244,63,94,0.35)]"
                      : "w-6 bg-rose-200 hover:bg-rose-300",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-full border-rose-200/75 bg-white/80 px-6 text-rose-700 transition-all hover:border-rose-300/80 hover:bg-rose-50/90"
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
              className="h-12 rounded-full bg-gradient-to-r from-rose-800 to-rose-950 px-6 text-rose-50 shadow-[0_8px_24px_rgba(136,19,55,0.28)] transition-all hover:from-rose-700 hover:to-rose-900 hover:shadow-[0_10px_28px_rgba(136,19,55,0.35)]"
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

      {/* Mobile bottom sheet nav */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-rose-950/30 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="animate-slide-up fixed inset-x-0 bottom-0 z-50 flex max-h-[82dvh] flex-col overflow-hidden rounded-t-[2.5rem] border-t border-rose-100/60 bg-gradient-to-b from-rose-50/98 via-white/97 to-white/99 shadow-[0_-20px_80px_rgba(190,24,93,0.22)] backdrop-blur-2xl lg:hidden">
            {/* Drag handle */}
            <div className="flex justify-center pb-3 pt-3">
              <div className="h-1 w-12 rounded-full bg-rose-200" />
            </div>

            <div className="flex items-center justify-between px-5 pb-3">
              <div className="flex items-center gap-2">
                <Heart className="size-3.5 fill-rose-300 text-rose-300" />
                <p className="font-heading text-xl italic text-rose-950">
                  Chapters
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex size-9 items-center justify-center rounded-full bg-rose-100/80 text-rose-600 transition-all active:scale-95 hover:bg-rose-200/80"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <div className="grid grid-cols-2 gap-2.5 pb-2">
                {BOOK_ROUTES.map((entry, index) => {
                  const isActive = entry.id === currentPageState.route.id;

                  return (
                    <button
                      key={entry.id}
                      type="button"
                      onClick={() => goToHref(entry.href)}
                      className={cn(
                        "rounded-[1.4rem] border px-4 py-3.5 text-left transition-all active:scale-[0.97]",
                        isActive
                          ? "border-rose-200/65 bg-gradient-to-br from-rose-100/92 to-pink-50/80 shadow-[0_8px_24px_rgba(244,63,94,0.18)]"
                          : "border-rose-100/70 bg-gradient-to-br from-white/80 to-rose-50/60",
                      )}
                    >
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-rose-400">
                        {index + 1} / {BOOK_ROUTES.length}
                      </p>
                      <p className="mt-1 font-heading text-lg leading-tight text-rose-950">
                        {entry.page.label}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-xs leading-4 text-rose-900/58">
                        {entry.page.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile fixed bottom nav bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-rose-100/55 bg-gradient-to-b from-white/92 to-rose-50/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl lg:hidden">
        <div className="px-4 pb-2 pt-2.5">
          {/* Progress dots */}
          <div className="mb-2.5 flex items-center justify-center gap-1.5">
            {BOOK_ROUTES.map((entry) => (
              <button
                key={entry.id}
                type="button"
                aria-label={`Go to ${entry.page.label}`}
                onClick={() => goToHref(entry.href)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 active:scale-95",
                  entry.id === currentPageState.route.id
                    ? "w-7 bg-gradient-to-r from-rose-400 to-rose-600 shadow-[0_1px_6px_rgba(244,63,94,0.4)]"
                    : "w-3 bg-rose-200 hover:bg-rose-300",
                )}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11 flex-1 rounded-full border-rose-200/70 bg-white/85 text-rose-700 transition-all active:scale-[0.98] hover:bg-rose-50"
              onClick={() =>
                currentPageState.previousRoute
                  ? goToHref(currentPageState.previousRoute.href)
                  : undefined
              }
              disabled={!currentPageState.previousRoute}
            >
              <ArrowLeft className="size-4" />
              Prev
            </Button>

            <Button
              type="button"
              className="h-11 flex-1 rounded-full bg-gradient-to-r from-rose-800 to-rose-950 text-rose-50 shadow-[0_6px_20px_rgba(136,19,55,0.25)] transition-all active:scale-[0.98] hover:from-rose-700 hover:to-rose-900"
              onClick={() =>
                currentPageState.nextRoute
                  ? goToHref(currentPageState.nextRoute.href)
                  : undefined
              }
              disabled={!currentPageState.nextRoute}
            >
              Next
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
