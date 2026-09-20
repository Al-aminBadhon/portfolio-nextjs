import { portfolio } from "@/app/resources/content";
import { Section } from "./Section";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  version?: string;
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  image?: string;
};

export function ProjectsVault() {
  const projects = portfolio.projects as Project[];

  return (
    <Section id="projects" eyebrow="Deployments" title="Projects Vault">
      <div className="border border-[var(--apple-border)]">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`grid gap-4 px-5 py-8 md:grid-cols-[1fr_auto] md:items-start md:gap-8 md:px-8 ${
              index !== projects.length - 1
                ? "border-b border-[var(--apple-border)]"
                : ""
            }`}
          >
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--apple-ink)]">
                  {project.title}
                </h3>
                {project.version && (
                  <span className="border border-[var(--apple-border)] bg-[var(--apple-aluminum)] px-2 py-0.5 font-mono text-[11px] text-[var(--apple-graphite)]">
                    {project.version}
                  </span>
                )}
                {project.featured && (
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--apple-graphite)]/50">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--apple-graphite)]/80">
                {project.shortDescription}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-[var(--apple-border)] px-2.5 py-1 text-[11px] font-medium text-[var(--apple-graphite)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-focus border border-[var(--apple-ink)] px-3 py-2 text-xs font-medium text-[var(--apple-ink)] transition-colors hover:bg-[var(--apple-ink)] hover:text-white"
                >
                  Source
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-focus border border-[var(--apple-border)] px-3 py-2 text-xs font-medium text-[var(--apple-graphite)] transition-colors hover:border-[var(--apple-ink)] hover:text-[var(--apple-ink)]"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
