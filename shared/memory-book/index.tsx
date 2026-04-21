"use client";

import { GalleryArchivePage } from "@/components/memory-book/gallery-archive-page";
import { StoryPage } from "@/components/memory-book/story-page";
import type { BookPage } from "@/components/memory-book/types";

import { getBookPageState } from "./utils";

export function MemoryBookRoute({
  sectionId,
}: {
  sectionId: BookPage["id"];
}) {
  const currentPageState = getBookPageState(sectionId);
  const page = currentPageState.route.page;

  return page.id === "gallery" ? (
    <GalleryArchivePage page={page} />
  ) : (
    <StoryPage
      page={page}
      currentPage={currentPageState.index}
      pagesLength={currentPageState.pagesLength}
      theme={currentPageState.theme}
    />
  );
}
