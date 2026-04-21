import { BookOpen, Heart } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createCoverPage(): BookPage {
  return {
    id: "cover",
    label: "Letter",
    eyebrow: "For Salyna, from Bondeth",
    title: "For The Girl I Will Always Choose",
    subtitle: "Written at night in Cambodia, meant to be opened slowly in Australia.",
    intro:
      "Salyna, I know I spend my days writing code, but none of it has ever felt as real as writing this. Messages scroll away and calls eventually end — I wanted you to have somewhere permanent to find me. Open this whenever you need to be reminded: I meant every line.",
    quote:
      "No flight, no time zone, no silence has ever loosened my grip on you.",
    photos: [
      {
        src: "/memories/cover-01.svg",
        alt: "Cover placeholder for Bondeth and Salyna's digital memory book",
        caption: "Us",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/cover-02.svg",
        alt: "Cover portrait placeholder",
        caption: "Your smile",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/memories/cover-03.svg",
        alt: "Cover candid placeholder",
        caption: "A quiet moment",
        frameClassName: "aspect-[4/5]",
      },
    ],
    cards: [
      {
        icon: Heart,
        title: "Why this book exists",
        body: "Because I do not want loving you to live only in chats that disappear up the screen. I wanted you to have one place where my voice stays still, where you can come back and feel how serious I am about you.",
      },
      {
        icon: BookOpen,
        title: "What you'll find inside",
        body: "Our first day — September 1, 2025. The month you came to Cambodia in January 2026. The morning you flew back in February. The things I notice about you, and the year I am already walking toward: 2027.",
      },
    ],
    note:
      "If you're reading this, you've just opened something I have been carrying in my chest for a long time. Take your time with it. I'm right here.",
  };
}
