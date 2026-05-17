---
name: Industrial Artisan Utility
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
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
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1280px
---

## Brand & Style

This design system is built for the "Handmade EU Safety Tagger," a tool that bridges the gap between creative craftsmanship and rigorous regulatory compliance. The aesthetic follows a **Field-Ops / Industrial Utility** direction—evoking the feeling of a well-organized physical workbench. 

The UI should feel like a piece of high-quality equipment: reliable, sturdy, and no-nonsense. It balances the raw, tactile nature of handmade goods with the clinical precision required for safety tagging. We achieve this through a "card-on-slate" layout, where work surfaces are clearly defined against a deeper, grounded background. The emotional response is one of calm focus and professional support, ensuring solo sellers feel capable and organized under the pressure of compliance deadlines.

## Colors

The palette is anchored in **Slate** and **Charcoal**, mimicking the materials of a workshop—steel, stone, and heavy-duty plastic. 

- **Primary & Neutral:** We use `Slate 900` (#0f172a) for primary actions and deep grounding. The main background (`neutral_background`) uses a soft slate-gray to reduce glare during long sessions.
- **Functional Accents:** High-contrast signals are reserved for status only. **Success Green** indicates compliance, **Warning Yellow** flags pending reviews, and **Danger Red** highlights critical safety violations.
- **Surface Tiers:** Use varying shades of Slate (50 through 200) to distinguish between the "workbench" (background) and "tools/materials" (cards and inputs).

## Typography

The typography strategy prioritizes rapid scanning and data integrity.

- **Main Utility:** **Inter** is used for all instructional text and interface elements. It provides a neutral, highly legible foundation that feels professional and contemporary.
- **Technical Accents:** **JetBrains Mono** is employed for SKU data, EAN numbers, safety codes, and technical attributes. This monospaced font signals to the user that they are interacting with "hard data" that requires precision.
- **Hierarchy:** Use heavy weights (600-700) for section headers to create clear visual anchors on data-heavy pages.

## Layout & Spacing

This design system uses a **Fixed Grid** approach for desktop to simulate a structured dashboard environment, transitioning to a fluid model for mobile.

- **The Workbench Grid:** A 12-column grid with a 24px gutter. Content is housed in "panels" (cards) that typically span 4, 6, or 12 columns.
- **Rhythm:** An 8px base unit governs all padding and margins. This tight spacing reinforces the "utility" feel, allowing more data to be visible without feeling cluttered.
- **Responsive Behavior:** On mobile, margins shrink to 16px and panels stack vertically. Complex data tables should utilize horizontal scrolling with "sticky" first columns to maintain context for SKUs.

## Elevation & Depth

To achieve the "Field-Ops" aesthetic, depth is conveyed through **Tonal Layering** and **Subtle Outlines** rather than dramatic shadows.

- **The Base (Level 0):** The `neutral_background` (#f1f5f9) acts as the workbench surface.
- **The Panels (Level 1):** Cards and main content areas are pure white or very light gray, with a 1px border (#e2e8f0). Use a very tight, low-opacity shadow (4px blur, 2% opacity) to provide just enough lift to separate the "card" from the "slate."
- **Interactive Elements (Level 2):** Hover states and active dropdowns use a slightly more pronounced border (Slate 400) to feel "clickable."
- **No Insets:** Avoid neomorphic insets; stay true to a flat, layered physical model.

## Shapes

The shape language is **Soft (0.25rem)**. 

We avoid sharp 0px corners to prevent the UI from feeling hostile or overly bureaucratic, but we also avoid pill-shapes to maintain the "industrial" character. A small 4px radius on buttons, input fields, and panels provides a manufactured, precision-molded feel. 

- **Standard Radius:** 4px (0.25rem) for buttons and inputs.
- **Large Radius:** 8px (0.5rem) for main content containers and cards.

## Components

### Buttons
- **Primary:** Slate 900 background with white text. High contrast, signaling the "final" action.
- **Secondary:** Transparent background with a 1px Slate 300 border.
- **Functional:** Use Success Green or Danger Red only for destructive or confirmation-heavy actions (e.g., "Certify Compliance" or "Delete SKU").

### Input Fields
- Use a light gray background (#f8fafc) with a 1px border.
- Focus states should use a 2px Slate 900 border—no glowing outer rings.
- Monospaced font for inputs containing IDs or safety codes.

### Chips & Status Indicators
- **Compliance Badges:** Small, rectangular chips with a subtle background tint and a solid 2px "status dot" next to the label (e.g., a green dot for "Approved").
- Use JetBrains Mono for text within chips to emphasize their status as "system-generated" data.

### Cards (The "Panels")
- Cards are the primary container. They should have a clear 1px border. 
- Header areas within cards should have a subtle bottom border to separate the title from the form fields.

### Lists & Data Tables
- Use "Zebra-striping" with very faint slate tints (#f8fafc) for long SKU lists.
- Row hover states should be a clear, light blue or darker gray tint to indicate focus.