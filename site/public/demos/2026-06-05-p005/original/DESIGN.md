---
name: Cluster Tree Explorer
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
  on-surface-variant: '#45474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
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
  tertiary: '#001624'
  on-tertiary: '#ffffff'
  tertiary-container: '#002c42'
  on-tertiary-container: '#0099d9'
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
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
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
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
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
  container-padding: 1rem
  element-gap: 0.5rem
  tight-gap: 0.25rem
  sidebar-width: 280px
  header-height: 48px
---

## Brand & Style

The design system is engineered for high-density information environments where efficiency and technical precision are paramount. It targets system operators, developers, and data engineers who require a "pro-tool" interface that prioritizes data visibility over decorative elements.

The aesthetic follows a **Corporate / Modern** approach with a heavy emphasis on **Technical Minimalism**. It mimics the functional rigor of an Integrated Development Environment (IDE) or an industrial control panel. The emotional response should be one of competence, reliability, and extreme clarity. Visual clutter is eliminated in favor of structural hierarchy, utilizing subtle borders and tonal layering to define workspace boundaries without sacrificing screen real estate.

## Colors

The color palette is grounded in "Industrial Blue" and "Deep Slate" to provide a professional, stable foundation. 

- **Primary & Secondary:** Used for structural elements (headers) and primary actions.
- **Surface Strategy:** The design system uses a triple-layered background approach. The main canvas is `#f8fafc`, while utility areas like sidebars and navigation trees use `#f1f5f9` to create distinct functional zones without heavy shadows.
- **Status-Driven Accents:** Color is used functionally, not decoratively. Success, Warning, Error, and Info tokens are strictly reserved for state indicators, health scores, and system alerts to ensure immediate cognitive recognition of issues.

## Typography

This design system utilizes a dual-font strategy to distinguish between UI controls and technical data.

- **Inter:** The primary interface font. It is used for navigation, labels, and standard body text. It is chosen for its exceptional legibility at small scales.
- **JetBrains Mono:** Reserved for technical strings, including Git hashes, IP addresses, JSON snippets, and status codes. The monospaced nature ensures that alphanumeric strings align predictably in dense tables and tree views.
- **Scale:** Typographic sizes are kept compact (12px–14px) to maximize the amount of information visible on-screen at once. Use `label-caps` for table headers and section titles to provide clear grouping.

## Layout & Spacing

The layout utilizes a **Fixed Sidebar + Fluid Content** model. 

- **Density:** Spacing is built on a 4px baseline grid. The "Compact" philosophy dictates reduced vertical padding in lists and tables to allow for at least 25-30 rows of data to be visible without scrolling.
- **Grid:** A 12-column grid is used for dashboard views, but the core explorer uses a nested tree-view layout.
- **Breakpoints:**
  - **Desktop (1440px+):** Full 3-pane layout (Tree, Detail, Inspector).
  - **Tablet (1024px):** Tree view becomes a collapsible drawer.
  - **Mobile:** Not prioritized for this "operator" tool, but reflows to a single-column stack with persistent breadcrumbs.

## Elevation & Depth

This design system avoids heavy shadows and focuses on **Low-contrast outlines** and **Tonal Layers**. 

- **Borders:** UI boundaries are defined by 1px solid borders (`#e2e8f0`). 
- **Z-Axis:** Instead of shadows, depth is communicated by shifting the background color. 
  - Level 0 (Canvas): `#f8fafc`
  - Level 1 (Sidebar/Cards): `#f1f5f9`
  - Level 2 (Active Item/Popovers): `#ffffff` with a very soft, 4px blur shadow.
- **Interaction:** Hover states should use a subtle background shift (`#f1f5f9` to `#e2e8f0`) rather than an elevation increase.

## Shapes

The design system uses a **Soft** shape language. 

- **Standard Radius:** 4px (`0.25rem`) is the default for buttons, input fields, and cards. This maintains a precise, engineered look while feeling modern.
- **Pills:** Status badges and chips use a fully rounded "pill" shape to provide a visual contrast against the otherwise rectilinear grid of the technical interface.
- **Icons:** Use 16px icons within a 20px or 24px bounding box to maintain high density.

## Components

- **Buttons:** Small (28px height) and Medium (32px height). Primary buttons use Deep Slate (`#1e293b`). Ghost buttons are preferred for secondary actions in toolbars to reduce visual noise.
- **Tree View:** The core component. 16px indentation per level. Use chevron icons for expansion. Active nodes should have a left-border accent of Industrial Blue (`#3b82f6`).
- **Status Badges:** Pill-shaped, using low-opacity backgrounds of the status colors (e.g., Success: 10% opacity `#10b981` with 100% opacity text).
- **Data Tables:** No vertical borders; horizontal borders only. Use `mono-sm` for data cells. Row hover effect is mandatory for tracking data across columns.
- **Input Fields:** Flush, 1px bordered boxes with no shadows. Focus state uses a 1px `secondary_color` outline.
- **Collapsible Sections:** Used in the "Inspector" panel to group metadata. Headers should be `label-caps` with a toggle chevron.