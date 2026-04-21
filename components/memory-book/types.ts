import type { LucideIcon } from "lucide-react";

export type BookCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type MemoryPhoto = {
  id?: string;
  src: string;
  alt: string;
  caption: string;
  hint: string;
  source?: "placeholder" | "upload";
  categoryFolder?: string;
  fileName?: string;
  createdAt?: string;
  updatedAt?: string;
  cardClassName?: string;
  frameClassName?: string;
  imageClassName?: string;
};

export type GalleryCategory = {
  title: string;
  description: string;
  folder: string;
  photos: MemoryPhoto[];
};

export type BookPage = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  quote: string;
  chips: string[];
  photos: MemoryPhoto[];
  galleryCategories?: GalleryCategory[];
  cards: BookCard[];
  note: string;
};

export type PageTheme = {
  frame: string;
  halo: string;
  edge: string;
  chip: string;
  card: string;
};

export type RelationshipMetrics = {
  bondethAge: number;
  salynaAge: number;
  daysTogether: number;
  monthsTogether: number;
};
