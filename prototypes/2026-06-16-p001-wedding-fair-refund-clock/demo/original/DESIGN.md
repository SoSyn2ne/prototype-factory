---
name: Justice Ledger
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d9'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#46474a'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#76777b'
  outline-variant: '#c7c6ca'
  surface-tint: '#5f5e5f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1c'
  on-primary-container: '#858384'
  inverse-primary: '#c8c6c7'
  secondary: '#5e5e60'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfe1'
  on-secondary-container: '#626265'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1d'
  on-tertiary-container: '#828485'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e3'
  primary-fixed-dim: '#c8c6c7'
  on-primary-fixed: '#1b1b1c'
  on-primary-fixed-variant: '#474647'
  secondary-fixed: '#e3e2e4'
  secondary-fixed-dim: '#c7c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#464749'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-clock:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 16px
  panel-padding: 20px
---

## Brand & Style

This design system is engineered for high-stakes consumer advocacy, specifically addressing the legal complexities of wedding contract disputes. The brand personality is that of a **Senior Financial Auditor**: impartial, precise, and authoritative. It moves away from the emotional volatility of wedding planning and toward the cold, hard clarity of contract law.

The design style is **Corporate Modern with a "Financial Terminal" influence**. It prioritizes data density, logical grouping, and systematic hierarchy to evoke an emotional response of security and confidence. The UI avoids decorative elements, favoring structural integrity and functional clarity to ensure users feel they are building a "case" rather than just using an app.

## Colors

The palette is restricted to an "Inked Paper" aesthetic to mimic legal documentation. 
- **Ink (#1A1A1B):** Used for primary typography and structural headers to provide maximum contrast.
- **Charcoal (#2D2E30):** Used for secondary UI elements and inactive states.
- **Off-white (#F8F9FA):** The canvas color, providing a clean, non-distracting background that reduces eye strain during heavy reading.
- **Functional Accents:** We employ a "Risk Band" system. **Muted Teal** signifies compliance and safe zones, **Muted Amber** marks contractual gray areas or upcoming deadlines, and **Muted Red** identifies high-risk breaches or expired refund windows.

## Typography

The system uses **IBM Plex Sans** (with Korean support) to leverage its technical, industrial heritage. It communicates the "machine-like" precision required for legal calculations.

- **Display Clock:** Used for the primary "Refund Clock" countdown. It must be high-contrast and slightly condensed to fit complex time strings.
- **Hierarchy:** High-density layouts require clear distinction between labels and values. Use `label-caps` for table headers and `data-mono` for numerical values to ensure column alignment.
- **Bilingual Treatment:** English labels should be 2pt smaller than their Korean counterparts and set in a slightly lighter weight to maintain primary focus on the local legal context.

## Layout & Spacing

The layout utilizes a **Fixed Grid System** within panels to simulate the feel of a printed legal brief. 

- **Density:** We use a tight 4px base unit. Information density is high to allow for side-by-side data comparisons (e.g., "Promise vs. Paper").
- **Analytical Panels:** Content is grouped into white "cards" with subtle 1px borders. 
- **Desktop:** A 12-column grid. Evidence timelines and Risk meters occupy a 4-column side panel, while Document builders occupy the 8-column main stage.
- **Mobile:** Reflows to a single-column stack. The "Refund Clock" is pinned to the top (sticky) to maintain the sense of urgency.

## Elevation & Depth

This design system avoids shadows to maintain a flat, professional, and "official" appearance. 

- **Tonal Layering:** Depth is achieved through color stacking. The base background is Off-white, while secondary interaction areas use a very light gray (#F0F1F2). 
- **Low-Contrast Outlines:** Instead of shadows, use 1px solid borders in #D1D1D4 to define element boundaries.
- **Active State:** Elements being edited or focused receive a 2px "Ink" (#1A1A1B) border, indicating the "Active Case" status.

## Shapes

The shape language is **Soft (0.25rem)**. While the brand is rigorous, slight rounding on panels and buttons prevents the UI from feeling hostile or overly "brutalist." 

- **Data Indicators:** Small circular pips are used for status indicators within timelines.
- **Checkboxes:** Square with a 2px radius to reinforce the "official document" feel.
- **Action Buttons:** Large primary actions use the standard 0.25rem radius, while utility "chips" for document tags use a pill-shape for quick visual distinction.

## Components

- **Countdown Headers:** A high-visibility component featuring the `display-clock` type. It includes a progress bar that shifts from Teal to Red as the legal refund window closes.
- **Data Comparison Tables:** Alternate row striping using #F8F9FA and #FFFFFF. Discrepancies between "Promise" and "Paper" are highlighted with a Muted Amber background.
- **Risk Assessment Meters:** Linear gauges using the three risk colors. They must include a "Rationale" tooltip explaining the legal basis for the current risk level.
- **Evidence Timelines:** A vertical axis component. Each node represents a contract milestone or communication event. Attachments (PDFs/Images) appear as small, 1px bordered thumbnails.
- **Document Packet Builder:** A checklist-heavy interface where users "check off" required evidence. Completed items turn Teal; missing mandatory items are flagged in Red.
- **Primary Buttons:** Solid Ink (#1A1A1B) with White text. High-contrast and undeniably the primary action (e.g., "Generate Legal Notice").