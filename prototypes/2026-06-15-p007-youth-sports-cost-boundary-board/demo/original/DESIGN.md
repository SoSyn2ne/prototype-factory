---
name: Calm Consumer
colors:
  surface: '#f9f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f9f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeef'
  surface-container-high: '#e8e8e9'
  surface-container-highest: '#e2e2e3'
  on-surface: '#1a1c1d'
  on-surface-variant: '#434842'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f1f1'
  outline: '#737871'
  outline-variant: '#c3c8c0'
  surface-tint: '#4f6450'
  primary: '#4c614d'
  on-primary: '#ffffff'
  primary-container: '#657a65'
  on-primary-container: '#f7fff3'
  inverse-primary: '#b6cdb4'
  secondary: '#85513c'
  on-secondary: '#ffffff'
  secondary-container: '#feb99e'
  on-secondary-container: '#794732'
  tertiary: '#5d5c58'
  on-tertiary: '#ffffff'
  tertiary-container: '#767470'
  on-tertiary-container: '#fdffdf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e9d0'
  primary-fixed-dim: '#b6cdb4'
  on-primary-fixed: '#0d1f10'
  on-primary-fixed-variant: '#384c39'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#fbb79c'
  on-secondary-fixed: '#341102'
  on-secondary-fixed-variant: '#693a26'
  tertiary-fixed: '#e5e2dc'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#f9f9fa'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
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
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is centered on the "Calm Consumer" philosophy—a supportive, shame-free environment designed to help parents make thoughtful financial and lifestyle decisions. The aesthetic moves away from the cold, anxiety-inducing visuals of traditional fintech and toward a warm, domestic, and analytical yet gentle atmosphere.

The design style is **Soft Minimalist with Tactile accents**. It leverages heavy whitespace and a warm, organic color palette to reduce cognitive load. The UI should feel like a well-organized physical planner—reliable and structured, but soft to the touch. Visual priority is given to clarity and emotional grounding, ensuring that users feel empowered rather than overwhelmed by their data.

## Colors
The palette is rooted in nature and the home. It avoids pure whites and blacks to prevent eye strain and "clinical" feelings.

- **Primary (Sage Green):** Used for "Keep," "Save," and positive affirmations. It represents growth and sustainability.
- **Secondary (Warm Clay):** Used for "Pause," "Cap," or boundaries. It is distinct and visible but lacks the urgency or "error" connotations of bright red.
- **Surface (Oatmeal/Cream):** The foundation of the UI. This warm neutral (#F2EFE9) creates a soft backdrop that feels more inviting than a stark white screen.
- **Text (Deep Charcoal):** High-contrast readability (#2F3132) without the harshness of pure black.

## Typography
This design system employs a sophisticated pairing of a warm serif and a systematic sans-serif.

- **Playfair Display** is used for headlines and display text. Its editorial quality brings an authoritative yet human touch to the decision-making process.
- **Inter** is used for all functional UI elements, body copy, and data points. Its high x-height and clean apertures ensure maximum legibility for busy parents.

Line heights are intentionally generous to improve readability and maintain a sense of "airiness" within the layout.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a max-width of 1200px for desktop to prevent eye-travel fatigue.

- **Grid:** A 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Rhythm:** An 8px baseline grid governs all vertical rhythm.
- **Padding:** High-level containers (cards and sections) should use `lg` (48px) padding on desktop to maintain the "Calm" aesthetic. On mobile, this scales down to `md` (24px).
- **Margins:** External page margins are generous to frame the content as a focused activity.

## Elevation & Depth
Depth in this design system is created through **Tonal Layering** and **Ambient Shadows**. 

- **Surface Tiers:** The main background is Oatmeal. Interactive elements or focused sections sit on "Paper" (Pure White) surfaces to create a subtle lift.
- **Shadows:** Use extremely soft, low-opacity shadows (Opacity: 4-6%) with a large blur radius (16px to 32px). The shadow color should be tinted with the Warm Clay or Sage colors rather than pure grey to maintain the organic feel.
- **Depth Levels:**
  - Level 0: Main Oatmeal background.
  - Level 1: White cards with a 1px soft oatmeal border.
  - Level 2: Active items with a gentle ambient shadow.

## Shapes
The shape language is dominated by soft, approachable curves. The base corner radius is 16px (`rounded-md` in this system), which creates a friendly, non-threatening container for information. 

- Smaller elements like tags or checkboxes use 8px.
- Large containers and cards use 24px or 32px (`rounded-xl`).
- Buttons are never fully squared; they should feel "pill-like" or heavily rounded to encourage interaction without friction.

## Components
Consistent implementation of these components ensures the "Calm Consumer" experience remains gentle and supportive.

- **Buttons:** 
  - *Primary (Sage):* Solid Sage Green with White text. High-contrast, used for confirmation.
  - *Secondary (Clay):* Outlined or soft-filled Clay for "Pause" actions.
  - *Ghost:* No background, just Charcoal text for low-priority actions.
- **Cards:** White backgrounds with 16px-24px corner radius. Use 1px borders in a darker Oatmeal shade rather than heavy shadows to define boundaries.
- **Chips/Tags:** Rounded-full (pill-shaped) with low-saturation backgrounds. Used for categorizing spending or family needs.
- **Input Fields:** Thick 2px borders in a light Sage when focused. Use Inter Medium for input text to ensure clarity.
- **Progress Indicators:** Use Sage Green with soft, rounded caps. Avoid "Red" for negative progress; use a muted Grey-Clay transition instead.
- **Decision Toggles:** Larger than standard mobile switches, with tactile "sliding" animations to make choices feel deliberate and meaningful.