# PRD — Mod Rollback Theater

## Product intent
Let first-time modders rehearse a change in a disposable copy and understand its blast radius before touching a game.

## Arrival / validation
Mod install guides and creator links. Validate whether users can identify conflicts and choose rollback without instruction.

## Core loop
Choose mock mod → inspect change map → resolve compatibility → sandbox launch → before/after reveal → keep or roll back → receipt.

## First screen / key screens
Two stage doors: Disposable Copy is lit and Real Install is locked. Change map, test console, reveal, rollback receipt.

## Interaction rules
Prototype never edits real files. Save-risk and anti-cheat warnings block unsafe paths.

## QA / risks
Missing dependency, version conflict, corrupted-save simulation, clean test, rollback. Game terms and false safety are risks.

## Development start prompt
```text
Build a desktop simulation with mock game folders, visual file blast radius, compatibility checks, sandbox launch theater, before/after reveal, rollback, and safety receipt.
```
