---
name: Sieve Operations Console
colors:
  surface: '#10131c'
  surface-dim: '#10131c'
  surface-bright: '#363943'
  surface-container-lowest: '#0b0e16'
  surface-container-low: '#191b24'
  surface-container: '#1d1f28'
  surface-container-high: '#272a33'
  surface-container-highest: '#32343e'
  on-surface: '#e1e2ee'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#e1e2ee'
  inverse-on-surface: '#2e303a'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#b3c5ff'
  on-secondary: '#0a2c6e'
  secondary-container: '#284386'
  on-secondary-container: '#9ab3fd'
  tertiary: '#ffb59d'
  on-tertiary: '#5d1900'
  tertiary-container: '#cc4204'
  on-tertiary-container: '#fff6f4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#dae1ff'
  secondary-fixed-dim: '#b3c5ff'
  on-secondary-fixed: '#001849'
  on-secondary-fixed-variant: '#284386'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#10131c'
  on-background: '#e1e2ee'
  surface-variant: '#32343e'
typography:
  display-sm:
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
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.06em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '450'
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
  gutter: 12px
  side-margin: 20px
---

## Brand & Style

The brand personality is clinical, high-utility, and authoritative. Designed for high-frequency recruitment operations, the UI functions as a precision instrument rather than a typical web application. It targets professional recruiters and hiring managers who process large volumes of candidate data under time pressure.

The design style is **Corporate Modern with a Minimalist/Technical edge**. It prioritizes information density and ocular efficiency. By utilizing a "charcoal and fog" palette, the system reduces eye strain during long sessions while using a sharp action accent to guide the user's focus toward critical decision-making points. The aesthetic is "Workstation-first," evoking the feel of a financial terminal or a developer environment where data clarity is the highest priority.

## Colors

The system employs a high-contrast dark mode by default to support professional recruitment "war rooms." 

- **Surfaces:** The foundation is `#121212` (Deep Charcoal), with containers and panels set in `#1E1E1E` (Soft Charcoal) to create subtle depth.
- **Accents:** The primary action color is `#0066FF` (Electric Blue), used exclusively for high-intent actions like moving candidates or finalizing scores. `#FF3300` is reserved for "Drop" actions or critical red flags.
- **Text:** High-frequency reading relies on `#F5F5F5` for primary content and `#E0E0E0` for secondary metadata, ensuring legibility without the harshness of pure white.

## Typography

Typography focuses on "Ocular Scanning." We use **Inter** for its neutral, highly legible glyphs in UI controls and candidate names. **JetBrains Mono** is introduced for tabular data, timestamps, and confidence scores to ensure vertical alignment of digits, which is critical when comparing candidate stats side-by-side.

- **Scale:** Small font sizes (12px and 14px) are the workhorses of the system.
- **Hierarchy:** Use `label-caps` for section headers and metadata categories. Use `data-mono` for any numeric value (e.g., "Match Score: 98%").
- **Contrast:** Utilize weight (Semibold vs Regular) rather than color alone to distinguish between a candidate's name and their current role.

## Layout & Spacing

The layout is a **Fixed-Fluid Hybrid** designed for 1440p displays but responsive down to 1024px. It uses a rigorous 4px grid system.

- **Grid Model:** A 12-column system for dashboard views, while the "Interview Sieve" uses a 3-panel fixed-width layout:
    1. **Sidebar/Filter (240px):** Fixed width, collapsible.
    2. **Main Feed/Table (Fluid):** Central work area.
    3. **Context/Briefing Panel (380px):** Fixed right-aligned panel for deep-dive evidence.
- **Density:** Gutters are kept tight at 12px to maximize data visualization. Padding within table cells is restricted to 8px (sm) to ensure maximum "above the fold" visibility.

## Elevation & Depth

This system avoids heavy shadows, favoring **Tonal Layering** and **Low-Contrast Outlines**.

- **Base Layer:** `#121212` for the application background.
- **Level 1 (Panels/Cards):** `#1E1E1E` with a 1px solid border of `#2A2A2A`.
- **Level 2 (Popovers/Modals):** `#252525` with a subtle 8px blur shadow (0, 4, 8, rgba(0,0,0,0.4)).
- **Interactive States:** Hovering over a candidate row should not lift the element but rather change the background to `#2A2A2A` to maintain the "flat" console feel.

## Shapes

The design system uses **Soft (0.25rem)** roundedness. This provides a professional, modern feel without the "consumer" look of pill-shaped buttons. 

- **Standard Elements:** Buttons, Input fields, and Cards use 4px (`rounded-sm`).
- **Badges:** Use 2px roundedness to distinguish them from interactive buttons.
- **Avatars:** Circular (full round) to provide a soft counterpoint to the otherwise rigid grid.

## Components

- **Data Tables:** High-density rows (32px height). Header cells use `label-caps`. Rows support multi-select via checkboxes.
- **Cluster Badges:** Compact tags for skills/keywords. Use a dark background (`#2A2A2A`) with grey text; the primary blue is only used for "matching" skills.
- **Action Buttons:** 
    - **Primary:** Solid `#0066FF`, white text, 32px height.
    - **Secondary:** Ghost style with `#E0E0E0` border.
    - **Destructive:** Solid `#FF3300` for "Reject" or "Archive."
- **Kanban Lanes:** Vertical columns with a `#1E1E1E` background. Candidate cards within lanes have a 2px left-border accent to indicate their "Sieve" status (e.g., Blue for 'Progressing', Red for 'Flagged').
- **Briefing Panels:** Right-aligned slide-outs. Use `body-sm` for long-form AI summaries and `data-mono` for technical evidence snippets.
- **Input Fields:** Inset appearance with `#121212` background and a 1px `#333333` border. Focus state uses a 1px `#0066FF` ring.