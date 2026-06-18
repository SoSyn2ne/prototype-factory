---
name: Institutional Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#45474b'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777b'
  outline-variant: '#c5c6cb'
  surface-tint: '#5a5f67'
  primary: '#03060c'
  on-primary: '#ffffff'
  primary-container: '#1a1f26'
  on-primary-container: '#82878f'
  inverse-primary: '#c2c7d0'
  secondary: '#5e5e5d'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfde'
  on-secondary-container: '#626361'
  tertiary: '#000703'
  on-tertiary: '#ffffff'
  tertiary-container: '#002415'
  on-tertiary-container: '#629076'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee2ec'
  primary-fixed-dim: '#c2c7d0'
  on-primary-fixed: '#171c23'
  on-primary-fixed-variant: '#42474f'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#464746'
  tertiary-fixed: '#bceecf'
  tertiary-fixed-dim: '#a1d1b4'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#224f39'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Source Serif 4
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
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-edge: 32px
  panel-padding: 24px
  table-row-height: 40px
---

## Brand & Style

This design system is engineered for high-stakes financial analysis and insurance underwriting. The brand personality is authoritative, meticulous, and calm. It prioritizes information density and clarity over decorative flair, ensuring that analysts can process complex data sets without visual fatigue.

The design style is **Corporate Modern with a Minimalist focus**. It utilizes flat, clean panels and a restricted color palette to maintain a serious tone. Every element is intentional; there is no "fluff." High-contrast data presentation and structured layouts evoke a sense of reliability and institutional permanence, moving away from consumer-grade trends toward a professional toolset.

## Colors

The palette is anchored by **Institutional Ink** (#1A1F26), a deep navy-charcoal used for primary text, sidebars, and structural grounding. The background is **Canvas White** (#F9F8F6), a soft off-white that reduces eye strain during long working sessions compared to pure white.

Functional colors are used sparingly for intent:
- **Decision Green** (#2D5A43): A muted forest green used for positive actions, approvals, and "low-risk" indicators.
- **Restrained Risk** (#D97051): A sophisticated coral/amber used for alerts, high-risk flags, and critical warnings. 
- **Neutral/Borders**: We use a range of cool greys to define table structures and subtle boundaries without breaking the flow of the page.

## Typography

This system uses a hybrid typographic approach. **Source Serif 4** provides an intellectual, authoritative voice for headers and report titles, suggesting a legacy of expertise. **Inter** is used for all functional UI elements, data tables, and body copy to ensure maximum legibility at small sizes.

For financial data, we utilize `data-mono` (Inter with tight tracking) to ensure numerical alignment. `label-caps` is reserved for table headers and small metadata tags to differentiate them from actionable content. On mobile, headlines scale down by 20%, but body sizes remain constant to preserve readability.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, centered within a 1440px container to prevent line lengths from becoming unreadable on ultra-wide monitors. The rhythm is based on a 4px baseline shift, but primarily uses 16px/24px increments for major structural separation.

Content is organized into "Panels." Each panel should have a consistent 24px internal padding. Data tables should prioritize density, using a 40px row height to maximize the information visible above the fold. On mobile devices, the layout collapses into a single-column stack with 16px side margins, and horizontal scrolling is permitted specifically for large data tables to preserve cell integrity.

## Elevation & Depth

To maintain a professional, flat aesthetic, this design system rejects shadows in favor of **Low-contrast outlines**. 

Hierarchy is established through:
1.  **Tonal Layering**: The primary background is Canvas White. Interactive or secondary panels use a slightly darker or lighter stroke (#E5E7EB) to define their bounds.
2.  **Surface Tiers**: High-priority work areas use a pure white background to "pop" against the off-white canvas.
3.  **Zero-Shadow Policy**: No ambient shadows are used for cards or buttons. Instead, active states are indicated by subtle background color shifts or 2px solid borders in Institutional Ink.

## Shapes

The shape language is **Sharp (0px)**. All containers, buttons, inputs, and data cells use hard 90-degree corners. This evokes a sense of architectural precision and reinforces the "Institutional" nature of the tool. Rounded elements are strictly avoided to differentiate the product from consumer-facing "lifestyle" apps and to maximize pixel-perfect alignment in dense data grids.

## Components

### Buttons
Buttons are rectangular with sharp corners. 
- **Primary**: Institutional Ink background with Canvas White text.
- **Success**: Decision Green background.
- **Ghost**: Transparent background with a 1px Institutional Ink border.

### Data Tables
Tables are the core of the system. Use 1px borders between rows (Color: #E5E7EB). Headers are `label-caps` with a subtle grey background. Hover states for rows should use a very faint tint of Canvas White to assist with tracking across wide data sets.

### Input Fields
Inputs use a 1px border. Focus state is a 2px solid Institutional Ink border. There is no "glow" or shadow on focus. Error states use a 1px Restrained Risk border with accompanying helper text.

### Chips/Badges
Used for status indicators (e.g., "Under Review", "High Risk"). These are flat rectangles with a light background tint of the status color and dark text of the same hue.

### Cards & Panels
Panels are the primary container. They have no shadow, a 1px border (#E5E7EB), and a white background. Header sections within panels are separated by a horizontal rule.