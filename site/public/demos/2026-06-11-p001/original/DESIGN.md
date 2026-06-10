---
name: Evidence Tactical Command
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#e7bdb2'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#ad887e'
  outline-variant: '#5d4038'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ff5625'
  on-primary-container: '#541100'
  inverse-primary: '#b12d00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-timer:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '800'
    lineHeight: 28px
spacing:
  unit: 4px
  gutter: 12px
  margin-side: 24px
  stack-compact: 8px
  stack-dense: 4px
---

## Brand & Style
This design system is engineered for high-stakes financial recovery and rapid dispute resolution. The brand personality is clinical, urgent, and authoritative, mirroring a high-pressure mission control room. It prioritizes "operational density"—maximizing the visibility of critical data points without sacrificing legibility or cognitive clarity.

The aesthetic follows a **Modern Industrial** movement with **Military-Grade Utilitarianism**. It rejects "software fluff" like rounded corners, soft shadows, or illustrative icons. Instead, it utilizes structural rigidity, high-contrast states, and monospaced accents to signal technical precision. The UI should feel like a specialized tool used by experts, where every pixel has a functional purpose in the sprint toward a dispute deadline.

## Colors
The palette is restricted to high-contrast, functional tones. 

- **Primary (Red-Orange):** Reserved exclusively for "Critical Path" items: expired clocks, missing evidence, and "Submit" actions. It is a signal of urgency and high-priority attention.
- **Secondary (Fog):** Used for primary text and high-level UI headers to ensure maximum readability against dark backgrounds.
- **Tertiary (Charcoal):** The foundational surface color. It creates a low-glare environment for long periods of intense focus.
- **Functional Greys:** Used for borders and inactive data points to maintain the industrial, structural feel.

Backgrounds should remain at `#0D0D0D` to allow the `#1A1A1A` surfaces to appear as distinct, elevated modules.

## Typography
The typography strategy employs a "Severe Hybrid" model. **Hanken Grotesk** provides a clean, contemporary sans-serif for UI labels and body text, ensuring high legibility in dense layouts. **JetBrains Mono** is utilized for all "active" data, timestamps, financial figures, and status indicators.

- **The Dispute Clock:** Use `display-timer` for the countdown. It must be monospaced to prevent layout shift as seconds tick down.
- **Data Density:** Use `data-mono` for all evidence packet line items. This enforces a grid-like alignment of characters, making it easier for users to scan long lists of transaction IDs.
- **Labels:** Use `label-caps` for table headers and section metadata to provide clear visual anchors.

## Layout & Spacing
This system utilizes a **Fixed Grid** with a 4px base unit to achieve extreme information density. 

- **The Command Layout:** A 12-column grid on desktop. Sidebars are fixed-width (280px) to house the "Evidence Tree" and "Dispute Lifecycle."
- **Operator-Dense Spacing:** Gutters are kept tight at 12px. Internal padding within modules should use `stack-dense` (4px) or `stack-compact` (8px) to minimize vertical scrolling.
- **Modular Blocks:** Content is contained within strict rectangular modules. Each module should be treated as an isolated "instrument" in the room.
- **Mobile Reflow:** On mobile devices, columns collapse into a single-column stack, but the "Dispute Clock" remains pinned to the top of the viewport at all times.

## Elevation & Depth
Elevation is communicated through **Tonal Layering** and **Bold Borders**, not shadows. 

- **Level 0 (Background):** `#0D0D0D` - The base of the application.
- **Level 1 (Modules):** `#1A1A1A` - Primary containers for data and evidence lists.
- **Level 2 (Active States):** `#2A2A2A` - Used for hovered rows or active input fields.
- **Borders:** All modules are bounded by 1px solid borders in `#333333`. When a module is "In Focus" or "Critical," the border color shifts to `#FF4500` (Red-Orange).
- **No Softness:** Shadows are strictly prohibited. Visual hierarchy is achieved purely through color contrast and border thickness.

## Shapes
The shape language is **Strictly Square**. 0px border radius is applied to all elements: buttons, input fields, cards, and tags. This reinforces the industrial, military-grade reliability of the tool and allows for seamless tiling of data-dense modules without the "visual gap" created by rounded corners.

## Components
- **Buttons:** Rectangular, all-caps labels. Primary buttons use `#FF4500` background with black text. Secondary buttons are outlined in Fog. No gradients.
- **Evidence Packet Chips:** Small, square-edged tags. Color-coded: `#F2F2F2` (Attached), `#FF4500` (Missing), `#808080` (Optional).
- **Dispute Clock:** A prominent, high-contrast module at the top of the "Sprint Room." When the time is < 24 hours, the text pulses between Fog and Red-Orange.
- **Data Grids:** Highly condensed. Row height is fixed at 32px. Use alternating row stripes (`#1A1A1A` and `#222222`) for tracking across wide screens.
- **Input Fields:** Bottom-border only or full 1px border. Background is slightly darker than the surface. Text is always Monospace for numeric entry (amounts, dates).
- **The "Packet Completeness" Meter:** A stark, horizontal progress bar using a stepped block design (10 segments) rather than a smooth fill, indicating discrete stages of evidence gathering.