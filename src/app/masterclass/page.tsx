import { CTASection } from "@/components/sections/CTASection";
import { MasterclassSection } from "@/components/sections/MasterclassSection";
import { PageHero } from "@/components/sections/PageHero";
import { StatusBadges } from "@/components/ui/StatusBadge";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Agriculture & Livestock Masterclass",
  description:
    "A proposed education and professional development initiative from Ntinginya Tech for agricultural and livestock professionals, farmers, students and farmer agents.",
  path: "/masterclass",
});

export default function MasterclassPage() {
  return (
    <>
      <PageHero
        crumb="Masterclass"
        title="Agriculture & Livestock Masterclass"
        description="A proposed initiative for professional and practical education around modern agriculture, livestock management and agricultural technology."
      >
        <StatusBadges statuses={["proposed", "future"]} />
      </PageHero>
      <MasterclassSection />
      <CTASection title="Help shape the Masterclass" text="Tell us what you would want to learn. Your ideas will help shape the plan." />
    </>
  );
}
