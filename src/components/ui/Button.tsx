import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  solid: "bg-ink text-white hover:bg-ink/90",
  outline: "border border-line bg-surface text-ink hover:border-ink",
  ghost: "text-muted hover:text-ink",
  accent: "bg-accent text-white hover:bg-accent/90",
} as const;

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "solid",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
    variants[variant],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
