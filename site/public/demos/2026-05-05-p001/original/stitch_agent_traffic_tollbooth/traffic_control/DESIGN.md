---
name: Traffic Control
colors:
  surface: '#0f141a'
  surface-dim: '#0f141a'
  surface-bright: '#353941'
  surface-container-lowest: '#0a0e15'
  surface-container-low: '#181c22'
  surface-container: '#1c2027'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2ec'
  on-surface-variant: '#c0c7d5'
  inverse-surface: '#dfe2ec'
  inverse-on-surface: '#2c3138'
  outline: '#8a919f'
  outline-variant: '#404753'
  surface-tint: '#a3c9ff'
  primary: '#a3c9ff'
  on-primary: '#00315d'
  primary-container: '#1493ff'
  on-primary-container: '#002a51'
  inverse-primary: '#0060ab'
  secondary: '#40e39a'
  on-secondary: '#003921'
  secondary-container: '#00c681'
  on-secondary-container: '#004c2e'
  tertiary: '#ffb689'
  on-tertiary: '#512300'
  tertiary-container: '#e56f03'
  on-tertiary-container: '#471e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e3ff'
  primary-fixed-dim: '#a3c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#61fdb2'
  secondary-fixed-dim: '#3ce098'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005232'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb689'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#743500'
  background: '#0f141a'
  on-background: '#dfe2ec'
  surface-variant: '#31353c'
typography:
  display-mono:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: spaceGrotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.02em
  body-compact:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-table:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  panel-padding: 8px
---

## Brand & Style

This design system is engineered for high-stakes infrastructure management. It prioritizes information density over white space, designed specifically for expert operators who require real-time situational awareness. The aesthetic is rooted in **Modern Brutalism** and **Technical Industrialism**, evoking the atmosphere of a Network Operations Center (NOC).

The visual language communicates authority and precision. By utilizing sharp edges and a monochromatic base punctuated by high-chroma functional signals, the design system minimizes cognitive load during critical decision-making. Every pixel serves a functional purpose; decorative elements are stripped away in favor of structural borders and data-rich modules.

## Colors

The palette is anchored in a tiered dark-mode architecture to establish clear visual hierarchy without relying on shadows.

- **Foundations:** The primary background is "Obsidian," providing a void-like base that makes high-contrast text pop. "Deep Slate" and "Charcoal" are used for container surfaces and structural dividers.
- **Action & Status:** 
    - **Electric Blue:** Reserved strictly for primary interactions and active system states.
    - **Emerald:** Used for "Verified" statuses and healthy system throughput.
    - **Orange & Red:** High-visibility warnings for leaks, latency spikes, and security risks.
- **Utility:** A range of low-opacity grays is used for inactive states and secondary metadata to ensure the operator's eye is always drawn to active data points.

## Typography

Typography in this design system is optimized for speed and accuracy. 

1. **Functional UI:** **Inter** is the primary typeface, utilized at smaller scales (12px–14px) with tighter line-heights to support operator density.
2. **Technical Accents:** **Space Grotesk** is used sparingly for headers and module titles to provide a futuristic, geometric edge that reinforces the infrastructure narrative.
3. **Log & Stream Data:** All real-time telemetry and log data must use a **monospace** stack. This ensures character alignment in data tables and log streams, allowing operators to spot patterns in vertically stacked strings of text.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a hard 4px baseline rhythm. 

- **Density:** Padding is intentionally constrained. Standard components use an 8px internal padding to maximize the number of visible data rows on a single viewport.
- **Structure:** Layouts are divided into "Command Panels." These panels should be separated by 1px borders rather than wide margins. 
- **Alignment:** All elements must align to the grid to maintain the "Command Center" feel. Use 12px gutters between major layout blocks and 16px margins at the edge of the application frame.

## Elevation & Depth

This system avoids soft ambient shadows. Instead, it uses **Tonal Layering** and **Bold Outlines** to define hierarchy.

- **Stacking:** Surface levels are defined by color shifts. The background is Obsidian (#0A0A0B), secondary panels are Deep Slate (#1A1C1E), and active/hovered elements are Charcoal (#2C2E33).
- **Borders:** Every container and interactive component must have a crisp 1px border. Use high-contrast borders (Electric Blue) only for focused or active states.
- **Glass Effects:** Subtle backdrop blurs (10px–20px) may be used for overlaying command modals to maintain context of the underlying data while providing a focused interaction layer.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Curvature is avoided to maximize screen real estate and reinforce a rigid, institutional tone. Buttons, input fields, badges, and panel containers must maintain 90-degree corners. This creates a "modular block" aesthetic where components appear to lock together like physical hardware in a server rack.

## Components

- **Buttons:** Sharp corners with 1px solid borders. Primary buttons use an Electric Blue fill with black text. Secondary buttons use a transparent fill with a Charcoal border.
- **Data Tables:** Highly compact. Header rows should use "label-caps" typography with a Deep Slate background. Row heights should not exceed 32px.
- **Verification Badges:** Small, rectangular tags. Verified status uses an Emerald border and text; Risky status uses Red.
- **Input Fields:** Use a Deep Slate fill and 1px Charcoal border. On focus, the border transitions to Electric Blue.
- **Control Panels:** Grouped sets of inputs and toggles with a collective header. Panels should look like "modules" within the dashboard.
- **Status Indicators:** 8px square "LED" pips. Solid Emerald for "Nominal," pulsing Red for "Alert."
- **Scrollbars:** Custom-styled to be ultra-thin (4px) in Charcoal to minimize visual distraction from the content.