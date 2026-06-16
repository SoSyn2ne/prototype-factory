---
name: Slate & Steel Service Logic
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#b9c7e0'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d2'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#99a8bd'
  on-tertiary-container: '#2f3d4f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
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
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  touch-target-min: 48px
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-tablet: 24px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
The design system is engineered for high-stakes field operations and service environments. It prioritizes utility, durability, and immediate legibility over aesthetic trends. The brand personality is "Service-Ready": authoritative, dependable, and efficient. 

The visual style follows a **Modern Utilitarian** approach, blending the precision of high-end industrial tools with the clarity of technical documentation. It utilizes a structured hierarchy to manage high information density without overwhelming the user. Every element exists to facilitate task completion, reducing cognitive load for technicians working in fast-paced or outdoor environments.

## Colors
The palette is rooted in the "Slate & Steel" concept, using a dark-mode default to reduce eye strain and screen glare in varying lighting conditions.

- **Primary (Cyan-500):** Reserved exclusively for primary actions, active states, and critical navigation pathing. 
- **Neutral Core (Slate-900 to Slate-800):** Used for background surfaces and structural layers to create a "ruggedized" feel.
- **Metallic Accents (Gray-200 to Gray-300):** Used for high-contrast text and iconography to ensure maximum readability.
- **Functional Semantic Colors:** High-contrast Red (High Risk), Amber (Medium Risk), and Emerald (Low Risk) are used for status indicators, ensuring critical warnings are never missed.

## Typography
This design system uses **Inter** for its exceptional legibility and systematic "neutrality." The type scale is optimized for tablet-first field use.

- **Scale:** Generous line-heights are employed to prevent text crowding in data-heavy lists.
- **Weights:** Heavy use of Semibold (600) and Bold (700) for headers to provide immediate visual anchors.
- **Labels:** Small labels use uppercase with increased letter spacing to differentiate metadata from actionable body text.
- **Mobile Adaptation:** Large headlines scale down slightly on mobile to prevent excessive wrapping while maintaining "at-a-glance" readability.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. While the container adapts to the screen width, the content adheres to a rigorous 8px grid system.

- **Touch Targets:** A strict minimum of 48px is enforced for all interactive elements to accommodate gloved hands or shaky environments.
- **Information Density:** Vertical spacing is compressed in data tables but expanded in task workflows to focus the user on a single operation at a time.
- **Breakpoints:**
  - **Mobile:** Single column, full-width cards.
  - **Tablet (Primary):** Multi-column dashboard layouts with a persistent sidebar for navigation.
  - **Desktop:** Expanded viewports with 12-column grids for administrative or planning tasks.

## Elevation & Depth
Depth is communicated through **Tonal Layering** rather than traditional shadows, emphasizing a "flat but stacked" industrial aesthetic.

- **Surface Levels:** The base level is Slate-950. Cards and containers sit on Slate-900. Active or elevated elements (like modals) use Slate-800.
- **Borders:** Low-contrast 1px strokes in Slate-700 are used to define boundaries between elements, replacing shadows for a crisper, more technical look.
- **Active State:** When an item is selected or focused, it utilizes a 2px Cyan-500 border rather than a glow, maintaining the "steel" precision of the UI.

## Shapes
The design system uses **Soft (0.25rem)** roundedness. This minimal rounding provides a modern feel while maintaining the rigid, structural integrity associated with professional equipment. 

- **Components:** Buttons, input fields, and cards all share the same base 4px radius.
- **Status Badges:** Use a slightly higher radius (rounded-lg) to distinguish them as floating metadata tags.
- **Icons:** Should be stroke-based with slightly squared terminals to match the font and shape language.

## Components
- **Ruggedized Cards:** Cards feature a solid Slate-800 background with a 1px Slate-700 border. No shadows. Headers within cards should have a subtle background tint to separate title from content.
- **Action Buttons:** Primary buttons are solid Cyan-500 with Slate-950 text for maximum contrast. Secondary buttons are outlined.
- **High-Contrast Checklists:** Checkboxes must be oversized (24x24px) for easy tapping. Completed items should visually dim and show a clear strike-through or "Done" state.
- **Status Badges:** High Risk (Red background, white text), Medium Risk (Amber background, black text), Low Risk (Emerald background, white text).
- **Input Fields:** Deep Slate-950 background with a Slate-600 border. On focus, the border changes to Cyan-500. Error states must include both a red border and an error icon for accessibility.
- **Data Grids:** Use zebra-striping with Slate-850 and Slate-900 to assist in horizontal eye tracking across wide tablet screens.