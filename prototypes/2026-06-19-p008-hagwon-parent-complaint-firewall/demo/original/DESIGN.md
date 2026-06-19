---
name: Institutional Guardian
colors:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#201100'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c2300'
  on-tertiary-container: '#c88000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
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
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  data-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
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
  stack-compact: 8px
  stack-regular: 16px
  table-cell-padding: 10px 12px
---

## Brand & Style
The design system is engineered for high-stakes administrative environments where information density and clarity are paramount. It serves as a professional "firewall," transforming emotionally charged parent communications into structured, actionable data. 

The aesthetic is **Corporate Modern** with a focus on **Operator-Dense Minimalism**. It prioritizes utilitarian efficiency over decorative flair, utilizing a rigorous grid system and a restricted color palette to minimize cognitive load. The UI should feel like a high-end SaaS or Fintech platform—stable, authoritative, and impartial—providing school administrators with a sense of calm control amidst high-volume operational tasks.

## Colors
This design system utilizes a structured palette to categorize information and drive user focus toward resolution lanes.

- **Primary (Deep Navy):** Used for navigation, headers, and structural elements to establish authority.
- **Action Accent (Vibrant Blue):** Reserved for primary calls to action and the "Recommended Response" pathways.
- **Semantic Indicators:** Amber and Red are used sparingly but strictly for urgency and heat-mapping complaints.
- **Neutral Grays:** A range of slate-tinted grays handles text hierarchy and subtle borders, ensuring the interface remains easy on the eyes during prolonged use.

## Typography
Typography is optimized for bilingual legibility (Korean/English) using a compact scale. **Inter** is selected for its high x-height and exceptional clarity at small sizes. 

- **Data Density:** Body sizes are slightly smaller than standard consumer apps (13px-14px) to allow for more rows in tables and more lanes in dashboards.
- **Tabular Figures:** For numeric data, utilize the `data-mono` role which enables lining and tabular figures for perfect column alignment.
- **Hierarchy:** Use weight (Medium/SemiBold) rather than size to differentiate hierarchy within dense information clusters.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Navigation and sidebars are fixed-width, while the main content area utilizes a fluid grid to maximize the "Multi-pane Dashboard" experience.

- **Grid:** A 12-column system is used for top-level layout, but individual panes often use internal 4-column sub-grids for data alignment.
- **Rhythm:** An 8pt spatial system is refined down to a 4pt baseline for micro-adjustments in dense tables.
- **Adaptive Strategy:** On desktop, the layout supports three concurrent panes (Sidebar | List | Detail View). On tablet, the Detail View becomes an overlay or pushes the list aside. On mobile, the system collapses into a single-pane stack.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Base Layer:** The background (#F8FAFC) serves as the canvas.
- **Surface Layer:** White cards (#FFFFFF) sit on the background with a 1px border (#E2E8F0).
- **Active Elevation:** Only the highest priority items (like an active complaint card being dragged or focused) receive a soft, ambient shadow (0px 4px 12px rgba(30, 41, 59, 0.08)).
- **Dividers:** Use subtle 1px lines to separate table rows and sidebar sections, maintaining a flat but structured appearance.

## Shapes
The shape language is **Soft (0.25rem/4px)**. This slight rounding provides a professional, modern feel without sacrificing the "serious" nature of an administrative tool. 

- **Standard Elements:** Inputs, buttons, and cards use 4px corners.
- **Badges:** Use 2px corners or "squircle" shapes to distinguish them from actionable buttons.
- **Interactive States:** Focus states should follow the 4px curvature with an additional 2px offset ring for accessibility.

## Components
Consistent component styling ensures the firewall feels integrated and reliable.

- **Data Tables:** High-density with 10px vertical padding. Headers are Deep Navy (#1E293B) with subtle sorting icons. Row hover states use #F1F5F9.
- **Response Lanes:** Vertical columns used to categorize complaints by status. Each lane has a header with a count and a distinct color-coded top-border (e.g., Blue for "Recommended").
- **Action Buttons:** 
  - *Primary:* Solid Vibrant Blue (#3B82F6) with white text.
  - *Secondary:* Ghost style with Deep Navy text and a 1px Slate border.
- **Status Badges:** Small, caps-heavy text using a "tinted" background (e.g., 10% opacity of the status color) with high-contrast text for maximum readability without visual noise.
- **Input Fields:** Clean, rectangular with a 1px Slate-200 border. On focus, the border transitions to Vibrant Blue with a subtle outer glow.
- **Indicator Dots:** Use 8px circles for "Heat" levels—Green (Calm), Amber (Persistent), Red (Escalated).