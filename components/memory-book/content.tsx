import {
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

import {
  BONDETH_BIRTHDAY,
  FIRST_ANNIVERSARY,
  formatDate,
  RELATIONSHIP_START,
  SALYNA_BIRTHDAY,
} from "./dates";
import type { BookPage, GalleryCategory, RelationshipMetrics } from "./types";

export function createBookPages(metrics: RelationshipMetrics): BookPage[] {
  const { bondethAge, salynaAge, daysTogether, monthsTogether } = metrics;

  return [
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
    },
    {
      id: "dreams",
      label: "Two Dreams",
      eyebrow: "Chapter Two",
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
      eyebrow: "Chapter Three",
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
      eyebrow: "Chapter Four",
      title: "Our Dates, Written In Pink",
      subtitle: "The calendar became romantic the moment it started holding us.",
      intro:
        "Every love story needs a few anchor points. These dates feel like pressed flowers to me now, saved carefully because they carry parts of who we are.",
      quote:
        "Even time feels softer when I measure it with your name beside mine.",
      chips: [
        `${daysTogether} days of us`,
        `${monthsTogether} months together`,
        "A timeline worth keeping",
      ],
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
      eyebrow: "Chapter Five",
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
      eyebrow: "Chapter Six",
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
}

export function getTotalPhotoSlots(pages: BookPage[]) {
  return pages.reduce((total, page) => {
    const storyPhotos = page.photos.length;
    const categorizedPhotos =
      page.galleryCategories?.reduce((sum, category) => sum + category.photos.length, 0) ?? 0;

    return total + storyPhotos + categorizedPhotos;
  }, 0);
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
