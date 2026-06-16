# QA checklist

## Happy path
- Open the Stitch-exported demo for p001.
- Confirm the first screen is the working app, not a marketing landing page.
- Confirm these sections exist: Dose panic header with risk state and next safest action; Prescription vs vial concentration intake; Syringe unit visualizer with mg/unit conversion and mismatch warnings; Side-effect timeline for nausea, vomiting, dehydration, itching, vision changes, and severe symptoms; Call-now card for clinician/pharmacy/poison center notes; Medication source confidence checklist for brand, compounded, telehealth, and damaged package; Family handoff summary for the person helping with the next injection.
- Confirm sample data matches: S1, S2.

## Edge cases
- Long labels and Korean/English mixed copy do not overflow.
- Empty or risky inputs show useful next actions.
- Urgent states are visible without overwhelming the assigned calm-consumer profile.

## Acceptance verification
- /home/sy/Downloads/stitch_drop/2026-06-17/p001/code.html exists after Stitch export.
- /home/sy/Downloads/stitch_drop/2026-06-17/p001/screen.png exists after Stitch export.
- The resulting PF ingest preserves the original Stitch environment as the main demo.
