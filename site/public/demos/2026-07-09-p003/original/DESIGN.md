---
name: Field-Ops Industrial Compliance
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
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
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
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
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
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1440px
---

## Brand & Style

This design system is built for mission-critical compliance and field operations. The brand personality is disciplined, authoritative, and precise. It targets professionals operating in high-stakes environments where clarity and speed of information processing are paramount.

The design style is **Corporate / Modern** with a lean toward **Industrial Minimalism**. It prioritizes utility over decoration, utilizing heavy vertical rhythm and high-contrast information density to evoke an emotional response of "controlled urgency." The UI acts as a reliable toolset, removing all visual friction to ensure that status changes and compliance alerts are immediately actionable.

## Colors

The palette is anchored in "Steel" and "Slate," utilizing a monochromatic foundation to maintain a professional, industrial atmosphere. 

- **Primary:** A deep Slate-Black (#0F172A) used for high-contrast text and primary actions to command attention.
- **Secondary:** A Cool Gray (#64748B) for supportive text, borders, and icons.
- **Neutral:** A crisp, off-white background (#F8FAFC) to maximize legibility.
- **Status Colors:** Success, Warning, and Error tones are strictly reserved for functional indicators. They should never be used for decorative elements, ensuring that when color appears, it signifies a specific operational state.

## Typography

This design system utilizes **Inter** for all primary interface text to ensure maximum legibility across all display types. For technical data, timestamps, and compliance IDs, **JetBrains Mono** is introduced to provide a distinctive, industrial feel that aids in character differentiation (e.g., distinguishing '0' from 'O').

Headers use tighter letter spacing and heavier weights to project authority. All "Label" roles should be treated in uppercase with slight tracking to differentiate them from interactive body text.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with a rigid 4px baseline rhythm. 

- **Grid:** A 12-column system is used for desktop views, collapsing to 4 columns on mobile. 
- **Margins:** 32px on desktop to provide breathing room for complex data; 16px on mobile to maximize utility.
- **Data-Heavy Views:** Use a "Structured Row" approach where information is stacked vertically with 1px slate separators, ensuring the user's eye follows a clear, linear path during audits.
- **Density:** High. Padding within components like table cells should be kept at a strict 12px (3 units) to ensure maximum information visibility without overcrowding.

## Elevation & Depth

To maintain the "Field-Ops" aesthetic, this design system rejects soft shadows and blurs. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** Slate-50 (#F8FAFC)
- **Level 1 (Cards/Containers):** White (#FFFFFF) with a 1px Slate-200 border. No shadow.
- **Level 2 (Active/Overlays):** White (#FFFFFF) with a 1px Slate-900 border.
- **Interactions:** Hover states are indicated by a subtle background shift to Slate-100 rather than an elevation increase. This keeps the UI feeling "flat" and grounded, like a physical piece of industrial equipment.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding prevents the UI from feeling hostile or overly "brutalist" while maintaining a precise, engineered look. 

- **Primary Buttons:** 4px (0.25rem) radius.
- **Data Containers:** 8px (0.5rem) radius for large sections.
- **Form Inputs:** 4px (0.25rem) radius.
- **Icons:** Use sharp or slightly rounded geometric icons from a consistent set (e.g., Lucide or Phosphor) to match the component corners.

## Components

- **Buttons:** Large, high-contrast blocks. Primary buttons use Slate-900 background with White text. Secondary buttons use a 1px Slate-300 border. Active states use a solid 2px focus ring with 2px offset.
- **Compliance Status Rows:** Full-width rows with a leading vertical "status bar" (4px wide) colored by the status (Success/Warning/Error). Text should be high-contrast against white.
- **Action Controls:** Large touch-targets for field use. Switch toggles and checkboxes use the primary Slate-900 when active, avoiding the "friendly" blues of consumer apps.
- **Status Badges:** Small, rectangular tags using JetBrains Mono. Use light background tints of the status color with dark text for readability (e.g., Error badge: Light Red bg, Dark Red text).
- **Input Fields:** Strict 1px Slate-300 borders that turn Slate-900 on focus. Labels sit outside the field in all-caps JetBrains Mono.
- **Data Tables:** No vertical lines. Horizontal lines only (1px Slate-100). Zebra striping is permitted for extremely long datasets using Slate-50.