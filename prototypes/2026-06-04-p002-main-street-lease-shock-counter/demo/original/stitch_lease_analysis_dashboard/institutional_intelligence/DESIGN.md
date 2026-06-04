---
name: Institutional Intelligence
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5e7e'
  primary: '#041632'
  on-primary: '#ffffff'
  primary-container: '#1b2b48'
  on-primary-container: '#8393b5'
  inverse-primary: '#b7c7eb'
  secondary: '#555f70'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f4'
  on-secondary-container: '#596374'
  tertiary: '#2b0e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b1e00'
  on-tertiary-container: '#e1752e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b7c7eb'
  on-primary-fixed: '#091b37'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#d9e3f7'
  secondary-fixed-dim: '#bdc7db'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4757'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
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
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
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
  gutter: 16px
  margin-desktop: 32px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered for high-stakes financial environments where clarity and authority are paramount. It adopts a **Modern Corporate** style infused with **Minimalist** discipline, prioritizing data density and document-centric layouts over decorative elements.

The brand personality is institutional and confident, evoking the atmosphere of a top-tier credit rating agency or investment bank. The UI is designed to remain "invisible," providing a neutral canvas for complex financial modeling. Key visual characteristics include:
- **Sharp Precision:** Strict adherence to 90-degree angles to convey stability.
- **Document-First:** Layouts that mirror professional memos and financial reports.
- **Muted Sophistication:** A palette that uses color only for data signaling and structural hierarchy.
- **Information Density:** Optimized for expert users who require maximum data visibility without cognitive overload.

## Colors
The color strategy uses a restrained institutional palette to differentiate between structural elements and critical risk data.
- **Primary (Muted Navy):** Reserved for headers, navigation, and primary CTAs to establish authority.
- **Secondary (Graphite):** Used for sub-headers, supporting text, and secondary UI iconography.
- **Background (Institutional Off-White):** Provides a low-strain environment for long-duration analysis sessions.
- **Signal Colors:** 
    - **Lease Shock (Crimson/Amber):** High-contrast alerts used exclusively for risk triggers, "red-flag" clauses, and negative leverage.
    - **Concessions (Sage Green):** Indicates positive financial metrics, lease incentives, and target occupancy costs.

## Typography
The system utilizes **Inter** for its exceptional legibility in dense interfaces. For financial data, tables, and currency values, **JetBrains Mono** is introduced to ensure vertical alignment of digits, making comparative analysis more efficient.

- **Headlines:** Use tight letter-spacing and semi-bold weights to maintain a compact, professional appearance.
- **Body:** Standardized at 14px for the optimal balance between readability and information density.
- **Data Tables:** Utilize the `data-mono` role for all numerical inputs and outputs to prevent "shimmering" when numbers change.
- **Mobile Scaling:** Headline sizes should drop by one tier (e.g., `display` becomes `headline-lg`) to maintain hierarchy on smaller viewports.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to mimic the structure of a standardized financial memo, transitioning to a fluid model on mobile devices.

- **Grid:** A 12-column grid system with 16px gutters.
- **Rhythm:** All margins and paddings are multiples of a 4px base unit.
- **Density:** Use "Compact" padding (8px - 12px) for data-rich environments like tables and "Relaxed" padding (24px - 32px) for document previews and executive summaries.
- **Breakpoints:**
    - Desktop: 1200px+ (Full sidebar and dual-pane views).
    - Tablet: 768px - 1199px (Collapsed sidebar, stacked charts).
    - Mobile: <767px (Single column, simplified tables).

## Elevation & Depth
This design system rejects deep shadows in favor of **Low-Contrast Outlines** and **Tonal Layers**. This creates a flat, architectural feel suitable for professional tools.

- **Surfaces:** Use `#FFFFFF` for primary cards and content areas against the `#F9FAFB` background.
- **Borders:** Define structure using 1px solid borders in `Secondary (Graphite)` at 15% opacity.
- **Depth:** Instead of shadows, use "Tonal Stepping." An active element or an elevated pane should use a slightly different background tint or a crisp 1px border.
- **Focus:** When an element requires focus (like an active input or a selected lease clause), use a 1px solid border of the `Primary (Muted Navy)` color.

## Shapes
The shape language is strictly **Sharp (0px roundedness)**. Every UI element—including buttons, input fields, cards, and modal windows—must utilize 90-degree corners. 

This lack of curvature reinforces the institutional, "no-nonsense" aesthetic of a legal and financial instrument. The only exceptions are circular radio buttons for standard browser accessibility compliance.

## Components
Consistent implementation of these components ensures the interface feels like a professional terminal.

- **Data Tables:** High-density, sharp-edged rows. Header rows use `Primary` background with white `label-caps` text. Alternate row striping is prohibited; use subtle 1px horizontal dividers instead.
- **Waterfall Charts:** Use `Primary` for base costs, `Success` for concessions, and `Error` for shock increases. Bar widths should be consistent with no rounded caps.
- **Risk Meters:** Linear gauges rather than radial. Use a 4-segment block system (Neutral, Low, Medium, High Risk) with sharp transitions between colors.
- **Red-Flag Callout Rails:** Vertical bars placed to the left of lease text. The bar should be 4px wide, solid `Warning` or `Error` color, with a matching light background tint for the associated text block.
- **Buttons:** Primary buttons are solid `Primary` color with white text. Secondary buttons are transparent with a 1px `Secondary` border. All buttons are rectangular.
- **Input Fields:** 1px border, sharp corners, using `data-mono` for numerical entries to ensure clear character distinction.