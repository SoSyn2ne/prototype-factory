---
name: Operator-Dense Profile
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#46474a'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe0'
  on-secondary-container: '#616364'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#e2e2e3'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin-page: 24px
  padding-card: 12px
  density-compact: 4px
  density-comfortable: 8px
---

## Brand & Style
This design system is engineered for high-velocity short-term rental management. The brand personality is clinical, efficient, and authoritative, prioritizing data throughput over aesthetic flourish. It caters to professional property managers who require "at-a-glance" situational awareness across high-volume portfolios.

The design style is **Corporate / Modern** with a focus on **High-Density Utility**. It utilizes a "Charcoal and Fog" palette to create a clear separation between the workspace (Fog) and the navigational or structural chrome (Charcoal). The emotional response should be one of control and precision, minimizing cognitive load through structured information hierarchy rather than whitespace.

## Colors
The color strategy employs high-contrast neutrals to define functional zones. 
- **Primary (#1A1A1B):** Used for the side navigation, primary headers, and deep-background elements to provide a "grounded" frame for the data.
- **Secondary (#F4F4F5):** The "Fog" surface used for main content areas, providing a low-strain background for dense text and tables.
- **Tertiary (#D97706):** A vibrant Amber used exclusively for urgency, high-risk fee choices, and critical alerts.
- **Neutral (#71717A):** Used for secondary meta-data, borders, and inactive states to maintain a clean interface.

## Typography
The typography is centered on **Inter** for its exceptional legibility at small sizes and neutral character. To assist with data density, **JetBrains Mono** is introduced for tabular data, currency, and "Label Caps" to ensure numbers align vertically and are easily distinguishable.

- Use `label-caps` for table headers and section overlines to differentiate from interactive content.
- Use `data-mono` for all numeric values, dates, and ID strings.
- Keep line heights tight (1.2x to 1.4x) to maximize the amount of information visible without scrolling.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for the main content area. This design system prioritizes horizontal space to accommodate multi-column data tables.

- **Breakpoints:** Mobile (<768px), Tablet (768px-1200px), Desktop (>1200px).
- **Density:** We use a tight 4px base unit. Margins between data cells should be kept to `density-compact` (4px) to allow for 15+ rows of data above the fold.
- **Sidebars:** A fixed 240px primary navigation sidebar (Charcoal) remains visible on desktop to provide instant access to high-level modules.

## Elevation & Depth
This system avoids shadows in favor of **Low-Contrast Outlines** and **Tonal Layers**. Depth is communicated through color stepping rather than physical height.

- **Level 0 (Background):** Fog (#F4F4F5).
- **Level 1 (Cards/Tables):** White (#FFFFFF) with a 1px solid border in #E4E4E7.
- **Level 2 (Modals/Popovers):** White (#FFFFFF) with a subtle 4px blur shadow (#000000 5% opacity) to distinguish from the primary surface.
- **Active State:** Elements use a 2px interior stroke rather than a drop shadow to indicate focus, maintaining the crisp, "flat" operator aesthetic.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding provides a professional, modern feel while maintaining the structural integrity of a dense grid. 

- `rounded-sm`: 2px (used for checkboxes, small status indicators).
- `rounded-md`: 4px (default for buttons, input fields, cards).
- `rounded-lg`: 8px (used for main container areas or modals).
- Avoid pill shapes or large radii to prevent "wasted" corner space in dense tables.

## Components
### Tables
The core of the system. Tables must feature `12px` horizontal cell padding and `8px` vertical padding. Use zebra-striping (Fog #F4F4F5) for every second row to assist eye-tracking across wide data sets.

### Buttons & Inputs
- **Primary Button:** Solid Charcoal (#1A1A1B) with White text.
- **Urgency Button:** Solid Amber (#D97706) for high-risk actions.
- **Input Fields:** 1px border (#E4E4E7) with a focus state of #1A1A1B. Height should be fixed at 32px for "compact" mode.

### KPI Cards
Placed at the top of dashboards. Use `label-caps` for the metric title and `data-mono` (24px) for the value. Margin-based KPIs should include a small inline trend indicator (Up/Down arrow).

### Status Chips
Minimalist indicators using high-contrast backgrounds. 
- **Success:** Soft Green background, Dark Green text.
- **Risk/High-Fee:** Solid Amber (#D97706) with White text to draw immediate attention.

### Lists
Dense, single-line items with 1px bottom borders. Use icon-leadings for "Property Type" or "Platform" (Airbnb, VRBO) to allow for faster visual scanning.