import { getNotes } from "@/lib/notes";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { NoteCard } from "@/components/notes/NoteCard";

export const metadata = buildMetadata({
  title: "Notes",
  description: "Engineering lessons, startup thinking, and project write-ups.",
  path: "/notes",
});

export default function NotesPage() {
  const notes = getNotes();

  return (
    <Section
      eyebrow="Notes"
      title="Writing from the work."
      description="Short essays on delivery, architecture, and operating software."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </Section>
  );
}
