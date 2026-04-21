"use client";

import { GalleryArchivePage } from "@/components/memory-book/gallery-archive-page";
import { LetterPage } from "@/components/memory-book/letter-page";
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

  if (page.variant === "gallery" || page.id === "gallery") {
    return <GalleryArchivePage page={page} />;
  }

  if (page.variant === "letter") {
    return <LetterPage page={page} />;
  }

  return <StoryPage page={page} theme={currentPageState.theme} />;
}
