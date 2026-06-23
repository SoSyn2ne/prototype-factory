---
name: Serene Data Health
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414845'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#717975'
  outline-variant: '#c1c8c3'
  surface-tint: '#436559'
  primary: '#436559'
  on-primary: '#ffffff'
  primary-container: '#7da193'
  on-primary-container: '#15372d'
  inverse-primary: '#a9cfbf'
  secondary: '#5f5e59'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2db'
  on-secondary-container: '#65645f'
  tertiary: '#685d4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#a59784'
  on-tertiary-container: '#393021'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5ebdb'
  primary-fixed-dim: '#a9cfbf'
  on-primary-fixed: '#002118'
  on-primary-fixed-variant: '#2b4d42'
  secondary-fixed: '#e5e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#f0e0cb'
  tertiary-fixed-dim: '#d4c4b0'
  on-tertiary-fixed: '#221a0d'
  on-tertiary-fixed-variant: '#504536'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 12px
    fontWeight: '500'
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
  base: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is rooted in digital restoration and cognitive ease. This design system treats health data as a private sanctuary, aiming to reduce the anxiety typically associated with "detoxing" or monitoring. The target audience includes privacy-conscious individuals and wellness enthusiasts seeking a balanced relationship with their technology.

The design style is a blend of **Minimalism** and **Tactile Softness**. It prioritizes heavy white space (breathability) and a "Paper & Stone" aesthetic—mimicking the physical quality of high-end stationery. Every interaction is designed to feel intentional and quiet, avoiding the frantic urgency of typical notification-driven apps.

## Colors

The palette is anchored in a "Calm Accent" of Sage Green (#7DA193) used exclusively for restorative or positive states. The background is a warm, off-white Cream (#FDFCFB) to reduce eye strain and blue-light stimulation.

- **Primary (Sage):** Used for "Success" states, active progress bars, and primary CTAs.
- **Secondary (Parchment):** Used for card backgrounds and secondary containers to create subtle contrast against the main surface.
- **Risk Hierarchy:** Warnings use a muted Amber (#E8B07E) and errors use a dusty Rose (#D98E8E). These are intentionally de-saturated to inform the user without triggering a "fight or flight" response.
- **Neutrals:** Text is rendered in a soft Charcoal (#5C5C5C) rather than pure black to maintain a low-contrast, gentle reading experience.

## Typography

The system utilizes a dual-font approach to balance modernity with extreme legibility. 

- **Manrope** is used for headlines to provide a clean, geometric, and trustworthy structure. It feels professional yet balanced.
- **Atkinson Hyperlegible Next** is used for all body copy and data labels. Given the "health data" context, it ensures that figures and metrics are unambiguous and easy to read for all users.

Headline weights are kept at 600 (Semi-bold) to provide hierarchy without feeling aggressive. Body copy uses generous line heights (1.5x+) to maximize the "breathable" feel of the journal aesthetic.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** for desktop (max-width 1200px) and a fluid, single-column stack for mobile. 

The "Spaciousness" narrative is achieved through a "Large Stack" rule: sections of data should be separated by a minimum of 48px to allow the user's eyes to rest. 

- **Mobile:** 20px side margins to prevent content from feeling cramped against the screen edges.
- **Tablet/Desktop:** A 12-column grid with 24px gutters. Cards should never span the full width unless they are high-level summaries; instead, they should be grouped into logical clusters to maintain a journal-like modularity.

## Elevation & Depth

This design system avoids high-contrast shadows. Depth is communicated through **Tonal Layers** and **Ambient Shadows**.

1.  **Surface (Level 0):** The primary background (#FDFCFB).
2.  **Card (Level 1):** A slightly darker/warmer tint (#F4F1EA) with a very diffused, 10% opacity shadow (Blur: 20px, Y: 4px). This creates a "soft paper" effect.
3.  **Active/Floating (Level 2):** Used for modals or active selection. Uses a slightly tighter shadow with a hint of the Primary Sage color in the shadow tint to signal life.

Avoid borders where possible; let the subtle color shifts between the background and cards define the edges.

## Shapes

The shape language is consistently **Rounded**. Hard corners are eliminated to maintain the "soft" brand promise.

- **Cards & Containers:** Use `rounded-lg` (1rem / 16px) to feel substantial but approachable.
- **Buttons & Chips:** Use `rounded-xl` (1.5rem / 24px) or full pill-shapes to invite touch.
- **Input Fields:** Match the card roundedness for consistency.

The curves should feel organic, like pebbles worn smooth by water, reinforcing the "calm-consumer" theme.

## Components

### Buttons
- **Primary:** Sage Green background with White text. Pill-shaped. No sharp shadows; use a subtle inner-glow to give a tactile "pressed" feel.
- **Secondary:** Transparent with a Sage Green 1.5px border.
- **Tertiary:** Text-only in Neutral Gray for low-priority actions like "Cancel" or "Skip."

### Cards
Cards are the "Wellness Journal" pages. They must always have 24px of internal padding. Use "Secondary" color for the card surface. Data within cards should be grouped with "Stack-sm" spacing.

### Input Fields
Soft parchment-colored backgrounds with no borders. Focus states are indicated by a 2px Sage Green bottom-border or a soft Sage outer glow. Labels are always placed above the field in "Label-md" style.

### Chips & Tags
Used for data categories (e.g., "Screen Time," "Social Sync"). They are pill-shaped with low-saturation pastel backgrounds matching the risk hierarchy (e.g., a very faint Amber for a "Caution" tag).

### Progress Indicators
Progress bars should be thick (8px+) with fully rounded ends. The "Track" should be a very faint version of the background, and the "Indicator" should be the Calm Sage Green. No "loading" spinners; use "shimmer" pulses on the soft card surfaces instead.