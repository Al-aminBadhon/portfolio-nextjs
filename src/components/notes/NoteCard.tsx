import Link from "next/link";
import type { Note } from "@/lib/notes";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function NoteCard({ note }: { note: Note }) {
  return (
    <Link href={`/notes/${note.slug}`} className="block">
      <Card className="h-full transition-shadow hover:shadow-soft">
        <p className="text-xs text-muted">{note.metadata.publishedAt}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
          {note.metadata.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{note.metadata.summary}</p>
        {note.metadata.tags && note.metadata.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {note.metadata.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </Card>
    </Link>
  );
}
