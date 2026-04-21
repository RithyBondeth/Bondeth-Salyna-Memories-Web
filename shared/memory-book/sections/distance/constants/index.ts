import { Heart, Sparkles, Star } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDistancePage(): BookPage {
  return {
    id: "distance",
    label: "After Goodbye",
    eyebrow: "Chapter Two",
    title: "After February 2026",
    subtitle: "When you went back to Australia in February 2026, the distance returned, but so did my certainty.",
    intro:
      "The goodbye hurt because being with you had already started to feel natural to me. But even after you flew back to Australia in February 2026, my love did not become smaller. It became clearer. Missing you only showed me how serious my heart is about you.",
    quote:
      "Loving you from far away is hard, but not loving you would be impossible.",
    chips: ["February 2026", "Calls and messages", "Still choosing us"],
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
        title: "The ache",
        body: "I will never pretend that distance is easy. There are days when missing you sits heavily in my chest because I know how good it feels to have you near.",
      },
      {
        icon: Heart,
        title: "The routine",
        body: "Calls, messages, little updates, and all the quiet ways we stay connected became the thread that kept my days tied to yours after you went back.",
      },
      {
        icon: Star,
        title: "The truth",
        body: "Even when I miss you the most, I never question what you mean to me. My heart stays sure about you.",
      },
    ],
    note:
      "Even on the nights I miss you the most, I never question us. I only wish I could hold you sooner.",
  };
}
