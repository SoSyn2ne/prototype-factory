---
name: Authentic Provenance System
colors:
  surface: '#fbf9f7'
  surface-dim: '#dbdad8'
  surface-bright: '#fbf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f2'
  surface-container: '#efedec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#636564'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#281900'
  on-tertiary-container: '#9e7f4c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c7c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#e6c188'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#5b4215'
  background: '#fbf9f7'
  on-background: '#1b1c1b'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

This design system is built on the principles of **Premium Editorial Minimalism**. It targets a high-trust audience of creators and collectors where authenticity is the primary currency. The visual language moves away from the frantic energy of typical tech platforms, instead embracing a "quiet" aesthetic that mirrors the gravitas of a physical ledger or a prestigious art publication.

The style leverages **high-contrast layouts** and **intentional whitespace** to frame content as significant. It uses a "textured minimalist" approach—where the interface feels tangible through the use of fine lines, subtle grain, and thoughtful layering rather than heavy shadows or bright gradients. The emotional goal is to evoke a sense of permanence, security, and intellectual rigor.

## Colors

The palette is anchored in a high-contrast relationship between **Deep Charcoal** (#1A1A1A) and **Stone** (#F5F5F4). This creates a sophisticated, paper-like backdrop that emphasizes readability and reduces eye strain.

- **Primary (Deep Charcoal):** Used for primary typography, borders, and high-emphasis UI elements. It represents the "ink" of the ledger.
- **Secondary (Stone):** The primary canvas color. It provides a warmer, more human feel than pure white, suggesting archival quality.
- **Tertiary (Brass):** Reserved for moments of "truth"—verification badges, highlights, and status indicators that signify human-provenance.
- **Neutral (Slate Gray):** Used for secondary meta-data and UI borders to maintain hierarchy without cluttering the visual field.

## Typography

The typography strategy employs a **Transitional Serif** for expression and a **Geometric Sans-Serif** for utility.

- **Playfair Display** is the voice of the brand. It is used for headlines and large display quotes to convey heritage and editorial authority.
- **Inter** provides the functional backbone. It handles data-heavy tables, body copy, and navigation with clinical precision.

**Data Presentation:** For ledger entries and timestamps, use the `data-mono` style. While Inter is not monospaced, its tabular figures should be enabled to ensure numerical alignment in proof logs. Large headlines should utilize tight letter-spacing to maintain a sophisticated "ink-on-paper" look.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the feel of a structured ledger, transitioning to a fluid model on smaller viewports.

- **Desktop:** A 12-column grid with a generous 64px outer margin. Content is often centered or offset to create an asymmetric, editorial rhythm.
- **Sectioning:** Vertical rhythm is driven by wide "Section Gaps" (80px+) to ensure the "quiet" brand personality is felt through whitespace.
- **The "Rule of Fine Lines":** Instead of using background blocks to separate content, use 1px Deep Charcoal or Slate Gray borders. This mimics the ruled lines of a high-end ledger.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layers** and **Refined Outlines**. 

- **Surface Tiers:** The base layer is Stone (#F5F5F4). Elevated elements (like cards or proof-modals) utilize a pure White (#FFFFFF) background to subtly lift them from the page.
- **Interaction Depth:** When an element is focused or hovered, use a 1px solid Deep Charcoal border. 
- **Shadows:** If shadows must be used for critical utility, they must be "Ambient": 0px offset, 4px blur, and 5% opacity Deep Charcoal. They should be nearly imperceptible, serving only to define a boundary.
- **Backdrop:** For overlays, use a Deep Charcoal wash at 20% opacity with a light background blur (4px) to maintain the "Glassmorphism" of high-end stationery.

## Shapes

The shape language is **Sharp (0)**. 

To reinforce the concept of a "Ledger" and "Proof," the UI uses hard 90-degree corners for all primary containers, buttons, and input fields. This communicates precision, structural integrity, and a non-frivolous nature. 

Small exceptions may be made for **Chips or Disclosure Badges**, which can utilize a 2px radius to provide a slight visual distinction from actionable buttons, but the overall system should feel architectural and rigid.

## Components

### Proof Cards
The cornerstone of the UI. These cards feature a 1px border. The header uses Brass (#B5945F) for the "Verified Human" mark. All metadata within the card is set in `data-mono` Inter.

### Action Buttons
Primary buttons are solid Deep Charcoal with Stone text. They have no rounded corners. Secondary buttons use a 1px Deep Charcoal outline. The "hover" state for primary buttons involves a shift to the Brass color to signify the value of the action.

### Disclosure Badges
Used for showing provenance levels. These are small, Stone-colored boxes with a 1px Gray border. They use `label-sm` typography.

### Timeline Elements
A vertical 1px line in Deep Charcoal connects ledger events. The nodes are small Brass squares (not circles) to maintain the sharp geometric theme.

### Input Fields
Fields are represented by a single bottom-border (1px) in Deep Charcoal, mimicking a signature line. Labels sit above in `label-sm` and float or minimize upon interaction.