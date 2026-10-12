import { cn } from "@/lib/cn";

export function Pill({
  children,
  variant = "outline",
  className,
}: {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium",
        variant === "filled"
          ? "bg-ink text-white"
          : "border border-line bg-surface text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
