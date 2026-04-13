# QA checklist

## Happy path
- Coordinator lands on the desk and sees which refill cases are most likely to fail today.
- Coordinator opens one case and understands whether the risk is shipping, contact, or storage readiness.
- Coordinator assigns an intervention and returns to the queue with confidence.

## Edge cases
- Patient has confirmed contact but no valid cold-storage confirmation.
- Carrier delay pushes a case from safe to risky inside the same day.
- Multiple patients share a geographic disruption event with different therapy urgency.

## Acceptance verification
- Queue ranking clearly reflects shipping urgency and operational value.
- Patient case detail reveals the blocking step immediately.
- The interface feels like a working desk, not a passive report.
