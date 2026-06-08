---
name: Shock Binder Utility Logic
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
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#191917'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e2d2b'
  on-tertiary-container: '#979491'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#e6e2de'
  tertiary-fixed-dim: '#c9c6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484644'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
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
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
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
  sidebar-width: 240px
  row-height-compact: 32px
  row-height-standard: 44px
---

## Brand & Style
The brand personality is authoritative, precise, and utilitarian. It is designed for auditors, insurance brokers, and risk managers who require high information density to manage complex financial exposure. The design system prioritizes "operator efficiency" over decorative flair.

The style is **Corporate / Modern** with a lean toward **Minimalism** to ensure that data remains the primary focus. It employs a "Utility-First" philosophy: every visual element must serve a functional purpose in the audit workflow. The emotional response should be one of control, reliability, and clarity amidst high-stakes financial data.

## Colors
This design system utilizes a restrained, professional palette to facilitate long periods of focused work.
- **Primary (Charcoal):** Used for primary navigation, headers, and high-emphasis text.
- **Secondary (Slate):** Used for secondary UI elements, icons, and meta-data.
- **Backgrounds:** A tiered system of Fog and Light Gray to differentiate between the workspace (primary) and the interface containers (secondary).
- **Warning (Amber):** Reserved strictly for financial risk, audit exposure, and unresolved discrepancies.
- **Success (Deep Green):** Used for verified compliance status and successful COI validation.

## Typography
The typography system uses **Inter** for its exceptional legibility in dense UI environments. For data-heavy contexts, such as policy numbers, audit IDs, and financial figures, **JetBrains Mono** is utilized to ensure character distinction and alignment.

The type scale is intentionally tight. Font sizes rarely exceed 24px to maximize the "above the fold" data visibility. High-contrast weights (SemiBold and Bold) are used to create hierarchy within tables without needing excessive whitespace.

## Layout & Spacing
The layout follows a **Fixed Grid** model for the sidebar and a **Fluid Grid** for the main content area to accommodate varying data widths.

- **Grid:** A 12-column system is used within the content area.
- **Margins:** A consistent 24px (1.5rem) margin around the main viewport.
- **Density:** Spacing is based on a 4px base unit. Component internal padding is minimized (8px to 12px) to support high-density data viewing.
- **Breakpoints:**
  - Mobile (<768px): Sidebar collapses to a hamburger menu; tables become cards.
  - Desktop (>1280px): Fixed sidebar, expanded data columns.

## Elevation & Depth
Depth is communicated through **Low-Contrast Outlines** rather than heavy shadows. This maintains a clean, "flat" aesthetic that feels professional and sturdy.

- **Tier 0 (Background):** Fog (#F7FAFC) for the canvas.
- **Tier 1 (Cards/Sections):** White surface with a 1px border in Slate-200 (#E2E8F0).
- **Tier 2 (Modals/Popovers):** White surface with a subtle, tight shadow (0 4px 6px -1px rgba(0,0,0,0.1)) and a Charcoal border.
- **Sidebar:** Slate-800 or Charcoal background to clearly separate global navigation from the workspace.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a professional, modern feel that isn't as aggressive as sharp corners, but remains far more serious and space-efficient than highly rounded or pill-shaped designs. Buttons and input fields use the base 4px radius.

## Components
- **Compact Tables:** The core of the system. Charcoal headers (#2D2D2D) with white text. Rows utilize a 1px border-bottom. Alternate row striping is prohibited; use hover states instead to maintain focus.
- **KPI Cards:** Displayed in a row at the top of dashboards. Features a 12pt JetBrains Mono label and an 18pt Inter Bold value. Warning accents are applied to the top border of the card if the metric exceeds risk thresholds.
- **Buttons:** 
  - *Primary:* Charcoal background, white text, 4px radius.
  - *Action:* Slate outline, used for secondary table actions.
  - *Danger:* Amber background for high-risk deletions or "Audit Exposure" flags.
- **Status Chips:** Small, rectangular indicators with a light background tint and dark text of the same hue (e.g., Light Green background with Deep Green text for "Compliant").
- **Input Fields:** 1px Slate border. On focus, the border thickens to 2px Charcoal. Error states use a sharp Amber border.
- **Sidebar Navigation:** High-contrast Charcoal background. Active states use a solid Slate-500 vertical bar on the left edge. Icons are simplified glyphs in Slate-300.