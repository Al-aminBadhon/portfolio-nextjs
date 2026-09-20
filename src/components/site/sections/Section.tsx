import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  band?: boolean;
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  band = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`apple-section border-b border-[var(--apple-border)] ${
        band ? "bg-[var(--apple-aluminum)]" : "bg-[var(--apple-bg)]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <header className="mb-12 max-w-2xl md:mb-16">
          {eyebrow && (
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--apple-graphite)]/50">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--apple-ink)] md:text-3xl">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
