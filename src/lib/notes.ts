import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type NoteMeta = {
  title: string;
  summary: string;
  publishedAt: string;
  tags?: string[];
  image?: string;
};

export type Note = {
  slug: string;
  metadata: NoteMeta;
  content: string;
};

const NOTES_DIR = path.join(process.cwd(), "src", "content", "notes");

function getNoteFiles() {
  if (!fs.existsSync(NOTES_DIR)) {
    return [];
  }
  return fs
    .readdirSync(NOTES_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

export function getNotes(): Note[] {
  return getNoteFiles()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const publishedAt =
        data.publishedAt instanceof Date
          ? data.publishedAt.toISOString().slice(0, 10)
          : String(data.publishedAt ?? "");
      return {
        slug,
        content,
        metadata: {
          title: String(data.title ?? slug),
          summary: String(data.summary ?? ""),
          publishedAt,
          tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
          image: data.image ? String(data.image) : undefined,
        },
      } satisfies Note;
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    );
}

export function getNote(slug: string) {
  return getNotes().find((note) => note.slug === slug);
}

export function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
