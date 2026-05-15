---
name: Serene Guardian
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3e494a'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#6e797a'
  outline-variant: '#bdc9ca'
  surface-tint: '#006971'
  primary: '#00666e'
  on-primary: '#ffffff'
  primary-container: '#1d8089'
  on-primary-container: '#f5feff'
  inverse-primary: '#7ed4dd'
  secondary: '#635e54'
  on-secondary: '#ffffff'
  secondary-container: '#eae1d4'
  on-secondary-container: '#696459'
  tertiary: '#5e5c54'
  on-tertiary: '#ffffff'
  tertiary-container: '#77746c'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9af0fa'
  primary-fixed-dim: '#7ed4dd'
  on-primary-fixed: '#002023'
  on-primary-fixed-variant: '#004f55'
  secondary-fixed: '#eae1d4'
  secondary-fixed-dim: '#cdc6b9'
  on-secondary-fixed: '#1e1b13'
  on-secondary-fixed-variant: '#4b463d'
  tertiary-fixed: '#e7e2d8'
  tertiary-fixed-dim: '#cac6bd'
  on-tertiary-fixed: '#1d1c16'
  on-tertiary-fixed-variant: '#494740'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
  gutter: 24px
  container-max-width: 1140px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is rooted in "Active Empathy." It aims to transform the often stressful and clinical process of selecting insurance into a supportive, guided journey. The UI should evoke a sense of protection and emotional steadiness—like a steady hand through a difficult decision.

The design style is a blend of **Minimalism** and **Modern Softness**. It prioritizes high-quality whitespace to reduce cognitive load, utilizing a palette that feels organic rather than synthetic. The visual language avoids sharp edges or aggressive transitions, favoring a "pillowy" aesthetic that communicates safety and warmth for both the pet and the owner.

## Colors

The palette is designed to lower the user's heart rate. 

- **Primary (Gentle Teal):** Used for primary actions and key milestones. It represents health and vitality without the clinical coldness of a pure blue.
- **Secondary & Tertiary (Warm Neutrals):** These creams and soft beiges form the backbone of the UI, used for card backgrounds and container layering to create a soft, non-white workspace.
- **Neutral (Soft Charcoal):** Reserved for typography to ensure high legibility while avoiding the harsh contrast of pure black.
- **Background:** A very light cream that feels more welcoming and premium than a standard white.

## Typography

**Plus Jakarta Sans** is the sole typeface for the design system. Its modern, rounded terminals provide a friendly and optimistic tone that aligns with the "calm-consumer" aesthetic. 

Headlines use a tighter letter-spacing and slightly heavier weights to establish a confident, trustworthy hierarchy. Body text is set with generous line heights (1.6) to ensure comfortable reading, particularly when explaining complex insurance terms. Labels utilize a medium or semi-bold weight to maintain clarity at smaller scales without appearing aggressive.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for the main content area to maintain a sense of order and reliability. On desktop, content is centered within a 1140px container.

A 12-column grid is used for desktop layouts, while mobile transitions to a single-column stack with 20px side margins. Spacing is intentionally generous; vertical "breathing room" between sections (stack-lg) helps prevent the user from feeling overwhelmed by information. Elements are grouped using a tight 8px-based system to create clear visual associations between related pieces of data.

## Elevation & Depth

This design system avoids harsh shadows. Instead, it uses **Ambient Shadows** and **Tonal Layers** to communicate depth:

- **Surface Tiers:** Background elements use the lightest cream, while interactive cards use the secondary beige or pure white to "lift" off the page.
- **Shadow Profile:** Shadows are extremely diffused (30px+ blur) with a very low opacity (5-8%). The shadow color is tinted with a hint of the primary teal (#2D8B94) to keep the depth feeling "organic" rather than grey or muddy.
- **Interactive State:** Upon hover, cards should subtly lift by increasing the shadow spread and slightly shifting the Y-offset, creating a "squishy," responsive physical metaphor.

## Shapes

The shape language is defined by significant **roundedness**. 

Standard UI elements (inputs, small buttons) use a 1rem (16px) radius. Larger containers, such as pricing cards or modal overlays, utilize the `rounded-xl` scale (3rem/48px) to create a soft, protective frame around content. This high-radius approach removes any perceived "danger" from the interface, reinforcing the empathetic brand promise.

## Components

- **Buttons:** Primary buttons are pill-shaped, using the Teal background with white text. Secondary buttons use a thick 2px Teal border with a transparent background.
- **Cards:** Cards are the primary container. They feature a `secondary_color` background, 32px padding, and the `rounded-lg` (2rem) corner radius.
- **Input Fields:** Search and data entry fields are pill-shaped with a soft beige stroke. When focused, the stroke thickens and changes to Teal with a soft glow effect.
- **Chips:** Used for pet categories (e.g., "Dog," "Cat," "Senior"). These are small, pill-shaped elements with a subtle tonal shift from the background.
- **Progress Steppers:** Horizontal bars with rounded ends. The "completed" state uses the Teal color, while the "upcoming" state uses a muted version of the secondary beige.
- **Empty States:** Use soft, hand-drawn-style illustrations of pets to maintain the emotional connection during loading or "no results" scenarios.