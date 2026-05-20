---
name: Vigilance Terminal
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
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#251400'
  on-tertiary-container: '#b47300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 12px
  cell-padding-v: 8px
  cell-padding-h: 12px
---

## Brand & Style
The design system is engineered for high-stakes revenue operations and citation recovery. It prioritizes information density and cognitive efficiency over aesthetic ornamentation. The visual language is inspired by financial terminals and industrial control systems, emphasizing a **Utility-First** and **Pragmatic** approach. 

The brand evokes a sense of cold authority, precision, and relentless monitoring. It is designed for professional operators who manage large volumes of publisher data and require immediate clarity on risk and recovery status. The interface acts as a transparent tool, minimizing distractions to facilitate rapid decision-making in high-pressure environments.

## Colors
The palette is rooted in a "Deep Slate" spectrum to reduce eye strain during prolonged monitoring sessions. 

- **Base:** The UI utilizes `#020617` for the background, with `#0F172A` used for container surfaces to create a subtle hierarchy of depth.
- **Accents:** Semantic colors are used with extreme intent. **Critical (Amber/Orange)** signals high-risk citation loss; **Recovery (Teal/Emerald)** indicates successful revenue reclamation; **Neutral (Indigo)** is reserved for primary actions and system-level notifications.
- **Contrast:** Text colors prioritize WCAG AAA standards for small-scale data, using varying shades of Slate-grey to distinguish between primary data and metadata.

## Typography
The design system utilizes **IBM Plex Sans** for its exceptional technical clarity and "engineered" feel. 

- **Scale:** The type scale is compressed to accommodate high-density data views. The default body size is 14px, scaling down to 11px for utility labels and metadata.
- **Numerical Data:** For tabular data and financial figures, use `font-variant-numeric: tabular-nums` to ensure columns align perfectly for rapid scanning.
- **Weight:** Use Semibold (600) for headers to provide clear section breaks without requiring excessive whitespace. Bold (700) is reserved exclusively for the `label-caps` style used in table headers and small tags.

## Layout & Spacing
The layout follows a **Strict Grid** model based on 4px increments. 

- **Density:** Padding is minimized to maximize the "above the fold" information. Standard dashboard modules should use 16px of internal padding.
- **Grid:** A 12-column fixed grid is used for the primary dashboard layout. Inside modules (like data tables), a fluid layout is preferred to allow columns to expand based on data length.
- **Responsive:** On tablet, the 12-column grid collapses to 6 columns. For mobile, all modules stack vertically with a reduced 12px gutter to preserve horizontal space for data cells.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering** and **Crisp Borders** rather than shadows. 

- **Surfaces:** There are three primary levels:
  1. `Level 0 (Background)`: The deepest slate (#020617).
  2. `Level 1 (Modules)`: The primary container surface (#0F172A).
  3. `Level 2 (Overlays)`: Context menus and tooltips (#1E293B), defined by a high-contrast border (#334155).
- **Outlines:** Every interactive element and module must have a 1px solid border. Avoid all soft blurs or drop shadows to maintain a "blueprint" aesthetic.

## Shapes
The shape language is strictly **Geometric and Sharp**. 

- **Corners:** Every element—including buttons, input fields, cards, and badges—uses a 0px border-radius. This reinforces the systematic, industrial nature of the tool.
- **Visual Rhythm:** The absence of curves allows for tighter alignment of elements and ensures that the UI feels integrated into the screen's pixel grid.

## Components
Consistent implementation of these components is vital for the operator experience:

- **Data Tables:** These are the core of the system. Use 1px borders between rows. Header cells must use the `label-caps` typography style with a subtle background fill (#1E293B). Implement zebra-striping for readability in wide tables.
- **Status Badges:** Rectangular (sharp) containers with a 1px border. Use the semantic accent colors (Amber/Teal/Indigo) for the border and a low-opacity version of that color for the background.
- **Risk-Strips:** High-priority alerts should use a 4px solid left-border (Critical/Recovery) on a card or table row to immediately draw the eye without cluttering the interface.
- **Input Fields:** Use a dark background (#020617) with a 1px Slate-800 border. On focus, the border changes to Indigo (#6366F1).
- **Buttons:** Utility-first buttons. Primary buttons use a solid Indigo background; secondary buttons are "ghost" style with a 1px border and no fill until hover.
- **Compact Navigation:** A vertical sidebar using 24px icons and 12px labels, designed to be as narrow as possible to give horizontal space back to the data modules.