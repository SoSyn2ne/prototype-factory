---
name: ACA Analysis System
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#1960a3'
  on-secondary: '#ffffff'
  secondary-container: '#7db6ff'
  on-secondary-container: '#00477f'
  tertiary: '#00213e'
  on-tertiary: '#ffffff'
  tertiary-container: '#003762'
  on-tertiary-container: '#58a2f0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#a2c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004881'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#9fcaff'
  on-tertiary-fixed: '#001d37'
  on-tertiary-fixed-variant: '#00497e'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  helper-text:
    fontFamily: Inter
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
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  gutter: 16px
---

## Brand & Style

The design system is engineered for high-stakes financial analysis within the healthcare insurance sector. The brand personality is authoritative, analytical, and unwavering. It prioritizes clarity over decoration, aiming to evoke a sense of absolute reliability and precision for actuaries and policy analysts.

The design style follows a **Corporate / Modern** movement, utilizing a structured information hierarchy that handles high data density without overwhelming the user. It leans into a systematic "Enterprise Blue" aesthetic, where the interface recedes to let complex datasets and premium shock indicators take precedence. The visual language is disciplined, using color primarily as a functional tool for risk assessment rather than ornamentation.

## Colors

The palette is anchored by **Deep Navy (#1A365D)**, used for structural persistence in navigation and headers to establish institutional trust. **Professional Blue (#2B6CB0)** serves as the primary action color, providing clear affordance for interactions and data filtering.

Functional utility is driven by high-contrast semantic accents:
- **Danger Red (#C53030)**: Reserved exclusively for critical premium shocks and significant negative volatility.
- **Warning Orange (#DD6B20)**: Indicates moderate rate increases or data anomalies requiring attention.
- **Success Green (#38A169)**: Signifies premium stability or favorable market shifts.

The background uses **Light Gray (#F7FAFC)** to minimize eye strain during long analytical sessions, with white surfaces used for data cards to create a crisp, readable contrast.

## Typography

This design system utilizes **Inter** as the primary typeface for its exceptional legibility and neutral character. To ensure maximum precision in a data-dense environment, all numerical displays must utilize **Tabular Figures** (`tnum`), ensuring columns of numbers align perfectly for rapid visual comparison.

**IBM Plex Sans** is used sparingly for technical labels and metadata headers to provide a subtle technical distinction from the primary narrative text. The type hierarchy is compact, favoring smaller, well-spaced type that allows more data to remain above the fold. Headlines are kept tight and professional, avoiding excessive scale shifts.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centered within a 1440px container to maintain readability on ultra-wide monitors. It employs a 12-column grid with 16px gutters, allowing for flexible arrangements of data widgets and analysis panels.

A **dense spacing rhythm** (4px base) is applied to maximize the visibility of tabular information. 
- **Desktop:** Multi-pane layouts with a fixed left navigation and a collapsible right-side filter panel.
- **Tablet:** Reflows into a single column of cards; sidebar transforms into a top-level drawer.
- **Mobile:** Minimized padding (8px margins) with horizontally scrolling data tables to preserve numerical integrity.

Vertical rhythm is strictly maintained to allow the eye to scan across large datasets without losing track of the row context.

## Elevation & Depth

Visual hierarchy in this design system is achieved through **low-contrast outlines** and tonal layering rather than dramatic shadows. 

- **Level 0 (Background):** Light Gray (#F7FAFC) surface.
- **Level 1 (Cards/Panels):** White surface with a 1px border (#E2E8F0) and a very soft, high-diffusion shadow (0px 2px 4px rgba(0,0,0,0.05)).
- **Level 2 (Modals/Popovers):** White surface with a more defined border and a medium shadow (0px 10px 15px rgba(0,0,0,0.1)) to focus user attention during critical inputs.

This "flat-plus" approach ensures that the depth does not distract from the data, keeping the interface feeling lightweight and efficient.

## Shapes

The shape language is **Soft (0.25rem)**, reflecting a professional and calculated aesthetic. Sharp corners are avoided to prevent a dated look, but large radii are excluded to maintain a high-density, space-efficient interface.

- **Standard Buttons & Inputs:** 4px (0.25rem) radius.
- **Data Cards:** 8px (0.5rem) radius for subtle containment.
- **Status Badges:** 2px radius or sharp edges to distinguish them as functional indicators rather than interactive elements.

## Components

### Buttons & Actions
Primary actions use **Professional Blue** with white text. Ghost buttons (navy outline) are preferred for secondary data exports or filtering to reduce visual noise.

### Data Tables
The core component of the tool. Tables must feature:
- Sticky headers for long datasets.
- Alternating row zebra-striping (using #F7FAFC) to assist horizontal tracking.
- Inline status indicators using the accent palette.

### Impact Badges
Small, high-contrast chips that use the status colors. They include descriptive icons (e.g., upward arrow for "Shock," stable dash for "Stability") to ensure accessibility for colorblind users.

### Input Fields
Strict, rectangular fields with 1px borders. Focused states use a 2px Professional Blue ring. Labels are always positioned above the field in **label-caps** style for maximum clarity.

### Cards
Used to group related analysis metrics. Each card features a "Subtle border" and a light shadow. Header areas within cards should be clearly demarcated with a light gray bottom border.

### Analysis Widgets
Specialized components including sparklines (using Professional Blue) and distribution bar charts that visualize premium changes across demographics.