import { MemoryPhotoCard } from "./memory-photo-card";
import type { MemoryPhoto } from "./types";

export function MemoryGallery({ photos }: { photos: MemoryPhoto[] }) {
  return (
    <section className="grid gap-4 rounded-[1.8rem] border border-rose-100/55 bg-gradient-to-br from-white/72 to-rose-50/58 p-4 shadow-[0_16px_44px_rgba(190,24,93,0.09)] backdrop-blur-md sm:rounded-[2rem] sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-rose-400">
            Photo Gallery
          </p>
          <h3 className="mt-1 font-heading text-2xl italic text-rose-950 sm:text-3xl">
            Captured Moments
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="mx-auto w-full max-w-sm sm:mx-0 sm:max-w-none"
          >
            <MemoryPhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </section>
  );
}
