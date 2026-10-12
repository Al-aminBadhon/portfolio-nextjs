import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote, getNotes, getReadingTime } from "@/lib/notes";
import { buildMetadata } from "@/lib/seo";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { Container } from "@/components/ui/Container";
import { MdxContent } from "@/components/notes/MdxContent";
import { Tag } from "@/components/ui/Tag";

export function generateStaticParams() {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return buildMetadata({
    title: note.metadata.title,
    description: note.metadata.summary,
    path: `/notes/${note.slug}`,
    type: "article",
  });
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();
  const minutes = getReadingTime(note.content);

  return (
    <article className="pb-20 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Notes", path: "/notes" },
              { name: note.metadata.title, path: `/notes/${note.slug}` },
            ]),
            blogPostingJsonLd({
              title: note.metadata.title,
              summary: note.metadata.summary,
              path: `/notes/${note.slug}`,
              publishedAt: note.metadata.publishedAt,
              image: note.metadata.image,
            }),
          ]),
        }}
      />
      <Container className="max-w-3xl">
        <Link href="/notes" className="text-sm text-muted hover:text-ink">
          ← Notes
        </Link>
        <p className="mt-6 text-xs text-muted">
          {note.metadata.publishedAt} · {minutes} min read
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
          {note.metadata.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{note.metadata.summary}</p>
        {note.metadata.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {note.metadata.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
        <div className="mt-10">
          <MdxContent source={note.content} />
        </div>
      </Container>
    </article>
  );
}
