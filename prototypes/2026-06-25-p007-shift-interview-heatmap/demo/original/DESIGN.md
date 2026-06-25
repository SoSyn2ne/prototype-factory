---
name: Shift Interview Heatmap
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 12px
  row-height-compact: 32px
  row-height-standard: 40px
---

## Brand & Style
The design system is engineered for high-utility B2B environments where speed of information processing is paramount. It prioritizes a **Compact Utility** aesthetic—minimizing negative space in favor of data density without sacrificing legibility. 

The personality is professional, objective, and fast. It avoids decorative flourishes, focusing instead on structural clarity and status-driven visual cues. The target audience—QSR (Quick Service Restaurant) managers—requires a "glanceable" interface that functions reliably under high-pressure, time-sensitive hiring windows. The emotional response should be one of control, efficiency, and confidence in the data presented.

## Colors
The palette is rooted in a sophisticated range of neutral grays to provide a "quiet" backdrop for dense information. 

- **Primary (Vibrant Indigo):** Reserved for primary actions, active states, and critical navigational highlights.
- **Surface Grays:** A refined scale of Slate and Gray hues used to differentiate table rows, card headers, and sidebars.
- **Functional Accents:** Success (Emerald), Warning (Amber), and Danger (Rose) are used exclusively for status badges and data indicators in the heatmap. These are high-chroma to ensure they stand out against the neutral UI.

## Typography
This design system utilizes **Inter** for its exceptional legibility at small scales. To maximize information density, the scale is compressed, favoring 13px and 14px sizes for primary data.

- **Data Monospace:** For timestamps and numerical IDs, use a secondary monospace font to ensure character alignment in dense tables.
- **Hierarchy:** Use font weight (SemiBold/600) rather than large size increases to denote hierarchy.
- **Labels:** Use uppercase for small labels to provide structural "anchors" for the eye when scanning fast-moving data.

## Layout & Spacing
The layout follows a **Strict Grid** model based on a 4px baseline. To achieve the requested density, internal margins are tighter than standard consumer apps.

- **Grid:** A 12-column system is used for desktop views, but the internal components (like the Heatmap) utilize a custom fractional grid based on the 7-day week or 24-hour shift cycles.
- **Compactness:** Use 12px for gutters between major components and 16px for page-edge margins.
- **Mobile/Tablet:** For QSR managers on the move, the layout stacks cards vertically but maintains the 40px touch-target height for buttons to ensure operational accuracy.

## Elevation & Depth
Depth is conveyed through **Low-Contrast Outlines** and tonal layering rather than heavy shadows. This keeps the interface feeling "flat" and efficient.

- **Tiers:** Background surfaces use the lightest gray (#F8FAFC). Cards and active containers use a pure white surface with a 1px border (#E2E8F0).
- **Active State:** Elements that are "raised" or active should use a subtle 2px soft shadow with a 10% opacity tint of the primary indigo.
- **Dividers:** Use subtle borders (#F1F5F9) instead of whitespace to separate data points in dense tables.

## Shapes
The shape language is **Soft (0.25rem)**. This provides enough rounding to feel modern and professional without wasting the space that larger "Pill" shapes occupy.

- **Components:** Buttons, inputs, and cards use a 4px radius.
- **Badges:** Status badges use a slightly larger 6px radius to distinguish them from interactive buttons.
- **Heatmap Cells:** These should remain sharp (0px) when adjacent to other cells to create a continuous "block" of data, only rounding the outer corners of the container.

## Components
- **Buttons:** Height is fixed at 40px for standard and 32px for compact. Use solid Indigo for primary actions and Ghost styles (outline-only) for secondary filters.
- **Status Badges:** Small, high-contrast pills with `label-caps` typography. Success (Green), Warning (Amber), Danger (Rose).
- **Heatmap Cells:** Interactive blocks that change color intensity based on candidate volume. On hover, they reveal a compact tooltip with specific shift data.
- **Operational Tables:** 32px row heights. Use alternating row stripes (Zebra striping) in very light gray for horizontal tracking.
- **Data Strips:** Horizontal "ribbons" used at the top of cards to show quick stats (e.g., "Avg. Time to Hire: 4.2 Days").
- **Input Fields:** 40px height with 1px inset borders. Focus state uses a 2px Indigo ring.
- **Status Cards:** Summary cards that use a colored left-border (4px width) to indicate the general health of a hiring pipeline.