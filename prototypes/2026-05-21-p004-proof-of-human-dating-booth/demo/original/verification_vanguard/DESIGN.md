---
name: Verification Vanguard
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#d4c0d7'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#303032'
  outline: '#9d8ba0'
  outline-variant: '#514255'
  surface-tint: '#ecb2ff'
  primary: '#ecb2ff'
  on-primary: '#520071'
  primary-container: '#bd00ff'
  on-primary-container: '#ffffff'
  inverse-primary: '#9900cf'
  secondary: '#ffffff'
  on-secondary: '#003828'
  secondary-container: '#36ffc4'
  on-secondary-container: '#007255'
  tertiary: '#ffb4a3'
  on-tertiary: '#630f00'
  tertiary-container: '#c65036'
  on-tertiary-container: '#fffeff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f8d8ff'
  primary-fixed-dim: '#ecb2ff'
  on-primary-fixed: '#320047'
  on-primary-fixed-variant: '#74009f'
  secondary-fixed: '#36ffc4'
  secondary-fixed-dim: '#00e1ab'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#00513c'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0600'
  on-tertiary-fixed-variant: '#86220c'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  headline-xl:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
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
  unit: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style

This design system centers on a **Tactile Experimental** aesthetic, reimagining the dating app experience as a high-fidelity physical booth. The brand personality is "Witty Guardian"—it is authoritative and transparent regarding human verification, yet maintains a cheeky, meta-commentary on digital dating culture. 

The UI should evoke the feeling of interacting with a premium, near-future hardware console. We utilize **Skeuomorphic Minimalism**: clean layouts punctuated by "squishy" physical metaphors, deep inset shadows, and vibrant digital readouts. The goal is to build trust through polished precision while keeping the user engaged with playful, reactive elements.

## Colors

The system uses a **Deep Dark** foundation to allow neon accents to vibrate.

- **Primary (Electric Purple):** Used for "Human Verified" status, primary actions, and brand-heavy moments.
- **Secondary (Neon Mint):** Reserved for "Success" states, biometric scan completions, and active status meters.
- **Tertiary (Warm Coral):** Used for highlights, playful alerts, and soft "Like" interactions to contrast the technical neons.
- **Surface Palette:** Layers of rich grays (#1A1A1E, #252529) are used to create the "booth" depth, ensuring high contrast against the neon accents.

## Typography

Typography is a clash between the avant-garde and the technical. 

- **Syne** provides an "Editorial-Experimental" vibe for headlines, appearing widest and boldest in verification headers.
- **Hanken Grotesk** handles the heavy lifting for profiles and chat, offering a professional yet contemporary feel.
- **JetBrains Mono** is used for "System Readouts"—biometric data, timestamps, and the "meta" commentary—giving the user the sense that they are looking at the booth's internal logic.

## Layout & Spacing

The layout follows a **Rigid Grid with Fluid Insets**. On desktop, we use a 12-column grid to organize "Console Modules" (cards). On mobile, the layout stacks into a single, focused stream of "Booth Actions."

Spacing is generous but intentional, emphasizing the containment of elements. Every module should feel like a physical component slotted into a dashboard. Gutters are kept tight (16px) to maintain the hardware aesthetic, while outer margins are large to allow the "booth" to breathe within the viewport.

## Elevation & Depth

Hierarchy is established through **Physical Layering**:
- **The Booth Shell:** The deepest layer, a subtle gradient of near-black.
- **Inset Modules:** Profile cards and inputs use `box-shadow: inset` to appear carved into the surface.
- **Interactive Controls:** Buttons and active chips use "Ambient Glow"—diffused shadows that take on the color of the element (e.g., a purple glow for a primary button), creating the effect of an illuminated hardware button.
- **Glass Overlays:** Modals use a high-blur (20px) backdrop to simulate a frosted acrylic screen lowered over the controls.

## Shapes

The design uses a **2XL Radius Strategy** for all major containers (24px/1.5rem) to ensure the booth feels approachable and safe ("Soft-Skeuomorphic"). 

Interactive elements like buttons and chips follow the `rounded-lg` (16px) standard. High-contrast borders (2px) are applied to all cards using a semi-transparent white (10% opacity) or the primary neon color when active, reinforcing the "manufactured" quality of the UI.

## Components

- **Buttons:** Large, tactile blocks with a 2px bottom "lip" to simulate physical depth. On press, the lip disappears (translate-y).
- **Verification Meters:** Modeled after analog VU meters or digital frequency bars, using Neon Mint to show "Humanity Percentage."
- **Input Fields:** Deep inset wells with JetBrains Mono placeholder text. Active states trigger a subtle outer glow in Electric Purple.
- **Status Chips:** Small, pill-shaped indicators with a "Pulse" animation to show real-time verification processing.
- **The "Proof" Card:** A signature component featuring the user's photo with a "Verified" watermark that reacts to the device's gyroscope (shimmer effect).
- **Microcopy Tooltips:** Small, monospaced pop-ups that provide cheeky context (e.g., "Scanning for bot-like behavior... none found. You're suspiciously charming.")