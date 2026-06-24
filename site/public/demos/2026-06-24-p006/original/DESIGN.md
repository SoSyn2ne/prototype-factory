---
name: Serene Vigilance
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3f4849'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6f7979'
  outline-variant: '#bfc8c8'
  surface-tint: '#25686a'
  primary: '#25686a'
  on-primary: '#ffffff'
  primary-container: '#5f9ea0'
  on-primary-container: '#003234'
  inverse-primary: '#92d2d3'
  secondary: '#3e6842'
  on-secondary: '#ffffff'
  secondary-container: '#bfefbe'
  on-secondary-container: '#446e47'
  tertiary: '#7a581e'
  on-tertiary: '#ffffff'
  tertiary-container: '#b58d4e'
  on-tertiary-container: '#3e2800'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#aeeef0'
  primary-fixed-dim: '#92d2d3'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f51'
  secondary-fixed: '#bfefbe'
  secondary-fixed-dim: '#a4d2a4'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#274f2c'
  tertiary-fixed: '#ffddaf'
  tertiary-fixed-dim: '#edbf7b'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#604106'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
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
    fontWeight: '500'
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
  xl: 64px
  gutter: 20px
  margin-mobile: 24px
  margin-desktop: 120px
---

## Brand & Style

The design system is centered on the "Calm Consumer" philosophy—a "gentle safety net" for individuals managing their health in isolation. The visual language avoids the clinical sterility of traditional medical apps or the frantic urgency of emergency tools. Instead, it prioritizes an emotionally steady, reassuring, and supportive presence.

The chosen style is **Modern Minimalist with Tactile Softness**. By utilizing expansive whitespace, high-quality typography, and soft depth, the interface reduces cognitive load for users who may be feeling unwell or anxious. Every interaction is designed to feel like a quiet breath, providing clarity and confidence through simplicity.

**Key Principles:**
- **Steady Guidance:** Information is presented in a linear, non-overwhelming sequence.
- **Reassurance over Alarm:** Even warnings use soft, warm tones rather than high-alert symbols.
- **Human Centricity:** Large touch targets and high-readability fonts accommodate users with lower energy or focus levels.

## Colors

The palette is intentionally muted to maintain low visual arousal. It relies on a foundation of warm whites and gentle grays to create a clean, airy environment.

- **Primary (Steady Cerulean):** Used for the "Safe" state and primary actions. It represents stability and calm logic.
- **Secondary (Soft Sage):** Used for confirmation states and secondary supportive actions. It evokes a sense of health and natural recovery.
- **Tertiary (Soft Amber):** Replaces traditional red for warnings or "Needs Attention" states. It signals a need for caution without inducing panic.
- **Neutrals:** A range of warm-tinted grays ensures the interface feels approachable and "human" rather than cold and digital. Deep charcoal is used for text to ensure AAA accessibility standards are met.

## Typography

This design system uses **Inter** for its exceptional legibility and systematic neutrality. The type scale is optimized for high readability, especially when the user may be experiencing fatigue.

**Rules for use:**
- **Line Height:** Body text uses a generous 1.5x (or greater) line height to ensure sentences are easy to track.
- **Hierarchy:** Use font weight rather than dramatic size changes to differentiate sections, maintaining a "quiet" visual hierarchy.
- **Content Density:** Keep text blocks short. Break information into bulleted points or short paragraphs to prevent cognitive fatigue.

## Layout & Spacing

The layout philosophy follows a **fluid, content-first grid** that prioritizes white space as a functional element. By giving elements room to "breathe," we reduce the perceived complexity of the app.

- **Grid:** A standard 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** An 8px linear scale is used for all spacing. 24px (`md`) is the default padding for containers to ensure clear separation.
- **Safe Zones:** High-priority buttons (like "Check-In") are always placed within easy reach of the thumb on mobile devices, with at least 48px of vertical clearance from other interactive elements.
- **Margins:** Generous outer margins (24px on mobile) ensure the content doesn't feel cramped against the edges of the device.

## Elevation & Depth

This design system uses **Ambient Shadows** and **Tonal Layering** to create a sense of organized depth without harsh edges.

- **Tonal Layers:** The background is `#F8F9FA`. Primary containers use a pure white surface (`#FFFFFF`) to pop slightly forward.
- **Shadows:** Use extremely soft, low-opacity shadows. A typical elevation shadow should have a large blur (16px to 24px) with a very low opacity (5-8%) and a subtle tint of the primary color (`#5F9EA0`) to harmonize the surface with the brand.
- **Inner Depth:** For input fields and toggles, a very soft inner shadow or a subtle 1px border (`#E9ECEF`) is preferred over high-contrast outlines.

## Shapes

The shape language is consistently **Rounded**, reflecting a soft and non-threatening aesthetic.

- **Small Components (Buttons, Inputs):** Use `rounded-md` (8px-12px) to feel substantial and friendly.
- **Containers (Cards, Modals):** Use `rounded-xl` (24px) to create a "cocoon" effect for content.
- **Status Indicators:** Large, circular shapes are used for primary status icons (e.g., a large sun or shield icon) to symbolize wholeness and safety.

## Components

### Buttons
- **Primary:** Filled with Cerulean (`#5F9EA0`), white text, 12px corner radius. Used for the main "I am Safe" or "Check-In" actions.
- **Secondary:** Outlined with a 2px Sage border (`#8FBC8F`) and Sage text. Used for "Log Symptom" or "Add Contact."

### Status Cards
The centerpiece of the UI. These cards use a white background, soft shadow, and a large icon paired with reassuring micro-copy (e.g., "You're all set for the next 4 hours.").

### Input Fields
Large touch areas (minimum 56px height) with soft 12px corners. Labels are always visible above the field to ensure the user never loses context.

### Chips
Used for symptom tracking. These should have a pill-shape (32px radius) and use the secondary color at 10% opacity for the background to keep them subtle and non-distracting.

### Progress Indicators
Thin, soft lines rather than thick bars. Use the Sage green to indicate completion.

### Additional Components: "Gentle Alert"
A specialized banner for when a check-in is missed. It uses the Tertiary Amber (`#FFD08A`) background with a 12% opacity and a darker amber text. It includes a large "I'm Okay" button to quickly resolve the state.