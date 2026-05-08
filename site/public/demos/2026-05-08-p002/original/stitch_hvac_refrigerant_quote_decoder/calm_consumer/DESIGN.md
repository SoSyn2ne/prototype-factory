---
name: Calm Consumer
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#414751'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#186b4f'
  on-secondary: '#ffffff'
  secondary-container: '#a4f3cf'
  on-secondary-container: '#207155'
  tertiary: '#805200'
  on-tertiary: '#ffffff'
  tertiary-container: '#a16900'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#a4f3cf'
  secondary-fixed-dim: '#89d6b4'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#00513a'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#ffb955'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
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
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
This design system focuses on de-escalating the anxiety associated with high-cost home infrastructure decisions. The brand personality is empathetic, expert, and steady. It employs a **Corporate/Modern** foundation softened by **Neomorphic** influences to create a tactile, "household" feel that feels safer than a cold industrial tool. 

The aesthetic prioritizes cognitive ease, using ample whitespace and a gentle visual rhythm to guide the user through complex technical data without triggering a sense of urgency or alarm.

## Colors
The palette is built on "Temperature Harmony." 
- **Primary (Soft Blue):** Used for primary actions and "Cooling" states. It provides a sense of professional reliability.
- **Secondary (Mint Green):** Used for "Efficiency" metrics and "Eco" status. It evokes freshness and positive growth.
- **Warm Slate Grays:** Used for typography and borders to avoid the harshness of pure black.
- **Functional Accents:** Warnings use a soft Goldenrod (#F5A623) rather than red to indicate "attention required" without signaling a crisis.
- **Gradients:** Use extremely subtle, large-radius linear gradients for card backgrounds to simulate natural light hitting a surface.

## Typography
The system uses **Plus Jakarta Sans** for headings to provide a friendly, slightly rounded geometric feel that softens technical content. **Inter** is used for body copy and technical data for its world-class legibility and neutral tone.

To de-stress technical jargon, labels for HVAC terms (e.g., SEER2, BTU) should always be accompanied by a "technical-label" style and a subtle tooltip or info icon to ensure the user never feels lost.

## Layout & Spacing
This design system utilizes a **Fixed Grid** layout centered on the screen to create a focused, "app-like" experience within the browser. 
- **The Household Card Layout:** Main content is housed in large, airy cards with generous internal padding (`lg`).
- **Rhythm:** Use a consistent 8px baseline. Vertical spacing between sections should be aggressive (e.g., `xl`) to prevent the interface from feeling cluttered or overwhelming.
- **Alignment:** Left-aligned text for readability, with centered headers for major decision milestones.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layering**. 
- **Shadows:** Use extremely soft, blurred shadows (Blur: 30px, Spread: -5px) with a hint of the Slate neutral color in the shadow mix. This makes cards appear to "float" gently above the canvas.
- **Layers:** Use a light gray background (#F8FAFC) to make white cards pop. Interactive elements like buttons should have a slight "lift" on hover, increasing the shadow depth to provide tactile feedback.
- **Glassmorphism:** Use subtle backdrop blurs (8px) for sticky headers or navigation bars to maintain a sense of space and context.

## Shapes
The shape language is consistently **Rounded**. Avoid sharp 90-degree angles as they feel clinical and aggressive. 
- **Standard UI (Inputs, Buttons):** 0.5rem (8px).
- **Cards & Containers:** 1.5rem (24px) to emphasize the soft, approachable nature of the tool.
- **Iconography:** Icons should feature rounded caps and corners, maintaining a consistent stroke weight of 2px.

## Components
- **Buttons:** Primary buttons use the soft blue with a slight gradient. Secondary buttons use a ghost style with a 1.5px Slate border. All buttons have a minimum height of 48px for a comfortable "touch" feel.
- **Cards:** The primary organizational unit. Should include a `rounded-xl` corner and a subtle 1px border (#E2E8F0) in addition to the ambient shadow.
- **Warning Badges:** Use the "Warm Gold" palette with rounded-pill shapes. Use "Soft Warning" text instead of "Critical Error" (e.g., "Review Suggested" instead of "Required Field").
- **Inputs:** Large, clear input fields with 16px internal padding. Focus states should use a soft blue glow (outer shadow) rather than a heavy border change.
- **Progress Stepper:** A horizontal track using the Mint Green to show completion. Use "check" icons for finished steps to provide a sense of accomplishment.
- **Decision Chips:** Use for selecting options (e.g., "Efficiency Level"). Selected state should use a light version of the primary blue with a slightly darker blue text.