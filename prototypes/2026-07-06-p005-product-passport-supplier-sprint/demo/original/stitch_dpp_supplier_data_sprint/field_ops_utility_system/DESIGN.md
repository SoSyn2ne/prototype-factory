---
name: Field Ops Utility System
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
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
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
  touch-target: 44px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 4px
  stack-md: 8px
  stack-lg: 16px
---

## Brand & Style

This design system is built for high-stakes operational environments where data integrity and speed of execution are paramount. The brand personality is **rugged, professional, and utility-first**, drawing heavily from **Modern Minimalism and Industrial Design**. 

The aesthetic avoids unnecessary decoration in favor of structural clarity and "service-operations" styling. It prioritizes a sense of physical reliability—evoking the feeling of a well-calibrated tool or a cockpit interface. The target user requires a high-density information display that remains legible under varying field conditions, focusing on status clarity and systematic efficiency.

## Colors

The palette is rooted in a spectrum of steel and slate neutrals to provide a stable, low-fatigue background for intensive data entry and review.

- **Primary (Slate-900):** Used for core structural elements, primary text, and high-emphasis icons. It provides a grounded, authoritative foundation.
- **Action Accent (Safety Orange):** A sparse, functional accent used exclusively for primary calls to action and critical alerts. Its high visibility ensures operational focus.
- **Blueprint Blue:** Used for secondary interactive elements, links, and informational status indicators to provide a distinct "technical" feel.
- **Status Tints:** Functional reds, ambers, and greens are reserved for risk severity badges (High/Medium/Low) and data gap status.

## Typography

This design system utilizes **Inter** for its exceptional legibility and systematic feel. The type hierarchy is engineered for **data density**.

- **Numeric Data:** Always use tabular numerals (`tnum`) to ensure columns of figures align perfectly for rapid scanning.
- **Labels:** Small caps or uppercase labels with increased letter spacing are used for secondary metadata to differentiate from actionable content.
- **Scale:** Sizes are kept compact to maximize information on screen, but line heights are generous enough to prevent visual crowding in dense forms.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (max-width 1440px) and a **Fluid Grid** for mobile devices. 

- **Operational Efficiency:** All interactive elements must maintain a minimum **44px touch target** height to accommodate use in field conditions or with gloved hands.
- **Rhythm:** A strict 4px/8px baseline grid is used. Spacing is tight within logical groups (e.g., a label and its input) but generous between sections to define clear visual boundaries.
- **Density:** On desktop, "Data Density" mode is the default, using 12px padding in table cells and lists to show more rows per fold.

## Elevation & Depth

To maintain the "rugged" aesthetic, the design system avoids soft ambient shadows. Instead, it uses **Bold Borders** and **Tonal Layers**.

- **Surfaces:** Use Slate-50 for the primary background and pure White for interactive cards and containers.
- **Borders:** Depth is communicated through 1px and 2px borders (Slate-200 for subtle separation, Slate-300 for active containers).
- **Z-Axis:** Instead of shadows, use "Inset" styles for input fields and "Raised" styles through thick bottom borders on buttons to suggest a physical, tactile presence.

## Shapes

The shape language is **Soft (0.25rem)**, leaning toward the sharper end of the spectrum to reinforce the professional, industrial feel.

- **Standard Elements:** Buttons, inputs, and cards use a 4px (0.25rem) radius.
- **Status Badges:** Use a 2px radius to appear nearly sharp, distinguishing them from interactive components.
- **Visual Weight:** Functional borders are always used on containers to define the shape clearly against the neutral background.

## Components

- **Status Rows:** High-density list items featuring a 4px vertical "status strip" on the far left (colored by risk severity) and a secondary action area on the right.
- **Buttons:** Primary buttons use the Safety Orange background with White text. Secondary buttons use a Slate-900 border with no fill.
- **Severity Badges:** Solid fills with high-contrast text. Red (High Risk), Amber (Medium), Green (Low), and Slate (Incomplete/Missing).
- **Input Fields:** Heavy 1px borders in Slate-300, turning to Blueprint Blue on focus. Labels sit outside the field for permanent visibility.
- **Cards:** Used for grouping related data points; must have a 1px Slate-200 border. No drop shadows.
- **Data Tables:** Fixed headers, zebra-striping using Slate-50, and vertical borders between columns to assist in row-scanning.