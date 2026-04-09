# QA checklist

## Happy path
- User can review Supplier Rebate Missed-Claim Console primary KPIs and understand the top action queue immediately.
- Selected record view combines context needed for the core UX: Scan rebate dollars at risk, open one supplier program, and see threshold progress, missing proof, and the next claim action without spreadsheet hopping.

## Edge cases
- Empty or low-data states still preserve hierarchy and suggested next steps.
- Dense modules remain readable without implementation-grade data integrations.

## Acceptance verification
- Design profile is recorded in meta.json and reflected in the PRD.
- Required UI sections match the documented concept and Stitch prompt.
- Demo can remain stubbed for Phase A; specs must be concrete and non-placeholder.
