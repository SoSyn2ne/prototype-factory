---
name: Operational Readiness System
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
  on-surface-variant: '#44474e'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#edf1f5'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#002046'
  on-primary: '#ffffff'
  primary-container: '#1b365d'
  on-primary-container: '#87a0cd'
  inverse-primary: '#aec7f7'
  secondary: '#2c694e'
  on-secondary: '#ffffff'
  secondary-container: '#aeeecb'
  on-secondary-container: '#316e52'
  tertiary: '#361900'
  on-tertiary: '#ffffff'
  tertiary-container: '#552b00'
  on-tertiary-container: '#eb851c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f7'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2e476f'
  secondary-fixed: '#b1f0ce'
  secondary-fixed-dim: '#95d4b3'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#0e5138'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
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
    letterSpacing: -0.01em
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
  data-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
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
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for mission-critical hospital environments where cognitive load is high and time is scarce. It adopts a **Field-Ops** aesthetic—prioritizing durability, data density, and immediate utility over decorative flair. The system serves charge nurses and float pool coordinators who require an at-a-glance understanding of staffing risks and operational gaps.

The visual language is rooted in **Corporate Modernism** blended with **Industrial Utility**. It utilizes high-contrast signaling, clear containment, and a rigorous grid to ensure that information is parsed correctly under fluorescent lighting or on mobile devices during active shifts. The tone is practical and urgent, focusing strictly on logistical risk and resource allocation.

## Colors

The palette is derived from safety and aviation standards to ensure high legibility and clear status communication.

- **Duty Blue (#1B365D):** The primary structural color. Used for headers, primary actions, and stable navigation elements. It evokes authority and reliability.
- **Safe Green (#2D6A4F):** Indicates fully staffed units or completed handoffs.
- **Caution Amber (#D97706):** Signals moderate risk, such as pending shift changes or near-threshold staffing levels.
- **Urgent Red (#B91C1C):** Reserved for critical staffing shortages, unassigned high-acuity patients, or overdue handoffs.
- **Shift Board Neutral (#F1F5F9):** A cool, low-fatigue gray used for the application canvas to reduce glare and provide a clean backdrop for high-contrast status indicators.

## Typography

This design system utilizes **Inter** for its exceptional legibility and comprehensive support for tabular numerals. 

### Implementation Rules:
- **Tabular Numbers:** All timestamps, staffing counts, and risk percentages must use `data-tabular` settings to ensure columns of numbers align vertically for rapid scanning.
- **Hierarchical Scanning:** Use `label-caps` for table headers and section metadata to distinguish labels from user-generated content.
- **Mobile Adjustments:** On mobile devices, `display-lg` should scale down to 24px (`headline-md`) to maintain screen real estate for data grids.

## Layout & Spacing

The layout uses a **High-Density Fixed Grid** for desktop shift boards and a **Fluid Stack** for mobile field use.

- **Shift Board Grid:** A 12-column layout on desktop. Status dashboards utilize a "Card-Wall" approach where elements span 3 or 4 columns.
- **Density:** We utilize a 4px baseline grid. Padding in data grids is compressed (8px vertical) to maximize the amount of visible staff data without scrolling.
- **Breakpoints:**
  - **Mobile (<768px):** Single column, full-width cards, 16px margins.
  - **Tablet (768px - 1024px):** 6-column grid, compact headers.
  - **Desktop (>1024px):** 12-column grid, persistent sidebar for unit navigation.

## Elevation & Depth

To maintain the "Field-Ops" utility, depth is used sparingly to indicate interactivity and information stacking rather than aesthetics.

- **Surface Layers:** The background uses the Neutral 'Shift Board' gray. Content lives on pure white (#FFFFFF) cards.
- **Tonal Borders:** Instead of soft shadows, use 1px solid borders (#E2E8F0) to define containers. 
- **Active Elevation:** Only the "Active Handoff" or "Selected Risk" cards receive a subtle, low-blur ambient shadow (0px 4px 6px rgba(27, 54, 93, 0.1)) to draw focus.
- **Z-Index Hierarchy:** 
  - Level 0: Shift Board Background.
  - Level 1: Stationary Data Cards.
  - Level 2: Interactive Modals/Alert Banners.
  - Level 3: Urgent Risk Notifications (Global).

## Shapes

The design system uses a **Soft (0.25rem)** roundedness profile to maintain a professional, structured appearance while avoiding the harshness of sharp corners.

- **Standard Elements:** Buttons, inputs, and badges use 4px (0.25rem) corners.
- **Large Containers:** Cards and major layout blocks use 8px (0.5rem) corners.
- **Alerts:** Top-level alert banners remain sharp (0px) on the sides that touch screen edges to emphasize they are part of the system chrome.

## Components

### Buttons
- **Primary:** Duty Blue background, white text. Large, tactile hit areas (min 44px height).
- **Secondary:** Ghost style with a 1px Duty Blue border.
- **Urgent Action:** Urgent Red background for "Confirm Risk" or "Escalate Staffing."

### Badge-like Role Markers
Small, high-contrast pills used to identify staff roles (e.g., [RN], [LPN], [CNA]). Use Duty Blue for standard roles and secondary colors for specialized float pool indicators.

### Alert Banners
Full-width bars at the top of the Shift Board. 
- **Critical:** Urgent Red with a bold "!" icon. 
- **Informational:** Duty Blue with a "Clock" icon for upcoming shift changes.

### Coverage Bars (Timeline)
Horizontal bars representing a 12-hour shift. 
- Background: Light gray.
- Fill: Duty Blue or Safe Green.
- Risk Overlays: Hatched Amber patterns over sections of the bar where staffing falls below the safety threshold.

### Data Grids
Optimized for density. Row height is locked to 40px. Use alternating row stripes (Shift Board Neutral) to guide the eye across wide data points.

### Input Fields
Strictly defined boxes with 1px borders. Focused states use a 2px Duty Blue ring. Labels are always persistent (no floating labels) to ensure clarity during fast data entry.