---
name: Institutional Ledger
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
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5f7b'
  primary: '#04162e'
  on-primary: '#ffffff'
  primary-container: '#1a2b44'
  on-primary-container: '#8292b0'
  inverse-primary: '#b6c7e7'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#001b10'
  on-tertiary: '#ffffff'
  tertiary-container: '#003220'
  on-tertiary-container: '#27a577'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b6c7e7'
  on-primary-fixed: '#091c34'
  on-primary-fixed-variant: '#374762'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Noto Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Noto Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Noto Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Noto Sans
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
  container-padding: 24px
  gutter: 16px
  table-cell-padding: 12px 16px
  section-gap: 32px
---

## Brand & Style
The design system is engineered for the high-stakes environment of Korean restaurant franchise operations and financial analysis. It prioritizes **institutional calm** and **analytical precision**, ensuring that operators can navigate complex margin math and supply chain costs without cognitive fatigue. 

The aesthetic sits at the intersection of **Corporate Modern** and **Minimalism**. It utilizes a structured, high-density layout that mirrors the reliability of a physical ledger while leveraging digital-first clarity. The emotional response is one of total control—professional, authoritative, and dependable. Visual flourishes are stripped away in favor of utilitarian elegance: thin borders, ample white space between data clusters, and a strictly functional use of color to highlight fiscal performance.

## Colors
The palette is rooted in **Deep Navy (#1A2B44)** to establish institutional authority, supported by a system of **Slate Grays** for secondary information. 

- **Base & Surfaces:** The workspace uses an off-white background (`#F8FAFC`) to reduce glare, with pure white surfaces (`#FFFFFF`) for data containers. This creates a subtle "lift" for primary workspaces.
- **Accents:** **Professional Blue (#2563EB)** is reserved exclusively for primary actions and interactive states, providing a clear path for the user’s eye.
- **Financial Status:** Semantic colors are restrained. **Soft Emerald (#10B981)** indicates profit gains or positive margins, while **Restrained Amber (#D97706)** marks "visibility risks" or budget variances. Red is avoided unless indicating a critical system failure or irreversible loss, maintaining the "calm" directive.

## Typography
This design system utilizes **Noto Sans** as the primary typeface for its exceptional legibility in both Korean and Latin scripts. The type scale is optimized for **high data density**, favoring smaller, well-spaced increments over large display type.

- **Data Presentation:** For financial tables and currency inputs, **JetBrains Mono** may be used selectively for numerical alignment (tabular figures), ensuring that decimal points and commas align vertically for quick scanning.
- **Hierarchy:** Use `label-caps` for table headers and section overviews to provide a structural frame without adding visual weight.
- **Mobile scaling:** On mobile devices, `display-lg` should scale down to `24px` to maintain screen economy.

## Layout & Spacing
The layout follows a **12-column fluid grid** for desktop, transitioning to a single-column scroll for mobile. 

- **Density:** Spacing is tight but intentional, using a 4px baseline grid. For financial analysis views, vertical padding is minimized to maximize the number of visible rows in tables and comparison views.
- **Modular Containers:** Content is grouped into logical modules (cards). Each module should maintain a consistent 24px internal padding, while elements within a module (like a label and its corresponding value) use 4px or 8px gaps.
- **Table Structure:** Use 16px gutters between columns. Data-heavy tables should utilize "sticky" headers and "sticky" first columns (for Item Names/Store IDs) to maintain context during horizontal scrolls.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Levels:** The primary background is the lowest level. Content "cards" sit on top with a 1px border (`#E2E8F0`). 
- **Shadows:** Use a single, extremely subtle ambient shadow for active elements or "floating" cards (e.g., `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05)`). This prevents the UI from feeling "heavy."
- **Interactive Depth:** When a user interacts with a simulator or input, the element does not "pop" out; instead, it gains a subtle 2px Professional Blue outline to signal focus.

## Shapes
The design system employs a **Soft (1)** roundedness profile. This 4px (`0.25rem`) radius provides a modern touch while maintaining the serious, structured feel of a financial institution. 

- **Small Components:** Checkboxes and small tags use the 4px radius.
- **Large Components:** Main content cards and simulators use an 8px (`rounded-lg`) radius to slightly soften the edges of the dashboard.
- **Inputs:** Text fields use the standard 4px radius to align with the grid-based nature of the forms.

## Components
- **Financial Cards:** These are the primary containers for KPIs (e.g., Food Cost %, Labor Margin). They feature a `label-caps` title, a `display-lg` value, and a small sparkline or trend indicator.
- **Comparison Tables:** Rows must feature alternating subtle fills (Zebra striping) using `#F8FAFC`. Headers are `primary_color` (Deep Navy) text on a slightly darker gray background to anchor the data.
- **Interactive Simulators:** Sliders for "What-if" scenarios (e.g., "If ingredient price rises 10%") should use a clean, thin track with a Professional Blue handle.
- **Status Badges:** Use a "Pill" shape with a low-opacity background of the semantic color and a high-contrast text label (e.g., Success: Background 10% Emerald, Text 100% Emerald).
- **Input Fields:** Use a 1px border. On focus, the border transitions to Professional Blue with a 3px soft outer glow in the same hue.
- **Action Buttons:** Primary buttons are solid Deep Navy with white text. Secondary buttons use the Blue accent as a ghost-style border.