import { Heart, ImageIcon, Sparkles } from "lucide-react";

import type { BookPage, GalleryCategory } from "@/components/memory-book/types";

export function createGalleryPage(): BookPage {
  return {
    id: "gallery",
    label: "Gallery",
    eyebrow: "Chapter One",
    title: "Our Gallery Archive",
    subtitle: "A dedicated page where your memories can be stored by category.",
    intro:
      "Some photos belong in the story pages, but some deserve a proper archive of their own. This chapter gives you one place to organize the relationship by mood, moment, and meaning.",
    quote:
      "The more our love grows, the more beautiful it becomes to keep it well organized.",
    chips: ["Category archive", "Easy photo sorting", "Made for future memories"],
    photos: [],
    galleryCategories: createGalleryCategories(),
    cards: [
      {
        icon: ImageIcon,
        title: "Organized by meaning",
        body: "Instead of dropping every image into one place, this page gives your memories categories that will still make sense later.",
      },
      {
        icon: Heart,
        title: "Built to keep growing",
        body: "You can keep adding new photos as the relationship grows without needing to redesign the whole book every time.",
      },
      {
        icon: Sparkles,
        title: "Made for real memories",
        body: "Right now the gallery uses placeholders, but the layout is ready for your real pictures whenever you want to swap them in.",
      },
    ],
    note:
      "This chapter is meant to become your real archive over time, not just decoration.",
  };
}

function createGalleryCategories(): GalleryCategory[] {
  return [
    {
      title: "Together Moments",
      description:
        "Your favorite couple shots, selfies, or moments where the two of you feel closest.",
      folder: "gallery/together",
      photos: [
        {
          src: "/memories/gallery/together-01.svg",
          alt: "Together moments placeholder one for Bondeth and Salyna",
          caption: "Together 01",
          hint: "Use this for one of your happiest photos together.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/together-02.svg",
          alt: "Together moments placeholder two for Bondeth and Salyna",
          caption: "Together 02",
          hint: "Another couple memory can live here as the archive grows.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/together-03.svg",
          alt: "Together moments placeholder three for Bondeth and Salyna",
          caption: "Together 03",
          hint: "Use this for another favorite selfie or a cozy candid moment.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/together-04.svg",
          alt: "Together moments placeholder four for Bondeth and Salyna",
          caption: "Together 04",
          hint: "A playful memory, date photo, or sweet pose would fit nicely here.",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Video Calls",
      description:
        "Screenshots from calls, chats, or ordinary nights that still mattered because you were there.",
      folder: "gallery/calls",
      photos: [
        {
          src: "/memories/gallery/calls-01.svg",
          alt: "Video call placeholder one for Bondeth and Salyna",
          caption: "Call 01",
          hint: "Perfect for a screenshot from a late-night call.",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/calls-02.svg",
          alt: "Video call placeholder two for Bondeth and Salyna",
          caption: "Call 02",
          hint: "Use this for another sweet moment from distance.",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/calls-03.svg",
          alt: "Video call placeholder three for Bondeth and Salyna",
          caption: "Call 03",
          hint: "A screenshot from a laughter-filled call would be perfect here.",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/calls-04.svg",
          alt: "Video call placeholder four for Bondeth and Salyna",
          caption: "Call 04",
          hint: "Save a late-night check-in or quiet video-call moment in this slot.",
          frameClassName: "aspect-[16/10]",
        },
      ],
    },
    {
      title: "Dates & Gifts",
      description:
        "Anniversaries, flowers, notes, gifts, and the little gestures that mark important relationship milestones.",
      folder: "gallery/dates",
      photos: [
        {
          src: "/memories/gallery/dates-01.svg",
          alt: "Dates and gifts placeholder one for Bondeth and Salyna",
          caption: "Dates 01",
          hint: "A gift photo, cake, flowers, or dating-day memory would fit well.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/dates-02.svg",
          alt: "Dates and gifts placeholder two for Bondeth and Salyna",
          caption: "Dates 02",
          hint: "Another meaningful milestone can be saved here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/dates-03.svg",
          alt: "Dates and gifts placeholder three for Bondeth and Salyna",
          caption: "Dates 03",
          hint: "Use this for flowers, a surprise, or a memory from a celebration.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/dates-04.svg",
          alt: "Dates and gifts placeholder four for Bondeth and Salyna",
          caption: "Dates 04",
          hint: "Another treasured gift or meaningful relationship date can live here.",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Salyna",
      description:
        "A space just for her portraits, study moments, and the photos that make this book feel especially personal.",
      folder: "gallery/salyna",
      photos: [
        {
          src: "/memories/gallery/salyna-01.svg",
          alt: "Salyna placeholder one for the gallery archive",
          caption: "Salyna 01",
          hint: "Use one of her most beautiful portraits here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/salyna-02.svg",
          alt: "Salyna placeholder two for the gallery archive",
          caption: "Salyna 02",
          hint: "A candid or study photo would also look lovely here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/salyna-03.svg",
          alt: "Salyna placeholder three for the gallery archive",
          caption: "Salyna 03",
          hint: "Another portrait, smile, or elegant moment can be kept here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/salyna-04.svg",
          alt: "Salyna placeholder four for the gallery archive",
          caption: "Salyna 04",
          hint: "A photo that feels especially radiant or personal would fit here beautifully.",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Bondeth",
      description:
        "Your own side of the story: portraits, work-life snapshots, or moments from Cambodia that belong in the memory book too.",
      folder: "gallery/bondeth",
      photos: [
        {
          src: "/memories/gallery/bondeth-01.svg",
          alt: "Bondeth placeholder one for the gallery archive",
          caption: "Bondeth 01",
          hint: "A portrait or coding-life photo can go here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/bondeth-02.svg",
          alt: "Bondeth placeholder two for the gallery archive",
          caption: "Bondeth 02",
          hint: "Save another moment from your life in Cambodia here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/bondeth-03.svg",
          alt: "Bondeth placeholder three for the gallery archive",
          caption: "Bondeth 03",
          hint: "Another portrait, everyday moment, or work-life memory can go here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/bondeth-04.svg",
          alt: "Bondeth placeholder four for the gallery archive",
          caption: "Bondeth 04",
          hint: "Use this for a casual photo that captures your side of the story.",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Future Us",
      description:
        "A category reserved for the memories you have not made yet: reunions, trips, anniversaries, and the days after distance.",
      folder: "gallery/future",
      photos: [
        {
          src: "/memories/gallery/future-01.svg",
          alt: "Future us placeholder one for Bondeth and Salyna",
          caption: "Future 01",
          hint: "A reunion or travel photo will be powerful here later.",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/future-02.svg",
          alt: "Future us placeholder two for Bondeth and Salyna",
          caption: "Future 02",
          hint: "Keep this ready for a future anniversary or new chapter.",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/future-03.svg",
          alt: "Future us placeholder three for Bondeth and Salyna",
          caption: "Future 03",
          hint: "A future trip, celebration, or reunion memory could be saved here.",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/future-04.svg",
          alt: "Future us placeholder four for Bondeth and Salyna",
          caption: "Future 04",
          hint: "Keep one more space open for a chapter you have not written yet.",
          frameClassName: "aspect-[16/10]",
        },
      ],
    },
  ];
}
