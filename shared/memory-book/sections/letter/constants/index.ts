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
        "Some people fall in love like a storm. I fell for you the way a room brightens at sunrise \u2014 slow, steady, and impossible to argue with. One morning I realized I had been thinking about you from the second I opened my eyes, and I understood that my life had quietly rearranged itself around you without asking permission. September 1, 2025 did not feel like a beginning. It felt like a confirmation. I had already chosen you; I was finally allowed to say it out loud.",
        "When you came to Cambodia in January 2026, something inside me loosened. Until then, loving you had been a practice \u2014 I had to picture your face, imagine your laugh, reach through a screen to find you. That month, you were here. I could turn my head and see you. I could cross a room and find your hand. I still replay the smallest things from those weeks: the way you went quiet when you were thinking, the way you laughed with your whole body, the way the afternoon light caught your cheek when you did not know I was looking. I stored every one of those details. I plan to keep them for the rest of my life.",
        "February taught me something I did not want to learn \u2014 that loving you from far away is not dramatic. It is patient, ordinary, daily, and heavy. I expected a grand ache and got small ones instead: a joke with no one to tell it to, a doorway I kept glancing at, a silence where your voice used to be. The distance did not break me. It clarified me. I understood, with a certainty I have never felt about anything else in my life, that I am going to spend the rest of mine loving you.",
        "I want you to know what I see when I look at you, because I worry sometimes that you do not see yourself the way I do. I see a woman carrying a doctorate and a soft heart at the same time, and dropping neither. I see someone who is brilliant without announcing it and gentle without performing it. I see the most disciplined life I have ever witnessed, lived by the kindest person I have ever known. You are not just my girlfriend. You are my proof that I am allowed to love someone this much.",
        "The future I am walking toward is not a fantasy. It is a plan. I am learning what Australia will ask of me. I am saving. I am studying the road forward, because that is what a software engineer does, but also because that is what a person does when the destination is you. 2027 is not a year I am waiting for. It is a year I am earning \u2014 quietly, stubbornly, one ordinary day at a time.",
        "I will not pretend I know every step. I do not know what your thesis will demand from you, or how many more airports stand between us, or which calls will be the hardest. But I know the direction. It has not changed since the day you said yes. It is not going to.",
        "So if you are reading this on a hard day, I want you to know: I am still here. I am still yours. I am still walking toward you. And on the day one of us finally closes the distance \u2014 whichever of us gets there first \u2014 I plan to take your hand, and I do not plan to really let go of it again.",
      ],
      signOff: "All of me, every day \u2014",
      signature: "Bondeth",
      dateLine: "From Cambodia, for you in Australia.",
    },
  };
}
