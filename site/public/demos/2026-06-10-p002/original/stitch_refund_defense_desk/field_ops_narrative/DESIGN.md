---
name: Field-Ops Narrative
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
  on-surface-variant: '#e0c0b1'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#a78b7d'
  outline-variant: '#584237'
  surface-tint: '#ffb690'
  primary: '#ffb690'
  on-primary: '#552100'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#9d4300'
  secondary: '#b9c7e0'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d2'
  tertiary: '#93ccff'
  on-tertiary: '#003351'
  tertiary-container: '#00a2f4'
  on-tertiary-container: '#003554'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-table:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style

The design system is engineered for high-stakes restaurant operations and field inspections. It prioritizes clarity, speed of data entry, and "at-a-glance" situational awareness. The aesthetic is **Modern Corporate with an Operational edge**, leaning into a structured, dense interface that minimizes visual fatigue in high-pressure environments.

The brand personality is authoritative and precise. It avoids decorative flourishes in favor of utility, using a monochromatic base to ensure that when color is used (specifically for alerts), it commands immediate attention. The emotional response should be one of control and reliability.

## Colors

The palette is built on a "Graphite" foundation to provide a sophisticated dark environment that reduces glare during night shifts or in dimly lit kitchen offices.

- **Background:** `#121826` (Graphite) serves as the base layer.
- **Surface/Neutral:** `#1e293b` (Slate) is used for cards, panels, and input fields to create subtle depth.
- **Action/Urgent:** `#f97316` (High-Contrast Orange) is reserved strictly for critical alerts, incomplete required fields, and "High Risk" statuses.
- **Subtle Borders:** `#334155` is used for structural definition to keep the UI firm and segmented without excessive contrast.

## Typography

This design system utilizes **Inter** for its exceptional legibility in data-dense layouts. To reinforce the "operational" feel, **JetBrains Mono** is introduced for labels and status indicators, providing a technical, precise character to metadata.

- **Headlines:** Tight tracking and heavy weights to anchor sections.
- **Data Displays:** Use `body-sm` for most grid content to maximize information density.
- **Labels:** Always use uppercase with `label-caps` for technical field headers (e.g., "TIMESTAMP", "DEVICE_ID").

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to ensure data columns remain predictable for power users. On mobile, it shifts to a fluid single-column layout.

- **Grid:** 12-column system with tight 16px gutters to maintain a "packed" and efficient feel.
- **Rhythm:** A strict 4px baseline grid governs all vertical spacing.
- **Density:** High. Padding within components (like table cells or input fields) should be minimized to allow for more visible data rows per screen.

## Elevation & Depth

This system avoids soft shadows and organic depth. Instead, it uses **Tonal Layers and Clear Borders** to define hierarchy.

- **Level 0 (Base):** `#121826` for the main application background.
- **Level 1 (Panels):** `#1e293b` with a 1px solid border of `#334155`.
- **Level 2 (Modals/Popovers):** `#1e293b` with a slightly brighter border of `#475569` and a 0% blur, 4px offset "hard" shadow to simulate physical stacking.
- **Interactive State:** Elements should feel "pressed" or "indented" when active, using inset borders rather than glows.

## Shapes

The shape language is **Firm and Operational**. We use a `Soft` (0.25rem) radius as the absolute maximum for primary containers. 

- **Sharp Corners:** Use 0px radius for data table headers and status tags to maintain a "brutalist" utility.
- **Standard Radius:** 4px (0.25rem) for buttons and input fields to provide just enough visual separation from the background grid.
- **Large Radius:** Not used. Circular elements are restricted to status pips only.

## Components

### Buttons & Inputs
- **Primary Action:** Solid `#f97316` with black text for maximum contrast.
- **Secondary Action:** Ghost style with a `#334155` border and white text.
- **Input Fields:** Background `#121826`, 1px border `#334155`. On focus, the border turns white.

### Status Panels (Operational States)
- **High Risk:** A `#1e293b` panel with a thick 4px left-accent border in `#f97316`.
- **Evidence Complete:** A `#1e293b` panel with a 1px border in `#22c55e` (Green) and a subtle 10% green tint to the background.

### Data Tables
- Row height should be capped at 40px for maximum density.
- Zebra striping is not used; instead, use 1px horizontal dividers in `#334155`.
- Headers are all-caps `label-caps` typography with a Slate-700 background.

### Chips & Tags
- Rectangular with 2px radius. 
- Use "Evidence Required" as a specific chip pattern: Orange text on a transparent background with an Orange border.