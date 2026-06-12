---
name: Municipal Operator
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
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#00190e'
  on-tertiary: '#ffffff'
  tertiary-container: '#00301e'
  on-tertiary-container: '#00a472'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-compact: 8px
  stack-standard: 16px
---

## Brand & Style
The design system is engineered for the rigorous, high-stakes environment of municipal governance and architectural review. It prioritizes clarity over comfort, adopting an **operator-dense** aesthetic that mirrors technical blueprints and government permits. The target audience includes HOA board members, building engineers, and city planners who require a high-information-density environment to make informed structural and legal decisions.

The style is a hybrid of **Modern Corporate** and **Functional Brutalism**. It utilizes a strict structural grid, crisp 1px borders, and high-contrast typography to remove ambiguity. Every UI element is designed to feel like a "recorded document," evoking an emotional response of authority, precision, and bureaucratic reliability.

## Colors
The palette is rooted in structural materials—slate and steel. This desaturated foundation ensures that functional highlights, specifically for status and action, are immediately identifiable.

- **Deep Slate (#1e293b):** Used for primary headings, sidebars, and structural navigation to provide a heavy, authoritative frame.
- **Steel Blue (#334155):** Used for interactive elements, secondary containers, and iconography.
- **Approval Green (#10b981):** A high-visibility success token reserved exclusively for approved statuses, valid permits, and completed checklist items.
- **Cool Grey (#f8fafc):** The primary canvas color, providing a clean, "paper-white" background for dense form entry.
- **Border Grey (#cbd5e1):** A specific neutral used for the ubiquitous 1px strokes that define the grid.

## Typography
Typography is the primary tool for information hierarchy. We use **Hanken Grotesk** for its sharp, contemporary terminals and exceptional legibility at small sizes. 

To distinguish between human-readable content and technical/system data, we employ **JetBrains Mono**. This monospaced face is used for property IDs, load capacity metrics, timestamps, and permit numbers. 

All labels use a high-density "Caps + Mono" style to simulate the look of physical filing systems and technical diagrams. Leading is kept tight to maximize the number of visible data points without sacrificing scanability.

## Layout & Spacing
This design system utilizes a **Fixed 12-Column Grid** for desktop and a **4-Column Grid** for mobile. The layout is intentionally "tight," using a 4px base spacing unit to allow for high-density form layouts and side-by-side document comparisons.

- **Density:** Elements are packed closely to allow reviewers to see entire application sections without scrolling. 
- **Dividers:** Use 1px solid strokes (Border Grey) instead of white space to separate logical sections.
- **Sidebars:** A fixed 280px left-hand navigation is mandatory for desktop to provide a persistent "Table of Contents" for the application.

## Elevation & Depth
In keeping with the "Operator" aesthetic, this design system avoids soft shadows and organic depth. Instead, it uses **Tonal Layering and Inset Borders**.

- **Surface Levels:** The base layer is Cool Grey (#f8fafc). Secondary containers (like form groups) use a pure white background with a 1px solid border.
- **Active State:** Elements in focus or active use a 2px solid border in Steel Blue rather than a shadow.
- **Modals:** When required, modals use a "Heavy Stroke" approach—a 2px black or Deep Slate border with a sharp, 4px offset "hard shadow" to denote physical stacking without using blurs.

## Shapes
The design system employs **Sharp (0px)** corners for all primary containers, inputs, and buttons. This reinforces the technical, blueprint-like nature of the application. The only exception is status badges (e.g., "Approved"), which may use a 2px radius to slightly soften their appearance and distinguish them from interactive buttons.

## Components

### Buttons & Controls
- **Primary Button:** Deep Slate background, white text, sharp corners, uppercase monospaced labels. 
- **Action Links:** Steel Blue with a persistent underline, using the `data-mono` type style.

### Checklist & Inputs
- **Permit Checkboxes:** Square, 16px boxes with a thick checkmark in Approval Green when selected.
- **Input Fields:** 1px border with a gray background label "tab" sitting on the top-left border line.
- **Status Badges:** High-contrast blocks. Use Approval Green for "Passed," Deep Slate for "Pending," and a cautionary Orange for "Incomplete."

### Documentation Cards
- **Technical Header:** Every card must lead with a monospaced "Ref ID" or "Document Type" in the top right corner.
- **Data Tables:** Zebra-striping is used for rows (Cool Grey / White) to assist in cross-row reading of technical specs.

### Specialized Components
- **The "Vault" Sidebar:** A condensed, vertical list of uploaded PDF manifests with file size and "Digital Signature" verification icons.
- **Approval Stamp:** A prominent, decorative component for the final view, using a thick 3px border and rotated text to simulate a physical ink stamp.