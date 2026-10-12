import { social } from "@/data/social";
import { SocialIcon } from "@/components/layout/SocialIcons";

export function SocialRail() {
  return (
    <aside
      className="pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
      aria-label="Social profiles"
    >
      <ul className="pointer-events-auto flex flex-col gap-3">
        {social.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target={item.icon === "email" ? undefined : "_blank"}
              rel={item.icon === "email" ? undefined : "noreferrer"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-soft transition-colors hover:border-ink hover:text-ink"
              aria-label={item.name}
            >
              <SocialIcon icon={item.icon} className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
