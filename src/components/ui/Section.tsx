import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <Container>
        {(eyebrow || title || description) && (
          <Reveal className={cn("mb-10 max-w-2xl", align === "center" && "mx-auto text-center")}>
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {title && (
              <span
                className={cn(
                  "mt-4 block h-0.5 w-10 bg-accent",
                  align === "center" && "mx-auto",
                )}
                aria-hidden
              />
            )}
            {description && (
              <p className="mt-5 text-base leading-relaxed text-muted">{description}</p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
