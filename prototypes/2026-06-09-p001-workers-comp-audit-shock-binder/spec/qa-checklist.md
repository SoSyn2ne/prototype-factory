# QA checklist

## Happy path
- Open the Stitch-generated prototype and confirm the first screen is the working app for Workers Comp Audit Shock Binder.
- Verify the primary workflow matches: A binder-style audit command room where owners upload payroll periods, subcontractor COIs, exemption certificates, class-code notes, lapse explanations, and disputed-audit evidence, then receive a shock estimate and evidence checklist.
- Confirm the required UI sections are visible or clearly represented.

## Edge cases
- Long labels and dates fit on mobile and desktop.
- Risk or deadline states have visible severity without overwhelming the layout.
- Sample data references the cited external signals without copying source text.

## Acceptance verification
- p001 is scaffolded with actual metadata, source signals, theme, design profile, and Stitch prompt.
- No placeholder bullets remain in spec files.
- Phase A does not include a custom implemented demo.
