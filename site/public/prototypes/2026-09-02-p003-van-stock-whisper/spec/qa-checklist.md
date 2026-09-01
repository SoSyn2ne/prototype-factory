# QA checklist — Van Stock Whisper

## Happy path
- Complete: At job close, tap likely parts, adjust quantity, and confirm inventory plus invoice deltas.
- Verify all sections: active job; likely-parts strip; quantity capture; van stock delta; invoice delta; exceptions; replenishment.

## Edge cases
- Show empty, incomplete, error, conflict, and success states with realistic data.
- Preserve the `field-ops` direction and 수익 방어 theme.

## Acceptance verification
- Glove-friendly 52px controls work offline and accidental double taps are recoverable.
- Cite S2, S9; contain no placeholder copy; create no custom demo in Phase A.
