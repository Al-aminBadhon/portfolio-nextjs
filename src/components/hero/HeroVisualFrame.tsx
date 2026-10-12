import { cn } from "@/lib/cn";
import type { HeroVisualConfig } from "@/config/hero-visual";

const shapeClass: Record<HeroVisualConfig["shape"], string> = {
  circle: "rounded-full border border-line bg-surface shadow-soft",
  rounded: "rounded-[2rem] border border-line bg-surface shadow-soft",
  card: "rounded-[2rem] border border-line bg-surface shadow-soft",
};

export function HeroVisualFrame({
  config,
  children,
}: {
  config: HeroVisualConfig;
  children: React.ReactNode;
}) {
  const isSpline = config.mode === "spline";
  const transparent = isSpline || !config.frame.card;
  const framed = !transparent && (config.frame.card || config.shape !== "card");

  return (
    <div
      className={cn(
        "relative mx-auto w-full bg-transparent",
        isSpline ? "overflow-visible" : "overflow-hidden",
        framed && shapeClass[config.shape],
        config.motion.float && "hero-float",
      )}
      style={{
        // Spline: fill the column; leave a little side margin via max width.
        maxWidth: isSpline
          ? `min(100%, ${config.frame.maxWidth}px)`
          : config.frame.maxWidth,
        aspectRatio: config.frame.aspect,
      }}
    >
      {children}
    </div>
  );
}
