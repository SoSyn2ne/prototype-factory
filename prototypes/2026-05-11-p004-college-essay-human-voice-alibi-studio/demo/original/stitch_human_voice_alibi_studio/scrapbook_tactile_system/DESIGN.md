---
name: Scrapbook Tactile System
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#43474e'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#73777f'
  outline-variant: '#c3c6cf'
  surface-tint: '#426087'
  primary: '#002446'
  on-primary: '#ffffff'
  primary-container: '#1a3a5f'
  on-primary-container: '#87a4cf'
  inverse-primary: '#abc8f5'
  secondary: '#696000'
  on-secondary: '#ffffff'
  secondary-container: '#f3e254'
  on-secondary-container: '#6d6400'
  tertiary: '#480f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e1b00'
  on-tertiary-container: '#fb7f5a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e3ff'
  primary-fixed-dim: '#abc8f5'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#2a486e'
  secondary-fixed: '#f6e557'
  secondary-fixed-dim: '#d8c93d'
  on-secondary-fixed: '#1f1c00'
  on-secondary-fixed-variant: '#4f4800'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb59f'
  on-tertiary-fixed: '#3a0a00'
  on-tertiary-fixed-variant: '#822707'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  headline-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  annotation:
    fontFamily: Syne
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.2'
  label-mono:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1'
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
  margin-page: 40px
  stack-overlap: -12px
---

## Brand & Style

The design system is built on the philosophy of "structured chaos"—mimicking the physical workspace of a student drafting a college essay. The goal is to lower the barrier to creativity by making the digital interface feel like a low-stakes physical scrapbook. 

The style is **Tactile / Experimental**, prioritizing organic textures over digital perfection. It avoids the cold, clinical nature of typical SaaS platforms in favor of a warm, human-centric environment. Key visual drivers include:
- **Materiality:** Surfaces should appear as paper, cardboard, or cork.
- **Human Touch:** Use of handwritten annotations and "manual" fasteners like tape or staples.
- **Imperfect Geometry:** Borders are never perfectly straight; they exhibit "torn" or "deckled" edges.

## Colors

The palette is rooted in physical office supplies and vintage stationery. 

- **Primary (Ink Blue):** A deep, slightly desaturated blue representing fountain pen ink. Used for primary text and structural lines.
- **Secondary (Highlighter Yellow):** A muted, translucent-feeling yellow used for emphasis, selections, and callouts.
- **Tertiary (Red Pencil):** A soft brick red for errors, deletions, or teacher-style annotations.
- **Neutral (Off-White):** The base paper color. Not a sterile white, but a warm, slightly aged cream.
- **Accents:** Use a "Scotch Tape" effect—a semi-transparent, low-saturation cyan/grey with a slight gloss—for decorative fasteners.

## Typography

This design system employs a three-tier typographic strategy to reinforce the scrapbook aesthetic:

1.  **The Bold Statement (Epilogue):** Used for large headings. It provides a modern, geometric structure that contrasts against the messy textures.
2.  **The Workhorse (Lexend):** Chosen for its extreme readability in essay-writing contexts. It remains clean and unobtrusive for long-form text.
3.  **The Personality (Syne/Custom Script):** Used for "handwritten" notes, margin comments, and decorative flourishes. It should appear as if someone scribbled directly onto the page.
4.  **The Metadata (Space Mono):** Used for small labels, page numbers, and technical data, mimicking a typewriter or a library filing system.

## Layout & Spacing

The layout follows a **Fixed Grid** that mimics a physical desk or board. Elements are often intentionally offset or rotated by small increments (e.g., -1.5° to 1.5°) to break the "digital" feel.

- **Stacking:** Use negative spacing (`stack-overlap`) to allow components to overlap slightly, as if papers were tossed onto a pile.
- **Margins:** Generous outer margins represent the "desk" space around the central paper.
- **Breakpoints:**
    - **Mobile (<768px):** Elements straighten out to maximize screen real estate; rotations are minimized to 0.5°.
    - **Desktop (>1024px):** Full "Scrapbook" mode with floating peripheral notes and taped-on references.

## Elevation & Depth

Depth is communicated through physical metaphors rather than standard drop shadows.

- **The Base Layer:** A textured corkboard or dark wood surface.
- **The Paper Layer:** Off-white surfaces with a very subtle grain. Instead of shadows, use **hard, offset 1px borders** in Ink Blue to simulate the thickness of cardstock.
- **Fasteners:** "Scotch tape" strips should be placed at the corners of cards with a 40% opacity and a slight inner-glow to look plastic.
- **Shadows:** If used, shadows should be "Contact Shadows"—sharp, very close to the object, and slightly shifted to one side, suggesting a single overhead desk lamp.

## Shapes

While the base `roundedness` is set to Soft, the edges should be modified by a **CSS mask-image** or **SVG filter** to create a "ripped paper" effect. 

- **Primary Cards:** Straight edges with occasional "torn" bottom or side edges.
- **Buttons:** Hand-drawn shapes (asymmetrical ovals or rectangles with wobbly lines).
- **Icons:** Should look like stamps or ink drawings—bold lines with slight "bleeding" at the corners.

## Components

- **Buttons:** Designed to look like "Dymo" labels or pieces of tape. High contrast (Ink Blue background with Off-White text). On hover, the "label" should tilt slightly.
- **Input Fields:** Styled as a simple underline (as if writing on lined paper) or a box with a "stamped" label in the top-left corner.
- **Cards (The "Scraps"):** Use a "taped-on" appearance. A rectangular card should have a strip of semi-transparent tape across the top-middle or at opposing diagonal corners.
- **Highlighters:** Use the Secondary color as a background-span for text, with a slightly jagged, "marker-stroke" edge.
- **Checkboxes:** Stylized as a hand-drawn "X" inside a rough, hand-drawn square.
- **Modals:** Should appear as a large sheet of paper pinned to the center of the screen with a "push-pin" icon at the top.