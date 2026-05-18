---
name: Forge Industrial Safety
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#44474c'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#75777d'
  outline-variant: '#c5c6cc'
  surface-tint: '#555f70'
  primary: '#212b3a'
  on-primary: '#ffffff'
  primary-container: '#374151'
  on-primary-container: '#a3adc0'
  inverse-primary: '#bdc7db'
  secondary: '#5c5f62'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e4'
  on-secondary-container: '#606366'
  tertiary: '#4b1c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e2d00'
  on-tertiary-container: '#ff8f4f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e3f7'
  primary-fixed-dim: '#bdc7db'
  on-primary-fixed: '#121c2a'
  on-primary-fixed-variant: '#3d4757'
  secondary-fixed: '#e0e2e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.05em
  status-code:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  touch-target-min: 56px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style
The design system is engineered for high-stakes, high-visibility environments where split-second recognition and "glove-friendly" interaction are non-negotiable. The aesthetic blends **Industrial Brutalism** with **Tactile Functionalism**. It prioritizes extreme legibility and physical-world metaphors to evoke a sense of durability and authoritative safety.

The target audience consists of field technicians and safety officers operating in shop floors or remote battery storage facilities. The UI must feel like a piece of rugged hardware—reliable, unyielding, and immune to the visual noise of a chaotic worksite.

**Key Principles:**
- **Mechanical Affordance:** Every interactive element must look and feel "pressable," mimicking heavy-duty physical switches.
- **Safety First Hierarchy:** Critical alerts use standard hazard iconography and high-contrast color blocks to override environmental distractions.
- **Environmental Resilience:** High-contrast ratios ensure readability under harsh overhead shop lighting or direct outdoor glare.

## Colors
The palette is rooted in industrial materials and safety standards.

- **Foundational Grays:** **Steel Gray** serves as the primary structural color for headers and active states, while **Industrial Silver** provides the base for panels and containers, mimicking aluminum sheeting.
- **Signal Colors:** **Hazard Orange** is used for active warnings and primary calls to action. **Caution Yellow** is reserved for preventative maintenance states. **Emergency Red** is strictly used for critical failures and stop-work orders.
- **High-Density Ink:** **Deep Charcoal** is utilized for all primary text to ensure a minimum contrast ratio of 7:1 against the silver background.

## Typography
This design system utilizes **Inter** for its neutral, systematic clarity and excellent legibility at large scales.

- **Scale:** Font sizes are intentionally oversized to accommodate vibrating environments or distance viewing.
- **Weight:** Headlines use Extra Bold (800) weights to establish a heavy, authoritative hierarchy.
- **Labels:** Small labels use uppercase with increased letter spacing to mimic stamped metal plates and industrial labeling.
- **Legibility:** Line heights are generous to ensure that technical strings and battery serial numbers do not bleed together.

## Layout & Spacing
The layout follows a rigid **8px grid system** with a focus on oversized touch targets.

- **Grid:** A 12-column fluid grid for desktop and a single-column stack for mobile.
- **Touch Targets:** No interactive element (button, checkbox, or toggle) shall be smaller than **56px**, ensuring accessibility for users wearing protective gloves.
- **Spacing Rhythm:** Vertical stack spacing is aggressive (24px or 40px) to prevent accidental taps and clearly separate distinct battery data points.
- **Safe Zones:** High-density margins (20px minimum) prevent UI elements from being obscured by rugged phone cases or thick screen protectors.

## Elevation & Depth
Depth in this design system is communicated through **Mechanical Realism** rather than soft ambient shadows.

- **Tactile Shadows:** Buttons and cards use hard-edged, 100% opacity shadows (2px to 4px offset) in Steel Gray to create a "raised" effect. 
- **Pressed States:** Upon interaction, elements shift 2px down and right, and the shadow is removed, simulating a physical mechanical depress.
- **Structural Outlines:** All containers use a 2px solid border. Use `Steel Gray` for standard containers and `Hazard Orange` or `Emergency Red` for alerted containers.
- **Inset Wells:** Input fields and data readouts use an "inset" shadow effect to appear carved into the Industrial Silver surface.

## Shapes
The shape language is "Soft-Industrial." While 0px sharp corners are too aggressive for digital interfaces, the system uses a tight **0.25rem (4px)** radius to maintain a machined, precision-cut look.

- **Standard Elements:** 4px border radius.
- **Large Cards:** 8px border radius.
- **Status Badges:** 2px border radius to mimic clipped metal tags.
- **Icons:** Encapsulated in square containers with 4px radius to maintain the structural grid.

## Components
Consistent styling for field-ops reliability:

- **Glove-Friendly Buttons:** 56px minimum height. Features a 2px solid border and a 4px hard shadow. Icons are placed to the left of the text for immediate functional identification.
- **Hazard Badges:** Styled to look like physical hazard labels. They use background colors of Yellow, Orange, or Red with Heavy Black text. Usually positioned at the top-right of cards.
- **Battery Record Cards:** Large containers with an 8px radius and 2px border. Content is divided by 1px horizontal rules. Includes a primary "Health" indicator at the top.
- **Checklist Indicators:** Large 32px checkboxes with thick 3px borders. When "Checked," the entire row background shifts to a light green tint to confirm completion in offline mode.
- **Offline Sync Bar:** A persistent 4px strip at the very top of the UI that turns Hazard Orange if data is cached locally and Steel Gray when synced.
- **Input Fields:** Heavy borders (2px) with label text always visible above the field (never hidden as placeholders) to ensure the technician knows exactly what data is being entered.