---
name: Velocity Kinetic
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#b9cac4'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#83948f'
  outline-variant: '#3a4a46'
  surface-tint: '#00dfc1'
  primary: '#d7fff3'
  on-primary: '#00382f'
  primary-container: '#00f5d4'
  on-primary-container: '#006c5c'
  inverse-primary: '#006b5b'
  secondary: '#ffb59a'
  on-secondary: '#5a1b00'
  secondary-container: '#ff5e07'
  on-secondary-container: '#531900'
  tertiary: '#f7f6ff'
  on-tertiary: '#292f48'
  tertiary-container: '#d3d9f9'
  on-tertiary-container: '#585e79'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#26fedc'
  primary-fixed-dim: '#00dfc1'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005144'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#bfc5e4'
  on-tertiary-fixed: '#141a32'
  on-tertiary-fixed-variant: '#3f465f'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  perforation-size: 12px
---

## Brand & Style

The brand personality is high-energy, decisive, and unapologetically playful. Designed for "point-hackers" and travel enthusiasts who treat booking as a sport, the design system avoids the sterile aesthetic of traditional finance apps in favor of a **Vibrant / Experimental** style. It captures the adrenaline of a last-minute deal and the satisfaction of a "win."

The UI leans into **Tactile Graphicism**, blending physical travel metaphors (stickers, perforated tickets) with digital-first vibrancy. The emotional response should be one of urgency and confidence—transforming complex data into a "game-on" decision environment.

## Colors

This design system utilizes a high-contrast dark mode foundation to allow vibrant primary colors to "pop" with neon-like intensity.

- **Vivid Teal (#00F5D4):** Represents "cool" deals, efficiency, and high-value redemptions.
- **Flame Orange (#FF5C00):** Signals "heat," urgency, and FOMO. Used for high-priority alerts and CTA actions.
- **Deep Navy (#0A1128):** The foundational canvas for cards and structural elements, providing a sophisticated backdrop that feels like a night sky or a premium boarding pass.
- **Neon Accents:** Used sparingly for state-specific feedback: **Green** for successful redemptions and **Lemon** for warnings or "expiring soon" alerts.

## Typography

The typography strategy balances "game-like" impact with technical precision.

- **Headlines:** Uses **Syne** for its chunky, geometric, and expressive character. It should be set with tight leading and slight negative tracking to feel impactful and urgent.
- **Body:** **Plus Jakarta Sans** provides a friendly but modern and highly readable experience against dark backgrounds.
- **Data/Labels:** **Space Mono** is used for flight numbers, point totals, and ticket metadata to reinforce the technical, "travel document" feel of the app.

## Layout & Spacing

The layout follows a **Fluid Grid** system with generous internal padding to accommodate "sticker" overlays and decorative elements without feeling cluttered.

- **Grid:** 12-column desktop / 4-column mobile.
- **Spacing Rhythm:** Based on an 8px root. Use 16px for standard gutters and 32px for vertical section breathing room.
- **Safe Areas:** Cards should maintain a "safe zone" of 24px from edges to allow for decorative "perforation" cutouts (12px radius) on the sides of boarding pass components.

## Elevation & Depth

This system avoids traditional soft shadows in favor of **Tonal Layering** and **High-Contrast Outlines**.

- **Surface Tiers:** Background is the deepest Navy. Level 1 containers (cards) use a slightly lighter Navy or a subtle gradient.
- **Glow Effects:** Instead of shadows, use "Neon Underglows" (outer glows) using the Primary Teal or Orange colors to indicate active selection or "hot" deals.
- **Tactile Stickers:** Verdict stickers use a 2px solid black border and a 4px hard-drop offset shadow (100% opacity) to look like they were slapped onto the UI.

## Shapes

The shape language is defined by a mix of **Large Radius** corners and **Geometric Disruptions**.

- **Containers:** Standard cards use a 1rem (16px) radius. 
- **Stickers:** Verdict stickers should have a slight (2-5 degree) random rotation to appear hand-placed.
- **Perforations:** Boarding pass cards feature semi-circular "punches" on the left and right edges where the "ticket stub" would detach.

## Components

- **Boarding Pass Cards:** Deep Navy background with a vertical or horizontal dashed line representing the perforation. Top section contains the "Deal Heat," bottom section contains the "Book Now" CTA.
- **Thermometer Dials:** Semi-circular gauges using a gradient transition from Teal (Cold/Save) to Orange (Hot/Book). The needle should be a sharp, high-contrast white triangle.
- **Verdict Stickers:** Bold, rectangular badges with heavy borders. "BOOK IT" in Neon Green, "HARD PASS" in Flame Orange. Set in All-Caps Syne.
- **Buttons:** Large, pill-shaped, and high-saturation. Primary buttons use a linear gradient of Teal-to-Blue. When hovered, they should "grow" slightly (1.05x scale).
- **Point Trackers:** Displayed in monospaced font within a pill-shaped container that mimics a luggage tag.
- **Input Fields:** Thick 2px outlines that change from White to Teal on focus. Use Space Mono for placeholder text.