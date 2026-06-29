---
name: Serene Parenting System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3e4948'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#6e7979'
  outline-variant: '#bec9c8'
  surface-tint: '#006a6a'
  primary: '#006a6a'
  on-primary: '#ffffff'
  primary-container: '#5eb1b1'
  on-primary-container: '#004142'
  inverse-primary: '#82d4d4'
  secondary: '#5c5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e0'
  on-secondary-container: '#606363'
  tertiary: '#596060'
  on-tertiary: '#ffffff'
  tertiary-container: '#9fa5a5'
  on-tertiary-container: '#353b3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9ef1f0'
  primary-fixed-dim: '#82d4d4'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#e1e3e3'
  secondary-fixed-dim: '#c4c7c7'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#444748'
  tertiary-fixed: '#dee4e4'
  tertiary-fixed-dim: '#c1c8c8'
  on-tertiary-fixed: '#171d1d'
  on-tertiary-fixed-variant: '#424848'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1120px
---

## Brand & Style

The design system is centered on the "Calm Consumer" aesthetic, specifically tailored for the cognitive load of first-time parents. The brand personality is supportive, organized, and quietly professional, acting as a reliable partner in a stressful life stage.

The style leverages **Minimalism** with a focus on **Tonal Layering**. By utilizing generous whitespace and a restricted, soft palette, the UI minimizes visual noise. It avoids aggressive marketing tactics, opting instead for a nurturing atmosphere that feels like a premium productivity tool for the home. The emotional response should be one of "quiet control"—reducing the anxiety of logistics through clarity and gentle visual cues.

## Colors

The palette is intentionally restrained to keep the user’s focus on the task at hand.

- **Primary (#5EB1B1):** A soft, muted teal used exclusively for primary calls-to-action, active progress indicators, and highlighting the "next" priority item.
- **Surface & Backgrounds:** The base is built on warm grays and off-whites. This provides a softer contrast than pure white, reducing eye strain during late-night planning sessions.
- **Functional States:** Success and warning states use desaturated greens and ambers rather than vibrant "alert" colors. Red is used sparingly and is softened to a terracotta-like hue to avoid triggering panic.

## Typography

The design system utilizes **Geist** for its exceptional legibility and modern, technical precision that remains approachable. The typographic scale is generous to ensure readability at a glance.

- **Headlines:** Use a slightly tighter letter-spacing and semi-bold weights to create a clear hierarchy without appearing "loud."
- **Body Text:** Standardized at 16px for primary information to ensure comfort for tired eyes.
- **Labels:** Used for metadata (e.g., "Waitlist Position"), these utilize all-caps with increased letter spacing for distinction at small sizes.

## Layout & Spacing

This design system uses a **Fluid Grid** with fixed maximum containers to prevent line lengths from becoming too long on ultra-wide monitors.

- **Grid:** A 12-column grid for desktop and a 4-column grid for mobile.
- **Padding:** "Generous" is the guiding principle. Content cards should never feel cramped; internal padding for cards starts at 24px (6 units).
- **Rhythm:** A 4px baseline shift is used, with most components following 8px increments to maintain a structured but airy feel. Vertical rhythm is prioritized over horizontal density to emphasize a linear, step-by-step workflow.

## Elevation & Depth

To maintain a "Calm" atmosphere, this design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **Low-contrast Outlines**.

- **Surfaces:** The background is the lowest layer (Level 0). Cards sit on Level 1, using a slightly lighter shade or a very subtle 1px border (#E9EFEF).
- **Shadows:** Only used on active elements or primary cards. Shadows are extremely diffused, using a large blur radius (12-20px) with very low opacity (4-6%) and a slight tint of the primary teal or warm gray to avoid a "dirty" look.
- **Interactions:** Hover states use subtle background shifts rather than dramatic elevation changes.

## Shapes

The shape language is "Soft-Organic." The design system employs a **Rounded** setting (0.5rem base) to remove harsh corners that can feel aggressive or overly corporate.

- **Standard Elements:** Buttons and small inputs use an 8px (0.5rem) radius.
- **Containers:** Content cards and feature blocks use a "rounded-lg" (16px) radius to create a friendly, approachable framing for family data.
- **Interactive Elements:** Progress bars and selection chips use fully pill-shaped (rounded-full) corners to suggest fluid movement and completion.

## Components

### Buttons & Actions
- **Primary:** Filled with the primary teal. Text is white. High roundedness.
- **Secondary:** Ghost style with a 1px soft gray border. 
- **States:** Hover states should be a subtle darkening of the teal. Avoid high-contrast "flash" effects.

### Cards (The "Waitlist Card")
- The core component. Features 24px internal padding, 16px corner radius, and a 1px border in a slightly darker warm gray than the background. 
- Use a "Soft Green" tag for "Confirmed" status and a "Soft Amber" for "Pending."

### Forms
- Inputs are tall (48px) to be touch-friendly. 
- Labels sit above the field in `label-sm` style. 
- Use soft gray backgrounds for input fields rather than white to distinguish them from the card surface.

### Progress States
- Progress bars should be thick (8px-12px) with rounded caps. 
- Use the primary teal for active progress. The background track should be a very light version of the teal or a warm gray to maintain low contrast.

### Lists
- Lists should have generous vertical padding between items (16px+) to ensure the "Waitlist" view feels manageable rather than overwhelming.