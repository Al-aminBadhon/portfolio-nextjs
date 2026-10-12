import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-3 text-muted">That route is not part of this site.</p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </Container>
  );
}
