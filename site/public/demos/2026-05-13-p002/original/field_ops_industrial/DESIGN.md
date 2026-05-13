---
name: Field-Ops Industrial
colors:
  surface: '#0e1416'
  surface-dim: '#0e1416'
  surface-bright: '#333a3c'
  surface-container-lowest: '#080f11'
  surface-container-low: '#161d1f'
  surface-container: '#1a2123'
  surface-container-high: '#242b2d'
  surface-container-highest: '#2f3638'
  on-surface: '#dde4e6'
  on-surface-variant: '#bacac8'
  inverse-surface: '#dde4e6'
  inverse-on-surface: '#2b3234'
  outline: '#859492'
  outline-variant: '#3b4948'
  surface-tint: '#2edcd7'
  primary: '#46eae5'
  on-primary: '#003735'
  primary-container: '#00cec9'
  on-primary-container: '#005250'
  inverse-primary: '#006a67'
  secondary: '#bdc8cd'
  on-secondary: '#283236'
  secondary-container: '#404b4f'
  on-secondary-container: '#afbabf'
  tertiary: '#ffc8bb'
  on-tertiary: '#502318'
  tertiary-container: '#efa796'
  on-tertiary-container: '#6f3b2f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#5af9f3'
  primary-fixed-dim: '#2edcd7'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504e'
  secondary-fixed: '#d9e4e9'
  secondary-fixed-dim: '#bdc8cd'
  on-secondary-fixed: '#131d21'
  on-secondary-fixed-variant: '#3e484c'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#feb5a4'
  on-tertiary-fixed: '#360f06'
  on-tertiary-fixed-variant: '#6c392c'
  background: '#0e1416'
  on-background: '#dde4e6'
  surface-variant: '#2f3638'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  container-padding: 24px
---

## Brand & Style

This design system is built for high-stakes, high-velocity environments where clarity and speed of response are paramount. The aesthetic is "Field-Ops Industrial"—a fusion of utility-first industrial design and modern digital command centers. It evokes a sense of mission-critical stability and technical precision.

The style leans heavily into **Brutalism** and **Tactile** influences: 
- **Rugged Utility:** Every element feels engineered rather than "decorated." 
- **Urgency:** High-contrast indicators ensure that triage severity is processed instantly.
- **Density:** The interface prioritizes information throughput, assuming an expert user who requires a comprehensive bird's-eye view of the "storm."
- **Industrial Accents:** Technical grid overlays and heavy structural borders provide a sense of physical fortification against incoming bot traffic.

## Colors

The palette is anchored in a "Dark Ops" mode to reduce eye strain during extended incident monitoring. 

- **Foundation:** Deep Steel Grays (#2D3436, #636E72) form the structural chassis of the UI, creating a low-glare environment.
- **Action & Status:** Emergency Cyan (#00CEC9) is the primary "active" color, used for system status rails and primary interactive elements. Its lighter variant (#81ECEC) is reserved for success states and glow effects.
- **Triage Signal:** Alert Amber (#FAB1A0) signals escalating threats, while Critical Red (#D63031) is reserved strictly for active breaches and critical failures.
- **Contrast:** High-contrast white is used sparingly for primary data points to ensure they "pop" against the steel background.

## Typography

This design system employs a dual-font strategy to differentiate between UI navigation and live incident data.

- **UI & Controls (Inter):** A sturdy, neutral sans-serif used for headers, descriptions, and primary navigation. It provides a clean, professional foundation.
- **Data & Metrics (JetBrains Mono):** Used for all dynamic values, timestamps, bot IDs, and technical logs. The monospaced nature ensures that columns of numbers align perfectly for rapid scanning.
- **Hierarchy:** Use `label-caps` for section titles and metadata headers to create a "technical manual" feel. Use `data-lg` for large-scale metric counters.

## Layout & Spacing

The layout philosophy is **Command-Center Dense**. This is a fluid grid system designed to maximize screen real estate on wide-format monitors.

- **Grid:** A tight 12-column grid with narrow 12px gutters. This allows for more "widgets" to be visible simultaneously without excessive scrolling.
- **Rhythm:** All spacing is derived from a 4px base unit. 
- **Modular Panels:** Content is housed in "bento-style" modular panels. 
- **Adaptation:** 
  - **Desktop:** Quad-pane view (Triage list, Live Map, Detail View, Checklist).
  - **Tablet:** Two-pane split.
  - **Mobile:** Single-column vertical stack with a persistent "Critical Alert" ticker at the top.

## Elevation & Depth

This design system rejects soft shadows and ambient depth. Instead, it uses **Tonal Layering and Bold Borders** to define hierarchy.

- **Surface Levels:** 
  - **Level 0 (Background):** Deepest Steel (#2D3436).
  - **Level 1 (Panels):** Mid Steel (#636E72) with a 2px solid border.
  - **Level 2 (Active Cards):** Emergency Cyan stroke (1px) with a subtle inner glow.
- **Grid Overlays:** A subtle 10% opacity cyan "technical grid" is overlaid on the background to reinforce the industrial aesthetic.
- **Status Rails:** Vertical 4px color bars on the left edge of cards denote severity without requiring text.

## Shapes

The shape language is **Sharp and Structural**. 

- **Corners:** 0px radius (Sharp) for all primary containers, buttons, and input fields to maintain the "rugged hardware" feel.
- **Status Pills:** The only exception; status pills utilize a 2px "soft" corner to distinguish them from structural layout elements.
- **Dividers:** Heavy 2px horizontal and vertical lines replace whitespace to separate data sections.

## Components

- **Sturdy Incident Cards:** Heavy-bordered containers featuring a "Status Rail" (color-coded bar) on the left. Header area uses `label-caps` and the body contains `data-md` metrics.
- **Technical Input Fields:** Inset boxes with a 1px steel border. Active state switches the border to Cyan with a "glitch" pulse animation on focus.
- **Industrial Buttons:** Rectangular, sharp-edged, high-contrast. Primary buttons use solid Cyan with black text. Danger buttons use solid Red.
- **Status Pills:** High-contrast badges with background fills corresponding to severity. Use `label-caps` for the text inside.
- **Checklist-First Elements:** Interactive triage steps with large, 20px custom square checkboxes. Completed items dim to 50% opacity and receive a "strikethrough" treatment.
- **Technical Ticker:** A scrolling marquee at the top or bottom of the screen for real-time bot attack logs, using `data-md`.