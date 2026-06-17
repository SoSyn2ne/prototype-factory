---
name: Institutional Compliance
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#45474c'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#76777c'
  outline-variant: '#c6c6cc'
  surface-tint: '#585e6c'
  primary: '#030813'
  on-primary: '#ffffff'
  primary-container: '#1a202c'
  on-primary-container: '#828796'
  inverse-primary: '#c1c6d7'
  secondary: '#595f66'
  on-secondary: '#ffffff'
  secondary-container: '#dde3eb'
  on-secondary-container: '#5f656c'
  tertiary: '#060809'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d2021'
  on-tertiary-container: '#858889'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde2f3'
  primary-fixed-dim: '#c1c6d7'
  on-primary-fixed: '#161c27'
  on-primary-fixed-variant: '#414754'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7cf'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
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
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
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
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style

This design system is engineered for the high-stakes environment of federal contracting compliance. The brand personality is authoritative, precise, and impartial—reflecting the persona of a senior financial analyst or federal auditor. It prioritizes information density and clarity over decorative elements, evoking an emotional response of security, reliability, and meticulousness.

The design style is **Corporate / Modern** with a focus on structural integrity. It utilizes a "data-first" philosophy where the UI serves as a quiet framework for complex regulatory information. Every design decision aims to reduce cognitive load while maintaining the gravitas required for legal and financial eligibility monitoring.

## Colors

The palette is rooted in "Institutional Ink" and "Bone" to mimic the sobriety of official documentation and financial terminals. 

- **Primary (Institutional Ink):** A deep charcoal-navy used for primary text, sidebars, and structural headers to provide a strong visual anchor.
- **Secondary (Slate):** Used for borders and dividers to create precise partitions without visual noise.
- **Surface (Bone/Off-white):** A subtle off-white used for main panels to reduce eye strain during long analytical sessions compared to pure white.
- **Functional Accents:**
    - **Muted Emerald:** Indicates compliance and "Pass" states.
    - **Soft Amber:** Signals warnings or pending updates without inducing panic.
    - **Sophisticated Red:** Reserved for high-risk eligibility changes or critical failures.

## Typography

This design system utilizes **Inter** for all primary interface elements due to its exceptional legibility at small sizes and high x-height, which is critical for data-heavy dashboards. **JetBrains Mono** is introduced as a secondary label font for metadata, IDs, and timestamps to provide a technical, "verified" feel to the data.

- **Headlines:** Keep tracking tight (-0.01em to -0.02em) to maintain a modern, professional look.
- **Body Text:** Use `body-md` (14px) as the standard for high-density tables and document modules.
- **Labels:** Use uppercase for `label-md` and `label-sm` to clearly distinguish metadata from primary content.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a strict 4px baseline rhythm. This ensures that even the densest dashboards maintain a sense of mathematical order.

- **Grid:** A 12-column system is used for desktop. For data tables, columns should be fixed-width or percentage-based depending on content length.
- **Breakpoints:**
  - **Mobile (<768px):** Single column, 16px margins. Sidebars collapse into a bottom sheet or top drawer.
  - **Tablet (768px - 1024px):** 8-column grid, 24px margins.
  - **Desktop (>1024px):** 12-column grid, 32px margins, maximum container width of 1440px.
- **Density:** High. Vertical spacing between table rows should be minimized to 8px-12px to maximize "above the fold" information.

## Elevation & Depth

To maintain an institutional feel, the design system avoids heavy shadows in favor of **Low-contrast outlines** and **Tonal layers**.

- **Surfaces:** Use `#F8F9FA` (Bone) for the background and pure `#FFFFFF` for interactive cards or active panels.
- **Borders:** Define depth primarily through 1px solid borders using `#E2E8F0`.
- **Shadows:** Only used on floating elements (modals, dropdowns). Use a very subtle, tight shadow: `0 2px 4px rgba(0,0,0,0.05)`.
- **Confidence Bands:** Use light background tints (e.g., 5% opacity of the accent color) to highlight specific rows or sections that require attention without breaking the layout's flatness.

## Shapes

The shape language is **Soft** (Level 1). This provides a subtle modern touch that prevents the UI from looking dated or overly "aggressive," while remaining professional and efficient.

- **Standard Elements:** 0.25rem (4px) corner radius for buttons, input fields, and small cards.
- **Large Modules:** 0.5rem (8px) for main dashboard panels.
- **Status Badges:** Should be nearly rectangular (2px radius) to maintain a serious, document-like aesthetic. Avoid pill-shapes for status badges to keep the look formal.

## Components

- **Data Tables:** The core component. Must include sticky headers, sortable columns, and zebra-striping using `#F8F9FA`. Use 12px padding for high density.
- **Status Badges:** Small, rectangular badges. Use "Subtle" variants (light background with dark text) for general states and "Solid" variants for critical warnings.
- **Timeline Trackers:** Vertical or horizontal lines with small nodes. Completed nodes use `status_success`, current nodes use `primary_color`, and future nodes use `secondary_color`.
- **Document Card Modules:** White surfaces with a 1px border. Include a `label-sm` header for document type and a `body-md` bold title for the file name.
- **Buttons:**
  - **Primary:** Institutional Ink background, white text.
  - **Secondary:** White background, Slate border, Ink text.
  - **Ghost:** No background, Slate text (for low-priority actions).
- **Input Fields:** 1px solid border, no shadows. Focus state uses a 2px "Institutional Ink" border or a subtle blue halo.
- **Confidence Bands:** Semi-transparent color overlays across table rows to indicate the degree of compliance certainty.