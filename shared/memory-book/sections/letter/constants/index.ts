import type { BookPage } from "@/components/memory-book/types";

export function createLetterPage(): BookPage {
  return {
    id: "letter",
    label: "My Letter",
    eyebrow: "The Last Page",
    title: "A Letter For You",
    subtitle: "Read this one slowly.",
    intro: "",
    quote: "",
    photos: [],
    cards: [],
    note: "",
    variant: "letter",
    letter: {
      opener: "Salyna,",
      paragraphs: [
        "In 2022, you were in Siem Reap and I was in Phnom Penh. I did not know then that the first girl my heart would choose so completely would be you. You were my first love. We did not make it that first time, but even then something in me kept your name safely.",
        "Then June 2025 brought you back to me. This time we talked every single day. Not because we had to, but because every day felt incomplete until I had heard from you. Little by little, the space between us filled with your voice, your thoughts, your laughter, and I knew this was not a feeling that was passing through me.",
        "When I finally saw you in person in January 2026, everything that had lived in messages became real. I could look at you, stand beside you, and hand you the promise ring I had been carrying in my heart long before it reached your hand.",
        "Before you came back into my life, there were days when I felt like I was only existing. The same routine, the same tired feeling, the same empty hours passing one after another. I was moving through life without real purpose, without warmth, without knowing what I was really working toward.",
        "Then you came into my world and changed everything. You gave my life meaning, direction, and a kind of beauty I did not know I was still capable of feeling. Loving you made my world softer, brighter, and more alive than I ever thought it could be.",
        "You do not only make me feel loved. You make me want to become more. Because of you, I want to focus more on myself and my career. I want to believe in my dreams more seriously. I want to work harder for my future and become the man you truly deserve. You inspire me every single day in ways I do not think I will ever be able to explain perfectly.",
        "What means the most to me is not only the big moment. It is the choosing. The way we keep showing up for each other day after day. The way love between us became steady, natural, and impossible for me to imagine losing.",
        "You will always be the girl who taught my heart what first love feels like, and also the girl who taught me that some love stories deserve a second beginning. I am so grateful for your existence, and I love you more than words could ever fully explain.",
        "So if you ever read this on a hard day, I want you to remember the shape of our story: 2022, June 2025, January 2026. A beginning, a return, a promise. And me, still here, still loving you, still choosing you.",
      ],
      signOff: "Always yours,",
      signature: "Bondeth",
      dateLine: "From Phnom Penh, with all my love.",
    },
  };
}
