---
name: Camp Hidden Cost Truce
colors:
  surface: '#faf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#faf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1b1c19'
  on-surface-variant: '#464740'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#77786f'
  outline-variant: '#c7c7bd'
  surface-tint: '#5c614d'
  primary: '#535845'
  on-primary: '#ffffff'
  primary-container: '#6b705c'
  on-primary-container: '#eff4db'
  inverse-primary: '#c4c9b1'
  secondary: '#75593a'
  on-secondary: '#ffffff'
  secondary-container: '#fdd6ae'
  on-secondary-container: '#785b3c'
  tertiary: '#565747'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e6f5e'
  on-tertiary-container: '#f3f3de'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e5cc'
  primary-fixed-dim: '#c4c9b1'
  on-primary-fixed: '#191d0e'
  on-primary-fixed-variant: '#444937'
  secondary-fixed: '#ffddbb'
  secondary-fixed-dim: '#e5c099'
  on-secondary-fixed: '#2b1701'
  on-secondary-fixed-variant: '#5c4224'
  tertiary-fixed: '#e4e4cf'
  tertiary-fixed-dim: '#c8c8b4'
  on-tertiary-fixed: '#1b1d10'
  on-tertiary-fixed-variant: '#474839'
  background: '#faf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e3de'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality is grounded, supportive, and radically transparent. It aims to transform the high-stress seasonal planning of summer camps into a manageable, calm experience for parents. The design style follows a **Modern-Minimalist** approach with **Tactile** undertones, emphasizing clarity over complexity. 

The emotional response should be one of "quiet confidence"—moving away from the frantic nature of financial spreadsheets toward a reflective, editorial feel. We achieve this through generous whitespace, a high degree of legibility, and a soft visual language that reduces the cognitive load associated with complex cost calculations.

## Colors
The palette is built on a foundation of warm neutrals to evoke a sense of home and stability. 
- **Primary (Sage Green):** Used for primary actions, progress indicators, and "value" highlights. It represents growth and calm decision-making.
- **Secondary (Soft Terracotta):** Reserved for subtle alerts or secondary CTAs that require gentle attention without signaling "danger."
- **Neutral (Cream & Warm Grey):** The canvas of the design. We use `#F8F7F2` for the main background to reduce eye strain compared to pure white.
- **Text:** High-contrast but warm charcoal (`#3F3F37`) ensures maximum readability for data-heavy financial tables.

## Typography
We utilize a dual-font strategy to balance empathy with precision.
- **Headings (Literata):** A soft, friendly serif that feels literary and authoritative. This reduces the "coldness" of financial software.
- **Body & UI (Inter):** A clean, systematic sans-serif for functional elements. For financial figures, use tabular numbers (`tnum`) to ensure columns of prices align perfectly for easy comparison.
- **Hierarchy:** Use larger headlines for emotional guidance and clear, mid-sized sans-serif labels for specific camp data and fees.

## Layout & Spacing
The layout follows a **Fixed Grid** on desktop (12 columns) to maintain a focused, contained feeling, and a **Fluid Grid** on mobile to ensure accessibility. 

- **Breathing Room:** Avoid crowding elements. Use `stack-lg` (48px) between major calculation sections to allow the user to digest one set of costs before moving to the next.
- **Sectioning:** Group related costs (e.g., "Transportation Fees") within a single card-like container with internal `stack-sm` (12px) spacing for line items.
- **Mobile:** Transition to a single-column stack. Increase touch targets for all interactive cost-toggles to at least 44px.

## Elevation & Depth
To maintain a "calm" atmosphere, we avoid high-contrast shadows or harsh borders. 
- **Tonal Layers:** Use subtle background shifts (e.g., a slightly darker warm-grey container on the cream background) to define areas.
- **Ambient Shadows:** For active states or floating "Total Cost" summaries, use a very soft, diffused shadow: `0px 4px 20px rgba(63, 63, 55, 0.05)`.
- **Low-Contrast Outlines:** Use 1px solid borders in the Tertiary color (`#B7B7A4`) for input fields and camp selection cards to provide structure without visual noise.

## Shapes
A consistent **Rounded** (0.5rem / 8px) corner radius is applied to all primary UI elements. This eliminates the "sharpness" of traditional financial software.
- **Cards & Containers:** Use `rounded-lg` (16px) for main content blocks to create a friendly, approachable container.
- **Interactive Elements:** Buttons and input fields use the standard 8px radius to feel tactile and modern.

## Components
- **Buttons:** Primary buttons use the Sage Green background with white text. Secondary buttons use a ghost style with a subtle Tertiary border.
- **Input Fields:** Use a subtle warm-grey fill (`#F0EFEA`) with no border until focused. Upon focus, the border becomes the Sage Green primary color.
- **Cost Chips:** Small, rounded labels used to categorize "Hidden Fees" vs "Base Price." These should use low-saturation background tints of the primary/secondary colors.
- **Comparison Cards:** Large containers used for "Camp A vs Camp B." Use `rounded-lg` and a subtle ambient shadow to make the preferred "Value Choice" stand out.
- **The "Truce" Slider:** A custom range-slider for budget tradeoffs, using a thick, soft track and a large, tactile circular handle for ease of use on mobile.
- **Value Progress Bar:** A thick, rounded horizontal bar showing how much of the "hidden cost" has been accounted for, using the Sage Green to represent completion.