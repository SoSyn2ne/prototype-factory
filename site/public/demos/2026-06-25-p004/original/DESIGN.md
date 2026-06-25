---
name: Serene Advocacy
colors:
  surface: '#f4fbfb'
  surface-dim: '#d4dbdc'
  surface-bright: '#f4fbfb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f6'
  surface-container: '#e8eff0'
  surface-container-high: '#e2e9ea'
  surface-container-highest: '#dde4e5'
  on-surface: '#161d1e'
  on-surface-variant: '#414849'
  inverse-surface: '#2b3233'
  inverse-on-surface: '#ebf2f3'
  outline: '#717879'
  outline-variant: '#c1c8c8'
  surface-tint: '#416467'
  primary: '#325558'
  on-primary: '#ffffff'
  primary-container: '#4a6d70'
  on-primary-container: '#c8edf1'
  inverse-primary: '#a8cdd0'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#39554f'
  on-tertiary: '#ffffff'
  tertiary-container: '#516d67'
  on-tertiary-container: '#cfede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c4e9ed'
  primary-fixed-dim: '#a8cdd0'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#294c4f'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#cbe9e1'
  tertiary-fixed-dim: '#afcdc5'
  on-tertiary-fixed: '#03201b'
  on-tertiary-fixed-variant: '#314c46'
  background: '#f4fbfb'
  on-background: '#161d1e'
  surface-variant: '#dde4e5'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is centered on the "Calm-Consumer" philosophy—a bridge between clinical authority and personal empowerment. It is designed to reduce the cortisol levels of users who are navigating the stressful process of insurance denials for GLP-1 medications. The aesthetic leans into **Modern Minimalism** with a **Tactile** warmth, avoiding the cold, sterile visuals of traditional medical software.

The target audience includes patients and healthcare providers who require clarity and focus. The emotional response should be one of quiet confidence and organization. By utilizing generous whitespace, soft transitions, and a grounded color palette, the UI transforms a bureaucratic burden into a structured, manageable task.

## Colors

The palette is intentionally restrained to prevent visual "noise" and alarm.

- **Primary (#4A6D70):** A muted Sage Teal used for primary actions, success states, and key navigational highlights. It represents steady growth and professional calm.
- **Secondary (#F9F7F2):** A Warm Cream that serves as the foundation for all backgrounds. It is softer on the eyes than pure white, providing a "paper-like" quality that feels approachable.
- **Neutral (#333A3B):** A Slate Gray used for primary text and iconography. It provides high legibility without the harshness of true black.
- **Accent (#8BA8A1):** A lighter tint of the primary teal used for subtle UI elements like hover states, secondary buttons, or background washes in complex cards.

## Typography

The design system utilizes **Hanken Grotesk** across all roles. This typeface was chosen for its clean, sharp geometry balanced with a distinct approachability. It maintains high legibility even in dense medical documentation or data-heavy forms.

- **Headlines:** Use a tighter letter-spacing and medium weight to create a grounded, authoritative presence.
- **Body Text:** Standard weight with generous line height (1.5x minimum) to ensure long-form reading—such as denial letter templates—remains strain-free.
- **Labels:** Small caps with increased tracking are used for secondary information to create a hierarchy that doesn't rely solely on color or size.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a sense of containment and order, while transitioning to a fluid model on mobile devices.

- **Desktop:** 12-column grid centered within a 1120px container. This "narrower" focus prevents the eye from wandering and keeps medical information digestible.
- **Vertical Rhythm:** A base-8 spacing system is applied. Use `stack-lg` to separate major content sections (e.g., "The Denial Reason" vs. "The Appeal Template") to ensure the UI feels airy and unhurried.
- **Mobile:** Margins shrink to 16px. Elements that span multiple columns on desktop should reflow into a single-column stack to maintain font readability.

## Elevation & Depth

This design system avoids heavy shadows and floating elements to maintain its "grounded" medical-advocacy feel. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Levels:** The base background is the secondary cream color. Cards and input containers use a pure white background to subtly "lift" them without the need for shadows.
- **Outlines:** Use 1px borders in a slightly darker shade of the background (e.g., a 10% darken of the cream) to define boundaries.
- **Shadows:** If depth is required for modals or dropdowns, use a single "Ambient" shadow: `0px 4px 20px rgba(74, 109, 112, 0.08)`. The inclusion of the primary teal in the shadow color keeps the elevation feeling organic to the palette.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp "aggressive" corners while steering clear of overly "bubbly" aesthetics.

- **Base (0.5rem):** Standard for buttons, input fields, and small cards.
- **Large (1rem):** Reserved for primary content containers and "packet" sections.
- **Iconography:** Use a medium-weight stroke (1.5px to 2px) with rounded caps and joins to match the typeface's friendly but professional demeanor.

## Components

- **Buttons:** Primary buttons are solid Teal (#4A6D70) with white text. Secondary buttons use an outline style with Teal text. All buttons use the `rounded-md` (0.5rem) setting.
- **Cards:** Cards are the core of this system. They should have a white background, a soft 1px border, and no shadow. Use them to group specific steps of the appeal process.
- **Input Fields:** Use a subtle background fill (slightly darker than the page background) to make the input areas obvious. Focus states should transition the border to the primary Teal color.
- **Progress Indicators:** Since the appeal process is a journey, use "Step Lists" with soft checkmarks. Completed steps should use the Teal accent, while upcoming steps remain in a muted gray.
- **Chips/Status Tags:** Use for indicating the "Status" of a denial (e.g., "Pending," "Reviewing," "Approved"). These should have very light background tints of the status color with high-contrast text.
- **The "Packet" Component:** A unique container that mimics the look of a file folder or a structured document, using a tabbed interface at the top to organize "Evidence," "Doctor's Note," and "Insurance Policy."