---
name: Field-Ops System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#290b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a1a00'
  on-tertiary-container: '#f06500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-time:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
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
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  stack-dense: 0.5rem
  stack-default: 1rem
---

## Brand & Style
The design system is engineered for high-stakes home care environments where clarity is a prerequisite for safety. The brand personality is professional, utilitarian, and unwavering. It prioritizes the "at-a-glance" comprehension required by field staff managing complex schedules and medication protocols. 

The aesthetic leans into a **Modern Corporate** style with a focus on functional density. It avoids decorative flourishes in favor of structural integrity and clear information architecture. The emotional response is one of stability and reliability, ensuring that the interface feels like a dependable tool rather than a distraction.

## Colors
The palette is rooted in a "Steel and Safety" logic. 

- **Primary (Deep Navy):** Used for navigation, headers, and primary actions to communicate authority and groundedness.
- **Secondary (Slate Gray):** Used for secondary text, icons, and non-critical UI elements to reduce visual noise.
- **Accent (Safety Orange):** Reserved strictly for "Care Gaps," critical alerts, and overdue tasks. This color must never be used for decorative purposes.
- **Neutral (Cool Whites/Grays):** A range of slate-tinted neutrals (Slate 50 to Slate 200) provides the backdrop for the high-density data tables and cards.

## Typography
This design system utilizes **Inter** for its exceptional legibility and neutral, systematic tone. 

- **Shift Times:** Large, bold weights are used for shift start/end times to ensure they are visible at arm's length.
- **Data Tables:** Use the `data-tabular` role which enables tabular figures (monospaced numbers) to ensure numerical alignment in medication dosages and time tracking.
- **Hierarchy:** Strict use of uppercase labels for section headers helps organize dense information blocks without requiring excessive vertical space.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a focus on vertical stacking for mobile field use. 

- **Mobile:** Single column with 16px side margins. Data is presented in full-width "Handoff Rows."
- **Desktop/Tablet:** A 12-column system. Sidebars are fixed at 240px to maximize the "Work Area" for complex data tables.
- **Rhythm:** An 8px base unit is used. For data-dense screens, padding is reduced to 12px (1.5 units) to allow more information above the fold, while interactive touch targets (buttons/inputs) maintain a minimum 44px height.

## Elevation & Depth
This design system uses **Low-Contrast Outlines** and **Tonal Layers** rather than heavy shadows. This maintains a clean, professional "instrument panel" feel.

- **Level 0 (Background):** Slate 50.
- **Level 1 (Cards/Rows):** White background with a 1px border in Slate 200. No shadow.
- **Level 2 (Active/Modals):** White background with a subtle, tight shadow (0 2px 4px rgba(0,0,0,0.05)) to denote a temporary overlay.
- **Critical Alerts:** Do not use depth; use a 4px solid Safety Orange left-border on rows to indicate urgency within a flat list.

## Shapes
The shape language is **Soft (Level 1)**. 

A 4px (`0.25rem`) corner radius is applied to most UI components. This provides a modern touch without sacrificing the "serious" utility of the system. Larger components like main content cards or status blocks use an 8px radius (`rounded-lg`) to subtly distinguish them from smaller UI widgets.

## Components
- **Handoff Rows:** Standardized list items for patient transitions. They include a leading time-stamp, a title, and a trailing status chevron. High-contrast borders are used between rows.
- **Status Blocks:** Large, colored badges used for "Checked-In," "In-Progress," or "Completed." These use high-contrast text on muted background tints.
- **Medication Alerts:** High-density cards featuring a Safety Orange header. Medication names must be in `headline-md` weight for maximum visibility.
- **Data Tables:** Zebra-striped using Slate 50 and White. Column headers are `label-caps`. Rows must have a hover state (Slate 100) on desktop and a clear active state on touch.
- **Buttons:** Primary buttons are Solid Navy. Critical action buttons (e.g., "Report Incident") use Safety Orange. All buttons use `label-caps` for their labels to emphasize their function as tools.
- **Checkboxes:** Large-format (24px) for easy tapping in field conditions, using a thick 2px stroke for the "checked" state.