"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export const SectionTransition = ({
  children,
  className = "",
  delay = 0,
  id,
}: SectionTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </section>
  );
};
