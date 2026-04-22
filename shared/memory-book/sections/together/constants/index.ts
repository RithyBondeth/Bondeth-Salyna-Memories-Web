import type { BookPage } from "@/components/memory-book/types";

export function createTogetherPage(): BookPage {
  return {
    id: "together",
    label: "Together",
    eyebrow: "Our Love Story",
    title: "Every second counts, my love.",
    subtitle: "A live celebration of how long we've been together.",
    intro: "",
    quote: "Distance means so little when someone means so much.",
    photos: [],
    cards: [],
    note: "",
    variant: "together",
  };
}
