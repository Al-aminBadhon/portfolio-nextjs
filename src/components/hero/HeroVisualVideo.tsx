import type { HeroVisualConfig } from "@/config/hero-visual";
import { HeroVisualImage } from "@/components/hero/HeroVisualImage";

export function HeroVisualVideo({
  config,
  priority = false,
}: {
  config: HeroVisualConfig;
  priority?: boolean;
}) {
  if (!config.video.src) {
    return <HeroVisualImage config={config} priority={priority} />;
  }

  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={config.video.poster}
      aria-label={config.image.alt}
    >
      <source src={config.video.src} />
    </video>
  );
}
