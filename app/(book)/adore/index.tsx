import { StoryPage } from "@/components/memory-book/story-page";

import { getBookPageState } from "../config";

export function AdorePageComponent() {
  const { route, index, pagesLength, theme } = getBookPageState("adore");

  return (
    <StoryPage
      page={route.page}
      currentPage={index}
      pagesLength={pagesLength}
      theme={theme}
    />
  );
}
