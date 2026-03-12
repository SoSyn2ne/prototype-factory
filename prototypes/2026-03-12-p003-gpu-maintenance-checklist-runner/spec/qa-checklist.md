# QA checklist

## Happy path
- Open `demo/index.html` and confirm the page loads without external assets or console-blocking errors.
- Click `Start session` and verify the session status changes to active and the timer begins incrementing.
- Complete several checklist items, enter notes for at least two tasks, and tick at least one risk flag.
- Click `Generate log` and confirm the preview includes the session start time, generated time, elapsed time, selected risk flags, completed tasks, pending tasks, and notes.
- Use the download action and confirm a `.txt` file is offered with the same visible log content.
- Refresh the page and verify the draft state restores: active session, timer start, checked tasks, notes, and risk flags.

## Edge cases
- Generate a log before any tasks are completed and confirm the export still renders sensible empty-state sections.
- Reload the page mid-session and confirm the timer resumes from the original start timestamp instead of resetting.
- Enter multiline notes with punctuation and confirm they remain readable in both the UI and exported text file.
- Clear every risk flag and confirm the log shows an explicit `none selected` style output rather than a blank section.
- Mark all tasks complete and verify the progress summary reaches the full task count and the UI remains readable.
- Use a narrow viewport and confirm the layout stacks cleanly with no clipped controls or overlapping panels.

## Acceptance verification
- `Start session` exists and creates a visible active-session state with a live elapsed timer.
- The checklist is preloaded with 6 to 8 concrete GPU maintenance tasks, each showing an estimated duration.
- Each task has an independent completion checkbox and a notes field.
- A dedicated `Risk flags` section contains selectable incident/risk indicators that appear in the generated log.
- `Generate log` creates formatted text containing timestamps, completed state, and notes.
- A download action exports that generated log as a `.txt` file.
- Draft state persists through `localStorage` and restores on reload.
