---
name: Kinetic Risk
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#46474a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#ad2c00'
  on-secondary: '#ffffff'
  secondary-container: '#d83900'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#181c1e'
  on-tertiary-container: '#818487'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#872000'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#43474a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
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
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 4px
  control-height: 40px
  row-height-compact: 32px
  gutter: 16px
  margin-page: 24px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
---

## Brand & Style

The design system is engineered for a high-stakes, operator-dense environment where commercial insurance negotiations occur. The brand personality is utilitarian, precise, and authoritative, evoking a "war room" aesthetic that prioritizes speed of data ingestion over aesthetic flourish.

The style is a hybrid of **Minimalism** and **Modern Corporate**, stripped of decorative elements. It utilizes a strict hierarchy to manage tension during renewals. The emotional response is one of controlled urgency—professional, stable, and hyper-focused on risk resolution. Visual interest is derived from data density and technical precision rather than imagery or soft gradients.

## Colors

The palette is functional and binary. **Charcoal (#1A1A1B)** serves as the primary anchor for typography and structural elements, providing a grounded, serious tone. **Fog (#F8F9FA)** and **Silver-Grey (#E9ECEF)** form the background layers, creating subtle differentiation between UI containers without introducing visual noise.

The high-contrast **Red-Orange (#FF4500)** is reserved strictly for unresolved risks, critical alerts, and required actions. This color must be used sparingly to maintain its psychological impact; when it appears, it signals a break in the negotiation flow that requires immediate operator intervention.

## Typography

This design system utilizes **Inter** exclusively to ensure maximum legibility in data-heavy views. The type scale is compact, favoring clarity and information density over white space. 

Key typographic rules:
- **Numerical Data:** Use tabular figures (`tnum`) for all currency, percentages, and risk scores to ensure vertical alignment in tables.
- **Hierarchy:** Use weight (600) rather than size to differentiate sections. Headlines remain small to keep more data "above the fold."
- **Labels:** Uppercase labels with slight tracking are used for metadata and table headers to distinguish them from actionable content.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for dashboard views and a **Fluid Content** model for negotiation logs. It is optimized for 1440px+ desktop displays where operators manage multiple streams of information simultaneously.

- **Grid:** 12-column system with 16px gutters.
- **Density:** Vertical rhythm is tight. Standard data rows are 32px, while primary interactive controls (buttons, inputs) are 40px to ensure a clear "hit area" despite the dense surroundings.
- **Reflow:** On smaller screens (Tablets), sidebars collapse into icons. Mobile is treated as a "read-only/alert" state, reflowing into a single-column stack with simplified data points.

## Elevation & Depth

This design system rejects deep shadows and skeuomorphism in favor of **Low-contrast outlines** and **Tonal layers**. 

Depth is communicated through:
- **Borders:** 1px solid strokes in `Silver-Grey` define the boundaries of cards and data sections.
- **Layering:** The base page uses `Fog`. Active containers or "work zones" use a white background to pull forward.
- **States:** Hover states use a subtle shift to a darker grey or a 1px Charcoal border. Shadows are avoided entirely unless used as a 2px hard "kick" for active dropdown menus to separate them from the grid.

## Shapes

The shape language is "Soft" but leans toward the technical. A consistent 4px (`0.25rem`) corner radius is applied to buttons, input fields, and cards. This slight rounding prevents the UI from feeling aggressive while maintaining the professional, structured look of an enterprise tool. High-action elements like "Risk Alerts" retain this same radius—consistency in shape ensures that color is the only variable signaling urgency.

## Components

- **Buttons:** Primary buttons are `Charcoal` with white text. Alert buttons (e.g., "Reject Quote") use `Red-Orange`. Use ghost buttons (Charcoal border, no fill) for secondary actions to reduce visual noise.
- **Data Tables:** The core of the app. Use zebra-striping with `Fog` and `Silver-Grey`. Column headers are `label-caps`. Hovering a row should trigger a 1px Charcoal border internally to highlight the specific negotiation line.
- **Input Fields:** 40px height, 1px Silver-Grey border. Focus state is a 1px Charcoal border. Error states use a 1px Red-Orange border with a trailing icon.
- **Status Chips:** Small, rectangular with 2px radius. Neutral statuses use Grey/Charcoal. High-risk or "Action Required" statuses use Red-Orange background with white text.
- **Negotiation Feed:** A compact list component using `body-sm`. Individual entries are separated by 1px Silver-Grey dividers. Use a "Time-stamp" in `data-mono` for every entry.
- **KPI Cards:** Simple containers with a `label-caps` title and a large `headline-lg` value. No icons unless they represent a Red-Orange risk trend.