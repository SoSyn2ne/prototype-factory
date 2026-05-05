---
name: Audit-Precise Analyst
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
  on-surface-variant: '#44474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#006e1c'
  on-secondary: '#ffffff'
  secondary-container: '#91f78e'
  on-secondary-container: '#00731e'
  tertiary: '#0d1711'
  on-tertiary: '#ffffff'
  tertiary-container: '#212c24'
  on-tertiary-container: '#87948a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#94f990'
  secondary-fixed-dim: '#78dc77'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005313'
  tertiary-fixed: '#d9e6da'
  tertiary-fixed-dim: '#bdcabe'
  on-tertiary-fixed: '#131e17'
  on-tertiary-fixed-variant: '#3e4a41'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
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
  margin: 24px
  table-row-height: 40px
  container-max-width: 1280px
---

## Brand & Style

The design system is engineered for the high-stakes environment of tax reconciliation. The aesthetic is "Financial Analyst Modern"—a hybrid of Corporate/Modern professionalism and the structural rigor of Brutalist-inspired data grids. It aims to eliminate "1099-K panic" by replacing chaos with a structured, authoritative interface that feels like a premium accounting terminal.

The core philosophy prioritizes clarity and density. By utilizing crisp borders and a monochromatic base punctuated by functional greens, the design system evokes the feeling of an audited financial statement. The tone is calm and precise, ensuring users feel in total control of complex data splits and tax liabilities.

## Colors

This design system utilizes a high-trust palette centered on **Professional Navy (#1A2B3C)** for primary actions and structural headings. **Mint Green (#4CAF50)** is used sparingly for "balanced" states and final calculations, while a softer **Mint Background (#E8F5E9)** highlights reconciled rows and successful data imports.

**Slate Gray (#64748B)** serves as the backbone for UI borders and secondary text, ensuring that the interface feels architectural rather than decorative. Backgrounds remain predominantly white or ultra-light gray to maintain a clean "paper" feel, essential for long-form data review.

## Typography

The typography system relies on **Inter** for all UI copy and structural labeling to ensure maximum legibility at small sizes. For numerical values, financial subtotals, and spreadsheet cells, the design system introduces **Space Grotesk** as a semi-monospaced alternative to ensure digits align vertically in tables, facilitating easy scanning of figures.

Hierarchy is established through weight and capitalization rather than excessive size. Small-caps labels are used for table headers and metadata to provide an institutional, authoritative feel.

## Layout & Spacing

The design system employs a **Fixed Grid** approach for the main data dashboard, centering content within a 1280px container to prevent excessive eye-travel. The rhythm is based on a 4px baseline, creating a dense but organized "Information Density" suitable for financial tools.

Data grids utilize a strict 40px row height to maximize vertical visibility of transactions. Gutters are kept at a rigid 16px to maintain the spreadsheet-like structure, ensuring that columns are clearly delineated without wasting horizontal space.

## Elevation & Depth

This design system avoids heavy shadows and complex gradients. Depth is communicated via **Tonal Layering** and **Bold Borders**. 
- **Surface 0 (White):** The primary canvas for data entry.
- **Surface 1 (Slate-100/F8FAFC):** Used for sidebar navigation and secondary panels.
- **Surface 2 (Mint-50/E8F5E9):** Indicates "Active" or "Balanced" zones.

Instead of ambient shadows, the system uses 1px **Slate Gray** borders to define containers. A single, very tight "Utility Shadow" (0px 1px 2px rgba(0,0,0,0.05)) is used exclusively for floating elements like dropdown menus or active modal overlays to keep them separated from the grid.

## Shapes

The shape language is "Professional Soft." The design system uses a **0.25rem (4px)** corner radius for most containers, buttons, and input fields. This slight rounding softens the technical nature of the tool without losing the "square" precision associated with accounting software. 

"Audit-trail" chips and status badges utilize a pill-shape (full rounding) to create a visual distinction between static data and status indicators.

## Components

### Buttons & Inputs
Buttons are high-contrast with the primary Navy (#1A2B3C) used for "Generate Report" or "Finalize" actions. Input fields use 1px Slate borders that thicken to 2px Navy on focus. There is no "glow" on focus—only a crisp color shift.

### Data Grids
The centerpiece of the design system. Grids feature subtle horizontal rules in Slate-200. "Hover states" on rows should use the soft Mint Green background to indicate selection. Mono-spaced numbers must be right-aligned for financial accuracy.

### Audit-Trail Chips
Status badges (e.g., "Verified," "Flagged," "Split") use small-caps text inside pill-shaped containers. "Verified" uses the Mint Green palette, while "Unreconciled" uses a muted Slate Gray.

### Subtotal Waterfalls
Specialized components for showing how a 1099-K total is split. These use "stepped" indented rows with connecting lines (1px Slate) to visually demonstrate the flow of funds from a gross total to a net personal liability.

### Progress Steppers
A linear, thin-line stepper at the top of the workspace guides the user through the "Import > Split > Verify > Export" workflow, using the primary Navy for completed steps.