---
name: Shield Ledger System
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6ca'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8f9094'
  outline-variant: '#45474a'
  surface-tint: '#c6c6ca'
  primary: '#c6c6ca'
  on-primary: '#2f3034'
  primary-container: '#121417'
  on-primary-container: '#7d7e82'
  inverse-primary: '#5d5e62'
  secondary: '#ffe2ab'
  on-secondary: '#402d00'
  secondary-container: '#ffbf00'
  on-secondary-container: '#6d5000'
  tertiary: '#c4c6ce'
  on-tertiary: '#2d3037'
  tertiary-container: '#11141a'
  on-tertiary-container: '#7c7e86'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e6'
  primary-fixed-dim: '#c6c6ca'
  on-primary-fixed: '#1a1c1f'
  on-primary-fixed-variant: '#45474a'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#fbbc00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#e1e2ea'
  tertiary-fixed-dim: '#c4c6ce'
  on-tertiary-fixed: '#191c21'
  on-tertiary-fixed-variant: '#44474d'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
spacing:
  unit: 4px
  gutter: 12px
  margin-page: 24px
  row-height-dense: 32px
  row-height-standard: 44px
---

## Brand & Style

The design system is engineered for the high-stakes environment of chargeback defense and financial litigation. It adopts a **Modern-Brutalist** aesthetic combined with **Operator-Dense** utility. The goal is to evoke a sense of absolute control, technical precision, and unwavering reliability.

The visual narrative centers on "Asset Defense"—the systematic protection of capital and reputation. The UI mimics the efficiency of a command center, prioritizing data throughput over decorative elements. It feels like a high-end financial terminal: authoritative, rigorous, and impenetrable. Every pixel is dedicated to surfacing risk and facilitating rapid defensive action.

## Colors

The palette is rooted in a "Deep Charcoal" ecosystem to reduce eye strain during long-duration monitoring. 

- **Primary Interface:** Uses a scale of slates and charcoals to create subtle hierarchy without breaking the "dense" feel.
- **Amber Risk Accent (#FFBF00):** Reserved exclusively for warnings, critical alerts, and the concept of "Asset Defense." It is the only warm tone in the system.
- **High-Contrast Status:** Success (Safe) and Danger (Risk) use vibrant, high-saturation greens and reds against the dark background to ensure immediate cognitive processing.
- **Text:** Stark white (#FFFFFF) for primary data; Slate-400 (#94A3B8) for metadata and labels.

## Typography

This design system utilizes a dual-font strategy to balance legibility with technical character.

- **JetBrains Mono:** Used for headers, labels, and all numerical data. The monospaced nature ensures that columns of numbers align perfectly, essential for ledger-style auditing.
- **Inter:** Used for body text and descriptions. Its high x-height and neutral tone provide excellent legibility at small sizes (13px-14px).
- **Scale:** Type sizes are intentionally small to facilitate high information density. Uppercase styling is used for labels to denote "Permanent Record" status.

## Layout & Spacing

The layout follows a **Fixed-Grid Ledger** model. Information is organized into rigid horizontal rows and vertical columns to facilitate rapid scanning.

- **Grid:** 12-column grid for desktop, but primarily driven by a 4px base spacing unit.
- **Density:** Padding is minimal. Row heights are constrained (32px for dense data, 44px for standard).
- **Reflow:** On mobile, data grids transform into "Compact Proof Cards," where each row of the ledger becomes a self-contained card module to maintain readability.
- **Dividers:** Use 1px borders (#272A30) rather than whitespace to separate data points, reinforcing the ledger feel.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **Bold Outlines**. 

- **Hierarchy:** Depth is communicated through color stepping (e.g., a darker background for the workspace and a slightly lighter slate for active panels).
- **Borders:** Active states or "Asset Defense" focus areas are highlighted with a 1px solid Amber border or a high-contrast white border.
- **Backdrop:** Modals use a heavy 80% dark blur to isolate the "Defense" action from the underlying ledger data without losing context.

## Shapes

The shape language is **Sharp (0px)**. 

To maintain the "Operator-Dense" and "Legal Ledger" feel, the design system avoids rounded corners. Every element—buttons, cards, input fields, and badges—features hard 90-degree angles. This architectural rigidity suggests stability, precision, and a no-nonsense approach to financial defense.

## Components

- **Data Rows:** The primary component. Each row must have a hover state that highlights the entire horizontal axis in a subtle gray (#1E2126).
- **Status Badges:** Solid, rectangular blocks of color. Success (Green), Danger (Red), and Warning (Amber) with bold black or white text. No transparency.
- **Proof Cards:** Compact containers used to display evidence. They use 1px borders and monospaced labels for "Time of Incident," "Transaction ID," and "Defense Status."
- **Action Buttons:** Small, high-contrast rectangles. Primary actions are Amber with black text; secondary actions are outlined in white.
- **Asset Defense Cues:** Specific UI patterns—like a "Shield" icon or a vertical Amber accent bar—that mark data points currently being "defended" or "under lock."
- **Inputs:** Dark backgrounds with 1px slate borders. The caret and focus state should always be the Amber accent color.