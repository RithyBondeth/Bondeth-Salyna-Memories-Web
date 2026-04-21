import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";

import { HEARTS } from "./constants";

export function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Atmospheric orbs */}
      <div className="absolute left-[-8%] top-[-4%] h-80 w-80 rounded-full bg-rose-300/35 blur-3xl animate-soft-float" />
      <div
        className="absolute right-[-6%] top-[16%] h-96 w-96 rounded-full bg-fuchsia-200/30 blur-3xl animate-soft-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[-8%] left-[18%] h-[28rem] w-[28rem] rounded-full bg-pink-200/28 blur-3xl animate-soft-float"
        style={{ animationDelay: "2.8s" }}
      />
      <div
        className="absolute right-[10%] top-[-6%] h-72 w-72 rounded-full bg-rose-200/40 blur-3xl animate-soft-float"
        style={{ animationDelay: "3.6s" }}
      />
      <div
        className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-amber-100/22 blur-3xl animate-soft-float"
        style={{ animationDelay: "4.4s" }}
      />
      <div
        className="absolute left-[40%] top-[-10%] h-64 w-64 rounded-full bg-pink-300/25 blur-3xl animate-soft-float"
        style={{ animationDelay: "5.2s" }}
      />

      {HEARTS.map((heart, index) => (
        <div
          key={index}
          className={cn(
            "absolute will-change-transform",
            heart.containerClassName ?? "text-pink-300/55 animate-heart-drift",
          )}
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          <Heart
            fill="currentColor"
            className={cn(
              "drop-shadow-[0_8px_24px_rgba(244,63,94,0.25)]",
              heart.iconClassName,
            )}
            style={{ width: heart.size, height: heart.size }}
          />
        </div>
      ))}
    </div>
  );
}
