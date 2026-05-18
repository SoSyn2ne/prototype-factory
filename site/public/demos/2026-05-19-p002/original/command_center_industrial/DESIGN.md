---
name: Command Center Industrial
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#b9c7e0'
  on-tertiary: '#233144'
  tertiary-container: '#09182a'
  on-tertiary-container: '#738298'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
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
    lineHeight: 16px
    letterSpacing: 0.02em
  status-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
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
  md: 12px
  lg: 16px
  xl: 24px
  gutter: 12px
  margin: 16px
---

## Brand & Style

The design system is engineered for the high-pressure environment of a restaurant host stand. It prioritizes "operator density"—the ability to process complex reservation and financial data at a glance without scrolling. 

The aesthetic is **Technical Industrial**, blending the reliability of professional kitchen equipment with the precision of a financial dashboard. It evokes a "command center" feel through high information density, structural rigidity, and a focus on utility over decorative whitespace. Visual cues are taken from brushed metal, tactical displays, and data-heavy aviation interfaces to instill a sense of absolute control and recovery-focused urgency.

## Colors

The palette is anchored in **Dark Ink** (Deep Navy/Charcoal) to reduce eye strain in dimly lit restaurant environments. 

- **Primary & Neutral:** Deep, desaturated slates and navies form the structural foundation.
- **Warm Stainless Steel:** Used for borders, icons, and subtle gradients to mimic the physical environment of a modern kitchen.
- **Alert Colors:** High-chroma Amber, Green, and Red are reserved strictly for "at-risk" revenue, "recovered" deposits, and "no-show" alerts. These must pop aggressively against the dark background to drive immediate operator action.

## Typography

This design system utilizes a dual-font strategy to balance readability with technical precision.

- **Inter:** Used for all primary interface labels, headlines, and body copy. It is selected for its exceptional legibility at small sizes and high x-height.
- **JetBrains Mono:** Used specifically for financial figures, deposit IDs, timestamps, and status codes. The monospaced nature ensures that columns of numbers align perfectly in dense tables, facilitating rapid scanning of revenue data.

**Scaling:** Font sizes are capped at 24px for desktop to maintain density. On mobile, headlines are reduced by 15% to ensure data-heavy cards remain compact.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model optimized for tablets (iPad Pro/standard) commonly found at host stands.

- **Density:** We employ a tight 4px baseline grid. Padding within table cells and cards is minimized to allow for maximum "above-the-fold" data visibility.
- **Grid:** A 12-column grid is used for desktop dashboards, collapsing to a single column of high-density cards for mobile.
- **Negative Space:** Whitespace is treated as a functional separator rather than an aesthetic luxury. Use 8px (sm) for internal element grouping and 12px (md) for structural separation.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Crisp Outlines** rather than soft shadows.

- **Layers:** The base interface starts at the "Dark Ink" level. Active modals or "Recommendation Cards" sit one tonal step lighter.
- **Metallic Gradients:** Secondary buttons and header bars use a subtle linear gradient (Top: #475569 to Bottom: #334155) to create a "brushed steel" tactile feel.
- **Borders:** Every container uses a 1px solid border (#334155). Avoid drop shadows unless used to indicate a floating pop-over, in which case use a tight, 4px blur with 40% opacity for a "heavy" industrial feel.

## Shapes

The shape language is **Soft-Industrial**. 

- **Standard Elements:** Use a 0.25rem (4px) radius for buttons, input fields, and table rows. This provides a professional, "machined" look that is more approachable than sharp corners but firmer than consumer-grade rounded UI.
- **Progress Meters:** Use 2px radius for inner bars to maintain a precision-instrument aesthetic.
- **Checkboxes:** Square with a 1px radius to emphasize the "utility" nature of the tool.

## Components

### Compact Tables
Tables are the heart of the system. Use a 32px row height with `body-sm` or `data-mono` type. Borders should exist between rows but not necessarily between columns unless separating distinct data groups (e.g., Guest Info vs. Payment Status).

### Status Chips
Status chips are rectangular with 2px corner radii. They use a "ghost" style: a subtle background tint of the status color with a 1px solid border of the same color. Text is always `status-label`.

### Revenue Progress Meters
Linear bars that track "Recovery Progress." The track is `tertiary_color_hex` and the fill is `status_success`. No rounded ends; ends should be flat to suggest a filled gauge.

### Recommendation Modules
Card-based modules that suggest "Shielding Actions." These use a `secondary_color_hex` 1px border and a subtle metallic top-gradient to differentiate them from standard data tables.

### Input Fields
Inputs are inset with a darker background than the surface they sit on. The focus state uses a 1px `accent_metallic` glow to mimic a physical light-up button.