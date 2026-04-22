import { Heart, ImageIcon, Sparkles } from "lucide-react";

import type {
  BookPage,
  GalleryCategory,
  MemoryPhoto,
} from "@/components/memory-book/types";

export function createGalleryPage(): BookPage {
  return {
    id: "gallery",
    label: "Archive",
    eyebrow: "Final Chapter",
    title: "Our Gallery Archive",
    subtitle:
      "A quiet home for the moments of us that deserve to stay on one page.",
    intro:
      "Every picture of us deserves somewhere gentle to live. This page holds the milestones, the little moments, the call screenshots, and the memories that shaped our story from 2022 to January 2026.",
    quote: "Every picture of us is evidence that love happened here.",
    photos: [],
    galleryCategories: createGalleryCategories(),
    variant: "gallery",
    cards: [
      {
        icon: ImageIcon,
        title: "A place for what mattered",
        body: "The photos of our relationship should live somewhere intentional \u2014 not lost in a chat scroll, not buried in a camera roll, but here, where they can be seen again.",
      },
      {
        icon: Heart,
        title: "A place for our milestones",
        body: "The moments that shaped us deserve their own shelf. Drop them here and they will stay easy to return to whenever we want to remember how this love grew.",
      },
      {
        icon: Sparkles,
        title: "A place to revisit",
        body: "This page is here for the days we want to reopen a memory and feel it again, slowly, photo by photo.",
      },
    ],
    note:
      "I want this archive to outgrow the distance \u2014 until miles are the smallest thing about our story.",
  };
}

function createGalleryCategories(): GalleryCategory[] {
  return [
    createGalleryCategory({
      title: "Salyna My Smart Girl",
      description:
        "Five favorite photos of Salyna that deserve a page all to themselves.",
      assetFolder: "salyna-my-smart-girl",
      count: 5,
      frameClassName: "aspect-[4/5]",
      extensions: ["JPG", "JPG", "HEIC", "JPG", "HEIC"],
      imageClassNames: ["", "scale-[1.2]", "scale-[1.2]", "scale-[1.2]", ""],
      captions: [
        "my favorite face to look at",
        "so effortlessly beautiful",
        "the girl who has my whole heart",
        "smart, soft, and everything",
        "I could look at you forever",
      ],
    }),
    createGalleryCategory({
      title: "Together",
      description:
        "Five memories of us side by side, holding onto the quiet happiness of being together.",
      assetFolder: "together",
      count: 5,
      frameClassName: "aspect-[4/5]",
      extensions: ["JPG", "HEIC", "HEIC", "JPG", "JPG"],
      captions: [
        "my favorite place to be",
        "us, always",
        "happiest when you're beside me",
        "this is what I live for",
        "together feels like home",
      ],
    }),
    createGalleryCategory({
      title: "Beach Date",
      description:
        "Five photos for the beach date memories, full of light, water, and time with you.",
      assetFolder: "beach-date",
      count: 5,
      frameClassName: "aspect-[4/5]",
      captions: [
        "salt air and you",
        "golden hour with my person",
        "the ocean was beautiful but you were more",
        "waves and us",
        "this day felt like a dream",
      ],
    }),
    createGalleryCategory({
      title: "Gifts",
      description:
        "Five photos for flowers, presents, and the little things that made love feel touchable.",
      assetFolder: "gifts",
      count: 5,
      frameClassName: "aspect-[4/5]",
      extensions: ["JPG", "HEIC", "HEIC", "HEIC", "HEIC"],
      captions: [
        "you make love feel tangible",
        "every flower from you means everything",
        "love made visible",
        "the way you show up for me",
        "wrapped in your love",
      ],
    }),
    createGalleryCategory({
      title: "Video Calls",
      description:
        "Three screenshots from the calls that carried us from one day into the next.",
      assetFolder: "video-calls",
      count: 3,
      frameClassName: "aspect-[9/16]",
      extensions: ["JPG", "JPG", "HEIC"],
      captions: [
        "the screen between us couldn't dim how bright you make me",
        "distance felt smaller when I could see your face",
        "my favorite way to end the day",
      ],
    }),
    createGalleryCategory({
      title: "Holding Hand",
      description:
        "Three photos for the small, steady feeling of your hand finding mine.",
      assetFolder: "holding-hand",
      count: 3,
      frameClassName: "aspect-[4/5]",
      captions: [
        "the softest thing — your hand in mine",
        "I never want to let go",
        "this is enough, this is everything",
      ],
    }),
  ];
}

type GalleryCategoryConfig = {
  title: string;
  description: string;
  assetFolder: string;
  count: number;
  frameClassName: string;
  /** Per-photo extensions (index-matched). Falls back to "HEIC" for missing entries. */
  extensions?: string[];
  /** Per-photo imageClassName overrides (index-matched). e.g. "scale-[1.2]" to zoom in. */
  imageClassNames?: string[];
  /** Per-photo captions (index-matched). Falls back to "{title} {number}" for missing entries. */
  captions?: string[];
};

type GalleryPhotosConfig = Pick<
  GalleryCategoryConfig,
  "title" | "assetFolder" | "count" | "frameClassName" | "extensions" | "imageClassNames" | "captions"
>;

function createGalleryCategory({
  title,
  description,
  assetFolder,
  count,
  frameClassName,
  extensions,
  imageClassNames,
  captions,
}: GalleryCategoryConfig): GalleryCategory {
  return {
    title,
    description,
    folder: `gallery/${assetFolder}`,
    photos: createGalleryPhotos({
      title,
      assetFolder,
      count,
      frameClassName,
      extensions,
      imageClassNames,
      captions,
    }),
  };
}

function createGalleryPhotos({
  title,
  assetFolder,
  count,
  frameClassName,
  extensions,
  imageClassNames,
  captions,
}: GalleryPhotosConfig): MemoryPhoto[] {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const ext = extensions?.[index] ?? "HEIC";
    const imageClassName = imageClassNames?.[index];
    const caption = captions?.[index] ?? `${title} ${number}`;

    return {
      src: `/assets/gallery/${assetFolder}/${assetFolder}-${number}.${ext}`,
      alt: `${title} image ${index + 1}`,
      caption,
      frameClassName,
      ...(imageClassName ? { imageClassName } : {}),
    };
  });
}
