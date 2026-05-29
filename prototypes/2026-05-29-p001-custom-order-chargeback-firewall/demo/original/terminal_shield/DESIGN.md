---
name: Terminal Shield
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#ffffff'
  on-tertiary: '#003907'
  tertiary-container: '#72ff70'
  on-tertiary-container: '#007518'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#72ff70'
  tertiary-fixed-dim: '#00e639'
  on-tertiary-fixed: '#002203'
  on-tertiary-fixed-variant: '#00530e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
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
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 12px
  margin-sm: 16px
  margin-lg: 24px
  grid-columns: '12'
---

## Brand & Style

This design system is built for the high-stakes environment of financial risk mitigation. The brand personality is **Industrial, Vigilant, and Precise**. It rejects the "softness" of modern SaaS in favor of an **Industrial-Brutalist** aesthetic that mimics hardware interfaces and mission-critical monitoring terminals.

The target audience consists of chargeback analysts and risk operators who require maximum information density and immediate visual confirmation of "locked" or "at-risk" states. The UI evokes a sense of **absolute control and unyielding protection**, prioritizing speed of data ingestion over aesthetic decoration.

- **Minimalist Industrial:** Heavy use of structural lines, limited but purposeful color, and significant functional density.
- **Hard-Edged:** No rounded corners or soft blurs. Every element feels machined and rigid.
- **Functional Authority:** High-contrast states ensure that "Evidence" feels like a physical asset and "Risk" feels like a tactical alert.

## Colors

The palette is rooted in a **Deep Charcoal** environment to reduce eye strain during long "operator-mode" shifts, utilizing high-chroma safety colors for status signaling.

- **Base:** The background uses a true neutral charcoal (`#121212`) to allow high-contrast elements to pop.
- **Alert Amber (#FFB800):** Used exclusively for 'at-risk' margins, pending disputes, and items requiring immediate operator intervention.
- **Tactical Green (#00FF41):** Used for 'locked' evidence, successful firewalls, and verified data points. It represents a "safe" or "secured" state.
- **Safety White (#FFFFFF):** Reserved for primary actions, critical labels, and the highest level of information hierarchy.
- **Surface Tiers:** UI layering is achieved through subtle shifts in charcoal values rather than shadows.

## Typography

The typography strategy differentiates between **Narrative UI** and **Data Assets**.

- **Hanken Grotesk** provides a sharp, contemporary sans-serif for functional UI elements, headers, and instructional text. It remains legible even at high densities.
- **JetBrains Mono** is the "Operator Font." It is used for all variable data points, transaction IDs, currency amounts, timestamps, and "Locked" evidence states. The monospaced nature ensures that columns of numbers align perfectly for rapid scanning.
- **Text Transform:** Use uppercase for labels and sub-headers to reinforce the industrial, documented feel of the interface.

## Layout & Spacing

This system utilizes a **High-Density Fluid Grid**. The layout philosophy is "Data over White Space."

- **Layout Model:** A strict 12-column grid with narrow 12px gutters. This allows for maximum horizontal data expansion in complex tables.
- **Operator Queues:** Sidebar or left-aligned queues should be compact (280px-320px) to maximize the "Command Center" view of the primary evidence firewall.
- **Density:** We use a 4px base unit. Component padding is aggressive (typically 8px or 12px) to allow more rows of data to be visible above the fold.
- **Adaptation:** On smaller screens, the layout collapses sidebars into drawers, but data tables do not wrap—they utilize horizontal scrolling to maintain the integrity of the data columns.

## Elevation & Depth

Depth is conveyed through **Hard Borders** and **Tonal Layering** rather than light and shadow.

- **Tonal Layers:** The primary workspace is `#121212`. Secondary containers (like data cards or toolbars) use `#1A1A1A`. Active or focused elements use `#242424`.
- **Low-Contrast Outlines:** All containers must have a 1px solid border (`#2A2A2A`). 
- **The "Lock" State:** When a piece of evidence is "Locked" or "Verified," the border thickness increases to 2px and takes on the Tactical Green color.
- **Zero Shadows:** Shadows are strictly prohibited. The system relies on contrast and border-weight to denote hierarchy, reinforcing the "proof-state" aesthetic.

## Shapes

The shape language is **Strictly Geometric and Sharp**. 

- **Corner Radius:** All elements (buttons, inputs, cards, tags) have a 0px radius. This reinforces the "hard-edged" industrial feel and maximizes the usable internal area for data.
- **Separators:** Use 1px vertical and horizontal lines to divide data within tables, creating a "cells-in-a-grid" look similar to technical blueprints.
- **Indicators:** Use squares and triangles for status indicators rather than dots or circles.

## Components

- **Buttons:** 0px radius. Primary buttons are White with Black text. Secondary buttons are Ghost-style with 1px White borders. "Action" buttons (e.g., *Lock Evidence*) use Tactical Green backgrounds.
- **Data Grids:** High-density. Rows are 32px tall. Header cells use `label-caps` typography with a subtle background tint (`#1A1A1A`).
- **Tactical Chips:** Used for risk levels. Amber chips for "Warning," Red for "Critical," and Green for "Firewall Active." Chips should use `data-mono` font.
- **Input Fields:** Inverted styling. Black backgrounds with 1px grey borders. On focus, the border turns White or Amber depending on the field's context.
- **The "Evidence Card":** A specialized component with a heavy 2px border. It contains a "Lock" icon in the top right. When "Locked," the entire card header background turns Tactical Green.
- **Status Indicators:** "At-Risk" items use a flashing 2px Amber left-border. "Secured" items use a static 2px Green left-border.
- **Activity Log:** A vertical list using `data-mono`, resembling a terminal output, used for tracking chargeback lifecycle events.