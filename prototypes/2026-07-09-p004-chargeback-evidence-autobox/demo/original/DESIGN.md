---
name: Chargeback Evidence Autobox
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#410004'
  on-tertiary-container: '#ef4444'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  mono-label:
    fontFamily: Geist
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
  container-padding: 1.5rem
  gutter-dense: 0.75rem
  row-height-sm: 2.25rem
  row-height-md: 3rem
  stack-gap: 1rem
---

## Brand & Style
The design system is engineered for high-stakes financial operations where accuracy and speed are paramount. The brand personality is clinical, authoritative, and efficient, designed to reduce cognitive load for dispute managers handling high volumes of data. 

The aesthetic follows a **Corporate / Modern** approach with leanings toward **Minimalism**, prioritizing content over container. It utilizes a high-density layout to minimize scrolling and keep relevant evidence within the immediate viewport. The emotional response is one of controlled urgency and professional reliability.

## Colors
The palette is restricted to maintain focus on the status of chargebacks.
- **Primary:** A deep Navy (`#0F172A`) used for primary actions, navigation, and core branding. It communicates stability and authority.
- **Surface:** A range of Cool Grays and Whites (`#FFFFFF` to `#F8FAFC`) form the base of the UI, creating a clean environment for data density.
- **Urgent:** A single Orange-Red (`#EF4444`) is reserved exclusively for missing proof, expired deadlines, or critical system errors.
- **Status Accents:** Subtle, low-saturation washes of green (Success), blue (Pending), and yellow (Review) are used only within status chips to aid rapid scanning.

## Typography
This design system utilizes **Inter** for its exceptional legibility in data-dense environments and high x-height. The type scale is intentionally tight to maximize information per screen.

- **Headlines:** Used sparingly for page titles and section headers.
- **Body:** The default is `body-sm` (13px) for most table content and descriptions to ensure maximum data density.
- **Labels:** Uppercase labels are used for table headers and form field captions to provide clear structural hierarchy.
- **Mono:** **Geist** is used for transaction IDs, ARN numbers, and card digits to ensure character clarity.

## Layout & Spacing
The layout uses a **Fluid Grid** system designed for wide-screen monitors typically used in operations centers. 

- **Density:** We utilize an 8px base grid, but often halve it to 4px for tight component internals (e.g., input padding).
- **Margins:** Page margins are fixed at 24px (`1.5rem`).
- **Breakpoints:**
  - **Desktop (1440px+):** 12-column grid, fluid width.
  - **Tablet (1024px):** 12-column grid, sidebars collapse into icons.
  - **Mobile:** Not prioritized for this system, but supports a single-column reflow for urgent alerts.
- **Drawers:** Information-heavy policy references appear in right-aligned drawers (400px - 600px width) rather than modals to maintain context.

## Elevation & Depth
To maintain a professional and "flat" operational feel, this design system avoids heavy shadows. 

- **Borders:** Hierarchy is primarily established through **High-contrast outlines** (`#E2E8F0`). 
- **Z-Axis:** 
  - **Level 0 (Canvas):** Base background (`#F8FAFC`).
  - **Level 1 (Cards/Tables):** White surface with 1px border.
  - **Level 2 (Popovers/Drawers):** White surface with a sharp 4px or 8px blur shadow (low opacity) to separate from the main data grid.
- **Tonal Layers:** Subtle gray backgrounds are used to differentiate table headers from body rows.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a professional, modern feel without the playfulness of fully rounded corners. 

- **Buttons & Inputs:** 4px (`0.25rem`) corner radius.
- **Chips:** 2px corner radius for a more "tag-like" appearance.
- **Cards & Drawers:** 6px - 8px corner radius to distinguish major containers.
- **Checkboxes:** 2px corner radius for better visual alignment with dense text.

## Components
- **Data Tables:** The core of the system. Rows should have a fixed height of 36px (dense) or 48px (standard). Use zebra-striping or 1px border-bottom for row separation.
- **Status Chips:** Small, rectangular tags with 5% opacity backgrounds and 100% opacity text in the same hue (e.g., Green text on light green tint).
- **Dense Form Controls:** Inputs use a 1px border. Labels are positioned above the input in `label-sm` weight. Use `4px` vertical padding.
- **Action Buttons:**
  - **Primary:** Solid Navy with white text.
  - **Secondary:** White background with 1px Navy border.
  - **Urgent:** Solid Red for "Reject Dispute" or "Evidence Missing."
- **Structured Drawers:** Side panels used for "Policy Reference" or "Evidence Preview." These must include a fixed header and footer with the middle section scrollable.
- **Evidence Cards:** Compact blocks with a file-type icon, filename, and "Status: Verified" label, used within the evidence submission flow.