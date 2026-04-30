---
name: Calm-Consumer Health
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#414943'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3c6752'
  primary: '#3c6752'
  on-primary: '#ffffff'
  primary-container: '#7daa92'
  on-primary-container: '#123f2c'
  inverse-primary: '#a2d1b7'
  secondary: '#366380'
  on-secondary: '#ffffff'
  secondary-container: '#b0ddfe'
  on-secondary-container: '#35627e'
  tertiary: '#8f4c35'
  on-tertiary: '#ffffff'
  tertiary-container: '#dd8c71'
  on-tertiary-container: '#5e2612'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#beedd3'
  primary-fixed-dim: '#a2d1b7'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#244f3b'
  secondary-fixed: '#c8e6ff'
  secondary-fixed-dim: '#a0cced'
  on-secondary-fixed: '#001e2e'
  on-secondary-fixed-variant: '#1a4b67'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#723520'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
  disclaimer:
    fontFamily: Public Sans
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  stack-gap: 16px
  section-gap: 40px
  card-padding: 20px
---

## Brand & Style

The design system is engineered to reduce the cognitive load and anxiety often associated with medical symptom tracking. The brand personality is "The Quiet Clinician"—authoritative and precise, yet deeply empathetic and approachable. It avoids the sterile coldness of traditional medical software in favor of a "Calm-Consumer" aesthetic that feels more like a wellness companion than a diagnostic tool.

The visual style leverages **Minimalism** with a touch of **Corporate Modernism**. It prioritizes extreme clarity, generous whitespace, and a "low-alarm" philosophy where no element competes for attention unless it is a critical health notification. The interface should feel breathable, encouraging users to engage with their health data without feeling overwhelmed.

## Colors

This design system utilizes a low-alarm palette designed to soothe. The **Sage Green** primary color provides a grounded, organic feel, while the **Soft Teal** secondary color is used for supportive information and interactive elements that are non-critical. 

The **Off-white** background ensures the UI feels light and airy, distinguishing it from the stark pure-white of clinical environments. The **Muted Coral** is reserved strictly for warnings or symptoms requiring attention; its desaturated nature ensures that even "bad news" is delivered in a calm, manageable tone. **Warm Gray** is used for borders, inactive states, and subtle accents to maintain a soft contrast throughout the experience.

## Typography

The design system uses **Public Sans** across all levels to maintain a sense of institutional trust and high legibility. The type scale is generous, favoring readability over information density. 

Headlines are set with tighter line-heights but significant margin-bottom to create a clear separation of sections. Body text uses a 1.6 line-height to ensure that even long medical descriptions are easy to parse for users who may be experiencing symptoms like nausea or fatigue. Letter spacing is slightly increased for labels and small metadata to ensure clarity on mobile screens.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop (max-width 600px for the primary brief) to mimic the feel of a physical medical chart or a focused mobile app. On mobile devices, it uses a fluid 4-column system.

The "clinical-but-warm" rhythm is achieved through generous internal padding within components and significant vertical breathing room between sections. Elements are never cramped; if a screen feels crowded, the design system dictates the use of progressive disclosure or paginated steps. A base unit of 8px governs all measurements, ensuring a consistent and rhythmic UI.

## Elevation & Depth

Visual hierarchy in the design system is conveyed through **Tonal Layers** and **Ambient Shadows**. Instead of using heavy dropshadows, the system uses "Soft Depth":
- **Level 0 (Background):** The Off-white (#F9FBF9) surface.
- **Level 1 (Cards):** Pure white surfaces with a very subtle 1px border in Warm Gray (#E5E5E5) or a highly diffused, 4% opacity shadow tinted with the Sage Green primary color.
- **Level 2 (Interactive):** Elements that are being dragged or tapped increase their shadow spread and blur to 12% opacity, creating a tactile "lift."

This approach keeps the interface flat enough to feel modern and efficient, but deep enough to guide the user's eye toward interactive elements.

## Shapes

The shape language is defined by a **Rounded (Level 2)** approach. This softening of corners is central to the "Calm-Consumer" aesthetic, removing the "sharp edges" often associated with clinical anxiety.

- **Standard Components:** 0.5rem (8px) for buttons and input fields.
- **Large Containers/Cards:** 1rem (16px) to create a friendly, approachable framing for symptom data.
- **Progress Pill/Chips:** Full rounding (3rem) to signify completion and fluidity.

## Components

### Accessible Mobile Cards
Cards are the primary container for symptom tracking. They must feature a minimum of 20px internal padding. The header of the card should use a 16px font-weight 600 for the symptom name, with a secondary label for the timestamp in Warm Gray.

### Subtle Progress Bars
Progress bars use a thick 8px track in Warm Gray with a rounded Sage Green fill. For "brief" completion, the progress bar should be placed at the very top of the viewport, serving as a non-intrusive guide rather than a high-pressure deadline.

### Neutral Data Visualizations
Charts should avoid harsh red/green binaries. Use Sage Green for "within normal range" and Soft Teal for "fluctuating." Reserve Muted Coral for specific data points that exceed a user-defined threshold. Use rounded line caps and avoid grid lines where possible to keep the visual "quiet."

### Medical Disclaimer Footer
The footer is a critical component. It should be pinned to the bottom of the brief or the end of the scroll. It uses the `disclaimer` typography level in a medium gray, set against a slightly darker Warm Gray background to clearly distinguish it from the tool's primary content.

### Inputs & Selection
Checkboxes and radio buttons are oversized (min 24x24px tap target) to accommodate users who may be feeling unwell or have reduced fine motor coordination. Selection states use a Soft Teal background with a Sage Green border.