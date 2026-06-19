---
name: Arcade Terminal Transit
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#43474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#ab3600'
  on-secondary: '#ffffff'
  secondary-container: '#fe5e1e'
  on-secondary-container: '#551600'
  tertiary: '#002413'
  on-tertiary: '#ffffff'
  tertiary-container: '#003c23'
  on-tertiary-container: '#1db173'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#832700'
  tertiary-fixed: '#78fbb6'
  tertiary-fixed-dim: '#59de9b'
  on-tertiary-fixed: '#002111'
  on-tertiary-fixed-variant: '#005232'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system operates at the intersection of bureaucratic precision and arcade-era excitement. It treats the stressful process of travel insurance claims as a high-stakes "mission" where every document upload is a level cleared. 

The aesthetic is **Tactile Arcade-Brutalism**. It utilizes high-contrast interfaces, sharp outlines, and textures inspired by travel documents (guilloché patterns, perforation lines, and thermal printer typography). The goal is to evoke the reliability of a flight instrument panel with the dopamine-loop of a vintage cabinet game. The emotional response is one of "ordered chaos"—the user feels the urgency of their claim but is supported by a robust, playful framework that celebrates progress with celebratory microstates and tactile feedback.

## Colors
The palette is functional and communicative, reflecting the "Arcade" theme through high-saturation accents against a structured base.

*   **Aviation Blue (#003366):** The primary color. Used for structural elements, headers, and primary navigation to establish authority and trust.
*   **Emergency Orange (#FF5F1F):** The action color. Used for critical CTAs, "Delay" alerts, and active "Player" states. It demands immediate attention.
*   **Recovered Emerald (#00A86B):** The success color. Used for "Claim Approved" states, completed progress bars, and positive balances.
*   **Neutral Foundation:** A light gray base that mimics the matte finish of an arcade cabinet or a crisp boarding pass. 
*   **Ink Black (#1A1A1A):** Used for heavy borders and high-contrast text.

## Typography
The system employs a dual-font strategy:
1.  **Plus Jakarta Sans** provides a modern, approachable, and highly readable face for core interactions and headlines. It keeps the "Arcade" vibe from feeling too dated or illegible.
2.  **Space Mono** is used for all "Data" fields—flight numbers, claim amounts, timestamps, and ticket IDs. This creates a functional contrast that mimics computer-read documents and retro-terminal readouts.

Headlines should use tight tracking to feel impactful and "logo-like." Data labels should always use the monospace font to differentiate user-generated content from system-generated instructions.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Elements are strictly aligned to an 8px base unit, creating a sense of mechanical precision. 

*   **Desktop:** A 12-column grid with heavy 24px gutters. Sections are separated by thick 2px horizontal "perforation" lines.
*   **Mobile:** A 4-column grid. The interface should feel full and energetic, utilizing safe area margins of 20px. 
*   **Spacing Rhythm:** Use "Stack" spacing (vertical only) to group related form fields. Elements like receipt uploads should be contained within boxes that have a slight internal "padding-inlay" to look like a physical scanner bed.

## Elevation & Depth
This design system avoids soft shadows and ambient blurs. Depth is communicated through **Hard-Edge Layering** and **Bold Outlines**:

*   **Layer 0 (Background):** The "Cabinet" base. Neutral light gray.
*   **Layer 1 (Cards):** White surfaces with a 2px solid Ink Black border.
*   **Layer 2 (Active Elements):** Elements "pop" using a 4px offset solid shadow (non-blurred) in the Primary or Secondary color, creating a pseudo-3D "button" effect characteristic of 8-bit games.
*   **Textures:** Use a subtle "Dot Matrix" or "Scanline" overlay on primary surfaces to enhance the arcade feel without sacrificing legibility.

## Shapes
The shape language is **Strictly Geometric**. 
*   **Buttons and Containers:** Use a "Soft" radius (0.25rem) to keep the look professional, but contrast this with hard 90-degree corners on progress bars and data tables.
*   **The "Ticket Cut":** Use CSS masks or clip-paths to create "notched" corners on the top-right and bottom-left of cards, mimicking the look of a torn boarding pass or arcade ticket.
*   **Interactive States:** When hovered or pressed, buttons should physically shift 2px down and 2px right, "filling" their offset shadow to simulate a mechanical switch.

## Components

### Buttons
*   **Primary (The "Insert Coin"):** Emergency Orange background, white text, 2px black border, 4px black offset shadow.
*   **Secondary (The "Audit"):** White background, Aviation Blue text, 2px blue border. No shadow until hover.

### Progress Bars (The "Claim Meter")
*   Instead of smooth transitions, the progress bar should fill in discrete "blocks" (stepped progress). 
*   Empty state: Light gray blocks with black outlines.
*   Active state: Recovered Emerald blocks that "glow" (subtle inner shadow).

### Input Fields
*   Top-aligned labels using `label-caps` (Space Mono). 
*   The input box has a 2px solid border that turns Aviation Blue when focused. 
*   Include a "Mono-suffix" for specific data types (e.g., "USD" or "FLT#") fixed to the right side of the field.

### Claim Cards
*   Use the "Ticket Cut" shape.
*   Include a "Status Badge" in the top-right that uses high-contrast inverted colors (e.g., white text on Aviation Blue).
*   Use horizontal dashed lines (perforations) to separate the card header from the data body.

### Micro-states & Feedback
*   **Success:** A pixel-art "Level Up" style notification or a "Claim Paid" stamp effect that appears to physically hit the screen.
*   **Loading:** A marquee-style scrolling text bar (e.g., "PROCESSING EVIDENCE... PROCESSING EVIDENCE...").