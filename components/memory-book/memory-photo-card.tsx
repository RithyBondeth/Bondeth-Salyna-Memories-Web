import Image from "next/image";

import { cn } from "@/lib/utils";

import type { MemoryPhoto } from "./types";

export function MemoryPhotoCard({ photo }: { photo: MemoryPhoto }) {
  return (
    <figure
      className={cn(
        "group rounded-[1.8rem] border border-white/72 bg-white/74 p-3 shadow-[0_18px_42px_rgba(190,24,93,0.08)]",
        photo.cardClassName
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.35rem] border border-rose-100 bg-rose-50",
          photo.frameClassName ?? "aspect-[4/5]"
        )}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 32vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
            photo.imageClassName
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/55 via-transparent to-white/20" />
        <span className="absolute left-3 top-3 rounded-full bg-white/82 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-rose-600 shadow-sm">
          Placeholder
        </span>
      </div>

      <figcaption className="mt-3 grid gap-1 px-1">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
          {photo.caption}
        </p>
        <p className="text-sm leading-6 text-rose-950/68">{photo.hint}</p>
      </figcaption>
    </figure>
  );
}
