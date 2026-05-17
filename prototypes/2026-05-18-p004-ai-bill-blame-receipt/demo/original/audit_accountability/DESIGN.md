---
name: Audit & Accountability
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#484831'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#79795f'
  outline-variant: '#c9c8aa'
  surface-tint: '#5f6200'
  primary: '#5f6200'
  on-primary: '#ffffff'
  primary-container: '#f7ff00'
  on-primary-container: '#717400'
  inverse-primary: '#c8cf00'
  secondary: '#2559bd'
  on-secondary: '#ffffff'
  secondary-container: '#6c98ff'
  on-secondary-container: '#002f76'
  tertiary: '#ba1a20'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff2f0'
  on-tertiary-container: '#d32f2f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4ec00'
  primary-fixed-dim: '#c8cf00'
  on-primary-fixed: '#1c1d00'
  on-primary-fixed-variant: '#474a00'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b1c5ff'
  on-secondary-fixed: '#001946'
  on-secondary-fixed-variant: '#00419e'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#930010'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  receipt-header:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '800'
    lineHeight: '1.4'
  body-md:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  blame-stamp:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.0'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
  receipt-width: 600px
---

## Brand & Style

The design system is built on the aesthetic of "Digital Bureaucracy"—a mix of utilitarian thermal receipt documentation and high-energy experimentalism. It targets a tech-savvy audience interested in transparency, utilizing a cheeky and theatrical tone to "bill" AI for its errors. 

The style is a hybrid of **Brutalism** and **Tactile/Skeuomorphism**. It leverages the raw, unpolished nature of thermal printing—jagged edges, dot-matrix textures, and monospaced type—while grounding the experience in a high-contrast, modern interface. The UI should evoke the feeling of a physical artifact being generated in real-time, emphasizing accountability through a "stamped" and "certified" visual language.

## Colors

The palette is aggressive and functional, mimicking industrial printing and official warnings:
- **Electric Yellow (Primary):** Used for highlighting critical data points, active states, and "urgent" background fills. It represents the high-energy nature of the AI processing.
- **Civic Blue (Secondary):** Used for grounding elements, headers, and structural lines. This provides the "official" bureaucratic feel.
- **Stamp Red (Tertiary):** Reserved exclusively for "BLAME" alerts, errors, and corrective stamps. 
- **Thermal Black (Neutral):** Not a true black, but a heavy charcoal (#1A1A1A) used for text and dot-matrix patterns to simulate ink.
- **Base Surface:** A slightly off-white, warm grey (#F2F2F0) that mimics the look of low-grade thermal paper.

## Typography

The typography system relies on a strict hierarchy between "Display" (The Narrative) and "Data" (The Receipt).

1.  **Headlines (Space Grotesk):** Provides a modern, clean, and authoritative voice for the "Official" parts of the UI.
2.  **The Receipt Core (Space Mono):** Used for the bulk of the content. It must feel like it was typed by a machine.
3.  **Labels & Metadata (JetBrains Mono):** Highly legible at small sizes, used for technical specs and timestamps.
4.  **The Stamp (Space Grotesk Bold):** Used for the "BLAME" overlays, tilted at 15-degree angles to simulate a physical rubber stamp.

## Layout & Spacing

The layout philosophy follows a **Fixed Center-Column** model. The primary content is housed within a "Receipt Strip" that has a maximum width of 600px on desktop, creating a long, scrollable vertical feed that mimics a physical paper trail.

- **The Strip:** The main container uses a fixed width with 24px internal padding.
- **The Tear-Off:** Top and bottom edges of containers should feature a CSS-generated "sawtooth" or "jagged" mask.
- **Grid:** A standard 8px grid is used for component internal spacing, but the overall layout is centered with significant "dead space" on the sides (filled with a dot-matrix textured background) to keep focus on the bill.

## Elevation & Depth

This design system avoids traditional soft shadows in favor of **Layered Tactility**:

1.  **Paper Stacking:** Depth is shown through slight 1px solid borders or "hard" 4px shadows (0% blur) in Civic Blue to suggest physical layers of paper.
2.  **Dot-Matrix Texture:** Backgrounds use a repeating 2px dot pattern to create a sense of material depth without using gradients.
3.  **The "Stamp" Layer:** Stamps (Red) always sit on the highest Z-index, appearing slightly transparent (multiply blend mode) over the text to simulate ink soaking into paper.
4.  **Borders:** Use solid 1px or 2px lines. Dashed lines (---) are used exclusively for "fold" or "tear" indicators.

## Shapes

The shape language is **Sharp (0)**. There are no rounded corners in the core UI. 

The only "organic" shapes permitted are the jagged edges of the receipt paper and the irregular, slightly "bleeding" edges of the Stamp Red icons. Every button, input field, and container must be perfectly rectangular to maintain the industrial, printed aesthetic.

## Components

- **Buttons:** Rectangular with a 2px solid border. Primary buttons use an Electric Yellow fill. On hover, the button shifts 2px down and right with a hard shadow to simulate a "click."
- **The Receipt Card:** The primary container. Features a jagged top/bottom edge and a subtle vertical "crease" line. 
- **Blame Banners:** High-visibility "Caution" tape styled bars (alternating Yellow/Black stripes) used to frame critical AI failures.
- **Input Fields:** Styled as "Underline Only" to look like a form that needs to be filled out by hand. Use Space Mono for the input text.
- **Animated Stamps:** When a "Blame" action is triggered, a large red "BLAME" stamp should animate into view, scaling down rapidly with a slight "thud" (haptic/visual) and a random rotation between -15 and +15 degrees.
- **Progress Bars:** Represented as a sequence of ASCII-style characters (e.g., `[||||||||----]`) to maintain the dot-matrix printer feel.