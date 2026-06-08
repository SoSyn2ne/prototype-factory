---
name: Field-Ops Industrial
colors:
  surface: '#f6fafe'
  surface-dim: '#d6dade'
  surface-bright: '#f6fafe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f8'
  surface-container: '#eaeef2'
  surface-container-high: '#e4e9ed'
  surface-container-highest: '#dfe3e7'
  on-surface: '#171c1f'
  on-surface-variant: '#574235'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#edf1f5'
  outline: '#8b7263'
  outline-variant: '#dec1af'
  surface-tint: '#964900'
  primary: '#964900'
  on-primary: '#ffffff'
  primary-container: '#f57c00'
  on-primary-container: '#572800'
  inverse-primary: '#ffb786'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#505f76'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f9fb7'
  on-tertiary-container: '#26364a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc6'
  primary-fixed-dim: '#ffb786'
  on-primary-fixed: '#311300'
  on-primary-fixed-variant: '#723600'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f6fafe'
  on-background: '#171c1f'
  surface-variant: '#dfe3e7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 13px
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
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  grid-margin: 24px
  grid-gutter: 12px
  sidebar-width: 280px
---

## Brand & Style
The design system is engineered for high-stakes operational workflows, specifically the coordination and approval of infrastructure projects. The target audience includes field engineers, electrical contractors, and condominium board members who require clarity over aesthetics. 

The style is **Industrial / Modern**, leaning heavily into utility and precision. It draws inspiration from technical manuals and architectural blueprints, prioritizing information density and structural integrity. Every element must feel intentional and "built," evoking an emotional response of reliability, institutional trust, and uncompromising efficiency. Marketing-driven flourishes are replaced by a focus on legibility, data hierarchy, and "ready-for-site" ruggedness.

## Colors
This design system utilizes a "Steel and Slate" palette to establish an atmosphere of industrial stability. 
- **Primary Action (#F57C00):** A restrained, high-visibility orange reserved exclusively for primary calls to action, critical status alerts, and "Approved" milestones. 
- **Secondary / Steel (#334155):** Used for structural headers, sidebars, and navigation elements to ground the interface.
- **Tertiary / Slate (#64748B):** Applied to secondary data points, icons, and non-interactive text.
- **Surface Neutrals:** A range of cool grays (Slate-50 to Slate-200) define the content areas, ensuring that the "white space" feels like a solid material surface rather than a void.

## Typography
The typography utilizes **Inter** for its exceptional legibility and neutral, systematic tone. The hierarchy is designed for rapid scanning of technical specifications and legal packets.
- **Tabular Numerals:** All data-heavy displays must use tabular lining figures to ensure numbers align vertically in grids.
- **Labeling:** Small, all-caps labels are used for metadata and field identifiers to differentiate instructions from user-generated content.
- **Mobile Adaption:** For mobile field-use, `display-lg` scales down to 24px (`headline-md`) to ensure critical project titles remain visible on handheld devices without excessive wrapping.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Navigation and inspector panels (sidebars) are fixed to maintain tool accessibility, while the central "Canvas" (maps or packets) fluidly expands.
- **Grid System:** A 12-column grid is used for dashboard views, while a single-column "Sheet" layout is used for document review.
- **Density:** The system uses a tight 4px baseline unit. In "Field Mode" (mobile), padding is increased to `md` (16px) for touch targets. In "Review Mode" (desktop), density is increased to `sm` (8px) to maximize information visible above the fold.
- **Breakpoints:** Mobile (<768px) collapses sidebars into a bottom navigation bar; Tablet (768px-1024px) uses a condensed sidebar; Desktop (>1024px) uses full technical panels.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows, maintaining the "flat" feel of a physical document or technical drawing.
- **Base Level:** UI background in `Slate-50`.
- **Raised Level:** Cards and panels use a white background with a 1px `Slate-200` border. No shadow.
- **Interactive Level:** Hovering over elements triggers a subtle `Slate-100` background shift.
- **Overlay Level:** Modals and dropdowns use a crisp 1px border and a small, sharp shadow (4px blur, 10% opacity) to signify priority without feeling "cloudy."

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding provides a professional, modern finish without compromising the "technical" feel of a sharp-edged industrial tool. 
- **Buttons and Inputs:** Use the standard 4px (`rounded`) corner radius.
- **Large Containers:** Map canvases or photo galleries use 8px (`rounded-lg`) to subtly frame content.
- **Status Pills:** Utilize a slightly higher radius (12px) to distinguish them from interactive buttons.

## Components
- **Buttons:** Primary buttons are Solid Orange (`#F57C00`) with white text. Secondary buttons are Outline Steel (`#334155`). Ghost buttons are used for utility actions (e.g., "Cancel").
- **Data Grids:** Rows must have a 1px bottom border (`Slate-100`). Header rows should be `Slate-100` background with `label-caps` typography.
- **Checklist Panels:** Large touch-friendly hit areas. Checkboxes appear in the trailing position for mobile-one-handed use.
- **Map Containers:** Use a "Blueprint" style—thin borders, absolute-positioned floating controls in the corners, and a `Slate-200` frame.
- **Decision Controls:** Large, segmented control toggles for "Approve / Deny / Revise" with high-contrast active states.
- **Status Toggles:** Use color-coded indicators—Orange for "Pending Action," Steel for "In Progress," and a muted Gray-Blue for "Archived."