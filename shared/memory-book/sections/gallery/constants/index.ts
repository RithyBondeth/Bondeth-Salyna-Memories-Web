import { Heart, ImageIcon, Sparkles } from "lucide-react";

import type { BookPage, GalleryCategory } from "@/components/memory-book/types";

export function createGalleryPage(): BookPage {
  return {
    id: "gallery",
    label: "Archive",
    eyebrow: "Final Chapter",
    title: "Our Gallery Archive",
    subtitle: "The place where our real photos can keep every smile, visit, date, and goodbye safe.",
    intro:
      "Our story deserves a beautiful place for its real images. When you replace these placeholders with our photos, I want this chapter to feel like opening a private museum of us.",
    quote:
      "Every picture of us is proof that love happened here.",
    chips: ["January 2026", "Calls across countries", "Future memories waiting"],
    photos: [],
    galleryCategories: createGalleryCategories(),
    cards: [
      {
        icon: ImageIcon,
        title: "A place for what mattered",
        body: "I want the real photos of our relationship to live somewhere that feels intentional, not forgotten in a random folder.",
      },
      {
        icon: Heart,
        title: "A place for January and February 2026",
        body: "The days you spent in Cambodia deserve their own home here, because they are some of the most precious memories I have of us.",
      },
      {
        icon: Sparkles,
        title: "A place for what is still coming",
        body: "This archive is not only for what we already lived. It is also waiting for the photos we have not taken yet.",
      },
    ],
    note:
      "I want this archive to keep growing with us until the distance becomes only one small chapter in a much bigger love story.",
  };
}

function createGalleryCategories(): GalleryCategory[] {
  return [
    {
      title: "Together In Cambodia",
      description:
        "Photos from the time Salyna came to Cambodia and turned ordinary days into unforgettable memories.",
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
        "Screenshots from calls, chats, and the little conversations that carried love across Cambodia and Australia.",
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
        "Anniversaries, flowers, notes, gifts, and the little gestures that made love feel tangible.",
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
      title: "Salyna, My Smart Girl",
      description:
        "A space for her portraits, study moments, and the photos that remind Bondeth how beautiful and brilliant she is.",
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
      title: "Bondeth In Cambodia",
      description:
        "Bondeth's side of the story: portraits, work-life snapshots, and the days spent waiting and working toward the future.",
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
      title: "Our Future In Australia",
      description:
        "A category reserved for the memories still waiting for you: reunions, the 2027 move, future anniversaries, and the life after distance.",
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
