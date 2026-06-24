---
name: Precision Fintech Interface
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
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  tabular-nums:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
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
  grid-margin: 1rem
  gutter: 0.75rem
  row-height-condensed: 2rem
  row-height-default: 2.5rem
  stack-sm: 0.25rem
  stack-md: 0.5rem
---

## Brand & Style

This design system is engineered for high-stakes operational efficiency. It adopts a **Corporate / Modern** aesthetic with a heavy lean toward **Utilitarian Minimalism**. The brand personality is professional, cold, and precise—eliminating visual "fluff" to reduce cognitive load during complex chargeback investigations.

The design emphasizes:
- **Information Density:** Compact spacing and reduced vertical heights to maximize data visibility without scrolling.
- **Visual Hierarchy:** Using borders and subtle tonal shifts rather than heavy shadows to define structure.
- **Reliability:** A "pro-tool" feel that evokes the stability of a terminal while maintaining the accessibility of a modern web application.

## Colors

The palette is grounded in a "Paper & Ink" philosophy. The base is composed of cool neutrals to keep the interface receding, allowing critical data points to surface naturally.

- **Action Accent:** Electric Indigo (#4F46E5) is reserved exclusively for primary actions, required evidence links, and active states. It should be used sparingly to maintain its "sharp" intent.
- **Semantic Badges:** High-saturation, mid-luminance colors (Red, Amber, Green) are used for risk indicators. These must be legible against white backgrounds and light-tinted fills.
- **Neutral Scale:** Extensive use of Slate and Gray for secondary text, borders, and disabled states to ensure the primary data remains the focal point.

## Typography

Typography is the primary driver of the interface's utility. **Inter** is utilized for its exceptional legibility at small sizes and its robust support for OpenType features.

- **Tabular Figures:** All monetary values, dates, and timestamps must use `font-variant-numeric: tabular-nums`. This ensures columns of numbers align perfectly for rapid scanning.
- **Micro-labels:** Use the `label-caps` style for table headers and section titles to create a clear structural hierarchy without increasing font size.
- **Density:** Body text is set at 13px (sm) for the majority of data-grid content, with 14px (md) reserved for prose and documentation.

## Layout & Spacing

This design system employs a **Fluid Grid** with fixed-width sidebars for navigation and evidence inspection.

- **Spacing Rhythm:** A strict 4px baseline grid. Most internal paddings use 8px (stack-md) or 4px (stack-sm) to maintain high density.
- **Data Tables:** Columns should be tightly packed. Priority is given to content width over uniform column sizing. Use "Sticky" headers and primary ID columns for long horizontal scrolls.
- **Breakpoints:**
  - **Desktop (1440px+):** Full multi-pane view (Nav + List + Detail).
  - **Compact (1024px):** Detail pane becomes an overlay or full-screen view.
  - **Mobile:** Not prioritized for this "Pro" tool, but should reflow to a single-column list view.

## Elevation & Depth

The design system avoids traditional shadows to prevent "visual mush" in dense layouts. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

- **Z-0 (Base):** The main workspace background (#F8FAFC).
- **Z-1 (Surface):** White containers (#FFFFFF) with a 1px border (#E2E8F0).
- **Z-2 (Active/Overlay):** Used for dropdowns and tooltips. A subtle 4px blur shadow with 5% opacity may be used here only to separate the element from the surface below.
- **Interactive States:** Use background color shifts (e.g., Gray 50 to Gray 100) on hover rather than lift or shadow effects.

## Shapes

The shape language is **Soft** but conservative. 

- **Components:** Buttons and input fields use a 0.25rem (4px) radius. This provides a modern feel while maintaining a rigid, professional structure.
- **Badges:** Status indicators use the same 4px radius or are slightly more rounded (0.5rem) to distinguish them from interactive buttons.
- **Evidence Cards:** Use the `rounded-lg` (8px) setting for larger containers like evidence preview blocks to provide a container-within-a-container visual distinction.

## Components

### Data Tables
The core of the system. 
- **Header:** Uppercase, bold, 11px text with subtle bottom border.
- **Rows:** 32px height (condensed) or 40px (default). Zebra striping is not used; use 1px horizontal dividers instead.
- **Cells:** Numeric data is right-aligned. Status badges are left-aligned.

### Status & Risk Badges
- **Format:** Small, pill-shaped or rectangular with 4px radius.
- **Style:** Light tinted background with high-contrast text (e.g., Light Red background with Dark Red text). Include a 2px colored dot icon for accessibility.

### Buttons
- **Primary:** Solid Electric Indigo with white text. No gradient.
- **Secondary/Ghost:** 1px border (#E2E8F0) with Slate text.
- **Size:** 32px height for standard actions to match input fields.

### Evidence Cards
Collapsible containers used in the sidebar. 
- **Header:** Includes a status icon (Verified/Pending/Required).
- **Content:** Minimalist display of metadata (File size, upload date, hash).

### Input Fields
- **Style:** 1px border with no inner shadow. Focus state is a 1px Electric Indigo border with a subtle 2px outer glow in the same color.