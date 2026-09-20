import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/sections/PageHero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Ntinginya Tech by email, phone, WhatsApp or the contact form for general, partnership, software and technology, or agriculture and innovation inquiries.",
  path: "/contact",
});

type SearchParams = { subject?: string | string[] };
type Props = { searchParams: Promise<SearchParams> };

export default async function ContactPage({ searchParams }: Props) {
  const { subject } = await searchParams;
  const defaultSubject = (Array.isArray(subject) ? subject[0] : subject)?.slice(0, 200) ?? "";

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Talk to Ntinginya Tech."
        description="Tell us what you are working on or what problem you want solved. Email, phone, WhatsApp and a contact form are all below."
      />
      <ContactSection defaultSubject={defaultSubject} />
    </>
  );
}
