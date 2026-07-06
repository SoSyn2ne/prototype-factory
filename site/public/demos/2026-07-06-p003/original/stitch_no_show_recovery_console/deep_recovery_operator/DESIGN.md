---
name: Deep Recovery Operator
colors:
  surface: '#031427'
  surface-dim: '#031427'
  surface-bright: '#2a3a4f'
  surface-container-lowest: '#000f21'
  surface-container-low: '#0b1c30'
  surface-container: '#102034'
  surface-container-high: '#1b2b3f'
  surface-container-highest: '#26364a'
  on-surface: '#d3e4fe'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#d3e4fe'
  inverse-on-surface: '#213145'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#ffb3af'
  on-tertiary: '#650911'
  tertiary-container: '#fc7c78'
  on-tertiary-container: '#711419'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#031427'
  on-background: '#d3e4fe'
  surface-variant: '#26364a'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-tabular:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-caps:
    fontFamily: Hanken Grotesk
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
  row-height-sm: 32px
  row-height-md: 40px
  gutter: 16px
  margin-desktop: 24px
  margin-mobile: 12px
---

## Brand & Style
The brand personality is disciplined, clinical, and high-stakes. It is designed for professional operators who manage service-based recovery and revenue tracking. The UI must evoke a sense of absolute control, reliability, and precision.

The design style is **Corporate / Modern** with a lean towards **Technical Minimalism**. It prioritizes information density over white space, using a structured hierarchy to manage complex data queues. Every pixel must serve a functional purpose; there are no decorative flourishes. The aesthetic is "instrumental"—resembling a high-end flight deck or a financial terminal where focus is the primary requirement.

## Colors
The palette is built on a "Dark Console" foundation to reduce eye strain during long operational shifts. 

- **Primary (Emerald Green):** Reserved exclusively for successful recovery states, primary "Submit" or "Recover" actions, and positive growth indicators.
- **Surface Palette:** Utilizes deep slate (`#020617`) for the canvas and charcoal grays (`#0F172A`) for containers to create a tiered technical depth.
- **Accents:** Use high-contrast white (`#F8FAFC`) for primary text and muted slates for secondary metadata. 
- **Functional Colors:** Red is strictly for system failures or permanent data loss; Amber is for pending queues or timeouts.

## Typography
The typography system prioritizes legibility in high-density environments. **Hanken Grotesk** provides a sharp, contemporary sans-serif feel for the interface, while **JetBrains Mono** is utilized for all monetary values, timestamps, and recovery IDs to ensure character distinction and perfect vertical alignment in tables (tabular figures).

On mobile, the scale remains tight; headlines do not exceed 20px to maximize the visible data rows. Letter spacing is slightly tightened on headlines for a "compact" technical look and widened on labels for clarity at small sizes.

## Layout & Spacing
The layout uses a **Fluid Grid** with fixed-width sidebars (240px) to maximize the central data workspace. The system is built on a 4px baseline grid to maintain tight vertical rhythm.

- **Density:** Rows are intentionally compact. Table rows should use `row-height-sm` (32px) for high-volume queues.
- **Breakpoints:**
    - **Desktop (1280px+):** 12-column layout, maximum data visibility.
    - **Tablet (768px - 1279px):** Sidebar collapses to icons; 8-column layout.
    - **Mobile (<767px):** Single column. Tables transform into "Summary Cards" to maintain recovery workflow viability.
- **Margins:** Use 24px outer margins on desktop, reducing to 12px on mobile to prevent "wasted" screen real estate.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Crisp Borders** rather than aggressive shadows.

1.  **Level 0 (Canvas):** `#020617` - The base background.
2.  **Level 1 (Card/Table):** `#0F172A` with a 1px border of `#1E293B`.
3.  **Level 2 (Active/Hover):** `#1E293B` with a 1px border of `#334155`.

Shadows, when used (e.g., for dropdown menus or modals), must be short, dark, and tight (e.g., `0 4px 6px -1px rgba(0, 0, 0, 0.5)`), serving only to separate the element from the data below without adding "airiness."

## Shapes
The system uses a **Soft** shape language. A 4px (`0.25rem`) corner radius is the standard for buttons, input fields, and cards. This provides just enough softness to distinguish UI elements from raw data while maintaining the disciplined, geometric feel of a professional console. Large containers (modals) may use 8px, but never more.

## Components
- **Buttons:** Primary buttons use the Emerald Green (`#10B981`) with black text for maximum "Action" visibility. Ghost buttons use `border_contrast` and are the default for secondary tasks.
- **Data Tables:** The core component. Features includes sticky headers, monospaced tabular data for recovery amounts, and "status pips" (small 6px circles) for indicating queue health.
- **Input Fields:** Dark-themed with a 1px `border_subtle`. On focus, the border transitions to the Primary Emerald. Label text is always positioned above the field in `label-caps` style.
- **Chips/Badges:** Small, rectangular with 2px radius. High-contrast backgrounds for "Urgent" (Red) or "Recovered" (Green), and muted grays for "Archived."
- **Status Indicators:** Simple color-coded dots (pips) next to text strings to preserve horizontal space.
- **Progress Bars:** Thin (4px height) linear bars within table cells to show recovery percentage towards targets.