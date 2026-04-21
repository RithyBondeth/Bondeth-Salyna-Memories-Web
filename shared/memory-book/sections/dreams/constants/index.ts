import { Heart, Home } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDreamsPage(): BookPage {
  return {
    id: "dreams",
    label: "In Person",
    eyebrow: "Chapter One",
    title: "The First Time I Saw You For Real",
    subtitle: "January 2026 — the first time I did not have to imagine you beside me.",
    intro:
      "Before we met in person, I kept picturing the first second I would finally see you not on a screen, not in a photo, but standing right in front of me. And then it happened. Everything in me went quiet. From that moment on, even the smallest time with you felt bigger than whole months without you.",
    quote:
      "You did not just stand beside me. You rewrote the shape of what I call a normal day.",
    photos: [
      {
        src: "/assets/dreams/dreams-01.png",
        alt: "Visit placeholder \u2014 Salyna in Cambodia",
        caption: "When I finally saw you",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/assets/dreams/dreams-02.png",
        alt: "Visit placeholder \u2014 a quiet moment together",
        caption: "Ordinary hours",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/assets/dreams/dreams-03.png",
        alt: "Visit placeholder \u2014 shared motivation",
        caption: "Side by side",
        frameClassName: "aspect-[4/5]",
      },
    ],
    cards: [
      {
        icon: Home,
        title: "The small things that stayed",
        body: "Not the big outings. The quiet ones. You laughing at something across the table. Your hand finding mine in the middle of a sentence. The way the apartment sounded different with you inside it \u2014 fuller, softer, like it had been waiting for you too.",
      },
      {
        icon: Heart,
        title: "How I saw you",
        body: "Closer than any screen had ever let me see. Up close, you laugh with your whole face. Up close, you go quiet before you say the important things. That version of you is the one I keep replaying in detail.",
      },
    ],
    note:
      "If I could choose one stretch of time to keep glowing in my memory, I would keep that one. The way you stood next to me made the world feel finally held.",
  };
}
