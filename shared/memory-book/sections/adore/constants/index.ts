import {
  Award,
  BookOpen,
  Brain,
  Heart,
  Shield,
  Sparkles,
  Star,
  UserCheck,
} from "lucide-react";

import type { BookPage } from "@/components/memory-book/types";

export function createAdorePage(): BookPage {
  return {
    id: "adore",
    label: "Adoration",
    eyebrow: "Chapter Four",
    title: "Things I Notice About You",
    subtitle:
      "Written down so you know I see them \u2014 not just once, but always.",
    intro:
      "Loving you started with the way you look, but it settled somewhere much deeper. You are the most beautiful person I have ever seen, and that beauty runs so far beyond your face. You are brilliant, hardworking, mature, and honest. You carry yourself with a grace that makes me want to be better every single day.",
    quote: "The more I know you, the more beautiful you become to me.",
    photos: [
      {
        src: "/assets/adore/adore-01.jpg",
        alt: "The most beautiful person I know",
        caption: "My everything",
        frameClassName: "aspect-[3/4]",
      },
      {
        src: "/assets/adore/adore-02.JPG",
        alt: "My smart girl",
        caption: "My smart girl",
        frameClassName: "aspect-[3/4]",
      },
      {
        src: "/assets/adore/adore-03.jpg",
        alt: "My beautiful Salyna",
        caption: "My beautiful",
        frameClassName: "aspect-[3/4]",
      },
      {
        src: "/assets/adore/adore-04.jpg",
        alt: "Always you",
        caption: "Always you",
        frameClassName: "aspect-[3/4]",
      },
    ],
    cards: [
      {
        icon: Sparkles,
        title: "Your beauty",
        body: "You are stunning, Salyna. Every time I see you, something in my chest shifts. But what caught me even more than your face is the beauty in how you carry yourself, how you smile, how you light up a room without trying.",
      },
      {
        icon: Brain,
        title: "Your intelligence",
        body: "You are so smart. Not just in the way you study, but in the way you think, the way you reason, the way you see the world. You are an outstanding student chasing your doctorate, and I am so proud of every hour you put into your work.",
      },
      {
        icon: Star,
        title: "Your hardworking spirit",
        body: "I see how hard you work. The late nights, the early mornings, the dedication to your studies while handling everything else life throws at you. You never complain, you just keep going. That strength amazes me.",
      },
      {
        icon: Award,
        title: "Your maturity",
        body: "You carry yourself with a wisdom beyond your years. The way you handle situations, the way you think before you speak, the way you balance emotion with reason \u2014 you are more mature than anyone I know.",
      },
      {
        icon: Shield,
        title: "Your mindset",
        body: "You have the best mindset. You stay positive even when things are hard. You approach life with a clarity and strength that makes me want to match that energy. You see things clearly and handle them gracefully.",
      },
      {
        icon: Heart,
        title: "Your honesty",
        body: "You are one of the most honest people I have ever met. You say what you mean and mean what you say. There is no pretense with you, no games. Just real, raw truth, and that is everything to me.",
      },
      {
        icon: UserCheck,
        title: "Your loyalty",
        body: "Once you love someone, you love them completely. You do not half-way anything. Your loyalty is unwavering, and knowing that someone as incredible as you chooses me every day is the greatest gift.",
      },
      {
        icon: BookOpen,
        title: "Your respect",
        body: "You are respectful \u2014 to me, to your family, to everyone around you. You carry yourself with dignity and treat people the way they deserve to be treated. That character is rare and beautiful.",
      },
    ],
    note: "Salyna, you are everything. Beautiful inside and out. Smart and hardworking. Mature beyond your years with a mindset that inspires me. Honest, loyal, respectful. I fall more in love with who you are every single day.",
  };
}
