# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- The prototype runs entirely in-browser with no backend services.
- The smoke test requires exactly three pricing tiers in the demo.
- Inputs required by the demo are product name, target persona, and value metric.
- The test link format includes a `variant` query parameter and UTM fields.
- The artifact is intentionally design-first and does not include production billing logic.

## ASSUMPTION
- A simple `Starter / Pro / Team` framing is understandable for most B2B-style offers.
- Users will accept annual pricing shown as discounted monthly equivalent.
- A one-panel tracking plan is enough for early validation discussion.
- Founders will manually distribute links rather than requiring automated split testing.
- Input fields can remain lightweight without deep validation for first-pass use.

## UNKNOWN
- Which value metrics users trust most by category (seats, projects, usage units).
- Whether visitors react more to absolute price points or perceived metric fairness.
- What annual discount level preserves credibility without hurting conversion intent.
- Which UTM schema teams already use and whether this format matches it.
- How often clipboard permissions fail in real operator environments.
