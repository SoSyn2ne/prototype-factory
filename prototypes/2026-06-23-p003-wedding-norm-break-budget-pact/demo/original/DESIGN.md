---
name: Calm-Consumer Narrative
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#434843'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#737873'
  outline-variant: '#c3c8c1'
  surface-tint: '#4f6354'
  primary: '#475b4c'
  on-primary: '#ffffff'
  primary-container: '#5f7464'
  on-primary-container: '#e2f9e5'
  inverse-primary: '#b5ccb9'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#55593e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d7255'
  on-tertiary-container: '#f3f7d2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e8d5'
  primary-fixed-dim: '#b5ccb9'
  on-primary-fixed: '#0c1f13'
  on-primary-fixed-variant: '#374b3d'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#e1e6c2'
  tertiary-fixed-dim: '#c5c9a7'
  on-tertiary-fixed: '#1a1d07'
  on-tertiary-fixed-variant: '#45492f'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 40px
  section-gap: 80px
---

## Brand & Style

The design system is rooted in the "Calm-Consumer" movement—a direct response to the high-pressure, often overwhelming industry of wedding planning. The brand personality is intentional, reassuring, and gently authoritative, acting as a supportive partner rather than a rigid financial auditor. 

The aesthetic leans into **Minimalism** with a **Tactile** warmth. It avoids the clinical coldness of traditional fintech in favor of soft, organic transitions and a generous use of whitespace. The goal is to lower the user's heart rate while they interact with complex financial data. Every interaction should feel like a deep breath, emphasizing clarity and progress over perfection and excess.

## Colors

The palette is anchored in a "New Earth" spectrum. The primary color is a **Muted Sage**, chosen for its natural association with balance and growth. The secondary color is a **Soft Clay**, used for call-to-actions and highlights to provide warmth without the aggression of standard marketing yellows or oranges. 

The background is a **Warm White** (#FAFAF9) rather than pure white to reduce eye strain and digital glare. For state management, we replace "Alert Red" with a **Deep Rose** (#B5838D) and "Warning Amber" with a **Golden Sand** (#EBCB8B). These tones convey urgency and attention without triggering the "error" anxiety typical of financial tools.

## Typography

This design system uses **Plus Jakarta Sans** across all levels to maintain a cohesive, friendly, and modern personality. The font's soft curves and open counters make long-form financial data feel approachable.

To reduce "wedding pressure," we favor medium weights over bold or black weights. Large display titles use subtle negative letter spacing to feel "tucked in" and intentional. Body text is set with a generous line-height to ensure readability during stressful planning sessions. Labels and micro-copy use a slightly wider tracking to maintain clarity at small scales.

## Layout & Spacing

The layout follows a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The philosophy is "Air over Information." We intentionally increase the vertical rhythm between sections to create natural pause points for the user.

- **Stacking:** Use an 8px base unit. Components should never feel crowded; prefer 24px or 32px margins inside cards to keep data breathing.
- **Reflow:** On mobile, complex budget tables reflow into vertical "Budget Cards" to avoid horizontal scrolling, which can feel disorganized and stressful.
- **Margins:** Wider-than-average page margins are used on desktop to center the user's focus and minimize peripheral distractions.

## Elevation & Depth

We avoid high-contrast shadows to prevent the UI from feeling "heavy." Instead, we use **Tonal Layers** and **Ambient Shadows**.

- **Surface Tiers:** Backgrounds use the neutral base (#FAFAF9). Interactive containers use a pure white background with a very soft, diffused shadow (15% opacity, 20px blur, 4px offset) to appear as if they are floating gently above the surface.
- **Depth through Color:** Non-interactive background elements (like calculator sidebars) use the Muted Sage or Soft Clay at 5-10% opacity to create functional zones without physical elevation.
- **Focus States:** Instead of thick borders, focused inputs use a soft 4px outer glow in the primary sage color.

## Shapes

The shape language is consistently **Rounded**. Sharp corners are eliminated to maintain the gentle aesthetic. 

- **Standard Elements:** Buttons and input fields use a 0.5rem radius.
- **Containers:** Large cards and budget summaries use a 1rem radius (rounded-lg) to feel like safe, enclosed spaces. 
- **Icons:** Use icons from a rounded-cap library to match the typography and container language.

## Components

**Buttons:** 
Primary buttons are solid Muted Sage with white text. Secondary buttons are "Ghost" style with a Soft Clay border. Tertiary buttons are text-only with an underline on hover. All buttons feature a 200ms transition on hover for a "soft land" feel.

**Accountability Cards:**
Budget cards use a "Gentle State" indicator. When a category is over budget, the border turns a soft Rose, and the background gains a 5% Rose tint. No "X" icons; instead, use a small "Caution" icon in the same Rose tone.

**Input Fields:**
Fields have a subtle Clay bottom-border that grows into a full-round stroke when active. Labels always sit above the field—never placeholder-only—to ensure the user never loses context.

**Progress Bars:**
Unlike standard thin bars, these are thick (12px) with fully rounded ends. The "filled" portion uses a gradient from Muted Sage to Tertiary Green to symbolize growth rather than just "filling a bar."

**Accountability Pact Sliders:**
A custom component for the "Norm Break" feature—a toggle that allows users to "pact" out of traditional expenses. These should feel tactile, with a large, draggable thumb and a soft "haptic" visual pop when the pact is sealed.