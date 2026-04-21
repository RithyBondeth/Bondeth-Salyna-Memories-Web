import { BookOpen, Heart } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createAdorePage(): BookPage {
  return {
    id: "adore",
    label: "Adoration",
    eyebrow: "Chapter Four",
    title: "Things I Notice About You",
    subtitle: "Written down so you know I see them \u2014 not just once, but always.",
    intro:
      "Loving you started with the way you look, but it settled somewhere much deeper. I love how your mind moves. I love the weight your doctorate puts on your shoulders and the grace you carry it with. You are an outstanding student and the softest person I have ever known at the same time, and somehow both of those things made me more sure.",
    quote:
      "You are beautiful because your mind and your heart refuse to separate.",
    photos: [
      {
        src: "/assets/adore/adore-01.png",
        alt: "Adoration placeholder \u2014 a portrait",
        caption: "The way you look",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/assets/adore/adore-02.png",
        alt: "Adoration placeholder \u2014 a studying moment",
        caption: "The way you work",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
    ],
    cards: [
      {
        icon: BookOpen,
        title: "Your mind",
        body: "When you talk about your studies, your whole face changes. I could listen to you explain something forever. You are one of the sharpest people I know, and I get to love you, which still feels unfair to everyone else.",
      },
      {
        icon: Heart,
        title: "Your softness",
        body: "For someone this driven, you are somehow still the gentlest person in every room you walk into. You carry kindness like it does not cost you anything. Being loved by you has made me kinder, too.",
      },
    ],
    note:
      "The more I know you, the more I respect you. The more I respect you, the harder I love you. It only keeps going in one direction.",
  };
}
