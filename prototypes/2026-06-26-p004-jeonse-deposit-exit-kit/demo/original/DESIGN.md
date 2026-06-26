---
name: Jeonse Deposit Exit Kit
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#434843'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#737872'
  outline-variant: '#c3c8c1'
  surface-tint: '#506353'
  primary: '#465949'
  on-primary: '#ffffff'
  primary-container: '#5e7161'
  on-primary-container: '#dff5e0'
  inverse-primary: '#b7ccb9'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e8e2d9'
  on-secondary-container: '#67645d'
  tertiary: '#4d555c'
  on-tertiary: '#ffffff'
  tertiary-container: '#656d75'
  on-tertiary-container: '#e8eff8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e8d4'
  primary-fixed-dim: '#b7ccb9'
  on-primary-fixed: '#0e1f13'
  on-primary-fixed-variant: '#394b3d'
  secondary-fixed: '#e8e2d9'
  secondary-fixed-dim: '#cbc6bd'
  on-secondary-fixed: '#1d1b16'
  on-secondary-fixed-variant: '#494640'
  tertiary-fixed: '#dbe3ec'
  tertiary-fixed-dim: '#bfc7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 640px
  gutter: 20px
---

## Brand & Style

The design system is centered on the "calm-consumer" philosophy, specifically tailored for the high-stress environment of Korean rental deposit recovery. The brand personality is **authoritative yet empathetic**, acting as a steady hand for users navigating complex legal and financial processes.

The design style is a blend of **Soft Minimalism** and **Modern Corporate**. It prioritizes extreme legibility and mental breathing room to lower user cortisol levels. By utilizing generous whitespace and a rhythmic vertical flow, the interface transforms a bureaucratic hurdle into a manageable, step-by-step journey. The visual language conveys high trust through meticulous alignment and a refined, "legal-adjacent" aesthetic that avoids the coldness of traditional government platforms.

## Colors

The palette is designed to be "low-stress" and grounded. 
- **Primary (Sage Green):** Used exclusively for successful states, "packet completion," and primary action buttons. It signals safety and progress.
- **Secondary (Sand/Cream):** Used for large surface areas and container backgrounds to provide a warmer, more human feel than pure white.
- **Neutral (Slate Grey):** Used for secondary text and borders to maintain professional gravitas without the harshness of pure black.
- **Background:** A very light, off-white "Paper" tint is used for the base layer to reduce screen glare and eye strain during long form-filling sessions.

## Typography

The typography strategy focuses on "plain-language" accessibility. **Be Vietnam Pro** is used for headlines to provide a friendly, contemporary touch that softens the legal subject matter. **Work Sans** is used for all functional and body text; its grounded, professional weights ensure that complex instructions remain clear and legible.

For Korean character support, ensure the system fallbacks to a high-quality Gothic typeface (like Pretendard or Noto Sans KR) that matches the x-height and weight of Work Sans. Line heights are intentionally generous (1.5x - 1.6x) to prevent "text-wall" anxiety.

## Layout & Spacing

This design system utilizes a **narrow fixed-grid** philosophy for desktop to mimic the feel of a physical legal folder or document. The central content container is capped at 640px to prevent long line lengths, which aids readability and focus.

- **Vertical Rhythm:** Use the `lg` (48px) and `xl` (80px) spacing tokens to separate major sections, creating a sense of "one step at a time."
- **Mobile:** Transition to a fluid layout with 20px side margins.
- **Density:** Maintain low density. Information should be paced out; never crowd more than two interactive elements in the same vertical viewport.

## Elevation & Depth

To maintain a "high-trust" and "reassuring" environment, this design system avoids floating elements or heavy shadows. Depth is communicated through:
- **Tonal Layering:** Interactive cards sit on a `#F9F8F6` background using a pure `#FFFFFF` fill to create a subtle "lift" without needing a shadow.
- **Ambient Soft Shadows:** When elevation is required (e.g., a primary action sheet or modal), use a very diffused, low-opacity shadow: `0px 4px 20px rgba(94, 113, 97, 0.08)`. The shadow is tinted with the Primary Sage color to keep the palette cohesive and organic.
- **Inward Depth:** Input fields use a subtle 1px inset border or a slightly darker neutral fill to appear "ready to be filled."

## Shapes

The shape language is consistently **Rounded**. 
- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Progress modules and section wrappers use 1rem (16px) or 1.5rem (24px) for a softer, more approachable silhouette.
- **Interactive Indicators:** Checkboxes and radio buttons should retain a slight 4px rounding—never use sharp corners, as they evoke "stiffness" and "unyielding" legal structures.

## Components

### Buttons
- **Primary:** Filled Sage Green with white text. Reserved for "Submit," "Complete," or "Next Step."
- **Secondary:** Sand/Cream background with Primary-colored text. Used for "Save Draft" or "Previous."
- **Tertiary:** Ghost style with an underline or subtle border for "Learn more about this legal term."

### Cards & Modules
Cards should be the primary vessel for information. Each card should have a 1px border in a muted grey (`#E8E2D9`) to feel like a "folder" or "document."

### Input Fields
Inputs must include clear, persistent labels and helper text. Use a soft cream background for the input area to make the white "active" state feel like a clear invitation to type.

### Progress Kit
A custom component for this design system is the **"Peace of Mind" Progress Bar**. It should be thick (12px), use the Sage Green for completion, and include a "Why this matters" tooltip at each stage to reduce user uncertainty.

### Status Chips
Use chips for "Pending," "Verified," and "Action Required." These should use low-saturation versions of the success/warning colors to avoid looking like loud "alerts."