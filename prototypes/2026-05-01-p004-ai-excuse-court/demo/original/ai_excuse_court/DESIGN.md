---
name: AI Excuse Court
colors:
  surface: '#141316'
  surface-dim: '#141316'
  surface-bright: '#3b383c'
  surface-container-lowest: '#0f0e11'
  surface-container-low: '#1d1b1f'
  surface-container: '#211f23'
  surface-container-high: '#2b292d'
  surface-container-highest: '#363438'
  on-surface: '#e6e1e6'
  on-surface-variant: '#cbc4d0'
  inverse-surface: '#e6e1e6'
  inverse-on-surface: '#322f34'
  outline: '#948e99'
  outline-variant: '#49454e'
  surface-tint: '#d2bcfa'
  primary: '#d2bcfa'
  on-primary: '#38265a'
  primary-container: '#2d1b4e'
  on-primary-container: '#9783bd'
  inverse-primary: '#68558b'
  secondary: '#cfc6ae'
  on-secondary: '#35301f'
  secondary-container: '#4f4936'
  on-secondary-container: '#c1b8a1'
  tertiary: '#ffb59c'
  on-tertiary: '#5c1900'
  tertiary-container: '#4a1200'
  on-tertiary-container: '#f55817'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d2bcfa'
  on-primary-fixed: '#231043'
  on-primary-fixed-variant: '#4f3d72'
  secondary-fixed: '#ece2c9'
  secondary-fixed-dim: '#cfc6ae'
  on-secondary-fixed: '#201b0c'
  on-secondary-fixed-variant: '#4c4634'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832700'
  background: '#141316'
  on-background: '#e6e1e6'
  surface-variant: '#363438'
typography:
  court-heading-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  court-heading-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  evidence-body:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  docket-label:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  stamp-text:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '800'
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
  gutter: 24px
  margin: 40px
  docket-padding: 32px
---

## Brand & Style
The design system is built on a **Neo-Skeuomorphic Courtroom** aesthetic, blending the gravity of a legal proceeding with the playful gamification of classroom management. It targets educators who need a cathartic yet functional way to process "AI-generated" student excuses. 

The style utilizes **High-Contrast Expressionism**. It leans into dramatic metaphors: interactive elements feel like physical dockets, buttons mimic heavy gavels, and status updates appear as ink-bleed stamps. While the main interface is immersive and moody, the "Paper Trail" mode transitions into a **Minimalist Brutalist** style, mimicking official government documents with stark grids and typewriter-adjacent clarity to provide a sense of professional closure.

## Colors
The palette is divided between the "Courtroom Depth" and the "Evidence Desk." 

- **Primary (Judge’s Robe):** A deep, regal purple used for backgrounds and high-level containers to establish authority.
- **Secondary (Legal Folder):** A warm, textured manila used for active cards and "paper" elements that hold student data.
- **Objection! Orange:** A high-vibrancy safety orange for critical actions, errors, and "Guilty" verdicts.
- **Evidence Blue:** A saturated blue used for links, information callouts, and "Admissible" highlights.
- **Verdict Gold:** Reserved for final rulings, high-tier rewards, and celebratory UI flourishes.
- **Report Mode:** In the final export view, the UI switches to a "Paper Trail" theme using `neutral_paper` backgrounds with ink-black text.

## Typography
This design system employs a hierarchical tension between two worlds:
1. **The Courtroom (Serif):** *Newsreader* is used for all narrative and high-authority headings. It evokes the feeling of a heavy law book or a printed summons.
2. **The Evidence (Sans):** *Lexend* provides maximum readability for student excuses and body text, ensuring teachers can scan content quickly.
3. **The Data (Mono/Technical):** *Space Grotesk* is used for metadata, labels (e.g., "CASE NO. 402"), and UI controls to provide a modern, technical contrast to the classical serif.

## Layout & Spacing
The layout uses a **Fixed Grid** system to mimic the organized nature of a legal file. 
- **The Bench:** A wide central column (8 units) for the primary "Evidence" being reviewed.
- **The Sidebar:** A narrower "Docket" column (4 units) for case history and quick actions.
- **Rhythm:** Elements are spaced using an 8px base unit. Card internal padding is generous (32px) to ensure "Evidence" doesn't feel cramped, allowing the teacher to focus on the text without distraction.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layering** and **Tactile Shadows**:
- **Base Layer:** The "Judge's Robe" purple acts as the foundation.
- **Evidence Layer:** Cards use a "Legal Folder" manila with a subtle, 5% opacity black shadow, offset 4px vertically to suggest paper sitting on a wooden desk.
- **Stamp Layer:** Status indicators (Guilty, Admissible) are applied with 0 elevation but use a "multiply" blend mode to look like ink absorbed into the paper.
- **Modal Overlays:** Use a heavy backdrop blur (12px) to focus all attention on the "Verdict" being delivered.

## Shapes
The shape language is primarily **Soft (0.25rem)** to mimic the clipped corners of traditional legal folders and index cards. 
- **Buttons:** Use slightly more rounded corners (rounded-lg) to make them feel "pressable" like a physical stamp handle.
- **The Verdict Stamp:** A thick 4px border with slightly irregular "ink bleed" corners to reinforce the analog metaphor.

## Components
- **The Docket Card:** The primary container for student excuses. Features a "paper" texture, a Case Number in the top-right (Space Grotesk), and a decorative gavel-strike hover effect.
- **Status Stamps:** Large, angled, semi-transparent text overlays. Colors: Red for 'GUILTY', Blue for 'ADMISSIBLE', Gold for 'LEGITIMATE'.
- **The Objection Button:** A high-contrast orange button with a thick bottom border that "depresses" 2px when clicked.
- **Gavel Input:** A slider component where the handle is a gavel icon, used to determine the "severity" of the AI usage.
- **Paper Trail Export:** A specific component state that strips all color and shadow, switching to a white background with black borders and Newsreader body text for a professional, printable summary.
- **Evidence Tags:** Small chips using Evidence Blue, categorized by "AI Signature," "Logical Leap," or "Style Inconsistency."