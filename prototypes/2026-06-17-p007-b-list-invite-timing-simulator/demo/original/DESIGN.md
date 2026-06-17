---
name: Serene Union
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424842'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737972'
  outline-variant: '#c2c8c0'
  surface-tint: '#4a654f'
  primary: '#4a654f'
  on-primary: '#ffffff'
  primary-container: '#8daa91'
  on-primary-container: '#253f2b'
  inverse-primary: '#b0ceb4'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#7c5454'
  on-tertiary: '#ffffff'
  tertiary-container: '#c79797'
  on-tertiary-container: '#523030'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cceacf'
  primary-fixed-dim: '#b0ceb4'
  on-primary-fixed: '#062010'
  on-primary-fixed-variant: '#334d38'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#eebaba'
  on-tertiary-fixed: '#301314'
  on-tertiary-fixed-variant: '#623d3d'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
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
    letterSpacing: 0.05em
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
  container-max: 1120px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is centered on the "Calm Consumer" philosophy, specifically tailored for the high-emotion journey of wedding planning. The goal is to mitigate "decision fatigue" and "planning anxiety" through a UI that feels emotionally steady, supportive, and sophisticated. 

The aesthetic leverages a **Modern Minimalist** foundation with **Tactile/Soft** influences. It avoids the frantic energy often found in task-management apps, opting instead for a pace that feels deliberate and graceful. The interface acts as a quiet concierge—present but never intrusive. 

**Emotional Response:** Reassurance, clarity, and understated elegance.
**Target Audience:** Couples seeking a streamlined, aesthetically pleasing coordination tool that prioritizes mental well-being over information density.

## Colors

The palette uses a "Gentle Relationship-Risk" semantic model. Rather than harsh reds or neon yellows, it utilizes softened organic tones to communicate status without inducing panic.

- **Sage Green (Primary/Safe):** Used for completed tasks, confirmed RSVPs, and "graceful" progression. It represents harmony and growth.
- **Muted Amber (Secondary/Cautious):** Used for pending items or "cautious" budget warnings. It signals a need for attention without alarm.
- **Soft Dusty Rose (Tertiary/Risk):** Reserved for "high-risk" or "awkward" moments, such as overdue payments or guest list conflicts.
- **Creams & Off-Whites (Neutral):** The canvas of the design system. Avoid pure white (#FFFFFF) to reduce eye strain and maintain a warm, paper-like tactile feel.
- **Deep Charcoal Green (Text):** Instead of pure black, use a very dark, desaturated green for body text to maintain softness.

## Typography

The typography strategy pairs a sophisticated serif with a modern, friendly sans-serif to balance "the event" with "the utility."

- **Headlines (Playfair Display):** High-contrast and elegant. Use these for page titles, section headers, and celebratory milestones. 
- **Body & UI (Plus Jakarta Sans):** Chosen for its soft, rounded terminals and exceptional readability. It keeps the "business" side of wedding planning feeling approachable.
- **Hierarchy:** Maintain generous vertical rhythm. Titles should never feel cramped against body text. Use `label-md` in all-caps for small metadata to provide a structured, "editorial" feel.

## Layout & Spacing

This design system uses a **Fixed Grid** approach for desktop to preserve a centered, focused experience, and a **Fluid Grid** for mobile. 

- **The Breathable Layout:** Prioritize whitespace (negative space) over borders. Sections should be separated by large padding increments (typically 64px or 80px) rather than horizontal rules where possible.
- **Desktop:** 12-column grid with a 1120px max-width to ensure line lengths for body text remain comfortable.
- **Mobile:** 4-column grid with 20px side margins.
- **Rhythm:** All spacing (padding, margins, gaps) must be multiples of the 8px base unit to ensure visual harmony.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Ambient Shadows** rather than stark borders.

- **Shadows:** Use very low-opacity (5-8%) shadows with a large blur radius (20px+) and a slight Y-offset. The shadow color should be tinted with a hint of Sage or Amber depending on the surface context, never pure gray.
- **Surfaces:** Use the "Cream" neutral for the background and "Off-White" or pure White for elevated cards. This creates a subtle "stacked paper" effect.
- **Interaction:** On hover or tap, elements should slightly lift (increase shadow blur) or subtly shift tone. Avoid aggressive transitions.

## Shapes

The shape language is consistently rounded to evoke comfort and safety.

- **Components:** Standard buttons and input fields use `0.5rem` (rounded).
- **Cards & Modals:** Use `1rem` (rounded-lg) to frame content gently.
- **Avatars & Icons:** Use fully circular (pill-shaped) enclosures for a soft, human-centric look.
- **Visual Flourish:** Occasional use of organic, non-geometric "blob" shapes in the background can be used to break the rigidity of the grid.

## Components

- **Buttons:** Primary buttons use a solid Sage Green with white text. Secondary buttons use a Sage Green outline with a subtle Cream fill. All buttons feature a 500ms transition for a "slow-thaw" hover effect.
- **Cards:** Cards are the primary container. They should have no border, a soft ambient shadow, and a `1rem` corner radius. 
- **Input Fields:** Use a soft-filled background (`#F4F1EA`) instead of a white background with a border. On focus, the background turns white with a thin Sage Green stroke.
- **Chips/Tags:** Used for guest categories (Family, Friends, VIP). These should have rounded-pill shapes and use desaturated versions of the system colors.
- **Lists:** Use generous 16px padding between list items. Use the Sage Green for checkboxes to make "marking as done" feel rewarding.
- **Progress Indicators:** Use a smooth, continuous bar rather than segmented steps to minimize the feeling of a "daunting" checklist.
- **Empty States:** Use empathetic illustrations and soft-toned copy (e.g., "Take a breath. You haven't added any vendors yet—whenever you're ready.")