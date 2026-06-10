---
name: Border Panic
colors:
  surface: '#121412'
  surface-dim: '#121412'
  surface-bright: '#383a37'
  surface-container-lowest: '#0d0f0d'
  surface-container-low: '#1a1c1a'
  surface-container: '#1e201e'
  surface-container-high: '#292a28'
  surface-container-highest: '#333533'
  on-surface: '#e2e3df'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e2e3df'
  inverse-on-surface: '#2f312e'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#ffffff'
  on-secondary: '#353100'
  secondary-container: '#f5e700'
  on-secondary-container: '#6d6600'
  tertiary: '#eefbff'
  on-tertiary: '#00363f'
  tertiary-container: '#8ceaff'
  on-tertiary-container: '#006a7a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#f5e700'
  secondary-fixed-dim: '#d7ca00'
  on-secondary-fixed: '#1f1c00'
  on-secondary-fixed-variant: '#4d4800'
  tertiary-fixed: '#a5eeff'
  tertiary-fixed-dim: '#00daf8'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#121412'
  on-background: '#e2e3df'
  surface-variant: '#333533'
typography:
  display-lg:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  data-point:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 14px
spacing:
  unit: 4px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-tight: 4px
  stack-loose: 24px
---

## Brand & Style
The design system is built on "Tournament Kineticism"—a style that blends the high-stakes urgency of international travel with the electric energy of a global sporting event. It targets a competitive, mobile-first audience that thrives on achievement and collection.

The aesthetic is a hybrid of **Brutalism** and **Tactile Collectibles**. It moves away from safe, corporate whitespace in favor of high-density layouts, thick strokes, and "sticker" iconography. Every interface element should feel like a physical object: a stamped visa, a laminated field pass, or a digital trading card. The goal is to transform the anxiety of border clearance into the dopamine hit of "clearing a level" and earning a trophy.

## Colors
The palette uses a high-contrast dark mode foundation to allow vibrant tournament colors to "pop" like stadium lights against a night sky.

- **Stadium Green (Primary):** Used for "Clearance" states, progress bars, and primary action buttons. It represents the pitch and the go-ahead.
- **Tournament Yellow (Secondary):** Used for warnings, pending status, and highlighting "Collectible" data. It evokes the yellow card penalty and golden trophies.
- **Celebratory Cyan (Tertiary):** Used for digital accents, scanning animations, and premium "VIP Pass" tiers.
- **Emergency Red:** Reserved strictly for "Denied" states, expired documents, and critical errors.
- **Pitch Black (Neutral):** A deep, slightly green-tinted black (#121412) serves as the primary surface color to maintain depth without feeling flat.

## Typography
The typography strategy mimics sports broadcasting and technical travel documents.

- **Headlines:** Uses **Anton**. It must always be uppercase. Its condensed, heavy nature creates an immediate sense of urgency and "broadcast" authority.
- **Body & Data:** Uses **Archivo Narrow**. Its condensed proportions allow for high-density information display (critical for passport numbers and flight data) without sacrificing legibility.
- **Technical Labels:** Uses **JetBrains Mono**. This monospaced font is used for secondary metadata, timestamps, and "System Logs" to reinforce the "scanning" and "verification" narrative of the app.

## Layout & Spacing
This design system rejects fluid, airy layouts in favor of a **Modular Grid** that feels like a sheet of uncut trading cards.

- **The Pass-Card Model:** Content is grouped into distinct "Passes" (cards) that occupy specific grid cells. 
- **Density:** Spacing is tight. Use `stack-tight` (4px) for related data points (e.g., Label + Passport Number) and `stack-loose` (24px) to separate major document sections.
- **Breakpoints:** 
  - **Mobile:** Single column, cards span full width minus 16px margins.
  - **Desktop:** A 12-column grid where cards snap to 3 or 4 column spans, creating a "dashboard" that looks like a mission control center.

## Elevation & Depth
Depth is not created with soft shadows, but through **Hard-Edge Offsets** and **Layered Strokes**.

- **The "Sticker" Lift:** Elements do not "float" via blurs. Instead, they use a solid 4px black offset to the bottom-right, creating a 3D "pop-out" effect common in street art and collectible stickers.
- **Strokes as Depth:** All primary containers must have a minimum 2px solid border. Use the `secondary_color` for active/selected items and `primary_color` for cleared items.
- **Scanning Overlays:** Use a semi-transparent scan-line pattern (1px horizontal lines) over background elements to create a sense of looking through a digital terminal.

## Shapes
The shape language is **Sharp (0)**. Everything is angular and precise, mirroring the cut edges of physical tickets and ID cards. 

To introduce variety, use **Diagonal Corner-Cuts** (dog-ears) on cards to simulate "clipped" tickets. Decorative "punch holes" can be used at the top or sides of cards to reinforce the physical "pass" metaphor.

## Components
- **Action Buttons:** Large, rectangular, with a 2px black inner border and a 4px hard-drop shadow. On hover/press, the shadow should disappear as the button "pushes" into the screen.
- **The Clear-Pass Card:** The central UI element. It features a "Status Header" (e.g., PENDING in Yellow, CLEARED in Green). Use a monospace font for all travel data within the card.
- **Holographic Chips:** Used for "Earning" tags. These use a CSS linear gradient of Cyan, Yellow, and Green at a 45-degree angle to simulate a reflective security hologram.
- **Input Fields:** Thick black borders with "Label Tabs" that sit on top of the border line. Use JetBrains Mono for the input text to make it feel like a typed form.
- **Verification Stamp:** A decorative component that appears over a card once a document is cleared. It should be rotated at a slight angle (-15deg) and use a distressed, high-contrast texture to look like an ink stamp.
- **Progress Trackers:** Styled as a "Pitch Map." The user's progress is a bright Cyan line moving across a green grid from "Entry" to "The Final."