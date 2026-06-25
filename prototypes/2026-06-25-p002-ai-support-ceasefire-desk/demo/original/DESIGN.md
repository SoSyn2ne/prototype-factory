---
name: Command Interface
colors:
  surface: '#13131b'
  surface-dim: '#13131b'
  surface-bright: '#393841'
  surface-container-lowest: '#0d0d15'
  surface-container-low: '#1b1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e4e1ed'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e4e1ed'
  inverse-on-surface: '#303038'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#13131b'
  on-background: '#e4e1ed'
  surface-variant: '#34343d'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
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
  gutter: 12px
  row-height-sm: 32px
  row-height-md: 40px
---

## Brand & Style

This design system is engineered for high-stakes operational environments where information density and decision speed are paramount. The brand personality is **Industrial, Utilitarian, and Precise**. It treats the interface as a professional tool rather than a consumer product, evoking an emotional response of focus, authority, and systematic control.

The design style is **Modern Corporate with Technical Brutalist influences**. It prioritizes structural clarity through hairline borders and a strict grid, eschewing decorative elements for functional indicators. The visual language is defined by dark surfaces that reduce eye strain during long operational shifts, using light and color exclusively to denote status and hierarchy.

## Colors

The palette is optimized for a **Dark-First** operational environment. The background utilizes a deep Charcoal (#0F172A) to provide maximum contrast for critical data. 

- **Primary (Electric Indigo):** Reserved for primary actions, active states, and focus indicators. 
- **Secondary (Cyber Cyan):** Used for data visualization, system status, and secondary navigational cues.
- **Neutrals:** A range of Slates provide depth. #1E293B is used for card surfaces and sidebars, while #334155 is reserved for borders and subtle UI dividers.
- **Functional Colors:** High-saturation Red (#EF4444) for alerts and Green (#10B981) for successful system operations, both utilizing a subtle glow to draw the operator's eye.

## Typography

The typography system is built for **scannability and data integrity**. 

**Inter** serves as the primary typeface for all UI labels, navigation, and body text due to its exceptional legibility at small sizes. **JetBrains Mono** is strictly mandated for all numerical data, timestamps, and ID strings to ensure tabular alignment and prevent character confusion (e.g., 0 vs O).

Standard body text is set to 14px for general use, while high-density data tables utilize 12px Inter or 13px JetBrains Mono. Captions and metadata use 11px uppercase labels to create clear visual separation from dynamic content.

## Layout & Spacing

This design system utilizes a **Fixed Grid with Fluid Data Columns**. The layout is built on a 4px base unit to allow for high-density arrangements.

- **Desktop:** A 12-column grid with 12px gutters. Sidebars are fixed at 240px to maximize the central data-dense workspace.
- **Density:** Vertical spacing is compressed. Standard table rows are 32px high, and input fields are 36px high. 
- **Reflow:** On smaller viewports, the layout collapses secondary utility panels into drawers, maintaining the primary data feed's visibility. The "evidence-first" approach ensures that data tables never wrap; they utilize horizontal scrolling to maintain row integrity.

## Elevation & Depth

Depth in this system is communicated through **Tonal Layering and Hairline Outlines** rather than traditional shadows. 

1. **Floor (0):** The deep #0F172A background.
2. **Surface (1):** Containers and cards using #1E293B with a 1px border of #334155.
3. **Interactive (2):** Hover states and active selections use subtle interior glows (inner-shadow) of the primary indigo or cyan, creating a "lit from within" technical feel.
4. **Overlays (3):** Modals and dropdowns use a darker #0F172A background with a more pronounced #475569 border to separate them from the workspace.

Shadows, if used, are extremely tight (2-4px blur) and high-opacity, serving as "contact shadows" rather than depth indicators.

## Shapes

The shape language is **Strict and Technical**. 

A "Soft" roundedness level (4px) is applied to buttons and inputs to provide just enough distinction from the sharp grid lines of the layout. However, large layout containers and data table rows utilize 0px (Sharp) corners to emphasize the industrial, structured nature of the interface. This juxtaposition ensures that interactive elements are immediately recognizable against the rigid background.

## Components

- **Buttons:** Compact (32px height). Primary buttons use a solid Indigo fill. Secondary buttons use a Ghost style with a hairline border.
- **Status Badges:** Small, pill-shaped, but with only 2px rounding. They use low-opacity fills of the status color (e.g., 10% Red) and a high-contrast text color with a 2px outer glow of the same hue.
- **Data Tables:** The core component. No zebra striping; use 1px #334155 bottom borders only. Hover states must highlight the entire row in #334155.
- **Input Fields:** Inset appearance. Darker than the surface they sit on. Focused state uses a 1px Indigo border and a 2px Indigo outer glow.
- **Chips:** Monospaced font only. Used for tags like "CRITICAL", "RESOLVED", or "PENDING".
- **Evidence Cards:** Fixed-width cards that hold log snippets or image attachments, utilizing a 1px border and a distinct header area in #334155.