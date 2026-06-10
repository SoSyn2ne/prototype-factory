---
name: Audit & Ledger
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#46474a'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#3a6847'
  on-secondary: '#ffffff'
  secondary-container: '#bcefc5'
  on-secondary-container: '#406e4d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#410006'
  on-tertiary-container: '#cf6261'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#bcefc5'
  secondary-fixed-dim: '#a1d2aa'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#225031'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410006'
  on-tertiary-fixed-variant: '#80272a'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 16px
  margin-desktop: 40px
  margin-mobile: 16px
  container-max: 1280px
---

## Brand & Style
The design system is engineered for the high-stakes environment of Korean tax law and financial analysis. The brand personality is **authoritative, meticulous, and defensible**. It targets professional tax accountants and serious taxpayers who require a sense of permanence and "paper-trail" reliability.

The design style is a hybrid of **Modern Minimalism** and **Tactile Professionalism**. It utilizes a "Tax Binder" metaphor—moving away from the ethereal nature of typical SaaS and toward the physical weight of a ledger. This is achieved through structured grid lines, heavy use of rules (borders), and a density that suggests comprehensive data coverage rather than simplified summaries. Every pixel must feel intentional and legally sound.

## Colors
The palette is rooted in the "Ink and Paper" philosophy.
- **Ink (#1A1A1B):** Used for primary text and critical structural elements to provide maximum contrast.
- **Graphite (#333333):** Used for secondary text, labels, and iconography to maintain legibility without the harshness of pure black.
- **Off-White (#F9F7F2):** The base canvas color, mimicking high-quality cream ledger paper to reduce eye strain during long analytical sessions.
- **Muted Green (#4A7856):** Used sparingly to denote "Verified," "Filed," or "Tax Saved." It represents quiet confidence.
- **Clay Red (#B24C4C):** Reserved strictly for missing evidence, warnings, or legal non-compliance.

## Typography
The system employs a dual-font strategy. **Source Serif 4** provides an editorial, "official document" feel for headers and section titles, invoking the heritage of Korean legal ledgers. **Inter** is used for all functional data, numbers, and body text to ensure maximum legibility and a systematic, modern feel.

For financial tables, use tabular lining figures (monospaced numbers) to ensure columns of figures align vertically, aiding quick calculation and audit.

## Layout & Spacing
The layout follows a **Fixed-Grid Ledger** model. It prioritizes information density over white space.
- **Grid:** A 12-column grid for desktop. Use hairline dividers (1px) instead of large gaps to separate content blocks, mimicking the ruled lines of a ledger.
- **Density:** Elements should be tightly grouped to allow more data on-screen, but kept legible through strict vertical alignment.
- **Responsive:** On mobile, columns collapse into a single vertical stack, but the "border-bottom" treatment remains consistent to preserve the binder aesthetic.

## Elevation & Depth
This design system rejects floating shadows in favor of **Tonal Stacking** and **Subtle Materiality**. 
- **The "Binder" Effect:** Depth is created by 1px "Ink" borders and very subtle, small-radius shadows (e.g., `box-shadow: 0 1px 3px rgba(26, 26, 27, 0.1)`). 
- **Paper Textures:** Cards and surfaces use a very faint grain or "paper" texture overlay to distinguish themselves from the background.
- **Rules:** Vertical and horizontal rules (hairlines) are the primary way to define hierarchy, not depth. When an element is "active," it should look like a tab in a binder—slightly offset or underlined with a 2px rule.

## Shapes
The shape language is strictly **Sharp (0px)**. Rounded corners are avoided to maintain an atmosphere of precision, formality, and legal rigidity. Every button, input, and container is a perfect rectangle, suggesting the cut edges of professional documents.

## Components
- **Buttons:** Primary buttons use a solid `Ink` background with `Off-White` text. Secondary buttons use a 1px `Ink` border. No rounded corners. The interaction state should be a simple opacity shift or a subtle fill change to `Graphite`.
- **Inputs:** Text fields are defined by a 1px bottom border only (`Ink`), resembling a signature line or a ledger entry line. Labels sit above the line in `label-sm` style.
- **Cards:** Content containers use a slightly lighter shade of the background or a 1px border. Use a "Binder Header" treatment: a dark `Ink` top-border (2px or 3px) to anchor the card.
- **Data Tables:** These are the core of the system. Use alternating row fills (subtle grey) or strictly ruled lines. Column headers should be in `label-sm` with a solid `Ink` bottom border.
- **Status Chips:** Rectangular tags using `Muted Green` or `Clay Red` backgrounds with high-contrast text. No border-radius.
- **Binder Tabs:** For navigation between different tax years or filing sections, use vertical or horizontal tabs that physically "attach" to the content area with a shared border.