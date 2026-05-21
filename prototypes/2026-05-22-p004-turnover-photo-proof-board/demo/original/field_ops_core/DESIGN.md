---
name: Field-Ops Core
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434656'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#6f4500'
  on-tertiary: '#ffffff'
  tertiary-container: '#905a00'
  on-tertiary-container: '#ffdfbe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
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
  data-emphasis:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
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
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  touch-target: 44px
---

## Brand & Style

This design system is engineered for high-stakes service environments where speed, reliability, and clarity are non-negotiable. The aesthetic is **Disciplined Utility**, drawing from industrial interfaces and modern enterprise tools to create a UI that feels like a professional-grade instrument.

The design narrative focuses on "Information at a Glance." It avoids decorative flourishes in favor of functional density and tactical legibility. By utilizing a **Corporate Modern** foundation with a **Minimalist** execution, the interface minimizes cognitive load for field technicians and operators who may be working in high-pressure or outdoor environments. Every element is prioritized based on its utility, ensuring that the most critical data points—status, location, and alerts—are immediately discernible through weight and color hierarchy.

## Colors

The palette is anchored by **Steel and Slate neutrals**, providing a grounded, professional atmosphere that reduces eye strain. 

*   **Primary (Electric Blue):** Used strictly for progress, primary actions, and active states. It provides a high-contrast signal against the slate backgrounds.
*   **Neutrals (Charcoal/Slate):** Used for typography, borders, and structural surfaces. The deep tones ensure that text remains legible even in bright sunlight.
*   **Semantic Accents:** Amber is reserved for "Issues" or "Warnings," while Green signifies "Completion" or "Safe" states. Red is used sparingly for critical system failures or high-priority stoppages.

Surface colors should prioritize a clean, off-white or light-grey base to maintain a high-contrast ratio with the dark slate text.

## Typography

This design system utilizes **Inter** for its exceptional legibility and neutral, systematic tone. The type scale is intentionally tight to maximize information density on small handheld screens.

**Key Rules:**
1.  **Pressure-Legible Hierarchy:** Use `Bold` (700) or `SemiBold` (600) weights for critical data values (e.g., timestamps, ID numbers, or status labels) to ensure they are readable at a glance.
2.  **Data Emphasis:** A specific role is defined for tabular data or technical specs, using a slightly tighter size but heavier weight.
3.  **Labels:** Small caps or uppercase labels are used for metadata headers to distinguish them from actionable content.

## Layout & Spacing

The layout follows a **Fluid Grid** model, optimized for mobile-first field usage while expanding to a structured 12-column grid for desktop dispatch views. 

**Spacing Principles:**
*   **4px Base Unit:** All spacing must be a multiple of 4px. Use tight spacing (8px-12px) within cards to maintain density, but larger margins (16px-24px) between distinct modules to prevent visual clutter.
*   **Tactile Targets:** Despite the tight visual density, all interactive elements (buttons, toggles, checkboxes) must maintain a minimum hit area of **44x44px** to accommodate gloved hands or movement.
*   **Safe Areas:** Mobile layouts use a 16px gutter to ensure content does not bleed into bezel edges.

## Elevation & Depth

Visual hierarchy in this design system is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than dramatic shadows. This maintains the "utility" feel and ensures clarity in varying light conditions.

*   **Level 0 (Background):** The base canvas, typically a very light cool-grey (#F8FAFC).
*   **Level 1 (Cards/Surfaces):** Pure white backgrounds with a 1px solid border (#E2E8F0). This creates a crisp, physical separation for individual tasks or data groups.
*   **Level 2 (Overlays/Modals):** These use a subtle, sharp ambient shadow (4px blur, 10% opacity) to signify temporary priority over the background task.
*   **Active State:** Elements being interacted with should use a subtle inset shadow or a primary-colored border to indicate focus.

## Shapes

The design system uses **Soft (0.25rem)** roundedness. This "precision corner" approach strikes a balance between the friendliness of consumer apps and the rigid structure of industrial software.

*   **Components:** Buttons and input fields use the base 0.25rem (4px) radius.
*   **Containers:** Larger cards and modals may use `rounded-lg` (8px) to provide a clearer container boundary.
*   **Status Indicators:** Small pips or status dots remain circular to stand out against the predominantly rectangular UI.

## Components

### Buttons & Inputs
*   **Primary Action:** Solid Electric Blue with white text. High-contrast and easily identifiable.
*   **Secondary Action:** Ghost style with a Slate-600 border.
*   **Input Fields:** Structured with a 1px Slate border. Labels are always visible (no floating labels) to ensure context is never lost during data entry. Active fields use a 2px Electric Blue stroke.

### Cards & Status Indicators
*   **Task Cards:** White background, 1px border. Every card must feature a "Status Rib" on the left edge (Green, Amber, or Blue) to communicate state without requiring the user to read text.
*   **Chips/Tags:** Used for categorization. They use a light-grey fill with dark text to keep the UI from becoming too colorful and distracting.

### Lists & Tables
*   **High-Density Lists:** 48px minimum row height for mobile. Use alternating row colors (zebra striping) only in complex data tables. 
*   **Key-Value Pairs:** Labels on the left (light grey), values on the right (bold charcoal) for rapid scanning of specs or logs.

### Checkboxes & Radios
*   Oversized for field use. The hit area extends to the full width of the list item to prevent missed taps.