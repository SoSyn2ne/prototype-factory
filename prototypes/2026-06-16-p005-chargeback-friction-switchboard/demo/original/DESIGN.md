---
name: Switchboard
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c6'
  primary: '#fdfdfc'
  on-primary: '#2f3131'
  primary-container: '#e0e0e0'
  on-primary-container: '#626363'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b6b5b4'
  tertiary: '#fffbff'
  on-tertiary: '#342f2d'
  tertiary-container: '#e7deda'
  on-tertiary-container: '#67615e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#eae1dd'
  tertiary-fixed-dim: '#cdc5c1'
  on-tertiary-fixed: '#1f1b19'
  on-tertiary-fixed-variant: '#4b4643'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
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
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
  mono-data:
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
  container-padding: 16px
  element-gap: 8px
  tight-gap: 4px
  table-cell-padding: 8px 12px
  drawer-width: 480px
---

## Brand & Style
The design system is engineered for high-stakes financial operations where speed of cognition and data density are paramount. The brand personality is clinical, authoritative, and precise, targeting professional analysts and operators who manage complex workflows.

The visual style is **Modern Corporate with a utilitarian lean**, emphasizing functional efficiency over aesthetic flourish. It utilizes a "Terminal-Plus" philosophy: a dark, focused environment that reduces eye strain during long shifts while maintaining the structured rigor of a high-end trading floor. The interface is intentionally flat to prevent visual noise, using crisp borders and a strict monochromatic base to ensure that when color is used, it carries maximum semiotic weight.

## Colors
The palette is rooted in a "Deep Charcoal" ecosystem to provide a low-glare foundation for data-heavy tasks. 

- **Foundation:** The primary background sits at `#121212`, with elevated surfaces and containers using `#181818`. 
- **Typography:** Primary text uses `#E0E0E0` (Fog Gray) to maintain high contrast without the harshness of pure white. Secondary metadata uses a mid-tone gray.
- **Borders:** A consistent `#2A2A2A` is used for all structural partitioning, creating a clear but subtle grid.
- **Status Signalry:** Color is reserved strictly for functional meaning. **Electric Red (#FF3B30)** is the primary high-risk accent. Success, Warning, and Info follow standard financial conventions but are tuned for high luminosity against the dark background to ensure instant recognition.

## Typography
This design system utilizes **Inter** exclusively to take advantage of its superior legibility in small sizes and its robust variable font features. 

The type scale is intentionally compact. For data-dense tables, the `mono-data` role is critical; it utilizes Inter’s tabular num (tnum) and lining num (lnum) features to ensure financial figures align vertically for easy scanning. Headlines are kept small to maximize vertical screen real estate. The `label-sm` style is used for table headers and category tags, employing slight tracking and uppercase styling to distinguish it from interactive body text.

## Layout & Spacing
The layout follows a **Strict 4px Grid** system to achieve maximum information density. 

- **Grid Model:** A 12-column fluid grid is used for the main dashboard, but individual modules (cards) utilize fixed internal spacing. 
- **Density:** Padding is minimized. Standard gutters are set to `16px`, but internal element spacing (e.g., label to input) is reduced to `4px` or `8px`.
- **Sidebars & Drawers:** A fixed left navigation (64px collapsed, 240px expanded) handles app-level switching. "Evidence Packets" and deep-dive details are handled via a right-side `slide-over drawer` (fixed at 480px) to maintain the context of the main dashboard behind the overlay.
- **Breakpoints:** Desktop (1440px+), Laptop (1024px-1439px), and Tablet (768px-1023px). This system is not intended for mobile handset use given the density of the data.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Crisp Outlines** rather than traditional shadows.

1.  **Level 0 (Canvas):** `#121212` - The base background.
2.  **Level 1 (Card/Surface):** `#181818` - Used for primary workspace modules. These feature a 1px solid border of `#2A2A2A`.
3.  **Level 2 (Active/Hover):** Surfaces lighten slightly to `#222222` on interaction.
4.  **Level 3 (Overlays/Drawers):** These use a subtle 8px blur on the backdrop and a slightly more pronounced border (`#3A3A3A`) to indicate they are "above" the working canvas.

Shadows are used only for the highest level of elevation (Context Menus and Modals), appearing as sharp, low-spread dark casting to maintain the flat aesthetic.

## Shapes
The shape language is **Soft-Square**. A uniform `0.25rem` (4px) radius is applied to buttons, inputs, and cards. This provides a professional, engineered feel that is more approachable than sharp 90-degree corners while remaining much more space-efficient and serious than fully rounded UI systems. 

Status indicators and badges use the same 4px radius; "pill" shapes are avoided to maintain the structural, grid-aligned integrity of the layout.

## Components

- **Data Tables:** The core of the system. Rows have a fixed height of 32px or 40px. Zebra striping is not used; instead, use a 1px bottom border (`#2A2A2A`). Hover states should highlight the entire row in `#222222`.
- **KPI Sparklines:** Compact, monochromatic line charts embedded within cards or table cells. Use the `accent_success` or `accent_danger` colors only for the final data point or the overall trend stroke.
- **Buttons:** 
  - *Primary:* Solid `#E0E0E0` with `#121212` text. 
  - *Secondary:* Ghost style with `#2A2A2A` border and `#E0E0E0` text.
  - *Danger:* Solid `#FF3B30` with white text, reserved for irreversible actions.
- **Inputs:** Dark fills (`#121212`) with `#2A2A2A` borders. On focus, the border changes to `#E0E0E0` or `accent_info`.
- **Status Chips:** Small, rectangular badges with a low-opacity background tint of the status color and a high-opacity text label (e.g., Background: 15% Red, Text: 100% Red).
- **Evidence Drawers:** Slide-in panels from the right. Must include a header with breadcrumbs and a prominent close action. Content inside is typically a vertical stack of "Evidence Cards" (nested containers).