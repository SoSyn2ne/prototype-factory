---
name: Audit Precision Ledger
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
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1700'
  on-tertiary-container: '#b87500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
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
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
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
  unit: 4px
  gutter: 16px
  margin-page: 32px
  cell-padding-x: 12px
  cell-padding-y: 8px
---

## Brand & Style

The design system is engineered for the high-stakes environment of payroll compliance and financial auditing. It evokes the feeling of a "digital vault"—a space where data is not just stored, but protected and validated. The aesthetic is rooted in **Corporate Minimalism** with a focus on spreadsheet-like precision.

The target audience consists of Financial Analysts and Compliance Officers who value "defensibility" over flair. Every pixel is dedicated to information density, legibility, and an audit-ready posture. The interface avoids unnecessary decorative elements, favoring structural clarity, thin 1px borders, and a rigorous information hierarchy that mimics professional financial documentation.

## Colors

The palette is built on a foundation of **Deep Navy (#0F172A)**, providing a sense of institutional stability. This is complemented by a range of **Slate Grays** for structural lines and secondary text.

Functional color is used with extreme restraint to signify status:
- **Emerald (#10B981)**: Reserved exclusively for "Defensible" status, indicating compliance and verified data.
- **Amber (#F59E0B)**: Used for risk markers, warnings, and audit flags that require analyst attention.
- **Surface Colors**: The background utilizes a crisp Slate-50 (#F8FAFC) to differentiate the work surface from the white (#FFFFFF) data cards and table rows.

## Typography

Typography is the primary vehicle for data hierarchy in this design system. 
- **Inter** is the workhorse for all UI controls, navigational elements, and primary body text. It provides the necessary clarity for complex interfaces.
- **JetBrains Mono** is utilized for all numerical data, currency values, deltas, and timestamped audit logs. This ensures that columns of numbers align perfectly (tabular figures), allowing analysts to scan for discrepancies rapidly.

Headlines are kept compact to maximize vertical space. "Label-caps" are used for table headers and section metadata to provide a distinct visual break from the data itself.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid** layout. The sidebar and utility panels remain fixed to provide a stable anchor for the analyst, while the main data grid expands to fill the viewport.

A rigorous 4px baseline grid ensures alignment across dense data rows. 
- **Data Grids**: Use tight 8px vertical padding for rows to maximize the "above-the-fold" information.
- **Sidebars & Modals**: Use more generous 24px-32px padding to create a "breathing room" contrast against the dense data centers, helping the user focus on configuration tasks.
- **Breakpoints**: Desktop (1440px+), Laptop (1024px-1439px), and Tablet (768px-1023px). This system is optimized for widescreen desktop usage where multi-column financial tables can be viewed in full.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows. This maintains the "flat" professional feel of a spreadsheet.

1.  **Level 0 (Base)**: The page background (#F8FAFC).
2.  **Level 1 (Surface)**: Cards and table containers use a 1px border (#E2E8F0) and a white background. No shadow.
3.  **Level 2 (Active/Interactive)**: Elements like active dropdowns or hovered rows use a subtle light blue tint (#F1F5F9) instead of a shadow.
4.  **Level 3 (Overlay)**: Modals and context menus use a very soft, diffused shadow (0px 4px 12px rgba(15, 23, 42, 0.08)) to lift them off the data grid without obscuring the context.

## Shapes

The shape language is conservative and structural. A **Soft (0.25rem)** roundedness is applied to buttons and input fields to prevent the UI from feeling overly aggressive, but it remains sharp enough to feel like a precision tool. 

Data cells and table headers maintain sharp (0px) corners to preserve the continuous grid lines essential for spreadsheet scanning. Audit markers and status tags use the same 4px radius for consistency.

## Components

### Buttons & Inputs
- **Primary Action**: Deep Navy background with white text. High contrast, sharp 4px corners.
- **Secondary/Audit Action**: 1px Slate-200 border, transparent background, Navy text.
- **Data Inputs**: Monospaced font for all numerical inputs. Use a subtle inner shadow on focus to indicate "edit mode."

### Status Chips (The "Defensibility" Indicators)
- **Defensible**: Emerald background (10% opacity) with Emerald text and a solid 1px Emerald left-border.
- **Flagged/Risk**: Amber background (10% opacity) with Amber text and a 1px Amber border.

### Data Tables
- **Headers**: Slate-50 background, bold "label-caps" typography, 1px bottom border.
- **Rows**: Alternating "zebra" stripes are discouraged; instead, use 1px horizontal borders and a 2px Deep Navy vertical "active" indicator on the selected row.
- **Audit Trail**: A dedicated sidebar component using `body-sm` typography and `data-mono` timestamps to track every change made to a record.

### Audit Markers
Small, 8x8px square markers that appear in the corner of table cells to indicate a manual override or a flagged calculation, providing a non-intrusive way to signal that a cell has history.