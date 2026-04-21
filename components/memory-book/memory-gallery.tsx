import { ImageIcon } from "lucide-react";

import { MemoryPhotoCard } from "./memory-photo-card";
import type { MemoryPhoto } from "./types";

export function MemoryGallery({ photos }: { photos: MemoryPhoto[] }) {
  return (
    <section className="grid gap-4 rounded-[2rem] border border-white/68 bg-white/54 p-4 shadow-[0_20px_48px_rgba(190,24,93,0.08)] backdrop-blur-md sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
            Photo Gallery
          </p>
          <h3 className="mt-1 font-heading text-3xl text-rose-950">
            Memory Placeholders
          </h3>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-rose-600">
          <ImageIcon className="size-3.5" />
          /public/memories
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo) => (
          <MemoryPhotoCard key={photo.src} photo={photo} />
        ))}
      </div>

      <div className="rounded-[1.6rem] border border-dashed border-rose-300/75 bg-rose-50/55 px-4 py-3 text-sm leading-6 text-rose-950/70">
        Replace any placeholder later by keeping the same filename inside{" "}
        <span className="font-semibold text-rose-700">/public/memories</span>.
      </div>
    </section>
  );
}
