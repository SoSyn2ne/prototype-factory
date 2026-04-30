---
name: Calm Guardian
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#434843'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747872'
  outline-variant: '#c3c8c1'
  surface-tint: '#526255'
  primary: '#455548'
  on-primary: '#ffffff'
  primary-container: '#5d6d5f'
  on-primary-container: '#ddeedd'
  inverse-primary: '#bacbba'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e8e2d9'
  on-secondary-container: '#67645d'
  tertiary: '#7b4131'
  on-tertiary: '#ffffff'
  tertiary-container: '#985847'
  on-tertiary-container: '#ffe4dd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e7d6'
  primary-fixed-dim: '#bacbba'
  on-primary-fixed: '#101f14'
  on-primary-fixed-variant: '#3b4a3e'
  secondary-fixed: '#e8e2d9'
  secondary-fixed-dim: '#cbc6bd'
  on-secondary-fixed: '#1d1b16'
  on-secondary-fixed-variant: '#494640'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a1'
  on-tertiary-fixed: '#380d03'
  on-tertiary-fixed-variant: '#6f3728'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  h1:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  h3:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  button:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is rooted in the "Calm-Consumer" aesthetic, prioritizing emotional regulation and clarity for parents navigating daycare decisions. The brand personality is protective, organized, and quietly authoritative—acting as a steady hand rather than a source of alarm. 

The style utilizes a **Modern Minimalist** foundation with **Tactile** influences. It avoids the clinical coldness of traditional fintech, instead leaning into a "warm-tech" approach. High-quality whitespace is the primary functional element, used to lower the cognitive load of complex data. The UI should feel like a physical linen ledger: structured, high-quality, and enduring.

## Colors

The palette is composed of organic, desaturated tones that evoke nature and stability. 

- **Primary (Sage):** Used for primary actions and "Safe" status indicators. It is grounded and calming.
- **Secondary (Linen):** The foundation of the UI. Used for surface backgrounds and containers to avoid the harshness of pure white.
- **Tertiary (Terracotta):** Reserved for "Risk" flags and attention-required items. It provides visibility without triggering a "panic" response.
- **Neutrals:** Warm grays and creams create a soft-contrast environment that reduces eye strain and conveys a sense of premium care.

## Typography

This design system pairs **Newsreader** for headings with **Manrope** for UI and body text. 

Newsreader provides a literary, established feel that builds trust. It should be used for page titles and section headers to give the interface a "journal" or "ledger" quality. Manrope is used for all functional elements due to its modern, balanced proportions and high legibility at small sizes. 

Use sentence case for most headings to maintain a friendly, conversational tone. All-caps should be reserved strictly for the `label-caps` style used in metadata or small tags.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop (max-width 1200px) and a fluid 4-column grid for mobile. 

Generous padding is the defining characteristic of this layout. Components are never crowded; "breathe" is a functional requirement. Use `lg` (48px) spacing between major sections and `md` (24px) for internal card padding. This creates an organized, ledger-like structure that makes information easy to scan and digest.

## Elevation & Depth

Depth is conveyed through **Ambient Shadows** and **Tonal Layering**. 

The background should typically be the linen neutral. Primary cards use a very soft, diffused shadow (0px 4px 20px rgba(93, 109, 95, 0.08)) to appear slightly lifted. This "floating" effect highlights key information without using heavy borders. 

Avoid high-contrast black shadows. Shadows should always be tinted with the primary sage or warm gray to maintain the soft, "calm-consumer" aesthetic.

## Shapes

The shape language is defined by **Rounded** corners, specifically 0.5rem (8px) for standard components and 1.5rem (24px) for large containers and cards. 

These curves soften the interface, making the "ledger" feel approachable rather than rigid. Buttons and input fields should follow the `rounded-lg` (16px) convention to feel tactile and "friendly" to the touch.

## Components

- **Cards:** The central component of the design system. Cards must have generous internal padding (24px+) and use the "Safe" (Sage) or "Risk" (Terracotta) colors as subtle top-border accents rather than full-fill backgrounds.
- **Buttons:** Primary buttons use a solid Sage fill with white text. Secondary buttons use a linen-gray ghost style with a subtle 1px border. The "Risk" action buttons should only appear in high-consequence scenarios and use the Terracotta color.
- **Status Chips:** Small, pill-shaped indicators. Use desaturated Sage for "Verified," desaturated Gold for "Pending," and desaturated Terracotta for "Alert."
- **Input Fields:** Large, 56px height fields with a warm-gray border. The focus state should use a soft 2px Sage glow.
- **Next-Step Guidance:** A specialized "Instructional Card" component using a light-sage background and a "Next Step" label-caps header to guide parents through the ledger process.
- **Trust Indicators:** Subtle "Last Verified" timestamps should accompany all daycare data points to reinforce the "Trust Ledger" concept.