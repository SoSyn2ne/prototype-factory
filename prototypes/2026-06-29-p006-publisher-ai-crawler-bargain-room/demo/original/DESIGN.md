---
name: Institutional Rigor
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbd9db'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#efedef'
  surface-container-high: '#e9e7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1c1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f2'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#001919'
  on-tertiary: '#ffffff'
  tertiary-container: '#002f30'
  on-tertiary-container: '#529c9d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#a5eff0'
  tertiary-fixed-dim: '#89d3d4'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f50'
  background: '#fbf9fa'
  on-background: '#1b1c1d'
  surface-variant: '#e4e2e3'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 16px
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
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: IBM Plex Sans
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
  unit: 4px
  container-padding: 24px
  grid-gutter: 16px
  element-gap: 8px
  table-row-height: 40px
---

## Brand & Style
This design system is engineered for financial analysts and data scientists managing high-throughput AI crawling operations. The brand personality is authoritative, precise, and utilitarian, prioritizing "revenue math" over aesthetic flourish. 

The visual style follows a **Corporate / Modern** direction with a heavy emphasis on **Information Density**. It utilizes a structured, grid-based layout that mimics the efficiency of a high-end financial terminal. Visual noise is aggressively eliminated to ensure that anomalies in data crawl rates or arbitrage opportunities are immediately apparent. The emotional response is one of confidence, stability, and professional focus.

## Colors
The palette is rooted in institutional credibility. 
- **Primary (#1A2B3C):** Used for navigation, primary headers, and core brand elements. It provides a "heavy" grounding for the interface.
- **Secondary (#4A5568):** Reserved for supporting text, icons, and metadata to maintain a clear visual hierarchy.
- **Data Focused Teal (#2C7A7B):** The primary action and "success" color. Used for positive trends, active crawlers, and primary call-to-actions.
- **Alert Amber (#D69E2E):** Specifically for warnings, margin calls, or crawler bottlenecks.
- **Neutrals:** A range of cool grays provides the scaffolding for data grids and card containers, ensuring high contrast for legibility.

## Typography
The system uses a pairing of **IBM Plex Sans** for structural elements and **Inter** for dynamic data content. 
- **IBM Plex Sans** provides a technical, engineered feel suitable for headers and labels.
- **Inter** offers maximum legibility for dense tables and dashboards.
- A specialized **Data Mono** (IBM Plex Mono) role is introduced for financial figures, IP addresses, and hash values to ensure character alignment in vertical lists.
- Line heights are kept tight to maximize "above-the-fold" data visibility without sacrificing readability.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. The sidebar remains fixed at 240px, while the main content area utilizes a 12-column fluid system. 

- **Density:** Spacing is based on a 4px baseline grid. Padding within data cards is minimized (16px) to allow for more concurrent charts.
- **Breakpoints:** 
  - Desktop: 1280px+ (Full 12 columns)
  - Tablet: 768px - 1279px (8 columns, sidebar collapses to icons)
  - Mobile: Under 768px (4 columns, horizontal scrolling for data tables)
- **Data Grids:** Tables are the primary vehicle for information. Use "Compact" (32px) and "Standard" (40px) row heights to allow for massive data scanning.

## Elevation & Depth
This design system avoids heavy shadows and skeuomorphism. Depth is communicated through **Low-contrast outlines** and **Tonal layers**.

- **Surface Levels:** The background uses a light gray (#F7FAFC). Active containers (cards) use a pure white background with a 1px solid border (#E2E8F0).
- **Interactive State:** Hovering over a data row or card triggers a subtle background shift (#F1F5F9) rather than a shadow.
- **Modals:** Only global modals use a soft, neutral shadow (0 10px 15px -3px rgba(0, 0, 0, 0.1)) to separate the action from the data beneath it.

## Shapes
The shape language is "Soft" (4px radius) to maintain a professional, crisp edge. This provides a modern look without the "playfulness" of highly rounded corners. 

- **Standard Elements:** Buttons, input fields, and cards use a 4px radius.
- **Badges:** Confidence scores and status badges use the same 4px radius, never pill-shaped, to maintain the architectural rigor of the grid.
- **Charts:** Bar charts should have sharp 0px corners to ensure accurate visual reading of data points.

## Components
- **Buttons:** Primary buttons are solid Teal (#2C7A7B) with white text. Secondary buttons use the Navy (#1A2B3C) as an outline. Interaction states are strictly tonal (darken 10%).
- **Data Tables:** Headers are sticky, using the Navy color for text on a light gray background. Use zebra-striping only on ultra-wide datasets.
- **Confidence Badges:** Small rectangular tags with a light background and dark text (e.g., Light Teal background with Dark Teal text) to indicate AI crawler accuracy.
- **Input Fields:** Rectangular with 1px borders. Focus state uses a 2px Teal border. No glow/outer shadow.
- **Charts:** Use a "Restrained" color palette for series. Primary series in Teal, secondary in Navy, and benchmarks in Slate Gray. Line weights should be 2px for clarity.
- **Lists:** High-density lists with divider lines (1px #E2E8F0) and no internal padding between items beyond the 4px grid.