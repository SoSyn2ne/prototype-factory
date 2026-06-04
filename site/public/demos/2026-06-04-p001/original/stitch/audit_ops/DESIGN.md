---
name: Audit & Ops
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-sm:
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
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 1.5rem
  gutter: 0.75rem
  row-height-dense: 32px
  row-height-standard: 40px
---

## Brand & Style

The design system is engineered for high-stakes leasing operations and fraud detection. The brand personality is clinical, observant, and authoritative, functioning as a high-performance "operations desk" for tenant screening. It prioritizes information density and clarity over aesthetic flourish, evoking the feeling of a professional command center.

The design style is **Corporate / Modern** with a lean toward **Minimalism**. It utilizes a dark-mode-first architecture to reduce eye strain during long-form document review. The interface relies on structural integrity, strict alignment, and immediate visual feedback to facilitate rapid "smell tests" of tenant documentation.

## Colors

The palette is anchored in deep "Charcoal" and "Slate" tones to establish a focused work environment. 

- **Primary:** A precise Sky Blue used sparingly for actions and active states.
- **Surface:** The primary work surface is `#1E293B`, layered over a deep base of `#0F172A`.
- **Status Indicators:** These are the most vibrant elements in the UI, designed for immediate peripheral recognition.
    - **Verified (Emerald):** Confirmed document authenticity.
    - **Warning (Amber):** Minor discrepancies or missing metadata.
    - **High-Risk (Rose):** Probable fraud or critical document tampering detected.

## Typography

This design system uses **Inter** for its neutral, highly legible character, essential for reading dense legal and financial text. A tight typographic scale is employed to maximize the "above the fold" information.

- **Headlines:** Small but bold to maintain hierarchy without consuming vertical space.
- **Data Entry:** **JetBrains Mono** is introduced for document metadata, checksums, and technical "Smell Test" evidence to distinguish raw data from UI labels.
- **Labels:** Uppercase labels with slight tracking are used for table headers and section descriptors to provide clear boundaries in dense views.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop operation, ensuring that toolbars and evidence sidebars remain in consistent, predictable positions. 

- **Density:** The system uses a 4px base unit. Component padding is aggressively tight (8px or 12px) to support "Operator-Dense" workflows.
- **Sidebars:** A dual-sidebar approach is recommended: left for navigation/queue management, and a collapsible right sidebar for the "Smell Test" breakdown.
- **Reflow:** On smaller screens, the evidence table transitions to a list-based view, though the primary use case remains a large-format monitor.

## Elevation & Depth

In this dark, high-density environment, depth is communicated through **Tonal Layers** rather than shadows. 

- **Level 0 (#0F172A):** The background/canvas.
- **Level 1 (#1E293B):** The primary work surfaces, cards, and data tables.
- **Level 2 (#334155):** Hover states, active row selections, and popover menus.
- **Outlines:** Subtle 1px borders (#334155) are used to define component boundaries, replacing shadows entirely to keep the interface crisp and "engineered."

## Shapes

The design system utilizes **Soft (0.25rem)** roundedness. This provides just enough softening to prevent the UI from feeling aggressive while maintaining a serious, technical aesthetic. Larger containers (cards) may use `rounded-lg` (0.5rem), but buttons and input fields must remain at 4px to maximize internal space for labels.

## Components

- **Status Chips:** Small, rectangular with a 2px radius. Use high-contrast backgrounds with white text. For "Smell Test" results, use an icon prefix (Check, Alert, X-Circle).
- **Evidence Tables:** High-density rows (32px height). Use `data-mono` for values. Zebra-striping is encouraged using the Level 2 surface color for even rows.
- **Buttons:** Primarily "Ghost" or "Outline" styles to avoid visual clutter. Only the primary "Approve Tenant" or "Run Smell Test" button should use a solid fill.
- **Input Fields:** Dark fills (#0F172A) with subtle 1px borders. Focus states use the primary Sky Blue border.
- **Risk Indicators:** A "Risk Meter" component—a thin, horizontal segmented bar showing the distribution of Verified, Warning, and Risk markers across a document set.
- **Document Viewer:** A central container with a light-gray background to provide a realistic "paper" contrast against the dark UI theme.