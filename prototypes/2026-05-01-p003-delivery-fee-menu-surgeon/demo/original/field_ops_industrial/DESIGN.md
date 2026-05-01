---
name: Field Ops Industrial
colors:
  surface: '#0c1322'
  surface-dim: '#0c1322'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1d'
  surface-container-low: '#141b2b'
  surface-container: '#191f2f'
  surface-container-high: '#232a3a'
  surface-container-highest: '#2e3545'
  on-surface: '#dce2f7'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dce2f7'
  inverse-on-surface: '#293040'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#ffe083'
  on-secondary: '#3c2f00'
  secondary-container: '#eec200'
  on-secondary-container: '#645000'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#ff817a'
  on-tertiary-container: '#7e000f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#0c1322'
  on-background: '#dce2f7'
  surface-variant: '#2e3545'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  touch-target: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-tablet: 24px
  card-padding: 20px
---

## Brand & Style

This design system is built for the high-stakes, high-velocity environment of restaurant operations. It adopts a **"Field-Ops"** aesthetic—a fusion of **Industrial Brutalism** and **Tactical Minimalism**. The UI is designed to feel like a ruggedized military tablet or a piece of heavy machinery: reliable, urgent, and indestructible.

The emotional response should be one of "command and control." By using heavy borders, high-contrast indicators, and a dark-mode-first approach, the interface reduces cognitive load in brightly lit or chaotic kitchen environments. Every element prioritizes function over form, ensuring that "surgeons" can make critical pricing decisions with zero ambiguity.

## Colors

The palette is anchored in a **Deep Charcoal (#020617)** background to eliminate glare and emphasize high-visibility functional colors. 

- **Surgical Blue (#06B6D4):** Used for primary actions, navigation, and "precision" tools. It represents the "surgeon’s blade."
- **Warning Yellow (#FACC15):** Reserved for items requiring immediate attention or pending reviews. It signifies caution.
- **Urgent Red (#EF4444):** Specifically used to highlight margin loss, negative trends, and "Delist" actions.
- **Industrial Green (#22C55E):** Communicates healthy margins and "Keep" status with high saturation to stand out against the dark canvas.
- **Borders & Dividers:** Use a high-contrast Slate (#334155) to maintain the structural "rugged" look.

## Typography

This design system utilizes **Inter** for its neutral, systematic, and utilitarian properties. To achieve the "Industrial" look, typography relies on heavy weights (Bold and Extra Bold) and tight letter spacing for headlines. 

Information density is managed through a clear hierarchy where numbers (fees, margins, percentages) are often displayed in larger, bolder weights than their descriptive labels. All status-based text (KEEP, REPRICE, etc.) must be set in uppercase with increased letter-spacing to mimic stamped metal or industrial labeling.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for tablet orientation (landscape and portrait). A base unit of **8px** governs all spacing. 

- **Touch-First:** Every interactive element must meet a minimum **48px x 48px** tap target to accommodate rapid use in a busy kitchen.
- **High-Density Cards:** Content is organized into "Action-First Cards" that span columns based on priority. 
- **Rhythm:** Use generous 24px margins on tablet screens to ensure the interface doesn't feel cramped, even when displaying dense data tables or fee structures.

## Elevation & Depth

This design system rejects shadows and blurs in favor of **Bold Borders** and **Tonal Layers**. 

Depth is communicated through "stacking" rather than "floating." 
- **Surface 0 (Background):** Deepest charcoal.
- **Surface 1 (Cards/Containers):** Slightly lighter charcoal with a **2px solid border**.
- **Active State:** Elements use a "thick-border" (3px) or a solid color fill to indicate selection.

Interactive elements should feel "mechanical." Instead of lifting off the page with shadows, they should feel like physical buttons being pressed into a dashboard, achieved by swapping border colors or using high-contrast fills upon interaction.

## Shapes

The shape language is primarily **geometric and rigid**. We use a **"Soft" (0.25rem)** corner radius for standard containers to prevent the UI from feeling dangerously sharp, but interactive elements like "Status Chips" and "Action Buttons" may utilize even smaller radii to maintain a rugged, machined appearance. 

Heavy strokes (2px minimum) are mandatory for all container shapes to reinforce the "field-ops" durability.

## Components

### Action-First Cards
Cards are the primary container. They feature a mandatory header row with the item name and a secondary row for the "Surgical Action" (the primary decision). Cards use a 2px border (#334155).

### Status Chips
High-visibility, rectangular tags used to label items.
- **KEEP:** Solid Green background, Black text.
- **REPRICE:** Solid Yellow background, Black text.
- **BUNDLE:** Solid Blue background, White text.
- **DELIST:** Solid Red background, White text.

### Industrial Buttons
Primary buttons use the Surgical Blue fill with bold black text. Secondary buttons use a heavy 2px ghost-border style. Active/Pressed states should invert the colors or increase the stroke weight.

### Data Grid / Surgeon Table
A high-density list view where rows are separated by heavy 1px horizontal lines. Each row must have a clear "Status" indicator on the far left and a "Primary Action" button on the far right.

### Urgency Banners
Used for "Margin Loss" alerts. These span the full width of the view and use a diagonal "hazard stripe" pattern in the header to grab immediate attention.