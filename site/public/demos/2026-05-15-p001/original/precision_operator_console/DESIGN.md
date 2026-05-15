---
name: Precision Operator Console
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
  on-surface-variant: '#d8c3ad'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#a08e7a'
  outline-variant: '#534434'
  surface-tint: '#ffb95f'
  primary: '#ffc174'
  on-primary: '#472a00'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#855300'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#c1cce4'
  on-tertiary: '#263143'
  tertiary-container: '#a6b1c8'
  on-tertiary-container: '#394457'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  container-padding: 8px
---

## Brand & Style

The design system is engineered for high-stakes compliance operations and industrial data management. It adopts a **Factory-Console** aesthetic, prioritizing information density, rapid scanning, and utility over decorative flourishes. The visual language evokes a "War Room" atmosphere—focused, urgent, and technically precise.

The style is a hybrid of **Industrial Minimalism** and **Technical Utility**. It rejects soft shadows and organic shapes in favor of rigid grids, thin borders, and high-contrast indicators. Every pixel serves a functional purpose, ensuring operators can manage massive SKU volumes and compliance lifecycles without cognitive fatigue.

## Colors

The palette is rooted in a "Deep Dark" baseline to reduce eye strain during long operational shifts. 

- **Surfaces:** Utilize a hierarchy of Deep Navy (`#0F172A`) for base backgrounds and Slate (`#1E293B`) for container surfaces.
- **Accent:** A singular, sharp Amber (`#F59E0B`) is reserved exclusively for primary actions, compliance warnings, and critical status indicators. 
- **Borders:** Use a low-opacity Slate (`#334155`) for structural containment to keep the UI light despite the density.
- **Feedback:** Use a clinical Red for failures and a muted Emerald for compliance passes; these should be desaturated to avoid clashing with the primary Amber.

## Typography

Typography is focused on legibility and density. We use **Geist** for its systematic, technical feel and excellent readability at small scales. **JetBrains Mono** is introduced for secondary data points, SKUs, and labels to reinforce the "console" aesthetic and ensure character distinction (e.g., distinguishing '0' from 'O').

- **Compact Scaling:** Type sizes are intentionally small to maximize data visibility. 
- **Monospacing:** Use monospaced fonts for all numerical data, serial numbers, and timestamps to ensure vertical alignment in tables.
- **Hierarchy:** Established through weight and uppercase labeling rather than large jumps in font size.

## Layout & Spacing

This design system utilizes a **Fixed-Grid Efficiency** model. The layout is optimized for 1440px+ desktop displays, using a tight 4px baseline grid.

- **Density:** Padding within components is aggressive (typically 4px or 8px) to minimize scroll depth.
- **Structural Zones:** A fixed left-hand navigation (64px collapsed) and a persistent global header (48px) frame the fluid "War Room" data zone.
- **Dividers:** Use 1px solid borders instead of whitespace to separate functional areas, maintaining the "factory-panel" feel.
- **Scroll Management:** Multi-pane layouts are preferred over long single-page scrolls. Individual widgets and table bodies should have independent scroll containers.

## Elevation & Depth

Elevation is achieved through **Tonal Layering** rather than shadows. In this high-density environment, shadows create visual "fuzz" that impedes speed.

- **Base Layer:** Deep Navy (`#0F172A`) for the application background.
- **Surface Layer:** Slate (`#1E293B`) for widgets, cards, and table headers.
- **Overlay Layer:** A slightly lighter Slate (`#334155`) for hover states and active selections.
- **Borders:** All interactive elements must have a defined 1px border. Use high-contrast Amber borders for "Warning" states and muted Slate for "Neutral" states.

## Shapes

The shape language is strictly **Sharp (0px)**. Rounded corners are avoided to maximize screen real estate and reinforce the industrial, no-nonsense character of the tool.

- **Buttons & Inputs:** Hard 90-degree angles.
- **Badges:** Rectangular with 1px borders.
- **Data Visualization:** Bars and meters must use flat caps and sharp edges.

## Components

### Buttons & Inputs
- **Primary Button:** Solid Amber background with black text. No gradients.
- **Secondary Button:** Ghost style with a 1px Slate border and white text. 
- **Input Fields:** Darker background than the container; 1px Slate border that turns Amber on focus. Labels are always positioned above the field in `label-caps`.

### Tables (The Core)
- **Compactness:** Row height set to 32px.
- **Zebra Striping:** Subtle alternation between Slate shades to aid horizontal scanning.
- **Evidence Badges:** Small, rectangular tags indicating "Verified," "Pending," or "Risk." Use `data-mono` type.

### Risk Meters
- Horizontal segmented bars. Each segment represents a compliance checkpoint. Segments fill with Amber or Red based on risk severity.

### Status Indicators
- Use "Micro-lights"—small 6px square indicators—next to line items. Steady state for normal, pulsing for urgent attention.

### Detail Drawers
- Content-rich panels that slide from the right over the main grid, allowing operators to inspect SKU details without losing their place in the "War Room" list.