# QA checklist

## Happy path
- Paste a short thesis (3–8 bullets) and pick a context.
- See 10 red‑team questions grouped by category.
- For each question, see “what evidence would answer this?” prompts.
- Mark at least 3 items as Unknown.
- Export the red‑team pack as Markdown.

## Edge cases
- Very short thesis (1 sentence) → still produces concrete questions, but requests missing inputs.
- Overlong thesis (1,000+ words) → asks user to compress to key claims first.
- Pure narrative thesis with no metrics → nudges to define measurable signals.
- Multi-claim thesis → splits into claim cards and generates questions per claim.

## Acceptance verification
- Questions reference the thesis details (ticker/product, timeframe, key metrics) rather than generic platitudes.
- At least 5/10 questions are falsifiable (clear observation would disprove).
- UI remains readable on mobile (no overflow, good spacing).
- Exported Markdown contains: thesis, categories, questions, and unanswered list.
