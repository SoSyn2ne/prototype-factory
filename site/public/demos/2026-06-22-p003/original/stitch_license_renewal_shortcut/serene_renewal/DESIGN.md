---
name: Serene Renewal
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#4d4540'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#7e756f'
  outline-variant: '#cfc4bd'
  surface-tint: '#635d5a'
  primary: '#181512'
  on-primary: '#ffffff'
  primary-container: '#2d2926'
  on-primary-container: '#96908b'
  inverse-primary: '#cdc5c0'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#141615'
  on-tertiary: '#ffffff'
  tertiary-container: '#282a2a'
  on-tertiary-container: '#909190'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9e1dc'
  primary-fixed-dim: '#cdc5c0'
  on-primary-fixed: '#1e1b18'
  on-primary-fixed-variant: '#4b4642'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c7c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 640px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
---

## Brand & Style
The design system is centered on the "Calm-Consumer" profile, specifically tailored for barbers navigating the bureaucratic friction of license renewals. The brand personality is supportive and efficient, acting as a quiet guide through complex regulatory requirements. 

The aesthetic leans into **Minimalism** with a **Tactile** edge. It rejects the cold, clinical nature of government portals in favor of a warm, human-centric environment. By using soft textures, generous whitespace, and a clear step-by-step card metaphor, the UI reduces the "fee anxiety" often associated with compliance. The emotional response is one of "Asset Defense"—the UI should feel like a protective barrier that ensures the user’s professional standing is never at risk.

## Colors
The palette is designed to de-escalate stress. Surfaces utilize a base of `neutral` (Cream/Soft Beige) to create a paper-like, approachable quality. 

- **Primary (Deep Charcoal):** Used for high-readability text and primary actions. It provides a grounded, professional weight.
- **Secondary (Gentle Amber):** Reserved strictly for "Asset Defense" moments—upcoming deadlines, pending fees, or warnings. It provides visibility without the alarmist nature of red.
- **Tertiary (Warm Grey/Stone):** Used for secondary containers and subtle divisions.
- **Background:** A warm `#FAF9F6` (Linen) to keep the screen soft on the eyes during long form-filling sessions.

## Typography
The typography system prioritizes clarity and legibility. **Manrope** is used for all structural content and headlines due to its modern, balanced proportions that feel both professional and approachable. 

For functional data points and form labels, **Hanken Grotesk** provides a sharp, contemporary contrast that aids in scanning complex information. Line heights are kept generous (1.5x for body) to prevent the "wall of text" effect often found in legal documents.

## Layout & Spacing
This design system utilizes a **Fixed Grid** centered layout for desktop to maintain focus, mimicking the width of a physical document. For mobile, it transitions to a fluid single-column layout.

The spacing rhythm is based on an 8px base unit. To maintain a "Shortcut" feel, vertical spacing between cards is kept tight (16px), while internal card padding is generous (24px to 32px) to ensure the content feels breathable and organized.

## Elevation & Depth
Elevation is communicated through **Tonal Layers** combined with **Ambient Shadows**. 

1. **The Canvas:** The background layer is the warmest neutral.
2. **The Cards:** White or slightly off-white cards sit on the canvas with a very soft, diffused shadow (Blur: 20px, Opacity: 4%, Color: Charcoal) to suggest tangibility.
3. **Interactive Elements:** Buttons and active input fields use a subtle inner-shadow or a slightly darker border to indicate they are "pressable."

There are no harsh lines; depth is achieved through color value shifts rather than high-contrast borders.

## Shapes
The shape language is deliberately soft to counteract the "sharp" nature of barbering tools and the rigidity of government forms. A `rounded-lg` (16px) or `rounded-xl` (24px) standard is applied to all main containers and cards. This large radius reinforces the "supportive" personality of the design system, making the software feel less like a tool and more like an assistant.

## Components

### Step-by-Step Cards
The primary container for all workflows. Each card represents one logical step (e.g., "Upload ID," "Confirm Fee"). Cards should include a subtle progress indicator (e.g., "1 of 4") in the top right using `label-sm`.

### Buttons
- **Primary:** Deep Charcoal background with Cream text. Rounded-pill shape.
- **Secondary:** Transparent with a thin Charcoal border.
- **Urgent (Defense):** Gentle Amber background for "Pay Now" or "Renew Before Expiry" actions.

### Input Fields
Inputs use a soft beige background with no border in their default state, gaining a 1px Charcoal border only when focused. This reduces visual noise when a form is first viewed.

### Asset Defense Chips
Small, rounded chips used to highlight deadlines or fees. Example: "Expires in 3 days" (Amber background, Dark Brown text).

### Compact Document States
When a document (like a license scan) is uploaded, it should shrink into a "compact state"—a small horizontal bar with a thumbnail, filename, and a "Success" checkmark, rather than taking up significant vertical space.