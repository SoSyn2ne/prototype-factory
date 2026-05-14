---
name: Gothic Resurrection
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c8c8b0'
  on-secondary: '#303221'
  secondary-container: '#494a38'
  on-secondary-container: '#b9baa3'
  tertiary: '#ecb1ff'
  on-tertiary: '#520070'
  tertiary-container: '#170023'
  on-tertiary-container: '#c118ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e4e4cc'
  secondary-fixed-dim: '#c8c8b0'
  on-secondary-fixed: '#1b1d0e'
  on-secondary-fixed-variant: '#474836'
  tertiary-fixed: '#f9d8ff'
  tertiary-fixed-dim: '#ecb1ff'
  on-tertiary-fixed: '#320046'
  on-tertiary-fixed-variant: '#75009e'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Space Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  unit: 8px
  container-padding: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is a theatrical collision between Victorian mourning rituals and high-octane digital restoration. It is built for a creator recovery tool that treats "dead" content or accounts not as failures, but as subjects for occult digital revival. The aesthetic sits at the intersection of **Editorial Minimalism** and **Digital Brutalism**, utilizing heavy whitespace and classical proportions interrupted by aggressive, "toxic" interactive signals.

The emotional response is "Premium Rebellion." It avoids the friendly safety of SaaS dashboards in favor of a morbidly funny, authoritative, and cinematic experience. Every screen should feel like a page from a haunted fashion magazine—elegant, high-contrast, and slightly unsettling.

## Colors

This design system utilizes a high-contrast palette to establish its "Gothic" hierarchy. 
- **Funeral Black (#0A0A0A):** The primary canvas. It should feel deep and absolute, providing a void-like backdrop for content.
- **Aged Parchment (#F5F5DC):** Used for primary typography and card surfaces to evoke historical manuscripts and "living" documents.
- **Neon Resurrection (#BF00FF):** An electric purple used for high-value interactive states, "soul" indicators, and magic-themed actions.
- **Toxic Green (#39FF14):** Reserved for "life" signals, recovery progress, and success states. It represents the "chemical" spark of revival.

The color mode is strictly dark, though secondary surfaces may occasionally flip to Parchment with Black text for dramatic "flash" moments or critical warnings.

## Typography

The typographic strategy pairs the romantic, historical weight of **EB Garamond** with the cold, precise utility of **Space Mono**. 

Headlines should be treated as editorial titles. To achieve the "slightly distressed" look, headlines may use subtle SVG filters for grain or very slight jitter. Large display type should use tight letter spacing. 

Body text and data labels use Space Mono to ground the experience in the "Tech/SEO" reality of the product. All technical data, counts, and status indicators must remain in mono to emphasize the "digital extraction" nature of the tool.

## Layout & Spacing

This design system uses a **Fixed Grid** model inspired by luxury print magazines. On desktop, content is centered within wide margins (64px) to create a sense of focused importance.

- **Theatrical Symmetry:** Layouts should favor centered compositions for "Incantation" moments (modals, onboarding) and asymmetrical, staggered grids for "Recovery" feeds.
- **Rhythm:** An 8px base unit is used, but spacing between major sections should be exaggerated (80px, 120px) to maintain the "Minimalist" aesthetic.
- **Responsive Reflow:** On mobile, margins shrink to 16px, and multi-column card layouts collapse into a single, vertical "scroll of truth."

## Elevation & Depth

Elevation is achieved through **Tonal Layers** and **Grain Textures** rather than traditional shadows. 

- **Surface Tiers:** The base is #0A0A0A. Tier 1 containers (Cards) use a very dark grey (#121212) or the Aged Parchment (#F5F5DC) for high-contrast emphasis.
- **Thin Borders:** Hierarchy is primarily defined by 1px solid borders in Parchment or Neon Purple.
- **Glitch Artifacts:** Depth is suggested by "ghost" layers—elements that appear to have shifted 2-4px behind the primary element, often in a semi-transparent Neon Purple or Toxic Green.
- **Atmosphere:** A subtle film grain texture (overlay) should be applied globally to soften the digital edges and enhance the "Gothic" feel.

## Shapes

The shape language is **Sharp (0)**. 

In keeping with the rebellious and aggressive Gothic aesthetic, there are no rounded corners in this design system. Every card, button, and input field features 90-degree angles. This harsh geometry reinforces the "unrefined" and "theatrical" vibe. 

The only exception to the "line" rule is the use of circular "Life" pips (in Toxic Green) and decorative elements like thin, diamond-shaped separators.

## Components

- **Incantation Buttons:** Primary actions are solid Parchment with Black text. Hover states trigger a "Glitch" effect where a Purple/Green outline offsets from the button. Labels are in all-caps Space Mono.
- **Theatrical Cards:** Large, thin-bordered rectangles. When containing "Dead Content," the background is dark with parchment text. When "Resurrected," the card flips to a Parchment background with Black text.
- **Toxic Inputs:** Text fields are simple bottom-borders (1px Parchment). When focused, the border glows Neon Purple with a small "Scanning..." status label in the corner.
- **Status Chips:** Small, monospaced badges. A "Dead" status is grey/black; a "Resurrecting" status is pulsing Purple; a "Live" status is Toxic Green.
- **The Reaper's List:** List items feature high vertical padding and 1px separators. Each item should feel like an entry in a ledger.
- **Resurrection Progress:** Instead of standard bars, use segmented blocks in Toxic Green that fill with a flickering animation.