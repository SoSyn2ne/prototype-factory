# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Prompt quality failures frequently come from ambiguous language.
- Safety constraints are often omitted when prompts are copied across teams.
- Deterministic, explainable lint findings are easier to trust than opaque scoring.
- The prototype must run without network dependency for internal review environments.

## ASSUMPTION
- Users prefer quick heuristics over deep NLP analysis for first-pass review.
- Three rule families (ambiguity, missing constraints, unsafe actions) cover the highest-value issues for MVP.
- Click-to-highlight findings will improve remediation speed versus static reports.
- A single numeric risk score helps triage which prompts need immediate edits.

## UNKNOWN
- What false-positive rate users will tolerate before ignoring warnings.
- Which additional constraints (beyond no secrets, no external messages, verify) teams consider mandatory.
- Whether risk scoring weights should be configurable per organization.
- How well the same heuristics generalize across domains (support, finance, devops, healthcare).
