# QA checklist

## Happy path
- Review the morning queue and identify the top 3 at-risk returns immediately.
- Open one request, understand the recommended save action, and confirm why it is suggested.
- Check the projected margin saved after acting on the highest-priority cases.

## Edge cases
- Damaged or fraud-flagged items need exception handling without breaking layout.
- Low-value orders should not visually compete with high-margin saves.
- SLA countdowns must remain legible even when multiple requests are urgent.

## Acceptance verification
- Core sections from the idea brief are present and clearly labeled.
- The demo stub reflects title/one-liner correctly and the spec explains the product without placeholders.
- The Stitch prompt can be pasted directly into Stitch with no extra editing.
