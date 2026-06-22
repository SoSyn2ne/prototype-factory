---
name: Fiscal Precision
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#434749'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747879'
  outline-variant: '#c3c7c8'
  surface-tint: '#586062'
  primary: '#181f21'
  on-primary: '#ffffff'
  primary-container: '#2d3436'
  on-primary-container: '#959c9f'
  inverse-primary: '#c1c8ca'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#00240e'
  on-tertiary: '#ffffff'
  tertiary-container: '#003c1b'
  on-tertiary-container: '#00b35d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde4e6'
  primary-fixed-dim: '#c1c8ca'
  on-primary-fixed: '#161d1f'
  on-primary-fixed-variant: '#41484a'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#6bfe9c'
  tertiary-fixed-dim: '#4ae183'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005228'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system is engineered for high-stakes financial decision-making within the customs and logistics sector. The brand personality is **defensive, analytical, and authoritative**, prioritizing asset protection and regulatory compliance over aesthetic flair. 

The visual style follows a **Modern Corporate** approach with a focus on **Information Density**. It utilizes a structured, flat interface that mirrors the reliability of financial ledgers. Every design choice is intended to reduce cognitive load during complex data analysis, ensuring that "Asset Protection" (자산 방어) is felt through precise alignment, clear hierarchies, and high-contrast logic.

## Colors

The palette is intentionally restrained to direct focus toward critical financial deltas. 

- **Primary (Graphite):** Used for structural elements, headers, and primary text to establish a grounded, professional tone.
- **Secondary (Off-white):** Utilized for large panel backgrounds to differentiate work areas from the global background without creating harsh contrast.
- **Success (Muted Green):** Reserved exclusively for positive financial outcomes, tariff savings, and validated optimizations.
- **Warning (Amber):** Indicates risk bands, uncertainty in classification, or potential audit triggers.
- **Neutral/Background:** A soft grey-green tint (#F4F7F6) reduces eye strain during prolonged analytical sessions.

## Typography

Typography focuses on **tabular legibility** and **numeric precision**. We use **Inter** for its neutral, highly readable letterforms in functional UI contexts. 

For numeric data, HS codes, and financial values, **JetBrains Mono** is introduced to ensure that digit alignment is perfect, aiding in the quick comparison of long strings of numbers. 

- **Headlines:** Keep short and direct.
- **Data-Mono:** Use for all currency values, percentage deltas, and tariff codes.
- **Korean Context:** When rendering '자산 방어', ensure font-weight is boosted by one level to maintain visual parity with English counterparts.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Density:** High. Margins and gutters are kept tight (16px) to maximize the amount of visible data on a single screen.
- **Workspaces:** The layout is divided into a "Global Navigation" sidebar and a "Primary Workspace" composed of modular panels.
- **Table Layout:** Tables should use a fixed-header, sticky-column approach for horizontal scrolling of extensive customs data. Row height is locked to 40px for standard density and 32px for compact views.

## Elevation & Depth

This system avoids heavy shadows to maintain a "flat financial" aesthetic. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** #F4F7F6.
- **Level 1 (Panels/Cards):** #FFFFFF with a 1px solid border (#D1D8D7). No shadow.
- **Level 2 (Modals/Overlays):** #FFFFFF with a very subtle, tight shadow (0px 4px 12px rgba(0,0,0,0.05)) to separate the element from the workspace.
- **Interactive States:** Hover states on rows or buttons should use a subtle background shift (Primary at 5% opacity) rather than a lift effect.

## Shapes

To reinforce the sense of stability and professional rigor, the design system uses a **Soft (0.25rem)** roundedness. 

- **Standard Elements:** 4px radius (Input fields, buttons, small cards).
- **Large Containers:** 8px radius (Main content areas).
- **Data Points:** 0px radius (Used for internal table cell highlights to maintain a strict grid feel).
- **Badges:** Fully rounded (pill) only for status indicators like 'Split' or 'Ship' to differentiate them from interactive buttons.

## Components

### Financial-Grade Tables
The core component. Features include monospaced numerics, right-aligned currency columns, and "Zebra-striping" on hover. High-contrast vertical lines are used between primary data groups (e.g., separating "Origin Data" from "Tariff Calculations").

### Split-or-Ship Verdict Badges
High-contrast indicators used for final optimization decisions. 
- **Ship:** Graphite background with White text (Action-oriented).
- **Split:** White background with Graphite 2px border (Alternative-oriented).

### Drag-and-Drop Zones
Dashed 2px Graphite borders with a Secondary color fill. Used for grouping shipments or uploading customs manifests.

### Input Fields
Flat styling with 1px Graphite borders. Focus states use a 2px Primary border. Labels are always positioned above the input in `label-caps` style for clarity.

### Buttons
- **Primary:** Graphite background, White text.
- **Secondary:** Transparent background, Graphite 1px border.
- **Ghost:** Transparent background, used for low-priority actions in table rows.

### Risk/Saving Chips
Small chips used inside table cells.
- **Savings:** Muted Green text with a 10% Green background.
- **Risk:** Amber text with a 10% Amber background.