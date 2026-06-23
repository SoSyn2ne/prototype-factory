---
name: Field-Ops Rugged System
colors:
  surface: '#101416'
  surface-dim: '#101416'
  surface-bright: '#363a3c'
  surface-container-lowest: '#0b0f11'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2d'
  surface-container-highest: '#323538'
  on-surface: '#e0e3e6'
  on-surface-variant: '#b9cac9'
  inverse-surface: '#e0e3e6'
  inverse-on-surface: '#2d3133'
  outline: '#839493'
  outline-variant: '#3a4a49'
  surface-tint: '#00dddd'
  primary: '#ffffff'
  on-primary: '#003737'
  primary-container: '#00fbfb'
  on-primary-container: '#007070'
  inverse-primary: '#006a6a'
  secondary: '#c6c6ca'
  on-secondary: '#2f3034'
  secondary-container: '#4a4b4f'
  on-secondary-container: '#bbbbbf'
  tertiary: '#ffffff'
  on-tertiary: '#2d3138'
  tertiary-container: '#dfe2ec'
  on-tertiary-container: '#61646c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#00fbfb'
  primary-fixed-dim: '#00dddd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#e2e2e6'
  secondary-fixed-dim: '#c6c6ca'
  on-secondary-fixed: '#1a1c1f'
  on-secondary-fixed-variant: '#45474a'
  tertiary-fixed: '#dfe2ec'
  tertiary-fixed-dim: '#c3c6cf'
  on-tertiary-fixed: '#181c22'
  on-tertiary-fixed-variant: '#43474e'
  background: '#101416'
  on-background: '#e0e3e6'
  surface-variant: '#323538'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  button-text:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  touch-target-min: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
This design system is engineered for high-stakes environments where legibility and reliability are non-negotiable. The brand personality is utilitarian, professional, and "field-grade"—prioritizing function over form while maintaining a modern, high-tech aesthetic. It is designed specifically for mobile-first deployment in the field, ensuring durability and ease of use under challenging conditions like high glare or while wearing gloves.

The visual style blends **Modern Minimalism** with **Industrial Brutalism**. It avoids unnecessary decorative flourishes, opting instead for structural integrity, clear information hierarchy, and aggressive contrast. The interface should feel like a precision instrument: cold, efficient, and indestructible.

## Colors
The palette is optimized for glare reduction and immediate visual recognition. 

- **Primary Accent:** Vivid Cyan (#00FFFF) is reserved exclusively for primary actions and active states. It must stand out against dark backgrounds to guide the eye instantly.
- **Backgrounds:** The core interface uses Deep Charcoal (#121417) to minimize eye strain and screen glare.
- **Surfaces:** Slate (#2A2E35) is used for cards and containers to create subtle depth without losing the rugged aesthetic.
- **Typography:** High-contrast Light Gray (#F0F2F5) ensures readability in varied lighting conditions. 
- **Status Colors:** Use standard semantic colors (Red for Danger, Amber for Warning) but keep them desaturated compared to the primary Cyan to maintain the technical tone.

## Typography
The system uses **Inter** for its exceptional legibility and neutral tone. To lean into the "technical" feel, **JetBrains Mono** is introduced for small labels, status codes, and data readouts.

- **Legibility:** All body text maintains a minimum size of 16px to ensure readability in motion.
- **Caps & Spacing:** Use uppercase for `label-caps` to distinguish meta-data from interactive content.
- **Weights:** Use Semi-bold (600) and Bold (700) for headlines to create a clear visual hierarchy against the dark background.

## Layout & Spacing
The layout follows a strict **8px grid system**. Given the "glove-friendly" requirement, the system mandates a minimum touch target of 48x48px for all interactive elements.

- **Mobile First:** Content is stacked in a single column by default, utilizing a fluid grid that stretches to the edge of the 16px side margins.
- **Density:** Spacing between functional groups should be generous (24px or 32px) to prevent accidental taps, while information within a card can be more compact (8px or 12px) to maximize data density.
- **Safe Areas:** Ensure all bottom-fixed actions respect the device's safe area, especially on ruggedized mobile hardware with thick bezels.

## Elevation & Depth
This design system rejects soft shadows and ambient blurs in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Stacked Tiers:** Depth is created by lightening the background color. Level 0 is the deepest charcoal; Level 1 (cards/modals) is a slightly lighter slate.
- **Borders:** Instead of shadows, use 1px solid borders (#3F444E) to define the edges of components. This maintains a crisp, "blueprinted" look.
- **Active State:** The only "glow" allowed is a subtle outer bloom on the Primary Cyan button when active, simulating a backlit hardware button.

## Shapes
The shape language is "Soft-Industrial." It avoids aggressive roundedness to maintain a serious, rugged character. 

- **Corners:** A 4px (0.25rem) radius is used for most components to prevent the UI from looking "sharp" while still appearing structural and rigid.
- **Buttons:** Use the standard 4px radius. Avoid pill-shapes as they conflict with the industrial aesthetic.
- **Icons:** Use thick-stroke (2px) icons with slightly rounded caps to match the font weight of the body text.

## Components
- **Buttons:** Primary buttons are solid Cyan (#00FFFF) with black text for maximum contrast. Secondary buttons use a slate background with a 1px border. Height must be 48px or 56px for glove compatibility.
- **Rugged Cards:** Use the Slate surface (#2A2E35) with a 1px border. Headers within cards should be separated by a subtle horizontal divider.
- **Event Chips:** These are high-contrast status indicators. Use a dark background with a thick 2px colored left border to indicate status (e.g., Cyan for active, Red for critical).
- **Input Fields:** Large tap areas with clear, persistent labels. Use a focus state that turns the entire border Cyan.
- **Checkboxes & Radio Buttons:** Oversized (24x24px) to ensure ease of selection. When checked, they should fill with the Primary Cyan color.
- **Data Grids:** Use zebra-striping with subtle tonal differences for row-heavy data views to aid eye tracking across the screen.