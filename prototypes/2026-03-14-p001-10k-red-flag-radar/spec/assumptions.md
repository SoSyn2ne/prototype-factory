# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- 10-K risk language repeats across companies (e.g., “going concern”, “material weakness”, “covenant”).
- People doing diligence commonly build private checklists/spreadsheets.
- False positives are acceptable if the tool is clearly “triage”, not “verdict”.
- Manual paste is viable for early exploration (no EDGAR integration needed).
- A short, exportable checklist is more useful than a long narrative summary.

## ASSUMPTION
- Users will trust a tool that shows **evidence** (highlighted matches) over one that only outputs a score.
- Grouping signals into 5 buckets is “good enough” for a first-pass decision.
- Phrase + weight heuristics can approximate perceived risk intensity.
- A “copy checklist” output fits existing workflows (Notion, Obsidian, email, iMessage).
- The biggest value is catching *omissions* (things the reader forgot to check), not finding novel facts.
- Users will customize phrase libraries for their niche (semis, SaaS, biotech).
- Simple on-device logic is preferable to remote AI for privacy + speed.

## UNKNOWN
- Which signal categories matter most by sector (financials vs semis vs biotech).
- What scoring representation users find credible (0–100, badges, or “risk heat”).
- Whether phrase-based scanning is too noisy without context windows.
- How often users would maintain/customize the phrase library.
- Whether the tool should output “questions to ask” vs “documents to check”.
- If highlighting causes cognitive overload vs helps comprehension.
