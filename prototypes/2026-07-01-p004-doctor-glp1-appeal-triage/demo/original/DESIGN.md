---
name: Doctor GLP-1 Appeal Triage
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
  on-surface-variant: '#4a4455'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#7b7486'
  outline-variant: '#ccc3d7'
  surface-tint: '#7331df'
  primary: '#5300b7'
  on-primary: '#ffffff'
  primary-container: '#6d28d9'
  on-primary-container: '#dac5ff'
  inverse-primary: '#d3bbff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#6b3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f4200'
  on-tertiary-container: '#ffc19e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d3bbff'
  on-primary-fixed: '#250059'
  on-primary-fixed-variant: '#5b00c5'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb68b'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#743400'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 16px
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
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
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
  container-padding: 12px
  row-height-dense: 32px
  row-height-standard: 40px
  gutter: 16px
  sidebar-width: 240px
---

## Brand & Style
The design system is engineered for high-stakes clinical decision-making. It prioritizes speed of information retrieval and cognitive efficiency over aesthetic flourishes. The brand personality is **authoritative, analytical, and relentless**. It addresses the administrative burden of medical appeals by providing a "cockpit" experience—dense, precise, and devoid of distractions.

The visual style is **Operator-Dense Minimalism**. It draws from technical interfaces and laboratory software, utilizing a compact layout and rigid structure to convey a sense of professional urgency. Every pixel is dedicated to data clarity, ensuring that clinicians can triage high volumes of appeals with surgical precision.

## Colors
The palette is rooted in a **sterile clinical environment**. It utilizes cool grays and slate tones to reduce eye strain during prolonged use. 

- **Primary Action:** A restrained "Clinical Violet" (#6D28D9) is used exclusively for primary calls to action, active states, and critical path highlights.
- **Surface & Background:** High-utility whites (#FFFFFF) and slate-tinted grays (#F8FAFC) create a crisp, layered environment.
- **Functional Accents:** Success, warning, and error colors are desaturated to maintain the professional tone, appearing only in status badges or data indicators.
- **Typography:** Deep slate (#1E293B) provides high contrast against light surfaces without the harshness of pure black.

## Typography
This design system employs a **tight type scale** optimized for information density. **Inter** is the primary typeface for its exceptional legibility at small sizes and neutral tone. 

- **Headlines:** Kept small (max 20px) to conserve vertical space.
- **Body Text:** The standard size is 14px, with a 13px variant for secondary meta-data or dense sidebars.
- **Data Display:** **JetBrains Mono** (monospaced) is used for clinical codes (ICD-10), dates, and patient IDs to ensure character alignment and rapid scanning.
- **Letter Spacing:** Headlines use slight tracking contraction (-0.01em) for a more robust appearance, while labels use expanded tracking for legibility in all-caps.

## Layout & Spacing
The layout uses a **rigid, 4px-based grid** to achieve "operator-dense" efficiency. 

- **Density:** Padding is intentionally minimized. Standard container padding is 12px.
- **Fixed Navigation:** A narrow sidebar (240px) maximizes the central data-grid area.
- **Grid System:** A 12-column fluid grid is used for dashboard views, but individual appeal modules use fixed-width panels to prevent data stretching.
- **Breakpoints:**
  - **Desktop (1280px+):** Full multi-panel view (Queue > Patient Details > Evidence).
  - **Tablet (768px-1279px):** Collapsed sidebar, focus on Queue and Patient Details.
  - **Mobile:** Not recommended for triage tasks; view-only mode with stacked cards.

## Elevation & Depth
Depth is communicated through **tonal layering and subtle dividers** rather than traditional shadows. 

- **Tonal Tiers:** The background uses a light slate, while primary content containers use pure white. Secondary panels (like a history log) use a slightly darker gray to denote their subsidiary nature.
- **Borders:** Instead of shadows, 1px solid borders (#E2E8F0) define element boundaries.
- **Active State:** Elevation is simulated by changing border color to the primary violet (#6D28D9) rather than increasing shadow depth.
- **Modals:** When used, modals feature a very tight 4px blur shadow with 10% opacity, maintaining a flat, professional profile.

## Shapes
The shape language is **precise and geometric**. This design system uses a "Soft" roundedness level (4px) to provide just enough definition to separate UI components without introducing the "friendliness" of larger radii.

- **Standard Elements:** Inputs, buttons, and cards use a 4px radius.
- **Status Badges:** Use a 2px radius or sharp corners to distinguish them from interactive buttons.
- **Selection States:** Highlighting an active row uses a 0px radius (full bleed) to emphasize the grid-like structure.

## Components
- **Data Tables:** The core of the system. Rows are 32px high with 1px borders. Hover states use a subtle gray (#F1F5F9).
- **Status Badges:** Compact labels with 11px bold text. Colors are muted: "High Viability" uses an emerald tint, "Low Viability" uses a ruby tint.
- **Buttons:** Small-scale (28px height for secondary, 36px for primary). No gradients; solid fills only.
- **Input Fields:** Inset labels or "label-over-border" styling to save vertical space. Minimal padding (8px side padding).
- **Evidence Cards:** Compact containers used in the appeal side-panel. They use subtle dividers to separate clinical notes, BMI data, and previous medication history.
- **Timeline/Audit Trail:** A vertical, dense list component using 2px lines and small circular nodes to track appeal progress.