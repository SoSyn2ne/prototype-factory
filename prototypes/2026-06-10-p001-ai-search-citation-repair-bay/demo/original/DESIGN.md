---
name: Precision Citation Console
colors:
  surface: '#fcf8f9'
  surface-dim: '#dcd9da'
  surface-bright: '#fcf8f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f4'
  surface-container: '#f0edee'
  surface-container-high: '#eae7e8'
  surface-container-highest: '#e5e2e3'
  on-surface: '#1b1b1c'
  on-surface-variant: '#424656'
  inverse-surface: '#303031'
  inverse-on-surface: '#f3f0f1'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#b02f00'
  on-secondary: '#ffffff'
  secondary-container: '#ff5722'
  on-secondary-container: '#541100'
  tertiary: '#a33200'
  on-tertiary: '#ffffff'
  tertiary-container: '#cc4204'
  on-tertiary-container: '#fff6f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#fcf8f9'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e3'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
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
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-sm:
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
  container-padding: 24px
  gutter: 12px
  sidebar-width: 260px
  density-compact: 4px
  density-regular: 8px
---

## Brand & Style
The design system is engineered for the high-stakes environment of AI citation management and data verification. It adopts a **Modern Corporate** aesthetic with a lean toward **Utility-Focused Minimalism**, evoking the atmosphere of a "Control Center" or "Repair Bay."

The brand personality is disciplined, authoritative, and precise. It targets professional operators who require high information density and rapid error-correction workflows. The UI minimizes emotional distraction to prioritize cognitive clarity and task speed, ensuring that "urgent repairs" are immediately distinguishable from routine monitoring.

## Colors
This design system utilizes a high-contrast functional palette. The primary surface is **Fog (#F4F4F5)**, providing a clean, low-glare canvas for long-duration work. **Charcoal (#1A1A1B)** is reserved for sidebar navigation and primary headers to create a strong structural frame.

**Electric Blue (#0066FF)** serves as the primary action color for standard operations. **Safety Orange (#FF5722)** is used strictly for "Urgent" status and critical system repairs, ensuring these elements break the visual hierarchy. Secondary status colors (Yellow, Red, Slate) are used for granular severity grading in tables and badges.

## Typography
The typography is built on **Inter**, chosen for its exceptional legibility in dense interfaces. A compact type scale is employed to maximize the amount of data visible on-screen without sacrificing readability. 

- **Headlines:** Reserved for page titles and section headers.
- **Body:** The primary workhorse for data tables and citation text.
- **Labels:** Used for metadata, badges, and button text.
- **Mono:** **JetBrains Mono** is introduced for citation IDs, timestamps, and raw data strings to ensure character-level distinction.

## Layout & Spacing
The layout follows a **Fixed Sidebar + Fluid Content** model. It is optimized for large displays (1440px+) where operators can view side-by-side "lane comparisons" of AI output versus source citations.

A strict **4px grid** governs all spacing. Tables use a compact vertical rhythm (8px cell padding) to minimize scrolling. Margins are kept tight (24px) to emphasize the utility-first nature of the tool. On smaller screens, the sidebars collapse into icons to preserve the lane-based comparison view.

## Elevation & Depth
This design system avoids heavy shadows, favoring **Tonal Layers** and **Low-Contrast Outlines**. Depth is communicated through stacking:
- **Level 0:** Fog background.
- **Level 1:** White cards or table rows with a 1px border (#E4E4E7).
- **Level 2:** Active modals or dropdowns with a subtle, tight shadow (0 4px 6px -1px rgba(0,0,0,0.1)).

Sidebar navigation is treated as the "Foundation" layer, utilizing Charcoal to pull it visually behind the active workspace. Interactive elements use a 1px inset border on hover to simulate a tactile "press."

## Shapes
The design system uses a **Soft (0.25rem)** roundedness level to maintain a professional, disciplined appearance. This slight radius prevents the interface from feeling "sharp" or hostile while maintaining a rigid, grid-aligned structure.

Badges and status indicators follow the same 4px radius. Buttons are strictly rectangular with 4px corners; pill shapes are avoided to keep the focus on the "Control Center" aesthetic rather than consumer-facing friendliness.

## Components
- **Severity Badges:** High-contrast blocks with `label-sm` typography. Background colors correspond to the severity level (e.g., Orange for Urgent).
- **Compact Tables:** Zebra-striped rows on hover. Column headers use `label-sm` with a bottom border. Cell text uses `body-sm`.
- **Lane Comparisons:** Split-view panels with synchronized scrolling. The "Source" lane uses a slight grey tint to distinguish it from the "AI Output" lane.
- **Action Buttons:**
    - *Primary:* Electric Blue, solid fill.
    - *Repair:* Safety Orange, solid fill, reserved for fixing critical errors.
    - *Ghost:* Transparent with 1px border for secondary navigation.
- **Search & Filter:** Integrated directly into the header or top of tables using a compact "Filter Bar" pattern with icon-only buttons for density.
- **Citations Card:** A specialized component featuring the citation text, a confidence score (0-100%), and a direct "Verify" action button.