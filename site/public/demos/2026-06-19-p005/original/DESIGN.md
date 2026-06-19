---
name: Sovereign Ledger
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  data-table:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
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
  gutter: 16px
  margin-page: 32px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for the professional financial analyst, prioritizing precision, cognitive clarity, and a "sober" aesthetic. The brand personality is one of quiet authority—avoiding the exuberant roundedness of consumer fintech in favor of a structured, data-dense environment. 

The style is **Professional Minimalism** with a focus on **Structural Hierarchy**. It utilizes thin, purposeful borders and a strictly functional color application to direct the user's attention to cash-flow trajectories and risk vectors. There is zero decorative fluff; every pixel must serve an analytical purpose.

## Colors
This design system employs a restrained, high-contrast palette. 
- **Primary Surfaces:** Deep slate (`#0F172A`) and charcoal are reserved for sidebars, headers, or heavy text to establish a grounded foundation.
- **Backgrounds:** A neutral wash of `#F8FAFC` provides a clean canvas for white cards.
- **Semantic Risk Palette:** We avoid vibrant, saturated signals. Instead, we use muted, sophisticated tones:
    - **Caution (Amber):** Deep ochre for pending or nearing thresholds.
    - **Danger (Red):** A soft, desaturated crimson for negative cash flow or late payments.
    - **Settled (Emerald):** A dark, forest green for reconciled items.
- **Accents:** Usage of blue is strictly prohibited to distance the product from generic "startup" aesthetics.

## Typography
The typographic system bifurcates between UI navigation and numerical analysis.
- **Inter:** Used for all labels, headings, and instructional text. It provides a neutral, modern baseline.
- **JetBrains Mono:** Mandated for all financial figures, balance sheets, and dates. The monospaced nature ensures that columns of numbers align perfectly, allowing the eye to scan vertical magnitudes without friction.
- **Headlines:** Use tight tracking and semi-bold weights to convey a sense of density and importance.
- **Mobile scaling:** Display sizes above 24px should scale down by a factor of 0.8x on mobile devices to maintain table readability.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. The main content area sits within a 12-column grid with a maximum width of 1440px to ensure line lengths remain readable for data-heavy tables.
- **Density:** We utilize a 4px base unit. Padding in financial lists should be compact (8px or 12px) to maximize the "information per fold" (IPF).
- **Grid:** Use 16px gutters. Elements should snap to the grid to maintain the "ledger" feel.
- **Responsive:** On mobile, side-scrolling for data tables is preferred over wrapping to maintain the integrity of the monospaced number columns.

## Elevation & Depth
Depth is created through **Low-Contrast Outlines** and tonal layering rather than shadows.
- **Cards:** Use a 1px solid border in `#E2E8F0` on white backgrounds. 
- **Active States:** Subtle 1px inner strokes or a slight shift in background color (e.g., from White to a very light Gray) indicate interactivity.
- **Shadows:** Only used for "floating" elements like date pickers or dropdown menus. When used, they must be extremely diffused: `0 4px 12px rgba(15, 23, 42, 0.08)`.

## Shapes
This design system utilizes a **Soft (0.25rem)** roundedness level. This subtle rounding removes the clinical "sharpness" of pure brutalism while remaining far more professional than the pill-shaped trends of consumer apps.
- **Input Fields/Buttons:** 4px radius.
- **Data Cards:** 8px radius (rounded-lg).
- **Status Badges:** 2px radius (near-sharp) to distinguish them from interactive buttons.

## Components
- **Financial Data Cards:** White background, 1px border, with a `label-caps` header and a large `data-lg` primary figure. Small sparklines can be included but must be monochrome (Slate 500).
- **Risk Indicators:** Small, rectangular badges with a low-opacity background of the semantic color and high-opacity text. Example: `Emerald-50 bg` with `Emerald-900 text`.
- **Line-item Lists:** Zebra-striping is encouraged for readability. Rows should be 40px in height to balance density with touch/click accuracy. 
- **Buttons:** Primary buttons use the Slate-900 background with White text. Secondary buttons use a Slate-100 background or a simple 1px outline.
- **Calendar Grids:** Use JetBrains Mono for date numerals. Today’s date is marked by a subtle underline rather than a heavy circle.
- **Input Fields:** Use a 1px border. Focus states use a 1px Slate-900 ring with no glow/blur.