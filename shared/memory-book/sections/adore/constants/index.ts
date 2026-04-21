import { GraduationCap, Heart, Sparkles } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createAdorePage(): BookPage {
  return {
    id: "adore",
    label: "Adoration",
    eyebrow: "Chapter Four",
    title: "What I Deeply Admire About You",
    subtitle: "I love your beauty, but I also love your mind, your discipline, and the way you shine.",
    intro:
      "Salyna, one of the reasons I love you so much is because you are not only sweet, you are remarkable. You are smart. You are an outstanding student. You work hard for your future. You carry ambition and grace together, and every time I think about the woman you are becoming, I feel proud that I get to love you.",
    quote:
      "You are beautiful to me because your heart and your mind both shine.",
    chips: ["Smart", "Outstanding student", "Soft and strong", "My favorite person"],
    photos: [
      {
        src: "/memories/adore-01.svg",
        alt: "Adoration placeholder one for Bondeth and Salyna",
        caption: "What I See",
        hint: "This is a good place for one of your most beautiful portraits of Salyna.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/adore-02.svg",
        alt: "Adoration placeholder two for Bondeth and Salyna",
        caption: "What I Treasure",
        hint: "Use another image that feels graceful, bright, and deeply personal.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
    ],
    cards: [
      {
        icon: GraduationCap,
        title: "Your mind",
        body: "You are intelligent in a way that makes me admire you even more. I love listening to your thoughts because there is depth, focus, and brightness in you.",
      },
      {
        icon: Heart,
        title: "Your heart",
        body: "No matter how talented and capable you are, you still keep a softness that feels gentle, warm, and deeply human. That softness is one of the reasons I feel safe loving you.",
      },
      {
        icon: Sparkles,
        title: "Your discipline",
        body: "You are building something serious with your studies, and I respect that so much. Your effort makes me proud because I know how much you want to become something great.",
      },
    ],
    note:
      "The more I know you, the more I respect you. And the more I respect you, the more deeply I fall in love with you.",
  };
}
