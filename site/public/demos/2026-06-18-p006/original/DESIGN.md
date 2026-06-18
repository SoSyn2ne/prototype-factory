---
name: Kinetic Operator
colors:
  surface: '#f7f9ff'
  surface-dim: '#c1ddfb'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#d8eaff'
  surface-container-highest: '#cee5ff'
  on-surface: '#001d32'
  on-surface-variant: '#3b494c'
  inverse-surface: '#16334a'
  inverse-on-surface: '#e8f2ff'
  outline: '#6b7a7d'
  outline-variant: '#bac9cc'
  surface-tint: '#006875'
  primary: '#006875'
  on-primary: '#ffffff'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#00daf3'
  secondary: '#5a5f62'
  on-secondary: '#ffffff'
  secondary-container: '#dce0e4'
  on-secondary-container: '#5e6367'
  tertiary: '#49607c'
  on-tertiary: '#ffffff'
  tertiary-container: '#bad3f3'
  on-tertiary-container: '#435b76'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#dfe3e7'
  secondary-fixed-dim: '#c3c7cb'
  on-secondary-fixed: '#171c1f'
  on-secondary-fixed-variant: '#43474b'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#b0c9e8'
  on-tertiary-fixed: '#011d35'
  on-tertiary-fixed-variant: '#314863'
  background: '#f7f9ff'
  on-background: '#001d32'
  surface-variant: '#cee5ff'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  container-padding: 16px
  grid-gutter: 8px
  tight-stack: 4px
  section-gap: 24px
---

## Brand & Style
The design system is engineered for high-stakes decision-making in supply chain management. It adopts a **Production-Console** aesthetic, prioritizing information density, clarity, and rapid pattern recognition over decorative elements.

The personality is disciplined and analytical. It utilizes a **Refined Industrial** style—combining the structural rigor of technical documentation with modern interface efficiency. It avoids "marketing fluff," relying instead on strict alignment, low-elevation layering, and a high-contrast action logic to guide the user through complex reformulation workflows.

## Colors
This design system utilizes a "Muted Technical" palette. The background is a crisp off-white to reduce eye strain during long shifts, while the structural elements use deep slates and cool grays to establish hierarchy.

- **Primary (Electric Cyan):** Reserved strictly for the "Critical Path"—recommended actions, primary buttons, and active data selections.
- **Surface Neutrals:** A range of slates (from `#102A43` to `#F0F4F8`) defines the console's structure.
- **Functional Accents:** Safety Orange or Red is used only for "Risk" indicators, while Green is reserved for "System Stable" states.

## Typography
The typography system is built for legibility in dense environments. **Inter** serves as the primary typeface for its neutral character and exceptional readability at small scales.

**Critical Requirements:**
- **Tabular Numerals:** All numeric data in grids and tables must use `font-variant-numeric: tabular-nums`. This ensures columns of numbers align vertically for quick scanning.
- **Monospaced Accents:** **JetBrains Mono** is used for system labels, SKU codes, and status metadata to distinguish "System Data" from "User Content."
- **Scale:** Type sizes are kept compact (13px-14px for body) to maximize screen real estate.

## Layout & Spacing
The system follows a **Fixed-Column Grid** for data views and a **Fluid Dashboard** model for general layouts. It uses a strict 4px baseline grid to maintain density.

- **Desktop:** 12-column grid with 8px gutters. Components are "operator-dense," meaning margins are minimized to keep related data points within a single eye-span.
- **Mobile/Tablet:** Focus on single-column stacks with horizontal scrolling for large data tables.
- **Padding:** Internal component padding should not exceed 12px for primary containers to maintain the "Production-Console" feel.

## Elevation & Depth
Depth is conveyed through **Low-Contrast Outlines** and **Tonal Layering** rather than shadows. This minimizes visual noise.

- **Borders:** Use 1px solid strokes (`#D9E2EC`) for all container boundaries. 
- **Active State:** Elements in a "high-focus" state (e.g., a selected reformulation row) receive a 2px Electric Cyan left-border accent.
- **Layering:** Use subtle background shifts (e.g., a slightly darker gray for a side panel) to indicate hierarchy.
- **"Taped-on" Panels:** Floating utility panels (like notes or logs) should use a flat, high-contrast background with a thick top-border, mimicking a physical document clipped to a board.

## Shapes
The shape language is **Sharp (0px)**. All containers, buttons, and input fields use hard 90-degree corners to evoke a sense of precision and industrial efficiency. 

Avoid all "pill" shapes or soft rounding. This maintains the "Console" aesthetic and allows elements to be packed tightly together without awkward negative space gaps between rounded corners.

## Components

### Data Grids & Tables
The core of the system. Rows must have a fixed height (32px or 36px). Use zebra-striping (alternating `#F0F4F8`) for long datasets. Headers are all-caps `label-mono` with a distinctive bottom border.

### Primary Buttons
Solid black or deep slate background with `primary_color` (Electric Cyan) text or a thin 2px bottom-accent. This is the only "High-Action" element.

### Status Badges
Rectangular boxes with a subtle tinted background and a 1px border.
- **Critical Risk:** Red border, Red text.
- **Stable:** Neutral gray border, Slate text.

### Input Fields
Strictly rectangular. Use `data-tabular` for numeric inputs. Focus states should switch the border color to `primary_color` without adding shadows.

### The 'Taped Note' Panel
A specific component for operator comments. It features a light yellow tint background (`#FFFBEB`) and a 1px border, used to differentiate human-added context from system-generated data.