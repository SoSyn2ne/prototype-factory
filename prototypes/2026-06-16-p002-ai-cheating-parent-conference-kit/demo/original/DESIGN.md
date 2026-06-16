---
name: AI Cheating Parent Conference Kit
colors:
  surface: '#fbf9fa'
  surface-dim: '#dcd9da'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f4'
  surface-container: '#f0edee'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#303031'
  inverse-on-surface: '#f3f0f1'
  outline: '#75777c'
  outline-variant: '#c5c6cc'
  surface-tint: '#555f6f'
  primary: '#0a1422'
  on-primary: '#ffffff'
  primary-container: '#1f2937'
  on-primary-container: '#8690a1'
  inverse-primary: '#bdc7d9'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#121516'
  on-tertiary: '#ffffff'
  tertiary-container: '#26292a'
  on-tertiary-container: '#8e9091'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e3f6'
  primary-fixed-dim: '#bdc7d9'
  on-primary-fixed: '#121c2a'
  on-primary-fixed-variant: '#3d4756'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf9fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-bold:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
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
  gutter: 12px
  stack-compact: 8px
  stack-dense: 4px
  section-gap: 32px
---

## Brand & Style
The design system is engineered for high-stakes educational environments where data integrity and objective presentation are paramount. The brand personality is **authoritative, analytical, and utilitarian**. It avoids all decorative "fluff" in favor of an operator-dense interface that prioritizes evidence over aesthetics.

The visual style is **Corporate Modern with a Utility-First lean**. It utilizes a structured, high-density layout inspired by technical documentation and legal filings. The goal is to evoke a sense of "unbiased truth" and "procedural rigor," providing educators with a tool that feels like a professional evidence locker rather than a typical consumer app.

## Colors
The palette is intentionally restrained to maintain an atmosphere of professional gravity.

- **Primary (Charcoal):** Used for text, primary navigation, and heavy structural elements to ground the UI.
- **Secondary (Slate Gray):** Used for metadata, secondary icons, and supporting labels.
- **Surface (Fog):** The primary background color to ensure maximum legibility and a clean, "paper-like" digital feel.
- **Urgency Accents:** Alert Red and Urgent Orange are used sparingly but decisively to highlight discrepancies in student work, looming deadlines, or "High Probability" AI markers.

## Typography
The system utilizes **Inter** for its neutral, highly legible character, particularly in small-scale data environments. **JetBrains Mono** is introduced for technical metadata, timestamps, and AI-generated probability scores to differentiate student text from system analysis.

Scale is compact to allow for maximum information density. Letter spacing is tightened on headlines for a more authoritative, "news-print" feel, while labels utilize increased tracking for clarity in dense grids.

## Layout & Spacing
This design system employs a **Fixed-Fluid Hybrid Grid**. The sidebar and utility panels (drawers) remain fixed, while the central evidence stage is fluid.

- **Density:** A 4px baseline grid ensures tight alignment. Spacing is minimized between related data points to allow educators to see "the full picture" without scrolling.
- **Structure:** 12-column system for desktop. In conference mode, the grid shifts to a 60/40 split between "Student Work" and "Evidence Analysis."
- **Responsive:** On mobile, the UI collapses into a single-column "Incident Feed," prioritizing the most recent evidence markers.

## Elevation & Depth
Depth is signaled through **Tonal Layers and Crisp Outlines** rather than soft shadows. This reinforces the "structured" and "factual" nature of the application.

- **Level 0 (Background):** Fog (#F9FAFB) for the main canvas.
- **Level 1 (Cards/Tables):** White with a 1px solid Slate Gray (#E2E8F0) border. No shadow.
- **Level 2 (Interactive/Slide-outs):** Slight elevation using a 2px sharp, low-blur shadow to separate the "Evidence Drawer" from the primary work area.
- **Overlays:** Semi-transparent Charcoal (#1F2937) backdrops (40% opacity) for modal focus during critical data entry.

## Shapes
The shape language is **Soft (0.25rem)**. This provides just enough rounding to feel modern while maintaining a sharp, professional edge. Larger elements like slide-out drawers or primary containers use the same corner radius to maintain a consistent, modular appearance. Status chips and indicators use "Pill" shapes (1rem) only to distinguish them as discrete, interactive metadata objects.

## Components

- **Evidence Tables:** High-density rows with alternating "Zebra" striping in Fog. Columns use `label-mono` for data IDs. Cell borders are minimal (1px hairline).
- **Status Chips:** 
    - *Known Fact:* Solid Charcoal with white text. 
    - *Uncertainty:* Ghost-style (border only) with Slate Gray text. 
    - *Flagged:* Solid Alert Red or Urgent Orange.
- **Compact Buttons:** Small padding (6px 12px), bold labels. Primary buttons are Charcoal; secondary buttons use the Ghost style.
- **Slide-out Drawers:** Anchor to the right side of the screen. These contain "Evidence Detail" panels, allowing the user to view the student's submission and the specific AI flags side-by-side.
- **Input Fields:** Squared-off corners, 1px Slate border. Focused state uses a 1px Charcoal inner border to avoid layout shift.
- **Data Grids:** Use a 12px gutter. Header cells are Charcoal with white text to clearly define the data structure.