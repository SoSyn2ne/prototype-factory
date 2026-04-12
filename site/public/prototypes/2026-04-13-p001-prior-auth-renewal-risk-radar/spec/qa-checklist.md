# QA checklist

## Happy path
- User can identify the highest-risk renewal case from the main queue in one scan.
- User can open a case and see deadline, missing document, payer status, and owner assignment without ambiguity.
- User can understand which cohort is creating the most therapy-at-risk exposure.

## Edge cases
- Multiple missing documents exist for the same case.
- Payer deadline is unknown but refill date is near.
- Ownership changed recently and follow-up history is partial.

## Acceptance verification
- Meta and spec files use the same title, one-liner, target user, design profile, and UI sections.
- Spec makes the decision surface desktop-first and ops-centric.
- Demo remains stubbed and no custom implementation scope is implied.
