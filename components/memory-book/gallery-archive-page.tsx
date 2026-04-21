import { AnimatedText } from "./animated-text";
import { CategorizedGallery } from "./categorized-gallery";
import type { BookPage } from "./types";

export function GalleryArchivePage({ page }: { page: BookPage }) {
  return (
    <div className="grid gap-6">
      <AnimatedText
        as="h2"
        text={page.title}
        className="font-heading text-4xl leading-none tracking-tight text-rose-950 sm:text-5xl lg:text-[4.2rem]"
        delay={0.08}
        stagger={0.05}
      />

      {page.galleryCategories ? (
        <CategorizedGallery categories={page.galleryCategories} />
      ) : null}
    </div>
  );
}
