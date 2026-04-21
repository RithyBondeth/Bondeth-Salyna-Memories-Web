import { BookOpen, Heart, Sparkles } from "lucide-react";

import { formatDate, RELATIONSHIP_START } from "@/components/memory-book/dates";
import type { BookPage } from "@/components/memory-book/types";

export function createCoverPage(): BookPage {
  return {
    id: "cover",
    label: "Cover",
    eyebrow: "For Salyna, from Bondeth",
    title: "Our Long-Distance Love Story",
    subtitle: "A pink digital memory book made between Cambodia and Australia.",
    intro:
      "I wanted to build something softer than code and warmer than a message bubble, so this little book became my way of holding your hand from far away.",
    quote:
      "Distance can stretch the map, but it still cannot measure what I feel for you.",
    chips: [
      "Cambodia to Australia",
      `Started dating: ${formatDate(RELATIONSHIP_START)}`,
      "Version one of many",
    ],
    photos: [
      {
        src: "/memories/cover-01.svg",
        alt: "Cover placeholder one for Bondeth and Salyna's digital memory book",
        caption: "Opening Cover",
        hint: "Swap this for a favorite couple photo to make the first page instantly personal.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/cover-02.svg",
        alt: "Cover placeholder two for Bondeth and Salyna's digital memory book",
        caption: "Soft Portrait",
        hint: "A warm smiling picture would fit beautifully here.",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/memories/cover-03.svg",
        alt: "Cover placeholder three for Bondeth and Salyna's digital memory book",
        caption: "Favorite Snapshot",
        hint: "Use a candid memory or screenshot from a call that means a lot to both of you.",
        frameClassName: "aspect-[4/5]",
      },
    ],
    cards: [
      {
        icon: Heart,
        title: "Made with intention",
        body: "Every page is a quiet reminder that our relationship is real, alive, and worth celebrating.",
      },
      {
        icon: Sparkles,
        title: "Made to feel close",
        body: "When the distance feels heavy, I want this book to feel like a gentle place where love still wins.",
      },
      {
        icon: BookOpen,
        title: "Made to keep growing",
        body: "This is only the first edition. Our story still has so many chapters waiting for us.",
      },
    ],
    note:
      "Turn the page whenever you want proof that being apart has never made us any less true.",
  };
}
