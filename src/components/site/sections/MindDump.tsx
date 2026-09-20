import Link from "next/link";
import { Section } from "./Section";

export type MindDumpPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
};

type MindDumpProps = {
  posts: MindDumpPost[];
};

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export function MindDump({ posts }: MindDumpProps) {
  return (
    <Section
      id="mind-dump"
      eyebrow="Notes"
      title="Mind Dump"
      band
    >
      {posts.length === 0 ? (
        <p className="text-sm text-[var(--apple-graphite)]/60">
          No posts yet. Add MDX files under `src/app/blog/posts`.
        </p>
      ) : (
        <div className="border border-[var(--apple-border)] bg-[var(--apple-bg)]">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`apple-focus group block px-5 py-8 transition-colors hover:bg-[var(--apple-aluminum)]/60 md:px-8 ${
                index !== posts.length - 1
                  ? "border-b border-[var(--apple-border)]"
                  : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--apple-ink)] group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <time className="text-xs text-[var(--apple-graphite)]/50">
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              {post.summary && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--apple-graphite)]/75">
                  {post.summary}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
