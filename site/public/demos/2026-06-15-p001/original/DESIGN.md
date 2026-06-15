---
name: No-Show Deposit Guard
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#181919'
  on-primary: '#ffffff'
  primary-container: '#2d2d2d'
  on-primary-container: '#959494'
  inverse-primary: '#c8c6c6'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#191917'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e2d2b'
  on-tertiary-container: '#979491'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#e6e2de'
  tertiary-fixed-dim: '#c9c6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484644'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
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
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  table-cell-padding: 8px 12px
  gutter: 12px
  stack-tight: 4px
  stack-med: 12px
---

## Brand & Style
The brand personality is rooted in **Precision, Utility, and Command**. This design system is built for operators who manage high-volume schedules where every minute and every dollar matter. The aesthetic avoids unnecessary decoration in favor of a **Corporate Modern** style with a leaning toward **Industrial Functionalism**.

The target audience consists of service professionals—restaurant hosts, clinic managers, and salon owners—who need to make split-second decisions. The emotional response should be one of "controlled efficiency." The UI uses a "high-density" approach, prioritizing data visibility and clear hierarchy over expansive whitespace, ensuring that the tool feels like a professional instrument rather than a consumer app.

## Colors
The palette is architectural and disciplined. 
- **Charcoal (#2D2D2D)** is used for primary text, iconography, and structural headers to provide a heavy "grounded" feel.
- **Fog (#F5F7F9)** serves as the primary canvas, providing a low-strain background for long-duration usage.
- **Electric Blue (#0052FF)** is the surgical instrument; it is reserved strictly for primary actions, navigation cues, and reopening slots.
- **Vivid Orange (#FF5C00)** is used sparingly for high-alert states, such as overdue deposits or imminent no-shows.
- **Semantic Colors** utilize a "Crisp" profile—slightly higher saturation and lower value to ensure legibility against the light Fog backgrounds.

## Typography
Typography is optimized for **Information Density**. **Inter** provides a neutral, highly legible foundation for the majority of the interface. For numerical data, financial figures, and timestamps, **JetBrains Mono** is introduced to ensure tabular alignment and rapid scanning.

- **Scale:** Smaller base sizes (13px/14px) are used to maximize the amount of data visible on a single screen.
- **Weight:** Use SemiBold (600) for headers to create immediate visual anchors. 
- **Labels:** Uppercase labels with slight letter spacing are used for table headers and metadata categories to distinguish them from user-generated content.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Navigation and Action Lanes are fixed-width sidebars, while the central Data Table remains fluid.

- **The 4px Grid:** All spacing is a multiple of 4px. This "tight" rhythm allows for more rows in data tables without feeling cluttered.
- **Action Lanes:** Vertical columns on the right side of the screen (320px width) manage the waitlist and urgent "Reopen Slot" triggers.
- **Data Tables:** These are the heart of the system. Use 12px horizontal padding for cells to keep columns distinct but compact. 
- **Mobile:** On mobile, the Action Lanes collapse into a bottom sheet, and data tables transition to a "Card List" format to maintain legibility.

## Elevation & Depth
Depth is signaled through **Low-Contrast Outlines** and **Tonal Layers** rather than heavy shadows. This maintains a flat, professional "dashboard" feel.

- **Level 0 (Base):** Fog (#F5F7F9) background.
- **Level 1 (Surface):** White (#FFFFFF) surfaces with a 1px border in #D1D5DB. Used for table rows and cards.
- **Level 2 (Overlay):** Minimal, sharp shadows (0px 2px 4px rgba(0,0,0,0.05)) used only for dropdowns and active modal dialogs.
- **Separators:** 1px solid lines are the primary tool for hierarchy. Avoid shadows for button states; use color shifts (hover/active) instead.

## Shapes
This design system uses **Soft (0.25rem)** roundedness to maintain a precise, technical look. 

- **Inputs & Buttons:** 4px (0.25rem) radius.
- **Status Chips:** 2px radius or sharp for a more "tag-like" appearance.
- **Action Lanes:** Should remain sharp on the inner edges to suggest they are docked components of the screen frame.

## Components
- **Data Tables:** Rows must have hover states (subtle #F0F2F5 background). Financial columns must use monospaced fonts and right-alignment.
- **Status Chips:** Small, rectangular tags. Use high-contrast text on low-opacity background of the semantic color (e.g., Red text on 10% Red bg).
- **Buttons:**
  - *Primary:* Electric Blue background, white text. No gradient.
  - *Urgent:* Vivid Orange background, white text.
  - *Ghost:* Charcoal outline, no background, for secondary actions.
- **Input Fields:** 1px Charcoal border when focused. Label sits above the field in `label-xs` style.
- **Cost Cards:** High-density summaries of deposit totals. Use `data-mono` for the figures and `label-xs` for the description.
- **Action Lanes:** Fixed-position containers on the right. Content should be stacked vertically with `stack-tight` spacing to allow for high item counts.
- **Deadline Chips:** Small indicator showing time remaining (e.g., "12m left"). These use the Urgent Orange if the time is under 15 minutes.