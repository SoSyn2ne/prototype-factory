---
name: Kinetic Operator
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
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#c5cce6'
  on-tertiary: '#283044'
  tertiary-container: '#a9b1ca'
  on-tertiary-container: '#3c4459'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
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
  unit: 4px
  gutter: 12px
  margin-page: 24px
  table-cell-padding-x: 8px
  table-cell-padding-y: 6px
---

## Brand & Style
This design system is engineered for high-frequency logistical operations and rapid data triage. It adopts a **Professional / Modern** aesthetic with a heavy emphasis on **Information Density**. The brand personality is that of a "cockpit"—serious, precise, and utilitarian—designed for professional sellers managing high-volume TikTok Shop returns.

The UI avoids decorative flourishes in favor of structural clarity and functional efficiency. It leverages high-contrast status signals to draw immediate attention to deadlines and anomalies while maintaining a calm, dark-mode focused environment for sustained focus during long operational shifts.

## Colors
The palette is built on a "Slate and Charcoal" foundation to minimize eye strain in high-density environments. 
- **Core Surfaces:** Use `#0f172a` for the primary background and `#1e293b` for nested containers and cards.
- **Accents:** A high-visibility Cyan (`#38bdf8`) is used for primary actions and focus states.
- **Semantic Signals:** Information density requires immediate cognitive recognition. Use Crimson (`#ef4444`) for expired return windows, Amber (`#f59e0b`) for pending deadlines, and Emerald (`#10b981`) for resolved states.
- **Borders:** Utilize `#334155` for all structural divisions to maintain a tight, organized grid without the heaviness of solid blacks.

## Typography
Typography is optimized for legibility at small scales. **Inter** provides a clean, neutral foundation for the interface, while **JetBrains Mono** is reserved strictly for tabular data, tracking IDs, and SKU numbers to ensure character differentiation (e.g., distinguishing '0' from 'O').

Tracking is tightened across headlines to save horizontal space. Body text uses a compact 13px base to maximize the number of visible rows in data tables. All labels and data points should adhere to a strict baseline grid to maintain alignment across dense horizontal layouts.

## Layout & Spacing
This system utilizes a **Fixed Grid** approach for the sidebar and a **Fluid Grid** for the main content area to accommodate expansive data tables. 

A 4px base unit controls the rhythm. Components use tight internal padding to maximize the data-to-ink ratio. 
- **Desktop:** 12-column grid with 12px gutters.
- **Mobile/Tablet:** Given the "operator-dense" requirement, mobile views should prioritize vertical stacking of data cards rather than attempting to shrink tables. 
- **Density:** Elements are packed closely; use 12px margins between cards and 6px padding within table rows to allow for high row visibility without sacrificing clickability.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than shadows. 
- **Level 0 (Base):** `#0f172a` for the application background.
- **Level 1 (Cards/Tables):** `#1e293b` with a 1px solid border of `#334155`.
- **Level 2 (Modals/Popovers):** `#1e293b` with a subtle 2px border and a very slight 10% black shadow to provide separation from Level 1.
Avoid blurred backgrounds (glassmorphism) as they introduce visual noise that interferes with rapid text scanning.

## Shapes
The design system employs a **Soft (0.25rem)** roundedness level. This keeps the UI looking precise and "engineered" while avoiding the harshness of perfectly square corners. 
- **Buttons and Inputs:** 4px (0.25rem) radius.
- **Status Chips:** 2px radius for a sharper, more clinical look.
- **Large Containers:** 8px (0.5rem) radius to define major application sections.

## Components
- **Data Tables:** The core component. Must support "compact mode" with 6px vertical cell padding. Headers use `label-caps` with a background fill of `#1e293b`.
- **Status Chips:** Rectangular with minimal rounding. Use semantic background tints (15% opacity) with 100% opacity text for clear status communication without overwhelming the row.
- **Buttons:** Primary buttons use `#38bdf8` with black text for maximum contrast. Secondary buttons are ghost-style with `#334155` borders.
- **Input Fields:** Dark fills (`#0f172a`) with subtle borders. Focus state is a 1px solid Cyan border.
- **Key Performance Indicators (KPIs):** Large `headline-lg` numbers with `label-caps` descriptors, arranged in a horizontal bar at the top of the dashboard.
- **Action Menus:** Compact dropdowns using `body-sm` font to allow for quick bulk-action selection in header rows.