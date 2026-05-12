---
name: Compliance Operations System
colors:
  surface: '#051425'
  surface-dim: '#051425'
  surface-bright: '#2c3a4d'
  surface-container-lowest: '#010f20'
  surface-container-low: '#0d1c2e'
  surface-container: '#122032'
  surface-container-high: '#1d2b3d'
  surface-container-highest: '#283648'
  on-surface: '#d5e3fc'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d5e3fc'
  inverse-on-surface: '#233144'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#ffb4ab'
  on-tertiary: '#690005'
  tertiary-container: '#390002'
  on-tertiary-container: '#f23733'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#051425'
  on-background: '#d5e3fc'
  surface-variant: '#283648'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  diff-added:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 12px
  cell-padding-x: 8px
  cell-padding-y: 6px
---

## Brand & Style

This design system is engineered for the high-stakes environment of legal risk management and HR compliance. The brand personality is **authoritative, vigilant, and clinical**. It rejects the trend of "soft" SaaS dashboards in favor of a "legal-risk lint" aesthetic—visualizing data as something to be audited, parsed, and corrected.

The design style is a hybrid of **Corporate Modern** and **Utility-Driven Brutalism**. It prioritizes information density and ocular efficiency over whitespace. The UI should feel like a high-precision instrument: every border has a purpose, every color indicates a status, and every typeface is chosen for legibility under scrutiny. The emotional response is one of controlled urgency and absolute clarity.

## Colors

The palette is anchored in a **Dark Mode** foundation to reduce eye strain during prolonged "linting" sessions. 

- **Foundation:** The base is `Deep Navy` (#020617) with `Slate Gray` (#475569) used for secondary text and structural borders.
- **Action & Status:** 
    - **Amber (#F59E0B):** Reserved strictly for warnings, pending reviews, and "caution" states.
    - **Crimson (#DC2626):** Used for critical violations, legal blockers, and high-risk failures.
    - **Success Green (#10B981):** A sharp, high-visibility green for "compliant" and "resolved" states.
- **Accents:** Use a subdued blue-gray for interactive states to maintain a disciplined, monochromatic feel until a risk state triggers a color alert.

## Typography

The typographic system utilizes **Inter** for structural UI elements and **JetBrains Mono** for all data-dense views, diffs, and status indicators.

- **Inter:** Used for navigation, headers, and instructional text to provide a modern, professional framework.
- **JetBrains Mono:** The workhorse of the system. It must be used for any content pulled from legal documents, employee records, or risk logs. The fixed character width allows operators to scan vertically for discrepancies in data strings or compliance codes.
- **Letter Spacing:** Tightened slightly on headings for a "dense" feel, and expanded on mono-spaced labels for maximum clarity at small sizes.

## Layout & Spacing

This design system employs a **Fixed Grid** model within a flexible container. The spacing rhythm is based on a **4px baseline**, optimized for high information density.

- **Density:** Padding is intentionally compact. Tables and lists should maximize vertical real estate, allowing the user to view at least 20–25 rows of data above the fold.
- **Grid:** A 12-column system is used for dashboard layouts, but individual "Work Views" utilize a split-pane approach (Side-by-side diffing) with a 1px vertical divider.
- **Breakpoints:**
    - **Desktop (1440px+):** Full multi-pane view with persistent sidebar.
    - **Tablet (768px-1024px):** Collapsed sidebar, prioritized data columns.
    - **Mobile:** Not prioritized for this "operator" tool, but should reflow to a single-column risk-list view.

## Elevation & Depth

Depth is conveyed through **Tonal Layering and Sharp Borders** rather than shadows. This maintains the "clinical" feel of a document-based tool.

- **Flat Hierarchy:** Surfaces do not "float." Instead, different functional areas are distinguished by background color shifts (e.g., a darker navy for the sidebar, a slightly lighter slate for the main workspace).
- **Hard Borders:** All containers, table cells, and input fields use 1px solid borders (`#1E293B`). When an item is focused or flagged, the border color changes to the status color (Amber or Crimson) rather than adding a shadow.
- **Active State:** Use a subtle "inset" look for pressed buttons to simulate a physical, tactile toggle.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons to state chips to the main dashboard cards—must have square corners. This reinforces the "disciplined and precise" brand attribute. The absence of curves removes visual softness and aligns the UI with the rigid structure of legal and compliance frameworks.

## Components

- **Compact Tables:** The core component. Features 1px borders between all cells (horizontal and vertical). Row hover states use a subtle slate tint. Header cells use `label-caps` typography with a darker background.
- **State Chips:** Small, rectangular indicators using Mono fonts. High-contrast background for risk states (Crimson background/White text for "Critical").
- **Bordered Data Cells:** In "Diff View," changed values are highlighted with a background tint (Crimson for removals, Success Green for additions) with no rounded corners.
- **Status Indicators:** 8px square icons (not circles) used to denote severity levels in lists.
- **Input Fields:** Stark, rectangular boxes with `data-mono` text. Focus state is a 1px Amber border to signal an "active edit" in a risk document.
- **Risk Lint Pass (Progress Bar):** A thin, segmented bar at the top of document views showing the density of warnings (Amber) vs. errors (Crimson) within the file.
- **Action Buttons:** Small-scale, uppercase text, using a primary navy background with a white border for secondary actions, and a full Amber background for "Resolve" actions.