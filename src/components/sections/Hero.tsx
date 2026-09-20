import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/visuals/HeroVisual";

const majorAreas = [
  { label: "Technology", note: "Software and digital platforms", href: "/solutions" },
  { label: "Agriculture", note: "Farm and livestock technology", href: "/agriculture" },
  { label: "Innovation", note: "Global AgriTech research", href: "/innovation" },
  { label: "AI", note: "Practical AI and digital systems", href: "/solutions#ai" },
  { label: "Education", note: "Professional learning", href: "/masterclass" },
  { label: "R&D", note: "Research before building", href: "/research" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      <Container className="grid items-center gap-12 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-16 lg:pt-20">
        <div>
          <p className="flex items-center gap-3 font-sans text-sm font-semibold text-field-700">
            <span aria-hidden="true" className="h-px w-8 bg-field-700" />
            {siteConfig.name}
          </p>

          <h1 className="mt-6 font-sans text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-balance sm:text-6xl xl:text-[4.25rem]">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-deep/80 text-pretty sm:text-xl sm:leading-relaxed">
            We design and develop practical technology, digital platforms and innovation systems for businesses,
            agriculture, education and other real-world challenges.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/solutions" variant="dark" size="lg">
              Explore Our Solutions
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Work With Us
            </ButtonLink>
          </div>

          <p className="mt-10 max-w-md border-l-2 border-maize-400 pl-4 text-[0.9375rem] leading-relaxed text-deep/80">
            <span className="font-sans font-semibold text-deep">Where we are today:</span> Ntinginya Tech is an
            emerging company. Our first product, Ntinginya Business Manager, is an MVP in development. Everything else
            on this site is labelled proposed or future.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[34rem] lg:max-w-none">
          <HeroVisual />
        </div>
      </Container>

      <Container className="pb-14">
        <nav aria-label="Major areas" className="border-t border-deep/15 pt-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {majorAreas.map((area) => (
              <li key={area.label}>
                <Link href={area.href} className="group block rounded-md">
                  <span className="block font-sans text-base font-semibold text-deep underline-offset-4 group-hover:underline">
                    {area.label}
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-deep/75">{area.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
