---
name: Digital Mysticism & Logic Lab
colors:
  surface: '#15121c'
  surface-dim: '#15121c'
  surface-bright: '#3b3743'
  surface-container-lowest: '#100d16'
  surface-container-low: '#1d1a24'
  surface-container: '#211e28'
  surface-container-high: '#2c2833'
  surface-container-highest: '#37333e'
  on-surface: '#e7dfee'
  on-surface-variant: '#cbc4d0'
  inverse-surface: '#e7dfee'
  inverse-on-surface: '#332f3a'
  outline: '#948e99'
  outline-variant: '#49454e'
  surface-tint: '#d2bcfa'
  primary: '#d2bcfa'
  on-primary: '#38265a'
  primary-container: '#2d1b4e'
  on-primary-container: '#9783bd'
  inverse-primary: '#68558b'
  secondary: '#c7fff0'
  on-secondary: '#00382f'
  secondary-container: '#00f2d1'
  on-secondary-container: '#006a5a'
  tertiary: '#ffb4a6'
  on-tertiary: '#640b02'
  tertiary-container: '#520400'
  on-tertiary-container: '#e16752'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d2bcfa'
  on-primary-fixed: '#231043'
  on-primary-fixed-variant: '#4f3d72'
  secondary-fixed: '#26fedc'
  secondary-fixed-dim: '#00dfc1'
  on-secondary-fixed: '#00201a'
  on-secondary-fixed-variant: '#005144'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a6'
  on-tertiary-fixed: '#3f0300'
  on-tertiary-fixed-variant: '#842415'
  background: '#15121c'
  on-background: '#e7dfee'
  surface-variant: '#37333e'
typography:
  spell-display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  spell-display-lg-mobile:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  mood-heading-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  data-body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  data-mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  deadline-numeral:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  lab-cell: 120px
---

## Brand & Style
The design system establishes a "Digital Mysticism" aesthetic—a hybrid of avant-garde editorial design and high-utility laboratory instrumentation. It is designed for users navigating the high-stakes, emotional volatility of wedding planning. The visual metaphor treats wedding logistics as "spells" and data as "alchemy."

The style leverages **Experimental Minimalism** mixed with **Glassmorphism**. It utilizes heavy whitespace to provide mental breathing room, interrupted by vibrant, shifting gradients that mimic weather patterns. Interfaces should feel like a high-fidelity dashboard used by a supernatural meteorologist: precise, atmospheric, and slightly magical.

**Core Principles:**
- **Controlled Chaos:** Purposeful asymmetry in layout balanced by rigid, mathematical typography for data.
- **Atmospheric Feedback:** The UI shifts in luminosity and tint based on the "Sanity Level" of the current task.
- **Tactile Digitality:** Elements use subtle frosting and layered depth to feel like physical glass instruments.

## Colors
The palette is rooted in the "Midnight Garden" spectrum, utilizing deep violets and obsidian purples for the foundational environment. 

- **Primary (Midnight Garden):** Used for deep backgrounds and structural grounding.
- **Secondary (Teal Aura):** Used for successful "spell" casts, interactive highlights, and positive data trends.
- **Panic State (Emergency Coral):** Reserved strictly for high-priority deadlines, budget overages, or "Sanity Alerts."
- **Calm State (Ethereal Lavender):** Applied to finalized tasks and archived information to lower visual cognitive load.
- **Gradients:** Use 45-degree linear gradients combining Primary and Secondary colors with 40% opacity for container backgrounds to simulate shifting weather patterns.

## Typography
This design system employs a sophisticated typographic hierarchy that separates "The Narrative" from "The Data."

- **Literata (The Spellcaster):** Used for headlines and mood-setting text. It provides a charming, literary quality that feels like an ancient grimoire updated for the web.
- **Inter (The Logic):** Used for all functional data, body copy, and forms. Its neutrality ensures clarity during high-stress planning phases.
- **JetBrains Mono (The Lab):** Used for timestamps, counts, "Decision Clock" numerals, and technical labels. It reinforces the "Sanity Lab" concept, suggesting precision and calculation.

## Layout & Spacing
The layout follows a **Fluid Lab Grid**. While the system relies on a 12-column structure for desktop, it encourages "asymmetric anchoring"—where specific UI elements (like the Decision Clock) sit off-center to create visual interest.

- **Grid:** 12-column (Desktop), 4-column (Mobile).
- **Safe Zones:** Use large 64px margins on desktop to maintain the "Minimalist" feel.
- **The "Spell Receipt" Drawer:** A specialized layout pattern where content slides from the right, occupying 33% of the screen width, styled like a continuous thermal paper strip.
- **Vertical Rhythm:** Strict 8px baseline grid to ensure the high-utility data components remain perfectly aligned even when the background visuals are expressive.

## Elevation & Depth
Depth is expressed through **Tonal Translucency** rather than traditional drop shadows.

- **Layer 0 (The Void):** `#0F0A18` solid background.
- **Layer 1 (The Mist):** Semi-transparent cards (80% opacity) with a 20px `backdrop-filter: blur()`. These surfaces catch the light of the background gradients.
- **Layer 2 (The Instrument):** High-contrast interactive elements. These use thin, 1px solid borders in Ethereal Lavender (20% opacity) to define edges.
- **Shadows:** Use a single, highly diffused "Ambient Glow" for active cards. The shadow color should match the card’s state (Teal for success, Coral for panic) with 0px offset and 30px blur.

## Shapes
The shape language balances the organic nature of "Weather" with the precision of a "Lab." 

- **Containers:** 0.5rem (8px) rounded corners for a modern, architectural feel.
- **Interactive Pills:** Use full `rounded-xl` (1.5rem) for "Sanity Sliders" and "Spell Receipts" to make them feel tactile and approachable.
- **Data Cells:** Hard 90-degree corners are strictly prohibited except for "Decision Clock" dividers.

## Components
- **Spell Receipt Drawers:** Vertical surfaces that slide in to show a summary of "cast" decisions. They feature a "jagged" bottom edge treatment mimicking torn paper.
- **Sanity Sliders:** Custom range inputs with a gradient track shifting from Ethereal Lavender to Emergency Coral. The thumb is a glowing orb that increases in size as "Panic" increases.
- **Decision Clocks:** Monospaced countdown timers housed in "glass" pods. When the timer hits < 24 hours, the pod border pulses in a subtle Panic State glow.
- **Alchemy Cards:** Content containers using the backdrop-blur effect. The header of the card uses **Literata Italic** for a "mood" description and **JetBrains Mono** for a unique ID/Timestamp.
- **Logic Buttons:** Primary actions are solid Teal with black text. Secondary actions are "Ghost" style with thin Lavender borders. Active states feature a "shimmer" animation across the button surface.
- **Panic Toggle:** A high-visibility switch that filters the UI to show only "Critical/Emergency" tasks, instantly changing the global background blur tint to a muted Coral.