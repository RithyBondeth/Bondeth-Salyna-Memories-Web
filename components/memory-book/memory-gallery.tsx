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
            Captured Moments
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {photos.map((photo) => (
          <div key={photo.src} className="w-full max-w-sm mx-auto sm:max-w-none sm:mx-0">
            <MemoryPhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </section>
  );
}
