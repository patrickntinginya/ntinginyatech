import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ProductNotFound() {
  return (
    <section className="bg-mist py-28">
      <Container>
        <p className="font-sans text-sm font-semibold text-field-700">Product not found</p>
        <h1 className="mt-3 max-w-2xl font-sans text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
          We could not find that product.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-deep/80">
          It may have been renamed, or it may never have existed. Every product we are building or planning is listed on
          the products page.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/products" variant="dark" size="lg">
            See all products
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
