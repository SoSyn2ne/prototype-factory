---
name: Scholastic Justice
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#5c3f40'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0037'
  primary: '#b80035'
  on-primary: '#ffffff'
  primary-container: '#e11d48'
  on-primary-container: '#fffaf9'
  inverse-primary: '#ffb3b6'
  secondary: '#636036'
  on-secondary: '#ffffff'
  secondary-container: '#e9e5b0'
  on-secondary-container: '#69663c'
  tertiary: '#555c64'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d757d'
  on-tertiary-container: '#fbfbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#e9e5b0'
  secondary-fixed-dim: '#cdc996'
  on-secondary-fixed: '#1e1c00'
  on-secondary-fixed-variant: '#4a4821'
  tertiary-fixed: '#dce3ec'
  tertiary-fixed-dim: '#c0c7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-lg:
    fontFamily: Space Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
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
    fontFamily: Bricolage Grotesque
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  stamp-text:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1'
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  notebook-line: 24px
---

## Brand & Style
The design system operates at the intersection of academic nostalgia and high-stakes legal drama. The brand personality is irreverent yet authoritative, evoking the feeling of a secret trial held in a high school cafeteria. It targets students, educators, and "digital detectives" who value both data-driven evidence and expressive storytelling.

The design style is **Playful-Experimental / Scrapbook-Brutalism**. It rejects clinical "SaaS" aesthetics in favor of tactile, skeuomorphic elements like binder rings, sticky notes, and paper textures. The emotional response is one of heightened urgency ("Objection!") balanced by the familiar, comforting textures of school supplies. High-contrast 2px borders and intentional misalignment create a raw, "hand-assembled" feel.

## Colors
The palette is rooted in functional nostalgia. 
- **Legal Pad Yellow** (#FEF9C3) serves as the primary background for long-form reading and "evidence" logs.
- **School Notebook Blue** (#EFF6FF) is used for secondary surfaces, often paired with subtle horizontal rule lines.
- **Objection Red** (#E11D48) is reserved for critical actions, alerts, and rubber-stamp overlays.
- **Ink Black** (#0F172A) provides high-contrast definition for borders and typography, mimicking a heavy-duty felt-tip pen.
- **Manila Folder** (#FDE68A) identifies interactive card elements and tabbed navigation.

## Typography
This system utilizes a tri-font hierarchy to distinguish between formal data, functional UI, and informal commentary.
- **Formal Entry (Space Mono):** Used for headlines and "official" legal data. It mimics a typewriter or computer-generated evidence log.
- **Functional UI (Inter):** Used for body copy and dense information arrays to ensure maximum legibility amidst the chaotic visual style.
- **Student Notes (Bricolage Grotesque):** Used for labels, annotations, and "handwritten" stamps. This font brings an expressive, quirky human element to the interface.

## Layout & Spacing
The layout follows a **Fixed-Grid Scrapbook** model. Content is contained within a 12-column grid on desktop, but elements are frequently rotated by 1-2 degrees to break the digital perfection.

- **Margins:** Desktop margins are generous (48px) to allow for decorative "binder rings" or "margin notes" to exist in the periphery.
- **Rhythm:** Vertical spacing is derived from a 24px baseline, matching the "Notebook Line" spacing for visual consistency across paper-textured backgrounds.
- **Responsive:** On mobile, margins shrink to 16px and decorative elements (like paperclips) are moved to the top or bottom of containers to maximize content width.

## Elevation & Depth
Depth is achieved through **Physical Layering** rather than traditional shadows.
- **Stacked Surfaces:** Cards should look like they are physically placed on top of each other. Use 2px solid black borders to define edges.
- **Shadows:** Use "Hard Shadows" (offset 4px or 8px) with 100% opacity in Ink Black to give elements a cutout, tactile appearance.
- **Textures:** Apply SVG grain filters or "crumpled paper" overlays to backgrounds to differentiate between the "Desk" (lowest layer) and "Document" (interactive layer).
- **Decorations:** Use "Sticky Note" elements with a slight lift on one corner to represent temporary or high-priority information.

## Shapes
The shape language is **Sharp and Geometric**. 
- All cards and containers use 0px border radius to maintain a "cut paper" aesthetic.
- **Exceptions:** Circular "Rubber Stamps" and "Binder Holes" use 100% rounding to contrast against the harsh rectangularity of the documents.
- **Borders:** A consistent 2px solid border is required for all interactive elements and primary containers.

## Components
- **Stamp Buttons:** Primary actions should look like rubber stamps. On hover, the button should tilt slightly; on click, it should scale down and apply a "distressed" ink texture overlay.
- **Evidence Cards:** Use the Manila Folder (#FDE68A) color with a 2px black border. Include a "Paperclip" SVG in the top-left corner as a decorative anchor.
- **Sticky Note Inputs:** Text areas should resemble yellow Post-it notes with subtle horizontal lines.
- **Status Flags:** Use the "Objection Red" for flags. These should appear as "Overruled" or "Guilty" stamps slapped across the UI at a 15-degree angle.
- **The Binder Nav:** A vertical sidebar on the left containing circular "punched holes" and a metal ring texture, housing the primary navigation icons.
- **Lists:** Bullet points are replaced with "Hand-drawn" checkmarks or small "X" marks in red ink.