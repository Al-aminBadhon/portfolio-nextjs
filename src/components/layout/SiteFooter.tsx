import { profile } from "@/data/profile";
import { social } from "@/data/social";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/layout/SocialIcons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} · {profile.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-3" aria-label="Social links">
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.icon === "email" ? undefined : "_blank"}
                rel={item.icon === "email" ? undefined : "noreferrer"}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:border-ink hover:text-ink"
              >
                <SocialIcon icon={item.icon} className="h-3.5 w-3.5" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
