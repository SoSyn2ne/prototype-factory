---
name: Family Finance Editorial
colors:
  surface: '#fbf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fbf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#eae8e2'
  surface-container-highest: '#e4e2dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#444748'
  inverse-surface: '#30312d'
  inverse-on-surface: '#f3f1eb'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#171818'
  on-primary: '#ffffff'
  primary-container: '#2c2c2c'
  on-primary-container: '#949393'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#211500'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b2900'
  on-tertiary-container: '#b18e49'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f3'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dc'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-data:
    fontFamily: Source Serif 4
    fontSize: 14px
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
  unit: 8px
  margin-page: 40px
  margin-mobile: 20px
  gutter: 24px
  max-width: 1100px
---

## Brand & Style

This design system is built on the philosophy of "The Considered Choice." It addresses the high-stakes, often anxiety-driven world of educational spending with a visual language that is grounding, intellectual, and empathetic. 

The aesthetic identity is rooted in **Editorial Minimalism** with **Tactile accents**. It draws inspiration from high-end financial journalism and the structured clarity of academic journals. The interface should feel like a physical, premium paper ledger—stable and authoritative—rather than a fleeting digital dashboard. 

**Core Tenets:**
- **Refined Authority:** Uses generous whitespace and sophisticated typography to lower the "anxiety noise" of financial decisions.
- **Academic Context:** Subtle references to school stationery (rule lines, grid backgrounds) provide a familiar context for education-focused content.
- **Deliberate Contrast:** High-contrast comparisons are used to highlight the difference between "Fear Spending" and "Investment Spending."

## Colors

The palette is designed to evoke the tactile quality of a well-bound book. 

- **The Canvas (Cream/Paper):** The primary background (`#F9F7F2`) avoids the harshness of pure white, reducing eye strain and creating a premium, archival feel.
- **The Ink (Charcoal):** Deep charcoal (`#2C2C2C`) is used for primary text and structural borders, providing maximum legibility and a sense of permanence.
- **The Highlights (Semantic Accents):**
    - **Premium Gold:** Reserved for "Keep" decisions, long-term investments, and high-value educational paths.
    - **Muted Red:** Used sparingly for "High Pressure" costs or unsustainable spending. It is intentionally desaturated to remain professional rather than alarming.
    - **Sage Green:** Used for data-backed evidence and logical "Cutline" decisions, promoting a sense of calm and clarity.

## Typography

The typographic system creates a dialogue between tradition and modernity. 

**Source Serif 4** (Headlines) provides the authoritative, literary voice required for high-end financial advice. It should be used for titles, section headers, and key financial figures to give them weight and importance.

**Plus Jakarta Sans** (Body/UI) offers a clean, contemporary contrast. Its high x-height and open apertures ensure maximum readability for long-form analysis and dense data tables.

- **Emphasis:** Use *Italic Serif* for secondary insights or data labels to mimic handwritten notes in the margin of a ledger.
- **Hierarchy:** Maintain large vertical gaps between serif headlines and sans-serif body text to ensure a clear mental "break" between different types of information.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centered to mimic the proportions of a printed page. 

- **The Column System:** A 12-column grid is used for desktop. For analysis reports, a "Side-car" layout is preferred, where a 4-column margin is used for metadata/labels and 8 columns are for the primary content.
- **Vertical Rhythm:** A strict 8px baseline grid is used. Elements should feel "weighted" toward the bottom of the page, much like a classic manuscript.
- **Rule Lines:** Use horizontal 1px lines (Charcoal at 10% opacity) to separate sections, reminiscent of lined school notebooks.
- **Mobile Adaptation:** On mobile, the grid collapses to 1 column with 20px side margins. The serif display type should scale down aggressively to ensure no more than 2-3 words per line.

## Elevation & Depth

This system avoids heavy shadows and synthetic blurs. Instead, depth is communicated through **Tonal Layering** and **Line Weight**.

- **Surface Levels:**
    - **Level 0 (Base):** The Cream (`#F9F7F2`) paper background.
    - **Level 1 (Panels):** Pure White (`#FFFFFF`) with a subtle 1px border in Charcoal at 15% opacity. These act as "inserts" on the paper.
- **Hairlines:** Use thin (1px or 0.5px) solid borders to define regions. 
- **The "Note" Effect:** Instead of a shadow, a "stacked paper" effect can be achieved by adding a secondary 1px border 4px below and to the right of a primary container.

## Shapes

The shape language is **Soft** but disciplined. 

- **Primary Radius:** A consistent 0.25rem (4px) radius is applied to cards and containers. This is just enough to soften the professional tone without making the UI feel "bubbly" or informal.
- **Interactive Elements:** Buttons and input fields use the same 4px radius. 
- **Exceptions:** Comparison tables and structural dividers remain perfectly sharp (0px) to maintain the "grid paper" aesthetic.

## Components

### Buttons
Primary buttons are solid Charcoal with Cream text. They should feel heavy and decisive. Secondary buttons use a Charcoal 1px border with a transparent background. Action labels use `label-caps` for a professional, "stamped" appearance.

### Comparison Tables (The "Cutline")
The core of the product. Tables use high-contrast rows. The "Fear Spend" row should have a subtle Muted Red left-border accent, while the "Value Spend" row uses a Sage Green left-border accent. Header cells should use a subtle 5% charcoal fill and bold serif text.

### Paper Panels (Cards)
Cards should not have shadows. Use a 1px Charcoal border (20% opacity). To indicate "Education Note" style, add a subtle 8px-high blue or red vertical line on the far left edge of the card, mimicking the margin line of a notebook.

### Input Fields
Inputs are minimal: a 1px bottom border only, changing to 2px Charcoal on focus. This mimics writing on a rule line. Placeholders should be in `mono-data` (italic serif) to look like suggested text.

### Chips & Tags
Chips are rectangular with 2px rounded corners. Use Sage or Gold backgrounds with 10% opacity and full-strength text color to categorize spending types without overwhelming the visual hierarchy.

### The "Memo" Component
A specialized layout for high-level summaries. It uses a different background color (Soft Gray) and a "Copy" icon, formatted like a formal memo with "TO:", "FROM:", and "RE:" fields in `label-caps`.