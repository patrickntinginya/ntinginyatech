/**
 * Central place for company information.
 * Change the values here (or the environment variables) and the whole site follows.
 * Do not hard-code the domain anywhere else: use `siteConfig.url`.
 */

/**
 * Public URL of the site. Resolution order:
 * 1. NEXT_PUBLIC_SITE_URL (set this once the company domain is connected)
 * 2. URL, which Netlify sets automatically at build time (the site's primary URL)
 * 3. http://localhost:3000 for local development
 */
function resolveSiteUrl(): string {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "http://localhost:3000";
  try {
    return new URL(candidate).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export const siteConfig = {
  name: "Ntinginya Tech",
  /** Primary company positioning. */
  tagline: "Building Technology. Solving Real-World Problems.",
  /** Older tagline. Use only where it fits, such as agriculture sections. */
  agricultureTagline: "Building Technology. Empowering People. Transforming Agriculture.",
  title: "Ntinginya Tech | Technology & Innovation Solutions",
  description:
    "Ntinginya Tech is a Tanzanian technology and innovation company building practical software, digital platforms and technology solutions for businesses, agriculture, education and real-world problems.",
  url: resolveSiteUrl(),
  copyright: "© 2026 Ntinginya Tech. All rights reserved.",
  legalUpdated: "September 2026",
} as const;

/** Official contact details. */
const phoneE164 = "+255784949095";

export const contactInfo = {
  email: "ntinginyatech@gmail.com",
  /** Display format. */
  phone: "+255 784 949 095",
  phoneHref: `tel:${phoneE164}`,
  phoneE164,
  whatsappHref: `https://wa.me/${phoneE164.replace("+", "")}?text=${encodeURIComponent(
    "Hello Ntinginya Tech, I found you through your website and would like to talk.",
  )}`,
  /** No physical address has been provided, so none is shown. */
  location: "Based in Tanzania",
  country: "Tanzania",
} as const;

export const navItems: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Innovation", href: "/innovation" },
  { label: "Masterclass", href: "/masterclass" },
  { label: "R&D", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Agriculture", href: "/agriculture" },
  { label: "Innovation", href: "/innovation" },
  { label: "Masterclass", href: "/masterclass" },
  { label: "R&D", href: "/research" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];
