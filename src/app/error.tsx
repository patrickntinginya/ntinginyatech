"use client";

import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/config/site";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="bg-mist py-24 sm:py-28">
      <Container>
        <p className="font-sans text-sm font-semibold text-field-700">Something went wrong</p>
        <h1 className="mt-3 max-w-2xl font-sans text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          This page failed to load.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-deep/80">
          It is on our side, not yours. Try again, or go back to the homepage. If it keeps happening, email us at{" "}
          <a href={`mailto:${contactInfo.email}`} className="break-all underline underline-offset-4">
            {contactInfo.email}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button variant="dark" size="lg" onClick={() => reset()}>
            Try again
          </Button>
          <ButtonLink href="/" variant="outline" size="lg">
            Go to the homepage
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
