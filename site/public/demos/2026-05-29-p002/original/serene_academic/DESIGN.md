---
name: Serene Academic
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
  on-surface-variant: '#434842'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737971'
  outline-variant: '#c3c8bf'
  surface-tint: '#4a654d'
  primary: '#47614a'
  on-primary: '#ffffff'
  primary-container: '#5f7a61'
  on-primary-container: '#efffec'
  inverse-primary: '#b1ceb1'
  secondary: '#3f627f'
  on-secondary: '#ffffff'
  secondary-container: '#b7dbfd'
  on-secondary-container: '#3d617e'
  tertiary: '#814f27'
  on-tertiary: '#ffffff'
  tertiary-container: '#9d673d'
  on-tertiary-container: '#fff9f8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cceacc'
  primary-fixed-dim: '#b1ceb1'
  on-primary-fixed: '#07200e'
  on-primary-fixed-variant: '#334d36'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#a7caec'
  on-secondary-fixed: '#001e31'
  on-secondary-fixed-variant: '#254a66'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#fbb888'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#693b15'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: sourceSerifFour
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: sourceSerifFour
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: sourceSerifFour
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: sourceSerifFour
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '600'
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
  container-max: 1140px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 64px
---

## Brand & Style

The design system is built on a foundation of "Quiet Confidence." It moves away from the punitive aesthetic often found in educational monitoring tools, favoring a "Calm-Consumer" approach that treats students as creators rather than subjects. 

The visual style blends **Minimalism** with **Modern Professionalism**. It prioritizes high-quality typography and generous white space to reduce cognitive load and surveillance anxiety. The atmosphere should feel like a well-lit, modern library—focused, intellectual, and supportive. Every interaction is designed to reassure the user that their creative process is being respected and preserved, not scrutinized.

## Colors

This design system utilizes a palette of organic, "reassuring classroom" tones. 

- **Primary (Sage Green):** Used for primary actions and status indicators that signify progress or "Process Captured." It represents growth and trust.
- **Secondary (Muted Blue):** Applied to secondary navigation and focus-state elements. It evokes a sense of calm and stability.
- **Tertiary (Soft Amber):** Reserved for areas requiring attention or "needs review" states. It replaces the traditional "alert red" to minimize stress.
- **Neutrals (Warm Creams & Charcoal):** The background is a soft cream (`#F9F7F2`) to reduce eye strain compared to pure white. Text uses a soft charcoal (`#333333`) to maintain high legibility without the harshness of pure black.

## Typography

The system employs a dual-font strategy to distinguish between the "Interface" and the "Work."

- **Interface UI (Inter):** Used for navigation, buttons, labels, and metadata. It is systematic, neutral, and highly legible.
- **Writing & Reading (Source Serif 4):** Used for the editor, headlines, and "Evidence Cards." This serif face provides a literary, academic feel that signals the importance of the written word.

Body text in the editor should be set with generous line height (`30px`) to provide a comfortable, breathable reading experience.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** for content-heavy views (like the writing editor) to ensure a focused, "distraction-free" width. Dashboard and gallery views utilize a **Fluid Grid** to maximize visibility of student work.

- **Writing Area:** Centered column (max-width: 720px) to mimic a physical page and reduce scanning fatigue.
- **Dashboards:** 12-column grid with 24px gutters.
- **Margins:** Use wide margins (min 24px on desktop) to prevent the UI from feeling cramped or cluttered.

Whitespace is used intentionally as a structural element to separate "captured process" data from the actual creative writing, preventing the metadata from feeling intrusive.

## Elevation & Depth

This design system avoids high-contrast shadows to prevent a "layered window" look that can feel frantic. Depth is communicated through **Tonal Layers** and **Ambient Shadows**.

- **Surface Tiers:** The main background is the warmest neutral. Cards and containers use a pure white surface to gently lift them from the background.
- **Soft Depth:** Use extra-diffused shadows (`0 4px 20px rgba(0,0,0,0.04)`) to create a subtle sense of elevation.
- **State Changes:** Hover states should use a subtle vertical shift (1-2px) rather than a significant shadow increase to maintain a grounded, calm feel.

## Shapes

The shape language is consistently **Rounded** to evoke a sense of approachability and safety. 

- **Components:** Buttons and input fields use a 0.5rem (8px) radius.
- **Large Containers:** Cards and evidence blocks use 1rem (16px) or 1.5rem (24px) for a soft, friendly silhouette.
- **Interactive States:** Focus rings should be soft and offset from the element by 2px to ensure they are visible but not aggressive.

## Components

### Evidence Cards
Low-drama styling. Use a white background with a thin, soft-grey border (`#E5E5E5`). Metadata (timestamps, word counts) should be styled in `label-sm` using the Secondary Muted Blue to feel informative but secondary to the student's text snippet.

### Progress Steppers
Non-linear and unobtrusive. Use soft circular indicators. Completed steps should transition to Sage Green with a subtle checkmark. The current step uses a soft blue halo.

### Timeline Strips
Located at the bottom or side of the writing view. Use a thin, horizontal line with soft-edged markers. Avoid blinking cursors or "recording" dots; use a steady, calming Sage Green "Active" pill.

### Input Fields & Buttons
- **Primary Button:** Sage Green background with white text. No sharp gradients.
- **Secondary Button:** Ghost style with Muted Blue text and a 1px border.
- **Inputs:** Warm cream backgrounds with subtle focus transitions to blue.

### Writing Area
The core component. Completely clean of UI furniture. Interface elements (like "Process Captured" labels) should fade to 20% opacity when the user is typing and return to 100% when idle.