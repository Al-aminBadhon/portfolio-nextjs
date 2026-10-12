import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { IntroPortrait } from "@/components/home/IntroPortrait";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { NoteCard } from "@/components/notes/NoteCard";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { social } from "@/data/social";
import { getFeaturedProjects } from "@/data/projects";
import { getNotes } from "@/lib/notes";
import { SocialIcon } from "@/components/layout/SocialIcons";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const latestNotes = getNotes().slice(0, 3);
  const snapshot = experience.filter((item) => !item.placeholder).slice(0, 3);

  return (
    <>
      <Hero />
      <Section
        eyebrow="Introduction"
        title="A precise, product-minded engineer."
      >
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal>
            <p className="text-base leading-relaxed text-muted">{profile.bio}</p>
            <div className="mt-6">
              <Button href="/experience" variant="outline">
                View experience
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <IntroPortrait />
          </Reveal>
        </div>
      </Section>
      <Section
        eyebrow="Selected work"
        title="Projects that shipped."
        description="A short set of platforms and products I helped design, build, and operate."
      >
        <div className="grid max-w-xl gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/work" variant="outline">
            All work
          </Button>
        </div>
      </Section>
      <Section eyebrow="Experience" title="Recent roles.">
        <div className="grid gap-4">
          {snapshot.map((item) => (
            <Reveal key={`${item.company}-${item.timeframe}`}>
              <Card>
                <p className="text-xs text-muted">{item.timeframe}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{item.role}</h3>
                <p className="text-sm text-muted">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.achievements[0]}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/experience" variant="outline">
            Full timeline
          </Button>
        </div>
      </Section>
      <Section eyebrow="Skills" title="What I work with.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.slice(0, 6).map((group) => (
            <Reveal key={group.category}>
              <Card>
                <h3 className="text-base font-semibold text-ink">{group.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.slice(0, 5).map((skill) => (
                    <Tag key={skill.name}>{skill.name}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/skills" variant="outline">
            Skills
          </Button>
        </div>
      </Section>
      <Section eyebrow="Notes" title="Latest writing.">
        <div className="grid gap-4 md:grid-cols-3">
          {latestNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Connect" title="Find me elsewhere.">
        <ul className="flex flex-wrap gap-3">
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
              >
                <SocialIcon icon={item.icon} className="h-4 w-4" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
