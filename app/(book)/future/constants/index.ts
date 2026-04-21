import { Heart, MapPin, Plane } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createFuturePage(): BookPage {
  return {
    id: "future",
    label: "Future",
    eyebrow: "Chapter Six",
    title: "The Future Chapter",
    subtitle: "One day the distance will only be part of our origin story.",
    intro:
      "I keep imagining the ordinary things we have not had enough of yet: longer walks, easier laughter, shared meals, small routines, no countdown to the next goodbye. I want the everyday with you, not only the dramatic parts.",
    quote:
      "Until we close the distance, I will keep loving you in patient, practical, and beautiful ways.",
    chips: ["Future reunions", "More anniversaries", "A life with room for both dreams"],
    photos: [
      {
        src: "/memories/future-01.svg",
        alt: "Future placeholder one for Bondeth and Salyna",
        caption: "The Reunion",
        hint: "An airport or together-again picture will feel powerful in this spot later.",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/future-02.svg",
        alt: "Future placeholder two for Bondeth and Salyna",
        caption: "Future Home",
        hint: "You can replace this with a dream-life photo, a city view, or a place meaningful to both of you.",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/memories/future-03.svg",
        alt: "Future placeholder three for Bondeth and Salyna",
        caption: "More Chapters",
        hint: "Save this slot for a future anniversary, date, or memory you have not made yet.",
        frameClassName: "aspect-[4/5]",
      },
    ],
    cards: [
      {
        icon: Plane,
        title: "The reunion I imagine",
        body: "An airport, a real embrace, and the kind of silence that comes when finally being together says enough on its own.",
      },
      {
        icon: MapPin,
        title: "The life I imagine",
        body: "A shared place in the world where your ambition and my work can both keep growing without asking us to stay apart.",
      },
      {
        icon: Heart,
        title: "The promise I keep",
        body: "No matter how much more our story asks from us, I want to keep meeting it with loyalty, gentleness, and effort.",
      },
    ],
    note:
      "This is my little reminder that the future is not empty space. It is a room I am already decorating with hope for us.",
  };
}
