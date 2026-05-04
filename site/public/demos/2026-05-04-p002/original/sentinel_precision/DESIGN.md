---
name: Sentinel Precision
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
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
  table-data:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
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
  unit: 4px
  container-margin: 24px
  gutter: 16px
  cell-padding-x: 12px
  cell-padding-y: 8px
  stack-gap: 20px
---

## Brand & Style

This design system is engineered for high-stakes financial environments where precision is non-negotiable. The brand personality is **authoritative, vigilant, and analytical**. It targets compliance officers and payroll directors who require a "source of truth" to mitigate institutional risk.

The visual style follows a **Corporate Modern** approach with **Minimalist** leanings. It prioritizes data density and functional clarity over decorative elements. The interface should feel like a sophisticated instrument—robust enough to handle complex regulatory logic while remaining calm and unobtrusive during high-pressure audit cycles. 

Key attributes:
- **Objectivity:** Neutral backgrounds and structured layouts ensure data remains the focal point.
- **Urgency Management:** Use of "Tripwire Orange" is surgical, reserved only for items requiring immediate intervention.
- **Structural Integrity:** Heavy reliance on clear borders and alignment to convey stability and reliability.

## Colors

The palette is anchored by **Deep Navy (#0F172A)**, providing a foundational weight that signals institutional authority. This is contrasted against a sophisticated range of **Slate Grays** used for backgrounds and structural borders to prevent visual fatigue during long periods of data analysis.

- **Deep Navy (#0F172A):** Used for primary navigation, headers, and high-level typography.
- **Alert Orange (#F97316):** Reserved exclusively for "Tripwires" and high-risk compliance failures.
- **Success Green (#10B981):** Used for verified compliance, successful syncs, and cleared risks.
- **Link Blue (#2563EB):** Indicates interactive actions, drill-downs, and breadcrumb navigation.
- **Surface Colors:** Use `Slate-50` for page backgrounds and `White` for primary cards to create a subtle layered effect.

## Typography

This design system utilizes a **system-centric sans-serif stack (Inter)** to ensure maximum legibility across high-density data tables and complex maps. 

The hierarchy is strictly functional:
- **Headlines:** Use tighter letter spacing and semi-bold weights to command attention without excessive scale.
- **Data Tables:** Optimized at 13px (Medium weight) to balance information density with readability.
- **Labels:** Uppercase styles are used for table headers and secondary metadata to create a clear visual distinction from editable data points.
- **Monospacing:** Use system monospaced fonts for numerical payroll values and transaction IDs to ensure vertical alignment in columns.

## Layout & Spacing

The layout employs a **Fluid Grid** system optimized for large-format displays (1440px+). It utilizes a 12-column structure with 16px gutters and 24px outer margins.

The spacing rhythm is based on a **4px baseline**, but tightened for data-heavy views. Vertical rhythm in forms and lists should be compact to reduce scrolling, while card containers maintain 20px - 24px of internal padding to prevent a cluttered appearance. Dashboard layouts should prioritize a "Top-Down" hierarchy: Global KPI's at the top, followed by the Map/Tripwire View, and detailed Data Tables at the bottom.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and **Low-Contrast Outlines**. In an enterprise environment, heavy shadows are avoided to maintain a professional, "flat" aesthetic.

- **Level 0 (Background):** Slate-50 or Slate-100.
- **Level 1 (Cards/Containers):** Pure white background with a 1px border (#E2E8F0).
- **Level 2 (Active/Hover):** A subtle, diffused shadow (0px 4px 6px -1px rgba(15, 23, 42, 0.1)) used to indicate interactivity on hovered cards or focused inputs.
- **Interactive Elements:** Buttons and inputs use a solid 1px border. Focus states utilize a 2px offset ring in Link Blue.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness profile. This specific radius strikes a balance between the clinical feel of sharp corners and the overly-consumer feel of high-radius curves.

- **Standard Components:** 4px (0.25rem) for buttons, inputs, and small chips.
- **Containers:** 8px (0.5rem) for main dashboard cards and modals.
- **Status Indicators:** Status dots and small badges may use "Pill" shapes (999px) to distinguish them from functional UI components.

## Components

### Data Tables
The core of the platform. Tables must feature fixed headers, zebra striping (using Slate-50), and "sticky" action columns. Cell padding is condensed (8px vertical) to maximize row visibility.

### Tripwire Status Chips
High-visibility indicators. 
- **Critical:** Alert Orange background with white text, bold weight.
- **Compliant:** Success Green (soft tint) with dark green text.
- **Pending:** Slate-200 with Navy text.

### Robust Input Fields
Inputs must have clear persistent labels (no floating labels). Use a 1px Slate-300 border that darkens to Deep Navy on focus. Error states use a high-contrast red border and icon.

### Bordered Cards
Every logical section is housed in a white card with a 1px border. Cards should include a header area with a Slate-50 background to separate the "Title & Actions" from the "Content."

### Risk Maps
Interactive geographical views should use a desaturated map style (Slate/Gray tones) with Alert Orange "hotspots" to ensure the tripwire locations are visually dominant.

### Action Buttons
- **Primary:** Deep Navy (#0F172A) with white text.
- **Secondary:** White background with 1px Slate-300 border.
- **Ghost:** Transparent background with Link Blue text for low-priority navigation.