---
name: Control-Room Workbench
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e4e2e4'
  on-surface-variant: '#dac3ad'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#a28d79'
  outline-variant: '#544433'
  surface-tint: '#ffb868'
  primary: '#ffc688'
  on-primary: '#482900'
  primary-container: '#ff9f0a'
  on-primary-container: '#673d00'
  inverse-primary: '#885200'
  secondary: '#68d3ff'
  on-secondary: '#003546'
  secondary-container: '#139cc7'
  on-secondary-container: '#002e3d'
  tertiary: '#93daff'
  on-tertiary: '#003548'
  tertiary-container: '#00c3ff'
  on-tertiary-container: '#004d67'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddbb'
  primary-fixed-dim: '#ffb868'
  on-primary-fixed: '#2b1700'
  on-primary-fixed-variant: '#673d00'
  secondary-fixed: '#bee9ff'
  secondary-fixed-dim: '#68d3ff'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d64'
  tertiary-fixed: '#c1e8ff'
  tertiary-fixed-dim: '#73d1ff'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#004d67'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#353437'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1.5rem
  gutter: 1rem
  component-gap-xs: 4px
  component-gap-sm: 8px
  section-margin: 24px
---

## Brand & Style
The design system is engineered for high-density information management and rapid decision-making. It adopts a **Corporate / Modern** aesthetic with a heavy leaning toward **technical utility**, mimicking the atmosphere of a digital flight deck or industrial control center. 

The personality is sober, authoritative, and strictly professional. It prioritizes data integrity and cognitive load management over decorative elements. The UI should evoke a sense of calm, absolute control for publishers managing complex bot traffic. Visual flair is restricted to functional utility, ensuring that niche media operators can monitor, intercept, and verify automated traffic with zero ambiguity.

## Colors
The palette is rooted in a "Deep Dark" mode to reduce eye strain during long monitoring sessions. 

- **Primary (Safety Orange):** Reserved strictly for critical alerts, active interceptions, and high-priority "Apply" actions.
- **Secondary (Data Blue):** Used for interactive elements, selection states, and non-critical bot identifiers.
- **Neutrals (Charcoal/Slate):** A tiered system of grays defines the structural hierarchy. The background is a pure black-tinted charcoal to maximize contrast with data points.
- **Functional Colors:** Green is used for "Verified" status, while Red is reserved for "Blocked" or "Malicious" traffic.

## Typography
Typography is split between human-centric navigation and machine-centric data. 

- **Hanken Grotesk** provides a sharp, contemporary sans-serif feel for headers and general UI copy, ensuring high legibility at small sizes.
- **JetBrains Mono** is utilized for all "technical" strings, including Bot IDs, IP addresses, User-Agent strings, and rule logic. This distinction helps operators instantly differentiate between UI controls and the data they are manipulating.
- Font weights are kept lean (400-600) to maintain a clean, technical appearance.

## Layout & Spacing
This design system utilizes a **Fixed Grid** approach for internal dashboard modules to ensure data columns align perfectly across different panels. 

The layout follows an **8px rhythm** for structural components and a **4px rhythm** for dense data cells. 
- **Desktop:** 12-column grid with narrow 16px gutters to maximize horizontal density.
- **Zone Separation:** Functional areas are separated by 1px borders rather than wide margins. This "cockpit" layout ensures that as much information as possible is visible above the fold.
- **Reflow:** On smaller screens, sidebars collapse into icon-only rails, and data tables transition into expandable list items.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows. 

- **Level 0 (Background):** The deepest layer, used for the main application backdrop.
- **Level 1 (Panels):** Raised slightly using a lighter charcoal shade (`#1C1C1E`) and a subtle `1px` border (`#2C2C2E`).
- **Level 2 (Popovers/Modals):** These use a more pronounced border and a very subtle ambient blur to provide focus, but remain flat to the surface to maintain the "instrument panel" feel.
- **Active States:** Highlighted with the Amber accent or a subtle background tint, never with "glow" effects.

## Shapes
Shapes are disciplined and efficient. A **Soft (0.25rem)** corner radius is used sparingly to prevent the UI from feeling "aggressive," but it remains sufficiently sharp to look industrial and precise. 

- **Status Badges:** Use the same 4px radius for a uniform, "tag" appearance.
- **Inputs & Toggles:** Square or minimally rounded to reinforce the tool-like nature of the interface.

## Components
- **Buttons:** Compact and rectangular. Primary buttons use the safety orange background with black text. Secondary buttons are outlined.
- **Status Badges (Chips):** Small-caps `label-mono` text. Use color-coded backgrounds with low opacity (e.g., 10% green for "Verified") and a high-contrast label.
- **Data Tables:** High-density ledgers. Use alternating row tints for readability. Columns containing IDs or hashes must use `label-mono`.
- **Toggles:** Narrow, switch-style controls that offer a clear "Armed/Disarmed" visual state.
- **Input Fields:** Dark background with a `1px` border that brightens on focus. Use monospaced font for rule entry fields.
- **The "Toll Gate" Ledger:** A specialized list component showing real-time traffic, with a "Quick Action" column for immediate blocking or whitelisting of bot signatures.