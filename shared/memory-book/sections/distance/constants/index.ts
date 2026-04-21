import { Moon, Phone } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDistancePage(): BookPage {
  return {
    id: "distance",
    label: "After Goodbye",
    eyebrow: "Chapter Two",
    title: "The Morning You Flew Back",
    subtitle:
      "February 2026 \u2014 the airport took you back, and my life quietly reshaped itself around missing you.",
    intro:
      "I had known the goodbye was coming for weeks, and I still was not ready for the shape of the room after you left it. By the next night you were in Australia again, and the apartment felt like a song with its loudest note suddenly missing. Distance did not make me love you less. It made me feel exactly how much I love you \u2014 which is everything.",
    quote:
      "Loving you across an ocean is heavy. Not loving you would be impossible.",
    photos: [
      {
        src: "/memories/distance-01.svg",
        alt: "Distance placeholder \u2014 a late call",
        caption: "Late calls",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/9]",
      },
      {
        src: "/memories/distance-02.svg",
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
