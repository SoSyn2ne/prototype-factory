# QA checklist

## Happy path
- First screen clearly states: Wedding guests fit flights, outfits, gifts, PTO, and guilt into a budget block puzzle before the season overflows.
- Shows target workflow for: Wedding guests, friend groups, couples attending multiple events, and social-budget content creators.
- Includes all required UI sections: wedding event queue, season budget grid, trip-stack blocks, outfit and gift reuse lane, guilt meter, plan/decline card export.
- Uses exactly one design profile: financial-analyst.
- Includes a clear output artifact or decision state.

## Edge cases
- Empty or incomplete input state is visible.
- Risk, cost, conflict, or pressure states do not rely on color alone.
- Long labels fit on mobile and desktop.
- The UI does not become a marketing landing page.

## Acceptance verification
- Stitch export should produce /home/sy/Downloads/stitch_drop/2026-07-15/p008/code.html and screen.png.
- The exported screen should preserve the specified design direction and first-screen workflow.
