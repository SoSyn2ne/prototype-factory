---
name: Serene Protocol
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#edeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#414846'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#727976'
  outline-variant: '#c1c8c4'
  surface-tint: '#47645c'
  primary: '#47645c'
  on-primary: '#ffffff'
  primary-container: '#5f7d74'
  on-primary-container: '#000604'
  inverse-primary: '#adcdc3'
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfda'
  on-secondary-container: '#63635f'
  tertiary: '#5d5e5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#767776'
  on-tertiary-container: '#040505'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9eadf'
  primary-fixed-dim: '#adcdc3'
  on-primary-fixed: '#02201a'
  on-primary-fixed-variant: '#2f4c44'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#e3e2e0'
  tertiary-fixed-dim: '#c7c6c5'
  on-tertiary-fixed: '#1a1c1b'
  on-tertiary-fixed-variant: '#464746'
  background: '#f9f9fb'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  helper-text:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1120px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 64px
---

## Brand & Style
The brand personality is rooted in radical empathy and structural stability. Navigating high-stakes housing applications is inherently stressful; this design system aims to lower the user's cortisol levels through a "Calm-Consumer" aesthetic. It balances the authority of a legal-adjacent tool with the warmth of a supportive advocate.

The design style is **Modern Minimalist with Tactile Softness**. It avoids the clinical coldness of traditional fintech by using organic warmth and subtle depth. It prioritizes clarity and focus, ensuring that even the most complex data entry feels approachable and manageable. Every interaction is designed to feel deliberate, stable, and reassuring.

## Colors
The palette is centered on a "Warm Sanctuary" concept. 

- **Primary (Sage Green):** Used exclusively for progress, "upload-ready" actions, and success states. It represents growth and resolution.
- **Secondary (Warm Stone):** A bridge between the paper-white surfaces and the text, used for secondary buttons and borders.
- **Tertiary (Cream Surface):** The foundational background color to reduce eye strain and provide a "non-digital" feel.
- **Neutral (Charcoal):** High-legibility text color that provides enough contrast for legal documents without the harshness of pure black.

Use soft red (#C87979) sparingly for error states, ensuring it is paired with clear recovery instructions to maintain the calm atmosphere.

## Typography
This design system utilizes **Manrope** for its balance of modern geometric structure and humanist warmth. It is highly legible at small sizes, which is critical for the legal-adjacent nature of housing applications.

- **Headlines:** Use Bold or SemiBold weights to provide a clear sense of hierarchy and information "anchoring."
- **Body:** Standardized at 16px to ensure readability for a diverse demographic. Line heights are intentionally generous (1.5x) to prevent "wall of text" fatigue.
- **Helper Text:** Used extensively for recovery and guidance, positioned directly below input fields to provide immediate reassurance.

## Layout & Spacing
The layout philosophy centers on a **Centered Focused Workspace**. Content is housed in a constrained central column to prevent eye-scanning fatigue and create a sense of focused attention.

- **Fluidity:** The grid is a 12-column fluid system on desktop, but margins increase significantly as screen size grows to keep the primary interaction area comfortable.
- **Generous Whitespace:** Section gaps are intentionally large (64px+) to separate distinct phases of the application, allowing the user to focus on one task at a time.
- **Mobile Reflow:** On mobile, all cards become full-width with 20px side margins. Stacked elements use a 16px rhythm to maintain clear visual separation.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than heavy shadows. This creates a "flat-tactile" feel that is professional and modern.

- **Base Layer:** The tertiary cream color (#F9F8F6) serves as the floor.
- **Surface Layer:** White cards (#FFFFFF) sit on top of the cream background, using a very soft, 4% opacity charcoal shadow with a large 24px blur to suggest a subtle lift.
- **Stroke Definition:** Elements use a 1px soft border in #E8E6E1 to define boundaries without adding visual "noise."
- **Focus State:** Active input fields or cards use a subtle Sage Green inner-glow to signal "active engagement."

## Shapes
The shape language is consistently **Rounded**, avoiding sharp edges that can feel aggressive or overly formal.

- **Main Cards:** Use 1rem (16px) corners to evoke a sense of friendliness and modernity.
- **Buttons and Inputs:** Use 0.5rem (8px) corners, providing a sturdy, reliable silhouette.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them as non-interactive status indicators.

## Components
Consistent styling across components reinforces the feeling of a guided, safe experience.

- **Proof Cards:** These are the primary containers for uploaded documents. They feature a Sage Green "Ready" checkmark in the top right and a clear "Replace Document" secondary action at the bottom.
- **Focused Workspace:** A layout pattern where the background dims slightly, and the current task card is highlighted, stripping away navigation to reduce cognitive load.
- **Buttons:** 
    - *Primary:* Sage Green background with white text. 
    - *Secondary:* Clear with a Warm Stone border.
- **Recovery Helper Text:** Always presented in a soft charcoal, positioned inside a light-grey callout box when an error occurs, focusing on the solution rather than the mistake.
- **Status Indicators:** Use soft, desaturated versions of green (success), amber (pending), and grey (not started) to keep the dashboard from feeling overwhelming.
- **Input Fields:** Large tap targets with 16px internal padding, utilizing the body-md typography for all user-entered data.