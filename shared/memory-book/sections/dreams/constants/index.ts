import { Code2, GraduationCap, Plane } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDreamsPage(): BookPage {
  return {
    id: "dreams",
    label: "Two Dreams",
    eyebrow: "Chapter Two",
    title: "Two Dreams, One Heart",
    subtitle: "You in Australia. Me in Cambodia. Both of us still choosing the same love.",
    intro:
      "You are pursuing your doctorate with courage and brilliance in Australia, while I’m in Cambodia building software and building a future I still hope will include us standing in the same room, finally without the miles.",
    quote:
      "I admire how gently you carry a dream that big, and how beautifully you still make room for us.",
    chips: ["Software engineer", "Doctorate journey", "Ambition with tenderness"],
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
        title: "My chapter",
        body: "I spend my days solving problems, writing code, and learning how to build stable things, including the way I love you.",
      },
      {
        icon: GraduationCap,
        title: "Your chapter",
        body: "You are chasing a doctorate, and every step you take makes me even more proud to know the kind of woman you are.",
      },
      {
        icon: Plane,
        title: "Our shared chapter",
        body: "Even from different countries, we keep meeting each other with patience, effort, and the kind of love that does not give up easily.",
      },
    ],
    note:
      "What we are building is not small. It is distance-tested, future-facing, and deeply sincere.",
  };
}
