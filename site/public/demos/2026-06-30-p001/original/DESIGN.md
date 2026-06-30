---
name: Shelf Tag Price Memory
colors:
  surface: '#f7fafb'
  surface-dim: '#d7dadb'
  surface-bright: '#f7fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f5'
  surface-container: '#ebeeef'
  surface-container-high: '#e6e9ea'
  surface-container-highest: '#e0e3e4'
  on-surface: '#181c1d'
  on-surface-variant: '#414845'
  inverse-surface: '#2d3132'
  inverse-on-surface: '#eef1f2'
  outline: '#727975'
  outline-variant: '#c1c8c4'
  surface-tint: '#46645b'
  primary: '#46645b'
  on-primary: '#ffffff'
  primary-container: '#5e7d73'
  on-primary-container: '#ffffff'
  inverse-primary: '#adcec2'
  secondary: '#5f5e59'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2db'
  on-secondary-container: '#65645f'
  tertiary: '#84530e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a16b26'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8eade'
  primary-fixed-dim: '#adcec2'
  on-primary-fixed: '#012019'
  on-primary-fixed-variant: '#2f4c44'
  secondary-fixed: '#e5e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#ffddba'
  tertiary-fixed-dim: '#fcb96d'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#f7fafb'
  on-background: '#181c1d'
  surface-variant: '#e0e3e4'
typography:
  headline-lg:
    fontFamily: Source Sans 3
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Source Sans 3
    fontSize: 26px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Sans 3
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  button:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin-mobile: 20px
  container-margin-desktop: 64px
  gutter: 24px
  section-gap: 48px
---

## Brand & Style

The brand personality of the design system is focused on **Consumer Advocacy** through a **Calm-Protective** lens. The target audience includes budget-conscious household managers and meticulous shoppers who value accuracy but find traditional "deal-hunting" apps stressful and aggressive.

The design style is **Soft Minimalist** with a focus on **Tactile Reliability**. It avoids the frenetic energy of retail by utilizing high-quality whitespace and a "Quiet Professional" aesthetic. The goal is to evoke a sense of relief—shifting the burden of memory from the user to the interface. By utilizing soft edges and a restrained palette, the system transforms price tracking from a chore into a curated experience of financial protection.

## Colors

The palette is designed to de-escalate the typical retail "alert" mentality. 

- **Primary (Sage Green):** Used for "Confidence" indicators, verified price matches, and primary action buttons. It signals growth and safety.
- **Secondary (Creamy Off-White):** The foundation for all surfaces. This warm base prevents the "hospital-sterile" look of pure white and reduces eye strain during long shopping sessions.
- **Neutral (Deep Charcoal):** Used for all primary text and iconography. It maintains 12:1 contrast ratios on cream backgrounds while remaining softer than absolute black.
- **Warning (Muted Amber):** Specifically for price mismatches. It acts as a "Caution" rather than a "Danger" signal, encouraging the user to investigate rather than panic.

## Typography

The design system utilizes **Source Sans 3** for its exceptional legibility and friendly, open apertures. To ensure a "calm" reading experience, line heights are set to a generous 1.6x for body copy, allowing the eye to track easily across grocery lists.

A secondary font, **JetBrains Mono**, is used sparingly for technical data points like "Original Price" or "Receipt IDs" to give the interface a subtle "archival" or "receipt" quality that reinforces the theme of "Price Memory."

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (max-width 1200px) to maintain a centered, focused reading experience. On mobile, the system transitions to a single-column stack with 20px safe-area margins.

Horizontal breathing room is prioritized. Cards and sections are separated by large gaps (`section-gap`) to prevent the information density from feeling overwhelming. Use an 8px base unit for all padding and margin increments.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Ambient Shadows**. 

Surfaces are not "lifted" high off the page; instead, they sit just above the base layer using a very soft, diffused shadow (Blur: 20px, Spread: -5px, Opacity: 6% Neutral). This creates a "pillow-like" effect. 

For the "Confidence Badges," a subtle inner-glow or a 1px soft-sage stroke is preferred over a heavy drop shadow to indicate importance without adding visual weight.

## Shapes

The shape language is consistently **Rounded**. The standard 0.5rem (8px) radius is used for small inputs, while primary cards and "Price Memory" timeline blocks use 1rem (16px) to emphasize the "protective" and "soft" brand nature. Buttons should always be fully rounded (pill-shaped) to distinguish them from data containers.

## Components

### Buttons
- **Primary:** Sage Green background with White text. Pill-shaped.
- **Secondary:** Transparent background with a 1.5px Charcoal border.
- **Success/Next Step:** Sage Green with a subtle "Confidence Glow" (2px primary-tinted outer blur).

### Price-Match Script Cards
These are the primary output of the tool. They should use the `secondary_color` background but feature a left-hand border in `primary_color`. Use **JetBrains Mono** for the script text to simulate a printed receipt or typewriter, making it feel like a "verifiable document."

### Confidence Badges
Circular or pill-shaped tags with a light Sage background (15% opacity) and deep Sage text. They appear next to prices that have been 100% verified by the "Memory" engine.

### Timeline Cards (Price Memories)
A vertical line (1px, Charcoal, 20% opacity) connects these cards. Each card features a "Price Point" dot. When a price is lower than the current average, the dot and the card's accent border turn Sage Green.

### Inputs
Search bars and price entry fields use the `secondary_color` (Cream) as the fill rather than white, making them feel like an integrated part of the soft interface rather than "holes" in the layout. Focus states use a 2px Sage Green ring.