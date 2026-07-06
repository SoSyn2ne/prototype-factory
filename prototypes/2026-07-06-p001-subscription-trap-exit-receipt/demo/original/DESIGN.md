---
name: Serene Oversight
colors:
  surface: '#f8faf8'
  surface-dim: '#d8dad9'
  surface-bright: '#f8faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f2'
  surface-container: '#eceeec'
  surface-container-high: '#e7e9e7'
  surface-container-highest: '#e1e3e1'
  on-surface: '#191c1b'
  on-surface-variant: '#444651'
  inverse-surface: '#2e3130'
  inverse-on-surface: '#eff1ef'
  outline: '#747782'
  outline-variant: '#c4c6d2'
  surface-tint: '#3d5ba5'
  primary: '#3b59a2'
  on-primary: '#ffffff'
  primary-container: '#5572bd'
  on-primary-container: '#fefcff'
  inverse-primary: '#b2c5ff'
  secondary: '#476461'
  on-secondary: '#ffffff'
  secondary-container: '#c9e9e5'
  on-secondary-container: '#4d6a67'
  tertiary: '#595d5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#717575'
  on-tertiary-container: '#fafdfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#22438c'
  secondary-fixed: '#c9e9e5'
  secondary-fixed-dim: '#adcdc9'
  on-secondary-fixed: '#01201e'
  on-secondary-fixed-variant: '#2f4c49'
  tertiary-fixed: '#e0e3e2'
  tertiary-fixed-dim: '#c4c7c6'
  on-tertiary-fixed: '#181c1c'
  on-tertiary-fixed-variant: '#434847'
  background: '#f8faf8'
  on-background: '#191c1b'
  surface-variant: '#e1e3e1'
typography:
  display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
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
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is built for a "calm-consumer" experience, specifically tailored for the often-stressful task of managing subscriptions and financial disputes. The brand personality is supportive, organized, and quietly confident. It seeks to evoke an emotional response of relief and clarity rather than urgency or anxiety.

The visual style is a blend of **Modern Minimalism** and **Soft Tonalism**. By prioritizing generous white space and a muted, naturalistic palette, the interface lowers the user's cognitive load. Interactions are smooth and intentional, reinforcing the feeling that the user is in a safe, controlled environment. Every element is designed to feel approachable and stable, moving away from aggressive fintech aesthetics toward a more "lifestyle-centered" financial wellness tool.

## Colors

This design system utilizes a palette of desaturated, calming tones to reduce visual noise.

*   **Primary (Friendly Indigo):** Used exclusively for primary calls to action and active states. It provides a clear focal point without appearing alarmist.
*   **Secondary (Sage Green):** Used for supportive elements, success states, and secondary navigation. It reinforces a sense of growth and resolution.
*   **Neutral & Background:** The foundation relies on soft grays and off-whites (`#FBFBFB`) to prevent the starkness of pure white, creating a "paper-like" softness.
*   **Functional Colors:** Traditional "warning red" is replaced by deep ochres or soft ambers only when necessary. Most "dispute" or "cancel" actions are treated with neutral or secondary tones to maintain a non-confrontational atmosphere.

## Typography

**Manrope** is selected for its exceptional balance of modern geometry and humanistic warmth. It provides the professional reliability of a geometric sans with the approachability needed for a consumer-facing tool.

*   **Hierarchy:** High contrast in size but low contrast in weight. Large headlines use semi-bold rather than extra-bold to keep the "calm" profile.
*   **Readability:** Line heights are set generously (1.6x for body text) to ensure complex financial information remains digestible and airy.
*   **Labels:** Small utility labels use increased letter spacing and a slightly heavier weight to maintain legibility at small sizes without needing high-contrast colors.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to create a centered, "contained" feeling that suggests order and security. 

*   **Rhythm:** An 8px base unit drives all spacing. For subscription lists and data-heavy views, we use "wide" padding (the `md` and `lg` units) to prevent the UI from feeling cramped.
*   **Grid:** A 12-column grid is used for desktop (max-width 1120px), while mobile transitions to a single-column layout with 16px side margins.
*   **Negative Space:** Significant vertical padding between sections is encouraged to allow the user to focus on one subscription or dispute at a time.

## Elevation & Depth

This design system avoids harsh shadows or deep layers. Instead, it uses **Ambient Tonal Layers** and extremely soft shadows to indicate hierarchy.

*   **Surfaces:** The background is the lowest layer (`#FBFBFB`). Content sits on white cards (`#FFFFFF`).
*   **Shadows:** Shadows are highly diffused with a slight color tint (using the Primary Indigo at 5-8% opacity) to make them feel integrated rather than "floating."
*   **Interaction:** On hover or active states, elevation does not "pop" toward the user; instead, the surface might gain a subtle internal glow or a soft 1px border in the Secondary color.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners which can feel aggressive or institutional.

*   **Base Radius:** 0.5rem (8px) is the standard for inputs, small buttons, and list items.
*   **Large Radius:** Cards and containers use 1rem (16px) to emphasize the "soft" brand profile.
*   **Pill Shapes:** Used specifically for "Status Tags" (e.g., "Active", "Pending") to differentiate them from actionable buttons.

## Components

*   **Buttons:** Primary buttons use the Indigo accent with white text and a slightly larger-than-standard vertical padding for a "cushioned" feel. Secondary buttons use a light sage ghost style.
*   **Cards:** The primary vehicle for subscription data. They feature a 1px border in a very light neutral (`#EDEDED`) and a subtle shadow. They should contain ample internal padding (24px).
*   **Inputs:** Field borders are soft gray, turning into a 2px Sage Green border when focused. Error states use a muted terracotta color rather than bright red, accompanied by helpful recovery micro-copy.
*   **Progress Indicators:** Used for dispute tracking. These should be thick, rounded bars using the Sage Green to indicate movement toward resolution.
*   **Chips/Tags:** Used for subscription categories (e.g., "Entertainment", "Utility"). These use low-saturation background tints with darker text of the same hue to keep the interface colorful but quiet.
*   **Dispute "Timeline":** A specialized component showing the history of a dispute. It uses soft vertical lines and rounded nodes to create a clear, narrative flow of the resolution process.