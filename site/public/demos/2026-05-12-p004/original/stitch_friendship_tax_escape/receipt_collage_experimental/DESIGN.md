---
name: Receipt Collage Experimental
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4b4731'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7c775f'
  outline-variant: '#cdc7aa'
  surface-tint: '#6a5f00'
  primary: '#6a5f00'
  on-primary: '#ffffff'
  primary-container: '#ffe600'
  on-primary-container: '#726600'
  inverse-primary: '#dec800'
  secondary: '#395f94'
  on-secondary: '#ffffff'
  secondary-container: '#9ec2fe'
  on-secondary-container: '#284f83'
  tertiary: '#7b5455'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffdcdc'
  on-tertiary-container: '#835b5c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fde400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#1e477b'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ecbaba'
  on-tertiary-fixed: '#2f1314'
  on-tertiary-fixed-variant: '#613d3e'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  receipt-header:
    fontFamily: Space Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -1px
  receipt-body:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  emotional-note:
    fontFamily: Syne
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0.5px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
  fine-print:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 12px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  stack-offset: 8px
---

## Brand & Style

This design system is built on the aesthetic of "Financial Existentialism"—a blend of cold, hard data and the messy, emotional reality of social debt. The brand personality is neurotically playful, utilizing a "Brutalist Scrapbook" style that mimics a chaotic workspace covered in thermal receipts, sticky notes, and highlighted tax forms.

The target audience is the socially overextended millennial/Gen Z demographic who uses humor to cope with interpersonal obligations. The UI should evoke the frantic energy of an audit mixed with the soft vulnerability of a personal diary. Visuals are intentionally unrefined, featuring crinkled paper overlays, "ink-bleed" artifacts, and a tactile sense of physical paper being shuffled on a desk.

## Colors

The palette is designed to trigger specific emotional responses related to social obligation:

*   **Anxiety Yellow (#FFE600):** The primary color. It is bright and alert, used for urgent headers and "Critical Debt" warnings.
*   **Bank Statement Blue (#4A6FA5):** A muted, corporate secondary color used for structural elements, borders, and "Official" data sets to provide a grounding sense of cold bureaucracy.
*   **Guilt Trip Pink (#F4C2C2):** A soft, emotional tertiary color used for personal notes, apologies, and background highlights where social pressure is felt.
*   **Debt Neon Green (#39FF14):** An aggressive accent color used sparingly for highlighters and "Pay Up" call-to-actions.
*   **Thermal Black (#1A1A1B):** Used for typography, mimicking the low-grade ink of a receipt printer.

## Typography

This design system employs a high-contrast typographic pairing to represent the tension between "The System" and "The Self":

1.  **The System (Monospaced):** **Space Mono** and **JetBrains Mono** handle all transactional data. They mimic the fixed-width output of a thermal receipt printer. Use these for calculations, dates, and "Official" warnings.
2.  **The Self (Expressive):** **Syne** is used for "handwritten" annotations, emotional outbursts, and social commentary. It should often appear at a slight angle (2-3 degrees) to look like a post-it note stuck haphazardly onto the UI.

All text should avoid pure black; use **Thermal Black** to simulate slightly faded printer ink.

## Layout & Spacing

The layout philosophy rejects perfect symmetry in favor of a "Chaotic Stack" model. 

*   **Grid:** A standard 12-column underlying grid is used for core placement, but individual elements must be offset by `stack-offset` values to create a layered, collage effect.
*   **Layering:** Components should intentionally overlap. A "receipt" card might partially obscure a "sticky note" button. 
*   **Rotation:** Containers should have subtle, randomized rotations (between -1.5deg and 1.5deg) to mimic paper dropped on a table.
*   **Mobile:** On mobile, the "Chaos" is reigned in for usability, moving to a single-column stack, but maintaining the staggered vertical alignment and overlapping paper-edge textures.

## Elevation & Depth

Depth is not communicated through soft, modern shadows, but through **Physical Stacking**:

*   **Hard Shadows:** Use "Block Shadows"—solid 2px or 4px offsets in **Bank Statement Blue** or **Thermal Black** with 0 blur.
*   **Textures:** Use crinkled paper grain and "noise" overlays on top-level containers to give them a tactile, physical presence.
*   **Z-Index Drama:** Elements should feel like they are being pinned or taped down. Use "Digital Washi Tape" (semi-transparent neon rectangles) to visually "hold" elements to the background.
*   **Meters:** Progress bars and meters use "Wobbly Lines"—non-perfect, hand-drawn vector paths that vibrate slightly to represent social instability.

## Shapes

The shape language is strictly **Sharp (0)**. 

*   **Edges:** Everything is cut with a "paper cutter." Use zigzag "perforated" edges for the bottom of cards to mimic torn receipts.
*   **Stickers:** "Obligation Tokens" are the only exception, using a die-cut aesthetic with a thin white stroke and a slight 1px hard shadow.
*   **Punch-outs:** Use circular negative-space cutouts on the sides of containers to mimic hole-punched planner paper.

## Components

*   **Receipt Cards:** The primary container. Features a subtle paper texture, a perforated bottom edge, and a header in **receipt-header** style.
*   **Obligation Tokens:** Small, punch-out tab components used for categorization (e.g., "Birthday Dinner," "Airport Pickup"). They look like physical stickers.
*   **Highlighter Inputs:** Text inputs do not have borders on four sides. Instead, the focus state triggers a thick **Debt Neon Green** or **Anxiety Yellow** background highlight behind the text, mimicking a marker.
*   **The "Guilt" Meter:** A custom slider component using a wobbly, hand-drawn line. The handle is a "frowning face" or a "shaking hand" icon.
*   **Action Buttons:** Styled as "Void" stamps or "Approved" marks. Use heavy, distressed borders and all-caps **Space Mono** typography.
*   **Washi Tape Dividers:** Horizontal rules are replaced by semi-transparent, colored strips of "tape" that overlap the edges of the content they divide.