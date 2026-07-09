---
name: Serene Shield
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
  on-surface-variant: '#424841'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f6f0ea'
  outline: '#727971'
  outline-variant: '#c2c8bf'
  surface-tint: '#45664a'
  primary: '#426447'
  on-primary: '#ffffff'
  primary-container: '#5a7d5f'
  on-primary-container: '#f7fff3'
  inverse-primary: '#abd0ad'
  secondary: '#625e55'
  on-secondary: '#ffffff'
  secondary-container: '#e8e2d6'
  on-secondary-container: '#68645b'
  tertiary: '#5d5c58'
  on-tertiary: '#ffffff'
  tertiary-container: '#767471'
  on-tertiary-container: '#fcffe3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6ecc8'
  primary-fixed-dim: '#abd0ad'
  on-primary-fixed: '#01210b'
  on-primary-fixed-variant: '#2d4e33'
  secondary-fixed: '#e8e2d6'
  secondary-fixed-dim: '#cbc6ba'
  on-secondary-fixed: '#1e1c14'
  on-secondary-fixed-variant: '#4a473e'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fff8f2'
  on-background: '#1d1b18'
  surface-variant: '#e7e1dc'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
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
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is centered on the "calm-consumer" philosophy, specifically tailored for educators managing high-stress communications. The visual narrative moves away from the urgent, "red-alert" nature of traditional email clients and toward a protective, buffered environment.

The style is a hybrid of **Soft Minimalism** and **Tonal Layering**. It prioritizes a reduction in cognitive load by using a low-contrast interface that feels grounded and permanent. The emotional response should be one of immediate relief—as if the user has stepped out of a chaotic hallway and into a quiet, well-organized library. Professionalism is maintained through precise alignment and intentional whitespace, while "softness" is achieved through the elimination of pure blacks and harsh geometric intersections.

## Colors

The palette is designed to lower cortisol levels. 

- **Primary (Soft Sage):** Used exclusively for purposeful action. It represents growth and calm resolution. Use this for "Send," "Save," and primary navigation states.
- **Secondary (Soft Beige):** The structural foundation. Used for sidebars and secondary containers to provide a warm, non-clinical feel.
- **Tertiary (Cream):** The main canvas color. It replaces pure white to reduce eye strain during long periods of screen time.
- **Neutral (Warm Grey):** Used for typography and iconography. It has enough contrast for accessibility but lacks the jarring "noise" of true black.

Avoid using red for errors; instead, use a muted burnt orange to signal items needing attention without triggering a stress response.

## Typography

This design system utilizes **Plus Jakarta Sans** for headings to provide a friendly, rounded terminal that feels approachable and modern. Its soft curves complement the brand’s protective nature. 

For the "heavy lifting" of reading and writing emails, **Inter** is used for its exceptional legibility and systematic clarity. High line-heights are enforced throughout the system to ensure that dense parent communications feel airy and manageable. Text should never feel "cramped." Use `body-lg` for the actual content of emails to maximize readability.

## Layout & Spacing

The layout follows a **Fluid Grid** with generous safe areas. The goal is to prevent the UI from feeling cluttered even when a teacher has dozens of unread messages. 

- **Desktop:** A 12-column grid with wide 64px outer margins. Use "off-center" compositions for reading panes to mimic the feel of a physical notebook.
- **Mobile:** A single column with 16px margins, focusing on high-touch areas and clear vertical flow.
- **Rhythm:** Use the 8px base unit. For vertical rhythm between sections, err on the side of `lg` (48px) or `xl` (80px) spacing to create "islands" of information rather than a continuous wall of data.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Ambient Shadows**. This design system avoids harsh borders (which can feel restrictive) in favor of soft shadows that suggest objects are resting gently on a surface.

- **Surface Levels:** The background is the lowest level (Cream). Elevated containers (Beige) hold specific tools. Active cards or modals use the highest elevation.
- **Shadow Profile:** Use a very diffused, low-opacity shadow (e.g., `y: 4, blur: 20, opacity: 0.04`) with a slight warm tint (#4A4743) rather than pure grey. This creates a "pillow" effect, making the UI feel soft and tactile.
- **Transitions:** Elements should lift slightly (increase shadow blur) on hover to provide gentle feedback without using high-contrast color shifts.

## Shapes

The shape language is consistently **Rounded**. Sharp corners are eliminated to remove any sense of "edge" or "danger." 

- **Standard Elements:** Use `0.5rem` (8px) for buttons, input fields, and small cards. 
- **Large Containers:** Use `rounded-xl` (1.5rem / 24px) for the main content areas and email shields. 
- **Interactive Elements:** Buttons that are purely "action" (like 'Shield This Email') can utilize the `rounded-lg` (1rem) setting to feel more like a physical, friendly pebble.

## Components

- **Buttons:** Primary buttons use the Sage Green background with white text. Secondary buttons use a tonal beige background with neutral text. Avoid ghost buttons with borders; use flat tonal backgrounds instead.
- **Email Shield (Card):** A signature component for this system. A large, `rounded-xl` container with a soft ambient shadow and a 2px Sage Green "protection" indicator on the left side.
- **Input Fields:** Use a subtle beige fill instead of a border. On focus, the background stays beige but the Sage Green primary color appears as a soft 2px glow.
- **Chips/Labels:** Used for sentiment analysis (e.g., "Constructive," "Urgent"). These should be pill-shaped with very low-saturation background colors to avoid visual noise.
- **Progress Bars:** Soft, thick bars with rounded caps, used to show "Response Readiness" or "Draft Polish."
- **Lists:** Lists should have significant vertical padding (at least 16px) between items to ensure each communication feels like a distinct, manageable task.