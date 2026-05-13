---
name: Institutional Media-Risk Workbench
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#dec29a'
  on-tertiary: '#3e2d11'
  tertiary-container: '#231500'
  on-tertiary-container: '#957d5a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#353436'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
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
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.01em
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
  gutter: 12px
  margin-desktop: 24px
  container-max: 1440px
  table-row-height: 32px
---

## Brand & Style

The brand personality is rooted in **precision, authority, and analytical rigor**. This design system avoids the ephemeral trends of consumer software, opting instead for a "financial-analyst" aesthetic that prioritizes information density and clarity over decorative elements. It is designed for high-stakes decision-making where the UI acts as a silent, reliable conduit for complex data.

The style is **Institutional Modernism**. It leverages a document-like structure with sober surfaces and a focus on structural alignment. It draws inspiration from Bloomberg terminals and white-paper layouts, utilizing high-contrast data visualization against deep, oceanic backgrounds to create a focused, low-distraction environment.

## Colors

The palette is strictly functional. The foundation is built on **Institutional Ink (#0F172A)** for the primary canvas and **Navy (#1E293B)** for secondary surfaces and containers. 

For data visualization and risk assessment, the system uses a **low-saturation heatmap palette**. These colors (Red, Amber, Green) are muted to prevent visual fatigue during long analytical sessions, ensuring they draw attention to outliers without appearing "neon" or distracting. All interactive elements use a subtle stroke of **#334155** to maintain clear boundaries between compact data modules.

## Typography

Typography is used to create a clear information hierarchy. **Inter** is the primary typeface for all UI labels and body text, chosen for its exceptional legibility at small sizes. 

For the core of the workbench—the data—the system utilizes **JetBrains Mono**. This monospaced font ensures that numerical values in tables align perfectly across rows and columns, facilitating rapid scanning and comparison. Labels for data categories should be rendered in `label-caps` (all-caps with tracking) to distinguish them from dynamic content.

## Layout & Spacing

This design system employs a **fixed-fluid hybrid grid**. The main workspace follows a 12-column grid system with tight **12px gutters** to maximize screen real estate for data-heavy tables and charts. 

The layout philosophy is "compact-first." Standard spacing units are based on a **4px increment**, allowing for high-density interfaces where more information can be displayed above the fold. 
- **Desktop (1280px+):** 12 columns, 24px side margins.
- **Tablet (768px - 1279px):** 8 columns, 16px side margins.
- **Mobile:** 4 columns, 12px side margins (primarily for summary viewing; analytical functions should remain desktop-optimized).

## Elevation & Depth

To maintain a "document-like" and "sober" appearance, the system rejects ambient shadows and blur-based depth. Instead, it utilizes **Tonal Layering** and **Subtle Outlines**.

Depth is communicated through three levels:
1.  **Level 0 (Base):** The Institutional Ink background (#0F172A).
2.  **Level 1 (Panels):** Raised containers using Navy (#1E293B) with a 1px solid border (#334155).
3.  **Level 2 (Modals/Popovers):** Slightly lighter navy with a more pronounced border and no shadow.

Confidence bands in charts should be rendered as semi-transparent fills rather than shadows, reinforcing the scientific nature of the tool.

## Shapes

The shape language is **geometric and restrained**. A `roundedness` of **1 (Soft)** is applied to primary containers and buttons (4px radius). This provides just enough softness to prevent the UI from feeling aggressive while maintaining a rigorous, grid-aligned structure. Data cells and table rows remain sharp (0px) to ensure clean vertical and horizontal lines in dense data views.

## Components

### Tables
The core of the workbench. Rows have a fixed height of 32px. Use subtle horizontal dividers only; avoid vertical dividers unless the table is exceptionally wide. Headers are sticky and use the `label-caps` type style.

### Buttons
Buttons are strictly utilitarian. Primary buttons use a solid Navy background with a slightly brighter 1px border. Secondary buttons are ghost-style with a stroke. There are no gradients or rounded "pill" shapes.

### Confidence Bands & Heatmaps
Visualizations must use the muted risk palette. Confidence intervals are shown as "bands" (filled paths) with 20% opacity of the line color. Heatmap cells are square with 1px gaps.

### Input Fields
Inputs are inset with a darker background than the panel they sit on. Focused states are indicated by a 1px solid white or light-blue border—no "glow" or outer shadows.

### Comparison Modules
Side-by-side modules should share a center-aligned vertical axis. Use high-contrast "Delta" indicators (small triangles) to show variance between datasets, utilizing the muted risk colors for positive/negative change.