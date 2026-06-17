---
name: Photo Pulse
colors:
  surface: '#fff8f7'
  surface-dim: '#ecd5d3'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#ffe9e7'
  surface-container-high: '#fbe3e1'
  surface-container-highest: '#f5dddb'
  on-surface: '#251818'
  on-surface-variant: '#584140'
  inverse-surface: '#3b2d2c'
  inverse-on-surface: '#ffedeb'
  outline: '#8c706f'
  outline-variant: '#e0bfbd'
  surface-tint: '#ae2f34'
  primary: '#ae2f34'
  on-primary: '#ffffff'
  primary-container: '#ff6b6b'
  on-primary-container: '#6d0010'
  inverse-primary: '#ffb3b0'
  secondary: '#515f78'
  on-secondary: '#ffffff'
  secondary-container: '#d2e0fe'
  on-secondary-container: '#55637d'
  tertiary: '#006d3f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b26b'
  on-tertiary-container: '#003c20'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#8c1520'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b9c7e4'
  on-secondary-fixed: '#0d1c32'
  on-secondary-fixed-variant: '#39475f'
  tertiary-fixed: '#57ffa6'
  tertiary-fixed-dim: '#00e38a'
  on-tertiary-fixed: '#002110'
  on-tertiary-fixed-variant: '#00522e'
  background: '#fff8f7'
  on-background: '#251818'
  surface-variant: '#f5dddb'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-margin: 20px
  gutter: 16px
  border-width: 3px
---

## Brand & Style

This design system is built for a playful-experimental experience that audits dating profile photos with wit and precision. The brand personality is "The Honest Best Friend"—brutally honest but ultimately rooting for your success. 

The visual style is **Bold / High-Contrast** with a touch of **Modern Brutalism**. It utilizes heavy borders, intentional offsets, and vibrant color blocking to create an energetic, high-urgency environment. The UI should feel reactive and alive, using tactile metaphors like physical stickers and printed scorecards to convey the "audit" nature of the product.

**Target Audience:** Gen-Z and Millennial digital daters looking for an edge.
**Emotional Response:** Confidence, amusement, and a "fresh" start.

## Colors

The palette is designed to trigger emotional responses aligned with dating outcomes:

*   **Vibrant Coral (#FF6B6B):** Represents romance, heat, and primary actions. Used for "Match" potential and primary CTAs.
*   **Deep Navy (#0A192F):** The "Trust" anchor. Used for backgrounds and heavy borders to keep the high-energy colors grounded.
*   **Neon Mint (#2AF598):** The "Freshness" indicator. Used for high scores, "Keep" recommendations, and approval states.
*   **Alert Amber (#FFBF00):** The "Cringe" warning. Used for technical feedback (bad lighting, blurry) and cautionary advice.
*   **Ink Black (#121212):** Used for all 3px borders and high-contrast text to ensure a graphic, illustrative feel.

## Typography

The typography leverages **Space Grotesk** for a technical yet quirky personality in headings. Its geometric, slightly "off" apertures provide the "experimental" vibe required for an AI-driven audit tool.

**Hanken Grotesk** serves as the workhorse for UI labels and body copy. It is selected for its high legibility and contemporary proportions, ensuring that even when the UI gets loud, the feedback remains readable.

*   **Headings:** Use tight line-heights and negative letter-spacing for a "headline" feel.
*   **Labels:** Use uppercase for category headers to lean into the "Report/Audit" aesthetic.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is "Grid-Visible," meaning elements should feel like they are snapped into a rigid structure.

*   **Card Offsets:** Instead of standard centering, specific elements (like badges or secondary cards) should use a "pseudo-3D" offset of 4px or 8px down and to the right, often paired with a solid black shadow.
*   **Visual Rhythm:** Use `md` (24px) for most padding between sections and `sm` (12px) for internal card padding.
*   **Mobile:** Margins are tight (20px) to maximize the "photo-first" nature of the app.

## Elevation & Depth

This system rejects soft, ambient shadows in favor of **Hard Strokes and Tonal Offsets**. 

*   **Depth Level 1:** 3px Solid Deep Navy border around all containers.
*   **Depth Level 2 (The "Pop"):** A solid, non-blurred "drop shadow" using the Deep Navy color at a 4px or 8px offset. This creates a sticker-like, tactile effect.
*   **Interactive State:** When an element is pressed, it should "depress" by moving to a 0px offset and losing its hard shadow, simulating a physical button click.
*   **Glassmorphism:** Use only for over-image overlays (e.g., photo metadata) with a high-contrast white border to maintain visibility.

## Shapes

The design system uses **Sharp (0px)** corners for the primary container logic to emphasize the "Brutalist" and "Audit" aesthetic.

*   **Primary Containers:** Strict 90-degree angles with 3px borders.
*   **Secondary Elements:** Small UI components like "Status Chips" or "Badges" may use a slight 4px radius (`rounded-sm`) to distinguish them from the structural grid, but the overall feeling should remain geometric and rigid.
*   **Iconography:** Use thick-stroke (2pt) icons with square terminals to match the font and border weight.

## Components

### Buttons
*   **Primary:** Coral background, 3px Navy border, 4px hard shadow. Text in Bold Space Grotesk.
*   **Ghost:** Transparent background, 3px Navy border, no shadow until hover.

### The "Freshness Meter"
A custom progress bar using a stepped gradient from Amber (left) to Mint (right). The indicator is a thick Navy vertical needle.

### Audit Cards
Cards that display a photo with its "Verdict." These cards use a 3px border and a large "Status Stamp" (e.g., "CRINGE" in Amber or "FLAMES" in Coral) rotated at a -5 degree angle across the corner.

### Chips & Badges
Rectangular with sharp corners. Use high-contrast background/text pairings (e.g., Mint background with Navy text).

### Input Fields
Strictly rectangular. Use a 1px border for inactive and 3px Navy border for active. When focused, the input field should gain a 4px Neon Mint hard shadow.

### Witty Tooltips
Small, high-contrast Navy bubbles with White text. These should use a triangular "tail" that is also sharp and geometric.