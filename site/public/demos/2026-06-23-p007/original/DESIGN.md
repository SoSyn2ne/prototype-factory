---
name: Analytic Rigor
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1700'
  on-tertiary-container: '#b87500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-table:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 1rem
  margin-desktop: 2rem
  margin-mobile: 1rem
  cell-padding-x: 0.75rem
  cell-padding-y: 0.5rem
---

## Brand & Style
The design system is engineered for high-stakes financial environments where precision is the primary value. It adopts a **Modern Corporate** aesthetic with a heavy emphasis on **Information Density** and **Analytical Clarity**. The interface should evoke a sense of "quiet confidence"—moving away from decorative marketing elements toward pure utility. 

The visual language is defined by rigorous alignment, structural borders, and a logical hierarchy that allows financial analysts to scan thousands of data points without cognitive fatigue. The emotional response is one of controlled authority and surgical accuracy.

## Colors
The palette is rooted in professional stability. 
- **Primary & Secondary:** A foundation of Slate (#0f172a) and Navy (#1e293b) provides a high-contrast environment for data visualization and structural elements.
- **Risk Markers (Amber #f59e0b):** Used exclusively for flags, warnings, and areas requiring immediate analyst intervention. It is restrained to maintain its urgency.
- **High-ROI Indicators (Emerald #064e3b):** A deep, professional green used to highlight savings opportunities and positive fiscal performance.
- **Neutral Grays:** Utilized for interpretation notes, metadata, and secondary labels to prevent visual clutter.

## Typography
The system utilizes **Inter** across all levels to ensure maximum legibility and a systematic, utilitarian feel. 
- **Headlines:** Use tighter letter spacing and semi-bold weights to ground dashboard sections.
- **Data Tables:** A specialized `data-table` role uses a slightly reduced font size (13px) with increased tracking to ensure multi-column financial spreadsheets remain readable at high density.
- **Labels:** Use `label-caps` for table headers and category descriptors to differentiate structural metadata from user data.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy for dashboard views to maintain predictable data alignment, switching to a **Fluid Grid** for internal table structures. 

- **Desktop:** 12-column grid with 16px (1rem) gutters. Content is housed in "Analytic Panes" that prioritize horizontal scanning.
- **Density:** Padding is intentionally compact (8px/12px) to maximize the "above-the-fold" data points. 
- **Reflow:** On smaller viewports, sidebars collapse into icons, and tables utilize horizontal scrolling rather than stacking to preserve the integrity of the data rows.

## Elevation & Depth
Elevation is conveyed through **Low-contrast outlines** rather than shadows. 
- **Borders:** Use 1px solid borders in a light slate (#e2e8f0) for standard containers and a darker slate (#cbd5e1) for active or focused states.
- **Tonal Layers:** Subtle background shifts (e.g., a light gray #f8fafc background with white cards) create depth. 
- **Shadows:** Avoid drop shadows entirely, except for transient elements like tooltips or dropdown menus, where a minimal, 4px blur with 5% opacity may be used to provide separation from the high-density background.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding prevents the UI from feeling aggressive while maintaining the rigorous, grid-based appearance of a financial tool. 
- **Buttons and Inputs:** Use the standard 0.25rem radius.
- **Status Badges:** Use the same 0.25rem radius; avoid pill-shapes to maintain the architectural consistency of the grid.
- **Charts:** Maintain sharp edges or the minimal 0.25rem radius for bar charts and containers.

## Components
- **Data Tables:** The core component. Must feature "rigorous borders"—1px solid lines between all rows and columns. Header rows should use a light slate background with `label-caps` typography.
- **Buttons:** Primary buttons are Solid Navy (#1e293b). Secondary buttons are outlined with 1px borders. No gradients or heavy rounding.
- **Confidence Badges:** Minimalist boxes using `label-sm` text. High-confidence indicators use a light emerald tint with deep emerald text; risk indicators use a light amber tint with deep amber text.
- **Input Fields:** Rectangular with subtle 1px borders. Focus states use a 1px Navy ring.
- **Risk Markers:** Small, 8px square indicators or icons placed inline with data to flag anomalies without breaking the text baseline.
- **Value Cards:** Summary cards at the top of pages should use large `headline-lg` numbers for KPIs, paired with a small `label-sm` trend indicator.