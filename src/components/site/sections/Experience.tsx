import type { ReactNode } from "react";
import { about } from "@/app/resources/content";
import { Section } from "./Section";

export function Experience() {
  if (!about.work.display) return null;

  return (
    <Section
      id="experience"
      eyebrow="Career"
      title={about.work.title}
      band
    >
      <ol className="space-y-0 border border-[var(--apple-border)] bg-[var(--apple-bg)]">
        {about.work.experiences.map(
          (
            job: {
              company: string;
              timeframe: string;
              role: string;
              location?: string;
              achievements: ReactNode[];
            },
            index: number
          ) => (
            <li
              key={`${job.company}-${job.timeframe}`}
              className={`grid gap-4 px-5 py-8 md:grid-cols-[220px_1fr] md:gap-10 md:px-8 ${
                index !== about.work.experiences.length - 1
                  ? "border-b border-[var(--apple-border)]"
                  : ""
              }`}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--apple-graphite)]/50">
                  {job.timeframe}
                </p>
                {job.location && (
                  <p className="mt-2 text-xs text-[var(--apple-graphite)]/55">
                    {job.location}
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--apple-ink)]">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-[var(--apple-graphite)]/70">
                  {job.company}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-[var(--apple-graphite)]/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        )}
      </ol>
    </Section>
  );
}
