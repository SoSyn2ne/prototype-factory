---
name: Field Ops Design System
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
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1700'
  on-tertiary-container: '#b87500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
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
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
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
  unit: 4px
  gutter: 16px
  margin-page: 24px
  container-padding: 12px
  stack-sm: 8px
  stack-md: 16px
---

## Brand & Style
This design system is engineered for high-stakes operational environments where information density and clarity are paramount. The brand personality is **authoritative, resilient, and precise**, evoking the atmosphere of a mission control center. It prioritizes the reduction of cognitive load during critical decision-making moments, such as resolving caregiver scheduling conflicts.

The visual style is a blend of **Corporate Modern** and **Technical Functionalism**. It avoids unnecessary ornamentation, favoring structural integrity, clear data hierarchies, and high-visibility status indicators. Every element serves a functional purpose, ensuring that caregivers and coordinators can identify "collisions" (risks) instantly through strategic color application and rigid layout structures.

## Colors
The palette is rooted in **Trustworthy Slate and Steel**, providing a calm, professional backdrop that minimizes eye strain during long shifts.

- **Primary (Slate 900):** Used for primary navigation, headings, and core structural elements.
- **Secondary (Slate 600):** Used for supporting text and icons.
- **Action Accent (Amber 500):** Reserved exclusively for "Collisions" and urgent alerts. This high-contrast color breaks the cool palette to draw immediate attention to risks.
- **Surface & Neutrals:** A range of cool grays (Steel) are used to differentiate "Mission Control" panels and dashboard cards.
- **Feedback:** Success (Emerald) and Error (Red) are used sparingly to indicate resolution status or critical system failures.

## Typography
**Inter** is the sole typeface for this design system, chosen for its exceptional legibility in data-dense interfaces. 

- **Density Management:** Text sizes lean smaller (13px-14px for body) to maximize the "at-a-glance" information on the dashboard.
- **Numerical Clarity:** For shift times and pressure meters, utilize tabular num (tnum) settings to ensure numbers align vertically in lists.
- **Labeling:** Use the `label-bold` style for metadata headers (e.g., "SHIFT START", "CAREGIVER ID") to create clear visual anchors within data cards.
- **Mobile scaling:** On mobile devices, `headline-lg` should scale down to 24px to prevent excessive wrapping in constrained views.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Navigation and control sidebars are fixed-width to ensure tools are always in the same physical location, while the "Collision Board" (Timeline) is fluid to accommodate varying shift durations.

- **Grid:** A 12-column grid is used for dashboard layouts, but the internal "Mission Control" panels utilize a 4px baseline grid for precise alignment of status icons and data points.
- **Operational Timelines:** Use a horizontal scrolling canvas for the 24-hour shift view. Gutter spacing between shift blocks should be 2px to emphasize continuity while maintaining distinct boundaries.
- **Density:** Use `container-padding` of 12px for cards to pack more information into the viewport without feeling cluttered.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers** rather than shadows. This maintains a "flat and functional" aesthetic suitable for professional field ops software.

- **Level 0 (Background):** Slate 50 (#F8FAFC). The base "table" on which all panels sit.
- **Level 1 (Panels):** White (#FFFFFF) with a 1px Slate 200 border. These are the primary containers for shifts and lists.
- **Level 2 (Active/Hover):** A subtle tint of Slate 100 to indicate interactivity.
- **Critical Layer:** Urgent collisions do not use depth; they use a solid Amber background to "break" the layout plane and demand attention.

## Shapes
The shape language is **Technical and Structured**. 

- **Soft Radius:** A consistent 4px (0.25rem) radius is applied to buttons, cards, and input fields. This provides just enough softness to feel modern while maintaining the rigid, "grid-locked" feel of a professional tool.
- **Badges:** Status badges use the same 4px radius; avoid pill shapes (fully rounded) to maintain the serious tone of the system.

## Components
Consistent styling for operational components:

- **Operational Timelines:** Represented as horizontal bars. Colliding shifts should overlap with a semi-transparent Amber overlay.
- **Status Badges:** Compact rectangles with `label-bold` text. Background colors should be low-chroma (e.g., light gray) unless the status is an "Urgent Collision."
- **Pressure Meters:** Horizontal progress bars indicating "Burden Balance." Use a neutral Steel track. The fill remains Slate unless capacity exceeds 90%, at which point it shifts to Amber.
- **Buttons:** 
  - *Primary:* Solid Slate 900.
  - *Action:* Solid Amber 500 (only for "Resolve Collision").
  - *Secondary:* Ghost style with 1px Slate border.
- **Checklists:** High-density rows with 16px square checkboxes. Completed items should utilize a strikethrough and 50% opacity for the text.
- **Input Fields:** Inset borders (Steel) with no shadow. Active state is a 2px Slate 900 ring.