---
name: Field-Ops Investigation System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#041528'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a2a3e'
  on-tertiary-container: '#8191a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
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
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for field investigators and property managers navigating high-stakes environments. The brand personality is **authoritative, pragmatic, and resilient**. It prioritizes utility over decoration, evoking the feeling of a professional-grade handheld tool rather than a consumer application.

The design style is **Rugged Industrialism**. It utilizes a "Utility-First" approach characterized by high information density, clear visual weight, and tactile feedback. By combining elements of **Minimalism** with **Modern Industrial** aesthetics, the UI remains uncluttered during complex investigations while maintaining the ruggedness required for outdoor or high-traffic operational use.

**Design Principles:**
- **Clarity under Duress:** Information must be readable in varying light conditions (sunlight/dim locker rooms).
- **Evidence-Centric:** The interface recedes to ensure photos, logs, and timestamps remain the primary focus.
- **Action-Oriented:** Critical paths are highlighted with high-visibility safety triggers.

## Colors

The palette is anchored by **Deep Slate (#1E293B)**, providing a stable, professional foundation that differentiates the tool from generic office software. 

- **Primary (Deep Slate):** Used for structural elements, headers, and primary navigation to establish authority.
- **Accent (Safety Orange):** Reserved strictly for "Next Step" actions, critical buttons, and primary investigative triggers. This ensures the user’s eye is immediately drawn to the path of resolution.
- **Neutral Grays:** A spectrum of cool grays is used to create "Utility Layers," separating metadata from background surfaces without the use of distracting shadows.
- **High-Contrast Status:** Status colors (Red, Amber, Green) are applied with high saturation to ensure instant recognition of locker health and investigation progress.

## Typography

This design system utilizes **Inter** for all UI elements and instructional text due to its exceptional legibility and neutral tone. To support technical field operations, **JetBrains Mono** is employed for all variable data, including Package IDs, Locker Numbers, Timestamps, and Coordinates.

- **Headlines:** Bold and tight, designed to be read quickly while scanning.
- **Monospace Integration:** All "Evidence" data (logs, IDs) must use `code-md` or `code-sm` to ensure characters like '0' and 'O' are never confused during an investigation.
- **Labels:** Uppercase labels are used for metadata headers within cards to create a clear visual distinction from the data itself.

## Layout & Spacing

The layout uses a **Fluid Grid** system that prioritizes vertical stacking for mobile-first field use. 

- **Rhythm:** A 4px baseline grid governs all spacing to maintain a compact, high-density feel.
- **Mobile Behavior:** On mobile, all Evidence Cards and Incident Controls span the full width of the screen minus 16px margins to maximize touch targets.
- **Desktop/Tablet:** Content is organized into a multi-column dashboard where the left column houses the investigative trail (logs) and the right column houses the visual evidence and heatmaps.
- **Density:** Padding inside components is intentionally kept tight (e.g., 12px for list items) to ensure as much data as possible is visible on one screen without scrolling.

## Elevation & Depth

To maintain a "rugged" aesthetic, this design system avoids soft, floating shadows. Instead, it uses **Tonal Layers** and **Hard Outlines** to define depth.

- **Level 0 (Background):** Neutral Off-white (#F1F5F9).
- **Level 1 (Cards/Containers):** Pure White with a 1px solid border (#E2E8F0).
- **Level 2 (Active/Focus):** A subtle 2px "Block Shadow" (no blur, 10% opacity black) to give the appearance of a physical button or raised surface.
- **Separation:** Horizontal rules and subtle background shifts (Slate-50 to Slate-100) are preferred over shadows for separating log entries and table rows.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough curvature to prevent the UI from feeling dated or overly aggressive while maintaining a precise, engineering-focused look. 

- **Large Components:** Incident buttons and major cards use `rounded-lg` (0.5rem) to feel more substantial and tactile.
- **Status Indicators:** Pills and small labels remain slightly rounded to contrast against the sharp, rectangular nature of the evidence data.

## Components

**Evidence Cards:**
Constructed with a 1px Slate-200 border. Headers use a Slate-800 background with white Monospace text for the Incident ID. Content areas utilize high-density layouts for thumbnails and metadata.

**Incident Controls:**
Primary actions (e.g., "Flag for Review," "Resolve Case") are Large (48px+ height) with 0.5rem rounded corners. The Safety Orange background is used for the "Resolve" path, while Slate-800 is used for "Secondary" investigative steps.

**Status Rows (Locker Logs):**
Compressed height (32px or 40px). Each row features a 4px vertical color strip on the left edge indicating status (Success/Warning/Error). Text is primarily `code-sm` for technical precision.

**Input Fields:**
Fields feature a thick 2px bottom border when focused (Safety Orange) to ensure the investigator knows exactly which field is active in high-glare environments.

**Heatmaps & Data Viz:**
Use a monochromatic Slate scale with Safety Orange highlights for "Hot Zones" where packages are most frequently reported missing. Grid lines are 1px dotted Slate-300.