---
name: Solo-Tactile Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5b4137'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#8f7065'
  outline-variant: '#e4beb1'
  surface-tint: '#a73a00'
  primary: '#a73a00'
  on-primary: '#ffffff'
  primary-container: '#ff5c00'
  on-primary-container: '#521800'
  inverse-primary: '#ffb59a'
  secondary: '#006970'
  on-secondary: '#ffffff'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#949292'
  on-tertiary-container: '#2c2b2b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#802a00'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built for the "Solomaxxing" movement—a Gen Z-centric philosophy prioritizing self-investment and high-agency independence. The brand personality is unapologetic, cheeky, and hyper-modern, blending the aesthetic rigor of a high-end fashion lookbook with the interactive playfulness of a premium mobile app.

The design style is **High-Contrast / Experimental Editorial**. It utilizes massive typography, heavy ink-traps, and "poster-style" layouts to create an empowering user experience. The interface feels intentional and curated, moving away from standard utility patterns toward a more expressive, graphic design-led interface that treats every screen as a composition.

## Colors

This design system employs a high-energy, high-contrast palette designed to pop on OLED screens. 

- **Confidence Orange (#FF5C00):** The primary driver. Used for call-to-actions, progress indicators, and "Solomaxxing" milestones. It represents energy and self-assurance.
- **Solo Teal (#00F0FF):** The secondary accent. Used sparingly for interactive highlights, data visualizations, and "Cheeky" tooltips to provide a cool counterpoint to the orange.
- **Deep Onyx (#1A1A1A):** The grounding neutral. Used for primary text and heavy borders to maintain the editorial "ink on paper" feel.
- **Off-White (#F5F5F5):** The canvas. A slightly warm neutral that reduces eye strain while maintaining high contrast against the bold typography.

## Typography

Typography is the primary visual engine of this design system. We use a three-tier font strategy:

1.  **Bricolage Grotesque (Display/Headings):** A quirky, expressive font with unique terminal cuts. Used for large price figures, "Solomaxxing" slogans, and simulator results. It should feel loud and characterful.
2.  **Hanken Grotesk (Body):** A clean, contemporary sans-serif used for descriptions, instructional text, and inputs. It provides a functional balance to the expressive headlines.
3.  **JetBrains Mono (Data/Metrics):** Used for "Cost Simulator" outputs, date-math calculations, and technical labels. This adds a "system-level" precision to the simulator's cheeky data points.

## Layout & Spacing

The layout follows a **Fluid Editorial Grid**. On mobile, we use a 4-column grid with generous 20px side margins to allow the content to breathe like a magazine page. On larger screens, this expands to a 12-column grid.

Spacing is governed by a strict 4px baseline, but we intentionally use "Aggressive Vertical Stacking." Elements are either tightly grouped (8px) to show relationship or separated by large voids (48px+) to create a sense of importance and "Poster" composition. White space is not just "empty"—it is a structural element used to direct the eye to the "Confidence" metrics.

## Elevation & Depth

This system avoids traditional material depth. Instead, it uses **Tonal Layering and Offset Shadows**:

- **Flat Surface Logic:** Most UI elements sit flat on the `neutral-bg`. 
- **Offset Shadows:** Instead of soft ambient glows, we use "Hard-Stop" shadows (2-4px offset, 0 blur, 10% black) for cards and buttons. This mimics the look of stacked paper.
- **Glassmorphism (Contextual):** Used only for the "Simulator Overlay" or "Confidence Ritual" modals. A heavy backdrop blur (20px) with a 1px white stroke to create a "viewfinder" effect over the poster background.
- **Ink-Trap Borders:** Key interactive zones use a 2px solid `tertiary` border, reinforcing the "printed" aesthetic.

## Shapes

The shape language is **Strictly Geometric with Softened Terminals**. 

- **Primary Containers:** Use `rounded-lg` (0.5rem) to keep the look modern and approachable without becoming "bubbly."
- **Buttons & Sliders:** Use `rounded-xl` (0.75rem) to make them feel tactile and "squishy" compared to the more rigid layout.
- **The "Poster" Section:** Always uses sharp `0px` corners when full-screen, or `0.25rem` when card-based, to mimic a physical printed card or flyer.

## Components

### Tactile Sliders
Sliders are the core interaction of the cost simulator. The track is a thick 8px line in `tertiary`, and the thumb is a large 32px `Confidence Orange` circle. Value labels float above the thumb in `data-mono`.

### Confidence Ritual Cards
Cards feature a subtle offset shadow and high-contrast typography. They are designed to be "savable." They often include a "Solo Teal" accent icon and use `display-xl` for the primary metric or cost.

### Buttons
Primary buttons are solid `tertiary` with `neutral` text, featuring a 4px `Confidence Orange` offset shadow that disappears (compresses) on tap to provide physical feedback.

### The Poster Output
The final simulator summary is styled as a "Social Poster." It ignores standard UI padding, using edge-to-edge typography and bold color blocks. This is designed for high-impact sharing and "Solomaxxing" pride.

### Input Fields
Minimalist 2px bottom-only borders. When focused, the border transforms into a `Confidence Orange` 4px solid line with a cheeky micro-copy label (e.g., "What's the vibe cost?").