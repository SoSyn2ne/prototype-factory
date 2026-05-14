---
name: Clinical Operations Console
colors:
  surface: '#f6f9ff'
  surface-dim: '#d4dbe2'
  surface-bright: '#f6f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4fc'
  surface-container: '#e8eef6'
  surface-container-high: '#e3e9f1'
  surface-container-highest: '#dde3eb'
  on-surface: '#161c22'
  on-surface-variant: '#44474d'
  inverse-surface: '#2b3137'
  inverse-on-surface: '#ebf1f9'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5e7e'
  primary: '#041632'
  on-primary: '#ffffff'
  primary-container: '#1b2b48'
  on-primary-container: '#8393b5'
  inverse-primary: '#b7c7eb'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#211500'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b2800'
  on-tertiary-container: '#ac8e5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b7c7eb'
  on-primary-fixed: '#091b37'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdea7'
  tertiary-fixed-dim: '#e3c28a'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#594317'
  background: '#f6f9ff'
  on-background: '#161c22'
  surface-variant: '#dde3eb'
typography:
  headline-lg:
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
  data-tabular:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
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
  gutter: 12px
  pane-padding: 16px
  stack-compact: 8px
  stack-dense: 4px
---

## Brand & Style
This design system is engineered for high-stakes healthcare operations, specifically tailored for medical review and prior authorization workflows. The brand personality is methodical, authoritative, and stoic. It prioritizes "functional density"—the ability to process large volumes of complex data without cognitive fatigue.

The design style is **Corporate / Modern** with a focus on structural clarity. It avoids decorative elements in favor of a "back-office console" aesthetic that feels like a precision instrument. The UI should evoke a sense of calm under pressure, using a clinical color palette and a rigid grid to maintain order in an information-heavy environment.

## Colors
The palette is anchored by **Deep Navy (#1B2B48)**, providing a foundation of professional trust and stability. The workspace utilizes **Clinical White (#F8FAFC)** and **Light Grey (#E2E8F0)** to reduce eye strain during long shifts. 

Status indicators are designed for "low-drama urgency." Instead of large, disruptive banners, use precise applications of color—such as 2px side borders, small status dots, or subtle text treatments. This ensures that operators can identify priorities without feeling overwhelmed by visual noise.

## Typography
The typography system utilizes **Inter** for its exceptional legibility at small scales and neutral, systematic character. The hierarchy is condensed to support high data density.

- **Data Density:** Use `body-sm` and `data-tabular` for the majority of the interface, including case queues and evidence logs.
- **Side-by-Side Review:** When documents are displayed for mapping, use `body-md` for legibility of medical text, ensuring a comfortable reading rhythm.
- **Labels:** Use `label-caps` sparingly for section headers within sidebars to distinguish metadata from actionable content.

## Layout & Spacing
The layout follows a **Fixed Multi-Pane** model. The screen should be divided into functional regions that do not move, allowing operators to build muscle memory.

- **Primary Workspace:** A side-by-side split view for document review and packet building. Each pane should have independent scrolling.
- **Grid System:** A strict 4px baseline grid ensures alignment across dense tables and form fields.
- **Gaps:** Use a narrow 12px gutter between major panes to maximize horizontal real estate for text-heavy evidence documents.
- **Responsive Behavior:** On smaller screens, the side-by-side panes collapse into a tabbed view, though the primary target remains a 1440p+ desktop environment.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers** and **Low-contrast Outlines** rather than shadows. This maintains the "flat" professional aesthetic of a medical console.

- **Background:** Level 0 is the base `background_hex`.
- **Panes/Cards:** Level 1 uses a white background with a 1px border of `neutral_color_hex`.
- **Active States:** Level 2 uses a subtle inset shadow or a slightly darker border to indicate focus.
- **Overlays:** Modals use a soft 15% opacity backdrop blur with a sharp 1px border to separate the action from the background data.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a subtle modern touch that prevents the UI from feeling "sharp" or "aggressive" while maintaining the precision required for a professional tool. Large radiuses (pills or circles) are strictly avoided except for specific status pips to ensure a serious, clinical tone.

## Components
- **Buttons:** Compact (32px height) with `primary_color_hex` for the main action (e.g., "Generate Appeal"). Secondary buttons use a ghost style with a 1px border.
- **Status Chips:** Small, rectangular indicators with a 2px left-border of the status color. Background fills should be extremely desaturated versions of the status color (e.g., 5% opacity).
- **Data Tables:** Highly dense with 8px vertical cell padding. Use zebra-striping with `#F1F5F9` on every other row. Hover states must be distinct to help the eye track across wide rows.
- **Input Fields:** Minimalist with a 1px border. Focus state uses a 2px `primary_color_hex` bottom border only to keep the interface clean.
- **Evidence Mapping Cards:** Small, stackable components in the sidebar that represent a piece of evidence. These use a `stack-dense` spacing (4px) to show as many as possible at once.
- **Splitter/Resizer:** A vertical handle between the review panes that allows the operator to prioritize either the medical record or the appeal draft.