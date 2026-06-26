---
name: Serene Balance
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414848'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#717878'
  outline-variant: '#c1c8c7'
  surface-tint: '#426464'
  primary: '#406262'
  on-primary: '#ffffff'
  primary-container: '#587b7b'
  on-primary-container: '#f3fffe'
  inverse-primary: '#a9cdcd'
  secondary: '#894f40'
  on-secondary: '#ffffff'
  secondary-container: '#fcb29e'
  on-secondary-container: '#784233'
  tertiary: '#5d5c58'
  on-tertiary: '#ffffff'
  tertiary-container: '#767471'
  on-tertiary-container: '#fcffe3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5eae9'
  primary-fixed-dim: '#a9cdcd'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#2a4c4d'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a1'
  on-secondary-fixed: '#360e05'
  on-secondary-fixed-variant: '#6c382a'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  status-cue:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is centered on the "Calm-Consumer" profile, specifically tailored for the high-stakes environment of Korean elite education (Hagwon). The brand personality is empathetic, professional, and grounded, aiming to transform financial anxiety into informed clarity. 

The visual style utilizes a **Modern Minimalist** approach with **Tactile** influences. It avoids the aggressive, high-energy tropes of fintech, opting instead for warm, reassuring surfaces that evoke the feeling of high-quality stationery or a quiet study environment. The goal is to lower the user's cortisol levels while they navigate complex data regarding family impact and tuition costs.

## Colors
The palette is built on a foundation of warm neutrals to provide a comforting backdrop for data-heavy interactions.

*   **Primary (Sage Green):** Used for "balanced" indicators, progress bars, and primary actions. It represents stability and growth.
*   **Secondary (Soft Coral):** Reserved strictly for "fatigue" indicators, high-cost alerts, or areas requiring immediate attention. It is soft enough to avoid panic but distinct enough to signal caution.
*   **Tertiary (Cream/Beige):** The primary surface color. It replaces stark white to reduce eye strain and create a "paper-like" tactile quality.
*   **Neutral (Charcoal Grey):** Used for text and icons to ensure high legibility without the harshness of pure black.

## Typography
The typography strategy balances modern efficiency with approachable elegance. 

**Manrope** is used for headlines and status cues. Its geometric yet warm construction provides a professional "elite" feel that remains friendly. **Work Sans** is utilized for all body copy, tables, and numerical data. Its optimized legibility ensures that complex tuition breakdowns are easy to parse at a glance. We introduce a "status-cue" role with a medium weight and slight italicization for qualitative insights into family impact.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy on desktop to maintain a controlled, editorial feel, transitioning to a fluid model on mobile devices.

- **Desktop:** 12-column grid, 1200px max-width, 24px gutters. Content is centered with generous outer margins to evoke a sense of calm and focus.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins. 

Spacing follows a strict 8px base unit. Data-dense tables use a compact 4px vertical rhythm internally but are surrounded by large "breathable" margins (stack-lg) to prevent the UI from feeling overwhelming.

## Elevation & Depth
To maintain a reassuring and soft atmosphere, the design system avoids harsh shadows or high-contrast borders.

1.  **Surface Tiers:** We use a "Tonal Layering" approach. The base background is the Tertiary cream. Content cards use a slightly lighter off-white or pure white for clarity.
2.  **Shadows:** Shadows are highly diffused and "ambient." Use a 10% opacity of the Primary color (Sage) in the shadow tint to keep it feeling organic rather than synthetic.
3.  **Depth Levels:**
    *   *Level 0:* Background (Cream).
    *   *Level 1:* Main content cards (Soft shadow, 16px blur).
    *   *Level 2:* Modals and active inputs (More pronounced shadow, 32px blur).

## Shapes
The shape language is consistently **Rounded**. Sharp corners are avoided to minimize the visual "threat" perception of financial data. 

- **Standard Buttons/Inputs:** 0.5rem (8px) radius.
- **Data Cards:** 1rem (16px) radius for a gentle, containerized look.
- **Status Tags/Chips:** 1.5rem (24px) for a full pill shape to distinguish them from interactive buttons.

## Components

*   **Buttons:** Primary buttons use the Sage Green background with white text. Secondary buttons use a Sage Green outline with a Cream background. Avoid heavy gradients.
*   **Cards:** The primary container for Hagwon evaluations. Must include a 1px border in a slightly darker beige than the background to define edges without adding visual weight.
*   **Data Tables:** Used for tuition breakdowns. Headers should be in `label-md` style. Alternate rows should use a very subtle 2% tint of Sage Green to help horizontal tracking.
*   **Impact Sliders:** Custom sliders for "Family Impact" should use a thick, rounded track in the Neutral color with a Primary-colored handle.
*   **Status Chips:** Use the Primary (Sage) for "Sustainable" status and Secondary (Coral) for "Overstretched" status. These should always be accompanied by a small, clear icon.
*   **Input Fields:** Use a subtle inset shadow to create a "pressed" paper effect, signaling where the parent should provide information. Labels should always be visible above the field in `body-sm` bold.