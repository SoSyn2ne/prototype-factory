---
name: Remediation Command
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#b9c7e0'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d2'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#15181a'
  on-tertiary-container: '#7e8183'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#353436'
typography:
  heading-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  body-compact:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-xs:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
spacing:
  unit: 4px
  container-padding: 16px
  gutter: 8px
  panel-gap: 2px
  dense-row: 24px
---

## Brand & Style

This design system is engineered for high-stakes technical and legal remediation. The visual language rejects the typical "friendly" SaaS aesthetic in favor of a **Command Desk** style—a minimalist, authoritative environment that prioritizes rapid data ingestion and triage. It mimics the precision of a technical audit tool or a flight control system, where every pixel serves a functional purpose.

The emotional response is one of **calculated calm**. By utilizing deep, recessed backgrounds and high-contrast functional accents, the interface reduces cognitive load during emergencies. The style is a hybrid of **Modern Corporate** and **Technical Brutalism**, utilizing sharp edges, hairline borders, and monospaced data points to convey institutional reliability and absolute precision.

## Colors

The "Calm Triage" palette is anchored in a dark-mode-first environment. 
- **Base Surfaces:** The foundational layers use `Deep Slate` (#020617) and `Charcoal` (#0F172A) to create a low-light environment that prevents eye fatigue during long sessions.
- **Functional Accents:** A strict "traffic light" spectrum is used for status-driven navigation. `Emergency Red` is reserved for critical legal breaches; `Warning Amber` for pending technical remediations; and `Safe Green` for verified compliance.
- **Interactives:** Primary interactions use a desaturated blue-grey to remain neutral, ensuring that the colorful status indicators remain the primary focus of the operator's attention.

## Typography

Typography is treated as data. This design system utilizes **Inter** for core UI navigation and **JetBrains Mono** (or Roboto Mono) for all variable technical data, legal codes, and timestamps. 

Hierarchy is established through weight and casing rather than massive scale shifts. Small, all-caps labels provide structure to dense forms, while monospaced fonts ensure that columns of numerical or technical data remain perfectly aligned for rapid scanning. Line heights are tightened to `1.2x` or `1.4x` to maximize vertical information density.

## Layout & Spacing

This design system employs a **Fluid-Pane Grid** system designed for 1080p and 1440p displays. The layout is divided into high-functionality zones:
1.  **Global Rail (64px):** A slim, high-contrast vertical navigation bar.
2.  **Triage Pane (320px):** A fixed-width list of active remediation tickets.
3.  **Remediation Desk (Flexible):** A split-pane central area for document viewing and technical logs.

The spacing rhythm is based on a **4px baseline grid**. Padding is kept to the functional minimum (8px-12px inside cards) to ensure that the maximum amount of "above the fold" information is visible without scrolling.

## Elevation & Depth

In an operator-dense interface, shadows are distracting. Instead, this design system uses **Tonal Layering** and **Hairline Borders**.
- **Depth through Luminance:** The background is the darkest layer. Panels and cards are one step lighter (#0F172A). Active states or "hovered" elements are a step lighter again (#1E293B).
- **Physicality:** Use 1px solid borders in `#1E293B` to define boundaries. 
- **Active Focus:** A 2px solid accent border on the left side of a card or pane indicates the current operator focus, utilizing the status color spectrum (Red/Amber/Green).

## Shapes

The shape language is strictly **Sharp (0px)**. Rounded corners are perceived as "soft" and "consumer-grade." For a legal and technical command tool, 90-degree angles reinforce the grid-based logic and precision of the data. 

Chips and status indicators may use a subtle 2px radius only when they need to be distinguished from structural layout elements, but the preference is for a purely rectilinear aesthetic.

## Components

- **Legal-Risk Chips:** Small, rectangular badges with a subtle background tint and high-contrast text. Example: `CRITICAL` (Red bg, white text, 10px bold caps).
- **Split-Pane Cards:** Cards that divide technical logs on the left and legal remediation steps on the right, separated by a 1px vertical rule.
- **Dense Checklists:** Checkboxes are reduced to 14px squares. Completed items are struck through and dimmed to 40% opacity.
- **Action Buttons:** Minimalist outlines for secondary actions; solid, high-contrast blocks for primary "Commit Remediation" actions. 
- **Data Grids:** Borderless rows with alternating subtle background zebra-striping. Hover states should highlight the entire row in a "ghost" slate blue.
- **Status Rail:** A thin vertical strip on the far left of each list item that provides immediate "at-a-glance" status without needing to read the text.