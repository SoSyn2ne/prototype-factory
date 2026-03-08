# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- GPU incidents often have clear signatures (thermal > X°C, throttle flags, driver Xid messages, OOM).
- Operators frequently share incident summaries as text (Discord/Slack/Telegram) and need clean exports.

## ASSUMPTION
- "Paste logs" is the fastest input method for the target user.
- Simple heuristics (thresholds + keyword detection) are enough to locate the interesting window.
- Annotation + export is a meaningful unit of value even without integrations.

## UNKNOWN
- Which log formats dominate for the target users (nvidia-smi, journalctl, Docker logs, ML frameworks).
- Best default thresholds (temp/utilization) for different GPUs.
- Whether users want multi-source lanes (separate tracks for OS/GPU/App) instead of one merged timeline.
