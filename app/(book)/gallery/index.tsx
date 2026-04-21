import { GalleryArchivePage } from "@/components/memory-book/gallery-archive-page";

import { getBookPageState } from "../config";

export function GalleryPageComponent() {
  const { route } = getBookPageState("gallery");

  return <GalleryArchivePage page={route.page} />;
}
