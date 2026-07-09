---
name: Arcade Advocacy
colors:
  surface: '#111125'
  surface-dim: '#111125'
  surface-bright: '#37374d'
  surface-container-lowest: '#0c0c1f'
  surface-container-low: '#1a1a2e'
  surface-container: '#1e1e32'
  surface-container-high: '#28283d'
  surface-container-highest: '#333348'
  on-surface: '#e2e0fc'
  on-surface-variant: '#bac9cd'
  inverse-surface: '#e2e0fc'
  inverse-on-surface: '#2f2e43'
  outline: '#859397'
  outline-variant: '#3b494c'
  surface-tint: '#14d9f6'
  primary: '#c2f3ff'
  on-primary: '#00363e'
  primary-container: '#2de2ff'
  on-primary-container: '#00616f'
  inverse-primary: '#006877'
  secondary: '#fffae3'
  on-secondary: '#353100'
  secondary-container: '#efe100'
  on-secondary-container: '#696300'
  tertiary: '#ffe5e6'
  on-tertiary: '#67001e'
  tertiary-container: '#ffbec3'
  on-tertiary-container: '#b0053a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a3eeff'
  primary-fixed-dim: '#14d9f6'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#f5e60a'
  secondary-fixed-dim: '#d7ca00'
  on-secondary-fixed: '#1f1c00'
  on-secondary-fixed-variant: '#4d4800'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b8'
  on-tertiary-fixed: '#40000f'
  on-tertiary-fixed-variant: '#91002d'
  background: '#111125'
  on-background: '#e2e0fc'
  surface-variant: '#333348'
typography:
  display-boss:
    fontFamily: Anybody
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 36px
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
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
  label-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-sm:
    fontFamily: Space Mono
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
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1200px
---

## Brand & Style

This design system establishes a "Retro-Modern Arcade" aesthetic for a consumer-rights platform. It balances the urgency of consumer advocacy with the dopamine-driven engagement of a boss-fight game. The personality is defiant, energetic, and empowering—turning the frustration of a "refund queue" into a winnable challenge.

The visual style utilizes **High-Contrast / Bold** elements mixed with **Retro / Vaporwave** influences. It features chunky strokes, vibrant accent colors against deep backgrounds, and a tactile, button-heavy interface that feels like a physical arcade machine. The goal is to make the user feel like a "Player One" reclaiming their rights through a polished, high-energy interface.

## Colors

The palette is built on a "Neon Night" foundation to maximize contrast and energy.

*   **Primary (Electric Blue):** Used for "Action" states, player progress, and successful refund status.
*   **Secondary (Vibrant Yellow):** Used for "Boss" warnings, critical alerts, and highlighting specific consumer rights clauses.
*   **Tertiary (Coral Pink):** Used for "Damage" indicators, negative interactions, or "Fight" triggers.
*   **Neutral (Midnight Navy):** The core background color, providing a deep, stable base that makes the neon accents pop.

Maintain high accessibility by ensuring the Yellow and Blue primary colors are paired with dark text or backgrounds, while the deep Neutral base serves as the canvas for all glass and card effects.

## Typography

The typography system uses a tri-font hierarchy to blend gameplay vibes with utility.

*   **Anybody** is the voice of the "Boss Fight." It is loud, chunky, and aggressive. Use for large headings and impact statements.
*   **Hanken Grotesk** handles the heavy lifting of consumer rights information. It is clean and modern, ensuring that legal text remains legible during high-energy interactions.
*   **Space Mono** is used for "System Data"—ticket numbers, refund amounts, countdown timers, and technical labels—giving the UI a "computer readout" feel.

For mobile, headlines should aggressively scale down to prevent text wrapping that breaks the "impact" of the bold font choice.

## Layout & Spacing

This design system uses a **Fluid Grid** with chunky, generous spacing. The layout is structured around a 12-column grid for desktop and a 4-column grid for mobile.

*   **Rhythm:** Based on an 8px square grid. All components and gaps must be multiples of 8.
*   **Boss View:** Centers the primary "Boss" (the corporation/issue) in a large central stage, with utility "Player Stats" (user data) docked in sidebars or bottom "Controller" panels.
*   **Adaptation:** On mobile, the "Controller" panel pins to the bottom of the viewport, ensuring that primary action buttons (like "Submit Claim") are always within thumb-reach, mimicking handheld gaming devices.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Glassmorphism**, rather than traditional soft shadows.

*   **Background:** Solid Midnight Navy.
*   **Cards/Surfaces:** Semi-transparent Midnight Navy (80% opacity) with a 16px backdrop blur and a 1px "Neon Glow" border using the Primary or Secondary colors.
*   **Active Elements:** Elements "lift" by increasing the brightness of their neon border and increasing the opacity of the glass background.
*   **Shadows:** When used, shadows are "Hard" (0 blur) and offset by 4px or 8px (e.g., a "Black" shadow offset to create a 3D blocky effect), reinforcing the retro arcade feel.

## Shapes

The shape language is **Rounded** (0.5rem base), creating a "friendly but firm" feel that avoids the corporate rigidity of sharp corners or the "childish" look of full pill-shapes.

*   **Buttons:** Standard 8px radius, but with a 4px bottom-border "thickness" to make them look like physical arcade buttons.
*   **Input Fields:** Consistent 8px radius with a heavy 2px stroke.
*   **Progress Bars:** Fully rounded (pill-shaped) to represent health bars or loading sequences.

## Components

### Buttons
Primary buttons use the "Arcade Press" style: a solid block of Primary Blue with a darker 4px bottom border. On hover, the button shifts down 2px. On click, it shifts down 4px (flattening the shadow).

### Chips (Power-Ups)
Used for status tags (e.g., "In Progress," "Escalated"). These use **Space Mono** and have a low-opacity fill of the color-category with a high-intensity neon border.

### Progress / Health Bars
Consumer rights progress is tracked via "Health Bars." Use a gradient from Tertiary Pink to Primary Blue to show the shift from "Fight" to "Resolved."

### Input Fields
Dark backgrounds with a 2px Primary Blue border. Focus state triggers a secondary "glow" effect (box-shadow with 0 blur, 8px spread, low opacity).

### Cards
Cards are "Console Panels." They feature a header area with a **Label-Mono** tag and a main body area. Borders are always visible and slightly thicker (2px) than standard web conventions.

### Dialogue Boxes
Consumer advocacy tips should appear in "RPG-style" text boxes at the bottom of the screen, using a monospaced font and a small blinking cursor to indicate more information is available.