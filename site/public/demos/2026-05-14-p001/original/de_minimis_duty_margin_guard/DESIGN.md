---
name: De Minimis Duty Margin Guard
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#44474e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#5e604d'
  on-secondary: '#ffffff'
  secondary-container: '#e1e1c9'
  on-secondary-container: '#636451'
  tertiary: '#210001'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c0004'
  on-tertiary-container: '#f64945'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#e4e4cc'
  secondary-fixed-dim: '#c8c8b0'
  on-secondary-fixed: '#1b1d0e'
  on-secondary-fixed-variant: '#474836'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-display:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  data-numeric-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  density-compact: 4px
  density-default: 8px
---

## Brand & Style
The design system is engineered for trade compliance officers and financial analysts who manage high-volume cross-border logistics. It evokes the precision of a digital ledger and the authority of a customs manifest.

The visual direction is **Corporate / Modern** with a strong emphasis on **High-Density Data**. It rejects decorative flourishes in favor of utility, utilizing a "cockpit" mental model where information is prioritized by risk and financial impact. The aesthetic is sober, protective, and unmistakably professional, designed to instill confidence during complex margin calculations.

## Colors
The palette is rooted in the "Oxford Navy" and "Parchment" combination, creating a high-contrast environment that feels both archival and modern.

- **Primary (Deep Navy):** Used for navigation, headers, and primary actions to establish authority.
- **Secondary (Parchment/Paper):** The primary surface color. It reduces eye strain compared to pure white and mimics the feel of financial documents.
- **Alert (Restrained Red):** Reserved strictly for margin-loss flags, de minimis threshold breaches, and compliance risks.
- **Neutral Grays:** Used for "confidence bands" and secondary data columns to ensure the UI remains legible without being overwhelming.

## Typography
This design system utilizes a dual-font strategy to separate interface logic from financial data.

- **Inter:** The primary typeface for all UI controls, navigational elements, and descriptive text. It provides a neutral, highly readable foundation.
- **JetBrains Mono:** Employed for all tabular data, currency figures, HTS codes, and margin percentages. The monospaced nature ensures that columns of numbers align perfectly, allowing analysts to scan vertically for anomalies.

Headers use tight letter-spacing for a more compact, authoritative look, while labels utilize uppercase styling to differentiate them from interactive data points.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy to maintain the structural integrity of complex tables. 

- **Density:** The system defaults to a high-density spacing model. Vertical padding in tables is kept to a minimum (4px-8px) to maximize the "above-the-fold" data visibility.
- **Grid:** A 12-column grid is used for dashboard views, while data-entry screens utilize a simplified 4-column stack within a side-panel.
- **Guttering:** 16px gutters provide just enough breathing room between data clusters without wasting screen real estate.

## Elevation & Depth
This design system avoids heavy shadows and floating elements to maintain a grounded, ledger-like appearance. 

- **Tonal Layers:** Depth is achieved through surface color shifts. The main background uses the parchment surface, while active workspace containers use a slightly lighter tint.
- **Low-Contrast Outlines:** Instead of shadows, 1px solid borders in `#D1D1C1` define the boundaries of cards and table cells.
- **State Changes:** Hover states on rows are indicated by a subtle shift to a cooler gray rather than an elevation lift. This maintains the "flat" document feel.

## Shapes
The shape language is defined by **Sharp (0px)** or minimal radii. All primary containers, table headers, and input fields must feature 90-degree corners. 

This architectural rigidity mimics the look of printed compliance forms and financial spreadsheets, reinforcing the "unrefined" but precise nature of the tool. Softness is intentionally avoided to maintain a serious, technical tone.

## Components
Consistent component styling is critical for managing high-density information.

- **Buttons:** Primary buttons are solid Deep Navy with white text. Secondary buttons are outlined with sharp corners. 
- **Data Tables:** The core component. Headers are Deep Navy with white text; rows alternate between parchment and a slightly cooler gray for readability. All numerical cells use monospaced fonts.
- **Status Chips:** Small, rectangular badges with no border-radius. Margin-loss flags use the restrained red background with white text.
- **Input Fields:** Inset borders with sharp corners. The active state is indicated by a 2px navy bottom border rather than a full-frame glow.
- **Confidence Bands:** Visualized as subtle, shaded gray regions within line charts or as secondary progress bars behind data points to show the "safety margin" before reaching de minimis thresholds.
- **Landed-Cost Cards:** High-density summary blocks at the top of the UI that provide immediate "Protective" metrics (Current Margin, Duty Exposure, Risk Level).