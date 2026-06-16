---
name: Analytical Precision
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#181919'
  on-primary: '#ffffff'
  primary-container: '#2d2d2d'
  on-primary-container: '#959494'
  inverse-primary: '#c8c6c6'
  secondary: '#456646'
  on-secondary: '#ffffff'
  secondary-container: '#c6edc4'
  on-secondary-container: '#4b6c4c'
  tertiary: '#380409'
  on-tertiary: '#ffffff'
  tertiary-container: '#54191c'
  on-tertiary-container: '#d27d7d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#c6edc4'
  secondary-fixed-dim: '#abd0a9'
  on-secondary-fixed: '#012108'
  on-secondary-fixed-variant: '#2e4e30'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ffb3b2'
  on-tertiary-fixed: '#3c070c'
  on-tertiary-fixed-variant: '#743233'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
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
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  tabular-nums:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  xl: 40px
  gutter: 16px
  margin: 24px
---

## Brand & Style

The design system is built for the "Pragmatic Analyst." It prioritizes clarity, data density, and objective reporting over decorative elements. The target audience includes price-conscious consumers and market researchers who require a calm, focused environment to analyze grocery trends and household expenditures.

The visual style is **Minimalist / Modern Corporate**, characterized by:
- **Pragmatic Density:** Information is packed efficiently but remains legible through strict alignment.
- **Understated Authority:** A neutral off-white canvas allows the graphite data points to take center stage.
- **Analytical Calm:** Muted sage and coral tones provide status indicators without overwhelming the user's cognitive load.
- **Structural Integrity:** Use of thin 1px borders and subtle depth to define functional areas rather than decorative splashes.

## Colors

The palette is designed to simulate a professional financial report while maintaining the approachability of a daily utility.

- **Primary (Graphite - #2D2D2D):** Used for primary text, structural panels, and heavy-duty interactive elements. It provides a high-contrast anchor for data readability.
- **Secondary (Sage Green - #6B8E6B):** Reserved strictly for positive financial outcomes, such as price drops, savings milestones, and "High" confidence ratings.
- **Tertiary (Subtle Coral - #D27D7D):** Used for negative trends, price hikes, and "Low" confidence ratings. The desaturated nature of the coral prevents it from feeling alarmist.
- **Neutral (Off-white - #F9F9F7):** The global background color, providing a soft, paper-like surface that reduces eye strain during prolonged analysis.

## Typography

This design system uses **Inter** exclusively to leverage its exceptional legibility and comprehensive support for tabular figures.

- **Data Focus:** For all pricing and numerical displays, `tabular-nums` must be used to ensure vertical alignment across columns.
- **Hierarchy:** Use `label-caps` for table headers and metadata titles to create a clear distinction from the data itself.
- **Weight Usage:** Bold weights (600) are reserved for headlines and primary CTAs. Medium weights (500) are used for emphasis within data rows.
- **Scalability:** Large headlines scale down on mobile to preserve vertical space for data tables.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain the integrity of complex data tables, transitioning to a **Fluid Grid** for mobile devices.

- **Grid System:** A 12-column grid for desktop (max-width 1280px) with 16px gutters.
- **Density:** Components use a tight spacing scale (4px/8px increments) to allow for high data density without overcrowding.
- **Sidebars:** Use fixed-width left-hand navigation (240px) for analyst tools, ensuring the main data stage remains consistent.
- **Comparison Views:** Layouts often utilize split-pane views or side-by-side card clusters to facilitate price comparisons across different retailers or timeframes.

## Elevation & Depth

Depth is used sparingly to maintain a "flat" professional aesthetic. This design system communicates hierarchy through **Tonal Layers** and **Low-contrast Outlines**.

- **Surface Levels:** 
  - Level 0: Global background (#F9F9F7).
  - Level 1: Primary cards and panels (Pure White #FFFFFF) with a 1px Graphite border at 10% opacity.
  - Level 2: Popovers and active state overlays with a subtle, tight shadow (0px 2px 4px rgba(45, 45, 45, 0.05)).
- **Outlines:** Most elements are defined by 1px solid borders rather than shadows. 
- **Backdrop:** When modals are necessary, use a subtle graphite dimming effect (15% opacity) to keep the background context visible.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a modern feel while retaining the "rectangular" and "organized" nature of financial tools.

- **Standard Elements:** Buttons, input fields, and small cards use a 4px (0.25rem) corner radius.
- **Containers:** Large dashboard sections and main containers use an 8px (0.5rem) radius.
- **Full Rounding:** Only used for "Confidence Labels" or status pills to distinguish them from interactive buttons.

## Components

- **Confidence Labels:** Small pills used to denote data reliability. 
  - *High:* Sage background (15% opacity) with Sage text.
  - *Medium:* Graphite background (10% opacity) with Graphite text.
  - *Low:* Coral background (15% opacity) with Coral text.
- **Data-Rich Cards:** White background, 1px border. They must include a header section for the product name and a dedicated "trend area" featuring small sparkline charts.
- **Buttons:**
  - *Primary:* Solid Graphite (#2D2D2D) with White text.
  - *Secondary:* Outline (1px Graphite) with Graphite text.
- **Decision-Oriented Charts:** Line and bar charts using the Sage/Coral/Graphite palette. Grid lines should be faint (5% Graphite) to avoid visual noise.
- **Input Fields:** Rectangular with a 1px Graphite border (20% opacity). On focus, the border becomes 100% Graphite.
- **Comparison Lists:** Rows should alternate with a very faint tint of the neutral background to aid horizontal tracking across columns.