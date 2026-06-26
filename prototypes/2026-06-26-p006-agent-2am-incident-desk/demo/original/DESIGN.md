---
name: Field-Ops Sentinel
colors:
  surface: '#0f1417'
  surface-dim: '#0f1417'
  surface-bright: '#353a3d'
  surface-container-lowest: '#0a0f12'
  surface-container-low: '#171c1f'
  surface-container: '#1b2023'
  surface-container-high: '#262b2e'
  surface-container-highest: '#313539'
  on-surface: '#dfe3e7'
  on-surface-variant: '#c4c6cd'
  inverse-surface: '#dfe3e7'
  inverse-on-surface: '#2c3134'
  outline: '#8e9197'
  outline-variant: '#44474c'
  surface-tint: '#b9c7df'
  primary: '#b9c7df'
  on-primary: '#233144'
  primary-container: '#475569'
  on-primary-container: '#bbcae1'
  inverse-primary: '#515f74'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#005d6d'
  on-tertiary-container: '#4fdaf9'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d5e3fc'
  primary-fixed-dim: '#b9c7df'
  on-primary-fixed: '#0d1c2e'
  on-primary-fixed-variant: '#3a485b'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0f1417'
  on-background: '#dfe3e7'
  surface-variant: '#313539'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
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
  margin-page: 24px
  panel-padding: 16px
  row-height-dense: 32px
  touch-target: 44px
---

## Brand & Style

The brand identity centers on **Mission-Critical Precision**. This design system is built for high-stakes operational environments where AI agents are monitored 24/7. The aesthetic is professional, disciplined, and utilitarian, drawing heavily from **Modern Corporate** and **Technical/Industrial** design movements. 

The emotional response should be one of "Unshakable Reliability." It avoids decorative flourishes in favor of data density and clarity. The visual language utilizes a "Command Center" philosophy: dark backgrounds for reduced eye strain during long shifts, sharp functional contrasts, and a rigid structural hierarchy that prioritizes the speed of information processing over visual playfulness.

## Colors

The palette is anchored in **Slate** and **Steel** to provide a grounded, industrial foundation. 

- **Primary & Secondary:** Used for structural surfaces, headers, and inactive states. 
- **Accent (Cyan):** Reserved exclusively for active "Live" actions, primary buttons, and interactive agent nodes.
- **Alert (Orange):** Dedicated to warnings and non-critical status changes to ensure immediate peripheral recognition.
- **Surface Strategy:** We utilize a deep Navy-Slate background (`#0f172a`) to allow high-contrast status rows to "pop" without creating visual vibration. Data rows use alternating Slate shades to maintain horizontal tracking in dense tables.

## Typography

This design system employs a dual-font strategy to separate narrative UI from technical data.

- **Inter:** Used for all interface controls, navigation, and headers. It provides the necessary legibility for rapid scanning of labels.
- **JetBrains Mono:** Dedicated to AI agent IDs, timestamps, logs, and telemetry values. The monospaced nature ensures that fluctuating numerical data does not cause layout shifts and remains vertically aligned in tables.
- **Hierarchy:** Use `label-caps` for table headers and section metadata to create a distinct visual "shelf" between layout containers and content.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Navigation and side-panels for agent lists are fixed-width (280px), while the central "Monitor" area is fluid to accommodate wide telemetry timelines and multi-column data tables.

- **Information Density:** We use a tight 4px baseline grid. Padding in operational panels is minimized to ensure maximum data "above the fold."
- **Grid:** A 12-column grid is used for the dashboard view. Standard operational cards span 3 or 4 columns.
- **Adaptation:** On mobile/tablet, panels stack vertically. Critical status badges and "Handoff" controls maintain a minimum **44px height** regardless of screen size to ensure field operability with gloves or in motion.

## Elevation & Depth

To maintain a disciplined, "flat-command" look, this design system avoids traditional drop shadows.

- **Tonal Layering:** Depth is conveyed through background color steps. The base canvas is the darkest, with panels being one step lighter (Slate-800), and active/hovered items another step lighter (Slate-700).
- **High-Contrast Outlines:** Instead of shadows, use 1px solid borders in Steel (`#475569`) to define panel boundaries.
- **Active State:** Use a 2px Cyan left-border on "Active" or "Focused" rows/cards to indicate the current monitoring target without adding bulk to the element.

## Shapes

The shape language is **Soft-Industrial**. 

- **Containers:** Panels and primary buttons use a 0.25rem (4px) corner radius. This provides a professional, modern feel while remaining rigid enough for a technical dashboard.
- **Status Badges:** Use "Squircle" shapes (rounded-lg) for status indicators like "LIVE" or "ERR" to distinguish them from functional buttons.
- **Data Inputs:** Must remain rectangular with minimal rounding to maximize internal space for monospaced text strings.

## Components

- **Handoff Controls:** Buttons for "Manual Override" or "Agent Handoff" must be 44px tall. They use a high-contrast Steel background with Cyan text or icons.
- **Status Rows:** Data rows in the main monitoring table must include a full-width background tint on hover. Alert rows (Orange) use a 10% opacity orange fill with a 100% opacity left-accent bar.
- **Data-Heavy Tables:** Headers are `label-caps`. Cell content is `data-mono`. Use "Zebra-striping" with subtle variations in Slate to assist horizontal scanning.
- **Timeline Component:** A horizontal scrubbable axis using Cyan for successful agent heartbeats and Orange/Red pips for incidents.
- **Chips/Badges:** Small, high-contrast pills. "Active" agents use a pulsing Cyan dot next to the label.
- **Input Fields:** Dark-themed inputs with Steel borders. On focus, the border transitions to Cyan with a subtle 2px outer glow (no blur).