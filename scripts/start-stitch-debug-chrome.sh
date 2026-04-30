#!/usr/bin/env bash
set -euo pipefail
PROFILE_DIR="${STITCH_CHROME_PROFILE:-$HOME/.openclaw/chrome-stitch-debug}"
mkdir -p "$PROFILE_DIR"
exec /opt/google/chrome/chrome \
  --remote-debugging-address=127.0.0.1 \
  --remote-debugging-port=9222 \
  --user-data-dir="$PROFILE_DIR" \
  --no-first-run \
  --new-window "https://stitch.withgoogle.com/"
