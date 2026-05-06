---
name: Regulatory Command Center
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
  on-surface-variant: '#c4c7c9'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8e9193'
  outline-variant: '#444749'
  surface-tint: '#c4c7c9'
  primary: '#ffffff'
  on-primary: '#2d3133'
  primary-container: '#e0e3e5'
  on-primary-container: '#626567'
  inverse-primary: '#5c5f61'
  secondary: '#b7c8e1'
  on-secondary: '#213145'
  secondary-container: '#3a4a5f'
  on-secondary-container: '#a9bad3'
  tertiary: '#ffffff'
  on-tertiary: '#32302a'
  tertiary-container: '#e7e2d9'
  on-tertiary-container: '#67645d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e0e3e5'
  primary-fixed-dim: '#c4c7c9'
  on-primary-fixed: '#191c1e'
  on-primary-fixed-variant: '#444749'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#e7e2d9'
  tertiary-fixed-dim: '#cbc6bd'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494640'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  data-mono:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1440px
---

## Brand & Style

The design system is engineered for the high-stakes environment of regulatory compliance. It targets small business owners who require an authoritative, "no-nonsense" interface to navigate complex legal requirements. The brand personality is **Technical, Vigilant, and Precise**. It evokes the emotional response of being in a sophisticated control room—providing the user with a sense of mastery over chaotic data.

The design style is **High-Fidelity Minimalism mixed with Industrial Brutalism**. It prioritizes information density and functional clarity over decorative flair. Expect crisp lines, monochromatic surfaces, and high-contrast status indicators that demand immediate attention without fatigue. The aesthetic is "Operator-Dense," favoring a UI that reveals more power as the user becomes more proficient.

## Colors

The palette is anchored in a **Dark Mode** environment to reduce eye strain during prolonged "audit" sessions. 

- **Surfaces:** Use `surface_deep` for the primary background and `surface_canvas` for the main workspace. `surface_control` is reserved for interactive elements and card backgrounds.
- **Typography:** `primary_color_hex` (White/Slate 50) is used for headers and primary data point values. `secondary_color_hex` is used for labels and metadata.
- **High-Signal Accents:** These are the "Litmus" indicators. Use `alert_red` exclusively for confirmed junk fee violations. Use `warning_yellow` for suspicious patterns or "grey-area" fees. Use `compliant_green` for successful audit passes. These colors should appear as small, high-saturation hits (chips, borders, or pips) against the dark backdrop.

## Typography

This design system utilizes a dual-font strategy to separate UI navigation from technical data.

- **Inter (Sans-Serif):** Used for the primary UI framework, navigation, and instructional text. It provides a clean, neutral foundation that feels professional and institutional.
- **Space Grotesk (Monospaced/Technical):** Used for all data-heavy outputs, such as price values, fee percentages, code snippets, and regulatory ID numbers. This creates a "terminal" feel that reinforces the technical nature of the compliance work.

All labels should lean toward smaller font sizes with increased letter spacing and uppercase styling to mimic industrial machinery labels.

## Layout & Spacing

The layout follows a **Fluid Grid with High Density**. We utilize a 12-column system, but gutters are kept tight (16px) to maximize the amount of information visible on a single screen. 

- **Operator Density:** Information should be packed tightly but organized through clear alignment. Padding within components (like table cells and cards) should be minimal.
- **Alignment:** Use a strict 4px baseline grid. All elements must snap to this grid to maintain the "engineered" look.
- **Sidebars:** Persistent left and right sidebars (240px - 300px) are used for navigation and the "Fix Queue" respectively, sandwiching the main diagnostic workspace.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering and Border Definition** rather than shadows.

- **Layering:** The background is the darkest (`surface_deep`). Work panels sit on top of this (`surface_canvas`). Interactive elements like inputs and buttons are the lightest (`surface_control`).
- **Borders:** Every container must have a 1px solid border (`border_subtle`). This creates a technical, blueprint-like appearance.
- **Active State:** To show focus or elevation, do not use shadows. Instead, change the border color to the primary white or a status color (Red/Yellow/Green). This "illuminated border" approach mimics hardware control panels.

## Shapes

To maintain an authoritative and technical atmosphere, the design system uses a **Sharp (0px)** roundedness philosophy. 

- **Hard Edges:** All buttons, cards, input fields, and chips have 90-degree corners. This evokes a sense of precision and rigidity appropriate for legal compliance.
- **Exceptions:** Use circular pips (4px x 4px) only for status "on/off" indicators within data rows to provide a small visual break from the grid.

## Components

### Compact Data Tables
Tables are the core of the system. Use a 32px row height. Headers should be `label-caps`. Use zebra-striping with a very subtle variance in slate grays. Violation rows should have a 2px left-border accent in `alert_red`.

### Status Chips
Status chips are rectangular, using a solid background for high-priority alerts and a 1px border for "Passed" states. The text inside should be `label-caps` in the corresponding status color.

### Fix Queue Cards
These cards represent tasks. They should feature a header with a `data-mono` ID number and a "Quick Fix" button. When a card is active, its border should pulse with a subtle 1px white stroke.

### Annotated Image Containers
Used for displaying checkout screenshots. Use `border_subtle` for the frame. Use "callout" lines (1px solid) that connect specific text in the image to a diagnostic sidebar. These lines should use the status color associated with the finding.

### Control Buttons
Primary buttons are solid `primary_color_hex` with `neutral_color_hex` text. Secondary buttons are ghost-style with a white border. All buttons use `headline-sm` typography and have no transition animations—changes should be instantaneous and "clicky."