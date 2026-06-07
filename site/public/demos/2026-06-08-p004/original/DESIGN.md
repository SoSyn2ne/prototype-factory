---
name: Institutional Compliance Framework
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
  secondary: '#555f6d'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f1'
  on-secondary-container: '#596372'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b19'
  on-tertiary-container: '#868380'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#d9e3f4'
  secondary-fixed-dim: '#bdc7d8'
  on-secondary-fixed: '#121c28'
  on-secondary-fixed-variant: '#3e4755'
  tertiary-fixed: '#e6e2de'
  tertiary-fixed-dim: '#cac6c2'
  on-tertiary-fixed: '#1c1b19'
  on-tertiary-fixed-variant: '#484644'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '500'
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
  data-table:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1440px
  density-sm: 4px
  density-md: 8px
  density-lg: 12px
---

## Brand & Style

This design system is engineered for high-stakes institutional compliance and financial auditing. The aesthetic is **Modern Minimalist with a focus on High-Density Utility**, prioritizing information architecture over decorative elements. It evokes the feeling of a physical binder—structured, immutable, and organized—translated into a digital workspace for power users.

The target audience consists of compliance officers and trade analysts who require a "heads-up display" of complex regulatory data. The UI must feel authoritative and precise, utilizing a rigid structural grid, disciplined color application, and an "architectural" approach to depth. By avoiding rounded corners and soft flourishes, the design communicates a serious, no-nonsense environment where data integrity is paramount.

## Colors

The palette is derived from the "Ink and Graphite" concept, focusing on legibility and meaningful status signaling.

- **Ink (Primary):** Used for primary text, main navigation headers, and critical UI anchors. It provides the strongest visual weight.
- **Graphite (Neutral/Secondary):** A disciplined scale of grays used for structural borders, secondary metadata, and disabled states.
- **Off-white (Background):** A slightly warm light-gray background to reduce eye strain during long-form data analysis.
- **Confidence Cues:** 
    - **Muted Green:** Used exclusively for "Good Standing" indicators and successful compliance checks.
    - **Amber/Red:** Used sparingly for "Action Required" or "Non-Compliant" states, ensuring these signals pierce through the neutral interface.

## Typography

Typography is the core of this design system. We utilize **IBM Plex Sans** for headers to provide a technical, engineered feel, while **Inter** handles the bulk of data presentation for its exceptional legibility at small sizes. **JetBrains Mono** is introduced specifically for alphanumeric identifiers (e.g., EORI numbers, HS codes, or Transaction IDs) to prevent character confusion.

Type hierarchies are tight. Vertical rhythm is strictly enforced to maintain a dense but readable grid. All labels should be clear and concise; use the `label-caps` style for table headers and section overviews to create a distinct visual break from the data itself.

## Layout & Spacing

This design system uses a **Rigid Grid Layout** based on a 4px baseline. This ensures high data density while maintaining structural integrity. 

- **Desktop:** A 12-column grid with 16px gutters. Sidebars are fixed at 240px to maximize the central workspace for wide data tables.
- **Density:** We employ "tight" vertical padding (8px for standard rows, 4px for high-density lists).
- **Alignment:** All elements, including icons and text, must snap to the grid. No "floating" elements or centered hero-style layouts; everything is top-left aligned by default to follow traditional document scanning patterns.

## Elevation & Depth

Elevation is achieved through **Tonal Layering and Thin Outlines** rather than heavy shadows.

- **Surface 0 (Background):** Off-white (#F9FAFB).
- **Surface 1 (Cards/Panels):** Pure White (#FFFFFF) with a 1px Graphite border (#E5E7EB).
- **Surface 2 (Popovers/Modals):** Pure White with a 1px border (#D1D5DB) and a subtle, sharp 4px shadow with 5% opacity to differentiate from the background.

The "Binder" feel is reinforced by using vertical borders to separate logical sections of a page, mimicking tabbed dividers. Avoid backdrop blurs; the interface should remain opaque and grounded.

## Shapes

The shape language is **Strictly Square**. All corners for buttons, input fields, cards, and badges are set to 0px. This "sharp" aesthetic reinforces the institutional and architectural nature of the product, distinguishing it from consumer-grade "bubbly" software.

Visual separation is created through 1px solid lines rather than rounded containers. When a "contained" look is required (e.g., for a status badge), use a solid background fill with sharp corners.

## Components

- **Data Tables:** The primary component. Rows are 32px high in standard view. Header cells feature 1px bottom borders and `label-caps` typography. Hover states use a very subtle gray tint (#F3F4F6).
- **Buttons:** 
    - *Primary:* Solid Ink background, white text, sharp corners. 
    - *Secondary:* 1px Graphite border, Ink text, no background.
- **Status Badges:** Small, rectangular boxes with sharp corners. Backgrounds are muted (e.g., light green tint) with high-contrast dark green text for the "Pass" state. 
- **Input Fields:** 1px Graphite borders that darken on focus. No glow or outer shadows; focus is indicated by a 2px solid Ink bottom border.
- **The "Binder" Sidebar:** A vertical navigation element using high-contrast Ink backgrounds with subtle Graphite dividers. Active links are indicated by a 4px primary-color "tab" on the left edge.
- **Checkboxes:** Square, 14px boxes with a simple tick mark. No rounded corners.