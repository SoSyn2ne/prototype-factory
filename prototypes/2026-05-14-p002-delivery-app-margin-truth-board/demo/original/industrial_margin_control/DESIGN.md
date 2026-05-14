---
name: Industrial Margin Control
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c4c6cf'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8e9098'
  outline-variant: '#44474e'
  surface-tint: '#b2c7ef'
  primary: '#b2c7ef'
  on-primary: '#1b3151'
  primary-container: '#2d4263'
  on-primary-container: '#9aafd5'
  inverse-primary: '#4a5f82'
  secondary: '#b8c7e7'
  on-secondary: '#22314a'
  secondary-container: '#384762'
  on-secondary-container: '#a7b5d5'
  tertiary: '#e3c284'
  on-tertiary: '#402d00'
  tertiary-container: '#543e0c'
  on-tertiary-container: '#c9aa6e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b2c7ef'
  on-primary-fixed: '#021b3b'
  on-primary-fixed-variant: '#324769'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b8c7e7'
  on-secondary-fixed: '#0b1b34'
  on-secondary-fixed-variant: '#384762'
  tertiary-fixed: '#ffdea3'
  tertiary-fixed-dim: '#e3c284'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5a4311'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  data-display:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-edge: 24px
  card-gap: 12px
  rail-width: 64px
---

## Brand & Style
The design system is engineered for high-stakes restaurant operations where "margin truth" is the primary objective. The brand personality is **authoritative, industrial, and utilitarian**, mimicking the rugged durability of commercial kitchen hardware and tactical command interfaces.

The design style is a hybrid of **Corporate Modern and Industrial Functionalism**. It prioritizes high-density information display and rapid error detection over aesthetic flair. Visual elements are treated as "equipment" rather than decoration, using heavy structural lines, clear status indicators, and a disciplined "back-office" layout that suggests stability and precision. The target audience is operators who require a no-nonsense tool that survives the fast-paced, high-pressure environment of delivery logistics management.

## Colors
The palette is rooted in "Steel Blue" tones to evoke a sense of hardware and architectural reliability. 

- **Primary & Secondary:** Use `#2D4263` for active structural elements and `#192841` for deep background panels, creating a "Command Board" atmosphere that reduces eye strain during long operational shifts.
- **Surface Palette:** Utilize a range of cool-toned grays for card backgrounds and borders to maintain a mechanical aesthetic.
- **Semantic Badges:** High-saturation Green, Amber, and Red are reserved strictly for margin health and operational alerts. These must maintain high contrast against the dark navy backgrounds to ensure critical data points are "scannable" from a distance.

## Typography
The typography system is designed for **high-density utility**. 

- **Primary Sans (Inter):** Used for all UI controls, navigation, and instructional text. It provides maximum legibility in variable lighting conditions.
- **Data Mono (JetBrains Mono):** This is the "Truth" font. Use it for all financial figures, percentage margins, and operational timestamps. The monospaced nature ensures that columns of numbers align perfectly, allowing the eye to spot discrepancies in profit margins instantly.
- **Labeling:** Use the `label-caps` style for section headers and field labels to create a "tabbed folder" or industrial blueprint feel.

## Layout & Spacing
The layout follows a **Rigid Modular Grid** system. Content is organized into "Command Panels" that dock to the edges of the screen, maximizing the use of every pixel.

- **Grid:** Use a 12-column grid for desktop views, but prioritize horizontal "Action Rails" for primary navigation and tool switching.
- **Density:** Spacing is tight (4px base unit) to allow for the maximum amount of data per screen without feeling cluttered. 
- **Reflow:** On mobile/tablet, panels stack vertically, transforming into "Service Tickets." Gutters remain fixed at 16px to maintain the rigid, structured appearance across all devices.

## Elevation & Depth
This design system avoids soft, ambient shadows in favor of **Tonal Layering and Tactical Outlines**.

- **Stacked Panels:** Depth is communicated by shifting the background color. The deepest layer is the command board (#192841), while active working cards are a step lighter (#2D4263).
- **Hard Borders:** Use 1px or 2px solid borders (e.g., #3E5A82) to define element boundaries. This mimics the construction of metal frames and industrial enclosures.
- **Inset Depth:** Use subtle inner shadows or darker borders for input fields to make them feel "recessed" into the hardware, creating a tactile, "machined" sensation.

## Shapes
Shapes are **Soft (0.25rem)**, reflecting "precision-milled" edges rather than "friendly" consumer curves.

- **Standard Elements:** Buttons and cards use a 4px (0.25rem) radius. This is enough to prevent a "raw" brutalist look while maintaining a serious, professional tone.
- **Badges:** Margin badges should be rectangular or use the same 4px radius; avoid pill shapes to stay within the industrial design language.
- **Checklists:** Square checkboxes are preferred to reinforce the "tick-box" nature of operational checklists.

## Components
- **Margin Badges:** The centerpiece of the UI. These are high-contrast, bold blocks using the semantic color palette. The text inside (JetBrains Mono) should be white or high-contrast black depending on the status color.
- **Kitchen-Service Cards:** Rectangular containers with a distinct header "rail" for status and timestamps. They should feel like physical tickets moved across a line.
- **Tactile Checklist Controls:** Large, easy-to-tap hit areas with thick borders. When checked, the background should shift to a primary blue with a heavy "X" or "Check" mark.
- **Decisive Action Rails:** Navigation or primary action bars that span the full height or width of the viewport. They use high-contrast icons and minimal text.
- **Input Fields:** Styled as "data entry cells." No floating labels; use rigid `label-caps` positioned directly above the field or inside a dedicated header area.
- **Data Tables:** High-density, no cell padding on the outer edges, with subtle vertical "column-rules" (lines) to help track long rows of financial data.