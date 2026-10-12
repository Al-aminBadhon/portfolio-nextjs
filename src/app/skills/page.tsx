import Image from "next/image";
import { skillGroups } from "@/data/skills";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Skills",
  description: "Grouped skills and technologies used by B M AL-amin Badhon.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <Section
      eyebrow="Skills"
      title="A practical stack, grouped clearly."
      description="No percentage bars. These are the tools I use to design, ship, and operate software."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Reveal key={group.category}>
            <Card>
              <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="inline-flex items-center gap-2">
                    {skill.icon && (
                      <Image
                        src={`/images/logo/${skill.icon}`}
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain"
                      />
                    )}
                    <Tag>{skill.name}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
