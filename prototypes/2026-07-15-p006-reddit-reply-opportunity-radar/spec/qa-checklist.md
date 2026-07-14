# QA checklist

## Happy path
- First screen clearly states: Founders turn daily complaint threads into useful, non-spam replies and follow-up tasks.
- Shows target workflow for: B2B founders, indie hackers, agencies, and marketers using Reddit or forums for community-led demand discovery.
- Includes all required UI sections: thread inbox, intent classifier, pain quote cards, reply draft workspace, self-promo risk check, follow-up pipeline.
- Uses exactly one design profile: operator-dense.
- Includes a clear output artifact or decision state.

## Edge cases
- Empty or incomplete input state is visible.
- Risk, cost, conflict, or pressure states do not rely on color alone.
- Long labels fit on mobile and desktop.
- The UI does not become a marketing landing page.

## Acceptance verification
- Stitch export should produce /home/sy/Downloads/stitch_drop/2026-07-15/p006/code.html and screen.png.
- The exported screen should preserve the specified design direction and first-screen workflow.
