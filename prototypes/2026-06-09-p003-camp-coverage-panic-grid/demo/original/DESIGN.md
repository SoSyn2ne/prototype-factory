---
name: Camp Coverage Panic Grid
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#434842'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737872'
  outline-variant: '#c3c8c0'
  surface-tint: '#4f6350'
  primary: '#4d614e'
  on-primary: '#ffffff'
  primary-container: '#657a66'
  on-primary-container: '#f7fff3'
  inverse-primary: '#b6ccb5'
  secondary: '#87503e'
  on-secondary: '#ffffff'
  secondary-container: '#feb59e'
  on-secondary-container: '#794433'
  tertiary: '#765621'
  on-tertiary: '#ffffff'
  tertiary-container: '#916f37'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e9d0'
  primary-fixed-dim: '#b6ccb5'
  on-primary-fixed: '#0d1f11'
  on-primary-fixed-variant: '#384b3a'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#feb59e'
  on-secondary-fixed: '#360f04'
  on-secondary-fixed-variant: '#6b3928'
  tertiary-fixed: '#ffddaf'
  tertiary-fixed-dim: '#ebc080'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#5e410c'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-mobile: 16px
  container-padding-desktop: 40px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is empathetic, organized, and reliable. It aims to transform the chaotic energy of summer scheduling into a structured, manageable experience for parents. The emotional response is one of "calm control"—the UI should feel like a supportive assistant rather than a source of stress.

The design style is **Modern Minimalism with Tactile Softness**. It utilizes generous whitespace, a warm-neutral foundation, and subtle depth to create a sense of order. By avoiding harsh alarms and high-contrast "red-alert" patterns, the design system prioritizes clarity and high trust, using color as a gentle guide rather than a source of anxiety.

## Colors

The palette is rooted in a warm-neutral foundation to reduce ocular strain and cognitive load.

- **Primary (Sage Green):** Used for "Coverage" and successful states. It represents stability and completion.
- **Secondary (Muted Coral):** Used for deadlines and urgent actions. It is distinct enough to notice but muted enough to avoid triggering a "panic" response.
- **Tertiary (Soft Amber):** Used for warnings, pending status, or "almost full" indicators.
- **Neutral (Cream & Soft Beige):** The primary surface colors. Use `#F9F7F2` for the main background and `#FFFFFF` for elevated cards to create soft, tiered depth.
- **Ink (Deep Charcoal):** `#3A3A3A` is used for text to ensure high legibility without the harshness of pure black.

## Typography

This design system uses **Plus Jakarta Sans** across all levels. Its soft, rounded terminals and open apertures provide a welcoming and optimistic feel while remaining highly legible for data-heavy grids.

- **Headlines:** Use Bold or SemiBold weights with tighter letter spacing for a grounded, authoritative look.
- **Body:** Use Regular weight with generous line height (1.5x+) to ensure lists of camp details are easy to scan.
- **Labels:** Use SemiBold in smaller sizes for badges and metadata to maintain hierarchy within dense card layouts.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a focus on "grouping" information into logical sections.

- **Grid:** On desktop, use a 12-column grid. On mobile, use a single-column stack.
- **Margins:** Large outer margins (40px on desktop) help focus the user's attention on the central "Panic Grid" content.
- **Rhythm:** Use an 8px base unit. Component internal padding should default to 16px or 24px to maintain a spacious, breathable feel.
- **Reflow:** On smaller screens, horizontal "grid" views should transform into vertically stacked "schedule cards" to ensure critical dates remain legible.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. 

- **Background:** The base layer is the warmest neutral (`#F9F7F2`).
- **Cards:** Secondary surfaces (cards) use pure white to pop forward.
- **Shadows:** Use extremely soft, low-opacity shadows (e.g., `y: 4, blur: 20, opacity: 0.04`) with a slight warm tint. This creates a "resting" effect on the page rather than a floating one.
- **Focus:** Interactive elements use a subtle inner glow or a 1px soft-beige border rather than heavy outlines to maintain the calm aesthetic.

## Shapes

The shape language is defined by **pronounced roundedness**. 

- **Cards & Containers:** Use `rounded-2xl` (1.5rem) to evoke a friendly, approachable, and safe feeling.
- **Buttons & Inputs:** Use `rounded-lg` (1rem) to maintain consistency while ensuring they are distinct from larger containers.
- **Status Badges:** Use fully rounded (pill) shapes for status indicators (e.g., "Covered", "Waitlist") to differentiate them from actionable elements.

## Components

- **Buttons:** Primary buttons use Sage Green with white text. Secondary buttons use a ghost style with a Soft Beige border. Avoid sharp corners; keep them soft and inviting.
- **Status Badges:** Use a "soft-fill" approach: a light tint of the status color for the background with the dark version for the text (e.g., light-sage background with dark-sage text).
- **Progress Meters:** Used for "Registration Completion." These should feature soft gradients (e.g., Sage to Light Sage) and rounded tracks to feel rewarding rather than clinical.
- **Panic Grid Cards:** The central component. Each card represents a week of summer. If a week is "Uncovered," the card uses a subtle dashed border in Muted Coral. If "Covered," it uses a solid Sage Green accent on the left edge.
- **Input Fields:** Use a warm-gray background with a soft-beige border. On focus, the border transitions to Sage Green. Labels should always be visible above the field for clarity.
- **Empty States:** Use friendly illustrations in the brand's secondary colors and "low-stress" copy (e.g., "No camps added yet. Let's find some fun!").