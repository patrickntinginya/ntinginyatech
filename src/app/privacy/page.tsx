import { LegalContact, LegalList, LegalPage } from "@/components/sections/LegalPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Ntinginya Tech may collect, use and protect information provided through this website, including the contact form.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      crumb="Privacy Policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Ntinginya Tech may collect, use and protect information provided through this website."
      reviewNotice="This Privacy Policy was prepared to be clear and careful, but it has not been reviewed by a lawyer. Ntinginya Tech should obtain professional legal review before relying on it as its final legal document."
      sections={[
        {
          heading: "Introduction",
          body: (
            <>
              <p>
                Ntinginya Tech is a Tanzanian technology and innovation company. We respect your privacy and want you to
                understand what happens to information you share with us through this website.
              </p>
              <p>
                This policy applies to this website. Ntinginya Tech is an early-stage company, and this policy may
                change as our products and services develop.
              </p>
            </>
          ),
        },
        {
          heading: "Information we may collect",
          body: (
            <>
              <p>We keep the information we collect to a minimum. It may include:</p>
              <LegalList
                items={[
                  "Information you choose to give us, such as through the contact form or by email, phone or WhatsApp.",
                  "Basic technical information created when you visit any website, described below.",
                ]}
              />
            </>
          ),
        },
        {
          heading: "Information you voluntarily provide",
          body: (
            <p>
              You decide what to share with us. Please do not send sensitive information, such as passwords, payment
              card details or identity document numbers, through this website or by email.
            </p>
          ),
        },
        {
          heading: "Contact form information",
          body: (
            <>
              <p>When you use the contact form, we receive the details you enter:</p>
              <LegalList
                items={[
                  "Full name and email address",
                  "Phone number (optional)",
                  "The type of inquiry, the subject and your message",
                ]}
              />
              <p>
                The form is sent to our email inbox through an email delivery service. If you contact us on WhatsApp,
                by phone or by email instead, we receive the details those services provide, such as your phone number
                or email address, and what you write.
              </p>
            </>
          ),
        },
        {
          heading: "Technical information",
          body: (
            <p>
              Like most websites, the servers and services that deliver this site may process technical information such
              as your IP address, browser type, device type, pages requested and the time of the request. This is used
              to deliver the site, keep it secure and prevent abuse. We use your IP address to limit repeated form
              submissions.
            </p>
          ),
        },
        {
          heading: "Cookies and similar technologies",
          body: (
            <p>
              At the time of writing, this website does not use cookies or similar technologies for advertising or
              analytics. Your browser or our hosting provider may use technical mechanisms that are needed to deliver
              the site. If we add cookies or tracking tools in future, we will update this policy and, where
              appropriate, ask for your choice.
            </p>
          ),
        },
        {
          heading: "How information is used",
          body: (
            <>
              <p>We may use the information you give us to:</p>
              <LegalList
                items={[
                  "Read and reply to your message or inquiry",
                  "Discuss possible work, partnerships, products or the Masterclass with you",
                  "Keep the website secure and prevent spam or misuse",
                  "Meet legal obligations, where they apply",
                ]}
              />
              <p>We do not sell your personal information.</p>
            </>
          ),
        },
        {
          heading: "How information is stored",
          body: (
            <p>
              Contact form messages are delivered to our email inbox and are stored there, with any replies. The website
              itself does not keep a database of form submissions. Our email account, hosting and email delivery
              providers store and process data on their own systems, which may be located outside Tanzania.
            </p>
          ),
        },
        {
          heading: "Data security",
          body: (
            <p>
              We take reasonable steps to protect information, such as validating form input on the server, keeping
              secret keys out of the website code and using encrypted connections where our hosting provides them. No
              method of transmission or storage is completely secure, so we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We keep messages for as long as we need them to respond, to continue a conversation and to keep sensible
              records. We do not set a fixed period. You can ask us to delete your messages, and we will do so unless we
              need to keep them for a legitimate or legal reason.
            </p>
          ),
        },
        {
          heading: "Third-party services",
          body: (
            <>
              <p>We use other companies to run parts of this website and to receive your messages. They may include:</p>
              <LegalList
                items={[
                  "A hosting provider, which serves the website",
                  "An email delivery service, which sends contact form messages to us",
                  "An email provider, which hosts our inbox",
                  "WhatsApp, if you choose to contact us there",
                ]}
              />
              <p>
                These services have their own privacy policies, and we are not responsible for how they handle
                information. This website may also link to other websites that we do not control.
              </p>
            </>
          ),
        },
        {
          heading: "Email and contact communication",
          body: (
            <p>
              We use your details to reply to you. We do not send marketing email unless you have asked to hear from us,
              and you can ask us to stop contacting you at any time.
            </p>
          ),
        },
        {
          heading: "Analytics",
          body: (
            <p>
              At the time of writing, we do not use website analytics. If we start using analytics, we will describe the
              tool and what it collects here.
            </p>
          ),
        },
        {
          heading: "Children’s privacy",
          body: (
            <p>
              This website is not directed at children, and we do not knowingly collect personal information from them.
              If you believe a child has sent us personal information, contact us and we will delete it.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <>
              <p>
                Depending on where you live and the laws that apply, you may have rights over your personal information.
                These can include asking to:
              </p>
              <LegalList
                items={[
                  "See the information we hold about you",
                  "Correct information that is wrong",
                  "Delete your information",
                  "Object to or limit how we use it",
                ]}
              />
              <p>To make a request, contact us using the details below. We will do our best to respond within a reasonable time.</p>
            </>
          ),
        },
        {
          heading: "Changes to this Privacy Policy",
          body: (
            <p>
              We may update this policy from time to time. The “Last Updated” date on this page shows when it last
              changed. Please check it occasionally.
            </p>
          ),
        },
        {
          heading: "Contact information",
          body: (
            <>
              <p>Questions or requests about this policy can be sent to:</p>
              <LegalContact />
            </>
          ),
        },
      ]}
    />
  );
}
