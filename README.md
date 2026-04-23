# digicracy-web

Frontend for [digicracy.org](https://digicracy.org) — a non-profit research and advocacy initiative on India's last-mile digital governance.

## Stack
- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4
- JetBrains Mono + Source Serif 4 (Google Fonts)

## Getting started
```bash
pnpm install      # or npm install / yarn
cp .env.example .env.local
pnpm dev          # http://localhost:3000
```

## Commands
```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm start        # run production build
pnpm lint         # lint
pnpm typecheck    # type-check without emitting
```

## Structure
```
app/                      # Next.js App Router pages
  layout.tsx              # Root layout (metadata, fonts, Organization schema)
  globals.css             # Brand tokens, base styles
  page.tsx                # Homepage
  sitemap.ts | robots.ts  # SEO
  research/               # Publications
  filings/                # RTI database
  reports/                # Published reports
  press/                  # Press contact + kit
  about/
  contact/
  privacy/ terms/ disclaimer/ cookies/

components/
  chain/                  # The signature chain motif (reusable)
  layout/                 # Header, Footer, Shell
  home/                   # Homepage section components

lib/                      # Utilities (cn helper, formatters)
src/content/              # MDX content (publications, filings, reports)
```

## Brand
Three colours only: ink `#152a3a`, ochre `#b4843a`, paper `#f4efe6`.
Two fonts only: JetBrains Mono, Source Serif 4.
No icons, no photos, no shadows, no gradients, no fourth colour.

Full spec lives in `/Users/pankils-mba/Downloads/digicracy/06-brand-and-homepage-spec.md` (and mirrored in `.moxby/context/brand.md`).

## License
Content © Digicracy Foundation. Code — TBD.
