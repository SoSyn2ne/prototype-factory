---
name: Escape Route
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#57423b'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#8b7169'
  outline-variant: '#dec0b6'
  surface-tint: '#a43c12'
  primary: '#a43c12'
  on-primary: '#ffffff'
  primary-container: '#ff7f50'
  on-primary-container: '#6c2000'
  inverse-primary: '#ffb59c'
  secondary: '#586062'
  on-secondary: '#ffffff'
  secondary-container: '#dae1e3'
  on-secondary-container: '#5d6466'
  tertiary: '#006970'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b5c0'
  on-tertiary-container: '#004145'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#380c00'
  on-primary-fixed-variant: '#822800'
  secondary-fixed: '#dde4e6'
  secondary-fixed-dim: '#c1c8ca'
  on-secondary-fixed: '#161d1f'
  on-secondary-fixed-variant: '#41484a'
  tertiary-fixed: '#7af4ff'
  tertiary-fixed-dim: '#4dd9e4'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-xl:
    fontFamily: Anybody
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  ui-button:
    fontFamily: Anybody
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.02em
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  border-width-thick: 3px
  border-width-thin: 1.5px
---

## Brand & Style
The design system is built on a narrative of "Tactical Empathy." It acknowledges the exhaustion of digital dating loops (the "burnout") and provides a high-energy, directional path toward physical community. The style is **High-Contrast / Bold** with a **Brutalist** edge, utilizing heavy strokes and vibrant accents to simulate the urgency of a rescue map. 

The UI should feel less like a social network and more like a field guide or a logistics tool. It uses intentional "roughness"—thick borders, offset shadows, and large-scale typography—to break away from the overly-polished, sterile aesthetic of traditional dating apps. The goal is to evoke a sense of movement, clarity, and optimistic action.

## Colors
The palette is dominated by a "Paper White" neutral base to mimic physical maps, contrasted against "Asphalt" dark greys for maximum legibility. 

- **Primary (Vibrant Coral):** Reserved strictly for the "Escape Path"—primary CTAs, current location markers, and active route highlights.
- **Secondary (Asphalt):** Used for heavy borders, primary headers, and iconography.
- **Neutral (Bone/Off-white):** The background layer for all screens to reduce eye strain compared to pure white.
- **Support Colors:** A tactical green is permitted only for "Success" states or "Open Community" indicators.

## Typography
This design system employs a high-contrast typographic pairing to reinforce the "Route Planner" aesthetic.

- **Headlines:** Uses **Anybody**. It is expressive and variable, intended to feel loud and directive. Large headlines should use tighter tracking to create a "blocky" feel.
- **Body:** Uses **Work Sans**. A reliable, neutral sans-serif that ensures long-form empathetic content or instructions are easy to digest.
- **Metadata/Labels:** Uses **Space Mono**. This monospaced font is used for "coordinates," time stamps, and map data to provide a technical, navigational feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy that mimics a folded map. 
- **Desktop:** A 12-column grid with substantial side margins to keep the "route" centered and focused.
- **Mobile:** A 4-column grid. Components should frequently bleed to the edge of the screen or use heavy 3px borders to define their own boundaries.
- **The "Route" Line:** A persistent visual element (the Coral accent) should connect various UI components vertically, guiding the user through the "escape" process.

## Elevation & Depth
This design system rejects soft shadows in favor of **Bold Borders** and **Hard Offset Shadows**. 
- **Surface Level:** All cards sit on the Neutral base with a 3px solid Asphalt border.
- **Active State:** When an element is focused or "elevated," it does not use a blur. Instead, it uses a solid "drop-block" shadow (4px x 4px) in Coral or Asphalt.
- **Stacking:** Layers are separated by thick lines. Use "paper-fold" dividers (zigzag lines) to separate sections of a long scroll, reinforcing the map metaphor.

## Shapes
The shape language is **Sharp (0)**. Everything in this design system uses 90-degree angles to maintain a brutalist, blueprint-like quality. 

- **Exceptions:** Only the "Location Pins" and "User Avatars" may use a circle to denote human elements within the rigid mechanical grid.
- **Connectors:** Use 45-degree angled corners for decorative elements or "directional" buttons to suggest movement.

## Components

### Energetic Cards
Cards are the primary container. They must feature a 3px solid Asphalt border. For "Conversation Openers," the card header should be inverted (Coral background with Asphalt text) to grab immediate attention.

### Escape Buttons
Buttons are rectangular and large. 
- **Primary:** Coral background, Asphalt text, 3px border, and a hard 4px black offset shadow that disappears when "pressed" (active state shift).
- **Secondary:** White background, Asphalt text, 3px border.

### Map-Inspired Toggles
Switching between "Map View" and "List View" should resemble a physical toggle switch or a segmented control with high-contrast fills. Use icons that resemble topographical map symbols.

### Conversation Opener Cards
Specialized cards featuring "Icebreaker" text in the Display font. These cards use a "torn edge" CSS mask or a zigzag border bottom to look like a ticket or a removable tab.

### Navigation Steppers
Rather than dots, use a "Path Indicator"—a solid Coral line that connects numbered nodes (1, 2, 3), representing the stages of the "Escape."