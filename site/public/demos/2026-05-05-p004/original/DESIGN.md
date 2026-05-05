---
name: Repair Quote Boss Fight
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#baccb0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#85967c'
  outline-variant: '#3c4b35'
  surface-tint: '#2ae500'
  primary: '#efffe3'
  on-primary: '#053900'
  primary-container: '#39ff14'
  on-primary-container: '#107100'
  inverse-primary: '#106e00'
  secondary: '#ecb1ff'
  on-secondary: '#520070'
  secondary-container: '#d05bff'
  on-secondary-container: '#480063'
  tertiary: '#fff9f7'
  on-tertiary: '#522300'
  tertiary-container: '#ffd5be'
  on-tertiary-container: '#9e4900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#79ff5b'
  primary-fixed-dim: '#2ae500'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#095300'
  secondary-fixed: '#f9d8ff'
  secondary-fixed-dim: '#ecb1ff'
  on-secondary-fixed: '#320046'
  on-secondary-fixed-variant: '#75009e'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb68b'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#753400'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  battle-h1:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  battle-h2:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  math-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  math-body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  border-width: 4px
  shadow-offset: 8px
---

## Brand & Style

This design system is built on a high-stakes, "neo-brutalism meets 8-bit arcade" aesthetic. It transforms the mundane task of reviewing repair quotes into a gamified boss encounter, pitting the user (The Hero) against the "Repair Monster" (The Cost/Waste). The brand personality is aggressive, energetic, and slightly chaotic, designed to provoke an emotional response of urgency and triumph. 

The visual language draws heavily from retro fighting games—utilizing harsh contrasts, thick strokes, and vibrant "digital-poison" colors to keep users engaged in what would otherwise be a dry financial decision. The goal is to make the sustainable choice (repairing) feel like a "Level Up" and the wasteful choice (landfill) feel like a "Game Over."

## Colors

The palette is anchored in **Void Black**, providing a deep, infinite canvas that makes the high-luminance accent colors vibrate. 

- **Neon Green (Primary):** Used for "Victory" states, repair savings, and health bar replenishment. It represents life, sustainability, and "Player 1" success.
- **Electric Purple (Secondary):** Used for "Battle" elements, interactive UI components, and magical/mana-based stats. It provides the core arcade atmosphere.
- **Warning Orange (Tertiary):** Reserved for "Critical Hits," high repair costs, and landfill warnings. It serves as the primary alert color.
- **Void Black (Neutral):** The foundation for all backgrounds and the source of the heavy 4px+ borders and chunky shadows.

Background surfaces should remain dark to maintain the arcade cabinet feel, with interactive elements popping forward through high-saturation fills.

## Typography

This design system utilizes a dual-font strategy to balance thematic immersion with financial clarity.

**Space Grotesk** is the voice of the "Boss Fight." It should be used in all-caps for headlines, buttons, and "Battle" microcopy. Its geometric, technical nature mimics the feel of high-fidelity 8-bit displays.

**Inter** is the voice of reason. It is used for cost breakdowns, technical specifications, and fine print. The high readability of Inter ensures that even in a chaotic arcade environment, the user can clearly understand the financial impact of their decisions. 

Text within "Battle Cards" should use high-contrast color pairings (e.g., Neon Green text on Void Black backgrounds) to ensure maximum legibility.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model to mimic the constrained viewport of an arcade machine. The interface should feel packed and energetic, rather than spacious and airy.

- **The Grid:** A rigid 8px baseline grid governs all spacing. Gutters are intentionally wide (24px) to separate "Battle Cards" and ensure the thick 4px borders do not bleed together visually.
- **Rhythm:** Use "Chunky Spacing." Avoid subtle increments; if an element needs separation, use at least 16px or 24px.
- **Battle Containers:** All major content blocks must have a 4px solid Void Black border and a hard, non-diffused shadow offset by 8px.

## Elevation & Depth

Elevation in this design system is purely structural and physical, rejecting soft shadows or blurs.

1. **Hard Shadows:** Depth is conveyed by solid "Block Shadows" (100% opacity) in Void Black or Electric Purple. These should always be offset at a 45-degree angle (bottom-right).
2. **Layer Stacking:** Interactive elements (buttons, cards) "sink" when clicked or hovered by reducing the shadow offset and moving the element position by the same amount, creating a mechanical "button press" feel.
3. **No Gradients:** Depth should be achieved through color blocking and overlapping borders rather than lighting effects.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every element—cards, buttons, input fields, and status bars—must have 90-degree corners. This reinforces the 8-bit pixel aesthetic and the "unrefined" nature of neo-brutalism. 

**Exceptions:** 
- **Speech Bubbles:** Use sharp rectangles with a simple triangular "tail" added to the bottom or side. 
- **Status Bars:** The "fill" of a status bar should be comprised of discrete vertical blocks to mimic a pixelated charging meter.

## Components

- **Battle Cards:** These are the primary containers. They feature a thick 4px border, a hard shadow, and a "Header Label" in all-caps Space Grotesk.
- **Status Bars (HP/Mana):** Used to represent "Sustainability HP" or "Wallet Mana." These are horizontal bars with segmented fills. Use Neon Green for high HP and Warning Orange for critical "Game Over" territory.
- **Buttons:** Large, blocky, and tactile. They must have a 4px border and an 8px hard shadow. On `:active` states, the shadow disappears and the button shifts 4px down and 4px right.
- **Speech Bubbles:** Used for the "Repair Monster" to deliver taunts or for "Landfill Shame" microcopy. These should be Electric Purple with Void Black text.
- **Victory/Game Over States:** Full-screen overlays. Victory uses a "Screen Flash" of Neon Green with "K.O." style typography. Game Over uses Warning Orange stripes and glitch-effect icons.
- **Repair Monster Icons:** Expressive, blocky SVG illustrations representing the complexity of the quote.
- **Landfill Shame Icons:** A recurring "Trash Boss" icon that grows larger as the user selects less sustainable options.