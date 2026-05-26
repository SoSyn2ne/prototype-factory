---
name: Forensic Audit Design System
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
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#ffbf00'
  on-secondary-container: '#6d5000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#fbbc00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  code-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 24px
  table-row-height: 32px
---

## Brand & Style
The design system is engineered for high-stakes technical environments where clarity and data integrity are paramount. It adopts a **Forensic / Black Box** aesthetic, drawing inspiration from flight recorders, industrial consoles, and diagnostic interfaces. The emotional response is one of serious authority, precision, and unyielding reliability.

The style is a disciplined intersection of **Minimalism** and **Modern Brutalism**. It rejects decorative "fluff" in favor of maximum information density and structural rigidity. Every pixel serves a functional purpose, prioritizing the audit trail and the immediate identification of workflow exceptions.

## Colors
The palette is restricted to a high-contrast, diagnostic scheme to eliminate visual noise. 

- **Charcoal (#121212):** Used for primary typography, structural headers, and deep-focus areas. It represents the "Black Box" core.
- **Amber (#FFBF00):** Reserved exclusively for "Exceptions," critical status changes, and primary action calls. This is the only chromatic color permitted for interaction.
- **Light Gray (#F5F5F5) & White (#FFFFFF):** The foundation for backgrounds and surface layers. This creates a clean, "paper-trail" feel for forensic analysis.
- **Semantic Accents:** Beyond the primary palette, subtle tints of the primary charcoal are used for borders and disabled states to maintain the monotone aesthetic.

## Typography
The typography system utilizes **Inter** for its exceptional legibility and tabular numeric support. The system is tuned for **High-Density Data Navigation**.

- **Tabular Figures:** Always enable 'tnum' (tabular numbers) for tables and audit logs to ensure vertical alignment of digits.
- **Hierarchy:** Contrast is achieved through weight and capitalization rather than massive size changes.
- **Labels:** Small, uppercase labels with tracking are used for metadata and header categories to evoke a stamped, industrial feel.

## Layout & Spacing
This design system uses a **Rigid Grid** model with a 4px base unit. Layouts are optimized for desktop-first forensic analysis, utilizing a 12-column system.

- **Information Density:** Vertical padding is minimized. Table rows and list items are compact (32px height) to maximize the amount of visible data without scrolling.
- **Structure:** Content is organized into clear, bordered panels. Negative space is used functionally to separate logical modules rather than for "breathability."
- **Audit View:** On desktop, the layout often features a persistent left-hand sidebar for navigation and a right-hand "Inspector" panel for specific exception details.

## Elevation & Depth
Depth is conveyed through **Structural Tiering** and **Low-Contrast Outlines** rather than shadows. 

- **Flat Planes:** Surfaces do not "float." They are nested.
- **Borders:** 1px solid borders (#D1D1D1) are the primary method of separation. 
- **Z-Index Logic:** Modals or overlays use a single, sharp 2px solid Charcoal border to indicate they are active, with a semi-transparent charcoal backdrop to dim the underlying data.
- **Tonal Layers:** Using #F5F5F5 for the base and #FFFFFF for active "cards" or "panels" creates subtle depth without breaking the forensic aesthetic.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every UI element—buttons, cards, input fields, and badges—uses right-angled corners. This reinforces the "unrefined" industrial aesthetic and maximizes screen real estate by allowing elements to sit perfectly flush against one another.

## Components
Consistent application of the "Black Box" aesthetic across core elements:

- **Buttons:** 
  - *Primary (Critical):* Solid Amber (#FFBF00) with Charcoal text. Sharp corners.
  - *Secondary:* Solid Charcoal with White text.
  - *Ghost:* 1px Charcoal border, no fill.
- **Status Badges:** 
  - High-density labels. 'Heuristic' uses a charcoal outline. 'Failure' uses solid charcoal. 'Repeatable' uses an amber underline.
- **Input Fields:** 
  - 1px border. No rounded corners. Focus state is indicated by a 2px Amber bottom border.
- **Data Tables:** 
  - Alternating row zebra-striping is forbidden. Use 1px horizontal dividers only. Header cells have a light gray (#E0E0E0) background.
- **Forensic Timeline:** 
  - A vertical 1px line with square nodes representing events. Exception nodes are highlighted in Amber.
- **Audit Cards:** 
  - Flat, white surfaces with a 1px border. Metadata is pinned to the top-right in `label-sm` font.