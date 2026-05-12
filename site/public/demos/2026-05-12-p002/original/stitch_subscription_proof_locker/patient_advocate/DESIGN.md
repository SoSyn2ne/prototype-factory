---
name: Patient Advocate
colors:
  surface: '#f9faf8'
  surface-dim: '#d9dad8'
  surface-bright: '#f9faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f2'
  surface-container: '#edeeec'
  surface-container-high: '#e7e8e6'
  surface-container-highest: '#e1e3e1'
  on-surface: '#191c1b'
  on-surface-variant: '#414844'
  inverse-surface: '#2e3130'
  inverse-on-surface: '#f0f1ef'
  outline: '#727974'
  outline-variant: '#c1c8c2'
  surface-tint: '#446556'
  primary: '#416353'
  on-primary: '#ffffff'
  primary-container: '#597c6b'
  on-primary-container: '#f5fff7'
  inverse-primary: '#aacfbc'
  secondary: '#25686a'
  on-secondary: '#ffffff'
  secondary-container: '#abebed'
  on-secondary-container: '#2a6c6e'
  tertiary: '#5d5c54'
  on-tertiary: '#ffffff'
  tertiary-container: '#76756c'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5ebd7'
  primary-fixed-dim: '#aacfbc'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#2c4d3f'
  secondary-fixed: '#aeeef0'
  secondary-fixed-dim: '#92d2d3'
  on-secondary-fixed: '#002021'
  on-secondary-fixed-variant: '#004f51'
  tertiary-fixed: '#e5e2d8'
  tertiary-fixed-dim: '#c9c7bc'
  on-tertiary-fixed: '#1c1c15'
  on-tertiary-fixed-variant: '#48473f'
  background: '#f9faf8'
  on-background: '#191c1b'
  surface-variant: '#e1e3e1'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  renewal-date:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 32px
  gutter: 24px
  section-gap: 64px
  card-inner-padding: 24px
---

## Brand & Style

The design system is built on the philosophy of "Financial Peace." It acts as a patient advocate—a calming presence in the often-turbulent world of consumer finance. The target audience includes individuals seeking a secure, low-stress environment to manage their records and commitments.

The aesthetic blends **Minimalism** with **Soft-Modernism**. It prioritizes extreme clarity and breathing room over information density. The goal is to lower the user's heart rate through intentional whitespace, tactile-yet-subtle depth, and a color palette that mirrors nature. Every interaction should feel deliberate and supportive, moving away from the "urgent" red alerts typical of finance and toward a steady, rhythmic guidance system.

## Colors

The palette is anchored in organic, muted tones. 
- **Primary (Sage Green):** Used for primary actions and brand presence, signifying growth and stability.
- **Secondary (Gentle Teal):** Used for navigation and supportive elements, providing a cool, calm contrast.
- **Warm Neutrals:** The background and surface colors utilize a warm "Off-White" and "Sand" base to avoid the sterile feel of pure white, making the interface feel more like tactile paper or a comfortable home office.
- **Functional Colors:** Success states use a mossy green; warnings are rendered in a soft ochre rather than harsh orange; errors use a muted terracotta to remain clear but not alarming.

## Typography

This design system uses **Manrope** for its balanced, modern, and highly legible characteristics. It feels structured yet friendly. For functional labels and small metadata, **Plus Jakarta Sans** provides a softer, more approachable touch.

**Key Rules:**
- **Letter Spacing:** Body text and labels utilize generous letter spacing to increase readability and create a sense of "openness."
- **Visual Hierarchy:** Large headlines are reserved for welcome screens and major section headers. Renewal dates are intentionally oversized to ensure users never feel surprised by upcoming deadlines.
- **Weight:** Avoid using "Black" or "Extra Bold" weights to maintain the calm aesthetic; "Bold" (700) is the maximum weight permitted.

## Layout & Spacing

The layout philosophy is built on a **Fluid Grid** with significant "safe zones."
- **Desktop:** 12-column grid with 32px margins and 24px gutters. Content should rarely span the full width; instead, use centered containers (max-width: 1200px) to keep the eye focused.
- **Mobile:** 4-column grid with 20px margins. 
- **Spacing Rhythm:** Use a linear 8px scale. For vertical rhythm, prioritize large gaps (e.g., 64px) between distinct content sections to prevent the UI from feeling cluttered. 
- **Spaciousness:** Buttons and input fields should have generous internal padding (min 16px vertical) to provide a "tappable," effortless feel.

## Elevation & Depth

Hierarchy is conveyed through **Tonal Layers** and **Ambient Shadows**.
- **Shadows:** Use extremely diffused, low-opacity shadows (Blur: 30px, Opacity: 4-6%) with a slight Sage-tinted color (#6B8E7D) instead of pure black. This creates a soft "lift" rather than a harsh drop-shadow.
- **Surface Tiers:**
    - *Level 0 (Background):* Warm neutral (#FBFCFA).
    - *Level 1 (Cards):* Pure white (#FFFFFF) with a soft shadow.
    - *Level 2 (Modals):* Pure white with a 1px solid stroke in a light neutral (#EAE7DC) and a deeper shadow.
- **Outlines:** Cards utilize a 1.5px border in a muted tone to define edges clearly without the visual weight of heavy shadows.

## Shapes

The shape language is defined by extreme softness. 
- **Core Elements:** All standard cards, containers, and primary buttons use a minimum corner radius of **16px**. 
- **Large Containers:** Dashboard hero sections or large "evidence cards" should scale up to **24px** or **32px** to emphasize a friendly, non-corporate geometry.
- **Progress Bars:** Use fully rounded (pill-shaped) ends to evoke a sense of continuous, smooth movement.

## Components

### Evidence Cards
The signature component of this design system. These cards house critical financial proof.
- **Borders:** 1.5px solid borders using the Primary Sage color at 20% opacity.
- **Renewal Dates:** Displayed in the top right or bottom left in the `renewal-date` type style, highlighted with a soft teal underline.
- **Status:** Integrated "Peace Indicators" (small, soft green pulses) to show a document is verified.

### Buttons
- **Primary:** Sage Green background with white text. High-radius (16px) and generous horizontal padding (32px).
- **Secondary:** Transparent background with a Sage Green border (1px) and text.

### Progress Indicators
Instead of thin lines, use thick, soft-edged tracks. The "unfilled" portion should be a very light neutral, while the "filled" portion uses a gentle Teal-to-Sage gradient.

### Input Fields
Inputs should feel like containers. Use a light neutral fill (#F8F9F7) that transitions to a white background with a Sage border on focus. Label text should always be visible above the field in `label-caps`.

### Reassurance Badges
Small, pill-shaped chips used to denote "Insured," "Verified," or "Locked." These use a Tertiary background with the Primary color for text, communicating safety without being loud.