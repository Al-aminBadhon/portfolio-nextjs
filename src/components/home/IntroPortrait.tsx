import Image from "next/image";
import { introPortrait } from "@/config/hero-visual";
import { cn } from "@/lib/cn";

export function IntroPortrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full border border-line bg-surface shadow-soft sm:max-w-[320px]",
        className,
      )}
    >
      <Image
        src={introPortrait.src}
        alt={introPortrait.alt}
        width={introPortrait.width}
        height={introPortrait.height}
        className="h-full w-full object-cover"
        style={{ objectPosition: introPortrait.objectPosition }}
        sizes="(min-width: 640px) 320px, 280px"
        priority={false}
      />
    </div>
  );
}
