---
name: Field Ops Industrial
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3d494c'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6d797d'
  outline-variant: '#bcc9cd'
  surface-tint: '#00687a'
  primary: '#00687a'
  on-primary: '#ffffff'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#4cd7f6'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#e79400'
  on-tertiary-container: '#563400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  tap-label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  touch-target-min: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-tablet: 24px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style
The design system is engineered for high-stakes, real-world data collection environments where speed, accuracy, and physical durability are paramount. The brand personality is clinical, disciplined, and utilitarian, prioritizing functional reliability over aesthetic flourish.

The visual style follows a **Modern Industrial** aesthetic—a synthesis of high-contrast corporate precision and rugged, tactile usability. It utilizes a structured, grid-heavy layout to organize dense observational data. By removing all non-essential decorative elements, the interface minimizes cognitive load, allowing field operatives to focus entirely on evidence gathering and event logging. The emotional response is one of professional confidence and systemic order.

## Colors
The palette is rooted in a foundation of "Technical Grays" to ensure long-term legibility under various lighting conditions. 

- **Primary (Cyan):** Used exclusively for high-priority interaction points, active states, and successful completion signals. It provides a sharp "cut-through" against the darker slate backgrounds.
- **Secondary (Steel Blue):** Employed for structural elements, iconography, and secondary navigation to maintain a professional, calm environment.
- **Tertiary (Amber):** A functional signal color used to denote friction, required attention, or "hesitation markers" in observational data.
- **Neutral (Deep Slate):** The primary color for text and heavy structural containers, providing the "ink" that grounds the interface.
- **Surface (Cool Gray):** The base canvas, chosen for its low-glare properties on tablet screens.

## Typography
The system utilizes **Inter** for its exceptional legibility at small sizes and its neutral, systematic character. To optimize for field use, letter spacing (tracking) is slightly increased across all body and label roles to prevent character blurring in high-vibration or outdoor environments.

Typography follows a strict hierarchy:
- **Headlines:** Reserved for page titles and major section headers.
- **Body:** Sized generously (minimum 16px) to ensure readability at arm's length.
- **Label-Caps:** Used for metadata, table headers, and status markers to create clear visual separation from data entry.
- **Tap-Labels:** Specifically weighted for button labels and interactive triggers to ensure they are legible even when partially obscured by a thumb.

## Layout & Spacing
This design system employs a **8px square grid** and a **fixed-fluid hybrid layout** optimized for landscape tablet orientation. 

### Layout Model
- **Task Sidebar:** A fixed 320px left-hand column for scripts and navigation.
- **Data Workspace:** A fluid central area for event logging and evidence entry.
- **Touch-Safety:** Every interactive element must adhere to a minimum 48x48px hit area to support one-handed operation and gloved use.

### Breakpoints
- **Tablet Landscape (Primary):** 12-column grid, 24px margins, 16px gutters.
- **Tablet Portrait:** 8-column grid, 16px margins, 16px gutters. Sidebar collapses into a drawer.

## Elevation & Depth
To maintain an industrial and serious tone, the system avoids traditional drop shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Level 0 (Background):** #f8fafc.
- **Level 1 (Cards/Rows):** White surface with a 1px solid border (#e2e8f0).
- **Level 2 (Active/Modal):** White surface with a 2px solid primary border (#06b6d4) or a very subtle, tight ambient shadow (Alpha 0.05) to suggest a slight lift.
- **Interactive Depth:** Buttons use a "pressed" state which shifts the background color 5% darker rather than moving the element's position, maintaining visual stability during rapid logging.

## Shapes
The shape language is "Soft-Industrial." A consistent 4px (0.25rem) corner radius is applied to all components (buttons, input fields, and cards). This subtle rounding prevents the interface from feeling "sharp" or aggressive while maintaining the precision of a professional tool. Large containers like cards may scale up to 8px for visual balance, but buttons never exceed 4px to retain their blocky, durable appearance.

## Components

### Buttons
- **Primary:** Solid Cyan (#06b6d4) with White text. Minimum height 48px.
- **Secondary:** Transparent with 2px Steel Blue border.
- **Destructive:** Solid Slate (#1e293b) with White text (used for "End Session").

### Event Rows
Dense, list-based layout with a vertical "Time-Line" accent. Each row features a large "Quick-Tag" button on the right edge for rapid status updates. Active rows are highlighted with a 4px left-side Cyan border.

### Task Script Cards
Used for guiding observations. These cards feature a progress indicator at the top and large, high-contrast text. Steps can be "Flagged" using the Amber tertiary color for follow-up.

### Input Fields
Strictly rectangular with 1px borders. Focused states use a 2px Cyan outline. Labels are always persistent (top-aligned) to ensure context is never lost during data entry.

### Status Indicators
Small, pill-shaped tags using the `label-caps` typography role. They use low-saturation background tints (e.g., 10% Cyan for "Active", 10% Amber for "Incomplete").