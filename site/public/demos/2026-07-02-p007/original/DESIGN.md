---
name: Atelier Archive
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
  on-surface-variant: '#4c4546'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1c1a'
  on-tertiary-container: '#858481'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1c1c1a'
  on-tertiary-fixed-variant: '#474745'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
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
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  baseline: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for the high-stakes environment of Digital Product Passports, where regulatory compliance meets luxury craftsmanship. The brand personality is **archival, authoritative, and focused**, eschewing the typical "bubbly" SaaS aesthetic for a style that feels like a high-end design studio or a prestigious museum archive.

The design style is a blend of **Minimalism and Editorial Brutalism**. It prioritizes high-quality typography, intentional whitespace, and sharp structural integrity. The goal is to evoke an emotional response of absolute precision and long-term value, treating every product data point as a permanent entry in a digital ledger.

## Colors

The palette is rooted in the concept of "Ink on Paper." It uses a stark, high-contrast foundation to ensure maximum readability for complex compliance data.

- **Primary (Ink Black):** Used for all high-level headings, primary buttons, and critical UI borders. It represents the "permanent record."
- **Background (Parchment White):** A slightly off-white `#F8F5F2` reduces eye strain compared to pure white while maintaining an editorial feel.
- **Secondary (Compliance Amber):** A muted, sophisticated amber used specifically for "High Alert" items, compliance gaps, or incomplete passport data.
- **Neutral (Slate Gray):** Reserved for secondary metadata, labels, and inactive states.

## Typography

The typographic system utilizes a three-way pairing to balance editorial elegance with functional data density.

1.  **Libre Caslon Text:** Used for titles and section headers to provide an authoritative, archival feel.
2.  **Hanken Grotesk:** The workhorse for descriptions and interface elements, chosen for its contemporary clarity and professional tone.
3.  **JetBrains Mono:** Employed specifically for technical data, Product IDs, and QR code metadata to distinguish "raw data" from "narrative content."

Maintain tight tracking on display headings and generous line height for body text to ensure a luxurious reading experience.

## Layout & Spacing

This design system follows a **Fixed Grid** philosophy for its primary workspace containers to mirror the structured nature of a printed dossier.

- **Grid:** A 12-column grid on desktop with generous 64px outer margins to create an "airy" editorial frame.
- **Rhythm:** An 8px spacing system governs all vertical stacks.
- **Alignment:** Use heavy left-alignment. Avoid centering elements; the "studio" look relies on intentional asymmetry and strong vertical anchors.
- **Mobile:** Transition to a 4-column grid with reduced margins (20px). Headlines should scale down significantly to maintain the "book-like" proportion.

## Elevation & Depth

To maintain the "Ink on Paper" aesthetic, this design system avoids traditional shadows. Depth is created through **Tonal Layers and Bold Outlines**.

- **Surface Tiers:** Use subtle shifts in background color (e.g., from Parchment White to a slightly darker Slate tint) to define nested content areas.
- **Outlines:** Instead of shadows, use 1px solid borders in Ink Black or soft Slate for cards and inputs.
- **Glassmorphism (Limited):** Use a subtle backdrop blur on sticky navigation headers only, maintaining a 95% opacity to keep the UI grounded and physical.
- **Focus:** Active states use a high-contrast 2px solid border rather than a glow.

## Shapes

The shape language is **Sharp (0px)**. 

Every element—buttons, cards, input fields, and images—should have square corners. This reinforces the "archival" and "technical" nature of the product passport, mimicking the edges of paper, labels, and industrial stamps. The only exception is the QR code itself, which may contain its own internal rounding patterns as required by hardware scanning standards.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Ink Black with white Hanken Grotesk Bold text. No rounding.
- **Secondary Action:** 1px Black border, transparent background.
- **Inputs:** Simple bottom-border only (1px Slate), or a full square box for complex data entry. Labels always use the `label-caps` style positioned above the field.

### Editorial Product Cards
- Cards feature a large product image with 0px radius. 
- Metadata is displayed in a 2-column split underneath the image using `data-mono` for IDs and `headline-md` for the product name.

### Compliance Badges
- Instead of "pills," use square-cornered boxes.
- "High-Alert" gaps use a Secondary Amber background with Black text.

### QR/Label Mockups
- Digital Product Passport (DPP) triggers should be styled as physical "Labels." Use `JetBrains Mono` for all text on these components to simulate industrial thermal printing.

### Lists
- Data-heavy lists should use alternating row backgrounds (Parchment to Light Slate) with no vertical borders, creating a clean, ledger-like appearance.