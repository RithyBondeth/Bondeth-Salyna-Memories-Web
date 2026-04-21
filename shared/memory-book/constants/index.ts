import { getRelationshipMetrics } from "@/components/memory-book/dates";
import type { BookPage } from "@/components/memory-book/types";

import { createAdorePage } from "../sections/adore/constants";
import { createCoverPage } from "../sections/cover/constants";
import { createDatesPage } from "../sections/dates/constants";
import { createDistancePage } from "../sections/distance/constants";
import { createDreamsPage } from "../sections/dreams/constants";
import { createFuturePage } from "../sections/future/constants";
import { createGalleryPage } from "../sections/gallery/constants";
import { createLetterPage } from "../sections/letter/constants";

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
  {
    id: "gallery",
    href: "/gallery",
    page: createGalleryPage(),
  },
  {
    id: "letter",
    href: "/letter",
    page: createLetterPage(),
  },
];
