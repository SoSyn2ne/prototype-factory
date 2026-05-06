---
name: Ecto-SaaS Aesthetic
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#d4c0d7'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#9d8ba0'
  outline-variant: '#514255'
  surface-tint: '#ecb2ff'
  primary: '#ecb2ff'
  on-primary: '#520071'
  primary-container: '#bd00ff'
  on-primary-container: '#ffffff'
  inverse-primary: '#9900cf'
  secondary: '#d7ffc5'
  on-secondary: '#053900'
  secondary-container: '#2ff801'
  on-secondary-container: '#0f6d00'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#757676'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f8d8ff'
  primary-fixed-dim: '#ecb2ff'
  on-primary-fixed: '#320047'
  on-primary-fixed-variant: '#74009f'
  secondary-fixed: '#79ff5b'
  secondary-fixed-dim: '#2ae500'
  on-secondary-fixed: '#022100'
  on-secondary-fixed-variant: '#095300'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  container-max: 1200px
---

## Brand & Style

This design system establishes a "Spooky-Cute" aesthetic that balances high-stakes business utility with a supernatural, comic-book flair. The brand personality is protective yet hilarious—acting as a digital talisman that wards off low-budget, high-maintenance clients. It leverages **Neon-Brutalism** mixed with **Tactile Comic** elements to create an interface that feels like a haunted arcade cabinet for professional service providers.

The UI should evoke a sense of "professional mischief." We use high-contrast color pairings and thick, illustrative borders to make mundane tasks like contract reviewing feel like casting a protective spell. The visual language is designed to be instantly shareable, turning the "horror" of freelance life into a badge of honor.

## Colors

The palette is anchored in a "Deep Midnight" abyss to ensure neon elements pop with maximum energy.

- **Primary (Neon Purple):** Used for warnings, critical calls to action, and "ritualistic" UI elements. It represents the magical energy used to banish bad clients.
- **Secondary (Ectoplasm Green):** Used for accents, success states, and growth metrics. It glows against the dark background.
- **Ghostly White:** Reserved for primary data and high-readability text.
- **Midnight Navy/Black:** The foundation of the interface, providing a void-like depth.

Apply "Glow" effects (outer glows/drop shadows) using the primary and secondary colors specifically on interactive borders and icons to simulate a neon light source.

## Typography

This design system utilizes a dual-font strategy to separate "The Ritual" from "The Math."

1. **Space Grotesk (The Ritual):** Used for all headings, labels, and buttons. Its quirky, geometric terminals feel futuristic yet occult. High-impact headlines should use tight letter-spacing to feel "heavy" and authoritative.
2. **Work Sans (The Math):** A grounded, professional sans-serif used for all body copy, data tables, and financial calculations. This ensures that while the brand is playful, the "margin math" is ultra-legible and trustworthy.

All headlines should be treated as graphic elements—don't be afraid to use all-caps for labels and small sub-headers.

## Layout & Spacing

The layout follows a **Fixed Grid** model with generous margins to allow the "monsters" and decorative neon elements to breathe.

- **The 8px Grid:** All components, padding, and margins must be multiples of 8px to maintain a rhythmic, structured feel amidst the "chaotic" aesthetic.
- **Dramatic Gutters:** Use wide 24px gutters to separate data cards. This mimics the panels of a comic book.
- **Asymmetric Accents:** While the core data sits on a grid, decorative illustrations and "ghostly" blurs should break the grid, floating partially outside container bounds to create depth.

## Elevation & Depth

Depth is not achieved through realistic lighting, but through **Comic-Style Layering** and **Neon Glows**.

- **Hard Shadows:** Instead of soft blurs, use "Block Shadows." These are solid offsets (usually 4px or 8px) in a darker shade or the primary purple, creating a 2.5D tactile effect.
- **Neon Borders:** Elevation levels are indicated by the intensity of a border's glow. A "floating" card should have a 2px neon-purple border with a 10px spread outer glow.
- **Atmospheric Blurs:** Use large, low-opacity "ectoplasm" green blobs in the background (z-index: -1) to create a sense of foggy depth behind the primary content containers.

## Shapes

The shape language is "Sharp-Soft." We use a **Soft (0.25rem)** base radius to keep the UI feeling modern and "cute," but prevent it from looking too bubbly or childish.

- **Primary Containers:** Use `rounded-lg` (0.5rem) with a thick 3px solid border.
- **Buttons:** Use a slight tilt (2-3 degrees) on hover to increase the "experimental" and "playful" feel.
- **Interactive Elements:** Checkboxes and radio buttons should feel "chunky"—slightly larger than standard, with thick strokes.

## Components

- **Comic Buttons:** Rectangular with a 0.25rem radius, a 2px black inner border, and a 4px primary-color block shadow. On click, the button should translate 2px down and right to "hide" the shadow, simulating a physical press.
- **Ghost Cards:** Backgrounds should be a slightly lighter "Midnight" than the page background, featuring a 1px neon-purple stroke.
- **Ecto-Inputs:** Input fields use a "Ghostly White" text on a dark base. When focused, the entire border glows Ectoplasm Green.
- **Exorcism Chips:** Small status tags (e.g., "Cheap Client Detected") use high-contrast fills (Neon Purple) with "Ghostly White" bold text.
- **Monster Toasts:** Notification alerts should feature a small, cute monster illustration (e.g., a "scope-creep ghost") peeking over the top of the toast notification.
- **Data Tables:** Clean and minimalist (Work Sans) but wrapped in a "Ritualistic" container with ornate corner accents that look like stylized runes or circuit paths.