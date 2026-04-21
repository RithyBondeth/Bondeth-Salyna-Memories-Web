import { StoryPage } from "@/components/memory-book/story-page";

import { getBookPageState } from "../config";

export function DreamsPageComponent() {
  const { route, index, pagesLength, theme } = getBookPageState("dreams");

  return (
    <StoryPage
      page={route.page}
      currentPage={index}
      pagesLength={pagesLength}
      theme={theme}
    />
  );
}
