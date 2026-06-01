---
name: Glitch Receipt Neo-Brutalism
colors:
  surface: '#131410'
  surface-dim: '#131410'
  surface-bright: '#3a3935'
  surface-container-lowest: '#0e0e0b'
  surface-container-low: '#1c1c18'
  surface-container: '#20201c'
  surface-container-high: '#2a2a26'
  surface-container-highest: '#353530'
  on-surface: '#e5e2db'
  on-surface-variant: '#baccb0'
  inverse-surface: '#e5e2db'
  inverse-on-surface: '#31312c'
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
  tertiary: '#fffdcc'
  on-tertiary: '#323200'
  tertiary-container: '#e5e500'
  on-tertiary-container: '#656500'
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
  tertiary-fixed: '#eaea00'
  tertiary-fixed-dim: '#cdcd00'
  on-tertiary-fixed: '#1d1d00'
  on-tertiary-fixed-variant: '#494900'
  background: '#131410'
  on-background: '#e5e2db'
  surface-variant: '#353530'
typography:
  display-arcade:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  receipt-data:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  grid-margin: 24px
  gutter: 16px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

The design system establishes a high-energy, "playful-experimental" aesthetic that transforms the mundane act of reviewing service fees into a competitive arcade experience. The brand personality is irreverent, loud, and intentionally provocative, utilizing a "Neo-Brutalism" framework that rejects standard corporate polish in favor of raw, high-contrast interfaces.

The UI should evoke the feeling of a thermal printer gone haywire in a neon-lit arcade. Key visual drivers include heavy black borders, overlapping elements, and high-saturation accents that demand immediate attention. Every interaction should feel like a "win" or a "game over," making the receipt data feel like a high-score leaderboard rather than a financial statement.

## Colors

This design system utilizes a "High-Contrast Ink" palette. The foundation is built on **Ink-Blot Black** (#050505) for deep backgrounds and **Thermal Paper** (#F4F1EA) for content surfaces, mimicking the off-white texture of real-world receipts.

- **Neon Green (Primary):** Used for "Fairness" wins, health recovery, and success states.
- **Electric Purple (Secondary):** Used for brand accents, interactive elements, and "Boss Mode" highlights.
- **Warning Yellow (Tertiary):** Used for service fee alerts, critical data points, and "Danger" zones.
- **System Accents:** High-saturation reds and cyans are used sparingly for glitch effects and error states.

## Typography

The typography strategy relies on the friction between two worlds: the aggressive, condensed impact of **Anton** for arcade-style headings and the utilitarian, digital precision of **JetBrains Mono** and **Space Mono** for receipt data.

Headlines should always be uppercase to maintain a "shouting" arcade tone. For data-heavy sections, monospaced fonts ensure that columns of prices and percentages align perfectly, mimicking the output of a dot-matrix printer. Use tight line-heights for headlines to create a "blocked-in" look, and generous spacing for body text to maintain legibility against noisy backgrounds.

## Layout & Spacing

The design system uses a **Strict Grid** model that emphasizes the physical constraints of a receipt. On desktop, content is centered in a fixed-width "Paper Column" (max 600px) to simulate a scrolling receipt roll. On mobile, the layout is fluid but bound by 24px "Safe Zone" margins.

Layouts should favor vertical stacking. Avoid complex multi-column setups; instead, use horizontal "strips" that look like they could be torn off. Elements should occasionally break the grid with slight rotations (1-2 degrees) to mimic paper being fed through a printer unevenly.

## Elevation & Depth

Depth is conveyed through **Hard Shadows** and **Brutalist Layering** rather than realistic lighting. 

- **Level 0 (Floor):** Pure black (#050505).
- **Level 1 (Paper):** Thermal Paper (#F4F1EA) surfaces with no blur on shadows. Shadows are 100% opacity black, offset by 4px or 8px.
- **Level 2 (Interactive):** Elements like buttons use a "Skeu-Brutalist" approach—thick 2px black borders and an offset shadow that moves to 0px when "pressed" to simulate physical clicking.
- **Glitch Overlays:** Use semi-transparent scanline overlays (0.05 opacity) across the entire viewport to add texture and a "CRT" feel.

## Shapes

The shape language is strictly **Sharp (0px)**. All containers, buttons, and input fields must have hard 90-degree corners to reinforce the brutalist arcade aesthetic. 

The only exception to the sharp rule is the "Tear-Off" edge: use a repeated triangular clip-path or mask on the top and bottom of main containers to simulate perforated receipt paper. Use heavy 2px or 3px solid black strokes for all container outlines.

## Components

### Buttons & Controls
- **Arcade Buttons:** High-contrast background (Neon Green or Purple) with a 3px black border and a 4px hard black shadow. On hover, the shadow grows; on active/click, the button moves 4px down and right to "meet" the shadow.
- **Fairness Dials:** Large, circular components (the only round elements) that look like physical pressure gauges. Use a thick needle and segmented "warning" colors.

### Receipt Elements
- **Data Rows:** Use a dotted leader (e.g., Service Fee . . . . $5.00) to connect labels to values, using `Space Mono`.
- **Thermal Gradients:** Use a subtle vertical gradient on large paper surfaces to mimic the slight discoloration of aged thermal paper.

### Status & Feedback
- **Health Meters:** Progress bars are segmented into "blocks" rather than a smooth fill. A "Fairness Score" of 100% is full Neon Green; as the score drops (due to high fees), segments turn Yellow, then Red, and start to "flicker" via CSS animation.
- **Alerts:** Use "Warning" yellow background with a black-and-yellow striped "caution tape" border pattern.

### Cards
- **Roast Cards:** Every fee being "roasted" should appear on its own paper-textured card with a jagged, perforated edge at the bottom. These cards should stack vertically with slight overlaps.