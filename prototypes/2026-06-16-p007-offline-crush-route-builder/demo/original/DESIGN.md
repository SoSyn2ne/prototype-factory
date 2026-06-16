---
name: Crush Route
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
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00a572'
  on-tertiary-container: '#00311f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 48px
---

## Brand & Style
This design system centers on the "curated adventure," transforming the high-anxiety world of dating into an experimental city exploration. The brand personality is **Playful-Experimental**, blending the sophisticated mystery of a metropolitan night with the high-energy, eclectic vibes of Memphis Design. 

The visual style utilizes a "City-Night" dark mode foundation—deep, immersive, and grounding—interjected with "Electric Interference" accents. It aims to evoke a sense of possibility and kinetic energy while maintaining a safe, structured environment for users navigating social spaces. The goal is to move away from clinical "matching" interfaces and toward a vibrant, low-pressure storytelling experience.

## Colors
The palette is built on a high-contrast logic to differentiate between the "City Background" (static) and the "Route Path" (active).

- **Base Layers:** Deep Navy (#0F172A) serves as the primary canvas, providing a low-stimulus environment for social anxiety management.
- **Electric Purple (#A855F7):** The "Energy" color, used for primary actions, branding, and active route segments.
- **Sunset Orange (#F97316):** The "Momentum" color, highlighting discovery points, highlights, and secondary interactive elements.
- **Mint Green (#10B981):** Reserved for "Success" states, completions, and positive confirmations.
- **Accents:** Use pure White (#FFFFFF) for high-impact typography against the dark backgrounds to ensure maximum legibility.

## Typography
The typography strategy creates a tension between the expressive and the functional. 

- **Display:** **Syne** is used for all headlines and major personality moments. Its wide, unconventional letterforms give the design an editorial, experimental edge. Use "Extra Bold" for top-level headers to create a heavy visual anchor.
- **UI & Interface:** **Geist** provides a technical, clean counterpoint. It is highly readable in low-light (dark mode) settings and maintains clarity for navigational instructions and route data. 
- **Application:** Use all-caps labels with slight letter-spacing for category headers to lean into the Memphis architectural influence.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a "Z-axis hierarchy." 

- **Structure:** A 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** Spacing is generous to prevent cognitive overload. Content blocks are separated by `lg` (40px) units to allow the "night sky" background to breathe.
- **Route Composition:** Map-based layouts should use edge-to-edge bleed on mobile, while informational cards float on top with consistent `margin-mobile` padding.
- **Alignment:** Use asymmetrical placements for decorative elements (doodles) while keeping the core functional UI strictly aligned to the grid.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Glassmorphism** and **Tonal Layering** to mimic city lights reflecting on dark pavement.

- **Surface Layers:** The background is #0F172A. Elevated cards use a semi-transparent #1E293B at 80% opacity with a 12px backdrop blur.
- **Borders as Depth:** Instead of soft shadows, use 2px solid borders in #334155 for inactive states and primary colors (#A855F7) for active states. 
- **Memphis Accents:** Use "hard shadows"—solid, non-blurred offsets in Sunset Orange (#F97316)—behind primary buttons to create a 2D tactile effect.
- **Doodle Layer:** Hand-drawn icons and path-lines should sit on the highest Z-index, appearing as if they are "sketched" directly onto the glass.

## Shapes
The shape language is "Softly Geometric." 

- **Primary Containers:** Use `rounded-lg` (16px) for cards and containers to maintain a friendly, approachable feel.
- **Interaction Points:** Buttons and input fields use `rounded-xl` (24px) or full pill shapes to signify touchability and comfort.
- **Pathways:** Route lines on maps should have rounded caps and joins to avoid harsh, sharp angles that might increase user tension.

## Components
- **Buttons:** Primary buttons feature a solid Electric Purple fill with a 4px hard-offset "shadow" in Sunset Orange. Text is always Bold Geist.
- **Route Cards:** Utilize the glassmorphism style (backdrop blur) with a 2px stroke. Include a "doodle" icon in the corner to represent the activity type (e.g., a coffee cup or park bench).
- **Chips/Tags:** Small, pill-shaped markers with high-contrast borders. Use them for "vibe" markers like *#Quiet*, *#Artistic*, or *#Bustling*.
- **Input Fields:** Darker than the surface layer, with a persistent 1px border that glows (Purple) when focused.
- **Interactive Map Nodes:** Circular pulses of Mint Green for current location, and Sunset Orange for "Crush Route" stops.
- **Doodles:** Custom, hand-drawn vector accents (stars, arrows, scribbles) that appear sporadically to "break the grid" and add a human, low-fidelity touch to the technical interface.