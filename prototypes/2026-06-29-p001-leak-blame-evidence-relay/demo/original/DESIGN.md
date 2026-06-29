---
name: Field-Ops Utilitarian
colors:
  surface: '#f4fafc'
  surface-dim: '#d5dbdd'
  surface-bright: '#f4fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff5f6'
  surface-container: '#e9eff0'
  surface-container-high: '#e3e9eb'
  surface-container-highest: '#dde3e5'
  on-surface: '#161d1e'
  on-surface-variant: '#3c494c'
  inverse-surface: '#2b3133'
  inverse-on-surface: '#ecf2f3'
  outline: '#6c797c'
  outline-variant: '#bbc9cc'
  surface-tint: '#006876'
  primary: '#006876'
  on-primary: '#ffffff'
  primary-container: '#00bcd4'
  on-primary-container: '#004650'
  inverse-primary: '#44d8f1'
  secondary: '#546067'
  on-secondary: '#ffffff'
  secondary-container: '#d7e4ec'
  on-secondary-container: '#5a666d'
  tertiary: '#5c5f61'
  on-tertiary: '#ffffff'
  tertiary-container: '#a8abad'
  on-tertiary-container: '#3c4041'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a1efff'
  primary-fixed-dim: '#44d8f1'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e59'
  secondary-fixed: '#d7e4ec'
  secondary-fixed-dim: '#bbc8d0'
  on-secondary-fixed: '#111d23'
  on-secondary-fixed-variant: '#3c494f'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f4fafc'
  on-background: '#161d1e'
  surface-variant: '#dde3e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  ko-label:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
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
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
This design system is engineered for high-stakes field documentation, specifically for apartment leak evidence management. The brand personality is clinical, authoritative, and indestructible. It prioritizes evidentiary integrity over aesthetic flair, evoking a sense of "digital paperwork" that is both modern and legally robust.

The style is **Corporate / Modern** with a lean toward **High-Contrast Utility**. It employs a "Structure First" philosophy where information density is high but clarity is maintained through rigorous alignment and clear visual hierarchies. The UI should feel like a professional tool—reliable, precise, and objective—designed to be used in varying lighting conditions found in construction and maintenance environments.

## Colors
The palette is dominated by a range of neutral grays and whites to provide a sterile, objective backdrop for photographic evidence. 

- **Primary Accent (#00BCD4):** A restrained Cyan used exclusively for "Action" states—primary buttons, active toggles, and "Add Evidence" triggers.
- **Surface Grays:** A tiered system of cool grays (#F5F7F9 to #37474F) separates data containers from the background.
- **State Colors:** High-saturation Success, Warning, and Danger colors are used for "Case Status" (e.g., Resolved, Investigation Required, Critical Leak) to ensure instant recognition in high-stress field scenarios.
- **Text:** Deep charcoal (#263238) is used for maximum legibility against light backgrounds.

## Typography
The system uses **Hanken Grotesk** as a high-fidelity surrogate for Pretendard, providing a clean, humanist-grotesque feel that handles both English and Korean characters with professional neutrality. 

- **Headlines:** Use Bold and Semi-Bold weights for document headers and case IDs.
- **Data Labels:** **JetBrains Mono** is introduced for technical metadata (timestamps, coordinates, unit numbers) to emphasize the "data-entry" nature of the tool.
- **Korean Context:** Interface labels in Korean (e.g., 확인, 취소, 증거 등록) should maintain a medium weight to ensure the complex strokes are legible at small sizes.
- **Mobile scaling:** For phone screens, `display-lg` should downscale to 24px to prevent excessive wrapping in tight field-report layouts.

## Layout & Spacing
This system utilizes a **Fixed Grid** approach within containers to mimic physical inspection forms. 

- **Rhythm:** A strict 4px baseline grid ensures vertical alignment across multi-column data tables.
- **Mobile:** A single-column vertical stack is mandatory for field use, with 16px side margins to prevent thumb-clipping.
- **Desktop/Tablet:** A 12-column grid is used for the administrative dashboard, with content primarily grouped into 4-column "Evidence Blocks."
- **Stacking:** Use `stack-md` (16px) between unrelated data points and `stack-sm` (8px) for related label-value pairs.

## Elevation & Depth
To maintain a professional and "flat" utility feel, this design system avoids heavy shadows. 

- **Tonal Layers:** Depth is achieved through background color shifts. The main canvas is `#F5F7F9`, while active evidence cards are `#FFFFFF`.
- **Low-Contrast Outlines:** All interactive elements and data containers use a 1px solid border (#E0E4E8). No shadows are used for standard components.
- **Active State:** Only the currently selected evidence block or an open modal receives a tight, 4px blur, 10% opacity neutral shadow to provide just enough lift for focus.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a subtle modern touch without compromising the "sturdy" and "industrial" feel of the application. 

- **Standard Elements:** Inputs, buttons, and data rows use a 4px (0.25rem) radius.
- **Evidence Cards:** Larger containers use 8px (0.5rem) to distinguish them from smaller UI controls.
- **Status Badges:** These remain slightly more rounded (12px) to differentiate "Status" information from "Actionable" buttons.

## Components
- **Robust Data Rows:** Use a two-column layout for mobile. Left side: Korean label in `ko-label` (Grey 600). Right side: Value in `body-md` (Charcoal 900). Rows are separated by 1px light gray dividers.
- **Large Attachment Controls:** High-visibility drop zones for photos. These must include a large Cyan `#00BCD4` icon and clear Korean instructions (e.g., "사진 첨부").
- **Status Badges:** Pill-shaped with low-opacity background fills (10% of the state color) and high-opacity text (100% of the state color). (e.g., [누수 확인됨] for Danger).
- **Structured Evidence Blocks:** White background cards with a 1px border. The header must contain the Timestamp and Location ID in a monospaced font for technical clarity.
- **Primary Buttons:** Solid `#00BCD4` with white text. Height is 48px to accommodate gloved or moving hands in the field.
- **Input Fields:** Inset appearance with a 1px solid border. When focused, the border changes to Primary Cyan with no glow.