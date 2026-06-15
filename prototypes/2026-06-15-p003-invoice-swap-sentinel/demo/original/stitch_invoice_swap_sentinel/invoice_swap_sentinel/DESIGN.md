---
name: Invoice Swap Sentinel
colors:
  surface: '#fcf8f9'
  surface-dim: '#dcd9da'
  surface-bright: '#fcf8f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f3'
  surface-container: '#f0eded'
  surface-container-high: '#ebe7e8'
  surface-container-highest: '#e5e2e2'
  on-surface: '#1c1b1c'
  on-surface-variant: '#45474b'
  inverse-surface: '#313031'
  inverse-on-surface: '#f3f0f0'
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
  tertiary: '#000802'
  on-tertiary: '#ffffff'
  tertiary-container: '#062411'
  on-tertiary-container: '#6e8e74'
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
  tertiary-fixed: '#c9ebcd'
  tertiary-fixed-dim: '#adcfb2'
  on-tertiary-fixed: '#03210e'
  on-tertiary-fixed-variant: '#304d37'
  background: '#fcf8f9'
  on-background: '#1c1b1c'
  surface-variant: '#e5e2e2'
typography:
  display-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Work Sans
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
  data-mono:
    fontFamily: JetBrains Mono
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
  xl: 40px
  container-max: 1440px
  gutter: 16px
---

## Brand & Style
The brand personality is authoritative, analytical, and uncompromisingly precise. Designed for financial fraud analysts, the system prioritizes clarity over decoration, ensuring that high-stakes decision-making is supported by a calm and focused interface.

The design style is **Corporate Modern** with a focus on **Information Density**. It utilizes a structured, grid-based approach that feels institutional and reliable. The aesthetic avoids unnecessary visual noise, opting for high legibility and clear hierarchy to help users identify anomalies within complex datasets instantly. The emotional response should be one of "controlled vigilance"—the software is a silent, expert partner in risk mitigation.

## Colors
This design system utilizes a palette rooted in "Institutional Ink" and "Off-White" to provide a sophisticated, low-strain environment for extended analysis.

- **Institutional Ink (#1A1F26):** Primary brand color used for headers, primary text, and critical navigation elements. It conveys stability and authority.
- **Off-White (#F9F8F6):** The base surface color. This soft cream reduces screen glare compared to pure white, allowing for longer periods of data review without eye fatigue.
- **Muted Green (#3E5C45):** Used exclusively for "Verified" or "Low Risk" states. Its desaturated tone ensures it doesn't distract from alerts.
- **Restrained Warnings:** Amber (#D99330) and Soft Red (#B54739) are used surgically for flags and high-risk indicators. They are designed to stand out through contrast rather than saturation.

## Typography
Typography is optimized for legibility and technical density. 

- **Work Sans** is used for headlines to provide a professional and grounded structure to page layouts.
- **Inter** serves as the workhorse for body text and UI controls, chosen for its neutral tone and exceptional readability at small sizes.
- **JetBrains Mono** is introduced for specific data points—such as Invoice IDs, Bank Account Numbers, and currency values—to ensure characters are distinct and columns align perfectly in comparison tables.

Large display sizes are capped to maintain data density. On mobile, headlines scale down slightly to ensure headers do not push critical data off-viewport.

## Layout & Spacing
The layout follows a strict **4px/8px grid system**. This granular control allows for high-density information display without clutter.

- **Grid Model:** A 12-column fixed grid is used for desktop (centered), while a fluid grid is used for tablet and mobile. 
- **Density:** Padding within data tables and cards is kept tight (sm/md) to maximize the "at-a-glance" visibility of multiple records.
- **Breakpoints:**
  - **Desktop (1280px+):** Full side navigation, multi-pane views for side-by-side invoice comparison.
  - **Tablet (768px - 1279px):** Collapsed side navigation, single-column main content with modal detail views.
  - **Mobile (Below 768px):** Bottom navigation, focused list views. Data tables convert to card-based summaries.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering** and **Subtle Outlines** rather than heavy shadows.

- **Base Layer:** The "Off-White" background serves as the foundation.
- **Surface Layer:** Containers (Cards, Table Rows) use a white background with a 1px solid border (#E2E2E0). 
- **Active State:** Elements being compared or focused receive a "ghost" border of the Primary Ink color at 10% opacity or a subtle inset stroke.
- **Shadows:** Only used for floating elements like dropdowns or tooltips. These should be "Ambient Shadows"—diffused, low-opacity, and neutral (e.g., `0 4px 12px rgba(26, 31, 38, 0.08)`).

## Shapes
The shape language is "Soft" (0.25rem), reflecting a modern professional tool that remains approachable but disciplined.

- **Components:** Buttons, inputs, and small cards use the base `rounded` (4px).
- **Large Containers:** Dashboard widgets or main content areas use `rounded-lg` (8px).
- **Status Pills:** Use `rounded-xl` (12px) to distinguish them from actionable buttons, creating a clear visual distinction between metadata and interaction.

## Components
- **Buttons:** Primary buttons are solid "Institutional Ink" with white text. Secondary buttons use a 1px border. There are no "rounded-pill" buttons; all follow the 4px corner radius.
- **Comparison Tables:** High-signal tables are the core component. Every second row has a subtle 2% ink tint for zebra-striping. Differences between two compared invoices are highlighted with a soft Amber background-fill on the specific cell.
- **Status Chips:** Small, desaturated badges. A "Verified" chip is Muted Green text on a 10% opacity green background.
- **Input Fields:** Minimalist with a 1px border. Focus states use a 2px "Institutional Ink" bottom-border to signify the active field without shifting layout.
- **Data Visualizations:** Charts use the primary palette. Fraud probability is shown via a "Sentinel Score" gauge—a clean, needle-less bar using the Green-to-Red spectrum.
- **Audit Cards:** Used for timeline events. They feature a vertical line on the left, color-coded by the severity of the audit log entry.