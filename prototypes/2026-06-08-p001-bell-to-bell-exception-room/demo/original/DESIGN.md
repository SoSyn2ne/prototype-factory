---
name: Bell-to-Bell Exception Room
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
  on-surface-variant: '#bdc8ce'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#879298'
  outline-variant: '#3e484d'
  surface-tint: '#6cd3f7'
  primary: '#6cd3f7'
  on-primary: '#003543'
  primary-container: '#269dbe'
  on-primary-container: '#002e3b'
  inverse-primary: '#006780'
  secondary: '#ffb599'
  on-secondary: '#5a1c00'
  secondary-container: '#f66018'
  on-secondary-container: '#4f1700'
  tertiary: '#b9c7e0'
  on-tertiary: '#233144'
  tertiary-container: '#8392a9'
  on-tertiary-container: '#1c2a3d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b7eaff'
  primary-fixed-dim: '#6cd3f7'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e61'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
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
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
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
  gutter: 12px
  stack-compact: 4px
  stack-default: 12px
  max-width-desktop: 1440px
---

## Brand & Style
This design system is engineered for high-stakes school administration and incident management. The brand personality is disciplined, authoritative, and strictly operational. It prioritizes information density and cognitive clarity over decorative flair, ensuring that staff can navigate complex data during high-pressure "bell-to-bell" windows.

The visual style is **Corporate / Modern** with a lean toward **Functional Minimalism**. It utilizes a structured, high-density layout to minimize scrolling and maximize situational awareness. The aesthetic is professional and sober, evoking the reliability of a command center.

## Colors
The palette is built on a foundation of deep slates and steel grays to reduce eye strain during prolonged use in indoor environments.

- **Surface & Backgrounds**: Deep Slate (#0f172a) and Steel Gray (#1e293b) form the core layers. 
- **Primary Action**: Cyan (#0891b2) is reserved for affirmative actions, active states, and primary navigation.
- **Urgency/Warning**: Soft Orange (#ea580c) is used sparingly for pending incidents, warnings, or items requiring immediate administrative attention.
- **Typography**: Neutral White (#f8fafc) for high-contrast headlines and Silver Gray (#94a3b8) for secondary metadata.

## Typography
The system uses **Inter** for all primary interface elements due to its exceptional legibility at small sizes and high x-height. For technical data, timestamps, and ID numbers, **JetBrains Mono** is utilized to ensure character distinction and a precise, "log-book" feel.

Typography is scaled for high density. Line heights are kept tight but readable to allow more rows of data per screen. Weights are used strategically: Semi-bold for headers to establish hierarchy, and Regular for body text to maintain clarity in dark mode.

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for high-density dashboards. 

- **Grid**: A 12-column system with narrow 12px gutters to maximize horizontal space for data tables.
- **Rhythm**: A 4px baseline grid governs all spacing. Vertical margins between modules are kept to a disciplined 16px.
- **Breakpoints**:
    - **Mobile (< 768px)**: Single column, full-width cards, hidden sidebars.
    - **Tablet (768px - 1024px)**: 2-column dashboard views, collapsed navigation.
    - **Desktop (> 1024px)**: Full multi-pane view with persistent utility sidebars for incident monitoring.

## Elevation & Depth
Elevation in this design system is primarily conveyed through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows, ensuring the UI remains crisp on lower-quality school monitors.

- **Base Layer**: Deep Slate (#0f172a).
- **Surface Layer**: Steel Gray (#1e293b) with a 1px border (#334155) to define card boundaries.
- **Active Layer**: Slightly lighter gray (#334155) to indicate hover or selection.
- **Shadows**: Only used for floating modals or dropdowns—minimalistic, 4px blur, 20% black opacity, no offset.

## Shapes
The system uses a **Soft** shape language. Elements like buttons and input fields use a 4px (0.25rem) corner radius. This provides a modern feel while maintaining a sense of structural rigidity and professional discipline. Large containers or dashboard cards may use up to 8px (0.5rem) to distinguish them from smaller UI controls.

## Components
- **Buttons**: Default state is solid Steel Gray with white text. Primary actions use Cyan. Small padding (8px x 12px) for high-density placement.
- **Data Tables**: The core of the system. Rows are 40px tall. Zebra-striping is used (alternating Slate and Steel) to guide the eye. Header cells use `label-sm` in all-caps.
- **Incident Chips**: Status indicators (e.g., "In Progress," "Resolved") use a subtle background tint of the status color with a 1px solid border.
- **Input Fields**: Dark backgrounds with a 1px Steel Gray border. Focus state triggers a Cyan border glow. Labels are positioned above the field using `label-md`.
- **Status Banners**: Full-width bars at the top of containers using the Orange accent for urgent "Exception" alerts, ensuring they cannot be missed.
- **Incident Cards**: Compact blocks containing student name, location, and timestamp, using `stack-compact` for internal spacing.