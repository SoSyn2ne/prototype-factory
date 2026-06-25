---
name: Kinship Heritage
colors:
  surface: '#fdf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fdf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c17'
  on-surface-variant: '#434845'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#747875'
  outline-variant: '#c4c7c3'
  surface-tint: '#5a605c'
  primary: '#171c19'
  on-primary: '#ffffff'
  primary-container: '#2c312e'
  on-primary-container: '#949995'
  inverse-primary: '#c3c8c3'
  secondary: '#4f6359'
  on-secondary: '#ffffff'
  secondary-container: '#cfe5d9'
  on-secondary-container: '#54675e'
  tertiary: '#1a1b19'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f302e'
  on-tertiary-container: '#979894'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe4df'
  primary-fixed-dim: '#c3c8c3'
  on-primary-fixed: '#181d1a'
  on-primary-fixed-variant: '#434845'
  secondary-fixed: '#d2e7dc'
  secondary-fixed-dim: '#b6cbc0'
  on-secondary-fixed: '#0d1f18'
  on-secondary-fixed-variant: '#384b42'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#fdf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e6e2db'
typography:
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-numeral:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
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
  container-max: 1140px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  unit: 8px
---

## Brand & Style

This design system is built upon a **Premium Editorial** aesthetic tailored for family financial planning and childcare logistics. The brand personality is authoritative yet empathetic, positioning the product as a sophisticated tool for legacy-building and household stability.

The design style merges **Minimalism** with **Modern Corporate** reliability. It prioritizes clarity, utilizing generous whitespace and a restricted color palette to reduce the cognitive load of complex financial data. The emotional response is one of calm confidence—moving away from the frantic energy of "fintech" toward the steady, timeless feel of a legacy broadsheet or a private wealth management journal.

## Colors

The palette is rooted in organic, architectural tones to evoke a sense of permanence and home.

- **Primary (Warm Charcoal):** Used for primary typography and essential structural elements. It provides a softer contrast than pure black, maintaining a premium feel.
- **Secondary (Deep Sage):** A quiet, muted CTA color. It signifies growth and stability without being loud or urgent. Used for primary buttons and positive financial trends.
- **Background (Cream & Stone):** The primary canvas is a warm cream (`#F9F8F4`), providing a classic editorial feel. Secondary containers use "Stone" tones to create subtle grouping.
- **Accent (Muted Navy):** Reserved for data visualization (secondary lines) or links to distinguish them from primary actions.

## Typography

The typography system follows a traditional editorial hierarchy. 

**Source Serif 4** is the voice of authority, used for headlines and section titles. Its transition between thick and thin strokes provides a literary quality.

**Work Sans** handles the utilitarian tasks. As a professional, grounded sans-serif, it ensures that financial figures, data tables, and input fields remain highly legible. Numerical data should use tabular figures when possible to ensure columns of currency align perfectly.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy for desktop to maintain the composed look of a printed journal. 

- **Desktop:** 12-column grid with a 1140px max-width. Large 64px outer margins create a "frame" for the content, emphasizing its importance.
- **Tablet:** 8-column fluid grid with 32px margins.
- **Mobile:** 4-column fluid grid with 20px margins.

Spacing follows an 8px base unit. Vertical rhythm is intentionally loose to allow the "Cream" background to breathe, preventing financial tools from feeling cramped or overwhelming.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows** rather than high-contrast borders.

- **Surface Levels:** The base layer is the cream background. Secondary containers (calculators, widgets) use a slightly darker "Stone" tint to recede or a pure white to lift.
- **Shadows:** Use extremely soft, long-range shadows for elevated cards. Example: `0px 12px 32px rgba(44, 49, 46, 0.04)`. The shadows should feel like natural light hitting a heavy cardstock.
- **Borders:** Hairline borders (0.5pt to 1pt) in a muted stone color are used sparingly to separate data points in tables.

## Shapes

The shape language is **Soft (0.25rem)**. 

While the brand is premium, it avoids sharp, aggressive corners to maintain a "family-friendly" approachability. However, it avoids high roundedness (pills) to keep the aesthetic professional and mature. 

- **Buttons:** Small corner radius (4px) to mimic traditional luxury stationery.
- **Cards:** Slightly larger radius (8px) to soften the footprint of large planning widgets.
- **Inputs:** Square-ish with 4px radius, emphasizing the "form" nature of financial planning.

## Components

### Buttons
Primary buttons use the **Deep Sage** background with white text. Hover states shift toward a slightly darker tone of sage. Secondary buttons are "Ghost" style with a hairline charcoal border and charcoal text.

### Comparison Cards
Cards are the primary vehicle for childcare cost comparisons. They feature a pure white background, a 1px stone border, and a subtle ambient shadow. Headlines within cards use the Serif font, while data points use the bolded Sans-serif.

### Data Tables
Tables avoid alternating row colors. Instead, they use subtle horizontal hairline dividers. Column headers are small, uppercase labels in Work Sans with increased letter spacing for a refined look.

### Planning Widgets
Input-heavy components are grouped in "Stone" colored containers. Sliders and toggles use the Deep Sage color for the active state to provide a clear focal point for user interaction.

### Chips & Tags
Used for "Plan Types" (e.g., *Full-Time*, *Nanny Share*). These should be low-contrast: light stone background with charcoal text, utilizing the small uppercase label style.