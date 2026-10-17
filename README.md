# Makeup Artist Landing Page

A one-page, mobile-first site for a makeup artist: services and pricing, a filterable portfolio, reviews, booking steps, FAQ, a map, and an inquiry form that sends email.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · EmailJS

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the EmailJS keys
npm run dev                  # http://localhost:3000
```

## Edit the content

All content is data. You should not need to touch components to rebrand.

| File | What it holds |
|------|---------------|
| `src/data/site.ts` | Name, tagline, contact, socials, address, service areas, hours, about text |
| `src/data/services.ts` | Services, starting prices, inclusions, add-ons |
| `src/data/portfolio.ts` | Portfolio images, alt text, categories |
| `src/data/reviews.ts` | Reviews (the average rating is computed) |
| `src/data/faq.ts` | Booking steps and FAQ / policies |
| `src/app/globals.css` | Colors and fonts (`@theme` tokens) |

Images live in `public/images/`. The included `.svg` files are flat placeholders; replace them with `.jpg` or `.webp` photos and `next/image` will resize and compress them automatically.

## Set up the email form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Email Services**: add Gmail (or another provider) and copy the **Service ID**.
3. **Email Templates**: create a template using these variables:
   `{{name}}`, `{{email}}`, `{{phone}}`, `{{event_date}}`, `{{service}}`, `{{message}}`. Set "Reply To" to `{{email}}`. Copy the **Template ID**.
4. **Account**: copy the **Public Key**.
5. Put all three in `.env.local` (and in your host's environment variables).
6. In **Account > Security**, restrict allowed origins to your domain so others can't reuse your key.

The form also has a hidden honeypot field to filter simple spam bots.

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com/new). Add the three `NEXT_PUBLIC_EMAILJS_*` variables in the project settings, and update `site.url` in `src/data/site.ts` to the live domain (used for SEO metadata).

## What's included

- Sticky header CTA on desktop, fixed "Book now" bar on mobile
- Portfolio filter with an accessible lightbox (native `<dialog>`, arrow keys, Esc)
- FAQ accordion with `<details>` (no JavaScript)
- Google Maps embed with no API key
- `BeautySalon` JSON-LD and Open Graph tags for search and link previews
- Statically prerendered; text colors pass WCAG AA contrast
