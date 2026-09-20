import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo, siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { buttonStyles } from "@/components/ui/Button";
import { INQUIRY_TYPES } from "@/lib/contact";
import { ContactForm } from "./ContactForm";

export function ContactSection({ defaultSubject = "" }: { defaultSubject?: string }) {
  return (
    <Section tone="paper" id="contact">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-sans text-3xl font-semibold leading-tight tracking-[-0.02em] text-balance sm:text-4xl">Tell us about the problem</h2>
          <p className="mt-4 text-lg leading-relaxed text-deep/80">
            Whether you need software, want to explore agriculture technology, are interested in the Masterclass or
            want to collaborate on research, start with a message.
          </p>

          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <Building2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-field-700" />
              <div>
                <dt className="font-sans text-sm font-semibold">Company</dt>
                <dd>{siteConfig.name}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-field-700" />
              <div>
                <dt className="font-sans text-sm font-semibold">Email</dt>
                <dd>
                  <a href={`mailto:${contactInfo.email}`} className="break-all underline underline-offset-4">
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-field-700" />
              <div>
                <dt className="font-sans text-sm font-semibold">Phone</dt>
                <dd>
                  <a href={contactInfo.phoneHref} className="underline underline-offset-4">
                    {contactInfo.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-field-700" />
              <div>
                <dt className="font-sans text-sm font-semibold">Location</dt>
                <dd>{contactInfo.location}</dd>
              </div>
            </div>
          </dl>

          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ variant: "primary", size: "lg", className: "mt-10 w-full gap-2 sm:w-auto" })}
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" />
            Chat on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <div className="mt-10">
            <h3 className="font-sans text-sm font-semibold">What you can contact us about</h3>
            <ul className="mt-3 divide-y divide-deep/15 border-y border-deep/15">
              {INQUIRY_TYPES.map((type) => (
                <li key={type} className="py-2.5 text-[0.9375rem]">
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-deep/20 bg-mist p-6 sm:p-8 lg:col-span-7">
          <ContactForm defaultSubject={defaultSubject} />
        </div>
      </div>
    </Section>
  );
}
