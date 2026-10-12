"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/cn";
import { ProjectCard } from "@/components/work/ProjectCard";

const labels: Record<ProjectCategory, string> = {
  all: "All",
  product: "Product",
  platform: "Platform",
  tooling: "Tooling",
  "open-source": "Open source",
};

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const active = (params.get("category") as ProjectCategory) || "all";
  const selected = projectCategories.includes(active) ? active : "all";
  const visible =
    selected === "all" ? projects : projects.filter((project) => project.category === selected);

  function setCategory(category: ProjectCategory) {
    const next = new URLSearchParams(params.toString());
    if (category === "all") next.delete("category");
    else next.set("category", category);
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected === category}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors",
              selected === category
                ? "bg-ink text-white"
                : "border border-line bg-surface text-muted hover:text-ink",
            )}
            onClick={() => setCategory(category)}
          >
            {labels[category]}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="text-sm text-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
