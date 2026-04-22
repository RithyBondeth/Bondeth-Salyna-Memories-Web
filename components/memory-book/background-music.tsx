"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";

import { cn } from "@/lib/utils";

const MUSIC_SRC = "/music/love-theme.mp3";
const DEFAULT_VOLUME = 0.35;

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const attemptStart = useCallback(() => {
    const target = audioRef.current;
    if (!target || !target.paused) return;
    target.play()
      .then(() => {
        setHasStarted(true);
      })
      .catch(() => {
        // autoplay blocked - will try on user interaction
      });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = DEFAULT_VOLUME;

    const handleError = () => setIsAvailable(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("error", handleError);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  useEffect(() => {
    const onFirstInteraction = () => attemptStart();
    document.addEventListener("click", onFirstInteraction, { once: true });
    document.addEventListener("keydown", onFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("click", onFirstInteraction);
      document.removeEventListener("keydown", onFirstInteraction);
    };
  }, [attemptStart]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setHasStarted(true))
        .catch(() => setIsAvailable(false));
    } else {
      audio.pause();
    }
  };

  if (!isAvailable) return null;

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" aria-hidden="true" />
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className={cn(
          "fixed right-4 z-50 inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-gradient-to-r from-white/88 to-rose-50/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-rose-600 shadow-[0_10px_32px_rgba(190,24,93,0.18)] backdrop-blur-md transition-all active:scale-95 hover:-translate-y-0.5 hover:from-white hover:to-rose-50 hover:shadow-[0_14px_38px_rgba(190,24,93,0.24)]",
          "bottom-[6rem] lg:bottom-6 lg:right-6",
          !hasStarted && "motion-safe:animate-pulse",
        )}
      >
        {isPlaying ? (
          <span className="flex h-3.5 items-end gap-px" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="animate-music-bar w-[3px] rounded-full bg-rose-500"
                style={{
                  height: "14px",
                  animationDelay: `${i * 0.13}s`,
                }}
              />
            ))}
          </span>
        ) : (
          <Music2 className="size-3.5" />
        )}
        <span>{isPlaying ? "Pause" : "Play song"}</span>
      </button>
    </>
  );
}
