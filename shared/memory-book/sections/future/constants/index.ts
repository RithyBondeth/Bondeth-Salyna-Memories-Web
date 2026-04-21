import { Heart, MapPin, Plane } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createFuturePage(): BookPage {
  return {
    id: "future",
    label: "Promise",
    eyebrow: "Chapter Five",
    title: "The Future I Am Walking Toward",
    subtitle: "I am not only dreaming about us. I am preparing for us.",
    intro:
      "You are building your future in Australia with courage and intelligence. I am building mine in Cambodia as a software engineer. But in my heart, I am also building a bridge toward you. I mean it when I say I want to move to Australia in 2027. I want to be closer to you, support your dream, and build an everyday life where love no longer has to travel so far.",
    quote:
      "My love for you is not only emotional. It is a promise I want to turn into real life.",
    chips: ["Australia 2027", "Software engineer", "Doctorate dream", "A home for us"],
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
        title: "My promise",
        body: "I do not want to keep saying 'one day' forever. I want to move toward you with real intention and make our future something we can actually live inside.",
      },
      {
        icon: MapPin,
        title: "Your dream matters to me",
        body: "I do not want to stand in the way of your doctorate. I want to be someone who supports your dream, protects your peace, and celebrates how far you will go.",
      },
      {
        icon: Heart,
        title: "The life I imagine",
        body: "A life where we no longer need airports to measure love. Just ordinary mornings, shared meals, your studies, my work, and a home that finally belongs to both of us.",
      },
    ],
    note:
      "I cannot promise that every step will be easy, but I can promise that my love for you is serious, loyal, and moving forward.",
  };
}
