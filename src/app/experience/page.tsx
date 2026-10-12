import { education, experience } from "@/data/experience";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Experience",
  description: "Career timeline and education for B M AL-amin Badhon.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <Section
        eyebrow="Experience"
        title="A calm timeline of shipped work."
        description="Roles, companies, and measurable impact. The current-role entry is a placeholder until it can be published."
      >
        <ol className="relative space-y-5 border-l border-line pl-6">
          {experience.map((item) => (
            <li key={`${item.company}-${item.timeframe}`}>
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-ink" />
              <Reveal>
                <Card>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs text-muted">{item.timeframe}</p>
                    {item.placeholder && <Pill>Placeholder</Pill>}
                    {item.type === "founder" && <Pill variant="outline">Founder</Pill>}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{item.role}</h3>
                  <p className="text-sm text-muted">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {item.achievements.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>
      <Section eyebrow="Education" title="Study.">
        <div className="grid gap-4">
          {education.map((item) => (
            <Card key={item.institution}>
              <p className="text-xs text-muted">{item.timeframe}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.degree}</h3>
              <p className="text-sm text-muted">{item.institution}</p>
              {item.detail && <p className="mt-2 text-sm text-muted">{item.detail}</p>}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
