import { Heart, ImageIcon, Sparkles } from "lucide-react";

import type { BookPage, GalleryCategory } from "@/components/memory-book/types";

export function createGalleryPage(): BookPage {
  return {
    id: "gallery",
    label: "Archive",
    eyebrow: "Final Chapter",
    title: "Our Gallery Archive",
    subtitle:
      "A living home for every real photo of us \u2014 and every one we have not taken yet.",
    intro:
      "Every picture of us deserves somewhere to live. Upload the January days in Cambodia, the call screenshots that kept us tethered in February, the small gifts, the portraits of you I keep on my phone. Write what they mean next to them. This archive grows with us.",
    quote: "Every picture of us is evidence that love happened here.",
    photos: [],
    galleryCategories: createGalleryCategories(),
    variant: "gallery",
    cards: [
      {
        icon: ImageIcon,
        title: "A place for what mattered",
        body: "The real photos of our relationship should live somewhere intentional \u2014 not lost in a chat scroll, not buried in a camera roll, but here, where they can be seen again.",
      },
      {
        icon: Heart,
        title: "A place for January",
        body: "The days you spent in Cambodia deserve their own shelf. Drop the best ones here and they will stay the easiest part of the archive to find.",
      },
      {
        icon: Sparkles,
        title: "A place for what is still coming",
        body: "This archive is not only for what we already lived. It is waiting for the photos we will keep adding as our story grows past the distance.",
      },
    ],
    note:
      "I want this archive to outgrow the distance \u2014 until miles are the smallest thing about our story.",
  };
}

function createGalleryCategories(): GalleryCategory[] {
  return [
    {
      title: "Together In Cambodia",
      description:
        "Photos from the month you came to Cambodia and turned ordinary days into memories I still replay.",
      folder: "gallery/together",
      photos: [
        {
          src: "/memories/gallery/together-01.svg",
          alt: "Together placeholder",
          caption: "Together 01",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/together-02.svg",
          alt: "Together placeholder",
          caption: "Together 02",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/together-03.svg",
          alt: "Together placeholder",
          caption: "Together 03",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/together-04.svg",
          alt: "Together placeholder",
          caption: "Together 04",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Video Calls",
      description:
        "Screenshots from calls and the small late-night conversations that carried love across Cambodia and Australia.",
      folder: "gallery/calls",
      photos: [
        {
          src: "/memories/gallery/calls-01.svg",
          alt: "Video call placeholder",
          caption: "Call 01",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/calls-02.svg",
          alt: "Video call placeholder",
          caption: "Call 02",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/calls-03.svg",
          alt: "Video call placeholder",
          caption: "Call 03",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/calls-04.svg",
          alt: "Video call placeholder",
          caption: "Call 04",
          frameClassName: "aspect-[16/10]",
        },
      ],
    },
    {
      title: "Dates & Gifts",
      description:
        "Anniversaries, flowers, notes, gifts, and the small gestures that made love feel tangible.",
      folder: "gallery/dates",
      photos: [
        {
          src: "/memories/gallery/dates-01.svg",
          alt: "Dates placeholder",
          caption: "Dates 01",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/dates-02.svg",
          alt: "Dates placeholder",
          caption: "Dates 02",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/dates-03.svg",
          alt: "Dates placeholder",
          caption: "Dates 03",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/dates-04.svg",
          alt: "Dates placeholder",
          caption: "Dates 04",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Salyna, My Smart Girl",
      description:
        "A space for your portraits, study moments, and the photos that remind me how beautiful and brilliant you are.",
      folder: "gallery/salyna",
      photos: [
        {
          src: "/memories/gallery/salyna-01.svg",
          alt: "Salyna placeholder",
          caption: "Salyna 01",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/salyna-02.svg",
          alt: "Salyna placeholder",
          caption: "Salyna 02",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/salyna-03.svg",
          alt: "Salyna placeholder",
          caption: "Salyna 03",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/salyna-04.svg",
          alt: "Salyna placeholder",
          caption: "Salyna 04",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Bondeth In Cambodia",
      description:
        "My side of the story: portraits, work-life snapshots, and the days spent waiting and working toward you.",
      folder: "gallery/bondeth",
      photos: [
        {
          src: "/memories/gallery/bondeth-01.svg",
          alt: "Bondeth placeholder",
          caption: "Bondeth 01",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/bondeth-02.svg",
          alt: "Bondeth placeholder",
          caption: "Bondeth 02",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/bondeth-03.svg",
          alt: "Bondeth placeholder",
          caption: "Bondeth 03",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/gallery/bondeth-04.svg",
          alt: "Bondeth placeholder",
          caption: "Bondeth 04",
          frameClassName: "aspect-[4/5]",
        },
      ],
    },
    {
      title: "Our Future In Australia",
      description:
        "A category reserved for what is still waiting for us: reunions, the 2027 move, future anniversaries, and the life after distance.",
      folder: "gallery/future",
      photos: [
        {
          src: "/memories/gallery/future-01.svg",
          alt: "Future placeholder",
          caption: "Future 01",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/future-02.svg",
          alt: "Future placeholder",
          caption: "Future 02",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/future-03.svg",
          alt: "Future placeholder",
          caption: "Future 03",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/gallery/future-04.svg",
          alt: "Future placeholder",
          caption: "Future 04",
          frameClassName: "aspect-[16/10]",
        },
      ],
    },
  ];
}
