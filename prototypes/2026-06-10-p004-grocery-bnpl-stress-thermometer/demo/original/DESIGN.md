---
name: Thermal Checkout
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#3b4b37'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#6b7c65'
  outline-variant: '#b9ccb2'
  surface-tint: '#006e16'
  primary: '#006e16'
  on-primary: '#ffffff'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#00e639'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#ffbf00'
  on-secondary-container: '#6d5000'
  tertiary: '#c00014'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffd2cd'
  on-tertiary-container: '#c40015'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#fbbc00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000c'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  data-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
  data-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 18px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 16px
  margin: 20px
  stack-gap: 2px
  receipt-padding: 24px
---

## Brand & Style
The brand personality is **Playful-Experimental** and **Visually Urgent**. It balances the clinical nature of financial stress tracking with a tactile, conceptual aesthetic inspired by thermal receipt paper and heat mapping. The goal is to make debt management feel tangible and gamified rather than intimidating.

The design style is a hybrid of **Tactile Brutalism** and **Information High-Contrast**. It utilizes physical metaphors—specifically the "long-form receipt" and "liquid heat"—to visualize financial health. The UI should evoke a sense of "digital paper," using subtle textures and bold marker strokes to highlight critical data points.

## Colors
The palette follows a **Stress Heat Map** logic, moving from safety to urgency.
- **Neon Green (#00FF41):** "Safe" zone. Used for paid-off balances and low-stress cooling periods.
- **Amber (#FFBF00):** "Warning" zone. Used for upcoming payments and moderate debt-to-income ratios.
- **Vibrant Red (#FF3131):** "Danger" zone. High-heat alerts, overdue payments, and maximum credit utilization.
- **Receipt Paper (#F4F4F2):** The primary background color. It is a slightly "dirty" off-white that mimics unprinted thermal paper.
- **Marker Pink (#FF00FF):** A high-visibility accent used for "hand-drawn" annotations, highlights, and primary calls to action.

## Typography
The system uses a high-contrast typographic pairing to distinguish between "Human" UI and "Machine" Data.

- **Plus Jakarta Sans:** Used for all interface labels, instructions, and headlines. It provides a friendly, rounded counterpoint to the sharp-edged layout. 
- **JetBrains Mono:** Used for all currency values, dates, percentages, and "receipt" content. This font reinforces the technical, transactional nature of grocery data.

Headlines should use tight tracking for a bold, impactful look. Data points should prioritize legibility and a "fixed-width" rhythm common in financial ledgers.

## Layout & Spacing
The layout follows a **Vertical Scroll Ledger** model. The primary container mimics a continuous roll of thermal paper.

- **Grid:** A standard 12-column grid is used for desktop, but the core content is centered in a narrow "Receipt Column" (max-width 600px) to maintain the paper metaphor.
- **Rhythm:** Spacing is tight and mathematical. Elements are often stacked with a `stack-gap` of 2px, creating a sharp, segmented look.
- **Edges:** Layout boundaries are defined by "Perforation" lines (dashed borders) or "Z-cut" zig-zag patterns at the top and bottom of sections.

## Elevation & Depth
This system avoids traditional soft shadows in favor of **Paper Depth**.

- **Hard Layering:** Depth is created by stacking layers with 1px black borders. When an element is "elevated," it gains a 4px offset hard shadow (no blur) in a slightly darker paper tone or the neon green/red theme color.
- **Crease Lines:** Visual hierarchy is occasionally established using horizontal lines that look like folds in paper.
- **Marker Overlays:** High-priority alerts appear as if they were highlighted with a semi-transparent digital marker, sitting "above" the text but "on" the paper surface.

## Shapes
The shape language is strictly **Sharp and Angular**. 
- All cards, buttons, and input fields have 0px border radius to mimic the cut edges of paper. 
- The only exception is the "Stress Thermometer" liquid and "Repayment Blocks," which utilize rounded internal segments to represent fluid or toy-like building blocks, creating a deliberate contrast against the rigid container.

## Components
- **Receipt Cards:** The primary container for transaction details. Features a dashed "perforation" border at the top and a sharp black 1px border. Background is white, contrasting with the off-white page background.
- **Stacked Repayment Blocks:** Visualized as solid rectangular blocks of color (Green/Amber/Red) stacked on top of each other. As a debt is paid, the "block" slides out or changes from Red to Green.
- **Stress Thermometer:** A vertical or horizontal gauge with a "mercury" fill that transitions through the heat map colors. The fill should have a slight "glow" effect when in the Red/Danger zone.
- **Marker Buttons:** Buttons do not have traditional fills. Instead, they look like text with a thick, vibrant stroke of "Marker Pink" or "Neon Green" behind them, slightly offset to look hand-applied.
- **Monospaced Data Tables:** Used for itemized grocery lists. Simple 1px horizontal dividers with "Total" amounts expressed in large JetBrains Mono display weights.
- **Checkboxes:** Square, sharp-edged boxes that fill with a solid "X" marker stroke when selected.