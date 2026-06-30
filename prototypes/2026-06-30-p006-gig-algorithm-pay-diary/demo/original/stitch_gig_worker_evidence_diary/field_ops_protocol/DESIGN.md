---
name: Field Ops Protocol
colors:
  surface: '#f6fafe'
  surface-dim: '#d6dade'
  surface-bright: '#f6fafe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f8'
  surface-container: '#eaeef2'
  surface-container-high: '#e4e9ed'
  surface-container-highest: '#dfe3e7'
  on-surface: '#171c1f'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#edf1f5'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f6fafe'
  on-background: '#171c1f'
  surface-variant: '#dfe3e7'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  touch-target: 44px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 4px
  stack-md: 8px
  stack-lg: 16px
---

## Brand & Style
The design system is engineered for the gig economy worker—individuals operating in high-pressure, mobile environments where data accuracy is a form of labor protection. The brand personality is **utilitarian, transparent, and authoritative**. It functions less like a consumer app and more like a high-precision field tool or legal ledger.

The design style is a hybrid of **High-Contrast Modern** and **Information-Dense Minimalism**. It prioritizes immediate cognitive load reduction through clear hierarchy and "evidence-first" layouts. Every pixel serves to validate a shift, a payment, or a discrepancy. The emotional response should be one of security and empowerment: the UI acts as a reliable witness to the user's work.

## Colors
The palette is strictly functional. We utilize a **high-contrast light mode** as the primary interface to ensure legibility under direct sunlight during field operations. 

- **Primary:** Pure Black (#000000) for text and critical structural elements to maximize contrast ratios.
- **Secondary:** Industrial Blue (#2563EB) for interactive states and primary actions.
- **Surface:** A range of cool greys (Slate/Slate-50) to differentiate rows without losing text clarity.
- **Functional Accents:** Urgent colors (Red for pay gaps, Orange for pending verification) are used sparingly as 8px status indicators or small badges. They must never dominate the screen, acting only as "pings" for the user's attention.

## Typography
We use **Hanken Grotesk** for its sharp, contemporary terminals and exceptional legibility at small sizes. For data-heavy contexts (timestamps, earnings, algorithm IDs), we switch to **JetBrains Mono** to provide a distinct visual "texture" that identifies raw data versus interface labels.

- **Legibility:** All body text maintains a minimum contrast ratio of 7:1.
- **Information Density:** Tight line-heights are used for tabular data to allow more rows per screen, while maintaining 44px hit zones for interactivity.
- **Mobile scaling:** On mobile, headlines shrink slightly to prioritize the horizontal space needed for multi-column data rows.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid** model. On mobile, the system uses a single-column stack with an 8-pixel baseline grid.

- **The 44px Rule:** Every interactive element—whether a checkbox, a row expander, or a button—must occupy a minimum 44x44px touch area to accommodate "one-thumb" use in the field.
- **Row-Based Architecture:** Information is organized into high-contrast horizontal rows. Each row uses internal padding of 12px to maximize the data visible without horizontal scrolling.
- **Breakpoints:** 
    - Mobile (<600px): Full-width cards, 16px side margins.
    - Tablet/Desktop (>600px): 12-column grid, centered 800px max-width "Ledger View" to prevent eye-strain across wide monitors.

## Elevation & Depth
This design system avoids complex shadows and blurs to maintain performance on lower-end mobile devices and visibility in high-glare environments. 

- **Tonal Layering:** Depth is achieved through "Surface Stacking." The background is Slate-50, cards are Pure White, and active/pressed states shift to Slate-100.
- **Low-Contrast Outlines:** Instead of shadows, we use 1px solid borders (#E2E8F0) to define card boundaries.
- **Active State:** A 2px solid Black border is used to indicate "Focus" or "Selected" states, providing unmistakable visual feedback that a physical action has been registered.

## Shapes
The shape language is **Soft (0.25rem)**. While sharp corners feel too aggressive, overly rounded "bubble" shapes undermine the professional, tool-like nature of the app. 

- **Containers:** Standard cards and input fields use a 4px (0.25rem) radius.
- **Checkboxes:** Use a 2px radius—almost sharp—to emphasize the "official" nature of the logs.
- **Buttons:** Large action buttons use the same 4px radius to maintain a cohesive, blocky, and robust aesthetic.

## Components
- **The Protocol Card:** The primary unit of the UI. It features a 1px border, 16px internal padding, and a mandatory "header" area for timestamps or IDs in `data-mono`.
- **Shift Rows:** High-contrast list items. On tap, they expand to show "Algorithm Evidence" (GPS pings, pay calculations). 
- **The 'One-Thumb' Button:** Fixed to the bottom of the viewport on mobile, these are full-width, 56px tall, and use high-contrast fills (Black background with White text).
- **Status Badges:** Small, rectangular tags with `label-caps` text. They use semantic background tints (e.g., 10% opacity Red) with 100% opacity text for the "urgent" anomalies.
- **Checklist States:** Large, custom-styled checkboxes (24x24px) with a heavy 2px stroke. When checked, the entire row background shifts to a very subtle Success-Green tint to confirm the entry is "safe" or "verified."
- **Data Timelines:** Vertical lines connecting "Start Shift" and "End Shift" nodes, using `data-mono` for precise timing down to the second.