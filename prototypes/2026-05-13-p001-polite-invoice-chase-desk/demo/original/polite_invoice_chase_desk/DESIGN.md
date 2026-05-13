---
name: Polite Invoice Chase Desk
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
spacing:
  rail-width: 64px
  panel-gap: 1px
  cell-padding-x: 12px
  cell-padding-y: 8px
  container-margin: 16px
---

## Brand & Style

The design system is engineered for the "high-frequency operator"—a professional responsible for managing complex accounts receivable workflows with precision and calm. The aesthetic is a **B2B Fintech Cockpit**: an information-dense, dark-mode environment that prioritizes utility over decoration.

The brand personality is **Disciplined, Vigilant, and Authoritative**. It avoids the consumer-grade "friendliness" of rounded corners and soft shadows in favor of a **Technical Minimalist** style. The emotional response is one of controlled urgency; the UI should feel like a flight deck or a professional trading terminal where every pixel serves a functional purpose. There are no decorative flourishes—only data and the tools to act upon it.

## Colors

The palette is rooted in a deep charcoal and slate foundation to reduce eye strain during long operational shifts. 

- **Foundation:** The primary background uses a deep navy-slate, while surfaces for panels and tables use a slightly lighter charcoal to create structural definition.
- **Typography:** Text is primarily crisp white or high-contrast silver to ensure maximum legibility against the dark backdrop.
- **Functional Accents:** 
    - **Urgent (Calm Red):** Used for overdue invoices and critical blocks. It is desaturated enough to avoid "panic" but bright enough to demand attention.
    - **Warning (Amber):** Used for upcoming deadlines or "approaching" states.
    - **Safe (Muted Emerald):** Used sparingly for "Paid" or "Resolved" states to indicate completion without visual noise.
- **Borders:** Subtle slate borders replace shadows for element separation, maintaining the "sharp" aesthetic.

## Typography

This design system utilizes a dual-font approach to distinguish between narrative content and hard data.

- **Inter:** The workhorse for the interface. It is used for all UI labels, navigation, and body text. Tight letter spacing is applied to headlines to maintain a "dense" feel.
- **JetBrains Mono:** Reserved strictly for numeric values, invoice IDs, timestamps, and currency. This ensures that columns of numbers in data tables align perfectly (tabular figures), allowing for rapid visual scanning of financial discrepancies.
- **Scale:** Sizes are kept intentionally small (12px–14px for body) to maximize the amount of information visible on a single screen without requiring excessive scrolling.

## Layout & Spacing

The layout follows an **Operator-Dense Grid** philosophy. It is built on a side-by-side multi-panel architecture, allowing users to view a list of debtors and the specific invoice history simultaneously.

- **Action Rail:** A fixed 64px vertical rail on the far left contains primary navigation icons.
- **Side-by-Side Panels:** Content is housed in distinct rectangular panels. Instead of wide gutters, panels are separated by 1px "dividing lines" to maximize screen real estate.
- **Density:** Padding is minimized. Table rows are compact (32px–40px height) to ensure at least 20+ records are visible above the fold.
- **Responsiveness:** On desktop, the layout expands to three columns (Navigation | List | Detail). On smaller screens, the detail panel overlays the list, but the action rail remains constant.

## Elevation & Depth

This system rejects the use of shadows and blurs. Hierarchy is established through **Tonal Layering** and **Sharp Outlines**.

- **Level 0 (Background):** Deepest slate. Used for the application "shell."
- **Level 1 (Panels):** Slightly lighter charcoal. These are the primary workspaces.
- **Level 2 (Active States/Modals):** Defined by a 1px solid border in a medium-slate or the primary accent color.
- **Interactive Depth:** When an element is hovered, its background color shifts slightly lighter. There is no "lift" effect; the change is strictly color-based to maintain the flat, cockpit feel.

## Shapes

The shape language is **strictly geometric and sharp-edged**. 

- **Zero Radius:** All buttons, panels, input fields, and status badges use a 0px corner radius. This reinforces the "engineered" and disciplined nature of the fintech environment.
- **Status Badges:** These are rectangular blocks of color with high-contrast text. They should feel like physical "tally lights" on a piece of hardware.
- **Inputs:** Square-bottomed text fields with a high-contrast bottom border or full perimeter stroke.

## Components

- **Compact Data Tables:** The core of the system. Borders are horizontal only. Header cells use `label-caps` typography. Cells containing currency must use `data-mono`.
- **Action Rail:** A vertical high-contrast bar. Icons are stroke-based (not filled) to maintain a lightweight visual profile.
- **Status Badges:** Rectangular tags with no rounding. `Urgent` uses a solid Red background with White text; `Pending` uses an Amber outline with Amber text.
- **Side-by-Side Panels:** Large containers that divide the screen into functional zones. They use a 1px border (#334155) to separate from one another.
- **Primary Buttons:** Solid White background with Black text. No gradients. The hover state is a transition to a very light gray.
- **Ghost Buttons:** 1px border in #FFFFFF or accent color, transparent background.
- **Activity Feed:** A vertical list of "events" (e.g., "Email Sent") using monospaced timestamps and small icon indicators.