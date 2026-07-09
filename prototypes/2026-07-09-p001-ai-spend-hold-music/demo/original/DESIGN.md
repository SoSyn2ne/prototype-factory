---
name: AI Spend Hold Music
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
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
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
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
  container-padding: 24px
  gutter: 12px
  row-height-compact: 32px
  row-height-standard: 44px
---

## Brand & Style

The design system is engineered for high-stakes financial monitoring and operational control. The brand personality is clinical, authoritative, and precise, mirroring the reliability of infrastructure tools. It targets small business owners who require an "operator-desk" experience—prioritizing data throughput over decorative aesthetics.

The style is **Corporate Modern with a Utility-First lean**. It utilizes a dark-mode-first approach to reduce eye strain during prolonged monitoring. The aesthetic is defined by high information density, sharp edges, and a strict adherence to a systematic grid. There are no decorative illustrations; every visual element must serve a functional purpose in the monitoring and management of AI expenditure.

## Colors

The palette is optimized for a low-light "command center" environment. 

- **Primary (#3B82F6):** Used for primary actions, active states, and focus indicators. 
- **Success/Accent (#10B981):** Reserved for "within budget" status indicators and positive financial delta.
- **Surfaces:** The base layer uses Deep Charcoal (#121212), while high-priority interactive zones or sidebar containers use Navy (#1A237E) to provide subtle depth without breaking the dark-mode aesthetic.
- **Text:** High-contrast crisp white is used for critical data, while light gray is used for labels and secondary metadata to establish a clear information hierarchy.

## Typography

The typography system prioritizes legibility and data alignment. **Inter** is the primary typeface for all UI controls and instructional text. To ensure financial data and usage metrics are perfectly aligned for scanning, **JetBrains Mono** is utilized for all numerical values, tables, and spend metrics.

Small, all-caps labels are used for table headers and section titles to maximize vertical space. All numerical data should use tabular figures to ensure that columns of numbers remain perfectly aligned, facilitating rapid comparison of AI costs.

## Layout & Spacing

This design system uses a **Fluid Grid** model optimized for high-density dashboards. The layout is built on a strict 4px baseline grid. 

- **Desktop:** 12-column grid with narrow 12px gutters to maximize content area. Sidebars are fixed at 240px to allow the main data workspace to expand.
- **Density:** Components are "compact" by default. Vertical rhythm is tight, favoring information throughput over "breathability."
- **Alignment:** Content is strictly left-aligned for text and right-aligned for financial currency values.

## Elevation & Depth

In a data-dense environment, shadows are minimized to prevent visual clutter. Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Base):** #121212 for the application background.
- **Level 1 (Panels):** #1A237E or slightly lightened charcoal with a 1px solid border (#2D2D2D) to define workspace boundaries.
- **Level 2 (Modals/Popovers):** Subtle 8px blur shadows are only used for transient elements like tooltips or dropdown menus to lift them above the dense grid. 
- **Dividers:** Use 1px borders (#2D2D2D) rather than whitespace to separate data rows in tables.

## Shapes

The design system utilizes a **Soft (Level 1)** roundedness approach. This 4px (0.25rem) radius provides just enough softening to ensure the UI feels modern and professional while maintaining the "hard-edged" precision of an industrial tool. Action buttons and input fields follow this 4px standard. Only status "pills" or badges may use a fully rounded (pill) shape to distinguish them from interactive buttons.

## Components

- **Tables:** The core of the design system. Must support "sticky" headers and striped rows using a subtle background offset. Cell padding should be tight (8px horizontal).
- **Status Badges:** Small, high-contrast indicators. Use background tints of the accent colors (e.g., Emerald at 10% opacity with 100% opacity text) for "Active" or "Under Cap" states.
- **Toggle Switches:** Used for monthly cap controls. When "ON," the switch should use the Electric Blue accent.
- **Input Fields:** Dark-themed with a 1px border. On focus, the border transitions to the primary Electric Blue.
- **Utility Buttons:** Compact height (28px-32px). Use "Ghost" variants (no background, only border) for secondary actions like "Export" or "Filter" to keep the visual focus on the primary data.
- **Spending Progress Bars:** Slim (4px height) linear bars that transition from Electric Blue to Warning Orange as they approach the user-defined cap.