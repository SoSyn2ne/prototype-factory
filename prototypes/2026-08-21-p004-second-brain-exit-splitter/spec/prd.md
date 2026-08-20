# PRD — Second-Brain Exit Splitter

## Problem
Separate portable career knowledge from company-confidential notes before changing jobs.

## Target user
Knowledge workers leaving a company with mixed personal/work notes

## Key UX
Drop note titles or a vault manifest, classify ownership with reasons, redact examples, and export separate personal and handoff packs.

## Required UI sections
- vault manifest import
- ownership decision lane
- confidentiality reason cards
- redaction preview
- company handoff pack
- personal portability receipt

## Design profile
- calm-consumer

## Theme
- career continuity / confidentiality

## Source signal references
- S6: Workplace StackExchange: workers ask how to move a personal second brain between companies without taking employer-confidential material. (https://workplace.stackexchange.com/questions/203617/moving-personal-notes-second-brain-between-companies)
- S7: Workplace StackExchange: workers want knowledge transfer without surrendering personal notes, exposing ownership and redaction ambiguity. (https://workplace.stackexchange.com/questions/203604/making-knowledge-transfer-without-giving-your-personal-notes)

## Reference pattern / twist
- Pattern: guided document separation
- Twist: Focuses on ownership boundaries and dual exports, not generic knowledge transfer.
- Small-group fit: Second-brain users have thousands of mixed notes and fear both losing craft knowledge and taking company secrets.
- Spread trigger: Portability receipt can support HR/offboarding discussion without exposing note content.

## Stitch prompt

```text
Build a responsive app prototype called "Second-Brain Exit Splitter" for knowledge workers changing companies. First screen: import a note-vault manifest and sort each note into personal craft, company handoff, redact-and-split, or do-not-export. Core interaction: classify with reason cards, preview redactions, resolve ambiguous notes, and export a company handoff pack plus a personal portability receipt. Required sections: manifest import, ownership lane, confidentiality reasons, redaction preview, dual export, receipt. Design direction: use the calm-consumer profile with warm neutral surfaces, generous reading space, one teal action accent, 10px controls, plain-language warnings, and clear empty/ambiguous/resolved states without legalistic intimidation.
```

## QA / screenshot criteria
- First screen communicates the core job in 3 seconds.
- All required sections and meaningful empty/error/success states appear.
- Exactly one design profile is used: calm-consumer.
- Desktop and mobile remain usable.
