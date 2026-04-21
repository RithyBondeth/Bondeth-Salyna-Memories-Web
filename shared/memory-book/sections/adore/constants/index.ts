import { BookOpen, Heart } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createAdorePage(): BookPage {
  return {
    id: "adore",
    label: "Adoration",
    eyebrow: "Chapter Four",
    title: "Things I Notice About You",
    subtitle:
      "Written down so you know I see them \u2014 not just once, but always.",
    intro:
      "Loving you started with the way you look, but it settled somewhere much deeper. I love your gentleness. I love the calm you bring into my day. I love the way your presence can make even an ordinary moment feel softer.",
    quote:
      "The more I know you, the more beautiful you become to me.",
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
        title: "Your presence",
        body: "When you are there, everything feels softer. A room changes. A hard day loosens. Even silence feels easier to carry when it belongs to both of us.",
      },
      {
        icon: Heart,
        title: "Your heart",
        body: "You have a gentleness that never feels weak. It feels rare. Being loved by you has made me want to be better, softer, and more honest in the way I care for you.",
      },
    ],
    note:
      "The more I know you, the more I admire the quiet beauty of who you are. Loving you keeps becoming easier and deeper at the same time.",
  };
}
