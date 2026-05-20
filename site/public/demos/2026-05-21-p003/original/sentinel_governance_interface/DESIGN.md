---
name: Sentinel Governance Interface
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#dec29a'
  on-tertiary: '#3e2d11'
  tertiary-container: '#231500'
  on-tertiary-container: '#957d5a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1.5rem
  gutter: 1rem
  table-cell-padding: 0.5rem 0.75rem
  stack-sm: 0.25rem
  stack-md: 0.75rem
---

## Brand & Style
The design system is engineered for the high-stakes environment of enterprise compliance. It adopts a **Corporate / Modern** aesthetic with a heavy emphasis on **High-Density** information architecture. The visual language conveys precision, authority, and unwavering audit-readiness.

The interface is designed for "Operator-in-the-loop" workflows where speed of recognition and technical accuracy are paramount. It avoids decorative elements in favor of functional clarity, ensuring that compliance officers can manage "Meeting Bot" permissions across global infrastructures without cognitive overload. The emotional response should be one of total situational awareness and systematic control.

## Colors
This design system utilizes a sophisticated **Dark Mode** palette to reduce eye strain during extended monitoring sessions. The background is a deep, monolithic Slate-900, providing a stable foundation for high-contrast data visualization.

- **Primary & Neutral:** Deep Slates and Navies form the structural hierarchy. Grays are neutral-cool to maintain a "technical" atmosphere.
- **Functional Accents:** These are reserved strictly for semantic meaning. 
    - **Emerald (Safe):** Indicates active compliance and authorized bot presence.
    - **Amber (Warning):** Signals unauthorized bot attempts or pending consent.
    - **Crimson (Risk):** Flags critical firewall breaches or blacklisted entities.
- **Borders:** Subtle Slate-700/800 borders are used to define zones without adding visual bulk.

## Typography
The system uses **IBM Plex Sans** for its engineered, industrial clarity. It is a typeface designed specifically for technical environments, offering exceptional legibility in dense tables and small-scale labels.

- **Scale:** Sizes are kept compact (11px to 24px) to maximize the amount of information visible on a single screen.
- **Data Mono:** For Bot IDs, IP addresses, and timestamps, a monospaced font should be used to ensure character alignment and ease of scanning.
- **Hierarchy:** Use weight (Medium/SemiBold) and the `label-caps` style to differentiate between metadata and primary content.

## Layout & Spacing
This design system employs a **Fixed Grid** approach for the primary navigation and a **Fluid Content** area for data tables. The layout is optimized for 1440px+ displays, typical of control room monitors.

- **The 4px Baseline:** All spacing is a multiple of 4px. This tight rhythm allows for high-density layouts without feeling cluttered.
- **Density Tiers:** 
    - **Compact (Default):** Minimal vertical padding in lists and tables to maximize row count.
    - **Spacious (Details View):** Used only in side-drawers or inspector panels for deep-dive auditing.
- **Fixed Sidebar:** A 240px navigation rail stays anchored to the left, providing immediate access to 'Live Traffic', 'Firewall Rules', and 'Audit Logs'.

## Elevation & Depth
In a high-density control room, shadows are distracting. This design system utilizes **Tonal Layers** and **Crisp Outlines** to communicate depth.

- **Level 0 (Floor):** Slate-950. The darkest surface, used for the main application background.
- **Level 1 (Surface):** Slate-900. Used for card containers and table headers.
- **Level 2 (Active/Overlay):** Slate-800. Used for side-drawers, tooltips, and dropdown menus.
- **Depth Markers:** 1px solid borders in Slate-700/800 replace shadows. A subtle inner-glow (1px) can be used on primary action buttons to give them a "tactile" but flat feel.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding provides a professional, modern feel that softens the "brutality" of a dark-mode data interface while remaining space-efficient. 

- **Corners:** Components like input fields and buttons use a 4px radius.
- **Tags/Badges:** Status indicators use the same 4px radius; pill shapes are strictly avoided to maintain the serious, architectural tone of the system.
- **Dividers:** 1px horizontal and vertical lines are the primary separators, emphasizing a "grid-based" structure.

## Components
- **Data Tables:** The core of the system. Use zebra-striping (Slate-900/Slate-800). Headers must be sticky with `label-caps` typography. Cells should have no vertical borders, only horizontal dividers.
- **Status Badges:** Compact rectangles with a subtle background tint (10% opacity) and a high-contrast label. Include a small 6px "status dot" for immediate color-coded recognition.
- **Firewall Toggle:** A custom, compact switch component. When 'Active', the track uses the Primary Blue; when 'Disabled', it recedes into the background Gray.
- **Buttons:**
    - **Primary:** Solid Slate-100 (High contrast) with dark text.
    - **Secondary:** Outlined Slate-700 with light text.
    - **Danger:** Ghost style with Crimson text until hovered.
- **Inputs:** Darker than the surface background (Slate-950) with a 1px Slate-700 border. Focus state uses a 1px Primary Blue ring.
- **Icons:** Thin-stroke (1.5px) icons only. Avoid filled icons unless indicating an active toggle state.