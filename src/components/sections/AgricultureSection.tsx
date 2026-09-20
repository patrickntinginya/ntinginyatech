import Link from "next/link";
import { agriAreas, agriJourney, agriStages } from "@/content/agriculture";
import { siteConfig } from "@/config/site";
import { AdviceNotice } from "@/components/ui/AdviceNotice";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessRail } from "@/components/ui/ProcessRail";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function AgricultureSection({ full = false }: { full?: boolean }) {
  return (
    <Section tone="field" id="agriculture">
      <SectionHeading
        dark
        title="Bringing Modern Technology Closer to Agriculture."
        description={
          <>
            <p>
              Ntinginya Tech wants to help connect farmers, livestock keepers, experts, researchers and technology with
              practical agricultural solutions. This is a long-term vision, and we are at the start of it.
            </p>
            <p className="mt-4 font-sans font-semibold text-maize-400">{siteConfig.agricultureTagline}</p>
          </>
        }
      />

      <ul className="mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
        {agriAreas.map((area) => {
          const Icon = area.icon;
          return (
            <li key={area.title} className="flex gap-4 border-t border-white/20 py-6">
              <Icon aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-maize-400" strokeWidth={1.6} />
              <div>
                <h3 className="font-sans text-lg font-semibold leading-snug">{area.title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-white/80">{area.text}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-16 rounded-2xl border border-white/20 p-6 sm:p-10">
        <h3 className="font-sans text-2xl font-semibold tracking-tight">From global idea to local farm</h3>
        <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-white/80">
          Good ideas travel best when they are tested and adapted along the way. This is the path we want every
          agricultural innovation to follow.
        </p>
        <ProcessRail steps={agriJourney} dark highlightLast className="mt-10" />
      </div>

      {full ? (
        <div className="mt-16">
          <h3 className="font-sans text-2xl font-semibold tracking-tight">What is current, proposed and future</h3>
          <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-white/80">
            We keep these apart so that nothing planned is mistaken for something that already exists.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {agriStages.map((stage) => (
              <section key={stage.key} aria-labelledby={`stage-${stage.key}`} className="rounded-2xl bg-deep p-6 sm:p-7">
                <h4 id={`stage-${stage.key}`} className="flex items-center gap-3 font-sans text-xl font-semibold">
                  {stage.key === "current" ? (
                    <span className="rounded-md bg-field-300 px-2 py-1 text-[0.6875rem] font-semibold leading-none tracking-wider text-deep">CURRENT</span>
                  ) : (
                    <StatusBadge status={stage.key} tone="dark" />
                  )}
                </h4>
                <p className="mt-3 text-sm text-white/75">{stage.intro}</p>
                <ul className="mt-5 space-y-4">
                  {stage.items.map((item) => (
                    <li key={item.title} className="border-t border-white/15 pt-4">
                      <p className="font-sans font-semibold leading-snug">
                        {item.href ? (
                          <Link href={item.href} className="underline decoration-1 underline-offset-4">
                            {item.title}
                          </Link>
                        ) : (
                          item.title
                        )}
                      </p>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-white/80">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <AdviceNotice dark className="mt-10" />
        </div>
      ) : null}
    </Section>
  );
}
