# QA checklist

## Happy path
- First screen states the job and primary action.
- Core interaction runs from input through final artifact.
- Required sections: home map; live clue trail; device suspect cards; family claim round; quarantine choice; case replay.

## Edge cases
- Empty input, incomplete input, blocked action, error, retry, and completed state are distinct.
- Long labels and mobile width do not hide the primary action.
- Sample data is clearly labeled.

## Acceptance verification
- Exactly one design profile: playful-experimental.
- Theme matches: dark detective board, one electric-lime accent, chunky clue cards, 12px controls, theatrical reveals with explicit simulated data.
- Sources S08, S11 resolve to the daily evidence list.
- No custom demo is implemented during Phase A.
