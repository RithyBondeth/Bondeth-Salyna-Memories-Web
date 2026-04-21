import { CalendarDays, Heart, Plane } from "lucide-react";

import {
  FIRST_ANNIVERSARY,
  formatDate,
  RELATIONSHIP_START,
} from "@/components/memory-book/dates";
import type { BookPage, RelationshipMetrics } from "@/components/memory-book/types";

export function createDatesPage(metrics: RelationshipMetrics): BookPage {
  const { daysTogether } = metrics;

  return {
    id: "dates",
    label: "Timeline",
    eyebrow: "Chapter Three",
    title: "The Dates I Keep Safe",
    subtitle: "Some days stopped being days and became parts of me.",
    intro:
      "There are only a few days in my life that I keep polished in my memory. The day we started dating. The weeks you were here in Cambodia. The morning I had to let you fly home. And the year I am already walking toward \u2014 2027 \u2014 when I close the distance for good.",
    quote:
      "Love takes a handful of calendar days and turns them into monuments.",
    photos: [
      {
        src: "/memories/timeline-01.svg",
        alt: "Timeline placeholder \u2014 a meaningful day",
        caption: "Our first day",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/timeline-02.svg",
        alt: "Timeline placeholder \u2014 a small celebration",
        caption: "A small celebration",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
    ],
    cards: [
      {
        icon: CalendarDays,
        title: formatDate(RELATIONSHIP_START),
        body: "The day you said yes. The day my ordinary life quietly split into before you and after you. I remember how my hands felt that day \u2014 like they finally had somewhere to belong.",
      },
      {
        icon: Heart,
        title: "January to February 2026",
        body: "A month I will replay forever, and a morning I will not romanticize \u2014 it hurt, and I remember every minute of it. Both of them are yours.",
      },
      {
        icon: CalendarDays,
        title: formatDate(FIRST_ANNIVERSARY),
        body: "One full year of loving you out loud. I am already thinking about how to make the day feel like you \u2014 quiet, careful, and warmer than you expect.",
      },
      {
        icon: Plane,
        title: "Australia, 2027",
        body: "Not a dream I mention casually. A year I am saving toward, planning around, and quietly organizing my life in the direction of.",
      },
    ],
    note:
      `${daysTogether} days in, every one of them made me surer. One day I want us to look back at these dates and know we loved each other through every mile between them.`,
  };
}
