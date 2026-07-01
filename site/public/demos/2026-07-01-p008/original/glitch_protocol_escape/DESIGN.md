---
name: Glitch Protocol Escape
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393d'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#2a2a2e'
  surface-container-highest: '#353439'
  on-surface: '#e4e1e7'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e7'
  inverse-on-surface: '#303034'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#f5f5f5'
  on-tertiary: '#2f3131'
  tertiary-container: '#d9d9d9'
  on-tertiary-container: '#5d5f5f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e5e1e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131317'
  on-background: '#e4e1e7'
  surface-variant: '#353439'
typography:
  display-arcade:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  script-card-title:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
  body-main:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  status-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
spacing:
  base: 4px
  unit-1: 4px
  unit-2: 8px
  unit-4: 16px
  unit-8: 32px
  unit-16: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The brand personality is high-stakes, satirical, and urgent. It sits at the intersection of a high-end SaaS tool and a 1980s cyberpunk arcade game. The target audience consists of frustrated consumers and developers navigating "AI hell"—endless loops of unhelpful chatbots. 

The design style is **Playful-Experimental with a Brutalist edge**. It utilizes "The Void"—a deep, dark canvas—to represent the infinite loop of automated support, while "The Escape" is signaled through high-frequency electric accents. The emotional response should be one of "victorious frustration"—acknowledging the annoyance of the system while providing a visceral, gamified path to freedom. Visuals should feel intentional, raw, and high-contrast.

## Colors
This design system uses a "Terminal-Void" palette. 
- **The Void (Secondary/Neutral):** Deep charcoal (#121214) and slightly lifted grays (#1E1E22) form the background layers, creating a sense of being "inside the machine."
- **The Escape (Primary):** Neon Cyan (#00F0FF) is used exclusively for interactive elements, successful pathways, and "human" connections.
- **The Script (Tertiary):** Pure White (#FFFFFF) is reserved for high-readability text panels and critical information.
- **The Glitch (Alert):** A piercing Magenta/Red (#FF0055) is used for "Time Lost" or "Money Wasted" metrics to heighten the sense of urgency.

## Typography
Typography creates a tension between "Human" and "Machine." 
- **Headlines:** Space Grotesk provides a technical but expressive geometric feel. For major titles, use "display-arcade" with tight tracking to mimic retro game title screens.
- **Body:** Geist is used for all "Script Cards" and instructional text. It is ultra-clean, ensuring that even complex instructions are legible under the "pressure" of the UI.
- **Labels:** JetBrains Mono is used for all metadata, progress metrics, and button labels to reinforce the technical/arcade theme. All labels should be uppercase to maintain a "command line" aesthetic.

## Layout & Spacing
The layout follows a **Rigid Grid** model. Elements should feel "locked" into place, mimicking the structured nature of an arcade cabinet or a terminal.

- **Grid:** Use a 12-column grid for desktop with fixed 24px gutters. 
- **The Escalation Path:** This primary user journey should be centered, utilizing a maximum width of 800px to keep the focus sharp and "narrow-minded" like an escape mission.
- **Spacing Rhythm:** Use a strict 4px base unit. Component internal padding should be generous (unit-8 or unit-16) to contrast with the "cramped" feeling of typical bot interfaces.

## Elevation & Depth
Depth is created through **High-Contrast Outlines** rather than soft shadows. 
- **Surface Tier 1:** The base "Void" (#121214).
- **Surface Tier 2:** "Panels" (#1E1E22) with a 1px solid white or primary-colored border.
- **The "Active" State:** Elements that are interactive do not lift; they glow. Use a 0px blur, 4px spread outer glow (drop-shadow) using the primary neon color to indicate "Power On."
- **Backdrop:** Use a faint scanline overlay (1px horizontal lines with 10% opacity) across the entire UI to reinforce the arcade screen texture.

## Shapes
This design system utilizes **Sharp (0px)** roundedness. Every element—buttons, cards, and input fields—must have hard 90-degree corners. This evokes a sense of early computing and industrial precision. For "Health Meters" or progress bars, use segmented blocks rather than smooth continuous fills to maintain the "pixelated" arcade feel.

## Components
- **Health Meters (Progress Bars):** Used to track "User Patience" or "Money Wasted." These are segmented into 10 blocks. As the value decreases, segments disappear with a "flicker" animation. Color shifts from Primary Cyan to Alert Magenta as the meter empties.
- **Trigger Cards:** Large, high-contrast panels containing the "Escape Phrases" (e.g., "TALK TO AGENT"). On hover, the border thickness increases from 1px to 3px and the text jitters slightly.
- **Action Buttons:** Large, rectangular blocks. They use a "pressed" state where the element shifts 2px down and 2px right, mimicking a physical arcade button.
- **Input Fields:** Styled as "Command Prompts." They feature a blinking underscore cursor and a prefix indicating the current "Level" (e.g., `LVL1_REASON > _`).
- **Escalation Path:** A vertical timeline component where completed steps turn Primary Cyan and the current step has a "Scanline" pulsing effect.
- **Terminal Alerts:** Small, floating toasts that appear in monospaced font, styled like system log errors, providing "Pro-Tips" for bypassing specific IVR systems.