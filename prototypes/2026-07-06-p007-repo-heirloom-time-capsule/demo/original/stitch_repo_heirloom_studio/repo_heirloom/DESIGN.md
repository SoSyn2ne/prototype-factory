---
name: Repo Heirloom
colors:
  surface: '#12131d'
  surface-dim: '#12131d'
  surface-bright: '#383844'
  surface-container-lowest: '#0c0d18'
  surface-container-low: '#1a1b26'
  surface-container: '#1e1f2a'
  surface-container-high: '#282935'
  surface-container-highest: '#333440'
  on-surface: '#e2e1f1'
  on-surface-variant: '#ccc3d2'
  inverse-surface: '#e2e1f1'
  inverse-on-surface: '#2f303b'
  outline: '#958e9c'
  outline-variant: '#4a4550'
  surface-tint: '#d4bbff'
  primary: '#d4bbff'
  on-primary: '#3d1b72'
  primary-container: '#bb9af7'
  on-primary-container: '#4c2c82'
  inverse-primary: '#6c4da4'
  secondary: '#aec6ff'
  on-secondary: '#002e6b'
  secondary-container: '#0c4393'
  on-secondary-container: '#93b4ff'
  tertiary: '#bec5eb'
  on-tertiary: '#282f4d'
  tertiary-container: '#a2a9ce'
  on-tertiary-container: '#363d5d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ebdcff'
  primary-fixed-dim: '#d4bbff'
  on-primary-fixed: '#260058'
  on-primary-fixed-variant: '#54358a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#aec6ff'
  on-secondary-fixed: '#001a43'
  on-secondary-fixed-variant: '#0c4393'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#bec5eb'
  on-tertiary-fixed: '#121a37'
  on-tertiary-fixed-variant: '#3e4565'
  background: '#12131d'
  on-background: '#e2e1f1'
  surface-variant: '#333440'
typography:
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  metadata-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  container-max: 1440px
---

## Brand & Style
The design system for this product centers on the concept of "Digital Preservation," treating code repositories as physical artifacts or rare media. The brand personality is **Experimental, Precise, and Nostalgic**. It bridges the gap between the ephemeral nature of cloud computing and the tactile permanence of physical storage.

The design style is a hybrid of **Retro-Tech and Developer-Centric Minimalism**. It utilizes heavy borders and structured grid alignments reminiscent of early terminal interfaces, but softens them with modern glassmorphism and vibrant, neon-soaked accents. The UI should evoke the feeling of operating a high-end, futuristic mainframe designed for archiving human knowledge.

## Colors
The palette is rooted in a "Tokyo Night" inspired IDE aesthetic. The background is a deep, matte charcoal (`#1A1B26`), providing a low-strain environment for long-form reading and code auditing.

- **Primary (Electric Violet):** Used for critical actions, branding elements, and highlighting the "heirloom" status of a repository.
- **Secondary (Steel Blue):** Used for metadata, links, and secondary interactive states.
- **Surfaces:** Tiered depth is achieved using `#1F2335` for container backgrounds and `#24283B` for elevated cards or hovered states.
- **Accents:** High-contrast borders use the secondary or tertiary colors to define the "physical" boundaries of the UI.

## Typography
The typography system uses a tri-font approach to balance character with utility. 

- **Display & Headlines:** Use **Bricolage Grotesque**. Its quirky, variable-width feel gives the "Heirloom" aspect a human, hand-crafted touch.
- **Body Content:** Use **Geist**. This provides a hyper-clean, technical readability that developers expect, ensuring documentation and descriptions are effortless to parse.
- **Data & Metadata:** Use **JetBrains Mono**. All timestamps, commit hashes, and file sizes must be rendered in this monospaced face to reinforce the "physical media label" aesthetic.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Everything is aligned to a 4px baseline and a 12-column desktop grid. 

- **Columns:** Use 12 columns for desktop, 8 for tablet, and 4 for mobile.
- **Gutters:** Gutters are fixed at 24px to provide clear "air" between technical data points.
- **Borders as Spacing:** In this design system, borders are not just decorative; they define the structure. Elements should often "butt up" against one another with shared 1px borders to mimic the look of a hardware interface or a printed datasheet.

## Elevation & Depth
This system eschews traditional soft ambient shadows in favor of **Hard-Edge Depth and Tonal Layering**.

- **The "Physical" Offset:** Instead of blur, use 2px or 4px hard-offset shadows (100% opacity) in the primary or secondary accent color to give buttons a "pressed" or "raised" tactile feel.
- **Tonal Tiers:** Depth is communicated primarily through background color shifts. Level 0 is the darkest (#1A1B26), Level 1 is #1F2335, and Level 2 (active/focus) is #24283B.
- **Scanline Overlays:** Use a subtle, fixed-position SVG pattern overlay of horizontal scanlines (2% opacity) on the highest elevation surfaces to reinforce the retro-tech vibe.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To achieve the "physical artifact" feel, all containers, buttons, and input fields must have square corners. This architectural rigidity mimics terminal windows and industrial hardware components. For specific "collectible" items (like repository badges or featured cards), a 45-degree chamfer (clipped corner) may be used on the top-right corner to suggest a "tab" or a "disk" shape.

## Components
- **Buttons:** Rectangular with a 1px solid border. The "Primary" state features a hard-drop shadow of 4px in Electric Violet. On hover, the button shifts position 2px down and right, simulating a physical click.
- **Repository Cards:** Utilize a "header-strip" style where the top 8px of the card is a solid block of the primary accent color. Labels inside use `label-caps` for a serialized look.
- **Input Fields:** Styled as "Command Lines." They feature a fixed `>` prompt prefix in the primary color and use `metadata-sm` for text entry.
- **Chips/Status Tags:** Styled as miniature "Microchips." Sharp corners, monospaced text, and a high-contrast background (Primary color with Black text).
- **Lists:** Separated by 1px solid lines (#414868). Hover states should trigger a full-row background color change to #24283B and reveal a "selection pointer" (e.g., `_` or `→`).
- **Data Visualization:** Use solid blocks of color and step-line charts rather than smooth curves to maintain the technical, digital-first aesthetic.