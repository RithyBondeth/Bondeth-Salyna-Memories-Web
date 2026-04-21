import { PAGE_THEMES } from "@/components/memory-book/constants";
import { getRelationshipMetrics } from "@/components/memory-book/dates";
import type { BookPage, PageTheme } from "@/components/memory-book/types";

import { createAdorePage } from "./adore/constants";
import { createCoverPage } from "./cover/constants";
import { createDatesPage } from "./dates/constants";
import { createDistancePage } from "./distance/constants";
import { createDreamsPage } from "./dreams/constants";
import { createFuturePage } from "./future/constants";
import { createGalleryPage } from "./gallery/constants";

export type BookRouteEntry = {
  id: BookPage["id"];
  href: string;
  page: BookPage;
};

export type BookRouteState = {
  route: BookRouteEntry;
  index: number;
  pagesLength: number;
  theme: PageTheme;
  previousRoute: BookRouteEntry | null;
  nextRoute: BookRouteEntry | null;
};

const relationshipMetrics = getRelationshipMetrics();

export const BOOK_ROUTES: BookRouteEntry[] = [
  {
    id: "cover",
    href: "/cover",
    page: createCoverPage(),
  },
  {
    id: "gallery",
    href: "/gallery",
    page: createGalleryPage(),
  },
  {
    id: "dreams",
    href: "/dreams",
    page: createDreamsPage(),
  },
  {
    id: "distance",
    href: "/distance",
    page: createDistancePage(),
  },
  {
    id: "dates",
    href: "/dates",
    page: createDatesPage(relationshipMetrics),
  },
  {
    id: "adore",
    href: "/adore",
    page: createAdorePage(),
  },
  {
    id: "future",
    href: "/future",
    page: createFuturePage(),
  },
];

export const TOTAL_PHOTO_SLOTS = BOOK_ROUTES.reduce((total, route) => {
  const storyPhotos = route.page.photos.length;
  const categorizedPhotos =
    route.page.galleryCategories?.reduce(
      (sum, category) => sum + category.photos.length,
      0
    ) ?? 0;

  return total + storyPhotos + categorizedPhotos;
}, 0);

export function getBookPageState(id: BookPage["id"]): BookRouteState {
  const index = BOOK_ROUTES.findIndex((route) => route.id === id);

  if (index === -1) {
    throw new Error(`Unknown memory book page id: ${id}`);
  }

  return {
    route: BOOK_ROUTES[index],
    index,
    pagesLength: BOOK_ROUTES.length,
    theme: PAGE_THEMES[index % PAGE_THEMES.length],
    previousRoute: index > 0 ? BOOK_ROUTES[index - 1] : null,
    nextRoute: index < BOOK_ROUTES.length - 1 ? BOOK_ROUTES[index + 1] : null,
  };
}

export function getBookRouteStateByPathname(pathname: string | null): BookRouteState {
  const normalizedPath =
    pathname && pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname ?? "/cover";

  const matchedRoute =
    BOOK_ROUTES.find((route) => route.href === normalizedPath) ?? BOOK_ROUTES[0];

  return getBookPageState(matchedRoute.id);
}
