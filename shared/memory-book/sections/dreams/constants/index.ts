import { Heart, Home } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createDreamsPage(): BookPage {
  return {
    id: "dreams",
    label: "Your Visit",
    eyebrow: "Chapter One",
    title: "The Month You Were Here",
    subtitle: "January 2026 — the first time I did not have to imagine you beside me.",
    intro:
      "For weeks before your flight, I kept picturing the moment I would actually see you at the airport — not on a screen, not in a photo, you. And then it happened. You walked toward me and my whole chest went quiet. For the rest of that month, you were here in Cambodia, in my city, in my ordinary days, and every one of those days rearranged itself around you.",
    quote:
      "You did not just visit me. You rewrote the shape of what I call a normal day.",
    photos: [
      {
        src: "/memories/journey-01.svg",
        alt: "Visit placeholder \u2014 Salyna in Cambodia",
        caption: "When you landed",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/journey-02.svg",
        alt: "Visit placeholder \u2014 a quiet moment together",
        caption: "Ordinary hours",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/memories/journey-03.svg",
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
        body: "Closer than any screen had ever let me see. Up close, you laugh with your whole face. Up close, you go quiet before you say the important things. That version of you is the one I will spend the rest of my life trying to remember in detail.",
      },
    ],
    note:
      "If I could choose one season of my life to keep, I would keep that one. The way you stood next to me made the world feel finally held.",
  };
}
