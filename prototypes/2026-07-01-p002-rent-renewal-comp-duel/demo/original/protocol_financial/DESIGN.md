---
name: Protocol Financial
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
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#46566c'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e6e85'
  on-tertiary-container: '#e9f0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
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
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-edge: 32px
  container-max: 1200px
---

## Brand & Style

The design system is engineered for the "Financial Analyst" persona—a persona defined by precision, objectivity, and a defensive posture toward capital. The target audience includes tenants and commercial renters who view rent not as a lifestyle choice, but as a significant liability requiring strategic management. 

The visual style is **Corporate / Modern** with a lean toward **Minimalism**, stripping away all non-essential decorative elements (such as real-estate lifestyle imagery) to focus entirely on data integrity and "Asset Defense." The UI should evoke the emotional response of a well-organized legal filing or a high-stakes financial audit: calm, authoritative, and irrefutable.

## Colors

The palette is strictly functional, utilizing a foundation of neutral grays and whites to simulate a document-like workspace. 

- **Primary (Blue Action):** Used exclusively for progress-driving actions and critical data points that require immediate attention. It is the "surgical" color in an otherwise monochromatic environment.
- **Secondary (Deep Slate):** Applied to headers and primary text to provide a heavy, "official" weight.
- **Tertiary (Muted Slate):** Reserved for metadata, supporting labels, and non-essential architectural lines.
- **Backgrounds:** A tiered system of light grays (#F8FAFC to #F1F5F9) ensures that "Evidence Panels" and "Data Tables" remain distinct without the need for heavy shadows.

## Typography

This design system employs a hybrid typographic approach to balance authority with technical precision.

- **The Authority Layer:** `Source Serif 4` is used for headers and section titles. It provides the "documentary" weight necessary for negotiation evidence, making the app feel like a legal briefing.
- **The Intelligence Layer:** `Inter` handles all standard body copy and instructional text for maximum legibility.
- **The Data Layer:** `JetBrains Mono` is used for all numerical values, percentages, and currency. This ensures that numbers remain the hero of the interface and are easily comparable in tables.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to mimic the constraints of an A4 document, shifting to a fluid model on mobile. 

- **Grid:** A 12-column grid with 24px gutters. Elements should align strictly to the grid to reinforce the sense of order and precision.
- **Rhythm:** An 8px baseline grid governs vertical rhythm, ensuring consistent density across data-heavy views.
- **Mobile Adaptation:** On mobile, side margins reduce to 16px. Data tables transition to "Comparison Cards" where rows are stacked vertically but maintain monospaced formatting for numerical values.

## Elevation & Depth

This design system avoids expressive depth in favor of **Low-contrast outlines** and **Tonal layers**.

- **Depth Levels:**
  - **Level 0 (Canvas):** #F8FAFC. The base layer for the application.
  - **Level 1 (Panels):** Pure White (#FFFFFF) with a 1px border in #E2E8F0. This is used for evidence panels and calculation modules.
  - **Level 2 (Active States):** A very subtle, ultra-diffused shadow (0px 4px 12px rgba(15, 23, 42, 0.05)) is used only when a component is being actively interacted with or dragged.
- **Dividers:** Use 1px solid lines in #F1F5F9 for secondary separation and #E2E8F0 for primary section breaks.

## Shapes

The shape language is conservative and structural. 

- **Radius:** We use a "Soft" (0.25rem) radius for standard components like input fields and buttons. This provides just enough modernity to feel like software, while maintaining the "sharp" edge of professional documents. 
- **Large Components:** Cards and evidence panels should not exceed 0.5rem (rounded-lg) to avoid looking overly "consumer" or "playful."

## Components

- **KPI Cards:** Quiet, border-led containers. Large monospaced numbers in Secondary Slate. Labels in `label-caps` positioned above the value.
- **Evidence Panels:** White backgrounds, thin #E2E8F0 borders. Headers use `headline-sm` with a bottom divider. These panels house the "math" behind the negotiation.
- **Buttons:** 
  - *Primary:* Solid #2563eb with white text. No gradients.
  - *Secondary:* White background with 1px slate border.
- **Data Tables:** No vertical lines. Use subtle row zebra-striping (#F8FAFC) on hover. Column headers must be `label-caps` in Tertiary Slate. All numerical cells must use `data-mono`.
- **Input Fields:** Rectangular with 1px border. Focus state uses a 1px Primary Blue stroke with no outer glow.
- **Negotiation Timeline:** A vertical 2px slate line with small 8px solid circles to indicate milestones in the "Asset Defense" process.