---
name: Proscenium Ops
colors:
  surface: '#f9f9fa'
  surface-dim: '#dadadb'
  surface-bright: '#f9f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeef'
  surface-container-high: '#e8e8e9'
  surface-container-highest: '#e2e2e3'
  on-surface: '#1a1c1d'
  on-surface-variant: '#46474a'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#380038'
  on-tertiary-container: '#e800e8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffd7f5'
  tertiary-fixed-dim: '#ffabf3'
  on-tertiary-fixed: '#380038'
  on-tertiary-fixed-variant: '#810081'
  background: '#f9f9fa'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e3'
typography:
  display-theater:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-large:
    fontFamily: Chivo
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-main:
    fontFamily: Chivo
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Chivo
    fontSize: 12px
    fontWeight: '900'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  stage-margin: 48px
  backstage-sidebar: 320px
  gutter: 24px
  unit: 8px
---

## Brand & Style

The design system is built on the conceptual duality of **Stage vs. Backstage**. It reimagines a high-stakes operations environment—Return Fraud Inspection—as a curated theatrical performance. 

The **Stage** represents the primary workspace where decisions are made. It uses high-contrast, bold visuals to demand focus. The **Backstage** represents the technical underpinnings, data streams, and administrative controls, utilizing a more utilitarian, subdued aesthetic.

The design style is a hybrid of **Brutalism** and **High-Contrast Modernism**. It features heavy strokes, sharp edges, and a layout that feels physically structured, like a stage set. The emotional response is one of high-stakes precision, professional drama, and absolute clarity.

## Colors

The palette is strictly limited to create an atmosphere of intense focus.

- **Deep Charcoal (#1A1A1B):** Used for structural elements, heavy borders, and primary text. It represents the "void" of the theater.
- **Crisp White (#FFFFFF):** The spotlight. Used for the primary workspace ("The Stage") and high-priority cards.
- **Vibrant Magenta (#FF00FF):** The "Curtain Call" accent. Reserved exclusively for critical interactive elements, fraud alerts, and primary calls to action.
- **Neutral Grey (#F4F4F5):** Used for the "Backstage" areas to provide a visual break from the high-contrast stage elements.

## Typography

This design system uses a deliberate typographic clash to reinforce the theme.

- **Headlines:** Use **Playfair Display**. Its high-contrast serifs bring a sense of dramatic flair and authoritative "Theater" to the interface.
- **Body & Operations:** Use **Chivo**. A sharp, modern sans-serif that ensures high legibility for dense operational data.
- **Technical Metadata:** Use **JetBrains Mono**. This monospaced font is used for "Backstage" data, timestamps, and ID numbers, emphasizing the technical nature of the inspection process.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. 

- **The Stage:** A central, fluid area with wide margins (`stage-margin`). Content is contained in high-contrast "Set Pieces" (cards) that use a 12-column grid.
- **The Backstage:** Fixed-width sidebars (`backstage-sidebar`) or bottom trays that house secondary controls and technical logs. 

Spacing is based on a rigid 8px system. Use 24px gutters to maintain a "breathable" feel despite the high density of information. On mobile, the Backstage elements collapse into a bottom sheet, and Stage margins reduce to 16px.

## Elevation & Depth

This design system rejects soft gradients and ambient blurs in favor of **Structural Depth**.

- **Bold Borders:** Every interactive container and "Stage" element must have a 2px or 3px Deep Charcoal border.
- **Hard Shadows:** Use "Cast Shadows"—sharp, 100% opacity offsets (e.g., 4px 4px 0px #1A1A1B). This creates a sense of physical layers stacked on a surface.
- **Tonal Layers:** The Backstage uses a subtle grey background (#F4F4F5), while the Stage is always pure White (#FFFFFF), creating a clear "floor level" distinction without using shadows.

## Shapes

The shape language is **Sharp**. 

All buttons, cards, and input fields use 0px border-radius. This reinforces the "Brutalist" and "Technical" feel of an operations tool. The only exception is the "Spotlight" toggle or specific status indicators which may use circular forms to contrast against the otherwise rectangular world.

## Components

### Buttons
- **Primary:** Deep Charcoal background, White text, 2px border. On hover, they shift 2px down and right to "press" the hard shadow.
- **Action (Critical):** Vibrant Magenta background, White text. Used for "Confirm Fraud" or "Finalize Inspection."

### Inspection Cards
Large, White containers with 3px Deep Charcoal borders. These "Set Pieces" hold the core evidence. Use `label-caps` for section headers within the card.

### Inputs
Rectangular, 2px border. Focused state uses a Magenta border. The "Backstage" inputs are slightly smaller (compact) to allow for higher density in technical panels.

### Status Chips
High-contrast labels using `label-technical`. 
- **Suspect:** Magenta background, White text.
- **Verified:** White background, Charcoal text, 2px border.

### The "Cue" List
A dense list component used in the Backstage for navigation. It uses a monospaced font for IDs and a simple hover state that fills the row with a light grey, keeping the "Stage" as the primary focus.