# QA checklist

## Happy path
- Enter product, audience, value prop, tone, forbidden words, max length.
- Switch between Headline and Primary Text tabs.
- Click Generate and see 12 variants with scores.
- Click a variant to copy it; see a "Copied" toast.
- Click Export CSV and paste into a spreadsheet; rows and columns are correct.

## Edge cases
- Forbidden words list contains spaces / commas / mixed case.
- Max length is very small (e.g., 20) — generator still outputs clipped but readable variants.
- Empty optional fields (tone/value prop) — generator still produces sane defaults.
- Product/audience includes punctuation — output remains readable.

## Acceptance verification
- Demo has **no external network dependencies** (no http/https URLs in HTML).
- Keyboard focus is visible and all inputs are labeled.
- Generated output respects max length and does not include forbidden words (case-insensitive).
