---
name: Fiduciary Ink
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
  secondary: '#934b00'
  on-secondary: '#ffffff'
  secondary-container: '#fe9742'
  on-secondary-container: '#6b3500'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#171e0f'
  on-tertiary-container: '#7e8772'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb782'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#703800'
  tertiary-fixed: '#dde6ce'
  tertiary-fixed-dim: '#c1cab3'
  on-tertiary-fixed: '#171e0f'
  on-tertiary-fixed-variant: '#414938'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-memo:
    fontFamily: Source Serif 4
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  data-table:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  max-width: 1100px
---

## Brand & Style

The design system is engineered for high-stakes financial interrogation and renewal analysis. It adopts an **Ink-and-Paper** aesthetic, moving away from the ephemeral nature of digital dashboards toward the permanent, authoritative feel of a printed fiduciary memo.

The target audience consists of senior analysts and risk officers who require high-density information without visual fatigue. The emotional response is one of **clinical precision, defensive vigilance (자산 방어), and absolute clarity**. 

The style is a hybrid of **Minimalism** and **Modern Document Design**. It rejects digital-native tropes like vibrant gradients, heavy shadows, and rounded "bubbly" buttons. Instead, it relies on structural hierarchy, hairline rules, and purposeful whitespace to communicate importance and urgency. Every element is designed to feel "stamped" or "printed" on the page.

## Colors

This design system utilizes a high-contrast, limited palette to mimic professional stationery and ink.

- **Surface (Paper):** The primary background (`#F9F8F4`) is a warm, off-white "Paper" tone that reduces eye strain compared to pure white and reinforces the physical memo metaphor.
- **Ink (Text/Primary):** Deep "Ink" black (`#1A1A1A`) is used for all primary data and text. No grey-scaling for body text; legibility must be absolute.
- **Alert (Burnt Orange):** A restrained "Burnt Orange" (`#C66B16`) acts as the sole signal for warnings, negative deltas, or renewal risks. It feels like an analyst's highlight rather than a digital error.
- **Accent (Fiduciary Green):** A muted, dark moss green (`#4A5240`) is used sparingly for positive growth or "Safe" statuses, maintaining the serious, clinical tone.

## Typography

Typography is the core of this design system, balancing the authority of a serif header with the efficiency of a sans-serif data layer.

- **Headers:** `Source Serif 4` provides a traditional, editorial authority. Large headers should be treated like document titles, with tight tracking.
- **Body & Data:** `Inter` is used for primary reading and numerical data in tables due to its exceptional legibility at small sizes.
- **Metadata & Labels:** `JetBrains Mono` is used for technical labels, timestamps, and "interrogation" fields to provide a precise, systematic feel.

**Note on Numbers:** Always use tabular lining (tnum) for numerical data in tables to ensure vertical alignment of decimals and digits.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, centering the content like a physical A4 or Letter-sized document. 

- **Structure:** A 12-column grid with a maximum width of 1100px. 
- **Density:** The design system prioritizes high information density. Spacing between data rows in tables is kept to a minimum (8px) to allow for side-by-side interrogation of metrics.
- **Margins:** Generous outer margins (`64px` on desktop) are used to frame the "document" and prevent the UI from feeling like a sprawling dashboard.
- **Mobile:** On mobile, the layout collapses to a single column with `20px` side margins. Tables should allow horizontal scrolling while keeping the primary "Asset" column sticky.

## Elevation & Depth

This design system is **flat and structural**. It explicitly avoids shadows, blurs, and 3D effects.

- **Z-Axis:** Hierarchy is communicated through **hairline rules** (0.5pt to 1pt) and tonal shifts in the background. 
- **Dividers:** Use `#1A1A1A` with 10% opacity for standard dividers. Use a 2pt solid `#1A1A1A` rule for major section breaks.
- **Layers:** "Interrogation" panels or callouts use a slightly darker paper tint or a 1px solid border. There are no floating cards; every element is anchored to the page grid.

## Shapes

The shape language is **Sharp (`0`)**. 

All buttons, input fields, and containers have 0px border radii. This reinforces the "cut paper" and professional document aesthetic. The only exception is for circular status indicators (dots), which should be used sparingly to indicate "Live" or "Critical" status.

## Components

- **Delta Tables:** High-density rows with no vertical borders. Horizontal borders are 0.5px hairline. Positive deltas are green, negative are Burnt Orange, both using a small "up/down" glyph.
- **Interrogation Fields:** Input fields appear as a single bottom border (underline style) with a `JetBrains Mono` label floating above. On focus, the border thickness increases from 1px to 2px.
- **Plain-English Callouts:** Information blocks that summarize data. These are styled with a thick 4px left-border in primary ink or alert orange to draw the analyst's eye.
- **Buttons:** Primary buttons are solid `#1A1A1A` with white text. Secondary buttons are outlined in 1px ink. No hover "glow"; use a simple invert or fill-shift for interaction states.
- **Status Chips:** Rectangular, sharp-edged chips with a light background tint of the status color and dark text. (e.g., Warning: Light orange background, Burnt Orange text).
- **The "Seal":** A unique component for renewal memos—a signature block at the bottom of the analysis that acts as the final "Approval" or "Rejection" trigger.