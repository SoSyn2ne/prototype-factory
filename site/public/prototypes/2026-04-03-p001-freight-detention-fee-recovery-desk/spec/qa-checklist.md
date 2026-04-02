# QA checklist

## Happy path
- User lands on the desk and sees disputed shipments ranked by recoverable cash and filing urgency.
- User opens one shipment and reviews timeline evidence, supporting documents, and the recommended next claim action in one screen.
- User understands expected weekly recovered cash if top cases are pursued.

## Edge cases
- Cases with strong timeline evidence but missing signed rate documents.
- High-dollar disputes that have weak reimbursement confidence.
- Carriers with many small disputes that create noise in the queue.

## Acceptance verification
- Spec is clearly about detention and demurrage fee recovery rather than generic logistics analytics.
- All required UI sections are explicitly documented.
- Design direction is present and consistent with the Stitch prompt.
