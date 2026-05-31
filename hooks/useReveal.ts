"use client";
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reveals = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (reveals.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const d = el.dataset.d;
          if (d) el.style.animationDelay = `${parseInt(d, 10) * 120}ms`;
          el.classList.add("in");
          obs.unobserve(el);
        });
      },
      { threshold }
    );

    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
