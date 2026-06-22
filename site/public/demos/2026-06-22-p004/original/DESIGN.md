---
name: Clinical Ledger
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5e5e5e'
  primary: '#181919'
  on-primary: '#ffffff'
  primary-container: '#2d2e2e'
  on-primary-container: '#959595'
  inverse-primary: '#c7c6c6'
  secondary: '#426652'
  on-secondary: '#ffffff'
  secondary-container: '#c4ecd3'
  on-secondary-container: '#486c58'
  tertiary: '#3c0006'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e0d14'
  on-tertiary-container: '#e57372'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e2e2'
  primary-fixed-dim: '#c7c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#464747'
  secondary-fixed: '#c4ecd3'
  secondary-fixed-dim: '#a8cfb8'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#2b4e3c'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410006'
  on-tertiary-fixed-variant: '#80272a'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
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
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  tabular-nums:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
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
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is engineered for high-stakes clarity and professional rigor. It serves as a "financial analyst" for medical documentation, transforming complex billing jargon into actionable insights. The brand personality is clinical, objective, and authoritative. 

The aesthetic follows a **Modern Corporate** approach with a focus on **Information Density**. It prioritizes utilitarian efficiency over decoration, using precise alignment and white space to reduce the cognitive load associated with financial stress. Every element is designed to evoke a sense of calm, systematic "decoding" of data.

## Colors
The palette is restrained to maintain focus on data integrity.
- **Graphite (#2D2E2E):** Used for primary text and core structural elements to ensure high contrast and legibility.
- **Off-white (#F9F9F9):** The foundational surface color, providing a clean, non-glare canvas that feels professional.
- **Muted Green (#4C705C):** Employed exclusively for "confidence cues"—indicating verified items, savings found, or resolved balances.
- **Restrained Red (#B04B4B):** Reserved for warnings, billing errors, and urgent discrepancies. It is desaturated to remain serious rather than alarming.
- **Light Gray (#E5E5E5):** Used for hair-line borders to define data boundaries without adding visual weight.

## Typography
The system utilizes **Inter** for its exceptional legibility and neutral character. A heavy emphasis is placed on **tabular figures** (`tnum`) to ensure that currency amounts and medical codes align perfectly in vertical columns, facilitating easy comparison.

Hierarchy is established through weight and color rather than excessive size shifts. Large headlines are slightly condensed with negative letter spacing for a precise, "ledger" feel. Labels use uppercase styling to distinguish metadata from content.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. On desktop, a 12-column grid is used with fixed 16px gutters to maximize horizontal data density. 

Spacing is governed by a 4px baseline shift. In data-heavy "Explainer Panels," padding is kept tight (12px to 16px) to allow as much information as possible to remain "above the fold." Content reflows from a single-column layout on mobile to a multi-pane layout on desktop, where a "Bill Preview" remains sticky on one side while the "Audit Log" scrolls on the other.

## Elevation & Depth
This design system rejects shadows in favor of **Low-Contrast Outlines**. Depth is communicated through structural layering rather than simulated lighting.
- **Surface Level 0:** Off-white background.
- **Surface Level 1:** White cards with `#E5E5E5` 1px borders.
- **Active State:** A subtle 1px stroke of Graphite (#2D2E2E) to indicate focus or selection.
- **Decoding Panels:** Use a slight tonal shift (e.g., a very pale gray fill) to distinguish them from the main bill view.

## Shapes
Shapes are **Soft** (0.25rem / 4px radius). This slight rounding prevents the UI from feeling aggressive or overly "brutalist," while maintaining the professional structure of a financial document. Buttons and input fields share this consistent 4px radius.

## Components
- **Form Controls:** All inputs and buttons are standardized to a 40px height. Inputs use a 1px border (#E5E5E5) and Graphite text.
- **Tabular Rows:** Rows in the bill explainer must have a minimum height of 48px, with a 1px bottom border. Hover states use a subtle gray background shift.
- **Decoding Panels:** Card-based containers used for "Explainer" tooltips. They feature a 1px border and a Graphite header label to signify "Official Analysis."
- **Checklists:** Circular checkboxes that fill with Muted Green (#4C705C) when a line item is "Verified" or "Reviewed."
- **Data Badges:** Small, rectangular chips used for "ICD-10" or "CPT" codes, using a light gray fill and Graphite text.
- **Audit Sidebar:** A vertical component that tracks changes and notes, utilizing `body-sm` typography for high-density information logging.