---
name: Kinetic Tactile
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#c6c7c1'
  on-secondary: '#2f312d'
  secondary-container: '#4a4c48'
  on-secondary-container: '#bbbcb7'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#e3e3dd'
  secondary-fixed-dim: '#c6c7c1'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#464743'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
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
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-gap: 12px
---

## Brand & Style
The design system is built for a high-energy, chaotic browser game environment. It balances "Modern Indie" aesthetics with extreme usability. The brand personality is playful, irreverent, and physically present. 

The style is **Bold & Tactile**, merging elements of **Brutalism** (thick strokes, high contrast) with **Neomorphism** (physical depth) and **Minimalism** (clean spatial distribution). Every UI element is designed to feel like a physical object on a surface—heavy, clickable, and responsive. The interface should evoke a "game-room" atmosphere where digital components have weight and friction.

## Colors
The palette is built on high-contrast functionality to maintain legibility during fast-paced gameplay.

- **Primary (Electric Lime):** Used exclusively for calls-to-action, active states, and critical game information. It should vibrate against the dark background.
- **Secondary (Off-White):** Used for primary surfaces, cards, and modal backgrounds to create a "printed" feel.
- **Tertiary/Neutral (Deep Charcoal):** The foundation of the app. The "Canvas" is `#121212`, while container backgrounds use `#1A1A1A` to provide subtle depth before applying physical shadows.

## Typography
The typography strategy uses a "Chunky & Precise" hierarchy. 

**Bricolage Grotesque** provides the character; its quirky, rounded terminals feel experimental and high-energy. Use this for all headers and "Big Numbers." **Plus Jakarta Sans** handles the heavy lifting for descriptions and settings, offering a soft but clean reading experience. **Space Mono** is used for technical data, timers, and metadata to reinforce the "game-engine" aesthetic.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for the central game lobby and a **Fluid Layout** for the in-game HUD.

The spacing rhythm is based on an **8px base unit**. To emphasize the "Shelf" theme, elements are often stacked with tight `stack-gap` (12px) values to feel packed together. 
- **Desktop:** 12-column grid, max-width 1440px, centered.
- **Mobile:** 4-column grid, full-width. 
- **Reflow:** In-game cards should stack vertically on mobile but span 3-columns on desktop to maximize horizontal "shelf" space.

## Elevation & Depth
Elevation is expressed through **Hard Physicality** rather than realistic lighting. 

- **The "Heavy Drop" Shadow:** Instead of soft blurs, use 100% opacity shadows with a 4px to 8px offset (e.g., `4px 4px 0px #000000`). This creates a sticker-like or wooden-block effect.
- **Thick Borders:** All primary containers and buttons must have a 2px or 3px solid stroke. On light surfaces, use the Deep Charcoal color for the stroke.
- **Pressed States:** When an element is active or clicked, it should translate (move) +4px X and +4px Y, while its shadow disappears, simulating a physical button being pushed into the surface.

## Shapes
The shape language is "Friendly-Industrial." The `rounded-lg` (1rem) setting is the standard for cards and main UI blocks. This softens the aggressive high-contrast colors and thick borders, making the game feel accessible. Smaller elements like chips or input toggles use `rounded-xl` (1.5rem) to differentiate them from structural layout blocks.

## Components
- **Buttons:** Primary buttons use the Electric Lime background with a 3px Black border and a 4px Black hard shadow. Text is uppercase Space Mono.
- **Cards (The "Shelves"):** Off-white background, 2px charcoal border. Content inside uses a "tight-packed" layout.
- **Chips:** Monospaced text inside pill-shaped containers. Used for player status (e.g., "Hiding", "Sprinting").
- **Input Fields:** Deep charcoal background with an Off-white border. The cursor and focus state utilize the Electric Lime primary color.
- **Lists:** Items are separated by heavy 2px horizontal lines. Hovering over a list item triggers a slight tilt (2-degree rotation) to enhance the playful, experimental vibe.
- **HUD Gauges:** Horizontal bars with no roundedness on the internal fill, but fully rounded containers, creating a "liquid in a tube" look.