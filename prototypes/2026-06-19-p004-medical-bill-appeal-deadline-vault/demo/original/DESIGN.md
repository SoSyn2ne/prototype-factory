---
name: Serene Resolution
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#43474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#737780'
  outline-variant: '#c3c6d0'
  surface-tint: '#3b6090'
  primary: '#0e3b69'
  on-primary: '#ffffff'
  primary-container: '#2c5282'
  on-primary-container: '#a2c6fd'
  inverse-primary: '#a5c8ff'
  secondary: '#00629d'
  on-secondary: '#ffffff'
  secondary-container: '#61b4fd'
  on-secondary-container: '#004470'
  tertiary: '#004424'
  on-tertiary: '#ffffff'
  tertiary-container: '#005e34'
  on-tertiary-container: '#6ed997'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a5c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#204877'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#99cbff'
  on-secondary-fixed: '#001d34'
  on-secondary-fixed-variant: '#004a78'
  tertiary-fixed: '#8df8b3'
  tertiary-fixed-dim: '#70db99'
  on-tertiary-fixed: '#00210f'
  on-tertiary-fixed-variant: '#00522d'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  display-currency:
    fontFamily: Public Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  deadline-highlight:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style
The design system is centered on the "Calm-Consumer" philosophy, specifically tailored for the high-stress environment of medical billing appeals. The target audience includes patients and caregivers who are often overwhelmed by complex paperwork and financial pressure. The emotional response must be one of quiet confidence, clarity, and empowerment.

The visual style is **Modern Corporate** with a heavy emphasis on **Minimalism** and **Tactile Accessibility**. It avoids the clinical coldness of traditional healthcare software by using soft, layered surfaces and generous whitespace. The interface acts as a "buffer" between the user and their stressful data, utilizing a systematic hierarchy to transform dense billing information into a series of manageable, non-threatening tasks.

## Colors
The palette is engineered to reassure while maintaining professional authority. 
- **Deep Navy (#1A365D)** is used for primary headings and structural navigation to anchor the design.
- **Serene Sky Blue (#4299E1)** serves as the primary action color, providing a clear but gentle path forward.
- **Sage Green (#68D391)** is reserved for success states and "Appeal Won" indicators, offering a psychological sigh of relief.
- **Amber (#D69E2E)** replaces aggressive reds for deadlines and required attention. It signals "proceed with care" rather than "emergency."
- **Backgrounds** utilize an off-white (#FDFDFD) to minimize the harsh blue light of pure white screens, reducing ocular fatigue during long sessions of document review.

## Typography
This design system utilizes **Public Sans** for its institutional clarity and neutral tone. It is a typeface designed for accessibility and legibility across digital interfaces.

The hierarchy is strictly enforced:
- **Dollar Amounts:** Use `display-currency` with high contrast against the background to ensure users aren't searching for the most critical number.
- **Deadlines:** Use `deadline-highlight` paired with the Amber semantic color.
- **Body Text:** Maintained at `body-md` (16px) for optimal readability. 
- **Headings:** `headline-lg` and `md` use the Deep Navy color to establish a clear content structure.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (1140px max width) to prevent line lengths from becoming too long, which can be taxing for users reading medical jargon. 

- **Desktop:** 12-column grid with 24px gutters.
- **Mobile:** Single column with 16px side margins.
- **Vertical Rhythm:** A strict 8px base unit. Component clusters (like a bill total and its description) use `stack-sm`, while distinct modules use `stack-lg`. 

Generous whitespace is not "empty space" here; it is a functional tool used to prevent cognitive overload. Every card and input field is given room to breathe, ensuring the user's focus remains on one decision at a time.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. 

The background layer is the neutral off-white. The primary content sits on "Level 1" cards: white surfaces with a very soft, diffused shadow (0px 4px 20px rgba(26, 54, 93, 0.05)). This subtle tinting of the shadow with the Navy brand color keeps the shadow "clean" rather than "dirty" (gray).

Interactive elements like buttons use a slightly more pronounced shadow on hover to provide tactile feedback. Overlays and modals utilize a Backdrop Blur (8px) to keep the context of the underlying page visible while signaling a temporary focus shift.

## Shapes
The design system employs a **Rounded** shape language. Standard UI elements (cards, buttons, inputs) use a 0.5rem (8px) radius. Larger containers or "Step Cards" within a workflow may scale up to 1rem (16px) to appear more inviting and less "sharp."

This roundedness communicates a modern, consumer-friendly app experience rather than a cold, bureaucratic government form.

## Components
- **Cards:** The primary container. Always white background, 8px corner radius, and the ambient navy-tinted shadow. Cards should have a 24px internal padding.
- **Buttons:** 
  - *Primary:* Serene Sky Blue background, white text. No sharp corners.
  - *Secondary:* Ghost style with Deep Navy border and text.
  - *Next Step:* Large, 56px height primary buttons with a trailing chevron icon to imply progress.
- **Progress Indicators:** A horizontal "Stepped" bar using Sage Green for completed steps and Serene Sky Blue for the active step. Avoid thin lines; use thick (8px) bars for visibility.
- **Input Fields:** Large tap targets (48px minimum height). Use a light gray border (#E2E8F0) that thickens and turns Sky Blue on focus.
- **Urgency Labels:** Instead of red icons, use Amber background chips with High-Contrast Dark Amber text for deadlines.
- **Dollar Modules:** A specific card component that displays the "Balance Due" in `display-currency` typography, often highlighted with a subtle blue left-border accent.