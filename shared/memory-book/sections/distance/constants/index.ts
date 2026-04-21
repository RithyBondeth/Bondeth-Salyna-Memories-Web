import { Moon, Phone } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDistancePage(): BookPage {
  return {
    id: "distance",
    label: "After Goodbye",
    eyebrow: "Chapter Two",
    title: "After We Had To Be Apart Again",
    subtitle:
      "After January 2026, being apart again felt heavier because now I knew exactly what I was missing.",
    intro:
      "I knew the goodbye would hurt, but I still was not ready for the shape of the room after you left it. Once I had finally seen you in person, distance stopped feeling abstract. It became the ache of knowing exactly how your hand feels in mine and not being able to reach for it whenever I want. Loving you did not get smaller after that. It got clearer.",
    quote:
      "Loving you from far away is heavy. Not loving you would be impossible.",
    photos: [
      {
        src: "/assets/distance/distance-01.png",
        alt: "Distance placeholder \u2014 a late call",
        caption: "Late calls",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/9]",
      },
      {
        src: "/assets/distance/distance-02.png",
        alt: "Distance placeholder \u2014 the quiet after",
        caption: "The quiet after",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/9]",
      },
    ],
    cards: [
      {
        icon: Moon,
        title: "The quiet after",
        body: "The hardest part was not missing you all at once. It was missing you in pieces. A joke I almost turned to tell you. A meal that felt smaller. An evening that suddenly had too many empty hours in it.",
      },
      {
        icon: Phone,
        title: "What almost replaces you",
        body: "Your voice on late calls. Your small messages before you sleep. The photos I open when I need proof that you are real, that you are mine, and that these months apart are only the middle of the story \u2014 not the ending.",
      },
    ],
    note:
      "On the hardest nights, I never wonder about us. I only wonder how soon I can hold you again.",
  };
}
