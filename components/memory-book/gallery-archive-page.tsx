import { CategorizedGallery } from "./categorized-gallery";
import type { BookPage } from "./types";

export function GalleryArchivePage({ page }: { page: BookPage }) {
  return (
    <div className="grid gap-6">
      <h2 className="font-heading text-4xl leading-none tracking-tight text-rose-950 sm:text-5xl lg:text-[4.2rem]">
        {page.title}
      </h2>

      {page.galleryCategories ? (
        <CategorizedGallery categories={page.galleryCategories} />
      ) : null}
    </div>
  );
}
