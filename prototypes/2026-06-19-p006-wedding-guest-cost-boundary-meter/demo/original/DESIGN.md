---
name: Marital Logic
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4b463d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7d766c'
  outline-variant: '#cec5ba'
  surface-tint: '#685d4a'
  primary: '#685d4a'
  on-primary: '#ffffff'
  primary-container: '#f7e7ce'
  on-primary-container: '#726753'
  inverse-primary: '#d3c5ad'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#4e644a'
  on-tertiary: '#ffffff'
  tertiary-container: '#d7f0ce'
  on-tertiary-container: '#586e53'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f0e0c8'
  primary-fixed-dim: '#d3c5ad'
  on-primary-fixed: '#221b0b'
  on-primary-fixed-variant: '#4f4533'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d1eac8'
  tertiary-fixed-dim: '#b5cdad'
  on-tertiary-fixed: '#0c200b'
  on-tertiary-fixed-variant: '#374c33'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
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
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style
The design system balances the high-stakes emotional weight of a wedding with the clinical precision of financial planning. It moves away from stuffy institutional banking aesthetics toward a "Playful-Experimental" vibe that treats financial planning as a collaborative laboratory. 

The visual style is a hybrid of **Modern Minimalism** and **Glassmorphism**. It utilizes expansive whitespace and elegant typography to establish trust, while employing translucent "glass" modules for interactive calculators and data visualizations to signify a modern, experimental approach to tradition. The emotional goal is to make awkward conversations feel like a creative project rather than a chore.

## Colors
The palette is rooted in a "Champagne & Charcoal" foundation to maintain a premium, editorial feel. 

- **Primary (Champagne):** Used for large surface areas and background washes to keep the UI warm and humane.
- **Secondary (Charcoal):** Used for primary typography and structural elements to provide grounding and authority.
- **Accent (Sage, Amber, Coral):** These functional colors are used exclusively for "Risk Meters" and data visualization. 
- **The Glass Layer:** A pure white with 40-60% opacity is used for foreground containers to create the "Lab" aesthetic over the champagne background.

## Typography
This system uses a triple-font approach to navigate the intersection of luxury, usability, and technicality.

- **The Header (Playfair Display):** High-contrast serif that evokes traditional wedding stationery. Used for titles and key emotional questions.
- **The Workhorse (Work Sans):** A grounded, professional sans-serif used for all long-form body text and form descriptions.
- **The Lab (Space Mono):** A monospaced font used for "Scripting" tools, financial digits, and risk labels to emphasize the experimental, "logic-based" nature of the app.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous margins to mimic an editorial magazine layout. 

- **Desktop:** A 12-column grid with wide 40px outer margins. Content is often offset or asymmetrical to lean into the "experimental" brand personality.
- **Mobile:** A 4-column grid with 20px margins. Heavy use of vertical stacking for data cards.
- **The "Lab" Spacing:** Interactive tools use a tighter, condensed 4px-based rhythm to keep financial data dense and readable, while the surrounding "editorial" content uses an 8px-based rhythm.

## Elevation & Depth
Depth is created through **Glassmorphism** rather than traditional drop shadows.

- **Base Layer:** Solid Champagne (#F7E7CE).
- **Tool Layer (Glass):** White surfaces with `backdrop-filter: blur(12px)` and a subtle 1px white border at 20% opacity. This creates a "frosted glass" effect that feels light and premium.
- **Interaction Depth:** When an element is engaged, it gains a soft, diffused "Ambient Shadow" (10% opacity Charcoal) to lift it slightly from the glass surface.

## Shapes
The design system utilizes **Rounded** (Level 2) geometry to soften the blow of financial data. 

- **Standard Elements:** 0.5rem (8px) radius for buttons and input fields.
- **Containers:** Large glass cards use 1.5rem (24px) for a modern, friendly appearance.
- **Interactive Meters:** Risk gauges and progress bars use fully pill-shaped (rounded-full) caps to feel smooth and tactile.

## Components

### Buttons
- **Primary:** Deep Charcoal background with Champagne text. 8px border-radius.
- **Ghost/Experimental:** Transparent background with a 1px Charcoal border. On hover, fills with a 10% opacity Sage or Coral depending on the context.

### Risk Meters
- Bold, thick-stroke gauges using the status colors (Sage/Amber/Coral).
- Labels are always in **Space Mono** to indicate "calculated risk."

### Lab Containers
- The signature component: A glassmorphic card with a subtle 1px border. Used for "what-if" calculators and budget breakdowns.

### Scripting Tools
- Input fields for "Scripting" (drafting awkward money conversations with family) should use a notepad-like style: simple horizontal underlines and **Space Mono** font to make it feel like a draft or a technical exercise.

### Form Fields
- Minimalist design. Label floats above in **Work Sans**. Inputs are semi-transparent glass rectangles that become more opaque on focus.