import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { ProjectFilter } from "@/components/work/ProjectFilter";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Work",
  description: "Selected products, platforms, and tools by B M AL-amin Badhon.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <Section
      eyebrow="Work"
      title="Selected projects."
      description="Filter by category. Each case study covers the problem, contribution, stack, and outcome."
    >
      <Suspense fallback={<p className="text-sm text-muted">Loading projects…</p>}>
        <ProjectFilter projects={projects} />
      </Suspense>
    </Section>
  );
}
