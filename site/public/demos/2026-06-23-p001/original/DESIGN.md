---
name: Clinic Utility Logic
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#8990a8'
  on-tertiary-container: '#22293d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-table:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  body-main:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  display-sm-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 8px
  row-height-dense: 28px
  row-height-standard: 36px
---

## Brand & Style

This design system is engineered for "Operator Density"—prioritizing information throughput and precision over decorative white space. The brand personality is clinical, analytical, and authoritative, functioning more like a financial terminal than a lifestyle app. 

The aesthetic is a hybrid of **High-Contrast Professionalism** and **Minimalist Utility**. It utilizes sharp edges, high-density data grids, and a monochromatic foundation to ensure that financial insights remain the primary focus. The emotional response should be one of "certainty" and "calibration," providing creators with the data-driven confidence required for high-stakes negotiations.

## Colors

The palette is anchored in a "Deep Slate" dark mode to reduce eye strain during prolonged analytical sessions. 

- **Primary (Indigo):** Used for standard interactive elements, active states, and focus indicators.
- **Secondary (Safety Orange):** Reserved exclusively for the "Recommended Floor" and critical call-outs. It acts as the "decisive action" color.
- **Backgrounds:** The interface utilizes `#020617` (Slate-950) for the base and `#0f172a` (Slate-900) for UI containers.
- **Accents:** Semantic greens and reds are used for "Delta" values (rate increases/decreases) but are muted to ensure they don't compete with the Secondary accent.

## Typography

The system employs a dual-font strategy. **Inter** is used for the interface structure, headings, and instructional text to maintain a clean, professional tone. **JetBrains Mono** is utilized for all financial figures, tabular data, and confidence badges.

The type scale is intentionally compact (starting at 13px for body) to facilitate high-density information layouts. All numerical data should use tabular lining figures (native to JetBrains Mono) to ensure decimal points and currency symbols align vertically in tables.

## Layout & Spacing

This design system uses a **Fixed-Fluid Hybrid Grid**. Sidebars and negotiation panels occupy fixed widths (280px - 320px) to maintain control over dense input fields, while the central data stage scales fluidly.

A strict 4px baseline grid is enforced. "Operator Density" is achieved by using 8px gutters and 16px outer margins. Vertical spacing between related data points is minimized (4px or 8px) to allow more information to appear above the fold. Tabular layouts should default to a 28px row height for maximum density.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Sharp Outlines** rather than shadows. 

- **Surface 0 (Base):** Slate-950 background.
- **Surface 1 (Panels):** Slate-900 with a 1px solid border of Slate-800.
- **Surface 2 (Popovers/Modals):** Slate-800 with a 1px Slate-700 border.

Shadows are almost entirely absent, used only as a subtle 4px black "drop" for high-priority modals to separate them from the grid. This maintains a flat, technical appearance reminiscent of high-end IDEs or financial terminals.

## Shapes

The shape language is strictly **Sharp (0px radius)**. Every UI element—from buttons and input fields to confidence badges and container panels—uses hard 90-degree corners. 

This lack of curvature reinforces the "Clinical" and "Utility" narrative, suggesting mathematical precision. Interaction states (hover/active) should be indicated by color shifts or inner borders rather than shape changes.

## Components

### Buttons & Actions
- **Primary:** Solid Indigo background, white text, sharp corners.
- **Decisive Action (Floor):** Solid Safety Orange background, black text for maximum contrast.
- **Ghost/Utility:** Transparent background with a 1px Slate-700 border.

### Financial Tables
- **Header:** Slate-800 background, Label-Caps typography, 1px bottom border.
- **Cells:** Data-Mono typography, right-aligned for currency, 1px border-bottom in Slate-800.
- **Hover State:** Highlight row with Slate-800 background.

### Negotiation Panels
- Compact clusters of input fields with internal labels. Use "Steppers" for numerical inputs to allow for precise 1% or $10 increments.

### Confidence Badges
- Small, sharp-edged rectangles using monospaced type. Color-coded by confidence level: High (Indigo), Medium (Slate-400), Low (Slate-600).

### Input Fields
- Darker than the panel background (Slate-950). Focus state is indicated by a 1px Indigo inner-border. No glow or outer shadow.