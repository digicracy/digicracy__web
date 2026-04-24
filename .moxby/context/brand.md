# Digicracy Brand Reference (condensed)

Full spec: `/Users/pankils-mba/Downloads/digicracy/06-brand-and-homepage-spec.md`

## Identity
- **Name:** DIGICRACY (all caps in logo; "Digicracy" sentence case in running text)
- **Mark:** ™ everywhere until TM registers (Classes 41 + 45 filed)
- **Tagline:** Online until it isn't.
- **One-liner:** We research and publish the gaps in India's last-mile digital governance.

## Palette (exactly three — no fourth colour)
| Role | Hex | Usage |
|---|---|---|
| Ink | `#152a3a` | Primary text, logo, structural elements, working-state nodes |
| Ochre (text) | `#8b5e1c` | CTAs, labels, underlines, metadata, footer band, OFFLINE labels |
| Ochre (decorative) | `#b4843a` | Chain strokes, stamp borders, dashed lines (graphics-only) |
| Paper | `#f4efe6` | Background throughout |

Muted text = ink at 50% opacity. No separate grey.

> **Accessibility deviation from original spec:** the spec locked ochre at `#b4843a`.
> On paper that gives 2.91 WCAG contrast — fails AA (4.5) for body text and AA Large (3.0).
> Because Digicracy is a publication-first NGO, we deepened the text-role ochre to `#8b5e1c`
> (contrast 4.83 on paper, passes AA). The original `#b4843a` is retained as a "decorative
> ochre" for chain strokes, dashed lines, and stamp borders — graphics where WCAG text rules
> don't apply. The hue is unchanged; only lightness. Result: same visual identity, readable.

## Typography
- **JetBrains Mono** (400, 700): logo, nav, headings, section labels, data, filing numbers, metadata, CTAs, footer, chain captions
- **Source Serif 4** (400, 600, italic): body paragraphs, publication/campaign titles, italic captions
- Body: 16-17px, line-height 1.6. Headings line-height 1.25. Max line length ~70ch.

## Chain motif (the signature visual)
- Solid ink circle = working step
- Hollow ochre circle (1.5px stroke, paper fill) = broken/problematic step
- Solid ink line = working connection
- Dashed ochre line (4px dash / 4px gap) = broken/uncertain connection
- Labels: JetBrains Mono ~11px all caps below nodes; `OFFLINE`, `MANUAL`, or `BROKEN` in ochre below hollow nodes
- **No numbers inside nodes.**
- Sizes: hero 22px dia, current investigation 18px, how-we-work 24px.

## Chrome rules
- Corners: max 2px radius. Prefer sharp.
- No shadows, no elevation, no cards.
- 1px ink rules as section separators.
- Rectangles use 1-2px ink or ochre strokes only.
- No icons, illustrations, photos, patterns, gradients.

## Motion
- Hero chain builds L→R node-by-node over ~800ms on load (no loop).
- Link hover: ochre underline appears in 150ms.
- Nothing else animates.

## Forbidden (verbatim from spec)
- Photographs, people, illustrations, icons, India map, lotus/gavel/scale/magnifying glass
- Gradients, fourth colour, rounded corners >2px, shadows, cards
- Testimonials, trusted-by strips, hero/background image, decorative patterns
- Auto-playing anything, dark mode toggle, language toggle (v1)
