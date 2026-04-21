import Image from "next/image";
import { PencilLine, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import type { GalleryCategory, MemoryPhoto } from "./types";

export function CategorizedGallery({
  categories,
  onEditPhoto,
  onDeletePhoto,
}: {
  categories: GalleryCategory[];
  onEditPhoto?: (photo: MemoryPhoto, category: GalleryCategory) => void;
  onDeletePhoto?: (photo: MemoryPhoto, category: GalleryCategory) => void;
}) {
  return (
    <div className="grid gap-8">
      {categories.map((category) => (
        <section key={category.title} className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center gap-3">
              <h3 className="font-heading text-3xl text-rose-950">{category.title}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-rose-300/60 to-transparent" />
            </div>
            <p className="max-w-3xl text-sm leading-7 text-rose-950/68">
              {category.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {category.photos.map((photo) => (
              <figure
                key={photo.id ?? photo.src}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border border-white/72 bg-white/72 p-2 shadow-[0_20px_46px_rgba(190,24,93,0.1)]",
                  photo.cardClassName
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[1.5rem] bg-rose-100",
                    photo.frameClassName ?? "aspect-[4/5]"
                  )}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    unoptimized={photo.src.startsWith("data:")}
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]",
                      photo.imageClassName
                    )}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/24 via-transparent to-white/10 transition-all duration-300 group-hover:from-rose-950/82 group-hover:via-rose-950/34 group-hover:to-rose-950/10" />

                  {photo.source === "upload" && photo.hint ? (
                    <div className="absolute inset-x-0 bottom-0 translate-y-5 px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-[1.3rem] bg-black/24 p-4 backdrop-blur-md">
                        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-rose-100">
                          Description
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/92">{photo.hint}</p>
                      </div>
                    </div>
                  ) : null}

                  {photo.source === "upload" ? (
                    <div className="absolute right-3 top-3 flex gap-2">
                      <Button
                        type="button"
                        variant="secondary"
                        size="icon-xs"
                        className="rounded-full border border-white/65 bg-white/88 text-rose-700 shadow-sm hover:bg-white"
                        onClick={() => onEditPhoto?.(photo, category)}
                        aria-label={`Edit ${photo.caption}`}
                      >
                        <PencilLine className="size-3.5" />
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="icon-xs"
                        className="rounded-full border border-white/65 bg-white/88 text-rose-700 shadow-sm hover:bg-white"
                        onClick={() => onDeletePhoto?.(photo, category)}
                        aria-label={`Delete ${photo.caption}`}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  ) : null}
                </div>

                <figcaption className="px-2 pb-2 pt-3">
                  <p className="font-heading text-xl text-rose-950">{photo.caption}</p>
                  <p className="mt-1 text-sm leading-6 text-rose-950/64">
                    {photo.source === "upload"
                      ? "Saved in your archive"
                      : "Placeholder ready for your real memory"}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
