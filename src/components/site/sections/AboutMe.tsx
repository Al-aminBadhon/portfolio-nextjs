import Image from "next/image";
import { about, person, social } from "@/app/resources/content";
import { Section } from "./Section";

export function AboutMe() {
  return (
    <Section id="about-me" eyebrow="Profile" title="About Me">
      <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
        <aside className="flex flex-col items-start gap-5">
          {about.avatar.display && (
            <div className="relative h-36 w-36 overflow-hidden border border-[var(--apple-border)] bg-[var(--apple-aluminum)]">
              <Image
                src={person.avatar}
                alt={person.name}
                fill
                className="object-cover"
                sizes="144px"
                priority
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-[var(--apple-ink)]">
              {person.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--apple-graphite)]/75">
              {person.role}
            </p>
            <p className="mt-1 text-xs text-[var(--apple-graphite)]/50">
              Canada · {person.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {social
              .filter((item: { link: string }) => Boolean(item.link))
              .map((item: { name: string; link: string }) => (
                <a
                  key={item.name}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="apple-focus border border-[var(--apple-border)] px-3 py-1.5 text-xs font-medium text-[var(--apple-graphite)] transition-colors hover:border-[var(--apple-ink)] hover:text-[var(--apple-ink)]"
                >
                  {item.name}
                </a>
              ))}
          </div>
          {about.calendar.display && (
            <a
              href={about.calendar.link}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-focus inline-flex items-center bg-[var(--apple-ink)] px-4 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              Schedule a call
            </a>
          )}
        </aside>

        <div className="space-y-12">
          {about.intro.display && (
            <div>
              <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[var(--apple-graphite)]/50">
                {about.intro.title}
              </h4>
              <div className="max-w-2xl text-base leading-relaxed text-[var(--apple-graphite)] md:text-[17px]">
                {about.intro.description}
              </div>
            </div>
          )}

          {about.studies.display && (
            <div>
              <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--apple-graphite)]/50">
                {about.studies.title}
              </h4>
              <ul className="space-y-3">
                {about.studies.institutions.map(
                  (school: {
                    name: string;
                    description: string;
                    cgpa?: string;
                    Duration?: string;
                  }) => (
                    <li
                      key={school.name}
                      className="border border-[var(--apple-border)] bg-[var(--apple-bg)] px-5 py-4"
                    >
                      <p className="font-semibold text-[var(--apple-ink)]">
                        {school.name}
                      </p>
                      <p className="mt-1 text-sm text-[var(--apple-graphite)]/75">
                        {school.description}
                        {school.cgpa ? ` · CGPA ${school.cgpa}` : ""}
                        {school.Duration ? ` · ${school.Duration}` : ""}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {about.technical.display && (
            <div>
              <h4 className="mb-6 text-xs font-medium uppercase tracking-[0.12em] text-[var(--apple-graphite)]/50">
                {about.technical.title}
              </h4>
              <div className="grid gap-6 sm:grid-cols-2">
                {about.technical.skills.map(
                  (group: {
                    category: string;
                    technologies: { name: string; icon: string }[];
                  }) => (
                    <div
                      key={group.category}
                      className="border border-[var(--apple-border)] p-5"
                    >
                      <p className="mb-4 text-sm font-semibold text-[var(--apple-ink)]">
                        {group.category}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {group.technologies.map(
                          (tech: { name: string; icon: string }) => (
                            <li
                              key={`${group.category}-${tech.name}-${tech.icon}`}
                              className="flex items-center gap-2 border border-[var(--apple-border)] bg-[var(--apple-aluminum)] px-2.5 py-1.5 text-xs text-[var(--apple-graphite)]"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={`/images/logo/${tech.icon}`}
                                alt=""
                                width={14}
                                height={14}
                                className="opacity-80"
                              />
                              {tech.name}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
