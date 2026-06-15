---
name: Field-Ops Industrial Interface
colors:
  surface: '#101416'
  surface-dim: '#101416'
  surface-bright: '#363a3c'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#181c1e'
  surface-container: '#1c2022'
  surface-container-high: '#262b2c'
  surface-container-highest: '#313537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#bbc9cc'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#869396'
  outline-variant: '#3c494c'
  surface-tint: '#44d8f1'
  primary: '#44d8f1'
  on-primary: '#00363e'
  primary-container: '#00bcd4'
  on-primary-container: '#004650'
  inverse-primary: '#006876'
  secondary: '#b1cad7'
  on-secondary: '#1c333e'
  secondary-container: '#334a55'
  on-secondary-container: '#a0b9c5'
  tertiary: '#bbc8d0'
  on-tertiary: '#263238'
  tertiary-container: '#a0adb4'
  on-tertiary-container: '#354147'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a1efff'
  primary-fixed-dim: '#44d8f1'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e59'
  secondary-fixed: '#cde6f4'
  secondary-fixed-dim: '#b1cad7'
  on-secondary-fixed: '#051e28'
  on-secondary-fixed-variant: '#334a55'
  tertiary-fixed: '#d7e4ec'
  tertiary-fixed-dim: '#bbc8d0'
  on-tertiary-fixed: '#111d23'
  on-tertiary-fixed-variant: '#3c494f'
  background: '#101416'
  on-background: '#e0e3e5'
  surface-variant: '#313537'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  panel-padding: 12px
  breakpoint-mobile: 600px
  breakpoint-tablet: 1024px
---

## Brand & Style
The design system is engineered for high-stakes operational environments, specifically for field personnel conducting store walkthroughs and technical inspections. The brand personality is **Professional, Rugged, and Industrial**. It prioritizes functional utility over aesthetic flourish, ensuring that every UI element serves a specific data-driven purpose.

The visual style is **Industrial Minimalism**. It draws inspiration from heavy machinery interfaces and tactical hardware. The UI uses a high-contrast palette to ensure legibility in various lighting conditions—from dimly lit warehouses to bright retail floors. There is a deliberate move away from soft shadows and gradients in favor of structural grid lines and clearly defined pressure-state panels that react decisively to user input.

## Colors
The palette is built on a foundation of "Slate and Steel." The background utilizes deep slate tones to reduce eye strain during prolonged use. 

- **Primary Action (#00BCD4):** A restrained cyan used exclusively for active states, primary buttons, and critical focus paths.
- **Surface & Steel:** Tones of #263238 (Deep Slate) and #455A64 (Steel) define modular panels and containers.
- **Functional Accents:** Success, warning, and error states must use high-saturation variants of green, amber, and red to stand out against the monochrome base.
- **Text:** High-contrast neutral (#ECEFF1) is used for primary data, with dimmed steel (#90A4AE) for metadata and labels.

## Typography
The typography system prioritizes technical clarity. **IBM Plex Sans** is the primary typeface, chosen for its engineered, "grotesk" feel that bridges the gap between humanist legibility and industrial precision.

- **Data Density:** For technical readouts, ID numbers, and status timestamps, **JetBrains Mono** is utilized. Its monospaced nature ensures that columns of numerical data remain perfectly aligned.
- **Hierarchy:** Use heavy weights (SemiBold/600) for section headers to anchor the eye in high-density layouts. 
- **Scale:** On mobile devices, headline sizes are slightly reduced, but line-height remains generous to ensure tap targets and text blocks are distinct.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Content is organized into modular "cells" or "panels" that provide clear visual boundaries for different operational tasks.

- **Grid Model:** A 12-column fluid grid is used for desktop/tablet, collapsing to a single column on mobile. 
- **Rhythm:** An 8px baseline grid (using 4px increments) governs all spacing.
- **Modular Panels:** Information is never floating. Everything must be contained within a "Steel" panel with a 1px border. 
- **Adaptation:** On mobile, margins reduce to 16px to maximize the interactive surface area for field use.

## Elevation & Depth
This design system avoids traditional drop shadows to maintain its "rugged" and flat industrial character. Depth is instead communicated through **Tonal Layering and Borders**.

- **Surface Levels:** The base background is the darkest layer. Interactive panels sit one level above, distinguished by a slightly lighter slate fill and a 1px steel border (#455A64).
- **Active States:** When an element is pressed or active, it does not "lift." Instead, it uses an inner stroke or a high-contrast cyan fill to indicate "engagement."
- **Panel Separation:** Use 1px solid lines to separate header sections from content within the same panel, reinforcing the "blueprints" aesthetic.

## Shapes
Shapes are disciplined and geometric. A **Soft (0.25rem)** roundedness is applied to buttons and panels to prevent the UI from feeling sharp or hostile, while maintaining the structural rigidity of a tool.

- **Interactive Elements:** Buttons and inputs use the standard `0.25rem` radius.
- **Status Indicators:** Small status dots or pips are rendered as perfect squares to lean into the digital/industrial aesthetic.
- **Large Containers:** Even large layout containers maintain the same small radius to ensure a consistent, modular appearance across the entire screen.

## Components
Components are designed to be "pressure-state" panels—high-visibility tools that respond clearly to touch or click.

- **Buttons:** Primary buttons use a solid Cyan (#00BCD4) background with black text for maximum contrast. Secondary buttons use a transparent background with a 2px steel border.
- **Chips/Status:** Use a "label + value" pairing. Status chips are rectangular with a monospaced font for the state (e.g., `PASS`, `FAIL`, `PENDING`).
- **Input Fields:** Styled as "Inset" boxes with a dark fill and a bottom-border focus state. This mimics physical control panels.
- **Lists:** Rows are separated by 1px steel dividers. Each row should have a minimum height of 56px to accommodate gloved or fast-moving touch interactions.
- **Cards (Modular Panels):** Every card must have a defined header area with a title in `label-md` and a body for data.
- **Operational Gauges:** For store walkthroughs, use progress bars and step-indicators that use the primary cyan to show completion percentage.