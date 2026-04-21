import { CalendarDays, Gift, Heart, MessageCircle } from "lucide-react";

import type { BookPage, RelationshipMetrics } from "@/components/memory-book/types";

export function createDatesPage(metrics: RelationshipMetrics): BookPage {
  const { daysTogether } = metrics;

  return {
    id: "dates",
    label: "Timeline",
    eyebrow: "Chapter Three",
    title: "The Dates That Found Us",
    subtitle: "The years and months that kept leading me back to you.",
    intro:
      "2022 gave me my first love. June 2025 gave us another chance. January 2026 gave me the first real moment I could stand beside you and place a promise ring in your hand. These are the dates I keep closest.",
    quote:
      "Some dates matter because they happened. Ours matter because they changed who I became after them.",
    photos: [
      {
        src: "/assets/dates/dates-01.png",
        alt: "Timeline placeholder \u2014 a meaningful day",
        caption: "2022 \u2014 our first beginning",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/assets/dates/dates-02.png",
        alt: "Timeline placeholder \u2014 a small celebration",
        caption: "January 2026 \u2014 the promise ring",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
    ],
    cards: [
      {
        icon: CalendarDays,
        title: "2022",
        body: "You were in Siem Reap and I was in Phnom Penh. That was the first time my heart learned your name, and the first time love felt real enough to scare me.",
      },
      {
        icon: Heart,
        title: "June 2025",
        body: "Time passed, we found each other again, and this time we made it. The feeling returned, but steadier, warmer, and more certain than before.",
      },
      {
        icon: MessageCircle,
        title: "Every day since",
        body: "We talked every single day. One message became another, then another, until loving you started sounding like the most natural part of my life.",
      },
      {
        icon: Gift,
        title: "January 2026",
        body: "Our first meeting in person. The promise ring. The moment the story I had carried for years finally touched real life.",
      },
    ],
    note:
      `${daysTogether} days from the beginning of June 2025 to now, and I still feel lucky that love gave us another chance.`,
  };
}
