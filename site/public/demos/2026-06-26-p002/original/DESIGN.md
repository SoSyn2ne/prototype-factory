---
name: Analyst Rigor
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#444748'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#181919'
  on-primary: '#ffffff'
  primary-container: '#2d2d2d'
  on-primary-container: '#959494'
  inverse-primary: '#c8c6c6'
  secondary: '#5b5f65'
  on-secondary: '#ffffff'
  secondary-container: '#dfe2ea'
  on-secondary-container: '#61656b'
  tertiary: '#191917'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e2d2b'
  on-tertiary-container: '#979491'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#dfe2ea'
  secondary-fixed-dim: '#c3c6ce'
  on-secondary-fixed: '#181c21'
  on-secondary-fixed-variant: '#43474d'
  tertiary-fixed: '#e6e2de'
  tertiary-fixed-dim: '#c9c6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484644'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-financial:
    fontFamily: Noto Sans KR
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Sans KR
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Sans KR
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Noto Sans KR
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Noto Sans KR
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  data-mono:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: Noto Sans KR
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Noto Sans KR
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  panel-gap: 12px
  container-padding: 24px
  data-cell-padding: 8px
  desktop-margin: 32px
  tablet-margin: 16px
  mobile-margin: 12px
---

## Brand & Style

The design system is engineered for high-stakes financial environments where precision, density, and clarity are paramount. The brand personality is **Professional, Rigorous, and Dependable**, mirroring the mindset of a senior financial analyst. It avoids decorative flourishes in favor of functional excellence and data-heavy efficiency.

The aesthetic follows a **Modern Corporate** direction with a focus on high-density information architecture. It utilizes a structured "workbench" layout—organizing tools and data into clear, modular panels. Visual hierarchy is established through meticulous typography and subtle tonal shifts rather than shadows, ensuring that critical financial figures remain the focal point. The emotional response is one of "quiet confidence"—a tool that works as hard as the professional using it.

## Colors

The palette is anchored by **Graphite (#2D2D2D)** for primary structural elements and high-contrast text, ensuring maximum legibility for financial data. **Slate (#4A4E54)** acts as a secondary neutral for headers and iconography, while **Off-white (#F8F9FA)** provides a clean, non-glare canvas that reduces eye strain during long working sessions.

Status colors are muted to prevent "alert fatigue." **Survival Green** indicates health and growth, **Warning Amber** flags potential risks, and **Danger Red** highlights immediate financial discrepancies. These are used sparingly—primarily in small indicators, badges, or specific data cells—to ensure they command attention only when necessary.

## Typography

The design system utilizes **Noto Sans KR** for its exceptional legibility across both Latin characters and Hangeul. The type scale is optimized for high information density. 

Financial figures and currency units (KRW) should utilize a slightly tighter letter-spacing to appear as cohesive units. For tabular data, use a **monospaced font alternative** for numerals to ensure vertical alignment of decimal points and commas across rows. Labels use all-caps or bold weights at smaller sizes to maintain structural clarity without occupying excessive vertical space.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for the main workbench area to ensure predictable data visualization. A 12-column system is used for the primary workspace, with a fixed 240px or 280px sidebar for navigation and global filters.

Spacing is based on a 4px baseline grid. Internal panel padding is kept tight (8px to 12px) to maximize the amount of visible data on-screen. Content reflows at standard breakpoints (1440px, 1024px, 768px), with the layout transitioning from a multi-pane workbench on desktop to a stacked single-column view on mobile devices.

## Elevation & Depth

This design system rejects heavy drop shadows in favor of **Tonal Layers** and **Subtle Outlines**. Depth is communicated through surface color logic:
- **Level 0 (Background):** Off-white (#F8F9FA).
- **Level 1 (Panels/Cards):** White (#FFFFFF) with a 1px solid border in Slate (#4A4E54) at 15% opacity.
- **Level 2 (Modals/Popovers):** White (#FFFFFF) with a very soft, 8px blur, 10% opacity neutral shadow to provide just enough separation from the workbench surface.

Active states and focused fields use a 1px Graphite border to signify interactivity, maintaining a flat but tactile "paper-on-desk" feel.

## Shapes

The shape language is conservative and geometric. A **Soft (0.25rem)** corner radius is applied to panels and input fields, providing a modern touch without sacrificing the professional "rigor" of the tool. Buttons and status badges follow this same logic. Sharp corners are avoided to prevent the UI from feeling overly aggressive, while large radii (pills) are avoided to maintain a serious, data-centric character.

## Components

- **Buttons:** Primary buttons use Graphite (#2D2D2D) with white text. Secondary buttons are ghost-style with Slate borders. Action icons within buttons should be 16px.
- **Data Tables:** The core of the workbench. Use 8px cell padding. Row striping is discouraged; instead, use 1px subtle dividers. Hover states on rows should use a 2% Graphite tint.
- **Status Badges:** Small, rectangular with slightly rounded corners. Backgrounds use 10% opacity of the status color, with the text using the full-strength status color for contrast.
- **Input Fields:** Rectangular with a 1px Slate border. On focus, the border hardens to Graphite. Labels are always positioned above the input in `label-sm` style.
- **Financial Cards:** Specifically designed to highlight KRW figures. Large numbers in `display-financial` style, with smaller unit labels (e.g., '억', '원') placed with 4px of horizontal breathing room.
- **Workbench Panels:** Every major section is housed in a bordered panel. Headers within panels are Slate (#4A4E54) with a bottom divider to separate controls from content.