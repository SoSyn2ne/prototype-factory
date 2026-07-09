---
name: The Institutional Ledger
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#46474a'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#526255'
  on-secondary: '#ffffff'
  secondary-container: '#d3e4d3'
  on-secondary-container: '#576759'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f0309'
  on-tertiary-container: '#c46969'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#d6e7d6'
  secondary-fixed-dim: '#bacbba'
  on-secondary-fixed: '#101f14'
  on-secondary-fixed-variant: '#3b4a3e'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b1'
  on-tertiary-fixed: '#3f0309'
  on-tertiary-fixed-variant: '#792e30'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  table-cell-padding: 8px 12px
---

## Brand & Style
This design system is built for the high-stakes environment of institutional financial analysis. It adopts an **Ink-on-Paper** aesthetic, prioritizing legibility, permanence, and professional rigor. The UI mimics the tactile quality of a high-end financial broadsheet or a technical whitepaper, moving away from digital glow toward a grounded, physical presence.

The target audience consists of senior analysts and portfolio managers who require high-signal environments for deep work. The emotional response is one of calm authority, meticulous precision, and intellectual clarity. The style blends **Minimalism** with **Modern Corporate** sensibilities, utilizing hair-thin borders and deliberate white space to manage high-density data without visual fatigue.

## Colors
The palette is restricted to mimic physical printing materials.
- **Base Surface (#F9F8F6):** A warm, off-white "paper" stock that reduces eye strain compared to pure white.
- **Ink (#1A1A1B):** A deep charcoal-navy used for all primary text and structural lines, providing maximum contrast.
- **Functional Accents:** Restraint is mandatory. Muted Forest Green (#5D6D5F) denotes positive growth or benchmarks. Soft Crimson (#A34F4F) is reserved strictly for risk warnings or negative deltas. 
- **Subtle Shading (#F1EFEA):** Used for table row striping and container backgrounds to differentiate data regions without relying on shadows.

## Typography
The system employs a dual-font strategy:
- **Serif (Source Serif 4):** Used for headlines, section titles, and long-form analytical commentary. It provides an authoritative, editorial feel.
- **Sans-Serif (Work Sans):** Used for all data entry, tabular data, and functional UI labels. It was chosen for its exceptional clarity at small sizes and its neutral, professional tone.

Data-heavy tables should utilize the `data-mono` role, which leverages Work Sans's clean metrics to ensure numerical alignment. Labels should frequently use `label-caps` for clear categorization without increasing font size.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (max-width 1440px) to maintain the "report" feel. A 12-column system is used, but content is largely driven by dense modules.

- **Data Density:** Spacing is tight (4px increments) to maximize the "above the fold" information. 
- **Hairline Dividers:** Instead of wide gutters, use 1px borders (#D1D0CC) to separate columns in data tables.
- **Responsive Behavior:** On mobile, the 12-column grid collapses to a single column, with headers shifting from side-aligned to top-aligned. Table views on mobile should utilize horizontal scrolling for specific data clusters to maintain cell integrity.

## Elevation & Depth
In keeping with the ink-on-paper aesthetic, this design system **eschews shadows** almost entirely. Depth is achieved through:
- **Tonal Layering:** Using the secondary surface color (#F1EFEA) to lift an area from the base paper color.
- **Structural Lines:** 1px and 2px "Ink" lines define hierarchy. A 2px line denotes a primary section break; a 1px line denotes a row or column break.
- **Zero-Lift Interactions:** Buttons and cards do not "float" on hover. Instead, they utilize subtle background color shifts (e.g., from #F9F8F6 to #F1EFEA) or a 1px interior inset stroke to indicate interactivity.

## Shapes
The shape language is strictly **Sharp (0px)**. All containers, buttons, and input fields utilize 90-degree corners. This reinforces the institutional, "ledger" feel and ensures that grid alignments are crisp and visually unambiguous.

## Components
- **Data Tables:** The core component. Features 1px horizontal dividers, `label-caps` for headers, and alternating row fills using #F1EFEA for readability.
- **Analytical Cards:** Framed by a 1px border. The header uses the Serif font, while the content area uses the Sans-Serif font.
- **Action Buttons:** Text-only or with a 1px border. No gradients. Primary actions use the Ink color as a solid fill with off-white text.
- **Input Fields:** Bottom-border only or full 1px border. Use the Sans-Serif font. Focus state is indicated by a weight increase of the border to 2px rather than a color change.
- **Status Indicators:** Small, solid squares (not circles) of Forest Green or Soft Crimson placed adjacent to data points to indicate trend direction.
- **Tabbed Navigation:** Underline style using a 2px Ink stroke for the active state, mimicking a hand-drawn emphasis line on a document.