import { profile } from "@/data/profile";

export type HeroVisualMode = "portrait" | "image" | "video" | "spline";
export type HeroVisualShape = "circle" | "rounded" | "card";

export type HeroVisualConfig = {
  mode: HeroVisualMode;
  /**
   * CSS object-position for the photo crop.
   * Examples: "center 20%", "50% 18%", "center top".
   */
  objectPosition: string;
  objectFit: "cover" | "contain";
  shape: HeroVisualShape;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
  };
  video: {
    src: string | null;
    poster: string;
  };
  spline: {
    /** Spline public embed / scene URL. Prefer NEXT_PUBLIC_SPLINE_SCENE_URL. */
    embedUrl: string;
  };
  frame: {
    aspect: string;
    maxWidth: number;
    card: boolean;
  };
  motion: {
    float: boolean;
  };
};

const abstractVisual = {
  src: "/images/hero/hero-visual.webp",
  alt: "Minimal abstract technical sculpture with cobalt wireframe accents",
  width: 1200,
  height: 1200,
  blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoQABAABABoJaQAAud+zNKWz2QA/urU680qR4LZ4FXZmu76GxJhUttbAKAAAA==",
} as const;

/** Black robot scene used on the personal-brand hero (override via env). */
const defaultSplineScene =
  "https://prod.spline.design/zXwuu1Espc7xVmTQ/scene.splinecode";

/** Top-of-page hero visual. Spline robot by default; swap via env or mode. */
export const heroVisual: HeroVisualConfig = {
  mode: "spline",
  objectPosition: "center",
  objectFit: "cover",
  shape: "card",
  image: { ...abstractVisual },
  video: {
    src: null,
    poster: abstractVisual.src,
  },
  spline: {
    embedUrl: process.env.NEXT_PUBLIC_SPLINE_SCENE_URL || defaultSplineScene,
  },
  frame: {
    /** Wider than tall so the robot's full arm span fits (no clipped hands). */
    aspect: "5 / 4",
    maxWidth: 620,
    card: false,
  },
  motion: {
    float: false,
  },
};

/** Optional per-page overrides. Leave empty until you need page-specific visuals. */
export const pageHeroVisuals: Partial<
  Record<string, Partial<HeroVisualConfig>>
> = {};

export function resolveHeroVisual(pageKey?: string): HeroVisualConfig {
  if (!pageKey || !pageHeroVisuals[pageKey]) {
    return heroVisual;
  }
  return {
    ...heroVisual,
    ...pageHeroVisuals[pageKey],
    image: { ...heroVisual.image, ...pageHeroVisuals[pageKey]?.image },
    video: { ...heroVisual.video, ...pageHeroVisuals[pageKey]?.video },
    spline: { ...heroVisual.spline, ...pageHeroVisuals[pageKey]?.spline },
    frame: { ...heroVisual.frame, ...pageHeroVisuals[pageKey]?.frame },
    motion: { ...heroVisual.motion, ...pageHeroVisuals[pageKey]?.motion },
  };
}

/** Portrait shown beside the Introduction section. */
export const introPortrait = {
  src: profile.avatar,
  alt: `${profile.name}, ${profile.role}`,
  width: 565,
  height: 603,
  objectPosition: "50% 18%",
} as const;
