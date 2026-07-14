# QA checklist

## Happy path
- First screen clearly states: Repeat-service operators convert monthly clients into card-on-file billing without sounding pushy.
- Shows target workflow for: Commercial cleaners, lawn-care crews, mobile detailers, maintenance vendors, and other repeat local-service businesses.
- Includes all required UI sections: client account list, invoice-chase baseline, autopay term builder, consent script composer, rollout calendar, enrolled revenue tracker.
- Uses exactly one design profile: calm-consumer.
- Includes a clear output artifact or decision state.

## Edge cases
- Empty or incomplete input state is visible.
- Risk, cost, conflict, or pressure states do not rely on color alone.
- Long labels fit on mobile and desktop.
- The UI does not become a marketing landing page.

## Acceptance verification
- Stitch export should produce /home/sy/Downloads/stitch_drop/2026-07-15/p003/code.html and screen.png.
- The exported screen should preserve the specified design direction and first-screen workflow.
