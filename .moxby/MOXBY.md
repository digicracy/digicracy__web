# MOXBY.md — Digicracy Web Handbook

## Who I'm working with
- **User:** Pankil Joshi (pankil@chainai.com)
- **Location context:** Chandigarh, India
- **Founder of:** GoLegally (commercial) and Digicracy (non-profit research + advocacy initiative)

## The project
**Digicracy** is a non-profit research and advocacy initiative on India's last-mile digital governance. It publishes research, files RTIs, pursues representations, and litigates (PIL) where needed.

**This repo (`digicracy/web`)** is the digicracy.org frontend — the "evidence and publishing spine" of the organisation.

**Related:**
- Trust: Digicracy Foundation (registration pending at handoff)
- Trademark: DIGICRACY filed in Classes 41 + 45 (use ™ until registration)
- Tagline: "Online until it isn't."
- One-liner: "We research and publish the gaps in India's last-mile digital governance."

## Source of truth documents
Brief, spec, and planning docs live in `/Users/pankils-mba/Downloads/digicracy/`:
- `01-build-plan.md` — stage-by-stage build plan
- `02-rti-list.md` — the 7 RTIs for campaign 001
- `03-strategic-context.md` — why Digicracy exists
- `04-trust-setup.md` — trust registration
- `05-trademark-reference.md` — TM filings
- `06-brand-and-homepage-spec.md` — **brand + homepage spec (LOCKED)**

Treat `06-brand-and-homepage-spec.md` as the source of truth for visual/brand decisions. Do not deviate.

## Stack
- **Framework:** Next.js 16 (App Router) + React 19
- **TypeScript** strict mode
- **Styling:** Tailwind CSS v4 (CSS-native config via `@theme inline`)
- **Fonts:** JetBrains Mono + Source Serif 4 (Google Fonts)
- **Path alias:** `@/*` → project root
- **Analytics:** Plausible (NOT Google Analytics — privacy-friendly)
- **Hosting:** Vercel (assumed)

## Brand constraints (from spec)
- Exactly three colours: ink `#152a3a`, ochre `#b4843a`, paper `#f4efe6`. No fourth colour.
- No photographs, no people, no icons from icon packs, no India map, no symbolic imagery, no gradients, no shadows, no cards, no rounded corners above 2px.
- Only two fonts: JetBrains Mono, Source Serif 4.
- The chain motif is the single signature visual element.
- ™ on every Digicracy mention until TM registers.

## Conventions
- Follow the reference project at `/Users/pankils-mba/Documents/golegal.ly/golegally-web` for **structure** (layout.tsx shape, metadata shape, sitemap/robots, ConditionalShell pattern) but NOT for style — Digicracy's brand is entirely different.
- `app/` for routes, `components/` for components, `lib/` for utilities, `src/` for domain data (constants, content model).
- Use `components/layout/` for shell components (Nav, Footer, ConditionalShell).
- Use `components/chain/` for the chain motif (it's the brand's signature).
- Use `components/home/` for homepage section components.

## Routes (per build plan Stage 1)
- Primary: `/`, `/research`, `/filings`, `/reports`, `/press`, `/about`, `/contact`
- Dynamic: `/research/[slug]`, `/filings/[id]`, `/reports/[slug]`
- Legal: `/privacy`, `/terms`, `/disclaimer`, `/cookies`

## How I operate
- Read the spec before touching visuals.
- Favour the smallest, most legible component that meets the spec. No over-engineering.
- No icon libraries (the spec forbids icons).
- No shadcn/radix unless absolutely necessary (the spec's chrome is raw HTML + Tailwind).
- Keep analytics privacy-friendly (Plausible).
- ALWAYS add ™ next to "Digicracy" in UI.
