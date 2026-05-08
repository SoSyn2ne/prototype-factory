---
name: The Design System
colors:
  surface: '#111417'
  surface-dim: '#111417'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#191c1f'
  surface-container: '#1d2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#323539'
  on-surface: '#e1e2e7'
  on-surface-variant: '#e5bcc5'
  inverse-surface: '#e1e2e7'
  inverse-on-surface: '#2e3134'
  outline: '#ac878f'
  outline-variant: '#5c3f46'
  surface-tint: '#ffb1c4'
  primary: '#ffb1c4'
  on-primary: '#65002e'
  primary-container: '#ff4a8d'
  on-primary-container: '#590028'
  inverse-primary: '#ba005b'
  secondary: '#ffffff'
  on-secondary: '#003737'
  secondary-container: '#00fbfb'
  on-secondary-container: '#007070'
  tertiary: '#d7ca00'
  on-tertiary: '#353100'
  tertiary-container: '#b9ae00'
  on-tertiary-container: '#454000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e1'
  primary-fixed-dim: '#ffb1c4'
  on-primary-fixed: '#3f001a'
  on-primary-fixed-variant: '#8f0044'
  secondary-fixed: '#00fbfb'
  secondary-fixed-dim: '#00dddd'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#f5e700'
  tertiary-fixed-dim: '#d7ca00'
  on-tertiary-fixed: '#1f1c00'
  on-tertiary-fixed-variant: '#4d4800'
  background: '#111417'
  on-background: '#e1e2e7'
  surface-variant: '#323539'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 90px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1200px
---

## Brand & Style

This design system is engineered to capture the high-stakes, adrenaline-fueled chaos of modern ticket buying. The brand personality is **Experimental, High-Energy, and Unapologetic**, leaning into the collective trauma of "Sold Out" screens with a playful, self-deprecating wit.

The visual style is a fusion of **Neo-Brutalism and Stadium Skeuomorphism**. It utilizes raw, high-contrast layouts reminiscent of 90s gig posters and DIY zines, layered with physical metaphors like perforated ticket edges and thermal-printed textures. The UI should feel like a living concert venue—dark, vibrating with light, and slightly overwhelming, mirroring the emotional volatility of a fan who just missed the front row.

## Colors

The palette is anchored in **Arena Night**, a deep, infinite navy-black that provides a high-contrast stage for neon accents. 

- **Electric Pink (Primary):** Used for the most urgent actions and "High Anxiety" states. It represents the heart of the fandom.
- **Cyan Glow (Secondary):** Used for "Time Machine" navigational elements and digital success states.
- **Warning Yellow (Tertiary):** Used for alerts, countdowns, and "FOMO" triggers.
- **Surface Accents:** Use subtle shifts in the neutral base to create "aisle" and "row" hierarchies. Avoid soft grays; prefer deep saturated blues for containers.

## Typography

Typography in this design system is loud and functional. 

- **Display & Headlines:** We use **Anton** for its aggressive, condensed, and cinematic presence. Headlines should be treated like concert poster titles—stacked, tightly kerned, and often set in all-caps to convey urgency.
- **UI Elements:** **Space Grotesk** provides a technical, slightly quirky feel that suits the "Time Machine" narrative while maintaining excellent readability during frantic interactions.
- **Data & Metadata:** **JetBrains Mono** is utilized for ticket serial numbers, prices, and time-stamps to evoke a "thermal print" or ticket-dispenser aesthetic.

## Layout & Spacing

The layout follows a **structured 12-column fluid grid** that occasionally "glitches" or breaks alignment to emphasize the chaotic mood. 

Spacing is tight and rhythmic. Use a 4px baseline unit. In "high stress" areas (like the Regret Meter), reduce gutters to create a sense of compression. In "recovery" areas, expand the white space (or rather, "black space") to allow the user to breathe. Use heavy, intentional padding within ticket cards to mimic the physical layout of real-world admission passes.

## Elevation & Depth

This design system rejects soft, natural shadows in favor of **High-Contrast Bold Borders** and **Neon Glows**. 

- **Hard Shadows:** Use 100% opaque, 4px offset shadows in Electric Pink or Cyan Glow to create a "sticker" effect.
- **Neon Diffusion:** For active "Time Machine" states, apply a heavy backdrop blur combined with an outer glow in the primary accent color to simulate the light of a stadium screen.
- **Tonal Layering:** Use distinct levels of "Arena Night" (step-up increments of 2% lightness) to differentiate the background from ticket-stub containers.

## Shapes

The shape language is dominated by **Sharp Edges** and **Custom Masks**. 

The primary container is the **Ticket Stub**, which features a "perforated" aesthetic. This is achieved via a `mask-image` or `clip-path` that cuts circular notches into the sides of containers. 
- Use 0px border-radius for most elements to maintain a raw, brutalist feel.
- Interactive buttons may use a "pill" shape only when they represent physical toggles or "meme stickers."
- Perforations should always align with the internal grid lines.

## Components

### Ticket Stub Cards
The foundational container. Must include a vertical or horizontal dashed line (the "tear line") and a notch on either side. Information should be divided into a "Main Event" section and a "Receipt" stub section.

### Anxiety & Regret Meters
Interactive gauges using dramatic linear gradients (from Cyan Glow to Warning Yellow to Electric Pink). The meter needle should be bold and chunky, vibrating or "shaking" via CSS animation as the regret value increases.

### Meme-Sticker Badges
Floating, high-rotation badges (e.g., "Verified Clown," "Sold Out Again," "I Survived the Queue"). These should have 2px solid white or yellow outlines and be placed at "random" slightly-offset angles over other components.

### Action Buttons
Large, full-width blocks with Anton typography. Use a "Pressed" state that shifts the hard shadow by 2px to simulate a physical button being mashed.

### Perforated Inputs
Form fields should appear as thermal-paper strips. Use a monospaced font for user entry to mimic a ticket printer's output.