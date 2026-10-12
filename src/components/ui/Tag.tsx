import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-line bg-bg px-2.5 py-1 text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
