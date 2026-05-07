---
name: Vibe Check
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#564051'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#896f82'
  outline-variant: '#ddbed2'
  surface-tint: '#ab00a1'
  primary: '#a7009d'
  on-primary: '#ffffff'
  primary-container: '#d100c5'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffaced'
  secondary: '#006875'
  on-secondary: '#ffffff'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#821dda'
  on-tertiary: '#ffffff'
  tertiary-container: '#9c42f4'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd7f2'
  primary-fixed-dim: '#ffaced'
  on-primary-fixed: '#390035'
  on-primary-fixed-variant: '#83007b'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#efdbff'
  tertiary-fixed-dim: '#dcb8ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6700b5'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  verdict-card:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.0'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Spline Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 20px
  card-gap: 16px
  section-padding: 40px
---

## Brand & Style

This design system is built on a "Digital Realism" philosophy—merging the hyper-aesthetic world of social media filters with the raw necessity of dating safety. The brand personality is "The Filter-Free Bestie": honest, witty, and unapologetically bold. It aims to evoke a sense of playful empowerment rather than fear, turning a safety check into a shareable social moment.

The visual direction combines **Glassmorphism** and **Tactile High-Contrast** styles. It utilizes depth through translucent, glossy surfaces and vibrant background blurs, anchored by massive, high-impact typography. The aesthetic is mobile-first, designed to feel native to a smartphone screen with fluid transitions and thumb-friendly interactions.

## Colors

The palette is anchored by **Electric Pink** and **Cyber Blue**, creating a high-energy tension that feels modern and "always-on." **Soft Violet** acts as a bridge for gradients and secondary actions, while **Crisp White** provides the necessary canvas for readability. 

Surface colors are rarely flat; they should utilize semi-transparent whites (20-60% opacity) over moving gradient backgrounds to achieve a "frosted glass" look. Status colors for verdicts should be exaggerated: a "Catfish" alert uses a vibrating red-to-orange gradient, while a "Verified" state uses a lush, glowing emerald.

## Typography

This design system uses **Epilogue** for its distinctive, editorial weight in headlines, creating an authoritative yet stylish voice. **Be Vietnam Pro** provides a warm, contemporary feel for body copy, ensuring the "cheeky" personality remains approachable. **Spline Sans** is reserved for labels and interactive elements to maintain high energy.

Typography should frequently use "knockout" styles (transparent text over a gradient) or heavy dropshadows to pop against busy, glassmorphic backgrounds.

## Layout & Spacing

The layout is a **fluid, mobile-centric grid**. It avoids rigid desktop structures in favor of a single-column stack that expands gracefully. Content is housed in cards that use dynamic padding based on the device width, ensuring that "verdict cards" always feel like physical objects you could swipe.

Rhythm is maintained through an 8px base unit. Margins are generous at the edges (20px) to prevent the high-contrast elements from feeling cramped, allowing the "glow" effects of buttons and cards room to breathe.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Physical Stacking**. 

1.  **The Base:** A soft, blurred gradient background.
2.  **The Floor:** Semi-transparent containers with a `backdrop-filter: blur(20px)` and a 1px inner white border to simulate glass edges.
3.  **The Float:** Interaction elements (buttons, stickers) use vibrant ambient shadows tinted with the primary color (Electric Pink) to appear as if they are hovering.
4.  **Micro-animations:** Hovering or tapping an element triggers a `scale(1.05)` transform and an increased outer glow, mimicking a tactile response.

## Shapes

The shape language is "Squishy & Friendly." The system defaults to **Rounded (0.5rem)** for small UI components like inputs and chips, while primary containers and Verdict Cards use **Rounded-XL (1.5rem)** to emphasize the "dating app card" feel. 

"Authenticity Stickers" are the exception—they use a mix of perfect circles and "scalloped edge" badge shapes to look like physical rewards or warnings slapped onto the screen.

## Components

**Verdict Cards**
The centerpiece of the system. These use heavy rounded corners, a subtle inner glow, and house the "Authenticity Stickers." They should be designed to be "memeable"—ready for a screenshot. Typography on these cards is massive and centered.

**Authenticity Stickers**
Badge-like elements (e.g., "100% Real," "Filter Heavy," "Suspiciously Hot") that tilt at a slight angle (-3 to +3 degrees) to feel like they were manually placed. They use high-contrast backgrounds and bold Spline Sans labels.

**Tactile Buttons**
Buttons are glossy and use the `glossy-main` gradient. They feature a "pressed" state where the inner shadow flips to create a physical indentation effect. 

**Photo Upload Field**
A large, dashed-border drop zone that transforms into a glowing, glassmorphic preview once a photo is selected.

**Glow-Inputs**
Text fields are transparent with a 1px white border. Upon focus, the border glows Cyber Blue and the label "pops" out of the frame into a floating sticker.