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
  const { bondethAge, salynaAge, daysTogether, monthsTogether } = metrics;

  return {
    id: "dates",
    label: "Milestones",
    eyebrow: "Chapter Four",
    title: "Our Dates, Written In Pink",
    subtitle: "The calendar became romantic the moment it started holding us.",
    intro:
      "Every love story needs a few anchor points. These dates feel like pressed flowers to me now, saved carefully because they carry parts of who we are.",
    quote:
      "Even time feels softer when I measure it with your name beside mine.",
    chips: [
      `${daysTogether} days of us`,
      `${monthsTogether} months together`,
      "A timeline worth keeping",
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
        title: `Bondeth, age ${bondethAge}`,
        body: `You were born on ${formatDate(BONDETH_BIRTHDAY)} and grew into someone who loves with both heart and responsibility.`,
      },
      {
        icon: CalendarDays,
        title: `Salyna, age ${salynaAge}`,
        body: `You were born on ${formatDate(SALYNA_BIRTHDAY)} and somehow carry both softness and fierce ambition so naturally.`,
      },
      {
        icon: Heart,
        title: "Our first anniversary",
        body: `We started dating on ${formatDate(RELATIONSHIP_START)}, which means our first anniversary will be on ${formatDate(FIRST_ANNIVERSARY)}.`,
      },
    ],
    note:
      "This timeline now follows your real starting date, because the beginning of your story deserves to be told correctly.",
  };
}
