import { CalendarDays, Heart } from "lucide-react";

import {
  BONDETH_BIRTHDAY,
  FIRST_ANNIVERSARY,
  formatDate,
  RELATIONSHIP_START,
  SALYNA_BIRTHDAY,
} from "@/components/memory-book/dates";
import type { BookPage, RelationshipMetrics } from "@/components/memory-book/types";

export function createDatesPage(metrics: RelationshipMetrics): BookPage {
  const { daysTogether, monthsTogether } = metrics;

  return {
    id: "dates",
    label: "Timeline",
    eyebrow: "Chapter Three",
    title: "The Dates I Keep Safe",
    subtitle: "Some dates are no longer just dates. They are pieces of us.",
    intro:
      "There are moments in our story that I carry carefully because they changed me. September 1, 2025 was the day we started dating. January 2026 was the month you came to Cambodia. February 2026 was the month I had to let you fly back to Australia. And 2027 is the year I want to close the distance and come to you.",
    quote:
      "Love gives a few dates enough meaning to last a lifetime.",
    chips: [
      `Bondeth: ${formatDate(BONDETH_BIRTHDAY)}`,
      `Salyna: ${formatDate(SALYNA_BIRTHDAY)}`,
      `Together since ${formatDate(RELATIONSHIP_START)}`,
    ],
    photos: [
      {
        src: "/memories/timeline-01.svg",
        alt: "Timeline placeholder one for Bondeth and Salyna",
        caption: "Important Day",
        hint: "Place a special photo from around the day you started dating or another meaningful memory here.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/timeline-02.svg",
        alt: "Timeline placeholder two for Bondeth and Salyna",
        caption: "Memory Marker",
        hint: "A celebratory image, gift, or handwritten note photo would look great in this panel.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
    ],
    cards: [
      {
        icon: CalendarDays,
        title: formatDate(RELATIONSHIP_START),
        body: "The day you became my girlfriend, and the day my heart started counting time differently.",
      },
      {
        icon: CalendarDays,
        title: "January to February 2026",
        body: "The season when I got to make real memories with you in Cambodia and understand even more how much I love your presence.",
      },
      {
        icon: Heart,
        title: formatDate(FIRST_ANNIVERSARY),
        body: "The first anniversary I am already looking forward to, because it will mark one full year of loving you as my girl.",
      },
      {
        icon: Heart,
        title: "Australia in 2027",
        body: "Not just a dream I casually say, but a promise I am preparing myself to keep so I can be closer to you.",
      },
    ],
    note:
      `${daysTogether} days and ${monthsTogether} months in, I still feel grateful that our story began on ${formatDate(RELATIONSHIP_START)}. One day I want us to look back at these dates and smile because we survived every mile between them.`,
  };
}
