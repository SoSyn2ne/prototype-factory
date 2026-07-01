---
name: Archival Ledger System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

This design system is built on the philosophy of **Refined Editorialism** and **Archival Authority**. It treats creator data not as ephemeral social content, but as legal and intellectual assets requiring protection. The aesthetic rejects the "softness" of modern SaaS in favor of a structured, high-contrast, and serious environment that evokes the weight of a physical ledger or a prestigious broadsheet.

The style is a blend of **Minimalism** and **Brutalism**, characterized by:
- **Absolute Precision:** Every element aligns to a strict grid, mimicking the layout of formal documentation.
- **Architectural Clarity:** Visual hierarchy is driven by typography and negative space rather than shadows or color.
- **Protective Tone:** The UI feels "heavy" and permanent, signaling to creators that their consent and assets are being defended with institutional rigor.

## Colors

The palette is intentionally restrained to maintain an authoritative and archival atmosphere. 

- **The Base:** Uses an "Eggshell" (#FDFDFB) background to reduce eye strain and provide a more tactile, paper-like feel than pure white.
- **The Ink:** Primary actions and headers use "Ink-Black" (#000000). This provides maximum contrast and implies a "finality" to the actions taken within the ledger.
- **The Warning:** A "Deep Crimson" (#8B0000) is reserved strictly for consent breaches, data loss, or unauthorized usage. This color carries emotional weight and signals serious intellectual property threats.
- **Hierarchy:** Secondary text uses slate tones (#4A4A4A) to ensure a clear distinction between metadata and primary archival records.

## Typography

Typography is the primary tool for expression in this design system. 

- **Headlines:** Use **Playfair Display**. Its high contrast and elegant serifs evoke the feeling of an authoritative masthead or a legal deed. Use it for page titles, section headers, and major ledger entries.
- **Body & Data:** Use **Inter**. This provides a utilitarian, neutral counter-balance to the serif headings. It ensures high legibility for densley packed ledger data and legal fine print.
- **Labels:** Use uppercase Inter with increased letter spacing for small-scale navigation and table headers to mimic archival tagging systems.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to maintain structural integrity. 

- **Grid:** A 12-column grid is used for desktop (1280px max-width). In a ledger context, use vertical borders (rules) to separate columns, emphasizing the tabular nature of the data.
- **Rhythm:** Spacing follows a 4px baseline, but large-scale layouts should prioritize generous white space (margins of 64px+) to create a "premium editorial" feel.
- **Responsive:** On mobile, margins collapse to 16px. Elements that are tabular on desktop should transform into "Archival Cards" on mobile, maintaining the thin 1px border.

## Elevation & Depth

This design system avoids traditional drop shadows and "floating" elements. Depth is achieved through **Tonal Layering** and **Line Work**.

- **Surfaces:** Use the background (#FDFDFB) for the main page area and pure white (#FFFFFF) for cards or active work surfaces.
- **Borders:** Depth is defined by 1px solid borders (#E5E5E1). When an element needs to feel "raised" or active, increase the border thickness to 2px Ink-Black instead of adding a shadow.
- **Inlays:** Search fields and secondary data containers should feel "recessed" by using a slight tint or a subtle inner stroke.

## Shapes

The shape language is **precise and sharp**.

- **Components:** Standard UI components (buttons, input fields, cards) use a 4px corner radius (`rounded-sm`). This provides just enough softening to feel "finished" without losing the professional, architectural edge.
- **Media:** Document previews and content thumbnails should maintain 0px (sharp) corners to emphasize their nature as "files" or "records."

## Components

- **Buttons:** Primary buttons are solid Ink-Black with white Inter (Bold, Uppercase) text. No gradients. Hover states should simply invert (White background, Black text, Black border).
- **Archival Content Cards:** Pure white backgrounds with a 1px #E5E5E1 border. Headers within cards should use Playfair Display (Small).
- **Ledger Timeline:** A vertical 1px line connects events. Each "node" is a small 8px black square, not a circle.
- **Input Fields:** Rectangular with 4px radius. Labels are always positioned above the field in uppercase Inter. The active state is indicated by a 1px Ink-Black border.
- **Status Chips:** Rectangular. For "Verified" or "Consent Granted," use a thin black border. For "Violation" or "Loss," use a solid Deep Crimson (#8B0000) background with white text.
- **Document Previews:** Displayed with a subtle 1px border and a light grey inset "mat" to simulate a paper document sitting on a surface.