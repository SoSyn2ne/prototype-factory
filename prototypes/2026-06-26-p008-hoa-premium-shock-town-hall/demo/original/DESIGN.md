---
name: Field-Ops Narrative
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#e2bfb0'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#a98a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb693'
  primary: '#ffb693'
  on-primary: '#561f00'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#a04100'
  secondary: '#bdf4ff'
  on-secondary: '#00363d'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#9ccaff'
  on-tertiary: '#003257'
  tertiary-container: '#059eff'
  on-tertiary-container: '#003357'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497b'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is engineered for high-stakes governance and collective decision-making. It prioritizes clarity, accountability, and industrial reliability. The aesthetic leans into a **Modern Industrial** style—combining the precision of professional data tools with the accessibility required for diverse community stakeholders. 

The interface evokes a sense of "digital infrastructure." It uses structured layouts, clear boundaries, and a utilitarian approach to decorative elements to ensure users feel they are interacting with a secure, authoritative platform. The emotional response is one of calm confidence; the UI never obscures the data, ensuring transparency in every financial and legislative interaction.

## Colors
The palette is rooted in deep greys and charcoals to provide a stable, low-fatigue environment for long town hall sessions.

- **Foundational Neutrals:** Using "Graphite" (#0F1113) for backgrounds and "Steel" (#1E2124) for containers ensures deep contrast.
- **Action Orange (#FF6B00):** Reserved exclusively for high-impact actions: casting final votes, submitting financial approvals, or initiating emergency alerts.
- **Safety Cyan (#00E5FF):** Used for navigation, active meeting controls, and highlighting interactive data points.
- **Status Rows:** High-saturation tokens for success, warning, and error are used to highlight critical insurance quote variances and budget overages.

## Typography
This design system utilizes **Inter** for its neutral, systematic clarity and high legibility in dense data environments. To lean into the industrial/professional aesthetic, **JetBrains Mono** is introduced for technical labels, financial figures, and metadata.

- **Headlines:** Bold and tight-tracking to convey authority.
- **Body:** Standardized at 16px for maximum readability during complex document reviews.
- **Data Mono:** Used for currency, percentages, and insurance policy numbers to ensure characters are distinct and easily comparable in tables.
- **Labels:** Uppercase monospaced labels are used above input fields and for section headers to provide a "blueprinted" feel.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Information is organized into a 12-column system on desktop to handle complex multi-column insurance comparisons and budget breakdowns.

- **Gutter & Margins:** A consistent 24px gutter maintains separation between dense data cards. 
- **Mobile Reflow:** On mobile devices, the 12-column grid collapses to 1 column. Interactive sliders and meeting controls expand to full-width to provide "thumb-friendly" industrial touch targets.
- **Rhythm:** Vertical rhythm is strictly enforced in 8px increments to maintain a disciplined, professional appearance.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering** and **Structural Outlines** rather than soft shadows. This reinforces the "Industrial" theme.

- **Level 0 (Background):** Graphite (#0F1113).
- **Level 1 (Cards/Containers):** Steel (#1E2124) with a 1px solid border (#343A40).
- **Level 2 (Modals/Popovers):** Slightly lighter grey (#2C3036) with a pronounced Safety Cyan accent border (2px) to denote active focus.
- **Interactive Elements:** Buttons and inputs use "Inset" borders or solid color fills to indicate state, avoiding ambient glows to keep the UI grounded.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the "edge" off the industrial aesthetic to ensure it feels like a modern application rather than a legacy terminal, without losing its professional rigor.

- **Buttons:** 4px border radius for a crisp, precision-tooled look.
- **Data Cards:** 8px (rounded-lg) to subtly differentiate major content blocks from the background.
- **Selection Indicators:** Square or minimally rounded shapes for checkboxes to maintain the "architectural" feel.

## Components

### Meeting Controls
Large, tactile buttons for "Mute," "Raise Hand," and "Vote." Active states utilize Safety Cyan backgrounds with high-contrast dark text. Critical "End Meeting" or "Commit Vote" buttons use Action Orange.

### Data Cards
Cards feature a header row with JetBrains Mono labels. Content is separated by 1px dividers. If a card represents an "Alert" (e.g., a budget deficit), the left border is thickened to 4px and colored Action Orange.

### High-Contrast Tables
Used for insurance quote comparisons. Alternating row fills are not used; instead, 1px borders define the grid. Hover states on rows use a subtle Steel-Blue tint to highlight the active line.

### Financial Sliders
Custom sliders for "What-If" financial impact scenarios. The track is Graphite, and the handle is a large, square Safety Cyan block for easy manipulation. Real-time value updates appear in JetBrains Mono above the handle.

### Input Fields
Fields use a dark "Steel" fill with a 1px border. Focus states eliminate the border in favor of a 2px Safety Cyan outer stroke. Placeholder text is low-contrast to ensure the user's entered data is the visual priority.