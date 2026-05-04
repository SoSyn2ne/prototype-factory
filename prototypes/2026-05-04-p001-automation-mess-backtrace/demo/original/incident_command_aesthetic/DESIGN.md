---
name: Incident Command Aesthetic
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#e2bfb0'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#a98a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb693'
  primary: '#ffb693'
  on-primary: '#561f00'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#a04100'
  secondary: '#c1c7d2'
  on-secondary: '#2b3139'
  secondary-container: '#464c55'
  on-secondary-container: '#b6bcc7'
  tertiary: '#c3c6cf'
  on-tertiary: '#2d3137'
  tertiary-container: '#9699a1'
  on-tertiary-container: '#2d3138'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#dde3ee'
  secondary-fixed-dim: '#c1c7d2'
  on-secondary-fixed: '#161c24'
  on-secondary-fixed-variant: '#414750'
  tertiary-fixed: '#dfe2eb'
  tertiary-fixed-dim: '#c3c6cf'
  on-tertiary-fixed: '#181c22'
  on-tertiary-fixed-variant: '#43474e'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-mono:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-table:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
spacing:
  grid-unit: 4px
  container-margin: 16px
  element-gap: 8px
  data-density: tight
  gutter: 1px
---

## Brand & Style

The design system is engineered for mission-critical developer environments where information density and rapid cognitive processing are paramount. It evokes the atmosphere of a high-stakes "War Room" or Network Operations Center (NOC). The brand personality is clinical, authoritative, and precise, prioritizing functional utility over aesthetic fluff.

The visual style is a hybrid of **High-Contrast Modern** and **Technical Brutalism**. It utilizes a strict structural grid, technical patterns (such as subtle dot matrices), and glowing status indicators to simulate a live data feed. Every pixel serves a purpose, minimizing decorative whitespace to maximize data visibility for the operator.

## Colors

The color palette is optimized for low-light environments, using deep obsidian and navy tones to reduce eye strain while providing a canvas for high-chroma accents.

- **Backgrounds:** The primary interface surface uses `#0A0E14`, while elevated panels and sidebars utilize `#121820`.
- **Primary Accent:** `#FF6B00` (Urgent Orange) is reserved strictly for primary actions, critical alerts, and active state indicators.
- **Data Visualization:** Status indicators use high-vibrancy "neon" colors (Matrix Green, Warning Gold, Critical Red) to pierce through the dark background.
- **Borders:** Subtle borders in `#1E293B` define the structural grid without adding visual bulk.

## Typography

This design system employs a dual-font strategy to distinguish between UI orchestration and technical data.

- **Inter (Sans-Serif):** Used for functional UI controls, navigation, and descriptive text. It provides a clean, neutral interface that doesn't distract from the data.
- **JetBrains Mono (Monospace):** The workhorse for all technical data, logs, metrics, and timestamps. Monospacing ensures that numerical values align vertically in tables, facilitating rapid scanning of anomalies.
- **Space Grotesk (Labels):** Used for micro-labels and section headers to add a subtle technical, futuristic edge to the system's hierarchy.

## Layout & Spacing

The layout follows a **Fixed-Grid System** based on a 4px module. It is designed for multi-monitor setups and dashboard "tiling."

- **Grid Model:** A 12-column grid with minimal gutters (1px to 4px) to maximize screen real estate.
- **Density:** Information density is "High." Padding within components is kept to the functional minimum required for legibility.
- **Technical Patterns:** Use a subtle background dot-grid pattern (opacity 5%) to reinforce the technical alignment of elements.
- **Modular Tiling:** Components are designed to be "slotted" into larger dashboard containers, creating a seamless mosaic of data.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Outlines** rather than traditional shadows, which would muddy the high-contrast environment.

- **Stacking:** Base layers are `#0A0E14`. Interactive or elevated containers are `#121820`. 
- **Borders:** All containers use a 1px solid border. Active or focused containers use the Primary Orange or a subtle "glow" (outer glow with 4px blur, 20% opacity).
- **Glass Effects:** Backdrop filters (blur: 8px) are used sparingly for modal overlays to maintain context of the underlying data grid without sacrificing legibility.

## Shapes

The shape language is **Sharp (0px)**. To reflect the precision of developer tools and industrial dashboards, rounded corners are eliminated. 

Square corners reinforce the grid-based nature of the design and ensure that containers can be packed tightly together without awkward gaps. This "rectilinear" approach maintains a professional, high-performance aesthetic suitable for incident command.

## Components

- **Buttons:** Rectangular with 1px borders. Primary buttons use a solid Orange background with black text. Secondary buttons are transparent with an Orange border.
- **Status Indicators:** Small circular or diamond icons with a "glow" effect (drop-shadow with matching color) to indicate system health (e.g., a pulsing green dot for 'Active').
- **Data Tables:** Dense, header-row with a distinct background color (`#1E293B`). Rows use subtle zebra-striping. All numerical data must be monospaced.
- **Chips/Tags:** Used for metadata (e.g., `env:prod`). Small, capitalized text in Space Grotesk with a subtle background tint.
- **Input Fields:** Dark background, sharp corners, and a 1px border that turns Orange on focus. Use monospaced font for input text.
- **Incident Cards:** High-contrast containers for alert data. Use a thick left-border (4px) color-coded to the severity of the incident.
- **Telemetry Charts:** Vector-based line charts with high-vibrancy strokes and no fill, emphasizing the trend line over the area.