---
name: Field Ops
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
  on-surface-variant: '#e2bfb0'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#a98a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb693'
  primary: '#ffb693'
  on-primary: '#561f00'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#a04100'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#b9c7df'
  on-tertiary: '#233144'
  tertiary-container: '#8c9ab0'
  on-tertiary-container: '#243245'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#d5e3fc'
  tertiary-fixed-dim: '#b9c7df'
  on-tertiary-fixed: '#0d1c2e'
  on-tertiary-fixed-variant: '#3a485b'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered for high-stakes tenant advocacy and utility dispute resolution. The personality is **authoritative, industrial, and utilitarian**, prioritizing functional efficiency over aesthetic flair. It adopts a **Service-Workflow** aesthetic, blending elements of **Modern Corporate** reliability with a **Tactile** "dashboard" feel. 

The UI should feel like a specialized tool—precise, rugged, and mission-critical. It targets professional advocates and legal teams who require immediate clarity when managing complex evidence and high-pressure disputes. Visual flourishes are stripped away in favor of high-contrast information density and structured data presentation.

## Colors
The palette is rooted in a "Graphite and Slate" foundation to minimize eye strain during long periods of evidence review.
- **Primary (#FF6B00):** Reserved exclusively for "High-Priority" actions, missing evidence alerts, and critical navigation states. It must be used sparingly to maintain its psychological impact.
- **Backgrounds:** The interface uses a deep charcoal (`#0F172A`) for the base canvas, with slate (`#1E293B`) used for containers and panels to create structural depth.
- **Text:** Light gray (`#F1F5F9`) ensures maximum legibility against dark backgrounds, while muted slate (`#94A3B8`) handles meta-data and secondary labels.

## Typography
This design system utilizes **Inter** across all levels to leverage its neutral, systematic clarity. 
- **Headlines:** Use heavy weights (600-700) to establish a clear hierarchy in data-heavy views.
- **Labels:** Small caps and increased letter spacing are used for technical metadata and field headers to evoke a "classified document" or industrial readout feel.
- **Readability:** Line heights are slightly tighter than standard web apps to facilitate higher information density without sacrificing legibility.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure that evidence panels and data tables remain predictable and easy to scan. 
- **Grid:** A 12-column grid with 20px gutters. 
- **Structure:** Content is organized into "Panels." A side-rail (collapsed or expanded) houses global navigation, while a persistent right-hand "Evidence Inspector" panel is used for detailed dispute reviews.
- **Rhythm:** A 4px baseline shift is used. Larger 24px-32px gaps are used to separate logical "Phases" of a workflow, while tight 8px gaps group related input fields.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 
- **Planes:** The base background is the lowest level. Active work surfaces (cards, panels) sit one level above with a `#1E293B` fill. 
- **Borders:** All panels and interactive elements feature a 1px solid border (`#334155`). 
- **Pressure States:** When an item is active or "in focus," the border transitions to the primary orange or a brighter slate. Shadows are avoided to maintain the "flat tool" aesthetic, except for a very subtle 2px blur on modal overlays to separate them from the primary workflow.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding provides a professional, modern feel without appearing too "consumer-friendly" or playful. 
- **Buttons & Inputs:** Use the standard `rounded` (4px).
- **Large Container/Panels:** May use `rounded-lg` (8px) to subtly distinguish major architectural blocks.
- **Checklists:** Use square corners for status indicators to maintain an "official" appearance.

## Components
- **Action Buttons:** Primary buttons use a solid `#FF6B00` fill with black text for maximum urgency. Secondary buttons are outlined in slate with light gray text.
- **Evidence Checklists:** Items feature high-contrast checkboxes. "Missing" items are flagged with an orange warning icon and a tinted orange background bar.
- **Pressure-State Panels:** Containers that house dispute details should have a subtle header bar in a darker shade (`#0F172A`) to clear separate "Title" from "Content."
- **Data Grids:** Use zebra-striping with a very low-contrast difference between rows. Headers are sticky and use the `label-bold` typographic style.
- **Status Chips:** Small, rectangular indicators. Use `bg-slate-700` for "Pending," `bg-green-900` for "Resolved," and `bg-orange-600` for "Critical Dispute."
- **Touch Targets:** Despite being a desktop-first tool, all buttons and interactive rows maintain a minimum height of 40px to accommodate "field" use on tablets or laptops with touchscreens.