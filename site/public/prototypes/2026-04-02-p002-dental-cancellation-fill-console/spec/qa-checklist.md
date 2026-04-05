# QA checklist

## Happy path
- User sees open chair-time ranked by urgency and expected revenue impact.
- User opens a slot and reviews the best-fit waitlist patients with enough context to act.
- User understands the recommended outreach action and expected fill-rate contribution.

## Edge cases
- Last-minute cancellations for specialized providers.
- Candidate patients with partial availability or incomplete preference data.
- Multiple open slots competing for the same waitlist patient pool.

## Acceptance verification
- Spec is clearly about cancellation refill operations rather than generic clinic scheduling.
- All required UI sections are explicitly documented.
- Design direction is present and consistent with the Stitch prompt.
