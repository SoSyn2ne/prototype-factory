---
name: Serene Negotiator
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#476554'
  primary: '#476453'
  on-primary: '#ffffff'
  primary-container: '#5f7d6b'
  on-primary-container: '#ffffff'
  inverse-primary: '#aeceb9'
  secondary: '#4b626d'
  on-secondary: '#ffffff'
  secondary-container: '#cbe3f0'
  on-secondary-container: '#4f6671'
  tertiary: '#7d562c'
  on-tertiary: '#ffffff'
  tertiary-container: '#986e42'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9ead5'
  primary-fixed-dim: '#aeceb9'
  on-primary-fixed: '#032013'
  on-primary-fixed-variant: '#304d3d'
  secondary-fixed: '#cee6f3'
  secondary-fixed-dim: '#b2cad7'
  on-secondary-fixed: '#051e28'
  on-secondary-fixed-variant: '#334a54'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

The design system is centered on the "Supportive Advisor" persona. It aims to lower the cortisol levels of stressed parents by providing an emotionally steady and non-judgmental environment. The visual language moves away from the competitive, high-pressure aesthetics typically associated with academic performance, focusing instead on holistic well-being and sustainable balance.

The chosen style is **Modern Minimalism with Soft Tactile influences**. It prioritizes heavy whitespace to reduce cognitive load and uses gentle transitions to create a sense of calm. The interface should feel like a quiet, sunlit room—organized, breathable, and safe. Every element is designed to convey stability and empathy, ensuring users feel guided rather than critiqued.

## Colors

This design system utilizes a palette of warm, organic tones to foster a sense of security. 

- **Primary (Sage Green):** Used for growth, health, and primary actions. It represents the "balanced state" we are striving for.
- **Secondary (Soft Blue):** Used for informational elements and steadying accents, providing a cooling effect against decision fatigue.
- **Tertiary (Muted Sand):** Used sparingly for highlights that require attention without triggering alarm.
- **Neutral (Cream & Warm Grey):** The foundation of the UI. Avoid pure white (#FFFFFF) in favor of soft creams to reduce eye strain and screen glare.
- **Functional Colors:** Success states use a deeper forest green. Warning states use a soft ochre rather than red to avoid the "failing grade" connotation.

## Typography

The typography strategy balances modern refinement with grounded reliability. 

**Manrope** is used for headlines to provide a clean, geometric, yet friendly appearance. Its open counters and modern curves feel optimistic. **Work Sans** is selected for body copy and labels due to its exceptional legibility and professional, neutral tone. 

Line heights are intentionally generous (1.5x - 1.6x for body text) to ensure that even dense information regarding schedules or "debt" feels airy and manageable. Avoid all-caps styling for anything longer than a two-word label to maintain a conversational, non-authoritarian voice.

## Layout & Spacing

The design system employs a **Fixed Grid** approach for desktop to contain information within a comfortable reading span, preventing eyes from wandering across overly wide lines. 

- **Desktop:** 12-column grid with a 1200px max-width.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column grid with 20px margins.

Spacing follows an 8px linear scale. We prioritize "Vertical Rhythm" through large `stack-xl` sections to clearly separate the "Problem" (Sleep Debt) from the "Solution" (Negotiated Tradeoffs). Use generous internal padding in cards (minimum 32px) to ensure content never feels cramped.

## Elevation & Depth

To maintain a "Calm-Consumer" feel, this design system avoids harsh shadows or deep layers. Instead, it uses **Ambient Tonal Layers** and **Soft Diffusion**.

- **Level 0 (Base):** The neutral cream background.
- **Level 1 (Cards/Surface):** White surfaces with a very soft, high-spread shadow (15% opacity of the primary green/grey mix) to make them feel like they are gently resting on the page.
- **Level 2 (Active/Floating):** Used for modals or tooltips, featuring a slightly deeper but still highly diffused shadow to suggest gentle prominence.

Avoid any "Pure Black" shadows. All shadows should be tinted with the Primary or Secondary color to maintain a cohesive, organic warmth.

## Shapes

The shape language is consistently **Rounded**, avoiding all sharp corners which can subconsciously trigger a sense of "edge" or "danger." 

- Standard components (buttons, inputs) use a **0.5rem (8px)** radius.
- Large containers and "Tradeoff Cards" use a **1rem (16px)** radius to feel more approachable and like physical stationery.
- Progress bars and status tags use **Full Pill** rounding to signify smoothness and lack of friction.

## Components

### Buttons
Primary buttons are solid Sage Green with white text, using the `rounded-md` setting. Secondary buttons use a Sage Green outline with a subtle cream hover state. Avoid "Glow" effects; use simple opacity or tonal shifts for interactions.

### Tradeoff Cards
These are the core of the experience. They should feature a Level 1 elevation, 16px corner radius, and a subtle 1px border in a slightly darker neutral tone. Information should be split into "Give" and "Gain" columns with clear, soft iconography.

### Input Fields
Fields should have a warm-grey background (`neutral_color_hex` darkened by 5%) rather than a stark white box. This makes the input feel like a part of the page rather than an empty void to be filled. Focus states use a 2px Sage Green border.

### Sleep Debt Visualizer
Instead of a "Debt" bar that turns red (which causes anxiety), use a "Recovery" bar that fills with soft blue as tradeoffs are made. The metaphor should always be "gaining health" rather than "clearing a deficit."

### Chips & Tags
Used for categorizing subjects or hagwons. Use low-saturation background colors with high-contrast text. For example, a "Math Hagwon" tag might be a soft blue background with a navy text.