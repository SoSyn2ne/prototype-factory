---
name: The Design System
colors:
  surface: '#fef9f0'
  surface-dim: '#ded9d1'
  surface-bright: '#fef9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#45483f'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e7'
  outline: '#75786e'
  outline-variant: '#c5c8bc'
  surface-tint: '#556343'
  primary: '#526141'
  on-primary: '#ffffff'
  primary-container: '#6b7958'
  on-primary-container: '#f9ffea'
  inverse-primary: '#bccca5'
  secondary: '#8a4f34'
  on-secondary: '#ffffff'
  secondary-container: '#feb290'
  on-secondary-container: '#794227'
  tertiary: '#685a48'
  on-tertiary: '#ffffff'
  tertiary-container: '#82725f'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e8c0'
  primary-fixed-dim: '#bccca5'
  on-primary-fixed: '#131f06'
  on-primary-fixed-variant: '#3e4b2d'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb695'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#6d391f'
  tertiary-fixed: '#f4dfc9'
  tertiary-fixed-dim: '#d7c3ae'
  on-tertiary-fixed: '#241a0c'
  on-tertiary-fixed-variant: '#524534'
  background: '#fef9f0'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-base:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
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
  margin-page: 40px
  stack-gap: 16px
---

## Brand & Style

The design system is anchored in the "Calm-consumer" aesthetic, specifically tailored to lower the cortisol levels of students facing high-stakes oral examinations. The visual personality is that of a supportive mentor: knowledgeable, patient, and grounded. It avoids the clinical coldness of traditional EdTech in favor of a "Modern Organic" movement—blending the cleanliness of minimalism with tactile, paper-like textures and soft, physical metaphors.

The emotional response should transition the user from panic to "prepared stillness." This is achieved through a focus on spatial breathing, low-contrast transitions, and a lack of aggressive "error" states. The UI feels like a well-organized study desk in the late afternoon sun—warm, inviting, and quiet.

## Colors

The palette is derived from natural materials found in a classic library or study. 
- **Primary (Sage Green):** Used for growth, progress, and "safe" interactive states. It represents the "Go" signal without the intensity of neon green.
- **Secondary (Muted Terracotta):** Used for primary actions and highlights that require warmth and attention.
- **Tertiary (Soft Oak):** Used for text and structural borders to provide a grounded, archival feel.
- **Neutral (Parchment):** The foundation of the UI. It reduces eye strain compared to pure white and provides a tactile, "paper" quality.
- **Status (Amber):** This replaces red for all urgency or error states. It signals "room for improvement" or "attention needed" rather than "failure."

## Typography

The typography strategy balances academic authority with cognitive accessibility.
- **Headings:** Use **Newsreader**. Its variable serif heights and literary character instill a sense of tradition and wisdom, reassuring parents of the tool's educational rigor.
- **UI & Body:** Use **Lexend**. Specifically designed to reduce visual stress and improve reading speed, it is the functional engine of the design system. It ensures that instructions and feedback are digested easily by anxious students.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model to create a sense of containment and focus. By constraining the content to a central column (max 1120px), we prevent the "infinite dashboard" feeling that can overwhelm users. 

The spacing rhythm is generous, based on an 8px scale. Vertical stacking uses larger gaps (32px-48px) between major sections to prevent the UI from feeling "crowded," which can mirror the feeling of a cluttered mind. Elements within a card or group use tighter 16px gaps to maintain a clear association.

## Elevation & Depth

Hierarchy is conveyed through **Ambient Shadows** and **Tonal Layers**. Instead of harsh black shadows, this design system uses soft, diffused shadows tinted with the Tertiary (Oak) color at very low opacity (8-12%). 

- **Level 0 (Surface):** The Parchment background.
- **Level 1 (Cards):** Slightly lifted with a wide-spread shadow, used for progress reports and lesson modules.
- **Level 2 (Interactive):** Elements like speech bubbles use a slightly tighter shadow and a 1px soft-oak stroke to define their interactive boundaries.
- **Glassmorphism:** Reserved exclusively for overlays (like "Pause" screens) to maintain a sense of the context behind the interruption without distracting the user.

## Shapes

The shape language is consistently **Rounded**. 
- **Base Components:** 0.5rem (8px) radius for buttons and input fields.
- **Large Components:** 1rem (16px) for progress cards and speech bubbles.
- **Speech Bubbles:** These feature a unique "organic tail" that is rounded at the tip, avoiding sharp points. 

The goal is to eliminate "sharpness" in the UI, as sharp corners are subconsciously associated with threat or precision-demanding tasks, which can escalate anxiety.

## Components

### Speech Bubbles
The core interaction component. Bubbles should have a slight asymmetrical "hand-drawn" quality to the curve. Student bubbles are Sage Green (supportive); the "Examiner" bubbles are Parchment with an Oak border (objective).

### Progress Cards
Used for data visualization. These feature soft-shadows and generous internal padding (32px). They should never show a "0%" or "Failing" grade; instead, they use phrases like "Building Foundations" or "Nearly There."

### Gentle Urgency States
When a student is speaking too fast or loses track of time, the UI should pulse softly with an **Amber** glow around the perimeter of the screen or the active bubble. No jarring red "X" icons; use a soft "Caution" icon (a rounded triangle).

### Parent-Friendly Data Viz
Visualizations must avoid complex scatter plots. Use "Progress Rings" with thick strokes and "Path Maps" that look like a trail through a garden. Data is framed as a journey of "Confidence Gained" rather than "Errors Fixed."

### Buttons & Inputs
Buttons use a heavy bottom-shadow (2px) to look tactile and "clickable," like a physical stamp. Input fields are styled like ledger lines, encouraging the user to "write" their thoughts.