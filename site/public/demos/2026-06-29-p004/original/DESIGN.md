---
name: Serene Guidance
colors:
  surface: '#f8faf9'
  surface-dim: '#d8dada'
  surface-bright: '#f8faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f3'
  surface-container: '#eceeed'
  surface-container-high: '#e7e8e8'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#3f4848'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#eff1f0'
  outline: '#707978'
  outline-variant: '#bfc8c8'
  surface-tint: '#2a6767'
  primary: '#0c5252'
  on-primary: '#ffffff'
  primary-container: '#2d6a6a'
  on-primary-container: '#abe8e7'
  inverse-primary: '#95d1d1'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#4e4840'
  on-tertiary: '#ffffff'
  tertiary-container: '#666057'
  on-tertiary-container: '#e4dbcf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1eeed'
  primary-fixed-dim: '#95d1d1'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#074f4f'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#eae1d5'
  tertiary-fixed-dim: '#cec5ba'
  on-tertiary-fixed: '#1f1b14'
  on-tertiary-fixed-variant: '#4b463d'
  background: '#f8faf9'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
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
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  container-max: 1120px
  gutter: 24px
---

## Brand & Style

The design system is centered on **Emotional Clarity** and **Patient Utility**. It targets families navigating complex, often sensitive life decisions, requiring a UI that feels like a quiet, supportive advisor rather than a clinical tool or a high-energy consumer app.

The aesthetic follows a **Soft-Minimalist** approach with elements of **Tactile Gentleness**. It prioritizes heavy whitespace to reduce cognitive load and uses high-quality typography to ensure information feels accessible and non-threatening. The emotional response should be one of "held space"—safe, professional, and deeply respectful of the user's current state of mind.

## Colors

The palette is anchored in **Warm Neutral Surfaces** to evoke a domestic, comforting environment. 
- **Primary:** A muted blue-green used for reassurance, progress indicators, and primary actions. It is deep enough for high contrast but soft enough to remain calming.
- **Surface:** Creams (#F9F7F2) and Soft Taupes (#E8DFD3) replace harsh whites to reduce eye strain and feel more organic.
- **Semantic Accents:** Status colors are intentionally desaturated. A Soft Amber (#D9A05B) signals areas of uncertainty without causing alarm, while a Muted Rose (#B97373) indicates high-pressure points or urgent needs with a sympathetic tone.

## Typography

This design system utilizes **Hanken Grotesk** for its contemporary, precise, yet approachable character. It mirrors the cleanliness of "Pretendard" while offering a more refined geometric touch.

Key typographic rules:
- **Generous Line Heights:** Body text utilizes a 1.6x to 1.8x line height ratio to ensure reading feels effortless and "airy."
- **Low Contrast:** Avoid pure black (#000000) for text; use `neutral_base` (#4A4540) to keep the reading experience soft.
- **Hierarchy:** Use font weight rather than size increases for smaller components to maintain a compact but legible information density.

## Layout & Spacing

The layout philosophy relies on a **Soft Fixed Grid** for desktop to prevent content from becoming too sparse and overwhelming. 
- **Desktop:** A centered 12-column grid with a max-width of 1120px. This creates a focused, "column-like" reading experience reminiscent of a high-quality journal.
- **Mobile:** A single-column flow with 20px side margins and 16px gutters between elements.
- **Rhythm:** Vertical spacing should be ample. Use `xl` (40px) or `xxl` (64px) between major sections to allow the user to pause and breathe between decision steps.

## Elevation & Depth

To maintain a calm atmosphere, depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than stark borders.
- **Base Layer:** Cream surface (#F9F7F2).
- **Surface Layer:** White elements placed on the base layer should use an extremely diffused shadow: `0px 4px 20px rgba(74, 69, 64, 0.04)`.
- **Active Layer:** Use a subtle inset shadow for "pressed" states to create a physical sense of security and tactility.
- **Avoid:** Do not use heavy borders or high-opacity black shadows. Depth should feel like paper layers softly stacked on a desk.

## Shapes

The design system uses **Rounded** geometry (8px base radius) to remove sharp edges that can feel aggressive or clinical.
- **Small Components:** Checkboxes and inputs use a 4px radius.
- **Medium Components:** Buttons and standard cards use an 8px radius.
- **Large Components:** Reassuring step-cards and large containers use a 16px (`rounded-lg`) or 24px (`rounded-xl`) radius to emphasize comfort.

## Components

### Reassuring Step Cards
The hero component of the system. These cards feature a progress track on the left, a large soft-rounded container, and "Next" actions positioned clearly at the bottom right. They should use the `secondary_color` as a background to distinguish them from the page base.

### Buttons
Primary buttons use the `primary_color` (blue-green) with white text. Secondary buttons should be transparent with a `tertiary_color` border. All buttons should have a slightly increased vertical padding (12px to 16px) to make the hit area feel more inviting and less cramped.

### Progress Visualizations
Avoid "Red/Yellow/Green" paradigms. Instead, use a "Filling Vessel" metaphor with soft gradients of the `primary_color`. Use the `status_uncertainty` (amber) for areas requiring more data and `status_pressure` (rose) only as a soft highlight for sensitive deadlines.

### Input Fields
Inputs should have a thick 2px border in `tertiary_color`, which transitions to `primary_color` on focus. This provides a clear, high-contrast target for users who may be stressed or distracted.

### Helpful Tooltips
Instead of a simple "?" icon, use small "Note" chips that use the `tertiary_color` background and a small icon to offer extra context, reducing "decision shame" by explaining *why* a certain data point is needed.