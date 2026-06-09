# PRD — AI Cheating Parent Conference Kit

## Problem
- Teachers face AI-cheating suspicion without reliable detector evidence, while parents and admins may challenge accusations.
- Existing teacher workarounds focus on catching students, but the harder product need is fair documentation, neutral wording, and restoration paths.
- The product must reduce escalation by separating facts, assumptions, questions, and next steps.

## Target user
- Middle-school, high-school, and early college teachers who face AI-cheating suspicion but need to avoid false accusations and parent escalation.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no paid APIs or external LLM calls in this phase.
- Platform: responsive web app concept for teacher laptop use before parent/admin meetings.

## Non-goals
- No AI detector or plagiarism verdict.
- No school-policy replacement.
- No custom demo implementation in Phase A.

## Success metrics
- Teacher can label evidence as fact, pattern, assumption, or missing before generating a packet.
- Parent script sounds neutral and avoids overclaiming.
- Student recall check and restoration plan are visible in the main workflow.

## Notes
- Assigned design profile: calm-consumer.
- Theme: 사교육.
- Source signals: S7, S8 from daily/2026-06-10/ideas.md.
- Stitch prompt: Create a responsive web app prototype called "AI Cheating Parent Conference Kit" for teachers who need calm, defensible documentation when they suspect AI-assisted cheating. Build a guided case workspace with assignment intake, suspicious passage highlights, writing-history notes, evidence type sorter, student recall check builder, parent conference script, admin-copy mode, consequence matrix, false-positive caution panel, student restoration plan, and exportable meeting packet. Use realistic sample content from a high-school writing assignment where the teacher is unsure whether the evidence is strong enough. Design direction: follow the calm-consumer profile with reassuring guidance-friendly styling, soft neutral surfaces, low-stress step flow, and one gentle accent for the next best action. The main interaction should help the teacher separate facts from assumptions, choose a fair recall check, and generate a parent-safe packet without sounding accusatory.
