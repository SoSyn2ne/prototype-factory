---
name: Serene Parent Planner
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424844'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#466253'
  on-primary: '#ffffff'
  primary-container: '#5f7b6b'
  on-primary-container: '#f5fff6'
  inverse-primary: '#afcebb'
  secondary: '#356668'
  on-secondary: '#ffffff'
  secondary-container: '#b9ecee'
  on-secondary-container: '#3c6c6e'
  tertiary: '#894b33'
  on-tertiary: '#ffffff'
  tertiary-container: '#a66349'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbead6'
  primary-fixed-dim: '#afcebb'
  on-primary-fixed: '#052014'
  on-primary-fixed-variant: '#314c3e'
  secondary-fixed: '#b9ecee'
  secondary-fixed-dim: '#9ecfd1'
  on-secondary-fixed: '#002021'
  on-secondary-fixed-variant: '#1a4e50'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#6f3720'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-padding: 24px
  gutter: 16px
---

## Brand & Style

This design system is built on the philosophy of "Calm Efficiency." It targets busy parents who are often overstimulated, providing a digital sanctuary that organizes life without adding to the noise. The brand personality is supportive, reliable, and gentle—acting more like a quiet assistant than a demanding tool.

The visual style is a blend of **Minimalism** and **Soft-Tactile** design. It prioritizes heavy whitespace to give content "room to breathe" while using subtle depth and organic shapes to feel approachable. The emotional response should be one of immediate relief upon opening the app, moving the user from a state of chaotic planning to a state of focused serenity.

## Colors

The palette is inspired by the soft transitions of daylight, avoiding high-contrast blacks or jarring neons.

- **Primary (Sage Green):** Used for main actions and navigation. It evokes growth and groundedness.
- **Secondary (Pale Sky Blue):** Used for secondary markers, calendar events, and decorative accents.
- **Tertiary (Soft Terracotta):** Reserved for highlights and call-outs that need warmth.
- **Neutral (Warm White/Cream):** The foundation of the UI. This replaces pure white to reduce eye strain and feel more "paper-like."
- **Urgency (Coral/Amber):** Instead of red, urgency is signaled through soft coral. This communicates importance without triggering a stress response.

## Typography

The design system utilizes **Plus Jakarta Sans** for its friendly, open apertures and modern clarity. It strikes a balance between professional utility and a welcoming, soft aesthetic.

- **Headlines:** Use a tighter letter-spacing and heavier weights to create a clear anchor for the eye.
- **Body Text:** Standard weight (400) with generous line-height to ensure readability during quick, on-the-go checks.
- **Labels:** Small caps are used sparingly for category headers to provide hierarchy without requiring large font sizes.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a soft 4px base unit. 

- **Rhythm:** Generous margins (24px) are maintained around the screen edges to prevent the UI from feeling cramped.
- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns for mobile. 
- **Grouping:** Related items should be grouped within cards using `md` (16px) spacing, while major sections are separated by `xl` (40px) to signify a change in context.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Ambient Shadows**. 

- **Surface 1 (Base):** The Warm White background.
- **Surface 2 (Cards):** Pure white cards set against the warm white background.
- **Shadows:** Use extremely diffused, low-opacity shadows. Shadows should have a slight tint of the Primary color (#769382) at roughly 5% opacity to maintain a natural, "daylight" feel.
- **Depth:** Elements should never feel like they are floating high above the surface; they should feel like they are resting gently on a soft mat.

## Shapes

The shape language is defined by significant roundedness to eliminate "sharp edges" that might feel aggressive.

- **Standard Elements:** Buttons and input fields use a 0.5rem radius.
- **Containers:** Content cards and modals use 1rem (rounded-lg) or 1.5rem (rounded-xl) to emphasize a "contained and safe" feeling.
- **Calendar Markers:** Event blocks should have fully rounded ends (pill-shaped) to appear soft and non-confrontational within the schedule.

## Components

- **Action Buttons:** Large, prominent, and highly rounded. The Primary Action uses a solid Sage Green fill with white text. Secondary actions use an outlined style with a 1px Sage Green border.
- **Reassuring Cards:** All main content (calendar entries, to-do lists, meal plans) must be housed in cards with soft shadows and 16px-24px internal padding.
- **Family-Calendar Visuals:** Use the Secondary (Sky Blue) for "Neutral" events and Tertiary (Terracotta) for "Special" events. The weekend should be highlighted with a very subtle Sage Green tint.
- **Status Chips:** For "Sold Out" or "Deadline Passed," use the Coral background with a darker Coral text. This maintains visibility without the "error" alarmism of red.
- **Input Fields:** Use a subtle Sage Green 1px border on focus, with a light Sage Green background tint (5% opacity) to signify the active state.
- **Empty States:** Use hand-drawn style iconography in the Primary color to maintain a human, supportive touch.