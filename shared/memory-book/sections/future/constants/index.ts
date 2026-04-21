import { GraduationCap, Plane } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createFuturePage(): BookPage {
  return {
    id: "future",
    label: "Promise",
    eyebrow: "Chapter Five",
    title: "What I'm Working Toward",
    subtitle: "A future with you in it \u2014 not a dream, a plan.",
    intro:
      "You are building your future in Australia, and I am proud of you for every hour you put into it. I am building mine here as a software engineer, and I am using that time to get ready \u2014 for the visa, the savings, the move. 2027 is not a far-off wish. It is the year I am walking toward, one month at a time, because I want the rest of my life to happen near you.",
    quote:
      "My love for you is a promise I am already turning into real decisions.",
    photos: [
      {
        src: "/memories/future-01.svg",
        alt: "Future placeholder \u2014 a reunion",
        caption: "The next time I see you",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/memories/future-02.svg",
        alt: "Future placeholder \u2014 a home",
        caption: "Somewhere ours",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/memories/future-03.svg",
        alt: "Future placeholder \u2014 more chapters",
        caption: "Chapters to come",
        frameClassName: "aspect-[4/5]",
      },
    ],
    cards: [
      {
        icon: Plane,
        title: "The move",
        body: "Australia, 2027. Not as someone visiting. As someone building a life beside you. I know what it will take, and I am doing it \u2014 quietly, steadily, without needing applause for it.",
      },
      {
        icon: GraduationCap,
        title: "Your doctorate stays yours",
        body: "Finish what you started. I am not a detour from your dream. I am the person who hands you a coffee at 2am, who keeps dinner warm when you are in the library too long, who stays quiet while you think and proud while you work.",
      },
    ],
    note:
      "I cannot promise every step will be easy, but I can promise the direction. I am walking toward you. I have been for a while.",
  };
}
