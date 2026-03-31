# QA checklist

## Happy path
- User opens the offboarding risk hero and sees which departures still have exposed AI seats.
- User selects a departing employee and reviews tools, shared spaces, and uploaded-file exposure.
- User completes the revocation checklist and confirms evidence in the audit timeline.

## Edge cases
- Contractors with partial access but no central identity record.
- Shared team workspaces that require ownership transfer before revocation.
- Departing users with personal API keys or shadow AI subscriptions.

## Acceptance verification
- Spec stays focused on AI-specific offboarding exposure.
- All required UI sections are explicitly documented.
- Design direction is included and consistent with the Stitch prompt.
