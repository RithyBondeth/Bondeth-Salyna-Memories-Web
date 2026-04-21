import { getRelationshipMetrics } from "@/components/memory-book/dates";
import type { BookPage } from "@/components/memory-book/types";

import { createAdorePage } from "../sections/adore/constants";
import { createCoverPage } from "../sections/cover/constants";
import { createDatesPage } from "../sections/dates/constants";
import { createDistancePage } from "../sections/distance/constants";
import { createDreamsPage } from "../sections/dreams/constants";
import { createFuturePage } from "../sections/future/constants";
import { createGalleryPage } from "../sections/gallery/constants";

export type BookRouteEntry = {
  id: BookPage["id"];
  href: string;
  page: BookPage;
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
