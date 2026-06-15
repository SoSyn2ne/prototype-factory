---
name: Care & Clarity
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
  on-surface-variant: '#434842'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737971'
  outline-variant: '#c3c8bf'
  surface-tint: '#4a654d'
  primary: '#47614a'
  on-primary: '#ffffff'
  primary-container: '#5f7a61'
  on-primary-container: '#efffec'
  inverse-primary: '#b1ceb1'
  secondary: '#885213'
  on-secondary: '#ffffff'
  secondary-container: '#fdb56e'
  on-secondary-container: '#774403'
  tertiary: '#983e29'
  on-tertiary: '#ffffff'
  tertiary-container: '#b8563f'
  on-tertiary-container: '#fff9f8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cceacc'
  primary-fixed-dim: '#b1ceb1'
  on-primary-fixed: '#07200e'
  on-primary-fixed-variant: '#334d36'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#ffb872'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#6a3b00'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a3'
  on-tertiary-fixed: '#3d0700'
  on-tertiary-fixed-variant: '#7e2b18'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  section-gap: 64px
  stack-gap: 16px
---

## Brand & Style

This design system is built for the **Med Fee Pushback File**, a tool designed to support family members and caregivers navigating the complex, often stressful landscape of medical billing. The brand personality is **Calm Consumer**—an intentional blend of healthcare reliability and approachable consumer warmth. 

The aesthetic leverages **Modern Minimalism** with a **Tactile** touch. It avoids the cold, clinical feel of traditional insurance portals in favor of a "sanctuary" interface that feels grounded and supportive. Every interaction is designed to reduce cognitive load, using soft transitions and generous whitespace to prevent the user from feeling overwhelmed by financial data.

**Key Principles:**
- **Clarity over Density:** Information is paced carefully to avoid "data shock."
- **Empathetic Urgency:** Alerts are presented as helpful guidance rather than alarming errors.
- **Dignity in Design:** High-quality typography and soft surfaces respect the gravity of elderly care contexts.

## Colors

The palette is rooted in **Warm Neutrals** to create a domestic, non-institutional atmosphere. 

- **Primary (Sage):** Used for primary actions, success states, and calming navigational elements.
- **Secondary (Soft Amber):** Reserved for cost highlights and "attention required" items that aren't yet critical.
- **Tertiary (Terracotta):** Used sparingly for high-cost alerts, billing discrepancies, or "pushback" triggers.
- **Neutral (Cream/Beige):** The foundation of the UI. Backgrounds use a soft cream (`#F9F7F2`) to reduce eye strain compared to pure white.
- **Text:** Deep charcoal with a hint of warm brown for improved readability and softened contrast.

## Typography

The typography strategy focuses on **senior accessibility** and **editorial authority**. 

We pair **Newsreader** for headlines to provide a trustworthy, literary feel that evokes a sense of "the record" or "the file." For all functional text, we use **Public Sans**, an institutional typeface designed for clarity and accessibility.

**Implementation Rules:**
- **Body Text:** Never drop below 16px to ensure readability for elderly users or tired caregivers.
- **Line Height:** Generous leading (1.5x minimum) is applied to all body levels to prevent lines from blurring together.
- **Hierarchy:** Use Newsreader for section titles and "Memo" headers. Use Public Sans for data entry, labels, and instructional microcopy.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop (max-width 1200px) to maintain a focused, document-like reading experience. 

- **The Memo Structure:** Content is organized into "files" or "containers" that mimic a physical folder. 
- **Vertical Rhythm:** A strict 8px baseline grid is used. Sections are separated by large gaps (`64px`) to clearly distinguish between different medical incidents or billing cycles.
- **Mobile Adaptivity:** On mobile, margins shrink to 20px, and multi-column "Caregiver Cards" collapse into a single-stack vertical flow. Interactive elements like buttons increase in height to 56px to accommodate easier touch targets.

## Elevation & Depth

To maintain a "Calm Consumer" feel, the design system avoids heavy, dark shadows. Depth is communicated through **Tonal Layers** and **Soft Plinth** effects.

- **The Base:** The lowest layer is the Cream surface (`#F9F7F2`).
- **The File Layer:** Primary content areas sit on a white or slightly lighter beige surface with a very soft, diffused shadow (15% opacity of the Primary color) to create a "paper on desk" effect.
- **The Caregiver Card:** These cards use a subtle 1px border in a slightly darker neutral shade rather than a shadow, ensuring high contrast for accessibility without adding visual "fuzziness."
- **Modals:** Use a backdrop blur (8px) with a semi-transparent warm overlay to keep the context of the underlying "file" visible.

## Shapes

The design system uses **Soft (0.25rem)** roundedness. 

While the aesthetic is friendly, it must remain "official." Sharp corners feel too aggressive, but fully rounded/pill shapes feel too casual for financial/medical disputes. A subtle radius on buttons and cards strikes a balance between professional precision and approachable warmth.

- **Buttons:** 4px radius.
- **Cards/Containers:** 8px radius (rounded-lg).
- **Input Fields:** 4px radius.

## Components

### Caregiver Cards
The core unit of the UI. These are high-contrast containers that summarize a medical bill or a patient's status. They feature a Sage header (Primary) and a clear, bold "Status Label" in the top right corner.

### Progress Steps
Used for the "Pushback" process (e.g., Filing, Under Review, Disputed, Resolved). Steps are connected by thick, soft-colored lines. Completed steps use the Sage color; active steps use Soft Amber.

### Memo-Style Containers
For long-form data or insurance descriptions, use a container with a faint vertical line on the left (accent border) to mimic a legal memo or medical chart entry.

### Buttons
- **Primary:** Solid Sage with white text. High prominence for "Submit Dispute" or "Save Record."
- **Secondary:** Outlined Sage for "Add Note" or "Download PDF."
- **Alert:** Solid Terracotta for "Flag Irregularity."

### Input Fields
Large, accessible fields with persistent labels (never use placeholder-only labels). The focus state uses a 2px Sage border to provide an unmistakable visual cue of where the user is typing.

### Data-Rich Intake Sections
Organized in a 2-column key-value pair format. The "Key" (e.g., *Service Date*) is in `label-sm`, and the "Value" (e.g., *Oct 12, 2023*) is in `body-lg` for maximum legibility.