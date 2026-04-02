# Design System Document: The Clinical Sanctuary

## 1. Overview & Creative North Star
**Creative North Star: "The Weightless Operatory"**

This design system moves beyond the rigid, anxiety-inducing grids of traditional medical software. It is rooted in **Soft Minimalism**—an approach that prioritizes cognitive ease and operational reassurance. By utilizing generous whitespace, "weightless" layering, and a serene teal-led palette, we transform a high-pressure task (filling last-minute cancellations) into a calm, editorial-grade experience.

The system breaks the "standard dashboard" mold through **intentional asymmetry** and **tonal depth**. Rather than boxing users in with borders, we use subtle shifts in surface color to guide the eye. This creates an interface that feels less like a spreadsheet and more like a high-end physical space—clean, quiet, and profoundly organized.

---

## 2. Colors: Tonal Architecture
We move away from "clinical white" toward a sophisticated palette of warm neutrals and soft, intelligent teals.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define boundaries, designers must use background color shifts. A section should be distinguished by moving from `surface` to `surface-container-low`, creating a natural break that feels organic rather than mechanical.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tiers to define importance:
*   **Base Layer:** `surface` (#fbf9f8) for the overall application backdrop.
*   **Structural Sections:** `surface-container-low` (#f6f3f2) to define sidebars or utility panels.
*   **Active Workspaces:** `surface-container-lowest` (#ffffff) for primary content cards, creating a "lifted" feel against the background.
*   **High-Impact Overlays:** Use `surface-bright` for floating elements that need to capture immediate attention.

### The "Glass & Gradient" Rule
To inject "soul" into the clinical setting, use subtle gradients on primary actions. A linear gradient from `primary` (#006492) to `primary_container` (#2d9cdb) at a 135-degree angle provides a tactile, premium depth. For floating navigation or modal headers, apply **Glassmorphism**: use `surface` at 80% opacity with a `20px` backdrop-blur to maintain a sense of environmental continuity.

---

## 3. Typography: The Editorial Voice
Our typography pairing balances the technical precision of a clinic with the warmth of a luxury brand.

*   **Display & Headlines (Manrope):** A geometric sans-serif that feels modern and authoritative. Use `display-md` or `headline-lg` for high-level metrics (e.g., "3 Open Slots Today") to create a clear, reassuring focal point.
*   **Body & Labels (Plus Jakarta Sans):** Chosen for its high x-height and exceptional legibility at small sizes. This is the "workhorse" font.
    *   **Body-md:** The standard for patient notes and appointment details.
    *   **Label-sm:** Use for metadata and timestamps, set in `on_surface_variant` (#3f4850) to recede visually.

The hierarchy is intentionally steep. By exaggerating the size difference between a `headline-sm` and `body-sm`, we create a clear path for the clinician’s eye to follow during fast-paced operations.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often "dirty" or "heavy." This system utilizes **Ambient Shadows** and **Tonal Layering**.

*   **The Layering Principle:** Avoid `z-index` shadows whenever possible. Instead, place a `surface-container-lowest` card on top of a `surface-container-low` background. This creates "soft lift" through color alone.
*   **Ambient Shadows:** For floating modals or "urgent" cancellation cards, use extra-diffused shadows. 
    *   *Shadow Property:* `0px 12px 32px rgba(51, 51, 51, 0.06)`
    *   The shadow is tinted with the `charcoal` (#333333) base at a very low opacity to mimic natural room lighting.
*   **The "Ghost Border" Fallback:** If a divider is strictly required for accessibility (e.g., inside a dense table), use the `outline_variant` token at **20% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons & Action Orbs
*   **Primary:** Uses the Teal Gradient (`primary` to `primary_container`). `8px` to `12px` border radius (`lg`). Text is `on_primary`.
*   **Secondary:** `surface-container-highest` background with `primary` text. No border.
*   **Tertiary:** Transparent background with `primary` text. Use for low-emphasis actions like "Cancel" or "View History."

### Cancellation Cards (Custom Component)
Instead of a list, use cards with `16px` padding (`4` on the spacing scale).
*   **Style:** `surface-container-lowest` background, `lg` border-radius.
*   **Interaction:** On hover, shift background to `primary_fixed` (#cae6ff) and apply a subtle `2px` vertical lift.
*   **Constraint:** **No dividers.** Use `1.4rem` (`4`) spacing between cards to create separation.

### Input Fields
*   **Base:** `surface-container-low` background. 
*   **State:** When focused, the background shifts to `surface-container-lowest` with a `2px` "Ghost Border" in `primary`.
*   **Typography:** Labels use `label-md` in `on_surface_variant`.

### Chips (Availability & Status)
*   **Filter Chips:** Use `secondary_container` (#bfe1fe) with `on_secondary_container` text. These should feel "pill-shaped" (`full` radius) to contrast with the `lg` radius of the cards.

---

## 6. Do’s and Don'ts

### Do:
*   **Embrace "Breathe" Space:** Use spacing token `8` (2.75rem) between major functional groups. 
*   **Use Asymmetric Padding:** Try using more horizontal padding than vertical padding on cards to create a "wide-screen" editorial feel.
*   **Softened Transitions:** All hover and state changes should use a `300ms ease-out` transition. Sudden snaps break the "Sanctuary" feeling.

### Don't:
*   **Don't use pure black:** Use `charcoal` (#333333) or `on_surface` (#1b1c1c) for text to keep the contrast high but the feel "soft."
*   **Don't use 1px lines:** Do not use lines to separate header from body or sidebar from main content. Use a background shift from `surface` to `surface-container-low`.
*   **Don't overcrowd:** If more than 5 elements are in a list, use `body-sm` and increased vertical whitespace rather than shrinking the margins.

---

## 7. Spacing & Geometry
*   **Border Radius:** Stick strictly to `md` (0.75rem / 12px) for containers and `lg` (1rem / 16px) for larger modal wrappers. This consistency creates the "Reassuring" feel requested.
*   **The Grid:** Use an 8-column grid for the Fill Console, but allow for an "Offset Column" where the primary action (e.g., "Fill This Slot") sits slightly off-center to break the template look.