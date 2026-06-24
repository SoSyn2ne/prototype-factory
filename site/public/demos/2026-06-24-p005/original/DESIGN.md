---
name: Field Ops Precision
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#ddc1ae'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#a48c7a'
  outline-variant: '#564334'
  surface-tint: '#ffb77d'
  primary: '#ffb77d'
  on-primary: '#4d2600'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#904d00'
  secondary: '#c6c6c9'
  on-secondary: '#2f3133'
  secondary-container: '#454749'
  on-secondary-container: '#b4b5b7'
  tertiary: '#c3c7cc'
  on-tertiary: '#2d3135'
  tertiary-container: '#a7aaaf'
  on-tertiary-container: '#3b3f43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e0e3e8'
  tertiary-fixed-dim: '#c3c7cc'
  on-tertiary-fixed: '#181c20'
  on-tertiary-fixed-variant: '#43474b'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 30px
spacing:
  unit: 4px
  touch-target: 44px
  gutter: 16px
  margin-page: 24px
  row-padding-v: 12px
  row-padding-h: 16px
---

## Brand & Style

The design system is engineered for high-stakes, industrial field operations where clarity and trust are paramount. The brand personality is authoritative, resilient, and precise, catering to dispatchers and field leads who manage high volumes of contractor data under time pressure. 

The aesthetic follows a **Modern Brutalist** approach adapted for utility. It prioritizes structure and readability through "rugged" containers, utilizing heavy borders and a grid-centric layout to instill a sense of stability and institutional trust. Visual clutter is eliminated in favor of high-contrast information density, ensuring that arrival windows and trust metrics are immediately legible in varied lighting conditions.

## Colors

The palette is optimized for a dark-mode-first environment to reduce eye strain during long shifts and maximize contrast.

- **Surface & Backgrounds:** Deep slate (#1A1C1E) serves as the primary canvas, with charcoal (#2F3337) used for elevated container rows to create a "rugged" layered effect.
- **Action Accent:** International Orange (#FF8C00) is reserved exclusively for primary calls to action and urgent updates, ensuring they pierce through the dark interface.
- **Typography:** Pure white or high-brightness grey (#F8FAFC) is used for all data points to ensure AAA accessibility.
- **Semantic Badges:** High-saturation Green, Amber, and Red are used for trust scores and arrival statuses, utilizing a "glow" or heavy border style to denote urgency.

## Typography

This design system utilizes **Inter** for its neutral, highly legible character shapes in headers and body text. For technical data—such as timestamps, contractor IDs, and trust percentages—**JetBrains Mono** is introduced to provide a distinct "instrumentation" feel that prevents character confusion (e.g., '0' vs 'O').

- **Headlines:** Use tight tracking and bold weights to establish a clear hierarchy on dense dashboards.
- **Labels:** Always uppercase in JetBrains Mono to distinguish metadata from user-generated content.
- **Trust Metrics:** Large-scale numeric displays use bold weights to ensure they are the first thing a user sees when scanning a row.

## Layout & Spacing

The layout employs a **Fluid Grid** model with a strict 4px baseline rhythm. 

- **Dashboard Grid:** A 12-column system is used for desktop, reflowing to a single column for mobile. 
- **The "Rugged" Row:** The core layout element is a horizontal container row. These rows must have a minimum height of 64px to accommodate the **44px touch target** requirement for interactive elements (buttons, toggles).
- **Density:** While the layout is compact, horizontal "breathing room" is maintained through 16px gutters to prevent data bleed.
- **Mobile Adaptivity:** On mobile, sidebars collapse into a bottom-anchored navigation bar, and complex data tables transform into stacked vertical cards.

## Elevation & Depth

This design system rejects soft shadows in favor of **Bold Borders** and **Tonal Layering**. 

- **Structural Depth:** Depth is communicated through 2px solid borders using a lighter charcoal (#4A4E54) against the deep slate background. 
- **Stacking:** Elements do not "float"; they are "inset" or "extruded." Active states or hovered rows use a subtle primary-tinted background shift rather than a shadow.
- **Focus States:** High-contrast 2px solid #FF8C00 outlines are used for keyboard and touch focus, ensuring no ambiguity in the interface's current state.

## Shapes

To reinforce the rugged, industrial narrative, the design system utilizes **Sharp (0px)** corners for all primary containers, buttons, and input fields. 

- **Hard Edges:** Sharp corners suggest precision and structural integrity. 
- **Exceptions:** Status "dots" (for live tracking) are circular, but the badges containing them remain rectangular.
- **Borders:** Use a consistent 2px weight for all container outlines to maintain a cohesive "blueprint" feel.

## Components

- **Action Buttons:** Primary buttons are solid #FF8C00 with black text. Secondary buttons are ghost-style with a 2px white border. All buttons must maintain a 44px minimum height.
- **Trust Badges:** Rectangular boxes with a thick left-hand border (4px) colored by status (Success, Warning, Danger). Use JetBrains Mono for the score.
- **Rugged List Rows:** Each contractor entry is a distinct container with a 2px charcoal border. The row background shifts to a slightly lighter slate on hover.
- **Input Fields:** Dark background (#1A1C1E) with a persistent 2px light-grey border. On focus, the border changes to Orange.
- **Arrival Windows:** Displayed as a "Timeline Micro-component" within a row, using a high-contrast bar to show progress against the estimated arrival time.
- **Status Chips:** High-contrast, solid background color with white text, using all-caps JetBrains Mono for maximum "official" appearance.