---
name: Financial Workbench System
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

## Brand & Style

This design system is engineered for the high-stakes environment of financial analysis and risk assessment. The brand personality is rooted in **precision, rigour, and objective clarity**. It avoids decorative flourishes in favor of a "technical workbench" aesthetic—where every pixel serves a functional purpose.

The design style follows a **Modern Corporate** approach with a heavy emphasis on **Information Density**. It utilizes a "data-first" hierarchy, ensuring that complex datasets remain legible and actionable. By combining thin 1px borders with expansive white space (Off-white), the system creates a sense of organized calm amidst high-velocity data. The emotional response is one of controlled authority and trust, empowering analysts to make rapid, informed decisions.

## Colors

The palette is strictly functional, utilizing high-contrast neutrals and semantic accents:

- **Ink (#1A1A1A):** Used for primary headings, body text, and active UI states to ensure maximum legibility.
- **Off-white (#F9F9F7):** The foundational background color, chosen to reduce eye strain during long sessions compared to pure white.
- **Slate-gray (#64748B):** Reserved for secondary information, metadata, and de-emphasized labels.
- **Emerald (#10B981):** A semantic indicator for "Safe" estimates, growth, and positive credit health.
- **Amber (#F59E0B):** A semantic indicator for "Risk," burn rates, or cautionary data points.

Background surfaces should use subtle shifts in gray to define container boundaries, maintaining a flat but layered appearance.

## Typography

The system utilizes **Inter** for its exceptional readability and neutral tone. To support financial modeling, the `data-tabular` role is critical: it must be implemented using `font-variant-numeric: tabular-nums` to ensure that columns of numbers align perfectly in tables and KPI cards.

- **Headlines:** Use tight letter-spacing and semi-bold weights to anchor page sections.
- **Body:** Standardized at 14px for the majority of the workbench to allow for high information density without sacrificing clarity.
- **Labels:** Small, uppercase, and slightly tracked out to distinguish them from interactive data points.

## Layout & Spacing

This design system employs a **Fixed-Grid** layout for desktop dashboards, maximizing the use of horizontal real estate. 

- **Grid Model:** 12-column system with 16px gutters.
- **Density:** Elements are packed tightly using a 4px base unit to allow analysts to view multiple data streams simultaneously without scrolling.
- **Breakpoints:**
  - **Desktop (1440px+):** Full 12-column display with side navigation.
  - **Tablet (768px - 1439px):** Columns collapse to 6; side navigation transforms into a collapsed icon bar.
  - **Mobile (<767px):** Single column flow; complex data tables must use horizontal overflow or card-view transformations.

## Elevation & Depth

Elevation in this system is conveyed through **Low-contrast Outlines** and **Tonal Layering** rather than heavy shadows. This maintains the "workbench" feel of a flat, precise tool.

1.  **Level 0 (Background):** The `#F9F9F7` canvas.
2.  **Level 1 (Cards/Containers):** Pure white (`#FFFFFF`) backgrounds with a 1px border of `#E2E8F0` (a lighter slate). 
3.  **Level 2 (Dropdowns/Modals):** Subtle ambient shadows (0px 4px 12px, 5% opacity Ink) to separate floating elements from the grid.

Depth is used to denote interactivity; interactive cards may show a slightly darker 1px border on hover rather than an elevation lift.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding prevents the UI from feeling aggressive or "brutalist" while maintaining a professional, geometric structure.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **KPI Cards:** 8px (0.5rem) corner radius to create a distinct container feel.
- **Confidence Badges:** 2px or fully square corners to emphasize their role as technical tags rather than buttons.

## Components

### KPI Cards
Cards must feature a `label-md` title, a `headline-md` primary value (tabular numbers), and a footer for secondary metrics (e.g., % change). Use Emerald/Amber for trend indicators.

### Data Tables
Tables are the core of the workbench. Use 1px horizontal dividers only. Header cells should use `label-md` styling with `#64748B` text. Row heights should be compact (32px or 40px) to maximize data visibility.

### Confidence Badges
Small, high-density tags used to indicate data reliability.
- **Safe:** Emerald text on a 10% opacity Emerald background.
- **Risk:** Amber text on a 10% opacity Amber background.

### Buttons
- **Primary:** Ink (#1A1A1A) background with White text.
- **Secondary:** Transparent background with an Ink 1px border.
- **Tertiary:** Slate-gray text with no border, becoming Ink on hover.

### Input Fields
Inputs use the Off-white background with a 1px border. The focus state uses a 1px Ink border—no glow or heavy shadows.