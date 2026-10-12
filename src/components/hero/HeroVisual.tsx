import { resolveHeroVisual } from "@/config/hero-visual";
import { HeroVisualFrame } from "@/components/hero/HeroVisualFrame";
import { HeroVisualImage } from "@/components/hero/HeroVisualImage";
import { HeroVisualVideo } from "@/components/hero/HeroVisualVideo";
import { HeroVisualSpline } from "@/components/hero/HeroVisualSpline";

export function HeroVisual({
  pageKey,
  priority = false,
}: {
  pageKey?: string;
  priority?: boolean;
}) {
  const config = resolveHeroVisual(pageKey);

  let visual = <HeroVisualImage config={config} priority={priority} />;
  if (config.mode === "video") {
    visual = <HeroVisualVideo config={config} priority={priority} />;
  }
  if (config.mode === "spline") {
    visual = <HeroVisualSpline config={config} />;
  }

  return <HeroVisualFrame config={config}>{visual}</HeroVisualFrame>;
}
