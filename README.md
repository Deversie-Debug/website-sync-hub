# Ionian Treasure Suites website

This repository contains the complete website for **Ionian Treasure Suites** in Pessada, Kefalonia.

## Folder guide

```text
public/                         Files served directly by the website
  favicon.ico                  Browser-tab icon
  robots.txt                   Search-engine instructions

src/                            The live website
  components/
    booking/                   Booking enquiry form
    layout/                    Header and footer used on every page
    shared/                    Reusable page sections
  content/
    property.ts                Hotel details, suites, photos, FAQs and guide content
  routes/                       One file for each visible page
    index.tsx                  Home page
    suites.index.tsx           All suites page
    suites.$suiteId.tsx        Individual suite pages
    gallery.tsx                Gallery page
    experiences.tsx            Island guide page
    location.tsx               Location page
    book.tsx                   Booking page
    contact.tsx                Contact and FAQ page
    __root.tsx                 Shared website frame
  system/                       Required error-handling files
  styles.css                    Colours, fonts and shared styling
  router.tsx                   Page navigation setup
  server.ts                    Website server entry
  start.ts                     Website request setup
```

## Where to make common changes

- **Hotel phone, email, text, suites, photos, FAQs:** `src/content/property.ts`
- **Colours and typography:** `src/styles.css`
- **Header and main menu:** `src/components/layout/Header.tsx`
- **Footer:** `src/components/layout/Footer.tsx`
- **Booking form:** `src/components/booking/BookingForm.tsx`
- **Page content:** the matching file in `src/routes/`
- **Browser icon and search instructions:** `public/`

## Files kept at the top level

The setup files at the top level must stay there because GitHub, Netlify, and the website build tools look for them in those exact locations.

- `netlify.toml` — Netlify deployment settings
- `package.json` and `bun.lock` — website packages and commands
- `vite.config.ts` — website build settings
- `tsconfig.json` and `eslint.config.js` — code checking settings
- `bunfig.toml` — Bun settings

## Run locally

```sh
bun install
bun run dev
```

## Create a production build

```sh
bun run build
```
