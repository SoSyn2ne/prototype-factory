---
name: Analyst Precision System
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#161c22'
  on-tertiary-container: '#7e848c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
  data-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  stack-gap: 16px
  data-gap: 8px
  table-cell-padding: 12px 8px
  desktop-max-width: 1440px
---

## Brand & Style

This design system is engineered for the high-stakes environment of financial analysis. The brand personality is rooted in **calm confidence, rigorous precision, and functional clarity**. It avoids decorative flourishes in favor of information density and rapid data legibility.

The aesthetic follows a **Modern Corporate** approach with a focus on **Data-Centric Minimalism**. By utilizing a high-contrast palette of graphite and off-white, the UI creates a focused "workspace" feel that recedes to let the data take center stage. The emotional response should be one of stability and absolute reliability, ensuring that analysts can process complex datasets without visual fatigue.

## Colors

The color strategy relies on a sophisticated "Graphite and Paper" foundation. 

- **Surfaces:** Use the off-white neutral (`#F9F9F7`) for main backgrounds to reduce the harsh glare of pure white.
- **Primary/Text:** Graphite (`#1A1A1A`) provides maximum contrast for core data points and headers.
- **Status Tones:** Warning (Amber) and Error (Red) tones are intentionally desaturated and darkened. They should act as "flags" rather than "alarms," used sparingly to highlight variance or risk without creating visual panic.
- **Accents:** Use secondary slate tones for structural elements like borders and dividers to maintain a monochromatic, professional atmosphere.

## Typography

Typography is the most critical asset in this design system. We use **IBM Plex Sans** for its systematic, professional structure and excellent legibility in various weights. For labels and technical data, we integrate **Geist** to provide a distinct "technical" feel.

- **Tabular Numerals:** Always enable tabular (monospaced) numbers for data comparisons in tables to ensure columns align perfectly.
- **Hierarchy:** Use bold weights only for primary headers. Secondary information should be distinguished by size and color (slate) rather than weight to maintain a clean look.
- **Compactness:** For mobile or sidebars, shift to `body-sm` and `label-sm` to maximize information density without sacrificing readability.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model on desktop to ensure predictable data visualization. A 12-column grid is standard, but the internal spacing rhythm is built on a tight **4px baseline**.

- **Density:** We prioritize vertical density. Use 8px gaps for related data points and 16px for separate modules.
- **Margins:** Desktop views should maintain a 24px gutter to the edge of the screen, while internal card padding is kept at a lean 16px to maximize the "content to chrome" ratio.
- **Reflow:** On mobile, grids collapse to a single column, and padding is reduced to 16px to prevent "breathability" from wasting valuable screen real estate.

## Elevation & Depth

To maintain a professional, grounded feel, this design system avoids heavy shadows. Depth is communicated through **Tonal Layering** and **Precise Outlines**.

- **Surface Tiers:** Use the primary off-white for the background. Content containers (cards) should use a pure white background with a subtle 1px border (`#E2E8F0`).
- **Active States:** For elements that are being edited or focused, use a 1px solid Graphite border.
- **Shadows:** Only use shadows for floating elements like dropdown menus or tooltips. These shadows should be extremely diffused (15-20px blur) and low opacity (5-10%), acting as a soft "lift" rather than a hard edge.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the "edge" off the data-heavy layout, making it feel modern and approachable without veering into the playfulness of more consumer-focused apps. 

- **Buttons & Inputs:** Use the standard 4px radius.
- **Data Visualizations:** Elements within charts (bars, points) should remain sharp or have minimal rounding to ensure the "point" of the data is mathematically precise.

## Components

- **Buttons:** Primary buttons are solid Graphite with white text. Secondary buttons are outlined with a 1px slate border. Text is always centered and utilizes the `label-md` style.
- **Data Tables:** Cells should have minimal padding (12px vertical) to allow for many rows to be visible. Use subtle zebra-striping with the off-white surface color to guide the eye across wide rows.
- **Input Fields:** Use a 1px slate border that turns Graphite on focus. Labels should use `label-sm` and sit above the field.
- **Chips/Badges:** For status (e.g., "In Review," "Risk High"), use a light background version of the status color with dark text of the same hue.
- **Cards:** Simple white containers with a 1px border. Avoid large shadows; use a subtle hover state that slightly darkens the border color to signify interactivity.
- **Comparison Indicators:** For up/down financial trends, use the muted red/green arrows immediately adjacent to the numerical value.