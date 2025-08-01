// components/ScrollReveal.tsx
"use client";

import { useState, useRef, useEffect } from "react";

interface ScrollRevealProps {
  offset?: number;
  className?: string;
  children: (isActive: boolean) => React.ReactNode;
}

export function ScrollReveal({
  offset = 0,
  className,
  children,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: `0px 0px -${offset}px 0px`,
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={ref} className={className}>
      {children(isActive)}
    </div>
  );
}
