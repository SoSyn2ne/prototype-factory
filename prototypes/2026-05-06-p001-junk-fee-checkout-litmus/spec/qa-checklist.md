# QA checklist — Junk Fee Checkout Litmus

## Happy path
- User enters the relevant inputs described in Key UX.
- UI guides the user through all required sections.
- User reaches a clear exported artifact, verdict, memo, report, or receipt.

## Edge cases
- Empty or vague input still shows sample guidance.
- Risky claims are framed as signals and prompts, not final professional advice.
- Mobile/narrow viewport keeps the core decision path readable.

## Acceptance verification
- meta.json includes targetUser, keyUx, requiredUiSections, designProfile, theme, searchSignals, and stitchPrompt.
- spec/prd.md contains the complete idea text, signals, design profile, theme, and full Stitch prompt.
- daily/2026-05-06/ideas.md lists p001~p004 and the drop folder contract.
