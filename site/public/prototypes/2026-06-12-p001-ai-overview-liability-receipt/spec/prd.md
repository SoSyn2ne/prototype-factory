# PRD — AI Overview Liability Receipt

## Problem
- A reputation-defense room that helps small publishers and brands capture false AI-search claims before screenshots vanish.
- Trigger moment: an AI Overview or chatbot answer publicly misstates the user or brand.
- The prototype must make the output artifact visible quickly: timestamped liability receipt builder.

## Target user
- Small publishers, local businesses, agencies, founders, and professionals whose names, products, citations, or claims appear incorrectly in AI search answers.

## Key UX
- Paste an AI-search answer or upload a screenshot, mark false claims, attach source-of-truth links, assign harm level, and generate a dated correction/cease-and-desist evidence receipt.

## Required UI sections
- AI answer capture header
- False-claim highlighter
- Source-of-truth evidence rail
- Harm and visibility score
- Correction request composer
- Legal review memo preview
- Citation watchlist
- Dated receipt export

## Assigned design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S1 - Atlantic, AI search “sloptimization” pressure, Jun 2026: https://www.theatlantic.com/technology/2026/06/google-search-ai-optimization/687495/
- S2 - PC Gamer, German court liability for false Google AI Overview claims, Jun 2026: https://www.pcgamer.com/software/ai/google-claims-most-users-know-information-generated-with-ai-should-not-be-blindly-trusted-but-a-court-ruled-its-still-liable-for-false-claims-made-in-ai-overview/

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no external LLM APIs or paid data APIs in Phase A.
- Platform: responsive web app unless the prompt explicitly biases mobile-first.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not provide legal, medical, tax, immigration, or financial advice as a final authority.
- Do not claim source signals prove market size.

## Success metrics
- Viewer can identify the target user, trigger, pressure, and output artifact within 10 seconds.
- The assigned design profile is visually implied by the Stitch prompt.
- The UI is not a generic dashboard; it centers the named mechanic.

## Stitch prompt
Create a responsive web app called "AI Overview Liability Receipt" for small publishers, local businesses, agencies, founders, and professionals whose names, products, citations, or claims appear incorrectly in AI search answers. The app is based on observed user pull: operators already screenshot AI search answers, monitor citations, preserve source-of-truth links, and escalate false claims through correction or legal channels. The app should use a timestamped liability receipt mechanic around the trigger moment "an AI Overview or chatbot answer publicly misstates the user or brand" and make the first screen communicate "Capture the false answer before it changes." Use the user's own language: "I need proof of what the AI result said before it changes." Build the core workflow around screenshots, query text, answer text, false-claim highlights, true-source links, visibility notes, and harm level, and produce a dated correction packet plus legal-review memo. Required sections: AI answer capture header, false-claim highlighter, source-of-truth evidence rail, harm and visibility score, correction request composer, legal review memo preview, citation watchlist, and dated receipt export. Emotional pressure to make visible: 자산 방어, public reputation risk, lost leads, and the shame of being falsely summarized by a machine. Design direction: use the `operator-dense` profile with compact legal-ops panels, hard timestamp chips, severe evidence states, and restrained red correction accents. Avoid generic dashboard framing; make the main interaction feel like stamping a defensible receipt for a live AI-search mistake.
