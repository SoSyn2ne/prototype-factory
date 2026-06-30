---
name: Premium Editorial Advocacy
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#506354'
  on-secondary: '#ffffff'
  secondary-container: '#d0e5d2'
  on-secondary-container: '#546758'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d3e8d5'
  secondary-fixed-dim: '#b7ccb9'
  on-secondary-fixed: '#0e1f13'
  on-secondary-fixed-variant: '#394b3d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

This design system establishes a high-fidelity, editorial atmosphere for a consumer advocacy platform. The visual direction balances the authoritative weight of traditional investigative journalism with the streamlined efficiency of modern SaaS. 

The aesthetic is **Refined Minimalism**. It leverages heavy whitespace, intentional asymmetry, and a rigorous typographic hierarchy to evoke a sense of trust and "quiet power." The emotional response should be one of serious empathy; the UI stays out of the way of the user's "confession" while providing a sophisticated framework that validates their experience. Elements are crisp, layouts are structured like a premium broadsheet, and interactions are deliberate and smooth.

## Colors

The palette is rooted in high-contrast neutrality to ensure maximum legibility and an "ink-on-paper" feel. 

- **Primary (Ink Black):** Used for all primary headlines, icons, and heavy strokes. It provides the "authoritative" anchor for the brand.
- **Secondary (Deep Forest Green):** Reserved exclusively for action-oriented elements (CTAs, success states, and primary buttons). It is a "quiet" accent that feels grounded and professional.
- **Surface (Light Grey):** Used for card backgrounds and secondary containers to subtly separate content from the primary white background.
- **Border:** A hairline grey used to define structure without adding visual clutter.

## Typography

The typography is the core of this design system’s identity. It uses a "high-low" pairing strategy:

- **Headlines (Playfair Display):** These should be treated as editorial statements. Use tight tracking and generous line heights for larger displays. In mobile views, scale down display sizes aggressively to maintain readability.
- **Body & Labels (Inter):** A utilitarian, neutral counterpoint. For long-form confessions, `body-lg` is preferred to provide a comfortable, premium reading experience.
- **Labels:** Always use `label-md` for metadata, category tags, and small headers to create a distinct visual break from body text.

## Layout & Spacing

This design system utilizes a **Fixed Grid** layout for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

- **Whitespace as a Tool:** Spacing should be generous. Use `section-gap` to separate different phases of the "Confession" flow.
- **Vertical Rhythm:** Follow an 8px base unit. Headlines should have a larger `stack-lg` margin-bottom to emphasize the editorial start of a content block.
- **Card Padding:** Cards should use internal padding of 32px on desktop to feel like spacious magazine inserts.

## Elevation & Depth

To maintain the "Premium-Editorial" feel, this design system avoids heavy shadows or neon blurs. Depth is achieved through **Tonal Layers** and **Low-Contrast Outlines**:

- **Layer 0 (Background):** Pure White (#FFFFFF).
- **Layer 1 (Cards/Containers):** Light Grey (#F9F9F9).
- **Definition:** Instead of shadows, use 1px solid borders (#E5E5E5) to define card boundaries.
- **Interactions:** On hover, a card may transition to a 2px Border (Ink Black) or apply a very subtle, sharp "architectural" shadow (0px 4px 0px rgba(0,0,0,0.05)) to simulate a physical sheet of paper being lifted.

## Shapes

The shape language is **Sharp (0)**. 

To reinforce the professional and authoritative tone, all buttons, input fields, and cards utilize 90-degree corners. This evokes the feeling of architectural blueprints and printed news columns. The only exception is the use of small, circular icons where necessary, but these should be contained within square enclosures.

## Components

- **Buttons:** Primary buttons are solid `Deep Forest Green` with white `Inter` uppercase text. They are strictly rectangular. Secondary buttons are transparent with a 1px `Ink Black` border.
- **Input Fields:** Use "Underline" style or full-box with 1px `Light Grey` borders. Focus states should switch the border to `Ink Black` with a subtle increase in stroke weight.
- **Cards:** Used for individual confessions or advocacy tips. They feature a white background on the light grey surface, or light grey on white. Headlines within cards should use `headline-md`.
- **Chips/Tags:** Small, rectangular boxes with a `Light Grey` fill and `caption` text. Used for categorizing types of "Rage" (e.g., "SaaS Subscription," "Hidden Fees").
- **Quote Blocks:** For highlighting specific "confession" snippets, use a large serif quote mark in `Deep Forest Green` and `body-lg` italicized text, indented 32px from the left margin.