---
name: Resale Flex Authenticity Mirror
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#261900'
  on-tertiary-container: '#a17f3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
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
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
This design system embodies the quiet confidence of an expert appraiser. It targets a high-net-worth audience and professional resellers who demand precision, discretion, and absolute trust. The aesthetic is a fusion of **Editorial Minimalism** and **Corporate Modernity**, prioritizing white space and structured layouts to evoke the feeling of a high-end auction house catalog.

The emotional response should be one of "certainty." Every element is designed to reduce visual noise, allowing the high-resolution product photography—the core of the authentication process—to take center stage. The style avoids trendy gimmicks in favor of timeless, high-contrast compositions and razor-sharp execution.

## Colors
The palette is built on a foundation of "Restrained Luxury." 
- **Primary (Charcoal):** Used for primary text and core structural elements to provide a sense of weight and authority.
- **Secondary (Cream):** Replaces pure white as the primary background color to soften the digital experience and mimic premium paper stock.
- **Tertiary (Soft Gold):** Reserved for subtle indicators of excellence, such as "Authenticated" badges or premium membership icons.
- **Accent (Deep Forest Green):** The "Quiet Action" color. It is used exclusively for the final decision-making moments (Buy, Pass, or Verify). It communicates growth, stability, and safety without the alarmist nature of brighter greens.
- **Neutrals:** A range of mid-tone grays are used for secondary information and borders to maintain a low-friction visual hierarchy.

## Typography
The typography system uses a classic pairing to balance tradition with technical utility. **Playfair Display** provides an editorial, high-fashion flair for headlines, signaling luxury and heritage. **Hanken Grotesk** is used for all functional and body text; its sharp, contemporary terminals ensure that technical data and authentication reports remain highly legible and professional.

- Use **display-lg** for hero sections and brand statements.
- Use **label-caps** for section headers and categorization to provide an organized, "archival" feel.
- Optical sizing is critical; ensure tight tracking on large serif headlines and generous leading on body text for a breathable, premium feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to preserve the editorial composition, transitioning to a fluid system on mobile. 
- **Desktop:** A 12-column grid with wide 64px margins creates an intentional "frame" around the content, similar to a luxury magazine layout.
- **Mobile:** A 4-column grid with 20px margins. 
- **Spacing Rhythm:** Based on an 8px base unit. Vertical rhythm is expansive; use large padding values (e.g., 80px or 120px) between major sections to emphasize the "Minimalist Luxury" theme and prevent the UI from feeling crowded.

## Elevation & Depth
This design system avoids heavy drop shadows, which can feel "app-like" and cheap. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.
- **Surface Tiering:** Use subtle shifts between the secondary (Cream) and a slightly darker "Stone" color to define areas like sidebars or card backgrounds.
- **Borders:** 1px solid borders in a light neutral (#E5E5E5) are the primary tool for containment.
- **Interactive Depth:** When an element requires elevation (e.g., a modal), use a single, highly diffused "Ambient Shadow" (0px 20px 40px rgba(0,0,0,0.05)) to suggest a gentle lift off the page without breaking the flat editorial aesthetic.

## Shapes
The shape language is strictly **Sharp (0)**. 
Right angles convey architectural strength, precision, and formality. This choice reinforces the "Authenticity Mirror" concept—showing the product exactly as it is without softening the edges. 
- All buttons, input fields, and image containers must have 0px border-radius.
- Authentication badges may use a "Pill-shaped" (3) exception only if they need to be distinguished as "Official Stamps," but the primary UI remains architectural and linear.

## Components
- **Buttons:** Primary buttons are solid Charcoal with White or Gold text. Secondary buttons are outlined (Ghost) with a 1px Charcoal stroke. The "Final Action" button uses the Forest Green background. All buttons use `label-caps` for text.
- **Cards:** Product cards should have no borders or shadows. Use high-resolution imagery that bleeds to the edge of the card, with metadata placed cleanly below in `label-sm`.
- **Input Fields:** Minimalist design with only a bottom border that darkens on focus. Labels should stay above the field in `label-caps`.
- **Authentication Status:** Use a dedicated "Seal of Authenticity" component—a square container with a Tertiary (Gold) border and centered serif typography.
- **Lists:** Use wide spacing between list items (min 16px) with hairline separators. Data points (e.g., "Serial Number") should be left-aligned, while values are right-aligned in a heavier weight of `hankenGrotesk`.