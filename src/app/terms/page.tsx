import { LegalContact, LegalList, LegalPage } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms that apply when you use the Ntinginya Tech website, including product status and disclaimers.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      crumb="Terms of Use"
      title="Terms of Use"
      intro="The terms that apply when you use the Ntinginya Tech website."
      reviewNotice="These Terms should be reviewed and finalized with appropriate legal advice before being relied upon as the company’s definitive legal terms."
      sections={[
        {
          heading: "Introduction",
          body: (
            <p>
              These Terms of Use apply to your use of the Ntinginya Tech website. Ntinginya Tech is an emerging Tanzanian
              technology and innovation company. In these Terms, “we”, “us” and “our” mean Ntinginya Tech.
            </p>
          ),
        },
        {
          heading: "Acceptance of Terms",
          body: (
            <p>
              By using this website, you agree to these Terms. If you do not agree, please do not use the website. If
              we make changes to the Terms, using the website after the changes means you accept them.
            </p>
          ),
        },
        {
          heading: "Website use",
          body: (
            <>
              <p>You may use this website for lawful purposes. You agree not to:</p>
              <LegalList
                items={[
                  "Break the law or infringe the rights of others",
                  "Try to gain unauthorized access to the website, its servers or its data",
                  "Send spam, malware or harmful code, or overload the website",
                  "Copy or scrape the website in a way that harms it or its users",
                ]}
              />
            </>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The website design, text, graphics, the Ntinginya Tech name and any logo are owned by or licensed to
              Ntinginya Tech, unless stated otherwise. You may view and share pages for personal or business reference,
              but you may not copy, modify or reuse our content or branding commercially without our written permission.
            </p>
          ),
        },
        {
          heading: "Website content",
          body: (
            <>
              <p>
                Content on this website is provided for general information. We try to keep it accurate, but we do not
                promise that it is complete, current or free of errors, and it may change without notice.
              </p>
              <p>
                Content about agriculture, livestock, AI, education, business or technology is general information. It is
                not agricultural, veterinary, medical, legal or financial advice, and it is not a diagnosis. For
                decisions about a specific crop, animal, business or legal or financial matter, consult a suitably
                qualified professional.
              </p>
            </>
          ),
        },
        {
          heading: "Product descriptions and development status",
          body: (
            <>
              <p>
                Each product on this website has a status: LIVE, MVP, IN DEVELOPMENT, PROPOSED or FUTURE. Only products
                marked LIVE are available to use.
              </p>
              <p>
                Products marked MVP, IN DEVELOPMENT, PROPOSED or FUTURE are early versions, plans or ideas. They may
                change, be delayed or never be released. Descriptions of them are not offers, promises or guarantees of
                features, dates or availability. Mentions of technologies or countries in our Innovation Hub content are
                research directions only. They do not mean that a technology will work in Tanzania, or that we have a
                partnership with anyone.
              </p>
            </>
          ),
        },
        {
          heading: "User submissions",
          body: (
            <p>
              If you send us information, ideas or feedback, you confirm that you have the right to share it. We may use
              suggestions you send us to improve our work without owing you payment, but we will handle personal
              information as described in our Privacy Policy.
            </p>
          ),
        },
        {
          heading: "Contact forms",
          body: (
            <p>
              The contact form is for genuine inquiries. Sending a message does not create a business relationship,
              contract or duty on either side. We cannot promise a reply to every message. Please do not send sensitive
              information through the form.
            </p>
          ),
        },
        {
          heading: "External links",
          body: (
            <p>
              This website may link to other websites and services, such as WhatsApp. We do not control them and are not
              responsible for their content, availability or privacy practices. A link is not an endorsement.
            </p>
          ),
        },
        {
          heading: "Availability of the website",
          body: (
            <p>
              We aim to keep the website available, but we do not promise that it will always be available, secure or
              free of interruptions. We may change, suspend or remove parts of it at any time.
            </p>
          ),
        },
        {
          heading: "Disclaimer",
          body: (
            <p>
              The website and its content are provided “as is” and “as available”, without warranties of any kind, to
              the fullest extent permitted by law.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the fullest extent permitted by law, Ntinginya Tech is not liable for any loss or damage arising from
              your use of, or inability to use, this website or from relying on its content. Nothing in these Terms limits
              any liability that cannot legally be limited.
            </p>
          ),
        },
        {
          heading: "Changes to Terms",
          body: (
            <p>
              We may update these Terms from time to time. The “Last Updated” date on this page shows when they last
              changed.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              The governing law and the place where disputes would be handled have not yet been set. These Terms should be
              reviewed and finalized with appropriate legal advice before being relied upon as the company’s definitive
              legal terms.
            </p>
          ),
        },
        {
          heading: "Contact information",
          body: (
            <>
              <p>Questions about these Terms can be sent to:</p>
              <LegalContact />
            </>
          ),
        },
      ]}
    />
  );
}
