---
name: AI Slop Shame Mirror
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#ffb1c3'
  on-secondary: '#66002c'
  secondary-container: '#ff4b89'
  on-secondary-container: '#590026'
  tertiary: '#ffffff'
  on-tertiary: '#00363a'
  tertiary-container: '#7df4ff'
  on-tertiary-container: '#006f77'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#ffd9e0'
  secondary-fixed-dim: '#ffb1c3'
  on-secondary-fixed: '#3f0019'
  on-secondary-fixed-variant: '#8f0041'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 90%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 110%
  slop-code:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-bold:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 120%
  body-standard:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 160%
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-compact: 8px
  stack-loose: 40px
---

## Brand & Style

This design system is built on a "Mirror-Booth" aesthetic—a high-energy, reflective environment designed to confront creators with the reality of their digital output. The style is a hybrid of **Cyber-Brutalism** and **Tactile Pop**, utilizing raw, unrefined structural elements juxtaposed against high-gloss, premium surfaces. 

The brand personality is provocative and unapologetic. It functions less like a utility and more like a reputation-saving intervention. The emotional goal is to create a "constructive cringe" response: high-stakes, slightly chaotic, but ultimately addictive and rewarding. Visuals should feel "loud," utilizing massive scales and intense color pops to ensure the tool never feels like a traditional, sterile editor.

## Colors

The palette is anchored in a deep, "Void Black" environment to allow neon accents to vibrate against the screen. 

- **Primary (Electric Lime):** Used for "clean" states, primary actions, and successful "slop-free" indicators.
- **Secondary (Hot Pink):** Reserved for "Shame" triggers, cringe detection, and high-alert warnings.
- **Tertiary (Cyan):** Used for analytical data, monospaced text blocks, and "mirror" reflections.
- **Surface Strategy:** Backgrounds should utilize a deep slate to prevent pure-black crushing, maintaining a sense of atmospheric depth. High-gloss surfaces are achieved through gradients of Cyan and Pink at low opacities (5-10%) to simulate glass reflections.

## Typography

Typography functions as a visual shout. We use **Anton** for all display and headline elements—its condensed, heavy nature demands attention and mimics the urgency of a warning sign. 

For the "Mirror" output—the actual text analysis—we use **Space Mono**. This creates a technical, "under-the-microscope" feeling, treating the user's text like raw data being audited for defects. 

Headlines should often use `text-transform: uppercase` to maintain the loud, provocative brand voice. Paragraphs are kept small and technical to provide a sharp contrast against the massive display headers.

## Layout & Spacing

The layout follows a **Fixed Grid** system inspired by film posters and technical blueprints. On desktop, we use a 12-column grid with generous outer margins to create a "framed" aesthetic, like a mirror hanging on a wall.

- **The Mirror Frame:** The main text area should be centered with wide gutters, forcing focus on the "slop" analysis.
- **Side Panels:** Use "Sticker-slapped" sidebars for meters and scores that don't necessarily align with the central grid, creating a sense of experimental layering.
- **Mobile:** Content reflows to a single column, but headlines retain their relative scale, often breaking across lines in a deliberate, aggressive fashion.

## Elevation & Depth

This design system rejects soft, natural shadows in favor of **Structural Layering** and **High-Gloss Surfaces**.

1.  **Mirror Layers:** Use semi-transparent backgrounds with a `backdrop-filter: blur(20px)` and a subtle 1px inner border in Cyan or Lime to simulate the edge of a glass pane.
2.  **Rough Borders:** Secondary panels use "rough-textured" borders—simulated by staggered, non-uniform strokes or a "sketch" filter—to contrast against the clean glass of the main UI.
3.  **Neon Glow:** Elements with high "Cringe" scores should emit a `box-shadow` that matches their accent color (e.g., a Hot Pink outer glow) to simulate a neon light vibrating against a dark wall.
4.  **Zero-Shadow Base:** Standard buttons and cards do not use shadows; they use high-contrast fills and heavy 2px borders for a flat, brutalist feel.

## Shapes

The primary shape language is **Sharp (0px)**. Rectilinear containers suggest a rigid, unforgiving audit. 

However, "Warning Stickers" and "Cringe Meters" should use **slanted/skewed transforms** (e.g., `transform: rotate(-2deg)`) to look like physical stickers applied haphazardly to the screen. High-gloss "Mirror" surfaces are the only elements allowed to have minimal rounding (4px) to suggest a finished glass edge.

## Components

- **Cringe Meters:** Oversized, horizontal progress bars using a "segment" style (blocks of color) rather than a smooth fill. As the score increases, the color shifts from Lime to Hot Pink with a flickering neon animation.
- **Slop Annotations:** Text highlights that look like neon marker strokes. They should be semi-transparent and slightly offset from the text they are highlighting.
- **Warning Stickers:** Components with a solid Electric Lime or Hot Pink background, black bold text, and a white "peeled edge" effect in the corner. Used for high-level summary "shame" labels.
- **Buttons:** Rectangular, no rounding. The "Hover" state should invert the colors (e.g., Black text on Lime background becomes Lime text on Black background) with a "glitch" or "shake" transition.
- **Input Fields:** Styled as "Technical Terminals." Monospaced text, 1px Cyan borders, and a blinking underscore cursor.
- **Smell Scores:** Large circular dials that look like analog pressure gauges from a factory, vibrating when the score is dangerously high.