"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

type ClickHeart = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  tx: number;
};

const COLORS = [
  "text-rose-400",
  "text-pink-400",
  "text-fuchsia-400",
  "text-rose-500",
  "text-pink-300",
];

export function ClickHearts() {
  const [hearts, setHearts] = useState<ClickHeart[]>([]);
  const counterRef = useRef(0);

  const spawnHeart = useCallback((e: MouseEvent) => {
    const id = ++counterRef.current;
    const size = 13 + Math.random() * 16;
    const tx = (Math.random() - 0.5) * 40;

    setHearts((prev) => [
      ...prev,
      {
        id,
        x: e.clientX,
        y: e.clientY,
        size,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        tx,
      },
    ]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1150);
  }, []);

  useEffect(() => {
    document.addEventListener("click", spawnHeart);
    return () => document.removeEventListener("click", spawnHeart);
  }, [spawnHeart]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`animate-click-heart absolute ${heart.color}`}
          style={{
            left: heart.x - heart.size / 2,
            top: heart.y - heart.size / 2,
            "--tx": `${heart.tx}px`,
          } as React.CSSProperties}
        >
          <Heart
            fill="currentColor"
            style={{ width: heart.size, height: heart.size }}
          />
        </div>
      ))}
    </div>
  );
}
