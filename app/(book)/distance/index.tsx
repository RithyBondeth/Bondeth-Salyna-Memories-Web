import { StoryPage } from "@/components/memory-book/story-page";

import { getBookPageState } from "../config";

export function DistancePageComponent() {
  const { route, index, pagesLength, theme } = getBookPageState("distance");

  return (
    <StoryPage
      page={route.page}
      currentPage={index}
      pagesLength={pagesLength}
      theme={theme}
    />
  );
}
