---
name: Precision & Policy
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
  on-surface-variant: '#43474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#110200'
  on-tertiary: '#ffffff'
  tertiary-container: '#391303'
  on-tertiary-container: '#b5785f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#fdb69a'
  on-tertiary-fixed: '#351002'
  on-tertiary-fixed-variant: '#6b3a25'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
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
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
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
  margin: 32px
  container-max: 1280px
---

## Brand & Style
The design system is engineered for the high-stakes environment of insurance financial analysis. It evokes the authoritative calm of a professional underwriting terminal while remaining accessible to homeowners. The aesthetic is rooted in **Corporate Modern** with a heavy influence from **Financial Data Visualization**. 

The goal is to provide "spreadsheet precision"—a layout that feels calculated, trustworthy, and exhaustive. Every pixel serves a functional purpose, utilizing a high-density information architecture that prioritizes logic over ornament. Visual interest is derived from structured data, clean typography, and a "document-first" approach to layout.

## Colors
This design system utilizes a high-contrast, professional palette designed for long-term legibility and clear status signaling.

- **Primary (Deep Navy):** Used for headers, primary navigation, and core structural elements to establish authority.
- **Secondary (Slate Gray):** Reserved for metadata, supporting text, and secondary UI controls.
- **Surface (Neutral):** A crisp white background for data areas, set against a very light slate background to define page boundaries.
- **Functional Accents:** Warning Red is used exclusively for "Policy Shocks" (premium increases, coverage gaps) and Success Green for "Savings Levers" (discounts, deductible optimizations).

## Typography
Typography is the primary driver of hierarchy. We utilize **Inter** for all narrative and structural text due to its exceptional legibility. **JetBrains Mono** is introduced for all numeric data, currency values, and tabular content to ensure perfect vertical alignment in comparison tables.

- Use `data-md` for all table cell values to ensure numbers remain readable when scanned vertically.
- Use `label-caps` for table headers and section metadata to provide a clear distinction from user data.
- Maintain tight line-heights to support high information density without sacrificing clarity.

## Layout & Spacing
The layout follows a **Fixed 12-column Grid** on desktop to mimic the structured nature of a financial report. On mobile, it collapses into a single-column flow with horizontal swiping for data tables.

- **Density:** We utilize a 4px base unit. Padding within cards and tables should be tight (8px or 12px) to allow for "at-a-glance" data consumption.
- **Alignment:** All elements must align to the grid. Use 16px gutters to maintain clear separation between comparison modules.
- **Fixed Widths:** Data columns should have fixed widths where possible to prevent "jumping" when users toggle between different policy scenarios.

## Elevation & Depth
This design system rejects heavy shadows and depth metaphors in favor of **Low-Contrast Outlines** and **Tonal Layers**.

- **Surfaces:** Main content lives on a White (#FFFFFF) surface. The page background is a soft Slate (#F1F5F9).
- **Borders:** Depth is established via 1px solid borders using `#E2E8F0`. 
- **Active States:** Use a 2px Primary Navy border to indicate selection or focus, rather than a shadow.
- **Interactive Layers:** Modals or "Impact Memos" use a very subtle, sharp shadow (4px blur, 10% opacity) just to separate the layer from the data grid beneath.

## Shapes
Shapes are intentionally conservative to maintain a professional, administrative feel. 

- **Radius:** A consistent 4px (Soft) radius is applied to all buttons, input fields, and cards. 
- **Data Cells:** Table rows and internal module partitions should remain sharp (0px) to reinforce the spreadsheet aesthetic.
- **Icons:** Use thick-stroke, geometric icons. Avoid rounded or bubbly icon sets; prefer sharp, utilitarian glyphs.

## Components

### Comparison Boards
The core component of the design system. These are multi-column containers with 1px dividers. Header rows should be pinned, and the "Current Policy" column should be visually distinct with a subtle gray background tint.

### Impact Memos
Stylized as professional underwriting notes. These cards use a slightly different background color (e.g., very light cream or blue) and a monospaced font for the "Analysis" section to differentiate expert commentary from raw data.

### Financial Waterfalls
A custom visualization showing the step-by-step change from the old premium to the new premium. Use Warning Red and Success Green bars to show increases and decreases respectively.

### Input Fields
Strictly rectangular with 1px borders. Use `label-caps` for field labels placed directly above the input. Ensure numeric inputs use monospaced fonts for the value.

### Document Lockers
List-based components for policy PDFs. Use a "table-row" style with metadata (date, file size, type) clearly aligned in columns, ending with a secondary button for "View Analysis."

### Action Buttons
Primary buttons are solid Navy with white text. Secondary buttons are outlined with 1px borders. Avoid rounded-pill shapes; stick to the standard 4px radius.