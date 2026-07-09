---
name: Atelier Hospitality Claims
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#454844'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#757873'
  outline-variant: '#c5c7c2'
  surface-tint: '#5f5e5d'
  primary: '#171817'
  on-primary: '#ffffff'
  primary-container: '#2c2c2b'
  on-primary-container: '#949391'
  inverse-primary: '#c8c6c4'
  secondary: '#615f53'
  on-secondary: '#ffffff'
  secondary-container: '#e4e0d1'
  on-secondary-container: '#656357'
  tertiary: '#091b0f'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e3023'
  on-tertiary-container: '#849887'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e0'
  primary-fixed-dim: '#c8c6c4'
  on-primary-fixed: '#1b1c1b'
  on-primary-fixed-variant: '#474745'
  secondary-fixed: '#e7e2d4'
  secondary-fixed-dim: '#cac6b9'
  on-secondary-fixed: '#1d1c13'
  on-secondary-fixed-variant: '#49473d'
  tertiary-fixed: '#d3e8d5'
  tertiary-fixed-dim: '#b7ccb9'
  on-tertiary-fixed: '#0e1f13'
  on-tertiary-fixed-variant: '#394b3d'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is engineered for a high-stakes hospitality environment where property damage claims are handled with the discretion and precision of a luxury concierge service. The brand personality is **sophisticated, objective, and authoritative**, moving away from the "insurance" aesthetic toward a "premium editorial" feel. 

The design style is a blend of **Minimalism** and **Tonal Layering**, utilizing high-quality typography and intentional whitespace to reduce the cognitive load of stressful claim processing. It evokes a sense of calm and order, ensuring that both the hospitality manager and the guest feel the process is handled with professional integrity.

## Colors

The palette is rooted in architectural materials:
- **Primary (Warm Charcoal - #2C2C2B):** Used for primary text and structural grounding. It is softer than pure black, providing a high-end, ink-on-paper feel.
- **Secondary (Stone - #D6D2C4):** Used for borders, dividers, and secondary UI elements to provide subtle definition without harshness.
- **Tertiary (Deep Sage - #4A5D4E):** The quiet CTA color. It represents growth and resolution, used sparingly for primary actions and success states.
- **Neutral (Soft Linen - #F9F8F6):** The base surface color. It provides a warm, organic backdrop that feels more premium than clinical white.

## Typography

The typography strategy employs a traditional editorial hierarchy. **Libre Caslon Text** is used for all major headings to establish an authoritative, "official document" aesthetic. **Hanken Grotesk** handles all functional UI tasks, chosen for its sharp, contemporary legibility.

- **Headlines:** Use generous top margins to separate sections.
- **Labels:** Small caps or increased letter spacing should be used for metadata and form headers to create a distinct visual layer from body text.
- **Body:** Line lengths for evidence descriptions should be capped at 65 characters to maintain readability.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to mimic the structured feel of a physical dossier. 
- **Desktop:** A 12-column grid with a maximum width of 1280px. Content is centered with wide 64px outer margins to provide "breathing room" typical of high-end editorial layouts.
- **Evidence Presentation:** Use a "Masonry" or "Grid" gallery for photo evidence, ensuring images are large and high-fidelity.
- **Vertical Rhythm:** A strict 8px baseline grid ensures consistent alignment of text and UI components.

## Elevation & Depth

This design system avoids heavy drop shadows in favor of **Tonal Layers and Subtle Outlines**. 
- **Surfaces:** Use the Soft Linen (#F9F8F6) as the base. Higher-level containers (like a claim card) use a pure white background with a 1px solid border in Stone (#D6D2C4).
- **Depth:** Instead of shadows, use a 2px offset border in a slightly darker tone to indicate "active" or "pressed" states.
- **Overlays:** Modals use a Deep Sage (#4A5D4E) backdrop at 10% opacity with a heavy 40px backdrop blur to maintain the workspace context while focusing the user.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle nod to modernity while maintaining the structural rigidity expected of a professional workspace. 
- Large containers (Claim Files) use `rounded-lg` (0.5rem).
- Interactive elements (Buttons, Inputs) use the base `rounded` (0.25rem).
- Avoid fully circular pills; the goal is a tailored, architectural look.

## Components

### Buttons
- **Primary:** Deep Sage background, Soft Linen text. No shadow, 1px inset border for crispness.
- **Secondary:** Transparent background, Warm Charcoal border (1px), Hanken Grotesk Medium text.

### Evidence Cards
- High-fidelity image containers with a 1px Stone border. Metadata (date/time/location) is displayed in `label-sm` beneath the image.

### Input Fields
- Underlined style or subtle 1px Stone border on all four sides. Focus state shifts the border to Deep Sage. No glow effects.

### Status Chips
- Minimalist indicators using tonal backgrounds (e.g., a very pale sage for "Resolved") with `label-sm` text.

### Lists
- Claim lists should have generous vertical padding (24px) between rows, separated by a 1px Stone divider. This prevents the "dense data" look of spreadsheets.