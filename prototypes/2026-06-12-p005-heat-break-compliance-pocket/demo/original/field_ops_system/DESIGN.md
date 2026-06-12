---
name: Field-Ops System
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
  on-surface-variant: '#5b4137'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#8f7065'
  outline-variant: '#e4bfb1'
  surface-tint: '#a73b00'
  primary: '#a73b00'
  on-primary: '#ffffff'
  primary-container: '#ff5f05'
  on-primary-container: '#531900'
  inverse-primary: '#ffb599'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#555f71'
  on-tertiary: '#ffffff'
  tertiary-container: '#8a94a8'
  on-tertiary-container: '#232d3d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#d9e3f9'
  tertiary-fixed-dim: '#bdc7dc'
  on-tertiary-fixed: '#121c2c'
  on-tertiary-fixed-variant: '#3d4759'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  timer-display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 8px
  touch-target-min: 56px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style
The design system is engineered for industrial reliability and immediate cognitive processing under physical stress. It adopts a **Rugged Professional** aesthetic, blending the utility of high-visibility safety gear with the precision of modern enterprise software. 

The personality is authoritative and protective—it does not suggest, it mandates safety through "proof, not memory." The visual style utilizes **High-Contrast / Bold** elements with a touch of **Brutalist** structuralism to ensure readability in harsh outdoor environments, such as direct sunlight or dusty worksites. The UI avoids delicate flourishes in favor of "glove-friendly" affordances and heavy-duty structural signals.

## Colors
The palette is rooted in safety standards. **Safety Orange** is reserved for critical actions, active alerts, and primary navigation. Structural integrity is provided by **Steel Grey** and **Charcoal**, ensuring a professional, grounded feel.

Backgrounds utilize **Rugged White** (#F7FAFC) and **Light Steel** (#EDF2F7) to reduce screen glare while maintaining high contrast against text. 

**Risk-Based Theming:** 
This design system utilizes dynamic header states. When a heat risk level increases, the primary surface of the app header must shift to the corresponding status color (Amber or Vivid Red) with white text to signal urgency immediately upon eye contact.

## Typography
The typography utilizes **Inter** for its exceptional legibility and systematic feel. Headlines are oversized and heavy-weighted to command attention. 

- **Labels:** Use the `label-bold` style for all data headers and form descriptors; the uppercase styling ensures clarity in high-pressure data entry.
- **Timers:** A specialized `timer-display` role is provided for heat-rest cycles and duration tracking, ensuring visibility from a distance.
- **Mobile Scaling:** Headings on mobile devices should never drop below 20px for primary section titles to maintain readability in bright sunlight.

## Layout & Spacing
The layout follows a **Fluid Grid** model with high-density margins. On mobile, a 4-column grid is used, while desktop expands to 12. 

**The 56px Rule:** All primary interactive elements (buttons, inputs, toggles) must adhere to a minimum height of 56px. This "glove-friendly" constraint ensures that workers can interact with the UI without high-precision motor skills. 

Vertical spacing is generous to prevent accidental taps. Containers and cards should utilize `stack-md` (24px) for internal padding to maintain a chunky, substantial feel.

## Elevation & Depth
Depth in the design system is communicated through **Tonal Layers** combined with **Bold Borders**. 

- **Cards:** Use a solid 2px border (#D1D5DB) instead of soft shadows. This mimics physical industrial equipment. 
- **Active States:** Elements that are "tapped" or active should shift from a flat appearance to a slight "pressed" look using a darker inner shadow or a color shift to Charcoal.
- **Floating Actions:** Critical emergency buttons should use a high-spread, low-opacity ambient shadow tinted with the Primary Orange to separate them from the content layer.

## Shapes
This design system uses **Soft** roundedness (0.25rem). This subtle rounding prevents the UI from feeling dangerously sharp while maintaining a rigid, architectural structure. 

- **Buttons & Inputs:** Use `rounded-sm` (4px) for a "machined" look.
- **Photo Tiles & Containers:** Use `rounded-lg` (8px) to define large content areas clearly.
- **Status Indicators:** Small status pips may use `rounded-full` (pill-shaped) to distinguish them from interactive buttons.

## Components

### Buttons & Inputs
- **Primary Action:** 56px height, Safety Orange background, White bold text. 2px dark-orange bottom border for tactile depth.
- **Inputs:** Rugged white background with a 2px Steel Grey border. Labels must always be visible (no floating labels) in the `label-bold` style.

### Cards & Photo Proofs
- **Compliance Cards:** Use Light Steel (#EDF2F7) backgrounds for "Safe" states and Vivid Red borders for "At Risk" states.
- **Photo-Proof Tiles:** Thick 4px frames. When a photo is captured, the frame turns Green to confirm "Proof" has been logged.

### Controls
- **Toggle Switches:** Oversized (min 64px width) with high-contrast color shifts.
- **Chunky Sliders:** The slider thumb should be a minimum of 40px diameter to allow for thumb-sliding without obscuring the value.

### Status Headers
- Top-level app headers that occupy the full width of the screen. Under extreme heat warnings, the entire header background must flash or remain Vivid Red, overriding the standard brand Steel Grey.