---
name: Serene Protocol
colors:
  surface: '#fff8f2'
  surface-dim: '#dfd9d3'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ed'
  surface-container: '#f3ede7'
  surface-container-high: '#ede7e1'
  surface-container-highest: '#e7e1dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#404845'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f6f0ea'
  outline: '#717975'
  outline-variant: '#c0c8c4'
  surface-tint: '#3a675b'
  primary: '#386458'
  on-primary: '#ffffff'
  primary-container: '#507d70'
  on-primary-container: '#f4fffa'
  inverse-primary: '#a1d0c1'
  secondary: '#605e5a'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2dd'
  on-secondary-container: '#666460'
  tertiary: '#416074'
  on-tertiary: '#ffffff'
  tertiary-container: '#59788e'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bdeddd'
  primary-fixed-dim: '#a1d0c1'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#214e43'
  secondary-fixed: '#e6e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#484743'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#abcbe2'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#2b4a5e'
  background: '#fff8f2'
  on-background: '#1d1b18'
  surface-variant: '#e7e1dc'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
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
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 120px
---

## Brand & Style
The brand personality is rooted in radical empathy and technical precision. Designed for medical safety, the UI must remain steady and professional under high-stress conditions. The emotional response is one of "guided calm"—the app should feel like a reliable expert whispering clear instructions rather than shouting alerts.

The design style is a refined **Modern Minimalist** approach with **Tactile** influences. It utilizes generous whitespace to reduce cognitive load and prevent "information panic." Every element is designed to feel soft and approachable, removing the cold, clinical harshness often associated with medical software. The aesthetic prioritizes clarity and breathability, ensuring that the user’s eye is led naturally to the most critical action or piece of data.

## Colors
The palette is a departure from high-contrast emergency red. Instead, it uses **Reassuring Warm Neutrals** (Cream and Soft Beige) for surfaces to minimize eye strain. 

- **Primary (Sage Green):** Used for primary actions and "safe" states. It provides a sense of growth and health.
- **Secondary (Soft Beige):** Used for large container backgrounds and subtle sectioning.
- **Tertiary (Dusty Blue):** Used for informational accents and secondary navigation.
- **Warning (Soft Amber):** Used for alerts. It is distinct and clear without triggering a cortisol response.
- **Neutral (Charcoal-Stone):** Used for typography to maintain high legibility while appearing softer than pure black.

## Typography
This design system uses **Inter** exclusively to ensure maximum legibility and a systematic, utilitarian feel that remains friendly.

**Key Principles:**
- **Hierarchy:** Critical instructions use `headline-lg`. Secondary context uses `body-md`.
- **Contrast:** We use font weight rather than size to denote importance in compact spaces, preventing the UI from feeling cluttered.
- **Line Height:** Generous line heights (1.5x for body text) are used to assist users who may be scanning text while multi-tasking or under stress.
- **Micro-copy:** Labels use slightly increased letter spacing and a semi-bold weight to remain legible even at small sizes.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a heavy emphasis on vertical rhythm. 

- **Desktop:** A 12-column grid with wide margins (120px) to keep content centered and focused.
- **Mobile:** A single-column layout with 20px side margins to ensure touch targets have ample room.
- **Spacing Philosophy:** Use `lg` (40px) spacing between distinct cards or sections to create a sense of "air." Use `sm` (12px) for related elements within a card.
- **Safety Zones:** No critical interactive element should be placed within 16px of another to prevent accidental taps during urgent use cases.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. This design system avoids harsh borders in favor of soft, diffused shadows that make components feel like they are gently floating on the warm cream background.

- **Level 0 (Background):** The base `background_hex` cream color.
- **Level 1 (Cards):** White surfaces with a very soft, 12% opacity shadow (16px blur, 4px Y-offset) tinted with the primary sage color.
- **Level 2 (Modals/Active States):** Increased shadow spread (24px blur) to pull the element closer to the user.
- **Interaction:** Buttons use a subtle "pressed" state where the shadow depth decreases, mimicking a physical tactile press.

## Shapes
The shape language is consistently **Rounded**. 

Sharp corners are avoided to reduce the visual "threat" level of the UI. 
- **Standard Cards:** Use `rounded-lg` (1rem/16px) for a soft, friendly appearance.
- **Buttons and Inputs:** Use `rounded` (0.5rem/8px) to maintain a sense of structure while staying approachable.
- **Status Pills:** Use full pill-shaping (100px radius) to differentiate them from interactive buttons.

## Components
- **Cards:** The primary container. Cards should have a white background, soft sage-tinted shadows, and 24px internal padding. They group related medical data or safety steps.
- **Buttons:** 
  - *Primary:* Solid Sage Green with white text. 
  - *Secondary:* Ghost style with a Sage Green border and text. 
  - *Warning:* Solid Amber for actions that require caution (e.g., "Stop Treatment").
- **Chips/Badges:** Used for status indicators (e.g., "Stable," "Pending"). Use low-saturation background tints of the status color with high-saturation text.
- **Input Fields:** Soft beige backgrounds with a subtle 1px border. On focus, the border transitions to Primary Sage Green.
- **Progress Steppers:** Essential for medical protocols. Use a thick, 6px track with rounded ends to show step-by-step progress through a safety check.
- **Alert Banners:** Should appear at the top of cards, utilizing the Soft Amber color to highlight critical but non-emergency information.