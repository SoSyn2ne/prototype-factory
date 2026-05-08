---
name: Financial Analyst Terminal Aesthetic
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#4ae176'
  primary: '#4be277'
  on-primary: '#003915'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#006e2f'
  secondary: '#c2c7d0'
  on-secondary: '#2c3138'
  secondary-container: '#42474f'
  on-secondary-container: '#b1b5bf'
  tertiary: '#ffba61'
  on-tertiary: '#472a00'
  tertiary-container: '#ef9900'
  on-tertiary-container: '#5c3800'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#dee2ec'
  secondary-fixed-dim: '#c2c7d0'
  on-secondary-fixed: '#171c23'
  on-secondary-fixed-variant: '#42474f'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  display-mono:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  heading-ui:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-standard:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
spacing:
  unit: 4px
  gutter: 12px
  margin-page: 24px
  container-padding: 12px
  density: condensed
---

## Brand & Style

This design system is engineered for the high-stakes environment of publisher revenue defense. It adopts a **Financial Analyst Terminal** aesthetic, prioritizing information density, rapid data scanning, and tactical authority. The brand personality is clinical, precise, and uncompromising, designed to evoke a sense of "Revenue Mission Control."

The style leverages **Modern Brutalism** refined with high-fidelity technical details. It eschews decorative whitespace in favor of structural efficiency, utilizing thin borders, monospaced data points, and glowing indicators to signal live system health. The target audience—Ad Ops Directors and Financial Analysts—requires a tool that feels like a professional instrument rather than a consumer application.

## Colors

The palette is optimized for long-duration monitoring in low-light environments. 

- **Foundation:** The "Deep Navy" (#0A0E14) background provides a high-contrast base for technical readouts, while "Slate" (#161B22) defines secondary surfaces and modular containers.
- **Functional Accents:** 
    - **Revenue Green (#22C55E):** Used strictly for positive growth, revenue gains, and healthy system states.
    - **Leak Red (#EF4444):** Reserved for revenue erosion, bid loss, and critical risks.
    - **Citation Amber (#F59E0B):** Specifically designates AI-generated insights, citations, and LLM-derived suggestions.
- **Data Visualization:** Use desaturated blues and teals for neutral data series to ensure the functional colors (Green/Red) remain visually dominant for immediate triage.

## Typography

The typography system uses a dual-font strategy to separate UI navigation from hard data analysis.

- **UI Language (Inter):** Used for all interface controls, labels, and instructional text. It provides a clean, neutral architecture that stays out of the way of the data.
- **Data Language (JetBrains Mono):** Used for all numerical values, CPMs, timestamps, and log entries. The monospaced nature ensures that columns of numbers align perfectly for vertical scanning, which is essential for spotting anomalies in revenue streams.

**Implementation Note:** Maintain tight line-heights and utilize `tabular-nums` for any non-monospaced fonts to prevent visual "jitter" during real-time data updates.

## Layout & Spacing

This design system utilizes a **strictly modular fluid grid** designed for 1080p and 1440p displays. 

- **The 4px Rule:** All spacing, padding, and margins are multiples of 4px.
- **High Density:** Gutters are kept narrow (12px) to maximize screen real estate. Components should be "packed" rather than "spaced," allowing analysts to view more metrics without scrolling.
- **Structural Grids:** Backgrounds should feature a subtle 24px CSS grid pattern or "crosshair" markers at container intersections to reinforce the technical, engineered feel of the terminal.
- **Alignment:** All elements must align to a hard edge. Centered layouts are prohibited; left-aligned is the default for text, while right-aligned is required for all tabular numerical data.

## Elevation & Depth

In a data-dense terminal environment, traditional shadows are discarded in favor of **Tonal Layering and Thin Borders**.

- **Depth via Stroke:** Layers are separated by 1px solid borders using the `surface-border` token (#30363D). 
- **Z-Axis Hierarchy:** 
    - **Level 0 (Background):** Deep Navy (#0A0E14).
    - **Level 1 (Card/Section):** Slate (#161B22) with a 1px border.
    - **Level 2 (Dropdowns/Modals):** Lighter Slate (#1C2128) with a slightly brighter border (#444C56).
- **Interactive States:** Instead of elevation, use "glowing" inner borders or subtle outer glows (box-shadow: 0 0 8px) in the primary color to indicate focus or active status.

## Shapes

The shape language is **Sharp (0px)**. 

To maintain the tactical, high-fidelity aesthetic, all UI components—including buttons, input fields, cards, and tabs—must have 90-degree corners. This maximizes the use of every pixel and reinforces the "professional instrument" metaphor. Rounded corners are only permitted for status pips and circular user avatars to provide a clear visual distinction from functional UI elements.

## Components

- **Buttons:** Sharp-edged with 1px borders. Default state is ghost (transparent fill). Hover state uses a solid fill with a slight outer glow in the theme color.
- **Data Tables:** The core of the system. Use "Zebra" striping with very low contrast differences. Headers must be `label-caps` in JetBrains Mono.
- **Status Indicators:** Small square pips with a `2px` blur "glow" effect to represent live system health (Green = Active, Red = Blocked, Amber = Processing).
- **Input Fields:** Dark background (#0D1117) with a subtle bottom-border only, or a full 1px border that brightens on focus. Use monospaced font for numerical inputs.
- **Cards:** Simple containers with a mandatory header bar. Header bars should have a slightly different background color and a title in the `label-caps` style.
- **Revenue Tickers:** Real-time scrolling or pulsing numerical components using `display-mono` to show aggregate losses/gains.
- **AI Insights (Amber):** Containers designated for AI mentions should feature an "Amber" left-accent border and a very subtle amber tint in the background to distinguish them from raw data.