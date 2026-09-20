export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-20">
      <a
        href="/blog"
        className="apple-focus mb-8 inline-block text-xs font-medium text-[var(--apple-graphite)]/60 hover:text-[var(--apple-ink)]"
      >
        ← Mind Dump
      </a>
      <div className="prose-apple text-[var(--apple-graphite)]">{children}</div>
    </div>
  );
}
