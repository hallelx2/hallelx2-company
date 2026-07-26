# Integrated Biosciences — Style Reference for Hallelx2
> Bioluminescent laboratory at midnight

**Theme:** mixed

Integrated Biosciences operates in a darkroom-laboratory visual language: a near-black canvas with cool green undertones, restrained white typography, and a single bioluminescent lime accent that activates only on small interactive elements like arrow buttons, tag dots, and progress indicators. The entire type system runs on a single weight of Aspekta — hierarchy is sculpted purely through size and aggressive negative letter-spacing, which makes 111px and 158px display lines feel architectural rather than decorative. Roboto Mono is reserved for technical labels, nav items, and metadata, reinforcing the instrumentation-bench character of the brand. Surfaces stay mostly flat — no shadows, no gradients — with thin hairline borders in #c9cbbe or #4d5757 doing all the delineation. Light sections flip to a warm off-white canvas (#f7f7f5) with white cards, but the green accent persists as a constant biological signal.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Bioluminescent Lime | `#cef79e` | `--color-bioluminescent-lime` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Abyssal Ink | `#222f30` | `--color-abyssal-ink` | Primary text, borders, dark canvas sections, nav backgrounds. Near-black with a cool green undertone — it is not pure black, it carries the same green note as the accent. Darkest content surface |
| Bone White | `#f7f7f5` | `--color-bone-white` | Light-section page canvas, hero/section backgrounds when in light mode. Warm off-white with the faintest cream cast |
| Paper | `#ffffff` | `--color-paper` | Card surfaces on light sections, elevated containers, icon fills, body text on dark surfaces. The brightest surface in the system |
| Graphite | `#4d5757` | `--color-graphite` | Secondary body text, muted metadata, subdued borders, ghost button outlines. Mid-tone with a green undertone matching the system |
| Lichen | `#c9cbbe` | `--color-lichen` | Hairline borders, subtle dividers, placeholder metadata text. Warm desaturated green-beige that disappears on white but is visible on #f7f7f5 |
| Tissue | `#e7e8e1` | `--color-tissue` | Alternate card surface — warmer light gray used to differentiate secondary cards or muted content blocks from the white primary surface |
| Frost | `#eeeeee` | `--color-frost` | Neutral light card surface when a non-warm alternate is needed |
| Void | `#000000` | `--color-void` | Footer background, pure black anchors. Used sparingly as a true neutral when the Abyssal Ink is too colored |

## Tokens — Typography

### Aspekta (Substitute: Inter Tight)
- **Weights:** 400
- **Sizes:** 16px, 18px, 19px, 22px, 24px, 36px, 42px, 58px, 75px, 89px, 111px, 158px
- **Line height:** 1.00–1.30
- **Letter spacing:** -0.03em at 158px, -0.02em at 89–111px, -0.006em at 36–42px, -0.001em at 16–19px

### Roboto Mono
- **Weights:** 400
- **Sizes:** 13px, 14px, 15px
- **Line height:** 1.00–1.23
- **Letter spacing:** -0.02em at 13px, -0.008em at 14px, -0.007em at 15px

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 13px | 1.23 | -0.26px | `--text-caption` |
| body | 18px | 1.3 | -0.018px | `--text-body` |
| body-lg | 22px | 1.3 | -0.13px | `--text-body-lg` |
| subheading | 24px | 1.2 | -0.14px | `--text-subheading` |
| heading-sm | 36px | 1.2 | -0.22px | `--text-heading-sm` |
| heading-lg | 58px | 1.1 | -0.7px | `--text-heading-lg` |
| display | 75px | 1.1 | -1.5px | `--text-display` |
| display-lg | 89px | 1.1 | -1.78px | `--text-display-lg` |
| display-xl | 111px | 1 | -2.22px | `--text-display-xl` |
| hero | 158px | 1 | -4.74px | `--text-hero` |

## Tokens — Spacing & Shapes

**Base unit:** 4px
**Density:** comfortable

### Spacing Scale
4px, 8px, 12px, 16px, 20px, 24px, 40px, 44px, 48px, 52px, 60px, 88px, 100px, 160px

### Border Radius
- nav: 12px
- tags: 9999px
- cards: 16-20px
- buttons: 8px
- largeCards: 40px

### Layout
- Page max-width: 1200px
- Section gap: 80-120px
- Card padding: 40px
- Element gap: 8-20px
