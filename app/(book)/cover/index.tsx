import { StoryPage } from "@/components/memory-book/story-page";

import { getBookPageState } from "../config";

export function CoverPageComponent() {
  const { route, index, pagesLength, theme } = getBookPageState("cover");

  return (
    <StoryPage
      page={route.page}
      currentPage={index}
      pagesLength={pagesLength}
      theme={theme}
    />
  );
}
