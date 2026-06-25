---
name: Serene Transition
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
  on-surface-variant: '#414847'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#727877'
  outline-variant: '#c1c8c6'
  surface-tint: '#496360'
  primary: '#47615d'
  on-primary: '#ffffff'
  primary-container: '#5f7a76'
  on-primary-container: '#f5fffc'
  inverse-primary: '#b0ccc8'
  secondary: '#4a5f80'
  on-secondary: '#ffffff'
  secondary-container: '#c3d8fe'
  on-secondary-container: '#495e7f'
  tertiary: '#7d5143'
  on-tertiary: '#ffffff'
  tertiary-container: '#99695a'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe8e3'
  primary-fixed-dim: '#b0ccc8'
  on-primary-fixed: '#04201d'
  on-primary-fixed-variant: '#314c48'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#b2c8ed'
  on-secondary-fixed: '#031c39'
  on-secondary-fixed-variant: '#334867'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#f3b9a8'
  on-tertiary-fixed: '#311208'
  on-tertiary-fixed-variant: '#653c2f'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 26px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is built to provide a sense of psychological safety and professional composure for individuals navigating career transitions. The brand personality is empathetic, steady, and supportive—acting as a quiet "command center" rather than a chaotic dashboard.

The visual style follows a **Calm-Consumer** aesthetic, blending elements of **Minimalism** with **Soft UI**. It prioritizes spaciousness, reduced visual noise, and tactile softness to lower cortisol levels. Every interaction is designed to feel like a "steady next step" rather than an urgent demand. We avoid aggressive "hustle culture" visuals in favor of a balanced, restorative workspace that honors the user's dignity.

## Colors
The palette is rooted in nature-inspired stability. We utilize **Muted Sage** as the primary anchor for its grounding qualities and **Dusty Blue** for a sense of professional reliability. 

- **Primary (Sage):** Used for main actions and positive progress states.
- **Secondary (Muted Blue):** Used for navigation and secondary supportive elements.
- **Accents (Soft Peach & Lavender):** Used sparingly for highlights, gentle reminders, or "human" touches like networking notes. 
- **Backgrounds:** We use **Warm White** (`#FAF9F6`) and **Light Sage-Gray** (`#F1F3F2`) to avoid the harshness of pure white, creating a "paper-like" warmth.
- **Alerts/States:** Red is strictly avoided. For "Urgent" or "Needs Attention" states, we use a deeper earth-tone or a medium-contrast blue to inform without alarming.

## Typography
We utilize **Geist** for its exceptional clarity and modern, technical-yet-humane character. The type system emphasizes readability and "breathing room."

- **Line Height:** Body text uses a generous 1.6x ratio to prevent eye fatigue.
- **Tracking:** Headings use slight negative tracking for a professional "lockup" feel, while labels and body text use increased tracking (1-5%) to aid legibility.
- **Scale:** High-contrast size jumps are avoided to keep the interface feeling level-headed.

## Layout & Spacing
The layout uses a **Fluid Grid** with intentional "buffer zones." Content should never feel cramped against the edges of the viewport.

- **Desktop:** 12-column grid with wide 24px gutters. Content is centered in a 1200px container to prevent excessive eye scanning.
- **Mobile:** Single column with 16px side margins. 
- **Rhythm:** We use an 8px base unit. Component padding is intentionally generous (usually 24px or 32px) to maintain the "Calm-Consumer" profile. Vertical rhythm is prioritized to allow the user to focus on one task at a time.

## Elevation & Depth
Depth in this design system is created through **Tonal Layers** and **Ambient Shadows**. We avoid high-contrast shadows that feel heavy.

- **Surfaces:** Main content sits on "Level 1" surfaces (Warm White) with a very soft, diffused shadow (`blur: 20px, opacity: 0.04, y: 4`).
- **Interactive Depth:** Buttons and clickable cards use a subtle "lift" on hover, increasing the shadow blur rather than the opacity.
- **Borders:** We use soft, low-contrast outlines (`1px` width in a shade just slightly darker than the surface) to define shapes without creating visual barriers.

## Shapes
The shape language is defined by friendliness and approachability. Sharp corners are non-existent.

- **Standard Elements:** Use a 12px (`rounded-md`) to 16px (`rounded-lg`) radius. This applies to cards, input fields, and modal containers.
- **Interactive Elements:** Buttons utilize the 12px radius to feel substantial yet soft. 
- **Status Pills:** Utilize full-round (pill) shapes to differentiate them from actionable containers.

## Components
- **Buttons:** Primary buttons use the Muted Sage background with white text. They should feel "pillowy"—not flat, but not overly 3D. 
- **Cards:** Cards are the primary container. They feature a 1px soft border and the ambient shadow described in the Elevation section.
- **Status Indicators:** Indicators for job application status (e.g., "In Review," "Interviewing") use muted background tints with darker text of the same hue. "Rejected" or "Closed" states should use a neutral gray-blue, never red.
- **Input Fields:** Use a subtle background fill (`#F1F3F2`) rather than a heavy border. On focus, the border transitions to the Primary Sage color with a soft glow.
- **Lists:** List items should have generous vertical padding (16px+) and subtle dividers that don't span the full width of the container, maintaining a sense of "openness."
- **Empty States:** Use the Soft Lavender or Peach for illustrations in empty states to provide a gentle, optimistic nudge.