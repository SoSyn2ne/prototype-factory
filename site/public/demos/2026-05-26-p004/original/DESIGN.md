---
name: AI Slop Reputation Carnival
colors:
  surface: '#111126'
  surface-dim: '#111126'
  surface-bright: '#37374e'
  surface-container-lowest: '#0c0c21'
  surface-container-low: '#19192f'
  surface-container: '#1d1d33'
  surface-container-high: '#28283e'
  surface-container-highest: '#333349'
  on-surface: '#e2dffd'
  on-surface-variant: '#d4c0d7'
  inverse-surface: '#e2dffd'
  inverse-on-surface: '#2e2e45'
  outline: '#9d8ba0'
  outline-variant: '#514255'
  surface-tint: '#ecb2ff'
  primary: '#ecb2ff'
  on-primary: '#520071'
  primary-container: '#bd00ff'
  on-primary-container: '#ffffff'
  inverse-primary: '#9900cf'
  secondary: '#ffb1c3'
  on-secondary: '#66002c'
  secondary-container: '#ff4b89'
  on-secondary-container: '#590026'
  tertiary: '#2ae500'
  on-tertiary: '#053900'
  tertiary-container: '#168900'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f8d8ff'
  primary-fixed-dim: '#ecb2ff'
  on-primary-fixed: '#320047'
  on-primary-fixed-variant: '#74009f'
  secondary-fixed: '#ffd9e0'
  secondary-fixed-dim: '#ffb1c3'
  on-secondary-fixed: '#3f0019'
  on-secondary-fixed-variant: '#8f0041'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#111126'
  on-background: '#e2dffd'
  surface-variant: '#333349'
typography:
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  carnival-stripe: 40px
---

## Brand & Style
The design system embodies a **Surrealist Maximalist** aesthetic, functioning as a digital satire of the AI industry's "gold rush." It captures the tension between the curated whimsy of a Victorian carnival and the decaying, uncanny textures of unrefined generative output.

The UI should evoke a sense of **ordered chaos**. It is vibrant, loud, and intentionally overwhelming to mimic the sensory overload of modern AI-generated content. Design elements should feel "too much"—overlapping layers, high-saturation accents, and a constant play between physical carnival metaphors (heavy curtains, striped patterns) and digital corruption (glitch artifacts, melting borders).

**Target Audience:** Tech critics, developers, digital artists, and users navigating the fatigue of the "dead internet" theory.
**Emotional Response:** Excitement, skepticism, humor, and a lingering sense of the uncanny.

## Colors
The palette utilizes a high-contrast, neon-on-midnight scheme designed to simulate an artificial night-time carnival.

- **Electric Purple (#BD00FF):** The primary driver for navigation and core branding. It represents the "magic" of AI.
- **Neon Pink (#FF007A):** Used for interactive elements, highlights, and urgent feedback. It mimics the "reputation" heat of the carnival.
- **Slime Green (#39FF14):** The "Slop" color. Used for accents, success states, and elements that should feel slightly toxic or overly synthesized.
- **Deep Midnight Blue (#0A0A1F):** The foundational dark mode background, providing a stable canvas for the neon chaos.

**Gradients:** Use "Melting Gradients" that transition abruptly between these colors, avoiding smooth transitions in favor of dithered or stepped color bands.

## Typography
The typography system relies on the clash between the eccentric and the mechanical.

- **Headlines:** Use **Bricolage Grotesque** for its quirky, variable-width appearance that feels like hand-painted carnival signage gone wrong. Set headlines with tight tracking and occasional "glitch" offsets (shifting individual letters vertically).
- **Body:** Use **JetBrains Mono** for all long-form text. The monospaced nature provides a "terminal" aesthetic that grounds the surrealism in a tech-centric reality.
- **Labels:** Use **Space Mono** for metadata and UI labels. This should feel like technical output or tickets dispensed at a booth.

## Layout & Spacing
The layout uses a **Fluid 12-column grid** but intentionally breaks it with "Slop Overlays"—elements that bleed outside their containers or sit at slight 1-2 degree tilts.

- **Symmetry:** Avoid perfect symmetry. Use asymmetrical margins (e.g., 32px on the left, 48px on the right) to create a sense of visual vertigo.
- **Breakpoints:**
  - **Desktop:** 12 columns, 24px gutters. Content is dense and layered.
  - **Tablet:** 8 columns, 16px gutters. Depth effects are simplified.
  - **Mobile:** 4 columns, 12px gutters. Focus on verticality and "infinite scroll" slop.
- **Rhythm:** Use a 4px base unit, but stack elements using negative margins to create the "crowded" feel of a carnival midway.

## Elevation & Depth
This design system rejects subtle shadows in favor of **Tonal Layers** and **Digital Distortions**.

- **Stacked Depth:** Surfaces use solid, high-contrast offsets rather than soft blurs. A card might have a solid 4px Neon Pink offset border to simulate a "hard" shadow.
- **Backdrop Filters:** Use heavy `backdrop-filter: blur(20px) saturate(200%)` for modals, making them look like frosted glass that has been corrupted by the vibrant background colors.
- **Scanlines:** Apply a faint, semi-transparent horizontal scanline pattern to the highest elevation layers to give them a "screen-on-screen" feel.
- **Melting Edges:** Use CSS `clip-path` or SVG masks to give container edges a slightly dripping or distorted appearance, moving away from clean geometric lines.

## Shapes
The shape language is primarily **Sharp (0px)**, leaning into a brutalist, digital-first structure. However, this is contrasted by organic, "liquified" SVG shapes used as background decorations or decorative containers.

Interactive elements (buttons, inputs) must remain strictly rectangular with sharp 90-degree corners to maintain the "mechanical" feel of a carnival game or a computer program. Use heavy 2px or 3px borders to define these shapes clearly against the chaotic backgrounds.

## Components
- **Buttons:** "The Barker Button." Sharp corners, 2px Slime Green border, JetBrains Mono text. On hover, the button should "glitch"—shifting its position by 2px and swapping its background color to Neon Pink.
- **Cards:** "Reputation Booths." Use a Deep Midnight Blue background with a header area featuring diagonal "Carnival Stripes" in Purple and Pink.
- **Inputs:** High-contrast boxes with a blinking block cursor (terminal style). The border should glow Slime Green when focused.
- **Chips:** "Ticket Stubs." Small, monospaced labels with a "punched hole" effect on the left side (using a CSS mask).
- **Progress Bars:** "The High Striker." A vertical or horizontal bar that fills with a gradient that turns from Purple to Slime Green. Add jitter animations to the "filling" state.
- **Lists:** "The Midway Queue." Items separated by thin, dashed lines that look like perforated paper.
- **Unique Component - "The Slop-o-Meter":** A radial gauge using distorted, non-uniform arcs to display how much "AI Slop" is present in a specific reputation score.