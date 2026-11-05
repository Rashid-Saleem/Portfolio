# Developer Portfolio — Full-Stack & AI Solutions

A premium, conversion-focused developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS 4** and **shadcn/ui**. Dark-only design with an emerald accent, working contact backend, and complete SEO foundations.

![Tech](https://img.shields.io/badge/Next.js%2016-black) ![Tech](https://img.shields.io/badge/TypeScript-blue) ![Tech](https://img.shields.io/badge/Tailwind%20CSS%204-06b6d4)

---

## ✨ Features

| Area | Details |
| --- | --- |
| **Sections** | Navbar · Hero · About · Services · Projects · Skills · Why Me · Process · Testimonials · Contact · Footer |
| **Conversion** | Strategic CTAs in every section, availability badge, direct WhatsApp/email channels, inquiry pipeline |
| **Contact backend** | `POST /api/contact` — Zod validation (shared client/server schema), in-memory rate limiting, stored in a database |
| **SEO** | Metadata + OpenGraph + Twitter cards, dynamic OG image (`/opengraph-image`), `sitemap.xml`, `robots.txt`, JSON-LD (`Person`, `WebSite`, `ProfessionalService`), semantic HTML, canonical URL |
| **A11y** | Keyboard-navigable nav & forms, ARIA labels, focus rings, reduced-motion support, 44px+ touch targets |
| **Responsive** | Mobile-first, verified at 390 / 820 / 1440 px widths |
| **Animations** | Subtle scroll-reveal (Framer Motion) that respects `prefers-reduced-motion` |

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install          # or: bun install

# 2. Configure the database (SQLite by default)
#    .env already contains:
#    DATABASE_URL="file:./db/custom.db"
npx prisma db push   # or: bun run db:push

# 3. Start the dev server
npm run dev          # or: bun run dev
# → http://localhost:3000

# 4. Production build (verify before deploying)
npm run build
npm start
```

---

## 🎨 Customization Guide (do this first!)

### 1. Your identity — `src/lib/portfolio/config.ts`
Every personal value lives here: name, role, tagline, production URL, email, WhatsApp number, location, availability, social links, years of experience. All placeholders are marked with `// PLACEHOLDER` comments.

> **WhatsApp link format:** `https://wa.me/<country code><number>` — digits only, no `+`, spaces or dashes (e.g. `https://wa.me/4915212345678`).

### 2. Section content — `src/lib/portfolio/data.ts`
All copy lives in one typed file:

- `navItems` — navigation links
- `heroTechStack`, `heroStats` — hero badges & stat cards
- `services` — service cards (icon, offerings, business value, tech)
- `projects` — portfolio cards. **The four shipped projects are sample placeholders.** Add a new object and the card renders automatically; set `links.demo / links.github / links.caseStudy` to real URLs (or remove them — the UI shows "Demo on request" / "Private repo" fallbacks)
- `skillCategories` — skill groups and badges
- `valueProps` — "Why work with me" cards
- `processSteps` — development process timeline
- `testimonials` — **sample placeholders**, clearly badged as such. Replace with real client quotes (and delete the honesty notice in `testimonials.tsx` once real quotes exist)
- `projectTypeOptions`, `budgetOptions` — contact form dropdowns

### 3. Icons — `src/components/portfolio/icon-map.ts`
Content uses serializable icon names (e.g. `"code"`). Map any Lucide icon here.

### 4. Images — `public/images/`
| File | Used in | Replace with |
| --- | --- | --- |
| `avatar.png` | Hero profile chip | Your photo or avatar |
| `about-workspace.png` | About section | A photo of you / your workspace |
| `project-*.png` | Project cards | Real screenshots (16:9 works best) |

Keep the same filenames, or update `image` paths in `data.ts`. The hero "Lighthouse 98" card is decorative — edit it in `src/components/portfolio/hero.tsx`.

### 5. Colors & theme — `src/app/globals.css`
Dark palette is defined in `:root` (deep zinc + emerald accent). Swap the accent by changing the `--primary` / emerald utility classes. Utility helpers: `.bg-grid`, `.bg-dots`, `.glow-emerald`, `.glass`, `.text-gradient`.

### 6. SEO identity
- `siteConfig.url` (in `config.ts`) drives the canonical URL, sitemap, robots and JSON-LD — set it to your real domain before deploying.
- The dynamic OG image lives in `src/app/opengraph-image.tsx` (uses your config automatically).
- Favicon: `src/app/icon.svg`.

---

## 📮 Contact Form Backend

**Already working out of the box:** submissions are validated (Zod, same schema client & server), rate-limited (3 per 10 min / IP), and stored in the `ContactInquiry` table.

**Inspect inquiries:**
```bash
npx prisma studio
```

**Optional — receive inquiries by email (Resend example):**
1. `npm install resend`
2. Add to `.env`:
   ```bash
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=you@yourdomain.dev
   ```
3. Uncomment the `sendNotificationEmail()` function and its call in `src/app/api/contact/route.ts` (a ready-made snippet is in the file).

> **Note on deployments:** the default SQLite file works locally. On serverless platforms (Vercel) the filesystem is ephemeral — swap to a hosted Postgres (e.g. Neon, Supabase) by changing `provider = "postgresql"` + `DATABASE_URL` in `prisma/schema.prisma`, or wire the email provider above and treat the DB as optional.

---

## 🌐 Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init && git add -A && git commit -m "Portfolio"
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. **Import on [vercel.com/new](https://vercel.com/new)** → select the repo. Framework preset auto-detects Next.js; build command `npm run build` needs no changes.
3. **Environment variables** (Project → Settings → Environment Variables):
   - `DATABASE_URL` — SQLite default (`file:./db/custom.db`) is fine for a build, but see the serverless note above for real persistence.
4. **Deploy**, then set your real domain in `src/lib/portfolio/config.ts` (`siteConfig.url`) and redeploy so canonical/sitemap/OG URLs are correct.
5. **Verify production**: run `npm run build` locally first — it must complete without errors; then after deploy check `/`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image` and submit one test inquiry.

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact endpoint (validation + DB + rate limit)
│   ├── layout.tsx              # Root layout + full SEO metadata
│   ├── page.tsx                # Section composition + JSON-LD
│   ├── globals.css             # Theme tokens & utilities (dark)
│   ├── sitemap.ts / robots.ts  # Generated sitemap.xml / robots.txt
│   ├── opengraph-image.tsx     # Dynamic OG image (1200×630)
│   └── icon.svg                # Favicon
├── components/
│   ├── portfolio/              # One file per section + shared primitives
│   └── ui/                     # shadcn/ui components
└── lib/
    ├── portfolio/
    │   ├── config.ts           # ✏️ EDIT: identity, links, SEO URL
    │   ├── data.ts             # ✏️ EDIT: all section content
    │   ├── types.ts            # TypeScript interfaces
    │   └── contact-schema.ts   # Shared Zod schema (client + server)
    └── db.ts                   # Prisma client singleton
prisma/schema.prisma            # ContactInquiry model
public/images/                  # Replaceable image assets
```

## 🧰 Stack

Next.js 16 (App Router) · TypeScript 5 · Tailwind CSS 4 · shadcn/ui · Framer Motion · Prisma + SQLite · Zod · Sonner (toasts) · Lucide icons
