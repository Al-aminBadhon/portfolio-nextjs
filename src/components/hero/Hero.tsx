import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-x-clip pb-10 pt-6 sm:pb-14 sm:pt-8">
      <div className="bg-blueprint pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <p className="mb-3 text-sm font-medium text-muted">{profile.role}</p>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {profile.headline}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {profile.positioning}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/work">View Work</Button>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.proofPoints.map((point) => (
              <li key={point.label}>
                <Pill variant={point.variant}>{point.label}</Pill>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="flex w-full min-w-0 justify-center">
          <HeroVisual pageKey="home" priority />
        </Reveal>
      </Container>
    </section>
  );
}
