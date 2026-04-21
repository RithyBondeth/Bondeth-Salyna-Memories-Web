import { StoryPage } from "@/components/memory-book/story-page";

import { getBookPageState } from "../config";

export function FuturePageComponent() {
  const { route, index, pagesLength, theme } = getBookPageState("future");

  return (
    <StoryPage
      page={route.page}
      currentPage={index}
      pagesLength={pagesLength}
      theme={theme}
    />
  );
}
