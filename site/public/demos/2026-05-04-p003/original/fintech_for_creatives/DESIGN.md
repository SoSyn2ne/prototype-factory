---
name: FinTech for Creatives
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464554'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006b5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#008678'
  on-tertiary-container: '#000705'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#62fae3'
  tertiary-fixed-dim: '#3cddc7'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005047'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin: 32px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality bridges the gap between institutional stability and creative dynamism. This design system focuses on the "Creator Economy" professional—someone who requires the rigor of an accounting suite but desires the aesthetic polish of a modern design tool. 

The design style is **Corporate Modern with Tactile Depth**. It leverages high-quality typography and a structured grid to ensure data integrity, while using subtle gradients and soft elevation to make the interface feel approachable. The emotional goal is to evoke "Protective Empowerment"—giving the user the confidence that their income is secured by a sophisticated, yet easy-to-use platform.

## Colors

The palette is anchored by **Deep Navy** (`#0F172A`) for text and core structural elements to provide a foundation of trust. The primary action color is **Electric Indigo** (`#6366F1`), used to drive user flow and highlight critical path interactions.

A secondary **Teal** (`#2DD4BF`) serves as a "success" and "growth" indicator, perfect for visualizing positive financial trends. **Slate** (`#64748B`) is used for secondary information and iconography to maintain a clean, monochromatic hierarchy that doesn't overwhelm the user with high-contrast data points.

## Typography

This design system utilizes a dual-font approach. **Plus Jakarta Sans** is used for headlines to provide a modern, friendly geometric feel that appeals to creators. **Inter** is the workhorse for body copy and data entry, chosen for its exceptional legibility in complex financial tables and dashboards.

Key data points (such as currency amounts) should use a medium weight to stand out from descriptive text. Labels use uppercase tracking to distinguish metadata from content.

## Layout & Spacing

The system employs a **Fixed Grid** model for desktop, centered within a maximum width of 1280px to ensure data density remains manageable. We use a 12-column layout with 24px gutters.

The spacing rhythm is based on an 8px base unit. Vertical rhythm is critical for financial clarity: use `stack-md` between unrelated sections and `stack-sm` for grouped elements like a label and its corresponding input field. Generous margins (32px+) are encouraged around primary data visualizations to prevent the UI from feeling "cramped" or "stressful."

## Elevation & Depth

Visual hierarchy is established using **Ambient Shadows** and **Tonal Layers**. Instead of harsh black shadows, we use deep navy tints with high diffusion to create a soft, "floated" effect. 

- **Level 0 (Base):** Background color (`#F8FAFC`).
- **Level 1 (Cards):** White surface with a 1px border (`#E2E8F0`) and no shadow.
- **Level 2 (Active Elements):** White surface with a soft 15% opacity Indigo shadow (Y: 4px, Blur: 12px).
- **Level 3 (Overlays/Modals):** Large blur shadows (Y: 20px, Blur: 40px) to draw focus.

Use backdrop blurs (Glassmorphism) sparingly—only for persistent navigation bars or floating action buttons to maintain a "modern tech" aesthetic without sacrificing legibility.

## Shapes

The shape language is **Rounded**, reflecting the approachability of the creator economy. Standard buttons and input fields use a 0.5rem (8px) radius. Larger containers, such as dashboard cards and invoice previews, use 1rem (16px) to soften the overall appearance of the interface. 

Strict geometric shapes are avoided; for instance, progress bars should have fully rounded caps (pill-shaped) to feel fluid rather than industrial.

## Components

- **Buttons:** Primary buttons use a solid Electric Indigo fill with white text. Secondary buttons use a Slate-600 outline. Interactions should include a subtle scale-down (98%) on click to feel tactile.
- **Inputs:** Use a 1px border in Slate-200. On focus, the border transitions to Indigo with a 3px soft outer glow.
- **Cards:** The primary container for financial data. Each card should have a clear header, a body with 24px padding, and an optional footer with a light gray background (`#F1F5F9`) for secondary actions.
- **Chips/Status Badges:** Used for invoice status (e.g., "Paid", "Pending"). These should use highly desaturated versions of the status color for the background with high-contrast text for accessibility.
- **Invoicing Table:** Rows should have a hover state that highlights the entire row in a very light Indigo tint to help the user track data across horizontal planes.
- **Data Visualizations:** Charts should use the Electric Indigo and Teal colors, with rounded line caps and smooth Bézier curves to avoid a "stiff" financial look.