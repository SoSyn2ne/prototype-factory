---
name: Serene Accord
colors:
  surface: '#fff8f3'
  surface-dim: '#dfd9d4'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ed'
  surface-container: '#f3ede7'
  surface-container-high: '#eee7e2'
  surface-container-highest: '#e8e1dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#414845'
  inverse-surface: '#33302d'
  inverse-on-surface: '#f6f0ea'
  outline: '#727975'
  outline-variant: '#c1c8c4'
  surface-tint: '#46655a'
  primary: '#16342b'
  on-primary: '#ffffff'
  primary-container: '#2d4b41'
  on-primary-container: '#99baad'
  inverse-primary: '#adcec0'
  secondary: '#645d53'
  on-secondary: '#ffffff'
  secondary-container: '#e8ded1'
  on-secondary-container: '#686257'
  tertiary: '#521f0b'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e351f'
  on-tertiary-container: '#f09f82'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8eadc'
  primary-fixed-dim: '#adcec0'
  on-primary-fixed: '#012018'
  on-primary-fixed-variant: '#2f4d42'
  secondary-fixed: '#ebe1d4'
  secondary-fixed-dim: '#cfc5b9'
  on-secondary-fixed: '#1f1b13'
  on-secondary-fixed-variant: '#4c463c'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#703620'
  background: '#fff8f3'
  on-background: '#1d1b18'
  surface-variant: '#e8e1dc'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system is built for a sensitive context: navigating family care and shared financial responsibilities. The brand personality is **Empathetic, Steady, and Transparent**. It aims to reduce the cognitive load and emotional friction often associated with elder care and debt management.

The design style is **Soft Professional**. It moves away from the cold, sterile nature of traditional fintech and instead adopts a "Counselor" aesthetic. This is achieved through a mix of **Minimalism** (to provide clarity) and **Tactile/Organic** elements (to provide warmth). The UI should feel like a high-quality physical planner or a quiet, sunlit room—organized but never rigid.

## Colors
The palette is grounded in warm, earthy tones to evoke a sense of home and stability.
- **Primary (Forest Green):** Used for primary actions and "Trust" states. It provides a deep, authoritative anchor that feels more approachable than corporate blue.
- **Secondary (Soft Beige):** Used for large surface areas and background layering to reduce eye strain and harsh contrast.
- **Tertiary (Muted Coral):** Used sparingly for highlights or meaningful notifications.
- **Warning (Gentle Amber):** Specifically designed for "Gentle Warning" states. It alerts users to financial discrepancies or overdue tasks without inducing panic or guilt.
- **Neutrals:** Warmer greys are used for text and borders to maintain the "Soft Professional" feel. Avoid pure black (#000000); use Deep Slate (#2A2827) for maximum readability.

## Typography
The typography system prioritizes **legibility and breathability**. 
- **Headlines:** Uses `Plus Jakarta Sans`. Its soft curves and modern geometry feel welcoming but organized.
- **Body & Labels:** Uses `Be Vietnam Pro`. This font was chosen for its exceptional readability at smaller sizes and its friendly, contemporary humanist qualities.
- **Scale:** Line heights are intentionally generous (1.5x - 1.6x for body text) to help users process financial and medical information without feeling overwhelmed. 
- **Korean Context:** When rendering Hangul, ensure the line-height is strictly maintained to prevent characters from feeling crowded.

## Layout & Spacing
This design system uses a **Fluid Grid** with a logic based on an **8px rhythm**.

- **Mobile:** 4-column grid with 20px side margins. 
- **Desktop:** 12-column fixed-max-width (1200px) grid with 64px margins.
- **Philosophy:** Negative space is a functional tool here. By using larger-than-standard margins and gaps (`lg` and `xl`), we create a "Quiet UI" that allows families to focus on one decision at a time.
- **Grouping:** Use the `xxl` (48px) spacing to clearly separate major logical sections (e.g., separating "Care Logs" from "Pending Debts").

## Elevation & Depth
Depth is created through **Tonal Layering** and **Ambient Shadows** rather than stark borders.
- **The Ground:** The `background_base` (Cream) acts as the canvas.
- **The Card:** Elements sit on `background_surface` (White) cards.
- **Shadows:** Use extremely diffused, low-opacity shadows with a hint of the primary green tint (e.g., `rgba(45, 75, 65, 0.08)`). Shadows should have a large blur radius (16px+) and a small Y-offset (4px) to make cards feel like they are gently resting on the surface, not floating high above it.
- **Interaction:** On hover or tap, the elevation should decrease slightly (shadow gets smaller) to provide a "tactile press" sensation.

## Shapes
The shape language is **distinctly rounded** to remove any "sharp edges" from the user experience, both literally and figuratively.
- **Components:** Standard buttons and input fields use a `0.5rem` (8px) radius.
- **Cards & Containers:** Primary containers (e.g., debt split cards, family member profiles) use `rounded-lg` (16px) or `rounded-xl` (24px).
- **Interactive States:** Use "squircle" or fully rounded shapes for status indicators (chips) to make them feel friendly and non-threatening.

## Components
Consistent application of the "Calm Consumer" style across key elements:

- **Buttons:** Primary buttons should be `primary_color` with white text. Secondary buttons use a thick `2px` border of `primary_color` or a soft beige fill. Transitions should be slow (250ms) and smooth.
- **The "Gentle Warning" Card:** For financial conflicts or debt reminders, use the `warning_soft` color for a light background tint and a darker amber for the icon/text. The language should be passive and helpful (e.g., "This amount is still being reviewed" instead of "Unpaid Debt").
- **Progress Flows:** Use a "Stepped Card" pattern. Each step of a debt split is a self-contained card that slides in. This prevents the "form fatigue" common in financial apps.
- **Chips:** Status chips (e.g., "Paid", "Pending", "Reviewed") should have no borders. Use high-contrast text on very pale background tints of the status color.
- **Input Fields:** Large tap targets (min 48px height) with soft beige backgrounds. Instead of a harsh black border on focus, use a 2px `primary_color` border and a subtle outer glow.
- **Lists:** Use "In-set" lists where items are separated by `border_subtle` lines that do not touch the edges of the card, creating a cleaner, more modern look.