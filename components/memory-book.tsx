"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Code2,
  GraduationCap,
  Heart,
  ImageIcon,
  MapPin,
  Plane,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BookCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

type MemoryPhoto = {
  src: string;
  alt: string;
  caption: string;
  hint: string;
  cardClassName?: string;
  frameClassName?: string;
  imageClassName?: string;
};

type BookPage = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  quote: string;
  chips: string[];
  photos: MemoryPhoto[];
  cards: BookCard[];
  note: string;
};

const HEARTS = [
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

const PAGE_THEMES = [
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

const RELATIONSHIP_START = createDate(2025, 9, 1);
const FIRST_ANNIVERSARY = createDate(2026, 9, 1);
const BONDETH_BIRTHDAY = createDate(2002, 5, 7);
const SALYNA_BIRTHDAY = createDate(2006, 6, 14);
const REFERENCE_TODAY = createDate(2026, 4, 21);

function createDate(year: number, month: number, day: number) {
  return new Date(year, month - 1, day);
}

function toUtcDay(date: Date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function getAge(birthday: Date, today: Date) {
  let age = today.getFullYear() - birthday.getFullYear();
  const hasNotHadBirthdayYet =
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate());

  if (hasNotHadBirthdayYet) {
    age -= 1;
  }

  return age;
}

function getDaysBetween(from: Date, to: Date) {
  const diff = toUtcDay(to) - toUtcDay(from);
  return Math.max(0, Math.floor(diff / 86_400_000));
}

function getMonthsBetween(from: Date, to: Date) {
  const totalMonths =
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());

  return to.getDate() >= from.getDate() ? totalMonths : totalMonths - 1;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-2%] h-72 w-72 rounded-full bg-pink-300/30 blur-3xl animate-soft-float" />
      <div
        className="absolute right-[-8%] top-[18%] h-80 w-80 rounded-full bg-rose-200/35 blur-3xl animate-soft-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[-6%] left-[20%] h-96 w-96 rounded-full bg-fuchsia-200/30 blur-3xl animate-soft-float"
        style={{ animationDelay: "2.6s" }}
      />

      {HEARTS.map((heart, index) => (
        <div
          key={index}
          className="absolute text-pink-300/55 animate-heart-drift"
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          <Heart
            fill="currentColor"
            className="drop-shadow-[0_10px_30px_rgba(255,105,180,0.22)]"
            style={{ width: heart.size, height: heart.size }}
          />
        </div>
      ))}
    </div>
  );
}

function MemoryGallery({ photos }: { photos: MemoryPhoto[] }) {
  return (
    <section className="grid gap-4 rounded-[2rem] border border-white/68 bg-white/54 p-4 shadow-[0_20px_48px_rgba(190,24,93,0.08)] backdrop-blur-md sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
            Photo Gallery
          </p>
          <h3 className="mt-1 font-heading text-3xl text-rose-950">
            Memory Placeholders
          </h3>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-rose-600">
          <ImageIcon className="size-3.5" />
          /public/memories
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className={cn(
              "group rounded-[1.8rem] border border-white/72 bg-white/74 p-3 shadow-[0_18px_42px_rgba(190,24,93,0.08)]",
              photo.cardClassName
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-[1.35rem] border border-rose-100 bg-rose-50",
                photo.frameClassName ?? "aspect-[4/5]"
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 32vw"
                className={cn(
                  "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                  photo.imageClassName
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/55 via-transparent to-white/20" />
              <span className="absolute left-3 top-3 rounded-full bg-white/82 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-rose-600 shadow-sm">
                Placeholder
              </span>
            </div>

            <figcaption className="mt-3 grid gap-1 px-1">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose-500">
                {photo.caption}
              </p>
              <p className="text-sm leading-6 text-rose-950/68">{photo.hint}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="rounded-[1.6rem] border border-dashed border-rose-300/75 bg-rose-50/55 px-4 py-3 text-sm leading-6 text-rose-950/70">
        Replace any placeholder later by keeping the same filename inside
        {" "}
        <span className="font-semibold text-rose-700">/public/memories</span>.
      </div>
    </section>
  );
}

export function MemoryBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const today = REFERENCE_TODAY;

  const bondethAge = getAge(BONDETH_BIRTHDAY, today);
  const salynaAge = getAge(SALYNA_BIRTHDAY, today);
  const daysTogether = getDaysBetween(RELATIONSHIP_START, today);
  const monthsTogether = getMonthsBetween(RELATIONSHIP_START, today);

  const pages: BookPage[] = [
    {
      id: "cover",
      label: "Cover",
      eyebrow: "For Salyna, from Bondeth",
      title: "Our Long-Distance Love Story",
      subtitle: "A pink digital memory book made between Cambodia and Australia.",
      intro:
        "I wanted to build something softer than code and warmer than a message bubble, so this little book became my way of holding your hand from far away.",
      quote:
        "Distance can stretch the map, but it still cannot measure what I feel for you.",
      chips: [
        "Cambodia to Australia",
        `Started dating: ${formatDate(RELATIONSHIP_START)}`,
        "Version one of many",
      ],
      photos: [
        {
          src: "/memories/cover-01.svg",
          alt: "Cover placeholder one for Bondeth and Salyna's digital memory book",
          caption: "Opening Cover",
          hint: "Swap this for a favorite couple photo to make the first page instantly personal.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/cover-02.svg",
          alt: "Cover placeholder two for Bondeth and Salyna's digital memory book",
          caption: "Soft Portrait",
          hint: "A warm smiling picture would fit beautifully here.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/cover-03.svg",
          alt: "Cover placeholder three for Bondeth and Salyna's digital memory book",
          caption: "Favorite Snapshot",
          hint: "Use a candid memory or screenshot from a call that means a lot to both of you.",
          frameClassName: "aspect-[4/5]",
        },
      ],
      cards: [
        {
          icon: Heart,
          title: "Made with intention",
          body: "Every page is a quiet reminder that our relationship is real, alive, and worth celebrating.",
        },
        {
          icon: Sparkles,
          title: "Made to feel close",
          body: "When the distance feels heavy, I want this book to feel like a gentle place where love still wins.",
        },
        {
          icon: BookOpen,
          title: "Made to keep growing",
          body: "This is only the first edition. Our story still has so many chapters waiting for us.",
        },
      ],
      note:
        "Turn the page whenever you want proof that being apart has never made us any less true.",
    },
    {
      id: "dreams",
      label: "Two Dreams",
      eyebrow: "Chapter One",
      title: "Two Dreams, One Heart",
      subtitle: "You in Australia. Me in Cambodia. Both of us still choosing the same love.",
      intro:
        "You are pursuing your doctorate with courage and brilliance in Australia, while I’m in Cambodia building software and building a future I still hope will include us standing in the same room, finally without the miles.",
      quote:
        "I admire how gently you carry a dream that big, and how beautifully you still make room for us.",
      chips: ["Software engineer", "Doctorate journey", "Ambition with tenderness"],
      photos: [
        {
          src: "/memories/journey-01.svg",
          alt: "Journey placeholder one for Bondeth and Salyna",
          caption: "Your World",
          hint: "A campus, study, or achievement photo would be lovely here.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/journey-02.svg",
          alt: "Journey placeholder two for Bondeth and Salyna",
          caption: "My World",
          hint: "A work desk, coding setup, or portrait from Cambodia would fit this spot well.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/journey-03.svg",
          alt: "Journey placeholder three for Bondeth and Salyna",
          caption: "Shared Motivation",
          hint: "Use a photo that feels like both of your dreams are moving together.",
          frameClassName: "aspect-[4/5]",
        },
      ],
      cards: [
        {
          icon: Code2,
          title: "My chapter",
          body: "I spend my days solving problems, writing code, and learning how to build stable things, including the way I love you.",
        },
        {
          icon: GraduationCap,
          title: "Your chapter",
          body: "You are chasing a doctorate, and every step you take makes me even more proud to know the kind of woman you are.",
        },
        {
          icon: Plane,
          title: "Our shared chapter",
          body: "Even from different countries, we keep meeting each other with patience, effort, and the kind of love that does not give up easily.",
        },
      ],
      note:
        "What we are building is not small. It is distance-tested, future-facing, and deeply sincere.",
    },
    {
      id: "distance",
      label: "Distance",
      eyebrow: "Chapter Two",
      title: "What Distance Cannot Take",
      subtitle: "The miles can delay hugs, but they cannot cancel belonging.",
      intro:
        "Long distance has a strange way of refining love. It turns ordinary things into treasures: a call, a goodnight, a photo, a soft sentence at the right moment, a promise to stay steady until the next hello.",
      quote:
        "Love becomes very honest when it learns how to wait without growing cold.",
      chips: ["Late-night calls", "Patience", "Steadiness"],
      photos: [
        {
          src: "/memories/distance-01.svg",
          alt: "Distance placeholder one for Bondeth and Salyna",
          caption: "Call Night",
          hint: "A screenshot from a video call or chat moment would make this chapter feel alive.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/9]",
        },
        {
          src: "/memories/distance-02.svg",
          alt: "Distance placeholder two for Bondeth and Salyna",
          caption: "Quiet Proof",
          hint: "Use a simple photo that reminds you how the little things hold the relationship together.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/9]",
        },
      ],
      cards: [
        {
          icon: Sparkles,
          title: "The little rituals",
          body: "Messages, check-ins, and quiet reassurances become their own kind of shelter when the day feels long.",
        },
        {
          icon: Heart,
          title: "The emotional truth",
          body: "Even from far away, you still feel familiar to me, like someone my heart already knows how to return to.",
        },
        {
          icon: Star,
          title: "The deeper lesson",
          body: "Distance keeps teaching me that real love is not only intensity. It is consistency, gentleness, and staying present.",
        },
      ],
      note:
        "We are learning the kind of love that survives quiet nights, busy days, and every hour in between.",
    },
    {
      id: "dates",
      label: "Milestones",
      eyebrow: "Chapter Three",
      title: "Our Dates, Written In Pink",
      subtitle: "The calendar became romantic the moment it started holding us.",
      intro:
        "Every love story needs a few anchor points. These dates feel like pressed flowers to me now, saved carefully because they carry parts of who we are.",
      quote:
        "Even time feels softer when I measure it with your name beside mine.",
      chips: [`${daysTogether} days of us`, `${monthsTogether} months together`, "A timeline worth keeping"],
      photos: [
        {
          src: "/memories/timeline-01.svg",
          alt: "Timeline placeholder one for Bondeth and Salyna",
          caption: "Important Day",
          hint: "Place a special photo from around the day you started dating or another meaningful memory here.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/timeline-02.svg",
          alt: "Timeline placeholder two for Bondeth and Salyna",
          caption: "Memory Marker",
          hint: "A celebratory image, gift, or handwritten note photo would look great in this panel.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/10]",
        },
      ],
      cards: [
        {
          icon: CalendarDays,
          title: `Bondeth, age ${bondethAge}`,
          body: `You were born on ${formatDate(BONDETH_BIRTHDAY)} and grew into someone who loves with both heart and responsibility.`,
        },
        {
          icon: CalendarDays,
          title: `Salyna, age ${salynaAge}`,
          body: `You were born on ${formatDate(SALYNA_BIRTHDAY)} and somehow carry both softness and fierce ambition so naturally.`,
        },
        {
          icon: Heart,
          title: "Our first anniversary",
          body: `We started dating on ${formatDate(RELATIONSHIP_START)}, which means our first anniversary will be on ${formatDate(FIRST_ANNIVERSARY)}.`,
        },
      ],
      note:
        "This timeline now follows your real starting date, because the beginning of your story deserves to be told correctly.",
    },
    {
      id: "adore",
      label: "Adoration",
      eyebrow: "Chapter Four",
      title: "The Things I Love About You",
      subtitle: "Not just the way you are loved, but the way you are built.",
      intro:
        "I love more than your smile or your sweetness. I love the structure underneath: the mind, the discipline, the courage, the grace. You are beautiful in ways that keep unfolding.",
      quote:
        "You are the kind of person who makes admiration feel as natural as breathing.",
      chips: ["Brilliant", "Tender", "Disciplined", "Radiant"],
      photos: [
        {
          src: "/memories/adore-01.svg",
          alt: "Adoration placeholder one for Bondeth and Salyna",
          caption: "What I See",
          hint: "This is a good place for one of your most beautiful portraits of Salyna.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/adore-02.svg",
          alt: "Adoration placeholder two for Bondeth and Salyna",
          caption: "What I Treasure",
          hint: "Use another image that feels graceful, bright, and deeply personal.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/10]",
        },
      ],
      cards: [
        {
          icon: GraduationCap,
          title: "Your ambition",
          body: "The way you commit to your future is deeply attractive. You make hard things look meaningful.",
        },
        {
          icon: Heart,
          title: "Your softness",
          body: "There is warmth in you that makes distance feel less sharp. You know how to comfort without losing your own strength.",
        },
        {
          icon: Sparkles,
          title: "Your presence",
          body: "You leave a brightness behind in conversations, in memories, and in the quiet after I think about you.",
        },
      ],
      note:
        "You are not simply someone I miss. You are someone I deeply respect, which makes loving you feel even more beautiful.",
    },
    {
      id: "future",
      label: "Future",
      eyebrow: "Chapter Five",
      title: "The Future Chapter",
      subtitle: "One day the distance will only be part of our origin story.",
      intro:
        "I keep imagining the ordinary things we have not had enough of yet: longer walks, easier laughter, shared meals, small routines, no countdown to the next goodbye. I want the everyday with you, not only the dramatic parts.",
      quote:
        "Until we close the distance, I will keep loving you in patient, practical, and beautiful ways.",
      chips: ["Future reunions", "More anniversaries", "A life with room for both dreams"],
      photos: [
        {
          src: "/memories/future-01.svg",
          alt: "Future placeholder one for Bondeth and Salyna",
          caption: "The Reunion",
          hint: "An airport or together-again picture will feel powerful in this spot later.",
          cardClassName: "col-span-2",
          frameClassName: "aspect-[16/10]",
        },
        {
          src: "/memories/future-02.svg",
          alt: "Future placeholder two for Bondeth and Salyna",
          caption: "Future Home",
          hint: "You can replace this with a dream-life photo, a city view, or a place meaningful to both of you.",
          frameClassName: "aspect-[4/5]",
        },
        {
          src: "/memories/future-03.svg",
          alt: "Future placeholder three for Bondeth and Salyna",
          caption: "More Chapters",
          hint: "Save this slot for a future anniversary, date, or memory you have not made yet.",
          frameClassName: "aspect-[4/5]",
        },
      ],
      cards: [
        {
          icon: Plane,
          title: "The reunion I imagine",
          body: "An airport, a real embrace, and the kind of silence that comes when finally being together says enough on its own.",
        },
        {
          icon: MapPin,
          title: "The life I imagine",
          body: "A shared place in the world where your ambition and my work can both keep growing without asking us to stay apart.",
        },
        {
          icon: Heart,
          title: "The promise I keep",
          body: "No matter how much more our story asks from us, I want to keep meeting it with loyalty, gentleness, and effort.",
        },
      ],
      note:
        "This is my little reminder that the future is not empty space. It is a room I am already decorating with hope for us.",
    },
  ];

  const page = pages[currentPage];
  const theme = PAGE_THEMES[currentPage % PAGE_THEMES.length];
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;

  const goToPage = (nextPage: number) => {
    startTransition(() => {
      setCurrentPage(nextPage);
    });
  };

  const handleKeyboardNavigation = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && !isLastPage) {
      goToPage(currentPage + 1);
    }

    if (event.key === "ArrowLeft" && !isFirstPage) {
      goToPage(currentPage - 1);
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardNavigation);

    return () => {
      window.removeEventListener("keydown", handleKeyboardNavigation);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#fff1f6_0%,#ffd7e5_45%,#ffc3db_100%)] px-4 py-6 text-zinc-900 sm:px-6 lg:px-10 lg:py-8">
      <div className="romance-grid pointer-events-none absolute inset-0 opacity-35" />
      <FloatingHearts />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl flex-col gap-8">
        <section className="flex flex-col gap-4 pt-4 text-balance lg:max-w-3xl lg:pt-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/65 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-rose-700 shadow-[0_10px_30px_rgba(190,24,93,0.08)] backdrop-blur-md">
            <Heart className="size-3.5 fill-current" />
            Bondeth & Salyna
          </div>

          <h1 className="max-w-4xl font-heading text-5xl leading-none tracking-tight text-rose-950 sm:text-6xl lg:text-7xl">
            A modern love book for your long-distance story.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-rose-950/75 sm:text-lg">
            This keepsake is designed like a digital scrapbook in motion: soft pink
            light, floating hearts, and pages you can flip through whenever you miss
            each other.
          </p>
        </section>

        <section className="grid flex-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-4 rounded-[2rem] border border-white/55 bg-white/45 p-4 shadow-[0_24px_80px_rgba(190,24,93,0.1)] backdrop-blur-xl lg:p-5">
            <div className="rounded-[1.5rem] bg-white/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-rose-500">
                Page Index
              </p>
              <p className="mt-2 text-sm leading-6 text-rose-950/70">
                Tap a chapter or use the left and right arrow keys to turn the pages.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {pages.map((entry, index) => {
                const isActive = index === currentPage;

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => goToPage(index)}
                    className={cn(
                      "rounded-[1.4rem] border px-4 py-3 text-left transition-all",
                      isActive
                        ? "border-rose-300 bg-rose-100/90 shadow-[0_18px_40px_rgba(225,29,72,0.14)]"
                        : "border-white/60 bg-white/60 hover:-translate-y-0.5 hover:bg-white/80"
                    )}
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-rose-500">
                      Page {index + 1}
                    </p>
                    <p className="mt-1 font-heading text-2xl text-rose-950">
                      {entry.label}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-rose-950/68">
                      {entry.title}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-3 rounded-[1.5rem] bg-rose-950 p-4 text-rose-50 shadow-[0_18px_48px_rgba(76,5,25,0.25)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200">
                Love Notes
              </p>
              <div className="grid gap-3 text-sm leading-6 text-rose-100/88">
                <p>{daysTogether} days of choosing each other.</p>
                <p>
                  Your story started on {formatDate(RELATIONSHIP_START)}, and your first
                  anniversary will arrive on {formatDate(FIRST_ANNIVERSARY)}.
                </p>
                <p>15 placeholder photo slots are ready for you in the album.</p>
              </div>
            </div>
          </aside>

          <div className="relative flex min-h-[620px] items-center justify-center">
            <div className="absolute inset-x-6 top-8 h-[88%] rounded-[2.2rem] bg-white/25 shadow-[0_32px_120px_rgba(190,24,93,0.12)] backdrop-blur-md" />
            <div className="absolute inset-x-3 top-4 h-[92%] rounded-[2.4rem] bg-white/35 shadow-[0_32px_120px_rgba(190,24,93,0.16)] backdrop-blur-md" />

            <article
              key={page.id}
              className={cn(
                "page-card animate-page-enter relative w-full overflow-hidden rounded-[2.6rem] border bg-gradient-to-br p-1 shadow-[0_36px_120px_rgba(136,19,55,0.18)]",
                theme.edge,
                theme.frame
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-90",
                  theme.halo
                )}
              />
              <div className="paper-sheen absolute inset-0" />

              <div className="relative rounded-[2.25rem] border border-white/65 bg-white/38 p-5 backdrop-blur-md sm:p-6 lg:p-8">
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-rose-950 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-rose-50">
                        {page.eyebrow}
                      </span>
                      <span className="rounded-full border border-white/70 bg-white/66 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-rose-600">
                        Page {currentPage + 1} of {pages.length}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h2 className="max-w-2xl font-heading text-4xl leading-none tracking-tight text-rose-950 sm:text-5xl lg:text-[3.75rem]">
                        {page.title}
                      </h2>
                      <p className="max-w-2xl text-lg leading-8 text-rose-950/72">
                        {page.subtitle}
                      </p>
                    </div>

                    <p className="max-w-2xl text-base leading-8 text-rose-950/78 sm:text-lg">
                      {page.intro}
                    </p>

                    <blockquote className="rounded-[1.8rem] border border-white/70 bg-white/62 p-5 font-heading text-2xl leading-9 text-rose-900 shadow-[0_18px_40px_rgba(190,24,93,0.08)]">
                      “{page.quote}”
                    </blockquote>

                    <div className="flex flex-wrap gap-3">
                      {page.chips.map((chip) => (
                        <span
                          key={chip}
                          className={cn(
                            "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]",
                            theme.chip
                          )}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="rounded-[1.6rem] border border-dashed border-rose-300/75 bg-white/52 px-5 py-4 text-sm leading-6 text-rose-950/70">
                      This chapter includes local placeholder artwork so you can replace it
                      later with real photos without touching the layout.
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <MemoryGallery photos={page.photos} />

                    {page.cards.map((card) => (
                      <div
                        key={card.title}
                        className={cn(
                          "rounded-[1.8rem] border border-white/68 p-5 shadow-[0_20px_45px_rgba(190,24,93,0.08)] backdrop-blur-md",
                          theme.card
                        )}
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-2xl bg-rose-950 p-3 text-rose-50 shadow-[0_10px_24px_rgba(136,19,55,0.22)]">
                            <card.icon className="size-5" />
                          </div>
                          <h3 className="font-heading text-2xl text-rose-950">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-7 text-rose-950/74 sm:text-[0.98rem]">
                          {card.body}
                        </p>
                      </div>
                    ))}

                    <div className="rounded-[1.8rem] border border-dashed border-rose-300/80 bg-white/54 p-5 text-sm leading-7 text-rose-950/72">
                      {page.note}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-white/55 bg-white/48 px-5 py-4 shadow-[0_24px_80px_rgba(190,24,93,0.1)] backdrop-blur-xl sm:flex-row sm:items-center">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500">
              Chapter Progress
            </p>
            <div className="flex flex-wrap gap-2">
              {pages.map((entry, index) => (
                <button
                  key={entry.id}
                  type="button"
                  aria-label={`Go to ${entry.label}`}
                  onClick={() => goToPage(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    index === currentPage
                      ? "w-14 bg-rose-500"
                      : "w-7 bg-rose-200 hover:bg-rose-300"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-full border-rose-300/75 bg-white/75 px-6 text-rose-700 hover:bg-rose-50"
              onClick={() => goToPage(Math.max(0, currentPage - 1))}
              disabled={isFirstPage}
            >
              <ArrowLeft className="size-4" />
              Previous Page
            </Button>

            <Button
              type="button"
              className="h-12 rounded-full bg-rose-950 px-6 text-rose-50 hover:bg-rose-900"
              onClick={() => goToPage(Math.min(pages.length - 1, currentPage + 1))}
              disabled={isLastPage}
            >
              Next Page
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </footer>
      </div>
    </main>
  );
}
