---
name: Calm-Consumer Utility Decoder
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#3e4946'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#6e7a76'
  outline-variant: '#bdc9c5'
  surface-tint: '#006b5e'
  primary: '#005e53'
  on-primary: '#ffffff'
  primary-container: '#00796b'
  on-primary-container: '#a1feec'
  inverse-primary: '#7ad7c6'
  secondary: '#516161'
  on-secondary: '#ffffff'
  secondary-container: '#d4e6e5'
  on-secondary-container: '#576867'
  tertiary: '#704c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f6300'
  on-tertiary-container: '#ffeacf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#97f3e2'
  primary-fixed-dim: '#7ad7c6'
  on-primary-fixed: '#00201b'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#d4e6e5'
  secondary-fixed-dim: '#b8cac9'
  on-secondary-fixed: '#0e1e1e'
  on-secondary-fixed-variant: '#3a4a49'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#ffba38'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#faf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  headline-xl:
    fontFamily: Public Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 64px
  stack-gap: 16px
---

## Brand & Style

The brand personality is rooted in empathy, clarity, and quiet authority. Dealing with utility bills is often a source of anxiety; the design system aims to diffuse this "bill shock" through a **Calm-Consumer** aesthetic. It blends elements of **Minimalism**—to reduce cognitive load—with **Corporate Modern** reliability to ensure users feel their financial data is being handled by a professional entity.

The visual direction prioritizes breathing room, high legibility, and a soft, non-threatening interface. The goal is to transform a stressful administrative task into a guided, manageable experience that feels more like a supportive conversation than a technical audit.

## Colors

The palette is designed to be "thermally" balanced—cool primary tones to lower the user's stress level, countered by warm neutrals to avoid a clinical or cold feel.

- **Primary Teal (#00796B):** Used for primary actions, headings, and active states to signal confidence and growth.
- **Secondary Soft Teal (#E0F2F1):** Used for large surface areas, background fills for cards, and subtle highlights.
- **Warm Neutrals (#F7F6F3, #FCFBF9):** These off-white and warm grey tones reduce the harsh contrast of pure white, minimizing eye strain during long periods of data review.
- **Semantic Alerts:** Amber (#FFB300) and Soft Red (#D32F2F) are reserved strictly for critical deadlines or high-priority dispute warnings. These should always be paired with secondary background tints to soften their impact.

## Typography

The design system utilizes **Public Sans** for its institutional clarity and high readability across both numerical data and long-form instructional text.

A generous line height (1.6 for body text) is mandatory to ensure information doesn't feel "cramped," which can contribute to user overwhelm. Headings use a tighter line height and slight negative letter spacing to feel grounded and structured. For financial figures, use the medium weight to ensure tabular data remains clear without appearing aggressive.

## Layout & Spacing

This design system follows a **Fixed Grid** philosophy for desktop to maintain a readable line length for financial reports, transitioning to a **Fluid Grid** for mobile devices.

The layout model emphasizes vertical rhythm with a "spacious-first" approach:
- **Desktop:** 12-column grid with wide 48px margins to frame the content centrally.
- **Mobile:** 4-column grid with 16px margins.
- **Stacking:** Elements within a card should use a 16px (2 unit) gap, while major sections are separated by a 64px (8 unit) gap to clearly delineate different phases of the "decoder" process.

## Elevation & Depth

Visual hierarchy is established through a combination of **Tonal Layers** and **Ambient Shadows**.

1.  **Background Layer:** The warm neutral surface (#FCFBF9).
2.  **Card Layer:** Pure white surfaces with a very soft, diffused shadow (12px blur, 4% opacity, tinted with the primary teal) to create a subtle "lift" without looking heavy.
3.  **Interactive Layer:** Primary buttons and active inputs use a slightly more defined shadow to invite interaction.
4.  **Floating Layer:** Modals and tooltips use a secondary backdrop blur (Glassmorphism) to maintain context of the underlying data while focusing the user's attention.

## Shapes

The shape language is consistently **Rounded**. A 0.5rem (8px) base radius is applied to standard components like input fields and small buttons. Larger "Step Cards" and container elements utilize a 1rem (16px) or 1.5rem (24px) radius to emphasize the friendly, non-industrial nature of the app. This softness is a key psychological tool in making complex utility data feel approachable.

## Components

### Step Cards
The core of the experience. These containers should feature a top-accent border (4px) in the secondary color to indicate progress. They should include internal padding of at least 32px to maintain the "reassuringly spacious" feel.

### Confidence Badges
Small, pill-shaped labels used to indicate the reliability of a bill scan.
- **High:** Soft teal background with dark teal text.
- **Medium:** Soft blue background with navy text.
- **Low:** Soft amber background with burnt orange text.

### Buttons
- **Primary (Upload/Dispute):** High-contrast Primary Teal (#00796B) with white text. Bold and authoritative.
- **Secondary:** Outlined buttons with a 1.5px stroke in Primary Teal.
- **Ghost:** Used for "Cancel" or "Go Back" to reduce visual noise.

### Input Fields
Large, easy-to-tap fields with 16px internal padding. Focus states should use a 2px Primary Teal glow. Use secondary labels (Label-sm) to provide helpful hints inside the field context.

### Data Visualization
Charts must use a simplified aesthetic. Avoid complex 3D or multi-colored bar charts. Use monochromatic teal scales for "current usage" and reserve Amber for "unexpected spikes." Grid lines in charts should be extremely faint (Primary Teal at 10% opacity).