import { BookOpen, Heart } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createCoverPage(): BookPage {
  return {
    id: "cover",
    label: "Cover",
    eyebrow: "For Salyna, from Bondeth",
    title: "For The Girl My Heart Found Twice",
    subtitle:
      "A small book for the story that started in 2022 and found us again in 2025.",
    intro:
      "Salyna, I wanted our story to have somewhere gentle to live. Not only in messages, not only in calls, but in a place we can reopen and feel again. This begins where we first met in 2022, carries the second chance we found in June 2025, and keeps the promise ring I gave you when I finally saw you in person in January 2026.",
    quote:
      "Some love stories return at the right time and finally learn how to stay.",
    photos: [
      {
        src: "/assets/cover/cover-01.jpg",
        alt: "Cover placeholder for Bondeth and Salyna's digital memory book",
        caption: "Us",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/assets/cover/cover-02.jpg",
        alt: "Cover portrait placeholder",
        caption: "Your smile",
        frameClassName: "aspect-[4/5]",
      },
      {
        src: "/assets/cover/cover-03.jpg",
        alt: "Cover candid placeholder",
        caption: "A quiet moment",
        frameClassName: "aspect-[4/5]",
      },
    ],
    cards: [
      {
        icon: Heart,
        title: "Why this book exists",
        body: "Because I do not want our love to live only in chats that disappear up the screen. I wanted one place where my voice stays still, where you can come back and remember how real this has always been to me.",
      },
      {
        icon: BookOpen,
        title: "What you'll find inside",
        body: "How we first met in 2022 while you were in Siem Reap and I was in Phnom Penh. How June 2025 brought us back to each other. The first time I saw you in person in January 2026 and the promise ring I put on your hand. The things I notice about you, and the memories I never want to lose.",
      },
    ],
    note: "If you're reading this, you've just opened something I have been carrying in my chest for a long time. Take your time with it. I am right here.",
  };
}
