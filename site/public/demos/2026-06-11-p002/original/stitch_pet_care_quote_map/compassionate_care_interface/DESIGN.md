---
name: Compassionate Care Interface
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#3d4947'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#5c5c59'
  on-tertiary: '#ffffff'
  tertiary-container: '#757572'
  on-tertiary-container: '#fefcf8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#e4e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
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
  lg: 40px
  xl: 64px
  container-padding: 20px
  gutter: 16px
---

## Brand & Style
The design system focuses on empathy, clarity, and reassurance for pet owners facing difficult medical decisions. The brand personality is supportive, acting as a calm guide through complex surgical choices. 

The design style is a blend of **Soft Minimalism** and **Tactile Modernism**. It prioritizes heavy whitespace to reduce cognitive load during stressful moments. By avoiding sharp corners and sterile whites in favor of warm, organic tones, the UI creates a "sanctuary" feel rather than a clinical dashboard. High-quality typography and precise iconography ensure that despite the gentle aesthetic, the product is perceived as professional and medically authoritative.

## Colors
The palette is rooted in Earth-toned neutrals to lower user anxiety. 
- **Primary Teal (#0D9488):** Represents health, healing, and positive progression. Used for primary calls to action and "validated" states.
- **Secondary Amber (#D97706):** Used sparingly for status cues, pending reviews, or urgency that requires attention without inducing panic.
- **Background Cream (#FDFBF7):** Replaces pure white to reduce eye strain and provide a softer, more premium paper-like feel.
- **Text Dark Grey (#1F2937):** High-contrast but softer than pure black, ensuring maximum legibility for medical descriptions.

## Typography
This design system utilizes **Manrope** for its modern, balanced, and highly legible characteristics. The geometric yet friendly nature of the typeface supports the "precise but compassionate" brand narrative.

Hierarchy is maintained through deliberate weight shifts rather than excessive size changes. For mobile screens, headlines are slightly tightened to ensure key information (like surgical terms) remains above the fold. Body text uses a generous 1.5x line height to ensure readability of long-form medical explanations.

## Layout & Spacing
The layout philosophy follows a **Fluid Grid** with generous inner-container margins. On mobile, the system uses a single-column stack with 20px side margins to ensure content feels un-crowded. 

Spacing is used to group related medical information. For example, a diagnosis and its second-opinion status should be separated by `sm` (12px), while distinct sections of a pet's medical profile should be separated by `lg` (40px) to provide visual "breathing room." Horizontal layout for desktop should cap at 1040px to maintain line-length readability for medical reports.

## Elevation & Depth
Depth is created through **Tonal Layering** and soft **Ambient Shadows**. Instead of heavy borders, the design system uses subtle shifts in background saturation to define areas.

- **Level 0 (Background):** #FDFBF7.
- **Level 1 (Cards/Containers):** Pure white or #F5F2ED with a very soft, diffused shadow (0px 4px 20px rgba(31, 41, 55, 0.04)).
- **Level 2 (Interactive/Floating):** Use a slightly more pronounced shadow (0px 8px 30px rgba(31, 41, 55, 0.08)) to indicate elements like "Book Consultation" buttons or sticky navigation bars.

Avoid harsh outlines. If a border is necessary for accessibility in input fields, use a low-contrast neutral (e.g., #E5E7EB).

## Shapes
The shape language is consistently **Rounded**, reinforcing the friendly and safe emotional response. 
- **Standard Elements:** Buttons and small chips use a 0.5rem (8px) radius.
- **Large Elements:** Medical report cards and image containers use `rounded-lg` (1rem / 16px) or `rounded-xl` (1.5rem / 24px) to create a soft, non-intimidating container for potentially stressful information.
- **Selection States:** Use a thick 2px inner-border in Primary Teal for selected states rather than sharp-cornered highlights.

## Components
- **Buttons:** Primary buttons use a solid Teal (#0D9488) with white text and 16px vertical padding. Secondary buttons use a tonal Cream background with Teal text. No "ghost" buttons; every action should feel substantial and findable.
- **Cards:** The core of the system. Cards must have a 16px or 24px internal padding. They use a white background to "pop" subtly against the Cream page background.
- **Status Chips:** Small, rounded indicators. Use a light tint of the status color (e.g., soft amber background for #D97706 text) to convey urgency without being alarming.
- **Input Fields:** Large, 56px height fields with a soft #F5F2ED fill. On focus, the background turns white with a subtle Teal border.
- **Progress Steppers:** Used for the triage process. Use soft circles with Teal checkmarks for completed steps and Amber for the active step.
- **Lists:** Use "In-set" lists where items are separated by a subtle 1px line (#E5E7EB) that does not touch the edges of the container.