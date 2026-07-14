# QA checklist

## Happy path
- First screen clearly states: Resident committees simulate parking rules before a new allocation policy turns into a complaint war.
- Shows target workflow for: Korean apartment resident councils, property managers, and community moderators dealing with parking scarcity and fairness disputes.
- Includes all required UI sections: parking inventory map, rule scenario tabs, resident impact table, complaint risk meter, notice preview, objection log.
- Uses exactly one design profile: field-ops.
- Includes a clear output artifact or decision state.

## Edge cases
- Empty or incomplete input state is visible.
- Risk, cost, conflict, or pressure states do not rely on color alone.
- Long labels fit on mobile and desktop.
- The UI does not become a marketing landing page.

## Acceptance verification
- Stitch export should produce /home/sy/Downloads/stitch_drop/2026-07-15/p005/code.html and screen.png.
- The exported screen should preserve the specified design direction and first-screen workflow.
