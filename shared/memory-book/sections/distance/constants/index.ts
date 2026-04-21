import { Heart, Sparkles, Star } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDistancePage(): BookPage {
  return {
    id: "distance",
    label: "Distance",
    eyebrow: "Chapter Three",
    title: "What Distance Cannot Take",
    subtitle: "The miles can delay hugs, but they cannot cancel belonging.",
    intro:
      "Long distance has a strange way of refining love. It turns ordinary things into treasures: a call, a goodnight, a photo, a soft sentence at the right moment, a promise to stay steady until the next hello.",
    quote:
      "Love becomes very honest when it learns how to wait without growing cold.",
    chips: ["Late-night calls", "Patience", "Steadiness"],
    photos: [
      {
        src: "/memories/distance-01.svg",
        alt: "Distance placeholder one for Bondeth and Salyna",
        caption: "Call Night",
        hint: "A screenshot from a video call or chat moment would make this chapter feel alive.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/9]",
      },
      {
        src: "/memories/distance-02.svg",
        alt: "Distance placeholder two for Bondeth and Salyna",
        caption: "Quiet Proof",
        hint: "Use a simple photo that reminds you how the little things hold the relationship together.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/9]",
      },
    ],
    cards: [
      {
        icon: Sparkles,
        title: "The little rituals",
        body: "Messages, check-ins, and quiet reassurances become their own kind of shelter when the day feels long.",
      },
      {
        icon: Heart,
        title: "The emotional truth",
        body: "Even from far away, you still feel familiar to me, like someone my heart already knows how to return to.",
      },
      {
        icon: Star,
        title: "The deeper lesson",
        body: "Distance keeps teaching me that real love is not only intensity. It is consistency, gentleness, and staying present.",
      },
    ],
    note:
      "We are learning the kind of love that survives quiet nights, busy days, and every hour in between.",
  };
}
