import type { PageTheme } from "./types";

export const HEARTS = [
  { left: "6%", top: "12%", size: 18, delay: "0s", duration: "11s" },
  { left: "16%", top: "72%", size: 24, delay: "1.8s", duration: "13s" },
  { left: "24%", top: "28%", size: 12, delay: "0.9s", duration: "9s" },
  { left: "42%", top: "8%", size: 20, delay: "1.2s", duration: "12s" },
  { left: "53%", top: "76%", size: 16, delay: "2.4s", duration: "10s" },
  { left: "68%", top: "18%", size: 28, delay: "0.4s", duration: "14s" },
  { left: "74%", top: "58%", size: 14, delay: "1.1s", duration: "9.5s" },
  { left: "88%", top: "26%", size: 18, delay: "2.7s", duration: "12.5s" },
  { left: "92%", top: "74%", size: 12, delay: "1.5s", duration: "8.5s" },
];

export const PAGE_THEMES: PageTheme[] = [
  {
    frame: "from-white/92 via-rose-50/88 to-pink-100/84",
    halo: "from-fuchsia-300/20 via-pink-300/10 to-transparent",
    edge: "border-white/65",
    chip: "bg-white/70 text-rose-700",
    card: "bg-white/72",
  },
  {
    frame: "from-rose-50/92 via-pink-50/88 to-amber-50/84",
    halo: "from-rose-400/22 via-pink-300/10 to-transparent",
    edge: "border-white/60",
    chip: "bg-rose-100/78 text-rose-700",
    card: "bg-white/68",
  },
  {
    frame: "from-white/92 via-fuchsia-50/88 to-rose-100/84",
    halo: "from-pink-300/24 via-fuchsia-200/10 to-transparent",
    edge: "border-white/65",
    chip: "bg-fuchsia-100/78 text-fuchsia-700",
    card: "bg-white/72",
  },
  {
    frame: "from-rose-50/92 via-orange-50/88 to-white/84",
    halo: "from-orange-200/24 via-pink-200/10 to-transparent",
    edge: "border-white/60",
    chip: "bg-orange-100/78 text-orange-700",
    card: "bg-white/70",
  },
  {
    frame: "from-white/92 via-pink-50/88 to-purple-50/84",
    halo: "from-pink-300/22 via-purple-200/10 to-transparent",
    edge: "border-white/65",
    chip: "bg-pink-100/78 text-pink-700",
    card: "bg-white/72",
  },
  {
    frame: "from-rose-100/92 via-white/88 to-pink-50/84",
    halo: "from-rose-300/24 via-pink-300/10 to-transparent",
    edge: "border-white/60",
    chip: "bg-rose-100/78 text-rose-700",
    card: "bg-white/72",
  },
];
