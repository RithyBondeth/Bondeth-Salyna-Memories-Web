import { BookOpen, Heart, Sparkles } from "lucide-react";

import { formatDate, RELATIONSHIP_START } from "@/components/memory-book/dates";
import type { BookPage } from "@/components/memory-book/types";

export function createCoverPage(): BookPage {
  return {
    id: "cover",
    label: "Letter",
    eyebrow: "For Salyna, from Bondeth",
    title: "For The Girl I Will Always Choose",
    subtitle: "A digital love book from Bondeth in Cambodia to Salyna in Australia.",
    intro:
      "I know I am a software engineer and I usually build with logic, but loving you makes me want to build softer things too. This little book is my way of gathering what I feel for you into one place, so whenever you open it, you can see how deeply you are loved.",
    quote:
      "No distance, no airport, and no clock has ever changed the fact that my heart is yours.",
    chips: [
      "Cambodia to Australia",
      `Started dating: ${formatDate(RELATIONSHIP_START)}`,
      "Made with all my love",
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
        title: "Why I made this",
        body: "I wanted more than messages and screenshots. I wanted you to have one place that feels like my heart speaking directly to yours.",
      },
      {
        icon: Sparkles,
        title: "What you mean to me",
        body: "You are not a small part of my life. You are someone I miss, admire, protect in prayer, and imagine in my future every single day.",
      },
      {
        icon: BookOpen,
        title: "What this book holds",
        body: "It holds our first date, your visit to Cambodia in January 2026, the ache of February 2026, and the promise I want to keep in 2027.",
      },
    ],
    note:
      "Salyna, I wanted this to feel like more than a website. I wanted it to feel like me sitting beside you, reminding you that you are loved, missed, admired, and chosen every single day.",
  };
}
