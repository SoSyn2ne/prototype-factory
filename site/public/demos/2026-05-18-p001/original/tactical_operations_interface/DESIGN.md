---
name: Tactical Operations Interface
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444748'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#ffbf00'
  on-secondary-container: '#6d5000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002204'
  on-tertiary-container: '#32963b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdfa0'
  secondary-fixed-dim: '#fbbc00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#94f990'
  tertiary-fixed-dim: '#78dc77'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005313'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 12px
  margin-page: 24px
  row-height-compact: 32px
  row-height-standard: 40px
---

## Brand & Style
The design system is engineered for high-stakes local SEO recovery and maintenance. It adopts a **War-Room Minimalism** aesthetic: a utility-first approach that prioritizes data density, rapid scanning, and professional authority. The UI should evoke the feeling of a physical operations binder—organized, indestructible, and mission-critical.

The target audience consists of SEO operators and storefront owners managing high-risk suspension scenarios. The emotional response is one of controlled urgency; the interface does not distract with flourishes but provides the "technical scaffolding" necessary to execute complex reinstatement workflows.

**Key Visual Principles:**
- **Information Density:** Maximum data-to-ink ratio. No wasted vertical space.
- **Rigid Structure:** A strict adherence to grid lines and clear containment.
- **Urgency Signalling:** High-contrast accent colors reserved exclusively for actionable risks and status changes.

## Colors
The palette is built on a high-contrast foundation to ensure legibility in high-density data environments.

- **Foundational Neutrals:** Deep Charcoal (#1A1A1A) is used for primary text and structural headers. Crisp White (#FFFFFF) serves as the primary canvas, with subtle Off-White (#F8FAFC) used to differentiate nested data sections.
- **Strategic Accent:** Sharp Amber (#FFBF00) is the "Risk" color. It is used sparingly for alerts, critical NAP (Name, Address, Phone) inconsistencies, and pending suspension warnings.
- **Verified Signals:** Success Green (#4CAF50) denotes verified Google Business Profile (GBP) signals and successful reinstatements.
- **Secondary Data:** Muted Slate Grays are utilized for metadata, timestamps, and non-essential technical logs to prevent visual fatigue.

## Typography
The typographic system prioritizes functional hierarchy over character. **Inter** provides high legibility at small sizes for standard interface elements. **JetBrains Mono** is introduced for technical data fields (lat/long coordinates, CID numbers, and NAP strings) to allow for character-level inspection.

- **Scale:** Font sizes are intentionally smaller than consumer-facing apps to facilitate data density. 
- **Caps for Utility:** Metadata labels use uppercase styling with increased tracking to create a clear "form-label" distinction without increasing vertical height.
- **Technical Fields:** Any data pulled directly from the Google Map Pack or raw API responses must use the `data-mono` style.

## Layout & Spacing
The layout follows a **Fixed-Grid System** that behaves like a physical ledger. Elements are snapped to a 4px baseline grid to ensure perfect alignment of borders and text.

- **Desktop Layout:** A 12-column grid with tight 12px gutters. Sidebars are fixed and collapsed by default to maximize the audit workspace.
- **Audit Tables:** These are the core of the experience. They use "tight" vertical padding (4px top/bottom) to allow at least 20 rows of data to be visible above the fold.
- **Binder Tabs:** Navigation mimics top-mounted or side-mounted binder tabs, using sharp corners and 1px borders to separate "Document Sections."

## Elevation & Depth
In keeping with the "War-Room" aesthetic, this design system avoids soft shadows and organic depth. 

- **Tonal Layering:** Depth is communicated through background color shifts (e.g., a light gray panel sitting on a white background).
- **Strict Outlines:** 1px solid borders in `#E2E8F0` define all containers. 
- **Zero-Shadow Policy:** No drop shadows are used for cards or buttons. Instead, an "Active" state is indicated by a 2px interior border or a fill-color change to the Primary Charcoal.
- **Overlays:** Modals and "War-Room" alerts use a 1px solid black border with a high-contrast backing to feel like a paper document placed on top of a stack.

## Shapes
The shape language is strictly **Sharp (0px)**. Every UI element—buttons, input fields, cards, and tabs—must have squared corners. This reinforces the "technical document" feel and ensures that 1px borders align perfectly without anti-aliasing artifacts on low-resolution data displays.

## Components

- **Audit Tables:** The primary data vessel. Rows alternate between White and `#F8FAFC`. Columns are separated by 1px vertical rules. Hover states highlight the entire row in a very pale Amber to aid tracking.
- **Map-Pin Status Chips:** Small, square badges (16x16px). They contain a single icon (e.g., a pin, a check, or a warning triangle) with a background color corresponding to the status.
- **Risk-Level Progress Bars:** Thin (4px height) linear bars. Unlike standard progress bars, these fill from right-to-left in Amber to represent "Lead Loss" or "Downtime" accumulation.
- **Binder Tab Cards:** Containers for grouped documents. The "Header" of the card is a 1px outlined rectangle that extends beyond the top edge of the card, mimicking a folder tab.
- **War-Room Meters:** Radial or linear gauges using the `data-mono` font to display "Estimated Revenue Lost" in real-time.
- **Input Fields:** Minimalist design with no background fill; only a bottom border that thickens to 2px Primary Charcoal on focus.
- **Action Buttons:** Large, blocky, and high-contrast. The primary action is White text on a Charcoal background. Secondary actions are 1px Charcoal outlines on White.