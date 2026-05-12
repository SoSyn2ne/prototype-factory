---
name: Spend Kill Switch
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#44474a'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000101'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#476550'
  on-secondary: '#ffffff'
  secondary-container: '#c9ebd1'
  on-secondary-container: '#4d6b56'
  tertiary: '#000200'
  on-tertiary: '#ffffff'
  tertiary-container: '#121f16'
  on-tertiary-container: '#7a887c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#c9ebd1'
  secondary-fixed-dim: '#aecfb5'
  on-secondary-fixed: '#032111'
  on-secondary-fixed-variant: '#304d3a'
  tertiary-fixed: '#d7e6d8'
  tertiary-fixed-dim: '#bbcabc'
  on-tertiary-fixed: '#121e15'
  on-tertiary-fixed-variant: '#3d4a3f'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  memo-title:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  memo-body:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  data-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  data-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.4'
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 1px
  margin-sm: 16px
  margin-md: 24px
  margin-lg: 48px
---

## Brand & Style

The design system is engineered for the high-stakes environment of corporate financial oversight. It adopts a **Disciplined Financial Minimalism** style, drawing heavily from the aesthetics of traditional ledger books and 20th-century economic reports. The goal is to evoke an emotional response of absolute control, cold rationality, and fiduciary responsibility.

The interface functions as a "workbench" rather than a dashboard. It avoids all decorative flourishes, opting instead for a structural layout where the UI elements themselves serve as the organizational framework. The aesthetic prioritizes information density and clarity, utilizing sharp edges and a monochromatic-adjacent palette to signal that this is a tool for decisive action—specifically, the "killing" of unnecessary digital waste.

## Colors

The palette is rooted in the tactile reality of physical auditing.
- **Background (#F9F9F7):** An off-white parchment that reduces eye strain during long-form data analysis.
- **Ink (#1A1C1E):** A deep, near-black used for all primary text and structural lines.
- **Sage and Forest (#4F6D58, #2D3A30):** Muted greens represent "growth" or "active" status, but in a desaturated tone that feels sober and earned rather than celebratory.
- **Alert (#A64D4D):** A dried-blood red reserved exclusively for the "Kill Switch" mechanisms and critical over-spend warnings.

No gradients are permitted. All colors must be applied as flat, solid fills to maintain the "ledger" aesthetic.

## Typography

This design system utilizes a functional hierarchy that distinguishes between **narrative** and **computation**.

- **Narrative (Source Serif 4):** Used for "Memos," executive summaries, and descriptive headers. It conveys the authority of a printed report.
- **Computation (Inter):** Used for the primary UI, navigation, and interface labels. It provides the neutral clarity required for rapid scanning.
- **Values (JetBrains Mono):** All numerical data, ROI percentages, and currency values must be rendered in a monospaced font to ensure decimal points align perfectly in vertical columns, mimicking a manual ledger.

## Layout & Spacing

The layout is governed by a **Rigid Grid** system. Components should not float; they should be "caged" by borders.

- **The Ledger Grid:** Use 1px borders (#D1D1CF) to define all content zones. Instead of white space to separate elements, use thin lines.
- **Vertical Rhythm:** A strict 8px baseline grid ensures that monospaced data rows align across adjacent columns.
- **Breakpoints:** 
  - **Desktop (1440px):** 12-column layout with fixed margins.
  - **Tablet (768px):** 6-column layout; memos shift to the top, data tables become scrollable.
  - **Mobile (375px):** Single column; all borders remain sharp, but padding is reduced to 12px to maximize data density.

## Elevation & Depth

This design system rejects the concept of Z-axis depth. There are no shadows, no blurs, and no "lifted" elements.

Hierarchy is achieved through **Tonal Stacking** and **Line Weight**:
- **Layer 0 (Background):** #F9F9F7 (Paper)
- **Layer 1 (Containers):** White (#FFFFFF) with a 1px #D1D1CF border.
- **Active State:** A 2px Forest Green (#2D3A30) border indicates focus.
- **Kill State:** A 2px Alert Red (#A64D4D) border indicates a deactivated or over-budget tool.

Charts should use **Confidence Bands**—subtle, low-opacity fills behind trend lines—to show projected spend variance rather than using shadows or glows.

## Shapes

Every element in this design system must have **zero roundedness**. All corners must be perfectly sharp (90 degrees). This includes buttons, input fields, cards, and tooltips. This architectural rigidity reinforces the theme of a "disciplined workbench" where there is no room for softness or ambiguity.

## Components

### Buttons
- **Primary:** Solid #1A1C1E background, #F9F9F7 text, sharp corners.
- **Secondary:** Transparent background, 1px #1A1C1E border, #1A1C1E text.
- **Kill Switch:** Solid #A64D4D background, #FFFFFF text, uppercase mono-type.

### ROI Tiles
Standardized cards that display a single metric (e.g., "AI Waste Stopped"). These feature a large monospaced value in the center, a label-caps header, and a 1px ledger-line border.

### Data Visualization
- **Line Charts:** 1.5px solid lines, no smoothing (stepped or straight lines only).
- **Confidence Bands:** A light Sage (#4F6D58) tint at 10% opacity surrounding the main spend line.
- **Bar Charts:** Flat Forest Green fills. No rounded caps.

### Inputs & Tables
- **Inputs:** Simple boxes with 1px borders. Focused inputs change border color to Forest Green.
- **Tables:** No zebra striping. Use 1px horizontal lines (ledger lines) between every row. Monospaced font for all numerical columns, right-aligned.

### The Memo Block
A specialized component for AI insights. It uses the #FFFFFF surface with an exaggerated left-hand border (4px) in Sage, utilizing Source Serif for the content to look like a typed executive briefing.