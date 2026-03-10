# Falsification checklist (5–7)

1. Do users distrust heuristic classification without deeper context (job config, GPU model)?
2. Do false positives overwhelm the output, making it noisier than manual scanning?
3. Are the suggested next actions too generic to be useful?
4. Does performance degrade with large logs (e.g., >500k chars)?
5. Do users avoid pasting logs due to privacy concerns even though it’s local?
6. Do real incidents require correlation across multiple files (dmesg + app logs), making single-paste insufficient?
7. Would a simple grep cheat-sheet be equally effective?
