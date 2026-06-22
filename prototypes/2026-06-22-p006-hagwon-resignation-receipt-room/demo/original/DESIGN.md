---
name: Project p006
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#121212'
  on-primary-container: '#7e7d7d'
  inverse-primary: '#5f5e5e'
  secondary: '#c3c7cd'
  on-secondary: '#2c3136'
  secondary-container: '#454a4f'
  on-secondary-container: '#b4b9bf'
  tertiary: '#ffb4ab'
  on-tertiary: '#690005'
  tertiary-container: '#2f0001'
  on-tertiary-container: '#ed3330'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#dfe3e9'
  secondary-fixed-dim: '#c3c7cd'
  on-secondary-fixed: '#171c20'
  on-secondary-fixed-variant: '#43474c'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
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
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-mono-bold:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
spacing:
  unit: 4px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for a high-stakes, information-dense environment where legal precision and procedural clarity are paramount. The brand persona is **analytical, protective, and sober**, functioning as a digital black box for critical documentation.

The visual style is **Industrial Utilitarian**. It rejects decorative aesthetics in favor of raw functionalism. It draws from technical instrumentation and legal filing systems to evoke a sense of calm urgency. Information is treated as evidence; the interface acts as a neutral vessel for high-density data, ensuring that "deadline pressure" and "verified proof" are the only visual priorities.

## Colors
The palette is rooted in a deep, monochromatic dark mode to reduce ocular strain during prolonged data review. 

- **Charcoal (#121212)**: The primary background, representing a stable, non-reflective base.
- **Deep Slate (#1C1C1C)**: Used for container backgrounds to create subtle structural differentiation.
- **Fog (#D1D5DB)**: The primary content color, providing high legibility without the harshness of pure white.
- **Signal Red (#DC2626)**: Reserved strictly for deadlines, critical errors, and terminal states.
- **Warning Amber (#F59E0B)**: Indicates legal risks, pending verification, or flagged inconsistencies.
- **Success Green (#10B981)**: Denotes verified evidence, completed filings, and secure states.

## Typography
The typography system uses a dual-font strategy to separate narrative instruction from raw data.

- **Inter** is the structural typeface, used for UI labels, instructions, and headers. It provides a modern, neutral clarity.
- **JetBrains Mono** is used for all "Evidence Data"—dates, timestamps, file sizes, receipt numbers, and status indicators. The monospaced nature ensures vertical alignment in dense tables and emphasizes the technical/legal nature of the content.

All headings are compact with tight letter-spacing to maintain the industrial aesthetic. Labels use uppercase monospaced type to signify "Meta-Data."

## Layout & Spacing
This design system utilizes a **Fixed Grid** model optimized for high-density information throughput. The layout is structured on a 4px baseline shift to ensure precise alignment of borders and text.

- **Desktop**: 12-column grid with narrow 12px gutters to maximize content real estate.
- **Tablet**: 8-column grid with 12px gutters.
- **Mobile**: 4-column grid with 16px side margins.

Containers should prioritize vertical stacking of "Evidence Panels." Padding is intentionally tight (8px to 12px) to minimize scrolling and keep critical status indicators "above the fold." Use horizontal dividers rather than whitespace to separate logical groups.

## Elevation & Depth
In alignment with the industrial theme, this design system rejects shadows and soft blurs. Depth is conveyed exclusively through **Tonal Layering** and **Severe Borders**.

- **Level 0 (Base)**: Charcoal (#121212).
- **Level 1 (Panels)**: Deep Slate (#1C1C1C) with a 1px solid border (#374151).
- **Level 2 (Active/Hover)**: Deep Slate (#1C1C1C) with a 1px solid border (#9CA3AF).

Interactive elements do not "lift" off the page; they change border intensity or background contrast. This creates a flat, "instrument-panel" feel where everything feels physically connected to the machine.

## Shapes
The shape language is strictly **Geometric and Rigid**. 

- **Default Radius**: 0px. All containers, buttons, and input fields must have sharp corners to reinforce the legalistic and unyielding nature of the system.
- **Exception**: A maximum 2px radius may be applied to very small components (like status dots or checkboxes) if required by technical rendering constraints to prevent "aliasing," but 0px is the system standard.
- **Borders**: Use 1px borders consistently. 2px borders are reserved only for "Signal" states (errors/deadlines).

## Components

### Buttons
- **Primary**: Fog background, Charcoal text. Sharp corners. Bold Inter.
- **Secondary**: Transparent background, 1px Fog border, Fog text.
- **Critical (Action)**: Signal Red background, Fog text. Used for "Final Submission" or "Delete Evidence."

### Status Chips
Status chips are compact and utilize JetBrains Mono.
- **Known**: Slate background, Fog text, 1px border.
- **Verified**: Dark green tint background, Success Green border/text.
- **Flagged**: Dark amber tint background, Warning Amber border/text.

### Evidence Panels & Document Rows
Rows should be 32px-40px in height. Use 1px dividers. Every row must include a monospaced timestamp and a unique ID. Document icons are replaced by 3-letter uppercase extensions (e.g., [PDF], [JPG]).

### Input Fields
Strictly rectangular. Background is #121212, border is #374151. On focus, the border changes to Fog (#D1D5DB). Error states use a Signal Red 2px bottom border.

### Checkboxes & Radios
Square-only. No rounded corners. High contrast checkmark (Success Green) when active.

### Operator Console (New Component)
A fixed footer or sidebar displaying a real-time log of actions (e.g., "FILE_UPLOADED", "RECEIPT_GENERATED") in JetBrains Mono at 11px. This reinforces the "operator" experience.