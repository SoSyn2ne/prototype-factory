---
name: Seoul Rent Cliff Draft System
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
  on-surface-variant: '#e7bdb7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad8883'
  outline-variant: '#5d3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#ff5545'
  on-primary-container: '#5c0002'
  inverse-primary: '#c0000a'
  secondary: '#53e16f'
  on-secondary: '#003911'
  secondary-container: '#05b046'
  on-secondary-container: '#003a11'
  tertiary: '#adc6ff'
  on-tertiary: '#002e69'
  tertiary-container: '#4b8eff'
  on-tertiary-container: '#00285c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930005'
  secondary-fixed: '#72fe88'
  secondary-fixed-dim: '#53e16f'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#00531c'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004493'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.4'
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  border-width: 3px
  hard-shadow: 6px
---

## Brand & Style
The design system reflects the high-stakes, competitive nature of the Seoul housing market, blending the adrenaline of a sports draft with the grim reality of the "Rent Cliff." It targets the N-Po generation with a visual language that is both a critique of and a survival guide for the urban rental landscape.

The aesthetic is **Neobrutalist-Experimental**. It utilizes raw, unrefined structural elements, heavy black borders, and high-energy saturated colors to create a sense of urgency and "game-on" intensity. Surfaces are flat but layered, prioritizing information density and rapid decision-making. The goal is to evoke a "Mission Control" feeling for someone navigating Jeonse deposits and Wolse monthly burns.

## Colors
The palette is hyper-functional and semiotic, drawing directly from the anxieties and aspirations of Seoul renters:

- **Rent Pressure Red (#FF3B30):** Used for critical alerts, "Red Flag" warnings, and high-competition indicators.
- **Subsidy Green (#34C759):** Used for financial wins, "Subsidy Eligible" tags, and successful budget matches.
- **Jeonse Blue (#007AFF):** The color of stability and high-stakes deposits; used for primary actions and trusted data.
- **Caution Yellow (#FFCC00):** Used for "Near Cliff" warnings and mid-tier scarcity levels.
- **Deep Slate (#121212) & Surface (#1E1E1E):** A tech-forward, high-contrast background that makes the vibrant neobrutalist elements pop.

All components must use a solid black (#000000) for borders to maintain the Neobrutalist character.

## Typography
The typography system uses a "Power-Utility" pairing. 

**Space Grotesk** is used for headlines and display text to provide a technical, futuristic, yet slightly "off-kilter" personality. It should be set with tight tracking for a punchier look.

**Inter** handles the heavy lifting of property descriptions and roommate bios, ensuring maximum legibility during rapid scrolling.

**JetBrains Mono** is reserved for data-heavy elements like "Monthly Burn" calculations, square footage, and deposit ratios. It emphasizes the analytical, "draft-stats" nature of the application.

## Layout & Spacing
The layout is based on a **12-column rigid grid** for desktop and a **4-column grid** for mobile. Instead of soft margins, this system uses "Hard Breaks."

- **Trading Card Grid:** Properties and Roommate profiles are displayed in a card-based grid. Cards do not use fluid heights; they snap to a baseline grid to maintain a structured "deck" feel.
- **Gutters:** 16px gutters are mandatory, often filled with a 1px divider line to emphasize the "blueprint" or "dossier" look.
- **Safe Zones:** Large 40px margins on desktop provide breathing room for the high-intensity UI elements.

## Elevation & Depth
This design system rejects traditional shadows and blurs in favor of **Neobrutalist Hard-Drops**. 

- **Level 0:** The base background (#121212).
- **Level 1 (Cards/Buttons):** Surface (#1E1E1E) with a 3px black solid border.
- **Level 2 (Active/Hover):** The element shifts -4px / -4px on the X/Y axis, revealing a solid "hard shadow" in one of the brand colors (Red, Green, or Blue) depending on the context.
- **Tonal Layering:** Use high-contrast stroke widths instead of gradients to define boundaries.

## Shapes
Shapes are strictly **Sharp (0px)**. Every card, button, and input field must have 90-degree corners to reinforce the brutalist, "Draft Night" dossier aesthetic. 

The only exception is the "Draft Pick" status badge, which may use a 45-degree chamfered corner to resemble a physical ticket or tag, but never a curve.

## Components

### Trading Cards (Properties & Roommates)
Cards are the primary container. Every card must feature:
- A 3px black border.
- A "Status Ribbon" in the top right (e.g., "HIGH SCARCITY").
- A footer containing "Data Chips" (using JetBrains Mono).

### Draft Buttons
Buttons are oversized and high-contrast. 
- **Primary:** Jeonse Blue background, white text, black 3px border.
- **Danger (The Cliff):** Rent Pressure Red background.
- **Interaction:** On click, buttons should "depress" by removing the hard shadow and shifting 2px down.

### Deposit Risk Meter (Progress Bar)
A custom meter that moves from "Subsidy Green" to "Rent Pressure Red." The bar is segmented into blocks rather than a smooth gradient, resembling a vintage digital readout.

### Ranking Chips
Small, rectangular badges used for "Red Flags" or "Amenities."
- Red Flag: Black background, Red text, Red border.
- Amenity: Black background, Green text, Green border.

### Monthly Burn Splitter
An input group that uses a monospaced font to show real-time Wolse (rent) + Gwanlibi (maintenance fee) splits between roommates. It should look like a receipt or a financial ledger.