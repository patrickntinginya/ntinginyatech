import type { ReactNode } from "react";
import { contactInfo, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { PageHero } from "./PageHero";

export type LegalSection = { heading: string; body: ReactNode };

/** Bulleted list styled for legal text. */
export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-deep/50">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** Contact block used at the end of legal pages. */
export function LegalContact() {
  return (
    <>
      <p>
        <span className="font-semibold">{siteConfig.name}</span>
        <br />
        Email:{" "}
        <a href={`mailto:${contactInfo.email}`} className="underline underline-offset-4">
          {contactInfo.email}
        </a>
        <br />
        Phone:{" "}
        <a href={contactInfo.phoneHref} className="underline underline-offset-4">
          {contactInfo.phone}
        </a>
        <br />
        {contactInfo.country}
      </p>
    </>
  );
}

export function LegalPage({
  title,
  crumb,
  intro,
  sections,
  reviewNotice,
}: {
  title: string;
  crumb: string;
  intro: string;
  sections: LegalSection[];
  reviewNotice: string;
}) {
  return (
    <>
      <PageHero title={title} crumb={crumb} description={intro} />
      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <p className="font-sans text-sm font-semibold">Last Updated: {siteConfig.legalUpdated}</p>
                <nav aria-label={`${crumb} contents`} className="mt-5">
                  <h2 className="font-sans text-base font-semibold">Contents</h2>
                  <ol className="mt-3 space-y-1.5 text-[0.9375rem]">
                    {sections.map((s, i) => (
                      <li key={s.heading}>
                        <a href={`#section-${i + 1}`} className="text-deep/80 underline-offset-4 hover:text-deep hover:underline">
                          {i + 1}. {s.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div role="note" className="max-w-3xl rounded-xl border border-maize-700/50 bg-maize-300/40 p-5 font-sans text-[0.9375rem] leading-relaxed">
                <p className="font-semibold">Legal review recommended</p>
                <p className="mt-1">{reviewNotice}</p>
              </div>

              <div className="mt-10 max-w-3xl space-y-10">
                {sections.map((s, i) => (
                  <section key={s.heading} id={`section-${i + 1}`} aria-labelledby={`heading-${i + 1}`} className="scroll-mt-24">
                    <h2 id={`heading-${i + 1}`} className="font-sans text-2xl font-semibold tracking-tight">
                      {i + 1}. {s.heading}
                    </h2>
                    <div className="mt-3 space-y-3 text-base leading-relaxed text-deep/85">{s.body}</div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
