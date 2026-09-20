# Ntinginya Tech website (V1.1)

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, Lucide icons.

## Run locally

```bash
npm install
cp .env.example .env.local     # fill in the values you have
npm run dev                    # http://localhost:3000
```

Before every deploy:

```bash
npm run typecheck
npm run build
npm run start                  # production server on http://localhost:3000
```

## Structure

```
src/
  app/          Routes: / /about /solutions /products /products/[slug] /agriculture
                /innovation /masterclass /research /contact /privacy /terms
                api/contact (email delivery), sitemap.ts, robots.ts, manifest.ts,
                icon.svg, apple-icon.tsx, opengraph-image.tsx,
                not-found.tsx, error.tsx, global-error.tsx
  components/
    layout/     Header (sticky, mobile menu), Footer, Logo
    sections/   Page sections, ContactForm, LegalPage
    ui/         Button, Container, Section, SectionHeading, StatusBadge, ProcessRail, AdviceNotice
    visuals/    HeroVisual, ContourBackdrop (SVG)
  content/      All copy and data: products, core areas, countries, research, masterclass
  config/site.ts  Company name, positioning, contact details, navigation, site URL
  lib/          metadata helper, contact validation, rate limiter, contour maths, cn()
```

## Where things live

- **Domain:** set `NEXT_PUBLIC_SITE_URL` once. Nothing else in the code contains a domain.
  If it is empty the site uses Netlify's `URL` variable, then `http://localhost:3000`.
- **Contact details:** `src/config/site.ts` (`contactInfo`).
- **Product status:** `src/content/products.ts`. Allowed statuses: LIVE, MVP, IN DEVELOPMENT, PROPOSED, FUTURE.
  Only products in group `live` may be described as available.
- **Legal pages:** `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`. Not lawyer-reviewed.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URLs, sitemap, Open Graph, structured data |
| `RESEND_API_KEY` | For the form | Resend API key (server-side only, never `NEXT_PUBLIC_`) |
| `CONTACT_TO_EMAIL` | For the form | Inbox that receives messages (`ntinginyatech@gmail.com`) |
| `CONTACT_FROM_EMAIL` | For the form | Sender on a domain verified in Resend, e.g. `Ntinginya Tech <website@your-domain>` |

If any of the three form variables is missing, the form says it is not connected and offers email, phone and
WhatsApp instead. It never reports "Message sent" unless Resend accepted the message.

## Deploy on Netlify

1. Push the project to GitHub, GitLab or Bitbucket.
2. In Netlify: **Add new site > Import an existing project**, and pick the repository.
3. Build settings are read from `netlify.toml` (build command `npm run build`, publish directory `.next`).
   Netlify installs its Next.js support automatically, so do not add a plugin or change the publish directory.
4. **Site configuration > Environment variables:** add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`,
   and `NEXT_PUBLIC_SITE_URL` once the real domain is connected.
5. Deploy. Then send a test message through the contact form and confirm it reaches the inbox.
6. When the company domain is ready: **Domain management > Add a domain**, follow the DNS steps, then set
   `NEXT_PUBLIC_SITE_URL` to it and redeploy.

Google Fonts are downloaded at build time, so the build needs internet access (Netlify has it).

## Notes

- The contact rate limiter is in memory, so limits apply per server instance. It stops casual abuse; add a shared
  store or a bot-protection service if spam becomes a problem.
- The logo is a text and mark placeholder, not an official logo. Replace `LogoMark` in
  `src/components/layout/Logo.tsx`, `src/app/icon.svg` and `src/app/apple-icon.tsx` when one exists.
