---
name: Precision Utility
colors:
  surface: '#faf9ff'
  surface-dim: '#ccdaff'
  surface-bright: '#faf9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d8e2ff'
  on-surface: '#051a3e'
  on-surface-variant: '#434654'
  inverse-surface: '#1d3054'
  inverse-on-surface: '#edf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e2'
  on-secondary-container: '#606365'
  tertiary: '#7b2600'
  on-tertiary: '#ffffff'
  tertiary-container: '#a33500'
  on-tertiary-container: '#ffc6b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#e1e2e4'
  secondary-fixed-dim: '#c5c6c8'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812800'
  background: '#faf9ff'
  on-background: '#051a3e'
  surface-variant: '#d8e2ff'
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
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
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
  unit: 4px
  container-margin: 24px
  gutter: 16px
  compact-padding: 8px
  comfortable-padding: 12px
---

## Brand & Style
The design system is centered on the concept of "Operator-Dense Utility." It prioritizes information density and cognitive speed for freelancers managing high volumes of Peppol e-invoices. The brand personality is professional, reliable, and frictionless, moving away from "corporate bloat" toward a tool-like precision that respects the user's time.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It uses high-contrast functional accents to guide the eye toward validation status and action items. The aesthetic avoids decorative elements, favoring structural clarity, clear boundaries, and purposeful whitespace to ensure that complex document data remains legible and actionable.

## Colors
The palette is built for a focused workspace. The background uses clean whites and light grays to reduce eye strain during long sessions. 

- **Primary (Trust Blue):** Reserved for primary calls to action and active navigation states.
- **Surface & Neutrals:** A range of cool grays define the hierarchy of the workspace, separating navigation from the document queue.
- **Validation States:** High-contrast Success (Green), Warning (Amber), and Error (Red) are used exclusively for Peppol validation badges and status indicators to ensure critical information is never missed.

## Typography
Inter is used for its exceptional legibility and systematic feel. The type hierarchy is intentionally compact to facilitate "operator-dense" layouts.

- **Tabular Data:** Use `data-mono` for all numeric values and invoice IDs. This utilizes tabular numerals to ensure columns of figures align perfectly for easy scanning.
- **Labels:** Small, uppercase labels with increased letter spacing are used for metadata headers to distinguish them from user-generated content.
- **Headlines:** Kept modest in size to maximize the "above the fold" real estate for document lists.

## Layout & Spacing
This design system utilizes a **Fluid Grid** for the main document queue and a **Fixed Sidebar** (240px) for navigation. 

The spacing rhythm is based on a 4px baseline grid. For an "operator-dense" experience, we use `compact-padding` (8px) within data rows and `gutter` (16px) between major UI modules. On mobile, the sidebar collapses into a bottom navigation bar or a hamburger menu, and horizontal padding reduces to 16px. 

Layouts should prioritize a "Master-Detail" view: a vertical list of invoices on the left/center and a collapsible preview pane on the right for document inspection.

## Elevation & Depth
To maintain a professional and "flat" utility feel, this design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Low-contrast outlines**.

- **Level 0 (Background):** The main workspace color (#F4F5F7).
- **Level 1 (Cards/Rows):** White surfaces with a 1px border (#DFE1E6). No shadow.
- **Level 2 (Modals/Dropdowns):** White surfaces with a soft, 8px ambient shadow (10% opacity) and a 1px border to differentiate from the background.
- **Active State:** A 2px primary blue left-border is used to indicate the currently selected invoice in the queue.

## Shapes
The shape language is **Soft** (4px / 0.25rem). This provides a subtle modern touch that prevents the UI from feeling too industrial or "Windows 95," while maintaining a space-efficient profile. 

- **Buttons & Inputs:** 4px radius.
- **Status Badges:** 2px radius (near-sharp) to emphasize their "official" stamp-like nature.
- **Cards:** 6px (rounded-lg) for the outer container of the document previewer.

## Components
- **Compact Data Tables:** Rows have a fixed height of 40px. Hover states change the background to a subtle light blue.
- **Status Badges:** Small, high-contrast labels (e.g., "Validated," "Missing Field," "Peppol Ready"). Use background tints of the status colors with high-contrast text for maximum accessibility.
- **Timeline-based Mandate Header:** A horizontal stepper at the top of document views showing the invoice lifecycle (Received → Validated → Registered → Paid).
- **Validation Badges:** Small icons (Check/Warning) placed directly next to data fields in the preview pane to indicate Peppol protocol compliance.
- **Primary Action Button:** Medium-sized, Trust Blue background, bold Inter text. Avoid large "Hero" buttons; keep them sized to the component's context.
- **Input Fields:** Minimalist with a 1px border. Focus states use a 2px Trust Blue outline.