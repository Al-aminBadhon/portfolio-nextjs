import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: project.cover,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="pb-20 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: project.title, path: `/work/${project.slug}` },
            ]),
          ),
        }}
      />
      <Container className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{project.year}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </Container>
      <Container className="mt-10">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-soft">
          <Image
            src={project.cover}
            alt={project.title}
            width={1400}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </Container>
      <Container className="mt-12 grid max-w-3xl gap-10">
        <CaseBlock title="Problem" body={project.problem} />
        <CaseBlock title="Contribution" body={project.contribution} />
        <CaseBlock title="Outcome" body={project.outcome} />
        {project.screenshots.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Screenshots</h2>
            <div className="mt-5 grid gap-4">
              {project.screenshots.map((shot) => (
                <div key={shot.src} className="overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={750}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button key={link.href} href={link.href} variant="outline">
                {link.label}
              </Button>
            ))}
          </div>
        )}
        <Button href="/work" variant="ghost">
          ← All work
        </Button>
      </Container>
    </article>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted">{body}</p>
    </section>
  );
}
