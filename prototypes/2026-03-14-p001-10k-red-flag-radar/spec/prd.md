# PRD — 10-K Red Flag Radar

## Problem
Reading 10-Ks is slow, and the “risk” is rarely in one place: it’s scattered across Risk Factors, MD&A, Footnotes, and Legal Proceedings. Solo investors/operators often miss repeat patterns (going-concern language, customer concentration, covenant pressure) because they don’t have a tight checklist while scanning.

This prototype is a **manual paste → fast triage** tool: paste excerpts, surface likely red-flag phrases, and output a clean checklist you can reuse.

## Target user
- Solo investor / operator doing quick diligence on a US-listed company.
- Wants a **repeatable** “what should I verify next?” checklist.
- Comfortable pasting text snippets (not a full 10-K ingestion pipeline).

## Constraints
- Time: first useful output in **≤ 60 seconds** from paste.
- Budget: $0.
- Platform: offline-capable browser UI (static demo).
- Input: **manual paste** only in this prototype.

## Non-goals
- Automated EDGAR fetching or parsing full filings.
- Claiming facts about a company (no “AI says this is fraud”).
- Replacing professional accounting/legal advice.

## Success metrics
- A user can paste an excerpt and get:
  - a **category score** (0–100-ish) + top matched signals
  - a **next-step checklist** (verifications to do)
  - an export/copy output usable in notes
- “Did I miss anything obvious?” anxiety reduced (subjective, but testable).

## User flow (happy path)
1) Paste 10-K excerpt(s) into the text area.
2) Click **Scan**.
3) Review category buckets (Liquidity / Concentration / Accounting / Legal-Reg / Outlook).
4) Toggle highlighting to inspect evidence in the original text.
5) Copy/export the generated checklist.

## Key UI components
- Text input: multi-paragraph paste.
- Signal library: editable phrase list (add/remove) with category + weight.
- Scan results:
  - category cards with scores and matched phrases
  - “Evidence” view (original text with optional highlighting)
- Output:
  - checklist grouped by category
  - Copy-to-clipboard

## Notes
- Scoring is heuristic: (matched phrase count × weight) capped per category.
- The point is speed + structure, not correctness.
