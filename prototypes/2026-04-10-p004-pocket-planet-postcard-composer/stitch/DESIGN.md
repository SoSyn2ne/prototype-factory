```markdown
# Design System Document: The Tactile Dreamscape

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Toybox"**

This design system rejects the clinical coldness of modern SaaS in favor of a "Digital Toybox" aesthetic. We are building a world that feels physical, squishy, and infinitely tactile—as if the user is reaching into a box of polished marbles and frosted acrylic shapes.

To break the "template" look, we utilize **intentional asymmetry**, **exaggerated corner radii**, and **chromatic depth**. We move away from the rigid grid by allowing cards to overlap slightly and using "Soft-Glow Depth" to make elements appear to float in a luminous, hazy atmosphere. This is not just a composer; it is a whimsical laboratory for memories.

---

## 2. Colors: Tonal Play & Vibration

Our palette is anchored in a high-energy `primary` (#b41567) and a dreamy, electric `secondary` (#6833ea). These are balanced by a warm, paper-like `background` (#fff8f8) to ensure the interface remains charming rather than overwhelming.

### The "No-Line" Rule
**Borders are forbidden.** Traditional 1px solid lines create "cages" for content. Instead, boundaries must be defined solely through background color shifts.
*   *Implementation:* Place a `surface_container_lowest` card atop a `surface_container_low` section. The contrast between #ffffff and #fff0f3 provides all the definition the eye needs.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested physical trays. 
*   **Base Layer:** `surface` (#fff8f8)
*   **Feature Areas:** `surface_container` (#ffe8ed)
*   **Interactive Cards:** `surface_container_lowest` (#ffffff)
*   **Floating UI Elements:** `surface_bright` (#fff8f8) with Glassmorphism.

### The "Glass & Gradient" Rule
To achieve the "Pocket Planet" soul, never use flat color for major components. 
*   **Signature Gradient:** Linear 135° from `secondary` (#6833ea) to `primary` (#b41567). Use this for hero buttons and active states.
*   **Soft Glows:** Apply a 20px radial blur of `secondary_container` behind floating planet icons to create a "toy-like" aura.

---

## 3. Typography: Editorial Whimsy

We pair the structured playfulness of **Plus Jakarta Sans** with the approachable warmth of **Be Vietnam Pro**.

*   **Display (Plus Jakarta Sans):** Used for large "Planet Names" or "Greetings." The `display-lg` (3.5rem) scale is meant to feel oversized and confident.
*   **Headlines (Plus Jakarta Sans):** `headline-md` (1.75rem) provides clear, rhythmic signposting for gallery sections.
*   **Body (Be Vietnam Pro):** `body-lg` (1rem) is the workhorse. The high x-height of Be Vietnam Pro maintains readability even when placed over vibrant gradients.
*   **Labels (Plus Jakarta Sans):** `label-md` (0.75rem) should always be uppercase with +5% letter spacing to provide a "branded" feel to small UI controls.

---

## 4. Elevation & Depth: Tonal Layering

We do not use "shadows" in the traditional sense; we use **Ambient Diffusion.**

*   **The Layering Principle:** Depth is achieved by stacking `surface_container_lowest` on `surface_dim`. This creates a soft, natural lift without the "dirty" look of grey shadows.
*   **Ambient Shadows:** For floating postcards, use a shadow with a blur of 40px, 0px offset, and 6% opacity using the `on_surface` (#25181c) color. This mimics light bouncing off a soft surface.
*   **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use `outline_variant` (#e2bdc7) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** For overlays (like "Sticker Pickers"), use `surface_container_highest` at 80% opacity with a `backdrop-filter: blur(12px)`.

---

## 5. Components: Tactile & Toy-Like

### Buttons (The "Jewel" Controls)
*   **Primary:** A bold gradient from `secondary` to `primary`. Border-radius: `full` (9999px). On hover, the button should scale to 105% and gain a `secondary_container` glow.
*   **Secondary:** `primary_container` (#ffd9e3) background with `on_primary_container` text. No border.

### Postcard Cards
*   **Shape:** Use `rounded-xl` (3rem) for the outer container and `rounded-lg` (2rem) for inner image slots.
*   **Style:** No dividers. Separate the "Stamp Area" from the "Message Area" using a subtle color shift from `surface_container_lowest` to `surface_container_low`.

### Interactive "Toy" Controls
*   **Sliders:** Use an oversized `primary` thumb (24px) that feels like a physical marble. The track should be `surface_container_highest`.
*   **Chips:** Selection chips should use `secondary_fixed` (#e8deff). When active, they "pop" forward using a slightly darker `secondary_container` and a subtle inner glow.

### Input Fields
*   **Design:** Pills, not boxes. Use `surface_container_high` with no border. On focus, transition the background to `surface_container_lowest` and add a soft 4px `surface_tint` outer glow.

---

## 6. Do's and Don'ts

### Do:
*   **Overlap Elements:** Let a planet "sticker" slightly break the frame of a postcard to create depth.
*   **Use Generous Padding:** If you think there's enough white space, add 16px more. This system needs "air" to feel premium.
*   **Embrace Softness:** Use the `xl` (3rem) corner radius for main composer containers.

### Don't:
*   **No Pure Black:** Never use #000000. Use `on_surface` (#25181c) for high contrast.
*   **No Sharp Corners:** Any corner radius below `sm` (0.5rem) will break the "toy-like" immersion.
*   **No Default Shadows:** Avoid the "drop shadow" look. If it looks like a standard Material Design shadow, it’s too heavy. Increase the blur and lower the opacity.
*   **No Grid-Lock:** Avoid perfectly aligned columns in the gallery. Use slight vertical offsets (5-10px) between adjacent postcard cards to create a "scattered on a table" feel.

---

**Director's Final Note:**
The success of this system depends on the "squish." Every interaction should feel like it has weight and momentum. When a user clicks a card, it shouldn't just change state—it should feel like it's being pressed into a soft cushion. Stay whimsical, stay bold.```