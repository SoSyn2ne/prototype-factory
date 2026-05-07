---
name: Heat Break Proof Kit
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#d9c2b3'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#a18d7f'
  outline-variant: '#544438'
  surface-tint: '#ffb77d'
  primary: '#ffbb84'
  on-primary: '#4d2600'
  primary-container: '#f2994a'
  on-primary-container: '#663500'
  inverse-primary: '#904d00'
  secondary: '#ffb3af'
  on-secondary: '#68000e'
  secondary-container: '#8e101c'
  on-secondary-container: '#ff9994'
  tertiary: '#eec549'
  on-tertiary: '#3d2f00'
  tertiary-container: '#d0aa2f'
  on-tertiary-container: '#513f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3af'
  on-secondary-fixed: '#410005'
  on-secondary-fixed-variant: '#8e101c'
  tertiary-fixed: '#ffe08b'
  tertiary-fixed-dim: '#ebc246'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '900'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  touch-target-min: 64px
---

## Brand & Style

The design system is engineered for the high-stakes environment of outdoor industrial job sites. It prioritizes authority, immediate legibility under harsh solar glare, and tactile reliability. The brand personality is "Industrial-Utility"—unflinching, compliant, and rugged.

The style leverages **Industrial Brutalism** mixed with **Tactile Functionalism**. It avoids delicate transitions in favor of high-contrast boundaries, thick "machined" borders, and a clear visual hierarchy that mirrors physical safety equipment. The interface should feel like an extension of a worker's toolkit rather than a delicate consumer app. Every element is designed for "glove-friendly" interaction, ensuring that safety compliance is never hindered by interface friction.

## Colors

The palette is derived from high-visibility safety standards. The primary surface is **Deep Charcoal (#333333)**, chosen to minimize screen glare and maximize contrast for the "Sun" palette.

- **Primary (Sun Orange):** Used for primary actions and active status indicators.
- **Secondary (Heat Red):** Reserved for danger zones, high heat-index warnings, and critical alerts.
- **Tertiary (Safety Yellow):** Used for cautionary information, warnings, and non-critical highlights.
- **Surface & Background:** Utilize the charcoal base with slightly lighter variants to distinguish card surfaces from the background. 
- **Typography:** Pure white (#FFFFFF) or high-tint yellow (#F2C94C) should be used for text to ensure WCAG AAA compliance against the dark background in direct sunlight.

## Typography

This design system utilizes **Inter** for its neutral, technical clarity and exceptional legibility at various scales. Typography is sized aggressively—roughly 20% larger than standard web increments—to account for device vibration, movement, and outdoor viewing conditions.

Headlines use heavy weights (700-800) to anchor the page. Body text remains spacious to prevent visual crowding. The `label-caps` style is specifically intended for metadata and "proof" stamps, utilizing all-caps and wide letter-spacing to evoke printed industrial labels.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for landscape and portrait tablet orientations. It employs a 12-column grid with generous 24px gutters to prevent accidental taps on adjacent elements. 

Margins are set at a minimum of 32px to ensure content is not obscured by tablet ruggedized cases. The rhythm is strictly 8px-based, but most components default to a "Double-Step" (16px) or "Triple-Step" (24px) padding to accommodate the "glove-friendly" requirement. No interactive element should have a height or width smaller than the 64px touch-target minimum.

## Elevation & Depth

Hierarchy is established through **Bold Borders** and **Physical Stacking** rather than soft shadows. 

- **Level 0 (Background):** Solid Deep Charcoal.
- **Level 1 (Cards):** Slightly lighter charcoal with a 3px solid border in a neutral-light or brand color.
- **Level 2 (Active Elements):** Elements use a subtle, high-opacity drop shadow (e.g., 4px offset, 0px blur, black at 50% opacity) to create a "pressed-on" or "bolted-down" appearance.
- **Stamps:** Compliance "Proof" elements use a 15-degree rotation and a heavy border, appearing as if stamped onto the UI surface.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness level. This provides a "machined" look—enough rounding to feel intentional and modern, but sharp enough to maintain a rugged, serious aesthetic. 

- **Buttons & Inputs:** Use the standard 4px (0.25rem) radius.
- **Large Cards:** May scale up to 8px (0.5rem) to differentiate the container from the content.
- **Status Pills:** Utilize a full pill-shape (circular ends) to contrast against the otherwise rectangular, boxy environment.

## Components

### Buttons
Primary buttons are high-contrast blocks (Orange #F2994A background with Charcoal #333333 text). They feature a minimum height of 64px. Secondary buttons use a thick 3px ghost-border style.

### Card UI
Cards are the primary container. They must feature a 2px or 3px border. When a card represents a critical heat-index area, the border color shifts to Red (#EB5757).

### Proof Stamps
For compliance confirmation, a "Proof Stamp" component is used. It features the `label-caps` typography inside a heavy, slightly irregular border, rotated at -12 to -15 degrees.

### Checklist Indicators
Checklists use large 32px x 32px checkboxes. For offline sync status, an icon-label pair is placed in the header, using a pulsating green dot or a "sync-pending" yellow icon.

### Input Fields
Inputs are "Deep Fill" (darker than the card background) with high-contrast 2px bottom-borders that glow primary orange when focused. Labels always remain visible above the field (never floating or disappearing).

### Heat Gauges
Vertical or horizontal bars using the Sun Palette to visualize temperature ranges. These use the full width of their containers for maximum visibility.