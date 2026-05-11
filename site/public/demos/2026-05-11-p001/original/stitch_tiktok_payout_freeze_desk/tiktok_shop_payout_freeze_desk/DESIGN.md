---
name: TikTok Shop Payout Freeze Desk
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#ba0035'
  on-secondary: '#ffffff'
  secondary-container: '#e51146'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201f'
  on-tertiary-container: '#00938f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#40000c'
  on-secondary-fixed-variant: '#920027'
  tertiary-fixed: '#35fbf5'
  tertiary-fixed-dim: '#00ddd8'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504d'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-edge: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
This design system establishes a high-trust, financial-grade environment specifically for TikTok Shop sellers navigating sensitive payout issues. The brand personality is authoritative yet transparent, balancing the energetic vibrancy of TikTok's consumer-facing brand with the rigorous precision of a fintech platform.

The aesthetic leans heavily into **Minimalism** with a touch of **Corporate Modern**. It utilizes a "White-Label" philosophy where the interface recedes to allow critical financial data and status indicators to command attention. High-contrast accents are used sparingly and functionally: Cyan represents liquidity and growth, while the signature Red/Pink highlights critical alerts, freezes, or required actions. The resulting atmosphere is one of professional calm and institutional reliability.

## Colors
The palette is rooted in a monochromatic base to ensure a "Financial Grade" feel. 
- **Primary Black (#000000):** Used for primary navigation, high-level headers, and core brand elements.
- **Vibrant Red/Pink (#FE2C55):** Reserved strictly for "Frozen" statuses, critical errors, and destructive actions. It signals urgency and high-stakes information.
- **Cyan (#25F4EE):** Utilized for "Released" funds, successful data trends, and primary calls to action (CTAs) that lead to positive resolution.
- **Neutral Grays:** A range of very light grays provide structure without adding visual noise. Backgrounds stay near #FFFFFF to maximize the perception of "whitespace" and cleanliness.

## Typography
This design system utilizes **Inter** for its systematic, utilitarian nature, which excels in data-dense dashboard environments. 

- **Hierarchy:** We use a tight scale to keep the interface compact. Headlines use semi-bold weights with slight negative letter-spacing for a premium, "locked-in" look.
- **Functional Labels:** Small-caps are used for table headers and secondary metadata labels to distinguish them from actionable data.
- **Monospacing:** For transaction IDs, payout amounts, and dates, a monospaced font (JetBrains Mono) is introduced to ensure vertical alignment and easy scanning of numerical data.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop, centered within a 1440px container to prevent data tables from becoming unreadable on ultra-wide monitors.

- **Grid:** A 12-column grid with a generous 24px gutter.
- **Whitespace:** Ample internal padding within cards (min 32px) ensures that complex financial information feels approachable.
- **Rhythm:** An 8px linear scale is used for most spacing, with a 4px "half-step" used exclusively for tight form groupings and label-input relationships.
- **Mobile:** Content reflows to a single column with 16px side margins. Tables transition to "Data Cards" to maintain legibility of frozen/released statuses.

## Elevation & Depth
In alignment with the "Financial-Grade" requirement, this design system avoids heavy shadows and decorative depth. 

- **Low-Contrast Outlines:** Instead of shadows, surfaces are defined by 1px solid borders (#E5E5E5). 
- **Tonal Layering:** The primary canvas is #FFFFFF. Secondary sections, such as the sidebar or secondary utility panels, use a subtle #F8F8F8 fill to create a sense of nesting.
- **Interactive States:** Depth is only suggested during interaction (e.g., a subtle 2px blur shadow on hover for clickable cards) to provide tactile feedback without cluttering the static UI.

## Shapes
The design system employs a **Sharp (0px)** or highly disciplined **Soft (1px)** radius strategy. For the "Payout Freeze Desk," sharp corners convey a sense of precision, rigidity, and official statehood. 

All primary containers, buttons, and input fields utilize 0px border-radii. The only exception is for circular status dots or avatars, which provide a necessary organic contrast to the otherwise strictly architectural layout.

## Components
Consistent styling across components reinforces the professional nature of the dashboard:

- **Data Tables:** High-density, sharp-bordered rows. Zebra striping is avoided; instead, use 1px dividers. Header cells use `label-caps` typography with a subtle gray background.
- **Status Badges:** Use a "Filled" style for high visibility. 
    - *Frozen:* White text on #FE2C55 background.
    - *Pending:* Dark text on #FFAB00 background.
    - *Released:* Black text on #25F4EE background.
- **Financial Charts:** Use thin strokes (1.5pt). Area charts for trends should use a 5% opacity fill of the line color. Axes should be minimal, using #CCCCCC for grid lines.
- **Complex Form Inputs:** Inputs use a 1px #000000 border when focused. Error states use a 2px #FE2C55 bottom border. Labels are positioned above the field in `label-caps` for maximum clarity.
- **Appeal Cards:** Large, white containers with a vertical accent bar on the left indicating the current status of the appeal (Cyan for open, Red for rejected).
- **Buttons:** 
    - *Primary:* Solid Black background, White text, 0px radius.
    - *Secondary:* Ghost style with 1px Black border.
    - *Urgent/Appeal:* Solid #FE2C55 background for actions specifically related to freezing disputes.