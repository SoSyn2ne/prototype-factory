---
name: Serene Hearth
colors:
  surface: '#f7fafd'
  surface-dim: '#d7dadd'
  surface-bright: '#f7fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f7'
  surface-container: '#ebeef1'
  surface-container-high: '#e5e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#181c1e'
  on-surface-variant: '#404943'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f4'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#006c48'
  on-secondary: '#ffffff'
  secondary-container: '#92f7c3'
  on-secondary-container: '#00734d'
  tertiary: '#0d5237'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c6a4e'
  on-tertiary-container: '#a7e7c4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#92f7c3'
  secondary-fixed-dim: '#75daa8'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005235'
  tertiary-fixed: '#b0f1cc'
  tertiary-fixed-dim: '#94d4b1'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#0c5136'
  background: '#f7fafd'
  on-background: '#181c1e'
  surface-variant: '#e0e3e6'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
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
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 40px
  gutter: 16px
  section-gap: 48px
  element-gap: 12px
---

## Brand & Style

The design system is centered on the "calm-consumer" philosophy, specifically tailored for family planning and educational decision-making. The goal is to dismantle the high-pressure environment associated with private education (사교육) by replacing urgency with clarity and anxiety with agency.

The visual style is **Soft Minimalist** with a focus on breathing room and organic flow. It utilizes generous whitespace and a "low-cognitive-load" architecture to ensure users feel supported rather than overwhelmed. The emotional response should be one of quiet confidence—moving away from the frantic, data-heavy competitive landscapes toward a structured, analytical, and shame-free sanctuary.

## Colors

The palette is anchored in forest and sea-foam greens to promote a physiological sense of calm. 

- **Primary (#2D6A4F):** Used for authoritative elements, primary actions, and deep typography to establish trust.
- **Secondary (#52B788):** A softer green used for progress indicators, success states, and secondary call-to-actions.
- **Surface (#F8F9FA):** An off-white base that prevents the clinical feeling of pure white while maintaining high legibility.
- **Neutral/Card (#E9ECEF):** A warm, cool-toned grey-blue used to distinguish content containers without the heavy "yellow" undertones of traditional beige.

## Typography

This design system uses **Plus Jakarta Sans** for headings to inject a friendly, rounded, and approachable energy into the interface. This balances the professional nature of the content with a sense of accessibility. 

**Work Sans** is utilized for all body copy and functional labels. Its grounded and straightforward character ensures that complex data regarding education and family finances remains clear and legible. Line heights are intentionally generous (1.5x - 1.6x) to increase readability and reduce the "wall of text" effect that contributes to user stress.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with strict maximum widths to prevent content from becoming unreadable on ultra-wide displays. 

- **Mobile:** A 4-column grid with 20px margins.
- **Desktop:** A 12-column grid centered in a 1200px max-width container.
- **Rhythm:** We use an 8px base unit. To promote "breathing room," vertical section spacing should lean toward larger increments (e.g., 48px or 64px) to separate distinct family-planning modules. Content inside cards should never feel "packed"; use a minimum of 24px internal padding for all containers.

## Elevation & Depth

To maintain a soft and supportive feel, this design system avoids harsh borders. Instead, it uses **Ambient Shadows** and **Tonal Layers**.

- **Surface Tiers:** The main background is the lightest (#F8F9FA). Primary cards use the neutral tone (#E9ECEF) to create a subtle recessed look or are pure white with a very soft shadow to appear elevated.
- **Shadow Profile:** Shadows should be highly diffused with a low opacity (e.g., `box-shadow: 0 10px 30px rgba(45, 106, 79, 0.08)`). The shadow color is slightly tinted with the Primary Green to maintain harmony with the brand palette.
- **Transitions:** Depth changes are gradual. Hover states should feel like a gentle "lift" rather than a sharp pop.

## Shapes

The shape language is defined by high-radius corners to evoke safety and friendliness. 

- **Standard Elements:** Buttons and small inputs use a 0.5rem (8px) radius.
- **Cards & Containers:** Use `rounded-lg` (16px) or `rounded-xl` (24px) to create a "nested" and protective feel.
- **Interactive Pill:** Progress bars and selection chips use a full pill-shape to differentiate them from structural content containers.

## Components

### Buttons
Primary buttons use the deep green (#2D6A4F) with white text for high contrast. Secondary buttons use a transparent background with a 1.5px border of the primary color. Action states (hover/active) should slightly deepen the color and increase the shadow spread to provide clear tactile feedback.

### Cards
Cards are the primary vehicle for data visualization. They feature 24px internal padding and 16px corner radii. Use the neutral color (#E9ECEF) for secondary cards and white for primary, "active" cards.

### Input Fields
Inputs should feel spacious. Use a 16px font size to prevent iOS zoom-on-focus and 12px/16px padding. The border color should be a soft version of the neutral tone, changing to Primary Green on focus with a subtle glow.

### Chips & Tags
Used for categorizing educational expenses or goals. These should be pill-shaped with a light tint of the secondary color (#52B788 at 10% opacity) and dark green text.

### Progress Indicators
Progress bars should be thick (8px-12px) with rounded ends, using the secondary color (#52B788) for the fill and the neutral color for the track. This provides a clear, non-threatening visual of "journey completion."