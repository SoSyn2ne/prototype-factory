# QA checklist

## Happy path
- First screen clearly states: Coding teams see hidden context, latency, and dollar burn before they let an AI agent run.
- Shows target workflow for: Engineering leads, AI-agent operators, and devtool founders comparing coding-agent runs across repositories and toolchains.
- Includes all required UI sections: task intake, context payload meter, tool comparison strip, latency and cost forecast, repo touch preview, run receipt export.
- Uses exactly one design profile: operator-dense.
- Includes a clear output artifact or decision state.

## Edge cases
- Empty or incomplete input state is visible.
- Risk, cost, conflict, or pressure states do not rely on color alone.
- Long labels fit on mobile and desktop.
- The UI does not become a marketing landing page.

## Acceptance verification
- Stitch export should produce /home/sy/Downloads/stitch_drop/2026-07-15/p001/code.html and screen.png.
- The exported screen should preserve the specified design direction and first-screen workflow.
