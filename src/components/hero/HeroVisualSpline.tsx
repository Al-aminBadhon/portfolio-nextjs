"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { HeroVisualConfig } from "@/config/hero-visual";
import { HeroVisualImage } from "@/components/hero/HeroVisualImage";

const SplineRobot = dynamic(() => import("./SplineRobot"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 animate-pulse bg-bg" aria-hidden />
  ),
});

function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

export function HeroVisualSpline({ config }: { config: HeroVisualConfig }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!config.spline.embedUrl || reduceMotion) {
    return <HeroVisualImage config={config} />;
  }

  return (
    <div ref={hostRef} className="relative h-full w-full">
      {!visible && (
        <div className="absolute inset-0 animate-pulse bg-bg" aria-hidden />
      )}
      {visible ? <SplineRobot scene={config.spline.embedUrl} /> : null}
    </div>
  );
}
