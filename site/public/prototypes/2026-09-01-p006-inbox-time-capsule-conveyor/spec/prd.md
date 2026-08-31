# PRD — Inbox Time-Capsule Conveyor

## Problem and target user
Retiring professionals, archivists, and small firms need decades of mail to remain portable and searchable outside one vendor.

## Arrival, business route, and core loop
Import an export manifest, move each year through attachment capture, open packaging, indexing, checksum, and a random restore drill, then seal. Validate as a guided archival service.

## First screen and key screens
A 25-year conveyor with red unverified years. Screens: intake, conveyor, exceptions, manifest, restore drill, labels, receipt.

## Interaction and output
Random message and attachment recovery must succeed before printing storage labels. Output is a checksum manifest and seal receipt.

## Design profile, theme, and sources
- Profile: `field-ops`
- Theme: 자산 방어
- Sources: S10, S3

## Constraints and non-goals
Use mock mailbox metadata; no email provider login, cloud upload, or archival guarantee.

## Success and QA
An operator sees unfinished years instantly and completes one restore; interruption, missing attachment, mismatch, rebuild, fail, and sealed states render.

## Development start prompt
Build p006 from its full Stitch prompt in `daily/2026-09-01/ideas.md`, emphasizing physical labels and a provable restore drill.
