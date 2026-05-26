---
name: Atelier Verdict
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1b22'
  on-tertiary-container: '#83838c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e3e1ec'
  tertiary-fixed-dim: '#c6c5cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#46464e'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  mono-ui:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  margin-page: 64px
  margin-mobile: 24px
  gutter: 24px
  max-width-content: 1120px
---

## Brand & Style
The design system is engineered for the "Creator Monetization Appeal Studio," a high-stakes environment where creators defend their livelihoods. The brand personality is **authoritative, objective, and scholarly**. It avoids the frenetic energy of social media in favor of a **Premium Editorial** aesthetic that mimics high-end legal briefs and architectural journals.

The design style is **Sophisticated Minimalism** with a focus on "Documentary Realism." It prioritizes legibility, structured hierarchies, and a sense of permanence. The UI should evoke an emotional response of **calm confidence and absolute trust**, moving away from "app-like" interfaces toward "studio-grade" professional tools. Visual interest is generated through masterful typography and the rhythmic use of whitespace rather than decorative elements.

## Colors
The palette is intentionally restrained to maintain a "legal-grade" atmosphere. 

- **Primary Canvas:** The background uses `#FAFAFA` (Off-White) to reduce eye strain and provide a warmer, paper-like feel than pure white.
- **Core Text:** `#1A1A1A` (Deep Charcoal) provides high-contrast legibility without the harshness of absolute black.
- **Functional Accents:** Colors are used only for status. Success is indicated with a muted **Forest Green**, and risks/errors with a desaturated **Terracotta**. These are not vibrant; they are professional and informative.
- **Dividers:** Subtle Slate-Grey (`#E4E4E7`) is used for thin, 1px strokes to define the grid without cluttering the visual field.

## Typography
Typography is the primary architectural element of the design system. 

1.  **Playfair Display (Serif):** Reserved for page titles, section headers, and editorial pull-outs. It signals prestige and historical authority.
2.  **Inter (Sans-Serif):** Used for all functional UI elements, body copy, and data entry. It provides a clean, neutral counterpoint to the serif.
3.  **Hierarchy:** Use the `label-caps` style for metadata and small headers to create a "technical document" feel. 
4.  **Specialty:** A monospaced font (JetBrains Mono) is introduced sparingly for case IDs, timestamps, or technical data to reinforce the "Studio" precision.

## Layout & Spacing
The layout follows a **Fixed-Width Grid** on desktop to mimic the proportions of an A4 or Letter document. 

- **The Grid:** A 12-column grid with generous 64px outer margins. Content should be centered to create a sense of focus.
- **Rhythm:** Use an 8px base unit. Vertical rhythm is critical; maintain consistent 32px or 48px gaps between major sections to prevent the UI from feeling "cramped."
- **Responsive:** On mobile, margins reduce to 24px and the layout collapses to a single column. Horizontal scrolling is permitted only for wide data tables.

## Elevation & Depth
This design system avoids traditional shadows to maintain its editorial integrity. Depth is achieved through:

- **Tonal Layering:** Most surfaces live on the `#FAFAFA` base. Secondary information or sidebars can use a subtle off-white or light grey background to create "indentation" rather than elevation.
- **Thin Outlines:** Elements like cards or input fields are defined by 1px solid borders in `#E4E4E7`. 
- **The "Lens" Effect:** For primary actions or featured content, use a very soft, large-radius ambient shadow (0px 20px 40px rgba(0,0,0,0.02)) to suggest the element is resting lightly on the paper surface.

## Shapes
The shape language is "Precise & Minimal." 

- **Corners:** Use **Soft (0.25rem)** roundedness for standard UI elements like buttons and inputs. 
- **The Studio Aspect:** Larger containers (like appeal documents or image previews) use `rounded-lg` (0.5rem) to mimic the subtle curve of a high-end camera lens or premium stationery.
- **Geometric Rigor:** Avoid pill-shapes or fully rounded buttons. Maintain a structured, rectangular foundation to keep the interface looking professional and serious.

## Components
- **Buttons:** Primary buttons are solid `#1A1A1A` with white text. Secondary buttons are outlined with 1px borders. Use `label-caps` for button text to ensure they feel like official commands.
- **Input Fields:** Minimalist design with only a bottom border that thickens on focus, or a very light 4-sided stroke. Labels always sit above the field in `label-caps`.
- **Cards:** Used sparingly. Cards should not have shadows; instead, they use 1px borders and increased internal padding (32px) to frame content as "Evidence" or "Case Details."
- **Dividers:** Use horizontal lines frequently but subtly to separate different logical sections of an appeal.
- **Status Chips:** Small, rectangular chips with muted background tints (e.g., soft terracotta background with deep charcoal text) for "Pending," "Approved," or "Under Review."
- **Data Tables:** High-density, no vertical lines, only horizontal rules. Header row in `label-caps`.