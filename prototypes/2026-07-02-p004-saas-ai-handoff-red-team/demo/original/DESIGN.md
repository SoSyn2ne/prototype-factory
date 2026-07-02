---
name: Obsidian Operator
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#303032'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#ffb4aa'
  on-secondary: '#690004'
  secondary-container: '#b6040e'
  on-secondary-container: '#ffc3bb'
  tertiary: '#ffb868'
  on-tertiary: '#482900'
  tertiary-container: '#a36300'
  on-tertiary-container: '#fff6f1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930007'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#ffb868'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  stat-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  row-height-sm: 32px
  row-height-md: 48px
---

## Brand & Style
This design system is engineered for high-stakes, high-density red-team simulations and support operations. The aesthetic is "Industrial Technical"—prioritizing information density, rapid scanning, and precision over decorative white space. 

The personality is clinical, authoritative, and urgent. It utilizes a **Modern-Brutalist** influence, characterized by sharp edges, hair-line borders, and a modular "cockpit" feel. The interface should feel like a high-performance instrument where every pixel serves a functional purpose, minimizing cognitive load through strict structural consistency and a rigid color-coded severity hierarchy.

## Colors
The palette is built on a deep "Obsidian" foundation. Backgrounds utilize `#121214`, with nested panels stepping up to `#1C1C1E` to create subtle structural depth.

- **Electric Blue (#0066FF):** Reserved exclusively for "Human Handoff" or mandatory manual overrides. It is the only high-saturation brand color.
- **Severity Spectrum:**
    - **Critical Red (#FF453A):** Used for red-team breaches, high rage signals, and system failures.
    - **Warning Amber (#FF9F0A):** Used for refund risks, escalation warnings, and anomalies.
    - **Success Emerald (#34C759):** Used for mitigation confirmation and resolved scenarios.
- **Borders:** Fixed at `#2C2C2E` for primary containment and `#3A3A3C` for active states.

## Typography
The system employs a dual-font strategy. **Inter** is used for UI chrome, headers, and instructional text to ensure readability at small scales. **JetBrains Mono** is utilized for all data-dense outputs, including logs, transcripts, severity metrics, and status labels.

To maintain high density, font sizes are kept small (primarily 12px-13px). Bold weights are used sparingly to highlight critical data points within rows. All technical labels must use the `label-xs` style with JetBrains Mono to distinguish metadata from content.

## Layout & Spacing
The layout follows a **Fixed-Panel Grid** system. The screen is divided into functional zones (e.g., Scenario Deck on the left, Transcript in the center, Analysis/Metrics on the right). 

- **Density:** We use a 4px base unit. Internal component padding is tight (8px horizontal, 4px vertical for rows).
- **Multi-Panel Layout:** Panels are separated by 1px borders rather than wide gutters.
- **Scroll Areas:** Content-heavy panels (transcripts) must use custom thin scrollbars to maximize horizontal real estate.
- **Responsive:** On smaller viewports, the Analysis panel collapses into a right-hand drawer, prioritizing the Transcript and Scenario rows.

## Elevation & Depth
This system avoids shadows and traditional depth metaphors. Hierarchy is achieved through **Tonal Layering** and **1px Outlines**.

- **Base Level:** `#121214` (Global background).
- **Panel Level:** `#1C1C1E` (Cards, sidebars, main console containers).
- **Active Level:** `#2C2C2E` (Selected rows or focused inputs).
- **Interactions:** Use subtle brightness increases (+5-10%) on hover rather than lift or shadow.
- **Handoff Action:** The Electric Blue action button is the only element allowed a subtle glow effect (`box-shadow: 0 0 12px rgba(0, 102, 255, 0.3)`) to draw immediate operator attention.

## Shapes
Shapes are strictly functional. A **4px (Softened Sharp)** radius is used for primary containers and buttons to prevent a "hostile" aesthetic while maintaining an industrial, precision-tool feel. 

Status badges and tags use a 2px radius. Inline code blocks and log entries use 0px (sharp) corners to reinforce the transcript/terminal metaphor.

## Components
- **Scenario Decks:** Stacked cards with 1px borders. Use a left-edge color strip (2px width) to indicate the severity of the scenario (Red/Amber/Emerald).
- **Support-Console Rows:** High-density horizontal strips (32px height). Use JetBrains Mono for the timestamp and UserID.
- **Severity Meters:** 4-segment linear bars. Filled segments use the severity colors; empty segments use `#2C2C2E`. 
- **Launch-Blocker Cards:** Full-width alerts at the top of the Analysis panel. High-contrast background (e.g., Solid Red for Critical) with white JetBrains Mono text.
- **Status Badges:** Small, rectangular tags with low-opacity background tints (e.g., 15% Red) and 100% opacity text for maximum legibility without overpowering the UI.
- **Action Buttons:** 
    - *Standard:* Ghost style (Border + Text).
    - *Handoff:* Solid Electric Blue with white text, 100% width in the action panel.