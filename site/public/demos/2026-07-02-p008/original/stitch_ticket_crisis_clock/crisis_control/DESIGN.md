---
name: Crisis Control
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#ffb4ab'
  on-secondary: '#690005'
  secondary-container: '#bb0112'
  on-secondary-container: '#ffc8c1'
  tertiary: '#efc200'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cea700'
  on-tertiary-container: '#4e3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000b'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-xl:
    fontFamily: Anybody
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
spacing:
  unit: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-gap: 24px
---

## Brand & Style
The design system is built on a "Stadium Room" philosophy—fusing the high-octane energy of a World Cup with the communal, focused environment of a digital war room. It addresses the isolation of ticket crises by transforming individual anxiety into a shared mission.

The aesthetic leans heavily into **Bold Brutalism** mixed with **Tactile Collectibles**. It uses heavy structural lines to denote stability and authority, while utilizing holographic textures and "ticket-stub" geometry to remind the user of the prize at stake. The visual language is high-stakes and urgent, yet remains supportive through clear hierarchy and "big button" accessibility. 

Key principles:
- **Collective Urgency:** Use high-contrast visuals to signal importance without inducing panic.
- **The Fan Bond:** Every element should feel shared, using plural language and "room" metaphors.
- **Physicality:** Digital elements should mimic physical match tickets—perforations, thick paper stocks, and holographic security strips.

## Colors
The palette is rooted in a deep "Stadium Navy" (`#0F172A`) to provide a focused, dark-mode foundation that mimics a dimly lit control room.

- **Primary Action (Crisis):** Vivid Crimson is used for critical alerts and high-priority ticket drops.
- **Warning/Status:** Neon Amber and Stadium Gold represent ticking clocks and transitionary states.
- **Recovery:** Emerald Green signals a resolved crisis or a secured ticket.
- **Accents:** Electric Blue is reserved for interactive "Fan Room" features and holographic highlights.
- **Surfaces:** Use slightly lighter charcoal shades for containers to maintain depth without losing the brutalist edge.

## Typography
This design system utilizes a high-contrast typographic pairing to balance "Tournament Energy" with "Crisis Utility."

- **Headlines:** `Anybody` (Extra Bold/Black) provides an aggressive, variable-width feel that scales from massive countdowns to punchy section headers.
- **Body:** `Hanken Grotesk` offers a clean, contemporary sans-serif experience for checklists, instructions, and community messages.
- **Technical Data:** `JetBrains Mono` is used for ticket IDs, seat numbers, and timestamps to give a precise, "verified" feel.

## Layout & Spacing
The layout follows a **Fluid Control Grid**. Content is organized into modular "Command Tiles" that snap to a 12-column grid on desktop and a 2-column grid on mobile.

- **The Fan Room Margin:** On mobile, a generous 20px side margin prevents the dense content from feeling claustrophobic.
- **Visual Rhythm:** Use an 8px base unit. Stack critical crisis elements with a 24px gap to ensure they stand out as individual "tasks."
- **Side-by-Side:** The "Duel" comparator layout splits the screen vertically (50/50) on desktop, but stacks with a "VS" indicator on mobile.

## Elevation & Depth
Depth is not achieved through soft shadows, but through **Structural Layering** and **Bold Outlines**.

- **Shadows:** Use "Hard Shadows"—100% opacity offsets (e.g., 4px 4px) in Stadium Gold or Navy to make elements pop off the screen.
- **Borders:** Every major container uses a 2px or 3px solid border.
- **Holographic Layers:** High-priority cards use a CSS gradient overlay (linear-gradient of Electric Blue and Gold at 45 degrees) with a low-opacity "noise" texture to simulate ticket security foils.

## Shapes
The shape language is **Sharp and Geometric** (`roundedness: 0`). This reinforces the "Brutalist" and "Urgent" nature of the app.

- **Perforations:** Use masking or clip-paths to create semi-circle "bites" out of the sides of cards, mimicking a torn match ticket.
- **Angled Cuts:** Buttons and status indicators should use 45-degree corner snips rather than rounded corners to maintain the technical, high-stakes look.

## Components

### Ticket-Card Containers
The primary vessel for information. Feature a "perforated" divider between the main info and the action button. The top edge includes a holographic security strip (gradient).

### Crisis Clock
A large-scale component featuring `Anybody` Black typography for the time remaining. It is surrounded by a thick, segmented ring that changes from Gold to Crimson as the deadline approaches.

### Duel Comparator
A split-screen layout designed for "Original vs. Replacement" ticket scenarios. It uses a high-contrast central divider with a "VS" badge and distinct border colors (Crimson for the lost ticket, Green for the new option).

### Risk Card
A shareable graphic component. It uses large-scale iconography and "Display XL" typography to summarize the group's collective risk (e.g., "3 FANS LEFT BEHIND"). Designed with high-contrast background fills for maximum readability when screenshotted.

### Interaction States
- **Buttons:** Thick borders, no rounding. On hover/press, the hard shadow collapses (0px offset) to simulate a physical button being pressed into the surface.
- **Inputs:** Monospaced fonts for data entry, with heavy focus states using the Crimson crisis color.