---
name: Kitchen Intelligence System
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#434655'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
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
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 16px
  gutter: 8px
  cell-padding-v: 6px
  cell-padding-h: 8px
  compact-gap: 4px
---

## Brand & Style

This design system is engineered for the high-velocity, high-stress environment of professional kitchen management. The aesthetic is rooted in **Modern Utility**, drawing inspiration from industrial kitchen equipment and traditional paper ticketing systems. 

The brand personality is authoritative, efficient, and unsentimental. It prioritizes "back-of-house" functionality over decorative flourishes, utilizing a "tool-first" approach. The interface minimizes cognitive load through a strict information hierarchy, allowing operators to manage complex inventory, pricing, and labor data with high precision. The emotional response is one of controlled mastery and professional reliability.

## Colors

The palette is anchored by "Kitchen-Ticket" neutrals. The primary background (`#F8F7F2`) mimics high-grade parchment to reduce eye strain under harsh fluorescent lighting, while slate grays provide structural grounding.

- **Action Blue (Primary):** Used exclusively for primary interactions, navigational anchors, and standard "Commit" actions.
- **Alert Orange (Secondary):** Reserved for high-priority price recommendations, inventory shortages, or margin warnings.
- **Surface Tones:** A range of muted slates and parchment washes are used to differentiate data regions without relying on heavy lines.
- **Status Indicators:** High-chroma red and green are used sparingly but decisively for critical operational states (e.g., "Out of Stock" or "Target Margin Met").

## Typography

The typography system is optimized for "fast-scan" data environments. We utilize **Inter** for its exceptional legibility in small sizes and high-density layouts. 

- **Data Tables:** Use `body-sm` for standard row content. 
- **Numerical Values:** For price lists and inventory counts, use `data-mono` (JetBrains Mono) to ensure tabular lining, allowing operators to compare digits vertically with ease.
- **Labels:** Use `label-caps` for table headers and input labels to create clear visual separation from the data itself.
- **Mobile Scaling:** Headlines scale down by 15% on mobile devices, while body text remains at 13px/14px to maintain readability.

## Layout & Spacing

This design system employs a **Density-First Fluid Grid**. Layouts are structured on a 4px baseline shift to maintain tight vertical rhythm.

- **Density:** Padding is intentionally compact. Data-heavy tables use `6px` vertical padding to maximize the number of rows visible above the fold.
- **Grid:** A 12-column grid is used for desktop dashboards, collapsing to a single-column stack on mobile. 
- **Information Grouping:** Related data points are grouped with `compact-gap` (4px) to indicate relationship, while distinct functional sections use `container-margin` (16px) for clear separation.
- **Breakpoints:**
  - Mobile: < 640px (Margins: 12px)
  - Tablet: 640px - 1024px (Margins: 16px)
  - Desktop: > 1024px (Margins: 24px)

## Elevation & Depth

To maintain high density, the design system avoids expansive shadows. Depth is communicated through **Tonal Layering** and **Structural Outlines**.

- **Level 0 (Base):** The parchment background (`#F8F7F2`).
- **Level 1 (Surface):** White containers with a 1px border in a muted slate (`#E2E8F0`). No shadow.
- **Level 2 (Interactive):** Cards or modals use a tight, 2px "Technical Shadow" (0px 2px 4px rgba(0,0,0,0.05)) to indicate they are floating or draggable.
- **State Changes:** Hover states are indicated by a subtle background shift (Slate-50) rather than an increase in elevation, keeping the interface feeling "flat" and efficient.

## Shapes

The shape language is strictly **Soft-Industrial**. 

- **Radius:** A consistent `4px` (Small) radius is applied to buttons, input fields, and containers. This provides a professional, "manufactured" feel that is more approachable than sharp corners but more space-efficient than large rounds.
- **Interactive Elements:** Buttons and tags use the same `4px` radius to maintain a cohesive visual unit.
- **Status Tags:** Small-scale badges for status (e.g., "In Stock") use a `2px` radius to feel distinct from primary action buttons.

## Components

- **Data Tables:** The core of the system. Rows must support zebra-striping on hover. Column headers use `label-caps`. Cell alignment: Text is left-aligned, numerical data is right-aligned using monospaced font.
- **Action Buttons:**
  - *Primary:* Solid Action Blue, white text.
  - *Secondary:* Ghost style with 1px border.
  - *Alert:* Solid Alert Orange for destructive or critical price updates.
- **Input Fields:** 32px height for density. 1px slate border. Focus state uses a 1px Action Blue inset ring.
- **Inventory Chips:** Compact badges with background tints corresponding to status (e.g., a light orange background with dark orange text for "Low Stock").
- **Ticket Cards:** Used for order summaries. Features a "perforated" divider line and uses high-contrast typography to mimic physical kitchen tickets.
- **Alert Banners:** Full-width, low-profile banners that pin to the top of the workspace for system-wide notifications.