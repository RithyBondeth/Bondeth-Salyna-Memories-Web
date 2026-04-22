import type { BookPage } from "@/components/memory-book/types";

import { createAdorePage } from "../sections/adore/constants";
import { createCoverPage } from "../sections/cover/constants";
import { createDistancePage } from "../sections/distance/constants";
import { createDreamsPage } from "../sections/dreams/constants";
import { createGalleryPage } from "../sections/gallery/constants";
import { createIntroductionPage } from "../sections/introduction/constants";
import { createLetterPage } from "../sections/letter/constants";
import { createTogetherPage } from "../sections/together/constants";

export type BookRouteEntry = {
  id: BookPage["id"];
  href: string;
  page: BookPage;
};

export const BOOK_ROUTES: BookRouteEntry[] = [
  {
    id: "cover",
    href: "/cover",
    page: createCoverPage(),
  },
  {
    id: "introduction",
    href: "/introduction",
    page: createIntroductionPage(),
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
    id: "together",
    href: "/together",
    page: createTogetherPage(),
  },
  {
    id: "adore",
    href: "/adore",
    page: createAdorePage(),
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
