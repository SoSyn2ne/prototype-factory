---
name: Field-Ops Ledger
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#cfdef7'
  on-tertiary: '#233144'
  tertiary-container: '#b3c2da'
  on-tertiary-container: '#425064'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  timestamp:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-safe: 1rem
  gutter-data: 0.5rem
  row-height-tap: 3.5rem
  stack-gap: 1px
---

## Brand & Style

The design system is engineered for high-stress, high-stakes environments where restaurant managers and drivers must reconcile financial losses during platform outages. The brand personality is grounded in **Asset Defense (자산 방어)**: a philosophy of precision, data integrity, and reliability. It prioritizes the preservation of evidence over aesthetic flair.

The design style is **Operational Minimalism**—a subset of corporate/utility design that removes all non-essential decorative elements. It uses a "field-ops" profile characterized by dense information architecture, clear logical grouping, and a rugged, utility-first aesthetic that ensures legibility under the harsh lighting of a kitchen or the fluctuating environments of a delivery vehicle. The goal is to evoke an immediate sense of transparency and calm urgency.

## Colors

The palette is built on a foundation of **Operational Slate and Steel**. A dark mode default reduces eye strain in varied lighting and emphasizes the glow of critical status indicators.

- **Background & Base:** `#1e293b` (Slate 900) serves as the primary canvas, providing a deep, stable environment for data entry.
- **Surfaces:** `#334155` (Slate 700) and `#64748b` (Slate 500) are used for panel layering and dividing logical sections of the ledger.
- **Primary Action:** `#22d3ee` (Cyan 400) is used exclusively for constructive actions like "Submit Claim" or "Verify Entry." It provides high contrast against the slate background without the "marketing" feel of standard blues.
- **Incident/Warning:** `#f59e0b` (Amber 500) is reserved for active outages, disputed line items, and critical alerts.
- **Data Integrity:** Success states use a muted emerald, while text is primarily off-white for maximum readability.

## Typography

Typography is used to establish a "Live Evidence Log" feel. **Inter** provides high readability for labels and instructional text, while **JetBrains Mono** is utilized for all system-generated data, IDs, and timestamps to emphasize accuracy and technical proof.

- **Hierarchy:** Headers are compact. We avoid oversized typography to maximize information density.
- **Monospace Integration:** Use monospaced fonts for any value that needs to be compared vertically (e.g., Order IDs, currency amounts, timestamps) to ensure characters align perfectly in list views.
- **Caps:** Small caps are used for metadata labels (e.g., "STATUS," "DISPUTE ID") to distinguish them from user-generated content.

## Layout & Spacing

This design system uses a **utility-first fluid grid**. The layout mimics a physical ledger or a ruggedized handheld terminal.

- **The Stacked Model:** Instead of card-based layouts with large margins, the design system uses "Strips" or "Rows" that span the full width of the screen, separated by 1px slate dividers. This maximizes the number of visible records.
- **Touch Targets:** While the density is high, interactive elements (buttons, row toggles) maintain a minimum height of `3.5rem` (56px) to accommodate use in fast-paced "field" environments where precision clicking is difficult.
- **Information Density:** Use a tight `0.5rem` gutter for data columns within rows. 
- **Breakpoints:** On desktop, the ledger expands into a multi-column spreadsheet view. On mobile, it collapses into a prioritized vertical stack where the Order ID and Amount are anchored to the top of each row.

## Elevation & Depth

Elevation is communicated through **Tonal Layering** and **Rugged Borders** rather than soft shadows. In a "field-ops" context, shadows can feel muddy and imprecise.

- **Level 0 (Background):** `#1e293b`.
- **Level 1 (Panels/Rows):** `#334155`.
- **Active State:** Elements that are being edited or are "Live" receive a `1px` solid border using the Primary Cyan color.
- **Separation:** Logic blocks are separated by high-contrast `1px` lines (`#475569`) rather than spacing, creating a "grid" feel common in industrial software.
- **Zero Shadow Policy:** Shadows are disabled to maintain a flat, high-performance visual profile that feels like a system tool rather than a consumer app.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding provides just enough modern refinement to feel professional while maintaining a "blocky," structural integrity that suggests durability.

- **Buttons & Inputs:** Use `0.25rem` (4px) corner radius.
- **Status Badges:** Use `0px` (Sharp) corners or very slight `2px` rounding to differentiate them from interactive buttons.
- **Selection Indicators:** Use vertical "active bars" (4px width) on the left edge of a row to indicate the current selection instead of rounded checkboxes.

## Components

- **Operational Rows:** The core of the design system. Each row must contain a Monospace ID, a Timestamp, a Status Badge, and a Value. Rows use a hover state of `Slate 600` and an active state border.
- **Primary Action Button:** Cyan background (`#22d3ee`), black text for maximum contrast, bold Inter typeface. Full-width on mobile for thumb accessibility.
- **Status Badges:** Small, rectangular tags with low-opacity backgrounds (e.g., Amber with 20% opacity) and high-contrast text.
- **Data Inputs:** Dark backgrounds with 1px inset borders. Focus state is a glowing Cyan ring. Use monospaced font for numeric inputs.
- **The "Evidence" List:** A specialized list component where each item can be expanded to show a "Log" of events (e.g., "12:04 - Outage Started," "12:08 - Claim Filed"). This log must use the `timestamp` typographic role.
- **Incident Banner:** A persistent, non-dismissible bar at the top of the UI in Amber (`#f59e0b`) when an active system outage is detected.