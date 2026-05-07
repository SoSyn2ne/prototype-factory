---
name: Human Chatter Trust Filter
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#74593e'
  on-secondary: '#ffffff'
  secondary-container: '#fdd9b6'
  on-secondary-container: '#785e42'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#062104'
  on-tertiary-container: '#6d8c63'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdcbb'
  secondary-fixed-dim: '#e3c09f'
  on-secondary-fixed: '#2a1803'
  on-secondary-fixed-variant: '#5a4228'
  tertiary-fixed: '#caecbc'
  tertiary-fixed-dim: '#afd0a1'
  on-tertiary-fixed: '#062104'
  on-tertiary-fixed-variant: '#324e2a'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-editorial:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1-serif:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  h2-serif:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  quote-body:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  ui-body:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  ui-medium:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
  data-label:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  margin-page: 64px
  gutter-grid: 32px
  stack-compact: 8px
  stack-default: 24px
  stack-editorial: 48px
  card-padding: 40px
---

## Brand & Style
This design system is built to evoke the quiet authority of a high-end research institution combined with the aesthetic precision of a luxury editorial publication. It positions the user as an "insight curator" rather than a mere data analyst. 

The visual style is rooted in **Minimalism** with a heavy emphasis on intentional whitespace and typographic hierarchy. Every element is designed to reduce cognitive load, allowing the "chatter" to be filtered through a lens of academic rigor. The emotional response should be one of calm, focused intelligence—moving away from the frantic nature of real-time social feeds toward a more contemplative, "slow-data" experience.

## Colors
The palette is centered on a high-contrast relationship between **Ivory (#FDFCF8)** and **Dark Ink (#1A1A1A)**. This mimics the tactile feel of premium heavy-weight paper and archival ink. 

- **Primary (Ink):** Used for all structural UI elements, primary text, and heavy iconography.
- **Background (Ivory):** The foundational canvas. It provides a warmer, more sophisticated alternative to stark digital white, reducing eye strain during long research sessions.
- **Secondary (Bronze):** A muted metallic tone used sparingly for premium highlights and "Verified" states.
- **Tertiary (Deep Forest):** Reserved specifically for high-trust scores and positive sentiment indicators, ensuring they remain legible but grounded.

## Typography
The typographic strategy relies on the interplay between **Newsreader** and **Manrope**. 

**Newsreader** is the editorial soul of this design system. It is used for headlines, blockquotes, and primary insights. Its traditional, authoritative character lends an intellectual weight to the content. 

**Manrope** provides the functional counterpoint. As a modern, geometric sans-serif, it handles the UI controls, data visualizations, and metadata with clinical clarity. 

Use optical sizing for Newsreader where possible—looser tracking and lighter weights for large display titles, and more robust weights for sub-headers. Labels should always be in Manrope and often utilize uppercase styling to create a clear distinction between the "content" (Serif) and the "tooling" (Sans-Serif).

## Layout & Spacing
This design system utilizes a **fixed-grid** philosophy inspired by broadsheet newspaper layouts. The primary content container is centered with generous 64px margins to prevent the interface from feeling "crowded."

The rhythm is intentionally spacious. While standard SaaS products optimize for density, this design system optimizes for **focus**. 
- **Editorial Stack:** Use 48px or 64px gaps between major content sections (e.g., between the search control and the results).
- **The Golden Ratio:** Use a 12-column grid where the main "Insight Feed" occupies 8 columns and the "Source/Metadata Panel" occupies 4 columns.
- **Negative Space:** Quote cards should feature at least 40px of internal padding to let the text "breathe."

## Elevation & Depth
Depth is communicated through **Low-Contrast Outlines** and **Tonal Layering** rather than aggressive shadows. This maintains the "printed matter" aesthetic.

- **The Canvas:** The base layer is the Ivory background.
- **The Cards:** Interactive elements sit on a slightly elevated surface defined by a 1px solid border in `border_subtle` (a very faint ink). 
- **Active States:** Instead of a shadow, an active card might receive a 2px border or a subtle shift in background color to a slightly cooler parchment tone.
- **Overlays:** If a modal or source panel is required, use a solid Ivory background with a crisp, 1px Ink border. Avoid backdrop blurs, as they feel too "software-heavy" for this academic context.

## Shapes
This design system adopts a **Sharp (0px)** roundedness profile. Right angles reinforce the feeling of a professional desk, architectural blueprints, and traditional paper. 

Every UI element—from buttons and input fields to large quote cards—should feature crisp, 90-degree corners. The only exception is for circular avatars or trust-score "nodes" where a geometric circle helps distinguish human entities from the structured data around them.

## Components
- **Curated Quote Cards:** These are the primary atoms. They feature a large serif quote, followed by a thin horizontal rule, and then the source metadata in a small sans-serif font.
- **Trust-Score Annotations:** Small, vertical tags or labels that sit on the edge of a card. They use the `data-label` typography and a color-coded vertical bar (Deep Forest for high trust).
- **Source Panels:** Magazine-like sidebars that provide deep-dive information about a chatter's history. They use a slightly more condensed version of the UI typography and include "Archival" icons.
- **Noise-Reduction Controls:** Minimalist sliders with no track color—only a thin ink line and a square handle. Labels appear only on hover or interaction to keep the interface clean.
- **Buttons:** Ghost-style buttons with 1px ink borders and no fill. Text is centered in Manrope Bold. On hover, the button fills with Ink and the text flips to Ivory.
- **Input Fields:** Single-line inputs with no background, defined only by a bottom border (1px Ink). Labels sit above the line in uppercase `data-label` style.