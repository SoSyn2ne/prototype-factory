---
name: Serene Guardian
colors:
  surface: '#f0fbfe'
  surface-dim: '#d1dcde'
  surface-bright: '#f0fbfe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eaf6f8'
  surface-container: '#e4f0f2'
  surface-container-high: '#dfeaec'
  surface-container-highest: '#d9e5e7'
  on-surface: '#131d1f'
  on-surface-variant: '#3e494a'
  inverse-surface: '#283234'
  inverse-on-surface: '#e7f3f5'
  outline: '#6e797b'
  outline-variant: '#bdc8ca'
  surface-tint: '#006972'
  primary: '#00626b'
  on-primary: '#ffffff'
  primary-container: '#127c87'
  on-primary-container: '#dffbff'
  inverse-primary: '#7dd4e0'
  secondary: '#5b5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dde0df'
  on-secondary-container: '#5f6363'
  tertiary: '#535958'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c7171'
  on-tertiary-container: '#f1f6f5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#99f0fc'
  primary-fixed-dim: '#7dd4e0'
  on-primary-fixed: '#001f23'
  on-primary-fixed-variant: '#004f56'
  secondary-fixed: '#e0e3e2'
  secondary-fixed-dim: '#c4c7c6'
  on-secondary-fixed: '#181c1c'
  on-secondary-fixed-variant: '#434847'
  tertiary-fixed: '#dee3e2'
  tertiary-fixed-dim: '#c2c7c7'
  on-tertiary-fixed: '#171d1c'
  on-tertiary-fixed-variant: '#424847'
  background: '#f0fbfe'
  on-background: '#131d1f'
  surface-variant: '#d9e5e7'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1120px
  gutter: 24px
---

## Brand & Style
The design system is built on the principle of "Protective Calm." For pet owners navigating the stress of insurance appeals, the UI acts as a supportive companion rather than a bureaucratic hurdle. The brand personality is empathetic, reliable, and focused on "Asset Defense"—reclaiming what is rightfully yours to protect your pet's future.

The design style is **Modern Corporate with a Soft Humanist touch**. It avoids the aggressive, high-contrast look of traditional financial tools in favor of a "Safe Harbor" aesthetic: ample whitespace, soft shadows, and a focus on clarity. The emotional goal is to reduce cognitive load and heart rate, moving the user from anxiety to a state of organized action.

## Colors
The palette is intentionally restrained to maintain a sense of order.
- **Primary (Reassuring Teal):** Used exclusively for progress indicators, primary CTA buttons, and success states. It represents momentum and protection.
- **Neutral Surfaces:** Warm whites and soft grays create a non-clinical, residential feel. These are used for card backgrounds and page sections to differentiate content without harsh lines.
- **Typography Neutrals:** A deep charcoal-teal is used for text instead of pure black to keep the reading experience soft on the eyes while maintaining high legibility.
- **Asset Highlight:** A subtle gold or soft green may be used sparingly to highlight the "Amount Saved" or "Claim Value," emphasizing the financial defense aspect of the tool.

## Typography
This design system utilizes **Manrope** for structural elements and **Plus Jakarta Sans** for long-form reading. Manrope provides a modern, geometric stability for headlines, while the rounded characteristics of Plus Jakarta Sans make instructions and body text feel approachable and less "legalistic."

Hierarchy is strictly enforced to guide the user through complex appeal steps. Large display sizes are reserved for "Asset Defense" milestones (e.g., "$1,200 Recoverable"), while labels are used for metadata like document types and timestamps.

## Layout & Spacing
The layout follows a **Fixed Centered Grid** for desktop to minimize eye strain and eye travel, keeping the user focused on the central task. 

- **Desktop:** 12-column grid, 1120px max-width, 24px gutters.
- **Mobile:** Single column with 20px side margins.
- **Rhythm:** An 8px linear scale is used. Vertical spacing between different sections is generous (48px+) to create a "breathable" interface that reduces the feeling of being overwhelmed by paperwork.
- **Asset Focus:** The "Value at Risk" or "Saved Amount" is often placed in a sticky sidebar or top header to keep the objective of the appeal visible at all times.

## Elevation & Depth
Depth is achieved through **Tonal Layering** rather than heavy shadows. 
- **Surface Level 0:** The main background in a warm off-white.
- **Surface Level 1:** White cards with a very soft, diffused shadow (0px 4px 20px, 4% opacity teal-tinted neutral) are used to group related information like appeal steps or document lists.
- **Interactive States:** Subtle 1px borders in a slightly darker neutral are used to define input fields and secondary buttons, ensuring accessibility without adding visual noise.
- **Backdrop Blurs:** Used only for modal overlays to keep the user’s focus on the immediate task while maintaining a sense of the broader context behind it.

## Shapes
The shape language is **Softly Rounded (Radius: 8px/0.5rem)**. This removes the "sharpness" of institutional forms. 
- **Buttons and Inputs:** Use 8px corners to feel modern and friendly.
- **Checkboxes:** Are slightly rounded (4px) to avoid a harsh square look.
- **Document Previews:** Use the same 8px radius with a subtle inner stroke to simulate paper thickness.
- **Progress Bars:** Use fully pill-shaped (rounded-full) containers to signify a smooth, continuous journey.

## Components
- **Primary Buttons:** Solid Teal (#127C87) with white text. High prominence for the "next" step.
- **Checklist States:** Unchecked items use a subtle circle outline; checked items use the Primary Teal with a white checkmark. Completed items should have a light teal background tint to the entire row to show progress.
- **Timeline Entries:** A vertical line connector in light gray. Active steps feature a glowing teal dot, while completed steps show a teal checkmark. This visualizes the "defense path" of the claim.
- **Document Previews:** Miniature card views of uploaded PDFs/images. They include a "Status Badge" (Verified, Pending, Missing) and a clear "Re-upload" secondary action.
- **Asset Defense Banner:** A specialized component, usually pinned, that shows the currency value of the appeal. It uses a slightly larger font size and a soft background tint to remind the user of the value being protected.
- **Input Fields:** Large, 16px text height with clear labels above. Focus states use a 2px Teal border to provide high-visibility feedback.