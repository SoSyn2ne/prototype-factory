---
name: Elder Meds Hand-Off Fridge
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424841'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#737970'
  outline-variant: '#c2c8be'
  surface-tint: '#456646'
  primary: '#436444'
  on-primary: '#ffffff'
  primary-container: '#5b7d5b'
  on-primary-container: '#f7fff2'
  inverse-primary: '#abd0a9'
  secondary: '#835415'
  on-secondary: '#ffffff'
  secondary-container: '#ffc077'
  on-secondary-container: '#794c0c'
  tertiary: '#5d5c58'
  on-tertiary: '#ffffff'
  tertiary-container: '#767471'
  on-tertiary-container: '#fcffe3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6edc4'
  primary-fixed-dim: '#abd0a9'
  on-primary-fixed: '#012108'
  on-primary-fixed-variant: '#2e4e30'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#f9bb72'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#663e00'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  action-lg:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is rooted in empathy, reliability, and domestic warmth. Designed specifically for multi-generational caregiving teams, the design system avoids the cold, sterile feeling of medical software in favor of a "calm-consumer" aesthetic that feels at home in a kitchen or a living room.

The visual style is a blend of **Soft Minimalism** and **Tactile Modernism**. It prioritizes high legibility and cognitive ease to reduce the stress of medication management. By using generous whitespace and a "print-friendly" card-based architecture, the interface mimics the physical comfort of a well-organized family bulletin board or a fridge-mounted schedule. The goal is to evoke a sense of "quiet confidence"—reassuring the caregiver that everything is under control.

## Colors

The palette is intentionally low-stress, replacing clinical blues and alarming reds with organic, nature-inspired tones.

- **Primary (Sage Green):** Used for "Success" states, "Medication Taken" confirmations, and primary progress indicators. It represents growth and safety.
- **Secondary (Soft Amber):** Reserved for low-blame alerts, such as "Low Stock" or "Upcoming Dose." It draws attention without inducing panic.
- **Surface (Warm Creams/Grays):** The foundation of the UI. `#F5F2ED` (Cream) is used for the main background to reduce eye strain compared to pure white.
- **Text (Deep Charcoal):** `#2D2D2D` ensures maximum accessibility and contrast against warm backgrounds while appearing softer than pure black.

## Typography

This design system utilizes **Public Sans** for its institutional clarity tempered by a friendly, modern weight. The type scale is enlarged by default to accommodate caregivers of all ages and to ensure readability from a distance (e.g., a tablet propped up on a counter).

Information hierarchy is strictly enforced:
- **Large Headlines:** Used for the current patient's name or the time of the next dose.
- **Generous Line Height:** Body text uses a 1.6 ratio to prevent lines from blurring together during quick scans.
- **High-Contrast Labels:** Small labels use increased letter spacing and semi-bold weights to remain legible against tinted backgrounds.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop and a **Fluid Single-Column** model on mobile. This ensures that schedules and dose cards maintain a consistent, "printable" aspect ratio, making the digital experience feel as stable as a physical chart.

We employ an 8px spacing scale. Vertical "stacking" is prioritized over horizontal density to reduce cognitive load. Significant "breathing room" (32px+) is placed between different medication time-blocks (Morning vs. Evening) to prevent accidental misreads.

## Elevation & Depth

Hierarchy is conveyed through **Tonal Layers** and **Ambient Shadows**. Surfaces do not "float" high above the background; instead, they appear slightly lifted, like cardstock on a table.

- **Level 0 (Background):** Soft cream (`#F5F2ED`).
- **Level 1 (Cards):** Pure white with a 1px soft gray border (`#E0DDD8`) and an ultra-diffused shadow (10% opacity, 12px blur).
- **Level 2 (Active/Modals):** Increased shadow spread and a subtle sage-tinted glow to indicate focus.

Avoid heavy blurs or complex gradients. The depth should feel "physical" rather than "digital."

## Shapes

The shape language is defined by "Humanist Geometry." We use **Rounded (Level 2)** settings to remove any "sharp edges" from the caregiving experience. 

- **Primary Cards:** 1rem (16px) corner radius.
- **Buttons & Inputs:** 0.5rem (8px) corner radius for a sturdy, clickable feel.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from actionable buttons.

## Components

- **Dose Cards:** The central component. White background, Sage left-border for "taken," Amber for "pending." Must include a large-format checkbox.
- **The "Hand-Off" Button:** A prominent, large-scale button at the bottom of the dashboard. Uses the Sage Green background with white text.
- **Status Chips:** Small, pill-shaped indicators for "As Needed" (PRN) or "With Food" instructions.
- **Inputs:** Large touch targets. Labels are always visible (never floating) to maintain context.
- **Friendly Icons:** Use a consistent stroke weight (2px) with rounded caps and joins. Icons should represent the physical shape of the meds (pill, liquid, patch).
- **Timeline Rail:** A vertical line connecting medication events, providing a visual "path" through the day's care.