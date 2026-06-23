---
name: Precision Operator
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002388'
  primary-container: '#2e5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#124af0'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#cf2c30'
  on-tertiary-container: '#ffecea'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001356'
  on-primary-fixed-variant: '#0035be'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
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
    fontFamily: JetBrains Mono
    fontSize: 10px
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
  control-height: 40px
  row-height: 32px
  gutter: 12px
  margin-page: 24px
  stack-tight: 4px
  stack-base: 8px
---

## Brand & Style

The brand personality is authoritative, resilient, and unapologetically utilitarian. It is designed for high-stakes environments where trades contractors and home-service operators manage significant cash flow and logistical risk. The UI prioritizes information density over aesthetics, evoking the feeling of a flight deck or a professional trading terminal.

The design style is **Corporate / Modern** with a **Brutalist** edge for data clarity. It uses sharp edges, heavy-duty visual hierarchies, and high-density information clusters to ensure that "cash-at-risk" is never missed. Every element serves a functional purpose, eliminating decorative waste to reduce cognitive load during rapid administrative tasks.

## Colors

The palette is optimized for long-duration focus in high-contrast environments. 

- **Primary (Chase Blue):** #2E5BFF. Used for primary calls to action, active navigation states, and systemic "go" signals.
- **Secondary (Caution Amber):** #F59E0B. Reserved for pending transactions, aging invoices, and warnings that require attention but aren't yet critical.
- **Critical (Risk Red):** #EF4444. Dedicated to overdue payments, safety violations, and immediate "cash-at-risk" scenarios.
- **Interface Base:** The background uses a deep #0F172A Slate. Surface containers utilize #1E293B and #334155 to differentiate information layers without losing the dark-mode efficiency.
- **Data Text:** High-contrast #F8FAFC is used for primary data, with #94A3B8 for metadata.

## Typography

This design system uses a dual-font strategy. **Hanken Grotesk** provides a sharp, professional Grotesque feel for UI labels and headings. **JetBrains Mono** is used exclusively for all numerical data, tabular values, and status labels to ensure character distinctness (crucial for distinguishing "0" from "O" in invoice IDs) and perfect vertical alignment in tables.

Typography is intentionally compact. Line heights are kept tight to maximize the number of visible rows on screen. All currency and timestamp data must use the `data-mono` role to prevent layout jitter when values update.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for wide-screen dashboard consumption. 

- **Density:** The system uses a 4px baseline grid. Standard interaction targets (buttons, inputs) are fixed at a 40px height for desktop efficiency, while table rows are compressed to 32px to increase data visibility.
- **Grid:** 12-column grid with narrow 12px gutters. This tight spacing allows for more side-by-side data widgets.
- **Responsiveness:** On tablet, the grid shifts to 6 columns. On mobile, the layout reflows into a single column, but "Priority Risk" badges are pinned to the top of the viewport.

## Elevation & Depth

In this high-density environment, depth is communicated through **Tonal Layers** rather than shadows. 

- **Surface 0:** #0F172A (Page Background).
- **Surface 1:** #1E293B (Main Content Cards / Table Body).
- **Surface 2:** #334155 (Headers / Active Row Highlight).
- **Outlines:** Instead of shadows, use 1px solid borders (#334155) to define element boundaries. This prevents the UI from feeling "fuzzy" and maintains the precision required for financial data management. 
- **Popovers/Modals:** Use a sharp 1px border in a lighter slate (#475569) with a 20% opacity black shadow to create a slight lift without breaking the utilitarian aesthetic.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough rounding to distinguish UI elements from the background while maintaining a professional, rigid appearance.

- **Inputs & Buttons:** 4px (0.25rem) corner radius.
- **Badges:** 2px corner radius for a more "industrial" stamp look.
- **Large Containers:** 8px (0.5rem) corner radius for primary dashboard modules.
- **Selection States:** Sharp 0px corners are acceptable for table row highlights to ensure they feel connected to the grid.

## Components

- **Buttons:** Primary buttons use Chase Blue (#2E5BFF) with white text. Secondary buttons use a transparent background with a 1px slate border. All buttons are 40px tall.
- **Risk Badges:** High-visibility status indicators. `CRITICAL` uses red background/white text; `WARNING` uses amber background/black text; `STABLE` uses a subtle slate tint.
- **Data Tables:** Headers are #1E293B with `label-caps` typography. Rows alternate with a subtle zebra stripe for legibility. Hover states use #334155.
- **Input Fields:** Dark fill (#0F172A) with a 1px border. Focus state uses a 2px Chase Blue border.
- **Monetary Inputs:** Must include a leading currency symbol fixed to the left, using `data-mono` typography for the value.
- **Action Chips:** Small, 24px tall buttons used within table rows for "Quick Edit" or "View Invoice" actions, utilizing the Slate-200 text color.