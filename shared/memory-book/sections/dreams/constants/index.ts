import { Code2, GraduationCap, Plane } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDreamsPage(): BookPage {
  return {
    id: "dreams",
    label: "Your Visit",
    eyebrow: "Chapter One",
    title: "When You Came To Cambodia",
    subtitle: "January 2026 became one of the most beautiful chapters of my life because you were here with me.",
    intro:
      "When you came to visit me in Cambodia in January 2026, the world felt softer and fuller. Ordinary days stopped feeling ordinary. Every walk, every meal, every laugh, and every quiet moment beside you became a memory I still replay in my heart.",
    quote:
      "You did not just visit me. You turned time itself into something I never wanted to lose.",
    chips: ["January 2026", "Cambodia together", "Memories I replay"],
    photos: [
      {
        src: "/memories/journey-01.svg",
        alt: "Journey placeholder one for Bondeth and Salyna",
        caption: "Your World",
        hint: "A campus, study, or achievement photo would be lovely here.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/journey-02.svg",
        alt: "Journey placeholder two for Bondeth and Salyna",
        caption: "My World",
        hint: "A work desk, coding setup, or portrait from Cambodia would fit this spot well.",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/memories/journey-03.svg",
        alt: "Journey placeholder three for Bondeth and Salyna",
        caption: "Shared Motivation",
        hint: "Use a photo that feels like both of your dreams are moving together.",
        frameClassName: "aspect-[4/5]",
      },
    ],
    cards: [
      {
        icon: Code2,
        title: "Your arrival",
        body: "Seeing you in front of me instead of on a screen felt unreal in the best way. It reminded me how much light your presence brings into my life.",
      },
      {
        icon: GraduationCap,
        title: "The little days",
        body: "What I loved most was not one dramatic moment. It was the simple things: being near you, hearing you laugh beside me, and sharing time that felt easy and precious.",
      },
      {
        icon: Plane,
        title: "The month that stayed",
        body: "Even after you left, January 2026 stayed with me. It still feels warm inside my memory because it was filled with you.",
      },
    ],
    note:
      "If I could pause one season of my life and step back into it whenever I missed you too much, I would step back into the days you were here with me.",
  };
}
