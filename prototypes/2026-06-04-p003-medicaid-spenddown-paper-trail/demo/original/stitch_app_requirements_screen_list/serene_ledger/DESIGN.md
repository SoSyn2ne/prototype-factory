---
name: Serene Ledger
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434750'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#737781'
  outline-variant: '#c3c6d2'
  surface-tint: '#325f9e'
  primary: '#00376f'
  on-primary: '#ffffff'
  primary-container: '#1e4e8c'
  on-primary-container: '#9dc1ff'
  inverse-primary: '#a8c8ff'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#760007'
  on-tertiary: '#ffffff'
  tertiary-container: '#a1000e'
  on-tertiary-container: '#ffaaa0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a8c8ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#134684'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  status-indicator:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
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
  unit: 8px
  container-padding-mobile: 24px
  container-padding-desktop: 64px
  stack-gap: 32px
  section-margin: 48px
  gutter: 24px
---

## Brand & Style

The design system is engineered for caregivers navigating the high-stress environment of elder-care financial compliance. The brand personality is **reassuring, steadfast, and empathetic**, acting as a quiet companion rather than a complex tool. 

The visual style follows a **Modern Corporate** approach with a **Tactile** warmth. It avoids the sterile coldness of typical fintech apps, opting instead for a "digital paper" aesthetic that feels tangible and organized. To reduce cognitive load for overwhelmed users, the system prioritizes clarity over ornamentation, utilizing soft transitions and a focused information hierarchy to evoke a sense of controlled calm.

## Colors

The palette is grounded in a warm, neutral foundation to mimic the comfort of physical stationery.

- **Primary (Trustworthy Blue):** Used for primary actions, navigation, and verified states. It provides a sense of institutional reliability.
- **Secondary (Amber Warning):** Reserved for "Pending" or "Expiring Soon" statuses. It alerts without causing panic.
- **Tertiary (Soft Red):** Specifically for "Missing" documents or hard deadlines.
- **Neutral (Cream & Taupe):** The background uses a soft cream (`#FDFCF8`) instead of pure white to reduce eye strain. Taupe is used for secondary text and borders to maintain a soft, low-contrast environment.

## Typography

This design system uses **Atkinson Hyperlegible Next** across all roles. This typeface was specifically designed for low-vision readers, ensuring that every digit and character is unmistakable—critical for financial and legal paperwork.

The default body size is set to **20px** to ensure maximum readability for caregivers of all ages. Line heights are intentionally generous (1.5x) to prevent lines of text from blurring together during long reading sessions.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model on desktop (max-width 1200px) to prevent information from becoming too sparse on wide monitors. 

To combat cognitive fatigue, the system employs **Generous Whitespace**. Vertical rhythm is strictly enforced with a 32px standard gap between card elements. Margins are intentionally wide to create a "safe zone" around content, making the interface feel less crowded and more manageable.

## Elevation & Depth

This system uses **Tonal Layers** rather than heavy shadows to indicate hierarchy. 

- **Level 0 (Base):** The Cream background.
- **Level 1 (Cards):** Pure white surfaces with a subtle 1px border in soft taupe. This creates a "paper on a desk" feel.
- **Level 2 (Active/Floating):** Use a very diffused, low-opacity amber-tinted shadow (6% opacity) for elements currently being interacted with, such as an active document upload modal.

Avoid heavy blurs or dark shadows, which can feel too "tech-heavy" or aggressive for this user profile.

## Shapes

The design system uses **Rounded (0.5rem)** corners for standard UI components. This softens the interface, making it feel approachable and safe. Buttons and status chips use a **Pill-shape** to distinguish them clearly from content cards and data inputs.

## Components

### Document Status Indicators
Chips should use a combination of icon + text. 
- **Verified:** Primary Blue background, white text, checkmark icon.
- **Pending:** Soft Amber background, dark brown text, clock icon.
- **Missing:** Soft Red background, white text, alert icon.

### Action Ledgers
Lists of financial transactions or document history should use a "Zebra-stripe" alternating background in Cream and White to help the eye track across horizontal rows. Each row height should be a minimum of 64px for easy tapping/clicking.

### Guidance Callouts
Informational tips use a "Post-it" style: a pale yellow background with a thick 4px left-border in the primary blue. These are used for gentle nudges on how to complete a specific form.

### Input Fields
Fields must have a permanent 18px label above them (never just placeholder text). The focus state should be a 2px Primary Blue border with a soft blue outer glow.

### Primary Buttons
Large, pill-shaped buttons with clear, verb-based labels (e.g., "Upload Receipt"). Use Primary Blue for the main action and a ghost-style (taupe border) for secondary actions.