---
name: Arcade Inspector
colors:
  surface: '#fcf9f6'
  surface-dim: '#dcdad7'
  surface-bright: '#fcf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f0'
  surface-container: '#f0edea'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e5e2df'
  on-surface: '#1c1c1a'
  on-surface-variant: '#4b4734'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f3f0ed'
  outline: '#7d7761'
  outline-variant: '#cec6ad'
  surface-tint: '#6d5e00'
  primary: '#6d5e00'
  on-primary: '#ffffff'
  primary-container: '#fde047'
  on-primary-container: '#726300'
  inverse-primary: '#e2c62d'
  secondary: '#b61722'
  on-secondary: '#ffffff'
  secondary-container: '#da3437'
  on-secondary-container: '#fffbff'
  tertiary: '#545f73'
  on-tertiary: '#ffffff'
  tertiary-container: '#d6e1f9'
  on-tertiary-container: '#596478'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe24c'
  primary-fixed-dim: '#e2c62d'
  on-primary-fixed: '#211b00'
  on-primary-fixed-variant: '#524600'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930013'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#fcf9f6'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2df'
typography:
  headline-xl:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Anybody
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  data-ticket:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  perforation-gap: 4px
---

## Brand & Style
The design system is built on a "Playful-Experimental" foundation, blending the nostalgic charm of a physical arcade ticket booth with the high-stakes urgency of security inspection. The brand personality is authoritative yet whimsical, evoking the tactile sensation of physical verification through digital "stamping" and "tearing."

The design style is **Neo-Brutalist Tactile**. It utilizes heavy 4px borders, un-antialiased aesthetics, and grain-textured surfaces to mimic the feel of cheap thermal paper and metal ticket machines. High-contrast warning patterns (hazard stripes) and bold color blocking create a sense of immediate visual feedback for the user during the "door check" process.

## Colors
The palette is grounded in high-visibility functional colors. 
- **Safety Yellow (#FDE047):** Used for primary actions, warnings, and the "main stage" of the UI.
- **Danger Red (#EF4444):** Reserved for failed inspections, scam alerts, and high-priority "VOID" states.
- **Deep Security Blue (#1E293B):** The "ink" and "heavy metal" color, used for typography and structural borders.
- **Receipt Off-White (#F8F5F2):** The primary background color for content cards and data panels, mimicking low-grade thermal paper.

Backgrounds should use a subtle grain texture overlay to reduce the "flatness" of digital colors.

## Typography
This design system utilizes a stark contrast between expressive display type and functional data type.
- **Headlines (Anybody):** Set in ultra-bold weights with tight tracking. These should feel "stamped" onto the page.
- **Body & Data (JetBrains Mono / Space Mono):** Monospaced fonts are used for all ticket data, URLs, and inspection logs to replicate the output of a ticket printer. 

Text within "stamps" should be slightly rotated (2-3 degrees) to enhance the physical imperfection of a hand-stamped mark.

## Layout & Spacing
The layout follows a **Fixed Grid** system inspired by technical blueprints. Containers utilize heavy internal padding to ensure text never touches the thick borders.

- **The "Ticket" Container:** A central column layout (max 600px) that mimics a continuous roll of paper. 
- **Perforation Lines:** Sections are divided by horizontal dotted lines (`border-style: dotted`) with 4px spacing, suggesting where the paper could be torn.
- **Hazard Margins:** The main screen edges are flanked by 24px "Hazard Stripe" borders to create a pressurized, industrial environment.

## Elevation & Depth
Depth is not achieved through shadows, but through **Hard Offsets** and **Layer Stacking**.
- **The "Chunky" Lift:** Elements sit on a "shadow" that is actually a solid block of `Deep Security Blue` offset by 4px or 8px.
- **Physical Stacks:** When cards overlap, they use a 2px solid white border inside a 4px solid blue border to maintain distinct separation.
- **Active States:** When a button is pressed, the offset "shadow" disappears, and the element translates (moves) by the same offset (e.g., `transform: translate(4px, 4px)`) to simulate a mechanical click.

## Shapes
The shape language is strictly **Sharp (0px)**. All corners are 90-degree angles to maintain the brutalist, industrial aesthetic. 

- **Exceptions:** Circular elements are only permitted for "LED status lights" or "Stamp seals."
- **Perforations:** Use the `mask-image` property or `radial-gradient` backgrounds to create "bitten" semi-circle edges on the sides of ticket components, simulating where they were torn from a machine.

## Components
- **Arcade Buttons:** Primary actions use Safety Yellow backgrounds, 4px black borders, and an 8px solid black offset shadow. On hover, the shadow shrinks; on click, it vanishes.
- **The "VALID/SCAM" Stamp:** Large, circular or rectangular overlays that appear at 15-degree angles. They should use a "grunge" mask texture to look like ink on paper.
- **Input Fields:** Styled as "Data Entry Slots" with a recessed look (inset 2px border). They use monospaced text exclusively.
- **Inspection Chips:** Small rectangular tags with inverted colors (White text on Deep Blue) used for status tags like "ENCRYPTED" or "SUSPICIOUS."
- **Hazard Strips:** Horizontal separators using the yellow/black diagonal pattern to divide sections of high importance.
- **The Receipt Card:** The main content wrapper. It should have a jagged "torn" bottom edge and a subtle paper-grain CSS noise filter.