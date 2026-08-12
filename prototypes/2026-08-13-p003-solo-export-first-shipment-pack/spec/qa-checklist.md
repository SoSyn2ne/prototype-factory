# QA checklist

## Happy path
- One-liner and target action understood within three seconds.
- Core flow works: Enter buyer and product details, choose Incoterms/payment terms, generate document checklist, flag trade risks, and export a shipment handoff pack.
- Output artifact can be saved or shared.

## Edge cases
- Empty, incomplete, conflicting, and blocked inputs have clear recovery.
- Long Korean/English text and small mobile widths do not overflow.
- Mock data is realistic and clearly non-production.

## Acceptance verification
- All required sections present: buyer inquiry intake; Incoterms chooser; document checklist; payment-risk flags; shipment timeline; forwarder handoff export.
- Exactly one design profile used: operator-dense.
- Theme and source references match meta.json and ideas.md.
- No custom demo exists in Phase A.

