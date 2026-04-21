"use client";

import {
  useLayoutEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

type AnimatedTextProps<T extends ElementType> = {
  as?: T;
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  split?: "word" | "char";
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

export function AnimatedText<T extends ElementType = "div">({
  as,
  text,
  className,
  delay = 0,
  duration = 0.72,
  stagger = 0.04,
  split = "word",
  ...props
}: AnimatedTextProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const fragments = rootRef.current?.querySelectorAll("[data-text-fragment]");

      if (!fragments?.length) {
        return;
      }

      gsap.fromTo(
        fragments,
        {
          y: 22,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: "power3.out",
        },
      );
    }, rootRef);

    return () => {
      context.revert();
    };
  }, [delay, duration, split, stagger, text]);

  const fragments = split === "char" ? Array.from(text) : text.split(" ");

  return (
    <Component
      ref={rootRef}
      aria-label={text}
      className={className}
      {...props}
    >
      <span aria-hidden="true">
        {fragments.map((fragment, index) => {
          if (split === "char" && fragment === " ") {
            return <span key={`space-${index}`} className="inline-block w-[0.35em]" />;
          }

          return (
            <span key={`${fragment}-${index}`} className="inline-block align-top">
              <span className="inline-block overflow-hidden align-top">
                <span data-text-fragment className={cn("inline-block will-change-transform")}>
                  {fragment}
                </span>
              </span>
              {split === "word" && index < fragments.length - 1 ? (
                <span className="inline-block w-[0.28em]" />
              ) : null}
            </span>
          );
        })}
      </span>
    </Component>
  );
}
