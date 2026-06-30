---
name: Delivery Menu Margin Blacklight
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
  on-surface-variant: '#464554'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
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
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
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
  container-padding: 1.5rem
  gutter: 1rem
  row-height-sm: 32px
  row-height-md: 44px
---

## Brand & Style
The design system is engineered for high-performance restaurant operations. It prioritizes utility and rapid data processing over decorative elements, catering to operators who need to identify margin leaks and optimize menu pricing in real-time. 

The aesthetic is **Functional Minimalism**—a "cockpit" style interface that is operator-dense and analytical. It utilizes a neutral base to ensure that functional color signals (profitability indicators) are immediately visible. The style avoids unnecessary padding, using thin lines and tonal shifts to organize complex financial information.

## Colors
The color palette is strictly functional, following a traffic-light logic for financial health monitoring.

- **Primary (Electric Indigo):** Reserved for primary calls to action, active states, and critical system navigation.
- **Success (Green):** Indicates high-margin items and profitable menu configurations.
- **Warning (Amber):** Signals thin margins or items approaching the break-even point.
- **Blacklight Red:** A high-saturation red used to highlight "loss-making" items or critical errors in cost calculation.
- **Neutral Grays:** Used for UI borders, secondary text, and background surfaces to minimize visual fatigue during long sessions of data entry.

## Typography
This design system uses **Inter** for its neutral, highly legible glyphs in UI controls and headers. To ensure financial data is perfectly aligned and easy to scan, **JetBrains Mono** (or Inter's tabular num feature) is used for all pricing, margins, and quantities.

- **Hierarchy:** Focus on clarity. Use `label-caps` for table headers and `data-mono` for all numerical inputs.
- **Readability:** High contrast ratios are maintained for all text levels against the white and light gray backgrounds.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Sidebars and action panels are fixed-width to preserve tool density, while data tables expand to fill the remaining horizontal space.

The spacing rhythm is based on a **4px baseline grid**. Margin and padding are aggressively tightened to maximize "information above the fold." 
- **Density:** Use compact vertical padding (8px) for table cells.
- **Breakpoints:** Desktop (1440px+), Laptop (1024px), and Tablet (768px). Mobile is not a priority for this operator tool; focus on tablet-landscape as the minimum viable size.

## Elevation & Depth
Depth is communicated through **Tonal Layering** rather than heavy shadows. 
- **Surface 0 (Background):** Slate-50 for the main canvas.
- **Surface 1 (Cards/Tables):** Pure white with a 1px border (#E2E8F0).
- **Surface 2 (Popovers/Modals):** Pure white with a subtle, tight shadow (0 4px 6px -1px rgb(0 0 0 / 0.1)) and a 1px neutral border.
- **Active State:** A 2px primary-colored left border is used to denote the currently selected row or active configuration.

## Shapes
The design system uses a **Soft (0.25rem)** rounding strategy. This maintains a professional, "tooled" look while avoiding the harshness of 0px corners. 
- **Standard Radius:** 4px for buttons, inputs, and cards.
- **Small Radius:** 2px for status badges and chips to keep them distinct within dense rows.
- **Interactive Elements:** Checkboxes use a 2px radius; radio buttons remain circular.

## Components
- **High-Density Tables:** The core of the system. Use alternate row striping (Slate-50) and sticky headers. Columns containing financial data must use tabular-spaced monospaced fonts aligned to the right.
- **Heat-map Badges:** Status badges for margins do not just use text; they use background tints (Success-light, Warning-light, Error-light) to create a vertical "heat map" when scanning a table.
- **Range Sliders:** Used for "What-if" margin analysis. Sliders should have a track that changes color as the handle moves across profit thresholds.
- **Checklist Cards:** Used for menu optimization tasks. These cards use a condensed layout with a checkbox on the left and the critical "Loss Amount" value highlighted on the right.
- **Input Fields:** Use a 1px border that shifts to Primary-600 on focus. Support inline prefix/suffix for currency symbols ($) and percentage signs (%) to reduce visual clutter.
- **Action Buttons:** Small (32px height) for secondary actions; Medium (40px height) for primary page-level actions.