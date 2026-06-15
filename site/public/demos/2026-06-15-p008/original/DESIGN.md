---
name: Audit & Forensic Ops
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#121212'
  on-primary-container: '#7e7d7d'
  inverse-primary: '#5f5e5e'
  secondary: '#c4c7c8'
  on-secondary: '#2e3132'
  secondary-container: '#494c4d'
  on-secondary-container: '#babcbd'
  tertiary: '#ffb3ac'
  on-tertiary: '#680008'
  tertiary-container: '#2f0002'
  on-tertiary-container: '#e63d3b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c4c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#444748'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  data-table:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
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
  gutter: 8px
  row-height-compact: 32px
  row-height-standard: 44px
---

## Brand & Style

This design system is engineered for high-stakes retail operations and fraud investigation. The brand personality is clinical, authoritative, and precise, designed to support operators making rapid, high-impact financial decisions. The emotional response is one of serious focus and forensic clarity.

The visual style is **Corporate Modern with Functional Brutalist influences**. It prioritizes information density over aesthetic flourish. Every pixel must serve a purpose; there is no room for decorative whitespace. The interface utilizes a "dark-mode primary" philosophy for focus areas (the "Charcoal" workbench) contrasted against "Fog" analytical surfaces to reduce eye strain during prolonged investigative sessions.

- **Focus:** Data density, clear visual hierarchy, and immediate identification of risk.
- **Tone:** Technical, unsentimental, and reliable.

## Colors

The palette is centered on a "Deep Audit" theme. 

- **Primary (Charcoal):** Used for the main workbench, sidebars, and deep-background surfaces. It provides a low-distraction environment for forensic work.
- **Secondary (Fog):** A high-utility neutral used for secondary panels, borders, and data grid backgrounds to ensure legibility of dense text.
- **Escalation Red:** Reserved exclusively for high-risk decisions, fraud alerts, and platform-level escalations. It is the "emergency" signal.
- **Decision Amber:** Used for cautionary states, pending reviews, and risk markers that require human intervention but aren't yet confirmed fraud.
- **Text:** High-contrast off-white (#FFFFFF for headers, #E0E0E0 for body) to ensure maximum readability against dark backgrounds.

## Typography

This system uses **Hanken Grotesk** for its sharp, contemporary geometry which excels in dense interfaces. For technical metadata, ID strings, and financial values, **JetBrains Mono** is utilized to provide a clear, monospaced distinction that prevents character confusion (e.g., 0 vs O).

- **Headlines:** Small and punchy. We avoid oversized typography to preserve vertical space for data.
- **Data Tables:** Custom sizing at 13px ensures maximum row density while maintaining a "professional tool" feel.
- **Labels:** All technical metadata (Transaction IDs, SKU numbers) should be rendered in Mono for forensic precision.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Navigation and Detail Inspector panels are fixed width to maintain consistent ergonomics, while the central Data Workbench (tables/timelines) fluidly expands.

A 4px baseline grid is strictly enforced to maintain a compact, "operator-dense" layout. 
- **Margins:** 16px global margins for primary containers.
- **Gaps:** 8px gutters between functional modules to maximize information density without clutter.
- **Breakpoints:**
  - **Desktop (1440px+):** Full 3-column layout (Nav | Main Table | Inspector).
  - **Tablet (1024px):** 2-column layout (Nav | Main Table) with Inspector as an overlay.
  - **Mobile:** Not recommended for this profile; display simplified "Alerts Only" view.

## Elevation & Depth

Depth is communicated through **Tonal Layering and Low-Contrast Outlines** rather than soft shadows. This maintains the "clinical" feel of an auditing tool.

- **Level 0 (Background):** Charcoal (#121212).
- **Level 1 (Panels):** Neutral Surface (#1E1E1E) with a 1px border (#2C2C2C).
- **Level 2 (Active States/Modals):** Fog Grey surfaces for high-contrast inspection areas.
- **Interactive Elements:** Use 1px inset borders to simulate "pressed" or "active" states, creating a tactile, instrument-panel feel.
- **Shadows:** Avoided entirely. Use color value shifts to show hierarchy.

## Shapes

The design system utilizes **Soft (0.25rem)** roundedness. This provides a professional, modern edge that is less aggressive than 90-degree corners but avoids the "friendly/consumer" feel of pill shapes.

- **Buttons & Inputs:** 4px radius.
- **Status Chips:** 2px radius (near-sharp) to emphasize their role as technical indicators.
- **Cards/Panels:** 4px radius.

## Components

### Retail-Ops Tables
Data density is the priority. Row heights are locked at 32px. Use Zebra-striping (Charcoal/Neutral) for tracking across wide monitors. Columns for "Risk Score" should use heat-map background colors (low-opacity Amber/Red).

### Status Chips (Fraud/Trust)
Small, rectangular indicators with `label-mono` text. 
- **Fraud:** Red background, white text.
- **Verified:** Green border, green text (low saturation).
- **Review:** Amber background, black text.

### Timeline Trackers
A vertical "Stepper" component using 1px lines. Shipping milestones use neutral icons; exceptions (e.g., "Address Change Mid-Transit") are highlighted in Escalation Red with a warning icon.

### Decision Builder Panels
A footer-pinned or sidebar component containing high-contrast action buttons. The "Final Decision" buttons (e.g., *Approve Refund*, *Block User*) must have distinct visual weight, with the riskiest action (Escalate) always positioned on the far right with a 1px Red border.

### Input Fields
"Ghost" style—1px border with no fill until focused. Focus state uses a 1px solid white border to indicate the operator is currently modifying a data point.