---
name: Refund Human Trail
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#46474a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#5d5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#e2e3e1'
  on-secondary-container: '#636563'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261a00'
  on-tertiary-container: '#a87d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#e2e3e1'
  secondary-fixed-dim: '#c6c7c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#454746'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#f6be39'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Libre Franklin
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1140px
  gutter: 24px
---

## Brand & Style
The design system is engineered for rigor, documentation, and consumer advocacy. It adopts a **Financial-Analyst/Legal** aesthetic that prioritizes evidence over emotion. The goal is to transform chaotic refund disputes into structured, indisputable trails of data.

The style is **Refined Minimalism** with a focus on **Structural Integrity**. It avoids marketing fluff and decorative flourishes in favor of high-legibility layouts that evoke the authority of a legal brief or a high-end financial audit. The interface must remain calm, even when documenting crisis-level financial failures, to maintain a position of objectivity and power.

## Colors
The palette is grounded in the "ink on paper" metaphor to reinforce the sense of documentation.
- **Ink (#1A1A1B):** Used for primary text and structural borders. It is deep and authoritative.
- **Off-white (#F9F9F7):** The primary background color, providing a subtle "document" texture that is softer on the eyes than pure white.
- **Paper-white (#FFFFFF):** Reserved for elevated surface elements like cards and input fields to create a clear layer of focus.
- **Calm Warning Gold (#D4A017):** Used for pending states or items requiring review. It signals attention without panic.
- **Crisis Red (#B22222):** Reserved for refund failures, expired deadlines, and critical evidence gaps.
- **Success Green (#2E7D32):** Used for resolved trails and verified evidence.

## Typography
This design system utilizes a tri-font system to delineate information types:
- **Serif (Source Serif 4):** Used for headlines and section titles to provide an authoritative, editorial feel.
- **Sans-Serif (Libre Franklin):** Used for body copy and UI controls. It is professional, neutral, and highly legible.
- **Monospaced (JetBrains Mono):** Used for all evidentiary data, timestamps, reference numbers, and monetary values to signal precision and audit-readiness.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a "ledger" appearance, centered with generous margins. 

- **Grid:** 12-column grid for desktop, 4-column for mobile.
- **Rhythm:** An 8px baseline grid ensures vertical alignment across disparate font families.
- **Margins:** Desktop uses a 40px outer margin; mobile uses 16px.
- **Reflow:** On mobile, evidence cards stack vertically, and data tables transition to "key-value" list formats to preserve the legibility of monospaced strings.

## Elevation & Depth
In alignment with the "Financial-Analyst" profile, the design system rejects ambient shadows. Depth is communicated through **Tonal Layers** and **Crisp Outlines**.

- **Level 0 (Background):** Off-white (#F9F9F7).
- **Level 1 (Cards/Surface):** Paper-white (#FFFFFF) with a 1px solid Ink (#1A1A1B) border at 10% opacity.
- **Level 2 (Active/Hover):** Paper-white (#FFFFFF) with a 1.5px solid Ink (#1A1A1B) border at 100% opacity.
- **Separators:** 1px hairline strokes in Ink at 5% opacity are used to divide data rows within cards.

## Shapes
The shape language is strictly **Sharp (0px)**. Every element—buttons, input fields, cards, and badges—uses 90-degree corners. This evokes a sense of permanence, precision, and structural stability found in legal documents and spreadsheets.

## Components
- **Evidence Cards:** White surfaces with a hairline Ink border. Header section uses Serif text, while the "Evidence Data" uses Monospace.
- **Confidence Badges:** Small, rectangular labels with a solid background of Gold, Red, or Green. Text is always white or high-contrast Ink, set in `label-caps`.
- **Buttons:**
    - *Primary:* Solid Ink (#1A1A1B) background, White text.
    - *Secondary:* Transparent background, 1px Ink border.
- **Input Fields:** Sharp corners, 1px Ink border. Focus state increases border thickness to 2px. Labels use `label-caps`.
- **Timeline Indicators:** A vertical 1px line in Ink. Events are marked by small solid squares (not circles).
- **Data Visualizations:** Low-saturation, thin-stroke line charts or bar graphs. No gradients or shadows; use solid fills of the brand colors.
- **Lists:** Rows separated by 1px hairline borders. Use Monospace for ID numbers or dates in the right-hand column.