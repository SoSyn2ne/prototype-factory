---
name: Precision Ledger
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
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
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
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  data-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
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
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
  max-width: 1440px
---

## Brand & Style
The design system is engineered for the high-stakes environment of e-commerce financial analysis. The brand personality is **authoritative, analytical, and unwavering**. It rejects decorative "marketing" flourishes in favor of high information density and functional clarity.

The aesthetic follows a **Modern Corporate** approach with a **Systematic** lean. It prioritizes stability and precision, utilizing a structured layout that mimics the reliability of a high-end physical ledger. Every pixel is intentional, designed to evoke a sense of confidence and control for sellers managing complex margins and inventory risk.

## Colors
This design system utilizes a palette of **Precise Neutrals** and **Professional Blues**. The primary color is a deep Slate (`#0F172A`), used for text and primary headers to establish authority. The action color is a balanced Blue (`#2563EB`), reserved strictly for interactive elements.

Risk indicators are handled with restraint:
- **Warning tones** use a muted Amber for risk exposure.
- **Critical tones** use a soft Crimson for margin erosion or losses.
- **Surface colors** utilize a hierarchy of cool grays (Slate-50 to Slate-200) to define workspaces without visual fatigue.

## Typography
The typography strategy is bifurcated: **Inter** handles the interface narrative and labels, while **JetBrains Mono** is utilized for all numerical values, margin math, and tabular data. This distinction allows the user to immediately identify quantitative data versus qualitative instruction.

Line heights are kept tight to support high-density layouts. For mobile views, `headline-lg` should scale down to 24px, while `data` styles remain consistent to ensure mathematical alignment isn't compromised.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (1440px max-width) and a **Fluid Grid** on mobile devices. A strict 4px baseline grid ensures vertical rhythm across dense data tables.

- **Desktop:** 12-column grid, 16px gutters, 24px outer margins.
- **Tablet:** 8-column grid, 16px gutters, 16px margins.
- **Mobile:** 4-column grid, 12px gutters, 12px margins.

Spacing is intentionally compact. Elements like table rows and list items use `sm` (8px) padding to maximize the visible data range, reducing the need for excessive scrolling.

## Elevation & Depth
Depth in this design system is achieved through **Low-Contrast Outlines** rather than shadows. This maintains a flat, professional "tool" aesthetic.

- **Level 0 (Background):** Slate-50 surface.
- **Level 1 (Panels/Cards):** White surface with a 1px border in Slate-200.
- **Level 2 (Dropdowns/Modals):** White surface with a 1px border in Slate-300 and a very subtle, tight ambient shadow (Alpha 0.05) to separate it from the main canvas.
- **Interactive States:** Hover states use subtle tonal shifts (e.g., Slate-50 to Slate-100) instead of elevation gain.

## Shapes
The shape language is **Soft but disciplined**. A 0.25rem (4px) border radius is the standard for almost all containers, including buttons, inputs, and cards. This slight rounding prevents the UI from feeling aggressive while maintaining a rigorous, grid-aligned structure. Large containers or modal overlays may use `rounded-lg` (8px) to soften the perimeter of the focus area.

## Components
### Buttons
Primary buttons use the Slate-900 or Blue-600 background with white text. Secondary buttons are outlined with a Slate-200 border. Content is always center-aligned with `label-caps` or `body-sm` weight.

### Data Tables
Tables are the core of the interface. Use a 1px horizontal border between rows. Headers use a Slate-100 background with `label-caps` typography. Row height is fixed at 40px for high density.

### Input Fields
Inputs use a 1px border in Slate-200, shifting to Blue-600 on focus. Numerical inputs must use JetBrains Mono for the value text.

### Risk Indicators (Chips)
Small, semi-transparent badges. Warning chips use a soft Amber background with dark Amber text. Critical chips use soft Crimson with dark Crimson text.

### Checklist Items
Checklists use a custom 16px square box with a 2px radius. When checked, the box fills with Blue-600 and a white checkmark. Completed items should show a subtle strikethrough on text and a 50% opacity shift.

### Data Visualization Cards
Cards contain a `headline-sm` title, a `data-lg` primary metric, and a sparkline or trend indicator. Borders are mandatory to define the card's workspace.