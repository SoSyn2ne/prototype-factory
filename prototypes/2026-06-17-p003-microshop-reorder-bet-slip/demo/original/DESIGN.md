---
name: Microshop OS
colors:
  surface: '#0e1511'
  surface-dim: '#0e1511'
  surface-bright: '#343b36'
  surface-container-lowest: '#09100c'
  surface-container-low: '#161d19'
  surface-container: '#1a211d'
  surface-container-high: '#242c27'
  surface-container-highest: '#2f3632'
  on-surface: '#dde4dd'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dde4dd'
  inverse-on-surface: '#2b322d'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
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
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#0e1511'
  on-background: '#dde4dd'
  surface-variant: '#2f3632'
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
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
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
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  gutter: 8px
  sidebar_width: 320px
---

## Brand & Style

The design system is engineered for high-velocity operations and maximum information density. It targets professional inventory managers and logistics operators who require a "heads-up display" experience where data clarity precedes decorative flair. 

The visual style is **Disciplined & Compact**, drawing heavily from **Modern Corporate** and **Technical/Developer** aesthetics. It utilizes a dark-mode first approach to reduce eye strain during long shifts. The aesthetic is defined by rigid structural integrity, precise alignments, and a functionalist approach to color where every hue serves a specific semantic purpose. The goal is to evoke a sense of total control, reliability, and systemic efficiency.

## Colors

This design system utilizes a deep, dark palette to establish a professional, "command center" atmosphere. 

- **Surfaces:** The foundation is `#0F172A` (Navy Deep), with `#1E293B` used for elevated containers, sidebars, and card backgrounds.
- **Accents:** Vibrant Emerald (`#10B981`) is the primary action color, used for "Commit," "Save," and "In Stock" states. Electric Blue (`#3B82F6`) is used for secondary actions and navigation indicators.
- **Semantics:** Color is strictly regulated for status. Red (`#EF4444`) is reserved for stock-outs or critical errors; Amber (`#F59E0B`) for low-stock warnings; Green for healthy inventory levels.
- **Borders:** Use `#334155` for all table dividers and container outlines to maintain structure without high-contrast distraction.

## Typography

Typography is optimized for legibility in dense data environments. 

- **Inter** is the workhorse for all UI labels, navigation, and body text. 
- **JetBrains Mono** is utilized specifically for SKU numbers, quantities, timestamps, and barcodes. The monospaced nature ensures that columns of numbers align perfectly in tables, allowing for rapid visual scanning.
- **Hierarchy:** Use `label-caps` for table headers and section titles to differentiate them from actionable data.
- **Density:** Body text is set slightly smaller than standard (13px/14px) to allow more rows of data to be visible above the fold.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid model**. The main navigation is a slim icon-rail, while the secondary 'bet-slip' style sidebar (used for active orders or batch edits) is fixed at 320px.

- **The 4px Grid:** All margins, paddings, and component heights must be multiples of 4px. 
- **Density Settings:** Standard table row height is 32px. Cell padding is fixed at 8px horizontal, 4px vertical.
- **Safe Areas:** Maintain a 16px margin around the primary viewport edges.
- **Breakpoints:**
  - **Desktop (1440px+):** 12-column grid for the main content area, persistent right sidebar.
  - **Tablet (768px - 1024px):** Right sidebar becomes an expandable overlay; table columns truncate based on priority.
  - **Mobile:** Not the primary use case; layout stacks vertically with horizontal scrolling enabled for data tables.

## Elevation & Depth

This design system avoids heavy shadows and traditional skeuomorphism in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Level 0 (Base):** `#0F172A` - Used for the main application background.
- **Level 1 (Cards/Tables):** `#1E293B` - Used for the primary workspace and table containers. These should have a 1px border of `#334155`.
- **Level 2 (Popovers/Modals):** `#1E293B` with a subtle 4px blur shadow (Black, 40% opacity) and a brighter border (`#475569`) to indicate focus.
- **Interactive States:** Buttons and rows do not "lift" on hover; instead, they use background color shifts (e.g., a row highlight shifts from base to `#2D3748`).

## Shapes

The shape language is "Soft-Technical." 

- **Radius:** A standard radius of `4px` (Small) is applied to buttons, input fields, and status badges. This maintains a sharp, professional look while feeling modern.
- **Containers:** Large containers like sidebars or the main data grid use `0px` radius where they meet the screen edge, but `4px` on internal corners.
- **Visual Rhythm:** The consistency of the 4px radius across all small-scale elements reinforces the 4px spacing grid.

## Components

### Tables (Core Component)
- **Header:** Background `#1E293B`, `label-caps` typography, 1px bottom border.
- **Rows:** Alternating zebra striping is discouraged; use subtle 1px borders between rows. 
- **Cells:** Use `data-mono` for all numeric values. Align numbers to the right to facilitate comparison.

### Status Badges
- Small, 20px height, 4px radius. 
- Use a "dimmed" background (15% opacity of the status color) with a solid 100% opacity text color for maximum readability without visual noise.

### Progress Meters
- Slim 4px height bars. 
- Background: `#334155`. 
- Fill: Primary Emerald or Blue. For "Low Stock," use Warning Amber.

### 'Bet Slip' Sidebar
- A dedicated container on the right for staged actions.
- Header: Sticky with a "Clear All" secondary action.
- Items: Compact cards with 8px padding, showing SKU, Qty, and a "remove" icon.
- Footer: A primary, full-width "Commit Changes" button in Emerald.

### Input Fields
- Height: 32px.
- Background: `#0F172A` (inset look) with `#334155` border.
- Focus State: Border changes to `#3B82F6` with a 1px glow.