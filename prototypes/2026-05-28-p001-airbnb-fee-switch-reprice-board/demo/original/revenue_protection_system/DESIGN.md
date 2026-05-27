---
name: Revenue Protection System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3e494b'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#6e797b'
  outline-variant: '#bdc8cb'
  surface-tint: '#006876'
  primary: '#00616e'
  on-primary: '#ffffff'
  primary-container: '#007c8c'
  on-primary-container: '#e3faff'
  inverse-primary: '#79d4e5'
  secondary: '#3f5e94'
  on-secondary: '#ffffff'
  secondary-container: '#a2c2fd'
  on-secondary-container: '#2e4f83'
  tertiary: '#ac1c2b'
  on-tertiary: '#ffffff'
  tertiary-container: '#cf3740'
  on-tertiary-container: '#fff4f2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a0efff'
  primary-fixed-dim: '#79d4e5'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e59'
  secondary-fixed: '#d7e3ff'
  secondary-fixed-dim: '#abc7ff'
  on-secondary-fixed: '#001b3f'
  on-secondary-fixed-variant: '#25467a'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410007'
  on-tertiary-fixed-variant: '#92001b'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  tabular-numeric:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
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
  compact-gutter: 12px
  standard-margin: 24px
  container-max: 1280px
  density-xs: 4px
  density-sm: 8px
  density-md: 16px
---

## Brand & Style

This design system is engineered for the "Pro-Host"—the individual who views their Airbnb listing as a high-yield financial asset. The aesthetic merges the approachable hospitality of the core platform with the rigorous precision of a Bloomberg terminal or a modern fintech dashboard.

The style is **Professional & Data-Dense**, leaning on a high-information-to-ink ratio while maintaining a clean, breathable interface. It utilizes a sophisticated "Working Tool" philosophy where utility precedes ornamentation. Visual noise is minimized to prioritize payout clarity, margin protection, and discrepancy detection. The interface should feel authoritative, reliable, and sharp, instilling confidence in complex financial decision-making.

## Colors

The palette is strategically weighted to separate brand identity from functional utility. 

- **Primary (Arches Teal):** Used for primary actions, growth indicators, and "Protected" states. It represents stability and professional management.
- **Secondary (Hof Navy):** Reserved for high-level navigation and primary headings to provide a grounded, institutional feel.
- **Brand (Babu Red):** Used sparingly for critical brand touchpoints and urgent alerts that require immediate host intervention.
- **Neutral Palette:** Utilizes a spectrum of greys (from `#484848` down to `#F7F7F7`) to create a clear information hierarchy and reduce eye strain during prolonged data analysis.
- **Financial Status Tones:** 
    - **Sage Green (`#E6F4EA`):** Indicates protected margins and healthy revenue.
    - **Muted Amber (`#FFF8E1`):** Signals fee mismatches or pricing discrepancies.
    - **Soft Rose (`#FCE8E6`):** Highlights fee impacts or negative deltas in payout.

## Typography

This design system uses **Inter** exclusively to leverage its exceptional legibility and support for tabular OpenType features.

**Crucial Implementation Rule:** All financial data, currency values, and percentages must use the `tabular-numeric` style. This ensures that columns of numbers align vertically, allowing hosts to scan for discrepancies and deltas instantly. 

- **Headlines:** Set in Hof Navy for maximum contrast and authority.
- **Body:** Standardized for readability with slightly increased line heights to prevent "data claustrophobia."
- **Labels:** Use `label-caps` for metadata and secondary categorization to create a distinct visual layer from the primary data.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px max-width container on desktop to maintain readability, while utilizing a 12-column grid.

Spacing follows a strict 4px base unit. To achieve the "Financial-Analyst" density, the system favors `density-sm` (8px) for internal component padding and `compact-gutter` (12px) for related data groups. 

- **Mobile:** Single column, 16px horizontal margins.
- **Tablet:** 6-column grid, 20px margins.
- **Desktop:** 12-column grid, 24px margins. Content density increases as screen size scales, opting to show more data columns rather than larger text.

## Elevation & Depth

This design system avoids dramatic shadows to maintain a professional, flat-sheet aesthetic. Depth is communicated primarily through **Tonal Layering** and **Low-Contrast Outlines**.

1.  **Level 0 (Canvas):** The base page background (`#F7F7F7`).
2.  **Level 1 (Surfaces):** Cards and main containers use a white background (`#FFFFFF`) with a 1px solid border (`#EBEBEB`). No shadow.
3.  **Level 2 (Active States):** Elements being interacted with or "Scenario Cards" use a subtle, extra-diffused shadow (Blur: 8px, Y: 4px, Color: `rgba(0,0,0,0.04)`) and a primary-colored 2px left-border to denote focus.

Backdrop blurs are used exclusively for modal overlays to keep the user’s focus on the financial task at hand without losing sight of the underlying data context.

## Shapes

The shape language is conservative and structural. A **Soft (0.25rem)** border radius is the standard for almost all UI elements, including buttons, input fields, and cards. 

- **0.25rem (4px):** Standard inputs, buttons, and status badges.
- **0.5rem (8px):** Larger containers and Scenario Cards.
- **Pill (Full):** Used exclusively for status chips (e.g., "Protected", "Under Review") to differentiate them from interactive buttons.

This geometric precision reinforces the feeling of a professional tool rather than a consumer social app.

## Components

### Buttons & Controls
- **Primary:** Filled Arches Teal with white text. Used for "Approve Payout" or "Save Changes."
- **Secondary:** Outlined Hof Navy. Used for "Export CSV" or "View Details."
- **Ghost:** No border, Hof Navy text. Used for tertiary navigation.

### Scenario Cards
These are the core of the revenue protection experience. They must feature:
- A clear "Current State" vs "Projected State" layout.
- A "Payout Delta" indicator in the top right using status colors (Rose for decrease, Sage for increase).
- A primary action button contained within the card footer.

### Data Tables
- Header cells: Grey background (`#F7F7F7`), `label-caps` typography, 1px bottom border.
- Row hover state: Subtle background change to `#F9F9F9`.
- Column alignment: Financial values right-aligned; descriptors left-aligned.

### Input Fields
- Structured for efficiency: 1px border (`#B0B0B0`), 8px padding.
- Focused state: 2px border in Arches Teal.
- Error state: 2px border in Babu Red with inline support text.

### Payout Chips
Compact status indicators with low-saturation backgrounds (e.g., Sage for "Fully Protected") and high-contrast text for immediate glanceability.