import { Gift, Heart, MapPin, MessageCircle } from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createIntroductionPage(): BookPage {
  return {
    id: "introduction",
    label: "Beginning",
    eyebrow: "The Beginning",
    title: "How Our Story Found Its Way Back",
    subtitle:
      "From 2022 to January 2026, our story kept finding the courage to return to itself.",
    intro:
      "In 2022, you were in Siem Reap and I was in Phnom Penh. That was the first time I loved you, and the first time my heart felt that kind of seriousness. We did not make it then, but some feelings do not disappear just because time passes. Then June 2025 brought us back to each other, and this time we stayed. Since then, talking to you every day has felt less like a routine and more like the shape of my life.",
    quote:
      "Some love stories do not begin once. Ours began, waited, and then bloomed again when the time was right.",
    photos: [
      {
        src: "/assets/introduction/introduction-01.jpg",
        alt: "A milestone image representing Bondeth and Salyna first meeting in 2022 between Siem Reap and Phnom Penh",
        caption: "2022 \u2014 the first time we met",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
      {
        src: "/assets/introduction/introduction-02.HEIC",
        alt: "A milestone image representing Bondeth giving Salyna a promise ring during their first in-person meeting in January 2026",
        caption: "January 2026 \u2014 the right time",
        cardClassName: "col-span-2",
        frameClassName: "aspect-[16/10]",
      },
    ],
    cards: [
      {
        icon: MapPin,
        title: "2022",
        body: "You were in Siem Reap. I was in Phnom Penh. Even with that distance between us, you became the first girl my heart ever loved for real.",
      },
      {
        icon: Heart,
        title: "My first love",
        body: "We did not make it the first time, but that did not make the feeling any less true. If anything, it proved how deeply your name had already settled inside me.",
      },
      {
        icon: MessageCircle,
        title: "June 2025",
        body: "Life brought us back to each other. This time we made it, and from that point on we talked every single day until hearing from you became the most natural part of mine.",
      },
      {
        icon: Gift,
        title: "January 2026",
        body: "When we finally met in person, I gave you a promise ring. It felt like the story that once slipped away had finally found its hands again.",
      },
    ],
    note: "If this book has a true beginning, it is here: 2022 started the feeling, June 2025 gave us another chance, and January 2026 made that love real in front of my eyes.",
  };
}
