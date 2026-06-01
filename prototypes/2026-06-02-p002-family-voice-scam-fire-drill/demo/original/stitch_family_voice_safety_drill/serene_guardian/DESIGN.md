---
name: Serene Guardian
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#41474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#316289'
  primary: '#074469'
  on-primary: '#ffffff'
  primary-container: '#2a5c82'
  on-primary-container: '#a5d4ff'
  inverse-primary: '#9ccbf7'
  secondary: '#456649'
  on-secondary: '#ffffff'
  secondary-container: '#c3e9c4'
  on-secondary-container: '#496a4d'
  tertiary: '#663300'
  on-tertiary: '#ffffff'
  tertiary-container: '#86480d'
  on-tertiary-container: '#ffc295'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#9ccbf7'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#124a6f'
  secondary-fixed: '#c6ecc7'
  secondary-fixed-dim: '#abd0ac'
  on-secondary-fixed: '#01210a'
  on-secondary-fixed-variant: '#2d4e33'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Public Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Public Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  max-width: 1200px
---

## Brand & Style

The design system is built on a foundation of **reassurance, clarity, and empowerment**. Designed for a family safety context, it avoids the alarmist visual tropes of traditional cybersecurity (dark themes, neon greens, aggressive reds). Instead, it adopts a **Corporate Modern** style infused with **Soft Minimalism**. 

The UI should feel like a digital safety manual or a well-organized home toolkit. The emotional response is one of "I am prepared" rather than "I am under attack." Every interaction prioritizes user consent and gentle guidance, ensuring that older adults and non-technical users feel capable and protected. Use ample white space and soft transitions to maintain a low-stress environment during "fire drills."

## Colors

The palette is anchored in nature-inspired tones to promote psychological calm.

- **Primary (Deep Sea Blue):** Used for primary actions, navigation, and core branding. It conveys stability and institutional trust.
- **Secondary (Sage Green):** Represents safety, "drill complete" states, and positive reinforcement.
- **Tertiary (Gentle Amber):** Used exclusively for warnings and "fraud detected" alerts. This soft orange replaces aggressive red to signal caution without inducing panic.
- **Neutral (Warm Slate & Linen):** Backgrounds use a slightly warm off-white (`#F8F9FA`) to reduce eye strain compared to pure white. Text is rendered in a dark slate rather than pure black to maintain a softer aesthetic.

## Typography

This design system utilizes **Public Sans** for its exceptional legibility and institutional neutrality. The type scale is intentionally generous to accommodate older users and ensure clarity during potentially stressful "scam drill" scenarios.

- **Headlines:** Set with tight letter spacing and heavy weights to anchor the page.
- **Body Text:** Increased line height (1.6x) and a minimum size of 18px for standard reading to ensure maximum accessibility.
- **Labels:** Used for micro-copy and metadata, always set in semi-bold to distinguish them from body content.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to maintain a sense of order and predictability. 

- **Desktop:** A 12-column grid with a maximum content width of 1200px. Center alignment is preferred for educational content to keep the eye focused.
- **Mobile:** A single-column flow with generous 20px side margins to prevent accidental taps near the screen edges.
- **Rhythm:** An 8px linear scale governs all spacing. Vertical rhythm is prioritized, with large gaps (48px+) between distinct sections to prevent cognitive overload.

## Elevation & Depth

To maintain a "tactile yet modern" feel, this design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Soft Ambient Shadows**.

- **Surface Levels:** The base background is the neutral linen. Cards and interactive modules sit on a pure white surface.
- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `box-shadow: 0 4px 20px rgba(42, 92, 130, 0.08)`). The shadow color should be slightly tinted with the primary blue to keep the palette cohesive.
- **Focus States:** High-contrast 3px outlines in the primary color are mandatory for accessibility, ensuring that keyboard and screen-reader users can easily navigate the drills.

## Shapes

The shape language is **Rounded**, utilizing a 0.5rem (8px) base radius. This removes the "sharpness" associated with technical software, making the app feel approachable and friendly. 

- **Buttons & Inputs:** Use the standard 8px radius.
- **Large Cards & Containers:** Use `rounded-xl` (1.5rem/24px) to create a soft, framing effect for content modules.
- **Icons:** Should feature rounded terminals and thick strokes (2px minimum) to match the visual weight of the typography.

## Components

### Buttons
Buttons are large (minimum 56px height) to ensure they are easy targets for all users. Primary buttons use the Deep Sea Blue with white text. Secondary buttons use a Sage Green outline. Avoid "ghost" buttons for primary actions to ensure high visibility.

### Progress Indicators
Drills should use a "Step-by-Step" tracker at the top of the screen. Use a soft progress bar with rounded ends. Completed steps are marked with a Sage Green checkmark.

### Checklists
Checklists for "Home Safety Audits" feature large tap targets. When a user checks an item, the row background transitions to a subtle Sage Green tint to provide immediate, calming feedback.

### Input Fields
Fields have thick 2px borders. The label is always visible (never use placeholder-only labels). When an error occurs, the border changes to Gentle Amber, accompanied by a helpful "How to fix this" tip rather than just an error message.

### Warning Cards
When a scam is identified, use a "Gentle Alert" card. It features a thick Amber left-border, an icon of a shield, and clear "Next Steps" buttons. The language remains instructional, not fearful.