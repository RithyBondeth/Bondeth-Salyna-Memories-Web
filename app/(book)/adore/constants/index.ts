import { GraduationCap, Heart, Sparkles } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createAdorePage(): BookPage {
  return {
    id: "adore",
    label: "Adoration",
    eyebrow: "Chapter Five",
    title: "The Things I Love About You",
    subtitle: "Not just the way you are loved, but the way you are built.",
    intro:
      "I love more than your smile or your sweetness. I love the structure underneath: the mind, the discipline, the courage, the grace. You are beautiful in ways that keep unfolding.",
    quote:
      "You are the kind of person who makes admiration feel as natural as breathing.",
    chips: ["Brilliant", "Tender", "Disciplined", "Radiant"],
    photos: [
      {
        src: "/memories/adore-01.svg",
        alt: "Adoration placeholder one for Bondeth and Salyna",
        caption: "What I See",
        hint: "This is a good place for one of your most beautiful portraits of Salyna.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/adore-02.svg",
        alt: "Adoration placeholder two for Bondeth and Salyna",
        caption: "What I Treasure",
        hint: "Use another image that feels graceful, bright, and deeply personal.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
    ],
    cards: [
      {
        icon: GraduationCap,
        title: "Your ambition",
        body: "The way you commit to your future is deeply attractive. You make hard things look meaningful.",
      },
      {
        icon: Heart,
        title: "Your softness",
        body: "There is warmth in you that makes distance feel less sharp. You know how to comfort without losing your own strength.",
      },
      {
        icon: Sparkles,
        title: "Your presence",
        body: "You leave a brightness behind in conversations, in memories, and in the quiet after I think about you.",
      },
    ],
    note:
      "You are not simply someone I miss. You are someone I deeply respect, which makes loving you feel even more beautiful.",
  };
}
