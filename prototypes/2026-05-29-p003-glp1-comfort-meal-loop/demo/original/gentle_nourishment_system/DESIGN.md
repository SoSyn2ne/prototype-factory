---
name: Gentle Nourishment System
colors:
  surface: '#f7faf8'
  surface-dim: '#d7dbd9'
  surface-bright: '#f7faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f2'
  surface-container: '#ebeeed'
  surface-container-high: '#e6e9e7'
  surface-container-highest: '#e0e3e1'
  on-surface: '#181c1c'
  on-surface-variant: '#46483c'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef1f0'
  outline: '#76786b'
  outline-variant: '#c6c8b8'
  surface-tint: '#56642b'
  primary: '#56642b'
  on-primary: '#ffffff'
  primary-container: '#8a9a5b'
  on-primary-container: '#253000'
  inverse-primary: '#bdce89'
  secondary: '#6c538b'
  on-secondary: '#ffffff'
  secondary-container: '#dbbdfd'
  on-secondary-container: '#624980'
  tertiary: '#625e55'
  on-tertiary: '#ffffff'
  tertiary-container: '#979388'
  on-tertiary-container: '#2e2c24'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9eaa3'
  primary-fixed-dim: '#bdce89'
  on-primary-fixed: '#161f00'
  on-primary-fixed-variant: '#3e4c16'
  secondary-fixed: '#eedbff'
  secondary-fixed-dim: '#d8bafa'
  on-secondary-fixed: '#260e43'
  on-secondary-fixed-variant: '#543b71'
  tertiary-fixed: '#e8e2d6'
  tertiary-fixed-dim: '#cbc6ba'
  on-tertiary-fixed: '#1e1c14'
  on-tertiary-fixed-variant: '#4a473e'
  background: '#f7faf8'
  on-background: '#181c1c'
  surface-variant: '#e0e3e1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
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
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

The design system is centered on the "Calm-Consumer" philosophy, specifically tailored for individuals navigating GLP-1 medication journeys. The brand personality is supportive, empathetic, and clinical-adjacent without the clinical coldness. It avoids the aggressive "hustle" culture of traditional fitness apps, opting instead for a narrative of ease and steady-state wellness.

The visual style is **Modern Minimalism with Tactile Softness**. It utilizes generous whitespace to reduce cognitive load—essential for users who may be experiencing nausea or medical fatigue. The emotional response should be one of "quiet capability"—the UI feels like a deep breath, providing clear paths forward without demanding high energy or competitive engagement.

**Key Principles:**
- **De-medicalization:** Use soft textures and organic shapes to distance the experience from "hospital" software.
- **Low-Pressure Interactivity:** Animations are slow and easing; feedback is celebratory but muted.
- **Nurturing Presence:** The UI acts as a companion, not a coach.

## Colors

The palette is designed to mitigate "medical anxiety" and "food noise." We replace high-alert colors with desaturated, nature-inspired tones.

- **Primary (Sage):** Used for primary actions and steady progress. It represents growth and stomach-calming herbs.
- **Secondary (Lavender):** Used for symptom tracking and evening routines. It evokes rest and neurological calm.
- **Tertiary (Warm Sand):** The foundation for cards and surfaces, providing a warmer, more human touch than pure grey.
- **Success/Warning:** Avoid traditional bright greens or reds. Use a deeper shade of Sage for success and a soft, muted terracotta (only when absolutely necessary) for alerts.

## Typography

This design system prioritizes extreme legibility and friendliness. 

**Plus Jakarta Sans** is used for headlines to provide a modern, welcoming entrance to information. Its soft curves feel approachable. 
**Atkinson Hyperlegible Next** is selected for all body and instructional text. This ensures that users—even those experiencing brain fog or dizziness—can consume information with zero friction.

Line heights are intentionally expanded (1.5x - 1.6x) to create a sense of "air" within the text, preventing the UI from feeling cluttered or overwhelming.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high internal padding. 

- **Desktop:** 12-column grid, centered 1140px max-width.
- **Mobile:** Single column with 20px side margins to allow the content "room to breathe."

Spacing follows an 8px base unit, but emphasizes the larger increments (`lg` and `xl`) between distinct sections to maintain the "calm" aesthetic. Elements are rarely cramped; if in doubt, add more vertical space to reduce the feeling of urgency.

## Elevation & Depth

To maintain the soft, supportive atmosphere, the design system avoids heavy drop shadows. Depth is communicated through:

- **Tonal Layering:** Surfaces use the Tertiary (Warm Sand) or a very light Sage-tinted off-white to sit on top of the base background.
- **Soft Ambient Occlusion:** When elevation is required (e.g., a floating action button for "Log Meal"), use a very wide, low-opacity shadow (Color: `#4A4E4D` at 8% opacity, 20px blur).
- **Subtle Outlines:** Instead of shadows, cards often use a 1.5px solid border in a shade slightly darker than the surface color to provide definition without visual weight.

## Shapes

The shape language is consistently **Rounded**. There are no sharp corners in this design system. 

- **Cards/Modules:** 1rem (16px) corner radius.
- **Buttons/Inputs:** 0.5rem (8px) corner radius.
- **Interactive Pill Elements:** Fully rounded (500px) for items like tags or progress caps.

The use of "Squircle" mathematics for larger containers is encouraged to make the UI feel more organic and less "computed."

## Components

**Buttons:** 
Primary buttons use the Sage green with white text. Secondary buttons use a Sage-tinted outline. Avoid high-contrast black/white buttons.

**Soft-Edged Cards:**
Cards contain all primary content. They should have a subtle 1px border (`#D1D5C9`) and a slightly warmer background than the page itself.

**Gentle Progress Indicators:**
Progress is shown through thick, rounded bars with soft "glow" fills. Never use percentages or "XX% more to go." Instead, use "Step 2 of 4" or simple descriptive phases like "Moving steadily."

**Symptom Toggles:**
Toggles should feel tactile. The "track" of the toggle should be a muted Lavender when active, and the "thumb" should be a soft white. Use a slow (300ms) transition for the toggle movement to feel "gentle."

**Approachable Input Fields:**
Fields use a background fill rather than just an underline. Label text always sits above the field in `label-md` style to ensure clarity.

**Comfort Loop Lists:**
For recurring meal ideas, use lists with large leading icons (circular) and generous vertical padding (16px) between items to prevent accidental taps.