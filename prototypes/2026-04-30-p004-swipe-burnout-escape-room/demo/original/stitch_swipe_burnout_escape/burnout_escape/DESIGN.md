---
name: Burnout Escape
colors:
  surface: '#10112a'
  surface-dim: '#10112a'
  surface-bright: '#373752'
  surface-container-lowest: '#0b0b24'
  surface-container-low: '#191932'
  surface-container: '#1d1d36'
  surface-container-high: '#272741'
  surface-container-highest: '#32324d'
  on-surface: '#e2dfff'
  on-surface-variant: '#e5bcc4'
  inverse-surface: '#e2dfff'
  inverse-on-surface: '#2e2e48'
  outline: '#ac878f'
  outline-variant: '#5c3f45'
  surface-tint: '#ffb1c3'
  primary: '#ffb1c3'
  on-primary: '#66002c'
  primary-container: '#ff4b89'
  on-primary-container: '#590026'
  inverse-primary: '#bb0058'
  secondary: '#e3b5ff'
  on-secondary: '#4d007a'
  secondary-container: '#9400e4'
  on-secondary-container: '#f0d2ff'
  tertiary: '#2ae500'
  on-tertiary: '#053900'
  tertiary-container: '#1da800'
  on-tertiary-container: '#043200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c3'
  on-primary-fixed: '#3f0019'
  on-primary-fixed-variant: '#8f0041'
  secondary-fixed: '#f3daff'
  secondary-fixed-dim: '#e3b5ff'
  on-secondary-fixed: '#2f004c'
  on-secondary-fixed-variant: '#6e00ab'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#10112a'
  on-background: '#e2dfff'
  surface-variant: '#32324d'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h2:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h3:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0em
  body-lg:
    fontFamily: Spline Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-md:
    fontFamily: Spline Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  mono-stat:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 32px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin: 24px
---

## Brand & Style

This design system is built for an audience navigating the chaotic, high-stakes humor of modern work-life balance. It leans heavily into a **High-Contrast / Brutalist-Lite** aesthetic, blending the retro-futurism of 80s arcade mazes with contemporary digital maximalism.

The visual language is designed to evoke a sense of urgent playfulness. It uses "kinetic" energy—conveyed through tilted elements and vibrating colors—to mirror the frantic nature of "burning out" while providing a humorous, gamified path to "escape." The atmosphere is dark but vibrant, utilizing a midnight base to allow neon accents to "pop" with radioactive intensity. Illustrations should feature charmingly grotesque monsters representing "The Deadline," "The Unread Slack," and "The Friday 5PM Meeting," rendered in thick, wobbly strokes.

## Colors

The palette is anchored by **Deep Midnight Blue**, providing a void-like backdrop that simulates a digital maze. The primary interactive energy is driven by **Neon Pink** and **Electric Purple**, used for critical path elements and "survival" actions. 

**Acid Green** is reserved for success states, "energy" levels, and highlighting "Escape" routes. Contrast is intentionally jarring to maintain a high-energy, dramatic tone. Use gradients sparingly, preferring hard-edged color blocks and thick, vibrant strokes to define boundaries.

## Typography

This design system utilizes **Space Grotesk** for all display and interface labeling to capture a technical, slightly "glitchy" geometric vibe. Headlines should be massive and tightly tracked to feel imposing and dramatic.

**Spline Sans** handles body copy, providing high readability amidst the visual noise. For "dramatic states" or urgent warnings, use the `label-caps` style. All numerical data, such as escape timers or energy percentages, should use the `mono-stat` style to emphasize the "game-engine" feel of the interface.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high-tension spacing. Elements are often packed tightly together or separated by vast "void" spaces to create a sense of rhythm and unpredictability. 

A 12-column grid is used for desktop, but components are encouraged to break the grid slightly—using 4px or 8px offsets—to reinforce the "experimental" and "kinetic" tone. Containers should use generous internal padding (`md` or `lg`) to allow the chunky typography and monster illustrations room to breathe.

## Elevation & Depth

Depth is not achieved through soft, realistic shadows, but through **Bold Borders** and **Hard Offsets**. 

1.  **Level 1 (Surface):** Deep Midnight Blue background.
2.  **Level 2 (Cards):** Surface containers with a 2px solid Neon Pink or Electric Purple border.
3.  **Level 3 (Shadows):** Hard, 100% opacity offsets (usually 4px or 8px) in a contrasting neon color, creating a "sticker" or "pop-art" effect.
4.  **Level 4 (Modals):** Full-screen Acid Green "glitch" overlays that feel like they are breaking the screen's surface.

Avoid blurs. All depth must feel structural and deliberate.

## Shapes

The design system uses **Soft (0.25rem)** roundedness for most UI elements. This subtle rounding prevents the brutalist style from feeling too sharp or aggressive, maintaining the "playful" aspect of the brand. 

Interactive elements like buttons and cards use a consistent `rounded-sm` corner. However, "Energy Meters" and progress bars remain completely sharp (`rounded-0`) to mimic old-school hardware displays. Monster illustrations and "glitch" decorative elements should ignore these rules, opting for organic, wobbly, and irregular shapes.

## Components

### Kinetic Cards
Cards are the core interaction unit. They must feature a 2px Neon Pink border and a hard 8px bottom-right shadow in Electric Purple. On hover, the card should "vibrate" (a micro-translation of 2px) and the shadow should grow.

### Neon-Bordered Buttons
Buttons are chunky and use `label-caps` typography. They feature a dual-border: a thick inner stroke of Acid Green and a hard outer "glow" stroke. The click state should invert the colors, making the button appear "depressed" into the UI.

### Energy Meters (Progress Bars)
These are segmented bars. Instead of a smooth fill, use a series of vertical blocks. As the "Burnout" meter fills, the color should shift from Acid Green to Neon Pink. Add a "flicker" animation to the meter when it exceeds 80%.

### Dramatic State Containers
For moments of high burnout or "escape" success, use containers that feature "glitch" artifacts—small, random rectangular blocks of color overlapping the edges. These containers should be slightly tilted (between 1 and 3 degrees) to break the horizontal flow of the page.

### Monster Tooltips
When a user hovers over a stressful task, a "weird monster" illustration should appear in a speech bubble, offering humorous, relatable commentary in a `mono-stat` font.