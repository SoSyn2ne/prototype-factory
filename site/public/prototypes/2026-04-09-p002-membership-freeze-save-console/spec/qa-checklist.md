# QA checklist

## Happy path
- The at-risk member queue clearly sorts by freeze likelihood and potential revenue saved.
- Member detail views connect attendance, billing issues, unused sessions, and coach notes without hiding context.
- Recommended actions are visible and tied to concrete reasons.

## Edge cases
- New members with little history are labeled as low-confidence rather than mis-ranked.
- Members on legitimate pause plans do not pollute the rescue queue.
- Billing-only issues can surface even when attendance looks healthy.

## Acceptance verification
- No placeholder bullets remain in spec files.
- Design profile is recorded in meta.json and reflected in the PRD.
- Demo stays stubbed, but the page structure should support the described retention workflow.
