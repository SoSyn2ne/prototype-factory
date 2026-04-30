---
name: Field Ops Design System
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#d1c6ab'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#9a9078'
  outline-variant: '#4d4632'
  surface-tint: '#eec200'
  primary: '#ffecb9'
  on-primary: '#3c2f00'
  primary-container: '#facc15'
  on-primary-container: '#6c5700'
  inverse-primary: '#735c00'
  secondary: '#b9c7df'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d1'
  tertiary: '#e6edff'
  on-tertiary: '#263143'
  tertiary-container: '#c6d1e9'
  on-tertiary-container: '#4f5a6e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe083'
  primary-fixed-dim: '#eec200'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  data-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-padding: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for high-stakes operational environments where clarity and speed of information retrieval are paramount. The brand personality is authoritative, utilitarian, and resilient, drawing inspiration from military command centers and emergency dispatch terminals.

The visual style follows a **Utility Brutalist** approach. It rejects decorative embellishments like soft shadows or gradients in favor of hard lines, high-contrast borders, and a modular layout. The interface is designed to feel like a piece of ruggedized field equipment—functional, indestructible, and optimized for low-light or high-stress scenarios.

## Colors

The palette is anchored in a deep "Tactical Slate" and "Stealth Grey" foundation to minimize eye strain and screen glare during field operations. 

- **Primary (Dispatch Yellow):** Used exclusively for interactive elements, primary call-to-actions, and active state indicators to ensure maximum visibility against the dark background.
- **Surface Tiers:** Backgrounds utilize a near-black neutral, while cards and containers use slate tones to create a clear visual hierarchy without the need for shadows.
- **Semantic States:** Practical Green is reserved for verified completion and "safe" status, while Urgent Red indicates immediate danger, scams, or drill failures. 
- **Borders:** All UI elements use a high-contrast stroke (1px to 3px) in either a muted slate for inactive states or the primary yellow for focus.

## Typography

The typography strategy prioritizes legibility and a technical aesthetic. **Space Grotesk** is used for headlines and labels to provide a geometric, machined feel reminiscent of technical manuals. **Inter** is utilized for body text to ensure maximum readability for long-form checklists or drill instructions.

For timestamps, coordinates, and countdown timers, a "data-mono" style using Space Grotesk with increased letter spacing is employed to mimic monospaced equipment readouts. All labels and secondary headers should be rendered in uppercase to reinforce the "official dispatch" tone.

## Layout & Spacing

This design system employs a **Fixed Grid** dispatch-board layout. The screen is treated as a dashboard of modular "tiles" or "panels" that do not shift or resize fluidly, ensuring that critical data points remain in consistent physical locations for muscle-memory navigation.

The layout uses a strict 4px baseline. Components are packed tightly to maximize information density while maintaining distinct separation through thick borders. Gutters are kept small (16px) to reinforce the rugged, compact nature of military hardware interfaces.

## Elevation & Depth

Depth is conveyed through **Bold Borders** and color stacking rather than shadows. 

- **Level 0 (Base):** Tactical dark grey (#0F172A).
- **Level 1 (Cards/Panels):** Slate containers (#1E293B) with a 2px solid border (#475569).
- **Level 2 (Active/Interactive):** Elements that are being interacted with use a Dispatch Yellow border (#FACC15).
- **Inset Depth:** To indicate input fields or "pressed" states, use a darker internal background with a thicker top/left border to simulate a physical, recessed button or well.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. Rounded corners are perceived as "soft" or "consumer-grade"; sharp right angles communicate precision, industrial manufacturing, and efficiency. Every card, button, and input field must feature hard 90-degree corners to maintain the field-ops aesthetic.

## Components

### Buttons
Buttons are high-contrast blocks. The primary action button is solid Dispatch Yellow with black text. Secondary buttons are transparent with a 2px slate border. On hover or press, buttons do not change color smoothly; they "invert" or switch stroke weights instantly to provide tactile, binary feedback.

### Rugged Task Cards
Cards feature a mandatory header bar in a contrasting slate tone. The card body is separated from the header by a 2px horizontal rule. If a card represents a critical task, its left border is thickened to 6px and color-coded (Yellow for active, Green for verified, Red for urgent).

### High-Contrast Checklists
Checkboxes are large (24px) squares with 2px borders. When checked, they fill with a solid Green block and a high-contrast "X" or checkmark in the background color. Text for completed items should have a strikethrough and a 50% opacity reduction.

### Stopwatch & Timers
Timer elements must be the largest visual priority in the drill view. They should be rendered in a dedicated panel with a background 1 shade darker than the card, using the "data-mono" typographic style.

### Dispatch Board Layout
The main interface should resemble a "glass cockpit" or grid of monitors. Use "Panel Headers" for every section of the screen, containing the section title and a unique four-digit reference code in the top-right corner to enhance the technical feel.