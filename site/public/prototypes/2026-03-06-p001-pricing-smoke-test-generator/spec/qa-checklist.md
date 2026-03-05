# QA checklist

## Happy path
- Enter valid product name, persona, and value metric.
- Click `Generate 3 variants` and verify three tier cards render.
- Confirm each card includes tier name, price, and value metric line.
- Toggle `Monthly` and `Annual` and verify all prices update instantly.
- Select a tier card and verify the tracking plan panel updates for that tier.
- Click `Copy UTM link` and confirm success message appears.

## Edge cases
- Empty input fields: generator should block and show inline guidance.
- Very long text inputs: layout remains stable and text wraps without overflow.
- Clipboard API unavailable: fallback copy path attempts `execCommand('copy')`.
- Toggle before generation: no JS errors, and generated cards use current toggle state.
- Regenerate after edits: old cards are replaced cleanly and first card is selected.

## Acceptance verification
- No placeholder copy remains in README/spec files.
- `spec/prd.md` includes: problem, target user, constraints, non-goals, success metrics, core workflow, risks/unknowns.
- `spec/assumptions.md` includes KNOWN/ASSUMPTION/UNKNOWN with at least 4 bullets each.
- `spec/falsification.md` contains 5-7 concrete falsification questions.
- Demo uses only local vanilla HTML/CSS/JS with no CDN/network calls.
- Demo includes required interactions: generate variants, monthly/annual toggle, copy UTM link fallback, and tracking-plan update by selected variant.
