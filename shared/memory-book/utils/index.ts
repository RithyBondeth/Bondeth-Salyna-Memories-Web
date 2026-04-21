import { PAGE_THEMES } from "@/components/memory-book/constants";
import type { BookPage, PageTheme } from "@/components/memory-book/types";

import { BOOK_ROUTES, type BookRouteEntry } from "../constants";

export type BookRouteState = {
  route: BookRouteEntry;
  index: number;
  pagesLength: number;
  theme: PageTheme;
  previousRoute: BookRouteEntry | null;
  nextRoute: BookRouteEntry | null;
};

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
