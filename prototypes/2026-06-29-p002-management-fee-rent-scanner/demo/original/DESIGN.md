---
name: Calm Arithmetic
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#43474e'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#595f66'
  on-secondary: '#ffffff'
  secondary-container: '#dde3eb'
  on-secondary-container: '#5f656c'
  tertiary: '#361900'
  on-tertiary: '#ffffff'
  tertiary-container: '#552b00'
  on-tertiary-container: '#eb851c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#dde3eb'
  secondary-fixed-dim: '#c1c7cf'
  on-secondary-fixed: '#161c22'
  on-secondary-fixed-variant: '#41474e'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
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
  gutter: 16px
  margin: 24px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for high-stakes financial precision within the Korean housing market. The brand personality is clinical, reliable, and mathematically rigorous, aimed at professional analysts and serious home buyers. The aesthetic follows a **Modern Corporate** style with a focus on functional density and "calm math"—minimizing cognitive load through structured hierarchy rather than visual ornamentation. The UI evokes an emotional response of clarity and control, ensuring that complex fee structures and tax calculations feel manageable and transparent.

## Colors
The palette is dominated by **Trustworthy Deep Blue** (#1A365D) for primary actions and structural headers, signaling institutional stability. **Neutral Grays** form the backbone of the data-heavy interface, providing subtle differentiation between table rows and container backgrounds without distracting the eye. **Restrained Warning Amber** (#D97706) is used exclusively for fee discrepancies, missing data, or critical financial thresholds, ensuring these elements stand out against the cooler background. Success states should use a muted forest green, while error states utilize a desaturated crimson to maintain the "calm" atmosphere.

## Typography
This design system utilizes **Hanken Grotesk** for its exceptional legibility in dense interfaces and its professional, contemporary character. For numerical data and financial values, **JetBrains Mono** is employed to ensure tabular figures align perfectly, facilitating easier vertical scanning of price lists and fee breakdowns. 

- **Headlines:** Reserved for major section headers and property names.
- **Data Mono:** Used for all currency values, percentages, and square footage measurements.
- **Interpretations:** Standard body text is paired immediately with numerical data to provide textual context (e.g., "Market Value" next to the currency figure).

## Layout & Spacing
The layout follows a **Fixed Grid** model optimized for 1440px desktop displays. It utilizes a 12-column structure with 16px gutters to allow for high-fidelity functional density. 

- **Sidebar:** A fixed 280px left-hand panel for global navigation and property filters.
- **Content Area:** Two-column split (60/40) for the primary data grid and the secondary interpretation/comparison panel.
- **Rhythm:** An 8px base unit drives all spacing, but 4px increments are permitted within compact data components (like nested tables or property specs) to maximize information per square inch.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows. 
- **Level 0 (Background):** #F7FAFC (Lightest gray) for the main application canvas.
- **Level 1 (Cards/Tables):** Pure white surface with a 1px border (#E2E8F0).
- **Level 2 (Modals/Popovers):** Pure white surface with a very soft, desaturated blue shadow (0px 4px 12px rgba(26, 54, 93, 0.08)) to indicate focus.
This "flat-plus" approach keeps the interface looking professional and avoids the visual clutter of heavy skeuomorphism.

## Shapes
The shape language is **Soft** (Level 1). A 0.25rem (4px) corner radius is applied to buttons, input fields, and cards. This slight rounding softens the "brutal" nature of financial grids while maintaining a rigid, architectural structure that feels appropriate for housing and finance. Interactive elements like checkboxes remain strictly square or minimally rounded to reinforce the precision of the tool.

## Components
- **Data Grids:** Defined by 1px solid borders in #E2E8F0. Header rows use a subtle #EDF2F7 background. Cell padding is tight (8px vertical, 12px horizontal).
- **Comparison Cards:** Compact blocks containing a title, a large mono-spaced price value, and a 1-line text interpretation below.
- **Compact Buttons:** Primary buttons use the Deep Blue background with white Hanken Grotesk semi-bold text. Secondary buttons use a simple border-only "ghost" style.
- **Input Fields:** Inset style with 1px borders; focus state changes the border to Primary Blue with a 2px soft outer glow.
- **Side-by-Side Interpretations:** A specific pattern where a numerical cell is immediately followed by a descriptive label in a lighter gray shade to explain the "why" behind the "what."
- **Discrepancy Badges:** Small, pill-shaped markers using the Amber palette to highlight outliers in cost-per-pyeong or tax deviations.