# QA checklist

## Happy path
- First screen states the job and primary action.
- Core interaction runs from input through final artifact.
- Required sections: disruption intake; entrance verification; staff check relay; customer access card; channel publish checklist; expiry receipt.

## Edge cases
- Empty input, incomplete input, blocked action, error, retry, and completed state are distinct.
- Long labels and mobile width do not hide the primary action.
- Sample data is clearly labeled.

## Acceptance verification
- Exactly one design profile: field-ops.
- Theme matches: high-contrast street map, one orange action accent, 48px mobile controls, bold verified/stale states, no political sentiment scoring.
- Sources S05, S12 resolve to the daily evidence list.
- No custom demo is implemented during Phase A.
