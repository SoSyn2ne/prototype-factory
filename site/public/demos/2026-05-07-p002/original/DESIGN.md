---
name: Chargeback Proof Bento
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
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#ffffff'
  on-tertiary: '#472a00'
  tertiary-container: '#ffddb8'
  on-tertiary-container: '#8d5900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-mono:
    fontFamily: spaceGrotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-compact:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
  data-point:
    fontFamily: spaceGrotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: spaceGrotesk
    fontSize: 10px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 12px
  margin: 16px
  card-padding: 12px
  stack-tight: 4px
  stack-default: 8px
---

## Brand & Style
The design system is engineered as a "Cash-Defense Cockpit," prioritizing rapid information processing and defensive posturing. The brand personality is clinical, technical, and vigilant—shifting the user's mindset from passive merchant to active operator. 

Drawing from **High-Contrast Industrialism** and **Modern Technical** styles, the UI utilizes a "Bento Box" structure to compartmentalize complex data streams into digestible, high-density modules. The aesthetic avoids decorative flourishes, favoring a "form follows function" approach that evokes the reliability of a high-frequency trading terminal or an aerospace control panel. The emotional response is one of total control, industrial-grade security, and extreme efficiency.

## Colors
The palette is rooted in a "Deep Night" dark mode to reduce eye strain during prolonged "defense" sessions. 
- **Core UI:** Deep charcoals (#0F172A) and slates form the structural foundation, while crisp whites (#FFFFFF) are reserved for primary data points and high-level headers.
- **Functional Accents:** These are used sparingly but aggressively to direct the operator's eye. 
    - **Success Green:** Indicates recovered revenue and won disputes.
    - **Warning Amber:** Highlights missing evidence or incomplete profiles.
    - **Urgency Red/Orange:** Applied to "Heat Chips" for deadlines expiring in <24 hours.
- **Grayscale Spectrum:** Multiple shades of slate are used to create hierarchy within dense data tables without relying on color.

## Typography
This design system utilizes a dual-font strategy to balance legibility with technical precision. 
- **Inter** handles the majority of the UI for its exceptional readability at small sizes and high-density layouts.
- **Space Grotesk** is used for numerical data, labels, and heat chips to provide a "monospaced" technical feel that aligns values vertically for quick scanning.
- **Hierarchy:** We use extremely tight line heights and smaller font sizes (13px base) to maximize the "above the fold" data density. All labels are capitalized to distinguish them from actionable data.

## Layout & Spacing
The layout follows a **Fluid Bento Grid** philosophy. Content is organized into modular cards that snap to a 12-column system. 
- **Rhythm:** A strict 4px grid unit is used to ensure extreme density. 
- **Bento Structure:** Each module (e.g., "Evidence Checklist," "Revenue at Risk," "Deadline Feed") is contained within its own cell with consistent 12px internal padding. 
- **Sidebar:** A narrow, structured sidebar (200px) is fixed to the left for global navigation, while a contextual "Action Drawer" (320px) slides from the right for export and evidence uploading.

## Elevation & Depth
In keeping with the industrial theme, this design system rejects traditional soft shadows. Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines**:
- **Base Layer:** Background (#020617).
- **Secondary Layer (Bento Cards):** Surface (#0F172A) with a 1px solid border (#1E293B).
- **Active State:** Elements in focus or cards being interacted with receive a subtle "inner glow" or a primary white border.
- **Zero-Shadow Policy:** No drop shadows are used. Visual separation is strictly managed via border-color variance and background-color stepping.

## Shapes
The shape language is "Soft-Industrial." While the grid is rigid, a slight corner radius (4px) prevents the UI from feeling hostile or dated.
- **Primary Elements:** Bento cards and buttons use a 4px (rounded-sm) radius.
- **Heat Chips:** Status badges use a 2px radius or sharp corners to emphasize their technical, "tag-like" nature.
- **Checkboxes:** Square-edged with a 2px radius for a precise, "ticked" look.

## Components
- **Bento Cards:** The primary container. Must include a header row with a `label-caps` title and an optional "Expand" or "Settings" icon.
- **Heat Chips:** Small, high-contrast badges used for deadlines. Urgency levels are indicated by background fills (e.g., Red fill with White text for <12h).
- **Dense Checklists:** Evidence trackers use 13px Inter text with tight vertical spacing (4px between items). Incomplete items use a Slate-500 strike-through or ghost state.
- **Action Buttons:** Small-format, high-density buttons. Primary actions use White background/Black text. Secondary actions use Ghost styles with Slate borders.
- **Data Tables:** Borderless rows separated by 1px Slate dividers. Monospaced `data-point` typography for all currency values and timestamps.
- **The Sidebar:** A vertical stack of icons with `label-caps` micro-text below them, maximizing horizontal workspace for the data cockpit.
- **Timeline Component:** A vertical, dotted-line track showing the lifecycle of a dispute (Received → Analysis → Evidence Filed → Outcome).