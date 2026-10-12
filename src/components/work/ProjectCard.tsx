import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/work/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-bg">
          <div className="relative aspect-[16/10]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <span
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-soft transition-colors group-hover:bg-ink group-hover:text-white"
            aria-hidden
          >
            <ArrowIcon />
          </span>
        </div>
        <p
          className="mt-8 font-sans text-6xl font-light leading-none tracking-tight text-transparent sm:text-7xl"
          style={{ WebkitTextStroke: "1px var(--color-line)" }}
          aria-hidden
        >
          {number}
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-accent">
          {project.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
      </article>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
