import Link from "next/link";
import { contactInfo, footerLinks, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-dark bg-deep text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo dark />
          <p className="mt-6 max-w-sm font-sans text-xl font-semibold leading-snug text-balance">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-white/75">
            A Tanzanian technology and innovation company building practical software and applying research, education
            and technology to real problems.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-4 lg:col-start-6">
          <h2 className="font-sans text-base font-semibold">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-base font-semibold">Contact</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <a href={`mailto:${contactInfo.email}`} className="break-all underline-offset-4 hover:text-white hover:underline">
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={contactInfo.phoneHref} className="underline-offset-4 hover:text-white hover:underline">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>{contactInfo.location}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/75">
          <p>{siteConfig.copyright}</p>
          <p className="max-w-3xl text-white/65">
            Information on this website is general and is not agricultural, veterinary, medical, legal or financial advice.
            Products marked proposed or future have not launched.
          </p>
        </Container>
      </div>
    </footer>
  );
}
