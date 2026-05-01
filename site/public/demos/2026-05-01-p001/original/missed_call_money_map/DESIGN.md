---
name: Missed Call Money Map
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
  on-surface-variant: '#bec7d4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#88919d'
  outline-variant: '#3f4852'
  surface-tint: '#98cbff'
  primary: '#98cbff'
  on-primary: '#003354'
  primary-container: '#00a3ff'
  on-primary-container: '#00375a'
  inverse-primary: '#00629d'
  secondary: '#ffb3ae'
  on-secondary: '#68000b'
  secondary-container: '#ad031a'
  on-secondary-container: '#ffb8b2'
  tertiary: '#ffb95a'
  on-tertiary: '#462a00'
  tertiary-container: '#d48e23'
  on-tertiary-container: '#4b2e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#98cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a77'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930014'
  tertiary-fixed: '#ffddb6'
  tertiary-fixed-dim: '#ffb95a'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.2'
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  container-max: 100%
---

## Brand & Style

The design system is engineered for the high-stakes environment of lead triage, where every second of inaction translates to lost revenue. The aesthetic departs from friendly consumer SaaS and instead adopts an **Operator-Dense** style—a fusion of **Brutalism** and **Modern Technical** design. It prioritizes information density and cognitive speed, mimicking the authoritative feel of a financial trading terminal or a mission control center.

The emotional response is one of controlled urgency. Users should feel like "operators" rather than "admins," empowered by a high-utility interface that visualizes "money-at-risk" with clinical precision. The interface uses raw structural elements, such as visible grids and hairline borders, to communicate stability and technical rigor.

## Colors

The palette is anchored in a deep dark-mode foundation to minimize eye strain during prolonged monitoring sessions. Surface colors utilize tiered charcoals and blacks to create structural separation without relying on heavy shadows.

Functional colors are tuned for high-contrast visibility against the dark backdrop:
- **Signal Blue (#00A3FF):** Reserved for primary system actions and navigational focus.
- **Emergency Red (#FF4B4B):** Used exclusively for high-risk missed calls and immediate revenue threats.
- **Warning Amber (#FFB347):** Indicates leads nearing expiration or moderate priority triage.
- **Success Green (#2ECC71):** Visualizes recovered revenue and completed triage cycles.

Neutral tones should strictly follow a "cool gray" scale to maintain the technical, "control room" atmosphere.

## Typography

This design system utilizes a dual-font strategy to balance legibility with technical character. **Inter** handles all standard UI elements, including navigation, inputs, and instructional text, providing a neutral and highly readable foundation. **Space Grotesk** is used for headlines to inject a futuristic, geometric edge.

A specialized **Monospace** stack (JetBrains Mono or Roboto Mono) is mandatory for all dynamic data points, including:
- ROI values and "Money-at-Risk" tickers.
- Timestamps and countdown clocks.
- Phone numbers and lead IDs.

Monospaced characters ensure that numerical data aligns perfectly in tables and tickers, allowing operators to scan for changes in value without visual jitter.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with a focus on maximum vertical and horizontal density. To achieve the "Operator" look, we utilize a compact 4px spacing unit. 

Key layout principles:
- **High-Density Grids:** Use 1px hairline borders in `rgba(255, 255, 255, 0.1)` to define regions instead of whitespace.
- **Fixed Sidebars:** Navigation and global metrics (like the Money-at-Risk ticker) should remain fixed to simulate a dashboard that is "always on."
- **Tables:** Rows should be compact (32px - 40px height) to maximize the volume of leads visible above the fold. 
- **Subtle Overlays:** Use a subtle "dot-grid" pattern on the primary background to reinforce the technical/terminal aesthetic.

## Elevation & Depth

Depth in this design system is conveyed through **Tonal Layers** and **Bold Borders** rather than traditional shadows. This maintains the "flat" feel of a technical terminal.

- **Level 0 (Floor):** Pure black (#000000) for the main application background.
- **Level 1 (Panels):** Deep Charcoal (#121212) with a 1px solid border.
- **Level 2 (Modals/Popovers):** Slightly lighter charcoal (#1E1E1E) with a Signal Blue or Emergency Red top-border to indicate state.

Shadows, if used, must be "Hard Shadows"—0px blur, 2px offset, at 100% opacity—to mimic a physical machine interface or retro-digital screen.

## Shapes

The design system employs **Sharp Corners (0px radius)** for all primary containers, buttons, and input fields. This reinforces the "Professional" and "Authoritative" brand personality, moving away from the soft, approachable curves of modern consumer apps.

Small border-radii (max 2px) may be used sparingly for secondary elements like "Success" badges or "Warning" chips to provide a subtle visual distinction from the rigid structural containers.

## Components

### Buttons
Primary buttons use a "Signal Blue" solid fill with white text. Hover states should utilize a simple invert or a brightness increase. Use sharp corners and monospaced labels for action buttons like "RECOVER NOW" or "DIAL."

### Status Badges
Badges are the primary visual driver of the hierarchy. They should use high-saturation background colors (`#FF4B4B`, `#FFB347`, `#2ECC71`) with black or white text for maximum contrast. The "High-Risk" badge should have a subtle pulse animation to denote urgency.

### Tickers
"Money-at-Risk" tickers should be styled with a larger, monospaced font weight. Positive recoveries should animate with a green "up-tick," while new missed calls should trigger a red "down-tick" effect.

### Input Fields
Inputs are styled with 1px borders. When focused, the border color changes to "Signal Blue." Labels must always be visible (no floating labels) and styled in the `label-caps` typography level to maintain the technical look.

### Data Tables
Tables are the heart of the tool. Use "zebra striping" with extremely subtle color shifts and ensure all numerical data is right-aligned to the decimal point for instant comparison. Use hairline borders for every cell to create a "spreadsheet-as-software" feel.