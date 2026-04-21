import { StoryPage } from "@/components/memory-book/story-page";

import { getBookPageState } from "../config";

export function DatesPageComponent() {
  const { route, index, pagesLength, theme } = getBookPageState("dates");

  return (
    <StoryPage
      page={route.page}
      currentPage={index}
      pagesLength={pagesLength}
      theme={theme}
    />
  );
}
