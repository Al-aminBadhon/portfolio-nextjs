import { person } from "@/app/resources/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--apple-border)] bg-[var(--apple-bg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="text-sm text-[var(--apple-graphite)]/70">
          © {year} {person.name}
        </p>
        <p className="text-xs text-[var(--apple-graphite)]/50">
          Full-Stack Engineer · Canada
        </p>
      </div>
    </footer>
  );
}
