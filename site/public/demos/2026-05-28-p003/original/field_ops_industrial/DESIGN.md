---
name: Field-Ops Industrial
colors:
  surface: '#081425'
  surface-dim: '#081425'
  surface-bright: '#2f3a4c'
  surface-container-lowest: '#040e1f'
  surface-container-low: '#111c2d'
  surface-container: '#152031'
  surface-container-high: '#1f2a3c'
  surface-container-highest: '#2a3548'
  on-surface: '#d8e3fb'
  on-surface-variant: '#e0c0b1'
  inverse-surface: '#d8e3fb'
  inverse-on-surface: '#263143'
  outline: '#a78b7d'
  outline-variant: '#584237'
  surface-tint: '#ffb690'
  primary: '#ffb690'
  on-primary: '#552100'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#9d4300'
  secondary: '#ffe083'
  on-secondary: '#3c2f00'
  secondary-container: '#eec200'
  on-secondary-container: '#645000'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#ff6a64'
  on-tertiary-container: '#6c000b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#081425'
  on-background: '#d8e3fb'
  surface-variant: '#2a3548'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-xl:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  touch-target-min: 56px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  stack-gap: 1rem
---

## Brand & Style

The design system is engineered for high-stakes, high-temperature industrial environments. The aesthetic is **Utilitarian Brutalism**: a raw, functional approach that prioritizes rapid data ingestion and physical interaction over decorative flair. It is designed for field engineers and safety officers who operate in extreme conditions, often wearing protective gear or gloves.

The visual language communicates durability and urgency. Every element is oversized and high-contrast to ensure legibility under direct sunlight or within low-light industrial facilities. The system rejects "soft" corporate trends in favor of heavy strokes, rigid alignments, and a distinct lack of ambiguity. The goal is to evoke a sense of a digital tool that is as rugged as the hardware it monitors.

## Colors

The palette is rooted in industrial safety standards. The primary UI surface is **Rugged Slate (#1E293B)**, providing a low-glare, high-density foundation that makes active status colors "pop" with extreme clarity.

- **Alert Orange (#F97316):** Used for primary actions and critical UI affordances.
- **Warning Yellow (#FACC15):** Reserved for "Elevated" heat states and non-critical cautions.
- **Danger Red (#EF4444):** Exclusively for "Extreme" heat states, emergency stops, or hardware failures.
- **Normal State:** A vibrant green is introduced only for "All Clear" confirmations, though the UI primarily relies on the Rugged Slate to remain unobtrusive during standard operations.

Color is used functionally, not decoratively. Large blocks of color signify state changes that must be visible from a distance.

## Typography

This design system utilizes **Inter** for its exceptional legibility and systematic weight distribution. To ensure readability in vibrating or high-glare environments:

1.  **Weight as Hierarchy:** Use Bold (700) and ExtraBold (800) for all critical data points and headers.
2.  **Size Over Scalability:** Type sizes are intentionally larger than standard web patterns. The smallest allowable size for field-ops is 14px (used only for timestamps), with 18px being the standard for body text.
3.  **Uppercase Labels:** Use uppercase for all labels and button text to increase the visual footprint of the characters, making them easier to read at a glance.
4.  **Tight Tracking:** Headlines use slightly negative letter spacing to feel "dense" and impactful, like stamped metal.

## Layout & Spacing

The layout is built on a **Fluid Grid** with a strict "Glove-Friendly" constraint. 

- **The 56px Rule:** No interactive element (button, checkbox, toggle) shall have a hit area smaller than 56x56px. This accounts for physical protection gear and less precise touch input.
- **Spacing Rhythm:** A base-8 scale is used, but the minimum gap between interactive elements is 16px to prevent accidental triggers.
- **Vertical Stack:** Layouts should favor vertical scrolling and full-width "chunky" components over multi-column layouts, ensuring that field data is presented in a clear, linear sequence of operations.
- **Breakpoints:** 
    - Mobile (<600px): Single column, full-width actions.
    - Tablet/Desktop (>600px): 12-column grid with elements spanning 6 or 12 columns to maintain large tap targets.

## Elevation & Depth

To maintain the rugged aesthetic, the design system avoids soft, ambient shadows that look "ethereal." Instead, it uses **High-Contrast Outlines** and **Tonal Layering**:

- **Borders:** All containers and interactive elements use a minimum 2px solid border. Active elements use the Primary Orange for borders, while inactive containers use a lighter shade of the Rugged Slate.
- **Surface Tiers:** 
    - **Level 0 (Background):** Rugged Slate (#1E293B).
    - **Level 1 (Cards/Inputs):** A slightly lighter #334155.
    - **Level 2 (Modals/Pop-overs):** Lighter slate with a 4px "hard shadow" (100% opacity, no blur) in black to simulate a physical overlap.
- **Inverted States:** For extreme alerts, the background and foreground colors invert—using a Danger Red background with white or charcoal text—to force immediate attention.

## Shapes

The shape language is **Industrial Soft**. Elements use a 4px (0.25rem) corner radius. This prevents the UI from feeling "sharp" or fragile while maintaining a rigid, machined appearance. 

- **Buttons:** 4px radius, strictly rectangular appearance.
- **Status Pills:** 4px radius (never fully circular/pill-shaped).
- **Checkboxes:** Large 32px squares with 4px radius for easy toggling.
- **Input Fields:** Thick 2px borders with consistent 4px rounding.

## Components

### Chunky Buttons
Primary buttons are 56px tall, using the Alert Orange background and Bold Uppercase text. They feature a 2px inset border to give a "pressed" look when active.

### Large Checklists
Checklist items are designed as full-width cards. Tapping anywhere on the card toggles the state. Completion is marked by a heavy 4px border change and a large green checkmark.

### Proof-Oriented Cards
Every data card includes a mandatory **Timestamp Header**. These cards use a "monospaced" style for numerical data to ensure column alignment, reinforcing the "recorded data" nature of the board.

### Input Fields
Fields utilize large labels placed *above* the input area (never floating) to ensure the label remains visible while typing. Focus states are indicated by a 3px Warning Yellow border.

### Heat State Banners
A persistent top-bar or full-screen overlay that changes color based on the state:
- **Normal:** Slate/Neutral.
- **Elevated:** Yellow/Black text.
- **Extreme:** Red/White text with a pulsing animation.