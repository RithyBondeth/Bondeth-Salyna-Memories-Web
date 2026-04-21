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
          "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-rose-700 shadow-[0_14px_38px_rgba(190,24,93,0.2)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white",
          !hasStarted && "motion-safe:animate-pulse",
        )}
      >
        {isPlaying ? (
          <Pause className="size-3.5 fill-current" />
        ) : (
          <Music2 className="size-3.5" />
        )}
        <span>{isPlaying ? "Pause" : "Play song"}</span>
      </button>
    </>
  );
}
