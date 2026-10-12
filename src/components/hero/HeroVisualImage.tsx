import Image from "next/image";
import type { HeroVisualConfig } from "@/config/hero-visual";

export function HeroVisualImage({
  config,
  priority = false,
}: {
  config: HeroVisualConfig;
  priority?: boolean;
}) {
  return (
    <Image
      src={config.image.src}
      alt={config.image.alt}
      width={config.image.width}
      height={config.image.height}
      priority={priority}
      placeholder={config.image.blurDataURL?.startsWith("data:") ? "blur" : undefined}
      blurDataURL={
        config.image.blurDataURL?.startsWith("data:")
          ? config.image.blurDataURL
          : undefined
      }
      className="h-full w-full"
      style={{
        objectFit: config.objectFit,
        objectPosition: config.objectPosition,
      }}
    />
  );
}
