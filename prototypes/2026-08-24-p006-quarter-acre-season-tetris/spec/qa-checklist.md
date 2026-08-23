# QA checklist

## Happy path
- First screen states the job and primary action.
- Core interaction runs from input through final artifact.
- Required sections: yard scan; season board; crop tile tray; constraint reactions; harvest chain; shareable garden card.

## Edge cases
- Empty input, incomplete input, blocked action, error, retry, and completed state are distinct.
- Long labels and mobile width do not hide the primary action.
- Sample data is clearly labeled.

## Acceptance verification
- Exactly one design profile: playful-experimental.
- Theme matches: paper garden board, one tomato-red accent, chunky draggable tiles, playful 14px corners, instant undo and funny crop-failure states.
- Sources S06 resolve to the daily evidence list.
- No custom demo is implemented during Phase A.
