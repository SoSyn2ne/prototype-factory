---
name: Atelier Editorial
colors:
  surface: '#fff8f5'
  surface-dim: '#e2d8d2'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2eb'
  surface-container: '#f6ece6'
  surface-container-high: '#f0e6e0'
  surface-container-highest: '#eae1da'
  on-surface: '#1f1b17'
  on-surface-variant: '#444748'
  inverse-surface: '#342f2b'
  inverse-on-surface: '#f9efe8'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#636564'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c0800'
  on-tertiary-container: '#ce6549'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c7c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#7f2a14'
  background: '#fff8f5'
  on-background: '#1f1b17'
  surface-variant: '#eae1da'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-label:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  studio-panel-gap: 1px
---

## Brand & Style

The design system is built for high-end creator platforms, blending the functional density of a digital workspace with the aesthetic rigor of a luxury print magazine. The brand personality is authoritative yet understated, aiming to evoke a sense of focused calm and creative discipline. 

The style is **Minimalist-Editorial**. It prioritizes high-quality typography, a restricted but warm color palette, and generous whitespace to reduce cognitive load in a complex "working studio" environment. Subtle influences of **Modernism** appear through crisp, thin borders and structured grid alignment, ensuring that the "creator" feel never sacrifices the "professional" utility.

## Colors

The palette is anchored in a monochromatic "Stone & Charcoal" foundation to allow user content to remain the focus. 

- **Warm Charcoal (#1A1A1A):** Used for primary text and high-contrast UI elements. It provides depth without the harshness of pure black.
- **Soft Stone (#F5F5F4):** The primary background color. It reduces eye strain compared to pure white and provides a sophisticated, paper-like quality.
- **Terracotta (#C15B40):** A quiet, singular accent color reserved for primary calls to action and active states. It should be used sparingly to maintain its impact.
- **Surface Neutrals:** Use a scale of warm grays (Stone 100-900) for borders and secondary text to maintain a cohesive, warm temperature across the interface.

## Typography

This design system utilizes a high-contrast typographic pairing to signal the "Studio" vs. "Output" relationship.

- **Headlines:** Playfair Display provides an editorial, sophisticated tone. It should be used for page titles and major section headers.
- **Interface & Body:** Inter is used for all functional UI elements, navigation, and long-form body text. Its high x-height ensures legibility even at smaller sizes in dense workspace panels.
- **Labels:** Use "label-caps" for sidebar headers and metadata categories to create a clear visual distinction from interactive text.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Navigation and tool panels are fixed-width to maintain a "working studio" feel, while the central canvas/content area is fluid.

- **Grid:** A 12-column grid is used for marketing and editorial pages. For the workspace/app view, use a 3-pane layout (Navigation, Canvas, Inspector).
- **Density:** Spacing is tighter within utility panels (8px-12px) to support information density, but expands significantly in the content canvas (40px+) to maintain the editorial aesthetic.
- **The "Thin Line" Rule:** Instead of heavy gaps, use 1px "Soft Stone" borders to separate panels, mimicking the layout of professional drafting software.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Subtle Shadows** rather than high-contrast 3D effects.

- **Level 0 (Background):** Soft Stone (#F5F5F4).
- **Level 1 (Panels):** Pure white (#FFFFFF) for primary work surfaces.
- **Level 2 (Popovers/Menus):** White with a very fine, highly diffused shadow (Blur: 12px, Opacity: 4%, Color: Charcoal). 
- **Outlines:** All containers should use a 1px border in a slightly darker stone shade (#E7E7E4) to define boundaries without adding visual weight.

## Shapes

The shape language is **Soft** but disciplined. 

- **Primary Radius:** A 4px (0.25rem) radius is applied to buttons and input fields to soften the "industrial" feel while maintaining a professional, sharp edge.
- **Large Radius:** Use 8px (0.5rem) for cards and modals.
- **Icons:** Use thin-stroke (1.5pt) linear icons to match the weight of the Inter typeface. Avoid filled icons unless indicating an active/selected state.

## Components

- **Buttons:** Primary buttons use the Terracotta (#C15B40) background with white text. Secondary buttons are "Ghost" style: Charcoal text with a 1px border. All buttons use the primary 4px radius.
- **Input Fields:** Minimalist style. No background fill; 1px bottom-border only in default state, transitioning to a full 1px Charcoal border on focus. 
- **Chips:** Small, rectangular with a 2px radius. Use a light stone background and "mono-label" typography.
- **Cards:** White background, 1px subtle border, and no shadow. Use "display-sm" for titles within cards to maintain the editorial hierarchy.
- **Lists:** High-density rows (32px-40px height) with 1px dividers. Use Inter for list items to ensure maximum scannability during creative workflows.
- **Studio Inspector:** A right-aligned panel using smaller typography (body-sm) and collapsed headers to maximize vertical space for settings and metadata.