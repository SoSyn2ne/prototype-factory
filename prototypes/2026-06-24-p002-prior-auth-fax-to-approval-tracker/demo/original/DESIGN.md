---
name: Field-Ops Clinical
colors:
  surface: '#f3fbfc'
  surface-dim: '#d4dbdd'
  surface-bright: '#f3fbfc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf5f7'
  surface-container: '#e8eff1'
  surface-container-high: '#e2e9eb'
  surface-container-highest: '#dce4e5'
  on-surface: '#151d1e'
  on-surface-variant: '#3b494c'
  inverse-surface: '#2a3233'
  inverse-on-surface: '#eaf2f4'
  outline: '#6b7a7d'
  outline-variant: '#bac9cc'
  surface-tint: '#006875'
  primary: '#006875'
  on-primary: '#ffffff'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#00daf3'
  secondary: '#585e6c'
  on-secondary: '#ffffff'
  secondary-container: '#dde2f3'
  on-secondary-container: '#5e6473'
  tertiary: '#765a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#fec931'
  on-tertiary-container: '#6f5500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#dde2f3'
  secondary-fixed-dim: '#c1c6d7'
  on-secondary-fixed: '#161c27'
  on-secondary-fixed-variant: '#414754'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#f3bf26'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#f3fbfc'
  on-background: '#151d1e'
  surface-variant: '#dce4e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  patient-id:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for high-stakes clinical environments where speed of information retrieval and operational clarity are paramount. It adopts a **Modern Corporate** aesthetic with **Minimalist** influences, prioritizing a "field-ops" utility—dense data visualization without the clutter. 

The personality is disciplined, urgent, and precise. It evokes a sense of mission-critical reliability, ensuring that clinicians and administrative staff feel in control of the prior authorization lifecycle. The interface uses a systematic layout to reduce cognitive load during high-volume processing.

## Colors
This design system utilizes a clinical palette of cool grays and stark whites to establish a sterile, professional backdrop. 

- **Primary Accent:** Vivid Cyan (#00E5FF) is reserved exclusively for the most critical path: "Next Follow-Up" actions and primary submission triggers.
- **Surface Neutrals:** Use #F7FAFC for backgrounds and #EDF2F7 for subtle section nesting.
- **Status Indicators:** These use high-visibility, semantic colors to denote urgency. 
    - **Pending:** Amber for active tracking.
    - **Action Required:** High-alert Red for immediate roadblocks.
    - **Denied:** Muted Slate, indicating a terminal or "pivot required" state.
    - **Approved:** Clinical Green for successful completion.

## Typography
The system uses **Inter** for all primary UI text to ensure maximum legibility and neutrality. For clinical data points, patient identifiers, and timestamps, **JetBrains Mono** is introduced to provide a distinct "operational" feel and ensure character-level clarity (e.g., distinguishing '0' from 'O').

- **Headlines:** Tight tracking and bold weights for rapid scanning.
- **Data Labels:** All-caps JetBrains Mono used for metadata headers (e.g., "DOS," "NPI").
- **Body:** Standardized Inter for patient notes and clinical justifications.

## Layout & Spacing
The design system employs a **Fluid Grid** model based on a 4px baseline rhythm. This allows for the high information density required for medical tracking.

- **Desktop:** 12-column grid with 16px gutters. Modules are often packed tightly to keep relevant data "above the fold."
- **Mobile/Tablet:** Transition to a single-column stack for checklist-heavy views, ensuring large touch targets (minimum 44px height) for operational use in the field.
- **Density:** Use "Compact" vertical padding (8px) for table rows and "Standard" (16px) for card containers.

## Elevation & Depth
To maintain a disciplined, "flat" operational feel, depth is communicated through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Surface 0:** Main application background (#F7FAFC).
- **Surface 1:** Primary data cards and containers, using a 1px solid border (#E2E8F0) with no shadow.
- **Active State:** When an item is selected or active, it gains a 2px Cyan (#00E5FF) left-edge border accent.
- **Overlays:** Use a 16px backdrop blur for modals to maintain clinical context without visual distraction.

## Shapes
The design system uses a **Soft** shape language (0.25rem/4px radius). This keeps the UI looking precise and modern while avoiding the "toy-like" feel of overly rounded corners. 

- **Buttons & Inputs:** 4px border radius.
- **Status Tags:** Fully pill-shaped to differentiate status indicators from interactive buttons.
- **Selection Controls:** Checkboxes and radio buttons use the same 4px radius for consistency.

## Components
- **Buttons:** Primary buttons are Solid Cyan (#00E5FF) with black text for maximum contrast. Secondary buttons use a Ghost style with a cool gray border.
- **Status Rows:** Tables use zebra-striping with a very light tint of the status color (e.g., a 5% opacity green background for "Approved" rows) to facilitate rapid scanning.
- **Input Fields:** Use a rigid, outlined style with 1px #CBD5E0 borders. On focus, the border transitions to 2px Cyan.
- **Checklist Items:** Checklist items in clinical workflows feature a large, touch-friendly hit area and a subtle background fill change upon completion.
- **Progress Trackers:** Vertical "stepper" components are used for the authorization lifecycle, with monospaced timestamps indicating when each stage was reached.
- **Data Chips:** Small, rectangular chips with monospaced text are used for medical codes (ICD-10, CPT) to keep them visually distinct from prose.