"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { cn } from "@/lib/utils";

import type { GalleryCategory, MemoryPhoto } from "./types";

type LightboxState = {
  photo: MemoryPhoto;
  allPhotos: MemoryPhoto[];
  index: number;
};

function Lightbox({
  state,
  onClose,
  onPrev,
  onNext,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { photo, allPhotos, index } = state;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="animate-lightbox-open fixed inset-0 z-[9998] flex items-center justify-center bg-rose-950/88 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Image container */}
      <div
        className="animate-lightbox-image-in relative flex max-h-[90dvh] max-w-[92vw] flex-col items-center gap-4 lg:max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Close photo"
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 flex size-10 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-md transition-all hover:bg-white/28 active:scale-95"
        >
          <X className="size-5" />
        </button>

        {/* Photo */}
        <div className="relative max-h-[78dvh] w-full overflow-hidden rounded-[1.8rem] border border-white/18 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={900}
            height={900}
            className="max-h-[78dvh] w-full object-contain"
            sizes="(max-width: 768px) 92vw, 768px"
          />
        </div>

        {/* Caption + nav */}
        <div className="flex w-full items-center justify-between gap-4 px-1">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={onPrev}
            disabled={index === 0}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-sm transition-all hover:bg-white/24 disabled:pointer-events-none disabled:opacity-30 active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="min-w-0 flex-1 text-center">
            {photo.caption ? (
              <p className="font-heading text-lg italic text-white">{photo.caption}</p>
            ) : null}
            <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/55">
              {index + 1} / {allPhotos.length}
            </p>
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={onNext}
            disabled={index === allPhotos.length - 1}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-sm transition-all hover:bg-white/24 disabled:pointer-events-none disabled:opacity-30 active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function CategorizedGallery({
  categories,
}: {
  categories: GalleryCategory[];
  onEditPhoto?: (photo: MemoryPhoto, category: GalleryCategory) => void;
  onDeletePhoto?: (photo: MemoryPhoto, category: GalleryCategory) => void;
}) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openPhoto = useCallback(
    (photo: MemoryPhoto, allPhotos: MemoryPhoto[], index: number) => {
      setLightbox({ photo, allPhotos, index });
    },
    [],
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevPhoto = useCallback(() => {
    setLightbox((prev) => {
      if (!prev || prev.index === 0) return prev;
      const index = prev.index - 1;
      return { ...prev, photo: prev.allPhotos[index], index };
    });
  }, []);

  const nextPhoto = useCallback(() => {
    setLightbox((prev) => {
      if (!prev || prev.index === prev.allPhotos.length - 1) return prev;
      const index = prev.index + 1;
      return { ...prev, photo: prev.allPhotos[index], index };
    });
  }, []);

  return (
    <>
      <div className="grid gap-8">
        {categories.map((category) => (
          <section key={category.title} className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-3xl text-rose-950">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-rose-300/60 to-transparent" />
              </div>
              <p className="max-w-3xl text-sm leading-7 text-rose-950/68">
                {category.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {category.photos.map((photo, photoIndex) => (
                <figure
                  key={photo.id ?? photo.src}
                  className={cn(
                    "group relative cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/72 bg-white/72 p-2 shadow-[0_20px_46px_rgba(190,24,93,0.1)] transition-shadow duration-300 hover:shadow-[0_28px_60px_rgba(190,24,93,0.18)]",
                    photo.cardClassName,
                  )}
                  onClick={() => openPhoto(photo, category.photos, photoIndex)}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-[1.5rem] bg-rose-100",
                      photo.frameClassName ?? "aspect-[4/5]",
                    )}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className={cn(
                        "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]",
                        photo.imageClassName,
                      )}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-rose-950/24 via-transparent to-white/10 transition-all duration-300 group-hover:from-rose-950/82 group-hover:via-rose-950/34 group-hover:to-rose-950/10" />

                    {/* Tap to expand hint */}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-center pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full bg-white/18 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        View full
                      </span>
                    </div>

                    {photo.hint ? (
                      <div className="absolute inset-x-0 bottom-8 translate-y-5 px-4 pb-0 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="rounded-[1.3rem] bg-black/24 p-4 backdrop-blur-md">
                          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-rose-100">
                            Description
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/92">
                            {photo.hint}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <figcaption className="px-2 pb-2 pt-3">
                    <p className="font-heading text-xl text-rose-950">
                      {photo.caption}
                    </p>
                    {photo.hint ? (
                      <p className="mt-1 text-sm leading-6 text-rose-950/64">
                        {photo.hint}
                      </p>
                    ) : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      {mounted && lightbox
        ? createPortal(
            <Lightbox
              state={lightbox}
              onClose={closeLightbox}
              onPrev={prevPhoto}
              onNext={nextPhoto}
            />,
            document.body,
          )
        : null}
    </>
  );
}
