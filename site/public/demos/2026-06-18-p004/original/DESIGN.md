---
name: Calm Family Care
colors:
  surface: '#fff8f2'
  surface-dim: '#dfd9d3'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ed'
  surface-container: '#f3ede7'
  surface-container-high: '#ede7e1'
  surface-container-highest: '#e7e1dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#424841'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f6f0ea'
  outline: '#737971'
  outline-variant: '#c2c8bf'
  surface-tint: '#48654b'
  primary: '#466349'
  on-primary: '#ffffff'
  primary-container: '#5e7c60'
  on-primary-container: '#f8fff3'
  inverse-primary: '#aecfae'
  secondary: '#914a3b'
  on-secondary: '#ffffff'
  secondary-container: '#fda18e'
  on-secondary-container: '#773528'
  tertiary: '#5f5c55'
  on-tertiary: '#ffffff'
  tertiary-container: '#78746d'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#caebc9'
  primary-fixed-dim: '#aecfae'
  on-primary-fixed: '#05210c'
  on-primary-fixed-variant: '#314d34'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#ffb4a4'
  on-secondary-fixed: '#3b0902'
  on-secondary-fixed-variant: '#743325'
  tertiary-fixed: '#e7e2d9'
  tertiary-fixed-dim: '#cbc6bd'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494640'
  background: '#fff8f2'
  on-background: '#1d1b18'
  surface-variant: '#e7e1dc'
typography:
  headline-xl:
    fontFamily: Literata
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 40px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is centered on the "Calm-Consumer" philosophy, specifically tailored for family care coordination. The intent is to lower the heart rate of users managing complex schedules and emotional tasks. It moves away from the clinical "productivity" aesthetic into a space that feels like a shared digital home.

The style is **Warm Minimalism with Tactile Softness**. It prioritizes heavy whitespace to reduce cognitive load and uses a "Soft Surface" approach where elements feel resting rather than floating. The emotional response should be one of reassurance, capability, and gentle accountability, avoiding any visual elements that could feel aggressive or demanding.

## Colors
The palette is rooted in nature-inspired, desaturated tones to foster an environment of serenity.

- **Primary (Sage Green):** Used for growth-oriented actions, confirmation, and primary progress. It is a grounding color that represents health and stability.
- **Secondary (Soft Terracotta):** Reserved for human elements, urgent reminders, or personal highlights. It provides warmth without the "alert" stress of pure red.
- **Surface (Creams & Beiges):** The foundation of the UI. Instead of pure white (#FFFFFF), we use `#FDFBF7` for the base and `#F5EFE6` for containers to reduce eye strain.
- **Neutral (Warm Greys):** Used for typography and iconography to maintain high legibility while appearing softer than black.

## Typography
This design system utilizes a sophisticated pairing to balance function and emotion.

- **Literata (Headings):** A soft, bookish serif that adds a humanistic, editorial touch. It makes announcements and section headers feel like thoughtful communication rather than system alerts.
- **Plus Jakarta Sans (Body & UI):** A modern, friendly sans-serif with open apertures and rounded shapes. It ensures that functional data—dates, times, and task lists—is highly legible and approachable.

Keep line lengths for body text between 45-75 characters to maintain a comfortable reading pace for stressed users.

## Layout & Spacing
The layout follows a **Fluid Content** model with strict maximum widths to prevent information from feeling overwhelming on large displays.

- **The "Breathable" Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile.
- **Vertical Rhythm:** A base 8px unit drives all spacing. For "Family Threads" or task lists, use generous 24px vertical gaps (`stack-md`) to ensure items don't feel "cramped" or urgent.
- **Negative Space:** Margin areas should be treated as functional elements that provide "visual rest." Avoid edge-to-edge content; always maintain a minimum 20px safe area on mobile.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Ambient Shadows** rather than stark borders.

- **Layer 0 (Base):** The warmest cream/beige (`#FDFBF7`).
- **Layer 1 (Cards/Containers):** Slightly lighter or darker than the base with a very soft, diffused shadow (15% opacity, 20px blur, tinted with the primary green).
- **Layer 2 (Modals/Popovers):** Higher contrast with a slightly more defined shadow to draw focus, but never harsh.
- **Interactions:** When an element is pressed, it should "sink" into the surface (subtle inner shadow) to give a tactile, squishy feel that mimics physical buttons.

## Shapes
The shape language is consistently **Rounded**. There are no sharp corners in this design system. 

Standard components use a 0.5rem (8px) radius. Larger cards and primary containers use a 1rem (16px) radius to emphasize a soft, "pillowed" appearance. Avatars and main action buttons use a 2rem (32px) radius or full "pill" shape to appear friendly and non-threatening.

## Components
- **Buttons:** Primary buttons use the Sage Green background with white text. Secondary buttons use a tonal beige background with Sage text. Shapes are always pill-style (fully rounded) to maximize "softness."
- **Cards:** Cards should have no borders. Instead, use a subtle tonal shift or the ambient shadow defined in the Elevation section.
- **Task Chips:** Use the Soft Terracotta for "Personal" tasks and Sage for "Shared" tasks. Chips should be small, rounded, and use the `label-sm` typography.
- **Inputs:** Input fields should have a soft beige fill instead of a white background. On focus, the border should glow softly with a Sage Green tint rather than a hard stroke.
- **Lists:** Lists in the family coordination view should have increased line height and clear separation, using horizontal dividers that are only 10% opaque to keep the interface light.
- **Progress Indicators:** Use soft, rounded bars (not thin lines) to show completion, emphasizing the journey rather than just the deadline.