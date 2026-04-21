import { Heart } from "lucide-react";

import { HEARTS } from "./constants";

export function FloatingHearts() {
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
