---
name: Calm Guardian
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
  on-surface-variant: '#3f4850'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6f7881'
  outline-variant: '#bec7d1'
  surface-tint: '#006492'
  primary: '#006492'
  on-primary: '#ffffff'
  primary-container: '#2d9cdb'
  on-primary-container: '#003049'
  inverse-primary: '#8ccdff'
  secondary: '#50606d'
  on-secondary: '#ffffff'
  secondary-container: '#d4e5f4'
  on-secondary-container: '#566673'
  tertiary: '#006d41'
  on-tertiary: '#ffffff'
  tertiary-container: '#44a571'
  on-tertiary-container: '#00341d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cae6ff'
  primary-fixed-dim: '#8ccdff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004b6f'
  secondary-fixed: '#d4e5f4'
  secondary-fixed-dim: '#b8c9d7'
  on-secondary-fixed: '#0d1d28'
  on-secondary-fixed-variant: '#394955'
  tertiary-fixed: '#95f7bb'
  tertiary-fixed-dim: '#7adaa1'
  on-tertiary-fixed: '#002110'
  on-tertiary-fixed-variant: '#005230'
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
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 64px
---

## Brand & Style
The brand personality is rooted in "Protective Serenity." For consumers dealing with contractor disputes or deposit recovery, the UI must act as a stabilizing force. The emotional response is one of regained control and systematic progress.

The design style utilizes a **Modern Corporate** approach with **Minimalist** sensibilities. It avoids the frantic energy of a typical "dispute" tool by using heavy whitespace and a "Document-first" architecture. Every interface element is designed to feel like a physical, organized legal file—substantial, orderly, and indisputable.

## Colors
The palette is centered on trust and clarity.
- **Primary (Soft Teal):** Used for status indicators, active steps, and primary actions. It provides a calming alternative to aggressive "alert" blues.
- **Secondary (Dark Slate):** Used for all primary typography and structural borders. This high-contrast shade ensures maximum readability and conveys authority.
- **Neutral (Cloud Gray/Off-White):** The background and card surfaces use a layering of `#F8F9FA` and `#FFFFFF` to create a clean, non-clinical environment.
- **Tertiary (Muted Green):** Reserved exclusively for "Resolved" or "Verified" states to provide a sense of completion.

## Typography
The system uses **Inter** exclusively to maintain a professional, systematic, and utilitarian feel. 

- **Hierarchy:** Headlines use semi-bold weights with slight negative letter-spacing to feel tight and authoritative. 
- **Body Text:** Ample line height (1.5x) is applied to body copy to ensure that complex legal or procedural information remains digestible.
- **Labels:** Uppercase labels are used for metadata (e.g., "DATE FILED", "CASE ID") to differentiate data points from narrative content.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to prevent content from stretching too wide, which can be visually overwhelming. 

- **The "File" Column:** Content is primarily housed in a central 8-column span (approx 720px) to mimic the width of a standard document. 
- **Sidebars:** Used for secondary metadata like "Timeline Summary" or "Evidence Checklist."
- **Rhythm:** An 8px linear scale is used. Generous vertical spacing (`section-gap`) is mandated between different document sections to allow the user's eyes to rest.

## Elevation & Depth
This design system avoids heavy shadows to prevent a "floating" or "app-like" feel. Instead, it uses **Tonal Layers** and **Low-contrast outlines**.

- **Surface Levels:** The base background is `#F8F9FA`. Primary "Document" cards are pure white (`#FFFFFF`) with a 1px border in a slightly darker neutral (`#E0E0E0`).
- **Active Elevation:** When an item is interactive or selected, a very soft, high-diffusion shadow (0px 4px 20px rgba(0,0,0,0.04)) is applied to give it a "lifted paper" effect.
- **Layering:** Steppers and progress trackers are "inset" using subtle inner-borders to appear as if they are etched into the file folder.

## Shapes
The shape language is **Soft**. Corners are rounded just enough to remove the "sharpness" of legal forms without feeling informal or "bubbly." 

- **Standard Elements:** 4px (0.25rem) radius.
- **Large Cards/Containers:** 8px (0.5rem) radius.
- **Inputs:** 4px radius to maintain a crisp, structured appearance.

## Components
- **Document Cards:** White backgrounds, subtle 1px gray borders. Header sections of cards should have a distinct light gray bottom-border to separate titles from content.
- **Action Buttons:** Primary buttons use the Soft Teal background with white text. Secondary buttons use a Slate border with no fill. Padding is generous (12px 24px) to ensure they feel accessible.
- **Progress Steppers:** Vertical steppers are preferred for the "file" metaphor. Completed steps use a teal checkmark; the current step uses a teal ring; future steps use a light gray dot.
- **Status Chips:** Small, pill-shaped indicators with low-opacity background tints (e.g., a 10% teal background for "In Progress").
- **Timeline:** A thin 2px vertical line connecting document entries, using the Dark Slate for dots to represent "Logged Events."
- **Input Fields:** Labeled clearly above the field. No placeholder text—use helper text below the field to reduce cognitive load during form filling.